(ns calculator-repl.reader.scanner
  (:require [calculator-repl.reader.token :as tok]))

(defn is-symbol? [c] (tok/symbol-tokens c))

(defn is-digit?
  [c]
  (when (not= nil c)
    (Character/isDigit c)))

(defn is-whitespace? [c] (Character/isWhitespace c))

(defn ignore-whitespace
  [chars]
  (drop-while is-whitespace? chars))

(defn parse-number
  [chars]
  (let [lexeme (apply str (take-while is-digit? chars))]
    (parse-long lexeme)))

(defn scan-token
  [characters index]
  (when (seq characters)
    (let [trimmed (ignore-whitespace characters)
          offset (- (count characters) (count trimmed))
          pos (+ index offset)]
      (when-let [c (first trimmed)]
        (cond
          (is-symbol? c) (tok/symbol->token c pos)
          (is-digit? c) (-> trimmed parse-number (tok/number->token pos))
          :else (throw (Exception. (str "Unknown character: '" c "'"))))))))

(defn tokenize
  [source]
  (loop [chars (seq source)
         index 0
         tokens []]
    (if-let [token (scan-token chars index)]
      (let [delta (- (+ (:pos token) (:len token)) index)]
        (recur
         (drop delta chars)
         (+ index delta)
         (conj tokens token)))
      tokens)))

(tokenize "(1+2)-3")
