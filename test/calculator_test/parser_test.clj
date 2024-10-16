(ns calculator-test.parser-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojulator.calculator.parser :refer [parse]]
            [clojulator.calculator.scanner :refer [tokenize]]))

(deftest numeric-expression-tests
  (testing "valid numbers should return a single node in AST"
    (is (= [:Number 1.0] (parse (tokenize "1"))))
    (is (= [:Number 10.0] (parse (tokenize "10"))))
    (is (= [:Number 1234567890.0] (parse (tokenize "1234567890")))))
  (testing "numbers larger than 9223372036854775807 should return nil"
    (is (= [:Number (parse-double "9223372036854775808")] (parse (tokenize "9223372036854775808")))))
  (testing "a single number wrapped in parentheses should return a node"
    (is (= [:Group [:Number 1.0]] (parse (tokenize "(1)")))))
  (testing "a unary minus should return a minus number node"
    (is (= [:Minus [:Number 1.0]] (parse (tokenize "-1")))))
  (testing "a minus minus should return a minus minus number node"
    (is (= [:Minus [:Minus [:Number 1.0]]] (parse (tokenize "--1"))))))

(deftest environment-variable-tests
  (testing "valid environment variables should return a single node in AST"
    (is (= [:Env "p1"] (parse (tokenize "p1"))))
    (is (= [:Env "p2"] (parse (tokenize "p2"))))
    (is (= [:Env "p3"] (parse (tokenize "p3"))))))

(deftest exponentiation-tests
  (testing "exponentiation should return an exponent node"
    (is (= [:Caret [:Number 2.0] [:Number 2.0]] (parse (tokenize "2 ^ 2"))))))

(deftest multiplicative-tests
  (testing "multiplying two numbers should return a multiplication node"
    (is (= [:Star [:Number 1.0] [:Number 2.0]] (parse (tokenize "1 * 2")))))
  (testing "dividing two numbers should return a division node"
    (is (= [:Slash [:Number 1.0] [:Number 2.0]] (parse (tokenize "1 / 2")))))
  (testing "taking the remainder of two numbers should return a modulo node"
    (is (= [:Modulo [:Number 1.0] [:Number 2.0]] (parse (tokenize "1 % 2")))))
  (testing "compound multiplicative expressions should return left-associative nested nodes"
    (is (= [:Modulo
            [:Star
             [:Slash
              [:Number 1.0]
              [:Number 2.0]]
             [:Number 2.0]]
            [:Number 2.0]] (-> "1 / 2 * 2 % 2" tokenize parse)))))

(deftest additive-tests
  (testing "adding two numbers should return a addition node"
    (is (= [:Plus [:Number 1.0] [:Number 2.0]] (parse (tokenize "1 + 2")))))
  (testing "subtracting two numbers should return a subtraction node"
    (is (= [:Minus [:Number 1.0] [:Number 2.0]] (parse (tokenize "1 - 2")))))
  (testing "compound additive expressions should return left-associative nested nodes"
    (is (= [:Plus
            [:Minus
             [:Number 1.0]
             [:Number 2.0]]
            [:Number 2.0]] (-> "1 - 2 + 2" tokenize parse)))))

(deftest compound-expressions
  (testing "multiplicative expressions have higher precedence than additive expressions"
    (is (= [:Plus
            [:Number 1.0]
            [:Star
             [:Number 2.0]
             [:Number 3.0]]] (-> "1 + 2 * 3" tokenize parse)))
    (is (= [:Minus
            [:Star
             [:Number 1.0]
             [:Number 2.0]]
            [:Number 3.0]] (-> "1 * 2 - 3" tokenize parse)))
    (is (= [:Minus
            [:Modulo
             [:Number 1.0]
             [:Number 2.0]]
            [:Number 3.0]] (-> "1 % 2 - 3" tokenize parse))))
  (testing "exponentiation has higher precedence than multiplicative expressions"
    (is (= [:Star
            [:Number 2.0]
            [:Caret
             [:Number 2.0]
             [:Number 3.0]]] (-> "2 * 2 ^ 3" tokenize parse))))
  (testing "grouped expressions have higher precedence than multiplicative expressions"
    (is (= [:Star
            [:Group
             [:Plus
              [:Number 1.0]
              [:Number 1.0]]]
            [:Number 2.0]] (-> "(1 + 1) * 2" tokenize parse)))))

