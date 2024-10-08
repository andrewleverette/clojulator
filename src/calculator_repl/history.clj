(ns calculator-repl.history)

(def *repl1 (atom nil))
(def *repl2 (atom nil))
(def *repl3 (atom nil))

(defn clear-history
  []
  (swap! *repl1 (constantly nil))
  (swap! *repl2 (constantly nil))
  (swap! *repl3 (constantly nil)))

(defn update-history
  [result]
  (swap! *repl3 (constantly @*repl2))
  (swap! *repl2 (constantly @*repl1))
  (swap! *repl1 (constantly result)))

(defn repl1
  []
  @*repl1)

(defn repl2
  []
  @*repl2)

(defn repl3
  []
  @*repl3)

