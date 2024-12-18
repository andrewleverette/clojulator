;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.web.validation
  "Validation namespace for validating user input.
  
  Provides functionality to validate user input and determine
  the next valid input state.")

(def ^:private supported-operators
  #{"+" "-" "*" "/" "^" "%"})

(defn- start-state [input]
  (cond
    (= input "(")   :validation/after-open-paren
    (= input "-")   :validation/after-unary-operator
    (number? input) :validation/after-number
    :else           :validation/invalid))

(defn- after-number-state [input display]
  (cond
    (supported-operators input)                :validation/after-operator
    (= input ")")                                     :validation/after-close-paren
    (and (= input ".") (not (re-find #"\." display))) :validation/after-decimal
    (number? input)                                   :validation/after-number
    :else                                             :validation/invalid))

(defn- after-calculate-state [input]
  (cond
    (supported-operators input) :validation/after-operator
    (= input "(")                      :validation/after-open-paren
    (number? input)                    :validation/after-number
    :else                              :validation/invalid))

(defn- after-decimal-state [input]
  (if (number? input)
    :validation/after-number
    :validation/invalid))

(defn- after-unary-operator-state [input]
  (cond
    (= input "(")   :validation/after-open-paren
    (number? input) :validation/after-number
    :else           :validation/invalid))

(defn- after-operator-state [input]
  (cond
    (= input "(")   :validation/after-open-paren
    (= input "-")   :validation/after-unary-operator
    (number? input) :validation/after-number
    :else           :validation/invalid))

(defn- after-open-paren-state [input]
  (cond
    (= input "-")        :validation/after-unary-operator
    (number? input)      :validation/after-number
    (= input "(")        :validation/after-open-paren
    :else                :validation/invalid))

(defn- after-close-paren-state [input]
  (if (supported-operators input)
    :validation/after-operator
    :validation/invalid))

(def state-transitions
  "Mapping of validation states to their transition functions."
  {:validation/start            start-state
   :validation/after-number     after-number-state
   :validation/after-calculate  after-calculate-state
   :validation/after-decimal    after-decimal-state
   :validation/after-unary-operator after-unary-operator-state
   :validation/after-operator   after-operator-state
   :validation/after-open-paren after-open-paren-state
   :validation/after-close-paren after-close-paren-state
   :validation/invalid          (constantly :validation/invalid)})

(defn validate-user-input
  "Given an input, returns the next validation state."
  [{:state/keys [validation-state display]} input]
  (let [transition-fn (state-transitions validation-state)]
    (if (= validation-state :validation/after-number)
      (transition-fn input display)
      (transition-fn input))))
