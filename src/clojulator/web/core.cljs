(ns clojulator.web.core
  (:require
   [clojulator.calculator.core :as calc]
   [replicant.alias :as ra]
   [replicant.dom :as r]))

;; Private State
(defonce ^:private state (atom {:history [0 0 0] ; Default to zero for memory values
                                :value nil
                                :display ""}))

;; Event Handlers
(defn- handle-calculate
  [db]
  (let [expression (:display db)
        new-db (calc/calculate db expression)
        {:keys [value error]} new-db]
    (assoc new-db :display (if-not error value error))))

(defn- update-display
  [db value]
  (update db :display str value))

;; Dispatcher

(r/set-dispatch!
 (fn [_ action]
   (let [[op data] action]
     (case op
       :api/calculate (swap! state handle-calculate)
       :display/clear (swap! state assoc :display "")
       :display/update (swap! state update-display data)))))

;; Components

(ra/defalias header
  []
  [:div.header
   {:class "text-center"}
   [:h1 "Welcome to Clojulator!"]
   [:h4 "A calculator written in Clojure"]])

(ra/defalias display
  [{:keys [value display]}]
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
  [{:keys [history]}]
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
    [calculator data]]])

;; Entry Point

(defn- render [root]
  (add-watch state :display
             (fn [_ _ _ new-state]
               (r/render root (index new-state))))
  (r/render root (index @state)))

(defn ^:export main []
  (let [root (js/document.getElementById "app")]
    (render root)))
