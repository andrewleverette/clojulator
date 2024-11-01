(ns clojulator.calculator.core
  (:require
   [clojulator.calculator.evaluator :as evaluator]
   [clojulator.calculator.parser :as parser]
   [clojulator.calculator.scanner :as scanner]))

(defn calculate
  "Given an expressions as a string, attempts to parse
  the string and return the result. Updates the given
  history object with the result."
  [state expression]
  (try
    (let [[p1 p2 _] (:history state)
          value (-> expression
                    scanner/tokenize
                    parser/parse
                    (evaluator/evaluate (:history state)))]
      (-> state
          (assoc :value value)
          (assoc :history [value p1 p2])
          (dissoc :error)))
    (catch #?(:clj Exception
              :cljs js/Error) e
      (assoc state :error (ex-message e)))))
