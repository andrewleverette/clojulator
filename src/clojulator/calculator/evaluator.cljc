(ns clojulator.calculator.evaluator)

(declare map-eval-reduce)

(defmulti evaluate
  "Polymorphic evaluator for AST nodes"
  (fn [node _history] (first node)))

(defmethod evaluate :node/Env [node [p1 p2 p3]]
  (let [var-name (second node)]
    (case var-name
      "p1" p1
      "p2" p2
      "p3" p3
      (let [error-msg (str "Unknown evnironment variable: " var-name)]
        (throw #?(:clj (Exception. error-msg)
                  :cljs (js/Error. error-msg)))))))

(defmethod evaluate :node/Number [node _history] (second node))

(defmethod evaluate :node/Group
  [node history]
  (-> node
      second
      (evaluate history)))

(defmethod evaluate :node/Caret [node history] (map-eval-reduce history Math/pow (rest node)))

(defmethod evaluate :node/Star [node history] (map-eval-reduce history * (rest node)))

(defmethod evaluate :node/Slash [node history] (map-eval-reduce history / (rest node)))

(defmethod evaluate :node/Modulo [node history] (map-eval-reduce history mod (rest node)))

(defmethod evaluate :node/Plus [node history] (map-eval-reduce history + (rest node)))

(defmethod evaluate :node/Minus [node history]
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
