;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.calculator.core
  (:require
   [clojulator.calculator.evaluator :as ev]
   [clojulator.calculator.parser :as p]
   [clojulator.calculator.scanner :as s]))

(defn calculate
  "Given an expressions as a string, attempts to parse
  the string and return the result. Updates the given
  history object with the result."
  [state expression]
  (try
    (let [[p1 p2 _] (:state/history state)
          value (-> expression
                    s/tokenize
                    p/parse
                    (ev/evaluate (:state/history state)))]
      (-> state
          (assoc :state/value value
                 :state/history [value p1 p2])
          (dissoc :state/error)))
    (catch #?(:clj Exception
              :cljs js/Error) e
      (assoc state :state/error (ex-message e)))))
