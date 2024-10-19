goog.provide('clojulator.calculator.token');
clojulator.calculator.token.symbol_tokens = cljs.core.PersistentHashMap.fromArrays(["%","(",")","*","+","-","/","p2","p1","p3","^"],[new cljs.core.Keyword(null,"Modulo","Modulo",2146620041),new cljs.core.Keyword(null,"OpenParen","OpenParen",-1945705486),new cljs.core.Keyword(null,"CloseParen","CloseParen",-968372103),new cljs.core.Keyword(null,"Star","Star",-1936795745),new cljs.core.Keyword(null,"Plus","Plus",16515439),new cljs.core.Keyword(null,"Minus","Minus",-181221775),new cljs.core.Keyword(null,"Slash","Slash",-849804014),new cljs.core.Keyword("Repl","*2","Repl/*2",91413904),new cljs.core.Keyword("Repl","*1","Repl/*1",472155350),new cljs.core.Keyword("Repl","*3","Repl/*3",-1531852921),new cljs.core.Keyword(null,"Caret","Caret",-1540274476)]);
/**
 * Token constructor
 */
clojulator.calculator.token.token = (function clojulator$calculator$token$token(var_args){
var G__39597 = arguments.length;
switch (G__39597) {
case 4:
return clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$4 = (function (type,lexeme,pos,len){
return clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$5(type,lexeme,pos,len,null);
}));

(clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$5 = (function (type,lexeme,pos,len,literal){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"lexeme","lexeme",750515121),lexeme,new cljs.core.Keyword(null,"literal","literal",1664775605),literal,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"len","len",1423657078),len], null);
}));

(clojulator.calculator.token.token.cljs$lang$maxFixedArity = 5);

/**
 * Given a number and a position, return a token
 */
clojulator.calculator.token.number__GT_token = (function clojulator$calculator$token$number__GT_token(n,pos){
var lexeme = cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
return clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"Number","Number",2146289584),lexeme,pos,((lexeme).length),cljs.core.parse_double(n));
});
/**
 * Given a symbol and a position, return a token
 */
clojulator.calculator.token.symbol__GT_token = (function clojulator$calculator$token$symbol__GT_token(s,pos){
var temp__5823__auto__ = (clojulator.calculator.token.symbol_tokens.cljs$core$IFn$_invoke$arity$1 ? clojulator.calculator.token.symbol_tokens.cljs$core$IFn$_invoke$arity$1(s) : clojulator.calculator.token.symbol_tokens.call(null, s));
if(cljs.core.truth_(temp__5823__auto__)){
var token_type = temp__5823__auto__;
var lexeme = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
return clojulator.calculator.token.token.cljs$core$IFn$_invoke$arity$4(token_type,lexeme,pos,((lexeme).length));
} else {
return null;
}
});
clojulator.calculator.token.token_type = (function clojulator$calculator$token$token_type(token){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
});
clojulator.calculator.token.lexeme = (function clojulator$calculator$token$lexeme(token){
return new cljs.core.Keyword(null,"lexeme","lexeme",750515121).cljs$core$IFn$_invoke$arity$1(token);
});
clojulator.calculator.token.literal = (function clojulator$calculator$token$literal(token){
return new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(token);
});
clojulator.calculator.token.pos = (function clojulator$calculator$token$pos(token){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(token);
});
clojulator.calculator.token.length = (function clojulator$calculator$token$length(token){
return new cljs.core.Keyword(null,"len","len",1423657078).cljs$core$IFn$_invoke$arity$1(token);
});

//# sourceMappingURL=clojulator.calculator.token.js.map
