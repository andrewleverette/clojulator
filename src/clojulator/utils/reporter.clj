;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.utils.reporter
  "Reporter namespace for printing error and success messages to the console.
  
  Provides a single public function, `report`, to handle reporting messages
  of success or failure."
  (:require [clojulator.utils.printer :as printer]))

(defn report
  [{:keys [ok error]}]
  (cond
    ok (printer/display-line (str "(out)=> " ok))
    error (printer/display-line (str "(err)=> " error))
    :else (printer/display-line "Unknown report type")))
