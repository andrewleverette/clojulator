goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37580__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37581__i = 0, G__37581__a = new Array(arguments.length -  0);
while (G__37581__i < G__37581__a.length) {G__37581__a[G__37581__i] = arguments[G__37581__i + 0]; ++G__37581__i;}
  args = new cljs.core.IndexedSeq(G__37581__a,0,null);
} 
return G__37580__delegate.call(this,args);};
G__37580.cljs$lang$maxFixedArity = 0;
G__37580.cljs$lang$applyTo = (function (arglist__37582){
var args = cljs.core.seq(arglist__37582);
return G__37580__delegate(args);
});
G__37580.cljs$core$IFn$_invoke$arity$variadic = G__37580__delegate;
return G__37580;
})()
);

(o.error = (function() { 
var G__37583__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37584__i = 0, G__37584__a = new Array(arguments.length -  0);
while (G__37584__i < G__37584__a.length) {G__37584__a[G__37584__i] = arguments[G__37584__i + 0]; ++G__37584__i;}
  args = new cljs.core.IndexedSeq(G__37584__a,0,null);
} 
return G__37583__delegate.call(this,args);};
G__37583.cljs$lang$maxFixedArity = 0;
G__37583.cljs$lang$applyTo = (function (arglist__37585){
var args = cljs.core.seq(arglist__37585);
return G__37583__delegate(args);
});
G__37583.cljs$core$IFn$_invoke$arity$variadic = G__37583__delegate;
return G__37583;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
