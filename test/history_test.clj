(ns history-test
  (:require [clojure.test :refer [deftest is testing]]
            [calculator-repl.history :refer [update-history
                                             clear-history
                                             repl1
                                             repl2
                                             repl3]]))

(deftest updating-history-tests
  (testing "history should start empty"
    (is (= nil (repl1)))
    (is (= nil (repl2)))
    (is (= nil (repl3)))))
