(ns evaluator-test
  (:require [clojure.test :refer [deftest is testing]]
            [calculator-repl.evaluator :refer [evaluate]]))

(deftest numeric-expression-tests
  (testing "evaluating a number should return the number"
    (is (= 1.0 (evaluate [:Number 1.0])))
    (is (= 10.0 (evaluate [:Number 10.0])))
    (is (= 1234567890.0 (evaluate [:Number 1234567890.0]))))
  (testing "evaluating a number that is nil should return nil"
    (is (= nil (evaluate [:Number nil])))))

(deftest unary-minus-tests
  (testing "evaluating a unary minus should return the negated number"
    (is (= -1.0 (evaluate [:Minus [:Number 1.0]]))))
  (testing "evaluating a minus minus should return a positive number"
    (is (= 1.0 (evaluate [:Minus [:Minus [:Number 1.0]]]))))
  (testing "evaluating a minus minus minus should return a negated number"
    (is (= -1.0 (evaluate [:Minus [:Minus [:Minus [:Number 1.0]]]])))))

(deftest simple-arithetic-expression-tests
  (testing "adding two numbers should return the sum"
    (is (= 3.0 (evaluate [:Plus [:Number 1.0] [:Number 2.0]]))))
  (testing "subtracting two numbers should return the difference"
    (is (= -1.0 (evaluate [:Minus [:Number 1.0] [:Number 2.0]]))))
  (testing "multiplying two numbers should return the product"
    (is (= 2.0 (evaluate [:Star [:Number 1.0] [:Number 2.0]]))))
  (testing "dividing two numbers should return the quotient"
    (is (= 0.5 (evaluate [:Slash [:Number 1.0] [:Number 2.0]])))
    (testing "dividing by zero should throw an exception"
      (is (thrown? ArithmeticException (evaluate [:Slash [:Number 1.0] [:Number 0.0]]))))))

(deftest precedence-tests
  (testing "multiplicative expressions have higher precedence than additive expressions"
    ;; 1 + 2 * 3
    (is (= 7.0 (evaluate [:Plus [:Number 1.0] [:Star [:Number 2.0] [:Number 3.0]]])))
    ;; 2 * 3 - 5
    (is (= 1.0 (evaluate [:Minus [:Star [:Number 2.0] [:Number 3.0]] [:Number 5.0]]))))
  (testing "unary minus has higher precedence than multiplicative expressions"
    ;; -2 * 1
    (is (= -2.0 (evaluate [:Star [:Minus [:Number 2.0]] [:Number 1.0]])))
    ;; 4 / -2
    (is (= -2.0 (evaluate [:Slash [:Number 4] [:Minus [:Number 2.0]]]))))
  (testing "parentheses have the same precedence as numbers"
    ;; (2 * 3) + (6 - 2)
    (is (= 10.0 (evaluate [:Plus
                           [:Group [:Star [:Number 2.0] [:Number 3.0]]]
                           [:Group [:Minus [:Number 6.0] [:Number 2.0]]]])))))

(deftest associativity-tests
  (testing "additive exressions are left associative"
    ;; 2 - 1 + 3
    (is (= 4.0 (evaluate [:Plus [:Minus [:Number 2.0] [:Number 1.0]] [:Number 3.0]])))
    ;; 2 + 1 - 3
    (is (= 0.0 (evaluate [:Minus [:Plus [:Number 2.0] [:Number 1.0]] [:Number 3.0]]))))
  (testing "multiplicative expressions are left associative"
    ;; 1 / 2 * 2
    (is (= 1.0 (evaluate [:Star [:Slash [:Number 1.0] [:Number 2.0]] [:Number 2.0]])))
    ;; 4 * 3 / 2
    (is (= 6.0 (evaluate [:Slash [:Star [:Number 4] [:Number 3]] [:Number 2.0]]))))
  (testing "unary minus is right associative"
    (is (= -1.0 (evaluate [:Minus [:Number 1.0]])))
    (is (= -6.0 (evaluate [:Minus [:Group [:Star [:Number 2.0] [:Number 3.0]]]])))))
