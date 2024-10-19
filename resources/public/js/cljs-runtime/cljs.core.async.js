goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31472 = (function (f,blockable,meta31473){
this.f = f;
this.blockable = blockable;
this.meta31473 = meta31473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31474,meta31473__$1){
var self__ = this;
var _31474__$1 = this;
return (new cljs.core.async.t_cljs$core$async31472(self__.f,self__.blockable,meta31473__$1));
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31474){
var self__ = this;
var _31474__$1 = this;
return self__.meta31473;
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31473","meta31473",-962739630,null)], null);
}));

(cljs.core.async.t_cljs$core$async31472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31472");

(cljs.core.async.t_cljs$core$async31472.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31472.
 */
cljs.core.async.__GT_t_cljs$core$async31472 = (function cljs$core$async$__GT_t_cljs$core$async31472(f,blockable,meta31473){
return (new cljs.core.async.t_cljs$core$async31472(f,blockable,meta31473));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31469 = arguments.length;
switch (G__31469) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31472(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31486 = arguments.length;
switch (G__31486) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31495 = arguments.length;
switch (G__31495) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31501 = arguments.length;
switch (G__31501) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34814 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34814) : fn1.call(null, val_34814));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34814) : fn1.call(null, val_34814));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31504 = arguments.length;
switch (G__31504) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___34817 = n;
var x_34818 = (0);
while(true){
if((x_34818 < n__5593__auto___34817)){
(a[x_34818] = x_34818);

var G__34819 = (x_34818 + (1));
x_34818 = G__34819;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31505 = (function (flag,meta31506){
this.flag = flag;
this.meta31506 = meta31506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31507,meta31506__$1){
var self__ = this;
var _31507__$1 = this;
return (new cljs.core.async.t_cljs$core$async31505(self__.flag,meta31506__$1));
}));

(cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31507){
var self__ = this;
var _31507__$1 = this;
return self__.meta31506;
}));

(cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31506","meta31506",1048679469,null)], null);
}));

(cljs.core.async.t_cljs$core$async31505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31505");

(cljs.core.async.t_cljs$core$async31505.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31505.
 */
cljs.core.async.__GT_t_cljs$core$async31505 = (function cljs$core$async$__GT_t_cljs$core$async31505(flag,meta31506){
return (new cljs.core.async.t_cljs$core$async31505(flag,meta31506));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31505(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31511 = (function (flag,cb,meta31512){
this.flag = flag;
this.cb = cb;
this.meta31512 = meta31512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31513,meta31512__$1){
var self__ = this;
var _31513__$1 = this;
return (new cljs.core.async.t_cljs$core$async31511(self__.flag,self__.cb,meta31512__$1));
}));

(cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31513){
var self__ = this;
var _31513__$1 = this;
return self__.meta31512;
}));

(cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31512","meta31512",-1036367285,null)], null);
}));

(cljs.core.async.t_cljs$core$async31511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31511");

(cljs.core.async.t_cljs$core$async31511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31511.
 */
cljs.core.async.__GT_t_cljs$core$async31511 = (function cljs$core$async$__GT_t_cljs$core$async31511(flag,cb,meta31512){
return (new cljs.core.async.t_cljs$core$async31511(flag,cb,meta31512));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31511(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31552_SHARP_){
var G__31659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31552_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31659) : fret.call(null, G__31659));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31554_SHARP_){
var G__31662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31554_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31662) : fret.call(null, G__31662));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34820 = (i + (1));
i = G__34820;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34821 = arguments.length;
var i__5727__auto___34822 = (0);
while(true){
if((i__5727__auto___34822 < len__5726__auto___34821)){
args__5732__auto__.push((arguments[i__5727__auto___34822]));

var G__34823 = (i__5727__auto___34822 + (1));
i__5727__auto___34822 = G__34823;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31676){
var map__31677 = p__31676;
var map__31677__$1 = cljs.core.__destructure_map(map__31677);
var opts = map__31677__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31674){
var G__31675 = cljs.core.first(seq31674);
var seq31674__$1 = cljs.core.next(seq31674);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31675,seq31674__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31693 = arguments.length;
switch (G__31693) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31270__auto___34827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_31772){
var state_val_31773 = (state_31772[(1)]);
if((state_val_31773 === (7))){
var inst_31766 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31809_34828 = state_31772__$1;
(statearr_31809_34828[(2)] = inst_31766);

(statearr_31809_34828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (1))){
var state_31772__$1 = state_31772;
var statearr_31814_34829 = state_31772__$1;
(statearr_31814_34829[(2)] = null);

(statearr_31814_34829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (4))){
var inst_31731 = (state_31772[(7)]);
var inst_31731__$1 = (state_31772[(2)]);
var inst_31738 = (inst_31731__$1 == null);
var state_31772__$1 = (function (){var statearr_31817 = state_31772;
(statearr_31817[(7)] = inst_31731__$1);

return statearr_31817;
})();
if(cljs.core.truth_(inst_31738)){
var statearr_31819_34833 = state_31772__$1;
(statearr_31819_34833[(1)] = (5));

} else {
var statearr_31820_34834 = state_31772__$1;
(statearr_31820_34834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (13))){
var state_31772__$1 = state_31772;
var statearr_31823_34840 = state_31772__$1;
(statearr_31823_34840[(2)] = null);

(statearr_31823_34840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (6))){
var inst_31731 = (state_31772[(7)]);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31772__$1,(11),to,inst_31731);
} else {
if((state_val_31773 === (3))){
var inst_31769 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31772__$1,inst_31769);
} else {
if((state_val_31773 === (12))){
var state_31772__$1 = state_31772;
var statearr_31833_34844 = state_31772__$1;
(statearr_31833_34844[(2)] = null);

(statearr_31833_34844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (2))){
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31772__$1,(4),from);
} else {
if((state_val_31773 === (11))){
var inst_31757 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
if(cljs.core.truth_(inst_31757)){
var statearr_31836_34849 = state_31772__$1;
(statearr_31836_34849[(1)] = (12));

} else {
var statearr_31837_34850 = state_31772__$1;
(statearr_31837_34850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (9))){
var state_31772__$1 = state_31772;
var statearr_31840_34851 = state_31772__$1;
(statearr_31840_34851[(2)] = null);

(statearr_31840_34851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (5))){
var state_31772__$1 = state_31772;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31843_34855 = state_31772__$1;
(statearr_31843_34855[(1)] = (8));

} else {
var statearr_31845_34856 = state_31772__$1;
(statearr_31845_34856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (14))){
var inst_31764 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31846_34857 = state_31772__$1;
(statearr_31846_34857[(2)] = inst_31764);

(statearr_31846_34857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (10))){
var inst_31754 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31848_34858 = state_31772__$1;
(statearr_31848_34858[(2)] = inst_31754);

(statearr_31848_34858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (8))){
var inst_31744 = cljs.core.async.close_BANG_(to);
var state_31772__$1 = state_31772;
var statearr_31849_34859 = state_31772__$1;
(statearr_31849_34859[(2)] = inst_31744);

(statearr_31849_34859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_31854 = [null,null,null,null,null,null,null,null];
(statearr_31854[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_31854[(1)] = (1));

return statearr_31854;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_31772){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_31772);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e31855){var ex__30972__auto__ = e31855;
var statearr_31857_34860 = state_31772;
(statearr_31857_34860[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_31772[(4)]))){
var statearr_31858_34861 = state_31772;
(statearr_31858_34861[(1)] = cljs.core.first((state_31772[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34862 = state_31772;
state_31772 = G__34862;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_31772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_31772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_31860 = f__31271__auto__();
(statearr_31860[(6)] = c__31270__auto___34827);

return statearr_31860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31890){
var vec__31896 = p__31890;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896,(1),null);
var job = vec__31896;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31270__auto___34863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_31903){
var state_val_31904 = (state_31903[(1)]);
if((state_val_31904 === (1))){
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31903__$1,(2),res,v);
} else {
if((state_val_31904 === (2))){
var inst_31900 = (state_31903[(2)]);
var inst_31901 = cljs.core.async.close_BANG_(res);
var state_31903__$1 = (function (){var statearr_31912 = state_31903;
(statearr_31912[(7)] = inst_31900);

return statearr_31912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31903__$1,inst_31901);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0 = (function (){
var statearr_31913 = [null,null,null,null,null,null,null,null];
(statearr_31913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__);

(statearr_31913[(1)] = (1));

return statearr_31913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1 = (function (state_31903){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_31903);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e31914){var ex__30972__auto__ = e31914;
var statearr_31916_34871 = state_31903;
(statearr_31916_34871[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_31903[(4)]))){
var statearr_31917_34872 = state_31903;
(statearr_31917_34872[(1)] = cljs.core.first((state_31903[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34874 = state_31903;
state_31903 = G__34874;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = function(state_31903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1.call(this,state_31903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_31918 = f__31271__auto__();
(statearr_31918[(6)] = c__31270__auto___34863);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31919){
var vec__31920 = p__31919;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31920,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31920,(1),null);
var job = vec__31920;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___34875 = n;
var __34876 = (0);
while(true){
if((__34876 < n__5593__auto___34875)){
var G__31923_34877 = type;
var G__31923_34878__$1 = (((G__31923_34877 instanceof cljs.core.Keyword))?G__31923_34877.fqn:null);
switch (G__31923_34878__$1) {
case "compute":
var c__31270__auto___34880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34876,c__31270__auto___34880,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async){
return (function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = ((function (__34876,c__31270__auto___34880,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async){
return (function (state_31936){
var state_val_31937 = (state_31936[(1)]);
if((state_val_31937 === (1))){
var state_31936__$1 = state_31936;
var statearr_31939_34881 = state_31936__$1;
(statearr_31939_34881[(2)] = null);

(statearr_31939_34881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (2))){
var state_31936__$1 = state_31936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31936__$1,(4),jobs);
} else {
if((state_val_31937 === (3))){
var inst_31934 = (state_31936[(2)]);
var state_31936__$1 = state_31936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31936__$1,inst_31934);
} else {
if((state_val_31937 === (4))){
var inst_31926 = (state_31936[(2)]);
var inst_31927 = process__$1(inst_31926);
var state_31936__$1 = state_31936;
if(cljs.core.truth_(inst_31927)){
var statearr_31946_34891 = state_31936__$1;
(statearr_31946_34891[(1)] = (5));

} else {
var statearr_31948_34892 = state_31936__$1;
(statearr_31948_34892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (5))){
var state_31936__$1 = state_31936;
var statearr_31951_34893 = state_31936__$1;
(statearr_31951_34893[(2)] = null);

(statearr_31951_34893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (6))){
var state_31936__$1 = state_31936;
var statearr_31952_34894 = state_31936__$1;
(statearr_31952_34894[(2)] = null);

(statearr_31952_34894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (7))){
var inst_31932 = (state_31936[(2)]);
var state_31936__$1 = state_31936;
var statearr_31953_34895 = state_31936__$1;
(statearr_31953_34895[(2)] = inst_31932);

(statearr_31953_34895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34876,c__31270__auto___34880,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async))
;
return ((function (__34876,switch__30968__auto__,c__31270__auto___34880,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0 = (function (){
var statearr_31955 = [null,null,null,null,null,null,null];
(statearr_31955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__);

(statearr_31955[(1)] = (1));

return statearr_31955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1 = (function (state_31936){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_31936);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e31958){var ex__30972__auto__ = e31958;
var statearr_31959_34900 = state_31936;
(statearr_31959_34900[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_31936[(4)]))){
var statearr_31962_34901 = state_31936;
(statearr_31962_34901[(1)] = cljs.core.first((state_31936[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34909 = state_31936;
state_31936 = G__34909;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = function(state_31936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1.call(this,state_31936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__;
})()
;})(__34876,switch__30968__auto__,c__31270__auto___34880,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async))
})();
var state__31272__auto__ = (function (){var statearr_31971 = f__31271__auto__();
(statearr_31971[(6)] = c__31270__auto___34880);

return statearr_31971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
});})(__34876,c__31270__auto___34880,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async))
);


break;
case "async":
var c__31270__auto___34910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34876,c__31270__auto___34910,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async){
return (function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = ((function (__34876,c__31270__auto___34910,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async){
return (function (state_31987){
var state_val_31988 = (state_31987[(1)]);
if((state_val_31988 === (1))){
var state_31987__$1 = state_31987;
var statearr_31995_34911 = state_31987__$1;
(statearr_31995_34911[(2)] = null);

(statearr_31995_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (2))){
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31987__$1,(4),jobs);
} else {
if((state_val_31988 === (3))){
var inst_31984 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31987__$1,inst_31984);
} else {
if((state_val_31988 === (4))){
var inst_31975 = (state_31987[(2)]);
var inst_31976 = async(inst_31975);
var state_31987__$1 = state_31987;
if(cljs.core.truth_(inst_31976)){
var statearr_32001_34913 = state_31987__$1;
(statearr_32001_34913[(1)] = (5));

} else {
var statearr_32002_34914 = state_31987__$1;
(statearr_32002_34914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (5))){
var state_31987__$1 = state_31987;
var statearr_32003_34915 = state_31987__$1;
(statearr_32003_34915[(2)] = null);

(statearr_32003_34915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (6))){
var state_31987__$1 = state_31987;
var statearr_32005_34916 = state_31987__$1;
(statearr_32005_34916[(2)] = null);

(statearr_32005_34916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (7))){
var inst_31981 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32008_34917 = state_31987__$1;
(statearr_32008_34917[(2)] = inst_31981);

(statearr_32008_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34876,c__31270__auto___34910,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async))
;
return ((function (__34876,switch__30968__auto__,c__31270__auto___34910,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0 = (function (){
var statearr_32011 = [null,null,null,null,null,null,null];
(statearr_32011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__);

(statearr_32011[(1)] = (1));

return statearr_32011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1 = (function (state_31987){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_31987);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32014){var ex__30972__auto__ = e32014;
var statearr_32016_34918 = state_31987;
(statearr_32016_34918[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_31987[(4)]))){
var statearr_32019_34919 = state_31987;
(statearr_32019_34919[(1)] = cljs.core.first((state_31987[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34922 = state_31987;
state_31987 = G__34922;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = function(state_31987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1.call(this,state_31987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__;
})()
;})(__34876,switch__30968__auto__,c__31270__auto___34910,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async))
})();
var state__31272__auto__ = (function (){var statearr_32020 = f__31271__auto__();
(statearr_32020[(6)] = c__31270__auto___34910);

return statearr_32020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
});})(__34876,c__31270__auto___34910,G__31923_34877,G__31923_34878__$1,n__5593__auto___34875,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31923_34878__$1)].join('')));

}

var G__34923 = (__34876 + (1));
__34876 = G__34923;
continue;
} else {
}
break;
}

var c__31270__auto___34924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32051){
var state_val_32052 = (state_32051[(1)]);
if((state_val_32052 === (7))){
var inst_32047 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
var statearr_32063_34930 = state_32051__$1;
(statearr_32063_34930[(2)] = inst_32047);

(statearr_32063_34930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (1))){
var state_32051__$1 = state_32051;
var statearr_32070_34932 = state_32051__$1;
(statearr_32070_34932[(2)] = null);

(statearr_32070_34932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (4))){
var inst_32028 = (state_32051[(7)]);
var inst_32028__$1 = (state_32051[(2)]);
var inst_32030 = (inst_32028__$1 == null);
var state_32051__$1 = (function (){var statearr_32077 = state_32051;
(statearr_32077[(7)] = inst_32028__$1);

return statearr_32077;
})();
if(cljs.core.truth_(inst_32030)){
var statearr_32081_34934 = state_32051__$1;
(statearr_32081_34934[(1)] = (5));

} else {
var statearr_32085_34935 = state_32051__$1;
(statearr_32085_34935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (6))){
var inst_32036 = (state_32051[(8)]);
var inst_32028 = (state_32051[(7)]);
var inst_32036__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32038 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32039 = [inst_32028,inst_32036__$1];
var inst_32040 = (new cljs.core.PersistentVector(null,2,(5),inst_32038,inst_32039,null));
var state_32051__$1 = (function (){var statearr_32087 = state_32051;
(statearr_32087[(8)] = inst_32036__$1);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32051__$1,(8),jobs,inst_32040);
} else {
if((state_val_32052 === (3))){
var inst_32049 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32051__$1,inst_32049);
} else {
if((state_val_32052 === (2))){
var state_32051__$1 = state_32051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32051__$1,(4),from);
} else {
if((state_val_32052 === (9))){
var inst_32044 = (state_32051[(2)]);
var state_32051__$1 = (function (){var statearr_32091 = state_32051;
(statearr_32091[(9)] = inst_32044);

return statearr_32091;
})();
var statearr_32092_34943 = state_32051__$1;
(statearr_32092_34943[(2)] = null);

(statearr_32092_34943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (5))){
var inst_32033 = cljs.core.async.close_BANG_(jobs);
var state_32051__$1 = state_32051;
var statearr_32093_34944 = state_32051__$1;
(statearr_32093_34944[(2)] = inst_32033);

(statearr_32093_34944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32052 === (8))){
var inst_32036 = (state_32051[(8)]);
var inst_32042 = (state_32051[(2)]);
var state_32051__$1 = (function (){var statearr_32094 = state_32051;
(statearr_32094[(10)] = inst_32042);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32051__$1,(9),results,inst_32036);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1 = (function (state_32051){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32051);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32097){var ex__30972__auto__ = e32097;
var statearr_32098_34948 = state_32051;
(statearr_32098_34948[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32051[(4)]))){
var statearr_32099_34950 = state_32051;
(statearr_32099_34950[(1)] = cljs.core.first((state_32051[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34951 = state_32051;
state_32051 = G__34951;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = function(state_32051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1.call(this,state_32051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32101 = f__31271__auto__();
(statearr_32101[(6)] = c__31270__auto___34924);

return statearr_32101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32140){
var state_val_32141 = (state_32140[(1)]);
if((state_val_32141 === (7))){
var inst_32136 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32142_34952 = state_32140__$1;
(statearr_32142_34952[(2)] = inst_32136);

(statearr_32142_34952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (20))){
var state_32140__$1 = state_32140;
var statearr_32143_34953 = state_32140__$1;
(statearr_32143_34953[(2)] = null);

(statearr_32143_34953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (1))){
var state_32140__$1 = state_32140;
var statearr_32144_34954 = state_32140__$1;
(statearr_32144_34954[(2)] = null);

(statearr_32144_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (4))){
var inst_32105 = (state_32140[(7)]);
var inst_32105__$1 = (state_32140[(2)]);
var inst_32106 = (inst_32105__$1 == null);
var state_32140__$1 = (function (){var statearr_32145 = state_32140;
(statearr_32145[(7)] = inst_32105__$1);

return statearr_32145;
})();
if(cljs.core.truth_(inst_32106)){
var statearr_32146_34955 = state_32140__$1;
(statearr_32146_34955[(1)] = (5));

} else {
var statearr_32147_34956 = state_32140__$1;
(statearr_32147_34956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (15))){
var inst_32118 = (state_32140[(8)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32140__$1,(18),to,inst_32118);
} else {
if((state_val_32141 === (21))){
var inst_32131 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32148_34957 = state_32140__$1;
(statearr_32148_34957[(2)] = inst_32131);

(statearr_32148_34957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (13))){
var inst_32133 = (state_32140[(2)]);
var state_32140__$1 = (function (){var statearr_32150 = state_32140;
(statearr_32150[(9)] = inst_32133);

return statearr_32150;
})();
var statearr_32151_34958 = state_32140__$1;
(statearr_32151_34958[(2)] = null);

(statearr_32151_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (6))){
var inst_32105 = (state_32140[(7)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32140__$1,(11),inst_32105);
} else {
if((state_val_32141 === (17))){
var inst_32126 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
if(cljs.core.truth_(inst_32126)){
var statearr_32153_34970 = state_32140__$1;
(statearr_32153_34970[(1)] = (19));

} else {
var statearr_32154_34971 = state_32140__$1;
(statearr_32154_34971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (3))){
var inst_32138 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32140__$1,inst_32138);
} else {
if((state_val_32141 === (12))){
var inst_32115 = (state_32140[(10)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32140__$1,(14),inst_32115);
} else {
if((state_val_32141 === (2))){
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32140__$1,(4),results);
} else {
if((state_val_32141 === (19))){
var state_32140__$1 = state_32140;
var statearr_32156_34972 = state_32140__$1;
(statearr_32156_34972[(2)] = null);

(statearr_32156_34972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (11))){
var inst_32115 = (state_32140[(2)]);
var state_32140__$1 = (function (){var statearr_32160 = state_32140;
(statearr_32160[(10)] = inst_32115);

return statearr_32160;
})();
var statearr_32161_34974 = state_32140__$1;
(statearr_32161_34974[(2)] = null);

(statearr_32161_34974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (9))){
var state_32140__$1 = state_32140;
var statearr_32162_34981 = state_32140__$1;
(statearr_32162_34981[(2)] = null);

(statearr_32162_34981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (5))){
var state_32140__$1 = state_32140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32167_34982 = state_32140__$1;
(statearr_32167_34982[(1)] = (8));

} else {
var statearr_32168_34983 = state_32140__$1;
(statearr_32168_34983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (14))){
var inst_32118 = (state_32140[(8)]);
var inst_32120 = (state_32140[(11)]);
var inst_32118__$1 = (state_32140[(2)]);
var inst_32119 = (inst_32118__$1 == null);
var inst_32120__$1 = cljs.core.not(inst_32119);
var state_32140__$1 = (function (){var statearr_32169 = state_32140;
(statearr_32169[(8)] = inst_32118__$1);

(statearr_32169[(11)] = inst_32120__$1);

return statearr_32169;
})();
if(inst_32120__$1){
var statearr_32171_34984 = state_32140__$1;
(statearr_32171_34984[(1)] = (15));

} else {
var statearr_32172_34985 = state_32140__$1;
(statearr_32172_34985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (16))){
var inst_32120 = (state_32140[(11)]);
var state_32140__$1 = state_32140;
var statearr_32174_34987 = state_32140__$1;
(statearr_32174_34987[(2)] = inst_32120);

(statearr_32174_34987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (10))){
var inst_32112 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32179_34988 = state_32140__$1;
(statearr_32179_34988[(2)] = inst_32112);

(statearr_32179_34988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (18))){
var inst_32123 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32184_34989 = state_32140__$1;
(statearr_32184_34989[(2)] = inst_32123);

(statearr_32184_34989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (8))){
var inst_32109 = cljs.core.async.close_BANG_(to);
var state_32140__$1 = state_32140;
var statearr_32186_34990 = state_32140__$1;
(statearr_32186_34990[(2)] = inst_32109);

(statearr_32186_34990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1 = (function (state_32140){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32140);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32191){var ex__30972__auto__ = e32191;
var statearr_32195_34992 = state_32140;
(statearr_32195_34992[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32140[(4)]))){
var statearr_32196_34993 = state_32140;
(statearr_32196_34993[(1)] = cljs.core.first((state_32140[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34994 = state_32140;
state_32140 = G__34994;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__ = function(state_32140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1.call(this,state_32140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32200 = f__31271__auto__();
(statearr_32200[(6)] = c__31270__auto__);

return statearr_32200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32203 = arguments.length;
switch (G__32203) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32217 = arguments.length;
switch (G__32217) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32232 = arguments.length;
switch (G__32232) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31270__auto___35002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (7))){
var inst_32268 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32274_35003 = state_32272__$1;
(statearr_32274_35003[(2)] = inst_32268);

(statearr_32274_35003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (1))){
var state_32272__$1 = state_32272;
var statearr_32276_35004 = state_32272__$1;
(statearr_32276_35004[(2)] = null);

(statearr_32276_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (4))){
var inst_32248 = (state_32272[(7)]);
var inst_32248__$1 = (state_32272[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var state_32272__$1 = (function (){var statearr_32279 = state_32272;
(statearr_32279[(7)] = inst_32248__$1);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32249)){
var statearr_32280_35006 = state_32272__$1;
(statearr_32280_35006[(1)] = (5));

} else {
var statearr_32281_35007 = state_32272__$1;
(statearr_32281_35007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (13))){
var state_32272__$1 = state_32272;
var statearr_32282_35008 = state_32272__$1;
(statearr_32282_35008[(2)] = null);

(statearr_32282_35008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (6))){
var inst_32248 = (state_32272[(7)]);
var inst_32255 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32248) : p.call(null, inst_32248));
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32255)){
var statearr_32283_35009 = state_32272__$1;
(statearr_32283_35009[(1)] = (9));

} else {
var statearr_32284_35010 = state_32272__$1;
(statearr_32284_35010[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (3))){
var inst_32270 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (12))){
var state_32272__$1 = state_32272;
var statearr_32285_35011 = state_32272__$1;
(statearr_32285_35011[(2)] = null);

(statearr_32285_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (2))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32272__$1,(4),ch);
} else {
if((state_val_32273 === (11))){
var inst_32248 = (state_32272[(7)]);
var inst_32259 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32272__$1,(8),inst_32259,inst_32248);
} else {
if((state_val_32273 === (9))){
var state_32272__$1 = state_32272;
var statearr_32286_35017 = state_32272__$1;
(statearr_32286_35017[(2)] = tc);

(statearr_32286_35017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (5))){
var inst_32252 = cljs.core.async.close_BANG_(tc);
var inst_32253 = cljs.core.async.close_BANG_(fc);
var state_32272__$1 = (function (){var statearr_32287 = state_32272;
(statearr_32287[(8)] = inst_32252);

return statearr_32287;
})();
var statearr_32288_35018 = state_32272__$1;
(statearr_32288_35018[(2)] = inst_32253);

(statearr_32288_35018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (14))){
var inst_32266 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32289_35019 = state_32272__$1;
(statearr_32289_35019[(2)] = inst_32266);

(statearr_32289_35019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (10))){
var state_32272__$1 = state_32272;
var statearr_32290_35021 = state_32272__$1;
(statearr_32290_35021[(2)] = fc);

(statearr_32290_35021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (8))){
var inst_32261 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32261)){
var statearr_32291_35025 = state_32272__$1;
(statearr_32291_35025[(1)] = (12));

} else {
var statearr_32292_35026 = state_32272__$1;
(statearr_32292_35026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_32293 = [null,null,null,null,null,null,null,null,null];
(statearr_32293[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_32293[(1)] = (1));

return statearr_32293;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_32272){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32272);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32294){var ex__30972__auto__ = e32294;
var statearr_32295_35027 = state_32272;
(statearr_32295_35027[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32272[(4)]))){
var statearr_32296_35031 = state_32272;
(statearr_32296_35031[(1)] = cljs.core.first((state_32272[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35032 = state_32272;
state_32272 = G__35032;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32297 = f__31271__auto__();
(statearr_32297[(6)] = c__31270__auto___35002);

return statearr_32297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32323){
var state_val_32324 = (state_32323[(1)]);
if((state_val_32324 === (7))){
var inst_32315 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32325_35033 = state_32323__$1;
(statearr_32325_35033[(2)] = inst_32315);

(statearr_32325_35033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (1))){
var inst_32298 = init;
var inst_32299 = inst_32298;
var state_32323__$1 = (function (){var statearr_32329 = state_32323;
(statearr_32329[(7)] = inst_32299);

return statearr_32329;
})();
var statearr_32330_35035 = state_32323__$1;
(statearr_32330_35035[(2)] = null);

(statearr_32330_35035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (4))){
var inst_32302 = (state_32323[(8)]);
var inst_32302__$1 = (state_32323[(2)]);
var inst_32303 = (inst_32302__$1 == null);
var state_32323__$1 = (function (){var statearr_32331 = state_32323;
(statearr_32331[(8)] = inst_32302__$1);

return statearr_32331;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32332_35037 = state_32323__$1;
(statearr_32332_35037[(1)] = (5));

} else {
var statearr_32333_35038 = state_32323__$1;
(statearr_32333_35038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (6))){
var inst_32299 = (state_32323[(7)]);
var inst_32306 = (state_32323[(9)]);
var inst_32302 = (state_32323[(8)]);
var inst_32306__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32299,inst_32302) : f.call(null, inst_32299,inst_32302));
var inst_32307 = cljs.core.reduced_QMARK_(inst_32306__$1);
var state_32323__$1 = (function (){var statearr_32337 = state_32323;
(statearr_32337[(9)] = inst_32306__$1);

return statearr_32337;
})();
if(inst_32307){
var statearr_32338_35039 = state_32323__$1;
(statearr_32338_35039[(1)] = (8));

} else {
var statearr_32339_35041 = state_32323__$1;
(statearr_32339_35041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (3))){
var inst_32317 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32323__$1,inst_32317);
} else {
if((state_val_32324 === (2))){
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32323__$1,(4),ch);
} else {
if((state_val_32324 === (9))){
var inst_32306 = (state_32323[(9)]);
var inst_32299 = inst_32306;
var state_32323__$1 = (function (){var statearr_32341 = state_32323;
(statearr_32341[(7)] = inst_32299);

return statearr_32341;
})();
var statearr_32342_35048 = state_32323__$1;
(statearr_32342_35048[(2)] = null);

(statearr_32342_35048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (5))){
var inst_32299 = (state_32323[(7)]);
var state_32323__$1 = state_32323;
var statearr_32343_35049 = state_32323__$1;
(statearr_32343_35049[(2)] = inst_32299);

(statearr_32343_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (10))){
var inst_32313 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32344_35050 = state_32323__$1;
(statearr_32344_35050[(2)] = inst_32313);

(statearr_32344_35050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (8))){
var inst_32306 = (state_32323[(9)]);
var inst_32309 = cljs.core.deref(inst_32306);
var state_32323__$1 = state_32323;
var statearr_32345_35053 = state_32323__$1;
(statearr_32345_35053[(2)] = inst_32309);

(statearr_32345_35053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30969__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30969__auto____0 = (function (){
var statearr_32347 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32347[(0)] = cljs$core$async$reduce_$_state_machine__30969__auto__);

(statearr_32347[(1)] = (1));

return statearr_32347;
});
var cljs$core$async$reduce_$_state_machine__30969__auto____1 = (function (state_32323){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32323);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32348){var ex__30972__auto__ = e32348;
var statearr_32349_35055 = state_32323;
(statearr_32349_35055[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32323[(4)]))){
var statearr_32362_35057 = state_32323;
(statearr_32362_35057[(1)] = cljs.core.first((state_32323[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35058 = state_32323;
state_32323 = G__35058;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30969__auto__ = function(state_32323){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30969__auto____1.call(this,state_32323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30969__auto____0;
cljs$core$async$reduce_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30969__auto____1;
return cljs$core$async$reduce_$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32363 = f__31271__auto__();
(statearr_32363[(6)] = c__31270__auto__);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32374){
var state_val_32375 = (state_32374[(1)]);
if((state_val_32375 === (1))){
var inst_32368 = cljs.core.async.reduce(f__$1,init,ch);
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32374__$1,(2),inst_32368);
} else {
if((state_val_32375 === (2))){
var inst_32370 = (state_32374[(2)]);
var inst_32371 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32370) : f__$1.call(null, inst_32370));
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32374__$1,inst_32371);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30969__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30969__auto____0 = (function (){
var statearr_32376 = [null,null,null,null,null,null,null];
(statearr_32376[(0)] = cljs$core$async$transduce_$_state_machine__30969__auto__);

(statearr_32376[(1)] = (1));

return statearr_32376;
});
var cljs$core$async$transduce_$_state_machine__30969__auto____1 = (function (state_32374){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32374);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32377){var ex__30972__auto__ = e32377;
var statearr_32378_35060 = state_32374;
(statearr_32378_35060[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32374[(4)]))){
var statearr_32379_35061 = state_32374;
(statearr_32379_35061[(1)] = cljs.core.first((state_32374[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35062 = state_32374;
state_32374 = G__35062;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30969__auto__ = function(state_32374){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30969__auto____1.call(this,state_32374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30969__auto____0;
cljs$core$async$transduce_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30969__auto____1;
return cljs$core$async$transduce_$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32382 = f__31271__auto__();
(statearr_32382[(6)] = c__31270__auto__);

return statearr_32382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32384 = arguments.length;
switch (G__32384) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32422){
var state_val_32423 = (state_32422[(1)]);
if((state_val_32423 === (7))){
var inst_32396 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32424_35068 = state_32422__$1;
(statearr_32424_35068[(2)] = inst_32396);

(statearr_32424_35068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (1))){
var inst_32388 = cljs.core.seq(coll);
var inst_32389 = inst_32388;
var state_32422__$1 = (function (){var statearr_32425 = state_32422;
(statearr_32425[(7)] = inst_32389);

return statearr_32425;
})();
var statearr_32426_35069 = state_32422__$1;
(statearr_32426_35069[(2)] = null);

(statearr_32426_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (4))){
var inst_32389 = (state_32422[(7)]);
var inst_32394 = cljs.core.first(inst_32389);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32422__$1,(7),ch,inst_32394);
} else {
if((state_val_32423 === (13))){
var inst_32408 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32428_35070 = state_32422__$1;
(statearr_32428_35070[(2)] = inst_32408);

(statearr_32428_35070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (6))){
var inst_32399 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32399)){
var statearr_32430_35072 = state_32422__$1;
(statearr_32430_35072[(1)] = (8));

} else {
var statearr_32431_35073 = state_32422__$1;
(statearr_32431_35073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (3))){
var inst_32412 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32422__$1,inst_32412);
} else {
if((state_val_32423 === (12))){
var state_32422__$1 = state_32422;
var statearr_32435_35074 = state_32422__$1;
(statearr_32435_35074[(2)] = null);

(statearr_32435_35074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (2))){
var inst_32389 = (state_32422[(7)]);
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32389)){
var statearr_32436_35075 = state_32422__$1;
(statearr_32436_35075[(1)] = (4));

} else {
var statearr_32437_35076 = state_32422__$1;
(statearr_32437_35076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (11))){
var inst_32405 = cljs.core.async.close_BANG_(ch);
var state_32422__$1 = state_32422;
var statearr_32439_35077 = state_32422__$1;
(statearr_32439_35077[(2)] = inst_32405);

(statearr_32439_35077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (9))){
var state_32422__$1 = state_32422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32440_35081 = state_32422__$1;
(statearr_32440_35081[(1)] = (11));

} else {
var statearr_32441_35082 = state_32422__$1;
(statearr_32441_35082[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (5))){
var inst_32389 = (state_32422[(7)]);
var state_32422__$1 = state_32422;
var statearr_32442_35089 = state_32422__$1;
(statearr_32442_35089[(2)] = inst_32389);

(statearr_32442_35089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (10))){
var inst_32410 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32443_35090 = state_32422__$1;
(statearr_32443_35090[(2)] = inst_32410);

(statearr_32443_35090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (8))){
var inst_32389 = (state_32422[(7)]);
var inst_32401 = cljs.core.next(inst_32389);
var inst_32389__$1 = inst_32401;
var state_32422__$1 = (function (){var statearr_32448 = state_32422;
(statearr_32448[(7)] = inst_32389__$1);

return statearr_32448;
})();
var statearr_32449_35094 = state_32422__$1;
(statearr_32449_35094[(2)] = null);

(statearr_32449_35094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_32422){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32422);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32453){var ex__30972__auto__ = e32453;
var statearr_32454_35109 = state_32422;
(statearr_32454_35109[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32422[(4)]))){
var statearr_32455_35110 = state_32422;
(statearr_32455_35110[(1)] = cljs.core.first((state_32422[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35111 = state_32422;
state_32422 = G__35111;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_32422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_32422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32456 = f__31271__auto__();
(statearr_32456[(6)] = c__31270__auto__);

return statearr_32456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32461 = arguments.length;
switch (G__32461) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35119 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35119(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35120 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35120(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35127 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35127(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35132 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35132(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32499 = (function (ch,cs,meta32500){
this.ch = ch;
this.cs = cs;
this.meta32500 = meta32500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32501,meta32500__$1){
var self__ = this;
var _32501__$1 = this;
return (new cljs.core.async.t_cljs$core$async32499(self__.ch,self__.cs,meta32500__$1));
}));

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32501){
var self__ = this;
var _32501__$1 = this;
return self__.meta32500;
}));

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32500","meta32500",1612094325,null)], null);
}));

(cljs.core.async.t_cljs$core$async32499.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32499");

(cljs.core.async.t_cljs$core$async32499.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32499");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32499.
 */
cljs.core.async.__GT_t_cljs$core$async32499 = (function cljs$core$async$__GT_t_cljs$core$async32499(ch,cs,meta32500){
return (new cljs.core.async.t_cljs$core$async32499(ch,cs,meta32500));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32499(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31270__auto___35134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_32658){
var state_val_32659 = (state_32658[(1)]);
if((state_val_32659 === (7))){
var inst_32652 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32664_35135 = state_32658__$1;
(statearr_32664_35135[(2)] = inst_32652);

(statearr_32664_35135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (20))){
var inst_32543 = (state_32658[(7)]);
var inst_32559 = cljs.core.first(inst_32543);
var inst_32560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32559,(0),null);
var inst_32561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32559,(1),null);
var state_32658__$1 = (function (){var statearr_32666 = state_32658;
(statearr_32666[(8)] = inst_32560);

return statearr_32666;
})();
if(cljs.core.truth_(inst_32561)){
var statearr_32667_35136 = state_32658__$1;
(statearr_32667_35136[(1)] = (22));

} else {
var statearr_32670_35137 = state_32658__$1;
(statearr_32670_35137[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (27))){
var inst_32598 = (state_32658[(9)]);
var inst_32593 = (state_32658[(10)]);
var inst_32591 = (state_32658[(11)]);
var inst_32511 = (state_32658[(12)]);
var inst_32598__$1 = cljs.core._nth(inst_32591,inst_32593);
var inst_32599 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32598__$1,inst_32511,done);
var state_32658__$1 = (function (){var statearr_32683 = state_32658;
(statearr_32683[(9)] = inst_32598__$1);

return statearr_32683;
})();
if(cljs.core.truth_(inst_32599)){
var statearr_32684_35141 = state_32658__$1;
(statearr_32684_35141[(1)] = (30));

} else {
var statearr_32685_35142 = state_32658__$1;
(statearr_32685_35142[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (1))){
var state_32658__$1 = state_32658;
var statearr_32686_35143 = state_32658__$1;
(statearr_32686_35143[(2)] = null);

(statearr_32686_35143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (24))){
var inst_32543 = (state_32658[(7)]);
var inst_32566 = (state_32658[(2)]);
var inst_32567 = cljs.core.next(inst_32543);
var inst_32521 = inst_32567;
var inst_32522 = null;
var inst_32523 = (0);
var inst_32524 = (0);
var state_32658__$1 = (function (){var statearr_32687 = state_32658;
(statearr_32687[(13)] = inst_32524);

(statearr_32687[(14)] = inst_32521);

(statearr_32687[(15)] = inst_32522);

(statearr_32687[(16)] = inst_32523);

(statearr_32687[(17)] = inst_32566);

return statearr_32687;
})();
var statearr_32688_35145 = state_32658__$1;
(statearr_32688_35145[(2)] = null);

(statearr_32688_35145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (39))){
var state_32658__$1 = state_32658;
var statearr_32694_35146 = state_32658__$1;
(statearr_32694_35146[(2)] = null);

(statearr_32694_35146[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (4))){
var inst_32511 = (state_32658[(12)]);
var inst_32511__$1 = (state_32658[(2)]);
var inst_32513 = (inst_32511__$1 == null);
var state_32658__$1 = (function (){var statearr_32695 = state_32658;
(statearr_32695[(12)] = inst_32511__$1);

return statearr_32695;
})();
if(cljs.core.truth_(inst_32513)){
var statearr_32696_35147 = state_32658__$1;
(statearr_32696_35147[(1)] = (5));

} else {
var statearr_32697_35148 = state_32658__$1;
(statearr_32697_35148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (15))){
var inst_32524 = (state_32658[(13)]);
var inst_32521 = (state_32658[(14)]);
var inst_32522 = (state_32658[(15)]);
var inst_32523 = (state_32658[(16)]);
var inst_32539 = (state_32658[(2)]);
var inst_32540 = (inst_32524 + (1));
var tmp32689 = inst_32521;
var tmp32690 = inst_32522;
var tmp32691 = inst_32523;
var inst_32521__$1 = tmp32689;
var inst_32522__$1 = tmp32690;
var inst_32523__$1 = tmp32691;
var inst_32524__$1 = inst_32540;
var state_32658__$1 = (function (){var statearr_32698 = state_32658;
(statearr_32698[(13)] = inst_32524__$1);

(statearr_32698[(14)] = inst_32521__$1);

(statearr_32698[(15)] = inst_32522__$1);

(statearr_32698[(18)] = inst_32539);

(statearr_32698[(16)] = inst_32523__$1);

return statearr_32698;
})();
var statearr_32699_35149 = state_32658__$1;
(statearr_32699_35149[(2)] = null);

(statearr_32699_35149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (21))){
var inst_32570 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32713_35150 = state_32658__$1;
(statearr_32713_35150[(2)] = inst_32570);

(statearr_32713_35150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (31))){
var inst_32598 = (state_32658[(9)]);
var inst_32602 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32598);
var state_32658__$1 = state_32658;
var statearr_32714_35151 = state_32658__$1;
(statearr_32714_35151[(2)] = inst_32602);

(statearr_32714_35151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (32))){
var inst_32593 = (state_32658[(10)]);
var inst_32592 = (state_32658[(19)]);
var inst_32591 = (state_32658[(11)]);
var inst_32590 = (state_32658[(20)]);
var inst_32604 = (state_32658[(2)]);
var inst_32605 = (inst_32593 + (1));
var tmp32703 = inst_32592;
var tmp32704 = inst_32591;
var tmp32705 = inst_32590;
var inst_32590__$1 = tmp32705;
var inst_32591__$1 = tmp32704;
var inst_32592__$1 = tmp32703;
var inst_32593__$1 = inst_32605;
var state_32658__$1 = (function (){var statearr_32715 = state_32658;
(statearr_32715[(21)] = inst_32604);

(statearr_32715[(10)] = inst_32593__$1);

(statearr_32715[(19)] = inst_32592__$1);

(statearr_32715[(11)] = inst_32591__$1);

(statearr_32715[(20)] = inst_32590__$1);

return statearr_32715;
})();
var statearr_32716_35155 = state_32658__$1;
(statearr_32716_35155[(2)] = null);

(statearr_32716_35155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (40))){
var inst_32624 = (state_32658[(22)]);
var inst_32629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32624);
var state_32658__$1 = state_32658;
var statearr_32720_35159 = state_32658__$1;
(statearr_32720_35159[(2)] = inst_32629);

(statearr_32720_35159[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (33))){
var inst_32608 = (state_32658[(23)]);
var inst_32613 = cljs.core.chunked_seq_QMARK_(inst_32608);
var state_32658__$1 = state_32658;
if(inst_32613){
var statearr_32723_35160 = state_32658__$1;
(statearr_32723_35160[(1)] = (36));

} else {
var statearr_32724_35161 = state_32658__$1;
(statearr_32724_35161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (13))){
var inst_32533 = (state_32658[(24)]);
var inst_32536 = cljs.core.async.close_BANG_(inst_32533);
var state_32658__$1 = state_32658;
var statearr_32725_35162 = state_32658__$1;
(statearr_32725_35162[(2)] = inst_32536);

(statearr_32725_35162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (22))){
var inst_32560 = (state_32658[(8)]);
var inst_32563 = cljs.core.async.close_BANG_(inst_32560);
var state_32658__$1 = state_32658;
var statearr_32726_35163 = state_32658__$1;
(statearr_32726_35163[(2)] = inst_32563);

(statearr_32726_35163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (36))){
var inst_32608 = (state_32658[(23)]);
var inst_32619 = cljs.core.chunk_first(inst_32608);
var inst_32620 = cljs.core.chunk_rest(inst_32608);
var inst_32621 = cljs.core.count(inst_32619);
var inst_32590 = inst_32620;
var inst_32591 = inst_32619;
var inst_32592 = inst_32621;
var inst_32593 = (0);
var state_32658__$1 = (function (){var statearr_32728 = state_32658;
(statearr_32728[(10)] = inst_32593);

(statearr_32728[(19)] = inst_32592);

(statearr_32728[(11)] = inst_32591);

(statearr_32728[(20)] = inst_32590);

return statearr_32728;
})();
var statearr_32730_35169 = state_32658__$1;
(statearr_32730_35169[(2)] = null);

(statearr_32730_35169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (41))){
var inst_32608 = (state_32658[(23)]);
var inst_32631 = (state_32658[(2)]);
var inst_32632 = cljs.core.next(inst_32608);
var inst_32590 = inst_32632;
var inst_32591 = null;
var inst_32592 = (0);
var inst_32593 = (0);
var state_32658__$1 = (function (){var statearr_32731 = state_32658;
(statearr_32731[(25)] = inst_32631);

(statearr_32731[(10)] = inst_32593);

(statearr_32731[(19)] = inst_32592);

(statearr_32731[(11)] = inst_32591);

(statearr_32731[(20)] = inst_32590);

return statearr_32731;
})();
var statearr_32732_35175 = state_32658__$1;
(statearr_32732_35175[(2)] = null);

(statearr_32732_35175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (43))){
var state_32658__$1 = state_32658;
var statearr_32740_35176 = state_32658__$1;
(statearr_32740_35176[(2)] = null);

(statearr_32740_35176[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (29))){
var inst_32640 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32748_35177 = state_32658__$1;
(statearr_32748_35177[(2)] = inst_32640);

(statearr_32748_35177[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (44))){
var inst_32649 = (state_32658[(2)]);
var state_32658__$1 = (function (){var statearr_32749 = state_32658;
(statearr_32749[(26)] = inst_32649);

return statearr_32749;
})();
var statearr_32750_35178 = state_32658__$1;
(statearr_32750_35178[(2)] = null);

(statearr_32750_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (6))){
var inst_32582 = (state_32658[(27)]);
var inst_32581 = cljs.core.deref(cs);
var inst_32582__$1 = cljs.core.keys(inst_32581);
var inst_32583 = cljs.core.count(inst_32582__$1);
var inst_32584 = cljs.core.reset_BANG_(dctr,inst_32583);
var inst_32589 = cljs.core.seq(inst_32582__$1);
var inst_32590 = inst_32589;
var inst_32591 = null;
var inst_32592 = (0);
var inst_32593 = (0);
var state_32658__$1 = (function (){var statearr_32752 = state_32658;
(statearr_32752[(28)] = inst_32584);

(statearr_32752[(10)] = inst_32593);

(statearr_32752[(19)] = inst_32592);

(statearr_32752[(27)] = inst_32582__$1);

(statearr_32752[(11)] = inst_32591);

(statearr_32752[(20)] = inst_32590);

return statearr_32752;
})();
var statearr_32755_35182 = state_32658__$1;
(statearr_32755_35182[(2)] = null);

(statearr_32755_35182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (28))){
var inst_32608 = (state_32658[(23)]);
var inst_32590 = (state_32658[(20)]);
var inst_32608__$1 = cljs.core.seq(inst_32590);
var state_32658__$1 = (function (){var statearr_32756 = state_32658;
(statearr_32756[(23)] = inst_32608__$1);

return statearr_32756;
})();
if(inst_32608__$1){
var statearr_32757_35183 = state_32658__$1;
(statearr_32757_35183[(1)] = (33));

} else {
var statearr_32758_35184 = state_32658__$1;
(statearr_32758_35184[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (25))){
var inst_32593 = (state_32658[(10)]);
var inst_32592 = (state_32658[(19)]);
var inst_32595 = (inst_32593 < inst_32592);
var inst_32596 = inst_32595;
var state_32658__$1 = state_32658;
if(cljs.core.truth_(inst_32596)){
var statearr_32759_35185 = state_32658__$1;
(statearr_32759_35185[(1)] = (27));

} else {
var statearr_32760_35187 = state_32658__$1;
(statearr_32760_35187[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (34))){
var state_32658__$1 = state_32658;
var statearr_32761_35188 = state_32658__$1;
(statearr_32761_35188[(2)] = null);

(statearr_32761_35188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (17))){
var state_32658__$1 = state_32658;
var statearr_32763_35189 = state_32658__$1;
(statearr_32763_35189[(2)] = null);

(statearr_32763_35189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (3))){
var inst_32654 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32658__$1,inst_32654);
} else {
if((state_val_32659 === (12))){
var inst_32575 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32765_35190 = state_32658__$1;
(statearr_32765_35190[(2)] = inst_32575);

(statearr_32765_35190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (2))){
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32658__$1,(4),ch);
} else {
if((state_val_32659 === (23))){
var state_32658__$1 = state_32658;
var statearr_32769_35192 = state_32658__$1;
(statearr_32769_35192[(2)] = null);

(statearr_32769_35192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (35))){
var inst_32638 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32770_35196 = state_32658__$1;
(statearr_32770_35196[(2)] = inst_32638);

(statearr_32770_35196[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (19))){
var inst_32543 = (state_32658[(7)]);
var inst_32551 = cljs.core.chunk_first(inst_32543);
var inst_32552 = cljs.core.chunk_rest(inst_32543);
var inst_32553 = cljs.core.count(inst_32551);
var inst_32521 = inst_32552;
var inst_32522 = inst_32551;
var inst_32523 = inst_32553;
var inst_32524 = (0);
var state_32658__$1 = (function (){var statearr_32771 = state_32658;
(statearr_32771[(13)] = inst_32524);

(statearr_32771[(14)] = inst_32521);

(statearr_32771[(15)] = inst_32522);

(statearr_32771[(16)] = inst_32523);

return statearr_32771;
})();
var statearr_32772_35197 = state_32658__$1;
(statearr_32772_35197[(2)] = null);

(statearr_32772_35197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (11))){
var inst_32521 = (state_32658[(14)]);
var inst_32543 = (state_32658[(7)]);
var inst_32543__$1 = cljs.core.seq(inst_32521);
var state_32658__$1 = (function (){var statearr_32775 = state_32658;
(statearr_32775[(7)] = inst_32543__$1);

return statearr_32775;
})();
if(inst_32543__$1){
var statearr_32776_35203 = state_32658__$1;
(statearr_32776_35203[(1)] = (16));

} else {
var statearr_32777_35204 = state_32658__$1;
(statearr_32777_35204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (9))){
var inst_32577 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32778_35205 = state_32658__$1;
(statearr_32778_35205[(2)] = inst_32577);

(statearr_32778_35205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (5))){
var inst_32519 = cljs.core.deref(cs);
var inst_32520 = cljs.core.seq(inst_32519);
var inst_32521 = inst_32520;
var inst_32522 = null;
var inst_32523 = (0);
var inst_32524 = (0);
var state_32658__$1 = (function (){var statearr_32779 = state_32658;
(statearr_32779[(13)] = inst_32524);

(statearr_32779[(14)] = inst_32521);

(statearr_32779[(15)] = inst_32522);

(statearr_32779[(16)] = inst_32523);

return statearr_32779;
})();
var statearr_32780_35209 = state_32658__$1;
(statearr_32780_35209[(2)] = null);

(statearr_32780_35209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (14))){
var state_32658__$1 = state_32658;
var statearr_32781_35210 = state_32658__$1;
(statearr_32781_35210[(2)] = null);

(statearr_32781_35210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (45))){
var inst_32646 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32782_35211 = state_32658__$1;
(statearr_32782_35211[(2)] = inst_32646);

(statearr_32782_35211[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (26))){
var inst_32582 = (state_32658[(27)]);
var inst_32642 = (state_32658[(2)]);
var inst_32643 = cljs.core.seq(inst_32582);
var state_32658__$1 = (function (){var statearr_32784 = state_32658;
(statearr_32784[(29)] = inst_32642);

return statearr_32784;
})();
if(inst_32643){
var statearr_32785_35212 = state_32658__$1;
(statearr_32785_35212[(1)] = (42));

} else {
var statearr_32786_35216 = state_32658__$1;
(statearr_32786_35216[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (16))){
var inst_32543 = (state_32658[(7)]);
var inst_32547 = cljs.core.chunked_seq_QMARK_(inst_32543);
var state_32658__$1 = state_32658;
if(inst_32547){
var statearr_32788_35217 = state_32658__$1;
(statearr_32788_35217[(1)] = (19));

} else {
var statearr_32789_35218 = state_32658__$1;
(statearr_32789_35218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (38))){
var inst_32635 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32791_35219 = state_32658__$1;
(statearr_32791_35219[(2)] = inst_32635);

(statearr_32791_35219[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (30))){
var state_32658__$1 = state_32658;
var statearr_32794_35220 = state_32658__$1;
(statearr_32794_35220[(2)] = null);

(statearr_32794_35220[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (10))){
var inst_32524 = (state_32658[(13)]);
var inst_32522 = (state_32658[(15)]);
var inst_32532 = cljs.core._nth(inst_32522,inst_32524);
var inst_32533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32532,(0),null);
var inst_32534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32532,(1),null);
var state_32658__$1 = (function (){var statearr_32797 = state_32658;
(statearr_32797[(24)] = inst_32533);

return statearr_32797;
})();
if(cljs.core.truth_(inst_32534)){
var statearr_32802_35221 = state_32658__$1;
(statearr_32802_35221[(1)] = (13));

} else {
var statearr_32803_35222 = state_32658__$1;
(statearr_32803_35222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (18))){
var inst_32573 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32805_35223 = state_32658__$1;
(statearr_32805_35223[(2)] = inst_32573);

(statearr_32805_35223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (42))){
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32658__$1,(45),dchan);
} else {
if((state_val_32659 === (37))){
var inst_32608 = (state_32658[(23)]);
var inst_32624 = (state_32658[(22)]);
var inst_32511 = (state_32658[(12)]);
var inst_32624__$1 = cljs.core.first(inst_32608);
var inst_32625 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32624__$1,inst_32511,done);
var state_32658__$1 = (function (){var statearr_32807 = state_32658;
(statearr_32807[(22)] = inst_32624__$1);

return statearr_32807;
})();
if(cljs.core.truth_(inst_32625)){
var statearr_32808_35224 = state_32658__$1;
(statearr_32808_35224[(1)] = (39));

} else {
var statearr_32809_35225 = state_32658__$1;
(statearr_32809_35225[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (8))){
var inst_32524 = (state_32658[(13)]);
var inst_32523 = (state_32658[(16)]);
var inst_32526 = (inst_32524 < inst_32523);
var inst_32527 = inst_32526;
var state_32658__$1 = state_32658;
if(cljs.core.truth_(inst_32527)){
var statearr_32811_35226 = state_32658__$1;
(statearr_32811_35226[(1)] = (10));

} else {
var statearr_32812_35227 = state_32658__$1;
(statearr_32812_35227[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30969__auto__ = null;
var cljs$core$async$mult_$_state_machine__30969__auto____0 = (function (){
var statearr_32819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32819[(0)] = cljs$core$async$mult_$_state_machine__30969__auto__);

(statearr_32819[(1)] = (1));

return statearr_32819;
});
var cljs$core$async$mult_$_state_machine__30969__auto____1 = (function (state_32658){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_32658);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e32821){var ex__30972__auto__ = e32821;
var statearr_32823_35233 = state_32658;
(statearr_32823_35233[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_32658[(4)]))){
var statearr_32824_35234 = state_32658;
(statearr_32824_35234[(1)] = cljs.core.first((state_32658[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35237 = state_32658;
state_32658 = G__35237;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30969__auto__ = function(state_32658){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30969__auto____1.call(this,state_32658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30969__auto____0;
cljs$core$async$mult_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30969__auto____1;
return cljs$core$async$mult_$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32825 = f__31271__auto__();
(statearr_32825[(6)] = c__31270__auto___35134);

return statearr_32825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32828 = arguments.length;
switch (G__32828) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35244 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35244(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35247 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35247(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35248 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35248(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35257 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35257(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35261 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35261(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35284 = arguments.length;
var i__5727__auto___35285 = (0);
while(true){
if((i__5727__auto___35285 < len__5726__auto___35284)){
args__5732__auto__.push((arguments[i__5727__auto___35285]));

var G__35286 = (i__5727__auto___35285 + (1));
i__5727__auto___35285 = G__35286;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32878){
var map__32883 = p__32878;
var map__32883__$1 = cljs.core.__destructure_map(map__32883);
var opts = map__32883__$1;
var statearr_32886_35287 = state;
(statearr_32886_35287[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32897_35288 = state;
(statearr_32897_35288[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_32898_35289 = state;
(statearr_32898_35289[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32860){
var G__32861 = cljs.core.first(seq32860);
var seq32860__$1 = cljs.core.next(seq32860);
var G__32862 = cljs.core.first(seq32860__$1);
var seq32860__$2 = cljs.core.next(seq32860__$1);
var G__32863 = cljs.core.first(seq32860__$2);
var seq32860__$3 = cljs.core.next(seq32860__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32861,G__32862,G__32863,seq32860__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32912 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32913){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32913 = meta32913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32914,meta32913__$1){
var self__ = this;
var _32914__$1 = this;
return (new cljs.core.async.t_cljs$core$async32912(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32913__$1));
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32914){
var self__ = this;
var _32914__$1 = this;
return self__.meta32913;
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32913","meta32913",-809112234,null)], null);
}));

(cljs.core.async.t_cljs$core$async32912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32912");

(cljs.core.async.t_cljs$core$async32912.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32912.
 */
cljs.core.async.__GT_t_cljs$core$async32912 = (function cljs$core$async$__GT_t_cljs$core$async32912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32913){
return (new cljs.core.async.t_cljs$core$async32912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32913));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31270__auto___35302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_33013){
var state_val_33017 = (state_33013[(1)]);
if((state_val_33017 === (7))){
var inst_32963 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32963)){
var statearr_33027_35303 = state_33013__$1;
(statearr_33027_35303[(1)] = (8));

} else {
var statearr_33029_35304 = state_33013__$1;
(statearr_33029_35304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (20))){
var inst_32955 = (state_33013[(7)]);
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33013__$1,(23),out,inst_32955);
} else {
if((state_val_33017 === (1))){
var inst_32934 = calc_state();
var inst_32935 = cljs.core.__destructure_map(inst_32934);
var inst_32936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32935,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32935,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32940 = inst_32934;
var state_33013__$1 = (function (){var statearr_33035 = state_33013;
(statearr_33035[(8)] = inst_32938);

(statearr_33035[(9)] = inst_32936);

(statearr_33035[(10)] = inst_32937);

(statearr_33035[(11)] = inst_32940);

return statearr_33035;
})();
var statearr_33037_35305 = state_33013__$1;
(statearr_33037_35305[(2)] = null);

(statearr_33037_35305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (24))){
var inst_32946 = (state_33013[(12)]);
var inst_32940 = inst_32946;
var state_33013__$1 = (function (){var statearr_33038 = state_33013;
(statearr_33038[(11)] = inst_32940);

return statearr_33038;
})();
var statearr_33039_35306 = state_33013__$1;
(statearr_33039_35306[(2)] = null);

(statearr_33039_35306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (4))){
var inst_32958 = (state_33013[(13)]);
var inst_32955 = (state_33013[(7)]);
var inst_32954 = (state_33013[(2)]);
var inst_32955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32954,(0),null);
var inst_32956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32954,(1),null);
var inst_32958__$1 = (inst_32955__$1 == null);
var state_33013__$1 = (function (){var statearr_33043 = state_33013;
(statearr_33043[(13)] = inst_32958__$1);

(statearr_33043[(7)] = inst_32955__$1);

(statearr_33043[(14)] = inst_32956);

return statearr_33043;
})();
if(cljs.core.truth_(inst_32958__$1)){
var statearr_33045_35307 = state_33013__$1;
(statearr_33045_35307[(1)] = (5));

} else {
var statearr_33046_35309 = state_33013__$1;
(statearr_33046_35309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (15))){
var inst_32947 = (state_33013[(15)]);
var inst_32979 = (state_33013[(16)]);
var inst_32979__$1 = cljs.core.empty_QMARK_(inst_32947);
var state_33013__$1 = (function (){var statearr_33050 = state_33013;
(statearr_33050[(16)] = inst_32979__$1);

return statearr_33050;
})();
if(inst_32979__$1){
var statearr_33051_35313 = state_33013__$1;
(statearr_33051_35313[(1)] = (17));

} else {
var statearr_33052_35314 = state_33013__$1;
(statearr_33052_35314[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (21))){
var inst_32946 = (state_33013[(12)]);
var inst_32940 = inst_32946;
var state_33013__$1 = (function (){var statearr_33055 = state_33013;
(statearr_33055[(11)] = inst_32940);

return statearr_33055;
})();
var statearr_33056_35315 = state_33013__$1;
(statearr_33056_35315[(2)] = null);

(statearr_33056_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (13))){
var inst_32972 = (state_33013[(2)]);
var inst_32973 = calc_state();
var inst_32940 = inst_32973;
var state_33013__$1 = (function (){var statearr_33060 = state_33013;
(statearr_33060[(17)] = inst_32972);

(statearr_33060[(11)] = inst_32940);

return statearr_33060;
})();
var statearr_33064_35316 = state_33013__$1;
(statearr_33064_35316[(2)] = null);

(statearr_33064_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (22))){
var inst_33000 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33066_35317 = state_33013__$1;
(statearr_33066_35317[(2)] = inst_33000);

(statearr_33066_35317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (6))){
var inst_32956 = (state_33013[(14)]);
var inst_32961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32956,change);
var state_33013__$1 = state_33013;
var statearr_33070_35318 = state_33013__$1;
(statearr_33070_35318[(2)] = inst_32961);

(statearr_33070_35318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (25))){
var state_33013__$1 = state_33013;
var statearr_33073_35319 = state_33013__$1;
(statearr_33073_35319[(2)] = null);

(statearr_33073_35319[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (17))){
var inst_32948 = (state_33013[(18)]);
var inst_32956 = (state_33013[(14)]);
var inst_32982 = (inst_32948.cljs$core$IFn$_invoke$arity$1 ? inst_32948.cljs$core$IFn$_invoke$arity$1(inst_32956) : inst_32948.call(null, inst_32956));
var inst_32983 = cljs.core.not(inst_32982);
var state_33013__$1 = state_33013;
var statearr_33076_35320 = state_33013__$1;
(statearr_33076_35320[(2)] = inst_32983);

(statearr_33076_35320[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (3))){
var inst_33005 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33013__$1,inst_33005);
} else {
if((state_val_33017 === (12))){
var state_33013__$1 = state_33013;
var statearr_33080_35321 = state_33013__$1;
(statearr_33080_35321[(2)] = null);

(statearr_33080_35321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (2))){
var inst_32946 = (state_33013[(12)]);
var inst_32940 = (state_33013[(11)]);
var inst_32946__$1 = cljs.core.__destructure_map(inst_32940);
var inst_32947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32946__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32946__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32946__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33013__$1 = (function (){var statearr_33092 = state_33013;
(statearr_33092[(15)] = inst_32947);

(statearr_33092[(18)] = inst_32948);

(statearr_33092[(12)] = inst_32946__$1);

return statearr_33092;
})();
return cljs.core.async.ioc_alts_BANG_(state_33013__$1,(4),inst_32949);
} else {
if((state_val_33017 === (23))){
var inst_32991 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32991)){
var statearr_33094_35322 = state_33013__$1;
(statearr_33094_35322[(1)] = (24));

} else {
var statearr_33096_35323 = state_33013__$1;
(statearr_33096_35323[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (19))){
var inst_32986 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33097_35324 = state_33013__$1;
(statearr_33097_35324[(2)] = inst_32986);

(statearr_33097_35324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (11))){
var inst_32956 = (state_33013[(14)]);
var inst_32968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32956);
var state_33013__$1 = state_33013;
var statearr_33102_35325 = state_33013__$1;
(statearr_33102_35325[(2)] = inst_32968);

(statearr_33102_35325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (9))){
var inst_32976 = (state_33013[(19)]);
var inst_32947 = (state_33013[(15)]);
var inst_32956 = (state_33013[(14)]);
var inst_32976__$1 = (inst_32947.cljs$core$IFn$_invoke$arity$1 ? inst_32947.cljs$core$IFn$_invoke$arity$1(inst_32956) : inst_32947.call(null, inst_32956));
var state_33013__$1 = (function (){var statearr_33107 = state_33013;
(statearr_33107[(19)] = inst_32976__$1);

return statearr_33107;
})();
if(cljs.core.truth_(inst_32976__$1)){
var statearr_33108_35326 = state_33013__$1;
(statearr_33108_35326[(1)] = (14));

} else {
var statearr_33109_35327 = state_33013__$1;
(statearr_33109_35327[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (5))){
var inst_32958 = (state_33013[(13)]);
var state_33013__$1 = state_33013;
var statearr_33115_35328 = state_33013__$1;
(statearr_33115_35328[(2)] = inst_32958);

(statearr_33115_35328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (14))){
var inst_32976 = (state_33013[(19)]);
var state_33013__$1 = state_33013;
var statearr_33119_35329 = state_33013__$1;
(statearr_33119_35329[(2)] = inst_32976);

(statearr_33119_35329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (26))){
var inst_32996 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33121_35330 = state_33013__$1;
(statearr_33121_35330[(2)] = inst_32996);

(statearr_33121_35330[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (16))){
var inst_32988 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32988)){
var statearr_33122_35331 = state_33013__$1;
(statearr_33122_35331[(1)] = (20));

} else {
var statearr_33123_35332 = state_33013__$1;
(statearr_33123_35332[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (10))){
var inst_33002 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33124_35333 = state_33013__$1;
(statearr_33124_35333[(2)] = inst_33002);

(statearr_33124_35333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (18))){
var inst_32979 = (state_33013[(16)]);
var state_33013__$1 = state_33013;
var statearr_33125_35336 = state_33013__$1;
(statearr_33125_35336[(2)] = inst_32979);

(statearr_33125_35336[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (8))){
var inst_32955 = (state_33013[(7)]);
var inst_32966 = (inst_32955 == null);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32966)){
var statearr_33126_35337 = state_33013__$1;
(statearr_33126_35337[(1)] = (11));

} else {
var statearr_33127_35338 = state_33013__$1;
(statearr_33127_35338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30969__auto__ = null;
var cljs$core$async$mix_$_state_machine__30969__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$mix_$_state_machine__30969__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$mix_$_state_machine__30969__auto____1 = (function (state_33013){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_33013);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e33135){var ex__30972__auto__ = e33135;
var statearr_33138_35339 = state_33013;
(statearr_33138_35339[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_33013[(4)]))){
var statearr_33141_35341 = state_33013;
(statearr_33141_35341[(1)] = cljs.core.first((state_33013[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35342 = state_33013;
state_33013 = G__35342;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30969__auto__ = function(state_33013){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30969__auto____1.call(this,state_33013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30969__auto____0;
cljs$core$async$mix_$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30969__auto____1;
return cljs$core$async$mix_$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33145 = f__31271__auto__();
(statearr_33145[(6)] = c__31270__auto___35302);

return statearr_33145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35347 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35347(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35348 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35348(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35352 = (function() {
var G__35353 = null;
var G__35353__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35353__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35353 = function(p,v){
switch(arguments.length){
case 1:
return G__35353__1.call(this,p);
case 2:
return G__35353__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35353.cljs$core$IFn$_invoke$arity$1 = G__35353__1;
G__35353.cljs$core$IFn$_invoke$arity$2 = G__35353__2;
return G__35353;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33204 = arguments.length;
switch (G__33204) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35352(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35352(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33274 = meta33274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33275,meta33274__$1){
var self__ = this;
var _33275__$1 = this;
return (new cljs.core.async.t_cljs$core$async33273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33274__$1));
}));

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33275){
var self__ = this;
var _33275__$1 = this;
return self__.meta33274;
}));

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33274","meta33274",-1349680582,null)], null);
}));

(cljs.core.async.t_cljs$core$async33273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33273");

(cljs.core.async.t_cljs$core$async33273.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33273.
 */
cljs.core.async.__GT_t_cljs$core$async33273 = (function cljs$core$async$__GT_t_cljs$core$async33273(ch,topic_fn,buf_fn,mults,ensure_mult,meta33274){
return (new cljs.core.async.t_cljs$core$async33273(ch,topic_fn,buf_fn,mults,ensure_mult,meta33274));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33266 = arguments.length;
switch (G__33266) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33262_SHARP_){
if(cljs.core.truth_((p1__33262_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33262_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33262_SHARP_.call(null, topic)))){
return p1__33262_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33262_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31270__auto___35365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_33435){
var state_val_33436 = (state_33435[(1)]);
if((state_val_33436 === (7))){
var inst_33431 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33437_35366 = state_33435__$1;
(statearr_33437_35366[(2)] = inst_33431);

(statearr_33437_35366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (20))){
var state_33435__$1 = state_33435;
var statearr_33438_35367 = state_33435__$1;
(statearr_33438_35367[(2)] = null);

(statearr_33438_35367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (1))){
var state_33435__$1 = state_33435;
var statearr_33439_35369 = state_33435__$1;
(statearr_33439_35369[(2)] = null);

(statearr_33439_35369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (24))){
var inst_33414 = (state_33435[(7)]);
var inst_33423 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33414);
var state_33435__$1 = state_33435;
var statearr_33440_35370 = state_33435__$1;
(statearr_33440_35370[(2)] = inst_33423);

(statearr_33440_35370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (4))){
var inst_33310 = (state_33435[(8)]);
var inst_33310__$1 = (state_33435[(2)]);
var inst_33321 = (inst_33310__$1 == null);
var state_33435__$1 = (function (){var statearr_33441 = state_33435;
(statearr_33441[(8)] = inst_33310__$1);

return statearr_33441;
})();
if(cljs.core.truth_(inst_33321)){
var statearr_33443_35375 = state_33435__$1;
(statearr_33443_35375[(1)] = (5));

} else {
var statearr_33445_35376 = state_33435__$1;
(statearr_33445_35376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (15))){
var inst_33408 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33447_35377 = state_33435__$1;
(statearr_33447_35377[(2)] = inst_33408);

(statearr_33447_35377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (21))){
var inst_33428 = (state_33435[(2)]);
var state_33435__$1 = (function (){var statearr_33448 = state_33435;
(statearr_33448[(9)] = inst_33428);

return statearr_33448;
})();
var statearr_33449_35379 = state_33435__$1;
(statearr_33449_35379[(2)] = null);

(statearr_33449_35379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (13))){
var inst_33384 = (state_33435[(10)]);
var inst_33387 = cljs.core.chunked_seq_QMARK_(inst_33384);
var state_33435__$1 = state_33435;
if(inst_33387){
var statearr_33451_35380 = state_33435__$1;
(statearr_33451_35380[(1)] = (16));

} else {
var statearr_33452_35381 = state_33435__$1;
(statearr_33452_35381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (22))){
var inst_33420 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
if(cljs.core.truth_(inst_33420)){
var statearr_33453_35382 = state_33435__$1;
(statearr_33453_35382[(1)] = (23));

} else {
var statearr_33454_35383 = state_33435__$1;
(statearr_33454_35383[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (6))){
var inst_33310 = (state_33435[(8)]);
var inst_33414 = (state_33435[(7)]);
var inst_33416 = (state_33435[(11)]);
var inst_33414__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33310) : topic_fn.call(null, inst_33310));
var inst_33415 = cljs.core.deref(mults);
var inst_33416__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33415,inst_33414__$1);
var state_33435__$1 = (function (){var statearr_33486 = state_33435;
(statearr_33486[(7)] = inst_33414__$1);

(statearr_33486[(11)] = inst_33416__$1);

return statearr_33486;
})();
if(cljs.core.truth_(inst_33416__$1)){
var statearr_33489_35387 = state_33435__$1;
(statearr_33489_35387[(1)] = (19));

} else {
var statearr_33490_35388 = state_33435__$1;
(statearr_33490_35388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (25))){
var inst_33425 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33491_35389 = state_33435__$1;
(statearr_33491_35389[(2)] = inst_33425);

(statearr_33491_35389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (17))){
var inst_33384 = (state_33435[(10)]);
var inst_33399 = cljs.core.first(inst_33384);
var inst_33400 = cljs.core.async.muxch_STAR_(inst_33399);
var inst_33401 = cljs.core.async.close_BANG_(inst_33400);
var inst_33402 = cljs.core.next(inst_33384);
var inst_33363 = inst_33402;
var inst_33364 = null;
var inst_33365 = (0);
var inst_33366 = (0);
var state_33435__$1 = (function (){var statearr_33497 = state_33435;
(statearr_33497[(12)] = inst_33366);

(statearr_33497[(13)] = inst_33401);

(statearr_33497[(14)] = inst_33364);

(statearr_33497[(15)] = inst_33365);

(statearr_33497[(16)] = inst_33363);

return statearr_33497;
})();
var statearr_33498_35391 = state_33435__$1;
(statearr_33498_35391[(2)] = null);

(statearr_33498_35391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (3))){
var inst_33433 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33435__$1,inst_33433);
} else {
if((state_val_33436 === (12))){
var inst_33410 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33503_35392 = state_33435__$1;
(statearr_33503_35392[(2)] = inst_33410);

(statearr_33503_35392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (2))){
var state_33435__$1 = state_33435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33435__$1,(4),ch);
} else {
if((state_val_33436 === (23))){
var state_33435__$1 = state_33435;
var statearr_33504_35393 = state_33435__$1;
(statearr_33504_35393[(2)] = null);

(statearr_33504_35393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (19))){
var inst_33310 = (state_33435[(8)]);
var inst_33416 = (state_33435[(11)]);
var inst_33418 = cljs.core.async.muxch_STAR_(inst_33416);
var state_33435__$1 = state_33435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33435__$1,(22),inst_33418,inst_33310);
} else {
if((state_val_33436 === (11))){
var inst_33384 = (state_33435[(10)]);
var inst_33363 = (state_33435[(16)]);
var inst_33384__$1 = cljs.core.seq(inst_33363);
var state_33435__$1 = (function (){var statearr_33509 = state_33435;
(statearr_33509[(10)] = inst_33384__$1);

return statearr_33509;
})();
if(inst_33384__$1){
var statearr_33510_35397 = state_33435__$1;
(statearr_33510_35397[(1)] = (13));

} else {
var statearr_33511_35399 = state_33435__$1;
(statearr_33511_35399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (9))){
var inst_33412 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33512_35403 = state_33435__$1;
(statearr_33512_35403[(2)] = inst_33412);

(statearr_33512_35403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (5))){
var inst_33358 = cljs.core.deref(mults);
var inst_33359 = cljs.core.vals(inst_33358);
var inst_33360 = cljs.core.seq(inst_33359);
var inst_33363 = inst_33360;
var inst_33364 = null;
var inst_33365 = (0);
var inst_33366 = (0);
var state_33435__$1 = (function (){var statearr_33514 = state_33435;
(statearr_33514[(12)] = inst_33366);

(statearr_33514[(14)] = inst_33364);

(statearr_33514[(15)] = inst_33365);

(statearr_33514[(16)] = inst_33363);

return statearr_33514;
})();
var statearr_33515_35404 = state_33435__$1;
(statearr_33515_35404[(2)] = null);

(statearr_33515_35404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (14))){
var state_33435__$1 = state_33435;
var statearr_33519_35405 = state_33435__$1;
(statearr_33519_35405[(2)] = null);

(statearr_33519_35405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (16))){
var inst_33384 = (state_33435[(10)]);
var inst_33393 = cljs.core.chunk_first(inst_33384);
var inst_33394 = cljs.core.chunk_rest(inst_33384);
var inst_33395 = cljs.core.count(inst_33393);
var inst_33363 = inst_33394;
var inst_33364 = inst_33393;
var inst_33365 = inst_33395;
var inst_33366 = (0);
var state_33435__$1 = (function (){var statearr_33522 = state_33435;
(statearr_33522[(12)] = inst_33366);

(statearr_33522[(14)] = inst_33364);

(statearr_33522[(15)] = inst_33365);

(statearr_33522[(16)] = inst_33363);

return statearr_33522;
})();
var statearr_33527_35410 = state_33435__$1;
(statearr_33527_35410[(2)] = null);

(statearr_33527_35410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (10))){
var inst_33366 = (state_33435[(12)]);
var inst_33364 = (state_33435[(14)]);
var inst_33365 = (state_33435[(15)]);
var inst_33363 = (state_33435[(16)]);
var inst_33378 = cljs.core._nth(inst_33364,inst_33366);
var inst_33379 = cljs.core.async.muxch_STAR_(inst_33378);
var inst_33380 = cljs.core.async.close_BANG_(inst_33379);
var inst_33381 = (inst_33366 + (1));
var tmp33516 = inst_33364;
var tmp33517 = inst_33365;
var tmp33518 = inst_33363;
var inst_33363__$1 = tmp33518;
var inst_33364__$1 = tmp33516;
var inst_33365__$1 = tmp33517;
var inst_33366__$1 = inst_33381;
var state_33435__$1 = (function (){var statearr_33532 = state_33435;
(statearr_33532[(12)] = inst_33366__$1);

(statearr_33532[(14)] = inst_33364__$1);

(statearr_33532[(15)] = inst_33365__$1);

(statearr_33532[(16)] = inst_33363__$1);

(statearr_33532[(17)] = inst_33380);

return statearr_33532;
})();
var statearr_33533_35415 = state_33435__$1;
(statearr_33533_35415[(2)] = null);

(statearr_33533_35415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (18))){
var inst_33405 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33534_35416 = state_33435__$1;
(statearr_33534_35416[(2)] = inst_33405);

(statearr_33534_35416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (8))){
var inst_33366 = (state_33435[(12)]);
var inst_33365 = (state_33435[(15)]);
var inst_33372 = (inst_33366 < inst_33365);
var inst_33374 = inst_33372;
var state_33435__$1 = state_33435;
if(cljs.core.truth_(inst_33374)){
var statearr_33539_35417 = state_33435__$1;
(statearr_33539_35417[(1)] = (10));

} else {
var statearr_33540_35418 = state_33435__$1;
(statearr_33540_35418[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_33545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33545[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_33545[(1)] = (1));

return statearr_33545;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_33435){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_33435);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e33546){var ex__30972__auto__ = e33546;
var statearr_33547_35419 = state_33435;
(statearr_33547_35419[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_33435[(4)]))){
var statearr_33548_35420 = state_33435;
(statearr_33548_35420[(1)] = cljs.core.first((state_33435[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35421 = state_33435;
state_33435 = G__35421;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_33435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_33435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33553 = f__31271__auto__();
(statearr_33553[(6)] = c__31270__auto___35365);

return statearr_33553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33556 = arguments.length;
switch (G__33556) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33571 = arguments.length;
switch (G__33571) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33584 = arguments.length;
switch (G__33584) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31270__auto___35428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_33680){
var state_val_33681 = (state_33680[(1)]);
if((state_val_33681 === (7))){
var state_33680__$1 = state_33680;
var statearr_33683_35429 = state_33680__$1;
(statearr_33683_35429[(2)] = null);

(statearr_33683_35429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (1))){
var state_33680__$1 = state_33680;
var statearr_33684_35430 = state_33680__$1;
(statearr_33684_35430[(2)] = null);

(statearr_33684_35430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (4))){
var inst_33605 = (state_33680[(7)]);
var inst_33604 = (state_33680[(8)]);
var inst_33608 = (inst_33605 < inst_33604);
var state_33680__$1 = state_33680;
if(cljs.core.truth_(inst_33608)){
var statearr_33685_35433 = state_33680__$1;
(statearr_33685_35433[(1)] = (6));

} else {
var statearr_33689_35434 = state_33680__$1;
(statearr_33689_35434[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (15))){
var inst_33663 = (state_33680[(9)]);
var inst_33668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33663);
var state_33680__$1 = state_33680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33680__$1,(17),out,inst_33668);
} else {
if((state_val_33681 === (13))){
var inst_33663 = (state_33680[(9)]);
var inst_33663__$1 = (state_33680[(2)]);
var inst_33664 = cljs.core.some(cljs.core.nil_QMARK_,inst_33663__$1);
var state_33680__$1 = (function (){var statearr_33690 = state_33680;
(statearr_33690[(9)] = inst_33663__$1);

return statearr_33690;
})();
if(cljs.core.truth_(inst_33664)){
var statearr_33691_35435 = state_33680__$1;
(statearr_33691_35435[(1)] = (14));

} else {
var statearr_33692_35439 = state_33680__$1;
(statearr_33692_35439[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (6))){
var state_33680__$1 = state_33680;
var statearr_33693_35440 = state_33680__$1;
(statearr_33693_35440[(2)] = null);

(statearr_33693_35440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (17))){
var inst_33670 = (state_33680[(2)]);
var state_33680__$1 = (function (){var statearr_33696 = state_33680;
(statearr_33696[(10)] = inst_33670);

return statearr_33696;
})();
var statearr_33697_35441 = state_33680__$1;
(statearr_33697_35441[(2)] = null);

(statearr_33697_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (3))){
var inst_33675 = (state_33680[(2)]);
var state_33680__$1 = state_33680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33680__$1,inst_33675);
} else {
if((state_val_33681 === (12))){
var _ = (function (){var statearr_33700 = state_33680;
(statearr_33700[(4)] = cljs.core.rest((state_33680[(4)])));

return statearr_33700;
})();
var state_33680__$1 = state_33680;
var ex33695 = (state_33680__$1[(2)]);
var statearr_33704_35443 = state_33680__$1;
(statearr_33704_35443[(5)] = ex33695);


if((ex33695 instanceof Object)){
var statearr_33711_35444 = state_33680__$1;
(statearr_33711_35444[(1)] = (11));

(statearr_33711_35444[(5)] = null);

} else {
throw ex33695;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (2))){
var inst_33603 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33604 = cnt;
var inst_33605 = (0);
var state_33680__$1 = (function (){var statearr_33726 = state_33680;
(statearr_33726[(7)] = inst_33605);

(statearr_33726[(11)] = inst_33603);

(statearr_33726[(8)] = inst_33604);

return statearr_33726;
})();
var statearr_33727_35445 = state_33680__$1;
(statearr_33727_35445[(2)] = null);

(statearr_33727_35445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (11))){
var inst_33629 = (state_33680[(2)]);
var inst_33630 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33680__$1 = (function (){var statearr_33728 = state_33680;
(statearr_33728[(12)] = inst_33629);

return statearr_33728;
})();
var statearr_33729_35446 = state_33680__$1;
(statearr_33729_35446[(2)] = inst_33630);

(statearr_33729_35446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (9))){
var inst_33605 = (state_33680[(7)]);
var _ = (function (){var statearr_33730 = state_33680;
(statearr_33730[(4)] = cljs.core.cons((12),(state_33680[(4)])));

return statearr_33730;
})();
var inst_33637 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33605) : chs__$1.call(null, inst_33605));
var inst_33639 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33605) : done.call(null, inst_33605));
var inst_33649 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33637,inst_33639);
var ___$1 = (function (){var statearr_33731 = state_33680;
(statearr_33731[(4)] = cljs.core.rest((state_33680[(4)])));

return statearr_33731;
})();
var state_33680__$1 = state_33680;
var statearr_33732_35450 = state_33680__$1;
(statearr_33732_35450[(2)] = inst_33649);

(statearr_33732_35450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (5))){
var inst_33661 = (state_33680[(2)]);
var state_33680__$1 = (function (){var statearr_33734 = state_33680;
(statearr_33734[(13)] = inst_33661);

return statearr_33734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33680__$1,(13),dchan);
} else {
if((state_val_33681 === (14))){
var inst_33666 = cljs.core.async.close_BANG_(out);
var state_33680__$1 = state_33680;
var statearr_33736_35451 = state_33680__$1;
(statearr_33736_35451[(2)] = inst_33666);

(statearr_33736_35451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (16))){
var inst_33673 = (state_33680[(2)]);
var state_33680__$1 = state_33680;
var statearr_33737_35452 = state_33680__$1;
(statearr_33737_35452[(2)] = inst_33673);

(statearr_33737_35452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (10))){
var inst_33605 = (state_33680[(7)]);
var inst_33653 = (state_33680[(2)]);
var inst_33655 = (inst_33605 + (1));
var inst_33605__$1 = inst_33655;
var state_33680__$1 = (function (){var statearr_33738 = state_33680;
(statearr_33738[(7)] = inst_33605__$1);

(statearr_33738[(14)] = inst_33653);

return statearr_33738;
})();
var statearr_33739_35453 = state_33680__$1;
(statearr_33739_35453[(2)] = null);

(statearr_33739_35453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33681 === (8))){
var inst_33659 = (state_33680[(2)]);
var state_33680__$1 = state_33680;
var statearr_33740_35454 = state_33680__$1;
(statearr_33740_35454[(2)] = inst_33659);

(statearr_33740_35454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_33741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33741[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_33741[(1)] = (1));

return statearr_33741;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_33680){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_33680);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e33742){var ex__30972__auto__ = e33742;
var statearr_33743_35455 = state_33680;
(statearr_33743_35455[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_33680[(4)]))){
var statearr_33747_35456 = state_33680;
(statearr_33747_35456[(1)] = cljs.core.first((state_33680[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35460 = state_33680;
state_33680 = G__35460;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_33680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_33680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33748 = f__31271__auto__();
(statearr_33748[(6)] = c__31270__auto___35428);

return statearr_33748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33753 = arguments.length;
switch (G__33753) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_33822){
var state_val_33823 = (state_33822[(1)]);
if((state_val_33823 === (7))){
var inst_33778 = (state_33822[(7)]);
var inst_33776 = (state_33822[(8)]);
var inst_33776__$1 = (state_33822[(2)]);
var inst_33778__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33776__$1,(0),null);
var inst_33779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33776__$1,(1),null);
var inst_33781 = (inst_33778__$1 == null);
var state_33822__$1 = (function (){var statearr_33827 = state_33822;
(statearr_33827[(9)] = inst_33779);

(statearr_33827[(7)] = inst_33778__$1);

(statearr_33827[(8)] = inst_33776__$1);

return statearr_33827;
})();
if(cljs.core.truth_(inst_33781)){
var statearr_33829_35463 = state_33822__$1;
(statearr_33829_35463[(1)] = (8));

} else {
var statearr_33830_35464 = state_33822__$1;
(statearr_33830_35464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (1))){
var inst_33756 = cljs.core.vec(chs);
var inst_33757 = inst_33756;
var state_33822__$1 = (function (){var statearr_33832 = state_33822;
(statearr_33832[(10)] = inst_33757);

return statearr_33832;
})();
var statearr_33833_35465 = state_33822__$1;
(statearr_33833_35465[(2)] = null);

(statearr_33833_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (4))){
var inst_33757 = (state_33822[(10)]);
var state_33822__$1 = state_33822;
return cljs.core.async.ioc_alts_BANG_(state_33822__$1,(7),inst_33757);
} else {
if((state_val_33823 === (6))){
var inst_33818 = (state_33822[(2)]);
var state_33822__$1 = state_33822;
var statearr_33841_35470 = state_33822__$1;
(statearr_33841_35470[(2)] = inst_33818);

(statearr_33841_35470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (3))){
var inst_33820 = (state_33822[(2)]);
var state_33822__$1 = state_33822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33822__$1,inst_33820);
} else {
if((state_val_33823 === (2))){
var inst_33757 = (state_33822[(10)]);
var inst_33768 = cljs.core.count(inst_33757);
var inst_33769 = (inst_33768 > (0));
var state_33822__$1 = state_33822;
if(cljs.core.truth_(inst_33769)){
var statearr_33855_35471 = state_33822__$1;
(statearr_33855_35471[(1)] = (4));

} else {
var statearr_33857_35472 = state_33822__$1;
(statearr_33857_35472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (11))){
var inst_33757 = (state_33822[(10)]);
var inst_33811 = (state_33822[(2)]);
var tmp33848 = inst_33757;
var inst_33757__$1 = tmp33848;
var state_33822__$1 = (function (){var statearr_33862 = state_33822;
(statearr_33862[(11)] = inst_33811);

(statearr_33862[(10)] = inst_33757__$1);

return statearr_33862;
})();
var statearr_33863_35473 = state_33822__$1;
(statearr_33863_35473[(2)] = null);

(statearr_33863_35473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (9))){
var inst_33778 = (state_33822[(7)]);
var state_33822__$1 = state_33822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33822__$1,(11),out,inst_33778);
} else {
if((state_val_33823 === (5))){
var inst_33816 = cljs.core.async.close_BANG_(out);
var state_33822__$1 = state_33822;
var statearr_33880_35474 = state_33822__$1;
(statearr_33880_35474[(2)] = inst_33816);

(statearr_33880_35474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (10))){
var inst_33814 = (state_33822[(2)]);
var state_33822__$1 = state_33822;
var statearr_33884_35475 = state_33822__$1;
(statearr_33884_35475[(2)] = inst_33814);

(statearr_33884_35475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33823 === (8))){
var inst_33779 = (state_33822[(9)]);
var inst_33757 = (state_33822[(10)]);
var inst_33778 = (state_33822[(7)]);
var inst_33776 = (state_33822[(8)]);
var inst_33806 = (function (){var cs = inst_33757;
var vec__33771 = inst_33776;
var v = inst_33778;
var c = inst_33779;
return (function (p1__33751_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33751_SHARP_);
});
})();
var inst_33807 = cljs.core.filterv(inst_33806,inst_33757);
var inst_33757__$1 = inst_33807;
var state_33822__$1 = (function (){var statearr_33891 = state_33822;
(statearr_33891[(10)] = inst_33757__$1);

return statearr_33891;
})();
var statearr_33894_35477 = state_33822__$1;
(statearr_33894_35477[(2)] = null);

(statearr_33894_35477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_33896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33896[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_33896[(1)] = (1));

return statearr_33896;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_33822){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_33822);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e33898){var ex__30972__auto__ = e33898;
var statearr_33900_35478 = state_33822;
(statearr_33900_35478[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_33822[(4)]))){
var statearr_33902_35479 = state_33822;
(statearr_33902_35479[(1)] = cljs.core.first((state_33822[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35480 = state_33822;
state_33822 = G__35480;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_33822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_33822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33914 = f__31271__auto__();
(statearr_33914[(6)] = c__31270__auto___35462);

return statearr_33914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33955 = arguments.length;
switch (G__33955) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_33995){
var state_val_33996 = (state_33995[(1)]);
if((state_val_33996 === (7))){
var inst_33975 = (state_33995[(7)]);
var inst_33975__$1 = (state_33995[(2)]);
var inst_33976 = (inst_33975__$1 == null);
var inst_33977 = cljs.core.not(inst_33976);
var state_33995__$1 = (function (){var statearr_33998 = state_33995;
(statearr_33998[(7)] = inst_33975__$1);

return statearr_33998;
})();
if(inst_33977){
var statearr_33999_35483 = state_33995__$1;
(statearr_33999_35483[(1)] = (8));

} else {
var statearr_34002_35484 = state_33995__$1;
(statearr_34002_35484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (1))){
var inst_33970 = (0);
var state_33995__$1 = (function (){var statearr_34003 = state_33995;
(statearr_34003[(8)] = inst_33970);

return statearr_34003;
})();
var statearr_34004_35487 = state_33995__$1;
(statearr_34004_35487[(2)] = null);

(statearr_34004_35487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (4))){
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33995__$1,(7),ch);
} else {
if((state_val_33996 === (6))){
var inst_33989 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34005_35488 = state_33995__$1;
(statearr_34005_35488[(2)] = inst_33989);

(statearr_34005_35488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (3))){
var inst_33991 = (state_33995[(2)]);
var inst_33992 = cljs.core.async.close_BANG_(out);
var state_33995__$1 = (function (){var statearr_34006 = state_33995;
(statearr_34006[(9)] = inst_33991);

return statearr_34006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33995__$1,inst_33992);
} else {
if((state_val_33996 === (2))){
var inst_33970 = (state_33995[(8)]);
var inst_33972 = (inst_33970 < n);
var state_33995__$1 = state_33995;
if(cljs.core.truth_(inst_33972)){
var statearr_34007_35489 = state_33995__$1;
(statearr_34007_35489[(1)] = (4));

} else {
var statearr_34010_35490 = state_33995__$1;
(statearr_34010_35490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (11))){
var inst_33970 = (state_33995[(8)]);
var inst_33981 = (state_33995[(2)]);
var inst_33982 = (inst_33970 + (1));
var inst_33970__$1 = inst_33982;
var state_33995__$1 = (function (){var statearr_34011 = state_33995;
(statearr_34011[(10)] = inst_33981);

(statearr_34011[(8)] = inst_33970__$1);

return statearr_34011;
})();
var statearr_34013_35491 = state_33995__$1;
(statearr_34013_35491[(2)] = null);

(statearr_34013_35491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (9))){
var state_33995__$1 = state_33995;
var statearr_34015_35492 = state_33995__$1;
(statearr_34015_35492[(2)] = null);

(statearr_34015_35492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (5))){
var state_33995__$1 = state_33995;
var statearr_34016_35493 = state_33995__$1;
(statearr_34016_35493[(2)] = null);

(statearr_34016_35493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (10))){
var inst_33986 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34017_35494 = state_33995__$1;
(statearr_34017_35494[(2)] = inst_33986);

(statearr_34017_35494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (8))){
var inst_33975 = (state_33995[(7)]);
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33995__$1,(11),out,inst_33975);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_34019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34019[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_34019[(1)] = (1));

return statearr_34019;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_33995){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_33995);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e34023){var ex__30972__auto__ = e34023;
var statearr_34024_35496 = state_33995;
(statearr_34024_35496[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_33995[(4)]))){
var statearr_34028_35497 = state_33995;
(statearr_34028_35497[(1)] = cljs.core.first((state_33995[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35498 = state_33995;
state_33995 = G__35498;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_33995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_33995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34029 = f__31271__auto__();
(statearr_34029[(6)] = c__31270__auto___35482);

return statearr_34029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34034 = (function (f,ch,meta34032,_,fn1,meta34035){
this.f = f;
this.ch = ch;
this.meta34032 = meta34032;
this._ = _;
this.fn1 = fn1;
this.meta34035 = meta34035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34036,meta34035__$1){
var self__ = this;
var _34036__$1 = this;
return (new cljs.core.async.t_cljs$core$async34034(self__.f,self__.ch,self__.meta34032,self__._,self__.fn1,meta34035__$1));
}));

(cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34036){
var self__ = this;
var _34036__$1 = this;
return self__.meta34035;
}));

(cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34030_SHARP_){
var G__34037 = (((p1__34030_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34030_SHARP_) : self__.f.call(null, p1__34030_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34037) : f1.call(null, G__34037));
});
}));

(cljs.core.async.t_cljs$core$async34034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34032","meta34032",-252709558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34031","cljs.core.async/t_cljs$core$async34031",-251883667,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34035","meta34035",-1383349919,null)], null);
}));

(cljs.core.async.t_cljs$core$async34034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34034");

(cljs.core.async.t_cljs$core$async34034.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34034.
 */
cljs.core.async.__GT_t_cljs$core$async34034 = (function cljs$core$async$__GT_t_cljs$core$async34034(f,ch,meta34032,_,fn1,meta34035){
return (new cljs.core.async.t_cljs$core$async34034(f,ch,meta34032,_,fn1,meta34035));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34031 = (function (f,ch,meta34032){
this.f = f;
this.ch = ch;
this.meta34032 = meta34032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34033,meta34032__$1){
var self__ = this;
var _34033__$1 = this;
return (new cljs.core.async.t_cljs$core$async34031(self__.f,self__.ch,meta34032__$1));
}));

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34033){
var self__ = this;
var _34033__$1 = this;
return self__.meta34032;
}));

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34034(self__.f,self__.ch,self__.meta34032,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34047 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34047) : self__.f.call(null, G__34047));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34032","meta34032",-252709558,null)], null);
}));

(cljs.core.async.t_cljs$core$async34031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34031");

(cljs.core.async.t_cljs$core$async34031.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34031.
 */
cljs.core.async.__GT_t_cljs$core$async34031 = (function cljs$core$async$__GT_t_cljs$core$async34031(f,ch,meta34032){
return (new cljs.core.async.t_cljs$core$async34031(f,ch,meta34032));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34031(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34055 = (function (f,ch,meta34056){
this.f = f;
this.ch = ch;
this.meta34056 = meta34056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34057,meta34056__$1){
var self__ = this;
var _34057__$1 = this;
return (new cljs.core.async.t_cljs$core$async34055(self__.f,self__.ch,meta34056__$1));
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34057){
var self__ = this;
var _34057__$1 = this;
return self__.meta34056;
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34056","meta34056",-383622783,null)], null);
}));

(cljs.core.async.t_cljs$core$async34055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34055");

(cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34055.
 */
cljs.core.async.__GT_t_cljs$core$async34055 = (function cljs$core$async$__GT_t_cljs$core$async34055(f,ch,meta34056){
return (new cljs.core.async.t_cljs$core$async34055(f,ch,meta34056));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34055(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34070 = (function (p,ch,meta34071){
this.p = p;
this.ch = ch;
this.meta34071 = meta34071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34072,meta34071__$1){
var self__ = this;
var _34072__$1 = this;
return (new cljs.core.async.t_cljs$core$async34070(self__.p,self__.ch,meta34071__$1));
}));

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34072){
var self__ = this;
var _34072__$1 = this;
return self__.meta34071;
}));

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34071","meta34071",-112519187,null)], null);
}));

(cljs.core.async.t_cljs$core$async34070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34070");

(cljs.core.async.t_cljs$core$async34070.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34070.
 */
cljs.core.async.__GT_t_cljs$core$async34070 = (function cljs$core$async$__GT_t_cljs$core$async34070(p,ch,meta34071){
return (new cljs.core.async.t_cljs$core$async34070(p,ch,meta34071));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34070(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34083 = arguments.length;
switch (G__34083) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_34111){
var state_val_34112 = (state_34111[(1)]);
if((state_val_34112 === (7))){
var inst_34107 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34113_35509 = state_34111__$1;
(statearr_34113_35509[(2)] = inst_34107);

(statearr_34113_35509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (1))){
var state_34111__$1 = state_34111;
var statearr_34117_35510 = state_34111__$1;
(statearr_34117_35510[(2)] = null);

(statearr_34117_35510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (4))){
var inst_34091 = (state_34111[(7)]);
var inst_34091__$1 = (state_34111[(2)]);
var inst_34092 = (inst_34091__$1 == null);
var state_34111__$1 = (function (){var statearr_34118 = state_34111;
(statearr_34118[(7)] = inst_34091__$1);

return statearr_34118;
})();
if(cljs.core.truth_(inst_34092)){
var statearr_34119_35514 = state_34111__$1;
(statearr_34119_35514[(1)] = (5));

} else {
var statearr_34120_35515 = state_34111__$1;
(statearr_34120_35515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (6))){
var inst_34091 = (state_34111[(7)]);
var inst_34097 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34091) : p.call(null, inst_34091));
var state_34111__$1 = state_34111;
if(cljs.core.truth_(inst_34097)){
var statearr_34121_35516 = state_34111__$1;
(statearr_34121_35516[(1)] = (8));

} else {
var statearr_34123_35517 = state_34111__$1;
(statearr_34123_35517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (3))){
var inst_34109 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34111__$1,inst_34109);
} else {
if((state_val_34112 === (2))){
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34111__$1,(4),ch);
} else {
if((state_val_34112 === (11))){
var inst_34100 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34125_35518 = state_34111__$1;
(statearr_34125_35518[(2)] = inst_34100);

(statearr_34125_35518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (9))){
var state_34111__$1 = state_34111;
var statearr_34126_35519 = state_34111__$1;
(statearr_34126_35519[(2)] = null);

(statearr_34126_35519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (5))){
var inst_34095 = cljs.core.async.close_BANG_(out);
var state_34111__$1 = state_34111;
var statearr_34127_35524 = state_34111__$1;
(statearr_34127_35524[(2)] = inst_34095);

(statearr_34127_35524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (10))){
var inst_34103 = (state_34111[(2)]);
var state_34111__$1 = (function (){var statearr_34128 = state_34111;
(statearr_34128[(8)] = inst_34103);

return statearr_34128;
})();
var statearr_34129_35525 = state_34111__$1;
(statearr_34129_35525[(2)] = null);

(statearr_34129_35525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (8))){
var inst_34091 = (state_34111[(7)]);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34111__$1,(11),out,inst_34091);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_34131 = [null,null,null,null,null,null,null,null,null];
(statearr_34131[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_34131[(1)] = (1));

return statearr_34131;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_34111){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_34111);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e34132){var ex__30972__auto__ = e34132;
var statearr_34133_35530 = state_34111;
(statearr_34133_35530[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_34111[(4)]))){
var statearr_34134_35531 = state_34111;
(statearr_34134_35531[(1)] = cljs.core.first((state_34111[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35532 = state_34111;
state_34111 = G__35532;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_34111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_34111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34135 = f__31271__auto__();
(statearr_34135[(6)] = c__31270__auto___35507);

return statearr_34135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34140 = arguments.length;
switch (G__34140) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_34217){
var state_val_34218 = (state_34217[(1)]);
if((state_val_34218 === (7))){
var inst_34210 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34222_35534 = state_34217__$1;
(statearr_34222_35534[(2)] = inst_34210);

(statearr_34222_35534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (20))){
var inst_34175 = (state_34217[(7)]);
var inst_34189 = (state_34217[(2)]);
var inst_34190 = cljs.core.next(inst_34175);
var inst_34160 = inst_34190;
var inst_34161 = null;
var inst_34162 = (0);
var inst_34163 = (0);
var state_34217__$1 = (function (){var statearr_34226 = state_34217;
(statearr_34226[(8)] = inst_34160);

(statearr_34226[(9)] = inst_34161);

(statearr_34226[(10)] = inst_34162);

(statearr_34226[(11)] = inst_34163);

(statearr_34226[(12)] = inst_34189);

return statearr_34226;
})();
var statearr_34227_35535 = state_34217__$1;
(statearr_34227_35535[(2)] = null);

(statearr_34227_35535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (1))){
var state_34217__$1 = state_34217;
var statearr_34228_35536 = state_34217__$1;
(statearr_34228_35536[(2)] = null);

(statearr_34228_35536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (4))){
var inst_34149 = (state_34217[(13)]);
var inst_34149__$1 = (state_34217[(2)]);
var inst_34150 = (inst_34149__$1 == null);
var state_34217__$1 = (function (){var statearr_34232 = state_34217;
(statearr_34232[(13)] = inst_34149__$1);

return statearr_34232;
})();
if(cljs.core.truth_(inst_34150)){
var statearr_34233_35559 = state_34217__$1;
(statearr_34233_35559[(1)] = (5));

} else {
var statearr_34234_35573 = state_34217__$1;
(statearr_34234_35573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (15))){
var state_34217__$1 = state_34217;
var statearr_34240_35578 = state_34217__$1;
(statearr_34240_35578[(2)] = null);

(statearr_34240_35578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (21))){
var state_34217__$1 = state_34217;
var statearr_34241_35579 = state_34217__$1;
(statearr_34241_35579[(2)] = null);

(statearr_34241_35579[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (13))){
var inst_34160 = (state_34217[(8)]);
var inst_34161 = (state_34217[(9)]);
var inst_34162 = (state_34217[(10)]);
var inst_34163 = (state_34217[(11)]);
var inst_34171 = (state_34217[(2)]);
var inst_34172 = (inst_34163 + (1));
var tmp34235 = inst_34160;
var tmp34236 = inst_34161;
var tmp34237 = inst_34162;
var inst_34160__$1 = tmp34235;
var inst_34161__$1 = tmp34236;
var inst_34162__$1 = tmp34237;
var inst_34163__$1 = inst_34172;
var state_34217__$1 = (function (){var statearr_34250 = state_34217;
(statearr_34250[(14)] = inst_34171);

(statearr_34250[(8)] = inst_34160__$1);

(statearr_34250[(9)] = inst_34161__$1);

(statearr_34250[(10)] = inst_34162__$1);

(statearr_34250[(11)] = inst_34163__$1);

return statearr_34250;
})();
var statearr_34256_35586 = state_34217__$1;
(statearr_34256_35586[(2)] = null);

(statearr_34256_35586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (22))){
var state_34217__$1 = state_34217;
var statearr_34258_35587 = state_34217__$1;
(statearr_34258_35587[(2)] = null);

(statearr_34258_35587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (6))){
var inst_34149 = (state_34217[(13)]);
var inst_34158 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34149) : f.call(null, inst_34149));
var inst_34159 = cljs.core.seq(inst_34158);
var inst_34160 = inst_34159;
var inst_34161 = null;
var inst_34162 = (0);
var inst_34163 = (0);
var state_34217__$1 = (function (){var statearr_34259 = state_34217;
(statearr_34259[(8)] = inst_34160);

(statearr_34259[(9)] = inst_34161);

(statearr_34259[(10)] = inst_34162);

(statearr_34259[(11)] = inst_34163);

return statearr_34259;
})();
var statearr_34262_35591 = state_34217__$1;
(statearr_34262_35591[(2)] = null);

(statearr_34262_35591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (17))){
var inst_34175 = (state_34217[(7)]);
var inst_34179 = cljs.core.chunk_first(inst_34175);
var inst_34182 = cljs.core.chunk_rest(inst_34175);
var inst_34184 = cljs.core.count(inst_34179);
var inst_34160 = inst_34182;
var inst_34161 = inst_34179;
var inst_34162 = inst_34184;
var inst_34163 = (0);
var state_34217__$1 = (function (){var statearr_34264 = state_34217;
(statearr_34264[(8)] = inst_34160);

(statearr_34264[(9)] = inst_34161);

(statearr_34264[(10)] = inst_34162);

(statearr_34264[(11)] = inst_34163);

return statearr_34264;
})();
var statearr_34266_35594 = state_34217__$1;
(statearr_34266_35594[(2)] = null);

(statearr_34266_35594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (3))){
var inst_34215 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34217__$1,inst_34215);
} else {
if((state_val_34218 === (12))){
var inst_34198 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34267_35598 = state_34217__$1;
(statearr_34267_35598[(2)] = inst_34198);

(statearr_34267_35598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (2))){
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34217__$1,(4),in$);
} else {
if((state_val_34218 === (23))){
var inst_34208 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34279_35599 = state_34217__$1;
(statearr_34279_35599[(2)] = inst_34208);

(statearr_34279_35599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (19))){
var inst_34193 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34290_35600 = state_34217__$1;
(statearr_34290_35600[(2)] = inst_34193);

(statearr_34290_35600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (11))){
var inst_34175 = (state_34217[(7)]);
var inst_34160 = (state_34217[(8)]);
var inst_34175__$1 = cljs.core.seq(inst_34160);
var state_34217__$1 = (function (){var statearr_34346 = state_34217;
(statearr_34346[(7)] = inst_34175__$1);

return statearr_34346;
})();
if(inst_34175__$1){
var statearr_34351_35601 = state_34217__$1;
(statearr_34351_35601[(1)] = (14));

} else {
var statearr_34360_35602 = state_34217__$1;
(statearr_34360_35602[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (9))){
var inst_34200 = (state_34217[(2)]);
var inst_34201 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34217__$1 = (function (){var statearr_34371 = state_34217;
(statearr_34371[(15)] = inst_34200);

return statearr_34371;
})();
if(cljs.core.truth_(inst_34201)){
var statearr_34372_35604 = state_34217__$1;
(statearr_34372_35604[(1)] = (21));

} else {
var statearr_34379_35605 = state_34217__$1;
(statearr_34379_35605[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (5))){
var inst_34152 = cljs.core.async.close_BANG_(out);
var state_34217__$1 = state_34217;
var statearr_34380_35606 = state_34217__$1;
(statearr_34380_35606[(2)] = inst_34152);

(statearr_34380_35606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (14))){
var inst_34175 = (state_34217[(7)]);
var inst_34177 = cljs.core.chunked_seq_QMARK_(inst_34175);
var state_34217__$1 = state_34217;
if(inst_34177){
var statearr_34381_35607 = state_34217__$1;
(statearr_34381_35607[(1)] = (17));

} else {
var statearr_34382_35608 = state_34217__$1;
(statearr_34382_35608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (16))){
var inst_34196 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34383_35609 = state_34217__$1;
(statearr_34383_35609[(2)] = inst_34196);

(statearr_34383_35609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (10))){
var inst_34161 = (state_34217[(9)]);
var inst_34163 = (state_34217[(11)]);
var inst_34169 = cljs.core._nth(inst_34161,inst_34163);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34217__$1,(13),out,inst_34169);
} else {
if((state_val_34218 === (18))){
var inst_34175 = (state_34217[(7)]);
var inst_34187 = cljs.core.first(inst_34175);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34217__$1,(20),out,inst_34187);
} else {
if((state_val_34218 === (8))){
var inst_34162 = (state_34217[(10)]);
var inst_34163 = (state_34217[(11)]);
var inst_34166 = (inst_34163 < inst_34162);
var inst_34167 = inst_34166;
var state_34217__$1 = state_34217;
if(cljs.core.truth_(inst_34167)){
var statearr_34393_35610 = state_34217__$1;
(statearr_34393_35610[(1)] = (10));

} else {
var statearr_34395_35611 = state_34217__$1;
(statearr_34395_35611[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30969__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30969__auto____0 = (function (){
var statearr_34400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34400[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30969__auto__);

(statearr_34400[(1)] = (1));

return statearr_34400;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30969__auto____1 = (function (state_34217){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_34217);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e34401){var ex__30972__auto__ = e34401;
var statearr_34402_35612 = state_34217;
(statearr_34402_35612[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_34217[(4)]))){
var statearr_34404_35613 = state_34217;
(statearr_34404_35613[(1)] = cljs.core.first((state_34217[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35614 = state_34217;
state_34217 = G__35614;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30969__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30969__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30969__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30969__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34409 = f__31271__auto__();
(statearr_34409[(6)] = c__31270__auto__);

return statearr_34409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34412 = arguments.length;
switch (G__34412) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34421 = arguments.length;
switch (G__34421) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34433 = arguments.length;
switch (G__34433) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (7))){
var inst_34463 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34470_35623 = state_34468__$1;
(statearr_34470_35623[(2)] = inst_34463);

(statearr_34470_35623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (1))){
var inst_34443 = null;
var state_34468__$1 = (function (){var statearr_34472 = state_34468;
(statearr_34472[(7)] = inst_34443);

return statearr_34472;
})();
var statearr_34473_35624 = state_34468__$1;
(statearr_34473_35624[(2)] = null);

(statearr_34473_35624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (4))){
var inst_34446 = (state_34468[(8)]);
var inst_34446__$1 = (state_34468[(2)]);
var inst_34448 = (inst_34446__$1 == null);
var inst_34449 = cljs.core.not(inst_34448);
var state_34468__$1 = (function (){var statearr_34475 = state_34468;
(statearr_34475[(8)] = inst_34446__$1);

return statearr_34475;
})();
if(inst_34449){
var statearr_34476_35625 = state_34468__$1;
(statearr_34476_35625[(1)] = (5));

} else {
var statearr_34477_35626 = state_34468__$1;
(statearr_34477_35626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (6))){
var state_34468__$1 = state_34468;
var statearr_34479_35627 = state_34468__$1;
(statearr_34479_35627[(2)] = null);

(statearr_34479_35627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (3))){
var inst_34465 = (state_34468[(2)]);
var inst_34466 = cljs.core.async.close_BANG_(out);
var state_34468__$1 = (function (){var statearr_34481 = state_34468;
(statearr_34481[(9)] = inst_34465);

return statearr_34481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34468__$1,inst_34466);
} else {
if((state_val_34469 === (2))){
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34468__$1,(4),ch);
} else {
if((state_val_34469 === (11))){
var inst_34446 = (state_34468[(8)]);
var inst_34457 = (state_34468[(2)]);
var inst_34443 = inst_34446;
var state_34468__$1 = (function (){var statearr_34485 = state_34468;
(statearr_34485[(7)] = inst_34443);

(statearr_34485[(10)] = inst_34457);

return statearr_34485;
})();
var statearr_34486_35628 = state_34468__$1;
(statearr_34486_35628[(2)] = null);

(statearr_34486_35628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (9))){
var inst_34446 = (state_34468[(8)]);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34468__$1,(11),out,inst_34446);
} else {
if((state_val_34469 === (5))){
var inst_34443 = (state_34468[(7)]);
var inst_34446 = (state_34468[(8)]);
var inst_34452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34446,inst_34443);
var state_34468__$1 = state_34468;
if(inst_34452){
var statearr_34493_35629 = state_34468__$1;
(statearr_34493_35629[(1)] = (8));

} else {
var statearr_34494_35630 = state_34468__$1;
(statearr_34494_35630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (10))){
var inst_34460 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34497_35631 = state_34468__$1;
(statearr_34497_35631[(2)] = inst_34460);

(statearr_34497_35631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (8))){
var inst_34443 = (state_34468[(7)]);
var tmp34490 = inst_34443;
var inst_34443__$1 = tmp34490;
var state_34468__$1 = (function (){var statearr_34498 = state_34468;
(statearr_34498[(7)] = inst_34443__$1);

return statearr_34498;
})();
var statearr_34500_35635 = state_34468__$1;
(statearr_34500_35635[(2)] = null);

(statearr_34500_35635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34506[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_34468){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_34468);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e34508){var ex__30972__auto__ = e34508;
var statearr_34509_35636 = state_34468;
(statearr_34509_35636[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_34468[(4)]))){
var statearr_34510_35637 = state_34468;
(statearr_34510_35637[(1)] = cljs.core.first((state_34468[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35638 = state_34468;
state_34468 = G__35638;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34511 = f__31271__auto__();
(statearr_34511[(6)] = c__31270__auto___35622);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34513 = arguments.length;
switch (G__34513) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_34554){
var state_val_34555 = (state_34554[(1)]);
if((state_val_34555 === (7))){
var inst_34550 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34559_35645 = state_34554__$1;
(statearr_34559_35645[(2)] = inst_34550);

(statearr_34559_35645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (1))){
var inst_34514 = (new Array(n));
var inst_34515 = inst_34514;
var inst_34516 = (0);
var state_34554__$1 = (function (){var statearr_34567 = state_34554;
(statearr_34567[(7)] = inst_34515);

(statearr_34567[(8)] = inst_34516);

return statearr_34567;
})();
var statearr_34571_35646 = state_34554__$1;
(statearr_34571_35646[(2)] = null);

(statearr_34571_35646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (4))){
var inst_34522 = (state_34554[(9)]);
var inst_34522__$1 = (state_34554[(2)]);
var inst_34523 = (inst_34522__$1 == null);
var inst_34524 = cljs.core.not(inst_34523);
var state_34554__$1 = (function (){var statearr_34575 = state_34554;
(statearr_34575[(9)] = inst_34522__$1);

return statearr_34575;
})();
if(inst_34524){
var statearr_34576_35647 = state_34554__$1;
(statearr_34576_35647[(1)] = (5));

} else {
var statearr_34577_35652 = state_34554__$1;
(statearr_34577_35652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (15))){
var inst_34544 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34578_35653 = state_34554__$1;
(statearr_34578_35653[(2)] = inst_34544);

(statearr_34578_35653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (13))){
var state_34554__$1 = state_34554;
var statearr_34579_35654 = state_34554__$1;
(statearr_34579_35654[(2)] = null);

(statearr_34579_35654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (6))){
var inst_34516 = (state_34554[(8)]);
var inst_34540 = (inst_34516 > (0));
var state_34554__$1 = state_34554;
if(cljs.core.truth_(inst_34540)){
var statearr_34587_35658 = state_34554__$1;
(statearr_34587_35658[(1)] = (12));

} else {
var statearr_34588_35659 = state_34554__$1;
(statearr_34588_35659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (3))){
var inst_34552 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34554__$1,inst_34552);
} else {
if((state_val_34555 === (12))){
var inst_34515 = (state_34554[(7)]);
var inst_34542 = cljs.core.vec(inst_34515);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(15),out,inst_34542);
} else {
if((state_val_34555 === (2))){
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34554__$1,(4),ch);
} else {
if((state_val_34555 === (11))){
var inst_34534 = (state_34554[(2)]);
var inst_34535 = (new Array(n));
var inst_34515 = inst_34535;
var inst_34516 = (0);
var state_34554__$1 = (function (){var statearr_34592 = state_34554;
(statearr_34592[(7)] = inst_34515);

(statearr_34592[(10)] = inst_34534);

(statearr_34592[(8)] = inst_34516);

return statearr_34592;
})();
var statearr_34596_35660 = state_34554__$1;
(statearr_34596_35660[(2)] = null);

(statearr_34596_35660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (9))){
var inst_34515 = (state_34554[(7)]);
var inst_34532 = cljs.core.vec(inst_34515);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(11),out,inst_34532);
} else {
if((state_val_34555 === (5))){
var inst_34515 = (state_34554[(7)]);
var inst_34527 = (state_34554[(11)]);
var inst_34516 = (state_34554[(8)]);
var inst_34522 = (state_34554[(9)]);
var inst_34526 = (inst_34515[inst_34516] = inst_34522);
var inst_34527__$1 = (inst_34516 + (1));
var inst_34528 = (inst_34527__$1 < n);
var state_34554__$1 = (function (){var statearr_34607 = state_34554;
(statearr_34607[(11)] = inst_34527__$1);

(statearr_34607[(12)] = inst_34526);

return statearr_34607;
})();
if(cljs.core.truth_(inst_34528)){
var statearr_34608_35664 = state_34554__$1;
(statearr_34608_35664[(1)] = (8));

} else {
var statearr_34613_35665 = state_34554__$1;
(statearr_34613_35665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (14))){
var inst_34547 = (state_34554[(2)]);
var inst_34548 = cljs.core.async.close_BANG_(out);
var state_34554__$1 = (function (){var statearr_34615 = state_34554;
(statearr_34615[(13)] = inst_34547);

return statearr_34615;
})();
var statearr_34616_35666 = state_34554__$1;
(statearr_34616_35666[(2)] = inst_34548);

(statearr_34616_35666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (10))){
var inst_34538 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34617_35667 = state_34554__$1;
(statearr_34617_35667[(2)] = inst_34538);

(statearr_34617_35667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (8))){
var inst_34515 = (state_34554[(7)]);
var inst_34527 = (state_34554[(11)]);
var tmp34614 = inst_34515;
var inst_34515__$1 = tmp34614;
var inst_34516 = inst_34527;
var state_34554__$1 = (function (){var statearr_34620 = state_34554;
(statearr_34620[(7)] = inst_34515__$1);

(statearr_34620[(8)] = inst_34516);

return statearr_34620;
})();
var statearr_34621_35671 = state_34554__$1;
(statearr_34621_35671[(2)] = null);

(statearr_34621_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_34622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34622[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_34622[(1)] = (1));

return statearr_34622;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_34554){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_34554);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e34623){var ex__30972__auto__ = e34623;
var statearr_34627_35672 = state_34554;
(statearr_34627_35672[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_34554[(4)]))){
var statearr_34628_35673 = state_34554;
(statearr_34628_35673[(1)] = cljs.core.first((state_34554[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35674 = state_34554;
state_34554 = G__35674;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_34554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_34554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34629 = f__31271__auto__();
(statearr_34629[(6)] = c__31270__auto___35644);

return statearr_34629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34631 = arguments.length;
switch (G__34631) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30968__auto__ = (function (state_34676){
var state_val_34677 = (state_34676[(1)]);
if((state_val_34677 === (7))){
var inst_34672 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34678_35680 = state_34676__$1;
(statearr_34678_35680[(2)] = inst_34672);

(statearr_34678_35680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var inst_34632 = [];
var inst_34633 = inst_34632;
var inst_34634 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34676__$1 = (function (){var statearr_34682 = state_34676;
(statearr_34682[(7)] = inst_34633);

(statearr_34682[(8)] = inst_34634);

return statearr_34682;
})();
var statearr_34683_35681 = state_34676__$1;
(statearr_34683_35681[(2)] = null);

(statearr_34683_35681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34637 = (state_34676[(9)]);
var inst_34637__$1 = (state_34676[(2)]);
var inst_34638 = (inst_34637__$1 == null);
var inst_34639 = cljs.core.not(inst_34638);
var state_34676__$1 = (function (){var statearr_34684 = state_34676;
(statearr_34684[(9)] = inst_34637__$1);

return statearr_34684;
})();
if(inst_34639){
var statearr_34685_35683 = state_34676__$1;
(statearr_34685_35683[(1)] = (5));

} else {
var statearr_34686_35684 = state_34676__$1;
(statearr_34686_35684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (15))){
var inst_34633 = (state_34676[(7)]);
var inst_34664 = cljs.core.vec(inst_34633);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(18),out,inst_34664);
} else {
if((state_val_34677 === (13))){
var inst_34659 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34687_35685 = state_34676__$1;
(statearr_34687_35685[(2)] = inst_34659);

(statearr_34687_35685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var inst_34633 = (state_34676[(7)]);
var inst_34661 = inst_34633.length;
var inst_34662 = (inst_34661 > (0));
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34662)){
var statearr_34693_35687 = state_34676__$1;
(statearr_34693_35687[(1)] = (15));

} else {
var statearr_34695_35688 = state_34676__$1;
(statearr_34695_35688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (17))){
var inst_34669 = (state_34676[(2)]);
var inst_34670 = cljs.core.async.close_BANG_(out);
var state_34676__$1 = (function (){var statearr_34700 = state_34676;
(statearr_34700[(10)] = inst_34669);

return statearr_34700;
})();
var statearr_34702_35690 = state_34676__$1;
(statearr_34702_35690[(2)] = inst_34670);

(statearr_34702_35690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34674 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34674);
} else {
if((state_val_34677 === (12))){
var inst_34633 = (state_34676[(7)]);
var inst_34652 = cljs.core.vec(inst_34633);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(14),out,inst_34652);
} else {
if((state_val_34677 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34633 = (state_34676[(7)]);
var inst_34641 = (state_34676[(11)]);
var inst_34637 = (state_34676[(9)]);
var inst_34649 = inst_34633.push(inst_34637);
var tmp34703 = inst_34633;
var inst_34633__$1 = tmp34703;
var inst_34634 = inst_34641;
var state_34676__$1 = (function (){var statearr_34716 = state_34676;
(statearr_34716[(7)] = inst_34633__$1);

(statearr_34716[(8)] = inst_34634);

(statearr_34716[(12)] = inst_34649);

return statearr_34716;
})();
var statearr_34717_35692 = state_34676__$1;
(statearr_34717_35692[(2)] = null);

(statearr_34717_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (9))){
var inst_34634 = (state_34676[(8)]);
var inst_34645 = cljs.core.keyword_identical_QMARK_(inst_34634,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34676__$1 = state_34676;
var statearr_34718_35704 = state_34676__$1;
(statearr_34718_35704[(2)] = inst_34645);

(statearr_34718_35704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (5))){
var inst_34642 = (state_34676[(13)]);
var inst_34641 = (state_34676[(11)]);
var inst_34637 = (state_34676[(9)]);
var inst_34634 = (state_34676[(8)]);
var inst_34641__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34637) : f.call(null, inst_34637));
var inst_34642__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34641__$1,inst_34634);
var state_34676__$1 = (function (){var statearr_34722 = state_34676;
(statearr_34722[(13)] = inst_34642__$1);

(statearr_34722[(11)] = inst_34641__$1);

return statearr_34722;
})();
if(inst_34642__$1){
var statearr_34727_35706 = state_34676__$1;
(statearr_34727_35706[(1)] = (8));

} else {
var statearr_34734_35707 = state_34676__$1;
(statearr_34734_35707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (14))){
var inst_34641 = (state_34676[(11)]);
var inst_34637 = (state_34676[(9)]);
var inst_34654 = (state_34676[(2)]);
var inst_34655 = [];
var inst_34656 = inst_34655.push(inst_34637);
var inst_34633 = inst_34655;
var inst_34634 = inst_34641;
var state_34676__$1 = (function (){var statearr_34735 = state_34676;
(statearr_34735[(7)] = inst_34633);

(statearr_34735[(14)] = inst_34654);

(statearr_34735[(15)] = inst_34656);

(statearr_34735[(8)] = inst_34634);

return statearr_34735;
})();
var statearr_34737_35708 = state_34676__$1;
(statearr_34737_35708[(2)] = null);

(statearr_34737_35708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (16))){
var state_34676__$1 = state_34676;
var statearr_34739_35709 = state_34676__$1;
(statearr_34739_35709[(2)] = null);

(statearr_34739_35709[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var inst_34647 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34647)){
var statearr_34743_35710 = state_34676__$1;
(statearr_34743_35710[(1)] = (11));

} else {
var statearr_34745_35711 = state_34676__$1;
(statearr_34745_35711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (18))){
var inst_34666 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34746_35712 = state_34676__$1;
(statearr_34746_35712[(2)] = inst_34666);

(statearr_34746_35712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34642 = (state_34676[(13)]);
var state_34676__$1 = state_34676;
var statearr_34747_35713 = state_34676__$1;
(statearr_34747_35713[(2)] = inst_34642);

(statearr_34747_35713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30969__auto__ = null;
var cljs$core$async$state_machine__30969__auto____0 = (function (){
var statearr_34748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34748[(0)] = cljs$core$async$state_machine__30969__auto__);

(statearr_34748[(1)] = (1));

return statearr_34748;
});
var cljs$core$async$state_machine__30969__auto____1 = (function (state_34676){
while(true){
var ret_value__30970__auto__ = (function (){try{while(true){
var result__30971__auto__ = switch__30968__auto__(state_34676);
if(cljs.core.keyword_identical_QMARK_(result__30971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30971__auto__;
}
break;
}
}catch (e34751){var ex__30972__auto__ = e34751;
var statearr_34752_35714 = state_34676;
(statearr_34752_35714[(2)] = ex__30972__auto__);


if(cljs.core.seq((state_34676[(4)]))){
var statearr_34753_35715 = state_34676;
(statearr_34753_35715[(1)] = cljs.core.first((state_34676[(4)])));

} else {
throw ex__30972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35716 = state_34676;
state_34676 = G__35716;
continue;
} else {
return ret_value__30970__auto__;
}
break;
}
});
cljs$core$async$state_machine__30969__auto__ = function(state_34676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30969__auto____1.call(this,state_34676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30969__auto____0;
cljs$core$async$state_machine__30969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30969__auto____1;
return cljs$core$async$state_machine__30969__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34758 = f__31271__auto__();
(statearr_34758[(6)] = c__31270__auto___35679);

return statearr_34758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
