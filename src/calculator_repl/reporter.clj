(ns calculator-repl.reporter
  (:require [calculator-repl.printer :as printer]))

(defmulti report first)

(defmethod report :error
  [[_ error]]
  (printer/display-line (str "(err)=> " error)))

(defmethod report :ok
  [[_ result]]
  (printer/display-line (str "(out)=> " result)))

