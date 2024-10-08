(ns calculator-repl.core
  (:gen-class)
  (:require
   [calculator-repl.printer :as printer]
   [calculator-repl.evaluator :refer [evaluate]]
   [calculator-repl.reader.core :refer [read-expression]]
   [calculator-repl.history :refer [update-history clear-history]]))

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
      (update-history result)
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
        (do
          (clear-history)
          (printer/display-line "Bye!"))
        (do
          (calculate input)
          (recur))))))
