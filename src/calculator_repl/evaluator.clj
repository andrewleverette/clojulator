(ns calculator-repl.evaluator
  (:require [calculator-repl.history :refer [repl1 repl2 repl3]]))

(declare map-eval-reduce)

(defmulti evaluate
  "Polymorphic evaluator for AST nodes"
  (fn [node _history] (first node)))

(defmethod evaluate :Env [node history]
  (let [var-name (second node)]
    (case var-name
      "p1" (repl1 history)
      "p2" (repl2 history)
      "p3" (repl3 history)
      (throw (Exception. (str "Unknown evnironment variable: " var-name))))))

(defmethod evaluate :Number [node _history] (second node))

(defmethod evaluate :Group
  [node history]
  (-> node
      second
      (evaluate history)))

(defmethod evaluate :Caret [node history] (map-eval-reduce history Math/pow (rest node)))

(defmethod evaluate :Star [node history] (map-eval-reduce history * (rest node)))

(defmethod evaluate :Slash [node history] (map-eval-reduce history / (rest node)))

(defmethod evaluate :Modulo [node history] (map-eval-reduce history mod (rest node)))

(defmethod evaluate :Plus [node history] (map-eval-reduce history + (rest node)))

(defmethod evaluate :Minus [node history]
  (let [remaining (rest node)]
    (if (= 1 (count remaining))
      (- (evaluate (first remaining) history))
      (map-eval-reduce history - remaining))))

(defn map-eval-reduce
  "Helper function for mapping and reducing 
  over a collection of AST nodes."
  [history f coll]
  (->> coll
       (map #(evaluate % history))
       (reduce f)))
