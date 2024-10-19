goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38058 = arguments.length;
var i__5727__auto___38059 = (0);
while(true){
if((i__5727__auto___38059 < len__5726__auto___38058)){
args__5732__auto__.push((arguments[i__5727__auto___38059]));

var G__38060 = (i__5727__auto___38059 + (1));
i__5727__auto___38059 = G__38060;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37706){
var G__37707 = cljs.core.first(seq37706);
var seq37706__$1 = cljs.core.next(seq37706);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37707,seq37706__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37708 = cljs.core.seq(sources);
var chunk__37709 = null;
var count__37710 = (0);
var i__37711 = (0);
while(true){
if((i__37711 < count__37710)){
var map__37717 = chunk__37709.cljs$core$IIndexed$_nth$arity$2(null, i__37711);
var map__37717__$1 = cljs.core.__destructure_map(map__37717);
var src = map__37717__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37717__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37717__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37717__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37717__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37718){var e_38061 = e37718;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38061);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38061.message)].join('')));
}

var G__38062 = seq__37708;
var G__38063 = chunk__37709;
var G__38064 = count__37710;
var G__38065 = (i__37711 + (1));
seq__37708 = G__38062;
chunk__37709 = G__38063;
count__37710 = G__38064;
i__37711 = G__38065;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37708);
if(temp__5823__auto__){
var seq__37708__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37708__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37708__$1);
var G__38066 = cljs.core.chunk_rest(seq__37708__$1);
var G__38067 = c__5525__auto__;
var G__38068 = cljs.core.count(c__5525__auto__);
var G__38069 = (0);
seq__37708 = G__38066;
chunk__37709 = G__38067;
count__37710 = G__38068;
i__37711 = G__38069;
continue;
} else {
var map__37719 = cljs.core.first(seq__37708__$1);
var map__37719__$1 = cljs.core.__destructure_map(map__37719);
var src = map__37719__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37720){var e_38072 = e37720;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38072);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38072.message)].join('')));
}

var G__38073 = cljs.core.next(seq__37708__$1);
var G__38074 = null;
var G__38075 = (0);
var G__38076 = (0);
seq__37708 = G__38073;
chunk__37709 = G__38074;
count__37710 = G__38075;
i__37711 = G__38076;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37721 = cljs.core.seq(js_requires);
var chunk__37722 = null;
var count__37723 = (0);
var i__37724 = (0);
while(true){
if((i__37724 < count__37723)){
var js_ns = chunk__37722.cljs$core$IIndexed$_nth$arity$2(null, i__37724);
var require_str_38077 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38077);


var G__38078 = seq__37721;
var G__38079 = chunk__37722;
var G__38080 = count__37723;
var G__38081 = (i__37724 + (1));
seq__37721 = G__38078;
chunk__37722 = G__38079;
count__37723 = G__38080;
i__37724 = G__38081;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37721);
if(temp__5823__auto__){
var seq__37721__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37721__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37721__$1);
var G__38082 = cljs.core.chunk_rest(seq__37721__$1);
var G__38083 = c__5525__auto__;
var G__38084 = cljs.core.count(c__5525__auto__);
var G__38085 = (0);
seq__37721 = G__38082;
chunk__37722 = G__38083;
count__37723 = G__38084;
i__37724 = G__38085;
continue;
} else {
var js_ns = cljs.core.first(seq__37721__$1);
var require_str_38086 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38086);


var G__38087 = cljs.core.next(seq__37721__$1);
var G__38088 = null;
var G__38089 = (0);
var G__38090 = (0);
seq__37721 = G__38087;
chunk__37722 = G__38088;
count__37723 = G__38089;
i__37724 = G__38090;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37727){
var map__37728 = p__37727;
var map__37728__$1 = cljs.core.__destructure_map(map__37728);
var msg = map__37728__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37729(s__37730){
return (new cljs.core.LazySeq(null,(function (){
var s__37730__$1 = s__37730;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37730__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37736 = cljs.core.first(xs__6383__auto__);
var map__37736__$1 = cljs.core.__destructure_map(map__37736);
var src = map__37736__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37736__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37736__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37730__$1,map__37736,map__37736__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37728,map__37728__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37729_$_iter__37731(s__37732){
return (new cljs.core.LazySeq(null,((function (s__37730__$1,map__37736,map__37736__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37728,map__37728__$1,msg,info,reload_info){
return (function (){
var s__37732__$1 = s__37732;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37732__$1);
if(temp__5823__auto____$1){
var s__37732__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37732__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37732__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37734 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37733 = (0);
while(true){
if((i__37733 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37733);
cljs.core.chunk_append(b__37734,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38091 = (i__37733 + (1));
i__37733 = G__38091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37734),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37729_$_iter__37731(cljs.core.chunk_rest(s__37732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37734),null);
}
} else {
var warning = cljs.core.first(s__37732__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37729_$_iter__37731(cljs.core.rest(s__37732__$2)));
}
} else {
return null;
}
break;
}
});})(s__37730__$1,map__37736,map__37736__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37728,map__37728__$1,msg,info,reload_info))
,null,null));
});})(s__37730__$1,map__37736,map__37736__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37728,map__37728__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37729(cljs.core.rest(s__37730__$1)));
} else {
var G__38092 = cljs.core.rest(s__37730__$1);
s__37730__$1 = G__38092;
continue;
}
} else {
var G__38093 = cljs.core.rest(s__37730__$1);
s__37730__$1 = G__38093;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37740_38094 = cljs.core.seq(warnings);
var chunk__37741_38095 = null;
var count__37742_38096 = (0);
var i__37743_38097 = (0);
while(true){
if((i__37743_38097 < count__37742_38096)){
var map__37750_38098 = chunk__37741_38095.cljs$core$IIndexed$_nth$arity$2(null, i__37743_38097);
var map__37750_38099__$1 = cljs.core.__destructure_map(map__37750_38098);
var w_38100 = map__37750_38099__$1;
var msg_38101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750_38099__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750_38099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750_38099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750_38099__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38104)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38102),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38103),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38101__$1)].join(''));


var G__38105 = seq__37740_38094;
var G__38106 = chunk__37741_38095;
var G__38107 = count__37742_38096;
var G__38108 = (i__37743_38097 + (1));
seq__37740_38094 = G__38105;
chunk__37741_38095 = G__38106;
count__37742_38096 = G__38107;
i__37743_38097 = G__38108;
continue;
} else {
var temp__5823__auto___38109 = cljs.core.seq(seq__37740_38094);
if(temp__5823__auto___38109){
var seq__37740_38110__$1 = temp__5823__auto___38109;
if(cljs.core.chunked_seq_QMARK_(seq__37740_38110__$1)){
var c__5525__auto___38111 = cljs.core.chunk_first(seq__37740_38110__$1);
var G__38112 = cljs.core.chunk_rest(seq__37740_38110__$1);
var G__38113 = c__5525__auto___38111;
var G__38114 = cljs.core.count(c__5525__auto___38111);
var G__38115 = (0);
seq__37740_38094 = G__38112;
chunk__37741_38095 = G__38113;
count__37742_38096 = G__38114;
i__37743_38097 = G__38115;
continue;
} else {
var map__37753_38116 = cljs.core.first(seq__37740_38110__$1);
var map__37753_38117__$1 = cljs.core.__destructure_map(map__37753_38116);
var w_38118 = map__37753_38117__$1;
var msg_38119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753_38117__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753_38117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753_38117__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753_38117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38122)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38120),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38121),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38119__$1)].join(''));


var G__38123 = cljs.core.next(seq__37740_38110__$1);
var G__38124 = null;
var G__38125 = (0);
var G__38126 = (0);
seq__37740_38094 = G__38123;
chunk__37741_38095 = G__38124;
count__37742_38096 = G__38125;
i__37743_38097 = G__38126;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37726_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37726_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37762){
var map__37763 = p__37762;
var map__37763__$1 = cljs.core.__destructure_map(map__37763);
var msg = map__37763__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37764 = cljs.core.seq(updates);
var chunk__37766 = null;
var count__37767 = (0);
var i__37768 = (0);
while(true){
if((i__37768 < count__37767)){
var path = chunk__37766.cljs$core$IIndexed$_nth$arity$2(null, i__37768);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37884_38130 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37888_38131 = null;
var count__37889_38132 = (0);
var i__37890_38133 = (0);
while(true){
if((i__37890_38133 < count__37889_38132)){
var node_38134 = chunk__37888_38131.cljs$core$IIndexed$_nth$arity$2(null, i__37890_38133);
if(cljs.core.not(node_38134.shadow$old)){
var path_match_38135 = shadow.cljs.devtools.client.browser.match_paths(node_38134.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38135)){
var new_link_38137 = (function (){var G__37916 = node_38134.cloneNode(true);
G__37916.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38135),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37916;
})();
(node_38134.shadow$old = true);

(new_link_38137.onload = ((function (seq__37884_38130,chunk__37888_38131,count__37889_38132,i__37890_38133,seq__37764,chunk__37766,count__37767,i__37768,new_link_38137,path_match_38135,node_38134,path,map__37763,map__37763__$1,msg,updates,reload_info){
return (function (e){
var seq__37917_38138 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37919_38139 = null;
var count__37920_38140 = (0);
var i__37921_38141 = (0);
while(true){
if((i__37921_38141 < count__37920_38140)){
var map__37925_38142 = chunk__37919_38139.cljs$core$IIndexed$_nth$arity$2(null, i__37921_38141);
var map__37925_38143__$1 = cljs.core.__destructure_map(map__37925_38142);
var task_38144 = map__37925_38143__$1;
var fn_str_38145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925_38143__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925_38143__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38147 = goog.getObjectByName(fn_str_38145,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38146)].join(''));

(fn_obj_38147.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38147.cljs$core$IFn$_invoke$arity$2(path,new_link_38137) : fn_obj_38147.call(null, path,new_link_38137));


var G__38148 = seq__37917_38138;
var G__38149 = chunk__37919_38139;
var G__38150 = count__37920_38140;
var G__38151 = (i__37921_38141 + (1));
seq__37917_38138 = G__38148;
chunk__37919_38139 = G__38149;
count__37920_38140 = G__38150;
i__37921_38141 = G__38151;
continue;
} else {
var temp__5823__auto___38152 = cljs.core.seq(seq__37917_38138);
if(temp__5823__auto___38152){
var seq__37917_38153__$1 = temp__5823__auto___38152;
if(cljs.core.chunked_seq_QMARK_(seq__37917_38153__$1)){
var c__5525__auto___38154 = cljs.core.chunk_first(seq__37917_38153__$1);
var G__38155 = cljs.core.chunk_rest(seq__37917_38153__$1);
var G__38156 = c__5525__auto___38154;
var G__38157 = cljs.core.count(c__5525__auto___38154);
var G__38158 = (0);
seq__37917_38138 = G__38155;
chunk__37919_38139 = G__38156;
count__37920_38140 = G__38157;
i__37921_38141 = G__38158;
continue;
} else {
var map__37926_38159 = cljs.core.first(seq__37917_38153__$1);
var map__37926_38160__$1 = cljs.core.__destructure_map(map__37926_38159);
var task_38161 = map__37926_38160__$1;
var fn_str_38162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926_38160__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926_38160__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38164 = goog.getObjectByName(fn_str_38162,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38163)].join(''));

(fn_obj_38164.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38164.cljs$core$IFn$_invoke$arity$2(path,new_link_38137) : fn_obj_38164.call(null, path,new_link_38137));


var G__38165 = cljs.core.next(seq__37917_38153__$1);
var G__38166 = null;
var G__38167 = (0);
var G__38168 = (0);
seq__37917_38138 = G__38165;
chunk__37919_38139 = G__38166;
count__37920_38140 = G__38167;
i__37921_38141 = G__38168;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38134);
});})(seq__37884_38130,chunk__37888_38131,count__37889_38132,i__37890_38133,seq__37764,chunk__37766,count__37767,i__37768,new_link_38137,path_match_38135,node_38134,path,map__37763,map__37763__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38135], 0));

goog.dom.insertSiblingAfter(new_link_38137,node_38134);


var G__38171 = seq__37884_38130;
var G__38172 = chunk__37888_38131;
var G__38173 = count__37889_38132;
var G__38174 = (i__37890_38133 + (1));
seq__37884_38130 = G__38171;
chunk__37888_38131 = G__38172;
count__37889_38132 = G__38173;
i__37890_38133 = G__38174;
continue;
} else {
var G__38175 = seq__37884_38130;
var G__38176 = chunk__37888_38131;
var G__38177 = count__37889_38132;
var G__38178 = (i__37890_38133 + (1));
seq__37884_38130 = G__38175;
chunk__37888_38131 = G__38176;
count__37889_38132 = G__38177;
i__37890_38133 = G__38178;
continue;
}
} else {
var G__38179 = seq__37884_38130;
var G__38180 = chunk__37888_38131;
var G__38181 = count__37889_38132;
var G__38182 = (i__37890_38133 + (1));
seq__37884_38130 = G__38179;
chunk__37888_38131 = G__38180;
count__37889_38132 = G__38181;
i__37890_38133 = G__38182;
continue;
}
} else {
var temp__5823__auto___38183 = cljs.core.seq(seq__37884_38130);
if(temp__5823__auto___38183){
var seq__37884_38184__$1 = temp__5823__auto___38183;
if(cljs.core.chunked_seq_QMARK_(seq__37884_38184__$1)){
var c__5525__auto___38185 = cljs.core.chunk_first(seq__37884_38184__$1);
var G__38186 = cljs.core.chunk_rest(seq__37884_38184__$1);
var G__38187 = c__5525__auto___38185;
var G__38188 = cljs.core.count(c__5525__auto___38185);
var G__38189 = (0);
seq__37884_38130 = G__38186;
chunk__37888_38131 = G__38187;
count__37889_38132 = G__38188;
i__37890_38133 = G__38189;
continue;
} else {
var node_38190 = cljs.core.first(seq__37884_38184__$1);
if(cljs.core.not(node_38190.shadow$old)){
var path_match_38191 = shadow.cljs.devtools.client.browser.match_paths(node_38190.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38191)){
var new_link_38192 = (function (){var G__37927 = node_38190.cloneNode(true);
G__37927.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37927;
})();
(node_38190.shadow$old = true);

(new_link_38192.onload = ((function (seq__37884_38130,chunk__37888_38131,count__37889_38132,i__37890_38133,seq__37764,chunk__37766,count__37767,i__37768,new_link_38192,path_match_38191,node_38190,seq__37884_38184__$1,temp__5823__auto___38183,path,map__37763,map__37763__$1,msg,updates,reload_info){
return (function (e){
var seq__37928_38193 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37930_38194 = null;
var count__37931_38195 = (0);
var i__37932_38196 = (0);
while(true){
if((i__37932_38196 < count__37931_38195)){
var map__37939_38197 = chunk__37930_38194.cljs$core$IIndexed$_nth$arity$2(null, i__37932_38196);
var map__37939_38198__$1 = cljs.core.__destructure_map(map__37939_38197);
var task_38199 = map__37939_38198__$1;
var fn_str_38200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939_38198__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939_38198__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38202 = goog.getObjectByName(fn_str_38200,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38201)].join(''));

(fn_obj_38202.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38202.cljs$core$IFn$_invoke$arity$2(path,new_link_38192) : fn_obj_38202.call(null, path,new_link_38192));


var G__38203 = seq__37928_38193;
var G__38204 = chunk__37930_38194;
var G__38205 = count__37931_38195;
var G__38206 = (i__37932_38196 + (1));
seq__37928_38193 = G__38203;
chunk__37930_38194 = G__38204;
count__37931_38195 = G__38205;
i__37932_38196 = G__38206;
continue;
} else {
var temp__5823__auto___38207__$1 = cljs.core.seq(seq__37928_38193);
if(temp__5823__auto___38207__$1){
var seq__37928_38208__$1 = temp__5823__auto___38207__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37928_38208__$1)){
var c__5525__auto___38209 = cljs.core.chunk_first(seq__37928_38208__$1);
var G__38210 = cljs.core.chunk_rest(seq__37928_38208__$1);
var G__38211 = c__5525__auto___38209;
var G__38212 = cljs.core.count(c__5525__auto___38209);
var G__38213 = (0);
seq__37928_38193 = G__38210;
chunk__37930_38194 = G__38211;
count__37931_38195 = G__38212;
i__37932_38196 = G__38213;
continue;
} else {
var map__37942_38214 = cljs.core.first(seq__37928_38208__$1);
var map__37942_38215__$1 = cljs.core.__destructure_map(map__37942_38214);
var task_38216 = map__37942_38215__$1;
var fn_str_38217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942_38215__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942_38215__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38219 = goog.getObjectByName(fn_str_38217,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38218)].join(''));

(fn_obj_38219.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38219.cljs$core$IFn$_invoke$arity$2(path,new_link_38192) : fn_obj_38219.call(null, path,new_link_38192));


var G__38220 = cljs.core.next(seq__37928_38208__$1);
var G__38221 = null;
var G__38222 = (0);
var G__38223 = (0);
seq__37928_38193 = G__38220;
chunk__37930_38194 = G__38221;
count__37931_38195 = G__38222;
i__37932_38196 = G__38223;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38190);
});})(seq__37884_38130,chunk__37888_38131,count__37889_38132,i__37890_38133,seq__37764,chunk__37766,count__37767,i__37768,new_link_38192,path_match_38191,node_38190,seq__37884_38184__$1,temp__5823__auto___38183,path,map__37763,map__37763__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38191], 0));

goog.dom.insertSiblingAfter(new_link_38192,node_38190);


var G__38224 = cljs.core.next(seq__37884_38184__$1);
var G__38225 = null;
var G__38226 = (0);
var G__38227 = (0);
seq__37884_38130 = G__38224;
chunk__37888_38131 = G__38225;
count__37889_38132 = G__38226;
i__37890_38133 = G__38227;
continue;
} else {
var G__38228 = cljs.core.next(seq__37884_38184__$1);
var G__38229 = null;
var G__38230 = (0);
var G__38231 = (0);
seq__37884_38130 = G__38228;
chunk__37888_38131 = G__38229;
count__37889_38132 = G__38230;
i__37890_38133 = G__38231;
continue;
}
} else {
var G__38232 = cljs.core.next(seq__37884_38184__$1);
var G__38233 = null;
var G__38234 = (0);
var G__38235 = (0);
seq__37884_38130 = G__38232;
chunk__37888_38131 = G__38233;
count__37889_38132 = G__38234;
i__37890_38133 = G__38235;
continue;
}
}
} else {
}
}
break;
}


var G__38236 = seq__37764;
var G__38237 = chunk__37766;
var G__38238 = count__37767;
var G__38239 = (i__37768 + (1));
seq__37764 = G__38236;
chunk__37766 = G__38237;
count__37767 = G__38238;
i__37768 = G__38239;
continue;
} else {
var G__38240 = seq__37764;
var G__38241 = chunk__37766;
var G__38242 = count__37767;
var G__38243 = (i__37768 + (1));
seq__37764 = G__38240;
chunk__37766 = G__38241;
count__37767 = G__38242;
i__37768 = G__38243;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37764);
if(temp__5823__auto__){
var seq__37764__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37764__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37764__$1);
var G__38244 = cljs.core.chunk_rest(seq__37764__$1);
var G__38245 = c__5525__auto__;
var G__38246 = cljs.core.count(c__5525__auto__);
var G__38247 = (0);
seq__37764 = G__38244;
chunk__37766 = G__38245;
count__37767 = G__38246;
i__37768 = G__38247;
continue;
} else {
var path = cljs.core.first(seq__37764__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37944_38248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37948_38249 = null;
var count__37949_38250 = (0);
var i__37950_38251 = (0);
while(true){
if((i__37950_38251 < count__37949_38250)){
var node_38252 = chunk__37948_38249.cljs$core$IIndexed$_nth$arity$2(null, i__37950_38251);
if(cljs.core.not(node_38252.shadow$old)){
var path_match_38253 = shadow.cljs.devtools.client.browser.match_paths(node_38252.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38253)){
var new_link_38254 = (function (){var G__37980 = node_38252.cloneNode(true);
G__37980.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38253),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37980;
})();
(node_38252.shadow$old = true);

(new_link_38254.onload = ((function (seq__37944_38248,chunk__37948_38249,count__37949_38250,i__37950_38251,seq__37764,chunk__37766,count__37767,i__37768,new_link_38254,path_match_38253,node_38252,path,seq__37764__$1,temp__5823__auto__,map__37763,map__37763__$1,msg,updates,reload_info){
return (function (e){
var seq__37981_38255 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37983_38256 = null;
var count__37984_38257 = (0);
var i__37985_38258 = (0);
while(true){
if((i__37985_38258 < count__37984_38257)){
var map__37992_38259 = chunk__37983_38256.cljs$core$IIndexed$_nth$arity$2(null, i__37985_38258);
var map__37992_38260__$1 = cljs.core.__destructure_map(map__37992_38259);
var task_38261 = map__37992_38260__$1;
var fn_str_38262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37992_38260__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37992_38260__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38264 = goog.getObjectByName(fn_str_38262,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38263)].join(''));

(fn_obj_38264.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38264.cljs$core$IFn$_invoke$arity$2(path,new_link_38254) : fn_obj_38264.call(null, path,new_link_38254));


var G__38265 = seq__37981_38255;
var G__38266 = chunk__37983_38256;
var G__38267 = count__37984_38257;
var G__38268 = (i__37985_38258 + (1));
seq__37981_38255 = G__38265;
chunk__37983_38256 = G__38266;
count__37984_38257 = G__38267;
i__37985_38258 = G__38268;
continue;
} else {
var temp__5823__auto___38269__$1 = cljs.core.seq(seq__37981_38255);
if(temp__5823__auto___38269__$1){
var seq__37981_38270__$1 = temp__5823__auto___38269__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37981_38270__$1)){
var c__5525__auto___38271 = cljs.core.chunk_first(seq__37981_38270__$1);
var G__38272 = cljs.core.chunk_rest(seq__37981_38270__$1);
var G__38273 = c__5525__auto___38271;
var G__38274 = cljs.core.count(c__5525__auto___38271);
var G__38275 = (0);
seq__37981_38255 = G__38272;
chunk__37983_38256 = G__38273;
count__37984_38257 = G__38274;
i__37985_38258 = G__38275;
continue;
} else {
var map__38007_38276 = cljs.core.first(seq__37981_38270__$1);
var map__38007_38277__$1 = cljs.core.__destructure_map(map__38007_38276);
var task_38278 = map__38007_38277__$1;
var fn_str_38279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38007_38277__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38007_38277__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38281 = goog.getObjectByName(fn_str_38279,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38280)].join(''));

(fn_obj_38281.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38281.cljs$core$IFn$_invoke$arity$2(path,new_link_38254) : fn_obj_38281.call(null, path,new_link_38254));


var G__38282 = cljs.core.next(seq__37981_38270__$1);
var G__38283 = null;
var G__38284 = (0);
var G__38285 = (0);
seq__37981_38255 = G__38282;
chunk__37983_38256 = G__38283;
count__37984_38257 = G__38284;
i__37985_38258 = G__38285;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38252);
});})(seq__37944_38248,chunk__37948_38249,count__37949_38250,i__37950_38251,seq__37764,chunk__37766,count__37767,i__37768,new_link_38254,path_match_38253,node_38252,path,seq__37764__$1,temp__5823__auto__,map__37763,map__37763__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38253], 0));

goog.dom.insertSiblingAfter(new_link_38254,node_38252);


var G__38286 = seq__37944_38248;
var G__38287 = chunk__37948_38249;
var G__38288 = count__37949_38250;
var G__38289 = (i__37950_38251 + (1));
seq__37944_38248 = G__38286;
chunk__37948_38249 = G__38287;
count__37949_38250 = G__38288;
i__37950_38251 = G__38289;
continue;
} else {
var G__38290 = seq__37944_38248;
var G__38291 = chunk__37948_38249;
var G__38292 = count__37949_38250;
var G__38293 = (i__37950_38251 + (1));
seq__37944_38248 = G__38290;
chunk__37948_38249 = G__38291;
count__37949_38250 = G__38292;
i__37950_38251 = G__38293;
continue;
}
} else {
var G__38294 = seq__37944_38248;
var G__38295 = chunk__37948_38249;
var G__38296 = count__37949_38250;
var G__38297 = (i__37950_38251 + (1));
seq__37944_38248 = G__38294;
chunk__37948_38249 = G__38295;
count__37949_38250 = G__38296;
i__37950_38251 = G__38297;
continue;
}
} else {
var temp__5823__auto___38298__$1 = cljs.core.seq(seq__37944_38248);
if(temp__5823__auto___38298__$1){
var seq__37944_38299__$1 = temp__5823__auto___38298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37944_38299__$1)){
var c__5525__auto___38300 = cljs.core.chunk_first(seq__37944_38299__$1);
var G__38301 = cljs.core.chunk_rest(seq__37944_38299__$1);
var G__38302 = c__5525__auto___38300;
var G__38303 = cljs.core.count(c__5525__auto___38300);
var G__38304 = (0);
seq__37944_38248 = G__38301;
chunk__37948_38249 = G__38302;
count__37949_38250 = G__38303;
i__37950_38251 = G__38304;
continue;
} else {
var node_38305 = cljs.core.first(seq__37944_38299__$1);
if(cljs.core.not(node_38305.shadow$old)){
var path_match_38306 = shadow.cljs.devtools.client.browser.match_paths(node_38305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38306)){
var new_link_38307 = (function (){var G__38011 = node_38305.cloneNode(true);
G__38011.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38011;
})();
(node_38305.shadow$old = true);

(new_link_38307.onload = ((function (seq__37944_38248,chunk__37948_38249,count__37949_38250,i__37950_38251,seq__37764,chunk__37766,count__37767,i__37768,new_link_38307,path_match_38306,node_38305,seq__37944_38299__$1,temp__5823__auto___38298__$1,path,seq__37764__$1,temp__5823__auto__,map__37763,map__37763__$1,msg,updates,reload_info){
return (function (e){
var seq__38012_38308 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38014_38309 = null;
var count__38015_38310 = (0);
var i__38016_38311 = (0);
while(true){
if((i__38016_38311 < count__38015_38310)){
var map__38021_38312 = chunk__38014_38309.cljs$core$IIndexed$_nth$arity$2(null, i__38016_38311);
var map__38021_38313__$1 = cljs.core.__destructure_map(map__38021_38312);
var task_38314 = map__38021_38313__$1;
var fn_str_38315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38021_38313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38021_38313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38317 = goog.getObjectByName(fn_str_38315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38316)].join(''));

(fn_obj_38317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38317.cljs$core$IFn$_invoke$arity$2(path,new_link_38307) : fn_obj_38317.call(null, path,new_link_38307));


var G__38318 = seq__38012_38308;
var G__38319 = chunk__38014_38309;
var G__38320 = count__38015_38310;
var G__38321 = (i__38016_38311 + (1));
seq__38012_38308 = G__38318;
chunk__38014_38309 = G__38319;
count__38015_38310 = G__38320;
i__38016_38311 = G__38321;
continue;
} else {
var temp__5823__auto___38322__$2 = cljs.core.seq(seq__38012_38308);
if(temp__5823__auto___38322__$2){
var seq__38012_38323__$1 = temp__5823__auto___38322__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38012_38323__$1)){
var c__5525__auto___38324 = cljs.core.chunk_first(seq__38012_38323__$1);
var G__38325 = cljs.core.chunk_rest(seq__38012_38323__$1);
var G__38326 = c__5525__auto___38324;
var G__38327 = cljs.core.count(c__5525__auto___38324);
var G__38328 = (0);
seq__38012_38308 = G__38325;
chunk__38014_38309 = G__38326;
count__38015_38310 = G__38327;
i__38016_38311 = G__38328;
continue;
} else {
var map__38022_38329 = cljs.core.first(seq__38012_38323__$1);
var map__38022_38330__$1 = cljs.core.__destructure_map(map__38022_38329);
var task_38331 = map__38022_38330__$1;
var fn_str_38332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022_38330__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022_38330__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38334 = goog.getObjectByName(fn_str_38332,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38333)].join(''));

(fn_obj_38334.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38334.cljs$core$IFn$_invoke$arity$2(path,new_link_38307) : fn_obj_38334.call(null, path,new_link_38307));


var G__38335 = cljs.core.next(seq__38012_38323__$1);
var G__38336 = null;
var G__38337 = (0);
var G__38338 = (0);
seq__38012_38308 = G__38335;
chunk__38014_38309 = G__38336;
count__38015_38310 = G__38337;
i__38016_38311 = G__38338;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38305);
});})(seq__37944_38248,chunk__37948_38249,count__37949_38250,i__37950_38251,seq__37764,chunk__37766,count__37767,i__37768,new_link_38307,path_match_38306,node_38305,seq__37944_38299__$1,temp__5823__auto___38298__$1,path,seq__37764__$1,temp__5823__auto__,map__37763,map__37763__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38306], 0));

goog.dom.insertSiblingAfter(new_link_38307,node_38305);


var G__38339 = cljs.core.next(seq__37944_38299__$1);
var G__38340 = null;
var G__38341 = (0);
var G__38342 = (0);
seq__37944_38248 = G__38339;
chunk__37948_38249 = G__38340;
count__37949_38250 = G__38341;
i__37950_38251 = G__38342;
continue;
} else {
var G__38343 = cljs.core.next(seq__37944_38299__$1);
var G__38344 = null;
var G__38345 = (0);
var G__38346 = (0);
seq__37944_38248 = G__38343;
chunk__37948_38249 = G__38344;
count__37949_38250 = G__38345;
i__37950_38251 = G__38346;
continue;
}
} else {
var G__38347 = cljs.core.next(seq__37944_38299__$1);
var G__38348 = null;
var G__38349 = (0);
var G__38350 = (0);
seq__37944_38248 = G__38347;
chunk__37948_38249 = G__38348;
count__37949_38250 = G__38349;
i__37950_38251 = G__38350;
continue;
}
}
} else {
}
}
break;
}


var G__38351 = cljs.core.next(seq__37764__$1);
var G__38352 = null;
var G__38353 = (0);
var G__38354 = (0);
seq__37764 = G__38351;
chunk__37766 = G__38352;
count__37767 = G__38353;
i__37768 = G__38354;
continue;
} else {
var G__38355 = cljs.core.next(seq__37764__$1);
var G__38356 = null;
var G__38357 = (0);
var G__38358 = (0);
seq__37764 = G__38355;
chunk__37766 = G__38356;
count__37767 = G__38357;
i__37768 = G__38358;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__38034){
var map__38035 = p__38034;
var map__38035__$1 = cljs.core.__destructure_map(map__38035);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38036,done,error){
var map__38037 = p__38036;
var map__38037__$1 = cljs.core.__destructure_map(map__38037);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38039,done,error){
var map__38041 = p__38039;
var map__38041__$1 = cljs.core.__destructure_map(map__38041);
var msg = map__38041__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38042){
var map__38043 = p__38042;
var map__38043__$1 = cljs.core.__destructure_map(map__38043);
var src = map__38043__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38044 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38044) : done.call(null, G__38044));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38045){
var map__38046 = p__38045;
var map__38046__$1 = cljs.core.__destructure_map(map__38046);
var msg__$1 = map__38046__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e38047){var ex = e38047;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38048){
var map__38049 = p__38048;
var map__38049__$1 = cljs.core.__destructure_map(map__38049);
var env = map__38049__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38054){
var map__38055 = p__38054;
var map__38055__$1 = cljs.core.__destructure_map(map__38055);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38056){
var map__38057 = p__38056;
var map__38057__$1 = cljs.core.__destructure_map(map__38057);
var svc = map__38057__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
