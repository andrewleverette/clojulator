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
    (let [[p1 p2 _] (:history state)
          value (-> expression
                    s/tokenize
                    p/parse
                    (ev/evaluate (:history state)))]
      (-> state
          (assoc :value value)
          (assoc :history [value p1 p2])
          (dissoc :error)))
    (catch #?(:clj Exception
              :cljs js/Error) e
      (assoc state :error (ex-message e)))))
