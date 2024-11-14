;; copyright (c) 2024, Andrew Leverette, all rights reserved
 
(ns clojulator.repl
  "REPL namespace for running Clojulator in the REPL.
  
  "
  (:gen-class)
  (:require [clojulator.calculator.core :as calc]
            [clojulator.utils.printer :as printer]
            [clojulator.utils.reporter :as reporter]))

(defn display-welcome-message
  "Prints a welcome message to the REPL."
  []
  (printer/display-line "==================================================")
  (printer/display-line "Welcome to Clojulator REPL")
  (printer/display-line "Enter an arithmetic expression to evaluate")
  (printer/display-line "Currently supported operators: + - * / ^ %")
  (printer/display-line "History tracking is available via 'p1', 'p2', 'p3'")
  (printer/display-line "Type 'quit' or 'exit'  to stop the REPL")
  (printer/display-line "=================================================="))

(defn should-quit?
  "Given an input string, and determines if the REPL should exit."
  [s]
  (#{"quit" "exit"} s))

(defn exit-repl!
  "Exits the REPL."
  []
  (printer/display-line "Bye!")
  (System/exit 0))

(defn -main
  []
  (display-welcome-message)
  (loop [history []]
    (printer/display "(in)=> " :with-flush? true)
    (let [input (read-line)]
      (if (should-quit? input)
        (exit-repl!)
        (let [{:state/keys [value error history]} (calc/calculate {:state/history history} input)]
          (reporter/report (if value {:ok value} {:error error}))
          (recur history))))))
