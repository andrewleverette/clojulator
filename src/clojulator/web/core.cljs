(ns clojulator.web.core
  (:require
   [clojulator.calculator.core :refer [calculate]]
   [replicant.alias :refer [defalias]]
   [replicant.dom :as r]))

;; Private State
(defonce ^:private state (atom {:history []
                                :value nil
                                :display ""
                                :should-append? true}))

(defn handle-calculate
  [db]
  (let [expression (:display db)
        new-db (calculate db expression)
        {:keys [value error]} new-db]
    (-> new-db
        (assoc :should-append? false)
        (assoc :display (if-not error value error)))))

(defn- update-display
  [db value]
  (let [should-append? (:should-append? db)
        new-state (if should-append? db (assoc db :should-append? true))
        f (if should-append? str (fn [_] (str value)))]
    (update new-state :display f value)))

(r/set-dispatch!
 (fn [_ action]
   (let [[op data] action]
     (case op
       :api/calculate (swap! state handle-calculate)
       :display/clear (swap! state assoc :display "")
       :display/update (swap! state update-display data)))))

;; Components

(defalias header
  []
  [:div.header
   {:class "text-center"}
   [:h1 "Welcome to Clojulator!"]
   [:h4 "A calculator written in Clojure"]])

(defalias display
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

(defalias symbol-keys
  []
  (let [operators ["-" "+" "/" "*" "%" "^" "(" ")"]]
    [:div
     {:class ["basic-operations" "col-span-3" "grid" "grid-cols-2" "[&>*]:py-5" "[&>*]:px-2.5" "[&>*]:sm:px-6" "gap-2" "[&>*:hover]:bg-blue-900" "[&>*]:rounded" "[&>*:hover]:text-white" "[&>*:active]:scale-90"]}
     [:button {:key "clear"
               :class ["col-span-2" "bg-slate-300"]
               :on {:click [:display/clear]}} "CLR"]
     (map #(vector :button {:key % :class "bg-slate-300"
                            :on {:click [:display/update %]}} %) operators)]))

(defalias numeric-keys
  []
  (let [numbers [7 8 9 4 5 6 1 2 3 0 "."]
        last-three-expressions ["p1" "p2" "p3"]]
    [:div
     {:class ["number" "mr-2" "col-span-9" "grid" "grid-cols-3" "gap-2" "[&>*:hover]:bg-blue-900" "[&>*]:rounded" "[&>*:hover]:text-white" "[&>*:active]:scale-90"]}
     (map #(vector :button {:key % :class "bg-slate-300" :on {:click [:display/update %]}} %) last-three-expressions)
     (map #(vector :button {:key % :class "bg-slate-100" :on {:click [:display/update %]}} %) numbers)
     [:button {:key "enter"
               :class ["bg-[#3651c4]" "text-white"]
               :on {:click [:api/calculate]}} "="]]))

(defalias keypad
  []
  [:div
   {:class ["bg-white" "text-xl" "w-full" "p-1" "rounded-lg" "grid" "grid-cols-12"]}
   [numeric-keys]
   [symbol-keys]])

(defalias calculator
  [data]
  [:div
   {:class ["flex" "flex-col" "items-center" "gap-3" "font-bold"]}
   [display data]
   [keypad]])

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

(defn render [root]
  (add-watch state :display
             (fn [_ _ _ new-state]
               (r/render root (index new-state))))
  (r/render root (index @state)))

(defn ^:export main []
  (let [root (js/document.getElementById "app")]
    (render root)))
