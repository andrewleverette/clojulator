(ns clojulator.calculator.evaluator)

(declare map-eval-reduce)

(defn evaluate
  "Evaluates an AST node and returns the result."
  [node history]
  (let [node-type (first node)
        op ({:node/Plus +
             :node/Minus -
             :node/Star *
             :node/Slash /
             :node/Caret Math/pow
             :node/Modulo mod}
            node-type)]
    (case node-type
      :node/Number (second node)
      :node/Env (let [[p1 p2 p3] history]
                  (case (second node)
                    "p1" p1
                    "p2" p2
                    "p3" p3))
      :node/Group (evaluate (second node) history)
      ;; Special case for unary operators
      (if (= 1 (count (rest node)))
        (op (evaluate (first (rest node)) history))
        (map-eval-reduce history op (rest node))))))

(defn map-eval-reduce
  "Helper function for mapping and reducing 
  over a collection of AST nodes."
  [history f coll]
  (->> coll
       (map #(evaluate % history))
       (reduce f)))
