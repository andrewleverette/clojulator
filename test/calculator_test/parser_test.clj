(ns calculator-test.parser-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojulator.calculator.parser :refer [parse]]
            [clojulator.calculator.scanner :refer [tokenize]]))

(deftest numeric-expression-tests
  (testing "valid numbers should return a single node in AST"
    (is (= [:node/Number 1.0] (parse (tokenize "1"))))
    (is (= [:node/Number 10.0] (parse (tokenize "10"))))
    (is (= [:node/Number 1234567890.0] (parse (tokenize "1234567890")))))
  (testing "numbers larger than 9223372036854775807 should return nil"
    (is (= [:node/Number (parse-double "9223372036854775808")] (parse (tokenize "9223372036854775808")))))
  (testing "a single number wrapped in parentheses should return a node"
    (is (= [:node/Group [:node/Number 1.0]] (parse (tokenize "(1)")))))
  (testing "a unary minus should return a minus number node"
    (is (= [:node/Minus [:node/Number 1.0]] (parse (tokenize "-1")))))
  (testing "a minus minus should return a minus minus number node"
    (is (= [:node/Minus [:node/Minus [:node/Number 1.0]]] (parse (tokenize "--1"))))))

(deftest environment-variable-tests
  (testing "valid environment variables should return a single node in AST"
    (is (= [:node/Env "p1"] (parse (tokenize "p1"))))
    (is (= [:node/Env "p2"] (parse (tokenize "p2"))))
    (is (= [:node/Env "p3"] (parse (tokenize "p3"))))))

(deftest exponentiation-tests
  (testing "exponentiation should return an exponent node"
    (is (= [:node/Caret [:node/Number 2.0] [:node/Number 2.0]] (parse (tokenize "2 ^ 2"))))))

(deftest multiplicative-tests
  (testing "multiplying two numbers should return a multiplication node"
    (is (= [:node/Star [:node/Number 1.0] [:node/Number 2.0]] (parse (tokenize "1 * 2")))))
  (testing "dividing two numbers should return a division node"
    (is (= [:node/Slash [:node/Number 1.0] [:node/Number 2.0]] (parse (tokenize "1 / 2")))))
  (testing "taking the remainder of two numbers should return a modulo node"
    (is (= [:node/Modulo [:node/Number 1.0] [:node/Number 2.0]] (parse (tokenize "1 % 2")))))
  (testing "compound multiplicative expressions should return left-associative nested nodes"
    (is (= [:node/Modulo
            [:node/Star
             [:node/Slash
              [:node/Number 1.0]
              [:node/Number 2.0]]
             [:node/Number 2.0]]
            [:node/Number 2.0]] (-> "1 / 2 * 2 % 2" tokenize parse)))))

(deftest additive-tests
  (testing "adding two numbers should return a addition node"
    (is (= [:node/Plus [:node/Number 1.0] [:node/Number 2.0]] (parse (tokenize "1 + 2")))))
  (testing "subtracting two numbers should return a subtraction node"
    (is (= [:node/Minus [:node/Number 1.0] [:node/Number 2.0]] (parse (tokenize "1 - 2")))))
  (testing "compound additive expressions should return left-associative nested nodes"
    (is (= [:node/Plus
            [:node/Minus
             [:node/Number 1.0]
             [:node/Number 2.0]]
            [:node/Number 2.0]] (-> "1 - 2 + 2" tokenize parse)))))

(deftest compound-expressions
  (testing "multiplicative expressions have higher precedence than additive expressions"
    (is (= [:node/Plus
            [:node/Number 1.0]
            [:node/Star
             [:node/Number 2.0]
             [:node/Number 3.0]]] (-> "1 + 2 * 3" tokenize parse)))
    (is (= [:node/Minus
            [:node/Star
             [:node/Number 1.0]
             [:node/Number 2.0]]
            [:node/Number 3.0]] (-> "1 * 2 - 3" tokenize parse)))
    (is (= [:node/Minus
            [:node/Modulo
             [:node/Number 1.0]
             [:node/Number 2.0]]
            [:node/Number 3.0]] (-> "1 % 2 - 3" tokenize parse))))
  (testing "exponentiation has higher precedence than multiplicative expressions"
    (is (= [:node/Star
            [:node/Number 2.0]
            [:node/Caret
             [:node/Number 2.0]
             [:node/Number 3.0]]] (-> "2 * 2 ^ 3" tokenize parse))))
  (testing "grouped expressions have higher precedence than multiplicative expressions"
    (is (= [:node/Star
            [:node/Group
             [:node/Plus
              [:node/Number 1.0]
              [:node/Number 1.0]]]
            [:node/Number 2.0]] (-> "(1 + 1) * 2" tokenize parse)))))

