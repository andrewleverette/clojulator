goog.provide('clojulator.calculator.evaluator');
if((typeof clojulator !== 'undefined') && (typeof clojulator.calculator !== 'undefined') && (typeof clojulator.calculator.evaluator !== 'undefined') && (typeof clojulator.calculator.evaluator.evaluate !== 'undefined')){
} else {
/**
 * Polymorphic evaluator for AST nodes
 */
clojulator.calculator.evaluator.evaluate = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__39554 = cljs.core.get_global_hierarchy;
return (fexpr__39554.cljs$core$IFn$_invoke$arity$0 ? fexpr__39554.cljs$core$IFn$_invoke$arity$0() : fexpr__39554.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojulator.calculator.evaluator","evaluate"),(function (node,_history){
return cljs.core.first(node);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Env","Env",-701833983),(function (node,history){
var var_name = cljs.core.second(node);
var G__39555 = var_name;
switch (G__39555) {
case "p1":
return clojulator.calculator.history.repl1(history);

break;
case "p2":
return clojulator.calculator.history.repl2(history);

break;
case "p3":
return clojulator.calculator.history.repl3(history);

break;
default:
throw (new Error(["Unknown evnironment variable: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)].join('')));

}
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Number","Number",2146289584),(function (node,_history){
return cljs.core.second(node);
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Group","Group",843938593),(function (node,history){
return clojulator.calculator.evaluator.evaluate.cljs$core$IFn$_invoke$arity$2(cljs.core.second(node),history);
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Caret","Caret",-1540274476),(function (node,history){
var G__39557 = history;
var G__39558 = Math.pow;
var G__39559 = cljs.core.rest(node);
return (clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3 ? clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3(G__39557,G__39558,G__39559) : clojulator.calculator.evaluator.map_eval_reduce.call(null, G__39557,G__39558,G__39559));
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Star","Star",-1936795745),(function (node,history){
var G__39562 = history;
var G__39563 = cljs.core._STAR_;
var G__39564 = cljs.core.rest(node);
return (clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3 ? clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3(G__39562,G__39563,G__39564) : clojulator.calculator.evaluator.map_eval_reduce.call(null, G__39562,G__39563,G__39564));
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Slash","Slash",-849804014),(function (node,history){
var G__39572 = history;
var G__39573 = cljs.core._SLASH_;
var G__39574 = cljs.core.rest(node);
return (clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3 ? clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3(G__39572,G__39573,G__39574) : clojulator.calculator.evaluator.map_eval_reduce.call(null, G__39572,G__39573,G__39574));
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Modulo","Modulo",2146620041),(function (node,history){
var G__39575 = history;
var G__39576 = cljs.core.mod;
var G__39577 = cljs.core.rest(node);
return (clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3 ? clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3(G__39575,G__39576,G__39577) : clojulator.calculator.evaluator.map_eval_reduce.call(null, G__39575,G__39576,G__39577));
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Plus","Plus",16515439),(function (node,history){
var G__39581 = history;
var G__39582 = cljs.core._PLUS_;
var G__39583 = cljs.core.rest(node);
return (clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3 ? clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3(G__39581,G__39582,G__39583) : clojulator.calculator.evaluator.map_eval_reduce.call(null, G__39581,G__39582,G__39583));
}));
clojulator.calculator.evaluator.evaluate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"Minus","Minus",-181221775),(function (node,history){
var remaining = cljs.core.rest(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(remaining))){
return (- clojulator.calculator.evaluator.evaluate.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),history));
} else {
return (clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3 ? clojulator.calculator.evaluator.map_eval_reduce.cljs$core$IFn$_invoke$arity$3(history,cljs.core._,remaining) : clojulator.calculator.evaluator.map_eval_reduce.call(null, history,cljs.core._,remaining));
}
}));
/**
 * Helper function for mapping and reducing 
 *   over a collection of AST nodes.
 */
clojulator.calculator.evaluator.map_eval_reduce = (function clojulator$calculator$evaluator$map_eval_reduce(history,f,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39587_SHARP_){
return clojulator.calculator.evaluator.evaluate.cljs$core$IFn$_invoke$arity$2(p1__39587_SHARP_,history);
}),coll));
});

//# sourceMappingURL=clojulator.calculator.evaluator.js.map
