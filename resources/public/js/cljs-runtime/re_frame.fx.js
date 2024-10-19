goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39630 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39631 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39631);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___39723 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___39723)){
var new_db_39724 = temp__5823__auto___39723;
var fexpr__39635_39725 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39635_39725.cljs$core$IFn$_invoke$arity$1 ? fexpr__39635_39725.cljs$core$IFn$_invoke$arity$1(new_db_39724) : fexpr__39635_39725.call(null, new_db_39724));
} else {
}

var seq__39636 = cljs.core.seq(effects_without_db);
var chunk__39637 = null;
var count__39638 = (0);
var i__39639 = (0);
while(true){
if((i__39639 < count__39638)){
var vec__39648 = chunk__39637.cljs$core$IIndexed$_nth$arity$2(null, i__39639);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39648,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39648,(1),null);
var temp__5821__auto___39726 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___39726)){
var effect_fn_39727 = temp__5821__auto___39726;
(effect_fn_39727.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39727.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39727.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39728 = seq__39636;
var G__39729 = chunk__39637;
var G__39730 = count__39638;
var G__39731 = (i__39639 + (1));
seq__39636 = G__39728;
chunk__39637 = G__39729;
count__39638 = G__39730;
i__39639 = G__39731;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39636);
if(temp__5823__auto__){
var seq__39636__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39636__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39636__$1);
var G__39732 = cljs.core.chunk_rest(seq__39636__$1);
var G__39733 = c__5525__auto__;
var G__39734 = cljs.core.count(c__5525__auto__);
var G__39735 = (0);
seq__39636 = G__39732;
chunk__39637 = G__39733;
count__39638 = G__39734;
i__39639 = G__39735;
continue;
} else {
var vec__39655 = cljs.core.first(seq__39636__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39655,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39655,(1),null);
var temp__5821__auto___39736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___39736)){
var effect_fn_39737 = temp__5821__auto___39736;
(effect_fn_39737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39737.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39738 = cljs.core.next(seq__39636__$1);
var G__39739 = null;
var G__39740 = (0);
var G__39741 = (0);
seq__39636 = G__39738;
chunk__39637 = G__39739;
count__39638 = G__39740;
i__39639 = G__39741;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39232__auto___39742 = re_frame.interop.now();
var duration__39233__auto___39743 = (end__39232__auto___39742 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39233__auto___39743,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39232__auto___39742);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39630);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___39744 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___39744)){
var new_db_39745 = temp__5823__auto___39744;
var fexpr__39666_39746 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39666_39746.cljs$core$IFn$_invoke$arity$1 ? fexpr__39666_39746.cljs$core$IFn$_invoke$arity$1(new_db_39745) : fexpr__39666_39746.call(null, new_db_39745));
} else {
}

var seq__39667 = cljs.core.seq(effects_without_db);
var chunk__39668 = null;
var count__39669 = (0);
var i__39670 = (0);
while(true){
if((i__39670 < count__39669)){
var vec__39677 = chunk__39668.cljs$core$IIndexed$_nth$arity$2(null, i__39670);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(1),null);
var temp__5821__auto___39747 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___39747)){
var effect_fn_39748 = temp__5821__auto___39747;
(effect_fn_39748.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39748.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39748.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39749 = seq__39667;
var G__39750 = chunk__39668;
var G__39751 = count__39669;
var G__39752 = (i__39670 + (1));
seq__39667 = G__39749;
chunk__39668 = G__39750;
count__39669 = G__39751;
i__39670 = G__39752;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39667);
if(temp__5823__auto__){
var seq__39667__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39667__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39667__$1);
var G__39753 = cljs.core.chunk_rest(seq__39667__$1);
var G__39754 = c__5525__auto__;
var G__39755 = cljs.core.count(c__5525__auto__);
var G__39756 = (0);
seq__39667 = G__39753;
chunk__39668 = G__39754;
count__39669 = G__39755;
i__39670 = G__39756;
continue;
} else {
var vec__39680 = cljs.core.first(seq__39667__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(1),null);
var temp__5821__auto___39757 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___39757)){
var effect_fn_39758 = temp__5821__auto___39757;
(effect_fn_39758.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39758.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39758.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39759 = cljs.core.next(seq__39667__$1);
var G__39760 = null;
var G__39761 = (0);
var G__39762 = (0);
seq__39667 = G__39759;
chunk__39668 = G__39760;
count__39669 = G__39761;
i__39670 = G__39762;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39683){
var map__39684 = p__39683;
var map__39684__$1 = cljs.core.__destructure_map(map__39684);
var effect = map__39684__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39685 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39686 = null;
var count__39687 = (0);
var i__39688 = (0);
while(true){
if((i__39688 < count__39687)){
var effect = chunk__39686.cljs$core$IIndexed$_nth$arity$2(null, i__39688);
re_frame.fx.dispatch_later(effect);


var G__39763 = seq__39685;
var G__39764 = chunk__39686;
var G__39765 = count__39687;
var G__39766 = (i__39688 + (1));
seq__39685 = G__39763;
chunk__39686 = G__39764;
count__39687 = G__39765;
i__39688 = G__39766;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39685);
if(temp__5823__auto__){
var seq__39685__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39685__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39685__$1);
var G__39767 = cljs.core.chunk_rest(seq__39685__$1);
var G__39768 = c__5525__auto__;
var G__39769 = cljs.core.count(c__5525__auto__);
var G__39770 = (0);
seq__39685 = G__39767;
chunk__39686 = G__39768;
count__39687 = G__39769;
i__39688 = G__39770;
continue;
} else {
var effect = cljs.core.first(seq__39685__$1);
re_frame.fx.dispatch_later(effect);


var G__39771 = cljs.core.next(seq__39685__$1);
var G__39772 = null;
var G__39773 = (0);
var G__39774 = (0);
seq__39685 = G__39771;
chunk__39686 = G__39772;
count__39687 = G__39773;
i__39688 = G__39774;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39691 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39692 = null;
var count__39693 = (0);
var i__39694 = (0);
while(true){
if((i__39694 < count__39693)){
var vec__39707 = chunk__39692.cljs$core$IIndexed$_nth$arity$2(null, i__39694);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39707,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___39775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___39775)){
var effect_fn_39776 = temp__5821__auto___39775;
(effect_fn_39776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39776.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39777 = seq__39691;
var G__39778 = chunk__39692;
var G__39779 = count__39693;
var G__39780 = (i__39694 + (1));
seq__39691 = G__39777;
chunk__39692 = G__39778;
count__39693 = G__39779;
i__39694 = G__39780;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39691);
if(temp__5823__auto__){
var seq__39691__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39691__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39691__$1);
var G__39781 = cljs.core.chunk_rest(seq__39691__$1);
var G__39782 = c__5525__auto__;
var G__39783 = cljs.core.count(c__5525__auto__);
var G__39784 = (0);
seq__39691 = G__39781;
chunk__39692 = G__39782;
count__39693 = G__39783;
i__39694 = G__39784;
continue;
} else {
var vec__39710 = cljs.core.first(seq__39691__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39710,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39710,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___39785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___39785)){
var effect_fn_39786 = temp__5821__auto___39785;
(effect_fn_39786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39786.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39787 = cljs.core.next(seq__39691__$1);
var G__39788 = null;
var G__39789 = (0);
var G__39790 = (0);
seq__39691 = G__39787;
chunk__39692 = G__39788;
count__39693 = G__39789;
i__39694 = G__39790;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39713 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39714 = null;
var count__39715 = (0);
var i__39716 = (0);
while(true){
if((i__39716 < count__39715)){
var event = chunk__39714.cljs$core$IIndexed$_nth$arity$2(null, i__39716);
re_frame.router.dispatch(event);


var G__39793 = seq__39713;
var G__39794 = chunk__39714;
var G__39795 = count__39715;
var G__39796 = (i__39716 + (1));
seq__39713 = G__39793;
chunk__39714 = G__39794;
count__39715 = G__39795;
i__39716 = G__39796;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39713);
if(temp__5823__auto__){
var seq__39713__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39713__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39713__$1);
var G__39797 = cljs.core.chunk_rest(seq__39713__$1);
var G__39798 = c__5525__auto__;
var G__39799 = cljs.core.count(c__5525__auto__);
var G__39800 = (0);
seq__39713 = G__39797;
chunk__39714 = G__39798;
count__39715 = G__39799;
i__39716 = G__39800;
continue;
} else {
var event = cljs.core.first(seq__39713__$1);
re_frame.router.dispatch(event);


var G__39801 = cljs.core.next(seq__39713__$1);
var G__39802 = null;
var G__39803 = (0);
var G__39804 = (0);
seq__39713 = G__39801;
chunk__39714 = G__39802;
count__39715 = G__39803;
i__39716 = G__39804;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39717 = cljs.core.seq(value);
var chunk__39718 = null;
var count__39719 = (0);
var i__39720 = (0);
while(true){
if((i__39720 < count__39719)){
var event = chunk__39718.cljs$core$IIndexed$_nth$arity$2(null, i__39720);
clear_event(event);


var G__39805 = seq__39717;
var G__39806 = chunk__39718;
var G__39807 = count__39719;
var G__39808 = (i__39720 + (1));
seq__39717 = G__39805;
chunk__39718 = G__39806;
count__39719 = G__39807;
i__39720 = G__39808;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39717);
if(temp__5823__auto__){
var seq__39717__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39717__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39717__$1);
var G__39809 = cljs.core.chunk_rest(seq__39717__$1);
var G__39810 = c__5525__auto__;
var G__39811 = cljs.core.count(c__5525__auto__);
var G__39812 = (0);
seq__39717 = G__39809;
chunk__39718 = G__39810;
count__39719 = G__39811;
i__39720 = G__39812;
continue;
} else {
var event = cljs.core.first(seq__39717__$1);
clear_event(event);


var G__39813 = cljs.core.next(seq__39717__$1);
var G__39814 = null;
var G__39815 = (0);
var G__39816 = (0);
seq__39717 = G__39813;
chunk__39718 = G__39814;
count__39719 = G__39815;
i__39720 = G__39816;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39721 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39722 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39722);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39232__auto___39818 = re_frame.interop.now();
var duration__39233__auto___39819 = (end__39232__auto___39818 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39233__auto___39819,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39232__auto___39818);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39721);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
