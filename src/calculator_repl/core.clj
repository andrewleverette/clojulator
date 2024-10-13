(ns calculator-repl.core
  (:gen-class)
  (:require
   [calculator-repl.printer :as printer]
   [calculator-repl.evaluator :refer [evaluate]]
   [calculator-repl.parser :refer [parse]]
   [calculator-repl.scanner :refer [tokenize]]
   [calculator-repl.history :refer [update-history clear-history]]
   [calculator-repl.reporter :refer [report]]))

(defn display-welcome-message
  []
  (printer/display-line "==================================================")
  (printer/display-line "Welcome to Calculator REPL")
  (printer/display-line "Enter an arithmetic expression to evaluate")
  (printer/display-line "Currently supported operators: + - * / ^ %")
  (printer/display-line "History tracking is available via 'p1', 'p2', 'p3'")
  (printer/display-line "Type 'quit' or 'exit'  to stop the REPL")
  (printer/display-line "=================================================="))

(defn should-quit?
  [s]
  (#{"quit" "exit"} s))

(defn exit-repl!
  [history]
  (clear-history history)
  (printer/display-line "Bye!")
  (System/exit 0))

(defn calculate
  [input history]
  (try
    (let [result (-> input tokenize parse (evaluate history))]
      (update-history history result)
      [:ok result])
    (catch Exception e
      [:error (.getMessage e)])))

(defn -main
  []
  (display-welcome-message)
  (let [history (atom [])]
    (loop []
      (printer/display "(in)=> " :with-flush? true)
      (let [input (read-line)]
        (if (should-quit? input)
          (exit-repl! history)
          (let [result (calculate input history)]
            (report result)
            (recur)))))))
