goog.provide('clojulator.web.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"lastResult","lastResult",-1258608695),""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate","calculate",-1224644403),(function (db,p__39872){
var vec__39873 = p__39872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39873,(0),null);
var expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39873,(1),null);
var vec__39876 = clojulator.calculator.core.calculate(expression,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db));
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"lastResult","lastResult",-1258608695),result);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"last-result","last-result",-1032519070),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"lastResult","lastResult",-1258608695).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
clojulator.web.core.expression_input = (function clojulator$web$core$expression_input(value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"expressionInput",new cljs.core.Keyword(null,"class","class",-2030961996),"form-label"], null),"Expression"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),"expressionInput",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39882_SHARP_){
return cljs.core.reset_BANG_(value,p1__39882_SHARP_.target.value);
})], null)], null)], null);
});
clojulator.web.core.output_view = (function clojulator$web$core$output_view(){
var result = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-result","last-result",-1032519070)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"expressionOutput",new cljs.core.Keyword(null,"class","class",-2030961996),"form-label"], null),"Result"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),"expressionOutput",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(result),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null);
});
clojulator.web.core.calculator_view = (function clojulator$web$core$calculator_view(){
var expression = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-50"], null),clojulator.web.core.expression_input(expression),clojulator.web.core.output_view(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-3 d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),cljs.core.deref(expression)], null));
})], null),"Calculate"], null)], null)], null);
});
});
clojulator.web.core.index = (function clojulator$web$core$index(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex flex-column align-items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Clojulator"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojulator.web.core.calculator_view], null)], null);
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
