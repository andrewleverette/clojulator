(ns clojulator.web.core
  (:require
   [reagent.core :as r]
   [reagent.dom.client :as rdc]
   [re-frame.core :as rf]
   [clojulator.calculator.core :refer [calculate]]))

;; ----------------------------------
;; Event Handlers

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:history (atom [])
    :lastResult ""}))

(rf/reg-event-db
 :calculate
 (fn [db [_ expression]]
   (let [[_ result] (calculate expression (:history db))]
     (assoc db :lastResult result))))

;; ----------------------------------
;; Subscriptions

(rf/reg-sub
 :last-result
 (fn [db _] (:lastResult db)))

;; ----------------------------------
;; Views

(defn expression-input
  [value]
  [:div
   {:class "mb-3"}
   [:label {:for "expressionInput" :class "form-label"} "Expression"]
   [:input {:type "text"
            :class "form-control"
            :id "expressionInput"
            :value @value
            :on-change #(reset! value (-> % .-target .-value))}]])

(defn output-view
  []
  (let [result (rf/subscribe [:last-result])]
    [:div
     {:class "mb-3"}
     [:label {:for "expressionOutput" :class "form-label"} "Result"]
     [:input {:type "text"
              :class "form-control"
              :id "expressionOutput"
              :value @result
              :disabled true
              :read-only true}]]))

(defn calculator-view
  []
  (let [expression (r/atom nil)]
    (fn []
      [:div
       {:class "w-50"}
       (expression-input expression)
       (output-view)
       [:div
        {:class "mb-3 d-flex justify-content-center"}
        [:button {:type "button" :class "btn btn-primary"
                  :on-click #(rf/dispatch [:calculate @expression])} "Calculate"]]])))

(defn index
  []
  [:div
   {:class "d-flex flex-column align-items-center"}
   [:h1 "Clojulator"]
   [calculator-view]])

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
