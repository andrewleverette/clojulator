(ns calculator-test.integration-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [clojulator.calculator.core :refer [calculate]]))

(deftest simple-arithmetic-expressions
  (testing "simple expressions with two operands"
    (is (= 3.0 (:state/value (calculate {} "1 + 2"))))
    (is (= -1.0 (:state/value (calculate {} "1 - 2"))))
    (is (= 2.0 (:state/value (calculate {} "1 * 2"))))
    (is (= 0.5 (:state/value (calculate {} "1 / 2"))))
    (is (= 4.0 (:state/value (calculate {} "2 ^ 2"))))
    (is (= 1.0 (:state/value (calculate {} "1 % 2"))))))

(deftest compound-arithmetic-expressions
  (testing "compound expressions with three operands"
    (is (= 6.0 (:state/value (calculate {} "1 + 2 + 3"))))
    (is (= -4.0 (:state/value (calculate {} "1 - 2 - 3"))))
    (is (= 6.0 (:state/value (calculate {} "1 * 2 * 3"))))
    (is (= 1.0 (:state/value (calculate {} "8 / 4 / 2")))))
  (testing "compound expresssions with mixed operators"
    (is (= 7.0 (:state/value (calculate {} "1 + 2 * 3"))))
    (is (= -2.0 (:state/value (calculate {} "1 - 9 / 3"))))
    (is (= 5.0 (:state/value (calculate {} "1 * 2 + 3"))))
    (is (= 0.0 (:state/value (calculate {} "8 / 4 - 2")))))
  (testing "compound expressions with parentheses"
    (is (= 9.0 (:state/value (calculate {} "(1 + 2) * 3"))))
    (is (= 2.0 (:state/value (calculate {} "(9 - 3) / 3"))))
    (is (= 5.0 (:state/value (calculate {} "(1 + (3 * 3)) / 2 "))))))

(deftest expressions-with-repl-variables
  (testing "{} tracking with repl variables updates correctly
            and variables can be used in expressions"
    (is (= 2.0 (:state/value (calculate {} "1 + 1"))))
    (is (= 4.0 (:state/value (calculate {:state/history [2.0 1.0 nil]} "2 * p1"))))
    (is (= 8.0 (:state/value (calculate {:state/history [4.0 2.0 nil]} "p1 * p2"))))
    (is (= 16.0 (:state/value (calculate {:state/history [8.0 4.0 2.0]} "p1 * p3"))))
    (is (= 20.0 (:state/value (calculate {:state/history [16.0 8.0 4]} "(p1 / p3) + (p2 / 2) * p3"))))))

(deftest expressions-that-should-fail-during-scanning
  (testing "unkown characters should fail during scanning"
    (is (= "Unknown character: 'a' at position 8" (:state/error (calculate {} "1 + 1 * a"))))
    (is (= "Unknown character: 'p' at position 0" (:state/error (calculate {} "p"))))))

(deftest expressions-that-should-fail-durring-parsing
  (testing "syntax errors should fail during parsing"
    (is (= "Unexpected end of input" (:state/error (calculate {} "1 +"))))
    (is (= "Unexpected token '*' at position 0" (:state/error (calculate {} "* 1"))))
    (is (= "Unexpected token ')' at position 0" (:state/error (calculate {} ")(1 + 1)"))))))
