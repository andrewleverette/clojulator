;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.calculator.evaluator
  "Evaluator namesacpace for evaluating ASTs.
  
  Provides a single function, `evaluate`, to that handles
  trying to convert an AST into a concrete value"
  (:require [clojure.walk :as walk]))

(defn evaluate
  "Evaluates an AST using post-order traversal and returns the result."
  [ast history]
  (walk/postwalk
   (fn [node]
     (if (vector? node)
       (let [[node-type & children] node
             op ({:node/Plus +
                  :node/Minus -
                  :node/Star *
                  :node/Slash /
                  :node/Caret Math/pow
                  :node/Modulo mod} node-type)]
         (case node-type
           :node/Number (first children)
           :node/Env (let [[p1 p2 p3] history]
                       (case (first children)
                         "p1" p1
                         "p2" p2
                         "p3" p3))
           :node/Group (first children)
           (apply op children)))
       node))
   ast))
