goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31508){
var map__31509 = p__31508;
var map__31509__$1 = cljs.core.__destructure_map(map__31509);
var runtime = map__31509__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31509__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31781 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31781)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__31517 = runtime;
var G__31519 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31781);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__31517,G__31519) : shadow.remote.runtime.shared.process.call(null, G__31517,G__31519));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31540,res){
var map__31548 = p__31540;
var map__31548__$1 = cljs.core.__destructure_map(map__31548);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31548__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31548__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31549 = res;
var G__31549__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31549,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31549);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31549__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31549__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31557 = arguments.length;
switch (G__31557) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31560,msg,handlers,timeout_after_ms){
var map__31570 = p__31560;
var map__31570__$1 = cljs.core.__destructure_map(map__31570);
var runtime = map__31570__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31570__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31785 = arguments.length;
var i__5727__auto___31786 = (0);
while(true){
if((i__5727__auto___31786 < len__5726__auto___31785)){
args__5732__auto__.push((arguments[i__5727__auto___31786]));

var G__31787 = (i__5727__auto___31786 + (1));
i__5727__auto___31786 = G__31787;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31639,ev,args){
var map__31644 = p__31639;
var map__31644__$1 = cljs.core.__destructure_map(map__31644);
var runtime = map__31644__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31644__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31645 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31648 = null;
var count__31649 = (0);
var i__31650 = (0);
while(true){
if((i__31650 < count__31649)){
var ext = chunk__31648.cljs$core$IIndexed$_nth$arity$2(null, i__31650);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31788 = seq__31645;
var G__31789 = chunk__31648;
var G__31790 = count__31649;
var G__31791 = (i__31650 + (1));
seq__31645 = G__31788;
chunk__31648 = G__31789;
count__31649 = G__31790;
i__31650 = G__31791;
continue;
} else {
var G__31792 = seq__31645;
var G__31793 = chunk__31648;
var G__31794 = count__31649;
var G__31795 = (i__31650 + (1));
seq__31645 = G__31792;
chunk__31648 = G__31793;
count__31649 = G__31794;
i__31650 = G__31795;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31645);
if(temp__5823__auto__){
var seq__31645__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31645__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31645__$1);
var G__31797 = cljs.core.chunk_rest(seq__31645__$1);
var G__31798 = c__5525__auto__;
var G__31799 = cljs.core.count(c__5525__auto__);
var G__31800 = (0);
seq__31645 = G__31797;
chunk__31648 = G__31798;
count__31649 = G__31799;
i__31650 = G__31800;
continue;
} else {
var ext = cljs.core.first(seq__31645__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31801 = cljs.core.next(seq__31645__$1);
var G__31802 = null;
var G__31803 = (0);
var G__31804 = (0);
seq__31645 = G__31801;
chunk__31648 = G__31802;
count__31649 = G__31803;
i__31650 = G__31804;
continue;
} else {
var G__31805 = cljs.core.next(seq__31645__$1);
var G__31806 = null;
var G__31807 = (0);
var G__31808 = (0);
seq__31645 = G__31805;
chunk__31648 = G__31806;
count__31649 = G__31807;
i__31650 = G__31808;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31619){
var G__31620 = cljs.core.first(seq31619);
var seq31619__$1 = cljs.core.next(seq31619);
var G__31621 = cljs.core.first(seq31619__$1);
var seq31619__$2 = cljs.core.next(seq31619__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31620,G__31621,seq31619__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31663,p__31664){
var map__31665 = p__31663;
var map__31665__$1 = cljs.core.__destructure_map(map__31665);
var runtime = map__31665__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31665__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31666 = p__31664;
var map__31666__$1 = cljs.core.__destructure_map(map__31666);
var msg = map__31666__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31666__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31667 = cljs.core.deref(state_ref);
var map__31667__$1 = cljs.core.__destructure_map(map__31667);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31672,msg){
var map__31673 = p__31672;
var map__31673__$1 = cljs.core.__destructure_map(map__31673);
var runtime = map__31673__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31678,key,p__31679){
var map__31680 = p__31678;
var map__31680__$1 = cljs.core.__destructure_map(map__31680);
var state = map__31680__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31680__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31681 = p__31679;
var map__31681__$1 = cljs.core.__destructure_map(map__31681);
var spec = map__31681__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31681__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31681__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31690,key,spec){
var map__31691 = p__31690;
var map__31691__$1 = cljs.core.__destructure_map(map__31691);
var runtime = map__31691__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___31829 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___31829 == null)){
} else {
var on_welcome_31832 = temp__5827__auto___31829;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31832.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31832.cljs$core$IFn$_invoke$arity$0() : on_welcome_31832.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31707_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31707_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31709_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31709_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31710_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31710_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31711_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31711_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31712_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31712_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31723,key){
var map__31724 = p__31723;
var map__31724__$1 = cljs.core.__destructure_map(map__31724);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31724__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31728,msg){
var map__31730 = p__31728;
var map__31730__$1 = cljs.core.__destructure_map(map__31730);
var runtime = map__31730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31734,p__31735){
var map__31736 = p__31734;
var map__31736__$1 = cljs.core.__destructure_map(map__31736);
var runtime = map__31736__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31737 = p__31735;
var map__31737__$1 = cljs.core.__destructure_map(map__31737);
var msg = map__31737__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31737__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31737__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31745 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31747 = null;
var count__31748 = (0);
var i__31749 = (0);
while(true){
if((i__31749 < count__31748)){
var map__31767 = chunk__31747.cljs$core$IIndexed$_nth$arity$2(null, i__31749);
var map__31767__$1 = cljs.core.__destructure_map(map__31767);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31870 = seq__31745;
var G__31871 = chunk__31747;
var G__31872 = count__31748;
var G__31873 = (i__31749 + (1));
seq__31745 = G__31870;
chunk__31747 = G__31871;
count__31748 = G__31872;
i__31749 = G__31873;
continue;
} else {
var G__31874 = seq__31745;
var G__31875 = chunk__31747;
var G__31876 = count__31748;
var G__31877 = (i__31749 + (1));
seq__31745 = G__31874;
chunk__31747 = G__31875;
count__31748 = G__31876;
i__31749 = G__31877;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31745);
if(temp__5823__auto__){
var seq__31745__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31745__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31745__$1);
var G__31878 = cljs.core.chunk_rest(seq__31745__$1);
var G__31879 = c__5525__auto__;
var G__31880 = cljs.core.count(c__5525__auto__);
var G__31881 = (0);
seq__31745 = G__31878;
chunk__31747 = G__31879;
count__31748 = G__31880;
i__31749 = G__31881;
continue;
} else {
var map__31771 = cljs.core.first(seq__31745__$1);
var map__31771__$1 = cljs.core.__destructure_map(map__31771);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31771__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31886 = cljs.core.next(seq__31745__$1);
var G__31887 = null;
var G__31888 = (0);
var G__31889 = (0);
seq__31745 = G__31886;
chunk__31747 = G__31887;
count__31748 = G__31888;
i__31749 = G__31889;
continue;
} else {
var G__31892 = cljs.core.next(seq__31745__$1);
var G__31893 = null;
var G__31894 = (0);
var G__31895 = (0);
seq__31745 = G__31892;
chunk__31747 = G__31893;
count__31748 = G__31894;
i__31749 = G__31895;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
