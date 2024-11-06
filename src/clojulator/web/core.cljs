(ns clojulator.web.core
  (:require
   [clojulator.calculator.core :as calc]
   [clojulator.web.validation :as v]
   [replicant.alias :as ra]
   [replicant.dom :as r]))

(declare render!)

;; Private State
(defonce ^:private state! (atom {:state/history [0 0 0] ; Default to zero for memory values
                                 :state/last-expression nil
                                 :state/value nil
                                 :state/display ""
                                 :state/validation-state :validation/start
                                 :state/alert {:alert/message ""
                                               :alert/visble false
                                               :alert/timeout-id nil}}))

;; Event Handlers
(defn- trigger-alert!
  [timeout-id timeout-value event]
  (when timeout-id
    (js/clearTimeout timeout-id))
  (let [new-timeout-id (js/setTimeout (fn [] (apply swap! state! assoc-in event)) timeout-value)]
    [[:state/alert :alert/timeout-id] new-timeout-id]))

(defn- handle-calculate
  [db]
  (let [expression (:state/display db)
        new-db (calc/calculate db expression)
        {:state/keys [value error history]} new-db]
    (if-not error
      [[:db/assoc
        :state/display (str value)
        :state/last-expression expression
        :state/history history
        :state/validation-state :validation/after-calculate]]
      [[:db/assoc
        :state/display error
        :state/last-expression nil
        :state/validation-state :validation/start]])))

(defn- handle-input
  [db input]
  (let [current-validation-state (:state/validation-state db)
        next-validation-state (v/validate-user-input db input)
        new-display (if (or (= current-validation-state :validation/start)
                            (and (= current-validation-state :validation/after-calculate)
                                 (number? input)))
                      (str input)
                      (str (:state/display db) input))]
    (if (not= next-validation-state :validation/invalid)
      [[:db/assoc
        :state/validation-state next-validation-state
        :state/display new-display]]
      [[:db/assoc
        :state/alert
        {:alert/message (str "Input '" input "' resulted in an invalid expression.")
         :alert/visible true}]
       [:fx/timeout
        (get-in db [:state/alert :alert/timeout-id])
        3000
        [[:state/alert :alert/visisble] false]]])))

(defn- handle-clear
  []
  [[:db/assoc
    :state/display ""
    :state/last-expression nil
    :state/validation-state :validation/start]])

(defn- process-action
  [db action]
  (let [[op input] action]
    (case op
      :api/calculate (handle-calculate db)
      :display/clear (handle-clear)
      :display/update (handle-input db input))))

(defn- event-handler
  [_ action]
  (doseq [[id & args] (process-action @state! action)]
    (println "Event: " id "\nArgs: " args)
    (case id
      :db/assoc (apply swap! state! assoc args)
      :fx/timeout (->> args
                       (apply trigger-alert!)
                       (apply swap! state! assoc-in))))
  (render! @state!))

;; Components

(ra/defalias user-alert
  [{:state/keys [alert]}]
  [:div
   {:class ["fixed" "bottom-1/4" "left-1/2" "transform" "-translate-x-1/2" "mb-4"
            "bg-red-100" "border-2" "border-red-500" "text-red-700"
            "px-4" "py-3" "rounded-lg" "shadow-lg" "transition" "ease-linear" "duration-500"]
    :role "alert"}
   [:p {:class "font-bold"} "Error!"]
   [:p {:class "text-sm"} (:alert/message alert)]])

(ra/defalias header
  []
  [:div.header
   {:class "text-center"}
   [:h1 "Welcome to Clojulator!"]
   [:h4 "A calculator written in Clojure"]])

(ra/defalias display
  [{:state/keys [last-expression value display]}]
  [:div
   {:class ["w-full" "h-16" "sm:h-28" "bg-white" "border-2" "border-blue-400" "rounded-lg" "mt-5" "md:mt-0" "flex" "flex-col" "justify-evenly" "items-end" "pr-2" "border-blue-500" "text-right"]}
   [:div
    [:div
     {:class "text-slate-600/50"
      :id "previous-expression"} (cond
                                   last-expression (str last-expression " =")
                                   value (str "Ans = " value)
                                   :else "")]]
   [:div
    {:id "current-display"
     :class ["text-2xl" "md:text-3xl" "font-semibold"]} display]])

(ra/defalias symbol-keys
  []
  (let [operators ["-" "+" "/" "*" "%" "^" "(" ")"]]
    [:div
     {:class ["basic-operations" "col-span-3" "grid" "grid-cols-2" "[&>*]:py-5" "[&>*]:px-2.5" "[&>*]:sm:px-6" "gap-2" "[&>*:hover]:bg-blue-900" "[&>*]:rounded" "[&>*:hover]:text-white" "[&>*:active]:scale-90"]}
     [:button {:class ["col-span-2" "bg-slate-300"]
               :on {:click [:display/clear]}} "CLR"]
     (map #(vector :button {:class "bg-slate-300"
                            :on {:click [:display/update %]}} %) operators)]))

(ra/defalias numeric-keys
  [{:state/keys [history]}]
  (let [numbers [7 8 9 4 5 6 1 2 3 0 "."]]
    [:div
     {:class ["number" "mr-2" "col-span-9" "grid" "grid-cols-3" "gap-2" "[&>*:hover]:bg-blue-900" "[&>*]:rounded" "[&>*:hover]:text-white" "[&>*:active]:scale-90"]}
     (map (fn [label value]
            [:div {:class ["relative" "group"]}
             [:button {:class ["w-full" "h-full" "bg-slate-300" "rounded" "hover:bg-blue-900" "hover:text-white"] :on {:click [:display/update value]}} label]
             [:div {:class ["absolute" "bottom-full" "mb-2" "left-1/2" "w-full"
                            "transform" "-translate-x-1/2" "bg-gray-800"
                            "text-white" "text-xs" "rounded" "py-1" "px-2"
                            "opacity-0" "group-hover:opacity-100"
                            "transition-opacity" "duration-200"]} (str label " = " value)]]) ["M1" "M2" "M3"] history)
     (map #(vector :button {:class "bg-slate-100" :on {:click [:display/update %]}} %) numbers)
     [:button {:class ["bg-[#3651c4]" "text-white"]
               :on {:click [:api/calculate]}} "="]]))

(ra/defalias keypad
  [data]
  [:div
   {:class ["bg-white" "text-xl" "w-full" "p-1" "rounded-lg" "grid" "grid-cols-12"]}
   [numeric-keys data]
   [symbol-keys]])

(ra/defalias calculator
  [data]
  [:div
   {:class ["flex" "flex-col" "items-center" "gap-3" "font-bold"]}
   [display data]
   [keypad data]])

;; Views

(defn index
  [data]
  [:div
   {:class ["bg-slate-400" "flex" "flex-col" "items-center" "min-h-screen"]}
   [:main
    {:class ["w-full" "max-w-lg" "select-none" "px-4" "md:px-0"]}
    [header]
    [calculator data]
    (when (get-in data [:state/alert :alert/visible])
      [user-alert data
       {:replicant/mounting {:style {:bottom "-100%"}}
        :replicant/unmounting {:style {:bottom "-100%"}}}])]])

;; Entry Point

(defn- render! [state]
  (let [root (js/document.getElementById "app")]
    (r/render root (index state))))

(defn ^:export main []
  (r/set-dispatch! event-handler)
  (render! @state!))
