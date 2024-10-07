(ns calculator-repl.core
  (:gen-class)
  (:require
   [calculator-repl.printer :as printer]
   [calculator-repl.evaluator :as eva]
   [calculator-repl.reader.scanner :as lex]
   [calculator-repl.reader.parser :as par]
   [calculator-repl.reader.core :as rdr]))

(defn display-welcome-message
  []
  (printer/display-line "================================================")
  (printer/display-line "Welcome to Calculator REPL")
  (printer/display-line "Enter a simple arithmetic expression to evaluate")
  (printer/display-line "Currently supported operators: + - * /")
  (printer/display-line "Example: 2 + 1, 4 - 1, 8 / 2, 12 * 3")
  (printer/display-line "Type 'quit' to exit")
  (printer/display-line "================================================"))

(defn should-quit?
  [s]
  (= s :quit))

(defn try-evaluate
  [exp]
  (try
    (let [parsed (-> exp lex/tokenize par/parse)
          result (eva/evaluate parsed)]
      {:ok result})
    (catch Exception e
      {:error (.getMessage e)})))

(defn display-result
  [result]
  (if (:ok result)
    (printer/display-line (str "(out)=> " (:ok result)))
    (printer/display-line (str "(error)=> " (:error result)))))

(defn -main
  []
  (display-welcome-message)
  (loop []
    (let [input (rdr/read-expression)]
      (if (should-quit? input)
        (printer/display-line "Bye!")
        (do
          (-> input try-evaluate display-result)
          (recur))))))
