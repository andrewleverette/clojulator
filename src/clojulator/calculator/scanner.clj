(ns clojulator.calculator.scanner
  (:require [clojulator.calculator.token :as tok]))

(defn is-repl-symbol?
  [chars]
  (when-let [c (first chars)]
    (-> c
        (str (second chars))
        (tok/symbol-tokens))))

(defn is-symbol? [c]
  (tok/symbol-tokens c))

(defn is-digit?
  [c]
  (when (not= nil c)
    (Character/isDigit c)))

(defn is-whitespace? [c] (Character/isWhitespace c))

(defn ignore-whitespace
  [chars]
  (drop-while is-whitespace? chars))

(defn integer-lexeme
  [chars]
  (apply str (take-while is-digit? chars)))

(defn fractional-lexeme
  [chars]
  (when (= \. (first chars))
    (integer-lexeme (rest chars))))

(defn number-lexeme
  [chars]
  (let [int-part (integer-lexeme chars)
        int-length (count int-part)
        fractional-part (->> chars (drop int-length) fractional-lexeme)]
    (if (empty? fractional-part)
      int-part
      (str int-part "." fractional-part))))

(defn repl-lexeme
  [chars]
  (when-let [c (first chars)]
    (str c (second chars))))

(defn scan-token
  "Scans for the next token in the source string ignoring whitespace."
  [characters index]
  (when (seq characters)
    (let [trimmed (ignore-whitespace characters)
          offset (- (count characters) (count trimmed))
          pos (+ index offset)]
      (when-let [c (first trimmed)]
        (cond
          (is-repl-symbol? trimmed) (-> trimmed repl-lexeme (tok/symbol->token pos))
          (is-symbol? c) (tok/symbol->token c pos)
          (is-digit? c) (-> trimmed number-lexeme (tok/number->token pos))
          :else (throw (Exception. (str "Unknown character: '" c "' at position " pos))))))))

(defn tokenize
  "Given a string, returns a list of tokens."
  [source]
  (loop [chars (seq source)
         index 0
         tokens []]
    (if-let [token (scan-token chars index)]
      (let [delta (- (+ (tok/pos token) (tok/length token)) index)]
        (recur
         (drop delta chars)
         (+ index delta)
         (conj tokens token)))
      tokens)))
