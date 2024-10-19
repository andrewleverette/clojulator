goog.provide('clojulator.calculator.parser');
clojulator.calculator.parser.parser_error = (function clojulator$calculator$parser$parser_error(var_args){
var G__39621 = arguments.length;
switch (G__39621) {
case 0:
return clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$0 = (function (){
throw (new Error("Unexpected end of input"));
}));

(clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
var temp__5821__auto__ = cljs.core.first(tokens);
if(cljs.core.truth_(temp__5821__auto__)){
var token = temp__5821__auto__;
throw (new Error(["Unexpected token '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojulator.calculator.token.lexeme(token)),"' at position ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojulator.calculator.token.pos(token))].join('')));
} else {
throw (new Error("Unexpected end of input"));
}
}));

(clojulator.calculator.parser.parser_error.cljs$lang$maxFixedArity = 1);

/**
 * Returns the type of the first token in the token seqence if it matches
 *   the matcher, otherwise nil.
 */
clojulator.calculator.parser.match = (function clojulator$calculator$parser$match(tokens,matcher){
if(cljs.core.seq(tokens)){
var G__39624 = clojulator.calculator.token.token_type(cljs.core.first(tokens));
return (matcher.cljs$core$IFn$_invoke$arity$1 ? matcher.cljs$core$IFn$_invoke$arity$1(G__39624) : matcher.call(null, G__39624));
} else {
return null;
}
});
/**
 * Group rule: ( <expression> )
 *   Adds a group node to the AST if the next token matches :OpenParen and the
 *   inner expression is enclosed in a :CloseParen. Otherwise, throws a syntax
 *   error.
 */
clojulator.calculator.parser.group = (function clojulator$calculator$parser$group(tokens){
if(cljs.core.truth_(clojulator.calculator.parser.match(tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"OpenParen","OpenParen",-1945705486),null], null), null)))){
var expr = (function (){var G__39625 = cljs.core.rest(tokens);
return (clojulator.calculator.parser.expression.cljs$core$IFn$_invoke$arity$1 ? clojulator.calculator.parser.expression.cljs$core$IFn$_invoke$arity$1(G__39625) : clojulator.calculator.parser.expression.call(null, G__39625));
})();
var remaining_tokens = new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(expr);
if(cljs.core.truth_(clojulator.calculator.parser.match(remaining_tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"CloseParen","CloseParen",-968372103),null], null), null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Group","Group",843938593),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(expr)], null),new cljs.core.Keyword(null,"remaining","remaining",-138926777),cljs.core.rest(remaining_tokens)], null);
} else {
return clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(expr));
}
} else {
return null;
}
});
/**
 * Environment variable rule: p1 | p2 | p3
 *   Adds an environment variable node to the AST if the next token matches
 *   :Repl/*1, :Repl/*2, or :Repl/*3.
 */
clojulator.calculator.parser.env = (function clojulator$calculator$parser$env(tokens){
if(cljs.core.truth_(clojulator.calculator.parser.match(tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("Repl","*3","Repl/*3",-1531852921),null,new cljs.core.Keyword("Repl","*2","Repl/*2",91413904),null,new cljs.core.Keyword("Repl","*1","Repl/*1",472155350),null], null), null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Env","Env",-701833983),clojulator.calculator.token.lexeme(cljs.core.first(tokens))], null),new cljs.core.Keyword(null,"remaining","remaining",-138926777),cljs.core.rest(tokens)], null);
} else {
return clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$1(tokens);
}
});
/**
 * Number rule: <number>
 *   Adds a number literal to the AST if the next token matches :Number
 */
clojulator.calculator.parser.number = (function clojulator$calculator$parser$number(tokens){
if(cljs.core.truth_(clojulator.calculator.parser.match(tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Number","Number",2146289584),null], null), null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),clojulator.calculator.token.literal(cljs.core.first(tokens))], null),new cljs.core.Keyword(null,"remaining","remaining",-138926777),cljs.core.rest(tokens)], null);
} else {
return clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$1(tokens);
}
});
/**
 * Primary rule: <group> | <env> | <number>
 *   Matches either a number literal, a group node, or an environment variable.
 */
clojulator.calculator.parser.primary = (function clojulator$calculator$parser$primary(tokens){
if(cljs.core.truth_(clojulator.calculator.parser.match(tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"OpenParen","OpenParen",-1945705486),null], null), null)))){
return clojulator.calculator.parser.group(tokens);
} else {
if(cljs.core.truth_(clojulator.calculator.parser.match(tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("Repl","*3","Repl/*3",-1531852921),null,new cljs.core.Keyword("Repl","*2","Repl/*2",91413904),null,new cljs.core.Keyword("Repl","*1","Repl/*1",472155350),null], null), null)))){
return clojulator.calculator.parser.env(tokens);
} else {
return clojulator.calculator.parser.number(tokens);

}
}
});
/**
 * Unary rule: - <unary> | <primary>
 *   Adds a unary node to the AST if the next token matches :Minus. 
 *   Otherwise, matches a primary node.
 */
clojulator.calculator.parser.unary = (function clojulator$calculator$parser$unary(tokens){
var temp__5821__auto__ = clojulator.calculator.parser.match(tokens,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Minus","Minus",-181221775),null], null), null));
if(cljs.core.truth_(temp__5821__auto__)){
var minus = temp__5821__auto__;
var p = (function (){var G__39640 = cljs.core.rest(tokens);
return (clojulator.calculator.parser.unary.cljs$core$IFn$_invoke$arity$1 ? clojulator.calculator.parser.unary.cljs$core$IFn$_invoke$arity$1(G__39640) : clojulator.calculator.parser.unary.call(null, G__39640));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minus,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"remaining","remaining",-138926777),new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(p)], null);
} else {
return clojulator.calculator.parser.primary(tokens);
}
});
/**
 * Helper function for term, factor, and exponent rules.
 */
clojulator.calculator.parser.binary_expression = (function clojulator$calculator$parser$binary_expression(tokens,rule,matchers){
var left = (rule.cljs$core$IFn$_invoke$arity$1 ? rule.cljs$core$IFn$_invoke$arity$1(tokens) : rule.call(null, tokens));
var expr = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(left);
var remaining = new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(left);
while(true){
var temp__5821__auto__ = clojulator.calculator.parser.match(remaining,matchers);
if(cljs.core.truth_(temp__5821__auto__)){
var operator = temp__5821__auto__;
var right = (function (){var G__39647 = cljs.core.rest(remaining);
return (rule.cljs$core$IFn$_invoke$arity$1 ? rule.cljs$core$IFn$_invoke$arity$1(G__39647) : rule.call(null, G__39647));
})();
var G__39705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [operator,expr,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(right)], null);
var G__39706 = new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(right);
expr = G__39705;
remaining = G__39706;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),expr,new cljs.core.Keyword(null,"remaining","remaining",-138926777),remaining], null);
}
break;
}
});
/**
 * Exponent rule: <unary> ( ^ <unary> )*
 *  Adds an exponent node to the AST if the next token matches :Caret.
 */
clojulator.calculator.parser.exponent = (function clojulator$calculator$parser$exponent(tokens){
return clojulator.calculator.parser.binary_expression(tokens,clojulator.calculator.parser.unary,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Caret","Caret",-1540274476),null], null), null));
});
/**
 * Factor rule: <exponent> ( [* / %] <exponent> )*
 *   Adds a factor node to the AST if the next token matches :Star or :Slash.
 */
clojulator.calculator.parser.factor = (function clojulator$calculator$parser$factor(tokens){
return clojulator.calculator.parser.binary_expression(tokens,clojulator.calculator.parser.exponent,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Modulo","Modulo",2146620041),null,new cljs.core.Keyword(null,"Slash","Slash",-849804014),null,new cljs.core.Keyword(null,"Star","Star",-1936795745),null], null), null));
});
/**
 * Term rule: <factor> ( [+ -] <factor> )*
 *   Adds a term node to the AST if the next token matches :Plus or :Minus.
 */
clojulator.calculator.parser.term = (function clojulator$calculator$parser$term(tokens){
return clojulator.calculator.parser.binary_expression(tokens,clojulator.calculator.parser.factor,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Plus","Plus",16515439),null,new cljs.core.Keyword(null,"Minus","Minus",-181221775),null], null), null));
});
/**
 * Expression rule: <term>
 *   Always matches a term.
 */
clojulator.calculator.parser.expression = (function clojulator$calculator$parser$expression(tokens){
return clojulator.calculator.parser.term(tokens);
});
/**
 * Parses the tokens and returns the root node of the AST.
 *   Throws a syntax error if the input is invalid.
 */
clojulator.calculator.parser.ast = (function clojulator$calculator$parser$ast(tokens){
var tree = clojulator.calculator.parser.expression(tokens);
if(cljs.core.not(cljs.core.seq(new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(tree)))){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(tree);
} else {
return clojulator.calculator.parser.parser_error.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(tree));
}
});
clojulator.calculator.parser.parse = (function clojulator$calculator$parser$parse(tokens){
return clojulator.calculator.parser.ast(tokens);
});

//# sourceMappingURL=clojulator.calculator.parser.js.map
