goog.provide('clojulator.calculator.history');
clojulator.calculator.history.clear_history = (function clojulator$calculator$history$clear_history(history){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history,cljs.core.empty);
});
clojulator.calculator.history.update_history = (function clojulator$calculator$history$update_history(history,result){
var vec__39538 = cljs.core.deref(history);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(1),null);
return cljs.core.reset_BANG_(history,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,p1,p2], null));
});
clojulator.calculator.history.repl1 = (function clojulator$calculator$history$repl1(history){
return cljs.core.first(cljs.core.deref(history));
});
clojulator.calculator.history.repl2 = (function clojulator$calculator$history$repl2(history){
return cljs.core.second(cljs.core.deref(history));
});
clojulator.calculator.history.repl3 = (function clojulator$calculator$history$repl3(history){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(history),(2));
});

//# sourceMappingURL=clojulator.calculator.history.js.map
