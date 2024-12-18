(ns calculator-test.evaluator-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojulator.calculator.evaluator :refer [evaluate]]))

(deftest numeric-expression-tests
  (testing "evaluating a number should return the number"
    (is (= 1.0 (evaluate [:node/Number 1.0] [])))
    (is (= 10.0 (evaluate [:node/Number 10.0] [])))
    (is (= 1234567890.0 (evaluate [:node/Number 1234567890.0] [])))
    (is (= 1.0E10 (evaluate [:node/Number 1e10] []))))
  (testing "evaluating a number that is nil should return nil"
    (is (nil? (evaluate [:node/Number nil] [])))))

(deftest environment-variable-tests
  (testing "evaluating an environment variable should return the value"
    (is (nil? (evaluate [:node/Env "p1"] [])))
    (is (= 1.0 (evaluate [:node/Env "p1"] [1.0 nil nil])))
    (is (= 2.0 (evaluate [:node/Env "p2"] [1.0 2.0 nil])))
    (is (= 3.0 (evaluate [:node/Env "p3"] [1.0 2.0 3.0])))))

(deftest unary-minus-tests
  (testing "evaluating a unary minus should return the negated number"
    (is (= -1.0 (evaluate [:node/Minus [:node/Number 1.0]] []))))
  (testing "evaluating a minus minus should return a positive number"
    (is (= 1.0 (evaluate [:node/Minus [:node/Minus [:node/Number 1.0]]] []))))
  (testing "evaluating a minus minus minus should return a negated number"
    (is (= -1.0 (evaluate [:node/Minus [:node/Minus [:node/Minus [:node/Number 1.0]]]] [])))))

(deftest simple-arithetic-expression-tests
  (testing "adding two numbers should return the sum"
    (is (= 3.0 (evaluate [:node/Plus [:node/Number 1.0] [:node/Number 2.0]] []))))
  (testing "subtracting two numbers should return the difference"
    (is (= -1.0 (evaluate [:node/Minus [:node/Number 1.0] [:node/Number 2.0]] []))))
  (testing "multiplying two numbers should return the product"
    (is (= 2.0 (evaluate [:node/Star [:node/Number 1.0] [:node/Number 2.0]] []))))
  (testing "dividing two numbers should return the quotient"
    (is (= 0.5 (evaluate [:node/Slash [:node/Number 1.0] [:node/Number 2.0]] [])))
    (testing "dividing by zero should throw an exception"
      (is (thrown? ArithmeticException (evaluate [:node/Slash [:node/Number 1.0] [:node/Number 0.0]] [])))))
  (testing "raising a number to a power should return the result"
    (is (= 8.0 (evaluate [:node/Caret [:node/Number 2.0] [:node/Number 3.0]] []))))
  (testing "taking the remainder of two numbers should return the remainder"
    (is (= 1.0 (evaluate [:node/Modulo [:node/Number 5.0] [:node/Number 2.0]] [])))
    (is (= 0.0 (evaluate [:node/Modulo [:node/Number 3.0] [:node/Number 3.0]] [])))))

(deftest precedence-tests
  (testing "multiplicative expressions have higher precedence than additive expressions"
    ;; 1 + 2 * 3
    (is (= 7.0 (evaluate [:node/Plus [:node/Number 1.0] [:node/Star [:node/Number 2.0] [:node/Number 3.0]]] [])))
    ;; 2 * 3 - 5
    (is (= 1.0 (evaluate [:node/Minus [:node/Star [:node/Number 2.0] [:node/Number 3.0]] [:node/Number 5.0]] [])))
    ;; 1 + 4 % 2
    (is (= 1.0 (evaluate [:node/Plus [:node/Number 1.0] [:node/Modulo [:node/Number 4.0] [:node/Number 2.0]]] []))))
  (testing "exponentiation has higher precedence than multiplicative expressions"
    ;; 2 * 2 ^ 3
    (is (= 16.0 (evaluate [:node/Star [:node/Number 2.0] [:node/Caret [:node/Number 2.0] [:node/Number 3.0]]] []))))
  (testing "unary minus has higher precedence than multiplicative expressions"
    ;; -2 * 1
    (is (= -2.0 (evaluate [:node/Star [:node/Minus [:node/Number 2.0]] [:node/Number 1.0]] [])))
    ;; 4 / -2
    (is (= -2.0 (evaluate [:node/Slash [:node/Number 4] [:node/Minus [:node/Number 2.0]]] []))))
  (testing "parentheses have the same precedence as numbers"
    ;; (2 * 3) + (6 - 2)
    (is (= 10.0 (evaluate [:node/Plus
                           [:node/Group [:node/Star [:node/Number 2.0] [:node/Number 3.0]]]
                           [:node/Group [:node/Minus [:node/Number 6.0] [:node/Number 2.0]]]] [])))))

(deftest associativity-tests
  (testing "additive exressions are left associative"
    ;; 2 - 1 + 3
    (is (= 4.0 (evaluate [:node/Plus [:node/Minus [:node/Number 2.0] [:node/Number 1.0]] [:node/Number 3.0]] [])))
    ;; 2 + 1 - 3
    (is (= 0.0 (evaluate [:node/Minus [:node/Plus [:node/Number 2.0] [:node/Number 1.0]] [:node/Number 3.0]] []))))
  (testing "multiplicative expressions are left associative"
    ;; 1 / 2 * 2
    (is (= 1.0 (evaluate [:node/Star [:node/Slash [:node/Number 1.0] [:node/Number 2.0]] [:node/Number 2.0]] [])))
    ;; 4 * 3 / 2
    (is (= 6.0 (evaluate [:node/Slash [:node/Star [:node/Number 4] [:node/Number 3]] [:node/Number 2.0]] [])))
    ;; 5 % 2 * 2
    (is (= 2.0 (evaluate [:node/Star [:node/Modulo [:node/Number 5.0] [:node/Number 2.0]] [:node/Number 2.0]] []))))

  (testing "unary minus is right associative"
    (is (= -1.0 (evaluate [:node/Minus [:node/Number 1.0]] [])))
    (is (= -6.0 (evaluate [:node/Minus [:node/Group [:node/Star [:node/Number 2.0] [:node/Number 3.0]]]] [])))))
