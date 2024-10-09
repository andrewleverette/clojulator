(ns calculator-repl.history)

(defn clear-history
  [history]
  (swap! history empty))

(defn update-history
  [history result]
  (let [[p1 p2] @history]
    (reset! history [result p1 p2])))

(defn repl1
  [history]
  (first @history))

(defn repl2
  [history]
  (second @history))

(defn repl3
  [history]
  (nth @history 2))
