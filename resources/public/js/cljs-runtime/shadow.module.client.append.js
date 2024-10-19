
shadow.cljs.devtools.client.env.module_loaded('client');

try { clojulator.web.core.main(); } catch (e) { console.error("An error occurred when calling (clojulator.web.core/main)"); console.error(e); }