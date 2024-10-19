goog.provide('clojulator.web.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"last-expression","last-expression",-1877747714),"",new cljs.core.Keyword(null,"last-result","last-result",-1032519070),""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate","calculate",-1224644403),(function (db,p__29182){
var vec__29183 = p__29182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29183,(0),null);
var expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29183,(1),null);
var vec__29186 = clojulator.calculator.core.calculate(expression,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db));
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"last-expression","last-expression",-1877747714),expression),new cljs.core.Keyword(null,"last-result","last-result",-1032519070),result);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"last-expression","last-expression",-1877747714),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"last-expression","last-expression",-1877747714).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"last-result","last-result",-1032519070),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"lastResult","lastResult",-1258608695).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
clojulator.web.core.header = (function clojulator$web$core$header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Clojulator!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"A calculator written in Clojure"], null)], null);
});
clojulator.web.core.display = (function clojulator$web$core$display(output){
return null;
});
clojulator.web.core.calculator_view = (function clojulator$web$core$calculator_view(){
return null;
});
clojulator.web.core.index = (function clojulator$web$core$index(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center min-h-screen"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojulator.web.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojulator.web.core.calculator_view], null)], null);
});
if((typeof clojulator !== 'undefined') && (typeof clojulator.web !== 'undefined') && (typeof clojulator.web.core !== 'undefined') && (typeof clojulator.web.core.root_container !== 'undefined')){
} else {
clojulator.web.core.root_container = reagent.dom.client.create_root(document.getElementById("app"));
}
clojulator.web.core.mount_ui = (function clojulator$web$core$mount_ui(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(clojulator.web.core.root_container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojulator.web.core.index], null));
});
clojulator.web.core.main = (function clojulator$web$core$main(){
cljs.core.enable_console_print_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return clojulator.web.core.mount_ui();
});
goog.exportSymbol('clojulator.web.core.main', clojulator.web.core.main);

//# sourceMappingURL=clojulator.web.core.js.map
