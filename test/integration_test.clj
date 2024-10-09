(ns integration-test
  (:require
   [clojure.test :refer [deftest is testing use-fixtures]]
   [calculator-repl.core :refer [calculate]]))

(def history (atom []))

(defn fixture
  [f]
  (f)
  (reset! history []))

(use-fixtures :each fixture)

(deftest simple-arithmetic-expressions
  (testing "simple expressions with two operands"
    (is (= 3.0 (:ok (calculate "1 + 2" history))))
    (is (= -1.0 (:ok (calculate "1 - 2" history))))
    (is (= 2.0 (:ok (calculate "1 * 2" history))))
    (is (= 0.5 (:ok (calculate "1 / 2" history))))))

(deftest compound-arithmetic-expressions
  (testing "compound expressions with three operands"
    (is (= 6.0 (:ok (calculate "1 + 2 + 3" history))))
    (is (= -4.0 (:ok (calculate "1 - 2 - 3" history))))
    (is (= 6.0 (:ok (calculate "1 * 2 * 3" history))))
    (is (= 1.0 (:ok (calculate "8 / 4 / 2" history)))))
  (testing "compound expresssions with mixed operators"
    (is (= 7.0 (:ok (calculate "1 + 2 * 3" history))))
    (is (= -2.0 (:ok (calculate "1 - 9 / 3" history))))
    (is (= 5.0 (:ok (calculate "1 * 2 + 3" history))))
    (is (= 0.0 (:ok (calculate "8 / 4 - 2" history)))))
  (testing "compound expressions with parentheses"
    (is (= 9.0 (:ok (calculate "(1 + 2) * 3" history))))
    (is (= 2.0 (:ok (calculate "(9 - 3) / 3" history))))
    (is (= 5.0 (:ok (calculate "(1 + (3 * 3)) / 2 " history))))))

(deftest expressions-with-repl-variables
  (testing "history tracking with repl variables updates correctly
            and variables can be used in expressions"
    (is (= 2.0 (:ok (calculate "1 + 1" history))))
    (is (= 4.0 (:ok (calculate "2 * p1" history))))
    (is (= 8.0 (:ok (calculate "p1 * p2" history))))
    (is (= 16.0 (:ok (calculate "p1 * p3" history))))
    (is (= 20.0 (:ok (calculate "(p1 / p3) + (p2 / 2) * p3" history))))))

(deftest expressions-that-should-fail-during-scanning
  (testing "unkown characters should fail during scanning"
    (is (= "Unknown character: 'a' at position 8" (:error (calculate "1 + 1 * a" history))))
    (is (= "Unknown character: 'p' at position 0" (:error (calculate "p" history))))))

(deftest expressions-that-should-fail-durring-parsing
  (testing "syntax errors should fail during parsing"
    (is (= "Unexpected end of input" (:error (calculate "1 +" history))))
    (is (= "Unexpected token '*' at position 0" (:error (calculate "* 1" history))))
    (is (= "Unexpected token ')' at position 0" (:error (calculate ")(1 + 1)" history))))))