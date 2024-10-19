goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35873){
var map__35895 = p__35873;
var map__35895__$1 = cljs.core.__destructure_map(map__35895);
var m = map__35895__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35934_36304 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35935_36305 = null;
var count__35936_36306 = (0);
var i__35937_36307 = (0);
while(true){
if((i__35937_36307 < count__35936_36306)){
var f_36310 = chunk__35935_36305.cljs$core$IIndexed$_nth$arity$2(null, i__35937_36307);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36310], 0));


var G__36318 = seq__35934_36304;
var G__36319 = chunk__35935_36305;
var G__36320 = count__35936_36306;
var G__36321 = (i__35937_36307 + (1));
seq__35934_36304 = G__36318;
chunk__35935_36305 = G__36319;
count__35936_36306 = G__36320;
i__35937_36307 = G__36321;
continue;
} else {
var temp__5823__auto___36322 = cljs.core.seq(seq__35934_36304);
if(temp__5823__auto___36322){
var seq__35934_36323__$1 = temp__5823__auto___36322;
if(cljs.core.chunked_seq_QMARK_(seq__35934_36323__$1)){
var c__5525__auto___36324 = cljs.core.chunk_first(seq__35934_36323__$1);
var G__36325 = cljs.core.chunk_rest(seq__35934_36323__$1);
var G__36326 = c__5525__auto___36324;
var G__36327 = cljs.core.count(c__5525__auto___36324);
var G__36328 = (0);
seq__35934_36304 = G__36325;
chunk__35935_36305 = G__36326;
count__35936_36306 = G__36327;
i__35937_36307 = G__36328;
continue;
} else {
var f_36329 = cljs.core.first(seq__35934_36323__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36329], 0));


var G__36331 = cljs.core.next(seq__35934_36323__$1);
var G__36332 = null;
var G__36333 = (0);
var G__36334 = (0);
seq__35934_36304 = G__36331;
chunk__35935_36305 = G__36332;
count__35936_36306 = G__36333;
i__35937_36307 = G__36334;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36336 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36336], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36336)))?cljs.core.second(arglists_36336):arglists_36336)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35965_36358 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35966_36359 = null;
var count__35967_36360 = (0);
var i__35968_36361 = (0);
while(true){
if((i__35968_36361 < count__35967_36360)){
var vec__35980_36362 = chunk__35966_36359.cljs$core$IIndexed$_nth$arity$2(null, i__35968_36361);
var name_36363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980_36362,(0),null);
var map__35983_36364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980_36362,(1),null);
var map__35983_36365__$1 = cljs.core.__destructure_map(map__35983_36364);
var doc_36366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983_36365__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983_36365__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36363], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36367], 0));

if(cljs.core.truth_(doc_36366)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36366], 0));
} else {
}


var G__36369 = seq__35965_36358;
var G__36370 = chunk__35966_36359;
var G__36371 = count__35967_36360;
var G__36372 = (i__35968_36361 + (1));
seq__35965_36358 = G__36369;
chunk__35966_36359 = G__36370;
count__35967_36360 = G__36371;
i__35968_36361 = G__36372;
continue;
} else {
var temp__5823__auto___36373 = cljs.core.seq(seq__35965_36358);
if(temp__5823__auto___36373){
var seq__35965_36377__$1 = temp__5823__auto___36373;
if(cljs.core.chunked_seq_QMARK_(seq__35965_36377__$1)){
var c__5525__auto___36378 = cljs.core.chunk_first(seq__35965_36377__$1);
var G__36379 = cljs.core.chunk_rest(seq__35965_36377__$1);
var G__36380 = c__5525__auto___36378;
var G__36381 = cljs.core.count(c__5525__auto___36378);
var G__36382 = (0);
seq__35965_36358 = G__36379;
chunk__35966_36359 = G__36380;
count__35967_36360 = G__36381;
i__35968_36361 = G__36382;
continue;
} else {
var vec__35985_36383 = cljs.core.first(seq__35965_36377__$1);
var name_36384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35985_36383,(0),null);
var map__35988_36385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35985_36383,(1),null);
var map__35988_36386__$1 = cljs.core.__destructure_map(map__35988_36385);
var doc_36387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35988_36386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35988_36386__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36384], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36388], 0));

if(cljs.core.truth_(doc_36387)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36387], 0));
} else {
}


var G__36393 = cljs.core.next(seq__35965_36377__$1);
var G__36394 = null;
var G__36395 = (0);
var G__36396 = (0);
seq__35965_36358 = G__36393;
chunk__35966_36359 = G__36394;
count__35967_36360 = G__36395;
i__35968_36361 = G__36396;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35989 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35990 = null;
var count__35991 = (0);
var i__35992 = (0);
while(true){
if((i__35992 < count__35991)){
var role = chunk__35990.cljs$core$IIndexed$_nth$arity$2(null, i__35992);
var temp__5823__auto___36404__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___36404__$1)){
var spec_36409 = temp__5823__auto___36404__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36409)], 0));
} else {
}


var G__36412 = seq__35989;
var G__36413 = chunk__35990;
var G__36414 = count__35991;
var G__36415 = (i__35992 + (1));
seq__35989 = G__36412;
chunk__35990 = G__36413;
count__35991 = G__36414;
i__35992 = G__36415;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__35989);
if(temp__5823__auto____$1){
var seq__35989__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35989__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35989__$1);
var G__36427 = cljs.core.chunk_rest(seq__35989__$1);
var G__36428 = c__5525__auto__;
var G__36429 = cljs.core.count(c__5525__auto__);
var G__36430 = (0);
seq__35989 = G__36427;
chunk__35990 = G__36428;
count__35991 = G__36429;
i__35992 = G__36430;
continue;
} else {
var role = cljs.core.first(seq__35989__$1);
var temp__5823__auto___36435__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___36435__$2)){
var spec_36436 = temp__5823__auto___36435__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36436)], 0));
} else {
}


var G__36437 = cljs.core.next(seq__35989__$1);
var G__36438 = null;
var G__36439 = (0);
var G__36440 = (0);
seq__35989 = G__36437;
chunk__35990 = G__36438;
count__35991 = G__36439;
i__35992 = G__36440;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36035 = datafied_throwable;
var map__36035__$1 = cljs.core.__destructure_map(map__36035);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36035__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36036 = cljs.core.last(via);
var map__36036__$1 = cljs.core.__destructure_map(map__36036);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36036__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36036__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36036__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36037 = data;
var map__36037__$1 = cljs.core.__destructure_map(map__36037);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36038 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36038__$1 = cljs.core.__destructure_map(map__36038);
var top_data = map__36038__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36041 = phase;
var G__36041__$1 = (((G__36041 instanceof cljs.core.Keyword))?G__36041.fqn:null);
switch (G__36041__$1) {
case "read-source":
var map__36042 = data;
var map__36042__$1 = cljs.core.__destructure_map(map__36042);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36043 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36043__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36043,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36043);
var G__36043__$2 = (cljs.core.truth_((function (){var fexpr__36044 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36044.cljs$core$IFn$_invoke$arity$1 ? fexpr__36044.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36044.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36043__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36043__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36043__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36043__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36049 = top_data;
var G__36049__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36049,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36049);
var G__36049__$2 = (cljs.core.truth_((function (){var fexpr__36082 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36082.cljs$core$IFn$_invoke$arity$1 ? fexpr__36082.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36082.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36049__$1);
var G__36049__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36049__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36049__$2);
var G__36049__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36049__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36049__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36049__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36049__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36131 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(3),null);
var G__36138 = top_data;
var G__36138__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36138,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36138);
var G__36138__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36138__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36138__$1);
var G__36138__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36138__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36138__$2);
var G__36138__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36138__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36138__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36138__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36138__$4;
}

break;
case "execution":
var vec__36144 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36031_SHARP_){
var or__5002__auto__ = (p1__36031_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__36148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36148.cljs$core$IFn$_invoke$arity$1 ? fexpr__36148.cljs$core$IFn$_invoke$arity$1(p1__36031_SHARP_) : fexpr__36148.call(null, p1__36031_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__36151 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36151__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36151,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36151);
var G__36151__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36151__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36151__$1);
var G__36151__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36151__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36151__$2);
var G__36151__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36151__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36151__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36151__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36151__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36041__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36180){
var map__36181 = p__36180;
var map__36181__$1 = cljs.core.__destructure_map(map__36181);
var triage_data = map__36181__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36207 = phase;
var G__36207__$1 = (((G__36207 instanceof cljs.core.Keyword))?G__36207.fqn:null);
switch (G__36207__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36211 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36212 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36213 = loc;
var G__36214 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36218_36453 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36219_36454 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36220_36455 = true;
var _STAR_print_fn_STAR__temp_val__36221_36456 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36220_36455);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36221_36456);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36160_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36160_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36219_36454);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36218_36453);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36211,G__36212,G__36213,G__36214) : format.call(null, G__36211,G__36212,G__36213,G__36214));

break;
case "macroexpansion":
var G__36222 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36223 = cause_type;
var G__36224 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36225 = loc;
var G__36226 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36222,G__36223,G__36224,G__36225,G__36226) : format.call(null, G__36222,G__36223,G__36224,G__36225,G__36226));

break;
case "compile-syntax-check":
var G__36227 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36228 = cause_type;
var G__36229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36230 = loc;
var G__36231 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36227,G__36228,G__36229,G__36230,G__36231) : format.call(null, G__36227,G__36228,G__36229,G__36230,G__36231));

break;
case "compilation":
var G__36236 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36237 = cause_type;
var G__36238 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36239 = loc;
var G__36240 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36236,G__36237,G__36238,G__36239,G__36240) : format.call(null, G__36236,G__36237,G__36238,G__36239,G__36240));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36248 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36249 = symbol;
var G__36250 = loc;
var G__36251 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36259_36459 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36260_36460 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36261_36461 = true;
var _STAR_print_fn_STAR__temp_val__36262_36462 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36261_36461);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36262_36462);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36167_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36167_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36260_36460);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36259_36459);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36248,G__36249,G__36250,G__36251) : format.call(null, G__36248,G__36249,G__36250,G__36251));
} else {
var G__36270 = "Execution error%s at %s(%s).\n%s\n";
var G__36271 = cause_type;
var G__36272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36273 = loc;
var G__36274 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36270,G__36271,G__36272,G__36273,G__36274) : format.call(null, G__36270,G__36271,G__36272,G__36273,G__36274));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36207__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
