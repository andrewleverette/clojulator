(ns calculator-repl.core
  (:gen-class)
  (:require [calculator-repl.printer :as printer]))

(defn display-welcome-message
  []
  (printer/display-line "================================")
  (printer/display-line "Welcome to Calculator REPL")
  (printer/display-line "Enter an expression to evaluate")
  (printer/display-line "Type 'quit' to exit")
  (printer/display-line "================================"))

(defn -main
  []
  (display-welcome-message)
  (loop []
    (printer/display "(in)=> " :with-flush? true)
    (let [input (read-line)]
      (if (= input "quit")
        (printer/display-line "Bye!")
        (do
          (printer/display-line (str "(out)=> " input))
          (recur))))))

