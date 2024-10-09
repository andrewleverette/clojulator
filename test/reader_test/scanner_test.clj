(ns reader-test.scanner-test
  (:require [clojure.test :refer [deftest is testing]]
            [calculator-repl.reader.token :refer [number->token symbol->token]]
            [calculator-repl.reader.scanner :refer [tokenize]]))

(defn generate-number-tokens
  ([end] (generate-number-tokens 0 end))
  ([start end] (->> (range start end) (map (fn [n] [[(number->token (str n) 0)] (tokenize (str n))])))))

(deftest simple-numeric-expressionk
  (testing "single digit numbers should return valid tokens"
    (let [results (generate-number-tokens 10)]
      (is (every? (fn [[a b]] (= a b)) results))))
  (testing "double digit numbers should return valid tokens"
    (let [results (generate-number-tokens 10 20)]
      (is (every? (fn [[a b]] (= a b)) results))))
  (testing "largest supported number should return valid tokens"
    (is (= [(number->token "9223372036854775807" 0)] (tokenize "9223372036854775807"))))
  (testing "fractional numbers should return valid tokens"
    (is (= [(number->token "1.0" 0)] (tokenize "1.0")))
    (is (= [(number->token "2.25" 0)] (tokenize "2.25")))
    (is (= [(number->token "0.125" 0)] (tokenize "0.125")))))

(deftest supported-symbol-tests
  (testing "All supported symbols"
    (is (= [(symbol->token \+ 0)] (tokenize "+")))
    (is (= [(symbol->token \-  0)] (tokenize "-")))
    (is (= [(symbol->token \* 0)] (tokenize "*")))
    (is (= [(symbol->token \/ 0)] (tokenize "/")))
    (is (= [(symbol->token \( 0)] (tokenize "(")))
    (is (= [(symbol->token \) 0)] (tokenize ")")))))

(deftest whitespace-tests
  (testing "An empty string should return an empty list"
    (is (= [] (tokenize ""))))
  (testing "Whitespace should be ignored"
    (is (= [] (tokenize " ")))
    (is (= [(number->token "1" 3)] (tokenize "   1   ")))))

(deftest simple-arithmetic-expressions
  (testing "simple expressions with two operands"
    (is (= [(number->token "1" 0) (symbol->token \+  2) (number->token "2" 4)] (tokenize "1 + 2")))
    (is (= [(number->token "1" 0) (symbol->token \- 2) (number->token "2" 4)] (tokenize "1 - 2")))
    (is (= [(number->token "1" 0) (symbol->token \*  2) (number->token "2" 4)] (tokenize "1 * 2")))
    (is (= [(number->token "1" 0) (symbol->token \/ 2) (number->token "2" 4)] (tokenize "1 / 2")))))

(deftest complex-expressions
  (testing "expressions with compound operations"
    (is (= [(number->token "1" 0) (symbol->token \+ 2) (number->token "2" 4) (symbol->token \- 6) (number->token "3" 8)] (tokenize "1 + 2 - 3")))
    (is (= [(number->token "1" 0) (symbol->token \* 2) (number->token "2" 4) (symbol->token \/ 6) (number->token "3" 8)] (tokenize "1 * 2 / 3"))))
  (testing "expressions with parentheses"
    (is (= [(symbol->token \( 0)
            (number->token "1" 1)
            (symbol->token \+ 2)
            (number->token "2" 3)
            (symbol->token \) 4)
            (symbol->token \- 5)
            (number->token "3" 6)] (tokenize "(1+2)-3")))))

(deftest repl-symbol-tests
  (testing "individual repl symbols should return a valid single token"
    (is (= [(symbol->token "p1" 0)] (tokenize "p1")))
    (is (= [(symbol->token "p2" 0)] (tokenize "p2")))
    (is (= [(symbol->token "p3" 0)] (tokenize "p3"))))
  (testing "repl symbols in simple expressions should return valid tokens"
    (is (= [(symbol->token "p1" 0) (symbol->token \+ 3) (number->token "2" 5)] (tokenize "p1 + 2")))
    (is (= [(number->token "2" 0) (symbol->token \- 2) (symbol->token "p2" 4)] (tokenize "2 - p2")))
    (is (= [(number->token "2" 0) (symbol->token \* 2) (symbol->token "p3" 4)] (tokenize "2 * p3")))
    (is (= [(symbol->token "p1" 0) (symbol->token \/ 3) (number->token "2" 5)] (tokenize "p1 / 2")))))
