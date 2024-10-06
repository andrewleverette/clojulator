(ns calculator-repl.reader.core
  (:require [calculator-repl.printer :as printer]))

(defn read-expression
  []
  (printer/display "(in)=> " :with-flush? true)
  (let [input (read-line)]
    (if (= input "quit")
      :quit
      input)))

