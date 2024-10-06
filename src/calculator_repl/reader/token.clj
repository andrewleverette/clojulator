(ns calculator-repl.reader.token)

(def symbol-tokens {\( :OpenParen
                    \) :CloseParen
                    \+  :Plus
                    \-  :Minus
                    \*  :Star
                    \/  :Slash})

(defn token
  ([type lexeme pos len] (token type lexeme pos len nil))
  ([type lexeme pos len literal]
   {:type type
    :lexeme lexeme
    :literal literal
    :pos pos
    :len len}))

(defn number->token
  [n pos]
  (token :Number (str n) pos (count (str n)) n))

(defn symbol->token
  [s pos]
  (when-let [token-type (symbol-tokens s)]
    (token token-type (str s) pos 1)))

(defn token->str
  [token]
  (:lexeme token))
