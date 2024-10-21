(ns clojulator.web.core
  (:require
   [reagent.dom.client :as rdc]
   [re-frame.core :as rf]
   [clojulator.calculator.core :refer [calculate]]))

;; ----------------------------------
;; Event Handlers

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:history (atom [])
    :last-result nil
    :display ""
    :should-append? true}))

(rf/reg-event-db
 :calculate
 (fn [db [_]]
   (let [expression (:display db)
         [result value] (calculate expression (:history db))
         new-state (-> db
                       (assoc :should-append? false)
                       (assoc :display (str value)))]
     (if (= result :ok)
       (assoc new-state :last-result value)
       new-state))))

(rf/reg-event-db
 :update-display
 (fn [db [_ c]]
   (let [should-append? (:should-append? db)
         new-state (if should-append? db (assoc db :should-append? true))
         f (if should-append? str (fn [_] (str c)))]
     (update new-state :display f c))))

(rf/reg-event-db
 :clear-display
 (fn [db _]
   (assoc db :display "")))

;; ----------------------------------
;; Subscriptions

(rf/reg-sub
 :last-result
 (fn [db _] (:last-result db)))

(rf/reg-sub
 :display
 (fn [db _] (:display db)))

;; ----------------------------------
;; Views

(defn header
  []
  [:div
   {:class "text-center"}
   [:h1 "Welcome to Clojulator!"]
   [:h4 "A calculator written in Clojure"]])

(defn display
  []
  (let [display-text (rf/subscribe [:display])
        last-result (rf/subscribe [:last-result])]
    [:div
     {:class "w-full h-16 sm:h-28 bg-white border-2 border-blue-400 rounded-lg mt-5 md:mt-0 flex flex-col justify-evenly items-end pr-2 border-blue-500 text-right"}
     [:div
      [:div
       {:class "text-slate-600/50"
        :id "previous-expression"}
       (when @last-result
         (str "Ans = " @last-result))]
      [:div
       {:id "current-display"
        :class "text-2xl md:text-3xl font-semibold"} @display-text]]]))

(defn symbol-keys
  []
  (let [operators ["-" "+" "/" "*" "%" "^" "(" ")"]]
    (fn []
      [:div
       {:class "basic-operations col-span-3 grid grid-cols-2 [&>*]:py-5 [&>*]:px-2.5 [&>*]:sm:px-6 gap-2 [&>*:hover]:bg-blue-900 [&>*]:rounded [&>*:hover]:text-white [&>*:active]:scale-90"}
       [:button {:key "clear"
                 :class "col-span-2 bg-slate-300"
                 :on-click (fn [] (rf/dispatch [:clear-display]))} "CLR"]
       (map #(vector :button {:key % :class "bg-slate-300"
                              :on-click (fn [] (rf/dispatch [:update-display %]))} %) operators)])))

(defn numeric-keys
  []
  (let [numbers [7 8 9 4 5 6 1 2 3 0 "."]
        last-three-expressions ["p1" "p2" "p3"]]
    (fn []
      [:div
       {:class "number mr-2 col-span-9 grid grid-cols-3 gap-2 [&>*:hover]:bg-blue-900 [&>*]:rounded [&>*:hover]:text-white [&>*:active]:scale-90"}
       (map #(vector :button {:key % :class "bg-slate-300" :on-click (fn [] (rf/dispatch [:update-display %]))} %) last-three-expressions)
       (map #(vector :button {:key % :class "bg-slate-100" :on-click (fn [] (rf/dispatch [:update-display %]))} %) numbers)
       [:button {:key "enter"
                 :class "bg-[#3651c4] text-white"
                 :on-click (fn [] (rf/dispatch [:calculate]))} "="]])))

(defn keypad
  []
  [:div
   {:class "bg-white text-xl w-full p-1 rounded-lg grid grid-cols-12"}
   [numeric-keys]
   [symbol-keys]])

(defn calculator
  []
  [:div
   {:class "flex flex-col items-center gap-3 font-bold"}
   [display]
   [keypad]])

(defn index
  []
  [:div
   {:class "bg-slate-400 flex flex-col items-center min-h-screen"}
   [:main
    {:class "w-full max-w-lg select-none px-4 md:px-0"}
    [header]
    [calculator]]])

;; ----------------------------------
;; Entry Point

(defonce root-container
  (rdc/create-root (js/document.getElementById "app")))

(defn mount-ui
  []
  (rdc/render root-container [index]))

(defn ^:export main []
  (enable-console-print!)
  (rf/dispatch-sync [:initialize])
  (mount-ui))
