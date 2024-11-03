(ns clojulator.calculator.parser)

(declare expression)

(defn- parser-error
  ([] (let [error-msg "Unexpected end of input"]
        (throw #?(:clj (Exception. error-msg)
                  :cljs (js/Error. error-msg)))))
  ([tokens]
   (if-let [token (first tokens)]
     (let [error-msg (str "Unexpected token '" (:token/lexeme token) "' at position " (:token/pos token))]
       (throw #?(:clj (Exception. error-msg)
                 :cljs (js/Error. error-msg))))
     (let [error-msg "Unexpected end of input"]
       (throw #?(:clj (Exception. error-msg)
                 :cljs (js/Error. error-msg)))))))

(defn- match
  "Returns the type of the first token in the token seqence if it matches
  the matcher, otherwise nil."
  [tokens matcher]
  (when (seq tokens)
    (-> tokens first :token/type matcher)))

(defn- group
  "Group rule: ( <expression> )
  Adds a group node to the AST if the next token matches :OpenParen and the
  inner expression is enclosed in a :CloseParen. Otherwise, throws a syntax
  error."
  [tokens]
  (when (match tokens #{:token/OpenParen})
    (let [expr (expression (rest tokens))
          remaining-tokens (:remaining expr)]
      (if (match remaining-tokens #{:token/CloseParen})
        {:node [:node/Group (:node expr)] :remaining (rest remaining-tokens)}
        (parser-error (:remaining expr))))))

(defn- env
  "Environment variable rule: p1 | p2 | p3
  Adds an environment variable node to the AST if the next token matches
  :Repl/*1, :Repl/*2, or :Repl/*3."
  [tokens]
  (if (match tokens #{:token/*1 :token/*2 :token/*3})
    {:node [:node/Env (:token/lexeme (first tokens))] :remaining (rest tokens)}
    (parser-error tokens)))

(defn- number
  "Number rule: <number>
  Adds a number literal to the AST if the next token matches :Number"
  [tokens]
  (if (match tokens #{:token/Number})
    {:node [:node/Number (:token/literal (first tokens))] :remaining (rest tokens)}
    (parser-error tokens)))

(defn- primary
  "Primary rule: <group> | <env> | <number>
  Matches a group node, an environment variable, or a number literal."
  [tokens]
  (cond
    (match tokens #{:token/OpenParen}) (group tokens)
    (match tokens #{:token/*1 :token/*2 :token/*3}) (env tokens)
    :else (number tokens)))

(defn- unary
  "Unary rule: - <unary> | <primary>
  Adds a unary node to the AST if the next token matches :Minus. 
  Otherwise, matches a primary node."
  [tokens]
  (if (match tokens #{:token/Minus})
    (let [p (unary (rest tokens))]
      {:node [:node/Minus (:node p)] :remaining (:remaining p)})
    (primary tokens)))

(defn- binary-expression
  "Helper function for term, factor, and exponent rules."
  [tokens rule matchers]
  (let [left (rule tokens)]
    (loop [expr (:node left)
           remaining (:remaining left)]
      (if-let [operator (match remaining matchers)]
        (let [right (rule (rest remaining))]
          (recur
           [(keyword "node" (name operator)) expr (:node right)]
           (:remaining right)))
        {:node expr :remaining remaining}))))

(defn- exponent
  "Exponent rule: <unary> ( ^ <unary> )*
  Adds an exponent node to the AST if the next token matches :Caret."
  [tokens]
  (binary-expression tokens unary #{:token/Caret}))

(defn- factor
  "Factor rule: <exponent> ( [* / %] <exponent> )*
  Adds a factor node to the AST if the next token matches :Star, :Slash, or :Modulo."
  [tokens]
  (binary-expression tokens exponent #{:token/Star :token/Slash :token/Modulo}))

(defn- term
  "Term rule: <factor> ( [+ -] <factor> )*
  Adds a term node to the AST if the next token matches :Plus or :Minus."
  [tokens]
  (binary-expression tokens factor #{:token/Plus :token/Minus}))

(defn- expression
  "Expression rule: <term>
  Always matches a term."
  [tokens]
  (term tokens))

(defn- ast
  "Parses the tokens and returns the root node of the AST.
  Throws a syntax error if the input is invalid."
  [tokens]
  (let [tree (expression tokens)]
    (if-not (seq (:remaining tree))
      (:node tree)
      (parser-error (:remaining tree)))))

(defn parse
  [tokens]
  (ast tokens))
