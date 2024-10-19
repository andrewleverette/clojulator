goog.provide('clojulator.calculator.scanner');
clojulator.calculator.scanner.is_repl_symbol_QMARK_ = (function clojulator$calculator$scanner$is_repl_symbol_QMARK_(chars){
var temp__5823__auto__ = cljs.core.first(chars);
if(cljs.core.truth_(temp__5823__auto__)){
var c = temp__5823__auto__;
var G__29189 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(chars))].join('');
return (clojulator.calculator.token.symbol_tokens.cljs$core$IFn$_invoke$arity$1 ? clojulator.calculator.token.symbol_tokens.cljs$core$IFn$_invoke$arity$1(G__29189) : clojulator.calculator.token.symbol_tokens.call(null, G__29189));
} else {
return null;
}
});
clojulator.calculator.scanner.is_symbol_QMARK_ = (function clojulator$calculator$scanner$is_symbol_QMARK_(c){
return (clojulator.calculator.token.symbol_tokens.cljs$core$IFn$_invoke$arity$1 ? clojulator.calculator.token.symbol_tokens.cljs$core$IFn$_invoke$arity$1(c) : clojulator.calculator.token.symbol_tokens.call(null, c));
});
clojulator.calculator.scanner.is_digit_QMARK_ = (function clojulator$calculator$scanner$is_digit_QMARK_(c){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,c)){
return cljs.core.re_matches(/\d/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
} else {
return null;
}
});
clojulator.calculator.scanner.is_whitespace_QMARK_ = (function clojulator$calculator$scanner$is_whitespace_QMARK_(c){
return cljs.core.re_matches(/\s/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
});
clojulator.calculator.scanner.ignore_whitespace = (function clojulator$calculator$scanner$ignore_whitespace(chars){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(clojulator.calculator.scanner.is_whitespace_QMARK_,chars);
});
clojulator.calculator.scanner.integer_lexeme = (function clojulator$calculator$scanner$integer_lexeme(chars){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(clojulator.calculator.scanner.is_digit_QMARK_,chars));
});
clojulator.calculator.scanner.fractional_lexeme = (function clojulator$calculator$scanner$fractional_lexeme(chars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(chars))){
return clojulator.calculator.scanner.integer_lexeme(cljs.core.rest(chars));
} else {
return null;
}
});
clojulator.calculator.scanner.number_lexeme = (function clojulator$calculator$scanner$number_lexeme(chars){
var int_part = clojulator.calculator.scanner.integer_lexeme(chars);
var int_length = cljs.core.count(int_part);
var fractional_part = clojulator.calculator.scanner.fractional_lexeme(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(int_length,chars));
if(cljs.core.empty_QMARK_(fractional_part)){
return int_part;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(int_part),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fractional_part)].join('');
}
});
clojulator.calculator.scanner.repl_lexeme = (function clojulator$calculator$scanner$repl_lexeme(chars){
var temp__5823__auto__ = cljs.core.first(chars);
if(cljs.core.truth_(temp__5823__auto__)){
var c = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(chars))].join('');
} else {
return null;
}
});
/**
 * Scans for the next token in the source string ignoring whitespace.
 */
clojulator.calculator.scanner.scan_token = (function clojulator$calculator$scanner$scan_token(characters,index){
if(cljs.core.seq(characters)){
var trimmed = clojulator.calculator.scanner.ignore_whitespace(characters);
var offset = (cljs.core.count(characters) - cljs.core.count(trimmed));
var pos = (index + offset);
var temp__5823__auto__ = cljs.core.first(trimmed);
if(cljs.core.truth_(temp__5823__auto__)){
var c = temp__5823__auto__;
if(cljs.core.truth_(clojulator.calculator.scanner.is_repl_symbol_QMARK_(trimmed))){
return clojulator.calculator.token.symbol__GT_token(clojulator.calculator.scanner.repl_lexeme(trimmed),pos);
} else {
if(cljs.core.truth_(clojulator.calculator.scanner.is_symbol_QMARK_(c))){
return clojulator.calculator.token.symbol__GT_token(c,pos);
} else {
if(cljs.core.truth_(clojulator.calculator.scanner.is_digit_QMARK_(c))){
return clojulator.calculator.token.number__GT_token(clojulator.calculator.scanner.number_lexeme(trimmed),pos);
} else {
throw (new Error(["Unknown character: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"' at position ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos)].join('')));

}
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a string, returns a list of tokens.
 */
clojulator.calculator.scanner.tokenize = (function clojulator$calculator$scanner$tokenize(source){
var chars = cljs.core.seq(source);
var index = (0);
var tokens = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5821__auto__ = clojulator.calculator.scanner.scan_token(chars,index);
if(cljs.core.truth_(temp__5821__auto__)){
var token = temp__5821__auto__;
var delta = ((clojulator.calculator.token.pos(token) + clojulator.calculator.token.length(token)) - index);
var G__29190 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(delta,chars);
var G__29191 = (index + delta);
var G__29192 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tokens,token);
chars = G__29190;
index = G__29191;
tokens = G__29192;
continue;
} else {
return tokens;
}
break;
}
});

//# sourceMappingURL=clojulator.calculator.scanner.js.map
