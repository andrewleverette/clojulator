(ns calculator-repl.evaluator)

(declare map-eval-reduce)

(defmulti evaluate
  "Polymorphic evaluator for AST nodes"
  first)

(defmethod evaluate :Number [node] (second node))

(defmethod evaluate :Group
  [node]
  (->> node
       second
       evaluate))

(defmethod evaluate :Star [node] (map-eval-reduce * (rest node)))

(defmethod evaluate :Slash [node] (map-eval-reduce / (rest node)))

(defmethod evaluate :Plus [node] (map-eval-reduce + (rest node)))

(defmethod evaluate :Minus [node]
  (let [remaining (rest node)]
    (if (= 1 (count remaining))
      (- (evaluate (first remaining)))
      (map-eval-reduce - remaining))))

(defn map-eval-reduce
  "Helper function for mapping and reducing 
  over a collection of AST nodes."
  [f coll]
  (->> coll
       (map evaluate)
       (reduce f)))
