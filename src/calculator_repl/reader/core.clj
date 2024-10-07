(ns calculator-repl.reader.core
  (:require [calculator-repl.reader.parser :refer [parse]]
            [calculator-repl.reader.scanner :refer [tokenize]]))

(defn read-expression
  "Given an input string, attempts to tokenize and parse it into an AST"
  [input]
  (-> input tokenize parse))

