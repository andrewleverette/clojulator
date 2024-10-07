(ns calculator-repl.core
  (:gen-class)
  (:require
   [calculator-repl.printer :as printer]
   [calculator-repl.evaluator :refer [evaluate]]
   [calculator-repl.reader.core :refer [read-expression]]))

(defn display-welcome-message
  []
  (printer/display-line "================================================")
  (printer/display-line "Welcome to Calculator REPL")
  (printer/display-line "Enter an arithmetic expression to evaluate")
  (printer/display-line "Currently supported operators: + - * /")
  (printer/display-line "Type 'quit' to exit")
  (printer/display-line "================================================"))

(defn should-quit?
  [s]
  (= s "quit"))

(defn calculate
  [input]
  (try
    (let [result (-> input read-expression evaluate)]
      (printer/display-line (str "(out)=> " result)))
    (catch Exception e
      (printer/display-line (str "(error)=> " (.getMessage e))))))

(defn -main
  []
  (display-welcome-message)
  (loop []
    (printer/display "(in)=> " :with-flush? true)
    (let [input (read-line)]
      (if (should-quit? input)
        (printer/display-line "Bye!")
        (do
          (calculate input)
          (recur))))))
