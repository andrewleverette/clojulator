(ns calculator-repl.core)

(defn display-welcome-message
  []
  (println "================================")
  (println "Welcome to Calculator REPL")
  (println "Enter an expression to evaluate")
  (println "Type 'quit' to exit")
  (println "================================"))

(defn -main
  [& args]
  (display-welcome-message)
  (loop []
    (print "(in)=> ")
    (flush)
    (let [input (read-line)]
      (if (= input "quit")
        (println "Bye!")
        (do
          (println "(out)=>" input)
          (recur))))))

