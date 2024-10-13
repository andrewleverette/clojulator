(ns calculator-repl.token)

(def symbol-tokens {\(   :OpenParen
                    \)   :CloseParen
                    \+   :Plus
                    \-   :Minus
                    \*   :Star
                    \/   :Slash
                    \^   :Caret
                    \%   :Modulo
                    "p1" :Repl/*1
                    "p2" :Repl/*2
                    "p3" :Repl/*3})

(defn token
  "Token constructor"
  ([type lexeme pos len] (token type lexeme pos len nil))
  ([type lexeme pos len literal]
   {:type type
    :lexeme lexeme
    :literal literal
    :pos pos
    :len len}))

(defn number->token
  "Given a number and a position, return a token"
  [n pos]
  (let [lexeme (str n)]
    (token :Number lexeme pos (count lexeme) (parse-double n))))

(defn symbol->token
  "Given a symbol and a position, return a token"
  [s pos]
  (when-let [token-type (symbol-tokens s)]
    (let [lexeme (str s)]
      (token token-type lexeme pos (count lexeme)))))

(defn token-type
  [token]
  (:type token))

(defn lexeme
  [token]
  (:lexeme token))

(defn literal
  [token]
  (:literal token))

(defn pos
  [token]
  (:pos token))

(defn length
  [token]
  (:len token))
