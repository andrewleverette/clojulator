(ns calculator-test.history-test
  (:require
   [clojure.test :refer [deftest is testing use-fixtures]]
   [clojulator.calculator.history :refer [clear-history update-history repl1 repl2 repl3]]))

(def history (atom []))

(defn fixture
  [f]
  (f)
  (clear-history history))

(use-fixtures :each fixture)

(deftest empty-history
  (testing "history should be empty by default"
    (is (empty? @history))))

(deftest update-history-once
  (testing "when updated once, history should only contain one non-nil value 
    and the first value is the new value"
    (update-history history 1)
    (is (= 1 (count (filter some? @history))))
    (is (= 1 (repl1 history)))))

(deftest update-history-twice
  (testing "when updated twice, history should only contain two non-nil values 
    and the first value is the new value and the second is the old value"
    (update-history history 1)
    (update-history history 2)
    (is (= 2 (count (filter some? @history))))
    (is (= 2 (repl1 history)))
    (is (= 1 (repl2 history)))))

(deftest update-history-three-times
  (testing "when updated three times, history should only contain three non-nil values
    and the should be in reverse order from how history was updated"
    (update-history history 1)
    (update-history history 2)
    (update-history history 3)
    (is (= 3 (count (filter some? @history))))
    (is (= 3 (repl1 history)))
    (is (= 2 (repl2 history)))
    (is (= 1 (repl3 history)))))

(deftest updating-history-multiple-times
  (testing "when updated multiple times, history should only contain the most recent three values"
    (->> (range 100) (reduce (fn [history n] (update-history history n) history) history))
    (is (= 3 (count (filter some? @history))))
    (is (= 99 (repl1 history)))
    (is (= 98 (repl2 history)))
    (is (= 97 (repl3 history)))))

