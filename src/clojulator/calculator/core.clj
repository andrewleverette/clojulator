(ns clojulator.calculator.core
  (:require
   [clojulator.calculator.evaluator :refer [evaluate]]
   [clojulator.calculator.history :refer [update-history]]
   [clojulator.calculator.parser :refer [parse]]
   [clojulator.calculator.scanner :refer [tokenize]]))

(defn calculate
  "Given an expressions as a string, attempts to parse
  the string and return the result. Updates the given
  history object with the result."
  [expression history]
  (try
    (let [result (-> expression tokenize parse (evaluate history))]
      (update-history history result)
      [:ok result])
    (catch Exception e
      [:error (ex-message e)])))
