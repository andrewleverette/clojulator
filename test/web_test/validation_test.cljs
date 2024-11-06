(ns web-test.validation-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [clojulator.web.validation :refer [validate-user-input]]))

(deftest validation-state-change-tests
  (testing "Initial state transitions"
    (is (= :validation/after-open-paren
           (validate-user-input {:state/validation-state :validation/start
                                 :state/display ""} "(")))
    (is (= :validation/after-unary-operator
           (validate-user-input {:state/validation-state :validation/start
                                 :state/display ""} "-")))
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/start
                                 :state/display ""} 5)))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/start
                                 :state/display ""} ".")))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/start
                                 :state/display ""} "+")))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/start
                                 :state/display ""} "invalid"))))

  (testing "Transition from after-open-paren state"
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/after-open-paren
                                 :state/display "("} 5)))
    (is (= :validation/after-unary-operator
           (validate-user-input {:state/validation-state :validation/after-open-paren
                                 :state/display "("} "-")))
    (is (= :validation/after-open-paren
           (validate-user-input {:state/validation-state :validation/after-open-paren
                                 :state/display "("} "(")))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-open-paren
                                 :state/display "("} "invalid"))))

  (testing "Transition from after-close-paren state"
    (is (true? (every? #(= :validation/after-operator %)
                       (map #(validate-user-input {:state/validation-state :validation/after-number
                                                   :state/display ")"} %)
                            ["+" "-" "*" "/" "^" "%"]))))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-number
                                 :state/display ")"} "invalid"))))

  (testing "Transition from after-unary-operator state"
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/after-unary-operator
                                 :state/display "-"} 5)))
    (is (= :validation/after-open-paren
           (validate-user-input {:state/validation-state :validation/after-unary-operator
                                 :state/display "-"} "(")))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-unary-operator
                                 :state/display "-"} "invalid"))))

  (testing "Transition from after-number state"
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/after-number
                                 :state/display "5"} 5)))
    (is (true? (every? #(= :validation/after-operator %)
                       (map #(validate-user-input {:state/validation-state :validation/after-number
                                                   :state/display "5"} %)
                            ["+" "-" "*" "/" "^" "%"]))))
    (is (= :validation/after-close-paren
           (validate-user-input {:state/validation-state :validation/after-number
                                 :state/display "5"} ")")))
    (is (= :validation/after-decimal
           (validate-user-input {:state/validation-state :validation/after-number
                                 :state/display "5"} ".")))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-number
                                 :state/display "5.0"} ".")))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-number
                                 :state/display "5"} "invalid"))))

  (testing "Transition after-calculate state"
    (is (true? (every? #(= :validation/after-operator %)
                       (map #(validate-user-input {:state/validation-state :validation/after-number
                                                   :state/display "5"} %)
                            ["+" "-" "*" "/" "^" "%"]))))
    (is (= :validation/after-open-paren
           (validate-user-input {:state/validation-state :validation/after-calculate
                                 :state/display "5"} "(")))
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/after-calculate
                                 :state/display "5"} 5)))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-calculate
                                 :state/display "5"} "invalid"))))

  (testing "Transition from after-operator state"
    (is (= :validation/after-open-paren
           (validate-user-input {:state/validation-state :validation/after-operator
                                 :state/display "+"} "(")))
    (is (= :validation/after-unary-operator
           (validate-user-input {:state/validation-state :validation/after-operator
                                 :state/display "+"} "-")))
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/after-operator
                                 :state/display "+"} 5)))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-operator
                                 :state/display "+"} "invalid"))))
  (testing "Transition from after-decimal state"
    (is (= :validation/after-number
           (validate-user-input {:state/validation-state :validation/after-decimal
                                 :state/display "5."} 5)))
    (is (= :validation/invalid
           (validate-user-input {:state/validation-state :validation/after-decimal
                                 :state/display "5."} "invalid")))))
