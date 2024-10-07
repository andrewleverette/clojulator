(ns calculator-repl.evaluator)

(declare map-eval-reduce)

(defmulti evaluate first)

(defmethod evaluate :Number [node] (second node))

(defmethod evaluate :Group
  [node]
  (->> node
       second
       evaluate))

(defmethod evaluate :Star [node] (map-eval-reduce * (rest node)))

(defmethod evaluate :Slash [node] (map-eval-reduce / (rest node)))

(defmethod evaluate :Plus [node] (map-eval-reduce + (rest node)))

(defmethod evaluate :Minus [node] (map-eval-reduce - (rest node)))

(defn map-eval-reduce
  [f coll]
  (->> coll
       (map evaluate)
       (reduce f)))
