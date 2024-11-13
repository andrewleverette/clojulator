;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.utils.reporter
  (:require [clojulator.utils.printer :as printer]))

(defmulti report first)

(defmethod report :error
  [[_ error]]
  (printer/display-line (str "(err)=> " error)))

(defmethod report :ok
  [[_ result]]
  (printer/display-line (str "(out)=> " result)))

