(ns clojulator.web.core
  (:require
   [clojulator.calculator.core :as calc]
   [replicant.alias :as ra]
   [replicant.dom :as r]))

;; Private State
(defonce ^:private state (atom {:state/history [0 0 0] ; Default to zero for memory values
                                :state/value nil
                                :state/display ""
                                :state/validation-state :validation/start
                                :state/alert {:alert/message ""
                                              :alert/visble false
                                              :alert/timeout-id nil}}))

;; User Input Validation
(defn- validate-user-input
  "Given an input, returns the next validation state."
  [{:state/keys [validation-state display]} input]
  (case validation-state
    :validation/start
    (cond
      (= input "(")   :validation/after-open-paren
      (= input "-")   :validation/after-unary-operator
      (number? input) :validation/after-number
      :else           :validation/invalid)
    :validation/after-number
    (cond
      (#{"+" "-" "*" "/" "^" "%"} input)                :validation/after-operator
      (= input ")")                                     :validation/after-close-paren
      (and (= input ".") (not (re-find #"\." display))) :validation/after-decimal
      (number? input)                                   :validation/after-number
      :else                                             :validation/invalid)
    :validation/after-decimal
    (if (number? input)
      :validation/after-number
      :validation/invalid)
    :validation/after-unary-operator
    (cond
      (= input "(")   :validation/after-open-paren
      (number? input) :validation/after-number
      :else           :validation/invalid)
    :validation/after-operator
    (cond
      (= input "(")   :validation/after-open-paren
      (= input "-")   :validation/after-unary-operator
      (number? input) :validation/after-number)
    :validation/after-open-paren
    (cond
      (= input "-")        :validation/after-unary-operator
      (number? input)      :validation/after-number
      (= input "(")        :validation/after-open-paren
      :else                :validation/invalid)
    :validation/after-close-paren
    (if (#{"+" "-" "*" "/" "^" "%"} input)
      :validation/after-operator
      :validation/invalid)
    :validation/invalid))

;; Event Handlers
(defn- trigger-alert!
  [db message]
  (update db :state/alert
          (fn [alert alert-message]
            (when-let [timeout-id (:alert/timeout-id alert)]
              (js/clearTimeout timeout-id))
            (let [new-timeout-id (js/setTimeout (fn [] (swap! state assoc-in [:state/alert :alert/visible] false)) 5000)]
              {:alert/message alert-message
               :alert/visible true
               :alert/timeout-id new-timeout-id}))
          message))

(defn- handle-calculate
  [db]
  (let [expression (:state/display db)
        new-db (calc/calculate db expression)
        {:state/keys [value error]} new-db]
    (-> new-db
        (assoc :state/display (if-not error value error))
        (assoc :state/validation-state :validation/start))))

(defn- handle-input!
  [db input]
  (let [current-validation-state (:state/validation-state db)
        next-validation-state (validate-user-input db input)
        update-display-fn (if (= current-validation-state :validation/start)
                            (fn [_] (str input))
                            str)]
    (if (not= next-validation-state :validation/invalid)
      (-> db
          (assoc :state/validation-state next-validation-state)
          (update :state/display update-display-fn input))
      (trigger-alert! db (str "Input '" input "' resulted in an invalid expression.")))))

(defn- handle-clear
  [db]
  (-> db
      (assoc :state/display "")
      (assoc :state/validation-state :validation/start)))

;; Dispatcher

(r/set-dispatch!
 (fn [_ action]
   (let [[op data] action]
     (case op
       :api/calculate (swap! state handle-calculate)
       :display/clear (swap! state handle-clear)
       :display/update (swap! state handle-input! data)))))

;; Components

(ra/defalias user-alert
  [{:state/keys [alert]}]
  (println (:alert/message alert))
  [:div
   {:class ["fixed" "bottom-1/4" "left-1/2" "transform" "-translate-x-1/2" "mb-4"
            "bg-red-100" "border-2" "border-red-500" "text-red-700"
            "px-4" "py-3" "rounded-lg" "shadow-lg"]
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
  [{:state/keys [value display]}]
  [:div
   {:class ["w-full" "h-16" "sm:h-28" "bg-white" "border-2" "border-blue-400" "rounded-lg" "mt-5" "md:mt-0" "flex" "flex-col" "justify-evenly" "items-end" "pr-2" "border-blue-500" "text-right"]}
   [:div
    [:div
     {:class "text-slate-600/50"
      :id "previous-expression"} (when value (str "Ans = " value))]
    [:div
     {:id "current-display"
      :class ["text-2xl" "md:text-3xl" "font-semibold"]} display]]])

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
    (when (get-in data [:state/alert :alert/visible]) [user-alert data])]])

;; Entry Point

(defn- render [root]
  (add-watch state :state/display
             (fn [_ _ _ new-state]
               (println new-state)
               (r/render root (index new-state))))
  (r/render root (index @state)))

(defn ^:export main []
  (let [root (js/document.getElementById "app")]
    (render root)))
