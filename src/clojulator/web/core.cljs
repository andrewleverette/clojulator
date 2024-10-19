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
    :last-expression ""
    :last-result ""}))

(rf/reg-event-db
 :calculate
 (fn [db [_ expression]]
   (let [[_ result] (calculate expression (:history db))]
     (-> db
         (assoc :last-expression expression)
         (assoc :last-result result)))))

;; ----------------------------------
;; Subscriptions

(rf/reg-sub
 :last-expression
 (fn [db _] (:last-expression db)))

(rf/reg-sub
 :last-result
 (fn [db _] (:lastResult db)))

;; ----------------------------------
;; Views

(defn header
  []
  [:div
   {:class "text-center"}
   [:h1 "Welcome to Clojulator!"]
   [:h4 "A calculator written in Clojure"]])

(defn display
  [output])

(defn calculator-view
  [])

(defn index
  []
  [:div
   {:class "flex flex-col items-center min-h-screen"}
   [header]
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
