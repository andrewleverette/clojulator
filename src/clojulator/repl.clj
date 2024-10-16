(ns clojulator.repl
  (:gen-class)
  (:require [clojulator.calculator.core :refer [calculate]]
            [clojulator.calculator.history :refer [clear-history]]
            [clojulator.utils.printer :refer [display display-line]]
            [clojulator.utils.reporter :refer [report]]))

(defn display-welcome-message
  []
  (display-line "==================================================")
  (display-line "Welcome to Clojulator REPL")
  (display-line "Enter an arithmetic expression to evaluate")
  (display-line "Currently supported operators: + - * / ^ %")
  (display-line "History tracking is available via 'p1', 'p2', 'p3'")
  (display-line "Type 'quit' or 'exit'  to stop the REPL")
  (display-line "=================================================="))

(defn should-quit?
  [s]
  (#{"quit" "exit"} s))

(defn exit-repl!
  [history]
  (clear-history history)
  (display-line "Bye!")
  (System/exit 0))

(defn -main
  []
  (display-welcome-message)
  (let [history (atom [])]
    (loop []
      (display "(in)=> " :with-flush? true)
      (let [input (read-line)]
        (if (should-quit? input)
          (exit-repl! history)
          (do
            (report (calculate input history))
            (recur)))))))
