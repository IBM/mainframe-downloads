/* eslint-disable */

// Required base frameworks.

/**
   @class  IBMCore.common.util.perf
**/
/**
   Performance functions that use the high-resolution timers
   of the web performance API to mark and measure events, code loading, etc
**/
var IBMPerformance = {
    mark: function (markName) {
        try {
            window.performance.mark(markName);
        }
        catch (e) {
            // Nothing
        }
    },

    measure: function (measurementName, markBegin, markEnd) {
        try {
            window.performance.measure(measurementName, markBegin, markEnd);
        }
        catch (e) {
            // Nothing
        }
    }
};

;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// If you are reading this, you are viewing the un-compressed, development version of the core v18 JS file.
// This file should NEVER, EVER, EVER be used on a production web site.
// It's HUGE and contains TONS of commented code and documentation comments.
// 65% of the file is comments, 35% is actual JS.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/**

	Used for testing/timing events and optimizing JS code performance.
	<br />
	<br />This file is at the top of JS build file and simply starts a timer:
		
	window.v18JsStart = new Date().getTime();

	jstimer-end.js is at the end of the JS build file and uses this timestamp to test performance of key page items' rendering.

	@class Other IBM - jstimer-start

**/
IBMPerformance.mark('V18-begin-execute');
window.v18JsStart = new Date().getTime();
;
/**

	Shim for console for browsers that don't support the full range of console functions.
	<br />This ensures that a console function won't throw an error if the browser doesn't support it/have it defined.

**/
(function() {
	// Union of Chrome, Firefox, IE, Opera, and Safari console methods.
	var methods = ["assert", "assert", "cd", "clear", "count", "countReset", "debug", "dir", "dirxml", "dirxml", "dirxml", "error", "error", "exception", "group", "group", "groupCollapsed", "groupCollapsed", "groupEnd", "info", "info", "log", "log", "markTimeline", "profile", "profileEnd", "profileEnd", "select", "table", "table", "time", "time", "timeEnd", "timeEnd", "timeEnd", "timeEnd", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace", "trace", "trace", "trace", "trace", "warn"],
		length = methods.length,
		console = window.console = window.console || {},
		method,
		noop = function() {};

	// Define undefined methods as noops to prevent errors.
	while (length--) {
		method = methods[length];
		if (!console[method]) {
			console[method] = noop;
		}
	}
})();;
/**

	Modernizr script custom build v3.3.1
	<br />Used for feature detections.
	<br />Official documenation at <a href="http://modernizr.com/" target="_blank">http://modernizr.com/</a>.

	@module Modernizr
	@main Modernizr
	@class Modernizr

**/

/*
	modernizr 3.3.1 (Custom Build) | MIT *

	https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-pointerevents-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixes-setclasses-testallprops-testprop-teststyles
*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),b.push((o?"":"no-")+s.join("-"))}}function a(e){var t=k.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?k.className.baseVal=t:k.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)z(e,n)&&i(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),a([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function d(e,t){return!!~(""+e).indexOf(t)}function c(){var e=t.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var a,i,d,l,u="modernizr",f=s("div"),p=c();if(parseInt(r,10))for(;r--;)d=s("div"),d.id=o?o[r]:u+(r+1),f.appendChild(d);return a=s("style"),a.type="text/css",a.id="s"+u,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),i=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=l,k.offsetHeight):f.parentNode.removeChild(f),!!i}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?f(o,n||t):o);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(g(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+g(t[o])+":"+r+")");return a=a.join(" or "),l("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,a){function i(){l&&(delete U.style,delete U.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=m(e,o);if(!r(c,"undefined"))return c}for(var l,f,p,g,h,v=["modernizr","tspan","samp"];!U.style&&v.length;)l=!0,U.modElem=s(v.shift()),U.style=U.modElem.style;for(p=e.length,f=0;p>f;f++)if(g=e[f],h=U.style[g],d(g,"-")&&(g=u(g)),U.style[g]!==n){if(a||r(o,"undefined"))return i(),"pfx"==t?g:!0;try{U.style[g]=o}catch(y){}if(U.style[g]!=h)return i(),"pfx"==t?g:!0}return i(),!1}function v(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+q.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,o,a):(s=(e+" "+E.join(i+" ")+i).split(" "),p(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],T=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=!1;try{w="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(S){}Modernizr.addTest("websockets",w),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e);var C=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=C;var k=t.documentElement,_="svg"===k.nodeName.toLowerCase(),P="Moz O ms Webkit",E=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=E;var z;!function(){var e={}.hasOwnProperty;z=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=i});var R=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=R,Modernizr.addTest("hashchange",function(){return R("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("pointerevents",function(){var e=!1,t=E.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)R(E[t]+"pointerdown")&&(e=!0);return e}),Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("audio",function(){var e=s("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof s("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=s("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,a=C.length-1;a>o;o++)e=0===o?"to ":"",r+=t+C[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var i=s("a"),d=i.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var A=s("input"),$="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),O={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)O[t[n]]=!!(t[n]in A);return O.list&&(O.list=!(!s("datalist")||!e.HTMLDataListElement)),O}($);var N="search tel url email datetime date month week time datetime-local number range color".split(" "),L={};Modernizr.inputtypes=function(e){for(var r,o,a,i=e.length,s="1)",d=0;i>d;d++)A.setAttribute("type",r=e[d]),a="text"!==A.type&&"style"in A,a&&(A.value=s,A.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&A.style.WebkitAppearance!==n?(k.appendChild(A),o=t.defaultView,a=o.getComputedStyle&&"textfield"!==o.getComputedStyle(A,null).WebkitAppearance&&0!==A.offsetHeight,k.removeChild(A)):/^(search|tel)$/.test(r)||(a=/^(url|email)$/.test(r)?A.checkValidity&&A.checkValidity()===!1:A.value!=s)),L[e[d]]=!!a;return L}(N),Modernizr.addTest("hsla",function(){var e=s("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")});var B="CSS"in e&&"supports"in e.CSS,j="supportsCSS"in e;Modernizr.addTest("supports",B||j);var I={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(I.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(I.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var M=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=M;var W=x.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");W(r,function(e){n=9===e.offsetTop})}return n});var V=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();V?Modernizr.addTest("fontface",!1):W('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),W('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)});var q=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=q;var D=function(t){var r,o=C.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=C[i],d=s.toUpperCase()+"_"+r;if(d in a)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=D;var G={elem:s("modernizr")};Modernizr._q.push(function(){delete G.elem});var U={style:G.elem.style};Modernizr._q.unshift(function(){delete U.style});var H=x.testProp=function(e,t,r){return h([e],n,t,r)};Modernizr.addTest("textshadow",H("textShadow","1px 1px")),x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in k.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",W(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0));var F,J=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?D(e):(-1!=e.indexOf("-")&&(e=u(e)),t?v(e,t,n):v(e,"pfx"))};try{F=J("indexedDB",e)}catch(S){}Modernizr.addTest("indexeddb",!!F),F&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in F),o(),a(b),delete x.addTest,delete x.addAsyncTest;for(var Z=0;Z<Modernizr._q.length;Z++)Modernizr._q[Z]();e.Modernizr=Modernizr}(window,document);;
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
;
/**

	jQuery extensions
	<br />Used for IBM core JS foundation. 
	<br />Extra custom jQuery extensions we've added onto jQuery.

	@class jQuery:focusable
**/
(function($) {
	/**
		This is not a method, but rather a " :focusable" selector extension to jQuery.
		<br />This allows you to find focusable elements for tabbing/accessibility.
		<br />Usage:  $("someContainer :focusable")  gives you a list of $elements that you can do .focus() on.

		@method focusable
	**/
	// Primarily used in overlay for tab rings since content is unknown. 
	function focusable(element, isTabIndexNotNaN) {
		var map, mapName, img,
			nodeName = element.nodeName.toLowerCase();
		if ("area" === nodeName) {
			map = element.parentNode;
			mapName = map.name;
			if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
				return false;
			}
			img = $("img[usemap=#" + mapName + "]")[0];
			return !!img && visible(img);
		}
		return (/input|select|textarea|button|object/.test(nodeName) ?
				!element.disabled :
				"a" === nodeName ?
				element.href || isTabIndexNotNaN :
				isTabIndexNotNaN) &&
			// the element and all of its ancestors must be visible
			visible(element);
	}

	function visible(element) {
		return $.expr.filters.visible(element) &&
			!$(element).parents().addBack().filter(function() {
				return $.css(this, "visibility") === "hidden";
			}).length;
	}

	// This is the actual :focusable extension.
	$.extend($.expr[":"], {
		focusable: function(element) {
			return focusable(element, !isNaN($.attr(element, "tabindex")));
		}
	});
	////
	//  END :focusable selector extension.
	////

})(jQuery);
;
/**

	Custom modernizr and other random tests/detection setups.
	
**/

(function ($) {

	var conectionType = "na";

	try {
		conectionType = navigator.connection.effectiveType;
	}
	catch (ignore) {}
	conectionType = "ibm-cxtype-" +  conectionType;

	// Add classes so CSS switches can be used for these things.
	// NOTE: Add JS here because if the page doesn't use no-js, this doesn't get added by default.
	$(document.documentElement).addClass("js ibm-v18 " + conectionType);
	


	// Add Modernizr test for hires so it's publically available for all pages.
	Modernizr.addTest("hires", function() {
		var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
		return (dpr > 1);
	});

})(jQuery);

;
/**

	Browser plug-in script for jQuery. 
	<br />Used for browser detection.
	<br />Official documentation at <a href="http://jquery.thewikies.com/browser" target="_blank">http://jquery.thewikies.com/browser</a>.
	
	@module jQuery.browser
	@main jQuery.browser
	@class jQuery.browser
	@class jQuery.layout
	@class jQuery.os

**/
(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);;
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.hoverIntent) {
        factory(jQuery);
    }
})(function($) {
    'use strict';

    // default configuration values
    var _cfg = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };

    // counter used to generate an ID for each instance
    var INSTANCE_COUNT = 0;

    // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
    var cX, cY;

    // saves the current pointer position coordinates based on the given mousemove event
    var track = function(ev) {
        cX = ev.pageX;
        cY = ev.pageY;
    };

    // compares current and previous mouse positions
    var compare = function(ev,$el,s,cfg) {
        // compare mouse positions to see if pointer has slowed enough to trigger `over` function
        if ( Math.sqrt( (s.pX-cX)*(s.pX-cX) + (s.pY-cY)*(s.pY-cY) ) < cfg.sensitivity ) {
            $el.off(s.event,track);
            delete s.timeoutId;
            // set hoverIntent state as active for this element (permits `out` handler to trigger)
            s.isActive = true;
            // overwrite old mouseenter event coordinates with most recent pointer position
            ev.pageX = cX; ev.pageY = cY;
            // clear coordinate data from state object
            delete s.pX; delete s.pY;
            return cfg.over.apply($el[0],[ev]);
        } else {
            // set previous coordinates for next comparison
            s.pX = cX; s.pY = cY;
            // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
            s.timeoutId = setTimeout( function(){compare(ev, $el, s, cfg);} , cfg.interval );
        }
    };

    // triggers given `out` function at configured `timeout` after a mouseleave and clears state
    var delay = function(ev,$el,s,out) {
        delete $el.data('hoverIntent')[s.id];
        return out.apply($el[0],[ev]);
    };

    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {
        // instance ID, used as a key to store and retrieve state information on an element
        var instanceId = INSTANCE_COUNT++;

        // extend the default configuration and parse parameters
        var cfg = $.extend({}, _cfg);
        if ( $.isPlainObject(handlerIn) ) {
            cfg = $.extend(cfg, handlerIn);
            if ( !$.isFunction(cfg.out) ) {
                cfg.out = cfg.over;
            }
        } else if ( $.isFunction(handlerOut) ) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // cloned event to pass to handlers (copy required for event object to be passed in IE)
            var ev = $.extend({},e);

            // the current target of the mouse event, wrapped in a jQuery object
            var $el = $(this);

            // read hoverIntent data from element (or initialize if not present)
            var hoverIntentData = $el.data('hoverIntent');
            if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

            // read per-instance state from element (or initialize if not present)
            var state = hoverIntentData[instanceId];
            if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

            // state properties:
            // id = instance ID, used to clean up data
            // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
            // isActive = plugin state, true after `over` is called just until `out` is called
            // pX, pY = previously-measured pointer coordinates, updated at each polling interval
            // event = string representing the namespaced event used for mouse tracking

            // clear any existing timeout
            if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

            // namespaced event used to register and unregister mousemove tracking
            var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent'+instanceId;

            // handle the event, based on its type
            if (e.type === 'mouseenter') {
                // do nothing if already active
                if (state.isActive) { return; }
                // set "previous" X and Y position based on initial entry point
                state.pX = ev.pageX; state.pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $el.off(mousemove,track).on(mousemove,track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                state.timeoutId = setTimeout( function(){compare(ev,$el,state,cfg);} , cfg.interval );
            } else { // "mouseleave"
                // do nothing if not already active
                if (!state.isActive) { return; }
                // unbind expensive mousemove event
                $el.off(mousemove,track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                state.timeoutId = setTimeout( function(){delay(ev,$el,state,cfg.out);} , cfg.timeout );
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
});
;

// IBM core files/requirements/name space setups.
/**

	Base setup for the IBMCore namespace.
	<br />

	@module IBMCore
	@main IBMCore
	
*/

jQuery.noConflict();

var IBMCore = {};

IBMCore.version = "147.0.0";

(function($, IBM) {
	/**
		Utility to verify and create namespaces/object paths if they don't already exist.
		<br />
		<br />Similar to $.extend : The first param is an object, and the second param is an object/namespace path to create in the first object (recursively).
		<br />Unlike a merge, it will not overwrite an existing object/path. It will only create an object/path if it doesn't already exist.
		<br />Specifying the last node of a namespace implicitly creates all prior nodes.
		<br />Returns the last/deepest object from the second parameter string path.
		<br />
		<br />Usage:
		
			IBMCore.namespace(IBMCore, "common.util.someUtilityName");

		@class IBMCore.namespace
		@param {String} Existing namespace/object path to extend.
		@param {String} (Multiple) Namespace/object paths to verify and create in first param. Can be multiple params/paths to create.
		@return {Object} The deepest namespace object. (If multiple arguments are passed, this will be the last namespace created)
	**/
	IBM.namespace = function() {
		var scope = arguments[0],
			ln = arguments.length,
			i, value, split, x, xln, parts, object;

		for (i = 1; i < ln; i++) {
			value = arguments[i];
			parts = value.split(".");
			object = scope[parts[0]] = Object(scope[parts[0]]);
			for (x = 1, xln = parts.length; x < xln; x++) {
				object = object[parts[x]] = Object(object[parts[x]]);
			}
		}
		return object;
	};

	// Pre-set some base namespace objects.
	IBM.namespace(
		IBM,
		"performance",
		"common",
		"common.config",
		"common.meta",
		"common.module",
		"common.util",
		"common.vendor",
		"common.widget",
		"www",
		"www.module"
	);

})(jQuery, IBMCore);

;

// Utilities
/**

	Debug utility to use instead of console.
	<br>Queues/stores up messages and functions and doesn't show them in the console by default.
	<br>When you want to show the messages in the console, call the debug.show() function.

	<br />Usage:
		
		IBMCore.common.util.debug.add("log", "It worked.");
		IBMCore.common.util.debug.add("error", "This does not equal that.");

	@class IBMCore.common.util.debug

**/

(function (IBM) {

	// Create our namespace and make a shortcut to it for ourselves.
	var me = IBM.namespace(IBM, "common.util.debug"),
		debugMessages = [];

	/**
		Debug utility to use instead of console.
		<br>Add messages/functions to the queue.
		<br>When you want to show the messages call the debug.show() function.

		@method add
		@param func {String} What console function name to run. Ex: "log", "warn", "info".
		@param contents {Varies} The content that you want to send to the function, just like you would if you called console.log(___).
		@param usePrefix {Boolean} True|False to prepend the console message with "v18:". Default is true.
	**/
	me.add = add;
	function add (func, contents, usePrefix) {
		debugMessages.push({
			"func": func,
			"contents": contents,
			"usePrefix": usePrefix
		});
	}

	/**
		Does the actual outputting of the debug messages and runs the console.xxxx functions.

		@method output
		@private
		@param func {String} What console function name to run. Ex: "log", "warn", "info".
		@param contents {Varies} The content that you want to send to the function, just like you would if you called console.log(___).
		@param usePrefix {Boolean} True|False to prepend the console message with "IBM v18:".
	**/
	function output (func, contents, usePrefix) {
		if (usePrefix !== false) {
			window.console[func]("v18: ", contents);
		}
		else {
			window.console[func](contents);	
		}
	}

	/**
		Public API to show all the debug message that have been stored in the queue.

		@method show
	**/
	me.show = show;
	function show () {
		var i = 0;
		for(i; i < debugMessages.length; i++) {
			output(debugMessages[i].func, debugMessages[i].contents, debugMessages[i].usePrefix);
		}
	}

})(IBMCore);
;
/**

	Helpers to set the page configuration.
	<br />
	<br />Hierarchy of final page config settings is as follows:
	<br /> 1. Defaults out of IBMCore.www.config.
	<br /> 2. Any settings by page developer using IBMCore.common.util.config.set.
	<br />
	<br />Usage:

		IBMCore.common.util.config.set({
			megamenu: {
				type: "alternate"
			}
		});

	@class IBMCore.common.util.config

**/

(function($, IBM) {
  // Create name space for this thing and make a shortcut to it for ourselves.
  var me = IBM.namespace(IBM, 'common.util.config');

  /**
		Merging settings into the existing page's common.config settings.

		@method set
		@param setting {Object} The setting object to merge into the existing IBMCore.common.config object.

	**/
  me.set = function(setting) {
    if (jQuery.type(setting) === 'object') {
      $.extend(true, IBM.common.config, setting);
    }
  };

  /**
		Gets a current config setting. Accepts object dot syntax for deep property values. Example:
		<br />
		<br /> <code>IBMCore.common.util.config.get("sbs");</code>
		<br /> -or-
		<br /> <code>IBMCore.common.util.config.get("megamenu.animations.enabled");</code>

		@method get
		@param setting {String} The setting to get the value for, in string object notation.
		@return {Varies} The value of the setting you wanted to get (duh): string, object, int, array... whatever the property value is.
	**/
  me.get = function(setting) {
    var settingParts = setting.split('.'),
      property = '',
      currentConfigSetting = IBM.common.config;

    while (currentConfigSetting && settingParts.length) {
      property = settingParts.shift();
      currentConfigSetting = currentConfigSetting[property];
    }

    return currentConfigSetting;
  };

  /**
		Helper to determine if a service/module is enabled or not for the page.
		<br />This is simply a shortcut that uses config.get.
		<br />Only works for services that have a ".enabled" property.
		<br />It ensures consistency if we change the convention of "enabled: true" settings.

		@method isEnabled
		@param serviceName {String} The service to check if enabled or not, in string object notation.
		@return {Boolean} true or false
	**/
  me.isEnabled = function(serviceName) {
    var enabled = me.get(serviceName + '.enabled');

    // If all modules were disabled via config, return false.
    if (IBM.common.util.config.get('coremodules.enabled') === false) {
      enabled = false;
    }

    return enabled;
  };
})(jQuery, IBMCore);
;
/**

	This is where all the defaults are set for WWW.
	Configurations and what"s enabled or not by default.
	This is WWW ONLY.

	@requires: IBMCore.common.config

*/
(function($, IBM) {
  // How to use the preview settings:
  // Go here:  http://www.ibm.com/common/test/v18/v18-env-switcher.html

  // Production settings == common/default, then we merge in/override them with any non-prod settings if needed.
  // Purposely used "setting" instead of "config" to avoid confusion when using with common.config object.
  var configToUse = 'production',
    settings = {
      production: {
        config: 'www',
        forced: false,

        // Tell us these settings are being used.
        usedSettings: 'production',

        /*
					NOTE: The below settings are the production settings.
					These are what are used by default unless you use the forceConfig setting which will override these (see below).

					DO NOT CHANGE THIS HERE OR IT WILL BREAK PRODUCTION!
				*/

        // Set to the location of the v18 files.
        // All these must end with a slash /
        imageUrl: 'https://1.www.s81c.com/common/v18/i/',
        jsFilesUrl: 'https://1.www.s81c.com/common/v18/js/',
        jsFilesUrlNC: 'https://1.www.s81c.com/common/noticechoice/',
        jsFilesUrlUrx:
          'https://www.ibm.com/account/ibmidutil/urx/v2/js/urx.modal.min.js',

        // URL where the dynamicnav-translations and other files are loaded from
        // (header/footer and extra xlation files, services, etc)
        dataUrl: 'https://www.ibm.com/common/v18/js/data/',
        datepickerDataUrl:
          'https://1.www.s81c.com/common/v18/js/datepicker/data/',
        coreservicesUrl: 'https://www.ibm.com/gateway/secstate/?',
        coreservicesUrlSecure: 'https://www.ibm.com/gateway/sec/?',
        noticechoice: {
          jsonUrl: 'https://1.www.s81c.com/common/translations',
        },
        userStateUrl: 'https://idaas.iam.ibm.com/v1/mgmt/idaas/user/status/',

        // A flag to disable *all* dynamic modules... masthead, footer, greeting.. anything that"s classified as a "module" below.
        coremodules: {
          enabled: true,
        },
        // A flag to disable *all* content space widgets (tooltips, overlay, etc).
        // Allows a page to use standard mast/footer, but all their own Dojo stuff in content space.
        contentwidgets: {
          enabled: true,
        },
        eluminate: {
          enabled: true,
        },

        /**
					Module default configurations below
				**/

        backtotop: {
          enabled: false,
        },
        contactModuleWidget: {
          enabled: true,
        },
        dynamicContactModule: {
          enabled: false,
        },
        errorchecking: {
          enabled: true,
        },
        feedbacklink: {
          enabled: false,
        },
        footer: {
          enabled: true,
          socialLinks: {
            enabled: false,
          },
          type: 'default',
        },
        footermenu: {
          enabled: true,
        },
        // If enabled, calls user-state, photo, notification services. If signd in, updates icon image and profile menu.
        // This does NOT determine to show notifications.
        greeting: {
          enabled: true,
        },
        localeselector: {
          enabled: true,
        },
        masthead: {
          enabled: true,
          logoanimation: {
            enabled: false,
          },
          megamenu: {
            enabled: true,
          },
          mobilemenu: {
            enabled: true,
          },
          // If enabled, this shows notifications in the icon and in the dropdown profile menu.
          notifications: {
            enabled: true,
          },
          // This determines if the profile icon and menu get created in the masthead.
          // If this is disabled, greeting automatically gets disabled.
          profile: {
            enabled: true,
          },
          search: {
            enabled: true,
            typeahead: {
              enabled: true,
            },
          },
          sticky: {
            enabled: true,
          },
          type: 'default',
        },
        scrolltracker: {
          enabled: false,
        },
        sharethispage: {
          enabled: true,
        },
        survey: {
          enabled: true,
        },
        useriplookup: {
          enabled: true,
        },
        userstateservice: {
          enabled: true,
        },
        wat: {
          enabled: false,
        },
        bitly: {
          login: 'ibmdigital',
          key: 'R_1ed9169df98d3b072731d88ec80d18a7',
          timeout: 3000, // in milliseconds
        },
      },

      staging: {
        // Tell us these settings are being used.
        usedSettings: 'staging',

        // Set to the location of the v18 files.
        // All these must end with a slash /
        imageUrl: 'https://1.wwwstage.s81c.com/common/v18/i/',
        jsFilesUrl: 'https://1.wwwstage.s81c.com/common/v18/js/',
        jsFilesUrlNC: 'https://1.wwwstage.s81c.com/common/noticechoice/',
        jsFilesUrlUrx:
          'https://wwwtest.ibm.com/account/ibmidutil/urx/v2/js/urx.modal.min.js',

        // URL where the dynamicnav-translations and other files are loaded from
        // (header/footer and extra xlation files, services, etc)
        dataUrl: 'https://1.wwwstage.s81c.com/common/v18/js/data/',
        datepickerDataUrl:
          'https://1.wwwstage.s81c.com/common/v18/js/datepicker/data/',
        coreservicesUrl:
          'https://www-sso.toronto.ca.ibm.com/gateway/secstate/?',
        coreservicesUrlSecure:
          'https://www-sso.toronto.ca.ibm.com/gateway/sec/?',
        noticechoice: {
          jsonUrl: 'https://1.wwwstage.s81c.com/common/translations',
        },
        userStateUrl: 'https://idaas.iam.ibm.com/v1/mgmt/idaas/user/status/',
      },

      preview: {
        // Tell us these settings are being used.
        usedSettings: 'preview',

        // Set to the location of the v18 files.
        // All these must end with a slash /
        imageUrl: 'https://1.wwwpreview.s81c.com/common/v18/i/',
        jsFilesUrl: 'https://1.wwwpreview.s81c.com/common/v18/js/',
        jsFilesUrlNC: 'https://1.wwwpreview.s81c.com/common/noticechoice/',

        // URL where the dynamicnav-translations and other files are loaded from
        // (header/footer and extra xlation files, services, etc)
        dataUrl: 'https://1.wwwpreview.s81c.com/common/v18/js/data/',
        datepickerDataUrl:
          'https://1.wwwpreview.s81c.com/common/v18/js/datepicker/data/',
        coreservicesUrl:
          'https://www-sso.toronto.ca.ibm.com/gateway/secstate/?',
        coreservicesUrlSecure:
          'https://www-sso.toronto.ca.ibm.com/gateway/sec/?',
        noticechoice: {
          jsonUrl: 'https://1.wwwpreview.s81c.com/common/translations',
        },
        userStateUrl: 'https://idaas.iam.ibm.com/v1/mgmt/idaas/user/status/',
      },
    };

  /**
		Check to see if we need to override some of the production settings with different environment settings.
		Allows you to use a different environment build using non-production values. The order is:
			1. Production (default).
			2. Override via COOKIE value through our special cookie. Settable here:
				http://www.ibm.com/common/test/v18/v18-env-switcher.html
	*/
  function applyAlternateSettings() {
    var envCookie = document.cookie.match(/__forcev18env=(\w*)/);

    // Check for environment cookie that overrides whatever the build says to use.
    if (envCookie && envCookie[1] !== '') {
      configToUse = envCookie[1];
    }

    // Now apply the alternate settings if we need to and they are valid settings.
    if (configToUse !== 'production' && settings[configToUse]) {
      $.extend(true, IBM.common.config, settings[configToUse]);
      IBM.common.config.forced = true;
    }
  }

  // Hierarchy of config settings on a page:
  // 1. v18: DEFAULT: Use production settings.
  // 2. v18: Check for config cookie to merge in non-production settings.
  // 3. Page-level: Merge in settings from digitalData object to override (requirement to exist before www.js).
  // 4. Page-level: Any ad-hoc config.sets util calls from the page JS.

  // DEFAULT: Use all production settings.
  $.extend(true, IBM.common.config, settings.production);

  // Check if we need to override with non-prod settings and merge them in.
  applyAlternateSettings();

  // Page level: Merge in any config.sets that were coded in the digitalData object.
  // This is an alternate to using the config.set utility.
  if (
    window.digitalData &&
    window.digitalData.page &&
    window.digitalData.page.pageInfo &&
    window.digitalData.page.pageInfo.ibm
  ) {
    $.extend(
      true,
      IBM.common.config,
      window.digitalData.page.pageInfo.ibm.config || {}
    );
  }
})(jQuery, IBMCore);
;
/**

	Great little URL helpers.
	<br />
	<br />Utilities to help with misc URL-related functionality.
	
	@class IBMCore.common.util.url
		
**/

(function ($, IBM) {

	// Create our namespace and make a shortcut to it for ourselves.
	var me = IBM.namespace(IBM, "common.util.url");


	/**
		Internal function that does the URL editing of adding/removing params.
		<br />The add/remove APIs call this to do the actual work.

		@method editUrl
		@private
		@param dataObj {Object} Object with data:
		@param dataObj.action {String} What to do... add (replace) or remove a param.
		@param dataObj.url {String} The URL string to modify.
		@param dataObj.paramName {String} The name of the param to add.
		@param dataObj.paramValue {String} The value of the param to add.
		@return {String} The new URL string with the new name/value param added (or replaced if it existed).
	**/
	function editUrl (dataObj) {
		var url = dataObj.url,
			urlBase = url,
			qs = (url.indexOf("?") > -1 ? url.substr(url.indexOf("?")+1) : "").split("#")[0],
			hash = url.indexOf("#") > -1 ? url.substr(url.indexOf("#")) : "",
			params = {};

		// If the URL has a hash, (re)set the base URL.
		if (hash !== ""){
			urlBase = url.substr(0, url.indexOf("#"));
		}

		// If the URL has a QS, (re)set the base URL and convert param string to obj.
		if (qs !== "") {
			urlBase = url.substr(0, url.indexOf("?"));
			params = me.paramsToObject(qs);
		}

		// Add/Remove the param to the object.
		if (dataObj.action === "add") {
			params[dataObj.paramName] = dataObj.paramValue;
		}
		else if (dataObj.action === "remove") {
			delete params[dataObj.paramName];
		}

		// Concat the URL pieces back and return to requestor.
		return urlBase + "?" + me.objectToQuerystring(params) + hash;
	}


	/**
		Adds a name/value pair (URL param) to the passed URL string and returns the new URL string.
		<br />NOTE: If param already exists, it will replace the value.
	
		@method addParam
		@param dataObj {Object} Object with settings:
		@param dataObj.url {String} The URL string to modify.
		@param dataObj.paramName {String} The name of the param to add.
		@param dataObj.paramValue {String} The value of the param to add.
		@return {String} The new URL string with the new name/value param added (or replaced if it existed).
		@example
			var newUrl = IBMCore.common.util.url.addParam({
				url: window.location.href,
				paramName: "showtabs",
				paramValue: "yes"
			});
	**/
	me.addParam = function (dataObj) {
		dataObj.action = "add";
		return editUrl(dataObj);
	};

	/**
		Removes a param from the passed URL string (if exists) and returns the new URL string.
	
		@method removeParam
		@param dataObj {Object} Object with settings:
		@param dataObj.url {String} The URL string to modify.
		@param dataObj.paramName {String} The name of the param to remove.
		@return {String} The new URL string with the param removed (if it existed).
		@example
			var newUrl = IBMCore.common.util.url.removeParam({
				url: window.location.href,
				paramName: "showtabs",
			});
	**/
	me.removeParam = function (dataObj) {
		dataObj.action = "remove";
		return editUrl(dataObj);
	};

	/**
		Get all URL params from the browser's current URL as a single object.
		<br />__Note:__ If you just want a single URL param by name, use the "getParam" function instead.

		@method getAllParams
		@param [url] {String} The URL to parse the params out of. If none passed, the browser's URL is used.
		@return {Object} All params from the URL used as object properties.
		@example
			var urlParams = IBMCore.common.util.url.getAllParams();
			var refCode = urlParams.cm_re;
	**/
	me.getAllParams = function (url) {
		var params = me.urlParams;

		// If they passed in a string, extract the params from the custom string instead of the page's loaded URL.
		if (url && url !== "") {
			params = {};

			if (url.indexOf("?") > -1) {
				params = me.paramsToObject(url);
			}
		}

		return params;
	};

	/**
		Get a single URL param from a URL string.
		<br />You can pass in a custom URL string to use, otherwise the browser's URL is used.
		<br />__NOTE:__ If you want to get all params from a URL in one shot, use the "getAllParams" function instead.

		@method getParam
		@param paramName {String} The param you want to get the value for.
		@param [str] {String} A custom URL string to parse. Otherwise the browser's URL is used (default).
		@return {String} The value of the param *if the param exists*, else returns undefined.
		@example
			var refCode = IBMCore.common.util.url.getParam("cm_re");
	**/
	me.getParam = function (paramName, str) {
		var customParams = {},
			paramValue = me.urlParams[paramName];

		// If they passed in a string, extract the param from the custom string instead of the page's loaded URL.
		if (str && str !== "") {
			customParams = me.paramsToObject(str);
			paramValue = customParams[paramName];
		}

		return paramValue;
	};
	
	/**
		Get the page's URL. Uses the canonical meta value if exists, else the current browser URL.

		@method getUrl
		@return {String} The URL as found in the canonical meta tag value, else the current browser URL minus tracking params.
	**/
	me.getUrl = function () {
		var url = $('link[rel="canonical"]').attr('href');

		// If canoncial tag exists, returned it as-is.
		if (url) {
			return url;
		}

		// If no canonical, remove some metrics/tracking parameters from currentl browser URL, then return a clean URL.
		url = location.href;

		// Strip misc parameters used for metrics tracking.
		if (url.indexOf('?') !== -1) {
			var prefix = url.substr(0, url.indexOf('?')),
				parts = url.substr(url.indexOf('?') + 1).split('&'),
				regex = /^(cm_re|ca|me|met|re|lnk)=/,
				newparts = [],
				i, j;

			for (i = 0, j = parts.length; i < j; i++) {
				if (!regex.test(parts[i])) {
					newparts.push(parts[i]);
				}
			}

			if (newparts.length > 0) {
				url = prefix + '?' + newparts.join('&');
			} 
			else {
				url = prefix;
			}
		}

		return url;
	};

	/**
		Parses all name/value params from a querystring and returns them all in a single object.
		<br />Used onload and automatically puts all URL params into common object.
		<br />See "parseCurrentUrlParams" method.

		@method paramsToObject
		@param str {String} The string to parse out name/value pair parameters from.
		@return {Object} An object with all name/value pairs as properties.
	**/
	me.paramsToObject = function (str) {
		var paramObj = {};

		if (!str || str === "") {
			return paramObj;
		}

		// If they accidentally passed a full URL that has ? in it, parse out just the querystring.
		// Otherwise we HAVE to assume they passed just the querystring b/c there's no way to tell.
		if (str.indexOf("?") > -1) {
			str = str.substr(str.indexOf("?")+1);
		}

		$.each(str.split("&"), function (k,v) {
			var nameVal = v.split('='),
				decodedName = decodeURIComponent(nameVal[0]);

			// Trim to remove leading/trailing spaces, then only add if there's a value param name.
			nameVal[0] = $.trim(nameVal[0]);
			nameVal[1] = $.trim(nameVal[1]) || "";

			// If there's a param name (required) process it.
			if (nameVal[0]) {
				// If it's a basic name/value URL param, add it as key/value.
				// Else if it's an array type URL param, add name to object as an array and pust the values into it.
				if (decodedName.indexOf("[]") === -1) {
					paramObj[decodedName] = decodeURIComponent(nameVal[1]);
				}
				else if (decodedName.indexOf("[]") > -1) {
					// If it doesn't yet exist, create it, then append value to array.
					if (!paramObj[decodedName]) {
						paramObj[decodedName] = [];
					}
					paramObj[decodedName].push(decodeURIComponent(nameVal[1]));
				}
			}
		});
		
		return paramObj;
	};
	
	/**
		Concats a basic object of name/value pairs into a URL param string. Like a "stringify" function.
		
		@method objectToQuerystring
		@param dataObj {Object} An object with all name/value pairs as properties.
		@return {String} The name/value pairs from the inbound object represented as URL params string (separated with &).
	**/
	me.objectToQuerystring = function (dataObj) {
		var querystring = "",
			i = 0;

		// For each param in the object, stringify it.
		// If it's an array, we need to do a special loop to build a name/value pair for each value.
		$.each(dataObj, function (k, v) {
			if (k !== "" && typeof v !== "object") {
				querystring += "&" + k + "=" + v;
			}
			else if (typeof v === "object") {
				for (i = 0; i < v.length; i++) {
					querystring += "&" + k + "=" + v[i];
				}
			}
		});

		querystring = querystring.substr(1);

		return querystring;
	};

	/**
		Gets the browser's current URL's querystring and parses into common object for use by utilities: getParam &amp; getAllParams.

		@method parseCurrentUrlParams
		@private
	**/
	function parseCurrentUrlParams () {
		me.urlParams = me.paramsToObject(window.location.search.substr(1));
	}
	
	// Automatically parse out the browser's current URL params into public object on load.
	// Used by by getAllParams and getParam functions... they just pull from public object.
	parseCurrentUrlParams();
	
})(jQuery, IBMCore);

;
/** 

	Cookie utilities.
	<br />
	<br />Use this wherever possible so only one common and secure cookie implementation exists.
	<br />Use these functions and don't write your own.

	@class IBMCore.common.util.cookie
	
**/

(function($, IBM) {

	var me = IBM.namespace(IBM, "common.util.cookie");

	/**
		Sets a new cookie with the given data. Name and value are required.

		@method set
		@param {String} name Name of the cookie.
		@param {String} value Value to set.
		@param {Object} [options] Object with optional cookie settings:
		@param {String} [options.expires] Expire date or TTL in seconds.
		@param {String} [options.path] Path of the cookie.
		@param {String} [options.domain] Domain of the cookie.
		@param {Boolean} [options.secure] Flag if the cookie should be secure.
	**/
	me.set = function (name, value, options) {
		var expiresDate = null,
			expires;
			
		options = options || {};
		expires = options.expires;
			
		if (expires) {
			if (expires.toUTCString) {
				expiresDate = expires;
			} 
			else if (typeof expires === "number") {
				expiresDate = new Date();
				expiresDate.setTime(expiresDate.getTime() + 1000 * parseInt(expires, 10));
			}
		}

		document.cookie = name + "=" + encodeURIComponent(value) + 
			((expiresDate) ? "; expires=" + expiresDate.toUTCString() : "") + 
			((options.path) ? "; path=" + options.path : "") + 
			((options.domain) ? "; domain=" + options.domain : "") + 
			((options.secure) ? "; secure" : "");
	};
	
	/**
		Returns the value of a cookie, if set.
		
		@method get
		@param {String} name Name of the cookie.
		@return {Varies} Value stored in the cookie, null otherwise.
	**/
	me.get = function (name) {
		// Find beginning of cookie value in document.cookie
		// Note: cookie with more specific path comes first!
		var prefix = name + "=",
			begin = document.cookie.indexOf(prefix),
			end;
		
		if (begin === -1) {
			return null;
		}
		
		if (begin > 0) {
			begin = document.cookie.indexOf("; " + prefix);
			
			if (begin === -1) {
				return null;
			}
			
			begin += 2;
		}

		// Find end of cookie value
		end = document.cookie.indexOf(";", begin);
		if (end === -1) {
			end = document.cookie.length;
		}

		// Return cookie value
		return decodeURIComponent(document.cookie.substring(begin + prefix.length, end));
	};
	
	/**
		Removes a cookie
		
		@method remove
		@param {String} name Name of the cookie.
		@param {String} [path] Path of the cookie.
		@param {String} [domain] Domain of the cookie.
		@return {Varies} The value of the cookie we removed.
	**/
	me.remove = function (name, path, domain) {
		var value = me.get(name);
		
		if (value !== null) {
			document.cookie = name + '=' + ((path) ? '; path=' + path : '') + ((domain) ? '; domain=' + domain : '') + '; expires=' + new Date(0).toUTCString();
		}
		
		return value;
	};

	/**
		Quick check to see if user has cookies enabled.
		
		@method isSupported
		@return {Boolean} True if cookies are enabled, false otherwise.
	**/
	me.isSupported = function () {
		var name = "allowsCookies",
			value = 1,
			enabled = false;

		me.set(name, value);

		if (parseInt(me.get(name)) === value) {
			me.remove(name);
			enabled = true;
		}
		
		return enabled;
	};


})(jQuery, IBMCore);
;
/**

	This namespace provides functions to load data (JS objects) for JavaScript,
	 depending on the cc/lc settings of the page. Its aim is simplicity in using it and being able
	to re-use for i.e. translations.
	<br />
	By default all URLs are loaded from //www.ibm.com/common/translations/{TOKEN}/{CC}/{LC}/{ENC}.js,
	which is the location where ECM generates out the translation files. The files have to be in a specific
	 format to work with the data framework:
	<br />
	<br />Usage:
			
		// Sample static file contents:
		IBMCore.common.util.data.provide("TOKEN", {
			"title": "My Title in German",
			"desc": "Well, this is the GERMAN translation"
		});

	The static file must call the provide() callback and pass in the unqiue token and  any object containing data.
	<br /><br />Custom JS on page usage:
		
	// Once the static files are in place the user can call the get function to say "I need these translations, and when you get them, call my callback function passing them to me" ex:
	IBMCore.common.util.data.get("test1", function(trans) {
		jQuery("#someID").html(trans.test1.title); // You can reference the locally passed object.
		jQuery("#someID").html(IBMcore.common.translations.data.test1.desc); // Or you can reference the full global object path.
	});

	In the above sample the translation identified by the token "test1" is being loaded from ibm.com and once loaded 
	the callback function is executed and is passed the specific translations object that was requested. The JS then uses the translations and changes the text in the specified DOM elements.
	<br />
	<br />
	__NOTE:__ Certain tokens are not allowed: get, provide, settings, exists

	@class IBMCore.common.util.data
	
**/

(function($, IBM) {

	// Create name space for this thing and make a shortcut to it for ourselves.
	var me = IBM.namespace(IBM, "common.util.data"),
		settings = {
			"url": "https://www.ibm.com/common/translations/{TOKEN}/{CC}/{LC}/{ENC}.js",
			"cc": null,
			"lc": null,
			"enc": null
		};

	/**
		Private helper function to check if a specific key/object in the translations data exists and return true|false.
		
		@method objExists
		@private
		@param token {String} The unique translation data object/token.
	**/
	function objExists (token) {
		return !!IBM.common.translations.data[token];
	}

	/**
		Gets the requested data file and executes the callback once it has been loaded.
		<br />The token can be an array, i.e. ["token1", "token2"]. In this case the callback is executed
		after all tokens have been loaded.
		<br />If we already have those translation sets then the callback is executed immediately and no file request is made (DUH).
		<br />This works by replacing the vars in the standard URL naming convention for translations with the token and CC and LC to build the URL of the JS to get. LC, CC and ENC are used from the page's meta, or you can override them by passing them as optional param object values:
		<br />//www.ibm.com/common/translations/{TOKEN}/{CC}/{LC}/{ENC}.js
		
		@method get
		@param token {String|Array} The unique data token to load or URL to load. Can be an array for bundled translation requests.
		@param [callback] {Function} Callback to execute once the translations have been loaded.
		@param [params] {Object} An object with settings that override the default settings (cc, lc, encoding to use).
	**/
	me.get = function (token, callback, params) {
		var translationsExist = true,
			appliedSettings,
			i, j;

		if (!token) {
			return;
		}

		// Convert a string to an array to normalize it.
		if (!$.isArray(token)) {
			token = [token];
		}

		// Use as a flag so we know if we need to request any files or not.
		for (i = 0, j = token.length; i < j; i++) {
			translationsExist = translationsExist && objExists(token[i]);
		}

		// If not all of the requested translation objects exist, request ones we need then exec the callback.
		if (!translationsExist) {
			appliedSettings = $.extend(settings, params);

			// Wait for meta data to be ready. Don't do pub/sub because we have inbound params we need to keep here.
			IBM.common.util.queue.push(function() {
				return IBM.common.meta.isLoaded;
			}, function() {
				// Function called that replaces vars in URL then gets JS file.
				var i, 
					j,
					getScript = function (singleToken) {
						var url = appliedSettings.url
							.replace('{CC}', appliedSettings.cc || IBM.common.util.meta.getPageCc())
							.replace('{LC}', appliedSettings.lc || IBM.common.util.meta.getPageLc())
							.replace('{TOKEN}', singleToken)
							.replace('{ENC}', appliedSettings.enc || IBM.common.meta.page.pageInfo.ibm.encoding);

						// Request the file.
						$.ajax({
							url: url,
							dataType: "script",
							cache: true
						}).fail(function (message) {
							window.console.error('v18: Error while loading translation file for token: ' + singleToken, message);
						});
					};

				// Loop thru each requested token and get it if we don't have it already.
				for (i = 0, j = token.length; i < j; i++) {
					if (!objExists(token[i])) {
						getScript(token[i]);
					}
				}

				// Wait until all of the requested tokens exist, then execute the callback.
				IBM.common.util.queue.push(function () {
					var translationsExist = true,
						i, j;
					
					for (i = 0, j = token.length; i < j; i++) {
						translationsExist = translationsExist && objExists(token[i]);
					}

					return translationsExist;
				}, function () {
					if (typeof callback === "function") {
						callback(IBM.common.translations.data);
					}
				});
			});
		} 
		else {
			// All requested tokens (translation objects) already exist, so just exec their callback.
			if (typeof callback === "function") {
				callback(IBM.common.translations.data);
			}
		}
	};

	/**
		Function used/called by static translation JS files. 
		<br /Provides a standard API to put translations into the common translations.data object.
		<br />Provide the unique data token as first argument (what the translations are for) and any object as second argument (the translations).
		
		@method provide
		@param token {String} The unique data token to use as the translation object key: translations.data.<$token>
		@param dataObject {Object} The translation data object put inside the $token namespace.
	**/
	me.provide = function(token, dataObject) {
		IBM.common.translations.data[token] = dataObject;
	};

	// Add legacy function alias until the ECM translations are changed for v18 for expert locator widget.
	window.ibmweb = window.ibmweb || {};
	IBM.namespace(window.ibmweb, "data");
	window.ibmweb.data.provide = me.provide;

})(jQuery, IBMCore);
;
/**

	Publish/subscribe messaging utility. 
	<br />
	<br />An event messaging utility that allows owners to publish messages that any other script can subscribe to and be notified when they happen. The event coordinator performs a store and forward function to route messages from publishers to subscribers.
	<br />A "notify me when ____ happens" utility that provides a far more efficient way to know when events happen, rather than setting up a listener loop and continuously polling to see if something happened yet. For example... instead of asking your dad "are we there yet?" every 5 minutes on a 2 hour drive, you say "tell me when we're there."
	<br />
	<br />Usage:
		
		// Setup events to publish and let other code subscribe to.
		myEvents = IBMCore.common.util.eventCoordinator(myPublicObject "my nice name", [
			"ready",
			"loading",
			"error"
		]);
		
		// Publish an event.
		myEvents.publish("ready");
		
		// Subscribe to someone's event:
		someoneElsesPublicObject.subscribe("ready", "my name", myCallbackFunctionName);

	@class IBMCore.common.util.eventCoordinator

**/

(function (IBM) {

	var stop_propagation = false;

	/**
		The main utility that creates your events messaging system for your class/object/code.
		
		@method eventCoordinator 
		@param obj {Object} Your object which you are setting up events for. It gets pub/sub object and methods merged into it.
		@param className {String} The nice-name of your object. Used for debugging purposes.
		@param eventNames {Array} An array of names of events (strings) you will publish, and to which other JS can subscribe to.
		@return {Object} A new EventsCoordinator object with all messaging and methods setup for the named events.
	**/
	IBM.common.util.eventCoordinator = function (obj, className, eventNames) {
		return new EventsCoordinator(obj, className, eventNames);
	};

	/**
		This is the actual internal class constructor that the public utility abstracts.
		
		@method EventsCoordinator
		@constructor
		@private
	**/
	function EventsCoordinator(that, class_name, event_names) {
		var me = this,
			handlers = {},
			run_now = null,
			instance_name = null,
			i,
			len = event_names.length;
			
		for (i = 0; i < len; i++) {
			handlers[event_names[i].toLowerCase()] = new EventHandler(that, event_names[i].toLowerCase());
		}

		me.handlers = function () {
			return handlers;
		};

		/**
			Internal utility. Used to merge pub/sub events into the object that owns the events we're setting up.

			@method mergeWith
			@param obj {Object} The event owning object to merge the pub/sub methods into.
		**/
		me.mergeWith = function (obj) {
			run_now = null;

			var merge_methods = [
					"subscribe",
					"unsubscribe",
					"resumeSubscription",
					"pauseSubscription",
					"publish",
					"handlers",
					"stopPropagation"],
				i,
				len = merge_methods.length,
				method;

			for (i = 0; i < len; i++) {
				method = merge_methods[i];
				if (typeof(that[method]) === "undefined") {
					that[method] = me[method];
				}
				else {
					window.console.warn("Cannot merge event handler method '" + method + "' for " + that.toString() + ".");
				}
			}

			that.instanceName = function (new_name) {
				if (arguments.length === 0) {
					return instance_name;
				}

				instance_name = new_name;
			};

			that.toString = function () {
				if (instance_name) {
					return ("[ {{class_name}}: {{instance_name}} ]")
						.replace("{{class_name}}", class_name)
						.replace("{{instance_name}}", instance_name);
				}

				return ("[ {{class_name}} ]").replace("{{class_name}}", class_name);
			};

			that.event_coordinator = me;
		};

		/**
			Subscribe to the object's event and be notified when it happens (runs callback function.)

			@method subscribe
			@param event_name {String} The name of the owning object's event to subscribe to.  
			@param owner {String} The name of your code/object that's subscribing. (Same name is used for unsubscribing.)
			@param fn {Function} The function to call when the event happens.
			@param [prepend] {Boolean} Set to true if you have multiple subscriptions to the same event and you want this one prepended to the event's callback array.
			@return {Object} Returns your event coordinator object.
			@example
				IBMCore.common.module.masthead.subscribe("ready", "my name", myCallbackFunctionName);
		**/
		me.subscribe = subscribe;
		function subscribe(event_name, owner, fn, prepend) {
			run_now = null; // overwritten later

			if (typeof owner === "undefined") {
				window.console.warn("Cannot call on() with an undefined owner.");
				return me;
			}

			var handler = handlers[event_name.toLowerCase()];
			if (handler) {
				handler.add(owner, fn, prepend);
			}
			else {
				window.console.warn("on() - No event name found: " + event_name);
			}

			run_now = {
				fn : fn,
				owner : owner,
				event_name : event_name
			};

			return me;
		}

		/**
			Unsubscribe from the object's event.

			@method unsubscribe
			@param event_name {String} The name of the event to unsubscribe to.
			@param owner {String} The name of your code/object that's unsubscribing. (Same name is used for subscribing.)
			@return {Object} Returns your event coordinator object.
			@example
				IBMCore.common.module.masthead.unsubscribe("ready", "my name");
		**/
		me.unsubscribe = unsubscribe;
		function unsubscribe(event_name, owner) {
			run_now = null;

			if (typeof event_name === "undefined") {
				window.console.warn("Cannot call unsubscribe() with an undefined event_name.");
				return me;
			}

			var handler = handlers[event_name.toLowerCase()];
			if (owner) {
				handler.remove(owner);
			}
			else {
				//window.console.warn("unsubscribe() - No event name found: " + event_name);
				handler.reset();
			}

			return me;
		}

		/**
			Resume a paused subscription.

			@method resumeSubscription
			@param event_name {String} The name of the event to resume the subscription for.
			@param owner {String} The name of your code/object that's resuming the subscription for (same name is used for subscribing.)
			@return {Object} Returns your event coordinator object.
			@example
				IBMCore.common.module.masthead.resumeSubscription("ready", "my name");
		**/
		me.resumeSubscription = resumeSubscription;
		function resumeSubscription(event_name, owner) {
			run_now = null;

			if (typeof event_name === "undefined") {
				window.console.warn("Cannot call resumeSubscription() with an undefined event_name.");
				return me;
			}

			var handler = handlers[event_name.toLowerCase()];
			if (handler) {
				if (typeof owner !== "undefined") {
					handler.resumeSubscription(owner);
				}
				else {
					handler.resumeAllSubscriptions();
				}
			}
			else {
				window.console.warn("resumeSubscription() - No event name found: " + event_name);
			}

			return me;
		}

		/**
			Temporarily pause a subscription.

			@method pauseSubscription
			@param event_name {String} The name of the event to pause the subscription for.
			@param owner {String} The name of your code/object that's pausing the subscription for (same name is used for subscribing.)
			@return {Object} Returns your event coordinator object.
			@example
				IBMCore.common.module.masthead.pauseSubscription("ready", "my name");
		**/
		me.pauseSubscription = pauseSubscription;
		function pauseSubscription(event_name, owner) {
			run_now = null;

			if (typeof event_name === "undefined") {
				window.console.warn("Cannot call pauseSubscription() with an undefined event_name.");
				return me;
			}

			var handler = handlers[event_name.toLowerCase()];
			if (handler) {
				if (typeof owner !== "undefined") {
					handler.pauseSubscription(owner);
				}
				else {
					handler.pauseAllSubscriptions();
				}
			}
			else {
				window.console.warn("pauseSubscription() - No event name found: " + event_name);
			}

			return me;
		}

		/**
			Publish an event. Anyone subscribed to the named event will get their callback function run.

			@method publish
			@param event_name {String} The name of the event to publish.
			@return {Object} Returns your event coordinator object.
			@example
				myEvents.publish("ready");
		**/
		me.publish = publish;
		function publish(event_name) {
			run_now = null;

			if (typeof event_name === "undefined") {
				window.console.warn("Cannot call publish() with an undefined event_name.");
				return me;
			}

			var handler = handlers[event_name.toLowerCase()],
				active_owners;
				
			if (handler) {
				active_owners = handler.activeOwners();
				if (active_owners.length > 0) {
					//window.console.groupCollapsed(that.toString() + " publishing event \"" + event_name + "\" [" + active_owners.join(",") + "]");
					
					switch (arguments.length) {
						case 1:
							handler.publish();
							break;
						case 2:
							handler.publish(arguments[1]);
							break;
					}
					
					//window.console.groupEnd();
				}
			}
			else {
				window.console.warn("publish() - No event name found: " + event_name);
			}

			return me;
		}

		/**
			Stops event publishing propagation.

			@method stopPropagation
			@deprecated
		**/
		me.stopPropagation = stopPropagation;
		function stopPropagation() {
			stop_propagation = true;
		}

		/**
			Internal utility. This is what actually runs the callback function.

			@method runNow
		**/
		me.runNow = runNow;
		function runNow() {
			if (run_now) {
				//window.console.groupCollapsed("Publishing event '" + run_now.event_name + "' now for '" + run_now.owner + "' via runNow()");
				
				try {
					switch (arguments.length) {
						case 0:
							run_now.fn.call(that);
							break;
						case 1:
							run_now.fn.call(that, arguments[0]);
							break;
						case 2:
							run_now.fn.call(that, arguments[0], arguments[1]);
							break;
					}
				}
				catch (er) {
					window.console.warn("The [" + run_now.owner + "] subscription to the " + that + "[" + run_now.event_name + "] event failed with error:");
					window.console.error(er);
				}
				
				//window.console.groupEnd();
			}
		}

		/**
			Runs the named callback function if the event you're subscribing to has already happened. Use in conjunction with .subscribe() in cases where you're not sure if the event will happen before your code runs.

			@method runAsap
			@example 
				// When translations (from service) are ready, call my custom function, or call immediately if already ready.
				// Translations can be cached so we need to use runAsap() also.
				IBMCore.common.translations.subscribe("dataReady", "footermenu", myCustomFunctionName).runAsap(myCustomFunctionName);
		**/
		me.runAsap = runAsap;
		function runAsap() {
			if (run_now) {
				var count = handlers[run_now.event_name.toLowerCase()].runCount(); // Everywhere else lowercases the event name.
				if (count > 0) {
					//window.console.log("asap count for '"+run_now.owner+"' - '"+run_now.event_name+"': " + count + ". Running now.");
					runNow();
				}
				// else {
				// 	window.console.log("Event '" + run_now.event_name + "' for '" + run_now.owner + "' will not runNow() because the event has not happened yet. But it has been bound, so will run as soon as the event occurs.");
				// }
			}
			else {
				window.console.warn("Event '" + run_now.event_name + "' for '" + run_now.owner + " has no function available to run.");
			}
		}

		me.mergeWith(that);
	}

	/**
		This is the actual internal class constructor that handles the events. Used by EventsCoordinator internal class.
		
		@method EventHandler
		@constructor
		@private
	**/
	function EventHandler(that, name) {
		var me = this,
			run_count = 0,
			remove_count = 0,
			active_owners = {},
			events = [];

		// Returns an array of current active owners.
		me.activeOwners = activeOwners;
		function activeOwners() {
			var ns = [],
				key;

			for (key in active_owners) {
				if (active_owners[key]) {
					ns.push(key);
				}
			}

			return ns;
		}

		me.events = events;

		// Returns the # of times an event has been run.
		me.runCount = function () {
			return run_count;
		};

		// Adds an owner to the active owner array if not there already then adds the callback to the event queue.
		me.add = add;
		function add(owner, fn, prepend) {
			if (typeof active_owners[owner] === "undefined") {
				active_owners[owner] = true;
			}

			events[prepend ? "unshift" : "push"]({
				owner : owner,
				fn : fn,
				runs : 0
			});
		}

		// Removes an event subscription for a named owner.
		me.remove = remove;
		function remove(owner) {
			var i = -1;
			while (++i < events.length) {
				if (events[i].owner === owner) {
					events.splice(i, 1);
					i--;
					remove_count++;
					//window.console.log("Removed " + that + " event '" + name + "' for owner " + owner);
				}
			}
		}

		// Resets all event props.
		me.reset = reset;
		function reset() {
			run_count = 0;
			active_owners = {};
			remove_count = events.length;
			events = [];
		}

		// Resume an event subscription for the named subscriber.
		me.resumeSubscription = resumeSubscription;
		function resumeSubscription(owner) {
			if (active_owners[owner]) {
				active_owners[owner] = true;
			}
			else {
				window.console.warn("Cannot resumeSubscription function with an unknown owner: " + name);
			}
			return me;
		}

		// Pauses an event subscription for the named subscriber.
		me.pauseSubscription = pauseSubscription;
		function pauseSubscription(owner) {
			if (active_owners[owner]) {
				active_owners[owner] = false;
			}
			else {
				window.console.warn("Cannot pauseSubscription function with an unknown owner: " + name);
			}
			return me;
		}

		// Resume an event subscription for the ALL subscribers.
		me.resumeAllSubscriptions = resumeAllSubscriptions;
		function resumeAllSubscriptions() {
			var key;
			for (key in active_owners) {
				active_owners[key] = true;
			}
			return me;
		}

		// Pauses an event subscription for ALL subscribers.
		me.pauseAllSubscriptions = pauseAllSubscriptions;
		function pauseAllSubscriptions() {
			var key;
			for (key in active_owners) {
				active_owners[key] = false;
			}
			return me;
		}

		// Publishes the actual event for the publisher and calls all active subscribers' callback functions.
		me.publish = publish;
		function publish() {
			stop_propagation = false;

			run_count++;

			remove_count = 0;

			var i,
				len = events.length,
				ev,
				owner,
				fn;
				
			for (i = 0; i < len; i++) {
				/*if (remove_count > 0)
				window.console.log("Running event at an offset remove_count: "+remove_count, "background-color:#f90;color:#fff;");*/

				ev = events[i - remove_count];

				if (typeof ev === "undefined") {
					window.console.warn("Failed event on:");
					window.console.warn(that);
					throw "Cannot publish event: " + name;
				}

				owner = ev.owner;

				if (stop_propagation) {
					IBM.common.util.debug.add("log", "Propagation stopped. " + owner + " will not publish this time.");
				}
				else if (!active_owners[ev.owner]) {
					IBM.common.util.debug.add("log", "The [" + owner + "] subscription to the " + that + "[" + name + "] event is not active. (paused)");
				}
				else {
					ev.runs++;

					fn = ev.fn;
					
					//window.console.groupCollapsed(owner);
					
					try {
						switch (arguments.length) {
							case 0:
								fn.call(that);
								break;
							case 1:
								fn.call(that, arguments[0]);
								break;
							case 2:
								fn.call(that, arguments[0], arguments[1]);
								break;
						}
					}
					catch (er) {
						window.console.warn("Event function[" + i + "] failed. Owner: " + owner);
						window.console.error(er);
					}
					
					//window.console.groupEnd();
					
				}
			}
		}
	}

})(IBMCore);
;
/** 

	Random small utilities that don't deserve their own file.
	Each one declares a class then documents the function.
	
**/

(function($, IBM) {

	var util = IBM.namespace(IBM, "common.util");

	/**
		@class IBMCore.common.util.addCssRule		
	**/
	/**
		Utility to dynamically inject a CSS style/rule into the head.

		@method addCssRule
		@param selector (String) The CSS path/element you want to apply the style to.
		@param css {Varies} The style to apply to the CSS path/element. Can be a string (CSS style syntax) or an object.
		@example
			// Style as an object.
			IBM.common.util.addCssRule(".someClassName", {
				overflow: "hidden"
			});

			// Style as a string.
			IBM.common.util.addCssRule(".someClassName", "overflow: hidden");
	**/
	util.addCssRule = (function () {
		// Do some setup to determine how to inject the style element.
		// This is single run private shit. 
		// Returned function below.
		var style = document.createElement("style"),
			sheet;
			
		try {
			sheet = document.head.appendChild(style).sheet;
		} 
		catch (er) {
			sheet = document.getElementsByTagName("head")[0].appendChild(style).styleSheet;
		}
		
		// Function definition that this returns. This is what the callable function is.
		return function (selector, css) {
			var propText = "", k;

			if (typeof css === "string") {
				propText = css;
			}
			else {
				try {
					propText = Object.keys(css).map(function (p) {
							return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
						}).join(";");
				}
				catch (er) {
					for (k in css) {
						propText += k + ":" + (k === "content" ? "'" + css[k] + "'" : css[k]) + ';';
					}
				}
			}
			try {
				sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
			}
			catch (err) {
				sheet.addRule(selector, propText, sheet.rules.length);
			}
		};
	})();



	/**
		@class IBMCore.common.util.convertSecondsToHMS
	**/
	/**
		Takes a time/number in seconds and formats it to HH:MM:SS, but hours are only shown only if hours are > 1.
		Otherwise it's MM:SS
		
		@method convertSecondsToHMS
		@param timeInSeconds {Integer} The number of seconds you want to pretty-print as HMS.
		@return {String} Returns a formatted time using convention:  HH:MM:SS
	**/
	util.convertSecondsToHMS = function (timeInSeconds) {
		var sec_num = parseInt(timeInSeconds, 10),
			hours   = Math.floor(sec_num / 3600),
			minutes = Math.floor((sec_num - (hours * 3600)) / 60),
			seconds = sec_num - (hours * 3600) - (minutes * 60);

		// Hours is optional display, so make the : optional as well.
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		hours = hours < 1 ? "" : hours + ":";
		
		return hours + minutes + ":" + seconds;
	};



	/**
		@class IBMCore.common.util.generateId
	**/
	/**
		Returns a unique DOM id that is not used by any other element on the page. Useful for dynamically added elements. 
		<br />All IDs are in the format: ibm-dynid-<num>
		
		@method generateId
		@return {String} Unique ID.
	**/
	util.generateId = function () {
		var nid;
		do {
			IBM.common.util.idcount++;
			nid = 'ibm-dynid-' + IBM.common.util.idcount;
		} 
		while (document.getElementById(nid) !== null);

		return nid;
	};

	util.idcount = 0;
	


	/**
		@class IBMCore.common.util.getDataAttributes
	**/
	/**
		A helper that will get any special named/prefixed data-xxxx attributes. 
		<br>For example get all data-attrs that start with "ibmevent_", like @data-ibmevent_xxxxxxx.

		@method getDataAttributes
		@param el {DOM element} DOM element or jQuery element selector to grab the data attributes from.
		@param dataPrefix {String} The string to look for and grab the data-attrs that start with this.
		@return {Object} Object containing matching data attributes and values.
		@example 
			IBMCore.common.util.getDataAttributes($el, "ibmevent_")
	**/
	util.getDataAttributes = function (el, dataPrefix) {
		var $el = $(el),
			dataObj = $el.data() || {};

		if ($(el)[0] && dataPrefix !== "") {
			dataObj = {};

			$.each($(el).data(), function(k, v) {
				var varName = "";
				if (k.indexOf(dataPrefix) === 0) {
					varName = k.substring(dataPrefix.length);
					dataObj[varName] = v;
				}
			});
		}

		return dataObj;
	};



	/**
		@class IBMCore.common.util.getScrollbarWidth	
	**/
	/**
		Gets the scrollbar width of the browser being used.
		<br />Used for the freezeScrollbars utility (which is used for overlays.)

		@method getScrollbarWidth
		@return {Integer} Returns the width (in px) of the browser's scrollbar element.
	**/
	util.getScrollbarWidth = function () {
		var outer = document.createElement("div"),
			inner = document.createElement("div"),
			widthNoScroll,
			widthWithScroll;
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		document.body.appendChild(outer);

		widthNoScroll = outer.offsetWidth;
		// Force scrollbars.
		outer.style.overflow = "scroll";

		// Add innerdiv.
		inner.style.width = "100%";
		outer.appendChild(inner);

		widthWithScroll = inner.offsetWidth;

		// Remove divs.
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	};



	/**
		@class IBMCore.common.util.has12grid
	**/
	/**
		Tells you if the page is using the fluid 12 grid or not. 
		<br>Does the check on first run only, then simply always returns the answer.

		@method has12grid
		@return {Boolean} True|False if the 12 grid use was detected.
	**/
	util.has12grid = (function() {
		var y = null;

		return function() {
			if (y === null) {
				y = document.getElementsByClassName("ibm-fluid").length === 0 ? false : true;
			}
			return y;
		};
	})();



	/**
		@class IBMCore.common.util.hasScrollbars
	**/
	/**
		Tells you if the element has scrollbars showing or not.
		
		@method hasScrollbars
		@param el {DOM element} The element that you want to know if it currently is showing vertical scrollbars.
		@return {Boolean} True|False if it currently has scrollbars or not.
	**/
	util.hasScrollbars = function (el) {
		return $(el)[0] ? $(el)[0].scrollHeight > $(el).innerHeight() : false;
	};



	/**
		@class IBMCore.common.util.setIpcCookie
	**/
	/**
		Common public API to set the ipcInfo cookie with passed country and language codes.
		<br>Must use both country and language code.

		@method setIpcCookie
		@param cc {String} The two letter country code.
		@param lc {String} The two letter language code.
	**/
	util.setIpcCookie = function (cc, lc) {
		if (!cc || !lc || (cc+lc).length !== 4) {
			return;
		}

		var allowedTtl = IBMCore.www.module.truste.getUiAllowedStorageTtl(365 * 24 * 3600);

		IBM.common.util.cookie.set("ipcInfo", "cc=" + cc + ";lc=" + lc + ";ac=all", {
			path: "/",
			domain: ".ibm.com",
			expires: allowedTtl
		});
	};



	/**
		@class  IBMCore.common.util.string.htmlspecialchars
	**/
	/**
		Utility that escapes strings to they are safe for DOM injection.
		<br />It behaves the same as the PHP function htmlspecialchars and encodes &amp;, &lt;, &gt; and &quot;.
		<br />__NOTE:__ Available to all Strings via string prototype (shortcut) setup that simply calls this utility for ease of use. 
		(See example below)

		@method htmlspecialchars
		@param str {String} String to replace/escape HTML special characters in.
		@return {String} Returns a string with special HTML characters escaped.
		@example
			// Using the built-in String method.
			comments = someUserInputText.htmlspecialchars();

			// Or the long way using the actual utility:
			comments = IBMCore.common.util.string.htmlspecialchars(someUserInputText);
	**/
	IBM.common.util.string = {};
	util.string.htmlspecialchars = function (str) {
		return str.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\//g, '&#47;');
	};

	// String prototype (shortcut) that simply calls/binds the above utility to the string object.
	String.prototype.htmlspecialchars = function () {
		return IBM.common.util.string.htmlspecialchars(this);
	};


})(jQuery, IBMCore);
;
/** 

	Utility that adds/removes class to hide the browser scrollbars. Used for overlays.
	<br />
	<br />Class sets overflow: hidden, and adjusts page x pixels over to compensate for the missing scrollbars so the page doesn't shift/jitter when we show/hide overlays.

	@class IBMCore.common.util.freezeScrollbars

**/

(function($, IBM) {

	/**
		Adds a class to the body that acts like freezes the scrollbars (hides them).

		@method freezeScrollbars
		@param bool (Boolean) Pass true to hide the scrollbars, pass false to show them.
		@example
			IBMCore.common.util.freezeScrollbars(true);
			
	**/
	IBM.common.util.freezeScrollbars = function (bool) {
		$(document.body)[bool ? "addClass" : "removeClass"]("ibm-no-scroll");
	};

	
	// Onready, get the scrollbar width, 
	//   then inject our dynamic styles for the elements that need a frozen scrollbar option.
	$(function () {
		var scrollbarWidth = IBM.common.util.getScrollbarWidth();
	
		// Dynamic CSS styles to inject.
		IBM.common.util.addCssRule(".ibm-no-scroll #ibm-content-wrapper", {
			"margin-left": -scrollbarWidth + "px"
		});
	});

	
})(jQuery, IBMCore);
;
/**

	This file is an add-on to the event coodinator.
	This allows you to subscribe to multiple events. 
	Ex:  "After all three of these events happen: ____ && ____ && ____ , tell me."

	@class IBMCore.common.util.gatekeeper

**/

(function (IBM) {


	IBM.common.util.gatekeeper = function (starting_holds) {
		return new Gatekeeper(starting_holds);
	};

	/**
		Publishes "ready" event when all holds/events have happened that were subscribed to.

		@event ready
	**/
	/**
		Getkeeper object/constructor.
		<br />Called by "IBM.common.util.gatekeeper".
		<br />You can't use this directly. Use "new IBM.common.util.gatekeeper()" method.

		@method Gatekeeper
		@constructor
		@private
		@param starting_holds {Object} Events to wait to happen.
	**/
	function Gatekeeper (starting_holds) {
		var me = this,
			myEvents = IBM.common.util.eventCoordinator(me, "Gatekeeper", ["ready"]),
			holds = {};

		if (starting_holds instanceof Array) {
			addHolds(starting_holds);
		}
		else if (typeof starting_holds === "string") {
			addHold(starting_holds);
		}

	    /**
			This is a method of the "Gatekeeper" constructor.
			<br />Takes an array of holds/events and adds each one to the array of events to wait for.
			
			@method Gatekeeper.addHolds
			@param names {Array} An array of events to wait for to happen.
		**/
		me.addHolds = addHolds;
		function addHolds (names) {
			var i,
				name,
				len = names.length;

			for (i = 0; i < len; i++) {
				name = names[i];
				addHold(name);
			}
		}

	    /**
			This is a method of the "Getkeeper" constructor.
			<br />Takes a hold/event and adds it to the ones to wait for.
			
			@method Gatekeeper.addHoldGatekeeper.Gatekeeper.
			@param name {String} A name of an event to wait for to happen.
			@return {Object} The Gatekeeper widget object (me).
		**/
		me.addHold = addHold;
		function addHold (name) {
			holds[name] = true;
			return me;
		}

	    /**
			This is a method of the "Getkeeper" constructor.
			<br />Removes a hold from the ones to wait for.
			
			@method Gatekeeper.removeHold
			@param name {String} A name of an event to remove.
			@return {Object} The Gatekeeper widget object (me).
		**/
		me.removeHold = removeHold;
		function removeHold (name) {
			if (holds[name] !== true) {
				window.console.warn("v18: Removing a hold that does not exist: " + name + ". If the hold is added after, this removal will have no effect.");
			}
			else {
				holds[name] = false;
				tryRunningReady();
			}

			return me;
		}

	    /**
			This is a method of the "Getkeeper" constructor.
			<br />Gets a list of holds and returns them in an array.
			
			@method Gatekeeper.Gatekeeper.getHolds
			@return {Array} An array of holds we're waiting for.
		**/
		me.getHolds = getHolds;
		function getHolds () {
			var hlds = [],
				key;

			for (key in holds) {
				if (holds[key]) {
					hlds.push(key);
				}
			}

			return hlds;
		}

	    /**
			This is a method of the "Getkeeper" constructor.
			<br />Removes all holds/events we're waiting for.
			
			@method Gatekeeper.removeAllHolds
			@return {Object} The Gatekeeper widget object (me).
		**/
		me.removeAllHolds = removeAllHolds;
		function removeAllHolds () {
			holds = {};
			tryRunningReady();
		}

		function tryRunningReady () {
			var is_ready = isReady();

			if (is_ready) {
				myEvents.publish("ready");
			}

			return me;
		}

	    /**
			This is a method of the "Getkeeper" constructor.
			<br />Checks if all holds/events have happened so the Gatekeeper can fire the ready event or not.
			
			@method Gatekeeper.isReady
			@return {Object} The Gatekeeper widget object (me).
		**/
		me.isReady = isReady;
		function isReady () {
			var is_ready = true,
				key;

			for (key in holds) {
				if (holds[key]) {
					is_ready = false;
				}
			}

			return is_ready;
		}
	}

})(IBMCore);
;
/**

	Uses getCurrentGridSize utility to add a class to HTML element so CSS can be applied generically 
	per-grid size by pages without needing to do media queries or match v18 media queries.
	<br />Grid classes are same conventin as hidden-xxxx classes so everything matches up.

**/
(function($, IBM) {
	var util = IBM.namespace(IBM, "common.util");

	/**
		@class IBMCore.common.util.getCurrentGridSize
	**/
	/**
		A helper that simply returns the current page content body grid size being show/used in the browser.

		@method getCurrentGridSize
		@return {Integer} Returns the width (in px) of the current grid size being used.
	**/
	util.getCurrentGridSize = function () {
		var contentWidth = window.innerWidth,
			size = 0;
		
		// Fucking Safari calculates media query screen width differntly than they do with JS and don't include scrollbars.
		// So we need to change the way the width is calc'd for Safari to match it's media query calc.
		if ($("html.safari")[0]) {
			contentWidth = $(document.body).width();
		}
		
		// In order of browser width descending so we only check 1 number.
		// Yes this is weird, yes this is how to do a switch with other than "equal" condition check.
		switch (true) {
			case contentWidth >= 1480:
				size = 1440;
				break;
			case contentWidth >= 1240:
				size = 1200;
				break;
			case contentWidth >= 1000:
				size = 960;
				break;
			case contentWidth >= 760:
				size = 720;
				break;
			case contentWidth >= 580:
				size = 540;
				break;
			case contentWidth < 580:
				size = 0;
				break;
		}
		
		return size;
	};

	/**
		@class Other IBM - grid change
	**/
	/**
		Sets the grid size as a class on the root HTML element, allowing for nice-name class-based styles instead of
		having to keep up/in sync with media queries and code media queries on page-custom CSSes. 
		<br>Future-proof changing media queries.

		@method initGridClass
		@private
	**/
	/**
		Published on root HTML element when grid size is changed. 
		<br>Returns event "detail" with "gridnum" property containing the new grid size as a number.
		<br><strong>Example usage</strong>:
		<pre>
			document.documentElement.addEventListener("ibm-gridchange", function (evt) {
				console.log("Grid is now: ", evt.detail.gridnum);
			});
		</pre>

		@event ibm-gridchange
		
	**/
	function initGridClass () {
		var didResize = false,
			existingGridSize = null,
			gridClassMap = {
				0: "small",
				540: "medium",
				720: "medium",
				960: "large",
				1200: "xlarge",
				1440: "xlarge"
			};

		/**
			If the current grid size is different than previous determined one, 
			 change current value and class, then publish event.

			@method updateGridClass
			@private
		**/
		function updateGridClass () {
			var resizedGrid = IBM.common.util.getCurrentGridSize();

			// If the grid # didn't change, stop and do nothing.
			if (resizedGrid === existingGridSize) {
				return;
			}

			// If we're here it means the grid changed so set value and class, then publish event.
			existingGridSize = resizedGrid;

			$(document.documentElement).removeClass("ibm-grid-small ibm-grid-medium ibm-grid-large ibm-grid-xlarge").addClass("ibm-grid-" + gridClassMap[resizedGrid]);

			IBM.common.widget.manager.dispatchEvent({
				evtEl: document.documentElement, 
				evtName: "grid-change", 
				evtDetail: { 
					gridnum: resizedGrid
				}
			});
		}

		// Set initial grid size class.
		updateGridClass();

		// Standard on resize binding to set flag + interval desired to check flag and run callback to set class.
		$(window).on("resize", function () {
			didResize = true;
		});

		setInterval(function() {
			if (didResize) {
				didResize = false;
				updateGridClass();
			}
		}, 50);
	}

	// Init grid class setting on dom ready because we can't get the grid width until it's rendered anyways...
	$(initGridClass);
	
})(jQuery, IBMCore);

;
/**

	__NOTE:__ Please use the publish/subscribe event utility. Only use this for listening to non-DOM events, multiple async coordination, other scripts, or script events that you can't setup an event publisher for.

	<br />
	<br />The queue utility supports a waiting queue, basically a listener.
	<br />For example some code might only be ready for execution once a certain page element exists on the page. 
	<br />Waiting for the whole page to be ready is too slow if your element is at the top.
	<br />
	<br />
	Just add the elements to the queue and it will execute the callback function once the condition returns true.
	<br />
	<br />Unless you know the condition is guaranteed to happen, ALWAYS set a timeout to remove the listener so it doesn't infinitely
	keep listening for the condition and eat up memory.
	<br />
	<br />
	Usage:
		
		// Add a listener for when our dynamic list is populated.
		// And then setup a kill for the listener after 5 seconds b/c it would have happened by now, or it never will.
		myQueueItem = IBMcore.common.util.queue.push(
			function(){
				return jQuery("#someDynamicList li").length !== 0;
			},
			function(){
				alert("The dynamic list is populated");
			}
		);
		
		setTimeout(function(){
			IBMCore.common.util.queue.remove(myQueueItem);
		}, 5000);
	
	@class IBMCore.common.util.queue

**/

(function ($, IBM) {

	var me = IBM.namespace(IBM, "common.util.queue");
	
	// Used internally.
	me._queue = [];
	me._timer = null;
	me._count = 0;
	me._lock = false;

	/**
		Adds a new element to the END of the queue and returns a unique id for that element. As soon as
		an element is added the queue starts checking the condition callback (every 50ms) and once this
		function returns true the callback is executed once. Afterwards the element is removed from the queue.
		<br/>When the condition (param 1) returns true, your callback function (param 2) is run.
		
		@method push
		@param condition {function} Function reference that has to return true or false.
		@param callback {function} Function to be executed once the condition function returns true.
		@return {Integer} Unique ID for this queue'd listener item. Used when you want to kill/remove your listener.
	**/
	me.push = function (condition, callback) {
		me._count++;
		me._queue.push([me._count, condition, callback]);
		doWork();
		return me._count;
	};
	
	/**
		Adds a new element to the BEGINNING of the queue. Other then that it does exactly the same as
		the push function.
		
		@method unshift
		@param condition {function} Function reference that has to return true or false.
		@param callback {function} Function to be executed once the condition function returns true.
		@return {Integer} Unique ID for this queue'd listener item. Used when you want to kill/remove your listener.
	**/
	me.unshift = function (condition, callback) {
		me._count++;
		me._queue.unshift([me._count, condition, callback]);
		doWork();
		return me._count;
	};

	/**
		Removes the listener with the given id from the queue.
		
		@method remove
		@param id {Integer} The unique item-ID returned by the push or unshift function.
		@return {Boolean} True in case the item id was valid and removed, false otherwise.
	**/
	me.remove = function (itemid) {
		var i = 0, 
			j = me._queue.length;
		for (i = 0, j = me._queue.length; i < j; i++) {
			if (me._queue[i][0] === itemid) {
				me._queue.splice(i, 1);
				return true;
			}
		}
		return false;
	};
	
	/** 
		Internal worker function that works off the queue.
		
		@method doWork
		@private
	**/
	function doWork () {
		if (me._lock)  {
			return; // Should only run once.
		}
		if (me._queue.length === 0) {
			return;
		}
		
		me._lock = true;
		
		var i = 0, 
			j = me._queue.length;
		
		for (i = 0, j = me._queue.length; i < j; i++) {
			if (me._queue[i][1]()) {
				me._queue[i][2]();
				me._queue.splice(i, 1);
				i--;
				j = me._queue.length; // reset
			}
		}
		
		me._lock = false;

		// Set the timer again.
		me._timer = setTimeout(doWork, 50);
	}

	/**
		Waits until a given element (by ID) is available in the DOM and executes the passed callback function. 
		It utilizes the queue system and the call might be some time after the element is available, 
		not exactly when it is available. But overall the performance should be significantly faster than ready function.
		NOTE: If the last parameter "onload" is set and the element is not ready once the DOM is loaded
		the callback function is executed on load. Like a "whichever is faster" or a failsafe if you need it.
		
		@method waitForElement
		@param elementId {String} Element ID to be waited for, i.e. "ibm-com"
		@param callback {function} Function to be called once the element is available.
		@param [onload] {Boolean} Optional parameter; if set to true the callback is loaded once the DOM is ready.
	**/
	me.waitForElement = function (elementId, callback, onload) {
		// Add a listener to the queue for this element to be ready.
		// "done" used to cancel the callback for whichever doesn't run first.. element load or DOM ready.
		var done = false,  
			eid = me.push(
				function () {
					return document.getElementById(elementId) !== null;
				}, 
				function () {
					if (done) {
						return;
					}
					done = true;
					callback();
				}
			);

		// If the "onload" flag is set, add the callback to onready, so whichever comes first runs it.
		if (typeof onload !== "undefined" && onload === true) {
			$(function () {
				if (done) {
					return;
				}
				done = true;
				me.remove(eid);
				callback();
			});
		}
	};

})(jQuery, IBMCore);
;
/**

	Utility to capture all meta information on the page.
	<br />
	<br />Waits for the body element to load, then merges in the digitalData object into meta object, and normalized some country/language and other misc meta data. Also contains the utility to swap the page shell's locale.

	__Special feature: Changing the page shell locale__ 
	<br />For pages that want to do personalization or "language first" in an effort to provide the user with more relevant content. If you detect that the user is in a different country than your page is coded for, you can easily change the page shell masthead/footer/SBS locale by running the following JS snippet using any proper locale using standard $lc-$cc format:
	
		IBMCore.common.util.meta.changePageLocale("fr-ca"); // EX: French Canada

	@class IBMCore.common.util.meta

**/ 

(function ($, IBM) {

	/**
		Publishes this event after the &lt;head> has been loaded and all meta data parsed and setup from it.

		@event dataReady
	**/
	var me = IBM.namespace(IBM, "common.meta"),
		utilMeta = IBM.namespace(IBM, "common.util.meta"),
		myEvents = IBM.common.util.eventCoordinator(me, "Meta", ["dataReady"]);
		
	me.isLoaded = false;

	/**
		Automatically runs onload ASAP when the body element is available (means full &lt;head> has loaded.)
		Merges in the digitalData object into meta object, and normalizes some country/language and other misc meta data.
		<br />__Note:__ Calling this function manually causes all meta "ready" event subscribers' callbacks functions to run (again).

		@method init
	**/
	me.init = function() {
        IBMPerformance.mark('V18-meta-info-end');
        IBMPerformance.measure('V18-meta-wait-duration',
                               'V18-meta-info-begin',
                               'V18-meta-info-end');

        window.digitalData = window.digitalData || {};
		
		// Merge the digitalData object into our meta obj.
		// DO NOT MODIFY THE ORIGINAL DIGITALDATA OBJECT here.
		$.extend(true, me, window.digitalData);

		// DDO is required. Can't do shit without it.
		if (!me.page || !me.page.pageInfo) {
			return;
		}
		
		// Setup vars
		var pageInfoIBM = me.page.pageInfo.ibm,
			doclang = document.documentElement.lang,
			langCorrectionTable = { pt: "br", zh: "cn", de: "de", es: "es", fr: "fr", it: "it", ja: "jp", ko: "kr" };
		
		// Special tags & formats.
		pageInfoIBM.wwCase = "";
		pageInfoIBM.cc = ""; 
		pageInfoIBM.lc = "";
		
		// Set proper CC for us to use.
		if (!!pageInfoIBM.country) {
			pageInfoIBM.cc = $.trim(pageInfoIBM.country.toLowerCase());
			
			// If there are multiple countries use just the first one for the CC value
			if (pageInfoIBM.cc.indexOf(",") > -1) {
				pageInfoIBM.cc = $.trim(pageInfoIBM.cc.substring(0, pageInfoIBM.cc.indexOf(",")));
			}
			
			// GB is UK in the real world :)
			if (pageInfoIBM.cc === "gb") {
				pageInfoIBM.cc = "uk";
			}
			
			// Map worldwide (ZZ) pages to US, set a flag
			if (pageInfoIBM.cc === "zz") {
				pageInfoIBM.cc = "us";
				pageInfoIBM.wwCase = "Y";
			}
		}
		
		// Set proper LC for us to use.
		if (!!me.page.pageInfo.language) {
			pageInfoIBM.lc = me.page.pageInfo.language.substring(0, 2).toLowerCase();
		}
		
		// Meta tag not set & if language is set on HTML tag.
		// In other words... account for incorrect coding.
		if (!!doclang){ 
			pageInfoIBM.lc = pageInfoIBM.lc || doclang.substring(0,2).toLowerCase();
			pageInfoIBM.cc = pageInfoIBM.cc || doclang.substring(3,5).toLowerCase();
		}
		
		// Account for more incorrect coding.
		pageInfoIBM.lc = pageInfoIBM.lc || "en";
		pageInfoIBM.cc = pageInfoIBM.cc || "us";
		
		// Might be overridden by ibmweb.config.meta (for applications that cannot set the meta tags)
		pageInfoIBM.cc = IBM.common.util.config.get("meta.cc") || pageInfoIBM.cc;
		pageInfoIBM.lc = IBM.common.util.config.get("meta.lc") || pageInfoIBM.lc;
		
		
		// WTF?? On w3 in html 'lang' attribute is <lc> instead of <cclc> which is causing the masthead to load in default 'usen'
		pageInfoIBM.cpi = pageInfoIBM.cc + pageInfoIBM.lc;

		if (pageInfoIBM.cc === "us" && pageInfoIBM.lc !== "en") {
			if (langCorrectionTable[pageInfoIBM.lc]) {
				pageInfoIBM.cpi = langCorrectionTable[pageInfoIBM.lc] + pageInfoIBM.lc;
			}
		}
		
		// Set default subject if not exist.
		if (!pageInfoIBM.subject) {
			pageInfoIBM.subject = "ZZ999";
		}
		
		// Store encoding.
		pageInfoIBM.encoding = "utf8";
		pageInfoIBM.encodingRaw = "UTF-8";
		
		if ($("meta[charset]")[0]) {
			pageInfoIBM.encodingRaw = $("meta[charset]").attr("charset");
			pageInfoIBM.encoding = pageInfoIBM.encodingRaw.replace("-", "").replace("_", "").toLowerCase();
		}
		
		// Get the page title.
		pageInfoIBM.title = "";
		if ($("title")[0]) {
			pageInfoIBM.title = $("title")[0].innerHTML;
		}

		// Check if they disabled core modules or content widgets using the body data attributes. 
		// This is used by pages that load v18 asyncronously and can't set config using config.set() to disable widgets.
		if ($(document.body).data("coremodules_enabled") === false) {
			IBM.common.util.config.set({
				coremodules: {enabled: false}
			});
		}
		if ($(document.body).data("contentwidgets_enabled") === false) {
			IBM.common.util.config.set({
				contentwidgets: {enabled: false}
			});
		}

		// Merge our meta data back into the DDO for reuse by other systems. Only "page" object.
		$.extend(true, window.digitalData.page, me.page);
		
		// Tell subscribers we done.
		myEvents.publish("dataReady");
	};
	
	/**
		Changes the page locale to the passed locale (format: lc-cc), then re-inits meta so that it gets new translations and 
		recreates masthead/footer/SBS/anything else that waits for meta publish. 
		Locale param format uses indusry standard:  "lc-cc" (case insensitive b/c we set it properly).
		
		@method changePageLocale
		@param locale {String} Industry standard locale (language and country code) in format "lc-cc", case insensative.
		@example
			IBMCore.common.util.meta.changePageLocale("fr-ca");
	**/
	utilMeta.changePageLocale = function (locale) {
		var lc = locale.substr(0,2).toLowerCase(),
			cc = locale.substr(3).toUpperCase();
		
		window.digitalData.page.pageInfo.ibm.country = cc;  // Ex: ca
		window.digitalData.page.pageInfo.language = lc + "-" + cc;  // Ex: fr-CA
		
		// Run meta.init which will reset meta data, get new translations, 
		//  and recreate the masthead, footer, and SBS bar in the county/language version specified above.
		me.init();		
	};

	/** 
		Utility to return the current country code (lowercased) that the page is set to.
		<br>Get's the "corrected" value we set.

		@method getPageCc
		@return {String} The 2 letter country code (lowercased) that the page meta is set to.
	**/
	utilMeta.getPageCc = function () {
		return IBM.common.meta.page.pageInfo.ibm.cc;
	};
	
	/** 
		Utility to return the current language code (lowercased) that the page is set to.
		<br>Get's the "corrected" value we set.

		@method getPageLc
		@return {String} The 2 letter language code (lowercased) that the page meta is set to.
	**/
	utilMeta.getPageLc = function () {
		return IBM.common.meta.page.pageInfo.ibm.lc;
	};
	
	// Set our "loaded" var when we publish "ready" in case someone is just checking to see if this === true.
	me.subscribe("dataReady", "self", function() {
		me.isLoaded = true;
	});

	// Once #ibm-top is available *or* the page finished loading... whichever is first (ibm-top).
	IBMPerformance.mark('V18-meta-info-begin');
	IBM.common.util.queue.waitForElement("ibm-top", me.init, true);
	
})(jQuery, IBMCore);
;  // Run dependencies: event-coord, queue
/**

	Stats events helper utility.
	<br />
	<br />Utility to use to fire a stats/metrics event for an action that you want to be able to pull reports on for your page.

	@class IBMCore.common.util.statshelper

**/

(function ($, IBM) {

	// Create util namespace and make a shortcut to it for ourselves.
	var me = IBM.namespace(IBM, "common.util.statshelper");

	/**
		This fires an event to Coremetrics with whatever data objects are passed to it. The object props are the same
		 as they were from Netinsight event.

		@method fireEvent
		@param eventData {Object} Object with standard IBM metric event properties and values to send to Coremetrics.
	**/
	me.fireEvent = function (eventData) {
		var h1Element = document.getElementsByTagName("h2")[0],
			eventParams = ["Group", "Name", "Module", "Section", "Target", "FileSize", "LinkTitle"],
			i,
			thisParamName;
		
		// If the inbound object hasn't specified a link title param, us the title of the page.
		if (!eventData.ibmEvLinkTitle && !eventData.ibmEvLinktitle){
			if (h1Element && h1Element.innerHTML){
				$.extend(eventData, {"ibmEvLinkTitle": h1Element.innerHTML});
			}
		}
		
		// Set null for all params that don't exist.
		for (i = eventParams.length - 1; i >= 0; i--) {
			thisParamName = "ibmEv" + eventParams[i];
			if (!eventData[thisParamName]) {
				eventData[thisParamName] = "null";
			}
		}

		if (typeof ibmStats !== "undefined" && ibmStats.event) {
			ibmStats.event(eventData);
		}
		else {
			window.console.warn("v18: ibmStats.event doesn't exist yet, cannot fire event: ", eventData);
		}
	};

	/**
		This will get the list of custom metrics events set on an element via data-attr and return an object with the IBM metrics event parameters and values. Only used on videoplayer by default to extend the default tagging for page owners that want to override the default widget event tagging.
		<br />Syntax for the HTML data-attr is:  data-ibmevent_<event param lowercased>="some value"

		@method getCustomEventParams
		@param $el {jQuery DOM selector} The element you want to get the custom data-attr metrics event params from.
		@return eventData {Object} Object with IBM metrics event params and values that were set on the passed element.
	**/
	me.getCustomEventParams = function ($el) {
		var dataAttrs = IBM.common.util.getDataAttributes($el, "ibmevent_"),
			eventParamMappingArr = {
				ibmev: "ibmEV",
				ibmevaction: "ibmEvAction",
				ibmevname: "ibmEvName",
				ibmevmodule: "ibmEvModule",
				ibmevgroup: "ibmEvGroup",
				ibmevsection: "ibmEvSection",
				ibmevlinktitle: "ibmEvLinkTitle",
				ibmevfilesize: "ibmEvFileSize",
				ibmevtarget: "ibmEvTarget"
			},
			ibmevParams = {};

		$.each(dataAttrs, function (k, v) {
			ibmevParams[eventParamMappingArr[k]] = v;
		});

		return ibmevParams;
	};

})(jQuery, IBMCore);

;  // Run dependencies: queue
/**
	
	Browser localStorage utilities.
	<br />
	<br />Just like the common cookie utility, this provides a standardized way to work with browser localStorage.
	<br />This util uses JSON (browser API).

	@class IBMCore.common.util.storage
	
**/

(function ($, IBM) {

	var me = IBM.namespace(IBM, "common.util.storage");

	/**
		Clears the user's browser localStorage (for the owning domain).
		<br />CAUTION: This is the localStorage equivalent of clearing all of the user's cookies for your domain.
		
		@method clear
		@return {Boolean} True if localStorage is supported, else false.
	**/
	me.clear = function () {
		if (!me.isSupported()) {
			return false;
		}

		localStorage.clear();
		return true;
	};

	/**
		Gets the requested item from browser localStorage.
		
		@method getItem
		@param key {String} The name of the key/item to get from localStorage.
		@return {Varies} The data for the key if localStorage is supported &amp;&amp; if key exists &amp;&amp; key is not expired,
		 else returns: null.
	**/
	me.getItem = function (key) {
		IBMPerformance.mark('V18-storage-get-begin');

		var storageData = null,
			expires = 0, // 0 means no expiration.
			timeNow = new Date().getTime();
			
		if (!me.isSupported()) {
			return null;
		}

		// If it has an expiration date (has a # other than 0) that has passed, remove it b/c it's invalid data now.
		// else parse the storage data and set it for return.
		if (localStorage.getItem(key) !== null) {
			expires = JSON.parse(localStorage.getItem(key)).expires;

			if (expires !== 0 && expires < timeNow) {
				me.removeItem(key);
			}
			else {
				storageData = JSON.parse(localStorage.getItem(key)).value;
			}
		}
		
		IBMPerformance.mark('V18-storage-get-end');
		IBMPerformance.measure('V18-storage-get-duration-' + key,
			'V18-storage-get-begin',
			'V18-storage-get-end');		

		return storageData;
	};

	/**
		Checks if browser localStorage is supported by the current user's browser.
		<br />This is used by every method in this utility class so you don't need to use this unless you have special case use for it.
		<br />Provided as a public method purely for your convenience.
		
		@method isSupported
		@return {Boolean} True if localStorage is supported, else false.
	**/
	me.isSupported = function () {
		return Modernizr.localstorage && typeof JSON !== "undefined";
	};
	
	/**
		Deletes the requested item from browser localStorage.
		
		@method removeItem
		@param key {String} The name of the key/item to delete from localStorage.
		@return {Boolean} True if localStorage is supported, else false.
	**/
	me.removeItem = function (key) {
		if (!me.isSupported()) {
			return false;
		}
		localStorage.removeItem(key);
		return true;
	};

	/**
		Stores data in browser localStorage.
		
		@method setItem
		@param key {String} The name of the key to use for this data store in localStorage.
		@param value {String} The value/data to store in localStorage.
		@param [lifetime] {String} The storage item's TTL (time to live), in <strong>SECONDS</strong>. AKA: How long until it expires.
		 If lifetime is not supplied, the storage item TTL is session-only.
		@return {Boolean} True if localStorage is supported, else false.
	**/
	me.setItem = function (key, value, lifetime) {
		IBMPerformance.mark('V18-storage-set-begin');
   		
   		var expireTime = 0,
			storageObject = {},
			timeNow = new Date().getTime();
		
		// Can't do shit if localStorage isn't supported.
		if (!me.isSupported()) {
			return false;
		}

		// First we should remove this key if it already exists.
		me.removeItem(key);

		// If lifetime is specified...
		if (lifetime) {
			expireTime = lifetime * 1000;
			expireTime += timeNow;
		}

		// Build our storage object.
		storageObject = {
			"value": value, 
			"expires": expireTime
		};
		
		// Do it.
		localStorage.setItem(key, JSON.stringify(storageObject));

		IBMPerformance.mark('V18-storage-set-end');
		IBMPerformance.measure('V18-storage-set-duration-' + key,
			'V18-storage-set-begin',
			'V18-storage-set-end');		
		
		return true;
	};
	
})(jQuery, IBMCore);


;
/**

	Automatically gets the v18 common translations for all the UI text and links.
	<br />
	<br />Automatically runs onload. Waits until meta fires dataReady event, then gets the page locale's translation files, then publishes event for subscribers.
	<br />Any time that the meta init is run and publishes "dataReady", this translation init will run then publish "dataReady".

	@class IBMCore.common.translations

**/

(function ($, IBM) {

	/**
		Publishes this event after __main__ translations have been merged __and__ the DOM is ready. 
		<br />Kinda dumb, but just a helper so other JS doesn't have to do $(function().. themselves after translation ready event is fired.

		@event dataAndDomReady
	**/
	/**
		Publishes this event after __main__ translations have been merged into common.translations.data{}

		@event dataReady
	**/
	/**
		Publishes this event if there is an error getting the __main__ translations.

		@event error
	**/
	
	// Declare the translations object, events, and get stored xlations (if exist.)
	var me = IBM.namespace(IBM, "common.translations"),
		myEvents = IBM.common.util.eventCoordinator(me, "meta", [
			"dataAndDomReady", 
			"dataReady", 
			"error"
			]),
		currStoredTranslations = IBM.common.util.storage.getItem("v18mainxl8ns") || {},
		translations = {
			v18: {
				data: {},
				ready: false
			}
		};

	me.data = {};
	me.isDataLoaded = false;
	
	/**
		Callback from subscription to meta "dataReady" event publisher. 
		<br />Validates cc and lc, etc. If translations exist in storage, 
		uses cached copy and passes them to callback, else fetches translation data file for the locale.
		<br />__Note:__ When this runs and publishes ready event, it calls all active subscribers' callback functions.
		
		@method init
	**/
	me.init = function () {
		// Reset data object in the case when we change the page shell locale/wrapper.
		me.data = {};
		translations.v18.ready = false;

		// Check a few required meta tags exist. Can't do shit without these.
		if (!IBM.common.util.meta.getPageLc() || !IBM.common.util.meta.getPageCc()) {
			window.console.error("v18: Page is missing required digitalData object language and country code. v18 JS cannot continue.");
			return;
		}
		
		// Setup our listener to wait until translation file is ready/loaded, then fire the "dataReady" event.
		setupTranslationsReadyListener();

		// If we have this locale's translations in storage already, 
		//  check which ones we already have and set the flag for them.
		// (A bit of a gamble matching a child object name/property to check for existance, but they won't change. Just a FYI.)
		if (currStoredTranslations[IBM.common.meta.page.pageInfo.ibm.cpi]) {
			if (currStoredTranslations[IBM.common.meta.page.pageInfo.ibm.cpi].v18main) {
				translations.v18.ready = true;
			}
		}

		// If translations aren't already cached (from localstorage above), request the data file.
		if (!translations.v18.ready) {
			getV18Translations();
		}
	};


	/**
		Listens for translation data file to be loaded, caches them in storage, then fires "dataReady" events.
		
		@method setupTranslationsReadyListener
		@private
	**/
	function setupTranslationsReadyListener () {
		IBM.common.util.queue.push(function(){
			return translations.v18.ready;
		}, function(){
			// Merge all the translations into our local single data object "me.data" (public).
			// Keep any existing ones (merge in first) in case some other main module wants to share this storage facility.
			mergeTranslations(currStoredTranslations[IBM.common.meta.page.pageInfo.ibm.cpi]);
			mergeTranslations(translations.v18.data);

			// No do the actual storing.
			storeTranslations();

			// Now fire events that the data is ready to be used
			myEvents.publish("dataReady");
			
			$(function () {
				myEvents.publish("dataAndDomReady");
			});
		});
	}

	/**
		This uses the "data" utility. The data file calls the "provide" and automatically puts the translation object as a named
		 child in translation.data. This uses 'promises' to work.

		@method getV18Translations
		@private
	**/
	function getV18Translations () {
        IBMPerformance.mark('V18-begin-load-i18n');
		var useUrl = IBM.common.config.dataUrl + IBM.common.meta.page.pageInfo.ibm.cpi + ".js";

		$.ajax({
				url: useUrl,
				dataType: "script",
				cache: true
		    }).done(function () {
                IBMPerformance.mark('V18-end-load-i18n');
                IBMPerformance.measure('V18-load-i18n',
                                      'V18-begin-load-i18n',
                                      'V18-end-load-i18n');

				translations.v18.ready = true;
			}).fail(function (message) {
				window.console.error('v18: Error while loading main v18 translation file', message);
				translations.v18.ready = true;
				myEvents.publish("error");
			});
	}

	/**
		Merges the inbound object into public IBMCore.common.translations.data object.

		@method mergeTranslations
		@private
		@param data {Object} An object (of translations) to merge into common.translations.data{}
	**/
	function mergeTranslations (data) {
		$.extend(true, me.data, data);
	}
	
	/**
		Adds the current locale translations (me.data) into currStoredTranslations{} then saves into localStorage.
		<br>Only stores the latest one, otherwise it builds up with locale change.
		<br />Current TTL for stored translations is 4 hours.

		@method storeTranslations
		@private
	**/
	function storeTranslations () {
		currStoredTranslations[IBM.common.meta.page.pageInfo.ibm.cpi] = me.data;
	   
		// Only store the v18main ones, because localeSelector stores it's own.
		var storeThis = {},
			allowedTtl = IBMCore.www.module.truste.getUiAllowedStorageTtl(4 * 3600);
		
		storeThis[IBM.common.meta.page.pageInfo.ibm.cpi] = {"v18main": me.data.v18main};
			
		IBM.common.util.storage.setItem("v18mainxl8ns", storeThis, allowedTtl);
	}

	// Set our "loaded" var when we publish "ready" in case someone is just checking to see if this === true.
	me.subscribe("dataReady", "self", function () {
		me.isDataLoaded = true;
	});

	// META is a requirement. Listen for meta to be finished, then get the translations.
	IBM.common.meta.subscribe("dataReady", "translations", me.init).runAsap(me.init);

})(jQuery, IBMCore);
;  // Run dependencies: meta
/**

	Web page user object.
	<br />
	<br />Sets up a common user object with data retrieved from the Demandbase service (or cached data).
	<br />Fires an event with user info onload for metrics tagging purposes.
	<br />Stores user info in localStorage object (if supported) with a TTL so we don't call the service on every page view.
	<br />Every x# days (set in a var) stored data object expires and we "refresh" it by calling DB and storing again.
	<br />
	<br />Subscribe to the particular event that is needed and then to retrieve user info call this:
	
	IBMCore.common.util.user.getInfo();

	<br />The list of properties that are added to the user are:
	
	Fields that are populated from the demandbase WSR (web service request):
		annual_sales
		audience
		audience_segment
		b2b
		b2c
		city
		company_name
		country
		country_name
		employee_count
		employee_range
		forbes_2000
		fortune_1000
		industry
		information_level
		ip
		marketing_alias
		phone
		primary_naics
		primary_sic
		registry_city
		registry_country_code
		registry_state
		state
		stock_ticker
		street_address
		sub_industry
		traffic
		web_site
		zip
	
	Fields populated from the IBMid WSR:
		imageUrl
		newNotificationCount
		signedin
	
	Misc. other info that is added for completeness:
		browser_lang
		ipcinfo


	@class IBMCore.common.util.user

**/

(function ($, IBM) {

	/**
		Publishes this event after we've retrieved the info from the Demandbase web service request.

		@event userIpDataReady
	**/
	/**
		DEPRECATED: Publishes this event after we've retrieved the info from the IBMid web service request.
		<br />Legacy, because IBMid WSRs were consolidated and contains all info now. Publishes at the same time as IBMDataReady.

		@event userstateReady
		@deprecated
	**/
	/**
		Publishes this event after we've retrieved all the info from the IBMid web service request.

		@event userIBMDataReady
	**/
	/**
		Publishes this event after the initial object is setup. 
		<br />Does not necessarily mean the object is populated, but just that the object exists and is ready to be populated.

		@event ready
	**/
	/**
		Publishes this event if there's an error requesting user data, ex: if it's a non-IBM domain.

		@event error
	**/
	var me = IBM.namespace(IBM, "common.util.user"),
		myEvents = IBM.common.util.eventCoordinator(me, "user", [
				"userIpDataReady", 
				"userIBMDataReady", 
				"userstateReady", 
				"error",
				"ready"
			]),
		dataFields = [
			"annual_sales",
			"audience",
			"audience_segment",
			"b2b",
			"b2c",
			"city",
			"company_name",
			"country",
			"country_name",
			"demandbase_sid",
			"employee_count",
			"employee_range",
			"forbes_2000",
			"fortune_1000",
			"industry",
			"information_level",
			"ip",
			"isp",
			"marketing_alias",
			"phone",
			"primary_naics",
			"primary_sic",
			"registry_city",
			"registry_country_code",
			"registry_state",
			"state",
			"stock_ticker",
			"street_address",
			"sub_industry",
			"traffic",
			"web_site",
			"zip"
		],
		encryption = {
			cryptKey: "yxsdpqmouenictjarzvkbfhwlg",
			decode: function (encodedStr) {
				// Bool values are stored as-is, just return them.
				if (typeof encodedStr === "boolean") {
					return encodedStr;
				}

				var ciphertext = encodedStr,
					i,
					plaintext = "",
					re = /[a-z]/;

				for (i = 0; i < ciphertext.length; i++) {
					if (re.test(ciphertext.charAt(i))) {
						plaintext += String.fromCharCode(encryption.cryptKey.indexOf(ciphertext.charAt(i)) + 97);
					}
					else {
						plaintext += ciphertext.charAt(i);
					}
				}

				return decodeURIComponent(plaintext);
			},
			encode: function (str) {
				if (typeof str !== "string" || !str || str === "") {
					return str;
				}

				var plaintext = str.toLowerCase(),
					ciphertext = "",
					i,
					re = /[a-z]/;

				for (i = 0; i < plaintext.length; i++) {
					if (re.test(plaintext.charAt(i))) {
						ciphertext += encryption.cryptKey.charAt(plaintext.charCodeAt(i) - 97);
					}
					else {
						ciphertext += plaintext.charAt(i);
					}
				}

				return encodeURIComponent(ciphertext);
			}
		},
		ipForced = IBM.common.util.url.getParam("ip") || "",
		services = {
			signedin: {
				complete: false
			}
		},
		storage = {
			expireDaysBasic: 3,
			expireDaysDetailed: 3,
			key: "comusrtag"
		},
		user = {},
		userIpDataReady = false,
		userIBMDataReady = false,
		userstateReady = false;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//	User object and demandbase stuff
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
		Called from the callback from the user data request to Demandbase.
		<br />Loops thru the fields we want and adds them to a data object and returns to the caller.

		@method createUserdataFromServiceRequest
		@private
		@param data {Object} The JSON object returned from Demandbase.
		@return {Object} A data object to merge into the common user object.
	**/
	function createUserdataFromServiceRequest (data) {
		var userObjData = {};

		// Loop thru our fields and set user data. 
		// For keys we want, set the value to n/a if they don't exist from DB.
		$.each(dataFields, function () {
			var fieldName = this,
				fieldValue = data[fieldName];

			// Convert non-existant fieldNames or values to n/a,
			// and convert non-bool values to string and lowercase.
			if (fieldValue === null || typeof fieldValue === "undefined") {
				fieldValue = "n/a";
			}
			else if (typeof fieldValue !== "boolean") {
				fieldValue = fieldValue.toString().toLowerCase();
			}

			userObjData[fieldName] = fieldValue;
		});

		// Always keep this intact and never replace with "n/a" b/c it's used as a flag.
		userObjData.information_level ="basic";

		return userObjData;
	}

	/** 
		Returns the user object with known data about the user. ALL NON-PII stuff.

		@method getInfo
		@return {Object} The user object populated with available data.
	**/
	me.getInfo = getInfo;
	function getInfo () {
		return user;
	}

	/** 
		Does same basic cookie check coremetrics does to determine if user is an IBMer or not and adds it to user object.
		<br>Technically you can just add one of these cookies and make it "true", but this is a good enough check.
		<br>IOW: There is no assurance here and it shouldn't be used as such.
		 <br>NOTE: This does NOT mean they are currently connected to the intranet. Just that they are an IBMer and have used w3/SSO and authenticated at some point.

		@method addIBMerCheckData
		@private
	**/
	function addIBMerCheckData () {
		var hasCookie = (String(document.cookie).match(/(^| )(w3ibmProfile|w3_sauid|PD-W3-SSO-[^\=]*|OSCw3Session|IBM_W3SSO_ACCESS)=/));

		me.setInfo({
			isIBMer: hasCookie ? true : false
		});
	}

	/**
		Tries to get our data from local storage and decrypts the key & value and returns the decrypted object.

		@method getUserdataFromStorage
		@private
		@return {Object} The stored/cached user data if exists and not expired.
	**/
	function getUserdataFromStorage () {
		var key,
			userObjData = {},
			encryptedObj = IBM.common.util.storage.getItem(storage.key),
			decodedKey,
			decodedVal;

		if (typeof encryptedObj === "object") {
			for (key in encryptedObj) {
				if (encryptedObj.hasOwnProperty(key)) {
					decodedKey = encryption.decode(key);
					decodedVal = encryption.decode(encryptedObj[key]);
					
					userObjData[decodedKey] = decodedVal;
				}
			}
		}

		return userObjData;
	}

	/**
		Requests data from the Demandbase service.
		<br />This is only called if no storage data exists (or it was past expiration date).
		<br />If the site is not *.ibm.com (referrer rules for web service), then "error" event is published.
		<br />Calls methods to populate and store user data if valid.

		@method requestUserIpdataFromService
		@private
	**/
	function requestUserIpdataFromService () {
		// If the page isn't on an ibm.com domain, don't even call the service b/c it won't work and will throw a JS error.
		// if (window.location.hostname.indexOf(".ibm.com") === -1) {
		// 	myEvents.publish("error");
		// 	return;
		// }
		
		// Allows you to pass any IP address via "?ip=x.x.x.x" in page URL for testing.
		// Uses special URL that only allows IPv4. DB doesn't support IPv6 yet.
		// Build user data from returned data from service and populate our user object with it.
		// Then store it in localstorage for caching.
		IBMPerformance.mark('V18-dbipcall-begin');
		
		$.ajax({
			url: "https://api.www.s81c.com/webmaster/dbip/",
			dataType: "jsonp",
			success: function(response) {
				var userData = createUserdataFromServiceRequest(response);

				// Merge the inbound data object into our common user object.
				me.setInfo(userData);

				// Store the common user object in localstorage for repeat views.
				storeUserObject();

				IBMPerformance.mark('V18-dbipcall-end');
				IBMPerformance.measure('V18-dbipcall-duration',
					'V18-dbipcall-begin',
					'V18-dbipcall-end');		

				// Publish event to tell subscribers the user data is ready for them to use.
				myEvents.publish("userIpDataReady");
			}
		});
	}

	/** 
		Merges the data object into the existing user object.

		@method setInfo
		@param dataObj {Object} The object to merge with existing user data.
		@return {Object} The user object, after populated.
	**/
	me.setInfo = setInfo;
	function setInfo (dataObj) {
		$.extend(user, dataObj);

		return user;
	}

	/**
		Try and get user data from local storage, else calls IP lookup service.
		<br />In the end, populates user object with data which is retrievable via the "getInfo" API.

		@method setUserIpData
		@private
	**/
	function setUserIpData () {
		// Try and get user data from local storage. Returns null or data. 
		var storageData = getUserdataFromStorage();

		/**
			If IP is forced || or no data was retrieved from storage ||
				or storage data was compromised (Ex: user screws with localstorage values)
				do WSR and then set data from service,

			Else the user had valid stored data, so merge it into the common user object.

			NOTE: "information_level" is used as a flag since other data is also kept in storage. Don't remove.
		**/
		if (!storageData || !storageData.information_level) {
			requestUserIpdataFromService();
		}
		else {
			// Take the data from storage and add it to our common user object.
			me.setInfo(storageData);

			// Tell subscribers the user IP data is ready for them to use.
			myEvents.publish("userIpDataReady");
		}
	}

	/**
		Loops thru each property in the common user object and encodes and stores it in localstorage for repeat view use (cache).
		
		@method storeUserObject
		@private
	**/
	function storeUserObject () {
		var key,
			storageData = {},
			allowedTtl = IBMCore.www.module.truste.getUiAllowedStorageTtl((storage.expireDaysDetailed) * 24 * 3600);

		// Loop thru user object and encode each name/value.
		for (key in user) {
			if (user.hasOwnProperty(key)) {
				storageData[(encryption.encode(key))] = encryption.encode(user[key]);
			}
		}

		IBM.common.util.storage.setItem(storage.key, storageData, allowedTtl);
	}


	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//	IBM user status web services stuff
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
		Gets the ipcInfo cookie and adds it to the user data object for others to use as they wish.

		@method addIpcCookieData
		@private
	**/
	function addIpcCookieData () {
		// Example cookie value:  "cc=us;lc=en;ac=all"
		var ipcCookie = IBM.common.util.cookie.get("ipcInfo"),
			ipcCookieParts = [],
			ipcCookieCC = "",
			ipcCookieLC = "",
			data = {
				ipcinfo: "n/a"
			};

		// If they have the ipcInfo cookie (from planetwide page or v18 footer locale selector) grab the cc/lc.
		if (ipcCookie) {
			ipcCookieParts = ipcCookie.split(";");

			$.each(ipcCookieParts, function(){
				var itemParts = this.split("=");
				if (itemParts[0] === "cc") {
					ipcCookieCC = itemParts[1];
				}
				else if (itemParts[0] === "lc") {
					ipcCookieLC = itemParts[1];
				}
			});
			data.ipcinfo = ipcCookieLC + "-" + ipcCookieCC;
		}

		// Now add it to the common user object.
		me.setInfo(data);
	}

	/**
		Used by KC, keeping for legacy usage.
	**/
	me.setUserSigninState = setUserSigninState;
	function setUserSigninState (data) {
		if (data && data.results && data.results.signinstate === "1") {
			setObjectSignedin(true);
		}
		else {
			setObjectSignedin(false);
		}
		services.signedin.complete = true;
		myEvents.publish("userIBMDataReady");
		myEvents.publish("userstateReady");
	}

	/**
		Internal helper - common method used when we need to set user data as signed in or not.
	**/
	function setObjectSignedin (b) {
		me.setInfo({
			signedin: b
		});
	}

	/**
		The main gig. Called at run-time of this script since there is no DOM dependency and we can do this ASAP.
		<br />Subscribes and fires event when user data is ready.
		<br />Tries to get data from local storage. If expired, invalid, or the "ip" param was used, it makes a service request.
		<br />The common user object gets populated after data retrieved from storage or on WSR callback.

		@method init
		@private
	**/
	function init () {		
		////
		//  Subscriptions.
		////

		// Fire metric event when the user IP data is ready to use.
		me.subscribe("userIpDataReady", "self", function () {
			me.userIpDataReady = true;
		});

		me.subscribe("userIBMDataReady", "self", function(){
			me.userIBMDataReady = true;
		});

		me.subscribe("userstateReady", "self", function(){
			me.userstateReady = true;
		});

		me.subscribe("error", "self", function(){});

		// IP addy data:
		// Immediately retrieve user IP data from storage or WSR if needed and store it.
		if (IBM.common.util.config.isEnabled("useriplookup")) {
			setUserIpData();
		}

		// Add current/real-time values to user object.
		// This needs to be AFTER we merge in cached data (setUserIpData) so a real-time/current changed 
		//  value can override a cached one.
		// Add brower language to user object.
		// Add ipcinfo cookie to user object.
		user.browser_lang = window.navigator.userLanguage || window.navigator.language;
		addIpcCookieData();
		addIBMerCheckData();

		// Let subscribers know the object is setup. That's all this means.
		myEvents.publish("ready");
	}


	function getUserState () {
		if (IBM.common.util.config.isEnabled("userstateservice")) {
			$.ajax({
					url: IBM.common.config.userStateUrl,
					dataType: "jsonp",
					signedIn: false
				}).done(function (data) {
					if (data.user && data.user !== "Unauthenticated") {
						this.signedIn = true;
					}
				}).fail(function () {
					IBM.common.util.debug.add("warn", "User service failed.");
				}).always(function () {
					setObjectSignedin(this.signedIn);
					myEvents.publish("userIBMDataReady");
					myEvents.publish("userstateReady");
					services.signedin.complete = true;
				});
		}
	}

	/** Run now.
	********************************************************************************************/
	init();
	IBM.common.meta.subscribe("dataReady", "v18user", getUserState).runAsap(getUserState);

	
})(jQuery, IBMCore);
;
/**

	Accessibility utilities.
	<br />Things in here are only cases where it's not feasible nor realistic for the page dev to put 
	proper accessibility keyboard controls (required by JS) on an element. Item here are for __page shell elements only__.
	<br />
	<br />Currently these are generic a11y utilities and widgets, and only contain inits for 
	 primary tabs (since there's no other JS associated with them.)
	<br />
	<br />Accessibility is responsibility of the thing that generates the HTML element on the page:
	<br />Template generator or widget's JS or page developer (for content space HTML).

	@class IBMCore.common.util.a11y
	
**/

(function ($, IBM) {

	var me = IBM.namespace(IBM, "common.util.a11y");

	/**
		Take a named list element (UL) and setup standard tree (WAI tree widget) keyboard accessibility controls for it.
		<br />A "tree" is a specifially designed a11y widget which is simply a list with items and nested lists.
		<br />A tree usually has a "selected" state so tab focus-in should goto the active/highlighted element.
		<br />There's not much flexibility in the core structure: UL > LI > A + UL > LI > A, etc. and because of this, this a11y 
		widget can be applied to *any* tree-type HTML structure to satisfy a11y requirements b/c it relies on the required HTML 
		structure and can easily use .next() and .prev() and .parent() successfully.
		<br />How it works: This widget uses .on() and delegated event handling, which means tree items/links can be dynamically 
		injected at any time and they will automatically work in the flow of the keyboard controls without needing to re-init 
		or specifically bind the new items.
		
		@method makeTreeAccessible
		@param settings {Object} Settings for the tree accessibility widget.
		@param settings.el {DOM element} The UL to apply the tree accessibility controls to.
		@param [settings.focus] {Function} A custom function to call on focus of an element in the tree. Gets passed the element and 
		the event object.
		@param [settings.keydown] {Function} A custom function to call on keydown on an element in the tree. Gets passed the element 
		and the event object.	
	**/
	me.makeTreeAccessible = function (settings) {
		// Stop if the element we need to make accessible doesn't exist.
		var $rootEl = $(settings.el);
		if (!settings.el) {
			return;
		}
		
		// Setup left nav so only the ONE link with aria-selected="true" is the one that gets the tabstop (set index: -1 on everyone but it).
		// Once we set tabindex here, it never changes. Only focus changes. Tabindex ALWAYS stays on the aria-selected link.
		setLinkAsActive($rootEl, $rootEl.find("a[aria-selected='true']"));
		
		// Setup left nav for single tab stop and inter-nav keyboard control.
		// Uses delegated event binding so any dynamic links added post load will be binded.
		// On focus of a link in the tab set: ONLY CHANGE FOCUS.
		// On keydown of a link in the tab set: Goto start/end/prev/next or click depending what key was pressed.
		$rootEl.on("focus", "a", function(evt) {
			// Since this is false, it just updates the UL indexnum value which is used for prev/next control to know where to go.
			//setLinkAsActive($rootEl, $(this), false);
			
			// If a focus callback was defined, call it.
			if (settings.focus) {
				settings.focus(this, evt);
			}
		}).on("keydown", "a", function(evt) {
			var $currentLink = $(this);

			switch (evt.keyCode) {
				case 9:  // Tab
					// Do nothing. Let browser goto next tabstop.
					break;
					
				case 32:  // Spacebar
					evt.preventDefault();
					$currentLink.click();
					break;
					
				case 35:  // End key
					evt.preventDefault();
					gotoLastItem($rootEl);
					break;
				
				case 36:  // Home key
					evt.preventDefault();
					gotoFirstItem($rootEl);
					break;
				
				case 37:  // Left arrow
					evt.preventDefault();
					gotoParentTreeLink($currentLink);
					break;
				
				case 38:  // Up arrow
					evt.preventDefault();
					gotoPrevTreeLink($currentLink);
					break;
					
				case 39:  // Right arrow
					evt.preventDefault();
					gotoChildTreeLink($rootEl);
					break;
					
				case 40:  // Down arrow
					evt.preventDefault();
					gotoNextTreeLink($rootEl);
					break;
			}
			
			// If a keydown callback was defined, call it.
			if (settings.keydown) {
				settings.keydown(this, evt);
			}
		});
	};
	
	/**
		Take a named list element (UL) and setup standard menu (WAI menu widget) keyboard accessibility controls for it.
		<br />A "menu" is a specifially designed a11y widget which is simply a list with items and nested lists.
		<br />The menu is a single tab stop and controls within the menu items is done via arrow keys.
		<br />A menu does NOT need (and typically doesn't have) a "selected" state so tab focus in is usually just on the first element. As well, it does not need to remember what menu item you were on, when focus is removed.
		<br />There's not much flexibility in the core structure: UL > LI > A + UL > LI > A, etc. and because of this, this a11y 
		widget can be applied to *any* menu-type HTML structure to satisfy a11y requirements b/c it relies on the required HTML 
		structure and can easily use .next() and .prev() and .parent() successfully.
		<br />How it works: This widget uses .on() and delegated event handling, which means menu items/links can be dynamically 
		injected at any time and they will automatically work in the flow of the keyboard controls without needing to re-init 
		or specifically bind the new items.
		
		@method makeMenuAccessible
		@param settings {Object}  Object with optional cookie settings:
		@param settings.el {DOM element} The UL to apply the menu accessibility controls to.
		@param [settings.focus] {Function} A custom function to call on focus of an element in the menu. Gets passed the element and 
		the event object.
		@param [settings.keydown] {Function} A custom function to call on keydown on an element in the menu. Gets passed the element 
	**/
	me.makeMenuAccessible = function (settings) {
		// Stop if the element we need to make accessible doesn't exist.
		var $rootEl = $(settings.el);
		if (!settings.el) {
			return;
		}

		// A menu system shouldn't have a pre-focused item. We can say it's selected/highlighted, but jumping to 
		//  a focused item would be wonky that's why you don't do it.

		// A menu looks like this with ARIA attrs:
		//  (UL)menubar (top-level UL)
		//	  (button)menuitem    menuitem    menuitem    menuitem  
		//	  (UL)menu        menu        menu        menu
		//	    (A)menuitem    menuitem    menuitem    menuitem  
		
		// For a11y example how it's supposed to work:  
		// Keyboard controls: https://www.w3.org/WAI/GL/wiki/Using_ARIA_menus#Success_Criteria_2.1.1_Keyboard
		// Example (from URL above): http://oaa-accessibility.org/examplep/menubar1/
		
		// Controls are based on aria-role tagging. 
		// If a web dev doesn't tag them properly, then we don't know how to control it with arrow keys!

		// Uses delegated event binding so any dynamic links added post load will be binded.
		// NOTE: The "rootEl" is the outermost, main UL.

		// Take all menu items out of the tab order except the first one. Tabbing onto the menu system always goes to first item.
		$rootEl.find(":focusable").attr("tabindex", -1).filter(":first").attr("tabindex", 0);

		$rootEl.on("focus", "a, button", function (evt) {
			// If a focus callback was defined, call it.
			if (settings.focus) {
				settings.focus(this, evt);
			}
		}).on("keydown", "a, button", function (evt) {
			var $currentLink = $(this);

			switch (evt.keyCode) {
				case 9:  // Tab
					// Remove any active classes and let browser goto next tabstop.
					$rootEl.find(".ibm-active").removeClass("ibm-active");
					break;
					
				case 27:  // Esc
					// Close menu
					$rootEl.find(".ibm-active").removeClass("ibm-active");
					break;
					
				case 32:  // Spacebar
					evt.preventDefault();
					$currentLink.click();
					break;
					
				case 35:  // End key
					evt.preventDefault();
					gotoLastItem($rootEl);
					break;
				
				case 36:  // Home key
					evt.preventDefault();
					gotoFirstItem($rootEl);
					break;
				
				case 37:  // Left arrow
					evt.preventDefault();
					menuLeftArrowControl($currentLink);
					break;
				
				case 38:  // Up arrow
					evt.preventDefault();
					menuUpArrowControl($currentLink);
					break;
					
				case 39:  // Right arrow
					evt.preventDefault();
					menuRightArrowControl($currentLink);
					break;
					
				case 40:  // Down arrow
					evt.preventDefault();
					menuDownArrowControl($currentLink);
					break;
			}
			
			// If a keydown callback was defined, call it.
			if (settings.keydown) {
				settings.keydown(this, evt);
			}
		});
	};

	/**
		On callback of down arrow; checks if there's a menu for the current item. If so, it opens and goes to first item in
		the menu, else it goes to the next sibling item to the item passed.

		@method menuDownArrowControl
		@private
		@param $currentItemLink {jQuery selector} The currently focused link.
	**/
	function menuDownArrowControl ($currentItemLink) {
		// If we're on a menubar item, open the menu and focus on the first item in the menu.
		// Else just focus down to the next item.
		if ($currentItemLink.closest("ul").attr("role") === "menubar") {
			if ($currentItemLink.siblings("ul")[0]) {
				openMenu($currentItemLink);
				gotoFirstItem($currentItemLink.siblings("ul"));
			}
			else {
				gotoNextLink($currentItemLink.closest("ul"));
				openMenu($currentItemLink.parent("li").next("li"));
				gotoFirstItem($currentItemLink.parent("li").next("li").children("ul"));
			}
		}
		else {
			gotoNextItem($currentItemLink);
		}
	}

	/**
		Adds an active class to the current main item's parent. Doesn't actually "open" the menu, but sets a class
		on the parent and CSS "shows" the nested UL based on that class.
		<br/>Used in conjunction with "gotoFirstItem" (called after this is called).

		@method openMenu
		@private
		@param $currentItemLink {jQuery selector} The currently focused link.
	**/
	function openMenu ($currentItemLink) {
		$currentItemLink.parent("li").addClass("ibm-active").siblings().removeClass("ibm-active");
	}

	/**
		On callback of right arrow. If there's no next item, loops to first one. If focus is on a sub-menu item, it hops to the next
		main menu bar item and opens that menu (if exists), else just highlights the next main menu item or loops to first one.

		@method menuRightArrowControl
		@private
		@param $currentItemLink {jQuery selector} The currently focused link.
	**/
	function menuRightArrowControl ($currentItemLink) {
		// If I'm on a main menu link and there's a next one, open it and focus on first item.
		// Else wrap to first main item and open and focus.
		var $thisMenubarLi = $currentItemLink.closest("ul[role='menu']").parent("li"),
			$thisParentLi = $currentItemLink.parent("li"),
			$nextMenuItem;

		
		if ($thisMenubarLi.next("li").length === 1) {
			$nextMenuItem = $thisMenubarLi.next("li");
		}
		else if ($thisMenubarLi.next("li").length === 0 && $thisMenubarLi.siblings("li").length > 0) {
			$nextMenuItem = $thisMenubarLi.parent("ul").children("li:first");
		}
		else {
			$nextMenuItem = $thisParentLi.next("li");
		}

		if ($nextMenuItem[0]) {
			$nextMenuItem = $nextMenuItem.siblings().removeClass("ibm-active").end().addClass("ibm-active").find(":focusable").first().focus();
			gotoFirstItem($nextMenuItem.siblings("ul"));
		}
		else {
			gotoFirstItem($currentItemLink.closest("ul"));
		}
	}

	/**
		On callback of left arrow. If there's no previous item, loops to last one. If focus is on a sub-menu item, it hops to the previous
		main menu bar item and opens that menu (if exists), else just highlights the previous main menu item or loops to last one.

		@method menuLeftArrowControl
		@private
		@param $currentItemLink {jQuery selector} The currently focused link.
	**/
	function menuLeftArrowControl ($currentItemLink) {
		// If I'm on a main menu link and there's a next one, open it and focus on first item.
		// Else wrap to first main item and open and focus.
		var $thisMenubarLi = $currentItemLink.closest("ul[role='menu']").parent("li"),
			$thisParentLi = $currentItemLink.parent("li"),
			$nextMenuItem;

		
		if ($thisMenubarLi.prev("li").length === 1) {
			$nextMenuItem = $thisMenubarLi.prev("li");
		}
		else if ($thisMenubarLi.prev("li").length === 0 && $thisMenubarLi.siblings("li").length > 0) {
			$nextMenuItem = $thisMenubarLi.parent("ul").children("li:last");
		}
		else {
			$nextMenuItem = $thisParentLi.prev("li").length === 1 ? $thisParentLi.prev("li") : $thisParentLi.siblings("li:last");
		}

		if ($nextMenuItem[0]) {
			$nextMenuItem = $nextMenuItem.siblings().removeClass("ibm-active").end().addClass("ibm-active").find(":focusable").first().focus();
			gotoFirstItem($nextMenuItem.siblings("ul"));
		}
		else {
			gotoLastItem($currentItemLink.closest("ul"));
		}
	}

	/**
		On callback of up arrow; checks if there's a menu for the current item. If so, it opens and goes to first item in
		the menu, else it goes to the previous sibling item to the item passed.

		@method menuUpArrowControl
		@private
		@param $currentItemLink {jQuery selector} The currently focused link.
	**/
	function menuUpArrowControl ($currentItemLink) {
		// If we're on a menubar item, open the menu and focus on the first item in the menu.
		// Else just focus down to the next item.
		var $prevLink = $currentItemLink.parent("li").prev("li");

		if ($currentItemLink.closest("ul").attr("role") === "menubar") {
			if ($currentItemLink.siblings("ul")[0]) {
				openMenu($currentItemLink);
				gotoFirstItem($currentItemLink.siblings("ul"));
			}
			else {
				gotoPrevLink($currentItemLink.closest("ul"));
				openMenu($currentItemLink.closest("ul").children("li:last"));
				gotoFirstItem($currentItemLink.closest("ul").children("li:last").children("ul"));
			}
		}
		else if ($prevLink[0]) {
			gotoPrevLink($currentItemLink.closest("ul"));
		}
		else {
			gotoLastItem($currentItemLink.closest("ul"));
		}
	}
	
	/**
		Take a named SINGLE tab set (a UL) and setup standard tabs (WAI tablist) keyboard accessibility controls for it.
		<br />What's special: This a11y control widget applies to a single UL, not nested ULs (like a "tree"). It differs from a 
		toolbar b/c it has one "selected" item, and the tabindex does __not__ change, which are the opposite of a menubar
		<br />The HTML structure of tabs are generally the same, but not always and can't guarantee they are in UL format. DIVs are 
		starting to replace ULs for tabbing and menus structure. 
		<b />Since we can't be 100% sure what level links are coded in tabs, we can't use .next/prev() because the link might be 
		in a span, or in a LI, or in a span in a LI, etc. or even a DIV, and the next one might need to be traversed via a parent() 
		or parent.parent(). 
		<br />How it works: It works the same as the toolbar a11y widget: We collect an array of __all__ links in the UL no matter 
		how they are nested in HTML, and use their index # from the arrayto determine the prev/next link to focus on. This widget 
		uses .on() and delegated event handling, which means tree items/links can be dynamically injected at any time and they will 
		automatically work in the flow of the keyboard controls without needing to re-init or specifically bind the new items.
		<br />An example where is is used is primary-tabs and secondary-tabs on a tab nav layout page.
		
		@method makeTabsAccessible
		@param settings {Object} Settings for the tablist accessibility widget.
		@param settings.el {DOM element} The element/container to apply the tablist a11y controls to.
		@param [settings.focus] {Function} A custom function to call on focus of an element in the tablist. Gets passed the element and 
		the event object.
		@param [settings.keydown] {Function} A custom function to call on keydown on an element in the tablist. Gets passed the element 
		and the event object.	
	**/
	me.makeTabsAccessible = function (settings) {
		// Stop if the element we need to make accessible doesn't exist.
		var $rootEl = $(settings.el);
		if (!settings.el) {
			return;
		}
		
		// Setup tabs so only the one with aria-selected="true" is the one that gets the tabstop (set index: -1 on everyone but it).
		// Uses false b/c we setup/alter tabstops in this one call and never again for this widget type.
		setLinkAsActive($rootEl, $rootEl.find("a[aria-selected='true']"));
			
		// Setup tabs for single tab stop and inter-nav keyboard control.
		// Uses delegated event binding so any dynamic links added post load will be binded.
		// On focus of a link in the tab set: ONLY CHANGE FOCUS.
		// On keydown of a link in the tab set: Goto start/end/prev/next or click depending what key was pressed.
		$rootEl.on("focus", "a", function(evt) {
			// If a focus callback was defined, call it.
			if (settings.focus) {
				settings.focus(this, evt);
			}
		}).on("keydown", "a", function(evt) {
			switch (evt.keyCode) {
				case 9:  // Tab
					// Do nothing. Let browser goto next tabstop.
					break;
					
				case 32:  // Spacebar
					evt.preventDefault();
					$(this).click();
					break;
					
				case 35:  // End key
					evt.preventDefault();
					gotoLastItem($rootEl);
					break;
				
				case 36:  // Home key
					evt.preventDefault();
					gotoFirstItem($rootEl);
					break;
				
				case 37:  // Left arrow
					evt.preventDefault();
					gotoPrevLink($rootEl);
					break;
				
				case 38:  // Up arrow
					evt.preventDefault();
					gotoPrevLink($rootEl);
					break;
					
				case 39:  // Right arrow
					evt.preventDefault();
					gotoNextLink($rootEl);
					break;
					
				case 40:  // Down arrow
					evt.preventDefault();
					gotoNextLink($rootEl);
					break;
			}
			
			// If a keydown callback was defined, call it.
			if (settings.keydown) {
				settings.keydown(this, evt);
			}
		});
	};
	
	/**
		Take a named element (a toolbar container) and setup standard toolbar (WAI toolbar) keyboard accessibility controls for it.
		<br />What's special: This a11y control widget applies to a container of links, which are serial in nature/display and do not 
		contain nested, dropdown, or dynamic changing content. It differs from a tablist b/c it has never has a "selected" item, but 
		has a single tabstop which chnages based on the last focus'd item, which is the opposite of tabs.
		<br />The HTML structure of a toolbar is completely unknown. Because of this we can't use .next/prev() because there is no way 
		to know what level of HTML nesting the actual link is in. 
		<br />How it works: It works the same as the tablist a11y widget: We collect an array of __all__ links in the toolbar container 
		no matter how they are nested in HTML, and use their index # from the array to determine the prev/next link to focus on. This 
		widget uses .on() and delegated event handling, which means tree items/links can be dynamically injected at any time and they will automatically work in the flow of the keyboard controls without needing to re-init or specifically bind the new items.
		<br />An example where is is used is the masthead country/lang links, and the social sharing toolbar.

		@method makeToolbarAccessible
		@param settings {Object} Settings for the toolbar accessibility widget.
		@param settings.el {DOM element} The element/container to apply the toolbar a11y controls to.
		@param [settings.focus] {Function} A custom function to call on focus of an element in the toolbar. Gets passed the element 
		and the event object.
		@param [settings.keydown] {Function} A custom function to call on keydown on an element in the toolbar. Gets passed the element 
		and the event object.	
	**/
	me.makeToolbarAccessible = function (settings) {
		// Stop if the element we need to make accessible doesn't exist.
		var $rootEl = $(settings.el);
		if (!settings.el) {
			return;
		}

		//console.log($(settings.el));
		
		//settings = $.extend({useActiveClass: true}, settings);
		
		// Setup toolbar for single tab stop and inter-nav keyboard control.
		// Uses delegated event binding so any dynamic links added post load will be binded.
		// On focus of a link in the toolbar: Change tabindex and set active class.
		// On keydown of a link in the toolbar: Goto start/end/prev/next or click depending what key was pressed.
		$rootEl.on("focus", "a", function(evt) {
			setLinkAsActive($rootEl, $(this));
			
			// If a focus callback was defined, call it.
			if (settings.focus) {
				settings.focus(this, evt);
			}
		}).on("keydown", "a", function(evt) {
			switch (evt.keyCode) {
				case 9:  // Tab
					// Do nothing. Let browser goto next tabstop.
					break;
					
				case 32:  // Spacebar
					evt.preventDefault();
					$(this).click();
					break;
					
				case 35:  // End key
					evt.preventDefault();
					gotoLastItem($rootEl);
					break;
				
				case 36:  // Home key
					evt.preventDefault();
					gotoFirstItem($rootEl);
					break;
				
				case 37:  // Left arrow
					evt.preventDefault();
					gotoPrevLink($rootEl);
					break;
				
				case 38:  // Up arrow
					evt.preventDefault();
					gotoPrevLink($rootEl);
					break;
					
				case 39:  // Right arrow
					evt.preventDefault();
					gotoNextLink($rootEl);
					break;
					
				case 40:  // Down arrow
					evt.preventDefault();
					gotoNextLink($rootEl);
					break;
			}
			
			// If a keydown callback was defined, call it.
			if (settings.keydown) {
				settings.keydown(this, evt);
			}
		});
	};
	
	/**
		Focus on the first visible link in the given container element. This just finds the first descendent link and focuses on it.

		@method gotoFirstItem
		@param $linksContainer {jQuery selector} The element that contains links that you want to focus on the first one in.
	**/
	me.gotoFirstItem = gotoFirstItem;
	function gotoFirstItem ($linksContainer) {
		$linksContainer.find("a:visible:eq(0)").focus();
	}
	
	/**
		Focus on the last visible link in the given container element. This just finds the last descendent link and focuses on it, 
		no matter what the internal HTML structure is for container.

		@method gotoLastItem
		@private
		@param $linksContainer {jQuery selector} The element that contains links that you want to focus on the last one in.
	**/
	function gotoLastItem ($linksContainer) {
		$linksContainer.find("a:visible:eq(-1)").focus();
	}
	
	/**
		Focus on the next visible link (from current focused one) in the given container element. This uses the container's @data-activeindex 
		to determine what the current focused link index # is. Used by methods that do and don't want tabindex changed. 
		<br />If there is no next link (the last one is currently in focus), this loops back and goes to the first link per 
		a11y standards.

		@method gotoNextLink
		@private
		@param $linksContainer {jQuery selector} The element that contains links that you want to focus on the next one in.
	**/
	function gotoNextLink ($linksContainer) {
		// Find the index of the currently focused link, then add one to get the next VISIBLE link.
		var currFocusedLinkIndex = $linksContainer.find("a:visible").index($linksContainer.find("a:focus")),
			$nextLink = $linksContainer.find("a:visible:eq(" + (currFocusedLinkIndex + 1) + ")");

		if ($nextLink[0]) {
			$nextLink.focus();
		}
		else {
			gotoFirstItem($linksContainer);
		}
	}

	/**
		Focus on the previous visible link (from current focused one) in the given container element. This uses the container's 
		@data-activeindex to determine what the current focused link index # is. Used by methods that do and don't want tabindex 
		changed. 
		<br />If there is no previous link (the first one is currently in focus), this loops back and goes to the last link per 
		a11y standards.
		<br />Will probably change to try and use has:focus.prev method.

		@method gotoPrevLink
		@private
		@param $linksContainer {jQuery selector} The element that contains links that you want to focus on the previous one in.
	**/
	function gotoPrevLink ($linksContainer) {
		// Find the index of the currently focused link, then subtract one to get the previous VISIBLE link.
		var currFocusedLinkIndex = $linksContainer.find("a:visible").index($linksContainer.find("a:focus")),
			$prevLink = $linksContainer.find("a:visible:eq(" + (currFocusedLinkIndex - 1) + ")");

		if ($prevLink[0]) {
			$prevLink.focus();
		}
		else {
			gotoLastItem($linksContainer);
		}
	}

	/**
		Focus on the next item (LI/A)
		<br />If there is no next item (the last one is currently in focus), this loops back and goes to the first link per 
		a11y standards.

		@method gotoNextItem
		@private
		@param $currentLink {jQuery selector} The currently focused link.
	**/
	function gotoNextItem ($currentLink) {
		var $nextLink = $currentLink.closest("li").next("li").find("a");
		
		if ($nextLink[0]) {
			$nextLink.first().focus();
		}
		else {
			gotoFirstItem($currentLink.closest("ul"));
		}
	}


	/**
		Focus on the next link in the tree widget (from current focused one). This is specific for a tree structure 
		(ULs and nexted ULs). 
		<br />If there is no next link (the last one is currently in focus), this loops back and goes to the first link per 
		a11y standards.

		@method gotoNextTreeLink
		@private
		@param $treeContainer {jQuery selector} The container that houses all the items.
	**/
	function gotoNextTreeLink ($treeContainer) {
		var $nextLink = $treeContainer.find("a:focus").closest("li").next("li").find("a");
		
		if ($nextLink[0]) {
			$nextLink.first().focus();
		}
		else {
			gotoFirstItem($treeContainer.find("a:focus").closest("ul"));
		}
	}

	/**
		Focus on the previous link in the tree widget (from current focused one). This is specific for a tree structure 
		(ULs and nexted ULs). 
		<br />If there is no previous link (the first one in the current level UL is currently in focus), this loops back and 
		goes to the last link per a11y standards.

		@method gotoPrevTreeLink
		@private
		@param $treeContainer {jQuery selector} The container that houses all the items.
	**/
	function gotoPrevTreeLink ($currentLink) {
		var $prevLink = $currentLink.parent("li").prev("li").find("a");
		
		if ($prevLink[0]) {
			$prevLink.first().focus();
		}
		else {
			gotoLastItem($currentLink.closest("ul"));
		}
	}

	/**
		Focus on the parent link of the currently focused link in the tree widget. This is specific for a tree structure 
		(ULs and nexted ULs). 
		<br />If there is no parent tree, goto the previous link in the current link level per a11y standards.

		@method gotoParentTreeLink
		@private
		@param $currentLink {jQuery selector} The currently focused link.
	**/
	function gotoParentTreeLink ($currentLink) {
		var $parentLi = $currentLink.closest("ul").parent("li");

		if ($parentLi[0]) {
			$parentLi.children("a").first().focus();
		}
		else {
			gotoPrevTreeLink($currentLink);
		}
	}

	/**
		Focus on the first link in the next level down from the currently focused link level in the tree widget. This is 
		specific for a tree structure (ULs and nexted ULs). 
		<br />If there is no child level/links tree, goto the next link in the current link level per a11y standards.

		@method gotoChildTreeLink
		@private
		@param $treeContainer {jQuery selector} The container that houses all the items.
	**/
	function gotoChildTreeLink ($treeContainer) {
		var $childUl = $treeContainer.find("a:focus").closest("li").children("ul");
		
		if ($childUl[0]) {
			gotoFirstItem($childUl);
		}
		else {
			gotoNextTreeLink($treeContainer);
		}
	}

	/**
		Removes the tabstop from every link in the container and places it on the link.

		@method setLinkAsActive
		@private
		@param $linksContainer {jQuery selector} The container that houses all the items.
		@param $linkEl {jQuery selector} The link you want to make active and put the tabstop (tabindex=0) on. Removes it from other items in the container.
	**/
	function setLinkAsActive ($linksContainer, $linkEl) {
		// Return is the element doesn't exist b/c we need an element to do stuff.
		if (!$linkEl[0]) {
			return;
		}

		// Remove tab stop from all other links and make this one have it.
		$linksContainer.find("a").attr("tabindex", -1);
		$linkEl.attr("tabindex", 0);	
	}

	/**
		Automatically and dynamically sets the label on the &lt;main> element using text from the selected tab, subtab, and H1 on DOM ready.
		
		@method addMainElementLabel
		@private
	**/
	function addMainElementLabel () {
		var h1 = $(document.getElementById("ibm-leadspace-head")).find("h1").text() || "",
			selectedTab = $(document.getElementById("ibm-primary-tabs")).find("a[aria-selected='true']").text() || "",
			selectedSubtab = $(document.getElementById("ibm-secondary-tabs")).find("a[aria-selected='true']").text() || "",
			selectedLeftNav = $(document.getElementById("ibm-primary-links")).children("li").children("a[aria-selected='true']").text() || "",
			selectedLeftSubNav = $(document.getElementById("ibm-primary-links")).children("li").find("a[aria-selected='true']").text() || "";
			
		$("main").removeAttr("aria-labelledby").attr("aria-label", $.trim(selectedLeftSubNav + " " + selectedSubtab + " " + selectedLeftNav + " " + selectedTab + " " + h1));
	}
	
	/*******************************************************************************/
	// For STATIC ELEMENTS ONLY, add a11y stuff we need to add.
	// If it's a dynamic element/module/widget, then that element's JS is where any and all a11y is added. Not here.
	// Use setTimeout to push these to the back of the callstack/execution queue so it doesn't block 
	//   any other more important onload UI rendering code we set elsewhere.
	$(function () {
		addMainElementLabel();
		
		// Setup TABS as navigation accessibility widget unless it's a widget, in which case the widget JS does this as needed.
		if (document.getElementById("ibm-primary-tabs") && !$("#ibm-primary-tabs[data-widget]")[0]) {
			setTimeout(function(){
				IBM.common.util.a11y.makeTabsAccessible({
					el: document.getElementById("ibm-primary-tabs")
				});
			}, 100);
		}
		
		// Setup SUBTABS as navigation accessibility widget unless it's a widget, in which case the widget JS does this as needed.
		if (document.getElementById("ibm-secondary-tabs") && !$("#ibm-secondary-tabs[data-widget]")[0]) {
			setTimeout(function(){
				IBM.common.util.a11y.makeTabsAccessible({
					el: document.getElementById("ibm-secondary-tabs")
				});
			}, 100);
		}
	});

})(jQuery, IBMCore);
;
/**

	Automatic tracking event for v18 pages.
	<br />
	<br />This event is automatically fired on page load and reports on certain features being used by the page.
	
	@class Other IBM - common v18 page tracker
	
**/

(function ($, IBM) {

	/**
		Fires metric event, use "EvAction" as filter with value = "v18 page tracker"
		@event Page features metric event
	**/
	/**
		Fires on page load using detected page features for values.

		@method trackPageFeatures
		@private
	**/
	// Updated: R67 golive date: NEW "filesize" and "module"
	// Oct 1, 2016  started with grid size.
	// Oct 3, 2016 started with hires tracker.
	// Aug 30, 2017 removed 'ibmEvGroup' "left nav" : "tab nav"
	// Aug 30, 2017 added EvTarget feedback tracker.
	// R102 added 8 col grid tracker.
	// R105 removed feedback tracker.
	// R108 added connection type (future use).
	function trackPageFeatures () {
		var globPercent = IBM.common.util.config.get("survey.global_percent"),
			conectionType = "n/a",
			dbcc = IBM.common.util.user.getInfo().country;

		if (globPercent !== 0 && typeof globPercent !== "number") {
			globPercent = "not set";
		}
		globPercent = globPercent.toString();

		try {
			conectionType = navigator.connection.effectiveType;
		}
		catch (ignore) {}
			
		// Locale mismatch tracking.
		if (dbcc === "n/a") {
			dbcc = IBM.common.util.user.getInfo().registry_country_code;
		}

		// UP TO 8 generic "attribute"s.
		IBM.common.util.statshelper.fireEvent({
			ibmEV: "page load",
			ibmEvAction: "v18 page tracker",
			ibmEvFileSize: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
			ibmEvGroup: conectionType,
			ibmEvLinkTitle: IBM.common.util.getCurrentGridSize(),
			ibmEvModule: IBM.common.util.config.get("masthead.type"),
			ibmEvName: ($(document.documentElement).hasClass("hires") ? "1" : "0"),
			ibmEvSection: globPercent,
			// Locale info. Added June 14, 2018.
			attribute1: IBM.common.util.meta.getPageLc() + '-' + IBM.common.util.meta.getPageCc(),
			attribute2: dbcc + '^' + IBM.common.util.user.getInfo().browser_lang,
			attribute3: IBM.common.util.user.getInfo().ipcinfo,
			// Signed in or not. Added June 14, 2018.
			attribute4: IBM.common.util.user.getInfo().signedin ? "true" : "false",
		});
	}


	$(function () {
		setTimeout(function () {
			// Use user info to track locale mismatches, and page features all in 1 event now.
			// Updated: June 14, 2018.
			//IBM.common.util.user.subscribe("userIpDataReady", "v18pagetacker", trackPageFeatures).runAsap(trackPageFeatures);
			// Add holds and then subscribe to tell us when all of our holds are removed (all events happened).
			var gateKeeper = IBM.common.util.gatekeeper();

			gateKeeper.addHolds(["ipdata", "ibmdata"]);
			gateKeeper.subscribe("ready", "v18pagetacker", trackPageFeatures);
			
			// When IP data is available, remove that hold.
			IBM.common.util.user.subscribe("userIpDataReady", "v18tipdata", function () {
				gateKeeper.removeHold("ipdata");
			}).runAsap(function () {
				gateKeeper.removeHold("ipdata");
			});
			
			// When meta is ready, remove that hold.
			IBM.common.util.user.subscribe("userIBMDataReady", "v18tibmdata", function () {
				gateKeeper.removeHold("ibmdata");
			}).runAsap(function () {
				gateKeeper.removeHold("ibmdata");
			});

		}, 1500);
	});
	
	
})(jQuery, IBMCore);

;
/**
	
	bit.ly shortening API.
	<br />
	<br />Takes a URL and returns the bitly short version of it to the provided success (or error) callback function.
	<br />By default it will automatically grab and the current page URL unless you specify one, as shown below.
	<br />
	<br />Usage:
		
		IBMCore.common.util.bitly.shorten({
			url: "http://long-url-to-shorten.com/",
			success: function(shortUrl) {...},
			error: function(longUrL) {...}
		});
	
	@class IBMCore.common.util.bitly
	
**/

(function ($, IBM) {

	var me = IBM.namespace(IBM, 'common.util.bitly');

	/**
		Calls bitly web service to get the short URL and returns it to the provided success/error callback. 
		<br />This is async/jsonp.
		
		@method shorten
		@param {Object} options Object with settings to use for service call:
		@param {String} [options.url] Specific URL to use, else uses window.location.href.
		@param {Function} options.success Function to call on success of bitly service request. Passes short URL to function.
		@param {Function} [options.error] Function to call/run on bitly service request error. Passes original URL to function.
	**/
	me.shorten = function(options) {
		// Current browser URL is used if one was not provided.
		if (!options.url) {
			options.url = window.location.href;
		}
		
		$.ajax({
			url: (window.location.protocol === 'http:') ? 'http://api.bit.ly/v3/shorten' : 'https://api-ssl.bit.ly/v3/shorten',
			dataType: 'script',
			data: {
				login: IBM.common.config.bitly.login,
				apiKey: IBM.common.config.bitly.key,
				longUrl: options.url,
				format: 'json',
				callback: 'IBMCore.common.util.bitly._callback'
			},
			timeout: IBM.common.config.bitly.timeout,
			error: function(jqXHR) {
				window.console.error('v18: Error while getting bit.ly URL', jqXHR);
				if (options.error) {
					options.error(options.url);
				}
			}
		});
		
		/**
			Callback executed for bit.ly JSONP web service request and runs user-defined success or error callback function.
			
			@method _callback
			@private
			@param {Object} Response data from bitly web service request.
		**/
		me._callback = function(data) {
			// Check for errors and call the user's error callback if they gave us one.
			if (!data || !data.status_code || data.status_code !== 200) {
				window.console.error('v18: Error while getting bit.ly URL', data);
				if (options.error) {
					options.error(options.url);
				}
			}
			
			// Call the user's success callback if they gave us one.
			if (options.success) {
				options.success(data.data.url);
			}
		};
	};
	
	
})(jQuery, IBMCore);;
/**

	Truste
	<br />
	<br />This file adds a call to include truste JS file and add the link to the footer.
	<br />
	
	@class IBMCore.www.module.truste

**/

(function ($, IBM) {

	// Create name space for this thing and make a shortcut to it for ourselves.
	var me = IBM.namespace(IBM, "www.module.truste"),
		myEvents = IBM.common.util.eventCoordinator(me, "truste", ["ready"]),
		languageCode = "",
		defaultLinktext = "Cookie preferences";

	/**
		Waits for meta to be ready then includes the truste code.
		
		@method init	
	**/
	me.init = function () {
		languageCode = IBM.common.util.meta.getPageLc();

		// Special for Canada - French.
		if (languageCode === "fr" && IBM.common.util.meta.getPageCc() === "ca") {
			languageCode = "fr_CA";
		}
		// The special CANADA-ONLY truste thing is in the "canada-notice.js" file. NOT HERE.
	};


	/**
		Injects the "cookie preferences" link into the footer on enabled countries.
		<br />This runs on publish of the footer "ready" event.

		@method injectLink
		@private
	**/
	function injectCookiePrefLink () {
		// Set the link text. Only a couple different translations needed so they are just done in here (for now).
		var linkText = IBM.common.translations.data.v18main.misc.cookiePrefs || defaultLinktext;
		
		// Use generic ES translation if ES countries haven't put in xlations yet.
		if (IBM.common.util.meta.getPageLc() === "es" && linkText === defaultLinktext) {
			linkText = "Configuración de Cookies";
			
		}
		else if (IBM.common.util.meta.getPageLc() === "fr" && linkText === defaultLinktext) {
			linkText = "Préférences relatives aux témoins";
		}

		// Remove the one that was there (for case of dynamic locale change via meta util) and inject new one.
		$('.ibm-footer-corporate-links ul').children('#ibm-truste-cp').remove().end().append('<li id="ibm-truste-cp"><a href="#" onclick="truste.eu.clickListener();return false;">' + linkText + '</a></li>');
	}

	/**
		Gets the cookie consent decision for the user: If they opted out of cookie tracking or not.
		<br />Returns a simple numeric code by default. Or you can use the param option to get the full data object back.

		@method getConsentDecision
		@param [domain] {String} Allows you to specify an alternate domain if not ibm.com.
		@param [dump] {Boolean} If you want the full data object dump instead of a simple yes/no code.
		@return {Integer} Returns the consent code (default) or the data object if you wanted the full dump.
	**/
	me.getConsentDecision = function (domain, dump) {
		if (!domain) {
			domain = "ibm.com";
		}

		try {
			var json = truste.cma.callApi("getConsentDecision", domain);
			return dump ? json : json.consentDecision;
		}
		catch (ex) {
			return 0;
		}
	};


	/**
		Shortcut function to call before setting a UI cookie (remembering a locale selection, a dynamic tab that's showing, etc)
		<br>Pass it the TTL that you *want*, and it will validate if you are allowed to use that
			based on the user's cookie consent level setting.
		<br>It will return the TTL in seconds that you want to use, 
			or the max TTL in seconds for 'no consent' as per ePrivacy law (4 hours).
		<br>If you do not respect the consent decision for cookies and localstorage, you are breaking the ePrivacy law
			which carries a hefty fine.

		@method getUiAllowedStorageTtl
		@param {Integer} Expire time in seconds, from now.
		@return {Integer} Returns the allowed expired time, in seconds, based on if user allows UI consent or not.
	**/
	me.getUiAllowedStorageTtl = function (desiredTtl) {
		return IBMCore.www.module.truste.getConsentDecision() > 1 ? desiredTtl : 3600 * 4;
	};

	function listenForTrusteApi () {
		// Wait for Truste API to be loaded before we inject the link in the footer,
		//  otherwise it's pointless b/c the link will be broken and do nothing (uses Truste API).
		var waitingForTrusteCore = IBM.common.util.queue.push(
			function () {
				return typeof truste !== "undefined";
			}, function () {
				window.top.postMessage('{"PrivacyManagerAPI":{"action":"getConsent","timestamp":' + new Date().getTime() + '}}', '*');
				
				// Tell everyone truste is ready so they can sucessfully get the consent decision if they are looking for it.
				myEvents.publish("ready");
				
				// When the footer has been created and ready, inject the link.
				IBM.common.module.footer.subscribe("ready", "truste", injectCookiePrefLink).runAsap(injectCookiePrefLink);
				clearTimeout(waitingTimeout);
			});

		// If it doesn't load in 5 seconds, kill the listener.
		var waitingTimeout = setTimeout(function(){
				IBM.common.util.queue.remove(waitingForTrusteCore);
				IBM.common.util.debug.add("log", "Truste library didn't load in time. Cookie preference link not injected.");
			}, 5000);
	}


	// Patch for event bug when no subscription.
	IBM.www.module.truste.subscribe("ready", "self", function(){});

	// Wait for translations to complete b/c we need new translations from it.
	IBM.common.translations.subscribe("dataReady", "truste", me.init);

	listenForTrusteApi();

})(jQuery, IBMCore);

;

// Modules
/**

	Canada cookie notice
	<br />
	<br />This is required by law/legal on Canada pages.
	<br />When a user views a canada page, and we detect we haven't shown them the notice yet (only show once), we show
	 a notice at the bottom of the page about using cookies.
	<br />We keep track (as possible) and only show it to the user 1 time. Of course, if they disable or clear cookies/storage
	 we end up showing them again. This is fine and agreed on.
	<br>
	<br>This gets output as it's own file and is dynamically included when needed.

  NOTE: Canada cookie banner taken out and passed on to another team. Only Adchoice remains (for now)

	@class IBMCore.common.module.canadanotice

**/

(function($, IBM) {
  var me = IBM.namespace(IBM, 'common.module.canadanotice');

  /**
		Automated callback from subscription to meta 'dataReady' event publisher.
		<br />These conditions must be met for the canada overlay notice:
		<br />1. Must be a CA-EN|FR page.
		<br />2. Must not have the flag that we've shown it to them already.
		<br />3. Must have storage enabled. There's no point in showing if we can't even track them.
		<br />
		<br />For the "adchoices" link at bottom, the only requirement is cc == "ca".

		@method autoInit
	**/
  me.autoInit = function() {
    // Remove the adChoices link and canada cookie notice in the case of dyn. locale change via meta utility.
    $(
      '#ibm-canada-legal-adchoice, .ibm-canada-notice, .ibm-canada-notice-button'
    ).remove();

    // SPECIAL TRUSTE Adchoice link: Add the special Truste "adChoices" link for all Canada pages.
    // If the special ADCHOICE truste lib. isn't on the page already get it then inject the link,
    // else just inject the link b/c it's already there.
    if (IBM.common.util.meta.getPageCc() === 'ca' && !$('#ibm-canada-legal-adchoice').length) {
      $(injectAdchoiceLink);
    }
  };

  /**
		Just injects the link, appends to body.

		@method injectAdchoiceLink
		@private
	**/
  function injectAdchoiceLink() {
    var imageToUse =
      '<img src="' +
      IBM.common.util.config.get('imageUrl') +
      'adchoices.png" width="77" height="16" alt="" border="0" />';

    if (IBM.common.util.meta.getPageLc() === 'fr') {
      imageToUse =
        '<img src="' +
        IBM.common.util.config.get('imageUrl') +
        'adchoices-cafr.png" width="87" height="15" alt="" border="0" />';
    }

    $('body').prepend(
      '<div class="ibm-legalfooter-text" id="ibm-canada-legal-adchoice"><div class="ibm-columns"><div class="ibm-col-1-1"><p><a style="cursor:pointer" href="https://youradchoices.ca/en/tools" target="_blank">' +
        imageToUse +
        '</a></p></div></div></div>'
    );
  }

  /* Wait for events to happen.
   **********************************************************************************************/

  // This separate file is injected if the page loaded is ca, but add subscripbtion for dynamic locale change,
  // so when going from CA to a different country, we can remove this.
  IBM.common.meta
    .subscribe('dataReady', 'canadaadchoice', me.autoInit)
    .runAsap(me.autoInit);
})(jQuery, IBMCore);
;
/** 

	The footer menu - The multiple columns of link lists.
	<br />
	<br />Waits for translations to be retrieved then automatically creates and injects the footer menu links onload.
		
	@class IBMCore.common.module.footermenu

**/

(function ($, IBM) {
	
	/**
		Publishes this event after footer menu links have been injected.

		@event ready
	**/
	var me = IBM.namespace(IBM, "common.module.footermenu"),
		myEvents = IBM.common.util.eventCoordinator(me, "footermenu", ["ready"]),
		v18FooterData = {};

	me.isLoaded = false;
	
	/**
		Callback from subscription to translations 'dataReady' event publisher. 
		<br />Menu link section only gets created if it's:
		<br />Enabled (default) + 
		<br />The footer is not "alternate" + 
		<br />The masthead is not "popup" type (forces popup footer).
		@method autoInit
	**/
	me.autoInit = function () {
		// Remove the footer module in case of re-init in case we went from enabled to disabled locale.
		if (document.getElementById("ibm-footer-module")) {
			$(document.getElementById("ibm-footer-module")).remove();
		}

		if (IBM.common.util.config.isEnabled("footermenu") && IBM.common.util.config.get("footer.type") !== "alternate" && IBM.common.util.config.get("masthead.type") !== "popup") {
			me.init();
		}
		else {
			$(function () {
				myEvents.publish("ready");
			});
		}
	};
	
	/**
		Basic loop. Loops thru each "column" array in the data file, creates the ibm-col-x-x, and loops thru each link in that
		 array and creates it as a LI in the column. Generates all four columns HTML.

		 @method createLinklistColumns
		 @private
		 @return {String} All four (or however many) .ibm-col-4-1 DIV HTMLs.
	**/
	function createLinklistColumns () {
		var html = "",
			columnClass = !IBM.common.util.has12grid() ? "ibm-col-4-1" : "ibm-col-12-3 ibm-col-8-2";

		// For each object in the footer data, build a column (4-1) with heading and link list for each .links.
		$.each(v18FooterData, function () {
			var thisColumnData = this,
				lis = "";
			
			// Build the LIs for each link in this column's data set.
			$.each(thisColumnData.links, function () {
				lis += '<li><a href="' + this.url + '">' + this.title + '</a></li>';
			});

			// Wrap the list in the 4-1 column with the heading and UL and then add to return HTML.
			html += '<div class="ibm-footermenu-list ' + columnClass + '" aria-label="' + thisColumnData.title + '"><h3 class="ibm-bold">' + thisColumnData.title + '</h3><ul class="ibm-plain-list ibm-textcolumns-small-2">' + lis + '</ul></div>';
		});

		return html;
	}

	/**
		Called by autoInit.
		<br />Loops thru the footermenu data and creates and injects the footer menu.
		
		@method init
	**/
	me.init = function () {
		var columnsHtml = "",
			columnWrapperClass = !IBM.common.util.has12grid() ? 'ibm-columns' : 'ibm-fluid',
			columnFullWidthClass = !IBM.common.util.has12grid() ? 'ibm-col-1-1' : 'ibm-col-12-12 ibm-col-8-8';

		// Glob. scoped var used by other functions here.
		v18FooterData = IBM.common.translations.data.v18main.footerMenu || [];

		// Inject the footer menu with the 4 cols on top/before the ibm-footer IF THEY EXIST.
		$(function () {
			// If there are links, make the columns.
			if (v18FooterData[0] && v18FooterData[0].links && v18FooterData[0].links.length > 0) {
				columnsHtml = createLinklistColumns();
			}
			
			if (columnsHtml !== "") {
				$(document.getElementById("ibm-footer")).before('<div id="ibm-footer-module"><section role="region" aria-label="Resources"><div class="' + columnWrapperClass + ' ibm-word-break" id="ibm-footer-module-links">'+ columnsHtml + '</div><div class="' + columnWrapperClass + ' ibm-padding-bottom-0"><div class="' + columnFullWidthClass + '"><div class="ibm-rule ibm-alternate ibm-nospacing ibm-gray-30"><hr></div></div></div></section></div>');
			}

			// Tell subscribers we're done.
			myEvents.publish("ready");
		});
	};


	/* Wait for events to happen.
	**********************************************************************************************/	
	me.subscribe("ready", "footermenuself", function () {
		me.isLoaded = true;
	});

	// When translations (links) are ready, call auto init to build it. Translations can be cached, so use runAsap also.
	IBM.common.translations.subscribe("dataReady", "footermenu", me.autoInit).runAsap(me.autoInit);
	
})(jQuery, IBMCore);;
/**

	Dynamic translated footer links (main ones).
	<br />
	<br />Waits for translations to be retrieved then automatically injects translated footer links onload. 
	<br />This simply __overwrites__ HTML coded footer links in the event there is a global locale link change.
	<br />
	<br />Enabled by default.
	<br />
	<br />To disable: Add this JS snippet to your page (although you should never really do this):
	
		IBMCore.common.util.config.set({
			footer: { enabled: false }
		});
		
	@class IBMCore.common.module.footer
	
**/

// Translation need: Social links in bottom right footer.

(function ($, IBM) {

	/**
		Publishes this event after footer links have been injected.

		@event ready
	**/
	var me = IBM.namespace(IBM, "common.module.footer"),
		myEvents = IBM.common.util.eventCoordinator(me, "Footer", ["ready"]);
	
	me.isLoaded = false;

	/**
		Callback from subscription to translations 'dataReady' event publisher. Checks if footer is enabled and runs init if so.
		
		@method autoInit
	**/
	me.autoInit = function () {
		if (IBM.common.util.config.isEnabled("footer")) {
			me.init();
		}
		else {
			// Tell subscribers we're done
			myEvents.publish("ready");
		}
	};
	
	/**
		Called by autoInit after translations are ready.
		<br />Loops thru the footer link data and creates and injects the links into the footer, 
		  overwriting the HTML coded ones.
		
		@method init
	**/
	me.init = function () {
		var mainLinks = createMainLinksHtml(),
			socialLinksSection = createSocialLinksHtml(),
			footerHtml = '<div class="ibm-footer-corporate-links ibm-word-break-all">' + mainLinks + '</div>' + socialLinksSection;

		// If the masthead is popup type, automatically disable the locale selector and set footer to popup,
		// b/c it doesn't make sense in a popup.
		// This is really just safety and sanity so we can see that it was set as a popup.
		if (IBM.common.util.config.get("masthead.type") === "popup") {
			IBM.common.util.config.set({
				footer: {
					type: "popup"
				},
				localeselector: {
					enabled: false
				}
			});
		}

		// Create the footer wrapper and inject and overwrite the existing footer HTML.
		// The 'create column layout' needs to be here so it can detect whether to use a 12 or 6 grid.
		// Tell subscribers we're done.
		$(function () {
			$(document.getElementById("ibm-footer")).html(createColumnLayout(footerHtml));

			myEvents.publish("ready");
		});
	};

	/**
		Gets the main footer links from translation data and creates and returns the UL HTML.
		
		@method createMainLinksHtml
		@private
		@return {String} The main links UL HTML.
	**/
	function createMainLinksHtml () {
		var lis = "";
		
		$.each(IBM.common.translations.data.v18main.footerThin, function () {
			var addTrackingParam = this.url.indexOf('?lnk') > 0 ? '' : '?lnk=flg' ;
			
			lis += '<li><a href="' + this.url + addTrackingParam + '">' + this.title.htmlspecialchars()+ '</a></li>';
		});
		
		return '<ul class="ibm-padding-bottom-0 ibm-textcolumns-small-2">' + lis + '</ul>';
	}

	/**
		Create the column layout using 6 by default. If page has a 12 grid used, create using 12 grid classes.
		<br>Assumes if any 12 is found, it's being used entirely, because why the fuck would you use a 12 and a 6.
		
		@method createColumnLayout
		@private
		@return {String} The footer HTML wrapped in a 6 or 12 col grid, depends what is detected on the page.
	**/
	function createColumnLayout (footerHtml) {
		var columnWrapper = !IBM.common.util.has12grid() ? "ibm-columns" : "ibm-fluid",
			columnClass = !IBM.common.util.has12grid() ? "ibm-col-1-1" : "ibm-col-12-12 ibm-col-8-8";

		return '<div class="' + columnWrapper + ' ibm-padding-bottom-0"><div class="' + columnClass + '">' + footerHtml + '</div></div>';
	}

	/**
		Gets the social "follow us on" footer links and returns the UL HTML.
		
		@method createSocialLinksHtml
		@private
		@return {String} The HTML for the corporate "Follow IBM" links in the footer.
	**/
	function createSocialLinksHtml () {
		var html = "",
			links = "",
			linksHeading = IBM.common.translations.data.v18main.socialFollow.title || "Follow IBM";

		// Only create social footer links for US pages (v18b).
		if (IBM.common.util.config.isEnabled("footer.socialLinks") && IBM.common.translations.data.v18main.socialFollow.links.length > 0) {
			$.each(IBM.common.translations.data.v18main.socialFollow.links, function () {
				links += '<a class="' + (this.linkClass || "ibm-forward-link") + '" href="' + this.url + '" target="_blank">' + this.title.htmlspecialchars() + '</a>';
			});

			html = '<div class="ibm-footer-social-links ibm-fright"><div class="ibm-fleft"><p class="ibm-padding-bottom-0">' + linksHeading + '</p></div><div><p class="ibm-ind-link ibm-icononly ibm-padding-bottom-0">' + links + '</p></div></div>';
		}

		return html;
	}

	/* Wait for events to happen.
	**********************************************************************************************/
	me.subscribe("ready", "footerself", function () {
		me.isLoaded = true;
	});
		
	// When translations (links) are ready, call auto init to build it. Translations can be cached, so use runAsap also.
	IBM.common.translations.subscribe("dataReady", "Footer", me.autoInit).runAsap(me.autoInit);
	
})(jQuery, IBMCore);
;
/**

	TODO: Santelia: This needs general refactoring and clean up:

	- Remove the DOM injection placement logic from this file and put it in the footer and footer menu ones. 
		Since they generate the elements, they know where it should go.
	- It should simply be a module that does nothing except generate a DOM element in a var that others can pickup.
	- You subscribe to ready event, and when ready you inject it where you want/need it.
		Ex: 
			Footermenu subscribes and injects in there.
			Footer (alternate) subscribes and injects in there.


**/

/** 

	Locale selector
	<br />
	<br />This is the locale selectlist navigator in the footer. It allows the user to goto a different locale corporate portal home page.
	<br />This replaces the need for a separate standalone "Select a country" page by putting the same select list from that page in the footer of every page.
	<br />It also allows the page owner to specify that they have translated versions of the page using the Google standard alternate hreflang tagging. So you get bonus points for SEO with this.
	<br />View the standards page, or: http://nsdev.somerslab.ibm.com/v18/test/accesstest/locale-selector.php for information how to code your page to also use this as your "translated versions of this page" selector.

	@class IBMCore.common.module.localeselector

**/

(function($, IBM) {
  /**
		Publishes this event after footer locale selector has been injected.

		@event ready
	**/
  /**
		Publishes this event if we can't get footer locale selector translations.

		@event error
	**/
  var me = IBM.namespace(IBM, 'common.module.localeselector'),
    myEvents = IBM.common.util.eventCoordinator(me, 'localeselector', [
      'ready',
      'error',
    ]),
    selectorData = IBM.common.util.storage.getItem('v18lsdata') || {},
    selectorHtml = '',
    footerSubscription = false;

  /**
		Automated callback from subscription to meta 'dataReady' event publisher. 
		
		@method autoInit
	**/
  me.autoInit = function() {
    if (
      !IBM.common.util.config.isEnabled('localeselector') ||
      IBM.common.util.config.get('masthead.type') === 'popup'
    ) {
      myEvents.publish('ready');
      return;
    }

    if (
      IBM.common.util.config.isEnabled('footer') ||
      IBM.common.util.config.isEnabled('footermenu')
    ) {
      me.init();
    }
  };

  /**
		Called by autoInit.
		<br />Request the country list if we don't have it already and subscribe to the footer
		to create the locale selector when the footer is ready.
		
		@method init
	**/
  me.init = function() {
    // Santelia: Dec. 2 per Marc/Kevin: FORCE US/EN ALWAYS until we get 1 file output with each locale in IT'S OWN LANGUAGE.
    // If we don't have the selector data already, get it.
    // Else, add subscription to translations (if we don't have it alraedy) and wait to create.
    if (!selectorData.translations) {
      $.ajax({
        url:
          'https://1.www.s81c.com/common/js/dynamicnav/www/countrylist/usen-utf8.js',
        dataType: 'script',
        cache: true,
      }).fail(function(message) {
        window.console.error(
          'v18: Error while loading locale selector data file',
          message
        );
        myEvents.publish('error');
      });
    } else {
      subscribeToFooter();
    }
  };

  /**
		Subscribe to the footer if we don't already have a subscription to it (in cases of change page locale).
		<br>Then creates the locale selector when the footer fires "ready" event.

		@method subscribeToFooter
		@private
	**/
  function subscribeToFooter() {
    if (!footerSubscription) {
      if (IBM.common.util.config.get('footer.type') !== 'alternate') {
        IBM.common.module.footermenu
          .subscribe('ready', 'localeselect', createSelector)
          .runAsap(createSelector);
      } else {
        IBM.common.module.footer
          .subscribe('ready', 'localeselect', createSelector)
          .runAsap(createSelector);
      }
      footerSubscription = true;
    }
  }

  /**
		This runs after we get the v17 country list. This will get updated after we make a new v18 one.
		Now that we have the country list, wait for footer to be ready so we know where to put the selector.

		@method dataCallback
		@param serviceData {Object} JSON object with data from the service call. 
	**/
  me.dataCallback = dataCallback;
  function dataCallback(serviceData) {
    var allowedTtl = IBMCore.www.module.truste.getUiAllowedStorageTtl(
      24 * 3600
    );

    // Cache translations locally for case of meta change page locale.
    selectorData = serviceData;

    // Store in global data in case page wants to use it.
    IBM.common.util.data.provide('localeSelector', serviceData);

    // Cache in local storage for 24 hours for subsequent page views.
    IBM.common.util.storage.setItem('v18lsdata', selectorData, allowedTtl);

    subscribeToFooter();
  }

  /**
		This does the magic. Creates the locale selector HTML and sets up the custom link URLs that the
		 page can override with &lt;link> elements.

		@method createSelector
	**/
  function createSelector() {
    selectorHtml = createLocaleSelectorHtml();
    setupLocaleSelector();
  }

  /** 
		Parse the country data from translations and build the select list HTML then returns it.

		@method createLocaleSelectorHtml
		@private
		@return {String} The select list HTML.
	**/
  function createLocaleSelectorHtml() {
    var opts = '',
      cc = '',
      lc = '';

    // Data is broken into regions, so flatten it and build a select list.
    $.each(selectorData.regionList, function() {
      $.each(this.countryList, function() {
        var cname = this.name;

        $.each(this.locale, function() {
          lc = this[0].substr(0, 2);
          cc = this[0].substr(3);

          if (cc === 'gb') {
            cc = 'uk';
          }
          opts +=
            '<option data-localecode="' +
            lc +
            '-' +
            cc +
            '" value="http://www.ibm.com/' +
            cc +
            '-' +
            lc +
            '/?lnk=fcc">' +
            cname +
            ' - ' +
            this[1] +
            '</option>';
        });
      });
    });

    return (
      '<select class="ibm-fullwidth" aria-labelledby="ibm-footer-locale-selector-label">' +
      opts +
      '</select>'
    );
  }

  /** 
		Setup the locale selector with some magicness. Called after footer is injected into DOM, 
		 via setTimeout so we don't block important rendering.
		<br />Sorts it, selects the page's current locale, and swaps out any links for any corresponding local 
		 alternate links found in &lt;link rel="alternate" hreflang="__"> elements.
		<br />For information on this element: <a href="http://moz.com/learn/seo/hreflang-tag" target="_blank">http://moz.com/learn/seo/hreflang-tag</a>

		@method setupLocaleSelector
	**/
  me.setupLocaleSelector = setupLocaleSelector;
  function setupLocaleSelector() {
    var $localeSelectlist = $(
        document.getElementById('ibm-footer-locale-selector')
      ),
      opts,
      localeOption,
      $altLangTags = $(
        "link[rel='alternate'][hreflang][href]:not([data-exclude='true'])"
      ),
      columnWrapperClass = !IBM.common.util.has12grid()
        ? 'ibm-columns'
        : 'ibm-fluid',
      columnSpanClass = !IBM.common.util.has12grid()
        ? 'ibm-col-4-1 ibm-col-medium-4-2'
        : 'ibm-col-12-3 ibm-col-medium-12-6 ibm-col-8-2 ibm-col-medium-8-4',
      localVersionsHeading =
        IBM.common.util.config.get('localeselector.localVersionsHeading') ||
        IBM.common.translations.data.v18main.localeSelector.localVersions,
      selectorHeading =
        IBM.common.translations.data.v18main.misc.selectCountry ||
        selectorData.translations.select;

    // If there is no existing one we created, inject the placeholder into the proper place on the page,
    //   then inject the select list and set it up.
    // Else if there is one, destroy one that was there for cases of meta locale changes.
    if (!$localeSelectlist[0]) {
      // If it's the default footer with menu, inject it after the first row of columns.
      // else if it's the default footer with menu but no links (and thus not generated),
      //  or is alternate footer, inject into corp. bottom footer.
      if (
        IBM.common.util.config.get('footer.type') !== 'alternate' &&
        IBM.common.translations.data.v18main.footerMenu[0].links.length > 0
      ) {
        $(
          '<div class="ibm-footer-locale-columns ' +
            columnWrapperClass +
            '"><div id="ibm-footer-locale-selector" class="' +
            columnSpanClass +
            ' ibm-fright"></div></div>'
        ).insertAfter('#ibm-footer-module-links');
      } else {
        $(document.getElementById('ibm-footer')).addClass('ibm-alternate');
        $('<div id="ibm-footer-locale-selector"></div>').insertAfter(
          '.ibm-footer-corporate-links'
        );
      }
    } else if (
      $localeSelectlist.find('select')[0] &&
      $localeSelectlist.find('select').select2
    ) {
      $localeSelectlist.find('select').select2('destroy');
    }

    // Initial inject of locale selector then caching the select list for further ops.
    $localeSelectlist = $(document.getElementById('ibm-footer-locale-selector'))
      .html(
        '<h3 id="ibm-footer-locale-selector-label" class="ibm-bold">' +
          selectorHeading +
          '</h3>' +
          selectorHtml
      )
      .children('select');

    opts = $localeSelectlist.find('option');

    // Sort and bind select list.
    opts.sort(function(a, b) {
      if (a.text > b.text) {
        return 1;
      }

      if (a.text < b.text) {
        return -1;
      }

      return 0;
    });

    $localeSelectlist
      .html(opts)
      .on('change.setCookie', function() {
        // Set cookie separately becuase page can off-bind the default action event.
        var localeData = me.$el.find(':selected').data('localecode');

        // Locale codes are lc-cc.
        localeData = localeData.split('-');
        if (localeData) {
          IBM.common.util.setIpcCookie(localeData[1], localeData[0]);
        }
      })
      .on('change.defaultAction', function() {
        // Allows a page to define a custom onchange event by turning this change off and defining their own.
        // Then they can decide to run the goto selction or not.
        me.defaultOnchangeAction();
      });

    // Loop thru any alternate locale links set by the page dev and swap them into the locale select list so those
    //  locale options goto the local page URL instead of corp. home page for it.
    if ($altLangTags.length > 0) {
      opts = [];

      // Pre-sort the altlang elements so generic lang-only are processed first.
      // This way we can parse once; allowing generics to be set, then any locale-specific ones get set.
      $altLangTags.sort(function(a, b) {
        var aLang = a.getAttribute('hreflang'),
          bLang = b.getAttribute('hreflang');

        return aLang.length - bLang.length;
      });

      $altLangTags.each(function() {
        var thisLocaleCode = this.getAttribute('hreflang'),
          thisUrl = this.getAttribute('href'),
          thisLabel = this.getAttribute('data-label'), //IE10 support, for now.
          $foundSelectorOption = null;

        if (thisLocaleCode === 'en-gb') {
          thisLocaleCode = 'en-uk';
        }

        $foundSelectorOption = $localeSelectlist.find(
          "option[data-localecode='" + thisLocaleCode + "']"
        );

        // If the custom <link> has a label:
        //   It means it should be ADDED and may or may not already exist in the official IBM locale list.
        //   So we add it and then remove the existing one if it exists.
        // Else if the code is > 2, it's inferred it's got full lc-cc, so we replace the SINGLE matching item URL.
        // Else if the code is exactly 2, it means language first, so replace ALL items with that language code's URL.
        if (thisLabel) {
          opts.push(
            $(
              '<option data-localecode="' +
                thisLocaleCode +
                '" value="' +
                thisUrl +
                '">' +
                thisLabel +
                '</option>'
            )
          );
          $foundSelectorOption.remove();
        } else if (thisLocaleCode.length === 5) {
          if ($foundSelectorOption[0]) {
            opts.push($foundSelectorOption.attr('value', thisUrl));
          }
        } else if (thisLocaleCode.length === 2) {
          $localeSelectlist
            .find("option[data-localecode^='" + thisLocaleCode + "']")
            .each(function() {
              opts.push($(this).attr('value', thisUrl));
            });
        }
      });

      // Now take the locales that have URL for this page's version (we pushed them into an array above),
      //  sort them, then put them at the top of the list.
      opts.sort(function(a, b) {
        if (a[0].text > b[0].text) {
          return 1;
        } else if (a[0].text < b[0].text) {
          return -1;
        } else {
          return 0;
        }
      });

      // Wrap the options in a group with a label, acts as the section heading.
      $localeSelectlist
        .wrapInner(
          '<optgroup label="' +
            IBM.common.translations.data.v18main.localeSelector.homepages +
            '"></optgroup>'
        )
        .prepend(
          $('<optgroup label="' + localVersionsHeading + '"></optgroup>').html(
            opts
          )
        );
    } else {
      $localeSelectlist.wrapInner(
        '<optgroup label="' +
          IBM.common.translations.data.v18main.localeSelector.homepages +
          '"></optgroup>'
      );
    }

    // NOTE: THIS MUST BE LAST. If you change the order of the options, the selected item gets messed up.
    // You have to do all your <option> shuffling and lastly pick one to be selected.
    // Auto-select the one that matches the page's currently set locale (from meta data).
    localeOption = $localeSelectlist
      .find(
        "option[data-localecode='" +
          IBM.common.util.meta.getPageLc() +
          '-' +
          IBM.common.util.meta.getPageCc() +
          "']"
      )
      .prop('selected', true);

    // Take the selected locale item and move it to the top of the first option group found.
    $localeSelectlist.find('optgroup:first').prepend(localeOption);

    IBM.common.widget.selectlist.init($localeSelectlist, {
      width: '100%',
    });

    me.$el = $localeSelectlist;

    myEvents.publish('ready');
  }

  /**
		Callback for locale select list 'change' event binding. Can be disabled by page.
		
		@method defaultOnchangeAction
	**/
  me.defaultOnchangeAction = function() {
    var evtData = {
      ibmEV: 'widget',
      ibmEvAction: 'locale selector',
      ibmEvGroup:
        IBM.common.util.meta.getPageLc() +
        '-' +
        IBM.common.util.meta.getPageCc(),
      ibmEvModule: me.$el.find(':selected').data('localecode'),
      ibmEvLinkTitle: me.$el.find(':selected').text(),
      ibmEvLinkTarget: me.$el.find(':selected').val(),
    };

    if (this.value !== '') {
      IBM.common.util.statshelper.fireEvent(evtData);

      setTimeout(function() {
        window.location.href = me.$el.val();
      }, 150);
    }
  };

  // TODO: Santelia: Generate new ECM output for v18 for these files.
  // Temp fix:  Alias this shit until we get the new ECM output files setup.
  window.ibmweb = window.ibmweb || {};
  IBM.namespace(window.ibmweb, 'dynnav.localeselector.dataCallback');
  window.ibmweb.dynnav.localeselector.dataCallback = me.dataCallback;

  /* Wait for events to happen.
   **********************************************************************************************/

  // META is a requirement. Listen for Meta to be finished, then get the translations.
  IBM.common.meta
    .subscribe('dataReady', 'localeselector', me.autoInit)
    .runAsap(me.autoInit);
  me.subscribe('ready', 'self', function() {});
})(jQuery, IBMCore);
;
/**

	How the masthead works:
		#1. Popup - This is the absolute minimal, "logo-only" masthead only used on popup windows.
			This is the base, with all modules disabled.
		#2. Alternate - This is the "application masthead". This is the same as default, but without the main link items
		#3. Full - This is the DEFAULT. This includes main link items and the megamenu. Inline links are hidden when browser is not wide enough.

		Page owners can override and choose either "alternate" or "popup" masthead type via a page config.

	If you are going to try and read this and understand how it all works, grab yourself a tall cup of coffee.
	The file is long, technically, but there are a LOT of comments in here.
	It's not complicated, it's just complex. There are functions for everything, and it's really not that hard.
	The masthead is just comprised of a bunch of pieces of things that can be enabled/disabled and configured.

**/
/**

	Masthead.
	<br />
	<br />This is the main file for the masthead and everything associated with it.
	<br />This waits for translations to be available and onload will create the main masthead links and associated functionality.
	<br />
	<br />Available options/settings:
		"alternate": Same as the default, but WITHOUT the inline main masthead links.
		"popup": For use ONLY on popup pages. Only the logo shows in the masthead.

	@class IBMCore.common.module.masthead

**/
(function($, IBM) {
  /**
		Publishes this event after complete masthead is built.

		@event ready
	**/
  /**
		Publishes this event after the profile menu is built.

		@event profileMenuReady
	**/

  var me = IBM.namespace(IBM, 'common.module.masthead'),
    myEvents = IBM.common.util.eventCoordinator(me, 'masthead', [
      'ready',
      'profileMenuReady',
      'profileMenuUpdated',
    ]),
    $elements = {
      body: {},
      masthead: {},
    },
    mastheadData = {
      mainLinks: null,
    },
    mastheadLinklist = {
      mainLinks: {
        $el: null,
        html: '',
      },
      iconsonly: {
        $el: null,
        html: '',
      },
      imagesloaded: {
        // When a main item is opened first time, we set a flag and load the images.
        // Images aren't loaded until the main item is hovered and the menu is
      },
    },
    mastheadType = '',
    mastheadTypeMapping = {
      default: 'full',
      alternate: 'minimal',
      mobile: 'mobile',
      popup: 'popup',
    },
    megamenu = {
      $closeButtonLink: null,
      $el: null,
      $sectionShowing: null,
      isopen: false,
      $panelShowing: null,
    },
    makethese = {
      megamenus: [],
      dropdownmenus: [],
    },
    $profileMenu = null,
    v18Data = {};

  me.isLoaded = false;

  /**
		Callback from subscription to meta data 'ready' event publisher. Checks if masthead is enabled.
		<br />If so, subscribe to translations and call init when translations are ready.

		@method autoInit
	**/
  me.autoInit = function() {
    if (IBM.common.util.config.isEnabled('masthead')) {
      me.init();
    }
  };

  /**
		Callback from subscription to translation 'dataAndDomReady' event publisher inside autoInit.
		<br />Runs several function to do three key things:
		<br />1. Set the data sources.
		<br />2. Create the links from the data sources.
		<br />3. Configure the HTML per current page settings and echo it on the glass.

		@method init
	**/
  me.init = function() {
    //  #### NOTE: ####
    // In here, DOM is not ready yet.
    // Do only the absolute required processing and HTML generation needed for content on the glass on page load.
    // Defer everything else (hidden elements) via settimeout to put it to the back of the queue.
    // For example: megamenu (if used), drop-down menus, mobile menu, and accessibility should all be deferred
    //  because that can happen behind the scenes in the background.
    //
    // NOTE: ALL specific masthead elements are selector cached on injection. ID/Classes should NEVER be used after we
    //  inject the HTML unless it's for a specific condition. Always use the cached selectors (in var declaration at top).

    ////////////////////////////////////////////////////////////////////////
    //  Varibles, config, data setups.
    ////////////////////////////////////////////////////////////////////////

    // Pull in the applied setting for what masthead to use.
    mastheadType = IBM.common.util.config.get('masthead.type');
    mastheadType = mastheadTypeMapping[mastheadType];

    // Alias the translation file data.
    v18Data = IBM.common.translations.data.v18main;

    // If the custom data object exists, use that for the data.
    if (window.mhcustomtest) {
      v18Data = window.mhcustomtest;
    }

    // Alias the data set to use.
    mastheadData.mainLinks = v18Data.mastheadNav;

    ////////////////////////////////////////////////////////////////////////
    //  Create the actual link HTML
    ////////////////////////////////////////////////////////////////////////
    // CREATES THE ACTUAL MAIN MASTHEAD LINKS (ONLY).
    // Create and store the <li> HTML for each masthead section. Any conditions or rules exist in the functions themselves.
    mastheadLinklist.mainLinks.html = createMainMastheadLinks();
    mastheadLinklist.iconsonly.html = createLinklistIconsonly();

    // CREATE THE BURGER MENU LINKS USING THE MASTHEAD MAIN LINK DATA.
    // The burger menu uses this variable and pops it into a section in the burger menu.
    // This is questionable whether this should go here or in burger menu JS file.
    mastheadLinklist.mainLinks.burgerMenuHtml = createMainMastheadLinksBurgermenu(
      mastheadData.mainLinks.links
    );

    // Now that we've built the HTML, we're ready to inject HTML and do setup and bindings.
    // Get the main visible links on the glass ASAP, and create any "hidden" menus later/defered because they require
    // user interaction to be seen which will not happen immediately, so they don't need to be created *right now*.
    $(function() {
      /**

				First we ONLY inject the links we need on the glass and any swizzling to get them out ASAP.
				Then we defer all "setup" functionality.
				Each of the createMasthead_____ functions adds a class that makes styling easy, based on the type of masthead.

				Cases from minimal to maximum. What is always there, what isn't:

				If popup:
					- Disable and hide all
					- Stop.

				If alternate:
					- Search
					- Iconsonly

				If full: (Same as minimal but with visible catnav & mega & dropdown menus):
					- Main nav items
					- Search
					- Iconsonly
					- Megamenu

			**/

      // Do some resets for the "change page locale" utility and wipe out the links.
      // eslint-disable-next-line no-undef
      IBMPerformance.mark('V18-masthead-begin');
      $(
        '#ibm-megamenu-sections, .ibm-masthead-categories, .ibm-masthead-iconsonly'
      ).remove();

      // Cache selectors.
      $elements.body = $(document.body);
      $elements.masthead = $(document.getElementById('ibm-masthead'));

      // Set popup masthead to not have anything extra created.
      if (mastheadType === 'popup') {
        createMastheadPopup();

        IBM.common.util.config.set({
          masthead: {
            megamenu: { enabled: false },
            mobilemenu: { enabled: false },
            profile: { enabled: false },
            search: { enabled: false },
            sticky: { enabled: false },
          },
        });
      } else if (mastheadType === 'minimal') {
        createMastheadMinimal();
        // Even though no main links, set hiding width for marketplace button hiding.
        setMastheadWidthUsed();
        setupSearchfieldResponsiveness();
      } else if (mastheadType === 'full') {
        createMastheadFull();
        // Set the minimum viewport width we need in order to show all the links and injects dynamic media query style.
        // Safari had weird render issue introduced in 10.1.2, have to slightly delay the calculation for it.
        if (!$.browser.safari) {
          setMastheadWidthUsed();
        } else {
          setTimeout(function() {
            setMastheadWidthUsed();
          }, 200);
        }

        setupSearchfieldResponsiveness();

        // Setup each main masthead link item's menu.
        // Then bind each one to open it's corresponding menu.
        // (Each link is tagged with a data-linkid so onclick that's the section/thing to show)
        setTimeout(function() {
          if (IBM.common.util.config.isEnabled('masthead.megamenu')) {
            createMegamenus();
            createDropdownMenus();
            setupMegamenuBindings();
            setupMastheadMainlinksAccessibility();
          }
        }, 50);
      } else {
        return;
      }

      // Hide the sitemap link because we successfully created the masthead.
      $(document.getElementById('ibm-menu-links')).addClass('ibm-hide');

      // NOTE: ALL specific masthead elements are selector cached on injection.
      // ID/Classes should NEVER be used at this point unless it's for a specific condition.
      // Always use the cached selectors (in var declaration at top).

      ////////////////////////////////////////////////////////
      // START COMMON DEFERRED ITEMS
      ////////////////////////////////////////////////////////

      setTimeout(function() {
        setupBurgerMenuIcon();

        $(document.getElementById('ibm-home')).find('a')[0].href += '?lnk=m';

        // Create profile drop-down menu ONLY if it's enabled.
        // Creates "anonymous" menu by default, and if greeting service is enabled, makes call and waits for
        //  return data to decide if it needs to change the menu links.
        // Functions have logic in them for cases where country has no links or container (drop-down menu) doesn't exist.
        if (IBM.common.util.config.isEnabled('masthead.profile')) {
          addProfileMenuToMasthead();
          setupMastheadProfileMenu();
          setupMastheadProfileMenuAccessibility();
        }
      }, 50);

      // Tell subscribers the MAIN MASTHEAD LINKS are ready and on the glass (as appropriate).
      // eslint-disable-next-line no-undef
      IBMPerformance.mark('V18-masthead-end');
      // eslint-disable-next-line no-undef
      IBMPerformance.measure(
        'V18-masthead-load',
        'V18-masthead-begin',
        'V18-masthead-end'
      );

      me.isLoaded = true;
      myEvents.publish('ready');
    });
  };

  /**
		Simply inserts the masthead main category links into the masthead.
		<br />Eventually we will start making pages code these in the HTML when the changes settle down, for SEO purposes.

		@method addMainlinksToMasthead
		@private
	**/
  function addMainlinksToMasthead() {
    // Inject the new categories nav links.
    mastheadLinklist.mainLinks.$el = $(
      mastheadLinklist.mainLinks.html
    ).insertBefore('#ibm-menu-links');
  }

  /**
		Inserts the masthead main ICON links into the masthead (inside a right-float container),
		 and moves the search div into the container also.
		<br />Also caches the signin icon selector for updating with user state.

		@method addIconsToMasthead
		@private
	**/
  function addIconsToMasthead() {
    // Put the icons in the right side container after the search field.
    mastheadLinklist.iconsonly.$el.append(mastheadLinklist.iconsonly.html);
    $profileMenu = mastheadLinklist.iconsonly.$el.find(
      '.ibm-masthead-item-signin'
    );
  }

  /**
		Converts the search input to a button. It should be coded as a button, but legacy HTML has input.

		@method convertSearchSubmitToButton
		@private
	**/
  function convertSearchSubmitToButton() {
    var attrs = '',
      $searchButton = $(document.getElementById('ibm-search'))
        .removeClass('ibm-btn-search')
        .addClass('ibm-search-link');

    $.each($searchButton[0].attributes, function() {
      attrs += ' ' + this.name + '="' + this.value + '"';
    });

    $searchButton.replaceWith(
      '<button role="button"' +
        attrs +
        '><span class="ibm-access">' +
        $searchButton[0].value +
        '</span></button>'
    );
  }

  /**
		Take the passed array of link data, and create LIs using them.

		@method createMenuListItems
		@private
		@param linkArr {Array} Arry of links to put into the list, prescribed format using id, title, url.
		@return {String} HTML of &lt;li>s for the list (UL).
	**/
  function createMenuListItems(linkArr) {
    var lis = '';

    $.each(linkArr, function() {
      var linkType =
          this.id && this.id !== '' ? ' data-linktype="' + this.id + '"' : '',
        newWindow = this.newWindow !== true ? '' : ' target="_blank"';
      if (this.title) {
        lis +=
          '<li role="presentation"' +
          linkType +
          '><a role="menuitem" href="' +
          this.url.replace(
            '{{window.location}}',
            encodeURIComponent(window.location.href)
          ) +
          '"' +
          newWindow +
          '>' +
          this.title +
          '</a></li>';
      }
    });

    return lis;
  }

  /**
		Add the new right-align container and put the search container into it.

		@method setupRightsideContainer
		@private
	**/
  function setupRightsideContainer() {
    if (!mastheadLinklist.iconsonly.$el) {
      mastheadLinklist.iconsonly.$el = $(
        '<div class="ibm-masthead-rightside"></div>'
      )
        .prepend($(document.getElementById('ibm-search-module')))
        .insertAfter(document.getElementById('ibm-menu-links'));
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // Profile icon and menu setup
  //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
		Creates "anonymous" profile menu and injects it.
		<br />We have to wait for the service call to return to know if they are signed in, at which point we swap it.

		@method addProfileMenuToMasthead
		@private
	**/
  // NOTE: This happens in a defer to let other onscreen stuff run ahead.
  function addProfileMenuToMasthead() {
    var profileMenuLinks = createProfileMenuAnony();

    // Stop if there's no sign-in links b/c it means there's nothing to put in a menu.
    if (
      profileMenuLinks === '' &&
      !IBM.common.util.config.isEnabled('masthead.profileAlways')
    ) {
      return;
    }

    // Put the links inside a UL and inject into DOM.
    $profileMenu.append(
      '<ul id="ibm-signin-minimenu-container" role="menu" aria-label="Profile" class="ibm-dropdown-menu">' +
        profileMenuLinks +
        '</ul>'
    );

    // Self subscribe for weird pub/sub bug.
    me.subscribe('profileMenuReady', 'self', function() {});

    // If the greeting config is DISABLED, stop and leave the default "anonymous" menu there.
    // User util does NOT call user profiles services if greeting disabled.
    // Publish menu ready event so DW and PW can modify.
    if (!IBM.common.util.config.isEnabled('greeting')) {
      myEvents.publish('profileMenuReady');
      return;
    }

    // Getting here means greeting was enabled, so "user state" service was called.
    // After getting the user data from IBMid, if they are signed in, "updateProfileMenu" changes the menu link
    //   then fires an event.
    // Subscribe to that event so that we can publish the master "menu is totally done/ready" event.
    // If user wasn't signed in, then "menu is ready" is called (code below this).
    me.subscribe('profileMenuUpdated', 'self', function() {
      myEvents.publish('profileMenuReady');
    });

    // Wait until all IBM profile data from WSRs is ready and then modify the default anony profile container:
    // Update icon with image from profile service.
    // Change the menu to the "signed in" one.
    // Show the new notification count(inside the menu update becuase we have to wait for it).
    IBM.common.util.user
      .subscribe('userIBMDataReady', 'masthead', function() {
        if (IBM.common.util.user.getInfo().signedin) {
          IBM.common.util.debug.add(
            'log',
            'User is signed in - Waited for IBMid WSR'
          );
          updateProfileIcon();
          updateProfileMenu();
        } else {
          // User isn't signed in, so there's nothing to do, thus the menu is already ready. Fire away.
          myEvents.publish('profileMenuReady');
        }
      })
      .runAsap(function() {
        if (IBM.common.util.user.getInfo().signedin) {
          IBM.common.util.debug.add(
            'log',
            'User is signed in - IBMid WSR already done'
          );
          updateProfileIcon();
          updateProfileMenu();
        } else {
          // User isn't signed in, so there's nothing to do, thus the menu is already ready. Fire away.
          myEvents.publish('profileMenuReady');
        }
      });
  }

  /**
		Creates the profile item drop down menu, default is as anonymous user using "signed out" links from xlation file.
		<br />When service comes back with user-state determination, we change this *if user is signed in*.

		@method createProfileMenuAnony
		@private
		@return {String} HTML of &lt;li>s for the list (UL).
	**/
  function createProfileMenuAnony() {
    return createMenuListItems(v18Data.profileMenu.signedout);
  }

  /**
		This is called after we have determined that the user *is signed in*.
		<br />It ONLY creates new LIs to inject into the existing drop down menu.

		@method createProfileMenuSignedin
		@private
		@return {String} HTML of &lt;li>s for the list (UL).
	**/
  function createProfileMenuSignedin() {
    return createMenuListItems(v18Data.profileMenu.signedin);
  }

  /**
		Public API to control the profile menu.

		@method editProfileMenu
		@param data {Object} The data object to use to edit the profile menu with.
		@param data.action {String} What you want to do with the profile menu.
	**/
  me.editProfileMenu = editProfileMenu;
  function editProfileMenu(data) {
    if (data.action === 'replace') {
      $(document.getElementById('ibm-signin-minimenu-container')).html(
        createMenuListItems(data.links)
      );
    } else if (data.action === 'prepend') {
      $(document.getElementById('ibm-signin-minimenu-container')).prepend(
        createMenuListItems(data.links)
      );
    } else if (data.action === 'append') {
      $(document.getElementById('ibm-signin-minimenu-container')).append(
        createMenuListItems(data.links)
      );
    } else if (data.action === 'replaceLinkUrl') {
      $(document.getElementById('ibm-signin-minimenu-container'))
        .find("li[data-linktype='" + data.linktype + "'] a")
        .attr('href', data.linkurl);
    }

    // Temp usage tracking.
    // REMOVED: June 14, 2018
    // IBM.common.util.statshelper.fireEvent({
    // 	ibmEV : "editprofilemenu",
    // 	ibmEvAction : data.action || "n/a"
    // });
  }

  /**
		Sets up click anywhere to close for profile menu.

		@method profileClickToClose
		@private
	**/
  function profileClickToClose() {
    $elements.body.on('click', function() {
      me.hideProfileMenu();
    });
  }

  /**
		Resets the profile menu button to default state so it can be properly changed/set to another.

		@method resetProfileButton
		@private
	**/
  function resetProfileButton() {
    mastheadLinklist.iconsonly.$el.removeClass('signedin hasinitials');
    $profileMenu
      .children('button')
      .removeAttr('style aria-label')
      .html('');
  }

  /**
		Setup the bindings for the profile menu, called with defer becuase it's not critical onload for display.

		@method setupMastheadProfileMenu
		@private
	**/
  function setupMastheadProfileMenu() {
    var profileClickToCloseSetup = false;

    // If there's no profile menu, there's nothing to do here.
    if (!$profileMenu[0]) {
      return;
    }

    // ONCLICK: Opening/Closing the drop-down menu.
    $profileMenu.children('button').click(function(evt) {
      evt.preventDefault();

      if ($profileMenu.hasClass('ibm-active')) {
        me.hideProfileMenu();
      } else {
        // On click/(keypress) show the menu and focus on the first item in it.
        me.showProfileMenu();
        $profileMenu.find('li:eq(0) a').focus();

        // Since they clicked to open it, setup the "click anywhere" to close it.
        if (!profileClickToCloseSetup) {
          profileClickToClose();
          profileClickToCloseSetup = true;
        }
      }
    });

    // HOVER: OPENING the drop-down menu.
    $profileMenu
      .hoverIntent(
        function() {
          me.showProfileMenu();
        },
        function() {
          // do nothing on mouse out. Covered by larger scoped element mouseout binding below.
        }
      )
      .on('click', function(evt) {
        // Stop propogation so our body "closer" binding doesn't fire if they click on the menu
        evt.stopPropagation();
      });

    // HOVER: CLOSING the drop-down menu.
    // If they mouse out of the entire menu section, wait 300ms and make sure they are leaving then close the menu.
    $profileMenu.hoverIntent({
      over: function() {},
      out: function() {
        me.hideProfileMenu();
      },
      timeout: 300,
    });
  }

  /**
		Public API to set/show a # of notifications in the profile menu.
		<br>If number is > 0: show the count in the masthead profile thumb and in the special tagged menu item,
		<br>Else, remove the div (in cases of dynamic sign in/out without reload we don't want empty or incorrect box #).

		@method showNotificationCount
		@param num {Integer} The number to show in the profile menu.
	**/
  me.showNotificationCount = showNotificationCount;
  function showNotificationCount(num) {
    var $iconNcContainer = $(
        document.getElementsByClassName('ibm-notification-count')[0]
      ),
      $linkWithNc = $(
        document.getElementsByClassName('ibm-masthead-item-signin')[0]
      ).find("li[data-linktype='notifications'] a");

    // For the link, that gets overritten each locale/masthead change and is a tag on a link.
    // Show notification in icon.
    // If the placeholder isn't there, add it.
    // Else remove it.
    if (num > 0) {
      if (!$iconNcContainer[0]) {
        $iconNcContainer = $(
          '<div class="ibm-notification-count"></div>'
        ).appendTo('.ibm-masthead-item-signin');
      }

      $iconNcContainer.html(num);

      // For the link in the menu.
      // If the link exists, check if the span is there already or not and add, then inject #.
      if ($linkWithNc[0]) {
        if (!$linkWithNc.children('span')[0]) {
          $linkWithNc.append('<span></span>');
        }
        $linkWithNc.children('span').html(' (' + num + ')');
      }
    } else {
      $iconNcContainer.remove();
    }
  }

  /**
		Resets the profile menu button and notification count and sets the a11y test to whatever you pass it.

		@method showProfileLinkAnonymous
		@param dataObj {Object} Data to use to show the user profile button as "anonymous user".
		@param dataObj.linkContents {String} The text/content to put inside of the button.
		@param dataObj.linkAlt {String} The text to use for the aria-label on the button.
	**/
  me.showProfileLinkAnonymous = showProfileLinkAnonymous;
  function showProfileLinkAnonymous(dataObj) {
    resetProfileButton();
    showNotificationCount(0);
    $profileMenu
      .children('button')
      .html(dataObj.linkContents)
      .attr('aria-label', dataObj.linkAlt);
  }

  /**
		Public API that will display the button content and not hide them for accessibility.
		<br>Primarily used when you are showing text for the button instead of an image.

		@method showProfileLinkContents
	**/
  me.showProfileLinkContents = showProfileLinkContents;
  function showProfileLinkContents() {
    mastheadLinklist.iconsonly.$el.addClass('hasinitials');
  }

  /**
		Public API to change/show the profile button as a signed-in user, uses the passed data object for the info.

		@method showProfileLinkSignedin
		@param dataObj {Object} The data to use to show the user as signed-in.
		@param dataObj.linkContents {String} The text we'd show on the screen.
		@param dataObj.linkAlt {String} The aria-label for blind user who can't see the visual meaning "you're signed in"
		@param dataObj.backgroundImage {String} The background image URL to use for the button.
		@param dataObj.type {String} What type of "signed-in" visual to display; default, text, or image.

	**/
  me.showProfileLinkSignedin = showProfileLinkSignedin;
  function showProfileLinkSignedin(dataObj) {
    /**
			dataObj = {
				linkContents: "", // The text we'd show on the screen.
				linkAlt: "",  // The aria-label for blind user who can't see the visual meaning "you're signed in"
				backgroundImage: ""  // The image to use for the button.
				type: "default|text|image"  // What type of "signed-in" visual to display.
			};
		**/
    resetProfileButton();

    mastheadLinklist.iconsonly.$el.addClass('signedin');
    $profileMenu
      .children('button')
      .html(dataObj.linkContents)
      .attr('aria-label', dataObj.linkAlt);

    // If there was a background image URL passed, set the button to use it.
    // This overrides the default profile icon background.
    if (
      dataObj.type === 'image' &&
      dataObj.backgroundImage &&
      dataObj.backgroundImage !== ''
    ) {
      mastheadLinklist.iconsonly.$el.addClass('hasinitials');

      $profileMenu
        .children('button')
        .html('')
        .css({
          'background-image': 'url(' + dataObj.backgroundImage + ')',
          'background-size': 'cover',
        });
    }

    if (dataObj.type === 'text' && dataObj.linkContents !== '') {
      mastheadLinklist.iconsonly.$el.addClass('hasinitials');
    }
  }

  /**
		This swaps the "anonymous" profile ICON for the one returned from the IBM photo service.
		<br />Default signed-in is reversed icon, if photo service returns personalized image url, we use that.

		@method updateProfileIcon
		@private
	**/
  function updateProfileIcon() {
    var signedinData = {
      linkContents: '',
      linkAlt: v18Data.misc.welcomeback,
      backgroundImage: IBM.common.util.user.getInfo().imageUrl,
      type: 'default',
    };

    if (
      !IBM.common.util.user.getInfo().imageUrl ||
      IBM.common.util.user.getInfo().imageUrl === ''
    ) {
      signedinData.backgroundImage = '';
    }

    // Show the profile link as "signed in".
    showProfileLinkSignedin(signedinData);
  }

  /**
		This swaps the "anonymous" profile menu with links for a "signed in user"

		@method updateProfileMenu
		@private
	**/
  function updateProfileMenu() {
    var signedinListitems = createProfileMenuSignedin();

    // Change the menu to the "user is signed in" one ONLY if there are links from the translation data file.
    // Otherwise we keep it as "signedout" links.
    if (signedinListitems !== '') {
      // Make sure profile menu UL exists before trying to update it.
      // Safety net in wacky cases where page blocks rendering and causes WSRs
      //  to complete before the profile menu is created.
      if (!($profileMenu && $profileMenu.children('ul')[0])) {
        IBM.common.util.debug.add(
          'log',
          'Waiting for profile menu to be ready'
        );
      }
      IBM.common.util.queue.push(
        function() {
          return $profileMenu && $profileMenu.children('ul')[0];
        },
        function() {
          IBM.common.util.debug.add(
            'log',
            "Profile menu now exists, changing to 'signed in' menu"
          );
          $profileMenu.children('ul').html(signedinListitems);
          showNotificationCount(
            IBM.common.util.user.getInfo().newNotificationCount
          );
          myEvents.publish('profileMenuUpdated');
        }
      );
    }
  }

  /**
		Public API to show the profile menu.

		@method showProfileMenu
	**/
  me.showProfileMenu = function() {
    $profileMenu.addClass('ibm-active');
  };

  /**
		Public API to show the hide menu.

		@method hideProfileMenu
	**/
  me.hideProfileMenu = function() {
    $profileMenu.removeClass('ibm-active');
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // Masthead types setups.
  //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
		Adds a class to the masthead and concats all the pieces that create the "full" (default) masthead.

		@method createMastheadFull
		@private
	**/
  function createMastheadFull() {
    $elements.masthead.addClass('ibm-mhtype-full');

    addMainlinksToMasthead();

    setupRightsideContainer();

    addIconsToMasthead();

    // If search is enabled, change the input to a button and add label for better a11y.
    if (IBM.common.util.config.isEnabled('masthead.search')) {
      convertSearchSubmitToButton();
      document
        .getElementById('ibm-search-form')
        .setAttribute('aria-labelledby', 'ibm-masthead');
    }
  }

  /**
		Adds a class to the masthead and concats all the pieces that create the "minimal" (alternate) masthead.
		<br />The nice name/config name is "alternate". Technically it's a "minimal" masthead.

		@method createMastheadMinimal
		@private
	**/
  function createMastheadMinimal() {
    $elements.masthead.addClass('ibm-mhtype-minimal');

    //addMainlinksToMasthead();

    setupRightsideContainer();

    addIconsToMasthead();

    // If search is enabled, change the input to a button and add label for better a11y.
    if (IBM.common.util.config.isEnabled('masthead.search')) {
      convertSearchSubmitToButton();
      document
        .getElementById('ibm-search-form')
        .setAttribute('aria-labelledby', 'ibm-masthead');
    }
  }

  /**
		Creates the popup mashthead.
		<br />This is really NO JS execution and the CSS class hides everything except the logo.

		@method createMastheadPopup
		@private
	**/
  function createMastheadPopup() {
    $elements.masthead.addClass('ibm-mhtype-popup');
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // Menu functions
  //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
		Creates all the dropdowns.
		<br>Array of dropdowns to make was populated from the making of each main link.
		<br>Each item in the "makethese" object was created by the main link creation
		  function based on the main link data.

		@method createDropdownMenus
		@private
	**/
  function createDropdownMenus() {
    $.each(makethese.dropdownmenus, function() {
      createDropdown(this);
    });
  }

  /**
		Creates the dropdown menu for the given main masthead item.

		@method createDropdown
		@private
		@param mastheadLinkData {Object} Data object with the main link ID and set of links to use in it's dropdown menu.
	**/
  function createDropdown(mastheadLinkData) {
    var $trig = $elements.masthead.find(
        "[data-linkid='" + mastheadLinkData.id + "']"
      ),
      menuLis = '',
      menuListHtml = '';

    $.each(mastheadLinkData.data.menuSections, function() {
      var thisSection = this;
      menuLis = createLinkList(thisSection.menuItems);
    });

    menuListHtml = '<ul class="ibm-dropdown-menu">' + menuLis + '</ul>';

    // Wipe out link since it's now a menu trigger and inject the nested UL after the menu link/trigger.
    $trig.removeAttr('href');

    $trig.after(menuListHtml);
  }

  /**
		Creates all the megamenus.
		<br>Array of megamenus to make was populated from the making of each main link.
		<br>Each item in the "makethese" object was created by the main link creation
		  function based on the main link data.

		@method createMegamenus
		@private
	**/
  function createMegamenus() {
    var megamenuSectionsHtml = '',
      tallestSection = 0,
      extraCloseButton = 30;

    $.each(makethese.megamenus, function() {
      megamenuSectionsHtml += createMegamenuSection(this);
    });

    if (document.getElementById('ibm-megamenu-sections')) {
      $(document.getElementById('ibm-megamenu-sections')).remove();
    }

    // Echo the MM on the page (including the "close" button), then setup bindings/accessibility.
    megamenu.$el = $(
      '<div id="ibm-megamenu-sections" class="ibm-hidden-small">' +
        megamenuSectionsHtml +
        '<div class="ibm-megamenu-close-container"><p class="ibm-icononly ibm-ind-link ibm-nospacing"><a class="ibm-chevron-up-link ibm-nospacing" href="#close">' +
        IBM.common.translations.data.v18main.misc.close +
        '</a></p></div></div>'
    ).insertAfter('#ibm-universal-nav');
    megamenu.$closeButtonLink = megamenu.$el.find(
      '.ibm-megamenu-close-container a'
    );

    // Set the height of the MM section to be the tallest of them all.
    $(document.getElementById('ibm-megamenu-sections'))
      .addClass('getheight')
      .find('.ibm-megapanel, .ibm-megapaneltrigs')
      .each(function() {
        var h = $(this).height();
        if (h > tallestSection) {
          tallestSection = h;
        }
      })
      .end()
      .removeClass('getheight');

    IBM.common.util.addCssRule(
      '.ibm-megamenu-section, #ibm-megamenu-sections',
      {
        height: tallestSection + extraCloseButton + 'px',
      }
    );
  }

  /**
		Hides all menus and megamenu. Used on hover to hide anything that was open before opening the new one.

		@method hideAllMenus
		@private
	**/
  function hideAllMenus() {
    showMegamenu(false);
    makeItemActive(
      mastheadLinklist.mainLinks.$el.find('li.ibm-active a'),
      false
    );
  }

  /**
		Two-level section.
		<br>Level 1 (first column) is a list of all "menuItems" which are just link list of triggers for each megapanel.
		<br>Level 2 (6-4) is the actual megapanel for each menuitem.

		@method createMegamenuSection
		@private
		@param mastheadLinkData {Object} The main object with all of the masthead data used to create it all.
		@return (String) The entire ibm-columns for the main item's megamenu.
	**/
  function createMegamenuSection(mastheadLinkData) {
    var megamenuSectionHtml = '',
      level1Lis = '',
      mmSectionMegapanels = '';

    /**
			Creates a basic set of LIs. Used for the "quick links".

			@method createQuicklinksList
			@private
			@param linksArr {Array} An array of objects with url and title to turn into LIs.
			@return {String} The HTML of LIs created.
		**/
    function createQuicklinksList(linksArr) {
      var lis = '',
        i = 0;

      for (i; i < linksArr.length; i++) {
        lis +=
          '<li><a class="ibm-h4 ibm-light" href="' +
          linksArr[i].url +
          '">' +
          linksArr[i].title +
          '</a></li>';
      }

      return lis;
    }

    /**
			Creates and returns the megapanel's 6-2 (on the left, with title and quicklinks).

			@method createMegapanelCol1
			@private
			@param megapanelContent {Object} The megapanel data to use to create the left column (heading and list).
			@return {String} The HTML of the megapanel's left column contents.
		**/
    function createMegapanelCol1(megapanelContent) {
      var htmlTempl = '{descr}{qlTitle}{quickLinks}',
        descr = '',
        qlTitle = '<p>' + megapanelContent.quickLinks.title + '</p>',
        quickLinks =
          '<ul class="ibm-plain-list ibm-mh-quicklinks">' +
          createQuicklinksList(megapanelContent.quickLinks.links) +
          '</ul>';

      if (megapanelContent.description && megapanelContent.description !== '') {
        descr =
          '<p class="ibm-h4 ibm-light">' +
          megapanelContent.description +
          '</p>';
      }

      return htmlTempl
        .replace('{descr}', descr)
        .replace('{qlTitle}', qlTitle)
        .replace('{quickLinks}', quickLinks);
    }

    /**
			Creates and returns the megapanel's 6-2 (on the right, with featured item).

			@method createMegapanelCol2
			@private
			@param megapanelContent {Object} The megapanel data to use to create the right column (heading and list).
			@return {String} The HTML of the megapanel's right column contents.
		**/
    function createMegapanelCol2(megapanelContent) {
      var img =
        megapanelContent.feature.imageUrl !== ''
          ? '<p><img data-src="' +
            megapanelContent.feature.imageUrl.replace('http:', 'https:') +
            '" width="300" height="150" alt="" class="ibm-resize"></p>'
          : '';

      return (
        '<p class="ibm-bold">' +
        megapanelContent.feature.heading +
        '</p>' +
        img +
        '<p class="ibm-linkcolor-default"><a href="' +
        megapanelContent.feature.linkUrl +
        '">' +
        megapanelContent.feature.linkTitle +
        '</a></p>'
      );
    }

    /**
			Creates and returns the megapanel's heading.

			@method makeMenuSectionHeading
			@private
			@param menuSection {Object} The megapanel data to use to create the heading.
			@return {String} The HTML of the megapanel's heading.
		**/
    function makeMenuSectionHeading(menuSection) {
      var html = '';
      if (menuSection.heading !== '') {
        html =
          '<li role="presentation" class="ibm-mm-sec-heading ibm-bold">' +
          menuSection.heading +
          '</li>';
      }
      return html;
    }

    /**
			Creates the megapanel trigger list item.

			@method createMegapanelTriggerItem
			@private
			@param level1Item {Object} The data to use to create the megapanel trigger.
			@param panelId {String} The ID of the panel that the trigger is for (to show on hover).
			@return {String} The HTML for trigger LI created.
		**/
    function createMegapanelTriggerItem(level1Item, panelId) {
      var linkClass = panelId !== '' ? ' ibm-arrow-forward-link' : '',
        linkPID = panelId !== '' ? ' data-panelid="' + panelId + '"' : '';

      return (
        '<li role="presentation"><a class="ibm-light ibm-h4' +
        linkClass +
        '" href="' +
        level1Item.url +
        '"' +
        linkPID +
        '>' +
        level1Item.title +
        '</a></li>'
      );
    }

    // For each menu section,
    // For each item in the section.
    $.each(mastheadLinkData.data.menuSections, function() {
      var thisSection = this;

      // Make the heading for this menu list section.
      level1Lis += makeMenuSectionHeading(thisSection);

      // For each menu item (in this section but doesn't matter),
      //   add the item to the list then make the megapanel for it.
      $.each(thisSection.menuItems, function(i) {
        var level1Item = this,
          hasMegapanel =
            level1Item.megapanelContent &&
            level1Item.megapanelContent.headingTitle !== ''
              ? true
              : false,
          panelId = hasMegapanel ? mastheadLinkData.id + '-mp' + i : '';

        // 1. Add this main item to the list of items on the left that each have a megapanel.
        level1Lis += createMegapanelTriggerItem(level1Item, panelId);

        // 2. If this item has a megapanel, build it.
        if (hasMegapanel) {
          mmSectionMegapanels +=
            '<div class="ibm-megapanel" id="' +
            panelId +
            '"><h3 class="ibm-light ibm-h1 ibm-medium ibm-padding-bottom-1"><a href="' +
            level1Item.megapanelContent.headingUrl +
            '">' +
            level1Item.megapanelContent.headingTitle +
            '</a></h3><div class="ibm-columns"><div class="ibm-col-6-2">' +
            createMegapanelCol1(level1Item.megapanelContent) +
            '</div><div class="ibm-col-6-2">' +
            createMegapanelCol2(level1Item.megapanelContent) +
            '</div></div></div>';
        }
      });
    });

    megamenuSectionHtml =
      '<div role="dialog" aria-labelledby="mhitem-' +
      mastheadLinkData.id +
      '" class="ibm-megamenu-section" data-linkid="' +
      mastheadLinkData.id +
      '"><div id="' +
      mastheadLinkData.id +
      '" class="ibm-columns"><div class="ibm-col-6-2 ibm-background-neutral-white-30 ibm-megapaneltrigs"><ul class="ibm-dropdown-menu ibm-background-neutral-white-30">' +
      level1Lis +
      '</ul></div><div class="ibm-col-6-4 ibm-background-white-core">' +
      mmSectionMegapanels +
      '</div></div></div>';

    return megamenuSectionHtml;
  }

  /**
		Sets up all megamenu bindings (hover, focus, keyboard, etc).
		<br>Called deferred because not critical onscreen display on load.
		@method setupMegamenuBindings
		@private
	**/
  function setupMegamenuBindings() {
    var mouseOutTimeout = null,
      mouseoverTimeout = null;

    // OPENING THE MEGAMENU ONLY:
    // Onclick of a catnav link:
    //   If the MM is already open, goto the link.
    //   If it's not open, open that section.
    // On hover:
    //   If it's not already open, slight pause to make sure they aren't doing a mouse flyby.
    //   If it's already open slight pause then show the new section b/c they are already interacting, so make it less delay.
    mastheadLinklist.mainLinks.$el
      .hoverIntent(
        function() {
          var menuType = this.getAttribute('data-menutype'),
            menuId = this.getAttribute('data-linkid');

          hideAllMenus();

          if (menuType === 'dropdown') {
            makeItemActive($(this), true);
          } else if (menuType === 'megamenu') {
            // If we haven't loaded this megamenu's images already, load them and set a flag.
            if (!mastheadLinklist.imagesloaded[menuId]) {
              $(".ibm-megamenu-section[data-linkid='" + menuId + "']")
                .find('img[data-src]')
                .each(function() {
                  $(this).attr('src', $(this).data('src'));
                });
              mastheadLinklist.imagesloaded[menuId] = true;
            }

            showMegamenuSection(menuId);
            showMegamenu(true);
            makeItemActive($(this), true);
          }

          fireHoverMetricEvent({
            id: menuId,
            title: this.innerHTML,
            type: menuType,
          });
        },
        function() {
          // do nothing on mouse out. Covered by larger scoped element mouseout binding.
        },
        '>li>a'
      )
      .on('click keydown', '>li>a', function(evt) {
        var menuType = this.getAttribute('data-menutype'),
          menuId = this.getAttribute('data-linkid');

        // Only open the menu on keydown event if they hit enter, else keyboard navigation controls ensue.
        if (evt.type === 'keydown' && evt.keyCode !== 13) {
          return;
        }

        hideAllMenus();

        if (menuType === 'dropdown') {
          evt.preventDefault();
          makeItemActive($(this), true);
          $(this)
            .next('ul')
            .find('a:first')
            .focus();
        } else if (menuType === 'megamenu') {
          evt.preventDefault();
          showMegamenuSection(menuId);
          showMegamenu(true);
          megamenu.$sectionShowing.find('a:first').focus();
        }
      });
    // .on("focus", ">li>a", function () {
    // 	var menuType = this.getAttribute("data-menutype");
    // 	// // Dropdown menus only, open and focus on first item.
    // 	// if (menuType === "dropdown") {
    // 	// 	makeItemActive($(this), true);
    // 	// 	$(this).next("ul").find("a:first").focus();
    // 	// }
    // });

    // CLOSING THE MEGAMENU ONLY:
    // Setup mouseout to close the menu after a small waiting period, to make sure they just move the mouse out and back in.
    // If they mouse back in within the timeframe, cancel the megamenu closing.
    // Hover is jq multi-event (mousein, mouseout)
    mastheadLinklist.mainLinks.$el
      .children('li')
      .add(megamenu.$el)
      .hover(
        function() {
          clearTimeout(mouseOutTimeout);
        },
        function() {
          clearTimeout(mouseoverTimeout);

          mouseOutTimeout = setTimeout(function() {
            hideAllMenus();
          }, 400);
        }
      );

    // The close icon at the bottom.
    megamenu.$closeButtonLink.click(function(evt) {
      evt.preventDefault();

      showMegamenu(false);

      mastheadLinklist.mainLinks.$el.find("a[tabindex='0']").focus();
    });

    // KEYBOARD TABBING RULES.
    // If they hit escape, close the MM.
    // If they tab from either end link, loop back around.
    // Use .on for delegation so we only bind 1 main parent DOM element instead of wasting binding every link. Hello speed.
    megamenu.$el.on('keydown', function(evt) {
      // If they try and tab FORWARD and they were on the last link in the visible MM section, goto close link.
      // If they tab forward from close link, goto first link.
      // Do all opposites.
      // If they hit ESCAPE, close MM and return to orig Cat.nav link they clicked.

      // If they try and tab FORWARD and they were on the last link in the visible MM section, goto close link.
      // If they tab forward from close link, goto first link.

      var $gotoLink = '';

      if (evt.keyCode === 9 && !evt.shiftKey) {
        if ($(evt.target).is(megamenu.$sectionShowing.find('a:last'))) {
          $gotoLink = megamenu.$closeButtonLink;
        } else if ($(evt.target).is(megamenu.$closeButtonLink)) {
          $gotoLink = megamenu.$sectionShowing.find('a:first');
        }
      } else if (evt.keyCode === 9 && evt.shiftKey) {
        if ($(evt.target).is(megamenu.$sectionShowing.find('a:first'))) {
          $gotoLink = megamenu.$closeButtonLink;
        } else if ($(evt.target).is(megamenu.$closeButtonLink)) {
          $gotoLink = megamenu.$panelShowing.find('a:last');
        }
      } else if (evt.keyCode === 27) {
        showMegamenu(false);
        mastheadLinklist.mainLinks.$el.find("a[tabindex='0']").focus();
      }

      // If we set a link to goto, stop the default tab action and goto our custom link EL.
      if ($gotoLink !== '') {
        evt.preventDefault();
        $gotoLink.focus();
      }
    });

    ////////////////////////////////////////////////////////////////////////////////////////
    // NEW: Megapanel bindings
    ////////////////////////////////////////////////////////////////////////////////////////

    // Need to sort out keyboard controls and tab ring with Jolic and Lahart to find optimal experience
    $(document.getElementsByClassName('ibm-megapaneltrigs'))
      .hoverIntent(
        function() {
          showMegamenuPanel(this.getAttribute('data-panelid'));

          makeItemActive(
            $(document.getElementsByClassName('ibm-megapaneltrigs')).find('a'),
            false
          );

          makeItemActive($(this), true);

          $(document.getElementsByClassName('ibm-megapaneltrigs'))
            .find('a')
            .blur();

          fireHoverMetricEvent({
            id: this.getAttribute('data-panelid'),
            url: this.getAttribute('href'),
            title: this.innerHTML,
            type: 'megapanel trigger',
          });
        },
        function() {
          // do nothing.
        },
        'a'
      )
      .on('click', 'a', function(evt) {
        // If it's a link and not a menu trigger (doesn't have a panel associated with it),
        // goto that page link.
        if (!this.getAttribute('data-panelid')) {
          return;
        }

        evt.preventDefault();

        // Open the panel
        showMegamenuPanel(this.getAttribute('data-panelid'));
        makeItemActive(
          $(document.getElementsByClassName('ibm-megapaneltrigs')).find('a'),
          false
        );
        makeItemActive($(this), true);

        // Focus on first link in the panel
        //megamenu.$panelShowing.find(":focusable:first").focus();
      });
  }

  /**
		Adds or removes the active class to the passed megapanel trigger item.

		@method makeItemActive
		@param $triggerLink (jQuery selector) The trigger to show as active.
		@param showit (Boolean) To set the trigger as active or not.
	**/
  function makeItemActive($triggerLink, showit) {
    if (showit) {
      $triggerLink.parent().addClass('ibm-active');
    } else {
      $triggerLink.parent().removeClass('ibm-active');
    }
  }

  /**
		Public API to show the megamenu.
		<br>Need to also call public API to tell it which megamenu to show.
		<br>Used on hover of a main masthead item.

		@method showMegamenu
		@param bool {Boolean} Show the megamenu or not (a section needs to be set to active).
	**/
  me.showMegamenu = showMegamenu;
  function showMegamenu(bool) {
    if (bool) {
      $elements.body.addClass('ibm-masthead-megamenu-showing');
      megamenu.isopen = true;
    } else {
      // Remove the class that shows the stuff,
      // then set flags.
      $elements.body.removeClass('ibm-masthead-megamenu-showing');

      // This gets set to true when called to show the megamenu, and will negate the 'remove class' timeout below.
      // This means when we move from section to section the megapanel won't close and it'll stay open.
      // But if the panel hasn't been opened after 3 seconds, remove show class so tabbing doesn't tab to it.
      megamenu.isopen = false;

      // Cleanup
      // Delay this so that we don't slide up an empty container.
      // Remove the "showing" class from the megamenu container if we aren't actually showing the megamenu.
      setTimeout(function() {
        if (!megamenu.isopen && megamenu.$sectionShowing) {
          megamenu.$sectionShowing.removeClass('ibm-showing');
          megamenu.$sectionShowing = null;

          if (megamenu.$panelShowing) {
            megamenu.$panelShowing.removeClass('ibm-showing');
            megamenu.$panelShowing = null;
          }
        }
      }, 3000);
    }
  }

  /**
		Public API to show a particular megapanel within a particular megamenu.
		<br>Used on hover of a megamenu panel trigger.

		@method showMegamenuPanel
		@param panelId {String} The ID of the particular panel to show in the megamenu section.
	**/
  me.showMegamenuPanel = showMegamenuPanel;
  function showMegamenuPanel(panelId) {
    if (!panelId) {
      return;
    }

    if (megamenu.$panelShowing) {
      megamenu.$panelShowing.removeClass('ibm-showing');
    }

    megamenu.$panelShowing = $(document.getElementById(panelId)).addClass(
      'ibm-showing'
    );
  }

  /**
		Public API to set which megamenu/section to show (for which main masthead link).
		<br>Used on hover of main masthead item.

		@method showMegamenuSection
		@param sectionId {String}
	**/
  me.showMegamenuSection = showMegamenuSection;
  function showMegamenuSection(sectionId) {
    // Reset which section and panel are showing.
    // Then show the proper megamenu and show the first panel by default.
    if (megamenu.$sectionShowing) {
      megamenu.$sectionShowing.removeClass('ibm-showing');
    }
    if (megamenu.$panelShowing) {
      megamenu.$panelShowing.removeClass('ibm-showing');
    }

    megamenu.$sectionShowing = $(
      ".ibm-megamenu-section[data-linkid='" + sectionId + "']"
    ).addClass('ibm-showing');

    // Show the first panel by default and clear and highlight the corresponding item in the trigger menu.
    showMegamenuPanel(
      megamenu.$sectionShowing.find('.ibm-megapanel:first')[0].id
    );
    megamenu.$sectionShowing
      .find('.ibm-megapaneltrigs li.ibm-active')
      .removeClass('ibm-active');
    megamenu.$sectionShowing
      .find(".ibm-megapaneltrigs a[data-panelid='" + sectionId + "-mp0']")
      .parent()
      .addClass('ibm-active');
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // Misc functions
  //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
		Makes and returns basic LIs.

		@method createLinkList
		@private
		@param linksArr {Array} List of objects to turn into link list items (LI)s.
		@return {String} The HTML of LIs created.
	**/
  function createLinkList(linksArr) {
    var lis = '',
      i = 0;

    for (i; i < linksArr.length; i++) {
      lis +=
        '<li><a href="' +
        linksArr[i].url +
        '">' +
        linksArr[i].title +
        '</a></li>';
    }

    return lis;
  }

  /**
		Creates each of the individual icon links to use in the masthead.
		<br />Each icon can be disabled with a standard "config.set" utility option.

		@method createLinklistIconsonly
		@private
		@return {String} The link list UL HTML to inject in the masthead if links exist.
	**/
  function createLinklistIconsonly() {
    var html = '';

    // The profile icon item/button/trigger.
    if (
      (IBM.common.util.config.isEnabled('masthead.profile') &&
        v18Data.profileMenu.signedout.length > 0) ||
      IBM.common.util.config.isEnabled('masthead.profileAlways')
    ) {
      html +=
        '<li role="presentation" class="ibm-masthead-item-signin"><button role="button" aria-haspopup="true" aria-owns="ibm-signin-minimenu-container" class="ibm-profile-link">' +
        (v18Data.profileMenu.signedout[0]
          ? v18Data.profileMenu.signedout[0].title
          : '') +
        '</button></li>';
    }

    // The hamburger menu icon, unless it was disabled for some dumb reason.
    if (IBM.common.util.config.isEnabled('masthead.mobilemenu')) {
      html +=
        '<li role="presentation" class="ibm-masthead-item-menu"><button role="button" aria-haspopup="true" aria-owns="ibm-burger-menu-container" class="ibm-menu-link">' +
        v18Data.misc.sitenav +
        '</button></li>';
    }

    if (html !== '') {
      html =
        '<ul aria-label="Tools" role="menubar" class="ibm-masthead-iconsonly">' +
        html +
        '</ul>';
    }

    return html;
  }

  /**
		Loops thru translation file link array and creates the masthead main category link list.

		@method createMainMastheadLinks
		@private
		@return {String} The link list UL HTML to inject in the masthead if links exist.
	**/
  function createMainMastheadLinks() {
    var html = '';

    //   Class determines if the icon/chevron shows up or not.
    //   Data-attr provides owning section or menu.
    //   Second data-attr provides type of menu: dropdown or megamenu.
    if (mastheadData.mainLinks.links.length > 0) {
      $.each(mastheadData.mainLinks.links, function(i) {
        var addClass = this.hasMenu ? ' ibm-hasmenu' : '',
          linkClass =
            addClass !== ''
              ? ' class="ibm-chevron-down-link ibm-icon-after"'
              : '',
          menuType = this.hasMegapanel
            ? 'megamenu'
            : this.hasMenu
            ? 'dropdown'
            : 'none';

        html +=
          '<li role="presentation" class="ibm-mh-mainitem' +
          addClass +
          '"><a role="button" href="' +
          this.url +
          '" id="mhitem-mms' +
          i +
          '" data-linkid="mms' +
          i +
          '"' +
          linkClass +
          ' data-menutype="' +
          menuType +
          '">' +
          this.title.htmlspecialchars() +
          '</a></li>';

        // If the main link has a menu (either type) add it to the array of menus we need to build.
        if (menuType === 'megamenu') {
          makethese.megamenus.push({
            id: 'mms' + i,
            data: this,
          });
        } else if (menuType === 'dropdown') {
          makethese.dropdownmenus.push({
            id: 'mms' + i,
            data: this,
          });
        }
      });

      html =
        '<ul aria-label="' +
        v18Data.unav.title +
        '" role="toolbar" class="ibm-masthead-categories">' +
        html +
        '</ul>';
    }

    return html;
  }

  /**
		Creates a the list of links for the burger menu. The provider of the links.
		<br>The burger menu uses this returned/stored HTML to populate the burger menu.

		@method createMainMastheadLinksBurgermenu
		@private
		@param linkSet {Array} An array of data to turn into a list of links. Sets as show/hide if applicable.
		@return {String} The HTML of the full UL created from the passed link set.
	**/
  function createMainMastheadLinksBurgermenu(linkSet) {
    var html = '';

    // Generic function to make a basic list item from a common link object/data.
    function makeLis(menuItems) {
      var i = 0,
        lis = '',
        url = '';

      for (i; i < menuItems.length; i++) {
        // TEMP backup. TODO: Santelia: remove when URLs are live.
        // Safety in case menu item URL is empty, use the megapanel heading one instead.
        // This switch will be removed once URLs are added to ECM translation. and always use .url.
        url =
          menuItems[i].url !== ''
            ? menuItems[i].url
            : menuItems[i].megapanelContent.headingUrl;
        lis += '<li><a href="' + url + '">' + menuItems[i].title + '</a></li>';
      }

      return lis;
    }

    function convertToShowhide(mainItem, subMenuLis) {
      var html =
        '<div data-widget="showhide" data-type="panel" class="ibm-show-hide"><h2>' +
        mainItem.title.htmlspecialchars() +
        '</h2><div class="ibm-container-body"><ul>' +
        subMenuLis +
        '</ul></div></div>';

      return html;
    }

    // If there are item in the array passed, make a link for each one.
    if (linkSet.length > 0) {
      $.each(linkSet, function() {
        var linkItem = '',
          subMenuLis = '',
          i = 0;

        // MENU ITEM/LIST ITEM LINKS generation
        // Build the drop-down/menu items.
        if (this.menuSections && this.menuSections.length > 0) {
          for (i; i < this.menuSections.length; i++) {
            subMenuLis += makeLis(this.menuSections[i].menuItems);
          }
        } else if (this.menuItems && this.menuItems.length > 0) {
          subMenuLis += makeLis(this.menuItems);
        }

        // SHOW/HIDE SETUP.
        // If it had subMenuLis, this main masthead link needs to be created as a show/hide instead of a normal list link item.
        // Else create this MAIN masthead item as a plain main link
        if (subMenuLis !== '') {
          linkItem = convertToShowhide(this, subMenuLis);
        } else {
          linkItem =
            '<a href="' +
            this.url +
            '">' +
            this.title.htmlspecialchars() +
            '</a>';
        }

        // Add the link inside a list list and append it to returned HTML.
        // This is either a plain <a> or will be a <a> that is a trigger for a show/hide with
        //  nested UL list of links in it.
        html += '<li>' + linkItem + '</li>';
      });
      // End for each main masthead link.

      // Put the entire list of masthead links and submenus in a list and return for storing.
      html =
        '<ul class="ibm-mobilemenu-mhlinks" aria-label="' +
        v18Data.unav.title +
        '">' +
        html +
        '</ul>';
    }

    return html;
  }

  /**
		Common function used to fire a metrics event for various masthead UI interactions.

		@method fireHoverMetricEvent
		@param data {Object} The data to use for the metrics event.
		@param data.id {String} The ID to use for the metrics event.
		@param data.title {String} The title to use for the metrics event.
		@param data.type {String} The type to use for the metrics event.
	**/
  function fireHoverMetricEvent(data) {
    IBM.common.util.statshelper.fireEvent({
      ibmEV: 'masthead',
      ibmEvAction: 'hover',
      ibmEvGroup: data.id,
      ibmEvLinkTitle: data.title,
      ibmEvSection: data.type,
    });
  }

  /**
		Returns object with all of the built masthead link list HTML objects.

		@method getMastheadLinklists
		@return {Object} The object containing all of the masthead link lists HTML. Used by mobile menu widget.
	**/
  me.getMastheadLinklists = function() {
    return mastheadLinklist;
  };

  /**
		Public API that calculates the point at which the masthead main links get hidden and injects CSS block.
		<br>Gets widths of logo and main nav elements and dynamically injects a media query style for when to
		 hide the main links because the won't fit across the screen.

		@method setMastheadWidthUsed
	**/
  me.setMastheadWidthUsed = setMastheadWidthUsed;
  function setMastheadWidthUsed() {
    var w = 0;

    // Get the width of the three elements that they take up, including margins.
    // Items that are set as absolute position have to be specifically named to get the proper visual width.
    $(document.getElementById('ibm-universal-nav'))
      .addClass('getWidth')
      .find(
        '#ibm-home, .ibm-masthead-categories, .ibm-masthead-rightside, .ibm-parent-site-name'
      )
      .each(function() {
        w += $(this).outerWidth(true);
      })
      .end()
      .removeClass('getWidth');

    if (!document.getElementById('ibm-masthead-hidelinks')) {
      $('head').append('<style id="ibm-masthead-hidelinks"></style>');
    }

    // Inject the dynamic media query style to hide masthead links and megamenu under XX screen width.
    document.getElementById('ibm-masthead-hidelinks').innerHTML =
      '@media screen and (max-width: ' +
      (w + 50) +
      'px) { .ibm-masthead-categories,#ibm-megamenu-sections{display:none} }';
  }

  /**
		Sets up focus, tabstops, &amp; arrow controls for the main masthead links.
		<br />Called after megamenu has been created and injected and bindings set. AKA: last.

		@method setupMastheadMainlinksAccessibility
		@private
	**/
  function setupMastheadProfileMenuAccessibility() {
    // CUSTOM controls for icononly list items (right side masthead) because it's a special menu setup - buttons instead of items.
    // Cross between toolbar and menubar. We don't want the menu to open by default, because it's
    //  a wonky experience when there's only one menu and the other thing is like an overlay/button, per convo Marc Johlic.
    // This sets up the tab out (close the menu) and the arrow controls of the profile drop-down menu.
    var $mastheadIcons = $elements.masthead.find('.ibm-masthead-iconsonly');

    if ($mastheadIcons.children('li').length > 0) {
      IBM.common.util.a11y.makeToolbarAccessible({
        el: $mastheadIcons[0],
        keydown: function(el, evt) {
          // Set what link to focus on.
          var focusLink = null;

          switch (evt.originalEvent.keyCode) {
            case 9: // Tab just closes the menu (if it was open)
              me.hideProfileMenu();
              break;

            case 27: // Esc - focus first on the main item that has the menu open, then close the menu.
              focusLink = $mastheadIcons.find('li.ibm-active button').focus();
              me.hideProfileMenu();
              break;

            case 38: // Up arrow
              focusLink =
                $(el)
                  .parent()
                  .prev()
                  .children('a')[0] ||
                $(el)
                  .closest('ul')
                  .find('a:eq(-1)');
              break;

            case 40: // Down arrow
              focusLink =
                $(el)
                  .parent()
                  .next()
                  .children('a')[0] ||
                $(el)
                  .closest('ul')
                  .find('a:eq(0)');
              break;
          }

          // If we set a link to focus on, do it.
          if (focusLink !== null) {
            $(focusLink).focus();
          }
        },
      });
    }
  }

  /**
		Sets up focus, tabstops, &amp; arrow controls for the main masthead links.
		<br />Called after megamenu has been created and injected and bindings set. AKA: last.

		@method setupMastheadMainlinksAccessibility
		@private
	**/
  function setupMastheadMainlinksAccessibility() {
    // Special keyboard control for main masthead items and menus.
    IBM.common.util.a11y.makeToolbarAccessible({
      el: $elements.masthead.find('.ibm-masthead-categories')[0],
      keydown: function(el, evt) {
        if (el.getAttribute('data-menutype') === null) {
          var focusLink = null;

          switch (evt.originalEvent.keyCode) {
            case 9: // Tab
              hideAllMenus();
              // Reset tab placeholder to main item.
              $(el)
                .closest('.ibm-mh-mainitem')
                .children('a')
                .attr('tabindex', '0');

              // If they backtabbed, we have to focus on previous element so it tabs off menu bar,
              //  then set tabindex back to this main item for tab forward placeholder again.
              if (evt.originalEvent.shiftKey) {
                $(el)
                  .closest('.ibm-mh-mainitem')
                  .prev()
                  .children('a')
                  .focus()
                  .attr('tabindex', '-1');
                $(el)
                  .closest('.ibm-mh-mainitem')
                  .children('a')
                  .attr('tabindex', '0');
              }

              break;

            case 37: // Left arrow
              $(el)
                .closest('.ibm-mh-mainitem')
                .prev()
                .children('a')
                .focus();
              hideAllMenus();

              break;

            case 38: // Up arrow
              focusLink =
                $(el)
                  .parent()
                  .prev()
                  .children('a')[0] ||
                $(el)
                  .closest('ul')
                  .find('a:eq(-1)');

              break;

            case 39: // Right arrow
              $(el)
                .closest('.ibm-mh-mainitem')
                .next()
                .children('a')
                .focus();
              hideAllMenus();

              break;

            case 40: // Down arrow
              focusLink =
                $(el)
                  .parent()
                  .next()
                  .children('a')[0] ||
                $(el)
                  .closest('ul')
                  .find('a:eq(0)');

              break;
          }

          if (focusLink !== null) {
            $(focusLink).focus();
          }
        }
      },
    });
  }

  /**
		Sets up the burger menu icon binding to open it on click.

		@method setupBurgerMenuIcon
		@private
	**/
  function setupBurgerMenuIcon() {
    if (IBM.common.util.config.isEnabled('masthead.mobilemenu')) {
      $(document.getElementsByClassName('ibm-masthead-iconsonly'))
        .find('.ibm-masthead-item-menu button')
        .click(function(evt) {
          evt.preventDefault();

          IBM.common.module.mobilemenu.toggle();
        });
    }
  }

  /**
		Sets up how to show the search field; normal or minimized or maximized on resize.

		@method setupSearchfieldResponsiveness
		@private
	**/
  function setupSearchfieldResponsiveness() {
    var didResize = false;

    // Run toggle functions on load and then check/run on resize.
    toggleSearchField();

    $(window).on('resize', function() {
      didResize = true;
    });

    setInterval(function() {
      if (didResize) {
        didResize = false;
        toggleSearchField();
      }
    }, 100);
  }

  /**
		Calls the public API to show the search field a certain way based on browser width.

		@method toggleSearchField
	**/
  function toggleSearchField() {
    if (IBM.common.module.mastheadsearch.getDisplayState() === 'maximized') {
      return;
    }

    if ($(window).width() < 580) {
      IBM.common.module.mastheadsearch.showAs('minimized');
    } else {
      IBM.common.module.mastheadsearch.showAs('default');
    }
  }

  /* Wait for events to happen.
   **********************************************************************************************/

  // When translations are ready, call autoInit to build it. Translations can be cached, so use runAsap also.
  IBM.common.translations
    .subscribe('dataReady', 'Masthead', me.autoInit)
    .runAsap(me.autoInit);

  // Dynamically add a CSS block to shift the right icons over # of PX that scrollbars took up when we hide them.
  me.subscribe('ready', 'dyncss', function() {
    IBM.common.util.addCssRule(
      '#ibm-com.ibm-no-scroll #ibm-universal-nav .ibm-masthead-iconsonly',
      {
        'margin-right':
          parseInt(
            $(document.getElementById('ibm-universal-nav'))
              .find('.ibm-masthead-iconsonly')
              .css('margin-right'),
            10
          ) +
          IBM.common.util.getScrollbarWidth() +
          'px',
      }
    );
  });
})(jQuery, IBMCore);
;
/**

	Masthead sticky functionality
	<br />
	<br />This is the built-in sticky functionality for the masthead.
	<br />
	<br />Enabled by default.
	<br />To disable: Add this JS snippet to your page (although you should never really do this):
	
		IBMCore.common.util.config.set({
			masthead: { 
				sticky: {
					enabled: false
				}
			}
		});
	
	@class IBMCore.common.module.masthead.sticky

**/

(function($, IBM) {
	var me = IBM.namespace(IBM, "common.module.masthead.sticky"),
		classes = {
			sticky: "ibm-masthead-sticky",
			stickyShowing: "ibm-masthead-sticky-showing",
			enableTransition: "hastransition"
		},
		currentScrollTop = 0,
		delta = 120,
		didScroll = false,
		$elements = {
			masthead: {},
			body: {},
			mhPlaceholder: {}
		},
		lastScrollTop = 0,
		lastDirection = "";

	/**
		Callback from subscription to meta data 'ready' event publisher. Checks if masthead is enabled (default). 
		<br />If enabled, subscribe to masthead and then init sticky feature if enabled.
		<br />Two separate checks so that a masthead type can override and disable/enable it (masthead.js).

		@method autoInit
	**/
	me.autoInit = function () {
		if (IBM.common.util.config.isEnabled("masthead")) {
			IBM.common.module.masthead.subscribe("ready", "mastheadsticky", function () {
				if (IBM.common.util.config.isEnabled("masthead.sticky")) {
					setTimeout(me.init, 20);
				}
			});
		}
	};

	/**
		Called by autoInit, this sets up the sticky functionality. The end.

		@method init
	**/
	me.init = function () {
		$elements.body = $(document.body);
		$elements.masthead = $(document.getElementById("ibm-masthead"));
		
		setupStickyFunction();
		
		if (!document.getElementsByClassName("ibm-mhplaceholder")[0]) {
			$elements.mhPlaceholder = $('<div class="ibm-hide ibm-mhplaceholder"></div>').insertAfter("#ibm-masthead");
		}
	};

	/**
		Makes the masthead not sticky (de-floats it/non-fixed) and sets back to 'normal' positioning.

		@method makeStickyHidden
		@private
	**/
	function makeStickyHidden () {
		$elements.body.addClass(classes.sticky).removeClass(classes.stickyShowing);

		showPlaceholder(true);
		
		// Wait to add transition. This is so we can make it stick hidden w/o the transition, but then once
		// it's sticky it has transition.
		setTimeout(function () {
			$elements.masthead.addClass(classes.enableTransition);
		}, 200);
	}

	/**
		Makes the masthead sticky and floats it (fixed position).

		@method makeStickyShowing
		@private
	**/
	function makeStickyShowing () {
		$elements.masthead.addClass(classes.enableTransition);
		$elements.body.addClass(classes.sticky + " " + classes.stickyShowing);

		showPlaceholder(true);
	}

	/**
		Sets up the onscroll event to toggle sliding down the sticky masthead or sliding it up.

		@method setupStickyFunction
		@private
	**/
	function setupStickyFunction () {
		$(window).scroll(function () {
			didScroll = true;
		});

		setInterval(function () {
			if (didScroll) {
				didScroll = false;
				toggleMasthead();
			}
			else if (lastDirection === "down") {
				lastScrollTop = $(this).scrollTop();
			}
		}, 100);
	}

	/**
		Contains the logic to decide whether to slide up or down the sticky/fixed masthead.

		@method toggleMasthead
		@private
	**/
	function toggleMasthead () {
		currentScrollTop = $(this).scrollTop();

		// When we get to the top, snap the masthead back in place. No transition.
		if (currentScrollTop === 0) {
			//$elements.masthead.addClass("snapback").removeClass("hastransition sticky showing");
			$elements.masthead.removeClass(classes.enableTransition);
			$elements.body.removeClass(classes.sticky + " " + classes.stickyShowing);
			showPlaceholder(false);
		} 
		else if (Math.abs(lastScrollTop - currentScrollTop) >= delta) {
			// When scrolling down.
			// Slide the masthead up, put position back, hide placeholder.
			if (currentScrollTop > lastScrollTop) {
				if (lastDirection !== "down") {
					lastDirection = "down";
					
					makeStickyHidden();
				}
			} 
			// When scrolling up, reveal a fixed masthead.
			else {
				if (lastDirection !== "up") {
					lastDirection = "up";
					
					makeStickyShowing();
				}
			}

			lastScrollTop = currentScrollTop;
		}
	}

	/**
		Show or hides the masthead placeholder - the spacer element for when the masthead is 
		 floating/fixed so the page doesn't jar in transition states.

		@method showPlaceholder
		@param b {Boolean} True to show it, false to hide it. Duh.
		@private
	**/
	function showPlaceholder (b) {
		$elements.mhPlaceholder[b ? "removeClass" : "addClass"]("ibm-hide");
	}


	/* Wait for events to happen.
	**********************************************************************************************/

	// When meta data is ready (config), call auto init.
	IBM.common.meta.subscribe("dataReady", "mastheadsticky", me.autoInit).runAsap(me.autoInit);

})(jQuery, IBMCore);
;
/**

	Masthead search module
	<br />
	<br />This is the search field in the masthead, the mobile masthead overtake search, and the extra typeahead feature.
	<br />This waits for masthead to be ready and then binds the masthead search item and creates everything beyond it.

	@class IBMCore.common.module.mastheadsearch

**/

// TODO: This needs refactoring after verified it's here to stay and not changing.

(function($, IBM) {
  /**
		Publishes this event after search function is built.

		@event ready
	**/
  var me = IBM.namespace(IBM, 'common.module.mastheadsearch'),
    myEvents = IBM.common.util.eventCoordinator(me, 'Mastheadsearch', [
      'ready',
    ]),
    defaultTypeaheadRequestPause = 50, // # of MS to wait between typing before making a WSR.
    displayState = 'default',
    $elements = {
      body: {},
      inputField: {},
      searchScope: {},
      searchButton: {},
      searchCloseButton: {},
      searchForm: {},
      searchModule: {},
      typeaheadContainer: {},
      typeaheadUl: {},
    },
    latestText = '',
    marketplaceScopeSetup = false,
    requestCount = 0,
    typeaheadResultsShowing = false;

  me.isLoaded = false;

  /**
		Callback from subscription to meta data 'ready' event publisher.
		<br />If masthead and search are enabled (default), subscribe to masthead then init masthead
		search (currently just does the mobile takeover parts).
		<br />If masthead search typeahead is enabled (default), subscribe to search then init typeahead feature.

		@method autoInit
	**/
  me.autoInit = function() {
    // masthead needs to be enabled for masthead.search to be enabled.
    // masthead.search needs to be enabled for masthead.search.typeahead to be enabled.
    // We only allow search to be hidden when masthead is ENABLED. We don't hide it if masthead is disabled.
    // If they want a minimal masthead (logo only): enable "alternate" masthead and disable search, profile, mobilemenu via config.set.
    if (IBM.common.util.config.isEnabled('masthead')) {
      if (IBM.common.util.config.isEnabled('masthead.search')) {
        IBM.common.module.masthead.subscribe(
          'ready',
          'mastheadsearch',
          function() {
            setTimeout(me.init, 100);
            IBM.common.module.masthead.pauseSubscription(
              'ready',
              'mastheadsearch'
            );
          }
        );

        // Masthead AND search are enabled, so check if typeahead is enabled and set it up after search is setup.
        if (IBM.common.util.config.isEnabled('masthead.search.typeahead')) {
          me.subscribe('ready', 'mastheadsearchtypeahead', function() {
            initTypeahead();
          });
        }
      } else {
        $(function() {
          $(document.getElementById('ibm-search-module')).addClass('ibm-hide');
        });
      }
    }
  };

  /**
		Callback from subscription to masthead 'ready' event publisher, inside autoInit.
		<br />Moves the search field into an overlay and binds the icon to open it and do all associated functions.

		@method init
	**/
  // This was auto-init'd inside a timeout and masthead is ready (on screen).
  me.init = function() {
    // Cache some element selectors.
    $elements.body = $(document.body);
    $elements.inputField = $(document.getElementById('q'));
    $elements.searchButton = $(document.getElementById('ibm-search'));
    $elements.searchForm = $(document.getElementById('ibm-search-form'));
    $elements.searchModule = $(document.getElementById('ibm-search-module'));

    // Close button for the search overtake in MOBILE masthead.
    // Onclick, hide the typeahead container and set search back to minimized/trigger version.
    $elements.searchCloseButton = $(
      '<div class="ibm-masthead-search-close"><p class="ibm-ind-link ibm-icononly ibm-padding-bottom-0"><a href="#" class="ibm-close-link ibm-nospacing">' +
        IBM.common.translations.data.v18main.misc.close +
        '</a></p></div>'
    )
      .insertBefore('#ibm-search-form')
      .on('click', function(evt) {
        evt.preventDefault();
        showAs('minimized');
        showTypeaheadResults(false);
        $elements.searchButton.focus();
      })
      .find('a');

    // Setup the search field. Really just the mobile version that takes over the masthead.
    setupSearchField();

    me.isLoaded = true;
    myEvents.publish('ready');
  };

  /**
		Called from subscriptions of if mashtead, masthead search, and masthead typeahead are enabled.
		Can't do shit without those. This sets up type-ahead keypress functions and WSR to get suggested terms.

		@method initTypeahead
		@private
	**/
  function initTypeahead() {
    // TODO: Santelia: can we just empty it and only inject if not exists and don't re-bind.?
    // Remove for dynamic meta locale change. Kills all bindings also.
    if (!$elements.typeaheadContainer[0]) {
      $elements.typeaheadContainer = $(
        '<div id="ibm-search-typeahead-container" aria-expanded="false" class="ibm-search-typeahead-container"></div>'
      ).insertAfter($elements.searchModule);
    } else {
      $elements.typeaheadContainer.empty();
    }

    $elements.typeaheadUl = $(
      '<ul class="ibm-plain-list ibm-padding-bottom-0" role="listbox" aria-live="polite" aria-label="' +
        (IBM.common.translations.data.v18main.misc.resultsNav ||
          'Suggestions') +
        '"></ul>'
    );

    // Change input field to add proper a11y tagging since it's now an autocomplete setup.
    $elements.inputField.attr({
      role: 'combobox',
      'aria-autocomplete': 'list',
      'aria-expanded': 'false',
      'aria-owns': 'ibm-search-typeahead-container',
    });

    // @aria-activedescendant="id-of-selected-option" is added to input field dynamically on arrow
    //  key press which is the key to being able to keep the focus on the input field and why we don't
    //  need to change focus to the result list.
    // It tells ATs that $thisID is the one currently highlighted and it will read that ID's
    //  text as if it had focus.

    // Bind the results so when you click on one, it replaces the input text with it.
    $elements.typeaheadUl
      .on('focusin', function() {
        //clearTimeout(closeTimer);
      })
      .on('click', function(evt) {
        //clearTimeout(closeTimer);
        if ($(evt.target).closest('.typeahead-nooption')[0]) {
          return;
        }

        evt.preventDefault();
        evt.stopPropagation();
        setTypeaheadItemActive($(evt.target));
        setInputFieldValue();
        $elements.searchForm.submit();
      })
      .on('mouseover', function(evt) {
        var $hoverItem = $(evt.target);

        if ($hoverItem[0].nodeName.toLowerCase() !== 'li') {
          $hoverItem = $hoverItem.parent();
        }

        // If element is not a valid option, don't set it to active.
        if ($hoverItem.hasClass('typeahead-nooption')) {
          return;
        }

        $elements.typeaheadUl.find('li').removeClass('ibm-active');
        $hoverItem.addClass('ibm-active');
      });

    // NO inline code in here. This should only be logic and call functions.
    // "input" event covers pasting and fires on keyup
    $elements.inputField
      .on('input', function() {
        requestTypeaheadText();
        showInlinelinks(false);
      })
      .on('focus', function() {
        // If there is a value in the field, show the results on FIELD focus only.
        if ($elements.inputField.val() !== '') {
          showInlinelinks(false);
          showTypeaheadResults(true);
        }
      })
      .on('keydown', function(evt) {
        // HAVE to use keycode for xbrowser support.
        var keyCode = evt.keyCode;

        // LEFT/RIGHT/TAB
        // Let natural behavior happen if: left/right arrow or tab.
        if (keyCode === 37 || keyCode === 39) {
          return;
        }

        if (evt.keyCode === 9 && evt.shiftKey) {
          if (getDisplayState() !== 'maximized') {
            showTypeaheadResults(false);
            showInlinelinks(true);
          }
        }

        // UP/DOWN:
        // If not showing, request current value typeahead
        // else goto next if it's already showing.
        // UP
        if (keyCode === 38) {
          evt.preventDefault();

          if (!typeaheadResultsShowing) {
            requestTypeaheadText();
          } else {
            gotoPrevTypeaheadResult();
            setInputFieldValue();
          }
        }
        // DOWN
        else if (keyCode === 40) {
          evt.preventDefault();

          if (!typeaheadResultsShowing) {
            requestTypeaheadText();
          } else {
            gotoNextTypeaheadResult();
            setInputFieldValue();
          }
        }
      });

    setupCloseOnscroll();

    $elements.body.on('click', function(evt) {
      if (getDisplayState() === 'maximized') {
        return;
      }

      if (!$(evt.target).closest('.ibm-masthead-rightside')[0]) {
        showTypeaheadResults(false);
        showInlinelinks(true);
      }
    });

    // Create a tab ring when the masthead takeover/mini-overlay exists. Forces everyone to use close button.
    // If not on special small screen tab ring, then close the typeahead on forward tab out of search submit.
    $elements.searchButton.on('keydown', function(evt) {
      if (evt.keyCode === 9 && !evt.shiftKey) {
        if (getDisplayState() === 'maximized') {
          //evt.preventDefault();
          //$elements.searchCloseButton.focus();
        } else {
          showTypeaheadResults(false);
          //showInlinelinks(true);
        }
      }
    });
  }

  /**
		Empties the typeahead UL (removes the LIs) if there are items in it.

		@method clearTypeahead
	**/
  me.clearTypeahead = clearTypeahead;
  function clearTypeahead() {
    if ($elements.typeaheadUl.length > 0) {
      $elements.typeaheadUl.empty();
    }
  }

  /**
		Creates the typeahead UL from the passed results, highlights the string passed,
		injects it into the box and shows the drop-down box.

		@method createTypeahead
		@param searchString (String) The string that was searched on that provided the results object. Used to highlight (bold) them inthe list
		@param results (Object) The data object of returned results. Loops thru these and creates a list item using each one's text.
	**/
  me.createTypeahead = createTypeahead;
  function createTypeahead(searchString, results) {
    var items = results,
      lis = '',
      maxNum = 6,
      searchedFor = searchString;

    items.sort();

    // Update this to better include min/max #s with 'for'.
    $.each(items, function(i, v) {
      var term = v,
        reg = new RegExp(searchedFor, 'i');

      term = term.replace(reg, '<strong>' + searchedFor + '</strong>');

      if (i < maxNum) {
        lis +=
          '<li id="ibm-search-overlay-typeahead-res-' +
          i +
          '" role="option" tabindex="-1">' +
          term +
          '</li>';
      }
    });

    // If they emptied the field after this WSR ran, clear the typeaheads.
    if ($elements.inputField.val() === '') {
      clearTypeahead();
      showTypeaheadResults(false);
    } else {
      // Inject typeahead list on first time we have results.
      if (!$elements.typeaheadContainer.find('ul')[0]) {
        $elements.typeaheadContainer.html($elements.typeaheadUl);
      }

      $elements.typeaheadUl.html(lis);

      showTypeaheadResults(true);
    }
  }

  /**
		Public method/API that simply returns the display state of the typeahead box.

		@method getDisplayState
		@return {String} The state name that the typeahead container is in.
	**/
  me.getDisplayState = getDisplayState;
  function getDisplayState() {
    return displayState;
  }

  /**
		Object for a WSR callback. Uses timeout to kills the previous called WSR if it has not already been called.
		<br />This is a "wait this long to call this function" setup. AKA: Throttling.

		@method makeTypeaheadRequest
		@param callback {Function} The function to call after X ms have passed.
		@param ms {Integer} The # of milliseconds to wait before running the passed function. If this function was called again within the time before the previous one was run, the previous one is cancelled and the timer starts over for the latest called function.
	**/
  me.makeTypeaheadRequest = (function() {
    var timer = 0;
    return function(callback, ms) {
      var waitTime = ms || defaultTypeaheadRequestPause;
      clearTimeout(timer);
      timer = setTimeout(callback, waitTime);
    };
  })();

  /**
		Moves the "active" class to the next item in the list. Used on callback of an arrow key press.
		<br />Loops to first item if the bottom list item is active and you want to "go to next".

		@method gotoNextTypeaheadResult
		@private
	**/
  function gotoNextTypeaheadResult() {
    var $nextItem = $elements.typeaheadUl.find('li.ibm-active').next('li');

    $elements.typeaheadUl.find('li.ibm-active').removeClass('ibm-active');

    if ($nextItem[0]) {
      $nextItem.addClass('ibm-active');
    } else {
      $elements.typeaheadUl.find('li:first').addClass('ibm-active');
    }

    // If this item if the section heading, skip it and goto the next one.
    if (
      $elements.typeaheadUl.find('li.ibm-active').hasClass('typeahead-nooption')
    ) {
      gotoNextTypeaheadResult();
    }
  }

  /**
		Moves the "active" class to the previous item in the list. Used on callback of an arrow key press.
		<br />Loops to last item if the first list item is active and you want to "go to previous".

		@method gotoPrevTypeaheadResult
		@private
	**/
  function gotoPrevTypeaheadResult() {
    var $prevItem = $elements.typeaheadUl.find('li.ibm-active').prev('li');

    $elements.typeaheadUl.find('li.ibm-active').removeClass('ibm-active');

    if ($prevItem[0]) {
      $prevItem.addClass('ibm-active');
    } else {
      $elements.typeaheadUl.find('li:last').addClass('ibm-active');
    }

    // If this item if the section heading, skip it and goto the next one.
    if (
      $elements.typeaheadUl.find('li.ibm-active').hasClass('typeahead-nooption')
    ) {
      gotoPrevTypeaheadResult();
    }
  }

  /**
		Calls the typeahead service, only if the term is not the same as the last one, and "force" wasn't used.
		<br />Includes switch for default Marketplace TA service if page doesn't have their own custom form and the default
		 Marketplace one was used.

		@method requestTypeaheadText
		@param forceRequest (Boolean) True if you want to force the WSR even if the term is the same. Used for the checkbox scope toggle.
		@private
	**/
  function requestTypeaheadText(forceRequest) {
    var currentSearchTerm = $elements.inputField[0].value;

    // If the current text is the same as the latest one we set (meaning the text hasn't changed on the keyup),
    //  then stop and don't do another WSR (b/c the text hasn't changed).
    if (currentSearchTerm === latestText && !forceRequest) {
      return;
    }

    latestText = currentSearchTerm;

    // If they cleared the search field (there's no value in the text field), remove the typeahead box and stop.
    if (currentSearchTerm === '') {
      me.makeTypeaheadRequest(function() {
        clearTypeahead();
        showTypeaheadResults(false);
      }, defaultTypeaheadRequestPause + 10);

      return;
    }

    // Call the make request function (handles cancelling previous calls before timeout runs),
    // On callback (when timeout runs), we process the response accordingly:
    // Make the request, tagging it with a # (incremented).
    // When the callback fires, we store the data no matter what for faster repeat search terms,
    // BUT only update the typeahead box if *this* request is the most recent one.

    // If:
    //   1. The scoped search box is checked (indicating the user wants to scope the search)
    //   +
    //   2. The page has indicated that they have a custom function to call for typeahead.
    //  === We call their custom function instead of our default masthead typeahead one.

    // If we didn't add the default MP form and TA service, and a custom form is enabled
    //  with a typeahead, use the page's custom TA service.
    // Else if we setup MP and the box IS checked, use MP TA sevice.
    // Else use default ibm.com search TA service.
    // MP type-ahead service URL change; Nov 8 2016, per Seth Packham.
    //   previous was:  https://www.ibm.com/marketplace/api/search/v3/suggestions
    if (
      !marketplaceScopeSetup &&
      $elements.searchScope.find(':checkbox').prop('checked') &&
      me.customTypeaheadFunction
    ) {
      me.customTypeaheadFunction(currentSearchTerm);
    } else if (
      marketplaceScopeSetup &&
      $elements.searchScope.find(':checkbox').prop('checked')
    ) {
      me.makeTypeaheadRequest(function() {
        $.ajax({
          url:
            'https://www.ibm.com/marketplace/api/search/v3/combined_suggestions?locale=' +
            IBM.common.util.meta.getPageLc() +
            '-' +
            IBM.common.util.meta.getPageCc() +
            '&q=' +
            currentSearchTerm,
          dataType: 'json',
          searchString: currentSearchTerm,
          requestCount: ++requestCount,
          success: function(response) {
            // If this request isn't the latest one (fast typers), don't update the TA box with it's results.
            if (requestCount !== this.requestCount) {
              return;
            }

            // Merge phrase suggestions and product suggestions into one array of terms to show.
            // Format the response terms into a clean plain array of string terms.
            var termsArr = [],
              i = 0,
              mpPhrases = response['phrase-suggestions'].options,
              mpProducts = response['product-suggestions'].results.items;

            // If the service returned PHRASES, add them.
            if (mpPhrases.length > 0) {
              for (i = 0; i < mpPhrases.length; i++) {
                termsArr.push(mpPhrases[i].text);
              }
            }

            // If the service returned PRODUCTS, add them.
            if (mpProducts.length > 0) {
              for (i = 0; i < mpProducts.length; i++) {
                termsArr.push(mpProducts[i].fields['doc.name'][0]);
              }
            }

            me.createTypeahead(this.searchString, termsArr);
          },
          error: function(response) {
            window.console.error('Error calling typeahead service: ', response);
          },
        });
      });
    } else {
      me.makeTypeaheadRequest(function() {
        $.ajax({
          url:
            'https://www-api.ibm.com/search/typeahead/v1?lang=' +
            IBM.common.util.meta.getPageLc() +
            '&cc=' +
            IBM.common.util.meta.getPageCc() +
            '&query=' +
            currentSearchTerm,
          dataType: 'jsonp',
          searchString: currentSearchTerm,
          requestCount: ++requestCount,
          success: function(data) {
            // If this request isn't the latest one (fast typers), don't update the TA box with it's results.
            if (requestCount !== this.requestCount) {
              return;
            }

            // Format the response terms into a clean plain array of string terms.
            var termsArr = [],
              i = 0,
              len = data.response.length;

            for (i; i < len; i++) {
              termsArr.push(data.response[i][0]);
            }

            me.createTypeahead(this.searchString, termsArr);
          },
          error: function(response) {
            window.console.error('Error calling typeahead service: ', response);
          },
        });
      });
    }
  }

  /**
		Sets the field value to be the text from the currently active/highlighted item in the typeahead container and sets the
		 a11y tagging for it.

		 @method setInputFieldValue
		 @private
	**/
  function setInputFieldValue() {
    // Set active dedcendent attr. on field to tell ATs this one is active so they read it since we don't
    //  focus on it, then change the text in the text field.
    $elements.inputField.attr(
      'aria-activedescendant',
      $elements.typeaheadUl.find('li.ibm-active').attr('id')
    );

    $elements.inputField.val(
      $elements.typeaheadUl.find('li.ibm-active').text()
    );
  }

  /**
		Used onclick of a typeahead entry. Grabs the value and puts it as the search field value.

		 @method setTypeaheadItemActive
		 @private
		 @param $el {jQuery element selector} The element (LI) to grab the value of and put into the search field value.
	**/
  function setTypeaheadItemActive($el) {
    if ($el[0].nodeName.toLowerCase() !== 'li') {
      $el = $el.parent();
    }

    // Stop and don't highlight it if it's the heading.
    if ($el.hasClass('typeahead-nooption')) {
      return;
    }

    $elements.typeaheadUl.find('li.ibm-active').removeClass('ibm-active');

    $el.addClass('ibm-active');

    $elements.inputField.focus();
  }

  /**
		Injects the default Marketplace scoped search form if none already existed on the page/HTML and
		 sets up and binds the submit, open/close of the search field.

		 @method setupSearchField
		 @private
	**/
  function setupSearchField() {
    // Marketplace search form convention: https://www.ibm.com/marketplace/search/$cc/$lc-$cc
    // Oct 24, 2018, New Marketplace search form convention per Dav McDuff and Nixon Cheaz:
    //   https://www.ibm.com/search?lang=en&cc=us&q=watson&tabType[0]=Products

    var $localSearchForm = $elements.searchModule.find(
        "form:not('#ibm-search-form')"
      ),
      marketplaceSearchForm =
        '<form class="ibm-hide" id="ibm-default-scope-form" action="https://www.ibm.com/search" method="get"><input name="lang" type="hidden" value="' +
        IBM.common.util.meta.getPageLc() +
        '"><input name="cc" type="hidden" value="' +
        IBM.common.util.meta.getPageCc() +
        '"><input name="tabType[0]" type="hidden" value="Products"><input name="q" type="text" value=""><input name="lnk" type="hidden" value="mhmpsrch"></form>';

    // If there's no existing "local search" form in the masthead, add the default Marketplace
    //  local search form and scope search checkbox. Set flag so we know it's used and a local one isn't used.
    // Else, add data-init to scoped search checkbox and init teh new checkbox plugin on it.
    if (!$localSearchForm[0]) {
      $localSearchForm = $(marketplaceSearchForm).insertAfter(
        '#ibm-search-form'
      );
      marketplaceScopeSetup = true;
    }

    // Turn off autocomplete and add a tracking param.
    $elements.inputField
      .attr('autocomplete', 'off')
      .after('<input name="lnk" type="hidden" value="mhsrch">');

    // Select and cache a search scope container (the span that houses the checkbox.)
    $elements.searchScope = $elements.searchModule.find('.ibm-search-scope');

    // Tag the form if it has a scope checkbox so we can style it differently.
    if ($elements.searchScope[0]) {
      $elements.searchModule.addClass('ibm-has-scope');
    }

    // Bind the search submit.
    $elements.searchForm.submit(function(evt) {
      // Prevent the search from submitting if it's empty.
      if ($elements.inputField.val() === '') {
        evt.preventDefault();
        return;
      }

      // If they have a custom form and the box is checked: submit their custom form.
      if (
        $elements.searchScope.find(':checkbox').prop('checked') &&
        $localSearchForm[0]
      ) {
        evt.preventDefault();
        $localSearchForm.find('input:text').val($elements.inputField.val());
        $localSearchForm.submit();
      }
    });

    //// Mobile search masthead takeover.

    // On focus of the search field (when minimized), take over the masthead and show the search container.
    $elements.inputField.on('focus', function() {
      // If the search field is minimized, show it on focus.
      if (getDisplayState() === 'minimized') {
        showAs('maximized');
      }
    });

    // Create a tab ring on mobile masthead takeover. Forces everyone to use close button.
    // If not on special small screen tab ring, then close the typeahead on forward tab out of search submit.
    $elements.searchButton.on('keydown', function(evt) {
      // If they are on the search submit and hit tab (forward), loop back to close button if showing
      // Else,
      if (evt.keyCode === 9 && !evt.shiftKey) {
        if (getDisplayState() === 'maximized') {
          evt.preventDefault();
          $elements.searchCloseButton.focus();
        } else {
          //showTypeaheadResults(false);
          showInlinelinks(true);
        }
      }
    });

    // Create a tab ring when the masthead takeover/mini-overlay exists. Forces everyone to use close button.
    $elements.searchCloseButton.on('keydown', function(evt) {
      if (evt.keyCode === 9 && evt.shiftKey) {
        evt.preventDefault();
        $elements.searchButton.focus();
      }
    });

    $elements.searchScope.find(':checkbox').on('change', function() {
      requestTypeaheadText(true);
    });
  }

  /**
		If the user scrolls while the typeahead box is opened, this closes it.

		@method setupCloseOnscroll
		@private
	**/
  function setupCloseOnscroll() {
    var didScroll = false;

    $(window).on('scroll', function() {
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        didScroll = false;

        if (
          !document.getElementsByClassName('ibm-masthead-search-maximized')[0]
        ) {
          showTypeaheadResults(false);
          showInlinelinks(true);
        }
      }
    }, 100);
  }

  /**
		Fade in or out the masthead main links. Used on focus of search box to help reduce "noise" while using the search field
		 and typeahead container.

		@method showInlinelinks
		@param b {Boolean} True to fade the masthead links back in, false to fade them out.
		@private
	**/
  function showInlinelinks(b) {
    if (b) {
      if (getDisplayState() === 'default') {
        $('.ibm-masthead-categories, .ibm-mh-marketplace-link')
          .addClass('ibm-fadein')
          .removeClass('ibm-fadeout');
      }
    } else {
      $('.ibm-masthead-categories, .ibm-mh-marketplace-link')
        .addClass('ibm-fadeout')
        .removeClass('ibm-fadein');
    }
  }

  /**
		Sets the display type of the search field, used based on screen width/realestate and open/close features.
		<br />minimized = small screen icon only
		<br />maximized = small screen full-width masthead takeover
		<br />default = default inline search field (non-small-screen)

		@method showAs
		@param type {String} The display type to show the search field as.
	**/
  me.showAs = showAs;
  function showAs(type) {
    if (type === 'default') {
      showInline();
      displayState = 'default';
    } else if (type === 'minimized') {
      showMinimized();
      displayState = 'minimized';
    } else if (type === 'maximized') {
      showMaximized();
      displayState = 'maximized';
    }
  }

  /**
		Removes all special classes and causes (CSS) to show it as default inline search field in masthead. (default design state).

		@method showInline
		@private
	**/
  function showInline() {
    $(document.body).removeClass(
      'ibm-masthead-search-minimized ibm-masthead-search-maximized'
    );
  }

  /**
		Add class to show it as maximized (masthead takeover, small screen) and freeze scrollbars (prevent body scrolling).

		@method showMaximized
		@private
	**/
  function showMaximized() {
    $(document.body)
      .removeClass('ibm-masthead-search-minimized')
      .addClass('ibm-masthead-search-maximized');
    IBM.common.util.freezeScrollbars(true);
  }

  /**
		Add class to show it as minimized (icon only, small screen) and un-freeze scrollbars.

		@method showMinimized
		@private
	**/
  function showMinimized() {
    $(document.body)
      .addClass('ibm-masthead-search-minimized')
      .removeClass('ibm-masthead-search-maximized');
    IBM.common.util.freezeScrollbars(false);
  }

  /**
		Shows/hides the actual typeahead container.

		@method showTypeaheadResults
		@param b {Boolean} True to show the typeahead container, false to hide it.
	**/
  me.showTypeaheadResults = showTypeaheadResults;
  function showTypeaheadResults(b) {
    if (b) {
      $elements.typeaheadContainer
        .add($elements.searchScope)
        .addClass('ibm-fadein')
        .removeClass('ibm-fadeout')
        .attr('aria-expanded', true);
      $elements.inputField.attr('aria-expanded', true);
      typeaheadResultsShowing = true;
    } else {
      $elements.typeaheadContainer
        .add($elements.searchScope)
        .addClass('ibm-fadeout')
        .removeClass('ibm-fadein')
        .attr('aria-expanded', true);
      $elements.inputField.attr('aria-expanded', false);
      typeaheadResultsShowing = false;
    }
  }

  /* Wait for events to happen.
   **********************************************************************************************/

  // When meta data is ready (config), call auto init.
  IBM.common.meta
    .subscribe('dataReady', 'mastheadsearch', me.autoInit)
    .runAsap(me.autoInit);
})(jQuery, IBMCore);
;
/**

	This builds the hamburger menu (formerly "mobile menu").
	<br />It simply replicates the masthead links + page nav links and put them into a overlay that slides in from the right.

	@class IBMCore.common.module.mobilemenu

**/

(function($, IBM) {
  /**
		Publishes this event after complete mobilemenu is built.

		@event ready
	**/
  var me = IBM.namespace(IBM, 'common.module.mobilemenu'),
    myEvents = IBM.common.util.eventCoordinator(me, 'mobilemenu', ['ready']),
    currentlyShowing = false,
    $elements = {
      menuScreen: {},
    },
    mastheadLinklists = null,
    $mobilemenu,
    $mobilePagenavLinks,
    $mobileParentMenunavLinks,
    $mobileMenunavLinks,
    $mobileCategoryLinks;

  me.isLoaded = false;

  /**
		Callback from subscription to meta data 'ready' event publisher. Checks if masthead is enabled (default).
		<br />If so, subscribe to masthead and then init mobilemenu if enabled.
		<br />Two separate checks so that a masthead type can override and disable/enable it (Ex: popup masthead disables it).

		@method autoInit
	**/
  me.autoInit = function() {
    if (IBM.common.util.config.isEnabled('masthead')) {
      IBM.common.module.masthead.subscribe('ready', 'mobilemenu', function() {
        if (IBM.common.util.config.isEnabled('masthead.mobilemenu')) {
          setTimeout(me.init, 100);
        }
      });
    }
  };

  /**
		Callback from subscription to masthead 'ready' event publisher inside autoInit.
		<br />Creates the burger menu (clones masthead into this).
		<br />Since we had to wait for masthead to be in the DOM, it means DOM & masthead is ready.

		@method init
	**/
  me.init = function() {
    mastheadLinklists = IBM.common.module.masthead.getMastheadLinklists();

    // Removes any existing one from a page locale change/re-init. Gets reset below when we create the new one.
    $(document.getElementsByClassName('ibm-mobilemenu')[0]).remove();

    $elements.menuScreen = $(document.getElementById('ibm-mobilemenu-screen'));

    // Add the background screen if it doesn't exist already (from a locale change).
    if (!$elements.menuScreen[0]) {
      $elements.menuScreen = $(
        '<div id="ibm-mobilemenu-screen"></div>'
      ).appendTo(document.body);
    }

    // Setup all the HTML elements into vars.
    $mobilePagenavLinks = createBurgerPagenavLinks();
    $mobileParentMenunavLinks = createBurgerParentMenunavLinks();
    $mobileMenunavLinks = createBurgerMenunavLinks();
    $mobileCategoryLinks = createCatnavSection();

    var mobilemenuCloseHtml =
      '<div class="ibm-mobilemenu-close"><p class="ibm-icononly ibm-fright ibm-ind-link ibm-nospacing"><a class="ibm-close-link" href="#">' +
      IBM.common.translations.data.v18main.misc.close +
      '</a></p></div>';

    // If there's no site navigation, show the masthead links all open by default.
    if (!$mobilePagenavLinks && !$mobileMenunavLinks) {
      $mobileCategoryLinks
        .find('.ibm-show-hide > h2')
        .attr('data-open', 'true');
    }

    // Add the HTML items into the mobile menu container, then prepend it to top div (above masthead).
    $mobilemenu = $(
      '<div class="ibm-mobilemenu ibm-hide" id="ibm-burger-menu-container" aria-labelledby="ibm-burgermenu-a11y" role="dialog" tabindex="0"></div>'
    )
      .append(
        '<p class="ibm-hide" id="ibm-burgermenu-a11y">' +
          (IBM.common.translations.data.v18main.misc.sitenav ||
            'Site navigation') +
          '</p>'
      )
      .append(mobilemenuCloseHtml) // Close button swapped with burger icon in MH.
      .append($mobilePagenavLinks)
      .append($mobileParentMenunavLinks)
      .append($mobileMenunavLinks)
      .append($mobileCategoryLinks)
      .insertAfter('#ibm-masthead');

    // Setup the menu bindings and do misc stuff behind the scenes.
    // SetTimeout pushes these to the back of the onload queue so we don't delay onscreen rendering.)
    setTimeout(function() {
      setupMobilemenuBindings();

      // Blanketly tag every link with special param (lnk prepended with "hm" so page owners can tell if
      //  the link was clicked from the masthead/page content, or from the burger menu.
      $mobilemenu.find('a').each(function() {
        var newUrl = IBM.common.util.url.addParam({
          url: this.getAttribute('href'),
          paramName: 'lnk',
          paramValue:
            'hm' + (IBM.common.util.url.getParam('lnk', this.href) || ''),
        });
        this.href = newUrl;
      });

      // Setup any show/hides we placed.
      setupShowhides();

      // Setup page nav. Handles nested LI classes and a11y tree control setup.
      setupPageNavs();

      // We need to  know when two show-hides are open, so add a state to the parent LI.
      $mobilemenu.find('.ibm-show-hide h2 a').on('click', function() {
        var $thisLink = $(this);
        if ($thisLink.parent('h2.ibm-showing')[0]) {
          $thisLink.closest('.ibm-haschildlist').addClass('ibm-showing');
        } else {
          $thisLink.closest('.ibm-haschildlist').removeClass('ibm-showing');
        }
      });

      $mobilemenu.find('.ibm-mobilemenu-mhlinks').each(function() {
        IBM.common.util.a11y.makeToolbarAccessible({
          el: this,
        });
      });

      // If they tab off any links in the last section, loop back around to the close link (the first one in the loop).
      // This includes the show/hide trigger, in case it's closed.
      $mobilemenu.find('.ibm-mobilemenu-section:last a').keydown(function(evt) {
        if (evt.keyCode === 9 && !evt.shiftKey) {
          // If the keyboard tab is on the show/hide trigger and it's open, let tab goto the next A naturally.
          // Else it's closed or we're not on it, which means nothing is left to tab to so loop back to close button.
          if ($(this).hasClass('ibm-show-active')) {
            return;
          }
          evt.preventDefault();
          $mobilemenu.find('a:first').focus();
        }
      });

      // If they backtab from the "close" link, loop back to the bottom links (the last one in the loop).
      $mobilemenu.find('.ibm-mobilemenu-close a').keydown(function(evt) {
        if (evt.keyCode === 9 && evt.shiftKey) {
          evt.preventDefault();
          $mobilemenu.find('a:visible:last').focus();
        }
      });

      $elements.menuScreen.on('click', function() {
        if (IBM.common.module.mobilemenu.isShowing()) {
          IBM.common.module.mobilemenu.hide();
        }
      });
    }, 100);

    // Tell subscribers we're all done.
    me.isLoaded = true;

    myEvents.publish('ready');
  };

  /**
		Take the main masthead links and inject them into the burger menu.

		@method createCatnavSection
		@private
		@return {DOM element} The new element to inject as the category nav links section.
	**/
  function createCatnavSection() {
    var container =
        '<div class="ibm-mobilemenu-section">' +
        mastheadLinklists.mainLinks.burgerMenuHtml +
        '</div>',
      $container = $(container)
        .find('.ibm-masthead-categories')
        .attr('class', 'ibm-masthead-categories-mobilemenu')
        .end();

    return $container;
  }

  /**
		Clones page nav (left or tabs), cleans up IDs & classes, then returns clone ready for DOM injection.

		@method createBurgerPagenavLinks
		@private
		@return {DOM element} The new element to inject as the page left or tab nav links section.
	**/
  function createBurgerPagenavLinks() {
    var $pageNav,
      priTabs = document.getElementById('ibm-primary-tabs'),
      secTabs = document.getElementById('ibm-secondary-tabs'),
      leftNav = document.getElementById('ibm-primary-links'),
      leftSecondaryNav = document.getElementById('ibm-secondary-navigation');

    if ($(priTabs).find('li').length > 0) {
      $pageNav = $(priTabs)
        .find('ul')
        .clone(true);

      if ($("#ibm-primary-tabs[data-widget='dyntabs']")[0]) {
        $pageNav.attr('data-type', 'dyntabs');
      }

      // If there's subtabs, nest them in the LI that's active where they belong, just like the left nav.
      if ($(secTabs).find('li').length > 0) {
        $pageNav.find("a[aria-selected='true']").after(
          $(secTabs)
            .find('ul')
            .clone()
        );
      }
    } else if ($(secTabs).find('li').length > 0) {
      $pageNav = $(secTabs)
        .find('ul')
        .clone()
        .removeAttr('id');
    } else if ($(leftNav).find('li').length > 0) {
      $pageNav = $(leftNav)
        .clone()
        .removeAttr('id');
      $pageNav
        .find('.ibm-show-hide.ibm-widget-processed')
        .removeClass('ibm-widget-processed')
        .find('.ibm-container-body')
        .removeAttr('style');

      // If there are related links, clone it, setup as show/hide, then add to page nav to inject.
      if ($(leftSecondaryNav).find('li').length > 0) {
        leftSecondaryNav = $(leftSecondaryNav)
          .clone()
          .attr('id', 'ibm-mobile-menu-lnavrel-links')
          .wrapInner(
            '<div class="ibm-show-hide" data-type="panel" data-widget="showhide"></div>'
          )
          .find('ul')
          .addClass('ibm-padding-top-0')
          .wrap('<div class="ibm-container-body"><div>')
          .end();

        $pageNav = $pageNav.add(leftSecondaryNav);
      }
    } else {
      return $pageNav; // Just return if there's no left nav or tabs.
    }

    // Cleanup to remove tab class so they don't get formatted horizontally like tabs,
    //  and add new class for styling in the mobile menu.
    $pageNav
      .removeClass('ibm-tabs')
      .find('.ibm-tabs')
      .removeClass('ibm-tabs');

    // Remove any IDs.
    $pageNav.find('[id]').removeAttr('id');

    // Left nav and tabs use aria-selected, and boths sets of tabs can have one, so find the "last"
    //  one that we're on and tag it specially.
    $pageNav
      .find("a[aria-selected='true']:last")
      .wrapInner('<span>')
      .parent()
      .addClass('ibm-mobilemenu-nav-selected');

    return $(
      '<div class="ibm-mobilemenu-section ibm-mobilemenu-pagenav"></div>'
    ).html($pageNav);
  }

  /**
		Clones the new site nav menu then returns clone ready for DOM injection.

		@method createBurgerMenunavLinks
		@private
		@return {DOM element} The new element to inject as the page menunav links section.
	**/
  function createBurgerMenunavLinks() {
    var $pageNav;

    // Stop if there's no site nav menu on the page.
    if (
      !document.getElementsByClassName('ibm-sitenav-menu-container')[0] ||
      $('.ibm-sitenav-menu-list > ul > li').length === 0
    ) {
      return;
    }

    $pageNav = $('.ibm-sitenav-menu-container')
      .children('.ibm-sitenav-menu-list')
      .children('ul')
      .clone();

    // Add/clone site name if it exists.
    if (document.getElementsByClassName('ibm-sitenav-menu-name')[0]) {
      $pageNav.prepend(
        '<li class="ibm-mobile-section-heading ibm-mobile-sitename">' +
          $(
            document.getElementsByClassName('ibm-sitenav-menu-name')[0]
          ).html() +
          '</li>'
      );
    }

    // Add/clone parent site name if it exists.
    if (document.getElementsByClassName('ibm-parent-site-name')[0]) {
      $pageNav.prepend(
        '<li class="ibm-mobile-section-heading ibm-mobile-sitename">' +
          $(document.getElementsByClassName('ibm-parent-site-name')[0]).html() +
          '</li>'
      );
    }

    // Find any links (button or a) that specified an alternate label and
    //  change that link text to use the alternate label specified.
    $pageNav.find('[data-altlabel]').each(function() {
      $(this).text($(this).attr('data-altlabel'));
    });

    // Add class to the parent LI b/c it sets the "you are here" left border on the item.
    // (Instead of the <a> b/c the A does the indented top border).
    // Normalize for old way to highlight (class on the <a>).
    $pageNav
      .find('a.ibm-highlight')
      .removeClass('ibm-highlight')
      .parent()
      .addClass('ibm-highlight');
    $pageNav
      .find('.ibm-highlight')
      .addClass('ibm-mobilemenu-nav-selected')
      .children('a')
      .closest('li.ibm-haschildlist')
      .attr('aria-expanded', 'true');

    // For each menu item that has a child list, set it up to be a basic show/hide.
    $pageNav
      .find('li.ibm-haschildlist')
      .wrapInner(
        '<div class="ibm-show-hide" data-type="panel" data-widget="showhide"></div>'
      )
      .each(function() {
        var $mainItem = $(this),
          itemTrigger =
            $mainItem.find('> div > button')[0] ||
            $mainItem.find('> div > span')[0],
          useText = itemTrigger.innerHTML;

        $('<h2>' + useText + '</h2>')
          .replaceAll($(itemTrigger))
          .siblings('ul')
          .addClass('ibm-padding-top-0')
          .removeAttr('style')
          .wrap('<div class="ibm-container-body"><div>');
      });

    // Find the menu item that we're on, and set it's show/hide to be open by default.
    $pageNav
      .find('.ibm-highlight')
      .closest('.ibm-show-hide')
      .children('h2')
      .attr('data-open', 'true');

    //data-widget="showhide" data-type="panel"
    return $(
      '<div class="ibm-mobilemenu-section ibm-mobilemenu-sitenavmenu"></div>'
    ).html($pageNav);
  }

  /**
		Clones the new parent menu nav then returns clone ready for DOM injection.

		@method createBurgerParentMenunavLinks
		@private
		@return {DOM element} The new element to inject as the page parent menunav links section.
	**/
  function createBurgerParentMenunavLinks() {
    var $pageNav;

    // Stop if there's no site nav menu on the page.
    if (
      !document.getElementsByClassName('ibm-parent-site-menu')[0] ||
      $('.ibm-parent-site-menu').find('ul > li').length === 0
    ) {
      return;
    }

    $pageNav = $('.ibm-parent-site-menu')
      .children('.ibm-sitenav-menu-list')
      .children('ul')
      .clone();

    // Find any links (button or a) that specified an alternate label and
    //  change that link text to use the alternate label specified.
    $pageNav.find('[data-altlabel]').each(function() {
      $(this).text($(this).attr('data-altlabel'));
    });

    // Add class to the parent LI b/c it sets the "you are here" left border on the item.
    // (Instead of the <a> b/c the A does the indented top border).
    // Normalize for old way to highlight (class on the <a>).
    $pageNav
      .find('a.ibm-highlight')
      .removeClass('ibm-highlight')
      .parent()
      .addClass('ibm-highlight');
    $pageNav
      .find('.ibm-highlight')
      .addClass('ibm-mobilemenu-nav-selected')
      .children('a')
      .closest('li.ibm-haschildlist')
      .attr('aria-expanded', 'true');

    // For each menu item that has a child list, set it up to be a basic show/hide.
    $pageNav
      .find('li.ibm-haschildlist')
      .wrapInner(
        '<div class="ibm-show-hide" data-type="panel" data-widget="showhide"></div>'
      )
      .each(function() {
        var $mainItem = $(this),
          itemTrigger =
            $mainItem.find('> div > button')[0] ||
            $mainItem.find('> div > span')[0],
          useText = itemTrigger.innerHTML;

        $('<h2>' + useText + '</h2>')
          .replaceAll($(itemTrigger))
          .siblings('ul')
          .addClass('ibm-padding-top-0')
          .removeAttr('style')
          .wrap('<div class="ibm-container-body"><div>');
      });

    // Find the menu item that we're on, and set it's show/hide to be open by default.
    $pageNav
      .find('.ibm-highlight')
      .closest('.ibm-show-hide')
      .children('h2')
      .attr('data-open', 'true');

    //data-widget="showhide" data-type="panel"
    return $(
      '<div class="ibm-mobilemenu-section ibm-mobilemenu-sitenavmenu"></div>'
    ).html($pageNav);
  }

  /**
		Sets up bindings for the close button.

		@method setupMobilemenuBindings
		@private
	**/
  function setupMobilemenuBindings() {
    $(document.getElementsByClassName('ibm-mobilemenu-close')[0]).click(
      function(evt) {
        evt.preventDefault();
        me.hide();
        $(document.getElementsByClassName('ibm-masthead-item-menu')[0])
          .find('button')
          .focus();
      }
    );
  }

  /**
		Sets up styling/extra HTML for page nav in menu and its a11y controls.

		@method setupPageNavs
		@private
	**/
  function setupPageNavs() {
    // For any nested list items, wrap the link text in a span so that we can put a border under the text on hover.
    $mobilemenu.find('.ibm-mobilemenu-section li li a').wrapInner('<span>');

    IBM.common.util.a11y.makeTreeAccessible({
      el: $mobilemenu.find('.ibm-mobilemenu-pagenav > ul'),
    });

    IBM.common.util.a11y.makeToolbarAccessible({
      el: $mobilemenu.find('.ibm-mobilemenu-sitenavmenu > ul'),
    });
  }

  /**
		Inits show/hides not inited yet and tags selected nav item's show/hide container for highlighting.

		@method setupShowhides
		@private
	**/
  function setupShowhides() {
    // Init any un-init'd show/hides and then tag the one currently opened with the common class.
    $mobilemenu.find('.ibm-show-hide:not(.ibm-widget-processed)').showhide();

    // Add the class to the currently opened one.
    $mobilemenu
      .find('.ibm-mobilemenu-nav-selected .ibm-show-hide')
      .parent()
      .addClass('ibm-showing');
  }

  /**
		API for pages that use AJAX or inject tabs or menu nav after page load.
		<br />After you inject your site's menu or tab nav, call this to clone it into the burger menu.
		<br />In case you make it and inject your HTML before burger menu creates, if the page nav already exists in the burger menu
		 this stops and does nothing.

		@method addSiteNavigation
	**/
  me.addSiteNavigation = function() {
    // Safety for timing issue in case the site menu made it in there on page load.
    // This prevents a page from calling this and injecting the site nav if it's already in the burger menu.
    if ($mobilePagenavLinks || $mobileMenunavLinks) {
      return;
    }

    $mobilePagenavLinks = createBurgerPagenavLinks();
    $mobileMenunavLinks = createBurgerMenunavLinks();

    // If any site nav elements were cloned and created for us to use;
    // Close the show/hides if they were expanded because there was no sitenav in the burger menu.
    // Then prepend the site nav and setup the selected items and the show/hides.
    if ($mobilePagenavLinks || $mobileMenunavLinks) {
      $mobileCategoryLinks
        .find('.ibm-show-hide.ibm-widget-processed > h2 a.ibm-show-active')
        .trigger('click');

      // Prepend the nav items found on the page.
      $mobilemenu
        .find('.ibm-mobilemenu-section:first')
        .prepend($mobileMenunavLinks)
        .prepend($mobilePagenavLinks);

      // Setup any show/hides we placed.
      setupShowhides();

      // Setup page nav we injected by adding nested LI inner span and setup a11y controls on it.
      setupPageNavs();
    }
  };

  /**
		Shows the burger menu.

		@method show
	**/
  me.show = function() {
    $mobilemenu.removeClass('ibm-hide');

    setTimeout(function() {
      $(document.body).addClass(
        'ibm-show-mobilemenu-screen ibm-mobilemenu-show'
      );
      $mobilemenu.focus();
      IBM.common.util.freezeScrollbars(true);
      currentlyShowing = true;
    }, 30);
  };

  /**
		Hides the burger menu.

		@method hide
	**/
  me.hide = function() {
    $(document.body).removeClass('ibm-mobilemenu-show');

    setTimeout(function() {
      $(document.body).removeClass('ibm-show-mobilemenu-screen');
      IBM.common.util.freezeScrollbars(false);
    }, 150);

    // Make sure this is set to be after whatever the CSS transition is (currently 0.3s)
    setTimeout(function() {
      $mobilemenu.addClass('ibm-hide');

      currentlyShowing = false;
    }, 400);
  };

  /**
		Simple helper to toggle the burger menu showing/hiding.

		@method toggle
	**/
  me.toggle = function() {
    if (me.isShowing()) {
      me.hide();
    } else {
      me.show();
    }
  };

  /**
		Simple helper that tells you if the burger menu is showing or not.

		@method isShowing
		@return {Boolean} True if it's open, false if it's closed.
	**/
  me.isShowing = function() {
    return currentlyShowing;
  };

  /**
		Deprecated. Use "isShowing" instead. Makes more sense.

		@method isOpen
		@deprecated
	**/
  me.isOpen = me.isShowing;

  /* Wait for events to happen.
   **********************************************************************************************/

  // When meta data is ready (config), call auto init.
  IBM.common.meta
    .subscribe('dataReady', 'mobilemenu', me.autoInit)
    .runAsap(me.autoInit);
})(jQuery, IBMCore);
;

/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

////
// Fixed bug, line 550: Added second condition to prevent click + enter to open select list.
// if (this.isOpen() || this.options.get('disabled')) {
////
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen() || this.options.get('disabled')) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
;
/**

	Select list widget.
	<br />
	<br />This creates a select list widget, using select2 plug-in. There are tons of options and APIs available.
	<br>Sets defaults for the select2 plug-in, and other random processing. Then it inits the jQuery select2 plug-in.
	<br />
	<br />
	Usage (no widget tagging needed):

	<select>....</select>

	<br>__Event usage__: Subscribe to the IBM widget init event that fires on your DOM element to know when the widget has been initialized and you can access its APIs.

	<br><br>__Special case:__ In scenarios where you dynamically inject HTML post page load, you can initialize the widget on your injected select like this:
	<br>- Passing in a string with the ID, or the DOM element pointer.
	<br>- Optionally pass any settings you want (instead of using data-attributes on the HTML).

	IBMCore.common.widget.selectlist.init("yourSelectlistId", optionalSettingsObject);
	 // Or
	IBMCore.common.widget.selectlist.init(yourSelectDOMelement, optionalSettingsObject);

	__To destroy the widget__ and return back the original HTML that the widget initialized on:

	jQuery("<your_selectlist_selector>").data("widget").destroy();

	@class IBMCore.common.widget.selectlist

**/

(function($, IBM) {
  var me = IBM.namespace(IBM, 'common.widget.selectlist');

  // For safety in case someone does something dumb and omits select2 from their custom build.
  if ($.fn.select2) {
    $.fn.select2.defaults.set('minimumResultsForSearch', 8);
    $.fn.select2.defaults.set('width', 'resolve');
  }

  /**
		Published on widget's DOM element after select2 has been initialized.
		<br><strong>Example usage</strong>:
		<pre>
			jQuery("&lt;your_select_selector>")[0].addEventListener("ibm-init", function (evt) {
			    // select2 widget is available.
			});
		</pre>

		@event ibm-init
	**/
  /**
    	Inits the select2 widget on the passed element.
    	<br />This is automatically called onload by the v18 JS for each select element that is not disabled with data-init="false".

    	@method init
    	@param {DOM element} el The select element to convert to the select2 widget.
    **/
  me.init = function(el, userConfig) {
    var $elem = $(el),
      defaults = {
        language: {
          noResults: function() {
            return (
              IBM.common.translations.data.v18main.misc.noresults ||
              'No results found'
            );
          },
        },
      },
      settings = {};

    // For safety in case someone does something dumb and omits select2 from their custom build.
    if (!$.fn.select2) {
      return;
    }

    // Don't let double init. Have to use destroy and then init again.
    if ($elem[0].className.indexOf('ibm-widget-processed') > -1) {
      return;
    }

    // Find select lists in overlays that haven't been init'd or tagged yet and tag them for special init.
    $(document.getElementsByClassName('ibm-common-overlay'))
      .find(
        'select:not([data-init=false]):not(.ibm-widget-processed):not(.ibm-selectlist-overlay)'
      )
      .addClass('ibm-selectlist-overlay');

    // Merge in configuration to use, then init plug-in with them:  JS settings override HTML which override defaults.
    settings = $.extend(true, defaults, $elem.data() || {}, userConfig);

    // Translate data-attr lowercase'd to required camelcase ones.
    if (settings.searchenabled === false) {
      settings.minimumResultsForSearch = -1;
    }

    // INIT the actual plug-in.
    // If the select was tagged as being in an overlay from above, init it specially to ensure the width is calc. correctly.
    if ($elem[0].className.indexOf('ibm-selectlist-overlay') === -1) {
      $elem.css('width', $elem.outerWidth(true) + 20);
      $elem.select2(settings);
    } else {
      var containerOverlay = $elem
        .closest('.ibm-common-overlay')
        .removeClass('ibm-common-overlay');

      $elem.css('width', $elem.outerWidth(true) + 20);
      $elem.select2(settings);
      containerOverlay.addClass('ibm-common-overlay');
    }

    // Create widget object on element and add common destroy function API.
    // Destroys the widget and puts back the original HTML element that existed before the widget initialized.
    $elem.data('widget', {
      destroy: function() {
        $elem.removeClass('ibm-widget-processed').select2('destroy');
        return $elem;
      },
    });

    // Add processed state (class) and fire common init event on the HTML element.
    IBM.common.widget.manager.dispatchInitEvent($elem[0]);
  };
})(jQuery, IBMCore);
;
/**

	The show/hide widget (not twisty).
	<br />
	<br />This creates a basic show/hide section, a multi-panel (accordion), and the description show/hide widget.
	<br />
	<br />Usage:
		
	<!-- Show/hide descriptions -->
	<div data-widget="showhide" class="ibm-simple-show-hide">...</div>
		
	<!-- Show/hide single and multiple panels (accordion) -->
	<div data-widget="showhide" data-type="panel" class="ibm-show-hide">...</div>

	__Event usage__: Subscribe to the IBM widget init event that fires on your DOM element to know when the widget has been initialized and you can access its APIs.

	<br><br>__Special case:__ In scenarios where you dynamically inject the HTML after page load, you can initialize the widget on your injected HTML like this:
		
	jQuery("<your_showhide_container_selector>").showhide();

	__To destroy the widget__ and return back the original HTML that the widget initialized on:
		
	jQuery("<your_showhide_container_selector>").data("widget").destroy();

	Allowed options and values. __All values are strings__ (html standards):
	<br />__data-type__: panel &nbsp; // Creates single and multi-panel (accordion) widgets

	@class IBMCore.common.widget.showhide

**/


(function ($, IBM) {

	/**
		
		TODO: Santelia: This is a hack Mike C did using indexes. Change to use stored/cached pointers instead for more effecient processing and just maintenance sanity.

	**/
	
	var me = IBM.namespace(IBM, "common.widget.showhide"),
		showHideWidgets = [],
		object_name = "ShowHide";

	/**
		Published on widget's DOM element after show/hide has been initialized.
		<br><strong>Example usage</strong>:
		<pre>
			jQuery("&lt;your_showhide_container_selector>")[0].addEventListener("ibm-init", function (evt) {
			    // show/hide widget is available.
			});
		</pre>
		
		@event ibm-init
	**/

	/**
		Public jQuery plug-in definition. Initializes the widget on the set of DOM nodes the plug-in was called on. 
		
		@method $.fn.showhide
		@example jQuery("#myWidgetDivID").showhide();
		@param [settings] {Object} Settings to override defaults and element's @data-xxxx attributes.
	**/
	$.fn.showhide = function (settings) {
		return this.each(function(){
			var d = createShowHide(settings);
			d.init(this);
		});
	};

	/**
		Called by our jQuery plug-in.
		<br />Creates a new widget instance and registers the instance into array of all this widget instances.
		<br />The jQuery plugin abstracts this and makes behind-the-scenes changes easy.
		
		@method createShowHide
		@private
		@param [settings] {Object} Settings to override defaults and element's @data-xxxx attributes.
		@return {Object} The widget object instance created.
	**/
	function createShowHide (settings) {
		var newShowHide = new ShowHide(settings);
		showHideWidgets.push(newShowHide);
		return newShowHide;
	}

	/**
		Fires a stats event for this widget when show/hide is clicked, tags event as "show" or "hide".
		
		@method fireStatsEvent
		@private 
		@param eventType {String} Type of event that happened.
		@param clickedText {String} The text of the show/hide that was clicked.
	**/
	function fireStatsEvent (eventType, clickedText) {
		IBM.common.util.statshelper.fireEvent({
			"ibmEV" : "widget",
			"ibmEvGroup" : "Showhide",
			"ibmEvName" : eventType,
			"ibmEvAction" : clickedText
		});
	}

	/**
		ShowHide object/constructor for our public jQuery plugin.
		<br />Called by "createShowHide".
		
		@method ShowHide
		@constructor
		@param [settings] {Object} Settings to override defaults and element's @data-xxxx attributes.
		@example
			// You can access your widget object that was created (this) using the standard convention:
			jQuery("<your_showhide_container_selector>").data("widget");
	**/
	function ShowHide (settings) {
		var $elem,
			me = this,
			$allPanelContentContainers,
			$headings,
			defaults = {
				type : "simple"
			},
			config,
			slideupSpeed = "fast",
			slideDownSpeed = "fast";

		/**
			This is a method of the "ShowHide" constructor.
			<br />Destroys the widget and restores original HTML element that existed before the widget initialized.
			
			@method ShowHide.destroy
			@return {jQuery/DOM element} The original element that was put back (that you called widget destroy on).
		**/
		me.destroy = function () {
			$allPanelContentContainers.css({
				display:"block"
			});
			
			$headings.each(function () {
				$(this).parent().html($(this).html());
			});
			
			$elem.removeClass("ibm-show-hide ibm-widget-processed");

			return $elem;
		};

	    /**
			This is a method of the "ShowHide" constructor.
			<br />Called by our public jQuery plug-in after a new widget object has been created and returned.
			<br />Automatically inits the plug-in, merging in any manually passed settings, 
			 @data-xxxxx settings, and our default settings. 
			
			@method ShowHide.init
			@param elem {jQuery/DOM selector} The element you want to init the widget on.
		**/
		me.init = init;
		function init (elem) {
			$elem = $(elem);
			
			$elem.data("widget", me);

			config = $.extend({}, defaults, ($elem.data() || {}), settings);
			
			// Setup show/hide based on type:
			//   Panel:  Standard "+/- More information" and accordion. Require HTML adjustment and binding.
			//   Simple:  Show/hide that toggles description text under the item. Requires binding only.
			if (config.type === "panel") {
				initPanelShowhide();
			}
			else if (config.type === "simple") {
				setupSimpleBindings();
			}
			
			// Add processed state (class) and fire common init event on the HTML element.
			IBM.common.widget.manager.dispatchInitEvent($elem[0]);
		}

		/**
			This is a method of the "ShowHide" constructor.
			<br />Sets the clicked heading to display as "collapsed" and then animates the collapse of the section.

			@method ShowHide.closePanel
			@private
			@param $headingLink {jQuery selector} The heading link (<a>) that was clicked.
		**/
		me.hide = closePanel;
		function closePanel ($headingLink) {
			var index = $headings.index($headingLink) || 0;
			
			// If no heading was passed in, we assume the default set of headings and the first one is acted on.
			if (!$headingLink) {
				$headingLink = $headings;
			}
			// Show this heading as closed and animate the collspsing/closing of the container.
			showHeadingAsOpened($headingLink, false);
			$allPanelContentContainers.eq(index).slideUp(slideupSpeed);
		}

		/**
			This is a method of the "ShowHide" constructor.
			<br>Main init for the standard +/- show hide panel: Adjusts HTML, closes any not tagged to be open by default, 
			 sets up click bindings for show/hide.

			@method ShowHide.initPanelShowhide
			@private
		**/
		function initPanelShowhide () {
			$allPanelContentContainers = $elem.find("div.ibm-container-body");
			
			// Find headings that don't already have a child link and add the <a> (trigger link).
			$elem.find(" > h2").not(":has('>a')").wrapInner('<a href="javascript:void();"></a>').children("a");
			
			$headings = $elem.find(" > h2 > a");
			
			// Close headings not tagged to be open by default.
			// Don't do closePanel() here because we want to instandly hide the content.
			$headings.parent(":not([data-open='true'])").next(".ibm-container-body").css("display","none");

			// For headings tagged to be open by default, set headings to show as 'opened' because we didn't hide their contents.
			showHeadingAsOpened($headings.parent("[data-open='true']").children(), true);

			// Setup onclick show/hide toggle on headings.
			setupPanelBindings();
		}

		/**
			This is a method of the "ShowHide" constructor.
			<br>Sets ALL headings to display as "collapsed" and animates the collapse of ALL open sections (covers accordion).
			<br />Then sets clicked heading and contents to show.

			@method ShowHide.openPanel
			@private
			@param $headingLink {jQuery selector} The heading link (<a>) that was clicked.
		**/
		me.show = openPanel;
		function openPanel ($headingLink) {
			var index = $headings.index($headingLink) || 0;

			// If no heading was passed in, we assume the default set of headings and the first one is acted on.
			if (!$headingLink) {
				$headingLink = $headings;
			}

			// Set all open headings in *this* widget group as closed (covers accordion) and 
			//  animate the closing of all open containers in *this* widget group (covers accordion).
			showHeadingAsOpened($headings.filter(".ibm-show-active"), false);
			$allPanelContentContainers.filter(":visible").slideUp(slideupSpeed);

			// Show THIS heading link (that was clicked) as opened and animate the expanding/opening of this container.
			showHeadingAsOpened($headingLink, true);
			$allPanelContentContainers.eq(index).slideDown(slideDownSpeed);
		}

		/**
			This is a method of the "ShowHide" constructor.
			<br>Sets up bindings and actions for the single and multi-panel (accordion) show/hiding.
			
			@method ShowHide.setupPanelBindings
			@private
		**/
		function setupPanelBindings () {
			$headings.click(function (evt) {
				evt.preventDefault();

				// If we clicked an open panel, just hide it.
				// Otherwise, open this panel (hides all others, covers accordion).
				if (this.className.indexOf("ibm-show-active") > -1) {
					closePanel($(this));

					// Fire stats event saying they hid this section/panel.
					fireStatsEvent("hide", $(this).text());
				}
				else {
					openPanel($(this));

					adjustSameHeightWidgets($(this));

					// Fire stats event saying they opened this section/panel.
					fireStatsEvent("show", $(this).text());
				}
			});
		}

		/**
			This is a method of the "ShowHide" constructor.
			<br>Runs any descendent sameheight widgets AFTER the show/hide is shown, so the heights are 
			 adjusted and (re)calculated automatically.
			
			@method ShowHide.adjustSameHeightWidgets
			@private
		**/
		function adjustSameHeightWidgets ($headingLink) {
			var index = $headings.index($headingLink);

			// Run EACH setsameheight widget that exists and has been processed and (re)adjust 
			//  the height after the show/hide content is shown.
			if ($allPanelContentContainers.eq(index).find(".ibm-widget-processed[data-widget='setsameheight']")[0]) {
				$allPanelContentContainers.eq(index).find(".ibm-widget-processed[data-widget='setsameheight']").each(function () {
					$(this).data("widget").adjustHeights(true);
				});
			}
		}


		/**
			This is a method of the "ShowHide" constructor.
			<br>Sets up bindings for the basic "description toggle" type show/hide.
			
			@method ShowHide.setupSimpleBindings
			@private
		**/
		function setupSimpleBindings () {
			var $hideables = $elem.find(".ibm-hideable").css("display","none");

			$elem.find("p.ibm-show-hide-controls").on("click", "a", function (evt) {
				var $thisLink = $(this),
					action = $thisLink.attr("href");

				evt.preventDefault();

				// Remove active class from the one that had it and add it to the one clicked.
				$(evt.delegateTarget).find(".ibm-active").removeClass("ibm-active");
				$thisLink.addClass("ibm-active");

				// Show or hide and fire stats event so we know someone used this widget and what they clicked on.
				if (action === "#show") {
					$hideables.slideDown(slideDownSpeed);
					fireStatsEvent("show descriptions", "descriptions widget");
				}
				else if (action === '#hide') {
					$hideables.slideUp(slideupSpeed);
					fireStatsEvent("hide descriptions", "descriptions widget");
				}
			});
		}


		/**
			This is a method of the "ShowHide" constructor.
			<br>Sets the display (only) of the heading link as open or closed +/-
			
			@method ShowHide.showHeadingAsOpened
			@private
			@param $headingLink {jQuery selector} The show/hide trigger link <a> that you want display as open or closed.
			@param showit {Boolean} True/false; to display it as open or not.
		**/
		function showHeadingAsOpened ($headingLink, showit) {
			if (showit) {
				$headingLink.addClass("ibm-show-active").parent().addClass("ibm-showing");
			}
			else {
				$headingLink.removeClass("ibm-show-active").parent().removeClass("ibm-showing");
			}
		}
	}

})(jQuery, IBMCore);
;
/**

	Surveys widget.
	<br />
	<br />An intercept pops up a small window inviting users to participate in a single or multi-page survey,
	 or to answer the one or two questions presented in the overlay (known as a "quick poll").
	<br />Intercepts can be used externally (www) to target users around the world and show on page load.
	<br />This survey widget also includes feedback system for Northstar sites allow the use of survey that can be
	 triggers/show on click of a link, or programatically via the "initFeedback" API/method.
	<br />
	<br />Official survey documentation: http://www.ibm.com/standards/web/research/feedback-survey.

	<br />Usage:

	// JS config setting sample.

	IBMCore.common.util.config.set({
		survey: {
			enabled: true,
			intercept: {
				percent: 90,
				start: "Apr 01 2015",
				stop: "Apr 31 2015",
				invitation: {
					title: "Tell IBM what you think",
					content: "Would you like to take 1 minute to test this survey?",
					yes_label: "Yes",
					no_label: "No Thanks"
				},
				survey: {
					type: "medallia",
					id: "web-exp",
					width: 700,
					height: 700
				}
			}
		}
	});

	@class IBMCore.common.widget.ccfintercept

**/

/**

	How survey configs are determined which one to use:

	Logic is split into 2 groups for ease of maintenance and sanity. There's no point in trying to figure out what gate the user
	  should go to for a flight if they don't even have a ticket to get past security.

	Combining entry % with the other 'active/seen it' logic is just nuts and would make it too complex.
	So...

		First: Figure out the entry # and if user is even allowed past security. No point in doing any more logic if
			the don't even have a ticket.

		Second: They are in, now figure out what config to show them based on the # + 3 other properties.



	IN ORDER OF SIMPLICITY, NOT IN ORDER OF LOGIC REQUIRED TO DETERMINE PROPER CONFIG TO USE.
	Below are cases assuming traffic % match has been met. In other words, the user qualified for a survey
	(basic % threshhold has been met) here are the cases on what happens next in logic scheme.

	Each config has three states that determine the logic rules:
	 - Is still active.
	 - Has already been seen.
	 - Replaces default (survey A) or is survey B.

	EXISTING FUNCTIONALITY SINCE INCEPTION:

		No custom intercept config exists (uses default survey A):

			Case 1: Nothing is set on the page (95% of pages).
			Expect: Global default config used, with global default entry % (5).

			Case 2: ONLY global_percent is set (means page wants more/less traffic to default intercept)
			Expect: Global default config used, but replace default {intercept.percent} with PAGE global_percent.

			Case 3: Global % is set to 0 AND NO CUSTOM "INTERCEPT" CONFIG EXISTS (nor new alterante).
			Expect: Stop, do nothing. Page doesn't want any intercept survey.

			Case 4: Global default already seen default (cookie exists)
			Expect: Stop, do nothing. User has already seen this one.


		Custom intercept config set (replacement for survey A):

		Case 5: Custom intercept config is setup (standard usage).
		Expect: Custom {intercept.percent} is used for traffic % match. Custom intercept config used.

		Case 6: Custom intercept config is setup, is active, but already seen (cookie exists).
		Expect: Stop, do nothing. User has already seen this one.

		Case 7: Custom intercept config is setup, but inactive (disabled or not within start/stop date range.)
		Expect: Custom config is ignored as if it were never set, fall back to defaults, case 1|2.

		Case 8: Custom intercept config is setup, but inactive AND default has already seen.
		Expect: Stop, do nothing. No active custom config and default has already been seen.


	NEW FEATURE CASES:

		Custom intercept ALTERNATE config ONLY (standard usage, uses "default" global as other option). This is a "survey B" not a replacement for "survey A":

			Case 9: Custom ALTERNATE config is setup.
			Expect: entry_percent is total traffic entry %, then broken down in settings of:
					Global percent or page global_percent setting is % to use default config.
					+
					Alternate config.percent is % to use alternate config.
					AKA: global_percent + alternate_intercept.percent = entry_percent.

			Case 10: Custom ALTERNATE config is setup, but already seen OR inactive.
			Expect: No splitting. Custom alternate config is ignored as if it were never set fall back to defaults, case 1|2.

			Case 11: Custom ALTERNATE config is setup, but DEFAULT already seen (opposite of above).
			Expect: No splitting. Send all entry traffic to use alternate config.

			Case 12: Custom ALTERNATE config is setup, but already seen or inactive AND default already seen.
			Expect: Stop, do nothing. No valid custom config and default has already been seen.



		Custom intercept AND alternate config set (special usage). Traffic is only ever split if BOTH configs are valid.
		Otherwise assumes as if the valid one was the only one that existed (ex: all cases above ^):
		Think of this as simply dynamically choosing the custom intercept config to be used in the above cases.

			Case 13: Custom intercept and alternate config are setup.
			Expect: entry_percent is total traffic entry %, then broken down in settings of:
					intercept.percent.
					+
					intercept_alternate.percent is % to use alternate config.
					AKA: intercept.percent + alternate_intercept.percent = entry_percent.

			Case 14: intercept_alternate config has been seen or inactive.
			Expect: intercept_alternate config is ignored as if it were never set. Send all entry traffic to custom intercept config.

			Case 15: intercept config has been seen or inactive (opposite of above).
			Expect: intercept config is ignored. Assume as if it were never set. Send all entry traffic to intercept_alternate config.

			Case 16: intercept AND intercept_alternate config have each been seen.
			Expect: Stop, do nothing. Both configs are still active, just both been seen.

			Case 17: intercept AND intercept_alternate config are both inactive.
			Expect: No valid custom config, ignore as if they were never set. Fall back to original default case 1|2 option.

**/

(function($, IBM) {
  var me = IBM.namespace(IBM, 'common.widget.surveyccfintercept'),
    defaults = {
      global_minimum_wait: 30,
      interceptDisp: 'pageLoad',
      surveyDisp: 'immediate',
      anon: 'true',
      anonData: {
        userName: '',
        userEmail: '',
        emailInfoLoaded: false,
      },
      percent: 0,
      start: '',
      stop: '',
      presentDelay: 45,
      invitation: {
        title: 'Tell IBM what you think',
        content: 'Would you please take 1 minute to take this survey?',
        yes_label: 'Yes',
        no_label: 'No thanks',
      },
      survey: {
        type: 'medallia',
        id: 'web-exp',
        width: 700,
        height: 700,
        metaData: '',
      },
    },
    ibmGlobalDefaultInterceptConfig = {
      survey: {
        intercept: {
          enabled: true,
          percent: 0,
          start: 'Jul 27 2016',
          stop: 'Jul 27 2099',
          invitation: {
            title: 'Tell IBM what you think',
            content:
              'Would you please take a minute to send IBM your feedback?',
            yes_label: 'Yes',
            no_label: 'No Thanks',
          },
          survey: {
            type: 'medallia',
            id: 'web-exp',
            width: 970,
            height: 700,
          },
        },
      },
    },
    invitation,
    invitationStatus = '',
    overrideInvitation,
    settings = null,
    survey = null,
    surveyConfigs = {
      randNum: Math.random() * 100,
      globalDefault: null,
      pageCustom: null,
      pageAlt: null,
    },
    defaultSettings = [],
    currentUrl = location.href.replace(location.protocol + '//', ''),
    allowedTtl = IBMCore.www.module.truste.getUiAllowedStorageTtl(
      30 * 24 * 3600
    ),
    langcountries = {
      en: 'enus',
      de: 'dede',
      es: 'esco',
      fr: 'frfr',
      it: 'itit',
      pt: 'ptbr',
      ko: 'kokr',
      ja: 'jajp',
      ru: 'ruru',
      zh: 'zhcn',
      tr: 'trtr',
    },
    urllangcountry;

  function Deflangcountry() {
    var pageInfo = IBMCore.common.meta.page.pageInfo.ibm,
      langcode = pageInfo.lc,
      langcountry = 'enus'; // default langcountry
    if (langcode) {
      var clientLangCountry = langcode + pageInfo.cc;
      if (['eses', 'zhtw', 'frca'].indexOf(clientLangCountry) > -1) {
        langcountry = clientLangCountry;
      } else if (langcountries[langcode]) {
        langcountry = langcountries[langcode];
      }
    }
    return langcountry;
  }

  /**
		This let's us know if the page's intercept survey has expired.
		@method isSurveyExpired
		@private
		@param endDate [String] The formatted end date of the survey.
		@return [Boolean] True or false, if today's date is past the survey stop date.
	**/

  function isSurveyExpired(endDate) {
    var isExpired = false,
      now = new Date(),
      end = new Date(endDate);
    if (now > end) {
      isExpired = true;
    }
    return isExpired;
  }

  /**
		This let's us know if the page's intercept survey has passed the "start" date set.
		@method isSurveyStarted
		@private
		@param startDate [String] The formatted start date of the survey.
		@return [Boolean] True or false, if today is past the survey start date.
	**/
  function isSurveyStarted(startDate) {
    var pastStartDate = false,
      now = new Date(),
      start = new Date(startDate);

    if (now > start) {
      pastStartDate = true;
    }
    return pastStartDate;
  }

  // Set survey config flags to use for logic of determining which one to use.
  function setSurveyConfigFlags(config) {
    if (config) {
      var cookieName = (config.cookie_name =
        'ccf-' + config.survey.type + ':' + config.survey.id);
      // Being "active" means:
      //   we're between the start/stop dates,
      //   it's enabled (set to true)
      //   it's not set to 0 percent (same as saying enabled: false, but for global default also)
      config.isActive =
        isSurveyStarted(config.start) &&
        !isSurveyExpired(config.stop) &&
        config.enabled &&
        config.percent !== 0;
      config.seen = IBM.common.util.cookie.get(cookieName) !== null;
    }
    return config;
  }

  // Set the global config to use the global_percent from page setting if exists,
  //  else it uses the default set (5) in the "ibmGlobalDefaultInterceptConfig" object above.
  function setGlobalDefaultEntryPercent(config) {
    var pageDefinedGlobPercent = IBM.common.util.config.get(
      'survey.global_percent'
    );
    if (pageDefinedGlobPercent >= 0) {
      config.percent = Number(pageDefinedGlobPercent);
    }
    return config;
  }

  // This is based on combination of:
  //   what is set,
  //   what is actually active,
  //   what has been seen.
  function setConfigToUse(configs) {
    var globDef = configs.globalDefault,
      pageCustom = configs.pageCustom,
      alt = configs.pageAlt,
      useThisConfig;
    // SHORT CIRCUIT: No custom config is set, NOR active = Majority (90%) of pages.
    // Don't have to worry about #s here because there's no splitting. Only 1 choice.
    // If global hasn't been seen: use it.
    // Else do nothing. We've seen the one and only.
    if (!alt.isActive && !pageCustom.isActive) {
      if (!globDef.seen) {
        useThisConfig = globDef;
        return useThisConfig;
      }
      return useThisConfig;
    }

    // Getting to this point means they have either/both page custom and alt intercept setup.
    // If page custom (only, no alt) is active and not seen, use it (existing basic intercept override).
    // Else do nothing. We've seen the one and only page custom that overrided the default.
    if (!alt.isActive && pageCustom.isActive && !pageCustom.seen) {
      useThisConfig = pageCustom;
    }
    // Else: NEW feature of traffic splitting using ALT intercept.
    else if (alt.isActive) {
      // Alt is active here.
      // Alt HAS been seen: Use survey A (custom or default).
      if (alt.seen) {
        // If pageCustom is active && !seen: use pageCustom.
        // If pageCustom is !active and default !seen: use default.
        if (pageCustom.isActive && !pageCustom.seen) {
          useThisConfig = pageCustom;
        } else if (!pageCustom.isActive && !globDef.seen) {
          useThisConfig = globDef;
        }
      }
      // Alt is active here.
      // ELSE alt has NOT been seen: Determine if we use it based on user traffic #.
      // If the # falls outside of alt's %, use other if other has not been seen.
      else {
        // Alt is active and NOT been seen here.
        // If random # inside the % for alt: use alt,
        // Or if they' already see the survey A's in the split... means this is the only valid one to see.
        // else choose pageCustom or default, whatever hasn't been seen.
        if (
          surveyConfigs.randNum < alt.percent ||
          (pageCustom.isActive && pageCustom.seen) ||
          (!pageCustom.isActive && globDef.seen)
        ) {
          useThisConfig = alt;
        }
        // else: # is higher than % for alt and we HAVEN'T seen one of the survey As,
        //  so if pageCustom is active && !seen: use pageCustom.
        else if (pageCustom.isActive && !pageCustom.seen) {
          useThisConfig = pageCustom;
        }
        // else: if pageCustom is !active and default !seen: use default.
        else if (!pageCustom.isActive && !globDef.seen) {
          useThisConfig = globDef;
        }
      }
    }
    return useThisConfig;
  }

  /**
	 * This is the public function to call to open a feedback survey. It can be called from on click of a link, or
		 programatically after some process or user event.
		@method autoInit
	**/
  me.autoInit = function() {
    var configToUse = null,
      entryNumber = 0,
      waitingForInterceptXlations;

    // Pull in configs.
    surveyConfigs.globalDefault =
      ibmGlobalDefaultInterceptConfig.survey.intercept;
    surveyConfigs.pageCustom = IBM.common.util.config.get('survey.intercept');
    surveyConfigs.pageAlt = IBM.common.util.config.get(
      'survey.intercept_alternate'
    );

    // Merge in the one override (percent) for the global default.
    surveyConfigs.globalDefault = setGlobalDefaultEntryPercent(
      surveyConfigs.globalDefault
    );

    // Set flags for ease of logic and consistency. Then set empty object for consistency checking.
    surveyConfigs.globalDefault = setSurveyConfigFlags(
      surveyConfigs.globalDefault
    );
    surveyConfigs.pageCustom =
      setSurveyConfigFlags(surveyConfigs.pageCustom) || {};
    surveyConfigs.pageAlt = setSurveyConfigFlags(surveyConfigs.pageAlt) || {};

    //
    // At this point, we have all three configs; each have entry %s and flags for logic.
    //

    /**
			First do quick check to see if the traffic entry % even matches.
			It's useless to do anything if user don't even qualify to get in the door.

			If there's an alternate set:
				If alt is active: use new 'entry_percent',
				Otherwise it's like alt wasn't coded and treat like normal page custom intercept...
			Else if there's a regular custom config (only); if that's active use that local % (existing functionality custom intercept)
			Otherwise all cases use page global default setting.

		**/
    if (surveyConfigs.pageAlt.isActive) {
      entryNumber = IBM.common.util.config.get('survey.entry_percent');
    } else if (surveyConfigs.pageCustom.isActive) {
      entryNumber = surveyConfigs.pageCustom.percent;
    } else {
      entryNumber = surveyConfigs.globalDefault.percent;
    }

    // Getting here means the rand # was inside our max entry #.
    // So now we just figure out what config to dynamically use, then apply it and we're set.
    configToUse = setConfigToUse(surveyConfigs);
    if (configToUse) {
      IBM.common.util.debug.add(
        'log',
        'Using survey config: ' + configToUse.survey.id
      );
      // Metrics collection for Jo Welsh.
      // Merge in all the settings.
      // IF the config used is NOT the default then fire off this 'exception' event for tracking.
      var metricData = $.extend(
        true,
        {},
        defaults,
        IBM.common.util.config.get('survey.intercept'),
        configToUse || {}
      );

      if (
        metricData.survey.id !== 'web-exp' ||
        !surveyConfigs.globalDefault.percent ||
        (surveyConfigs.globalDefault.percent &&
          surveyConfigs.globalDefault.percent !== 5)
      ) {
        var evtData = {
          ibmEV: 'v18 survey tracker',
          ibmEvAction: metricData.survey.type,
          ibmEvGroup: metricData.survey.id,
          ibmEvModule: metricData.percent, // % traffic setting of the specific survey config used.
          ibmEvSection: entryNumber, // special # you first have to meet to get in.
          ibmEvLinkTitle: surveyConfigs.globalDefault.percent, // global default setting.
          ibmEvLinkTarget: metricData.presentDelay,
        };
        IBM.common.util.statshelper.fireEvent(evtData);
      }

      globalAjaxSetting();

      // If queue/translations don't load in 5 seconds, kill it.
      setTimeout(function() {
        IBM.common.util.queue.remove(waitingForInterceptXlations);
        window.console.warn(
          'v18: Intercept translations took too long, killed listener.'
        );
      }, 1000);

      // Request translations for default intercept survey.
      $.ajax({
        url: IBM.common.util.config.get('jsFilesUrl') + 'ccftranslations.js',
        dataType: 'script',
        cache: true,
      }).fail(function(message) {
        window.console.error(
          'v18: Error while loading intercept survey translation file.',
          message
        );
      });
    } else {
      IBM.common.util.debug.add(
        'log',
        'A survey config was matched but you have already seen it.'
      );
    }
  };

  /**

		@method initFeedback
		@param conf {Object} The settings for the feedback survey that you want to show.
	**/
  me.initFeedback = initFeedback;
  function initFeedback() {
    urllangcountry = Deflangcountry();
    settings = $.extend(
      true,
      defaults,
      IBM.common.util.config.get('survey.intercept')
    );
    settings.cookie_name =
      'ccf-' + settings.survey.type + '-' + settings.survey.id;
    if (makeSurveyURL()) {
      if (window.digitalData.user.segment.isIBMer) {
        invitation = supportoverlay();
      } else {
        invitation = createInvitation();
      }
      bindInvitationEvents();
      // If not exit survey
      if (
        settings.interceptDisp !== 'pageExit' &&
        settings.interceptDisp !== 'siteExit'
      ) {
        setTimeout(function() {
          invitation.show();
        }, settings.presentDelay);
        // If exit survey
      } else {
        exitPageOplabTrigger();
      }
    }
  }

  // In this function we are calling the json data for Dev and Proud
  function globalAjaxSetting() {
    var environment = IBM.common.util.cookie.get('__forcev18env');
    var temp = {
      dataType: 'script',
      url:
        'https://tags.tiqcdn.com/dle/ibm/web/d_medallia_survey_configurations.js?callback=?',
      timeout: 5000,
      data: 'prod',
    };

    if (environment) {
      temp = {
        dataType: 'json',
        //dev url
        // url: 'https://ssmsystem.w3ibm.mybluemix.net/callbackmergedata',
        // prod url
        url:
          'https://singlesurveysystem-prod.w3ibm.mybluemix.net/callbackmergedata',
        timeout: 5000,
        data: 'preview',
      };
    }

    $.ajax(temp).done(function(data) {
      switch (temp.data) {
        case 'prod':
          defaultSettings =
            window.utag.globals.dle.enrichments
              .d_medallia_survey_configurations;
          break;
        case 'preview':
          defaultSettings = data;
          break;
      }
      initFeedback();
    });
  }

  function exitPageOplabTrigger() {
    var mastheadLinks = '#ibm-masthead a, .ibm-mobilemenu a',
      footerLinks = '#ibm-footer-module a, #ibm-footer a',
      customLinks = 'a.ibm-intercept-exit-survey',
      redirectStatus = false,
      pageLink = {
        url: '',
      };

    // Diff function for arrays.
    // Does array deltas (removes items from one array that exist in another.)
    Array.prototype.diff = function(a) {
      return this.filter(function(i) {
        return a.indexOf(i) < 0;
      });
    };

    function tagAllLinks() {
      // If the abandon link has a valid URL:
      //   Stop the click action.
      //   Store the URL for later use.
      //   Show (try) the survey & goto the URL after survey complete (or a no-show).
      $(mastheadLinks).click(function(evt) {
        var ul_tag = evt.currentTarget.parentElement.parentElement;
        if (
          evt.currentTarget.href !== '' &&
          evt.currentTarget.href.substr(0, 1) !== '#' &&
          ul_tag.id !== 'ibm-menu-links'
        ) {
          evt.preventDefault();
          pageLink.target = evt.currentTarget.target;
          pageLink.url = evt.currentTarget.href;
          launchExitSurvey();
        }
      });

      $(footerLinks).click(function(evt) {
        if (
          evt.currentTarget.href !== '' &&
          evt.currentTarget.href.substr(0, 1) !== '#'
        ) {
          evt.preventDefault();
          pageLink.target = evt.currentTarget.target;
          pageLink.url = evt.currentTarget.href;
          launchExitSurvey();
        }
      });

      $(customLinks).click(function(evt) {
        if (
          evt.currentTarget.href !== '' &&
          evt.currentTarget.href.substr(0, 1) !== '#'
        ) {
          evt.preventDefault();
          pageLink.url = evt.currentTarget.href;
          pageLink.target = evt.currentTarget.target;
          //removeWindowExitEvents();
          launchExitSurvey();
        }
      });

      windowExitEvents();
    }

    function showOverlay() {
      if (invitationStatus === '') {
        // If there's no other overlay currently showing, show it.
        // This is safety so that we don't open an overlay on top of another one some other JS is showing.
        if (!IBMCore.common.widget.overlay.currentShowingOverlay()) {
          invitation.show();
        } else {
          window.console.log(
            'v18: Survey invitation did not show because another overlay was currently showing.'
          );
          return;
        }

        invitation.subscribe('hide', 'Overlay', function() {
          if (invitationStatus === 'opt-in') {
            redirectStatus = true;
            survey.subscribe('hide', 'Overlay', function() {
              redirectStatus = false;
              redirectPage();
            });
          } else {
            redirectPage();
          }
        });
      } else {
        survey.show();
        survey.subscribe('hide', 'Overlay', function() {
          redirectStatus = false;
          redirectPage();
        });
      }
    }

    function launchExitSurvey() {
      showOverlay();
      windowExitEvents();
    }

    function redirectPage() {
      if (!redirectStatus) {
        redirectStatus = true;
        removeWindowExitEvents();
        if (pageLink.url !== '') {
          if (pageLink.target === '') {
            window.location.href = pageLink.url;
          } else {
            window.open(pageLink.url, pageLink.target);
          }
        }
      }
    }

    function removeWindowExitEvents() {
      window.onbeforeunload = null;
      $(window).unbind('beforeunload');
    }

    function windowExitEvents() {
      $(window).bind('beforeunload', function() {
        showOverlay();
        return settings.invitation.title;
      });
      setTimeout(function() {
        window.onbeforeunload = function() {
          showOverlay();
          return settings.invitation.title;
        };
      }, 500);
    }

    // Wait to try and let all widgets init so we can bind links in them also.
    setTimeout(function() {
      tagAllLinks();
    }, 1000);

    return {
      status: 'loaded',
    };
  }

  function createCookieValue() {
    return (
      '{"date": ' +
      new Date().getTime() +
      ',"type": "' +
      settings.survey.type +
      '","id": "' +
      settings.survey.id +
      '"}'
    );
  }

  /**
   * Creating Intercept Survey Invitation overlay.
   *
   * It will pop up on the page loading, and asking for participating to the survey.
   *
   *  1) If User clicks on yes button, means they wish to participate on survey then, open survey overlay and hide invitation overlay
   *  2) If user clicks on no button, means they do not wish to participate on survey.
   *  3) Create a cookie on hiding of the invitation overlay, as global barrier for 30 days to restrict them to participate on another survey from IBM.com.
   *
   */

  function validateContent(contentType) {
    var defaultInvitation = defaultSettings.defaults.invitation;
    var content = defaultInvitation[contentType][urllangcountry];
    if (overrideInvitation && overrideInvitation[contentType]) {
      content = overrideInvitation[contentType][urllangcountry];
    }
    return content;
  }

  function Aboutfeedback() {
    var feedback_statement_title = validateContent('feedback_statement_label'),
      feedback_statement_content = validateContent(
        'feedback_statement_content'
      );

    var feedback_html =
      '<div class="ibm-padding-content"><h2 class="ibm-bold">' +
      feedback_statement_title +
      '</h2><p class="ibm-small">' +
      feedback_statement_content +
      '</p></div>';

    var overlay = IBM.common.widget.overlay.createOverlay({
      backgroundcolor: '#ffffff',
      contentHtml: feedback_html,
      fullwidth: false,
      seamless: true,
      classes: 'ibm-overlay ibm-overlay-alt',
    });
    overlay.init();

    overlay.subscribe('hide', 'Overlay', function() {
      var cookie_value = createCookieValue();
      IBM.common.util.cookie.set(settings.cookie_name, cookie_value, {
        path: '/',
        domain: '.ibm.com',
        expires: allowedTtl,
      });
    });

    return overlay;
  }

  function createInvitation() {
    if (defaultSettings.override.hasOwnProperty(currentUrl)) {
      overrideInvitation = defaultSettings.override[currentUrl].invitation;
    }
    var invitation_title = validateContent('invitation_title'),
      invitation_content = validateContent('invitation_content'),
      invitation_yes_label = validateContent('invitation_yes_label'),
      invitation_no_label = validateContent('invitation_no_label'),
      feedback_statement_label = validateContent('feedback_statement_label'),
      url = window.location.href,
      innerDiv = $("<div class='ibm-center'>"),
      heading = $('<h2>')
        .attr({
          class: 'ibm-h2 ibm-margin-top-1 ibm-margin-bottom-1',
        })
        .html(invitation_title),
      str = '<p class="ibm-h4">' + invitation_content + '</p>',
      button =
        "<p class='ibm-padding-content'><button class='ibm-btn-pri ibm-btn-blue-50' data-action='showme' data-attribute1='ok_survey_nps' data-attribute2=" +
        url +
        ' >' +
        invitation_yes_label +
        "</button> <button class='ibm-btn-pri ibm-btn-blue-50' data-action='hideme' data-attribute1='no_thanks_survey_nps' data-attribute2=" +
        url +
        ' >' +
        invitation_no_label +
        '</button></p>',
      lastpara =
        "<p id='feedback' class='ibm-button-link ibm-padding-top-1 ibm-padding-bottom-0 ibm-margin-bottom-0'><a href='#' class='ibm-btn-gray-50 ibm-margin-bottom-0 ibm-btn-pri ibm-fullwidth' data-action='feedback-slide' >" +
        feedback_statement_label +
        '<a></p>',
      paragraph = $('<div>')
        .attr({ class: 'ibm-padding-bottom-0' })
        .html(str + button + lastpara);

    innerDiv.append(heading, paragraph);
    $('body').click('#feedback', bindInvitationEvents);
    var overlay = IBM.common.widget.overlay.createOverlay({
      backgroundcolor: '#ffffff',
      contentHtml: innerDiv,
      fullwidth: false,
      seamless: true,
      classes: 'ibm-overlay ibm-overlay-alt',
    });
    overlay.init();

    overlay.subscribe('hide', 'Overlay', function() {
      var cookie_value = createCookieValue();
      IBM.common.util.cookie.set(settings.cookie_name, cookie_value, {
        path: '/',
        domain: '.ibm.com',
        expires: allowedTtl,
      });
    });

    return overlay;
  }

  function supportoverlay() {
    var heading,
      str,
      paragraph,
      innerDiv = $("<div class='ibm-padding-content'>");
    heading = $('<h2>')
      .attr({ class: 'ibm-h1 ibm-bottom-top-1 ibm-center' })
      .html('Need Help ?');

    str =
      '<p class="ibm-ind-link ibm-h3"><a class="ibm-help-link" href="https://w3.ibm.com/help" target="_blank">Help@IBM</a></p>';

    var lastpara =
      "<p class='ibm-button-link ibm-h5 ibm-background-blue-10 ibm-center ibm-padding-bottom-0 ibm-margin-bottom-0'>Medallia survey suppressed for internal IBM visitors</p>";

    paragraph = $('<div>')
      .attr({ class: 'ibm-padding-bottom-0' })
      .html(str + lastpara);
    innerDiv.append(heading, paragraph);
    var overlay = IBM.common.widget.overlay.createOverlay({
      backgroundcolor: '#ffffff',
      contentHtml: innerDiv,
      fullwidth: false,
      seamless: true,
      classes: 'ibm-overlay ibm-overlay-alt',
    });
    overlay.init();

    overlay.subscribe('hide', 'Overlay', function() {
      var cookie_value = createCookieValue();
      IBM.common.util.cookie.set(settings.cookie_name, cookie_value, {
        path: '/',
        domain: '.ibm.com',
        expires: allowedTtl,
      });
    });

    return overlay;
  }

  /**
   * Creating Intercept Survey overlay.
   *
   * It will pop up after user clicks on yes button from invitation overlay, which will load the survey with in IFRAME from external/internal sources.
   *
   * 1) Create a cookie on hiding of the survey overlay, as local barrier till end date for the survey, to restrict them to participate on current survey again.
   *
   */
  function createSurvey() {
    var anonData,
      html,
      survey_width,
      ip = IBM.common.util.user.getInfo().ip,
      template =
        '<iframe src="{{survey_url}}" width="{{survey_width}}" height="800"></iframe>';

    if (ip) {
      anonData = 'id=' + ip;
    }

    if (anonData) {
      if (settings.survey.url.indexOf('?') > -1) {
        anonData = '&' + anonData;
      } else {
        anonData = '?' + anonData;
      }
    }

    if (window.innerWidth > 770) {
      survey_width = 950;
    } else {
      survey_width = '100%';
    }

    // Create survey content that goes inside the overlay.
    html = template
      .replace('{{survey_url}}', settings.survey.url + anonData)
      .replace('{{survey_width}}', survey_width);

    // Create the overlay widget that uses the html for the contents and init it.
    var overlay = IBM.common.widget.overlay.createOverlay({
      backgroundcolor: '#ffffff',
      contentHtml: html,
      seamless: true,
      classes: 'ibm-overlay ibm-overlay-alt-three',
    });
    overlay.init();
    var getid = $('#' + overlay.getId());

    overlay.subscribe('show', 'Overlay', function() {
      /**
       * Tracking by coremetrics code for intercept shown
       */
      IBM.common.util.statshelper.fireEvent({
        ibmEV: 'ol survey',
        ibmEvGroup: settings.survey.type,
        ibmEvModule: settings.survey.id,
        ibmEvAction: 'intercept shown',
      });

      var cookie_value = createCookieValue();

      IBM.common.util.cookie.set(settings.cookie_name, cookie_value, {
        path: '/',
        domain: '.ibm.com',
        expires: allowedTtl,
      });
      getid.find('iframe').attr({ height: getid.height() - 80 });
    });
    return overlay;
  }

  /**
   * Events created for invitation overlay form,
   *
   * 1) Yes button:               If user clicks on yes button, then open survey overlay
   * 2) No button:                If user clicks on no button, then hide the invitaiton overlay
   * 3) About feedback at IBM:    If user clicks on 'About feedback at IBM', then show the IBM privaly policy window on the invitation overlay.
   *
   */

  function bindInvitationEvents() {
    var $overlay = $('#' + invitation.getId());
    $('[data-action]', $overlay).on('click', function() {
      var $self = $(this),
        action = $self.data('action');
      switch (action) {
        case 'hideme':
          invitationStatus = 'opt-out';
          invitation.hide();
          break;
        case 'feedback-slide':
          invitationStatus = 'opt-in';
          invitation.hide();
          survey = Aboutfeedback();
          if (
            settings.surveyDisp !== 'pageExit' &&
            settings.surveyDisp !== 'siteExit'
          ) {
            survey.show();
          } else {
            exitPageOplabTrigger();
          }
          break;
        case 'showme':
          invitationStatus = 'opt-in';
          /**
           * Tracking by coremetrics code for if user clicks yes button
           */
          IBM.common.util.statshelper.fireEvent({
            ibmEV: 'ol survey',
            ibmEvGroup: settings.survey.type,
            ibmEvModule: settings.survey.id,
            ibmEvAction: 'intercept yes clicked',
          });
          invitation.hide();
          // Add special param so we know this survey was from an intercept and not
          // the feedback link in the footer. (that one adds inter=n).
          settings.survey.url += '&inter=y';
          survey = createSurvey();
          if (
            settings.surveyDisp !== 'pageExit' &&
            settings.surveyDisp !== 'siteExit'
          ) {
            survey.show();
          } else {
            exitPageOplabTrigger();
          }
          break;
      }
    });
  }

  /**
   * Creating survey URL.
   *
   * Based on the survey type, survey URL will vary from different sources.
   * This function is making URL for the particular survey based on the survey type.
   *
   * 1) Creating survey URL
   * 2) Adding metadata with the URL if user given in configuration (This is now only appicable to ASM survey's, rest of the survey type meta information will add up later)
   *
   * */
  function makeSurveyURL() {
    var url = '',
      metadata = getMetaData();

    switch (settings.survey.type) {
      case 'medallia':
        /** As per instruction from Ben, all medallia survey id will be start with "ibm-" so, adding it dynamically to all medallia survey. It may required some rework. **/
        //dev
        //url = 'https://surveysbx.sbx.lon.medallia.eu/?ibm-web-exp&' + metadata;
        //prod
        metadata = metadata.length > 0 ? '?' + metadata : '';
        url = 'https://survey.medallia.eu/ibm-' + settings.survey.id + metadata;
        break;

      case 'qualtrics':
        url = 'https://ibmsurveys.qualtrics.com/SE/?SID=' + settings.survey.id;
        break;

      case 'efm':
        url =
          'https://ucdsurvey1.torolab.ibm.com/ss2/wsb.dll/s/' +
          settings.survey.id;
        break;

      case 'verint':
        url = 'https://survey.vovici.com/se/' + settings.survey.id + '/?';
        break;

      case 'userzoom':
        url = 'https://s.userzoom.com/m/' + settings.survey.id;
        break;

      case 'sg':
        url = 'https://www.surveygizmo.com/' + settings.survey.id;
        break;

      case 'customB':
        url = settings.survey.url;
        break;
    }

    if (url === null) {
      window.console.warn(
        'v18: Intercept survey type is unknown: ' + settings.survey.type
      );
      return false;
    }

    settings.survey.url = url;
    return true;
  }

  /**
   * Creating survey meta data format.
   */
  function getMetaData() {
    var parameters = [],
      metadata = settings.survey.metaData,
      lang,
      variables,
      variable,
      m,
      digitalDataPage = window.digitalData.page,
      digitalDataIbm = digitalDataPage.category.ibm,
      digitalPageinfo = digitalDataPage.pageInfo.ibm;

    if (settings.survey.type.toLowerCase() === 'medallia') {
      parameters.push('tstamp=' + getUTCDate());
      try {
        lang = IBMCore.common.meta.page.pageInfo.language.split('-');
      } catch (e) {
        // If meta data no set for the page, using en-US as default language
        lang = ['en-US'].split('-');
      }
      //Getting User Country
      var country;
      if (!digitalPageinfo.country || digitalPageinfo.country === 'WW') {
        country = 'US';
      } else {
        country = digitalPageinfo.country;
      }
      parameters.push(prepareMeta('country', country.toUpperCase(), 'US'));
      var supported_lang = Object.keys(langcountries);
      if (supported_lang.indexOf(lang[0].toLowerCase()) > -1) {
        if (country === 'ca' || country === 'tw' || country === 'co') {
          parameters.push(
            prepareMeta('lang', lang[0] + '_' + country.toUpperCase())
          );
        } else {
          parameters.push(prepareMeta('lang', lang[0]));
        }
      } else {
        parameters.push(prepareMeta('lang', 'en'));
      }

      if (IBMCore.common.util.user) {
        var usercountry = IBMCore.common.util.user
          .getInfo()
          .country.toUpperCase();
        parameters.push(prepareMeta('usercountry', usercountry));
      }

      //Adding source origin
      parameters.push(prepareMeta('source', 'footer'));

      var tmpMetadata = '',
        overrideSurvey;

      if (defaultSettings.override.hasOwnProperty(currentUrl)) {
        overrideSurvey = defaultSettings.override[currentUrl].survey;
      }

      if (overrideSurvey && overrideSurvey.metaData) {
        tmpMetadata = overrideSurvey.metaData;
      }

      if (tmpMetadata) {
        variables = tmpMetadata.split('&');
      } else if (metadata) {
        variables = metadata.split('&');
      }
      if (variables) {
        for (m = 0; m < variables.length; m++) {
          variable = variables[m].split('=');
          if (parameters.indexOf(variable[0]) < 0) {
            parameters.push(prepareMeta(variable[0], variable[1]));
          }
        }
      }

      if (tmpMetadata.indexOf('pgroup') < 0) {
        parameters.push(prepareMeta('pgroup', null, 'default'));
      }
      if (tmpMetadata.indexOf('pparent') < 0 && digitalPageinfo.owner) {
        parameters.push(prepareMeta('pparent', digitalPageinfo.owner));
      }
      if (tmpMetadata.indexOf('pmain') < 0 && digitalPageinfo.industry) {
        parameters.push(prepareMeta('pmain', digitalPageinfo.industry));
      }
      if (digitalPageinfo.owningPortal) {
        parameters.push(prepareMeta('origin', digitalPageinfo.owningPortal));
      }
      if (digitalPageinfo.subject) {
        parameters.push(prepareMeta('content', digitalPageinfo.subject));
      }
      if (
        digitalDataPage.category &&
        digitalDataPage.category.primaryCategory
      ) {
        parameters.push(
          prepareMeta('campaign', digitalDataPage.category.primaryCategory)
        );
      }
      if (digitalPageinfo.siteID) {
        parameters.push(prepareMeta('oid', digitalPageinfo.siteID));
      }
      if (digitalDataPage.pageInfo && digitalDataPage.pageInfo.pageName) {
        parameters.push(
          prepareMeta('oname', digitalDataPage.pageInfo.pageName)
        );
      }
      if (digitalDataIbm.globalBrandTableL10 && digitalDataIbm.gbt10) {
        parameters.push(
          prepareMeta(
            'gbt10',
            digitalDataIbm.gbt10 + ' - ' + digitalDataIbm.globalBrandTableL10
          )
        );
      } else if (digitalDataIbm.gbt10) {
        parameters.push(prepareMeta('gbt10', digitalDataIbm.gbt10));
      }
      if (digitalDataIbm.globalBrandTableL17 && digitalDataIbm.gbt17) {
        parameters.push(
          prepareMeta(
            'gbt17',
            digitalDataIbm.gbt17 + ' - ' + digitalDataIbm.globalBrandTableL17
          )
        );
      } else if (digitalDataIbm.gbt17) {
        parameters.push(prepareMeta('gbt17', digitalDataIbm.gbt17));
      }
      if (digitalDataIbm.globalBrandTableL20 && digitalDataIbm.gbt20) {
        parameters.push(
          prepareMeta(
            'gbt20',
            digitalDataIbm.gbt20 + ' - ' + digitalDataIbm.globalBrandTableL20
          )
        );
      } else if (digitalDataIbm.gbt20) {
        parameters.push(prepareMeta('gbt20', digitalDataIbm.gbt20));
      }
      if (digitalDataIbm.globalBrandTableL30 && digitalDataIbm.gbt30) {
        parameters.push(
          prepareMeta(
            'gbt30',
            digitalDataIbm.gbt30 + ' - ' + digitalDataIbm.globalBrandTableL30
          )
        );
      } else if (digitalDataIbm.gbt30) {
        parameters.push(prepareMeta('gbt30', digitalDataIbm.gbt30));
      }
      if (digitalDataIbm.globalBrandTableL40 && digitalDataIbm.gbt40) {
        parameters.push(
          prepareMeta(
            'gbt40',
            digitalDataIbm.gbt40 + ' - ' + digitalDataIbm.globalBrandTableL40
          )
        );
      } else if (digitalDataIbm.gbt40) {
        parameters.push(prepareMeta('gbt40', digitalDataIbm.gbt40));
      }
      if (digitalDataIbm.ut10) {
        parameters.push(prepareMeta('ut10', digitalDataIbm.ut10));
      }
      if (digitalDataIbm.ut15) {
        parameters.push(prepareMeta('ut15', digitalDataIbm.ut15));
      }
      if (digitalDataIbm.ut17) {
        parameters.push(prepareMeta('ut17', digitalDataIbm.ut17));
      }
      if (digitalDataIbm.ut20) {
        parameters.push(prepareMeta('ut20', digitalDataIbm.ut20));
      }
      if (digitalDataIbm.ut30) {
        parameters.push(prepareMeta('ut30', digitalDataIbm.ut30));
      }
      if (digitalDataPage.session && digitalDataPage.session.uPageViewID) {
        parameters.push(
          prepareMeta('pageviewid', digitalDataPage.session.uPageViewID)
        );
      }
      var dataUser = window.digitalData.user;
      if (dataUser && dataUser.profile && dataUser.profile.auid) {
        parameters.push(prepareMeta('upid', dataUser.profile.auid));
      }
      if (
        dataUser &&
        dataUser.user &&
        dataUser.segment &&
        dataUser.segment.isIBMer
      ) {
        parameters.push(prepareMeta('isibmer', dataUser.segment.isIBMer));
      }
      // Filtering to remove all empty or "" data
      parameters = parameters.filter(Boolean);
      parameters.push(
        prepareMeta('url', encodeURIComponent(window.location.href), '')
      );
    }
    return parameters.length > 0 ? parameters.join('&') : '';
  }

  /** Miscelloanous Functions */

  function prepareMeta(name, param, defaultValue) {
    var returnThis = name + '=' + param;
    defaultValue = defaultValue || null;
    if (
      param === '' ||
      param === 'REPLACE' ||
      typeof param === 'undefined' ||
      param === null
    ) {
      if (defaultValue === null) {
        returnThis = '';
      } else {
        returnThis = name + '=' + defaultValue;
      }
    }
    return returnThis;
  }

  function getUTCDate() {
    var d1 = new Date();
    var utcDate =
        d1.getUTCDate() < 10 ? '0' + d1.getUTCDate() : d1.getUTCDate(),
      utcMonth =
        d1.getUTCHours() < 10
          ? '0' + (d1.getUTCMonth() + 1)
          : d1.getUTCMonth() + 1,
      utcHours =
        d1.getUTCHours() < 10 ? '0' + d1.getUTCHours() : d1.getUTCHours(),
      utcMinutes =
        d1.getUTCMinutes() < 10 ? '0' + d1.getUTCMinutes() : d1.getUTCMinutes(),
      utcSeconds =
        d1.getUTCSeconds() < 10 ? '0' + d1.getUTCSeconds() : d1.getUTCSeconds();

    // As per Randy, date format is yyyy-mm-dd HH:mm:ss
    return (
      d1.getUTCFullYear() +
      '-' +
      utcMonth +
      '-' +
      utcDate +
      ' ' +
      utcHours +
      ':' +
      utcMinutes +
      ':' +
      utcSeconds
    );
  }
})(jQuery, IBMCore);
;

// MUST BE LAST!!!!! Runtime in-line code and onReady stuff
/**

	This is the auto-init (controller) for WWW common widgets.
	<br />
	<br />If a widget is specific for WWW, put it in the www/init.js file.
	<br />
	<br />ONLY WIDGETS. Not "modules": Anything that's a common widget or magic data-attribute instantiated thing
	<br />
	<br />How it works: If content widgets are enabled (default), it will auto-init any widget here.
	<br />This allows for a global config setting to disable the auto-init of all content space widgets. 
	<br />Developers can disable widgets in two ways: On the element using @data-init="false" or globally using: config.contentwidgets.enabled = false.

	@class Other IBM - common init

**/

(function ($, IBM) {

	/** 
		Called on DOM ready only if contentwidgets are enabled (default setting).
		<br />Anything in here will only run if content space widgets are enabled for the page. (default).
		
		@method runOnloadIfWidgetsEnabled
		@private
	**/
	function runOnloadIfWidgetsEnabled () {
		// Init these widgets on the elements that tell us they want to be converted to a widget, but that aren't disabled.
		// These are in order, from "inside out". Some widgets can be used inside other widgets,
		//  so we put them in the init order needed.
		// The "container" type widgets will be at the bottom/last.

		if (IBM.common.util.anchorlinkAdjustment) {
			$("[data-widget=adjustanchorlinks]:not([data-init=false])").each(function(){
				IBM.common.util.anchorlinkAdjustment.adjustLinks(this);
			});
		}

		if (IBM.common.widget.checkbox) {
			$("input[data-widget=checkbox]:not([data-init=false])").checkbox();
		}

		if (IBM.common.widget.datepicker) {
			$("input[data-widget=datepicker]:not([data-init=false])").each(function(){
				IBM.common.widget.datepicker.init(this);
			});
		}

		if (IBM.common.widget.formvalidator) {
			$("form[data-formvalidator=enable]:not([data-init=false])").each(function(){
				IBM.common.widget.formvalidator.init(this);
			});
		}
		
		// Map old jumpform to this for existing users. Remove legacy mapping soon.
		if (IBM.common.widget.selectlistnav) {
			$("[data-widget=selectlistnav]:not([data-init=false])").selectlistnav();
		}
		
		if (IBM.common.widget.leavingibm) {
			$("[data-widget=leavingibm]:not([data-init=false])").leavingibm();	
		}

		if (IBM.common.widget.masonry) {
			$("[data-widget=masonry]:not([data-init=false])").each(function(){
				IBM.common.widget.masonry.init(this);
			});
		}

		if (IBM.common.widget.datatable) {
			$("table[data-widget=datatable]:not([data-init=false])").each(function(){
				IBM.common.widget.datatable.init(this);
			});
		}
		
		if (IBM.common.widget.parallaxscroll) {
			$("[data-widget=parallaxscroll]:not([data-init=false])").each(function(){
				IBM.common.widget.parallaxscroll.init(this);
			});
		}

		if (IBM.common.widget.rssdisplay) {
			$("[data-widget=rssdisplay]:not([data-init=false])").rssdisplay();
		}

		if (IBM.common.widget.scrollable) {
			$("[data-widget=scrollable]:not([data-init=false])").scrollable();
		}

		if (IBM.common.widget.stickytabs) {
			$("[data-widget=stickytabs]:not([data-init=false])").stickytabs();
		}

		if (typeof window.SyntaxHighlighter !== "undefined") {
			$("[data-widget=syntaxhighlighter]:not([data-init=false])").syntaxhighlighter();
		}

		if (IBM.common.widget.tooltip) {
			$("[data-widget=tooltip]:not([data-init=false])").tooltip();
		}
		
		if (IBM.common.widget.videoplayer) {
			$("[data-widget=videoplayer]:not([data-init=false])").videoplayer();
		}
		
		if (IBM.common.widget.videolooper) {
			$("[data-widget=videolooper]:not([data-init=false])").videolooper();
		}

		// Form widgets that can be used in some of the widgets above, wait until the widgets above have init'd and
		// possible created some of these form elements, so we can then turn them into widgets.

		if (IBM.common.widget.selectlist) {
			$("div.dataTables_length > label > select:not([data-init=false]), form select:not([data-init=false]), table select:not([data-init=false])").each(function(){
				IBM.common.widget.selectlist.init(this);
			});
		}

		if (IBM.common.widget.fileinput) {
			$("input:file[data-widget=fileinput]:not([data-init=false])").fileinput();
		}
		
		if (IBM.common.widget.tablesrowselector) {
			$("table[data-tablerowselector=enable]:not([data-init=false])").tablesrowselector();
		}
		
		// These should be last because they are outer widgets that can have inner widgets that 
		//  need to determine size to init properly.
		if (IBM.common.widget.setsameheight) {
			$("[data-widget=setsameheight]:not([data-init=false])").setsameheight();
		}
		
		if (IBM.common.widget.showhide) {
			$("[data-widget=showhide]:not([data-init=false])").showhide();
		}

		if (IBM.common.widget.twisty) {
			$("[data-widget=twisty]:not([data-init=false])").twisty();
		}
		
		if (IBM.common.widget.overlay) {
			$("[data-widget=overlay]:not([data-init=false])").overlay();
		}

		if (IBM.common.widget.carousel) {
			$("div[data-widget=carousel]:not([data-init=false])").carousel();
		}

		if (IBM.common.widget.dyntabs) {
			$("div[data-widget=dyntabs]:not([data-init=false])").dyntabs();
		}

		if (IBM.common.widget.stepindicator) {
			$("div[data-widget=stepindicator]:not([data-init=false])").stepindicator();
		}

		// END runOnloadIfWidgetsEnabled
	}
	
	
	/** 
		Runs on DOM ready
		Allows us to disable all auto-init content space widgets via a single config setting.
	**/
	$(function () {
		// If widgets are enabled (default) run this group which auto-inits them all.
		if (IBM.common.util.config.get("contentwidgets.enabled") === true) {
			runOnloadIfWidgetsEnabled();
		}
	});

	// Fire v18 ready event in case someone needs to know when the namespace exists, for v18 async loading.
	IBM.common.widget.manager.dispatchEvent({
		evtEl: document.documentElement, 
		evtName: "v18-ready"
	});

})(jQuery, IBMCore);
;
/**

	Used for testing/timing events and optimizing JS code performance.
	<br />
	<br />jstimer-start.js is at the top of JS build file. This file is at the end of the JS build file.
	<br />This file uses the jsStart timer as a reference + event subscriptions to test performance of key page items' rendering.

	@class Other IBM - jstimer-end
	
**/

(function ($, IBM) {
	
	function setTimelineStamp (txt) {
		if (window.console.timeStamp) {
			window.console.timeStamp(txt);
		}
	}

	// Set a note for the console.log.
	IBM.performance.Note = "Times are in MS";

	// Convert to IBM var and delete global one.
	IBM.performance.jsStart = window.v18JsStart;
	IBM.performance.jsEnd = new Date().getTime();
	
	// Function to always do the math for us when we need time elapsed from the start of the JS file run.
	var getTimeFromStart = function () {
			return (new Date().getTime() - IBM.performance.jsStart);
		},
		getOnreadyTime = function () {
			IBM.performance.startToDocReady = getTimeFromStart();
			setTimelineStamp("jQuery DocReady");
		};
	
	// META data loaded.
	IBM.performance.getMetaTime = function () {
		IBM.performance.startToMetaLoaded = getTimeFromStart();
	};
	
	// Translations loaded.
	IBM.performance.getTranslationTime = function () {
		IBM.performance.startToTranslationsLoaded = getTimeFromStart();
	};
	
	// Masthead main links injected on page.
	IBM.performance.getMastheadMainLinksReady = function () {
		IBM.performance.onReadyToMastheadMainLinks = getTimeFromStart();
		setTimelineStamp("Masthead main links created");
	};
	
	// Masthead main links injected on page.
	IBM.performance.getMobilemenuReady = function () {
		IBM.performance.onReadyToMobilemenuLinks = getTimeFromStart();
		setTimelineStamp("Mobile menu created (deferred)");
	};
	
	// Group masthead times.
	IBM.performance.showRunTimes = function () {
		if (IBM.common.util.config.isEnabled("errorchecking")) {	
			setTimeout(function () {
				IBM.common.util.debug.add("info", "v18 JS KPIs (from JS start):\n" + 
					"  - Meta data ready: " + IBM.performance.startToMetaLoaded + "ms\n" + 
					"  - Translations ready: " + IBM.performance.startToTranslationsLoaded + "ms\n" + 
					"  - jQuery DocReady: " + IBM.performance.startToDocReady + "ms\n" + 
					"  - Masthead main links onscreen: " + IBM.performance.onReadyToMastheadMainLinks + "ms\n" + 
					"  - Mobile menu created (deferred): " + IBM.performance.onReadyToMobilemenuLinks + "ms\n"
				);
			}, 20);
		}
	};


	////
	//  Performance tests:
	////
	
	// Get the onReady time elapse from JS start run.
	$(function () { 
		getOnreadyTime();
	});

	//How long it takes to process the entire www.js file.
	IBM.performance.startToEnd = getTimeFromStart();
	
	// How long it takes meta to be set.
	IBM.common.meta.subscribe("dataReady", "JSperf", IBM.performance.getMetaTime).runAsap(IBM.performance.getMetaTime);

	// How long it takes translations to be available.
	IBM.common.translations.subscribe("dataReady", "JSperf", IBM.performance.getTranslationTime).runAsap(IBM.performance.getTranslationTime);
	
	// How long it takes masthead main links to show on screen.
	IBM.common.module.masthead.subscribe("ready", "JSperf", IBM.performance.getMastheadMainLinksReady).runAsap(IBM.performance.getMastheadMainLinksReady);
	
	IBM.common.module.mobilemenu.subscribe("ready", "JSperf", function () {
		IBM.performance.getMobilemenuReady();
		setTimeout(IBM.performance.showRunTimes, 1000);
	}).runAsap(function () {
		IBM.performance.getMobilemenuReady();
		setTimeout(IBM.performance.showRunTimes, 1000);
	});
	

})(jQuery, IBMCore);

IBMPerformance.mark('V18-end-execute');

// Measurements done here
IBMPerformance.measure('V18-begin-end-execute',
                      'V18-begin-execute',
                      'V18-end-execute');
;
/**
	
	This is for Jeff Florentino
	<br />Web asset tracker for GDPR auditing. Checks the page to ensure it has tealium/CM on it and if not, fires a tag.
	
**/
(function ($, IBM) {
	// TEMP for testing. Use to omit the check script.
	if (!IBM.common.util.config.isEnabled("wat") || IBM.common.util.url.getParam("wat") === "n") {
		return;
	}

	$(function () {
		setTimeout(function() {
			$.ajax({
				url: "https://1.www.s81c.com/common/scripts/wat.js",
				dataType: "script",
				cache: true
			});
		}, 1000);
	});

})(jQuery, IBMCore);
;
/**
	
	This is to allow the testing of the latest css code on a v18 page
	<br />Checks that the page is being loaded from an iframe and switches the CSS to the latest version
	
**/
(function ($, IBM) {
	if(window.top !== window.self && (window.name === 'preview-tool')){
		setTimeout(function() {
			var banner = '<div class="ibm-background-red-10 ibm-padding-content">This is a preview page showing the upcoming Digital Design release</div>';

			var filesToBeReplaced = [
				"datepicker.css",
				"expertise-rtl.css",
				"expertise.css",
				"forms-rtl.css",
				"forms.css",
				"grid-16.css",
				"grid-duo.css",
				"grid-fluid-rtl.css",
				"grid-fluid.css",
				"liveperson-rtl.css",
				"liveperson.css",
				"syntaxhighlighter-rtl.css",
				"syntaxhighlighter.css",
				"tables-rtl.css",
				"tables.css",
				"textcolumns-rtl.css",
				"textcolumns.css",
				"www-hfonly.css",
				"www-rtl.css",
				"www-widgetsonly.css",
				"www.css"
			];

			filesToBeReplaced.forEach(function(fileName) {
				//  Makes sure we can test this page where the www.css file is not on a v18 directory
				var cssToReplace;
				
				if($("link[href*='v18/css/" + fileName + "']").length > 0) {
					cssToReplace = $("link[href*='v18/css/" + fileName + "']");
				} else if ($("link[href*='/css/" + fileName + "']") && window.location.hostname === "localhost") {
					cssToReplace = $("link[href*='/css/" + fileName + "']");
				}
				
				if(cssToReplace) {
					cssToReplace.attr("href", "https://1.www.s81c.com/common/v18/preview/css/" + fileName);
				}
			});

			$("body").prepend(banner);
		}, 1000);
	}
})(jQuery, IBMCore);
;
