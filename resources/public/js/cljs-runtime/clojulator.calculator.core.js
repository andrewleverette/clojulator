goog.provide('clojulator.calculator.core');
/**
 * Given an expressions as a string, attempts to parse
 *   the string and return the result. Updates the given
 *   history object with the result.
 */
clojulator.calculator.core.calculate = (function clojulator$calculator$core$calculate(expression,history){
try{var result = clojulator.calculator.evaluator.evaluate.cljs$core$IFn$_invoke$arity$2(clojulator.calculator.parser.parse(clojulator.calculator.scanner.tokenize(expression)),history);
clojulator.calculator.history.update_history(history,result);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),result], null);
}catch (e28999){if((e28999 instanceof Error)){
var e = e28999;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e)], null);
} else {
throw e28999;

}
}});

//# sourceMappingURL=clojulator.calculator.core.js.map
