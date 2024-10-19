goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29167 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29167(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29169 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29169(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28301 = coll;
var G__28302 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28301,G__28302) : shadow.dom.lazy_native_coll_seq.call(null, G__28301,G__28302));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28310 = arguments.length;
switch (G__28310) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28313 = arguments.length;
switch (G__28313) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28319 = arguments.length;
switch (G__28319) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28337 = arguments.length;
switch (G__28337) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28356 = arguments.length;
switch (G__28356) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28360 = arguments.length;
switch (G__28360) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e28371){if((e28371 instanceof Object)){
var e = e28371;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28371;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28373 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28374 = null;
var count__28375 = (0);
var i__28376 = (0);
while(true){
if((i__28376 < count__28375)){
var el = chunk__28374.cljs$core$IIndexed$_nth$arity$2(null, i__28376);
var handler_29195__$1 = ((function (seq__28373,chunk__28374,count__28375,i__28376,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28373,chunk__28374,count__28375,i__28376,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29195__$1);


var G__29199 = seq__28373;
var G__29200 = chunk__28374;
var G__29201 = count__28375;
var G__29202 = (i__28376 + (1));
seq__28373 = G__29199;
chunk__28374 = G__29200;
count__28375 = G__29201;
i__28376 = G__29202;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28373);
if(temp__5823__auto__){
var seq__28373__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28373__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28373__$1);
var G__29204 = cljs.core.chunk_rest(seq__28373__$1);
var G__29205 = c__5525__auto__;
var G__29206 = cljs.core.count(c__5525__auto__);
var G__29207 = (0);
seq__28373 = G__29204;
chunk__28374 = G__29205;
count__28375 = G__29206;
i__28376 = G__29207;
continue;
} else {
var el = cljs.core.first(seq__28373__$1);
var handler_29210__$1 = ((function (seq__28373,chunk__28374,count__28375,i__28376,el,seq__28373__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28373,chunk__28374,count__28375,i__28376,el,seq__28373__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29210__$1);


var G__29212 = cljs.core.next(seq__28373__$1);
var G__29213 = null;
var G__29214 = (0);
var G__29215 = (0);
seq__28373 = G__29212;
chunk__28374 = G__29213;
count__28375 = G__29214;
i__28376 = G__29215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28388 = arguments.length;
switch (G__28388) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28393 = cljs.core.seq(events);
var chunk__28394 = null;
var count__28395 = (0);
var i__28396 = (0);
while(true){
if((i__28396 < count__28395)){
var vec__28404 = chunk__28394.cljs$core$IIndexed$_nth$arity$2(null, i__28396);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28404,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29235 = seq__28393;
var G__29236 = chunk__28394;
var G__29237 = count__28395;
var G__29238 = (i__28396 + (1));
seq__28393 = G__29235;
chunk__28394 = G__29236;
count__28395 = G__29237;
i__28396 = G__29238;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28393);
if(temp__5823__auto__){
var seq__28393__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28393__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28393__$1);
var G__29240 = cljs.core.chunk_rest(seq__28393__$1);
var G__29241 = c__5525__auto__;
var G__29242 = cljs.core.count(c__5525__auto__);
var G__29243 = (0);
seq__28393 = G__29240;
chunk__28394 = G__29241;
count__28395 = G__29242;
i__28396 = G__29243;
continue;
} else {
var vec__28407 = cljs.core.first(seq__28393__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29245 = cljs.core.next(seq__28393__$1);
var G__29246 = null;
var G__29247 = (0);
var G__29248 = (0);
seq__28393 = G__29245;
chunk__28394 = G__29246;
count__28395 = G__29247;
i__28396 = G__29248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28414 = cljs.core.seq(styles);
var chunk__28415 = null;
var count__28416 = (0);
var i__28417 = (0);
while(true){
if((i__28417 < count__28416)){
var vec__28426 = chunk__28415.cljs$core$IIndexed$_nth$arity$2(null, i__28417);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29251 = seq__28414;
var G__29252 = chunk__28415;
var G__29253 = count__28416;
var G__29254 = (i__28417 + (1));
seq__28414 = G__29251;
chunk__28415 = G__29252;
count__28416 = G__29253;
i__28417 = G__29254;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28414);
if(temp__5823__auto__){
var seq__28414__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28414__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28414__$1);
var G__29260 = cljs.core.chunk_rest(seq__28414__$1);
var G__29261 = c__5525__auto__;
var G__29262 = cljs.core.count(c__5525__auto__);
var G__29263 = (0);
seq__28414 = G__29260;
chunk__28415 = G__29261;
count__28416 = G__29262;
i__28417 = G__29263;
continue;
} else {
var vec__28432 = cljs.core.first(seq__28414__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28432,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28432,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29269 = cljs.core.next(seq__28414__$1);
var G__29270 = null;
var G__29271 = (0);
var G__29272 = (0);
seq__28414 = G__29269;
chunk__28415 = G__29270;
count__28416 = G__29271;
i__28417 = G__29272;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28439_29276 = key;
var G__28439_29277__$1 = (((G__28439_29276 instanceof cljs.core.Keyword))?G__28439_29276.fqn:null);
switch (G__28439_29277__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29286 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_29286,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_29286,"aria-");
}
})())){
el.setAttribute(ks_29286,value);
} else {
(el[ks_29286] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28462){
var map__28463 = p__28462;
var map__28463__$1 = cljs.core.__destructure_map(map__28463);
var props = map__28463__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28463__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28464 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28464,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28464,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28464,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28469 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28469,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28469;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28471 = arguments.length;
switch (G__28471) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28480){
var vec__28481 = p__28480;
var seq__28482 = cljs.core.seq(vec__28481);
var first__28483 = cljs.core.first(seq__28482);
var seq__28482__$1 = cljs.core.next(seq__28482);
var nn = first__28483;
var first__28483__$1 = cljs.core.first(seq__28482__$1);
var seq__28482__$2 = cljs.core.next(seq__28482__$1);
var np = first__28483__$1;
var nc = seq__28482__$2;
var node = vec__28481;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28484 = nn;
var G__28485 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28484,G__28485) : create_fn.call(null, G__28484,G__28485));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28519 = nn;
var G__28520 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28519,G__28520) : create_fn.call(null, G__28519,G__28520));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28522 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28522,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28522,(1),null);
var seq__28525_29319 = cljs.core.seq(node_children);
var chunk__28526_29320 = null;
var count__28527_29321 = (0);
var i__28528_29322 = (0);
while(true){
if((i__28528_29322 < count__28527_29321)){
var child_struct_29323 = chunk__28526_29320.cljs$core$IIndexed$_nth$arity$2(null, i__28528_29322);
var children_29324 = shadow.dom.dom_node(child_struct_29323);
if(cljs.core.seq_QMARK_(children_29324)){
var seq__28556_29326 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29324));
var chunk__28558_29327 = null;
var count__28559_29328 = (0);
var i__28560_29329 = (0);
while(true){
if((i__28560_29329 < count__28559_29328)){
var child_29331 = chunk__28558_29327.cljs$core$IIndexed$_nth$arity$2(null, i__28560_29329);
if(cljs.core.truth_(child_29331)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29331);


var G__29332 = seq__28556_29326;
var G__29333 = chunk__28558_29327;
var G__29334 = count__28559_29328;
var G__29335 = (i__28560_29329 + (1));
seq__28556_29326 = G__29332;
chunk__28558_29327 = G__29333;
count__28559_29328 = G__29334;
i__28560_29329 = G__29335;
continue;
} else {
var G__29336 = seq__28556_29326;
var G__29337 = chunk__28558_29327;
var G__29338 = count__28559_29328;
var G__29339 = (i__28560_29329 + (1));
seq__28556_29326 = G__29336;
chunk__28558_29327 = G__29337;
count__28559_29328 = G__29338;
i__28560_29329 = G__29339;
continue;
}
} else {
var temp__5823__auto___29340 = cljs.core.seq(seq__28556_29326);
if(temp__5823__auto___29340){
var seq__28556_29341__$1 = temp__5823__auto___29340;
if(cljs.core.chunked_seq_QMARK_(seq__28556_29341__$1)){
var c__5525__auto___29342 = cljs.core.chunk_first(seq__28556_29341__$1);
var G__29343 = cljs.core.chunk_rest(seq__28556_29341__$1);
var G__29344 = c__5525__auto___29342;
var G__29345 = cljs.core.count(c__5525__auto___29342);
var G__29346 = (0);
seq__28556_29326 = G__29343;
chunk__28558_29327 = G__29344;
count__28559_29328 = G__29345;
i__28560_29329 = G__29346;
continue;
} else {
var child_29348 = cljs.core.first(seq__28556_29341__$1);
if(cljs.core.truth_(child_29348)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29348);


var G__29349 = cljs.core.next(seq__28556_29341__$1);
var G__29350 = null;
var G__29351 = (0);
var G__29352 = (0);
seq__28556_29326 = G__29349;
chunk__28558_29327 = G__29350;
count__28559_29328 = G__29351;
i__28560_29329 = G__29352;
continue;
} else {
var G__29353 = cljs.core.next(seq__28556_29341__$1);
var G__29354 = null;
var G__29355 = (0);
var G__29356 = (0);
seq__28556_29326 = G__29353;
chunk__28558_29327 = G__29354;
count__28559_29328 = G__29355;
i__28560_29329 = G__29356;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29324);
}


var G__29358 = seq__28525_29319;
var G__29359 = chunk__28526_29320;
var G__29360 = count__28527_29321;
var G__29361 = (i__28528_29322 + (1));
seq__28525_29319 = G__29358;
chunk__28526_29320 = G__29359;
count__28527_29321 = G__29360;
i__28528_29322 = G__29361;
continue;
} else {
var temp__5823__auto___29362 = cljs.core.seq(seq__28525_29319);
if(temp__5823__auto___29362){
var seq__28525_29363__$1 = temp__5823__auto___29362;
if(cljs.core.chunked_seq_QMARK_(seq__28525_29363__$1)){
var c__5525__auto___29364 = cljs.core.chunk_first(seq__28525_29363__$1);
var G__29366 = cljs.core.chunk_rest(seq__28525_29363__$1);
var G__29367 = c__5525__auto___29364;
var G__29368 = cljs.core.count(c__5525__auto___29364);
var G__29369 = (0);
seq__28525_29319 = G__29366;
chunk__28526_29320 = G__29367;
count__28527_29321 = G__29368;
i__28528_29322 = G__29369;
continue;
} else {
var child_struct_29370 = cljs.core.first(seq__28525_29363__$1);
var children_29371 = shadow.dom.dom_node(child_struct_29370);
if(cljs.core.seq_QMARK_(children_29371)){
var seq__28562_29373 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29371));
var chunk__28564_29374 = null;
var count__28565_29375 = (0);
var i__28566_29376 = (0);
while(true){
if((i__28566_29376 < count__28565_29375)){
var child_29377 = chunk__28564_29374.cljs$core$IIndexed$_nth$arity$2(null, i__28566_29376);
if(cljs.core.truth_(child_29377)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29377);


var G__29378 = seq__28562_29373;
var G__29379 = chunk__28564_29374;
var G__29380 = count__28565_29375;
var G__29381 = (i__28566_29376 + (1));
seq__28562_29373 = G__29378;
chunk__28564_29374 = G__29379;
count__28565_29375 = G__29380;
i__28566_29376 = G__29381;
continue;
} else {
var G__29382 = seq__28562_29373;
var G__29383 = chunk__28564_29374;
var G__29384 = count__28565_29375;
var G__29385 = (i__28566_29376 + (1));
seq__28562_29373 = G__29382;
chunk__28564_29374 = G__29383;
count__28565_29375 = G__29384;
i__28566_29376 = G__29385;
continue;
}
} else {
var temp__5823__auto___29386__$1 = cljs.core.seq(seq__28562_29373);
if(temp__5823__auto___29386__$1){
var seq__28562_29387__$1 = temp__5823__auto___29386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28562_29387__$1)){
var c__5525__auto___29389 = cljs.core.chunk_first(seq__28562_29387__$1);
var G__29390 = cljs.core.chunk_rest(seq__28562_29387__$1);
var G__29391 = c__5525__auto___29389;
var G__29392 = cljs.core.count(c__5525__auto___29389);
var G__29393 = (0);
seq__28562_29373 = G__29390;
chunk__28564_29374 = G__29391;
count__28565_29375 = G__29392;
i__28566_29376 = G__29393;
continue;
} else {
var child_29394 = cljs.core.first(seq__28562_29387__$1);
if(cljs.core.truth_(child_29394)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29394);


var G__29395 = cljs.core.next(seq__28562_29387__$1);
var G__29396 = null;
var G__29397 = (0);
var G__29398 = (0);
seq__28562_29373 = G__29395;
chunk__28564_29374 = G__29396;
count__28565_29375 = G__29397;
i__28566_29376 = G__29398;
continue;
} else {
var G__29399 = cljs.core.next(seq__28562_29387__$1);
var G__29400 = null;
var G__29401 = (0);
var G__29402 = (0);
seq__28562_29373 = G__29399;
chunk__28564_29374 = G__29400;
count__28565_29375 = G__29401;
i__28566_29376 = G__29402;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29371);
}


var G__29404 = cljs.core.next(seq__28525_29363__$1);
var G__29405 = null;
var G__29406 = (0);
var G__29407 = (0);
seq__28525_29319 = G__29404;
chunk__28526_29320 = G__29405;
count__28527_29321 = G__29406;
i__28528_29322 = G__29407;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28591 = cljs.core.seq(node);
var chunk__28592 = null;
var count__28593 = (0);
var i__28594 = (0);
while(true){
if((i__28594 < count__28593)){
var n = chunk__28592.cljs$core$IIndexed$_nth$arity$2(null, i__28594);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29411 = seq__28591;
var G__29412 = chunk__28592;
var G__29413 = count__28593;
var G__29414 = (i__28594 + (1));
seq__28591 = G__29411;
chunk__28592 = G__29412;
count__28593 = G__29413;
i__28594 = G__29414;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28591);
if(temp__5823__auto__){
var seq__28591__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28591__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28591__$1);
var G__29415 = cljs.core.chunk_rest(seq__28591__$1);
var G__29416 = c__5525__auto__;
var G__29417 = cljs.core.count(c__5525__auto__);
var G__29418 = (0);
seq__28591 = G__29415;
chunk__28592 = G__29416;
count__28593 = G__29417;
i__28594 = G__29418;
continue;
} else {
var n = cljs.core.first(seq__28591__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29420 = cljs.core.next(seq__28591__$1);
var G__29421 = null;
var G__29422 = (0);
var G__29423 = (0);
seq__28591 = G__29420;
chunk__28592 = G__29421;
count__28593 = G__29422;
i__28594 = G__29423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28596 = arguments.length;
switch (G__28596) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28602 = arguments.length;
switch (G__28602) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28608 = arguments.length;
switch (G__28608) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29448 = arguments.length;
var i__5727__auto___29449 = (0);
while(true){
if((i__5727__auto___29449 < len__5726__auto___29448)){
args__5732__auto__.push((arguments[i__5727__auto___29449]));

var G__29451 = (i__5727__auto___29449 + (1));
i__5727__auto___29449 = G__29451;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28613_29453 = cljs.core.seq(nodes);
var chunk__28614_29454 = null;
var count__28615_29455 = (0);
var i__28616_29456 = (0);
while(true){
if((i__28616_29456 < count__28615_29455)){
var node_29457 = chunk__28614_29454.cljs$core$IIndexed$_nth$arity$2(null, i__28616_29456);
fragment.appendChild(shadow.dom._to_dom(node_29457));


var G__29458 = seq__28613_29453;
var G__29459 = chunk__28614_29454;
var G__29460 = count__28615_29455;
var G__29461 = (i__28616_29456 + (1));
seq__28613_29453 = G__29458;
chunk__28614_29454 = G__29459;
count__28615_29455 = G__29460;
i__28616_29456 = G__29461;
continue;
} else {
var temp__5823__auto___29462 = cljs.core.seq(seq__28613_29453);
if(temp__5823__auto___29462){
var seq__28613_29464__$1 = temp__5823__auto___29462;
if(cljs.core.chunked_seq_QMARK_(seq__28613_29464__$1)){
var c__5525__auto___29465 = cljs.core.chunk_first(seq__28613_29464__$1);
var G__29466 = cljs.core.chunk_rest(seq__28613_29464__$1);
var G__29467 = c__5525__auto___29465;
var G__29468 = cljs.core.count(c__5525__auto___29465);
var G__29469 = (0);
seq__28613_29453 = G__29466;
chunk__28614_29454 = G__29467;
count__28615_29455 = G__29468;
i__28616_29456 = G__29469;
continue;
} else {
var node_29470 = cljs.core.first(seq__28613_29464__$1);
fragment.appendChild(shadow.dom._to_dom(node_29470));


var G__29471 = cljs.core.next(seq__28613_29464__$1);
var G__29472 = null;
var G__29473 = (0);
var G__29474 = (0);
seq__28613_29453 = G__29471;
chunk__28614_29454 = G__29472;
count__28615_29455 = G__29473;
i__28616_29456 = G__29474;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28610){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28610));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28621_29476 = cljs.core.seq(scripts);
var chunk__28622_29477 = null;
var count__28623_29478 = (0);
var i__28624_29479 = (0);
while(true){
if((i__28624_29479 < count__28623_29478)){
var vec__28631_29480 = chunk__28622_29477.cljs$core$IIndexed$_nth$arity$2(null, i__28624_29479);
var script_tag_29481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631_29480,(0),null);
var script_body_29482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631_29480,(1),null);
eval(script_body_29482);


var G__29483 = seq__28621_29476;
var G__29484 = chunk__28622_29477;
var G__29485 = count__28623_29478;
var G__29486 = (i__28624_29479 + (1));
seq__28621_29476 = G__29483;
chunk__28622_29477 = G__29484;
count__28623_29478 = G__29485;
i__28624_29479 = G__29486;
continue;
} else {
var temp__5823__auto___29487 = cljs.core.seq(seq__28621_29476);
if(temp__5823__auto___29487){
var seq__28621_29488__$1 = temp__5823__auto___29487;
if(cljs.core.chunked_seq_QMARK_(seq__28621_29488__$1)){
var c__5525__auto___29489 = cljs.core.chunk_first(seq__28621_29488__$1);
var G__29491 = cljs.core.chunk_rest(seq__28621_29488__$1);
var G__29492 = c__5525__auto___29489;
var G__29493 = cljs.core.count(c__5525__auto___29489);
var G__29494 = (0);
seq__28621_29476 = G__29491;
chunk__28622_29477 = G__29492;
count__28623_29478 = G__29493;
i__28624_29479 = G__29494;
continue;
} else {
var vec__28634_29495 = cljs.core.first(seq__28621_29488__$1);
var script_tag_29496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28634_29495,(0),null);
var script_body_29497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28634_29495,(1),null);
eval(script_body_29497);


var G__29498 = cljs.core.next(seq__28621_29488__$1);
var G__29499 = null;
var G__29500 = (0);
var G__29501 = (0);
seq__28621_29476 = G__29498;
chunk__28622_29477 = G__29499;
count__28623_29478 = G__29500;
i__28624_29479 = G__29501;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28638){
var vec__28639 = p__28638;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28647 = arguments.length;
switch (G__28647) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28682 = cljs.core.seq(style_keys);
var chunk__28683 = null;
var count__28684 = (0);
var i__28685 = (0);
while(true){
if((i__28685 < count__28684)){
var it = chunk__28683.cljs$core$IIndexed$_nth$arity$2(null, i__28685);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29507 = seq__28682;
var G__29508 = chunk__28683;
var G__29509 = count__28684;
var G__29510 = (i__28685 + (1));
seq__28682 = G__29507;
chunk__28683 = G__29508;
count__28684 = G__29509;
i__28685 = G__29510;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28682);
if(temp__5823__auto__){
var seq__28682__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28682__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28682__$1);
var G__29513 = cljs.core.chunk_rest(seq__28682__$1);
var G__29514 = c__5525__auto__;
var G__29515 = cljs.core.count(c__5525__auto__);
var G__29516 = (0);
seq__28682 = G__29513;
chunk__28683 = G__29514;
count__28684 = G__29515;
i__28685 = G__29516;
continue;
} else {
var it = cljs.core.first(seq__28682__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29518 = cljs.core.next(seq__28682__$1);
var G__29519 = null;
var G__29520 = (0);
var G__29521 = (0);
seq__28682 = G__29518;
chunk__28683 = G__29519;
count__28684 = G__29520;
i__28685 = G__29521;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28704,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28734 = k28704;
var G__28734__$1 = (((G__28734 instanceof cljs.core.Keyword))?G__28734.fqn:null);
switch (G__28734__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28704,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28746){
var vec__28750 = p__28746;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28750,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28750,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28703){
var self__ = this;
var G__28703__$1 = this;
return (new cljs.core.RecordIter((0),G__28703__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28709,other28710){
var self__ = this;
var this28709__$1 = this;
return (((!((other28710 == null)))) && ((((this28709__$1.constructor === other28710.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28709__$1.x,other28710.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28709__$1.y,other28710.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28709__$1.__extmap,other28710.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28704){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28775 = k28704;
var G__28775__$1 = (((G__28775 instanceof cljs.core.Keyword))?G__28775.fqn:null);
switch (G__28775__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28704);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28703){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28780 = cljs.core.keyword_identical_QMARK_;
var expr__28781 = k__5309__auto__;
if(cljs.core.truth_((pred__28780.cljs$core$IFn$_invoke$arity$2 ? pred__28780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28781) : pred__28780.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__28781)))){
return (new shadow.dom.Coordinate(G__28703,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28780.cljs$core$IFn$_invoke$arity$2 ? pred__28780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28781) : pred__28780.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__28781)))){
return (new shadow.dom.Coordinate(self__.x,G__28703,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28703),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28703){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28703,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28723){
var extmap__5342__auto__ = (function (){var G__28789 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28723,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28723)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28789);
} else {
return G__28789;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28723),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28723),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28798,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28813 = k28798;
var G__28813__$1 = (((G__28813 instanceof cljs.core.Keyword))?G__28813.fqn:null);
switch (G__28813__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28798,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28814){
var vec__28815 = p__28814;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28797){
var self__ = this;
var G__28797__$1 = this;
return (new cljs.core.RecordIter((0),G__28797__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28799,other28800){
var self__ = this;
var this28799__$1 = this;
return (((!((other28800 == null)))) && ((((this28799__$1.constructor === other28800.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28799__$1.w,other28800.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28799__$1.h,other28800.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28799__$1.__extmap,other28800.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28798){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28836 = k28798;
var G__28836__$1 = (((G__28836 instanceof cljs.core.Keyword))?G__28836.fqn:null);
switch (G__28836__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28798);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28797){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28838 = cljs.core.keyword_identical_QMARK_;
var expr__28839 = k__5309__auto__;
if(cljs.core.truth_((pred__28838.cljs$core$IFn$_invoke$arity$2 ? pred__28838.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28839) : pred__28838.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__28839)))){
return (new shadow.dom.Size(G__28797,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28838.cljs$core$IFn$_invoke$arity$2 ? pred__28838.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28839) : pred__28838.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__28839)))){
return (new shadow.dom.Size(self__.w,G__28797,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28797),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28797){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28797,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28806){
var extmap__5342__auto__ = (function (){var G__28869 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28806,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28806)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28869);
} else {
return G__28869;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28806),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28806),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__29571 = (i + (1));
var G__29572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29571;
ret = G__29572;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28938){
var vec__28941 = p__28938;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28948 = arguments.length;
switch (G__28948) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29585 = ps;
var G__29586 = (i + (1));
el__$1 = G__29585;
i = G__29586;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28986 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28990_29592 = cljs.core.seq(props);
var chunk__28991_29593 = null;
var count__28992_29594 = (0);
var i__28993_29595 = (0);
while(true){
if((i__28993_29595 < count__28992_29594)){
var vec__29003_29596 = chunk__28991_29593.cljs$core$IIndexed$_nth$arity$2(null, i__28993_29595);
var k_29597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29003_29596,(0),null);
var v_29598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29003_29596,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_29597);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29597),v_29598);


var G__29603 = seq__28990_29592;
var G__29604 = chunk__28991_29593;
var G__29605 = count__28992_29594;
var G__29606 = (i__28993_29595 + (1));
seq__28990_29592 = G__29603;
chunk__28991_29593 = G__29604;
count__28992_29594 = G__29605;
i__28993_29595 = G__29606;
continue;
} else {
var temp__5823__auto___29607 = cljs.core.seq(seq__28990_29592);
if(temp__5823__auto___29607){
var seq__28990_29608__$1 = temp__5823__auto___29607;
if(cljs.core.chunked_seq_QMARK_(seq__28990_29608__$1)){
var c__5525__auto___29609 = cljs.core.chunk_first(seq__28990_29608__$1);
var G__29610 = cljs.core.chunk_rest(seq__28990_29608__$1);
var G__29611 = c__5525__auto___29609;
var G__29612 = cljs.core.count(c__5525__auto___29609);
var G__29613 = (0);
seq__28990_29592 = G__29610;
chunk__28991_29593 = G__29611;
count__28992_29594 = G__29612;
i__28993_29595 = G__29613;
continue;
} else {
var vec__29006_29615 = cljs.core.first(seq__28990_29608__$1);
var k_29616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29006_29615,(0),null);
var v_29617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29006_29615,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_29616);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29616),v_29617);


var G__29626 = cljs.core.next(seq__28990_29608__$1);
var G__29627 = null;
var G__29628 = (0);
var G__29629 = (0);
seq__28990_29592 = G__29626;
chunk__28991_29593 = G__29627;
count__28992_29594 = G__29628;
i__28993_29595 = G__29629;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29030 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29030,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29030,(1),null);
var seq__29037_29631 = cljs.core.seq(node_children);
var chunk__29039_29632 = null;
var count__29040_29633 = (0);
var i__29041_29634 = (0);
while(true){
if((i__29041_29634 < count__29040_29633)){
var child_struct_29635 = chunk__29039_29632.cljs$core$IIndexed$_nth$arity$2(null, i__29041_29634);
if((!((child_struct_29635 == null)))){
if(typeof child_struct_29635 === 'string'){
var text_29638 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29638),child_struct_29635].join(''));
} else {
var children_29639 = shadow.dom.svg_node(child_struct_29635);
if(cljs.core.seq_QMARK_(children_29639)){
var seq__29096_29640 = cljs.core.seq(children_29639);
var chunk__29098_29642 = null;
var count__29099_29643 = (0);
var i__29100_29644 = (0);
while(true){
if((i__29100_29644 < count__29099_29643)){
var child_29645 = chunk__29098_29642.cljs$core$IIndexed$_nth$arity$2(null, i__29100_29644);
if(cljs.core.truth_(child_29645)){
node.appendChild(child_29645);


var G__29648 = seq__29096_29640;
var G__29649 = chunk__29098_29642;
var G__29650 = count__29099_29643;
var G__29651 = (i__29100_29644 + (1));
seq__29096_29640 = G__29648;
chunk__29098_29642 = G__29649;
count__29099_29643 = G__29650;
i__29100_29644 = G__29651;
continue;
} else {
var G__29652 = seq__29096_29640;
var G__29653 = chunk__29098_29642;
var G__29654 = count__29099_29643;
var G__29655 = (i__29100_29644 + (1));
seq__29096_29640 = G__29652;
chunk__29098_29642 = G__29653;
count__29099_29643 = G__29654;
i__29100_29644 = G__29655;
continue;
}
} else {
var temp__5823__auto___29657 = cljs.core.seq(seq__29096_29640);
if(temp__5823__auto___29657){
var seq__29096_29659__$1 = temp__5823__auto___29657;
if(cljs.core.chunked_seq_QMARK_(seq__29096_29659__$1)){
var c__5525__auto___29660 = cljs.core.chunk_first(seq__29096_29659__$1);
var G__29661 = cljs.core.chunk_rest(seq__29096_29659__$1);
var G__29662 = c__5525__auto___29660;
var G__29663 = cljs.core.count(c__5525__auto___29660);
var G__29664 = (0);
seq__29096_29640 = G__29661;
chunk__29098_29642 = G__29662;
count__29099_29643 = G__29663;
i__29100_29644 = G__29664;
continue;
} else {
var child_29665 = cljs.core.first(seq__29096_29659__$1);
if(cljs.core.truth_(child_29665)){
node.appendChild(child_29665);


var G__29666 = cljs.core.next(seq__29096_29659__$1);
var G__29667 = null;
var G__29668 = (0);
var G__29669 = (0);
seq__29096_29640 = G__29666;
chunk__29098_29642 = G__29667;
count__29099_29643 = G__29668;
i__29100_29644 = G__29669;
continue;
} else {
var G__29670 = cljs.core.next(seq__29096_29659__$1);
var G__29671 = null;
var G__29672 = (0);
var G__29673 = (0);
seq__29096_29640 = G__29670;
chunk__29098_29642 = G__29671;
count__29099_29643 = G__29672;
i__29100_29644 = G__29673;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29639);
}
}


var G__29677 = seq__29037_29631;
var G__29678 = chunk__29039_29632;
var G__29679 = count__29040_29633;
var G__29680 = (i__29041_29634 + (1));
seq__29037_29631 = G__29677;
chunk__29039_29632 = G__29678;
count__29040_29633 = G__29679;
i__29041_29634 = G__29680;
continue;
} else {
var G__29681 = seq__29037_29631;
var G__29682 = chunk__29039_29632;
var G__29683 = count__29040_29633;
var G__29684 = (i__29041_29634 + (1));
seq__29037_29631 = G__29681;
chunk__29039_29632 = G__29682;
count__29040_29633 = G__29683;
i__29041_29634 = G__29684;
continue;
}
} else {
var temp__5823__auto___29685 = cljs.core.seq(seq__29037_29631);
if(temp__5823__auto___29685){
var seq__29037_29687__$1 = temp__5823__auto___29685;
if(cljs.core.chunked_seq_QMARK_(seq__29037_29687__$1)){
var c__5525__auto___29688 = cljs.core.chunk_first(seq__29037_29687__$1);
var G__29689 = cljs.core.chunk_rest(seq__29037_29687__$1);
var G__29690 = c__5525__auto___29688;
var G__29691 = cljs.core.count(c__5525__auto___29688);
var G__29692 = (0);
seq__29037_29631 = G__29689;
chunk__29039_29632 = G__29690;
count__29040_29633 = G__29691;
i__29041_29634 = G__29692;
continue;
} else {
var child_struct_29695 = cljs.core.first(seq__29037_29687__$1);
if((!((child_struct_29695 == null)))){
if(typeof child_struct_29695 === 'string'){
var text_29697 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29697),child_struct_29695].join(''));
} else {
var children_29698 = shadow.dom.svg_node(child_struct_29695);
if(cljs.core.seq_QMARK_(children_29698)){
var seq__29116_29699 = cljs.core.seq(children_29698);
var chunk__29118_29700 = null;
var count__29119_29701 = (0);
var i__29120_29702 = (0);
while(true){
if((i__29120_29702 < count__29119_29701)){
var child_29705 = chunk__29118_29700.cljs$core$IIndexed$_nth$arity$2(null, i__29120_29702);
if(cljs.core.truth_(child_29705)){
node.appendChild(child_29705);


var G__29706 = seq__29116_29699;
var G__29707 = chunk__29118_29700;
var G__29708 = count__29119_29701;
var G__29709 = (i__29120_29702 + (1));
seq__29116_29699 = G__29706;
chunk__29118_29700 = G__29707;
count__29119_29701 = G__29708;
i__29120_29702 = G__29709;
continue;
} else {
var G__29710 = seq__29116_29699;
var G__29711 = chunk__29118_29700;
var G__29712 = count__29119_29701;
var G__29713 = (i__29120_29702 + (1));
seq__29116_29699 = G__29710;
chunk__29118_29700 = G__29711;
count__29119_29701 = G__29712;
i__29120_29702 = G__29713;
continue;
}
} else {
var temp__5823__auto___29714__$1 = cljs.core.seq(seq__29116_29699);
if(temp__5823__auto___29714__$1){
var seq__29116_29716__$1 = temp__5823__auto___29714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29116_29716__$1)){
var c__5525__auto___29717 = cljs.core.chunk_first(seq__29116_29716__$1);
var G__29718 = cljs.core.chunk_rest(seq__29116_29716__$1);
var G__29719 = c__5525__auto___29717;
var G__29720 = cljs.core.count(c__5525__auto___29717);
var G__29721 = (0);
seq__29116_29699 = G__29718;
chunk__29118_29700 = G__29719;
count__29119_29701 = G__29720;
i__29120_29702 = G__29721;
continue;
} else {
var child_29722 = cljs.core.first(seq__29116_29716__$1);
if(cljs.core.truth_(child_29722)){
node.appendChild(child_29722);


var G__29723 = cljs.core.next(seq__29116_29716__$1);
var G__29724 = null;
var G__29725 = (0);
var G__29726 = (0);
seq__29116_29699 = G__29723;
chunk__29118_29700 = G__29724;
count__29119_29701 = G__29725;
i__29120_29702 = G__29726;
continue;
} else {
var G__29728 = cljs.core.next(seq__29116_29716__$1);
var G__29729 = null;
var G__29730 = (0);
var G__29731 = (0);
seq__29116_29699 = G__29728;
chunk__29118_29700 = G__29729;
count__29119_29701 = G__29730;
i__29120_29702 = G__29731;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29698);
}
}


var G__29733 = cljs.core.next(seq__29037_29687__$1);
var G__29734 = null;
var G__29735 = (0);
var G__29736 = (0);
seq__29037_29631 = G__29733;
chunk__29039_29632 = G__29734;
count__29040_29633 = G__29735;
i__29041_29634 = G__29736;
continue;
} else {
var G__29737 = cljs.core.next(seq__29037_29687__$1);
var G__29738 = null;
var G__29739 = (0);
var G__29740 = (0);
seq__29037_29631 = G__29737;
chunk__29039_29632 = G__29738;
count__29040_29633 = G__29739;
i__29041_29634 = G__29740;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29745 = arguments.length;
var i__5727__auto___29746 = (0);
while(true){
if((i__5727__auto___29746 < len__5726__auto___29745)){
args__5732__auto__.push((arguments[i__5727__auto___29746]));

var G__29747 = (i__5727__auto___29746 + (1));
i__5727__auto___29746 = G__29747;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29140){
var G__29141 = cljs.core.first(seq29140);
var seq29140__$1 = cljs.core.next(seq29140);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29141,seq29140__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
