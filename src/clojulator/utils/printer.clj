;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.utils.printer)

(defn- stdout-printer
  [message & {:keys [with-newline? with-flush?]
              :or {with-newline? true with-flush? false}}]
  (let [print-fn (if with-newline? println print)]
    (print-fn message)
    (when with-flush? (flush))))

(def ^:dynamic *printer* stdout-printer)

(defn display
  "Prints a message using the current printer binding (defaulting to stdout).
  Can optionally flush the output after printing."
  ([message] (display message))
  ([message & {:keys [with-flush?]
               :or {with-flush? false}}]
   (binding [*printer* *printer*]
     (*printer* message :with-newline? false :with-flush? with-flush?))))

(defn display-line
  "Prints a message with a newline using the current printer binding (defaulting to stdout).
  Can optionally flush the output after printing."
  [message]
  (binding [*printer* *printer*]
    (*printer* message)))
