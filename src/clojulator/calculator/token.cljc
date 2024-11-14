;; copyright (c) 2024, Andrew Leverette, all rights reserved

(ns clojulator.calculator.token
  "Token namespace for defining and representing tokens.
  
  Provdides several functions for constructing tokens various types.")

;; Symbols that can be turned into tokens
;; Most symbols are represented as a single
;; character, but the history symbols are strings
(def symbol-tokens
  "Special symbols that can be turned into tokens"
  {\(   :token/OpenParen
   \)   :token/CloseParen
   \+   :token/Plus
   \-   :token/Minus
   \*   :token/Star
   \/   :token/Slash
   \^   :token/Caret
   \%   :token/Modulo
   "p1" :token/*1
   "p2" :token/*2
   "p3" :token/*3})

(defn token
  "Token constructor"
  ([type lexeme pos len] (token type lexeme pos len nil))
  ([type lexeme pos len literal]
   {:token/type type
    :token/lexeme lexeme
    :token/literal literal
    :token/pos pos
    :token/len len}))

(defn number->token
  "Given a number and a position, return a token 
  that represents a numeric value in the expression."
  [n pos]
  (let [lexeme (str n)]
    (token :token/Number lexeme pos (count lexeme) (parse-double n))))

(defn symbol->token
  "Given a symbol and a position, return a token
  that represents a symbol in the expression."
  [s pos]
  (when-let [token-type (symbol-tokens s)]
    (let [lexeme (str s)]
      (token token-type lexeme pos (count lexeme)))))
