(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function q(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
q("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype}
function oa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.A=function(a){this.g=a};
function qa(a,b){a.h={Ma:b,xa:!0};a.f=a.l||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.K=function(a){this.f=a};
function ra(a){a.l=2;a.j=3}
function sa(a){a.l=0;a.h=null}
function ta(a){a.u=[a.h];a.l=0;a.j=0}
function ua(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.xa?a.f=a.l||a.j:void 0!=b.K&&a.j<b.K?(a.f=b.K,a.h=null):a.f=a.j:a.f=4}
function va(a){this.f=new oa;this.g=a}
function wa(a,b){pa(a.f);var c=a.f.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),ya(a)}a.f.i=null;d.call(a.f,f);return ya(a)}
function ya(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,qa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.xa)throw b.Ma;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.f);a.f.i?b=xa(a,a.f.i.next,b,a.f.A):(a.f.A(b),b=ya(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=xa(a,a.f.i["throw"],b,a.f.A):(qa(a.f,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new za(new va(b));na&&a.prototype&&na(c,a.prototype);return c}
q("Reflect",function(a){return a?a:{}});
q("Reflect.construct",function(){return ia});
q("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
q("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
q("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
q("Object.setPrototypeOf",function(a){return a||na});
function Ba(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ba(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||Ca});
q("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.G),reject:g(this.j)}};
b.prototype.G=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.N(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.l(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.O(h,g):this.l(g)};
b.prototype.j=function(g){this.A(2,g)};
b.prototype.l=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.H();this.u()};
b.prototype.H=function(){var g=this;e(function(){if(g.D()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.D=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.u=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.N=function(g){var h=this.i();g.fa(h.resolve,h.reject)};
b.prototype.O=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(A){try{l(r(A))}catch(E){m(E)}}:t}
var l,m,p=new b(function(r,t){l=r;m=t});
this.fa(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.fa=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).fa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(A){return function(E){r[A]=E;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).fa(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
q("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
q("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ba(b,d)&&c.push([d,b[d]]);return c}});
q("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ba(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ba(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Ba(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Ba(k,g)&&Ba(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Ba(k,g)&&Ba(k[g],this.f)?delete k[g][this.f]:!1};
return b});
q("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
q("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&Ba(h.g,l))for(var p=0;p<m.length;p++){var r=m[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:p,B:r}}return{id:l,list:m,index:-1,B:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.B?l.B.value=k:(l.B={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.B),this.f.previous.next=l.B,this.f.previous=l.B,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.B&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.B.previous.next=h.B.next,h.B.next.previous=h.B.previous,h.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).B};
e.prototype.get=function(h){return(h=d(this,h).B)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
q("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ea(a){if(a&&a!=y)return Fa(a.document);null===Ga&&(Ga=Fa(y.document));return Ga}
var Ha=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Fa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ha.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.oa=void 0;a.getInstance=function(){return a.oa?a.oa:a.oa=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function D(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?D=Pa:D=Qa;return D.apply(null,arguments)}
function Ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function F(){return Date.now()}
function Sa(a,b){z(a,b,void 0)}
function G(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ua,Error);Ua.prototype.name="CustomError";function Va(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ya=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Za=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function bb(a,b){var c=Xa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(c){y.console&&y.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.f=b===tb?a:""}
sb.prototype.S=!0;sb.prototype.P=function(){return this.f.toString()};
sb.prototype.na=!0;sb.prototype.ka=function(){return 1};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.f;Ka(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a,b){return a<b?-1:a>b?1:0}
;function I(a,b){this.f=b===Fb?a:""}
I.prototype.S=!0;I.prototype.P=function(){return this.f.toString()};
I.prototype.na=!0;I.prototype.ka=function(){return 1};
function Gb(a){if(a instanceof I&&a.constructor===I)return a.f;Ka(a);return"type_error:SafeUrl"}
var Hb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ib=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof I)return a;a="object"==typeof a&&a.S?a.P():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return new I(a,Fb)}
var Fb={},Lb=new I("about:invalid#zClosurez",Fb);var Mb;a:{var Nb=y.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function J(a){return-1!=Mb.indexOf(a)}
;function Pb(a,b,c){this.f=c===Qb?a:"";this.g=b}
Pb.prototype.na=!0;Pb.prototype.ka=function(){return this.g};
Pb.prototype.S=!0;Pb.prototype.P=function(){return this.f.toString()};
var Qb={};function Rb(a,b){var c=rb();c=c?c.createHTML(a):a;return new Pb(c,b,Qb)}
;function Sb(a,b){var c=b instanceof I?b:Kb(b);a.href=Gb(c)}
function Tb(a,b){a.src=ub(b);var c=Ea(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Ub(a){return a=wb(a,void 0)}
function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
function ac(a,b){var c=$b(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var bc=/#|$/;function K(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(a){cc[" "](a);return a}
cc[" "]=Ia;var dc=J("Opera"),ec=J("Trident")||J("MSIE"),fc=J("Edge"),gc=J("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),ic=-1!=Mb.toLowerCase().indexOf("webkit")&&!J("Edge");function jc(){var a=y.document;return a?a.documentMode:void 0}
var kc;a:{var lc="",mc=function(){var a=Mb;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ic)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mc&&(lc=mc?mc[1]:"");if(ec){var nc=jc();if(null!=nc&&nc>parseFloat(lc)){kc=String(nc);break a}}kc=lc}var oc=kc,pc={},qc;if(y.document&&ec){var rc=jc();qc=rc?rc:parseInt(oc,10)||void 0}else qc=void 0;var sc=qc;var tc=J("Firefox")||J("FxiOS"),uc=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),vc=J("iPad");var wc={},xc=null;var L=window;function yc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=zc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ac[c])c=Ac[c];else{c=String(c);if(!Ac[c]){var f=/function\s+([^\(]+)/m.exec(c);Ac[c]=f?f[1]:"[Anonymous]"}c=Ac[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function zc(a,b){b||(b={});b[Bc(a)]=!0;var c=a.stack||"",d=a.Gb;d&&!b[Bc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=zc(d,b));return c}
function Bc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ac={};function Cc(a){this.f=a||{cookie:""}}
n=Cc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ya}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ya:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Dc=new Cc("undefined"==typeof document?null:document);var Ec=!ec||9<=Number(sc);function Fc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Fc.prototype;n.clone=function(){return new Fc(this.x,this.y)};
n.equals=function(a){return a instanceof Fc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Gc(a,b){this.width=a;this.height=b}
n=Gc.prototype;n.clone=function(){return new Gc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ic(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.S&&(c=c.P());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Jc.hasOwnProperty(d)?a.setAttribute(Jc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Kc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ec&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ub(g.name),'"');if(g.type){f.push(' type="',Ub(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Lc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Ic(f,g));2<d.length&&Mc(e,f,d);return f}
function Mc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||C(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(C(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?db(f):f,d)}}}
function Lc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Nc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Oc(a){var b=Pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Qc(){var a=[];Oc(function(b){a.push(b)});
return a}
var Pc={sb:"allow-forms",tb:"allow-modals",ub:"allow-orientation-lock",vb:"allow-pointer-lock",wb:"allow-popups",xb:"allow-popups-to-escape-sandbox",yb:"allow-presentation",zb:"allow-same-origin",Ab:"allow-scripts",Bb:"allow-top-navigation",Cb:"allow-top-navigation-by-user-activation"},Rc=Wa(function(){return Qc()});
function Sc(){var a=Lc(document,"IFRAME"),b={};H(Rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.g=this.g;this.A=this.A}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Tc(a,b){a.g?b():(a.A||(a.A=[]),a.A.push(b))}
M.prototype.o=function(){if(this.A)for(;this.A.length;)this.A.shift()()};
function Uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Vc.apply(null,d):Uc(d)}}
;var Wc={};function Xc(){}
function Yc(a,b){if(b!==Wc)throw Error("Bad secret");this.f=a}
v(Yc,Xc);Yc.prototype.toString=function(){return this.f};new Yc("about:blank",Wc);new Yc("about:invalid#zTSz",Wc);function Zc(a){$c();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var $c=Ia;function ad(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var bd=(new Date).getTime();function cd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function dd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var A=e[1],E=e[2],X=e[3],Fd=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var cb=X^A&(E^X);var hc=1518500249}else cb=A^E^X,hc=1859775393;else 60>t?(cb=A&E|X&(A|E),hc=2400959708):(cb=A^E^X,hc=3395469782);cb=((p<<5|p>>>27)&4294967295)+cb+Fd+hc+r[t]&4294967295;Fd=X;X=E;E=(A<<30|A>>>2)&4294967295;A=p;p=cb}e[0]=e[0]+p&4294967295;e[1]=e[1]+
A&4294967295;e[2]=e[2]+E&4294967295;e[3]=e[3]+X&4294967295;e[4]=e[4]+Fd&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],A=0,E=p.length;A<E;++A)t.push(p.charCodeAt(A));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=p[t++],m++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,m+=64}
function d(){var p=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var A=24;0<=A;A-=8)p[r++]=e[t]>>A&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,La:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function ed(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),fd(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=fd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fd(a){var b=dd();b.update(a);return b.La().toLowerCase()}
;function gd(a){var b=cd(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new Cc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new Cc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,ed(cd(d),
c,a||null)].join(" "):null}return null}
;function hd(){this.g=[];this.f=-1}
hd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
hd.prototype.get=function(a){return!!this.g[a]};
function id(a){-1==a.f&&(a.f=$a(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function jd(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
jd.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function kd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function ld(a){y.setTimeout(function(){throw a;},0)}
var md;
function nd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Lc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=D(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ua;c.ua=null;e()}};
return function(e){d.next={ua:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function od(){this.g=this.f=null}
var qd=new jd(function(){return new pd},function(a){a.reset()});
od.prototype.add=function(a,b){var c=qd.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
od.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function pd(){this.next=this.scope=this.f=null}
pd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
pd.prototype.reset=function(){this.next=this.scope=this.f=null};function rd(a,b){sd||td();ud||(sd(),ud=!0);vd.add(a,b)}
var sd;function td(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);sd=function(){a.then(wd)}}else sd=function(){var b=wd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(md||(md=nd()),md(b)):y.setImmediate(b)}}
var ud=!1,vd=new od;function wd(){for(var a;a=vd.remove();){try{a.f.call(a.scope)}catch(b){ld(b)}kd(qd,a)}ud=!1}
;function xd(){this.g=-1}
;function yd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(yd,xd);yd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function zd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
yd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)zd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){zd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){zd(this,e);f=0;break}}this.h=f;this.j+=b}};
yd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;zd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Ad="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Bd(){}
Bd.prototype.next=function(){throw Ad;};
Bd.prototype.J=function(){return this};
function Cd(a){if(a instanceof Bd)return a;if("function"==typeof a.J)return a.J(!1);if(La(a)){var b=0,c=new Bd;c.next=function(){for(;;){if(b>=a.length)throw Ad;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Dd(a,b){if(La(a))try{H(a,b,void 0)}catch(c){if(c!==Ad)throw c;}else{a=Cd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ad)throw c;}}}
function Ed(a){if(La(a))return db(a);a=Cd(a);var b=[];Dd(a,function(c){b.push(c)});
return b}
;function Gd(a,b){this.h={};this.f=[];this.L=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Gd)for(c=Hd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Hd(a){Id(a);return a.f.concat()}
n=Gd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Jd;Id(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Jd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.L=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.L++,this.f.length>2*this.g&&Id(this),!0):!1};
function Id(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.L++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Hd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Gd(this)};
n.J=function(a){Id(this);var b=0,c=this.L,d=this,e=new Bd;e.next=function(){if(c!=d.L)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Ad;var f=d.f[b++];return a?f:d.h[f]};
return e};function Kd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ld(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Md(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Kd(a).match(/\S+/g)||[],c=0<=Xa(c,b);return c}
function Nd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Md(a,"inverted-hdpi")&&Ld(a,Ya(a.classList?a.classList:Kd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Od=!ec||9<=Number(sc),Pd;
if(Pd=ec){var Qd;if(Object.prototype.hasOwnProperty.call(pc,"9"))Qd=pc["9"];else{for(var Rd=0,Sd=vb(String(oc)).split("."),Td=vb("9").split("."),Ud=Math.max(Sd.length,Td.length),Vd=0;0==Rd&&Vd<Ud;Vd++){var Wd=Sd[Vd]||"",Xd=Td[Vd]||"";do{var Yd=/(\d*)(\D*)(.*)/.exec(Wd)||["","","",""],Zd=/(\d*)(\D*)(.*)/.exec(Xd)||["","","",""];if(0==Yd[0].length&&0==Zd[0].length)break;Rd=Eb(0==Yd[1].length?0:parseInt(Yd[1],10),0==Zd[1].length?0:parseInt(Zd[1],10))||Eb(0==Yd[2].length,0==Zd[2].length)||Eb(Yd[2],Zd[2]);
Wd=Yd[3];Xd=Zd[3]}while(0==Rd)}Qd=pc["9"]=0<=Rd}Pd=!Qd}var $d=Pd,ae=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ia,b),y.removeEventListener("test",Ia,b)}catch(c){}return a}();function be(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.g=!1}
be.prototype.stopPropagation=function(){this.g=!0};
be.prototype.preventDefault=function(){this.defaultPrevented=!0};function ce(a,b){be.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
G(ce,be);var de={2:"touch",3:"pen",4:"mouse"};
ce.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(gc){a:{try{cc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:de[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&this.preventDefault()};
ce.prototype.stopPropagation=function(){ce.I.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
ce.prototype.preventDefault=function(){ce.I.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$d)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ee="closure_listenable_"+(1E6*Math.random()|0),fe=0;function ge(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.ga=e;this.key=++fe;this.T=this.ea=!1}
function he(a){a.T=!0;a.listener=null;a.f=null;a.src=null;a.ga=null}
;function ie(a){this.src=a;this.listeners={};this.f=0}
ie.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=je(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new ge(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};
ie.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=je(e,b,c,d);return-1<b?(he(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ke(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(he(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function je(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.T&&f.listener==b&&f.capture==!!c&&f.ga==d)return e}return-1}
;var le="closure_lm_"+(1E6*Math.random()|0),me={},ne=0;function oe(a,b,c,d,e){if(d&&d.once)pe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.f.add(String(b),c,!1,C(d)?!!d.capture:!!d,e):re(a,b,c,!1,d,e)}
function re(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=se(a);h||(a[le]=h=new ie(a));c=h.add(b,c,d,g,f);if(!c.f){d=te();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)ae||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ue(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ne++}}
function te(){var a=ve,b=Od?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.f.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):re(a,b,c,!0,d,e)}
function we(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)we(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=qe(c),a&&a[ee])?a.f.remove(String(b),c,d,e):a&&(a=se(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=je(b,c,d,e)),(c=-1<a?b[a]:null)&&xe(c))}
function xe(a){if("number"!==typeof a&&a&&!a.T){var b=a.src;if(b&&b[ee])ke(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ue(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ne--;(c=se(b))?(ke(c,a),0==c.f&&(c.src=null,b[le]=null)):he(a)}}}
function ue(a){return a in me?me[a]:me[a]="on"+a}
function ye(a,b,c,d){var e=!0;if(a=se(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.T&&(f=ze(f,d),e=e&&!1!==f)}return e}
function ze(a,b){var c=a.listener,d=a.ga||a.src;a.ea&&xe(a);return c.call(d,b)}
function ve(a,b){if(a.T)return!0;if(!Od){var c=b||B("window.event"),d=new ce(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.f=c[g];var h=ye(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.f=c[g],h=ye(c[g],f,!1,d),e=e&&h}return e}return ze(a,new ce(b,this))}
function se(a){a=a[le];return a instanceof ie?a:null}
var Ae="__closure_events_fn_"+(1E9*Math.random()>>>0);function qe(a){if("function"===typeof a)return a;a[Ae]||(a[Ae]=function(b){return a.handleEvent(b)});
return a[Ae]}
;function Be(){M.call(this);this.f=new ie(this);this.u=this;this.l=null}
G(Be,M);Be.prototype[ee]=!0;Be.prototype.addEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
Be.prototype.removeEventListener=function(a,b,c,d){we(this,a,b,c,d)};
Be.prototype.dispatchEvent=function(a){var b=this.l;if(b){var c=[];for(var d=1;b;b=b.l)c.push(b),++d}b=this.u;d=a.type||a;if("string"===typeof a)a=new be(a,b);else if(a instanceof be)a.target=a.target||b;else{var e=a;a=new be(d,b);pb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.f=c[f];e=Ce(g,d,!0,a)&&e}a.g||(g=a.f=b,e=Ce(g,d,!0,a)&&e,a.g||(e=Ce(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.f=c[f],e=Ce(g,d,!1,a)&&e;return e};
Be.prototype.o=function(){Be.I.o.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,he(d[e]);delete a.listeners[c];a.f--}}this.l=null};
function Ce(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.T&&g.capture==c){var h=g.listener,k=g.ga||g.src;g.ea&&ke(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function De(a){var b=[];Ee(new Fe,a,b);return b.join("")}
function Fe(){}
function Ee(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ee(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ge(d,c),c.push(":"),Ee(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ge(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var He={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ie=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ge(a,b){b.push('"',a.replace(Ie,function(c){var d=He[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),He[c]=d);return d}),'"')}
;function Je(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Ke(b,2,c)},function(c){Ke(b,3,c)})}catch(c){Ke(this,3,c)}}
function Le(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Le.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Me=new jd(function(){return new Le},function(a){a.reset()});
function Ne(a,b,c){var d=Me.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Oe(a){if(a instanceof N)return a;var b=new N(Ia);Ke(b,2,a);return b}
function Pe(a){return new N(function(b,c){c(a)})}
function Qe(a,b,c){Re(a,b,c,null)||rd(Ra(b,a))}
function Se(a){return new N(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,m){d--;e[l]=m;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],Qe(k,Ra(f,h),g);
else b(e)})}
N.prototype.then=function(a,b,c){return Te(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
N.prototype.$goog_Thenable=!0;function Ue(a,b){return Te(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.f){var b=new Ve(a);rd(function(){We(this,b)},this)}};
function We(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?We(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Xe(c),Ye(c,e,3,b)))}a.h=null}else Ke(a,3,b)}
function Ze(a,b){a.g||2!=a.f&&3!=a.f||$e(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Te(a,b,c,d){var e=Ne(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ve?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Ze(a,e);return e.f}
N.prototype.u=function(a){this.f=0;Ke(this,2,a)};
N.prototype.D=function(a){this.f=0;Ke(this,3,a)};
function Ke(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Re(c,a.u,a.D,a)||(a.m=c,a.f=b,a.h=null,$e(a),3!=b||c instanceof Ve||af(a,c)))}
function Re(a,b,c,d){if(a instanceof N)return Ze(a,Ne(b||Ia,c||null,d)),!0;if(Je(a))return a.then(b,c,d),!0;if(C(a))try{var e=a.then;if("function"===typeof e)return bf(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function bf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function $e(a){a.l||(a.l=!0,rd(a.A,a))}
function Xe(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.A=function(){for(var a;a=Xe(this);)Ye(this,a,this.f,this.m);this.l=!1};
function Ye(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,cf(b,c,d);else try{b.h?b.g.call(b.context):cf(b,c,d)}catch(e){df.call(null,e)}kd(Me,b)}
function cf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function af(a,b){a.j=!0;rd(function(){a.j&&df.call(null,b)})}
var df=ld;function Ve(a){Ua.call(this,a)}
G(Ve,Ua);Ve.prototype.name="cancel";function O(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
G(O,M);n=O.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function ef(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=ab(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.U(b)}}
n.U=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ia):(c&&bb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.R=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ff(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.U(c)}}return 0!=e}return!1};
function ff(a,b,c){rd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.U,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){O.I.o.call(this);this.clear();this.i.length=0};function gf(a){this.f=a}
gf.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,De(b))};
gf.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
gf.prototype.remove=function(a){this.f.remove(a)};function hf(a){this.f=a}
G(hf,gf);function jf(a){this.data=a}
function kf(a){return void 0===a||a instanceof jf?a:new jf(a)}
hf.prototype.set=function(a,b){hf.I.set.call(this,a,kf(b))};
hf.prototype.g=function(a){a=hf.I.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
hf.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function lf(a){this.f=a}
G(lf,hf);lf.prototype.set=function(a,b,c){if(b=kf(b)){if(c){if(c<F()){lf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}lf.I.set.call(this,a,b)};
lf.prototype.g=function(a){var b=lf.I.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())lf.prototype.remove.call(this,a);else return b}};function mf(){}
;function nf(){}
G(nf,mf);nf.prototype.clear=function(){var a=Ed(this.J(!0)),b=this;H(a,function(c){b.remove(c)})};function of(a){this.f=a}
G(of,nf);n=of.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.J=function(a){var b=0,c=this.f,d=new Bd;d.next=function(){if(b>=c.length)throw Ad;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function pf(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(pf,of);function qf(a,b){this.g=a;this.f=null;if(ec&&!(9<=Number(sc))){rf||(rf=new Gd);this.f=rf.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),rf.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
G(qf,nf);var sf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},rf=null;function tf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return sf[b]})}
n=qf.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(tf(a),b);uf(this)};
n.get=function(a){a=this.f.getAttribute(tf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(tf(a));uf(this)};
n.J=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Bd;d.next=function(){if(b>=c.length)throw Ad;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);uf(this)};
function uf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function vf(a,b){this.g=a;this.f=b+"::"}
G(vf,nf);vf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
vf.prototype.get=function(a){return this.g.get(this.f+a)};
vf.prototype.remove=function(a){this.g.remove(this.f+a)};
vf.prototype.J=function(a){var b=this.g.J(!0),c=this,d=new Bd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function wf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var xf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",xf,void 0);function P(a){wf(xf,arguments)}
function Q(a,b){return a in xf?xf[a]:b}
function yf(){return Q("PLAYER_CONFIG",{})}
;var zf=[];function Af(a){zf.forEach(function(b){return b(a)})}
function Bf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b),Af(b)}}:a}
function R(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function Cf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;var Df=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Df,void 0);function Ef(a){wf(Df,arguments)}
;function Ff(a,b,c,d){Dc.set(""+a,b,{ya:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function S(a){a=Gf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Hf(a,b){var c=Gf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Gf(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function If(a){a&&(a.dataset?a.dataset[Jf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Kf(a,b){return a?a.dataset?a.dataset[Jf(b)]:a.getAttribute("data-"+b):null}
var Lf={};function Jf(a){return Lf[a]||(Lf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function T(a,b){"function"===typeof a&&(a=Bf(a));return window.setTimeout(a,b)}
function Mf(a){window.clearTimeout(a)}
;var Nf=y.ytPubsubPubsubInstance||new O,Of=y.ytPubsubPubsubSubscribedKeys||{},Pf=y.ytPubsubPubsubTopicToKeys||{},Qf=y.ytPubsubPubsubIsSynchronous||{};function Rf(a,b){var c=Sf();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Of[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Qf[a]?f():T(f,0)}catch(g){R(g)}},void 0);
Of[d]=!0;Pf[a]||(Pf[a]=[]);Pf[a].push(d);return d}return 0}
function Tf(a){var b=Sf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Of[c]}))}
function Uf(a,b){var c=Sf();c&&c.publish.apply(c,arguments)}
function Vf(a){var b=Sf();if(b)if(b.clear(a),a)Wf(a);else for(var c in Pf)Wf(c)}
function Sf(){return y.ytPubsubPubsubInstance}
function Wf(a){Pf[a]&&(a=Pf[a],H(a,function(b){Of[b]&&delete Of[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.U;O.prototype.publish=O.prototype.R;O.prototype.clear=O.prototype.clear;z("ytPubsubPubsubInstance",Nf,void 0);z("ytPubsubPubsubTopicToKeys",Pf,void 0);z("ytPubsubPubsubIsSynchronous",Qf,void 0);z("ytPubsubPubsubSubscribedKeys",Of,void 0);var Xf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Yf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Zf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Xf,""),c=c.replace(Yf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else $f(a,b,c)}
function $f(a,b,c){c=void 0===c?null:c;var d=ag(a),e=document.getElementById(d),f=e&&Kf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Rf(d,b),b=""+Ma(b),bg[b]=f),g||(e=cg(a,d,function(){Kf(e,"loaded")||(If(e),Uf(d),T(Ra(Vf,d),0))},c)))}
function cg(a,b,c,d){d=void 0===d?null:d;var e=Lc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Tb(e,Zc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function dg(a){a=ag(a);var b=document.getElementById(a);b&&(Vf(a),b.parentNode.removeChild(b))}
function eg(a,b){if(a&&b){var c=""+Ma(b);(c=bg[c])&&Tf(c)}}
function ag(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var bg={};function fg(){}
function gg(a,b){return hg(a,0,b)}
function ig(a,b){return hg(a,1,b)}
;function jg(){}
v(jg,fg);function hg(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function kg(a){if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Mf(a)}}
jg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
jg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ja(jg);jg.getInstance();var lg=[],mg=!1;function ng(){if(!S("disable_ad_status_on_html5_clients")&&(!S("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Dc.get("CONSENT","").startsWith("YES+"))&&"1"!=gb(yf(),"args","privembed")){var a=function(){mg=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
try{Zf("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}lg.push(ig(function(){mg||"google_ad_status"in window||(eg("//static.doubleclick.net/instream/ad_status.js",a),mg=!0,P("DCLKSTAT",3))},5E3))}}
function og(){return parseInt(Q("DCLKSTAT",0),10)}
;var pg=0;z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++pg},void 0);var qg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qg||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function sg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
rg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",ib,void 0);var tg=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",tg,void 0);
function ug(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=C(e[4])&&C(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vg=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function wg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ug(a,b,c,d);if(e)return e;e=++tg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rg(h);if(!Nc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rg(h);
h.currentTarget=a;return c.call(a,h)};
g=Bf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function xg(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var yg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function zg(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.F=wg(window,"mousemove",D(this.G,this));a=D(this.D,this);"function"===typeof a&&(a=Bf(a));this.H=window.setInterval(a,25)}
G(zg,M);zg.prototype.G=function(a){void 0===a.f&&sg(a);var b=a.f;void 0===a.g&&sg(a);this.f=new Fc(b,a.g)};
zg.prototype.D=function(){if(this.f){var a=yg();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
zg.prototype.o=function(){window.clearInterval(this.H);xg(this.F)};var Ag={};
function Bg(a){var b=void 0===a?{}:a;a=void 0===b.Ra?!0:b.Ra;b=void 0===b.eb?!1:b.eb;if(null==B("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?F()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Cg();wg(document,"keydown",Cg);wg(document,"keyup",Cg);wg(document,"mousedown",Cg);wg(document,"mouseup",Cg);a&&(b?wg(window,"touchmove",function(){Dg("touchmove",200)},{passive:!0}):(wg(window,"resize",function(){Dg("resize",200)}),wg(window,"scroll",function(){Dg("scroll",200)})));
new zg(function(){Dg("mouse",100)});
wg(document,"touchstart",Cg,{passive:!0});wg(document,"touchend",Cg,{passive:!0})}}
function Dg(a,b){Ag[a]||(Ag[a]=!0,ig(function(){Cg();Ag[a]=!1},b))}
function Cg(){null==B("_lact",window)&&Bg();var a=F();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Eg(){var a=B("_lact",window),b;null==a?b=-1:b=Math.max(F()-a,0);return b}
;var Fg=window,U=Fg.ytcsi&&Fg.ytcsi.now?Fg.ytcsi.now:Fg.performance&&Fg.performance.timing&&Fg.performance.now&&Fg.performance.timing.navigationStart?function(){return Fg.performance.timing.navigationStart+Fg.performance.now()}:function(){return(new Date).getTime()};var Gg=Hf("initial_gel_batch_timeout",1E3),Hg=Math.pow(2,16)-1,Ig=null,Jg=0,Kg=void 0,Lg=0,Mg=0,Ng=0,Og=!0,Pg=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Pg,void 0);var Qg=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Qg,void 0);function Rg(){return new N(function(a){Mf(Lg);Mf(Mg);Mg=0;Kg&&Kg.isReady()?(Sg(a),Pg.clear()):(Tg(),a())})}
function Tg(){S("web_gel_timeout_cap")&&!Mg&&(Mg=T(Rg,6E4));Mf(Lg);var a=Q("LOGGING_BATCH_TIMEOUT",Hf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Og&&(a=Gg);Lg=T(Rg,a)}
function Sg(a){for(var b=Kg,c=Math.round(U()),d=Pg.size,e=u(Pg),f=e.next();!f.done;f=e.next()){var g=u(f.value);f=g.next().value;var h=g.next().value;g=nb({context:Ug(b.f||Vg())});g.events=h;(h=Qg[f])&&Wg(g,f,h);delete Qg[f];Xg(g,c);Yg(b,"log_event",g,{retry:!0,onSuccess:function(){d--;d||a();Jg=Math.round(U()-c)},
onError:function(){d--;d||a()}});
Og=!1}}
function Xg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=Q("EVENT_ID",void 0);if(c){var d=Q("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Hg/2));d++;d>Hg&&(d=1);P("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Ig&&Jg&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Ig,roundtripMs:String(Jg)});Ig=c;Jg=0}}
function Wg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Zg=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Zg,void 0);
function $g(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Eg())};S("log_sequence_info_on_gel_web")&&d.W&&(a=e.context,b=d.W,Zg[b]=b in Zg?Zg[b]+1:0,a.sequence={index:Zg[b],groupKey:b},d.Ib&&delete Zg[d.W]);d=d.ja;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Qg[d.token]=a,a=d.token);d=Pg.get(a)||[];Pg.set(a,d);d.push(e);c&&(Kg=new c);c=Hf("web_logging_max_batch")||100;e=
U();d.length>=c?Rg():10<=e-Ng&&(Tg(),Ng=e)}
;function ah(){var a=bh;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function ch(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;function dh(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?eb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};R(h)}}}return b}
function eh(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fh(a){"?"==a.charAt(0)&&(a=a.substr(1));return dh(a)}
function gh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ac(a,e)+d}
;function hh(a){var b=ih;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(jh(b),kh(b));b.ca_type="image";a&&(b.bid=a);return b}
function jh(a){var b={};b.dt=bd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function kh(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Gc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new Gc(-12245933,-12245933)}k=m;m={};l=new hd;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Sc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=id(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var ih=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return eh(hh(a))},void 0);var lh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function mh(){if(!lh)return null;var a=lh();return"open"in a?a:null}
function nh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var oh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ph="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
qh=!1;
function rh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Wb)[1]||null,e=Yb(a);d&&e?(d=c,c=a.match(Wb),d=d.match(Wb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Yb(c)==e&&(Number(c.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in oh)e=Q(oh[f]),!e||!c&&Yb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Yb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=eh(hh(void 0));return b}
function sh(a){var b=window.location.search,c=Yb(a),d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fh(b),f={};H(ph,function(g){e[g]&&(f[g]=e[g])});
return gh(a,f||{},!1)}
function th(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=uh(a,b);var d=vh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Mf(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.qa&&b.qa.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Da&&0<b.timeout&&(f=T(function(){e||(e=!0,Mf(f),b.Da.call(b.context||y))},b.timeout))}else wh(a,b)}
function wh(a,b){var c=b.format||"JSON";a=uh(a,b);var d=vh(a,b),e=!1,f=xh(a,function(k){if(!e){e=!0;h&&Mf(h);var l=nh(k),m=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)m=yh(a,c,k,b.Hb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.qa&&b.qa.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.V&&0<b.timeout){var g=b.V;var h=T(function(){e||(e=!0,f.abort(),Mf(h),g.call(b.context||y,f))},b.timeout)}return f}
function uh(a,b){b.Kb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.rb;d&&(d[c]&&delete d[c],a=gh(a,d||{},!0));return a}
function vh(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Jb||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=fh(e),pb(e,f),e=b.Ea&&"JSON"==b.Ea?JSON.stringify(e):$b(e));f=e||f&&!jb(f);!qh&&f&&"POST"!=b.method&&(qh=!0,R(Error("AJAX request with postData should use POST")));
return e}
function yh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Cf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zh(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ah(g)})}d&&Bh(e);
return e}
function Bh(a){if(C(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else Bh(a[b])}}
function zh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ah(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function xh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Bf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=mh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=sh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=rh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ch(){for(var a={},b=u(Object.entries(fh(Q("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Dh(){return"INNERTUBE_API_KEY"in xf&&"INNERTUBE_API_VERSION"in xf}
function Vg(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),Sa:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ta:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Va:Q("INNERTUBE_CONTEXT_HL",void 0),Ua:Q("INNERTUBE_CONTEXT_GL",void 0),Wa:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ya:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xa:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ug(a){var b={client:{hl:a.Va,gl:a.Ua,clientName:a.Ta,clientVersion:a.innertubeContextClientVersion,configInfo:a.Sa}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,Ch());return b}
function Eh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Eb||Q("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Db:b=gd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Fh(a){a=Object.assign({},a);delete a.Authorization;var b=gd();if(b){var c=new yd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!xc){xc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));wc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===xc[k]&&(xc[k]=h)}}}c=wc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function Gh(a){a=Fh(a);var b=new yd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Hh(){var a=new pf;(a=a.isAvailable()?new vf(a,"yt.innertube"):null)||(a=new qf("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new lf(a):null;this.g=document.domain||window.location.hostname}
Hh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,F()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(De(b))}catch(f){return}else e=escape(b);Ff(a,e,c,this.g)};
Hh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Dc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Hh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Dc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ih;function Jh(){Ih||(Ih=new Hh);return Ih}
function Kh(a,b,c,d){if(d)return null;d=Jh().get("nextId",!0)||1;var e=Jh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fh(c),requestTime:Math.round(U())};Jh().set("nextId",d+1,86400,!0);Jh().set("requests",e,86400,!0);return d}
function Lh(a){var b=Jh().get("requests",!0)||{};delete b[a];Jh().set("requests",b,86400,!0)}
function Mh(a){var b=Jh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Fh(Eh(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Yg(a,d.method,e,{}));delete b[c]}}Jh().set("requests",b,86400,!0)}}
;function Nh(){}
;var Oh=new Be;var Ph=uc||vc;function Qh(){var a=/WebKit\/([0-9]+)/.exec(Mb);return!!(a&&600<=parseInt(a[1],10))}
function Rh(){var a=/WebKit\/([0-9]+)/.exec(Mb);return!!(a&&602<=parseInt(a[1],10))}
function Sh(a){var b=Mb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Th(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(Th,Error);var Uh={},Vh=(Uh.AUTH_INVALID="No user identifier specified.",Uh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Uh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Uh.MISSING_OBJECT_STORE="Object store not created.",Uh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Uh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Uh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Uh);
function Wh(a,b,c){b=void 0===b?{}:b;c=void 0===c?Vh[a]:c;Th.call(this,c,Object.assign({name:"YtIdbKnownError",Mb:void 0===self.document,Lb:self===self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,Wh.prototype)}
v(Wh,Th);function Xh(a,b){Wh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a.join(),dbName:b});Object.setPrototypeOf(this,Xh.prototype)}
v(Xh,Wh);function Yh(a){Wh.call(this,"MISSING_OBJECT_STORE",{Nb:a},Vh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Yh.prototype)}
v(Yh,Wh);function Zh(a){if(!a)throw Error();throw a;}
function $h(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={M:0};f.M<a.length;f={M:f.M},++f.M)ai(V.resolve(a[f.M]).then(function(g){return function(h){d[g.M]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:$h,e=null!==b&&void 0!==b?b:Zh;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){bi(c,c,d,f,g)}),c.onRejected.push(function(){ci(c,c,e,f,g)})):"FULFILLED"===c.state.status?bi(c,c,d,f,g):"REJECTED"===c.state.status&&ci(c,c,e,f,g)})};
function ai(a,b){a.then(void 0,b)}
function bi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?di(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ci(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?di(a,b,f,d,e):d(f)}catch(g){e(g)}}
function di(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?di(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ei(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function fi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function gi(a){return new N(function(b,c){fi(a,b,c)})}
function W(a){return new V(function(b,c){fi(a,b,c)})}
;function hi(a,b){this.f=a;this.options=b}
n=hi.prototype;n.add=function(a,b,c){return ii(this,[a],"readwrite",function(d){return ji(d,a).add(b,c)})};
n.clear=function(a){return ii(this,[a],"readwrite",function(b){return ji(b,a).clear()})};
n.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return ii(this,[a],"readonly",function(c){return ji(c,a).count(b)})};
function ki(a,b,c){a=a.f.createObjectStore(b,c);return new li(a)}
n["delete"]=function(a,b){return ii(this,[a],"readwrite",function(c){return ji(c,a)["delete"](b)})};
n.get=function(a,b){return ii(this,[a],"readwrite",function(c){return ji(c,a).get(b)})};
function mi(a,b){return ii(a,["databases"],"readwrite",function(c){c=ji(c,"databases");return W(c.f.put(b,void 0))})}
function ii(a,b,c,d){a=a.f.transaction(b,void 0===c?"readonly":c);a=new ni(a);return oi(a,d)}
function li(a){this.f=a}
n=li.prototype;n.add=function(a,b){return W(this.f.add(a,b))};
n.clear=function(){return W(this.f.clear()).then(function(){})};
n.count=function(a){return W(this.f.count(a))};
n["delete"]=function(a){return W(this.f["delete"](a))};
n.get=function(a){return W(this.f.get(a))};
n.index=function(a){return new pi(this.f.index(a))};
n.getName=function(){return this.f.name};
function ni(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new N(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)"QuotaExceededError"===e.name?Cf(new Wh("QUOTA_EXCEEDED")):"UnknownError"===e.name&&Cf(new Wh("QUOTA_MAYBE_EXCEEDED")),d(e);else if(!b.aborted){e=Xh;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g,b.f.db.name);Cf(e);d(e)}})})}
function oi(a,b){var c=new N(function(d,e){ai(b(a).then(function(f){try{a.commit(),d(f)}catch(g){e(g)}}),e)});
return Se([c,a.done]).then(function(d){return u(d).next().value})}
ni.prototype.abort=function(){this.f.abort();this.aborted=!0;var a=new Wh("EXPLICIT_ABORT");a.sampleWeight=0;throw a;};
ni.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function ji(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new li(c),a.g.set(c,d));return d}
function pi(a){this.f=a}
pi.prototype.count=function(a){return W(this.f.count(a))};
pi.prototype.get=function(a){return W(this.f.get(a))};
function qi(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ri(a).then(function(d){return ei(d,c)})}
function si(a,b){this.request=a;this.f=b}
function ri(a){return W(a).then(function(b){return null===b?null:new si(a,b)})}
si.prototype["delete"]=function(){return W(this.f["delete"]()).then(function(){})};
si.prototype.getValue=function(){return this.f.value};
si.prototype.update=function(a){return W(this.f.update(a))};function ti(a,b,c){function d(){p||(p=new hi(f.result,{closed:m}));return p}
var e=ni,f=self.indexedDB.open(a,b),g=c.blocked,h=c.blocking,k=c.qb,l=c.upgrade,m=c.closed,p;l&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var t=d(),A=new e(f.transaction);l(t,r.oldVersion,r.newVersion,A)});
g&&f.addEventListener("blocked",function(){g()});
return gi(f).then(function(r){h&&r.addEventListener("versionchange",function(){h(d())});
k&&r.addEventListener("close",function(){k()});
return d()})}
function ui(a,b,c){c=void 0===c?{}:c;return ti(a,b,c)}
function vi(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return gi(c).then(function(){})}
;var wi,xi,yi=["getAll","getAllKeys","getKey","openKeyCursor"],zi=["getAll","getAllKeys","getKey","openKeyCursor"];function Ai(){return K(this,function b(){var c,d;return x(b,function(e){switch(e.f){case 1:if(Ph&&Qh()&&!Rh()&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||fc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}ra(e);return w(e,Ue(ui("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.g,!d)return e["return"](!1);case 3:ta(e);if(d)try{d.close()}catch(f){}ua(e);break;case 2:return sa(e),e["return"](!1);case 4:return e["return"](!0)}})})}
function Bi(){return void 0!==wi?Oe(wi):new N(function(a){Ai().then(function(b){wi=b;a(b)})})}
function Ci(){return void 0!==xi?Oe(xi):Bi().then(function(a){if(!a)return!1;var b=u(yi);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(zi);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return xi=a})}
;function Di(a,b){for(var c=u(Object.keys(b.Ba)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function Ei(a,b){this.name=a;this.options=b;this.g=!1}
n=Ei.prototype;n.ra=function(a,b,c){c=void 0===c?{}:c;return ui(a,b,c)};
n["delete"]=function(a){a=void 0===a?{}:a;return vi(this.name,a)};
n.va=function(){};
n.wa=function(){};
n.open=function(){var a=this;if(!this.f){var b=function(){a.f===e&&(a.f=void 0,a.wa(b))},c={blocking:function(f){f.close()},
closed:b,qb:b,upgrade:this.options.upgrade},d=function(){return Ue(a.ra(a.name,a.options.version,c).then(function(f){if(tc){var g=Di(f,a.options);if(void 0!==g){if(tc&&!a.g)return a.g=!0,a["delete"]().then(function(){return d()});
throw new Yh(g);}}return f}),function(f){if(f instanceof DOMException?"VersionError"===f.name:"DOMError"in self&&f instanceof DOMError?"VersionError"===f.name:f instanceof Object&&"message"in f&&"An attempt was made to open a database using a lower version than the existing version."===f.message)return a.ra(a.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0}));
b();throw f;})};
var e=d();this.va(b);this.f=e}return this.f};function Fi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
;var Gi=new Ei("YtIdbMeta",{Ba:{databases:!0},upgrade:function(a,b){1>b&&ki(a,"databases",{keyPath:"actualName"})}});
function Hi(a){return Gi.open().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn||a.clearDataOnAuthChange!==c.clearDataOnAuthChange:1)return mi(b,a)})})}
function Ii(a){return Gi.open().then(function(b){return b["delete"]("databases",a)})}
;function Ji(a){return{actualName:a,publicName:a,userIdentifier:void 0,signedIn:!1}}
function Ki(a){return Ji(a);throw new Wh("AUTH_INVALID");}
function Li(a,b,c){Fi(a);var d;try{b?d=Ji(a):d=Ki(a)}catch(e){return Pe(e)}d.clearDataOnAuthChange=!1;return Ue(Hi(d).then(function(){return c(d)}),function(e){return Ue(Ii(d.actualName),function(){}).then(function(){return Pe(e)})})}
function Mi(){return Bi().then(function(a){if(!a)throw new Wh("IDB_NOT_SUPPORTED");})}
function Ni(a,b,c){c=void 0===c?{}:c;return Mi().then(function(){return Li(a,!1,function(d){return ui(d.actualName,b,c)})})}
function Oi(a,b,c){c=void 0===c?{}:c;return Mi().then(function(){return Li(a,!0,function(d){return ui(d.actualName,b,c)})})}
function Pi(a,b){b=void 0===b?{}:b;Fi(a);var c;return Mi().then(function(){c=Ki(a);return vi(c.actualName,b)}).then(function(){return Ii(c.actualName)})}
function Qi(a,b){b=void 0===b?{}:b;Fi(a);return Mi().then(function(){return vi(a,b)}).then(function(){return Ii(a)})}
;function Ri(a,b){Ei.call(this,a,b);this.options=b;Fi(a)}
v(Ri,Ei);Ri.prototype.ra=function(a,b,c){c=void 0===c?{}:c;return(this.options.pb?Oi:Ni)(a,b,c)};
Ri.prototype.va=function(a){Oh.f.add("authchanged",a,!0,void 0,void 0)};
Ri.prototype.wa=function(a){Oh.f.remove("authchanged",a,void 0,void 0)};
Ri.prototype["delete"]=function(a){a=void 0===a?{}:a;return(this.options.pb?Qi:Pi)(this.name,a)};function Si(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(Si,V);Si.reject=V.reject;Si.resolve=V.resolve;Si.all=V.all;var Ti={},Ui=function(a,b){var c;return function(){c||(c=new Ri(a,b));return c}}("LogsDataBase",{Ba:(Ti.LogsRequestsStore=!0,Ti.sapisid=!0,Ti),
upgrade:function(a,b){1>b&&(ki(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),ki(a,"sapisid"))},
version:1});function Vi(a){return K(this,function c(){var d,e,f;return x(c,function(g){if(1==g.f)return w(g,Wi(),2);if(3!=g.f)return d=g.g,w(g,Ui().open(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Xi(){return K(this,function b(){var c,d,e,f,g,h;return x(b,function(k){switch(k.f){case 1:return w(k,Wi(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,U()],f=IDBKeyRange.bound(d,e),w(k,Ui().open(),3);case 3:return g=k.g,h=void 0,w(k,ii(g,["LogsRequestsStore"],"readwrite",function(l){return qi(ji(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.getValue()&&(h=m.getValue(),h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Yi(a){return K(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Ui().open(),2);d=e.g;return e["return"](ii(d,["LogsRequestsStore"],"readwrite",function(f){var g=ji(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function Zi(a){return K(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Ui().open(),2);d=e.g;return e["return"](ii(d,["LogsRequestsStore"],"readwrite",function(f){var g=ji(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.f.put(h,void 0)).then(function(){return h})):Si.resolve(void 0)})}))})})}
function $i(a){return K(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Ui().open(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Wi(){return K(this,function b(){var c;return x(b,function(d){if(1==d.f){Nh.f||(Nh.f=new Nh);var e={};var f=gd([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in xf||(e["X-Origin"]=window.location.origin),S("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in xf&&(e["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));e=Oe(e);return w(d,e,2)}c=d.g;return d["return"](Gh(c))})})}
;var aj=Hf("network_polling_interval",3E4);function bj(){Be.call(this);this.m=0;this.h=cj();dj(this);ej(this)}
v(bj,Be);function fj(){bj.f||(bj.f=new bj);return bj.f}
function gj(a){a.h!==cj()&&R(Error("NetworkStatusManager isOnline does not match window status"));return a.h}
function hj(a){var b=ij,c=jj;(new N(function(d){a.i=d})).then(function(){b();
c&&(a.j=c)});
kj(a)}
function cj(){var a=window.navigator.onLine;return void 0===a?!0:a}
function ej(a){window.addEventListener("online",function(){a.h=!0;a.i&&a.i()})}
function dj(a){window.addEventListener("offline",function(){a.h=!1;a.j&&a.j()})}
function kj(a){a.m||(lj(a),cj()&&a.i&&a.i())}
function lj(a){a.m=gg(function(){cj()?(!1===a.h&&R(Error("NetworkStatusManager missed online event.")),a.h=!0,a.i&&a.i()):(!0===a.h&&R(Error("NetworkStatusManager missed offline event.")),a.h=!1,a.j&&a.j());lj(a)},aj)}
;var mj=Hf("networkless_throttle_timeout")||100,nj=Hf("networkless_retry_attempts")||1,oj=0;function pj(a,b){b=void 0===b?{}:b;qj().then(function(c){var d=gj(fj());if(!c||S("networkless_bypass_write")||d&&S("vss_networkless_bypass_write"))wh(a,b);else{var e={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};Vi(e).then(function(f){e.id=f;f=fj();gj(f)||S("networkless_always_online")?rj(e):hj(f)})["catch"](function(f){rj(e);
R(f)})}})}
function ij(){var a=this;oj||(oj=ig(function(){return K(a,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Xi(),2);if(3!=e.f)return d=e.g,d?w(e,rj(d),3):(jj(),e["return"]());oj=0;ij();e.f=0})})},mj))}
function jj(){kg(oj);oj=0}
function rj(a){return K(this,function c(){var d;return x(c,function(e){switch(e.f){case 1:if(!a.id){e.K(2);break}return w(e,Yi(a.id),3);case 3:(d=e.g)?a=d:Cf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.K(4);break}Cf(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.K(5);break}return w(e,$i(a.id),5);case 5:return e["return"]();case 4:f=a=sj(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.C)||void 0===h?0:h.requestTimeMs)f.options.C.requestTimeMs=Math.round(U());(a=f)&&wh(a.url,a.options);e.f=0}})})}
function sj(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return K(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<nj?w(k,Zi(a.id),6):w(k,$i(a.id),2):k.K(2);2!=k.f&&hj(fj());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return K(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?w(k,$i(a.id),2):k.K(2);d(e,f);k.f=0})})};
return a}
function qj(){return K(this,function b(){return x(b,function(c){return S("networkless_logging")?(2===Hf("networkless_ytidb_version")&&Ci().then(function(d){return d}),c["return"](Bi())):c["return"](!1)})})}
;function tj(a){var b=this;this.f=null;a?this.f=a:Dh()&&(this.f=Vg());gg(function(){Mh(b)},5E3)}
tj.prototype.isReady=function(){!this.f&&Dh()&&(this.f=Vg());return!!this.f};
function Yg(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Cf(new Th("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Th("innertube xhrclient not ready",b,c,d);R(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",C:c,Ea:"JSON",V:function(){d.V()},
Da:d.V,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
Ca:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
Ob:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Wa)&&(g=e);var h=a.f.Ya||!1,k=Eh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Xa&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=gh(""+g+e,l||{},!0);qj().then(function(p){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!p||!S("networkless_gel"))var r=Kh(b,
c,k,h);if(r){var t=f.onSuccess,A=f.Ca;f.onSuccess=function(E,X){Lh(r);t(E,X)};
c.Ca=function(E,X){Lh(r);A(E,X)}}}try{S("use_fetch_for_op_xhr")?th(m,f):S("networkless_gel")&&d.retry?(f.method="POST",pj(m,f)):(f.method="POST",f.C||(f.C={}),wh(m,f))}catch(E){if("InvalidAccessError"==E.name)r&&(Lh(r),r=0),Cf(Error("An extension is blocking network request."));
else throw E;}r&&gg(function(){Mh(a)},5E3)})}
;function uj(a,b,c){c=void 0===c?{}:c;var d=tj;Q("ytLoggingEventsDefaultDisabled",!1)&&tj==tj&&(d=null);$g(a,b,d,c)}
;var vj=[{za:function(a){return"Cannot read property '"+a.key+"'"},
sa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{za:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function wj(){this.f=[];this.g=[]}
var xj;var yj=new O;var zj=new Set,Aj=0,Bj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Cj(a){Dj(a,"WARNING")}
function Dj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=Aj)&&0!==a.sampleWeight)){var h=yc(a);g=h.message||"Unknown Error";d=h.name||"UnknownError";e=h.lineNumber||"Not available";f=h.fileName||"Not available";h=h.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var r=c,t=0;t<m.length&&!(m[t]&&(k+=Ej(t,m[t],p,r),500<k));t++);else if("object"===typeof m)for(r in r=void 0,t=c,m){if(m[r]&&
(k+=Ej(r,m[r],p,t),500<k))break}else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,r=String(JSON.stringify(m[l])).substr(0,500),c[k]=r,p+=k.length+r.length,500<p))break}else c.params=String(JSON.stringify(m)).substr(0,500);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=
navigator.vendor);c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(vj);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.sa[c.name])for(e=u(g.sa[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.za(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);
if(!(zj.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){yj.R("handleError",c);if(S("kevlar_gel_error_routing")){a=b;a:{g=u(Bj);for(d=g.next();!d.done;d=g.next())if(Sh(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){g={stackTrace:c.stack};c.fileName&&(g.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(g.lineNumber=Number(d[0]),
g.columnNumber=Number(d[1])):g.lineNumber=Number(d[0]));d=c.message;e=c.name;xj||(xj=new wj);f=xj;a:{h=u(f.g);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.f)){f=l.weight;break a}f=u(f.f);for(h=f.next();!h.done;h=f.next())if(h=h.value,h.Ka(c)){f=h.weight;break a}f=1}d={level:"ERROR_LEVEL_UNKNOWN",message:d,errorClassName:e,sampleWeight:f};"ERROR"===a?d.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:g};g={pageUrl:window.location.href};
Q("FEXP_EXPERIMENTS")&&(g.experimentIds=Q("FEXP_EXPERIMENTS"));g.kvPairs=[];if(e=c.params)for(f=u(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,g.kvPairs.push({key:"client."+h,value:String(e[h])});e=Q("SERVER_NAME",void 0);f=Q("SERVER_VERSION",void 0);e&&f&&(g.kvPairs.push({key:"server.name",value:e}),g.kvPairs.push({key:"server.version",value:f}));uj("clientError",{errorMetadata:g,stackTrace:a,logMessage:d});Rg()}}if(!S("suppress_error_204_logging")){a=c.params||{};b={rb:{a:"logerror",
t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},C:{url:Q("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.C){c.stack&&(b.C.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.C["client."+d]=a[d];if(a=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.C[d]=a[d];a=Q("SERVER_NAME",void 0);g=
Q("SERVER_VERSION",void 0);a&&g&&(b.C["server.name"]=a,b.C["server.version"]=g)}wh(Q("ECATCHER_REPORT_HOST","")+"/error_204",b)}zj.add(c.message);Aj++}}}
function Ej(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Fj(){this.g=!1;this.f=null}
Fj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Zf(b,function(){g.g=!1;window.botguard?Gj(g,c,d,f):(dg(b),Cj(new Th("Unable to load Botguard","from "+b)))},e)):a&&(e=Lc(document,"SCRIPT"),e.textContent=a,e.nonce=Ea(),document.head.appendChild(e),document.head.removeChild(e),window.botguard?Gj(this,c,d,f):Cj(Error("Unable to load Botguard from JS")))};
function Gj(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ia)}catch(e){Cj(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Cj(e)}c&&c(b)}}
Fj.prototype.dispose=function(){this.f=null};var Hj=new Fj;function Ij(){return!!Hj.f}
function Jj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Hj.f?Hj.f.invoke(void 0,void 0,a):null}
;var Kj=F().toString();
function Lj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=F();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Kj)for(a=1,b=0;b<Kj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Kj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Mj=y.ytLoggingDocDocumentNonce_||Lj();z("ytLoggingDocDocumentNonce_",Mj,void 0);var Nj=1;function Oj(a){this.f=a}
Oj.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
Oj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Oj.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function Pj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Qj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Rj(a){return Q(Qj(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Rj,void 0);function Sj(){var a=Rj(0),b;a?b=new Oj({veType:a,youtubeData:void 0}):b=null;return b}
function Tj(){var a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function Uj(a){a=void 0===a?0:a;var b=Q(Pj(a));if(!b&&!Q("USE_CSN_FALLBACK",!0))return null;b||0!=a||(S("kevlar_client_side_screens")||S("c3_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Uj,void 0);function Vj(a,b,c){var d=Tj();(c=Uj(c))&&delete d[c];b&&(d[a]=b)}
function Wj(a){return Tj()[a]}
z("yt_logging_screen.getCttAuthInfo",Wj,void 0);function Xj(a,b,c,d){c=void 0===c?0:c;if(a!==Q(Pj(c))||b!==Q(Qj(c)))if(Vj(a,d,c),P(Pj(c),a),P(Qj(c),b),0==c||S("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&$g("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Mj,clientScreenNonce:a},tj)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Xj,void 0);function Yj(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=Xa(f,g)||!g&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match(Wb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Uj()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Vb(d).toString(36),e=e?$b(e):"",Ff(b,e,k||5))}else k=b,e="ST-"+Vb(d).toString(36),k=k?$b(k):"",Ff(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=ac(a,l)+m;a=a instanceof I?a:Kb(a);c.href=Gb(a)}return!0}
;function Zj(a,b){this.version=a;this.args=b}
;function ak(a,b){this.topic=a;this.f=b}
ak.prototype.toString=function(){return this.topic};var bk=B("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.U;O.prototype.publish=O.prototype.R;O.prototype.clear=O.prototype.clear;z("ytPubsub2Pubsub2Instance",bk,void 0);var ck=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",ck,void 0);var dk=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",dk,void 0);var ek=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",ek,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function fk(a,b){var c=gk();c&&c.publish.call(c,a.toString(),a,b)}
function hk(a){var b=ik,c=gk();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ck[d])try{if(f&&b instanceof ak&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.L){var l=new h;h.L=l.version}var m=h.L}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){R(p)}},ek[b.toString()]?B("yt.scheduler.instance")?ig(g):T(g,0):g())});
ck[d]=!0;dk[b.toString()]||(dk[b.toString()]=[]);dk[b.toString()].push(d);return d}
function jk(){var a=kk,b=hk(function(c){a.apply(void 0,arguments);lk(b)});
return b}
function lk(a){var b=gk();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete ck[c]}))}
function gk(){return B("ytPubsub2Pubsub2Instance")}
;function mk(a){Zj.call(this,1,arguments);this.csn=a}
v(mk,Zj);var ik=new ak("screen-created",mk),nk=[],ok=0;function pk(a,b,c){var d=S("use_default_events_client")?void 0:tj;b={csn:a,parentVe:b.getAsJson(),childVes:Za(c,function(f){return f.getAsJson()})};
c=u(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&Cj(Error("Child VE logged with no data"));c={ja:Wj(a),W:a};"UNDEFINED_CSN"==a?qk("visualElementAttached",b,c):d?$g("visualElementAttached",b,d,c):uj("visualElementAttached",b,c)}
function qk(a,b,c){nk.push({payloadName:a,payload:b,options:c});ok||(ok=jk())}
function kk(a){if(nk){for(var b=u(nk),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,$g(c.payloadName,c.payload,null,c.options));nk.length=0}ok=0}
;function rk(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
rk.prototype.clone=function(){var a=new rk,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=mb(c):a[b]=c}return a};function sk(){M.call(this);this.f=[]}
v(sk,M);sk.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.Ka)}M.prototype.o.call(this)};var tk=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function uk(a){a=a||"";if(window.spf){var b=a.match(tk);spf.style.load(a,b?b[1]:"",void 0)}else vk(a)}
function vk(a){var b=wk(a),c=document.getElementById(b),d=c&&Kf(c,"loaded");d||c&&!d||(c=xk(a,b,function(){Kf(c,"loaded")||(If(c),Uf(b),T(Ra(Vf,b),0))}))}
function xk(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Zc(a);d.rel="stylesheet";d.href=ub(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function wk(a){var b=Lc(document,"A");Sb(b,new I(a,Fb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function yk(a,b,c,d){M.call(this);var e=this;this.m=this.ba=a;this.G=b;this.u=!1;this.api={};this.Z=this.F=null;this.H=new O;Tc(this,Ra(Uc,this.H));this.j={};this.O=this.aa=this.i=this.ia=this.f=null;this.N=!1;this.l=this.D=null;this.ca={};this.Ha=["onReady"];this.ha=null;this.ta=NaN;this.X={};this.h=d;zk(this);this.da("WATCH_LATER_VIDEO_ADDED",this.ab.bind(this));this.da("WATCH_LATER_VIDEO_REMOVED",this.bb.bind(this));this.da("onAdAnnounce",this.Ja.bind(this));this.Ia=new sk(this);Tc(this,Ra(Uc,
this.Ia));this.Y=0;c?this.Y=T(function(){e.loadNewVideoConfig(c)},0):d&&(Ak(this),Bk(this))}
v(yk,M);n=yk.prototype;n.getId=function(){return this.G};
n.loadNewVideoConfig=function(a){if(!this.g){this.Y&&(Mf(this.Y),this.Y=0);a instanceof rk||(a=new rk(a));this.ia=a;this.f=a.clone();Ak(this);this.aa||(this.aa=Ck(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=ad(Number(a)||String(a));if(a=this.f.attrs.height)this.m.style.height=ad(Number(a)||String(a));Bk(this);this.u&&Dk(this)}};
function Ak(a){var b;a.h?b=a.h.rootElementId:b=a.f.attrs.id;a.i=b||a.i;"video-player"==a.i&&(a.i=a.G,a.h?a.h.rootElementId=a.G:a.f.attrs.id=a.G);a.m.id==a.i&&(a.i+="-player",a.h?a.h.rootElementId=a.i:a.f.attrs.id=a.i)}
n.Oa=function(){return this.ia};
function Dk(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Ek(a){var b=!0,c=Fk(a);c&&a.f&&(a=Gk(a),b=Kf(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Bk(a){if(!a.g&&!a.N){var b=Ek(a);if(b&&"html5"==(Fk(a)?"html5":null))a.O="html5",a.u||Hk(a);else if(Ik(a),a.O="html5",b&&a.l)a.ba.appendChild(a.l),Hk(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.D=function(){c=!0;var d=Jk(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.ba,e,a.h);Hk(a)};
a.N=!0;b?a.D():(Zf(Gk(a),a.D),(b=a.h?a.h.cssUrl:a.f.assets.css)&&uk(b),Kk(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Fk(a){var b=Hc(a.i);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.i));return b}
function Hk(a){if(!a.g){var b=Fk(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,!Jk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Lk(a)):a.ta=T(function(){Hk(a)},50)}}
function Lk(a){zk(a);a.u=!0;var b=Fk(a);b.addEventListener&&(a.F=Mk(a,b,"addEventListener"));b.removeEventListener&&(a.Z=Mk(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Mk(a,b,e))}for(var f in a.j)a.F(f,a.j[f]);Dk(a);a.aa&&a.aa(a.api);a.H.R("onReady",a.api)}
function Mk(a,b,c){var d=b[c];return function(){try{return a.ha=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ha=e,Cf(e))}}}
function zk(a){a.u=!1;if(a.Z)for(var b in a.j)a.Z(b,a.j[b]);for(var c in a.X)Mf(parseInt(c,10));a.X={};a.F=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.da.bind(a);a.api.removeEventListener=a.gb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Pa.bind(a);a.api.getPlayerType=a.Qa.bind(a);a.api.getCurrentVideoConfig=a.Oa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Za.bind(a)}
n.Za=function(){return this.u};
n.da=function(a,b){var c=this,d=Ck(this,b);if(d){if(!(0<=Xa(this.Ha,a)||this.j[a])){var e=Nk(this,a);this.F&&this.F(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&T(function(){d(c.api)},0)}};
n.gb=function(a,b){if(!this.g){var c=Ck(this,b);c&&ef(this.H,a,c)}};
function Ck(a,b){var c=b;if("string"==typeof b){if(a.ca[b])return a.ca[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.ca[b]=c}return c?c:null}
function Nk(a,b){var c="ytPlayer"+b+a.G;a.j[b]=c;y[c]=function(d){var e=T(function(){if(!a.g){a.H.R(b,d);var f=a.X,g=String(e);g in f&&delete f[g]}},0);
kb(a.X,String(e))};
return c}
n.Ja=function(a){Uf("a11y-announce",a)};
n.ab=function(a){Uf("WATCH_LATER_VIDEO_ADDED",a)};
n.bb=function(a){Uf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Qa=function(){return this.O||(Fk(this)?"html5":null)};
n.Pa=function(){return this.ha};
function Ik(a){a.cancel();zk(a);a.O=null;a.f&&(a.f.loaded=!1);var b=Fk(a);b&&(Ek(a)||!Kk(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.ba;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.D){var a=Gk(this);eg(a,this.D)}Mf(this.ta);this.N=!1};
n.o=function(){Ik(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){R(b)}this.ca=null;for(var a in this.j)y[this.j[a]]=null;this.ia=this.f=this.api=null;delete this.ba;delete this.m;M.prototype.o.call(this)};
function Kk(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Gk(a){return a.h?a.h.jsUrl:a.f.assets.js}
function Jk(a,b){if(a.h)var c=a.h.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==dh(c||"")[b]}
;var Ok={},Pk="player_uid_"+(1E9*Math.random()>>>0);
function Qk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Hc(d):e=d;d=e;e=Pk+"_"+Ma(d);var f=Ok[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new yk(d,e,a,b);Ok[e]=f;Uf("player-added",f.api);Tc(f,Ra(Rk,f));return f.api}
function Rk(a){delete Ok[a.getId()]}
;function Sk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Tk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Uk(a)}
function Uk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Vk(a,b,c,d){if(C(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Wk(a){a=void 0===a?!1:a;M.call(this);this.f=new O(a);Tc(this,Ra(Uc,this.f))}
G(Wk,M);Wk.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Wk.prototype.j=function(a,b){this.g||this.f.R.apply(this.f,arguments)};function Xk(a,b,c){Wk.call(this);this.h=a;this.i=b;this.l=c}
v(Xk,Wk);function Yk(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(De(a),d.i))}}
Xk.prototype.o=function(){this.i=this.h=null;Wk.prototype.o.call(this)};function Zk(a){M.call(this);this.f=a;this.f.subscribe("command",this.Fa,this);this.h={};this.j=!1}
v(Zk,M);n=Zk.prototype;n.start=function(){this.j||this.g||(this.j=!0,Yk(this.f,"RECEIVING"))};
n.Fa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=D(this.ib,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&$k(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=al(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=bl(a,c))&&this.j&&!this.g&&Yk(this.f,a,c))}}};
n.ib=function(a,b){this.j&&!this.g&&Yk(this.f,a,this.la(a,b))};
n.la=function(a,b){if(null!=b)return{value:b}};
function $k(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||ef(a.f,"command",this.Fa,this);this.f=null;for(var b in this.h)$k(this,b);M.prototype.o.call(this)};function cl(a,b){Zk.call(this,b);this.i=a;this.start()}
v(cl,Zk);cl.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
cl.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function al(a,b){switch(a){case "loadVideoById":return b=Uk(b),[b];case "cueVideoById":return b=Uk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Vk(b),[b];case "cuePlaylist":return b=Vk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function bl(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
cl.prototype.la=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Zk.prototype.la.call(this,a,b)};
cl.prototype.o=function(){Zk.prototype.o.call(this);delete this.i};function dl(a,b,c){M.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Xa(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(dl,M);dl.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Cf(e)}}};
dl.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function el(){var a=this.g=new dl(!!Q("WIDGET_ID_ENFORCE")),b=D(this.fb,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=el.prototype;n.fb=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,fl(this,a)),this.j[a]=!0)):this.Aa(a,b,c)};
n.Aa=function(){};
function fl(a,b){return D(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Na=function(){this.l=!0;this.sendMessage("initialDelivery",this.ma());this.sendMessage("onReady");H(this.i,this.Ga,this);this.i=[]};
n.ma=function(){return null};
function gl(a,b){a.sendMessage("infoDelivery",b)}
n.Ga=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.Ga({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function hl(a){el.call(this);this.f=a;this.h=[];this.addEventListener("onReady",D(this.cb,this));this.addEventListener("onVideoProgress",D(this.mb,this));this.addEventListener("onVolumeChange",D(this.nb,this));this.addEventListener("onApiChange",D(this.hb,this));this.addEventListener("onPlaybackQualityChange",D(this.jb,this));this.addEventListener("onPlaybackRateChange",D(this.kb,this));this.addEventListener("onStateChange",D(this.lb,this));this.addEventListener("onWebglSettingsChanged",D(this.ob,
this))}
v(hl,el);n=hl.prototype;n.Aa=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Sk(a)){var d=b;if(C(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Uk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Tk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Vk.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Sk(a)&&gl(this,this.ma())}};
n.cb=function(){var a=D(this.Na,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ma=function(){if(!this.f)return null;var a=this.f.getApiInterface();bb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=F()/1E3;return b};
n.lb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());gl(this,a)};
n.jb=function(a){gl(this,{playbackQuality:a})};
n.kb=function(a){gl(this,{playbackRate:a})};
n.hb=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.nb=function(){gl(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.mb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());gl(this,a)};
n.ob=function(){var a={sphericalProperties:this.f.getSphericalProperties()};gl(this,a)};
n.dispose=function(){el.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function il(a,b,c){M.call(this);this.f=a;this.i=c;this.j=wg(window,"message",D(this.l,this));this.h=new Xk(this,a,b);Tc(this,Ra(Uc,this.h))}
v(il,M);il.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
il.prototype.o=function(){xg(this.j);this.f=null;M.prototype.o.call(this)};function jl(){var a=mb(kl),b;return Ue(new N(function(c,d){a.onSuccess=function(e){nh(e)?c(e):d(new ll("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ll("Unknown request error","net.unknown",e))};
a.V=function(e){d(new ll("Request timed out","net.timeout",e))};
b=wh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ve&&b.abort();
return Pe(c)})}
function ll(a,b,c){Ua.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(ll,Ua);function ml(){this.g=0;this.f=null}
ml.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Je(a)?a:nl(a)):2===this.g&&b?(a=b.call(c,this.f),Je(a)?a:ol(a)):this};
ml.prototype.getValue=function(){return this.f};
ml.prototype.$goog_Thenable=!0;function ol(a){var b=new ml;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function nl(a){var b=new ml;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function pl(a){Ua.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ql;this.isTimeout=a instanceof ll&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ve}
v(pl,Ua);pl.prototype.name="BiscottiError";function ql(){Ua.call(this,"Biscotti ID is missing from server")}
v(ql,Ua);ql.prototype.name="BiscottiMissingError";var kl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},rl=null;
function bh(){if(S("disable_biscotti_fetch_on_html5_clients"))return Pe(Error("Fetching biscotti ID is disabled."));if(S("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Dc.get("CONSENT","").startsWith("YES+"))return Pe(Error("User has not consented - not fetching biscotti id."));if("1"===gb(yf(),"args","privembed"))return Pe(Error("Biscotti ID is not available in private embed mode"));rl||(rl=Ue(jl().then(sl),function(a){return tl(2,a)}));
return rl}
function sl(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ql;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ql;a=a.id;ch(a);rl=nl(a);ul(18E5,2);return a}
function tl(a,b){var c=new pl(b);ch("");rl=ol(c);0<a&&ul(12E4,a-1);throw c;}
function ul(a,b){T(function(){Ue(jl().then(sl,function(c){return tl(b,c)}),Ia)},a)}
function vl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():bh()}catch(b){return Pe(b)}}
;function wl(a){if("1"!==gb(yf(),"args","privembed")){a&&ah();try{vl().then(function(){},function(){}),T(wl,18E5)}catch(b){R(b)}}}
;var Y=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function xl(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Dc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=xl.prototype;n.get=function(a,b){yl(a);zl(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){yl(a);zl(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){yl(a);zl(a);delete Y[a]};
n.save=function(){Ff(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function zl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function yl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Al(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(xl);function Bl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Cl(a)||c.some(function(e){return!Cl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Dl(a,d.value);return a}
function Dl(a,b){for(var c in b)if(Cl(b[c])){if(c in a&&!Cl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Dl(a[c],b[c])}else if(El(b[c])){if(c in a&&!El(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Fl(a[c],b[c])}else a[c]=b[c];return a}
function Fl(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Cl(d)?a.push(Dl({},d)):El(d)?a.push(Fl([],d)):a.push(d);return a}
function Cl(a){return"object"===typeof a&&!Array.isArray(a)}
function El(a){return"object"===typeof a&&Array.isArray(a)}
;var Gl={},Hl=0;
function Il(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Sh("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.S?a.P():String(a),Jb.test(a)?a=new I(a,Fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Ib))&&Hb.test(b[1])?new I(a,Fb):null));a=Gb(a||Lb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Pb)){b="object"==typeof a;var f=null;b&&a.na&&(f=a.ka());a=Rb(wb(b&&a.S?a.P():String(a)),f)}a instanceof Pb&&a.constructor===Pb?a=a.f:(Ka(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(De(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Kc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)xh(a,b,"POST",e,d);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)xh(a,b,"GET","",d);else{b:{try{var g=new Va({url:a});if(g.h&&g.g||g.i){var h=Xb(a.match(Wb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(bc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var t=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;t=decodeURIComponent(a.substr(r,A-r).replace(/\+/g," "))}k="1"!==t}f=!k;break b}}catch(E){}f=!1}f?Jl(a)?(b&&b(),f=!0):f=!1:f=!1;f||Kl(a,b)}}
function Jl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Kl(a,b){var c=new Image,d=""+Hl++;Gl[d]=c;c.onload=c.onerror=function(){b&&Gl[d]&&b();delete Gl[d]};
c.src=a}
;function Ll(a,b){Zj.call(this,1,arguments)}
v(Ll,Zj);function Ml(a,b){Zj.call(this,1,arguments)}
v(Ml,Zj);var Nl=new ak("aft-recorded",Ll),Ol=new ak("timing-sent",Ml);var Pl=window;function Ql(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Rl=Pl.performance||Pl.mozPerformance||Pl.msPerformance||Pl.webkitPerformance||new Ql;var Sl=!1;D(Rl.clearResourceTimings||Rl.webkitClearResourceTimings||Rl.mozClearResourceTimings||Rl.msClearResourceTimings||Rl.oClearResourceTimings||Ia,Rl);function Tl(a){var b=Ul(a);if(b.aft)return b.aft;a=Q((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Vl(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Sa("ytcsi."+(a||"")+"data_",b));return b}
function Wl(a){a=Vl(a);a.info||(a.info={});return a.info}
function Ul(a){a=Vl(a);a.tick||(a.tick={});return a.tick}
function Xl(a){var b=Vl(a).nonce;b||(b=Lj(),Vl(a).nonce=b);return b}
function Yl(a){var b=Ul(a||""),c=Tl(a);c&&!Sl&&(fk(Nl,new Ll(Math.round(c-b._start),a)),Sl=!0)}
;function Zl(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function $l(a){a=a||"";var b=B("ytcsi.reference");b||(Zl(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Zl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var am=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",am,void 0);function bm(){this.f=0}
function cm(){bm.f||(bm.f=new bm);return bm.f}
bm.prototype.tick=function(a,b,c){dm(this,"tick_"+a+"_"+b)||uj("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
bm.prototype.info=function(a,b){var c=Object.keys(a).join("");dm(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,uj("latencyActionInfo",c))};
bm.prototype.span=function(a,b){var c=Object.keys(a).join("");dm(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,uj("latencyActionSpan",a))};
function dm(a,b){am[b]=am[b]||{count:0};var c=am[b];c.count++;c.time=U();a.f||(a.f=gg(function(){var d=U(),e;for(e in am)am[e]&&6E4<d-am[e].time&&delete am[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Th("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Cj(c)),!0):!1}
;var Z={},em=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.aq="tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",
Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),fm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
gm={},hm=(gm.ccs="CANARY_STATE_",gm.mver="MEASUREMENT_VERSION_",gm.pis="PLAYER_INITIALIZED_STATE_",gm.yt_pt="LATENCY_PLAYER_",gm.pa="LATENCY_ACTION_",gm.yt_vst="VIDEO_STREAM_TYPE_",gm),im="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function jm(a){return!!Q("FORCE_CSI_ON_GEL",!1)||S("csi_on_gel")||!!Vl(a).useGel}
function km(a){a=Vl(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function lm(a,b,c){if(null!==b)if(Wl(c)[a]=b,jm(c)){var d=b;b=km(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in em){b=em[a];0<=Xa(fm,b)&&(d=!!d);a in hm&&"string"===typeof d&&(d=hm[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Bl({},e)}else 0<=Xa(im,a)||Cj(new Th("Unknown label logged with GEL CSI",
a)),f=void 0;f&&jm(c)&&(b=$l(c||""),Bl(b.info,f),b=km(c),"gelInfos"in b||(b.gelInfos={}),Bl(b.gelInfos,f),c=Xl(c),cm().info(f,c))}else $l(c||"").info[a]=b}
function mm(a,b,c){var d=Ul(c);if(S("use_first_tick")&&nm(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Rl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Rl.mark(e))}e=b||U();d[a]=e;e=km(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||U();if(jm(c)){$l(c||"").tick[a]=b||U();e=Xl(c);if("_start"===a){var f=cm();dm(f,"baseline_"+e)||uj("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else cm().tick(a,e,b);Yl(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=Q((c||"")+"TIMING_ACTION",void 0),e=Ul(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&nm("_start")&&Tl(c)))if(Yl(c),c)om(c);else{f=!0;var g=Q("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&om(c)}$l(c||"").tick[a]=b||U()}return d[a]}
function nm(a,b){var c=Ul(b);return a in c}
function om(a){if(!jm(a)){var b=Ul(a),c=Wl(a),d=b._start,e=Q("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:Q((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Tl(a);var h=Ul(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Wl(a).yt_pvis&&"youtube"===e&&(lm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=U();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;S("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Sa("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var t=void 0===t?"":t;Jl(f,t)||Il(f,void 0,void 0,void 0,t)}else Il(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);fk(Ol,new Ml(m.aft+(Number(g)||0),a))}}
var pm=window;pm.ytcsi&&(pm.ytcsi.info=lm,pm.ytcsi.tick=mm);var qm=null,rm=null,sm=null,tm={};function um(a){var b=a.id;a=a.ve_type;var c=Nj++;a=new Oj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});tm[b]=a;b=Uj();c=Sj();b&&c&&pk(b,c,[a])}
function vm(){var a=qm.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function wm(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Xj(b,a),a=Sj()))for(var c in tm){var d=tm[c];d&&pk(b,a,[d])}}
function xm(a){tm[a.id]=new Oj({trackingParams:a.tracking_params})}
function ym(a){var b=Uj(),c=tm[a.id];if(b&&c){a=S("use_default_events_client")?void 0:tj;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ja:Wj(b),W:b};"UNDEFINED_CSN"==b?qk("visualElementGestured",c,d):a?$g("visualElementGestured",c,a,d):uj("visualElementGestured",c,d)}}
function zm(a){a=a.ids;var b=Uj();if(b)for(var c=0;c<a.length;c++){var d=tm[a[c]];if(d){var e=b,f=S("use_default_events_client")?void 0:tj;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ja:Wj(e),W:e};"UNDEFINED_CSN"==e?qk("visualElementShown",d,g):f?$g("visualElementShown",d,f,g):uj("visualElementShown",d,g)}}}
;z("yt.setConfig",P,void 0);z("yt.config.set",P,void 0);z("yt.setMsg",Ef,void 0);z("yt.msgs.set",Ef,void 0);z("yt.logging.errors.log",Dj,void 0);
z("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);if(!a){var b=Q("PLAYER_VARS",void 0);b&&(a={args:b})}wl(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.args.forced_experiments||(b=window.location.href,-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=fh(1<b.length?b[1]:b[0])):b={},b.forced_experiments&&(a.args.forced_experiments=b.forced_experiments));a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=Q("POST_MESSAGE_ORIGIN");
window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);qm=a=(c=Q("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c?Qk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1):Qk(a);a.addEventListener("onScreenChanged",wm);a.addEventListener("onLogClientVeCreated",um);a.addEventListener("onLogServerVeCreated",xm);a.addEventListener("onLogVeClicked",ym);a.addEventListener("onLogVesShown",zm);a.addEventListener("onVideoDataChange",vm);c=Q("POST_MESSAGE_ID","player");
Q("ENABLE_JS_API")?sm=new hl(a):Q("ENABLE_POST_API")&&"string"===typeof c&&"string"===typeof b&&(rm=new il(window.parent,c,b),sm=new cl(a,rm.h));ng()},void 0);
var Am=Bf(function(){mm("ol");var a=xl.getInstance(),b=!!((Al("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Md(document.body,"exp-invert-logo"))if(c&&!Md(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Md(d,"inverted-hdpi")){var e=Kd(d);Ld(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Md(document.body,"inverted-hdpi")&&Nd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Al(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),Bm=Bf(function(){var a=qm;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Hj.dispose();a=0;for(var b=lg.length;a<b;a++)kg(lg[a]);lg.length=0;dg("//static.doubleclick.net/instream/ad_status.js");mg=!1;P("DCLKSTAT",0);Vc(sm,rm);if(a=qm)a.removeEventListener("onScreenChanged",wm),a.removeEventListener("onLogClientVeCreated",um),a.removeEventListener("onLogServerVeCreated",xm),a.removeEventListener("onLogVeClicked",ym),a.removeEventListener("onLogVesShown",zm),a.removeEventListener("onVideoDataChange",vm),a.destroy();
tm={}});
window.addEventListener?(window.addEventListener("load",Am),window.addEventListener("unload",Bm)):window.attachEvent&&(window.attachEvent("onload",Am),window.attachEvent("onunload",Bm));Sa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Ij);Sa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Jj);Sa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||og);
Sa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Yj);Sa("yt.util.activity.init",B("yt.util.activity.init")||Bg);Sa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Eg);Sa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Cg);}).call(this);
