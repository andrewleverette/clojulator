(ns calculator-repl.core
  (:gen-class)
  (:require
   [clojure.string :as str]
   [calculator-repl.printer :as printer]))

(defn display-welcome-message
  []
  (printer/display-line "================================================")
  (printer/display-line "Welcome to Calculator REPL")
  (printer/display-line "Enter a simple arithmetic expression to evaluate")
  (printer/display-line "Currently supported operators: + - * /")
  (printer/display-line "Example: 2 + 1, 4 - 1, 8 / 2, 12 * 3")
  (printer/display-line "Type 'quit' to exit")
  (printer/display-line "================================================"))

(defn is-number?
  [s]
  (->> s
       str/trim
       parse-long))

(defn is-operator?
  [s]
  (->> s
       str/trim
       #{"+" "-" "*" "/"}))

(defn str->int
  [s]
  (-> s str/trim parse-long))

(defn str->operator
  [s]
  (->
   s
   str/trim
   (case
    "+" :Plus
    "-" :Minus
    "*" :Times
    "/" :Divide)))

(defn tokens->str
  [tokens]
  (->> tokens
       (map :term)
       (str/join "")))

(defn read-expression
  []
  (printer/display "(in)=> " :with-flush? true)
  (read-line))

(defn should-quit?
  [s]
  (= s "quit"))

(defn tokenize [input]
  (loop [terms (-> input (str/split #"(?<=[-+*/])|(?=[-+*/])") seq)
         tokens []]
    (if (seq terms)
      (let [term (first terms)]
        (cond
          (is-number? term) (recur (rest terms) (conj tokens {:term term
                                                              :value (str->int term)}))
          (is-operator? term) (recur (rest terms) (conj tokens {:term term
                                                                :value (str->operator term)}))
          :else (throw (Exception. (str "Invalid token: " term)))))
      tokens)))

(defn parse
  [tokens]
  (if (= (count tokens) 3)
    (let [[x op y] (map :value tokens)]
      (if (and (= op :Divide) (zero? y))
        (throw (Exception. (str "Divide by zero error: " (tokens->str tokens))))
        [op x y]))
    (throw (Exception. (apply str "Invalid expression: " (tokens->str tokens))))))

(defn expression->str
  [exp]
  (let [op (case (first exp)
             :Plus "+"
             :Minus "-"
             :Times "*"
             :Divide "/")
        operands (rest exp)]
    (str (first operands) " " op " " (second operands))))

(defn evaluate
  [exp]
  (let [[op x y] exp]
    (case op
      :Plus (+ x y)
      :Minus (- x y)
      :Times (* x y)
      :Divide (/ x y))))

(defn try-evaluate
  [exp]
  (try
    (let [parsed (-> exp tokenize parse)
          result (evaluate parsed)]
      {:ok result})
    (catch Exception e
      {:error (.getMessage e)})))

(defn display-result
  [result]
  (if (:ok result)
    (printer/display-line (str "(out)=> " (expression->str (:ok result))))
    (printer/display-line (str "(error)=> " (:error result)))))

(defn -main
  []
  (display-welcome-message)
  (loop []
    (let [input (read-expression)]
      (if (should-quit? input)
        (printer/display-line "Bye!")
        (do
          (-> input try-evaluate display-result)
          (recur))))))

