var l6=Object.defineProperty;var i6=(e,t,n)=>t in e?l6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>(i6(e,typeof t!="symbol"?t+"":t,n),n);function Q1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X1={exports:{}},gc={},J1={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),c6=Symbol.for("react.portal"),d6=Symbol.for("react.fragment"),u6=Symbol.for("react.strict_mode"),p6=Symbol.for("react.profiler"),h6=Symbol.for("react.provider"),m6=Symbol.for("react.context"),f6=Symbol.for("react.forward_ref"),x6=Symbol.for("react.suspense"),g6=Symbol.for("react.memo"),v6=Symbol.for("react.lazy"),dm=Symbol.iterator;function b6(e){return e===null||typeof e!="object"?null:(e=dm&&e[dm]||e["@@iterator"],typeof e=="function"?e:null)}var ex={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tx=Object.assign,nx={};function ys(e,t,n){this.props=e,this.context=t,this.refs=nx,this.updater=n||ex}ys.prototype.isReactComponent={};ys.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ys.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rx(){}rx.prototype=ys.prototype;function mp(e,t,n){this.props=e,this.context=t,this.refs=nx,this.updater=n||ex}var fp=mp.prototype=new rx;fp.constructor=mp;tx(fp,ys.prototype);fp.isPureReactComponent=!0;var um=Array.isArray,ox=Object.prototype.hasOwnProperty,xp={current:null},sx={key:!0,ref:!0,__self:!0,__source:!0};function ax(e,t,n){var o,s={},a=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)ox.call(t,o)&&!sx.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)s[o]===void 0&&(s[o]=i[o]);return{$$typeof:ol,type:e,key:a,ref:l,props:s,_owner:xp.current}}function j6(e,t){return{$$typeof:ol,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ol}function y6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pm=/\/+/g;function ld(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y6(""+e.key):t.toString(36)}function vi(e,t,n,o,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ol:case c6:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+ld(l,0):o,um(s)?(n="",e!=null&&(n=e.replace(pm,"$&/")+"/"),vi(s,t,n,"",function(d){return d})):s!=null&&(gp(s)&&(s=j6(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(pm,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=o===""?".":o+":",um(e))for(var i=0;i<e.length;i++){a=e[i];var c=o+ld(a,i);l+=vi(a,t,n,c,s)}else if(c=b6(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=o+ld(a,i++),l+=vi(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Il(e,t,n){if(e==null)return e;var o=[],s=0;return vi(e,o,"","",function(a){return t.call(n,a,s++)}),o}function S6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},bi={transition:null},C6={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:bi,ReactCurrentOwner:xp};me.Children={map:Il,forEach:function(e,t,n){Il(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Il(e,function(){t++}),t},toArray:function(e){return Il(e,function(t){return t})||[]},only:function(e){if(!gp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=ys;me.Fragment=d6;me.Profiler=p6;me.PureComponent=mp;me.StrictMode=u6;me.Suspense=x6;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C6;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=tx({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=xp.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)ox.call(t,c)&&!sx.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:ol,type:e.type,key:s,ref:a,props:o,_owner:l}};me.createContext=function(e){return e={$$typeof:m6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h6,_context:e},e.Consumer=e};me.createElement=ax;me.createFactory=function(e){var t=ax.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:f6,render:e}};me.isValidElement=gp;me.lazy=function(e){return{$$typeof:v6,_payload:{_status:-1,_result:e},_init:S6}};me.memo=function(e,t){return{$$typeof:g6,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=bi.transition;bi.transition={};try{e()}finally{bi.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return yt.current.useCallback(e,t)};me.useContext=function(e){return yt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};me.useEffect=function(e,t){return yt.current.useEffect(e,t)};me.useId=function(){return yt.current.useId()};me.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return yt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};me.useRef=function(e){return yt.current.useRef(e)};me.useState=function(e){return yt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return yt.current.useTransition()};me.version="18.2.0";J1.exports=me;var v=J1.exports;const V=nr(v),_6=Q1({__proto__:null,default:V},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w6=v,T6=Symbol.for("react.element"),E6=Symbol.for("react.fragment"),k6=Object.prototype.hasOwnProperty,N6=w6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R6={key:!0,ref:!0,__self:!0,__source:!0};function lx(e,t,n){var o,s={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)k6.call(t,o)&&!R6.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:T6,type:e,key:a,ref:l,props:s,_owner:N6.current}}gc.Fragment=E6;gc.jsx=lx;gc.jsxs=lx;X1.exports=gc;var r=X1.exports,nu={},ix={exports:{}},Ht={},cx={exports:{}},dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,P){var I=$.length;$.push(P);e:for(;0<I;){var W=I-1>>>1,Y=$[W];if(0<s(Y,P))$[W]=P,$[I]=Y,I=W;else break e}}function n($){return $.length===0?null:$[0]}function o($){if($.length===0)return null;var P=$[0],I=$.pop();if(I!==P){$[0]=I;e:for(var W=0,Y=$.length,Te=Y>>>1;W<Te;){var de=2*(W+1)-1,Se=$[de],ie=de+1,Le=$[ie];if(0>s(Se,I))ie<Y&&0>s(Le,Se)?($[W]=Le,$[ie]=I,W=ie):($[W]=Se,$[de]=I,W=de);else if(ie<Y&&0>s(Le,I))$[W]=Le,$[ie]=I,W=ie;else break e}}return P}function s($,P){var I=$.sortIndex-P.sortIndex;return I!==0?I:$.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,f=3,b=!1,j=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m($){for(var P=n(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=$)o(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function S($){if(y=!1,m($),!j)if(n(c)!==null)j=!0,je(C);else{var P=n(d);P!==null&&ee(S,P.startTime-$)}}function C($,P){j=!1,y&&(y=!1,g(k),k=-1),b=!0;var I=f;try{for(m(P),p=n(c);p!==null&&(!(p.expirationTime>P)||$&&!L());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var Y=W(p.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(c)&&o(c),m(P)}else o(c);p=n(c)}if(p!==null)var Te=!0;else{var de=n(d);de!==null&&ee(S,de.startTime-P),Te=!1}return Te}finally{p=null,f=I,b=!1}}var x=!1,_=null,k=-1,N=5,O=-1;function L(){return!(e.unstable_now()-O<N)}function U(){if(_!==null){var $=e.unstable_now();O=$;var P=!0;try{P=_(!0,$)}finally{P?Z():(x=!1,_=null)}}else x=!1}var Z;if(typeof h=="function")Z=function(){h(U)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,we=te.port2;te.port1.onmessage=U,Z=function(){we.postMessage(null)}}else Z=function(){w(U,0)};function je($){_=$,x||(x=!0,Z())}function ee($,P){k=w(function(){$(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){j||b||(j=!0,je(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var I=f;f=P;try{return $()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,P){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var I=f;f=$;try{return P()}finally{f=I}},e.unstable_scheduleCallback=function($,P,I){var W=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,$){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=I+Y,$={id:u++,callback:P,priorityLevel:$,startTime:I,expirationTime:Y,sortIndex:-1},I>W?($.sortIndex=I,t(d,$),n(c)===null&&$===n(d)&&(y?(g(k),k=-1):y=!0,ee(S,I-W))):($.sortIndex=Y,t(c,$),j||b||(j=!0,je(C))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var P=f;return function(){var I=f;f=P;try{return $.apply(this,arguments)}finally{f=I}}}})(dx);cx.exports=dx;var O6=cx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux=v,Ut=O6;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var px=new Set,Da={};function bo(e,t){ps(e,t),ps(e+"Capture",t)}function ps(e,t){for(Da[e]=t,e=0;e<t.length;e++)px.add(t[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,D6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},mm={};function L6(e){return ru.call(mm,e)?!0:ru.call(hm,e)?!1:D6.test(e)?mm[e]=!0:(hm[e]=!0,!1)}function B6(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $6(e,t,n,o){if(t===null||typeof t>"u"||B6(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,n,o,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var vp=/[\-:]([a-z])/g;function bp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vp,bp);ct[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vp,bp);ct[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vp,bp);ct[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function jp(e,t,n,o){var s=ct.hasOwnProperty(t)?ct[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($6(t,n,s,o)&&(n=null),o||s===null?L6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var rr=ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zl=Symbol.for("react.element"),Fo=Symbol.for("react.portal"),Uo=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),hx=Symbol.for("react.provider"),mx=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),au=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),fx=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Us(e){return e===null||typeof e!="object"?null:(e=fm&&e[fm]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,id;function sa(e){if(id===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);id=t&&t[1]||""}return`
`+id+e}var cd=!1;function dd(e,t){if(!e||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=o.stack.split(`
`),l=s.length-1,i=a.length-1;1<=l&&0<=i&&s[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==a[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sa(e):""}function A6(e){switch(e.tag){case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return e=dd(e.type,!1),e;case 11:return e=dd(e.type.render,!1),e;case 1:return e=dd(e.type,!0),e;default:return""}}function lu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Uo:return"Fragment";case Fo:return"Portal";case ou:return"Profiler";case yp:return"StrictMode";case su:return"Suspense";case au:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mx:return(e.displayName||"Context")+".Consumer";case hx:return(e._context.displayName||"Context")+".Provider";case Sp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cp:return t=e.displayName||null,t!==null?t:lu(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return lu(e(t))}catch{}}return null}function M6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(t);case 8:return t===yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P6(e){var t=xx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fl(e){e._valueTracker||(e._valueTracker=P6(e))}function gx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=xx(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function iu(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xm(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vx(e,t){t=t.checked,t!=null&&jp(e,"checked",t,!1)}function cu(e,t){vx(e,t);var n=Rr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?du(e,t.type,n):t.hasOwnProperty("defaultValue")&&du(e,t.type,Rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function du(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var aa=Array.isArray;function os(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Rr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(aa(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rr(n)}}function bx(e,t){var n=Rr(t.value),o=Rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function bm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ul,yx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ul=Ul||document.createElement("div"),Ul.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ul.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function La(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I6=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(e){I6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xa[t]=xa[e]})});function Sx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xa.hasOwnProperty(e)&&xa[e]?(""+t).trim():t+"px"}function Cx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Sx(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var z6=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(e,t){if(t){if(z6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function mu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fu=null;function _p(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xu=null,ss=null,as=null;function jm(e){if(e=ll(e)){if(typeof xu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Sc(t),xu(e.stateNode,e.type,t))}}function _x(e){ss?as?as.push(e):as=[e]:ss=e}function wx(){if(ss){var e=ss,t=as;if(as=ss=null,jm(e),t)for(e=0;e<t.length;e++)jm(t[e])}}function Tx(e,t){return e(t)}function Ex(){}var ud=!1;function kx(e,t,n){if(ud)return e(t,n);ud=!0;try{return Tx(e,t,n)}finally{ud=!1,(ss!==null||as!==null)&&(Ex(),wx())}}function Ba(e,t){var n=e.stateNode;if(n===null)return null;var o=Sc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var gu=!1;if(qn)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{gu=!1}function F6(e,t,n,o,s,a,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var ga=!1,Ai=null,Mi=!1,vu=null,U6={onError:function(e){ga=!0,Ai=e}};function H6(e,t,n,o,s,a,l,i,c){ga=!1,Ai=null,F6.apply(U6,arguments)}function V6(e,t,n,o,s,a,l,i,c){if(H6.apply(this,arguments),ga){if(ga){var d=Ai;ga=!1,Ai=null}else throw Error(A(198));Mi||(Mi=!0,vu=d)}}function jo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ym(e){if(jo(e)!==e)throw Error(A(188))}function W6(e){var t=e.alternate;if(!t){if(t=jo(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return ym(s),e;if(a===o)return ym(s),t;a=a.sibling}throw Error(A(188))}if(n.return!==o.return)n=s,o=a;else{for(var l=!1,i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==o)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Rx(e){return e=W6(e),e!==null?Ox(e):null}function Ox(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ox(e);if(t!==null)return t;e=e.sibling}return null}var Dx=Ut.unstable_scheduleCallback,Sm=Ut.unstable_cancelCallback,Z6=Ut.unstable_shouldYield,K6=Ut.unstable_requestPaint,Ze=Ut.unstable_now,Y6=Ut.unstable_getCurrentPriorityLevel,wp=Ut.unstable_ImmediatePriority,Lx=Ut.unstable_UserBlockingPriority,Pi=Ut.unstable_NormalPriority,G6=Ut.unstable_LowPriority,Bx=Ut.unstable_IdlePriority,vc=null,Dn=null;function q6(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(vc,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:J6,Q6=Math.log,X6=Math.LN2;function J6(e){return e>>>=0,e===0?32:31-(Q6(e)/X6|0)|0}var Hl=64,Vl=4194304;function la(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~s;i!==0?o=la(i):(a&=l,a!==0&&(o=la(a)))}else l=n&~s,l!==0?o=la(l):a!==0&&(o=la(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-fn(t),s=1<<n,o|=e[n],t&=~s;return o}function ej(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tj(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-fn(a),i=1<<l,c=s[l];c===-1?(!(i&n)||i&o)&&(s[l]=ej(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function bu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $x(){var e=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),e}function pd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=n}function nj(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-fn(n),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~a}}function Tp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-fn(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var _e=0;function Ax(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mx,Ep,Px,Ix,zx,ju=!1,Wl=[],Sr=null,Cr=null,_r=null,$a=new Map,Aa=new Map,vr=[],rj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":$a.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(t.pointerId)}}function Vs(e,t,n,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ll(t),t!==null&&Ep(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function oj(e,t,n,o,s){switch(t){case"focusin":return Sr=Vs(Sr,e,t,n,o,s),!0;case"dragenter":return Cr=Vs(Cr,e,t,n,o,s),!0;case"mouseover":return _r=Vs(_r,e,t,n,o,s),!0;case"pointerover":var a=s.pointerId;return $a.set(a,Vs($a.get(a)||null,e,t,n,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Aa.set(a,Vs(Aa.get(a)||null,e,t,n,o,s)),!0}return!1}function Fx(e){var t=no(e.target);if(t!==null){var n=jo(t);if(n!==null){if(t=n.tag,t===13){if(t=Nx(n),t!==null){e.blockedOn=t,zx(e.priority,function(){Px(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);fu=o,n.target.dispatchEvent(o),fu=null}else return t=ll(n),t!==null&&Ep(t),e.blockedOn=n,!1;t.shift()}return!0}function _m(e,t,n){ji(e)&&n.delete(t)}function sj(){ju=!1,Sr!==null&&ji(Sr)&&(Sr=null),Cr!==null&&ji(Cr)&&(Cr=null),_r!==null&&ji(_r)&&(_r=null),$a.forEach(_m),Aa.forEach(_m)}function Ws(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,sj)))}function Ma(e){function t(s){return Ws(s,e)}if(0<Wl.length){Ws(Wl[0],e);for(var n=1;n<Wl.length;n++){var o=Wl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Sr!==null&&Ws(Sr,e),Cr!==null&&Ws(Cr,e),_r!==null&&Ws(_r,e),$a.forEach(t),Aa.forEach(t),n=0;n<vr.length;n++)o=vr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)Fx(n),n.blockedOn===null&&vr.shift()}var ls=rr.ReactCurrentBatchConfig,zi=!0;function aj(e,t,n,o){var s=_e,a=ls.transition;ls.transition=null;try{_e=1,kp(e,t,n,o)}finally{_e=s,ls.transition=a}}function lj(e,t,n,o){var s=_e,a=ls.transition;ls.transition=null;try{_e=4,kp(e,t,n,o)}finally{_e=s,ls.transition=a}}function kp(e,t,n,o){if(zi){var s=yu(e,t,n,o);if(s===null)Sd(e,t,o,Fi,n),Cm(e,o);else if(oj(s,e,t,n,o))o.stopPropagation();else if(Cm(e,o),t&4&&-1<rj.indexOf(e)){for(;s!==null;){var a=ll(s);if(a!==null&&Mx(a),a=yu(e,t,n,o),a===null&&Sd(e,t,o,Fi,n),a===s)break;s=a}s!==null&&o.stopPropagation()}else Sd(e,t,o,null,n)}}var Fi=null;function yu(e,t,n,o){if(Fi=null,e=_p(o),e=no(e),e!==null)if(t=jo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function Ux(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y6()){case wp:return 1;case Lx:return 4;case Pi:case G6:return 16;case Bx:return 536870912;default:return 16}default:return 16}}var jr=null,Np=null,yi=null;function Hx(){if(yi)return yi;var e,t=Np,n=t.length,o,s="value"in jr?jr.value:jr.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===s[a-o];o++);return yi=s.slice(e,1<o?1-o:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function wm(){return!1}function Vt(e){function t(n,o,s,a,l){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zl:wm,this.isPropagationStopped=wm,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=Vt(Ss),al=Fe({},Ss,{view:0,detail:0}),ij=Vt(al),hd,md,Zs,bc=Fe({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(hd=e.screenX-Zs.screenX,md=e.screenY-Zs.screenY):md=hd=0,Zs=e),hd)},movementY:function(e){return"movementY"in e?e.movementY:md}}),Tm=Vt(bc),cj=Fe({},bc,{dataTransfer:0}),dj=Vt(cj),uj=Fe({},al,{relatedTarget:0}),fd=Vt(uj),pj=Fe({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),hj=Vt(pj),mj=Fe({},Ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fj=Vt(mj),xj=Fe({},Ss,{data:0}),Em=Vt(xj),gj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jj(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bj[e])?!!t[e]:!1}function Op(){return jj}var yj=Fe({},al,{key:function(e){if(e.key){var t=gj[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vj[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sj=Vt(yj),Cj=Fe({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Vt(Cj),_j=Fe({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),wj=Vt(_j),Tj=Fe({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ej=Vt(Tj),kj=Fe({},bc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nj=Vt(kj),Rj=[9,13,27,32],Dp=qn&&"CompositionEvent"in window,va=null;qn&&"documentMode"in document&&(va=document.documentMode);var Oj=qn&&"TextEvent"in window&&!va,Vx=qn&&(!Dp||va&&8<va&&11>=va),Nm=String.fromCharCode(32),Rm=!1;function Wx(e,t){switch(e){case"keyup":return Rj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ho=!1;function Dj(e,t){switch(e){case"compositionend":return Zx(t);case"keypress":return t.which!==32?null:(Rm=!0,Nm);case"textInput":return e=t.data,e===Nm&&Rm?null:e;default:return null}}function Lj(e,t){if(Ho)return e==="compositionend"||!Dp&&Wx(e,t)?(e=Hx(),yi=Np=jr=null,Ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vx&&t.locale!=="ko"?null:t.data;default:return null}}var Bj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bj[e.type]:t==="textarea"}function Kx(e,t,n,o){_x(o),t=Ui(t,"onChange"),0<t.length&&(n=new Rp("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ba=null,Pa=null;function $j(e){og(e,0)}function jc(e){var t=Zo(e);if(gx(t))return e}function Aj(e,t){if(e==="change")return t}var Yx=!1;if(qn){var xd;if(qn){var gd="oninput"in document;if(!gd){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),gd=typeof Dm.oninput=="function"}xd=gd}else xd=!1;Yx=xd&&(!document.documentMode||9<document.documentMode)}function Lm(){ba&&(ba.detachEvent("onpropertychange",Gx),Pa=ba=null)}function Gx(e){if(e.propertyName==="value"&&jc(Pa)){var t=[];Kx(t,Pa,e,_p(e)),kx($j,t)}}function Mj(e,t,n){e==="focusin"?(Lm(),ba=t,Pa=n,ba.attachEvent("onpropertychange",Gx)):e==="focusout"&&Lm()}function Pj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jc(Pa)}function Ij(e,t){if(e==="click")return jc(t)}function zj(e,t){if(e==="input"||e==="change")return jc(t)}function Fj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:Fj;function Ia(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!ru.call(t,s)||!gn(e[s],t[s]))return!1}return!0}function Bm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $m(e,t){var n=Bm(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bm(n)}}function qx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qx(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uj(e){var t=Qx(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qx(n.ownerDocument.documentElement,n)){if(o!==null&&Lp(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=$m(n,a);var l=$m(n,o);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hj=qn&&"documentMode"in document&&11>=document.documentMode,Vo=null,Su=null,ja=null,Cu=!1;function Am(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||Vo==null||Vo!==$i(o)||(o=Vo,"selectionStart"in o&&Lp(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ja&&Ia(ja,o)||(ja=o,o=Ui(Su,"onSelect"),0<o.length&&(t=new Rp("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Vo)))}function Kl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wo={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},vd={},Xx={};qn&&(Xx=document.createElement("div").style,"AnimationEvent"in window||(delete Wo.animationend.animation,delete Wo.animationiteration.animation,delete Wo.animationstart.animation),"TransitionEvent"in window||delete Wo.transitionend.transition);function yc(e){if(vd[e])return vd[e];if(!Wo[e])return e;var t=Wo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xx)return vd[e]=t[n];return e}var Jx=yc("animationend"),eg=yc("animationiteration"),tg=yc("animationstart"),ng=yc("transitionend"),rg=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){rg.set(e,t),bo(t,[e])}for(var bd=0;bd<Mm.length;bd++){var jd=Mm[bd],Vj=jd.toLowerCase(),Wj=jd[0].toUpperCase()+jd.slice(1);Ar(Vj,"on"+Wj)}Ar(Jx,"onAnimationEnd");Ar(eg,"onAnimationIteration");Ar(tg,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(ng,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zj=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Pm(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,V6(o,t,void 0,e),e.currentTarget=null}function og(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==a&&s.isPropagationStopped())break e;Pm(s,i,d),a=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==a&&s.isPropagationStopped())break e;Pm(s,i,d),a=c}}}if(Mi)throw e=vu,Mi=!1,vu=null,e}function Re(e,t){var n=t[ku];n===void 0&&(n=t[ku]=new Set);var o=e+"__bubble";n.has(o)||(sg(t,e,2,!1),n.add(o))}function yd(e,t,n){var o=0;t&&(o|=4),sg(n,e,o,t)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function za(e){if(!e[Yl]){e[Yl]=!0,px.forEach(function(n){n!=="selectionchange"&&(Zj.has(n)||yd(n,!1,e),yd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yl]||(t[Yl]=!0,yd("selectionchange",!1,t))}}function sg(e,t,n,o){switch(Ux(t)){case 1:var s=aj;break;case 4:s=lj;break;default:s=kp}n=s.bind(null,t,n,e),s=void 0,!gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Sd(e,t,n,o,s){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=no(i),l===null)return;if(c=l.tag,c===5||c===6){o=a=l;continue e}i=i.parentNode}}o=o.return}kx(function(){var d=a,u=_p(n),p=[];e:{var f=rg.get(e);if(f!==void 0){var b=Rp,j=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":b=Sj;break;case"focusin":j="focus",b=fd;break;case"focusout":j="blur",b=fd;break;case"beforeblur":case"afterblur":b=fd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=dj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=wj;break;case Jx:case eg:case tg:b=hj;break;case ng:b=Ej;break;case"scroll":b=ij;break;case"wheel":b=Nj;break;case"copy":case"cut":case"paste":b=fj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=km}var y=(t&4)!==0,w=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var h=d,m;h!==null;){m=h;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=Ba(h,g),S!=null&&y.push(Fa(h,S,m)))),w)break;h=h.return}0<y.length&&(f=new b(f,j,null,n,u),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==fu&&(j=n.relatedTarget||n.fromElement)&&(no(j)||j[Qn]))break e;if((b||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,b?(j=n.relatedTarget||n.toElement,b=d,j=j?no(j):null,j!==null&&(w=jo(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(b=null,j=d),b!==j)){if(y=Tm,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=km,S="onPointerLeave",g="onPointerEnter",h="pointer"),w=b==null?f:Zo(b),m=j==null?f:Zo(j),f=new y(S,h+"leave",b,n,u),f.target=w,f.relatedTarget=m,S=null,no(u)===d&&(y=new y(g,h+"enter",j,n,u),y.target=m,y.relatedTarget=w,S=y),w=S,b&&j)t:{for(y=b,g=j,h=0,m=y;m;m=Bo(m))h++;for(m=0,S=g;S;S=Bo(S))m++;for(;0<h-m;)y=Bo(y),h--;for(;0<m-h;)g=Bo(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Bo(y),g=Bo(g)}y=null}else y=null;b!==null&&Im(p,f,b,y,!1),j!==null&&w!==null&&Im(p,w,j,y,!0)}}e:{if(f=d?Zo(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var C=Aj;else if(Om(f))if(Yx)C=zj;else{C=Pj;var x=Mj}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Ij);if(C&&(C=C(e,d))){Kx(p,C,n,u);break e}x&&x(e,f,d),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&du(f,"number",f.value)}switch(x=d?Zo(d):window,e){case"focusin":(Om(x)||x.contentEditable==="true")&&(Vo=x,Su=d,ja=null);break;case"focusout":ja=Su=Vo=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Am(p,n,u);break;case"selectionchange":if(Hj)break;case"keydown":case"keyup":Am(p,n,u)}var _;if(Dp)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ho?Wx(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Vx&&n.locale!=="ko"&&(Ho||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ho&&(_=Hx()):(jr=u,Np="value"in jr?jr.value:jr.textContent,Ho=!0)),x=Ui(d,k),0<x.length&&(k=new Em(k,e,null,n,u),p.push({event:k,listeners:x}),_?k.data=_:(_=Zx(n),_!==null&&(k.data=_)))),(_=Oj?Dj(e,n):Lj(e,n))&&(d=Ui(d,"onBeforeInput"),0<d.length&&(u=new Em("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=_))}og(p,t)})}function Fa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Ba(e,n),a!=null&&o.unshift(Fa(e,a,s)),a=Ba(e,t),a!=null&&o.push(Fa(e,a,s))),e=e.return}return o}function Bo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Im(e,t,n,o,s){for(var a=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,s?(c=Ba(n,a),c!=null&&l.unshift(Fa(n,c,i))):s||(c=Ba(n,a),c!=null&&l.push(Fa(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Kj=/\r\n?/g,Yj=/\u0000|\uFFFD/g;function zm(e){return(typeof e=="string"?e:""+e).replace(Kj,`
`).replace(Yj,"")}function Gl(e,t,n){if(t=zm(t),zm(e)!==t&&n)throw Error(A(425))}function Hi(){}var _u=null,wu=null;function Tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,Gj=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,qj=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(e){return Fm.resolve(null).then(e).catch(Qj)}:Eu;function Qj(e){setTimeout(function(){throw e})}function Cd(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),Ma(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);Ma(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Cs,Ua="__reactProps$"+Cs,Qn="__reactContainer$"+Cs,ku="__reactEvents$"+Cs,Xj="__reactListeners$"+Cs,Jj="__reactHandles$"+Cs;function no(e){var t=e[Rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[Rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Um(e);e!==null;){if(n=e[Rn])return n;e=Um(e)}return t}e=n,n=e.parentNode}return null}function ll(e){return e=e[Rn]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Sc(e){return e[Ua]||null}var Nu=[],Ko=-1;function Mr(e){return{current:e}}function Oe(e){0>Ko||(e.current=Nu[Ko],Nu[Ko]=null,Ko--)}function ke(e,t){Ko++,Nu[Ko]=e.current,e.current=t}var Or={},ft=Mr(Or),Dt=Mr(!1),uo=Or;function hs(e,t){var n=e.type.contextTypes;if(!n)return Or;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(e){return e=e.childContextTypes,e!=null}function Vi(){Oe(Dt),Oe(ft)}function Hm(e,t,n){if(ft.current!==Or)throw Error(A(168));ke(ft,t),ke(Dt,n)}function ag(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(A(108,M6(e)||"Unknown",s));return Fe({},n,o)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,uo=ft.current,ke(ft,e),ke(Dt,Dt.current),!0}function Vm(e,t,n){var o=e.stateNode;if(!o)throw Error(A(169));n?(e=ag(e,t,uo),o.__reactInternalMemoizedMergedChildContext=e,Oe(Dt),Oe(ft),ke(ft,e)):Oe(Dt),ke(Dt,n)}var Un=null,Cc=!1,_d=!1;function lg(e){Un===null?Un=[e]:Un.push(e)}function e8(e){Cc=!0,lg(e)}function Pr(){if(!_d&&Un!==null){_d=!0;var e=0,t=_e;try{var n=Un;for(_e=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Un=null,Cc=!1}catch(s){throw Un!==null&&(Un=Un.slice(e+1)),Dx(wp,Pr),s}finally{_e=t,_d=!1}}return null}var Yo=[],Go=0,Zi=null,Ki=0,Yt=[],Gt=0,po=null,Zn=1,Kn="";function Jr(e,t){Yo[Go++]=Ki,Yo[Go++]=Zi,Zi=e,Ki=t}function ig(e,t,n){Yt[Gt++]=Zn,Yt[Gt++]=Kn,Yt[Gt++]=po,po=e;var o=Zn;e=Kn;var s=32-fn(o)-1;o&=~(1<<s),n+=1;var a=32-fn(t)+s;if(30<a){var l=s-s%5;a=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Zn=1<<32-fn(t)+s|n<<s|o,Kn=a+e}else Zn=1<<a|n<<s|o,Kn=e}function Bp(e){e.return!==null&&(Jr(e,1),ig(e,1,0))}function $p(e){for(;e===Zi;)Zi=Yo[--Go],Yo[Go]=null,Ki=Yo[--Go],Yo[Go]=null;for(;e===po;)po=Yt[--Gt],Yt[Gt]=null,Kn=Yt[--Gt],Yt[Gt]=null,Zn=Yt[--Gt],Yt[Gt]=null}var zt=null,It=null,Ae=!1,mn=null;function cg(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,It=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=po!==null?{id:Zn,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,It=null,!0):!1;default:return!1}}function Ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ou(e){if(Ae){var t=It;if(t){var n=t;if(!Wm(e,t)){if(Ru(e))throw Error(A(418));t=wr(n.nextSibling);var o=zt;t&&Wm(e,t)?cg(o,n):(e.flags=e.flags&-4097|2,Ae=!1,zt=e)}}else{if(Ru(e))throw Error(A(418));e.flags=e.flags&-4097|2,Ae=!1,zt=e}}}function Zm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function ql(e){if(e!==zt)return!1;if(!Ae)return Zm(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tu(e.type,e.memoizedProps)),t&&(t=It)){if(Ru(e))throw dg(),Error(A(418));for(;t;)cg(e,t),t=wr(t.nextSibling)}if(Zm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=zt?wr(e.stateNode.nextSibling):null;return!0}function dg(){for(var e=It;e;)e=wr(e.nextSibling)}function ms(){It=zt=null,Ae=!1}function Ap(e){mn===null?mn=[e]:mn.push(e)}var t8=rr.ReactCurrentBatchConfig;function un(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yi=Mr(null),Gi=null,qo=null,Mp=null;function Pp(){Mp=qo=Gi=null}function Ip(e){var t=Yi.current;Oe(Yi),e._currentValue=t}function Du(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function is(e,t){Gi=e,Mp=qo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Mp!==e)if(e={context:e,memoizedValue:t,next:null},qo===null){if(Gi===null)throw Error(A(308));qo=e,Gi.dependencies={lanes:0,firstContext:e}}else qo=qo.next=e;return t}var ro=null;function zp(e){ro===null?ro=[e]:ro.push(e)}function ug(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,zp(t)):(n.next=s.next,s.next=n),t.interleaved=n,Xn(e,o)}function Xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xr=!1;function Fp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,be&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Xn(e,n)}return s=o.interleaved,s===null?(t.next=t,zp(o)):(t.next=s.next,s.next=t),o.interleaved=t,Xn(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Tp(e,n)}}function Km(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qi(e,t,n,o){var s=e.updateQueue;xr=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=s.baseState;l=0,u=d=c=null,i=a;do{var f=i.lane,b=i.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var j=e,y=i;switch(f=t,b=n,y.tag){case 1:if(j=y.payload,typeof j=="function"){p=j.call(b,p,f);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,f=typeof j=="function"?j.call(b,p,f):j,f==null)break e;p=Fe({},p,f);break e;case 2:xr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[i]:f.push(i))}else b={eventTime:b,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=b,c=p):u=u.next=b,l|=f;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;f=i,i=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(u===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);mo|=l,e.lanes=l,e.memoizedState=p}}function Ym(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var hg=new ux.Component().refs;function Lu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _c={isMounted:function(e){return(e=e._reactInternals)?jo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=jt(),s=kr(e),a=Yn(o,s);a.payload=t,n!=null&&(a.callback=n),t=Tr(e,a,s),t!==null&&(xn(t,e,s,o),Ci(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=jt(),s=kr(e),a=Yn(o,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tr(e,a,s),t!==null&&(xn(t,e,s,o),Ci(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),o=kr(e),s=Yn(n,o);s.tag=2,t!=null&&(s.callback=t),t=Tr(e,s,o),t!==null&&(xn(t,e,o,n),Ci(t,e,o))}};function Gm(e,t,n,o,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ia(n,o)||!Ia(s,a):!0}function mg(e,t,n){var o=!1,s=Or,a=t.contextType;return typeof a=="object"&&a!==null?a=Jt(a):(s=Lt(t)?uo:ft.current,o=t.contextTypes,a=(o=o!=null)?hs(e,s):Or),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_c,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function qm(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&_c.enqueueReplaceState(t,t.state,null)}function Bu(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=hg,Fp(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Jt(a):(a=Lt(t)?uo:ft.current,s.context=hs(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Lu(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&_c.enqueueReplaceState(s,s.state,null),qi(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ks(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var o=n.stateNode}if(!o)throw Error(A(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var i=s.refs;i===hg&&(i=s.refs={}),l===null?delete i[a]:i[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ql(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qm(e){var t=e._init;return t(e._payload)}function fg(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function o(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(g,h){return g=Nr(g,h),g.index=0,g.sibling=null,g}function a(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,h,m,S){return h===null||h.tag!==6?(h=Od(m,g.mode,S),h.return=g,h):(h=s(h,m),h.return=g,h)}function c(g,h,m,S){var C=m.type;return C===Uo?u(g,h,m.props.children,S,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fr&&Qm(C)===h.type)?(S=s(h,m.props),S.ref=Ks(g,h,m),S.return=g,S):(S=Ni(m.type,m.key,m.props,null,g.mode,S),S.ref=Ks(g,h,m),S.return=g,S)}function d(g,h,m,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Dd(m,g.mode,S),h.return=g,h):(h=s(h,m.children||[]),h.return=g,h)}function u(g,h,m,S,C){return h===null||h.tag!==7?(h=io(m,g.mode,S,C),h.return=g,h):(h=s(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Od(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zl:return m=Ni(h.type,h.key,h.props,null,g.mode,m),m.ref=Ks(g,null,h),m.return=g,m;case Fo:return h=Dd(h,g.mode,m),h.return=g,h;case fr:var S=h._init;return p(g,S(h._payload),m)}if(aa(h)||Us(h))return h=io(h,g.mode,m,null),h.return=g,h;Ql(g,h)}return null}function f(g,h,m,S){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(g,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zl:return m.key===C?c(g,h,m,S):null;case Fo:return m.key===C?d(g,h,m,S):null;case fr:return C=m._init,f(g,h,C(m._payload),S)}if(aa(m)||Us(m))return C!==null?null:u(g,h,m,S,null);Ql(g,m)}return null}function b(g,h,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,i(h,g,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zl:return g=g.get(S.key===null?m:S.key)||null,c(h,g,S,C);case Fo:return g=g.get(S.key===null?m:S.key)||null,d(h,g,S,C);case fr:var x=S._init;return b(g,h,m,x(S._payload),C)}if(aa(S)||Us(S))return g=g.get(m)||null,u(h,g,S,C,null);Ql(h,S)}return null}function j(g,h,m,S){for(var C=null,x=null,_=h,k=h=0,N=null;_!==null&&k<m.length;k++){_.index>k?(N=_,_=null):N=_.sibling;var O=f(g,_,m[k],S);if(O===null){_===null&&(_=N);break}e&&_&&O.alternate===null&&t(g,_),h=a(O,h,k),x===null?C=O:x.sibling=O,x=O,_=N}if(k===m.length)return n(g,_),Ae&&Jr(g,k),C;if(_===null){for(;k<m.length;k++)_=p(g,m[k],S),_!==null&&(h=a(_,h,k),x===null?C=_:x.sibling=_,x=_);return Ae&&Jr(g,k),C}for(_=o(g,_);k<m.length;k++)N=b(_,g,k,m[k],S),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?k:N.key),h=a(N,h,k),x===null?C=N:x.sibling=N,x=N);return e&&_.forEach(function(L){return t(g,L)}),Ae&&Jr(g,k),C}function y(g,h,m,S){var C=Us(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var x=C=null,_=h,k=h=0,N=null,O=m.next();_!==null&&!O.done;k++,O=m.next()){_.index>k?(N=_,_=null):N=_.sibling;var L=f(g,_,O.value,S);if(L===null){_===null&&(_=N);break}e&&_&&L.alternate===null&&t(g,_),h=a(L,h,k),x===null?C=L:x.sibling=L,x=L,_=N}if(O.done)return n(g,_),Ae&&Jr(g,k),C;if(_===null){for(;!O.done;k++,O=m.next())O=p(g,O.value,S),O!==null&&(h=a(O,h,k),x===null?C=O:x.sibling=O,x=O);return Ae&&Jr(g,k),C}for(_=o(g,_);!O.done;k++,O=m.next())O=b(_,g,k,O.value,S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?k:O.key),h=a(O,h,k),x===null?C=O:x.sibling=O,x=O);return e&&_.forEach(function(U){return t(g,U)}),Ae&&Jr(g,k),C}function w(g,h,m,S){if(typeof m=="object"&&m!==null&&m.type===Uo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zl:e:{for(var C=m.key,x=h;x!==null;){if(x.key===C){if(C=m.type,C===Uo){if(x.tag===7){n(g,x.sibling),h=s(x,m.props.children),h.return=g,g=h;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fr&&Qm(C)===x.type){n(g,x.sibling),h=s(x,m.props),h.ref=Ks(g,x,m),h.return=g,g=h;break e}n(g,x);break}else t(g,x);x=x.sibling}m.type===Uo?(h=io(m.props.children,g.mode,S,m.key),h.return=g,g=h):(S=Ni(m.type,m.key,m.props,null,g.mode,S),S.ref=Ks(g,h,m),S.return=g,g=S)}return l(g);case Fo:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=s(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Dd(m,g.mode,S),h.return=g,g=h}return l(g);case fr:return x=m._init,w(g,h,x(m._payload),S)}if(aa(m))return j(g,h,m,S);if(Us(m))return y(g,h,m,S);Ql(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=s(h,m),h.return=g,g=h):(n(g,h),h=Od(m,g.mode,S),h.return=g,g=h),l(g)):n(g,h)}return w}var fs=fg(!0),xg=fg(!1),il={},Ln=Mr(il),Ha=Mr(il),Va=Mr(il);function oo(e){if(e===il)throw Error(A(174));return e}function Up(e,t){switch(ke(Va,t),ke(Ha,e),ke(Ln,il),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pu(t,e)}Oe(Ln),ke(Ln,t)}function xs(){Oe(Ln),Oe(Ha),Oe(Va)}function gg(e){oo(Va.current);var t=oo(Ln.current),n=pu(t,e.type);t!==n&&(ke(Ha,e),ke(Ln,n))}function Hp(e){Ha.current===e&&(Oe(Ln),Oe(Ha))}var Ie=Mr(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wd=[];function Vp(){for(var e=0;e<wd.length;e++)wd[e]._workInProgressVersionPrimary=null;wd.length=0}var _i=rr.ReactCurrentDispatcher,Td=rr.ReactCurrentBatchConfig,ho=0,ze=null,qe=null,nt=null,Xi=!1,ya=!1,Wa=0,n8=0;function pt(){throw Error(A(321))}function Wp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Zp(e,t,n,o,s,a){if(ho=a,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?a8:l8,e=n(o,s),ya){a=0;do{if(ya=!1,Wa=0,25<=a)throw Error(A(301));a+=1,nt=qe=null,t.updateQueue=null,_i.current=i8,e=n(o,s)}while(ya)}if(_i.current=Ji,t=qe!==null&&qe.next!==null,ho=0,nt=qe=ze=null,Xi=!1,t)throw Error(A(300));return e}function Kp(){var e=Wa!==0;return Wa=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?ze.memoizedState=nt=e:nt=nt.next=e,nt}function en(){if(qe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=nt===null?ze.memoizedState:nt.next;if(t!==null)nt=t,qe=e;else{if(e===null)throw Error(A(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},nt===null?ze.memoizedState=nt=e:nt=nt.next=e}return nt}function Za(e,t){return typeof t=="function"?t(e):t}function Ed(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=qe,s=o.baseQueue,a=n.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}o.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,o=o.baseState;var i=l=null,c=null,d=a;do{var u=d.lane;if((ho&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,ze.lanes|=u,mo|=u}d=d.next}while(d!==null&&d!==a);c===null?l=o:c.next=i,gn(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do a=s.lane,ze.lanes|=a,mo|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kd(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);gn(a,t.memoizedState)||(Ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function vg(){}function bg(e,t){var n=ze,o=en(),s=t(),a=!gn(o.memoizedState,s);if(a&&(o.memoizedState=s,Ot=!0),o=o.queue,Yp(Sg.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,yg.bind(null,n,o,s,t),void 0,null),ot===null)throw Error(A(349));ho&30||jg(n,t,s)}return s}function jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yg(e,t,n,o){t.value=n,t.getSnapshot=o,Cg(t)&&_g(e)}function Sg(e,t,n){return n(function(){Cg(t)&&_g(e)})}function Cg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function _g(e){var t=Xn(e,1);t!==null&&xn(t,e,1,-1)}function Xm(e){var t=En();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},t.queue=e,e=e.dispatch=s8.bind(null,ze,e),[t.memoizedState,e]}function Ka(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function wg(){return en().memoizedState}function wi(e,t,n,o){var s=En();ze.flags|=e,s.memoizedState=Ka(1|t,n,void 0,o===void 0?null:o)}function wc(e,t,n,o){var s=en();o=o===void 0?null:o;var a=void 0;if(qe!==null){var l=qe.memoizedState;if(a=l.destroy,o!==null&&Wp(o,l.deps)){s.memoizedState=Ka(t,n,a,o);return}}ze.flags|=e,s.memoizedState=Ka(1|t,n,a,o)}function Jm(e,t){return wi(8390656,8,e,t)}function Yp(e,t){return wc(2048,8,e,t)}function Tg(e,t){return wc(4,2,e,t)}function Eg(e,t){return wc(4,4,e,t)}function kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ng(e,t,n){return n=n!=null?n.concat([e]):null,wc(4,4,kg.bind(null,t,e),n)}function Gp(){}function Rg(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Wp(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Og(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Wp(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Dg(e,t,n){return ho&21?(gn(n,t)||(n=$x(),ze.lanes|=n,mo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function r8(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var o=Td.transition;Td.transition={};try{e(!1),t()}finally{_e=n,Td.transition=o}}function Lg(){return en().memoizedState}function o8(e,t,n){var o=kr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Bg(e))$g(t,n);else if(n=ug(e,t,n,o),n!==null){var s=jt();xn(n,e,o,s),Ag(n,t,o)}}function s8(e,t,n){var o=kr(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bg(e))$g(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,i=a(l,n);if(s.hasEagerState=!0,s.eagerState=i,gn(i,l)){var c=t.interleaved;c===null?(s.next=s,zp(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=ug(e,t,s,o),n!==null&&(s=jt(),xn(n,e,o,s),Ag(n,t,o))}}function Bg(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function $g(e,t){ya=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ag(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Tp(e,n)}}var Ji={readContext:Jt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},a8={readContext:Jt,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Jm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wi(4194308,4,kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var n=En();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=En();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=o8.bind(null,ze,e),[o.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:Xm,useDebugValue:Gp,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Xm(!1),t=e[0];return e=r8.bind(null,e[1]),En().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ze,s=En();if(Ae){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ot===null)throw Error(A(349));ho&30||jg(o,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Jm(Sg.bind(null,o,a,e),[e]),o.flags|=2048,Ka(9,yg.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=En(),t=ot.identifierPrefix;if(Ae){var n=Kn,o=Zn;n=(o&~(1<<32-fn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l8={readContext:Jt,useCallback:Rg,useContext:Jt,useEffect:Yp,useImperativeHandle:Ng,useInsertionEffect:Tg,useLayoutEffect:Eg,useMemo:Og,useReducer:Ed,useRef:wg,useState:function(){return Ed(Za)},useDebugValue:Gp,useDeferredValue:function(e){var t=en();return Dg(t,qe.memoizedState,e)},useTransition:function(){var e=Ed(Za)[0],t=en().memoizedState;return[e,t]},useMutableSource:vg,useSyncExternalStore:bg,useId:Lg,unstable_isNewReconciler:!1},i8={readContext:Jt,useCallback:Rg,useContext:Jt,useEffect:Yp,useImperativeHandle:Ng,useInsertionEffect:Tg,useLayoutEffect:Eg,useMemo:Og,useReducer:kd,useRef:wg,useState:function(){return kd(Za)},useDebugValue:Gp,useDeferredValue:function(e){var t=en();return qe===null?t.memoizedState=e:Dg(t,qe.memoizedState,e)},useTransition:function(){var e=kd(Za)[0],t=en().memoizedState;return[e,t]},useMutableSource:vg,useSyncExternalStore:bg,useId:Lg,unstable_isNewReconciler:!1};function gs(e,t){try{var n="",o=t;do n+=A6(o),o=o.return;while(o);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Nd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c8=typeof WeakMap=="function"?WeakMap:Map;function Mg(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){tc||(tc=!0,Wu=o),$u(e,t)},n}function Pg(e,t,n){n=Yn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){$u(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$u(e,t),typeof o!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ef(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new c8;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=C8.bind(null,e,t,n),t.then(e,e))}function tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nf(e,t,n,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,Tr(n,t,1))),n.lanes|=1),e)}var d8=rr.ReactCurrentOwner,Ot=!1;function bt(e,t,n,o){t.child=e===null?xg(t,null,n,o):fs(t,e.child,n,o)}function rf(e,t,n,o,s){n=n.render;var a=t.ref;return is(t,s),o=Zp(e,t,n,o,a,s),n=Kp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Jn(e,t,s)):(Ae&&n&&Bp(t),t.flags|=1,bt(e,t,o,s),t.child)}function of(e,t,n,o,s){if(e===null){var a=n.type;return typeof a=="function"&&!rh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ig(e,t,a,o,s)):(e=Ni(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(l,o)&&e.ref===t.ref)return Jn(e,t,s)}return t.flags|=1,e=Nr(a,o),e.ref=t.ref,e.return=t,t.child=e}function Ig(e,t,n,o,s){if(e!==null){var a=e.memoizedProps;if(Ia(a,o)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=o=a,(e.lanes&s)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Jn(e,t,s)}return Au(e,t,n,o,s)}function zg(e,t,n){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Xo,Mt),Mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Xo,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,ke(Xo,Mt),Mt|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,ke(Xo,Mt),Mt|=o;return bt(e,t,s,n),t.child}function Fg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Au(e,t,n,o,s){var a=Lt(n)?uo:ft.current;return a=hs(t,a),is(t,s),n=Zp(e,t,n,o,a,s),o=Kp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Jn(e,t,s)):(Ae&&o&&Bp(t),t.flags|=1,bt(e,t,n,s),t.child)}function sf(e,t,n,o,s){if(Lt(n)){var a=!0;Wi(t)}else a=!1;if(is(t,s),t.stateNode===null)Ti(e,t),mg(t,n,o),Bu(t,n,o,s),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Jt(d):(d=Lt(n)?uo:ft.current,d=hs(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&qm(t,l,o,d),xr=!1;var f=t.memoizedState;l.state=f,qi(t,o,l,s),c=t.memoizedState,i!==o||f!==c||Dt.current||xr?(typeof u=="function"&&(Lu(t,n,u,o),c=t.memoizedState),(i=xr||Gm(t,n,i,o,f,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,pg(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:un(t.type,i),l.props=d,p=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=Lt(n)?uo:ft.current,c=hs(t,c));var b=n.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||f!==c)&&qm(t,l,o,c),xr=!1,f=t.memoizedState,l.state=f,qi(t,o,l,s);var j=t.memoizedState;i!==p||f!==j||Dt.current||xr?(typeof b=="function"&&(Lu(t,n,b,o),j=t.memoizedState),(d=xr||Gm(t,n,d,o,f,j,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,j,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=j),l.props=o,l.state=j,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Mu(e,t,n,o,a,s)}function Mu(e,t,n,o,s,a){Fg(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return s&&Vm(t,n,!1),Jn(e,t,a);o=t.stateNode,d8.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=fs(t,e.child,null,a),t.child=fs(t,null,i,a)):bt(e,t,i,a),t.memoizedState=o.state,s&&Vm(t,n,!0),t.child}function Ug(e){var t=e.stateNode;t.pendingContext?Hm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hm(e,t.context,!1),Up(e,t.containerInfo)}function af(e,t,n,o,s){return ms(),Ap(s),t.flags|=256,bt(e,t,n,o),t.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hg(e,t,n){var o=t.pendingProps,s=Ie.current,a=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Ie,s&1),e===null)return Ou(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=kc(l,o,0,null),e=io(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Iu(n),t.memoizedState=Pu,e):qp(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return u8(e,t,l,o,i,s,n);if(a){a=o.fallback,l=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Nr(s,c),o.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=Nr(i,a):(a=io(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=e.child.memoizedState,l=l===null?Iu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Pu,o}return a=e.child,e=a.sibling,o=Nr(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function qp(e,t){return t=kc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xl(e,t,n,o){return o!==null&&Ap(o),fs(t,e.child,null,n),e=qp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u8(e,t,n,o,s,a,l){if(n)return t.flags&256?(t.flags&=-257,o=Nd(Error(A(422))),Xl(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=kc({mode:"visible",children:o.children},s,0,null),a=io(a,s,l,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&fs(t,e.child,null,l),t.child.memoizedState=Iu(l),t.memoizedState=Pu,a);if(!(t.mode&1))return Xl(e,t,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var i=o.dgst;return o=i,a=Error(A(419)),o=Nd(a,o,void 0),Xl(e,t,l,o)}if(i=(l&e.childLanes)!==0,Ot||i){if(o=ot,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Xn(e,s),xn(o,e,s,-1))}return nh(),o=Nd(Error(A(421))),Xl(e,t,l,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=_8.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,It=wr(s.nextSibling),zt=t,Ae=!0,mn=null,e!==null&&(Yt[Gt++]=Zn,Yt[Gt++]=Kn,Yt[Gt++]=po,Zn=e.id,Kn=e.overflow,po=t),t=qp(t,o.children),t.flags|=4096,t)}function lf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Du(e.return,t,n)}function Rd(e,t,n,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=s)}function Vg(e,t,n){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(bt(e,t,o.children,n),o=Ie.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,n,t);else if(e.tag===19)lf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Ie,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Rd(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Qi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Rd(t,!0,n,null,a);break;case"together":Rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Nr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p8(e,t,n){switch(t.tag){case 3:Ug(t),ms();break;case 5:gg(t);break;case 1:Lt(t.type)&&Wi(t);break;case 4:Up(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;ke(Yi,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?Hg(e,t,n):(ke(Ie,Ie.current&1),e=Jn(e,t,n),e!==null?e.sibling:null);ke(Ie,Ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Vg(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Ie,Ie.current),o)break;return null;case 22:case 23:return t.lanes=0,zg(e,t,n)}return Jn(e,t,n)}var Wg,zu,Zg,Kg;Wg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};Zg=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,oo(Ln.current);var a=null;switch(n){case"input":s=iu(e,s),o=iu(e,o),a=[];break;case"select":s=Fe({},s,{value:void 0}),o=Fe({},o,{value:void 0}),a=[];break;case"textarea":s=uu(e,s),o=uu(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Hi)}hu(n,o);var l;n=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var i=s[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Da.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in o){var c=o[d];if(i=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Da.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Re("scroll",e),a||i===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Kg=function(e,t,n,o){n!==o&&(t.flags|=4)};function Ys(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function h8(e,t,n){var o=t.pendingProps;switch($p(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Lt(t.type)&&Vi(),ht(t),null;case 3:return o=t.stateNode,xs(),Oe(Dt),Oe(ft),Vp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ql(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mn!==null&&(Yu(mn),mn=null))),zu(e,t),ht(t),null;case 5:Hp(t);var s=oo(Va.current);if(n=t.type,e!==null&&t.stateNode!=null)Zg(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return ht(t),null}if(e=oo(Ln.current),ql(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Rn]=t,o[Ua]=a,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<ia.length;s++)Re(ia[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":xm(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":vm(o,a),Re("invalid",o)}hu(n,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?o.textContent!==i&&(a.suppressHydrationWarning!==!0&&Gl(o.textContent,i,e),s=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Gl(o.textContent,i,e),s=["children",""+i]):Da.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Re("scroll",o)}switch(n){case"input":Fl(o),gm(o,a,!0);break;case"textarea":Fl(o),bm(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Hi)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Rn]=t,e[Ua]=o,Wg(e,t,!1,!1),t.stateNode=e;e:{switch(l=mu(n,o),n){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<ia.length;s++)Re(ia[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":xm(e,o),s=iu(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Fe({},o,{value:void 0}),Re("invalid",e);break;case"textarea":vm(e,o),s=uu(e,o),Re("invalid",e);break;default:s=o}hu(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?Cx(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yx(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&La(e,c):typeof c=="number"&&La(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Da.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Re("scroll",e):c!=null&&jp(e,a,c,l))}switch(n){case"input":Fl(e),gm(e,o,!1);break;case"textarea":Fl(e),bm(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Rr(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?os(e,!!o.multiple,a,!1):o.defaultValue!=null&&os(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Hi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)Kg(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(n=oo(Va.current),oo(Ln.current),ql(t)){if(o=t.stateNode,n=t.memoizedProps,o[Rn]=t,(a=o.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:Gl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gl(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Rn]=t,t.stateNode=o}return ht(t),null;case 13:if(Oe(Ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&It!==null&&t.mode&1&&!(t.flags&128))dg(),ms(),t.flags|=98560,a=!1;else if(a=ql(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[Rn]=t}else ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ht(t),a=!1}else mn!==null&&(Yu(mn),mn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?Xe===0&&(Xe=3):nh())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return xs(),zu(e,t),e===null&&za(t.stateNode.containerInfo),ht(t),null;case 10:return Ip(t.type._context),ht(t),null;case 17:return Lt(t.type)&&Vi(),ht(t),null;case 19:if(Oe(Ie),a=t.memoizedState,a===null)return ht(t),null;if(o=(t.flags&128)!==0,l=a.rendering,l===null)if(o)Ys(a,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Qi(e),l!==null){for(t.flags|=128,Ys(a,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ze()>vs&&(t.flags|=128,o=!0,Ys(a,!1),t.lanes=4194304)}else{if(!o)if(e=Qi(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ys(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ae)return ht(t),null}else 2*Ze()-a.renderingStartTime>vs&&n!==1073741824&&(t.flags|=128,o=!0,Ys(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ze(),t.sibling=null,n=Ie.current,ke(Ie,o?n&1|2:n&1),t):(ht(t),null);case 22:case 23:return th(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Mt&1073741824&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function m8(e,t){switch($p(t),t.tag){case 1:return Lt(t.type)&&Vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs(),Oe(Dt),Oe(ft),Vp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hp(t),null;case 13:if(Oe(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Ie),null;case 4:return xs(),null;case 10:return Ip(t.type._context),null;case 22:case 23:return th(),null;case 24:return null;default:return null}}var Jl=!1,mt=!1,f8=typeof WeakSet=="function"?WeakSet:Set,H=null;function Qo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){He(e,t,o)}else n.current=null}function Fu(e,t,n){try{n()}catch(o){He(e,t,o)}}var cf=!1;function x8(e,t){if(_u=zi,e=Qx(),Lp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var b;p!==n||s!==0&&p.nodeType!==3||(i=l+s),p!==a||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break t;if(f===n&&++d===s&&(i=l),f===a&&++u===o&&(c=l),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},zi=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,w=j.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:un(t.type,y),w);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){He(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return j=cf,cf=!1,j}function Sa(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Fu(t,n,a)}s=s.next}while(s!==o)}}function Tc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yg(e){var t=e.alternate;t!==null&&(e.alternate=null,Yg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[Ua],delete t[ku],delete t[Xj],delete t[Jj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gg(e){return e.tag===5||e.tag===3||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hi));else if(o!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Vu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}var st=null,pn=!1;function pr(e,t,n){for(n=n.child;n!==null;)qg(e,t,n),n=n.sibling}function qg(e,t,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:mt||Qo(n,t);case 6:var o=st,s=pn;st=null,pr(e,t,n),st=o,pn=s,st!==null&&(pn?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(pn?(e=st,n=n.stateNode,e.nodeType===8?Cd(e.parentNode,n):e.nodeType===1&&Cd(e,n),Ma(e)):Cd(st,n.stateNode));break;case 4:o=st,s=pn,st=n.stateNode.containerInfo,pn=!0,pr(e,t,n),st=o,pn=s;break;case 0:case 11:case 14:case 15:if(!mt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Fu(n,t,l),s=s.next}while(s!==o)}pr(e,t,n);break;case 1:if(!mt&&(Qo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){He(n,t,i)}pr(e,t,n);break;case 21:pr(e,t,n);break;case 22:n.mode&1?(mt=(o=mt)||n.memoizedState!==null,pr(e,t,n),mt=o):pr(e,t,n);break;default:pr(e,t,n)}}function uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f8),t.forEach(function(o){var s=w8.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function dn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var a=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:st=i.stateNode,pn=!1;break e;case 3:st=i.stateNode.containerInfo,pn=!0;break e;case 4:st=i.stateNode.containerInfo,pn=!0;break e}i=i.return}if(st===null)throw Error(A(160));qg(a,l,s),st=null,pn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){He(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qg(t,e),t=t.sibling}function Qg(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),Tn(e),o&4){try{Sa(3,e,e.return),Tc(3,e)}catch(y){He(e,e.return,y)}try{Sa(5,e,e.return)}catch(y){He(e,e.return,y)}}break;case 1:dn(t,e),Tn(e),o&512&&n!==null&&Qo(n,n.return);break;case 5:if(dn(t,e),Tn(e),o&512&&n!==null&&Qo(n,n.return),e.flags&32){var s=e.stateNode;try{La(s,"")}catch(y){He(e,e.return,y)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&vx(s,a),mu(i,l);var d=mu(i,a);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?Cx(s,p):u==="dangerouslySetInnerHTML"?yx(s,p):u==="children"?La(s,p):jp(s,u,p,d)}switch(i){case"input":cu(s,a);break;case"textarea":bx(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?os(s,!!a.multiple,b,!1):f!==!!a.multiple&&(a.defaultValue!=null?os(s,!!a.multiple,a.defaultValue,!0):os(s,!!a.multiple,a.multiple?[]:"",!1))}s[Ua]=a}catch(y){He(e,e.return,y)}}break;case 6:if(dn(t,e),Tn(e),o&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(y){He(e,e.return,y)}}break;case 3:if(dn(t,e),Tn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(t.containerInfo)}catch(y){He(e,e.return,y)}break;case 4:dn(t,e),Tn(e);break;case 13:dn(t,e),Tn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Jp=Ze())),o&4&&uf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(mt=(d=mt)||u,dn(t,e),mt=d):dn(t,e),Tn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(p=H=u;H!==null;){switch(f=H,b=f.child,f.tag){case 0:case 11:case 14:case 15:Sa(4,f,f.return);break;case 1:Qo(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(y){He(o,n,y)}}break;case 5:Qo(f,f.return);break;case 22:if(f.memoizedState!==null){hf(p);continue}}b!==null?(b.return=f,H=b):hf(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{s=p.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Sx("display",l))}catch(y){He(e,e.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){He(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),Tn(e),o&4&&uf(e);break;case 21:break;default:dn(t,e),Tn(e)}}function Tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gg(n)){var o=n;break e}n=n.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(La(s,""),o.flags&=-33);var a=df(e);Vu(e,a,s);break;case 3:case 4:var l=o.stateNode.containerInfo,i=df(e);Hu(e,i,l);break;default:throw Error(A(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g8(e,t,n){H=e,Xg(e)}function Xg(e,t,n){for(var o=(e.mode&1)!==0;H!==null;){var s=H,a=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Jl;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||mt;i=Jl;var d=mt;if(Jl=l,(mt=c)&&!d)for(H=s;H!==null;)l=H,c=l.child,l.tag===22&&l.memoizedState!==null?mf(s):c!==null?(c.return=l,H=c):mf(s);for(;a!==null;)H=a,Xg(a),a=a.sibling;H=s,Jl=i,mt=d}pf(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,H=a):pf(e)}}function pf(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||Tc(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!mt)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ym(t,a,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ym(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}mt||t.flags&512&&Uu(t)}catch(f){He(t,t.return,f)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function hf(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function mf(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(c){He(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(c){He(t,s,c)}}var a=t.return;try{Uu(t)}catch(c){He(t,a,c)}break;case 5:var l=t.return;try{Uu(t)}catch(c){He(t,l,c)}}}catch(c){He(t,t.return,c)}if(t===e){H=null;break}var i=t.sibling;if(i!==null){i.return=t.return,H=i;break}H=t.return}}var v8=Math.ceil,ec=rr.ReactCurrentDispatcher,Qp=rr.ReactCurrentOwner,Qt=rr.ReactCurrentBatchConfig,be=0,ot=null,Ye=null,it=0,Mt=0,Xo=Mr(0),Xe=0,Ya=null,mo=0,Ec=0,Xp=0,Ca=null,Rt=null,Jp=0,vs=1/0,Fn=null,tc=!1,Wu=null,Er=null,ei=!1,yr=null,nc=0,_a=0,Zu=null,Ei=-1,ki=0;function jt(){return be&6?Ze():Ei!==-1?Ei:Ei=Ze()}function kr(e){return e.mode&1?be&2&&it!==0?it&-it:t8.transition!==null?(ki===0&&(ki=$x()),ki):(e=_e,e!==0||(e=window.event,e=e===void 0?16:Ux(e.type)),e):1}function xn(e,t,n,o){if(50<_a)throw _a=0,Zu=null,Error(A(185));sl(e,n,o),(!(be&2)||e!==ot)&&(e===ot&&(!(be&2)&&(Ec|=n),Xe===4&&br(e,it)),Bt(e,o),n===1&&be===0&&!(t.mode&1)&&(vs=Ze()+500,Cc&&Pr()))}function Bt(e,t){var n=e.callbackNode;tj(e,t);var o=Ii(e,e===ot?it:0);if(o===0)n!==null&&Sm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Sm(n),t===1)e.tag===0?e8(ff.bind(null,e)):lg(ff.bind(null,e)),qj(function(){!(be&6)&&Pr()}),n=null;else{switch(Ax(o)){case 1:n=wp;break;case 4:n=Lx;break;case 16:n=Pi;break;case 536870912:n=Bx;break;default:n=Pi}n=a2(n,Jg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jg(e,t){if(Ei=-1,ki=0,be&6)throw Error(A(327));var n=e.callbackNode;if(cs()&&e.callbackNode!==n)return null;var o=Ii(e,e===ot?it:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=rc(e,o);else{t=o;var s=be;be|=2;var a=t2();(ot!==e||it!==t)&&(Fn=null,vs=Ze()+500,lo(e,t));do try{y8();break}catch(i){e2(e,i)}while(1);Pp(),ec.current=a,be=s,Ye!==null?t=0:(ot=null,it=0,t=Xe)}if(t!==0){if(t===2&&(s=bu(e),s!==0&&(o=s,t=Ku(e,s))),t===1)throw n=Ya,lo(e,0),br(e,o),Bt(e,Ze()),n;if(t===6)br(e,o);else{if(s=e.current.alternate,!(o&30)&&!b8(s)&&(t=rc(e,o),t===2&&(a=bu(e),a!==0&&(o=a,t=Ku(e,a))),t===1))throw n=Ya,lo(e,0),br(e,o),Bt(e,Ze()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:eo(e,Rt,Fn);break;case 3:if(br(e,o),(o&130023424)===o&&(t=Jp+500-Ze(),10<t)){if(Ii(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){jt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Eu(eo.bind(null,e,Rt,Fn),t);break}eo(e,Rt,Fn);break;case 4:if(br(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var l=31-fn(o);a=1<<l,l=t[l],l>s&&(s=l),o&=~a}if(o=s,o=Ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*v8(o/1960))-o,10<o){e.timeoutHandle=Eu(eo.bind(null,e,Rt,Fn),o);break}eo(e,Rt,Fn);break;case 5:eo(e,Rt,Fn);break;default:throw Error(A(329))}}}return Bt(e,Ze()),e.callbackNode===n?Jg.bind(null,e):null}function Ku(e,t){var n=Ca;return e.current.memoizedState.isDehydrated&&(lo(e,t).flags|=256),e=rc(e,t),e!==2&&(t=Rt,Rt=n,t!==null&&Yu(t)),e}function Yu(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function b8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],a=s.getSnapshot;s=s.value;try{if(!gn(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~Xp,t&=~Ec,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-fn(t),o=1<<n;e[n]=-1,t&=~o}}function ff(e){if(be&6)throw Error(A(327));cs();var t=Ii(e,0);if(!(t&1))return Bt(e,Ze()),null;var n=rc(e,t);if(e.tag!==0&&n===2){var o=bu(e);o!==0&&(t=o,n=Ku(e,o))}if(n===1)throw n=Ya,lo(e,0),br(e,t),Bt(e,Ze()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,eo(e,Rt,Fn),Bt(e,Ze()),null}function eh(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(vs=Ze()+500,Cc&&Pr())}}function fo(e){yr!==null&&yr.tag===0&&!(be&6)&&cs();var t=be;be|=1;var n=Qt.transition,o=_e;try{if(Qt.transition=null,_e=1,e)return e()}finally{_e=o,Qt.transition=n,be=t,!(be&6)&&Pr()}}function th(){Mt=Xo.current,Oe(Xo)}function lo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gj(n)),Ye!==null)for(n=Ye.return;n!==null;){var o=n;switch($p(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Vi();break;case 3:xs(),Oe(Dt),Oe(ft),Vp();break;case 5:Hp(o);break;case 4:xs();break;case 13:Oe(Ie);break;case 19:Oe(Ie);break;case 10:Ip(o.type._context);break;case 22:case 23:th()}n=n.return}if(ot=e,Ye=e=Nr(e.current,null),it=Mt=t,Xe=0,Ya=null,Xp=Ec=mo=0,Rt=Ca=null,ro!==null){for(t=0;t<ro.length;t++)if(n=ro[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,a=n.pending;if(a!==null){var l=a.next;a.next=s,o.next=l}n.pending=o}ro=null}return e}function e2(e,t){do{var n=Ye;try{if(Pp(),_i.current=Ji,Xi){for(var o=ze.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Xi=!1}if(ho=0,nt=qe=ze=null,ya=!1,Wa=0,Qp.current=null,n===null||n.return===null){Xe=1,Ya=t,Ye=null;break}e:{var a=e,l=n.return,i=n,c=t;if(t=it,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=tf(l);if(b!==null){b.flags&=-257,nf(b,l,i,a,t),b.mode&1&&ef(a,d,t),t=b,c=d;var j=t.updateQueue;if(j===null){var y=new Set;y.add(c),t.updateQueue=y}else j.add(c);break e}else{if(!(t&1)){ef(a,d,t),nh();break e}c=Error(A(426))}}else if(Ae&&i.mode&1){var w=tf(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),nf(w,l,i,a,t),Ap(gs(c,i));break e}}a=c=gs(c,i),Xe!==4&&(Xe=2),Ca===null?Ca=[a]:Ca.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Mg(a,c,t);Km(a,g);break e;case 1:i=c;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Er===null||!Er.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Pg(a,i,t);Km(a,S);break e}}a=a.return}while(a!==null)}r2(n)}catch(C){t=C,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function t2(){var e=ec.current;return ec.current=Ji,e===null?Ji:e}function nh(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),ot===null||!(mo&268435455)&&!(Ec&268435455)||br(ot,it)}function rc(e,t){var n=be;be|=2;var o=t2();(ot!==e||it!==t)&&(Fn=null,lo(e,t));do try{j8();break}catch(s){e2(e,s)}while(1);if(Pp(),be=n,ec.current=o,Ye!==null)throw Error(A(261));return ot=null,it=0,Xe}function j8(){for(;Ye!==null;)n2(Ye)}function y8(){for(;Ye!==null&&!Z6();)n2(Ye)}function n2(e){var t=s2(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?r2(e):Ye=t,Qp.current=null}function r2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=m8(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ye=null;return}}else if(n=h8(n,t,Mt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Xe===0&&(Xe=5)}function eo(e,t,n){var o=_e,s=Qt.transition;try{Qt.transition=null,_e=1,S8(e,t,n,o)}finally{Qt.transition=s,_e=o}return null}function S8(e,t,n,o){do cs();while(yr!==null);if(be&6)throw Error(A(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nj(e,a),e===ot&&(Ye=ot=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ei||(ei=!0,a2(Pi,function(){return cs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qt.transition,Qt.transition=null;var l=_e;_e=1;var i=be;be|=4,Qp.current=null,x8(e,n),Qg(n,e),Uj(wu),zi=!!_u,wu=_u=null,e.current=n,g8(n),K6(),be=i,_e=l,Qt.transition=a}else e.current=n;if(ei&&(ei=!1,yr=e,nc=s),a=e.pendingLanes,a===0&&(Er=null),q6(n.stateNode),Bt(e,Ze()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(tc)throw tc=!1,e=Wu,Wu=null,e;return nc&1&&e.tag!==0&&cs(),a=e.pendingLanes,a&1?e===Zu?_a++:(_a=0,Zu=e):_a=0,Pr(),null}function cs(){if(yr!==null){var e=Ax(nc),t=Qt.transition,n=_e;try{if(Qt.transition=null,_e=16>e?16:e,yr===null)var o=!1;else{if(e=yr,yr=null,nc=0,be&6)throw Error(A(331));var s=be;for(be|=4,H=e.current;H!==null;){var a=H,l=a.child;if(H.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Sa(8,u,a)}var p=u.child;if(p!==null)p.return=u,H=p;else for(;H!==null;){u=H;var f=u.sibling,b=u.return;if(Yg(u),u===d){H=null;break}if(f!==null){f.return=b,H=f;break}H=b}}}var j=a.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,H=l;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Sa(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,H=g;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){l=H;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,H=m;else e:for(l=h;H!==null;){if(i=H,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Tc(9,i)}}catch(C){He(i,i.return,C)}if(i===l){H=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,H=S;break e}H=i.return}}if(be=s,Pr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(vc,e)}catch{}o=!0}return o}finally{_e=n,Qt.transition=t}}return!1}function xf(e,t,n){t=gs(n,t),t=Mg(e,t,1),e=Tr(e,t,1),t=jt(),e!==null&&(sl(e,1,t),Bt(e,t))}function He(e,t,n){if(e.tag===3)xf(e,e,n);else for(;t!==null;){if(t.tag===3){xf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Er===null||!Er.has(o))){e=gs(n,e),e=Pg(t,e,1),t=Tr(t,e,1),e=jt(),t!==null&&(sl(t,1,e),Bt(t,e));break}}t=t.return}}function C8(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>Ze()-Jp?lo(e,0):Xp|=n),Bt(e,t)}function o2(e,t){t===0&&(e.mode&1?(t=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):t=1);var n=jt();e=Xn(e,t),e!==null&&(sl(e,t,n),Bt(e,n))}function _8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),o2(e,n)}function w8(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),o2(e,n)}var s2;s2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,p8(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,Ae&&t.flags&1048576&&ig(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ti(e,t),e=t.pendingProps;var s=hs(t,ft.current);is(t,n),s=Zp(null,t,o,e,s,n);var a=Kp();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(o)?(a=!0,Wi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fp(t),s.updater=_c,t.stateNode=s,s._reactInternals=t,Bu(t,o,e,n),t=Mu(null,t,o,!0,a,n)):(t.tag=0,Ae&&a&&Bp(t),bt(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=E8(o),e=un(o,e),s){case 0:t=Au(null,t,o,e,n);break e;case 1:t=sf(null,t,o,e,n);break e;case 11:t=rf(null,t,o,e,n);break e;case 14:t=of(null,t,o,un(o.type,e),n);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Au(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),sf(e,t,o,s,n);case 3:e:{if(Ug(t),e===null)throw Error(A(387));o=t.pendingProps,a=t.memoizedState,s=a.element,pg(e,t),qi(t,o,null,n);var l=t.memoizedState;if(o=l.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=gs(Error(A(423)),t),t=af(e,t,o,n,s);break e}else if(o!==s){s=gs(Error(A(424)),t),t=af(e,t,o,n,s);break e}else for(It=wr(t.stateNode.containerInfo.firstChild),zt=t,Ae=!0,mn=null,n=xg(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),o===s){t=Jn(e,t,n);break e}bt(e,t,o,n)}t=t.child}return t;case 5:return gg(t),e===null&&Ou(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,Tu(o,s)?l=null:a!==null&&Tu(o,a)&&(t.flags|=32),Fg(e,t),bt(e,t,l,n),t.child;case 6:return e===null&&Ou(t),null;case 13:return Hg(e,t,n);case 4:return Up(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=fs(t,null,o,n):bt(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),rf(e,t,o,s,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,ke(Yi,o._currentValue),o._currentValue=l,a!==null)if(gn(a.value,l)){if(a.children===s.children&&!Dt.current){t=Jn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(a.tag===1){c=Yn(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Du(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Du(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}bt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,is(t,n),s=Jt(s),o=o(s),t.flags|=1,bt(e,t,o,n),t.child;case 14:return o=t.type,s=un(o,t.pendingProps),s=un(o.type,s),of(e,t,o,s,n);case 15:return Ig(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Ti(e,t),t.tag=1,Lt(o)?(e=!0,Wi(t)):e=!1,is(t,n),mg(t,o,s),Bu(t,o,s,n),Mu(null,t,o,!0,e,n);case 19:return Vg(e,t,n);case 22:return zg(e,t,n)}throw Error(A(156,t.tag))};function a2(e,t){return Dx(e,t)}function T8(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,o){return new T8(e,t,n,o)}function rh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E8(e){if(typeof e=="function")return rh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sp)return 11;if(e===Cp)return 14}return 2}function Nr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,o,s,a){var l=2;if(o=e,typeof e=="function")rh(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Uo:return io(n.children,s,a,t);case yp:l=8,s|=8;break;case ou:return e=qt(12,n,t,s|2),e.elementType=ou,e.lanes=a,e;case su:return e=qt(13,n,t,s),e.elementType=su,e.lanes=a,e;case au:return e=qt(19,n,t,s),e.elementType=au,e.lanes=a,e;case fx:return kc(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hx:l=10;break e;case mx:l=9;break e;case Sp:l=11;break e;case Cp:l=14;break e;case fr:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=qt(l,n,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function io(e,t,n,o){return e=qt(7,e,o,t),e.lanes=n,e}function kc(e,t,n,o){return e=qt(22,e,o,t),e.elementType=fx,e.lanes=n,e.stateNode={isHidden:!1},e}function Od(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function Dd(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function k8(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function oh(e,t,n,o,s,a,l,i,c){return e=new k8(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(a),e}function N8(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function l2(e){if(!e)return Or;e=e._reactInternals;e:{if(jo(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Lt(n))return ag(e,n,t)}return t}function i2(e,t,n,o,s,a,l,i,c){return e=oh(n,o,!0,e,s,a,l,i,c),e.context=l2(null),n=e.current,o=jt(),s=kr(n),a=Yn(o,s),a.callback=t??null,Tr(n,a,s),e.current.lanes=s,sl(e,s,o),Bt(e,o),e}function Nc(e,t,n,o){var s=t.current,a=jt(),l=kr(s);return n=l2(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(a,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Tr(s,t,l),e!==null&&(xn(e,s,l,a),Ci(e,s,l)),l}function oc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sh(e,t){gf(e,t),(e=e.alternate)&&gf(e,t)}function R8(){return null}var c2=typeof reportError=="function"?reportError:function(e){console.error(e)};function ah(e){this._internalRoot=e}Rc.prototype.render=ah.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Nc(e,t,null,null)};Rc.prototype.unmount=ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fo(function(){Nc(null,e,null,null)}),t[Qn]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ix();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vr.length&&t!==0&&t<vr[n].priority;n++);vr.splice(n,0,e),n===0&&Fx(e)}};function lh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vf(){}function O8(e,t,n,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var d=oc(l);a.call(d)}}var l=i2(t,o,e,0,null,!1,!1,"",vf);return e._reactRootContainer=l,e[Qn]=l.current,za(e.nodeType===8?e.parentNode:e),fo(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var i=o;o=function(){var d=oc(c);i.call(d)}}var c=oh(e,0,!1,null,null,!1,!1,"",vf);return e._reactRootContainer=c,e[Qn]=c.current,za(e.nodeType===8?e.parentNode:e),fo(function(){Nc(t,c,n,o)}),c}function Dc(e,t,n,o,s){var a=n._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var i=s;s=function(){var c=oc(l);i.call(c)}}Nc(t,l,e,s)}else l=O8(n,t,e,s,o);return oc(l)}Mx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=la(t.pendingLanes);n!==0&&(Tp(t,n|1),Bt(t,Ze()),!(be&6)&&(vs=Ze()+500,Pr()))}break;case 13:fo(function(){var o=Xn(e,1);if(o!==null){var s=jt();xn(o,e,1,s)}}),sh(e,1)}};Ep=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var n=jt();xn(t,e,134217728,n)}sh(e,134217728)}};Px=function(e){if(e.tag===13){var t=kr(e),n=Xn(e,t);if(n!==null){var o=jt();xn(n,e,t,o)}sh(e,t)}};Ix=function(){return _e};zx=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}};xu=function(e,t,n){switch(t){case"input":if(cu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=Sc(o);if(!s)throw Error(A(90));gx(o),cu(o,s)}}}break;case"textarea":bx(e,n);break;case"select":t=n.value,t!=null&&os(e,!!n.multiple,t,!1)}};Tx=eh;Ex=fo;var D8={usingClientEntryPoint:!1,Events:[ll,Zo,Sc,_x,wx,eh]},Gs={findFiberByHostInstance:no,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},L8={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rx(e),e===null?null:e.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||R8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{vc=ti.inject(L8),Dn=ti}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D8;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(t))throw Error(A(200));return N8(e,t,null,n)};Ht.createRoot=function(e,t){if(!lh(e))throw Error(A(299));var n=!1,o="",s=c2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=oh(e,1,!1,null,null,n,!1,o,s),e[Qn]=t.current,za(e.nodeType===8?e.parentNode:e),new ah(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Rx(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return fo(e)};Ht.hydrate=function(e,t,n){if(!Oc(t))throw Error(A(200));return Dc(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!lh(e))throw Error(A(405));var o=n!=null&&n.hydratedSources||null,s=!1,a="",l=c2;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=i2(t,null,e,1,n??null,s,!1,a,l),e[Qn]=t.current,za(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Rc(t)};Ht.render=function(e,t,n){if(!Oc(t))throw Error(A(200));return Dc(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!Oc(e))throw Error(A(40));return e._reactRootContainer?(fo(function(){Dc(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};Ht.unstable_batchedUpdates=eh;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Oc(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Dc(e,t,n,!1,o)};Ht.version="18.2.0-next-9e3b772b8-20220608";function d2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d2)}catch(e){console.error(e)}}d2(),ix.exports=Ht;var Vn=ix.exports;const B8=nr(Vn),$8=Q1({__proto__:null,default:B8},[Vn]);var bf=Vn;nu.createRoot=bf.createRoot,nu.hydrateRoot=bf.hydrateRoot;function A8(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function M8(e,t){if(e==null)return{};var n=A8(e,t),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Gu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function P8(e){if(Array.isArray(e))return Gu(e)}function I8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function z8(e,t){if(e){if(typeof e=="string")return Gu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gu(e,t)}}function F8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U8(e){return P8(e)||I8(e)||z8(e)||F8()}function Ga(e){"@babel/helpers - typeof";return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ga(e)}function H8(e,t){if(Ga(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Ga(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function V8(e){var t=H8(e,"string");return Ga(t)=="symbol"?t:String(t)}function u2(e,t,n){return t=V8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qu(){return qu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qu.apply(this,arguments)}function jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Jo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jf(Object(n),!0).forEach(function(o){u2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function W8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Ld={};function Z8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Ld[t]||(Ld[t]=W8(e)),Ld[t]}function K8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(a){return a!=="token"}),s=Z8(o);return s.reduce(function(a,l){return Jo(Jo({},a),n[l])},t)}function yf(e){return e.join(" ")}function Y8(e,t){var n=0;return function(o){return n+=1,o.map(function(s,a){return p2({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function p2(e){var t=e.node,n=e.stylesheet,o=e.style,s=o===void 0?{}:o,a=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=Y8(n,a),f;if(!a)f=Jo(Jo({},i),{},{className:yf(i.className)});else{var b=Object.keys(n).reduce(function(g,h){return h.split(".").forEach(function(m){g.includes(m)||g.push(m)}),g},[]),j=i.className&&i.className.includes("token")?["token"]:[],y=i.className&&j.concat(i.className.filter(function(g){return!b.includes(g)}));f=Jo(Jo({},i),{},{className:yf(y)||void 0,style:K8(i.className,Object.assign({},i.style,s),n)})}var w=p(t.children);return V.createElement(d,qu({key:l},f),w)}}const G8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var q8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sf(Object(n),!0).forEach(function(o){u2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Q8=/\n/g;function X8(e){return e.match(Q8)}function J8(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(s,a){var l=a+n;return V.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function ey(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,s=o===void 0?{float:"left",paddingRight:"10px"}:o,a=e.numberStyle,l=a===void 0?{}:a,i=e.startingLineNumber;return V.createElement("code",{style:Object.assign({},n,s)},J8({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function ty(e){return"".concat(e.toString().length,".25em")}function h2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function m2(e,t,n){var o={display:"inline-block",minWidth:ty(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,a=Nn(Nn({},o),s);return a}function Ri(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,s=e.largestLineNumber,a=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,f=typeof i=="function"?i(n):i;if(f.className=d,n&&a){var b=m2(o,n,s);t.unshift(h2(n,b))}return p&u&&(f.style=Nn(Nn({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function f2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var s=e[o];if(s.type==="text")n.push(Ri({children:[s],className:U8(new Set(t))}));else if(s.children){var a=t.concat(s.properties.className);f2(s.children,a).forEach(function(l){return n.push(l)})}}return n}function ny(e,t,n,o,s,a,l,i,c){var d,u=f2(e.value),p=[],f=-1,b=0;function j(C,x){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Ri({children:C,lineNumber:x,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:s,lineProps:n,className:_,showLineNumbers:o,wrapLongLines:c})}function y(C,x){if(o&&x&&s){var _=m2(i,x,l);C.unshift(h2(x,_))}return C}function w(C,x){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||_.length>0?j(C,x,_):y(C,x)}for(var g=function(){var x=u[b],_=x.children[0].value,k=X8(_);if(k){var N=_.split(`
`);N.forEach(function(O,L){var U=o&&p.length+a,Z={type:"text",value:"".concat(O,`
`)};if(L===0){var te=u.slice(f+1,b).concat(Ri({children:[Z],className:x.properties.className})),we=w(te,U);p.push(we)}else if(L===N.length-1){var je=u[b+1]&&u[b+1].children&&u[b+1].children[0],ee={type:"text",value:"".concat(O)};if(je){var $=Ri({children:[ee],className:x.properties.className});u.splice(b+1,0,$)}else{var P=[ee],I=w(P,U,x.properties.className);p.push(I)}}else{var W=[Z],Y=w(W,U,x.properties.className);p.push(Y)}}),f=b}b++};b<u.length;)g();if(f!==u.length-1){var h=u.slice(f+1,u.length);if(h&&h.length){var m=o&&p.length+a,S=w(h,m);p.push(S)}}return t?p:(d=[]).concat.apply(d,p)}function ry(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(s,a){return p2({node:s,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(a)})})}function x2(e){return e&&typeof e.highlightAuto<"u"}function oy(e){var t=e.astGenerator,n=e.language,o=e.code,s=e.defaultCodeValue;if(x2(t)){var a=G8(t,n);return n==="text"?{value:s,language:"text"}:a?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:s}}catch{return{value:s}}}function sy(e,t){return function(o){var s=o.language,a=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:s?"language-".concat(s):void 0,style:Nn(Nn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(s,'"]')])}:u,f=o.useInlineStyles,b=f===void 0?!0:f,j=o.showLineNumbers,y=j===void 0?!1:j,w=o.showInlineLineNumbers,g=w===void 0?!0:w,h=o.startingLineNumber,m=h===void 0?1:h,S=o.lineNumberContainerStyle,C=o.lineNumberStyle,x=C===void 0?{}:C,_=o.wrapLines,k=o.wrapLongLines,N=k===void 0?!1:k,O=o.lineProps,L=O===void 0?{}:O,U=o.renderer,Z=o.PreTag,te=Z===void 0?"pre":Z,we=o.CodeTag,je=we===void 0?"code":we,ee=o.code,$=ee===void 0?(Array.isArray(a)?a[0]:a)||"":ee,P=o.astGenerator,I=M8(o,q8);P=P||e;var W=y?V.createElement(ey,{containerStyle:S,codeStyle:p.style||{},numberStyle:x,startingLineNumber:m,codeString:$}):null,Y=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Te=x2(P)?"hljs":"prismjs",de=b?Object.assign({},I,{style:Object.assign({},Y,d)}):Object.assign({},I,{className:I.className?"".concat(Te," ").concat(I.className):Te,style:Object.assign({},d)});if(N?p.style=Nn(Nn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Nn(Nn({},p.style),{},{whiteSpace:"pre"}),!P)return V.createElement(te,de,W,V.createElement(je,p,$));(_===void 0&&U||N)&&(_=!0),U=U||ry;var Se=[{type:"text",value:$}],ie=oy({astGenerator:P,language:s,code:$,defaultCodeValue:Se});ie.language===null&&(ie.value=Se);var Le=ie.value.length+m,dt=ny(ie,_,L,y,g,m,Le,x,N);return V.createElement(te,de,V.createElement(je,p,!g&&W,U({rows:dt,stylesheet:i,useInlineStyles:b})))}}var ay=iy,ly=Object.prototype.hasOwnProperty;function iy(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)ly.call(n,o)&&(e[o]=n[o])}return e}var g2=v2,ih=v2.prototype;ih.space=null;ih.normal={};ih.property={};function v2(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Cf=ay,cy=g2,dy=uy;function uy(e){for(var t=e.length,n=[],o=[],s=-1,a,l;++s<t;)a=e[s],n.push(a.property),o.push(a.normal),l=a.space;return new cy(Cf.apply(null,n),Cf.apply(null,o),l)}var ch=py;function py(e){return e.toLowerCase()}var b2=j2,nn=j2.prototype;nn.space=null;nn.attribute=null;nn.property=null;nn.boolean=!1;nn.booleanish=!1;nn.overloadedBoolean=!1;nn.number=!1;nn.commaSeparated=!1;nn.spaceSeparated=!1;nn.commaOrSpaceSeparated=!1;nn.mustUseProperty=!1;nn.defined=!1;function j2(e,t){this.property=e,this.attribute=t}var An={},hy=0;An.boolean=yo();An.booleanish=yo();An.overloadedBoolean=yo();An.number=yo();An.spaceSeparated=yo();An.commaSeparated=yo();An.commaOrSpaceSeparated=yo();function yo(){return Math.pow(2,++hy)}var y2=b2,_f=An,S2=dh;dh.prototype=new y2;dh.prototype.defined=!0;var C2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],my=C2.length;function dh(e,t,n,o){var s=-1,a;for(wf(this,"space",o),y2.call(this,e,t);++s<my;)a=C2[s],wf(this,a,(n&_f[a])===_f[a])}function wf(e,t,n){n&&(e[t]=n)}var Tf=ch,fy=g2,xy=S2,cl=gy;function gy(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},s=e.properties,a=e.transform,l={},i={},c,d;for(c in s)d=new xy(c,a(o,c),s[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[Tf(c)]=c,i[Tf(d.attribute)]=c;return new fy(l,i,t)}var vy=cl,by=vy({space:"xlink",transform:jy,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function jy(e,t){return"xlink:"+t.slice(5).toLowerCase()}var yy=cl,Sy=yy({space:"xml",transform:Cy,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Cy(e,t){return"xml:"+t.slice(3).toLowerCase()}var _y=wy;function wy(e,t){return t in e?e[t]:t}var Ty=_y,_2=Ey;function Ey(e,t){return Ty(e,t.toLowerCase())}var ky=cl,Ny=_2,Ry=ky({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Ny,properties:{xmlns:null,xmlnsXLink:null}}),uh=An,Oy=cl,kt=uh.booleanish,Wt=uh.number,Xr=uh.spaceSeparated,Dy=Oy({transform:Ly,properties:{ariaActiveDescendant:null,ariaAtomic:kt,ariaAutoComplete:null,ariaBusy:kt,ariaChecked:kt,ariaColCount:Wt,ariaColIndex:Wt,ariaColSpan:Wt,ariaControls:Xr,ariaCurrent:null,ariaDescribedBy:Xr,ariaDetails:null,ariaDisabled:kt,ariaDropEffect:Xr,ariaErrorMessage:null,ariaExpanded:kt,ariaFlowTo:Xr,ariaGrabbed:kt,ariaHasPopup:null,ariaHidden:kt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xr,ariaLevel:Wt,ariaLive:null,ariaModal:kt,ariaMultiLine:kt,ariaMultiSelectable:kt,ariaOrientation:null,ariaOwns:Xr,ariaPlaceholder:null,ariaPosInSet:Wt,ariaPressed:kt,ariaReadOnly:kt,ariaRelevant:null,ariaRequired:kt,ariaRoleDescription:Xr,ariaRowCount:Wt,ariaRowIndex:Wt,ariaRowSpan:Wt,ariaSelected:kt,ariaSetSize:Wt,ariaSort:null,ariaValueMax:Wt,ariaValueMin:Wt,ariaValueNow:Wt,ariaValueText:null,role:null}});function Ly(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var _s=An,By=cl,$y=_2,he=_s.boolean,Ay=_s.overloadedBoolean,qs=_s.booleanish,Ne=_s.number,vt=_s.spaceSeparated,ni=_s.commaSeparated,My=By({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$y,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ni,acceptCharset:vt,accessKey:vt,action:null,allow:null,allowFullScreen:he,allowPaymentRequest:he,allowUserMedia:he,alt:null,as:null,async:he,autoCapitalize:null,autoComplete:vt,autoFocus:he,autoPlay:he,capture:he,charSet:null,checked:he,cite:null,className:vt,cols:Ne,colSpan:null,content:null,contentEditable:qs,controls:he,controlsList:vt,coords:Ne|ni,crossOrigin:null,data:null,dateTime:null,decoding:null,default:he,defer:he,dir:null,dirName:null,disabled:he,download:Ay,draggable:qs,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:he,formTarget:null,headers:vt,height:Ne,hidden:he,high:Ne,href:null,hrefLang:null,htmlFor:vt,httpEquiv:vt,id:null,imageSizes:null,imageSrcSet:ni,inputMode:null,integrity:null,is:null,isMap:he,itemId:null,itemProp:vt,itemRef:vt,itemScope:he,itemType:vt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:he,low:Ne,manifest:null,max:null,maxLength:Ne,media:null,method:null,min:null,minLength:Ne,multiple:he,muted:he,name:null,nonce:null,noModule:he,noValidate:he,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:he,optimum:Ne,pattern:null,ping:vt,placeholder:null,playsInline:he,poster:null,preload:null,readOnly:he,referrerPolicy:null,rel:vt,required:he,reversed:he,rows:Ne,rowSpan:Ne,sandbox:vt,scope:null,scoped:he,seamless:he,selected:he,shape:null,size:Ne,sizes:null,slot:null,span:Ne,spellCheck:qs,src:null,srcDoc:null,srcLang:null,srcSet:ni,start:Ne,step:null,style:null,tabIndex:Ne,target:null,title:null,translate:null,type:null,typeMustMatch:he,useMap:null,value:qs,width:Ne,wrap:null,align:null,aLink:null,archive:vt,axis:null,background:null,bgColor:null,border:Ne,borderColor:null,bottomMargin:Ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:he,declare:he,event:null,face:null,frame:null,frameBorder:null,hSpace:Ne,leftMargin:Ne,link:null,longDesc:null,lowSrc:null,marginHeight:Ne,marginWidth:Ne,noResize:he,noHref:he,noShade:he,noWrap:he,object:null,profile:null,prompt:null,rev:null,rightMargin:Ne,rules:null,scheme:null,scrolling:qs,standby:null,summary:null,text:null,topMargin:Ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:he,disableRemotePlayback:he,prefix:null,property:null,results:Ne,security:null,unselectable:null}}),Py=dy,Iy=by,zy=Sy,Fy=Ry,Uy=Dy,Hy=My,Vy=Py([zy,Iy,Fy,Uy,Hy]),Wy=ch,Zy=S2,Ky=b2,ph="data",Yy=Qy,Gy=/^data[-\w.:]+$/i,w2=/-[a-z]/g,qy=/[A-Z]/g;function Qy(e,t){var n=Wy(t),o=t,s=Ky;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===ph&&Gy.test(t)&&(t.charAt(4)==="-"?o=Xy(t):t=Jy(t),s=Zy),new s(o,t))}function Xy(e){var t=e.slice(5).replace(w2,t7);return ph+t.charAt(0).toUpperCase()+t.slice(1)}function Jy(e){var t=e.slice(4);return w2.test(t)?e:(t=t.replace(qy,e7),t.charAt(0)!=="-"&&(t="-"+t),ph+t)}function e7(e){return"-"+e.toLowerCase()}function t7(e){return e.charAt(1).toUpperCase()}var n7=r7,Ef=/[#.]/g;function r7(e,t){for(var n=e||"",o=t||"div",s={},a=0,l,i,c;a<n.length;)Ef.lastIndex=a,c=Ef.exec(n),l=n.slice(a,c?c.index:n.length),l&&(i?i==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:o=l,a+=l.length),c&&(i=c[0],a++);return{type:"element",tagName:o,properties:s,children:[]}}var hh={};hh.parse=a7;hh.stringify=l7;var kf="",o7=" ",s7=/[ \t\n\r\f]+/g;function a7(e){var t=String(e||kf).trim();return t===kf?[]:t.split(s7)}function l7(e){return e.join(o7).trim()}var mh={};mh.parse=i7;mh.stringify=c7;var Qu=",",Nf=" ",ca="";function i7(e){for(var t=[],n=String(e||ca),o=n.indexOf(Qu),s=0,a=!1,l;!a;)o===-1&&(o=n.length,a=!0),l=n.slice(s,o).trim(),(l||!a)&&t.push(l),s=o+1,o=n.indexOf(Qu,s);return t}function c7(e,t){var n=t||{},o=n.padLeft===!1?ca:Nf,s=n.padRight?Nf:ca;return e[e.length-1]===ca&&(e=e.concat(ca)),e.join(s+Qu+o).trim()}var d7=Yy,Rf=ch,u7=n7,Of=hh.parse,Df=mh.parse,p7=m7,h7={}.hasOwnProperty;function m7(e,t,n){var o=n?b7(n):null;return s;function s(l,i){var c=u7(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&h7.call(o,u)?o[u]:u,i&&f7(i,c)&&(d.unshift(i),i=null),i)for(p in i)a(c.properties,p,i[p]);return T2(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(l,i,c){var d,u,p;c==null||c!==c||(d=d7(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=Of(p):d.commaSeparated?p=Df(p):d.commaOrSpaceSeparated&&(p=Of(Df(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=v7(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=g7(d,u,p))}}function f7(e,t){return typeof e=="string"||"length"in e||x7(t.tagName,e)}function x7(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function T2(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)T2(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function g7(e,t,n){var o,s,a;if(typeof n!="object"||!("length"in n))return Lf(e,t,n);for(s=n.length,o=-1,a=[];++o<s;)a[o]=Lf(e,t,n[o]);return a}function Lf(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||Rf(n)===Rf(t))&&(o=!0),o}function v7(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function b7(e){for(var t=e.length,n=-1,o={},s;++n<t;)s=e[n],o[s.toLowerCase()]=s;return o}var j7=Vy,y7=p7,E2=y7(j7,"div");E2.displayName="html";var S7=E2,C7=S7;const _7="Æ",w7="&",T7="Á",E7="Â",k7="À",N7="Å",R7="Ã",O7="Ä",D7="©",L7="Ç",B7="Ð",$7="É",A7="Ê",M7="È",P7="Ë",I7=">",z7="Í",F7="Î",U7="Ì",H7="Ï",V7="<",W7="Ñ",Z7="Ó",K7="Ô",Y7="Ò",G7="Ø",q7="Õ",Q7="Ö",X7='"',J7="®",eS="Þ",tS="Ú",nS="Û",rS="Ù",oS="Ü",sS="Ý",aS="á",lS="â",iS="´",cS="æ",dS="à",uS="&",pS="å",hS="ã",mS="ä",fS="¦",xS="ç",gS="¸",vS="¢",bS="©",jS="¤",yS="°",SS="÷",CS="é",_S="ê",wS="è",TS="ð",ES="ë",kS="½",NS="¼",RS="¾",OS=">",DS="í",LS="î",BS="¡",$S="ì",AS="¿",MS="ï",PS="«",IS="<",zS="¯",FS="µ",US="·",HS=" ",VS="¬",WS="ñ",ZS="ó",KS="ô",YS="ò",GS="ª",qS="º",QS="ø",XS="õ",JS="ö",e9="¶",t9="±",n9="£",r9='"',o9="»",s9="®",a9="§",l9="­",i9="¹",c9="²",d9="³",u9="ß",p9="þ",h9="×",m9="ú",f9="û",x9="ù",g9="¨",v9="ü",b9="ý",j9="¥",y9="ÿ",S9={AElig:_7,AMP:w7,Aacute:T7,Acirc:E7,Agrave:k7,Aring:N7,Atilde:R7,Auml:O7,COPY:D7,Ccedil:L7,ETH:B7,Eacute:$7,Ecirc:A7,Egrave:M7,Euml:P7,GT:I7,Iacute:z7,Icirc:F7,Igrave:U7,Iuml:H7,LT:V7,Ntilde:W7,Oacute:Z7,Ocirc:K7,Ograve:Y7,Oslash:G7,Otilde:q7,Ouml:Q7,QUOT:X7,REG:J7,THORN:eS,Uacute:tS,Ucirc:nS,Ugrave:rS,Uuml:oS,Yacute:sS,aacute:aS,acirc:lS,acute:iS,aelig:cS,agrave:dS,amp:uS,aring:pS,atilde:hS,auml:mS,brvbar:fS,ccedil:xS,cedil:gS,cent:vS,copy:bS,curren:jS,deg:yS,divide:SS,eacute:CS,ecirc:_S,egrave:wS,eth:TS,euml:ES,frac12:kS,frac14:NS,frac34:RS,gt:OS,iacute:DS,icirc:LS,iexcl:BS,igrave:$S,iquest:AS,iuml:MS,laquo:PS,lt:IS,macr:zS,micro:FS,middot:US,nbsp:HS,not:VS,ntilde:WS,oacute:ZS,ocirc:KS,ograve:YS,ordf:GS,ordm:qS,oslash:QS,otilde:XS,ouml:JS,para:e9,plusmn:t9,pound:n9,quot:r9,raquo:o9,reg:s9,sect:a9,shy:l9,sup1:i9,sup2:c9,sup3:d9,szlig:u9,thorn:p9,times:h9,uacute:m9,ucirc:f9,ugrave:x9,uml:g9,uuml:v9,yacute:b9,yen:j9,yuml:y9},C9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var k2=_9;function _9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var w9=T9;function T9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var E9=k9;function k9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var N9=E9,R9=k2,O9=D9;function D9(e){return N9(e)||R9(e)}var ri,L9=59,B9=$9;function $9(e){var t="&"+e+";",n;return ri=ri||document.createElement("i"),ri.innerHTML=t,n=ri.textContent,n.charCodeAt(n.length-1)===L9&&e!=="semi"||n===t?!1:n}var Bf=S9,$f=C9,A9=k2,M9=w9,N2=O9,P9=B9,I9=X9,z9={}.hasOwnProperty,$o=String.fromCharCode,F9=Function.prototype,Af={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},U9=9,Mf=10,H9=12,V9=32,Pf=38,W9=59,Z9=60,K9=61,Y9=35,G9=88,q9=120,Q9=65533,Po="named",fh="hexadecimal",xh="decimal",gh={};gh[fh]=16;gh[xh]=10;var Lc={};Lc[Po]=N2;Lc[xh]=A9;Lc[fh]=M9;var R2=1,O2=2,D2=3,L2=4,B2=5,Xu=6,$2=7,Ir={};Ir[R2]="Named character references must be terminated by a semicolon";Ir[O2]="Numeric character references must be terminated by a semicolon";Ir[D2]="Named character references cannot be empty";Ir[L2]="Numeric character references cannot be empty";Ir[B2]="Named character references must be known";Ir[Xu]="Numeric character references cannot be disallowed";Ir[$2]="Numeric character references cannot be outside the permissible Unicode range";function X9(e,t){var n={},o,s;t||(t={});for(s in Af)o=t[s],n[s]=o??Af[s];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),J9(e,n)}function J9(e,t){var n=t.additional,o=t.nonTerminated,s=t.text,a=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],f=e.length,b=0,j=-1,y=u.column||1,w=u.line||1,g="",h=[],m,S,C,x,_,k,N,O,L,U,Z,te,we,je,ee,$,P,I,W;for(typeof n=="string"&&(n=n.charCodeAt(0)),$=Y(),O=l?Te:F9,b--,f++;++b<f;)if(_===Mf&&(y=p[j]||1),_=e.charCodeAt(b),_===Pf){if(N=e.charCodeAt(b+1),N===U9||N===Mf||N===H9||N===V9||N===Pf||N===Z9||N!==N||n&&N===n){g+=$o(_),y++;continue}for(we=b+1,te=we,W=we,N===Y9?(W=++te,N=e.charCodeAt(W),N===G9||N===q9?(je=fh,W=++te):je=xh):je=Po,m="",Z="",x="",ee=Lc[je],W--;++W<f&&(N=e.charCodeAt(W),!!ee(N));)x+=$o(N),je===Po&&z9.call(Bf,x)&&(m=x,Z=Bf[x]);C=e.charCodeAt(W)===W9,C&&(W++,S=je===Po?P9(x):!1,S&&(m=x,Z=S)),I=1+W-we,!C&&!o||(x?je===Po?(C&&!Z?O(B2,1):(m!==x&&(W=te+m.length,I=1+W-te,C=!1),C||(L=m?R2:D2,t.attribute?(N=e.charCodeAt(W),N===K9?(O(L,I),Z=null):N2(N)?Z=null:O(L,I)):O(L,I))),k=Z):(C||O(O2,I),k=parseInt(x,gh[je]),eC(k)?(O($2,I),k=$o(Q9)):k in $f?(O(Xu,I),k=$f[k]):(U="",tC(k)&&O(Xu,I),k>65535&&(k-=65536,U+=$o(k>>>10|55296),k=56320|k&1023),k=U+$o(k))):je!==Po&&O(L2,I)),k?(de(),$=Y(),b=W-1,y+=W-we+1,h.push(k),P=Y(),P.offset++,a&&a.call(c,k,{start:$,end:P},e.slice(we-1,W)),$=P):(x=e.slice(we-1,W),g+=x,y+=x.length,b=W-1)}else _===10&&(w++,j++,y=0),_===_?(g+=$o(_),y++):de();return h.join("");function Y(){return{line:w,column:y,offset:b+(u.offset||0)}}function Te(Se,ie){var Le=Y();Le.column+=ie,Le.offset+=ie,l.call(d,Ir[Se],Le,Se)}function de(){g&&(h.push(g),s&&s.call(i,g,{start:$,end:Y()}),g="")}}function eC(e){return e>=55296&&e<=57343||e>1114111}function tC(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var A2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof c?new c(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++a}),h.__id},clone:function h(m,S){S=S||{};var C,x;switch(i.util.type(m)){case"Object":if(x=i.util.objId(m),S[x])return S[x];C={},S[x]=C;for(var _ in m)m.hasOwnProperty(_)&&(C[_]=h(m[_],S));return C;case"Array":return x=i.util.objId(m),S[x]?S[x]:(C=[],S[x]=C,m.forEach(function(k,N){C[N]=h(k,S)}),C);default:return m}},getLanguage:function(h){for(;h;){var m=s.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var S in m)if(m[S].src==h)return m[S]}return null}},isActive:function(h,m,S){for(var C="no-"+m;h;){var x=h.classList;if(x.contains(m))return!0;if(x.contains(C))return!1;h=h.parentElement}return!!S}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,m){var S=i.util.clone(i.languages[h]);for(var C in m)S[C]=m[C];return S},insertBefore:function(h,m,S,C){C=C||i.languages;var x=C[h],_={};for(var k in x)if(x.hasOwnProperty(k)){if(k==m)for(var N in S)S.hasOwnProperty(N)&&(_[N]=S[N]);S.hasOwnProperty(k)||(_[k]=x[k])}var O=C[h];return C[h]=_,i.languages.DFS(i.languages,function(L,U){U===O&&L!=h&&(this[L]=_)}),_},DFS:function h(m,S,C,x){x=x||{};var _=i.util.objId;for(var k in m)if(m.hasOwnProperty(k)){S.call(m,k,m[k],C||k);var N=m[k],O=i.util.type(N);O==="Object"&&!x[_(N)]?(x[_(N)]=!0,h(N,S,null,x)):O==="Array"&&!x[_(N)]&&(x[_(N)]=!0,h(N,S,k,x))}}},plugins:{},highlightAll:function(h,m){i.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,S){var C={callback:S,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var x=0,_;_=C.elements[x++];)i.highlightElement(_,m===!0,C.callback)},highlightElement:function(h,m,S){var C=i.util.getLanguage(h),x=i.languages[C];i.util.setLanguage(h,C);var _=h.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(_,C);var k=h.textContent,N={element:h,language:C,grammar:x,code:k};function O(U){N.highlightedCode=U,i.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,i.hooks.run("after-highlight",N),i.hooks.run("complete",N),S&&S.call(N.element)}if(i.hooks.run("before-sanity-check",N),_=N.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!N.code){i.hooks.run("complete",N),S&&S.call(N.element);return}if(i.hooks.run("before-highlight",N),!N.grammar){O(i.util.encode(N.code));return}if(m&&o.Worker){var L=new Worker(i.filename);L.onmessage=function(U){O(U.data)},L.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else O(i.highlight(N.code,N.grammar,N.language))},highlight:function(h,m,S){var C={code:h,grammar:m,language:S};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,m){var S=m.rest;if(S){for(var C in S)m[C]=S[C];delete m.rest}var x=new p;return f(x,x.head,h),u(h,x,m,x.head,0),j(x)},hooks:{all:{},add:function(h,m){var S=i.hooks.all;S[h]=S[h]||[],S[h].push(m)},run:function(h,m){var S=i.hooks.all[h];if(!(!S||!S.length))for(var C=0,x;x=S[C++];)x(m)}},Token:c};o.Prism=i;function c(h,m,S,C){this.type=h,this.content=m,this.alias=S,this.length=(C||"").length|0}c.stringify=function h(m,S){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(O){C+=h(O,S)}),C}var x={type:m.type,content:h(m.content,S),tag:"span",classes:["token",m.type],attributes:{},language:S},_=m.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(x.classes,_):x.classes.push(_)),i.hooks.run("wrap",x);var k="";for(var N in x.attributes)k+=" "+N+'="'+(x.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+k+">"+x.content+"</"+x.tag+">"};function d(h,m,S,C){h.lastIndex=m;var x=h.exec(S);if(x&&C&&x[1]){var _=x[1].length;x.index+=_,x[0]=x[0].slice(_)}return x}function u(h,m,S,C,x,_){for(var k in S)if(!(!S.hasOwnProperty(k)||!S[k])){var N=S[k];N=Array.isArray(N)?N:[N];for(var O=0;O<N.length;++O){if(_&&_.cause==k+","+O)return;var L=N[O],U=L.inside,Z=!!L.lookbehind,te=!!L.greedy,we=L.alias;if(te&&!L.pattern.global){var je=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,je+"g")}for(var ee=L.pattern||L,$=C.next,P=x;$!==m.tail&&!(_&&P>=_.reach);P+=$.value.length,$=$.next){var I=$.value;if(m.length>h.length)return;if(!(I instanceof c)){var W=1,Y;if(te){if(Y=d(ee,P,h,Z),!Y||Y.index>=h.length)break;var ie=Y.index,Te=Y.index+Y[0].length,de=P;for(de+=$.value.length;ie>=de;)$=$.next,de+=$.value.length;if(de-=$.value.length,P=de,$.value instanceof c)continue;for(var Se=$;Se!==m.tail&&(de<Te||typeof Se.value=="string");Se=Se.next)W++,de+=Se.value.length;W--,I=h.slice(P,de),Y.index-=P}else if(Y=d(ee,0,I,Z),!Y)continue;var ie=Y.index,Le=Y[0],dt=I.slice(0,ie),wt=I.slice(ie+Le.length),fe=P+I.length;_&&fe>_.reach&&(_.reach=fe);var Be=$.prev;dt&&(Be=f(m,Be,dt),P+=dt.length),b(m,Be,W);var et=new c(k,U?i.tokenize(Le,U):Le,we,Le);if($=f(m,Be,et),wt&&f(m,$,wt),W>1){var At={cause:k+","+O,reach:fe};u(h,m,S,$.prev,P,At),_&&At.reach>_.reach&&(_.reach=At.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,S){var C=m.next,x={value:S,prev:m,next:C};return m.next=x,C.prev=x,h.length++,x}function b(h,m,S){for(var C=m.next,x=0;x<S&&C!==h.tail;x++)C=C.next;m.next=C,C.prev=m,h.length-=x}function j(h){for(var m=[],S=h.head.next;S!==h.tail;)m.push(S.value),S=S.next;return m}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(h){var m=JSON.parse(h.data),S=m.language,C=m.code,x=m.immediateClose;o.postMessage(i.highlight(C,i.languages[S],S)),x&&o.close()},!1)),i;var y=i.util.currentScript();y&&(i.filename=y.src,y.hasAttribute("data-manual")&&(i.manual=!0));function w(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",w):window.requestAnimationFrame?window.requestAnimationFrame(w):window.setTimeout(w,16)}return i}(t);e.exports&&(e.exports=n),typeof Bi<"u"&&(Bi.Prism=n)})(A2);var nC=A2.exports,rC=vh;vh.displayName="markup";vh.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function vh(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var M2=bh;bh.displayName="css";bh.aliases=[];function bh(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const oC=nr(M2);var sC=jh;jh.displayName="clike";jh.aliases=[];function jh(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var aC=yh;yh.displayName="javascript";yh.aliases=["js"];function yh(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var da=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Bi=="object"?Bi:{},lC=CC();da.Prism={manual:!0,disableWorkerMessageHandler:!0};var iC=C7,cC=I9,P2=nC,dC=rC,uC=M2,pC=sC,hC=aC;lC();var Sh={}.hasOwnProperty;function I2(){}I2.prototype=P2;var Ge=new I2,mC=Ge;Ge.highlight=xC;Ge.register=dl;Ge.alias=fC;Ge.registered=gC;Ge.listLanguages=vC;dl(dC);dl(uC);dl(pC);dl(hC);Ge.util.encode=yC;Ge.Token.stringify=bC;function dl(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function fC(e,t){var n=Ge.languages,o=e,s,a,l,i;t&&(o={},o[e]=t);for(s in o)for(a=o[s],a=typeof a=="string"?[a]:a,l=a.length,i=-1;++i<l;)n[a[i]]=n[s]}function xC(e,t){var n=P2.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Sh.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function gC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Sh.call(Ge.languages,e)}function vC(){var e=Ge.languages,t=[],n;for(n in e)Sh.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function bC(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?jC(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),iC(o.tag+"."+o.classes.join("."),SC(o.attributes),o.content))}function jC(e,t){for(var n=[],o=e.length,s=-1,a;++s<o;)a=e[s],a!==""&&a!==null&&a!==void 0&&n.push(a);for(s=-1,o=n.length;++s<o;)a=n[s],n[s]=Ge.Token.stringify(a,t,n);return n}function yC(e){return e}function SC(e){var t;for(t in e)e[t]=cC(e[t]);return e}function CC(){var e="Prism"in da,t=e?da.Prism:void 0;return n;function n(){e?da.Prism=t:delete da.Prism,e=void 0,t=void 0}}const Ch=nr(mC);var _h=sy(Ch,{});_h.registerLanguage=function(e,t){return Ch.register(t)};_h.alias=function(e,t){return Ch.alias(e,t)};const So=_h;var _C=wh;wh.displayName="bash";wh.aliases=["shell"];function wh(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,i=0;i<a.length;i++)l[a[i]]=t.languages.bash[a[i]];t.languages.shell=t.languages.bash})(e)}const wC=nr(_C);var TC=Th;Th.displayName="json";Th.aliases=["webmanifest"];function Th(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const EC=nr(TC);var kC=Eh;Eh.displayName="jsx";Eh.aliases=[];function Eh(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return a}),RegExp(d,u)}a=l(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var f=d[p],b=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:i(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:b=!0),(b||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var j=i(f);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(j+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(j=i(d[p-1])+j,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",j,null,j)}f.content&&typeof f.content!="string"&&c(f.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const NC=nr(kC);var RC=kh;kh.displayName="scss";kh.aliases=[];function kh(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const OC=nr(RC);var DC=Nh;Nh.displayName="yaml";Nh.aliases=["yml"];function Nh(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,s="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return s})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const LC=nr(DC);function z2(e){return typeof e=="boolean"}function Co(e){return typeof e=="string"}function Rh(e){return typeof e=="number"}function Oh(e){return Number.isInteger(e)}function ws(e){return Array.isArray(e)}function Bc(e){return typeof e=="function"}function BC(e){return e instanceof RegExp}function _o(e){return typeof e=="object"&&!ws(e)&&!F2(e)}function $C(e){return e===void 0}function F2(e){return e===null}function ge(e){return!($C(e)||F2(e))}function $c(e){return!ge(e)}function U2(...e){throw new Error(e.join(""))}const Ac=(e,...t)=>Bc(e)?e(...t):e;function Ce(){}const H2=e=>e;function AC(){return Intl.DateTimeFormat().resolvedOptions().locale}let Dh={locale:AC(),currency:"GBP",currencySign:"£",thousands:","};const MC=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((s,a)=>s+a*o)};function PC(e,t={}){return new Intl.NumberFormat(t.locale||Dh.locale,t).format(e)}function IC(e,t={}){return PC(e,{style:"currency",currency:Dh.currency,...t})}function ua(e,t=Dh.thousands){if($c(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function Lh(e,t=/,\s*|\s+/){return $c(e)?[]:Co(e)?e.length?e.split(t):[]:ws(e)?e:[e]}function qa(e,t=!0,n={}){return _o(e)?e:Lh(e).reduce((o,s)=>(o[s]=Bc(t)?t(s):t,o),n)}function V2(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const zC=V2;function FC(e){if(Bc(e))return e;if(BC(e))return t=>e.test(t);if(_o(e))return t=>!!e[t];if(ws(e)||Co(e)){const t=qa(e);return n=>!!t[n]}U2("Invalid selector() specification: "+e)}const Bh=(e,t,n={})=>{let o={},s={delete:!1,...n};const a=FC(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),o[l]=i}}),o},If=(e,t)=>parseInt(e[t]||0),zf=(e,t)=>parseFloat(e[t]||0),Ff=(e,t)=>(e[t]||"").toString(),Uf=e=>(t,n)=>If(t,e)-If(n,e),Bd=e=>(t,n)=>zf(t,e)-zf(n,e),Hf=e=>(t,n)=>{let o=Ff(t,e).toLowerCase(),s=Ff(n,e).toLowerCase();return o>s?1:s>o?-1:0},UC=e=>(t,n)=>e(n,t);function HC(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function zr(e){return new Promise(t=>setTimeout(t,e))}So.registerLanguage("jsx",NC);So.registerLanguage("json",EC);So.registerLanguage("css",oC);So.registerLanguage("scss",OC);So.registerLanguage("bash",wC);So.registerLanguage("yaml",LC);const Wn=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:s=o,className:a="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,f]=v.useState(o),b=()=>{navigator.clipboard.writeText(e),u(!0),zr(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${a} ${p?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>f(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:b,children:d?"Copied":"Copy"})]}),r.jsx(So,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:VC(e,{undent:c})})]})},VC=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},J=({Component:e,code:t,html:n,children:o,className:s="",language:a,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[r.jsx("div",{className:"source",children:r.jsx(Wn,{code:t||n,language:n?"html":a,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),oi=v.createContext();function Vf(e){return typeof e=="function"}function Wf(e){return typeof e=="object"&&!W2(e)&&!WC(e)}function W2(e){return Array.isArray(e)}function WC(e){return e===null}function ZC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:s}){if(!n)return r.jsx(t,{...o,ref:s});let a={},l=Vf(n)?n(e):e[n];if(W2(l)&&(t=l[0],l=l[1]),Vf(l)){const i=l(o,s,e);if(V.isValidElement(i))return i;Wf(i)&&Object.assign(a,o,i)}else Wf(l)?Object.assign(a,l,o):Object.assign(a,o);return r.jsx(t,{...a,ref:s})}const KC=e=>({Context:oi,Provider:({children:t,...n})=>r.jsx(oi.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(oi.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>V.forwardRef((o,s)=>r.jsx(oi.Consumer,{children:a=>r.jsx(ZC,{Implementation:t,context:a,spec:n,props:o,ref:s})}))}),Z2=KC(),Q=Z2.Component,YC="svg",Ju="-",K2="fill",GC="path",qC="line",QC="rect",XC="array",JC="circle",e_="ellipse",t_="polygon",n_="polyline",$h=/-(?!\d)/,Zf="currentColor",Ah=512,Mh=512,ul={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function r_(e,t,n=ul){n.icons[e]=t}function o_(e,t=ul){Object.entries(e).forEach(([n,o])=>r_(n,o,t))}const si=v.createContext();function Kf(e){return typeof e=="function"}function Yf(e){return typeof e=="object"&&!Y2(e)&&!s_(e)}function Y2(e){return Array.isArray(e)}function s_(e){return e===null}function a_({context:e={},Implementation:t,spec:n=!1,props:o={},ref:s}){if(!n)return r.jsx(t,{...o,ref:s});let a={},l=Kf(n)?n(e):e[n];if(Y2(l)&&(t=l[0],l=l[1]),Kf(l)){const i=l(o,s,e);if(V.isValidElement(i))return i;Yf(i)&&Object.assign(a,o,i)}else Yf(l)?Object.assign(a,l,o):Object.assign(a,o);return r.jsx(t,{...a,ref:s})}const l_=e=>({Context:si,Provider:({children:t,...n})=>r.jsx(si.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(si.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>V.forwardRef((o,s)=>r.jsx(si.Consumer,{children:a=>r.jsx(a_,{Implementation:t,context:a,spec:n,props:o,ref:s})}))}),i_=l_(),c_=i_.Component;function or(e){return typeof e=="string"}function pl(e){return Array.isArray(e)}function Mc(e){return typeof e=="object"&&!pl(e)&&!q2(e)}function G2(e){return e===void 0}function q2(e){return e===null}function Pc(e){return!(G2(e)||q2(e))}function Q2(e){return!Pc(e)}function er(...e){throw new Error(e.join(""))}function d_(){return Intl.DateTimeFormat().resolvedOptions().locale}d_();function ep(e,t=/,\s*|\s+/){return Q2(e)?[]:or(e)?e.length?e.split(t):[]:pl(e)?e:[e]}const u_=(e,t)=>{const n=e[t];return delete e[t],n};function hl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,s]=n.split(/\s*[:=]\s*/);return t[o]=G2(s)?!0:s,t},{})}const Ph=e=>e.filter(Pc).join(" "),p_=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),h_=(...e)=>Ph(e.flatMap(t=>Mc(t)?p_(t):t)),m_=e=>ep(e,/\s+/),X2={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Dr={flip:(e,t)=>{or(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Dr.flop=Dr.flipy;Dr["flip-x"]=Dr.flipx;Dr["flip-y"]=Dr.flipy;function J2(e,t={...X2}){const n=or(e)?hl(e):e||{};return Object.entries(n).reduce((o,[s,a])=>{const l=s.toLowerCase();return(Dr[l]||er(`Invalid transform: ${l}`))(o,a),o},t)}const f_=4.42,zn=e=>`${f_*e}%`,x_={},tp={outline:{fill:"none",stroke:"currentColor",strokeWidth:zn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:zn(.5)},thinner:{strokeWidth:zn(1)},thin:{strokeWidth:zn(1.5)},medium:{strokeWidth:zn(2)},thick:{strokeWidth:zn(2.5)},thicker:{strokeWidth:zn(3)},thickest:{strokeWidth:zn(3.5)}};tp.line=tp.outline;const g_={...Object.entries(tp).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?Zf:t,stroke:(e,t)=>e.stroke=t===!0?Zf:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?zn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function sc(e,t){return(or(t)?t.split($h):t).forEach(n=>{const[o,s=!0]=n.split(/[:=]/),a=o.toLowerCase(),l=g_[a];if(l){l(e.style||(e.style={...x_}),s);return}(Dr[a]||er(`Invalid style or transform: ${a}`))(e.transform||(e.transform={...X2}),s)})}const v_={width:Ah,height:Mh,type:K2},e3={svg:e=>({element:YC,svg:e}),array:e=>({element:XC,items:e}),path:e=>({element:GC,d:e}),polygon:e=>({element:t_,points:e}),polyline:e=>({element:n_,points:e}),circle:e=>({element:JC,...ai(e,"cx cy r")}),ellipse:e=>({element:e_,...ai(e,"cx cy rx ry")}),line:e=>({element:qC,...ai(e,"x1 y1 x2 y2")}),rect:e=>({element:QC,...ai(e,"x y width height rx ry")})};function ai(e,t){const n=pl(t)?[...t]:ep(t);return ep(e).reduce((o,s)=>{if(n.length){const a=n.shift();o[a]=s}return o},{})}const t3=e=>{const[t,n=""]=e.split("?"),[o,...s]=t.split(/\.(?!\d)/),a=o.split($h).filter(i=>i.length),l=hl(n);return{dashes:a,classes:s,style:l}},b_=(e,t)=>{const n=t3(e),{dashes:o}=n;for(let s=o.length;s>0;s--){const a=o.slice(0,s).join(Ju);if(t[a]){n.name=o.splice(0,s).join(Ju);break}}return n},Gf=(e,t,n={})=>{const{icons:o}=t,s=b_(e,o),{name:a,classes:l,style:i,dashes:c}=s;Q2(a)&&er(`No icon found matching any leading subset of ${s.dashes.join(Ju)}`);const d=t.icons[a]||er(`Icon not found in data: ${a}`),u=n3(d,t,{...n,name:a});if((l.length||n.className)&&(u.className=Ph([...l||[],n.className])),u.transform&&(u.transform=J2(u.transform)),u.style&&(u.style=or(u.style)?hl(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};sc(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&sc(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function j_(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const n3=(e,t,n={})=>{const{defaults:o={}}=t,s={...v_,...o,...n};return r3(s,e,t)},r3=(e,t,n)=>{if(or(t))return y_(e,t);if(Mc(t))return S_(e,t,n);if(pl(t))return C_(e,t,n);er(`Cannot parse icon data: ${t}`)};function y_(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,s]=n,{dashes:a,classes:l}=t3(o),i=a.shift(),c=e3[i]||er(`Invalid icon data element: ${i}`);return e.body=c(s),l.length&&(e.body.className=Ph(l)),a.length&&sc(e.body,a),e}return e.body={element:"path",d:t},e}function S_(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const s=u_(o,"data");return r3(e,s,n),Object.assign(e,o),e}for(let s of Object.entries(e3)){const[a,l]=s,i=o[a];if(Pc(i))return e.body=l(i),delete o[a],Object.assign(e,o),e}er(`Cannot parse icon data: ${JSON.stringify(t)}`)}function C_(e,t,n){return e.body={element:"array",items:t.map(o=>n3(o,n).body)},e}const __=({size:e,...t})=>{t.width??(t.width=e||Ah),t.height??(t.height=e||Mh),t.path&&Object.assign(t,j_(t.path));let n;return t.style&&(or(t.style)?(n=hl(t.style),t.style={}):n={...t.style}),sc(t,t.type?t.type.split($h).filter(o=>o.length):K2),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=J2(t.transform)),t},Ih=e=>Mc(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,s=>s[1].toUpperCase())]=o,t),{}):e,w_=e=>Pc(e)?Ih(hl(e)):null,sr=({style:e,class:t,...n})=>({style:or(e)?w_(e):Ih(e),className:t,...n}),T_=e=>r.jsx("circle",{...sr(e)}),E_=e=>r.jsx("ellipse",{...sr(e)}),k_=e=>r.jsx("line",{...sr(e)}),o3=e=>r.jsx("path",{...sr(e)}),N_=e=>r.jsx("polygon",{...sr(e)}),R_=e=>r.jsx("polyline",{...sr(e)}),O_=e=>r.jsx("rect",{...sr(e)}),D_=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...sr(t)}),L_=({items:e,...t})=>r.jsx("g",{...sr(t),children:e.map((n,o)=>r.jsx(ac,{body:n},o))}),B_={array:L_,circle:T_,ellipse:E_,line:k_,path:o3,polygon:N_,polyline:R_,rect:O_,svg:D_},ac=({path:e,body:t,...n})=>{if(e)return r.jsx(o3,{d:e,...n});if(or(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Mc(t)){const{element:o,...s}=t,a=B_[o]||er(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(a,{...s})}if(pl(t))return t.map((o,s)=>r.jsx(ac,{body:o},s));er(`Don't know how to handle body: ${t}`)};function $_({width:e,height:t,transform:n,children:o}){const s=e/2,a=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${s} ${a})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${s} -${a})`,children:o})})})}const $d=({onClick:e,minx:t=0,miny:n=0,width:o=Ah,height:s=Mh,style:a,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${s}`,className:`${i} icon`,style:Ih(a),onClick:e,children:[!!c&&console.log("style: ",a),l?r.jsx($_,{width:o,height:s,transform:l,children:r.jsx(ac,{...d})}):r.jsx(ac,{...d})]}),A_=({name:e,iconsClass:t="icons",library:n=ul,...o})=>{if(!e)return r.jsx($d,{...__(o)});const s=m_(e);return s.length===1?r.jsx($d,{...o,...Gf(e,n,o)}):r.jsx("div",{className:h_(t,o.className),children:s.map(a=>r.jsx($d,{...o,...Gf(a,n,o)},a))})},Oi=c_(A_,"Icon"),M_=e=>e.filter(ge).join(" "),P_=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),ce=(...e)=>M_(e.flatMap(t=>_o(t)?P_(t):t)),zh=e=>{if(!e)return null;const[t,n,o,s,a]=e.split("-");return ce(t,F_(n),U_(o),H_(s),V_(a))},I_=({className:e,size:t,color:n,...o})=>({...o,className:ce(e,t,zh(n))}),z_=({className:e,size:t,color:n,border:o,radius:s,shadow:a,pad:l,mar:i,padding:c=l,margin:d=i,...u})=>({...u,className:ce(e,t,zh(n),wo(o),Es(s),Ts(a),s3(c),a3(d))}),wo=e=>i3(e,"border",t=>`border bdw-${t}`),Ts=e=>i3(e,"shadow-1",t=>`shadow-${t}`),s3=e=>c3(e,"pad"),a3=e=>c3(e,"mar"),Es=e=>ks(e,t=>`bdr-${t}`),F_=e=>ks(e,t=>`fgc-${t}`),U_=e=>ks(e,t=>`bgc-${t}`),H_=e=>ks(e,t=>`fgd-${t}`),V_=e=>ks(e,t=>`bgd-${t}`),l3=e=>ks(e,t=>{const n=Lh(t);return console.log(`gap: ${t} gaps:`,n),n.length===2?np("gap",["v","h"],n):`gap-${t}`}),ks=(e,t)=>Oh(parseInt(e))?Ac(t,e):null,W_=(e,t,n)=>e===!0?t:ge(e)?Ac(n,e):null,i3=(e,t,n)=>e===!0?t:parseInt(e)?Ac(n,e):null,c3=(e,t)=>W_(e,t,n=>Z_(t,Lh(n))),Z_=(e,t)=>t.length===2?np(e,["v","h"],t):t.length===4?np(e,["t","r","b","l"],t):t.map(n=>`${e}-${n}`).join(" "),np=(e,t,n)=>n.map((o,s)=>`${e}-${t[s]}-${o}`).join(" "),re=e=>r.jsx(Oi,{...I_(e)});function qf(e,t,n={}){return ge(t)&&(n[e]=Oh(t)?`${t}deg`:t),Object.keys(n).length?n:null}const K_=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:s,iconRight:a,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Oi,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Oi,{name:n,className:o,style:qf("--icon-rotate",s),fixedWidth:!0}),c||d,!!a&&r.jsx(Oi,{name:a,className:l,style:qf("--icon-rotate",i),fixedWidth:!0})]}),To=Q(K_,"WithIcons");o_({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const Y_=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:s="angle-down",closedIcon:a="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(re,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(re,{name:o?s:a,fixedWidth:!0,className:"reveal"})]}),d3=Q(Y_,"AlertControls"),G_=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:s,Controls:a=d3})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(re,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(a,{...s})]}),q_=Q(G_,"AlertHeadline"),Q_=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),u3=Q(Q_,"AlertContent"),X_=({icon:e,Content:t=u3,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(re,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),J_=Q(X_,"AlertIcon"),p3=e=>Co(e)||Rh(e)||z2(e),ml=e=>p3(e)||!e.separator&&!e.heading&&!e.disabled,ew=e=>p3(e)?e:e.value??e.id,tw=(e,t,n=ew)=>{if($c(t))return[];const o=e.findIndex(s=>t===n(s));return o>=0?[e[o],o]:[]},nw=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{const s=_o(o),a=s?o.search??o.text??o.label??o.name??o.value:o;if(s&&o.fixed)return!0;if(ge(a)){const l=a.toString().toLowerCase();return n.every(i=>l.indexOf(i)>=0)}return!1})};function rw(e,t=ml){const n=e.findIndex(t);return n<0?null:n}function ow(e,t=ml){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function sw(e,t,n=ml){for(let o=1;o<=e.length;o++){const s=(t+o)%e.length;if(n(e[s]))return s}return null}function aw(e,t,n=ml){for(let o=1;o<=e.length;o++){const s=(t+e.length-o)%e.length;if(n(e[s]))return s}return null}const wa="",Fh="ArrowDown",Uh="ArrowUp",lw="Tab",Ic="Enter",Hh=" ",zc="Escape",iw="Backspace",lc=e=>{const t=`HINT: define ${e}() to render this value`;return n=>Co(n)||Rh(n)?n:_o(n)?n.text??n.label??n.name??t:t},cw=e=>Co(e)||Rh(e)?e:r.jsx(To,{...e}),h3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,s=e.scrollTop,a=s+e.offsetHeight;n<s?e.scrollTo({top:n}):o>a&&e.scrollTo({top:s+(o-a)})};function dw(){let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}}const li=typeof window<"u"&&window.localStorage||dw(),ii=(e,t)=>[e,t].join("-");function Fc(e){return{get:(t,n)=>{const o=li.getItem(ii(e,t));return ge(o)?JSON.parse(o):ge(n)?(li.setItem(ii(e,t),JSON.stringify(n)),n):null},set:(t,n)=>li.setItem(ii(e,t),JSON.stringify(n)),delete:t=>li.removeItem(ii(e,t))}}const uw=e=>e.charAt(0).toUpperCase()+e.slice(1),ar=({title:e,headline:t,headIcon:n,type:o,size:s,color:a,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:f,onDismiss:b,icon:j,dismissable:y=!1,revealable:w=!1,revealed:g=!1,openIcon:h,closedIcon:m,dismissIcon:S,Headline:C=q_,Controls:x=d3,Content:_=u3,Icon:k=J_})=>{const[N,O]=v.useState(w?g:!0),[L,U]=v.useState(!1),Z=ce("alert",o,s,a,u,{revealable:w,dismissable:y,stripe:l},N?"revealed":null,Ts(d),wo(i),Es(c)),te=()=>O(I=>!I),je={dismissable:y,revealable:w,isRevealed:N,dismiss:()=>{U(!0),b&&b()},openIcon:h,closedIcon:m,dismissIcon:S},ee={title:e,text:p,children:f},$={...ee,icon:j,Content:_},P={headline:t,headIcon:n,toggle:te,revealable:w,controlProps:je,Controls:x};return L?null:r.jsxs("div",{className:Z,children:[!!t&&r.jsx(C,{...P}),N&&(j?r.jsx(k,{...$}):r.jsx(_,{...ee}))]})},pa=Q(e=>r.jsx(ar,{...e,type:"info"}),"Info"),es=Q(e=>r.jsx(ar,{...e,type:"success"}),"Success"),ha=Q(e=>r.jsx(ar,{...e,type:"warning"}),"Warning"),ma=Q(e=>r.jsx(ar,{...e,type:"error"}),"Error");ar.Info=pa;ar.Success=es;ar.Warning=ha;ar.Error=ma;const ne=Q(ar,"Alert"),pw=({size:e,color:t,className:n,tag:o,shadow:s,border:a,radius:l,tooltip:i,icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,label:j,text:y,children:w,Content:g=To,...h})=>{const m=ce("badge",e,t,n,{tag:o,icon:c},Ts(s),wo(a),Es(l)),S={icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,text:y,children:w};return r.jsx("div",{className:m,"data-tooltip":i,"aria-label":j,...h,children:r.jsx(g,{...S})})},ae=Q(pw,"Badge"),hw=({type:e="button",size:t,color:n,className:o,disabled:s,bright:a,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:f,label:b,tooltip:j,tabIndex:y=0,icon:w,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:S,iconRightClass:C,text:x,children:_,Content:k=To,...N})=>{const O=ce(t,n,o,{bright:a,dark:l,outline:i,bare:c,shaded:d,icon:w},Ts(u),wo(p),Es(f)),L={icon:w,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:S,iconRightClass:C,text:x,children:_};return r.jsx("button",{className:O,"aria-label":b,tabIndex:y,type:e,disabled:s,"aria-disabled":s,"data-tooltip":j,...N,children:r.jsx(k,{...L})})},B=Q(hw,"Button"),mw=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:s=B,...a})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(s,{className:o,...a,...l},i)):t}),yn=Q(mw,"Buttons"),fw=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:ce(e,{disabled:t}),ref:o,children:n}),xw=Q(fw,"CheckboxLabel"),gw=({disabled:e=!1,tabIndex:t=0,onChange:n=Ce,ref:o,...s})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:a=>n(a.target.checked),...s}),vw=Q(gw,"CheckboxInput"),bw=({size:e,color:t,border:n,inline:o,className:s="checkbox",text:a,ref:l,inputRef:i,checked:c,checkedText:d=a,uncheckedText:u=a,inputClass:p,Label:f=xw,Input:b=vw,...j})=>r.jsxs(f,{className:ce(e,t,s,wo(n),{inline:o}),ref:l,checked:c,...j,children:[r.jsx(b,{className:p,ref:i,checked:c,...j}),c?d:u]}),Mn=Q(bw,"Checkbox"),jw=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},yw=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:s}=jw({checked:e}),a=l=>{s(l),t&&t(l)};return r.jsx(Mn,{checked:o,onChange:a,...n})},Fr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},Sw=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:s="red",confirmClass:a,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:s,className:a},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:f,className:b=f,buttonClass:j,onClick:y=()=>window.alert("No confirm action defined"),...w})=>{const{isVisible:g,hide:h,show:m}=Fr({visible:t}),C={iconRight:n,text:o,color:s,className:a,...u,onClick:_=>{_.preventDefault(),h(),y()}},x={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:h};return r.jsx(yn,{className:b,buttonClass:j,buttons:g?[x,C]:[{...w,onClick:m}]})},Pn=Q(Sw,"Confirm");var Cw=Object.defineProperty,_w=(e,t,n)=>t in e?Cw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ad=(e,t,n)=>(_w(e,typeof t!="symbol"?t+"":t,n),n);const Ur=(e,t={})=>{const n=V.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:s=>r.jsx(n.Provider,{value:s,children:o.children})}),Consumer:o=>s=>r.jsx(n.Consumer,{children:a=>r.jsx(o,{...a,...s})}),Use:()=>V.useContext(n)}};function ww(e={},t={},n={}){return Object.entries(t).reduce((o,[s,a])=>{const l=n[a];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function Tw(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const s=e[o]||kw(`Cannot expose non-existent action method: ${o}`);return n[o]=s.bind(e),n},{})}function Ew(e,t){const n=e.debug??t.debug,o=Qf(e.debugPrefix??t.debugPrefix,e),s=Qf(e.debugColor??t.debugColor,e);return n?o?(a,...l)=>console.log(`%c${o}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function Qf(e,t){return typeof e=="function"?e(t):e}function kw(...e){throw new Error(e.join(""))}class Ta extends V.Component{constructor(t){super(t);const n=this.constructor;this.debug=Ew(t,n),this.state=ww(n.initialState,n.initialProps,t),this.actions=Tw(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Ad(Ta,"initialState",{}),Ad(Ta,"initialProps",{}),Ad(Ta,"actions",[]);const Md=e=>{Co(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=V2(t)),e.id||(e.id=t),e},Nw=e=>{if(Co(e))return qa(e,Md);if(ws(e))return e.reduce((t,n)=>{const o=Md(n);return t[o.field]=o,t},{});if(_o(e))return Object.entries(e).reduce((t,[n,o])=>{const s=Md({...o,field:n});return t[s.field]=s,t},{});U2("Invalid columns definition")},Rw=(e,t)=>{if(t){const n=t.filter(o=>e[o]);if(n.length)return n}return Object.keys(e).filter(n=>!e[n].hidden)},Ow=(e,t)=>{if(t){const n=t.filter(o=>e[o]);if(n.length)return n}return Object.keys(e)},Dw=(e,t,n)=>t&&e[t]?[t,n]:[null,null],Lw=({value:e,search:t})=>ge(e)?e.toString()===t.toString():!1,Qs=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(ge(e)){const o=e.toString().toLowerCase();return n.every(s=>o.indexOf(s)>-1)}else return!1},Bw=({value:e,search:t})=>ge(e)?parseInt(e)===parseInt(t):!1,$w=({value:e,search:t})=>ge(e)?parseFloat(e)===parseFloat(t):!1,Aw=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},Xf={string:Qs,text:Qs,number:Qs,price:Qs,pounds:Qs,select:Lw,boolean:Aw,integer:Bw,float:$w},Mw=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(s=>o.every(a=>{const l=n[a],i=t[a],c=i.field||a,d=s[c],u=i.filterType||i.type,p=i.filter||Xf[u]||Xf.text;return ge(l)&&l.length?p({row:s,field:c,value:d,search:l}):!0}))},Pw=(e,t=1,n=e.length)=>{const o=e.length,s=Math.ceil(o/n);t=Math.min(t,s);const a=t-1,l=n*a,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:s,page:a,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:s,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},Jf={string:Hf,text:Hf,number:Bd,price:Bd,currency:Bd,integer:Uf,id:Uf},Iw=(e,t,n,o)=>{if(!n)return e;const s=t[n],a=s.sort,l=s.type||"text",i=Bc(a)?a:(Jf[l]||Jf.text)(n);return e.sort(o?UC(i):i)},zw=({render:e,rows:t=[],storageKey:n,storageItem:o="state",debug:s,...a})=>{const l=s?console.log:Ce,[i,c]=v.useMemo(()=>{const O=n&&Fc(n),L=O?O.get(o,{}):{};return[O,L]},[n]),[d,u,p,f,b]=v.useMemo(()=>{const O=Nw(a.columns);return[O,Rw(O,c.visibleColumns),Ow(O,c.columnOrder),...Dw(O,c.sortColumn??a.sortColumn,c.sortReverse??a.sortReverse)]},[a.columns,a.sortColumn,a.sortReverse,c]),[j,y]=Xc({pageNo:c.pageNo??a.pageNo??1,pageSize:c.pageSize??a.pageSize??10,sortColumn:f,sortReverse:b,columnOrder:p,visibleColumns:u});v.useEffect(()=>{i&&(l("Saving state in local storage:",j),i.set(o,j))},[j,i]);const w=O=>{j.sortColumn===O?(l(`Sort column already set to ${O}, changing direction`),y.setSortReverse(L=>!L)):(l(`Setting sort column to ${O}`),y.setSortColumn(O),y.setSortReverse(!1))},g=O=>y.setVisibleColumns(L=>{const U=qa(L),Z=U[O]?L.filter(te=>te!==O):Object.keys(d).filter(te=>te===O||U[te]);return l("New visible columns:",Z),Z}),h=O=>{let L=[],U=[];const Z=qa(j.visibleColumns);O.forEach(te=>{L.push(te),Z[te]&&U.push(te)}),l("New order of all columns:",L),l("New order of visible columns:",U),y.setVisibleColumns(U),y.setColumnOrder(L)},[m,S]=v.useState(!1),[C,x]=v.useState({}),_=O=>{O.preventDefault(),O.stopPropagation(),S(L=>!L)},k=(O,L)=>{x(U=>{const Z={...U};return ge(L)&&L.length?Z[O]=L:delete Z[O],Z}),y.setPageNo(1)},N=v.useMemo(()=>Pw(Iw(Mw(t,d,C),d,j.sortColumn,j.sortReverse),j.pageNo,j.pageSize),[t,d,C,j.sortColumn,j.sortReverse,j.pageNo,j.pageSize]);return e({...a,rows:t,columns:d,page:N,showFilters:m,toggleFilters:_,filters:C,setFilter:k,toggleSortColumn:w,toggleVisibleColumn:g,changeColumnOrder:h,...j,...y})},xt=Ur(zw),Fw=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(B,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(B,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${ua(e.total)} rows`:`rows ${ua(e.from)}-${ua(e.to)} of ${ua(e.total)}`," "]})]}),Uw=xt.Consumer(Fw);var Hn;let m3=(Hn=class extends Ta{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),zr(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():this.debug(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Ic:case Hh:this.state.isOpen?this.close():this.open();break;case zc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},ve(Hn,"debug",!1),ve(Hn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onClick:Ce,onOpen:Ce,onClose:Ce}),ve(Hn,"inactiveState",{isOpen:!1}),ve(Hn,"initialState",{...Hn.inactiveState}),Hn);const to=class to extends m3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Fh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Uh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Ic:case Hh:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case zc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return rw(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return ow(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return sw(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return aw(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&ge(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){h3(this._menuRef,t)}};ve(to,"debug",!1),ve(to,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onClick:Ce,onOpen:Ce,onClose:Ce,onSelect:Ce,closeOnSelect:!0}),ve(to,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),ve(to,"initialState",{...to.inactiveState});let ic=to;var kn;let Hw=(kn=class extends ic{},ve(kn,"debug",!1),ve(kn,"debugPrefix","Dropdown > "),ve(kn,"debugColor","MediumVioletRed"),ve(kn,"defaultProps",{...kn.defaultProps,options:[],displayOption:cw}),ve(kn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),kn);const fl=Ur(Hw),Vw=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(To,{...Bh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),Ww=fl.Consumer(Vw),Zw=({option:e,active:t,activeRef:n,selected:o,onClick:s,onMouseEnter:a,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:ce(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:a,onClick:s,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),Kw=fl.Consumer(Zw),Yw=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:ce(t,e.className)}),Gw=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:ce(n,t,e.className),children:e.heading}),qw=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:s,selectOption:a,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=Kw,Separator:u=Yw,Heading:p=Gw})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((f,b)=>f.separator?r.jsx(u,{option:f},b):f.heading?r.jsx(p,{option:f},b):r.jsx(d,{option:f,active:ge(o)&&e[o]===f,selected:s===f,onClick:()=>a(f),onMouseEnter:()=>l(b)},f.id??f.value??b))}),Qw=fl.Consumer(qw),Xw=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:s,size:a,wide:l,Trigger:i=Ww,Options:c=Qw})=>r.jsxs("div",{className:ce(e,a,o?t:n,{right:s,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),Jw=fl.Consumer(Xw),eT=({Content:e=Jw,...t})=>r.jsx(fl.Provider,{...t,children:r.jsx(e,{})}),Hr=Q(eT,"DropdownMenu"),tT=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Hr,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),nT=xt.Consumer(tT);class fa extends m3{}ve(fa,"debug",!1),ve(fa,"debugPrefix","Dropdown > "),ve(fa,"debugColor","MediumVioletRed"),ve(fa,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const xl=Ur(fa),rT=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(To,{...Bh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),oT=xl.Consumer(rT),sT=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),aT=xl.Consumer(sT),lT=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:s,size:a,wide:l,Trigger:i=oT,Body:c=aT})=>r.jsxs("div",{className:ce(e,a,o?t:n,{right:s,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),iT=xl.Consumer(lT),cT=({Content:e=iT,content:t,children:n,...o})=>r.jsx(xl.Provider,{content:t||n,...o,children:r.jsx(e,{})}),Sn=Q(cT,"Dropdown"),dT=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:s,isVisible:a,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx(Mn,{className:"fluid flex middle no-focus",checked:a[e.id]||!1,onChange:()=>s(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(re,{name:"drag",className:"drag-handle"})})]}),uT=({close:e})=>r.jsx(B,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),pT=xl.Consumer(uT);function hT(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(s=>s(o))},t)}const Uc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ns(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Vh(e){return"nodeType"in e}function Ct(e){var t,n;return e?Ns(e)?e:Vh(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Wh(e){const{Document:t}=Ct(e);return e instanceof t}function gl(e){return Ns(e)?!1:e instanceof Ct(e).HTMLElement}function f3(e){return e instanceof Ct(e).SVGElement}function Rs(e){return e?Ns(e)?e.document:Vh(e)?Wh(e)?e:gl(e)||f3(e)?e.ownerDocument:document:document:document}const tn=Uc?v.useLayoutEffect:v.useEffect;function Hc(e){const t=v.useRef(e);return tn(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t.current==null?void 0:t.current(...o)},[])}function mT(){const e=v.useRef(null),t=v.useCallback((o,s)=>{e.current=setInterval(o,s)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Qa(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return tn(()=>{n.current!==e&&(n.current=e)},t),n}function vl(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function cc(e){const t=Hc(e),n=v.useRef(null),o=v.useCallback(s=>{s!==n.current&&(t==null||t(s,n.current)),n.current=s},[]);return[n,o]}function dc(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Pd={};function bl(e,t){return v.useMemo(()=>{if(t)return t;const n=Pd[e]==null?0:Pd[e]+1;return Pd[e]=n,e+"-"+n},[e,t])}function x3(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return o.reduce((a,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=a[c];u!=null&&(a[c]=u+e*d)}return a},{...t})}}const ds=x3(1),Xa=x3(-1);function fT(e){return"clientX"in e&&"clientY"in e}function Vc(e){if(!e)return!1;const{KeyboardEvent:t}=Ct(e.target);return t&&e instanceof t}function xT(e){if(!e)return!1;const{TouchEvent:t}=Ct(e.target);return t&&e instanceof t}function uc(e){if(xT(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return fT(e)?{x:e.clientX,y:e.clientY}:null}const Lr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Lr.Translate.toString(e),Lr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),e1="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function gT(e){return e.matches(e1)?e:e.querySelector(e1)}const vT={display:"none"};function bT(e){let{id:t,value:n}=e;return V.createElement("div",{id:t,style:vT},n)}function jT(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const s={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return V.createElement("div",{id:t,style:s,role:"status","aria-live":o,"aria-atomic":!0},n)}function yT(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const g3=v.createContext(null);function ST(e){const t=v.useContext(g3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function CT(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:s,event:a}=o;e.forEach(l=>{var i;return(i=l[s])==null?void 0:i.call(l,a)})},[e]),t]}const _T={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},wT={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function TT(e){let{announcements:t=wT,container:n,hiddenTextDescribedById:o,screenReaderInstructions:s=_T}=e;const{announce:a,announcement:l}=yT(),i=bl("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),ST(v.useMemo(()=>({onDragStart(p){let{active:f}=p;a(t.onDragStart({active:f}))},onDragMove(p){let{active:f,over:b}=p;t.onDragMove&&a(t.onDragMove({active:f,over:b}))},onDragOver(p){let{active:f,over:b}=p;a(t.onDragOver({active:f,over:b}))},onDragEnd(p){let{active:f,over:b}=p;a(t.onDragEnd({active:f,over:b}))},onDragCancel(p){let{active:f,over:b}=p;a(t.onDragCancel({active:f,over:b}))}}),[a,t])),!c)return null;const u=V.createElement(V.Fragment,null,V.createElement(bT,{id:o,value:s.draggable}),V.createElement(jT,{id:i,announcement:l}));return n?Vn.createPortal(u,n):u}var Qe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Qe||(Qe={}));function pc(){}function t1(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function ET(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const vn=Object.freeze({x:0,y:0});function v3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function kT(e,t){const n=uc(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function b3(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function NT(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function n1(e){let{left:t,top:n,height:o,width:s}=e;return[{x:t,y:n},{x:t+s,y:n},{x:t,y:n+o},{x:t+s,y:n+o}]}function j3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function r1(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const RT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=r1(t,t.left,t.top),a=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=v3(r1(c),s);a.push({id:i,data:{droppableContainer:l,value:d}})}}return a.sort(b3)},OT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=n1(t),a=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=n1(c),u=s.reduce((f,b,j)=>f+v3(d[j],b),0),p=Number((u/4).toFixed(4));a.push({id:i,data:{droppableContainer:l,value:p}})}}return a.sort(b3)};function DT(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),s=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),l=s-o,i=a-n;if(o<s&&n<a){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const LT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=[];for(const a of o){const{id:l}=a,i=n.get(l);if(i){const c=DT(i,t);c>0&&s.push({id:l,data:{droppableContainer:a,value:c}})}}return s.sort(NT)};function BT(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function y3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:vn}function $T(e){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];return s.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const AT=$T(1);function S3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function MT(e,t,n){const o=S3(t);if(!o)return e;const{scaleX:s,scaleY:a,x:l,y:i}=o,c=e.left-l-(1-s)*parseFloat(n),d=e.top-i-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),u=s?e.width/s:e.width,p=a?e.height/a:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const PT={ignoreTransform:!1};function Os(e,t){t===void 0&&(t=PT);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=Ct(e).getComputedStyle(e);d&&(n=MT(n,d,u))}const{top:o,left:s,width:a,height:l,bottom:i,right:c}=n;return{top:o,left:s,width:a,height:l,bottom:i,right:c}}function o1(e){return Os(e,{ignoreTransform:!0})}function IT(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function zT(e,t){return t===void 0&&(t=Ct(e).getComputedStyle(e)),t.position==="fixed"}function FT(e,t){t===void 0&&(t=Ct(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const a=t[s];return typeof a=="string"?n.test(a):!1})}function Wc(e,t){const n=[];function o(s){if(t!=null&&n.length>=t||!s)return n;if(Wh(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!gl(s)||f3(s)||n.includes(s))return n;const a=Ct(e).getComputedStyle(s);return s!==e&&FT(s,a)&&n.push(s),zT(s,a)?n:o(s.parentNode)}return e?o(e):n}function C3(e){const[t]=Wc(e,1);return t??null}function Id(e){return!Uc||!e?null:Ns(e)?e:Vh(e)?Wh(e)||e===Rs(e).scrollingElement?window:gl(e)?e:null:null}function _3(e){return Ns(e)?e.scrollX:e.scrollLeft}function w3(e){return Ns(e)?e.scrollY:e.scrollTop}function rp(e){return{x:_3(e),y:w3(e)}}var rt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(rt||(rt={}));function T3(e){return!Uc||!e?!1:e===document.scrollingElement}function E3(e){const t={x:0,y:0},n=T3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},s=e.scrollTop<=t.y,a=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:s,isLeft:a,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const UT={x:.2,y:.2};function HT(e,t,n,o,s){let{top:a,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),s===void 0&&(s=UT);const{isTop:d,isBottom:u,isLeft:p,isRight:f}=E3(e),b={x:0,y:0},j={x:0,y:0},y={height:t.height*s.y,width:t.width*s.x};return!d&&a<=t.top+y.height?(b.y=rt.Backward,j.y=o*Math.abs((t.top+y.height-a)/y.height)):!u&&c>=t.bottom-y.height&&(b.y=rt.Forward,j.y=o*Math.abs((t.bottom-y.height-c)/y.height)),!f&&i>=t.right-y.width?(b.x=rt.Forward,j.x=o*Math.abs((t.right-y.width-i)/y.width)):!p&&l<=t.left+y.width&&(b.x=rt.Backward,j.x=o*Math.abs((t.left+y.width-l)/y.width)),{direction:b,speed:j}}function VT(e){if(e===document.scrollingElement){const{innerWidth:a,innerHeight:l}=window;return{top:0,left:0,right:a,bottom:l,width:a,height:l}}const{top:t,left:n,right:o,bottom:s}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:s,width:e.clientWidth,height:e.clientHeight}}function k3(e){return e.reduce((t,n)=>ds(t,rp(n)),vn)}function WT(e){return e.reduce((t,n)=>t+_3(n),0)}function ZT(e){return e.reduce((t,n)=>t+w3(n),0)}function N3(e,t){if(t===void 0&&(t=Os),!e)return;const{top:n,left:o,bottom:s,right:a}=t(e);C3(e)&&(s<=0||a<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const KT=[["x",["left","right"],WT],["y",["top","bottom"],ZT]];class Zh{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Wc(n),s=k3(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[a,l,i]of KT)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=s[a]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ea{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var s;(s=this.target)==null||s.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function YT(e){const{EventTarget:t}=Ct(e);return e instanceof t?e:Rs(e)}function zd(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Kt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Kt||(Kt={}));function s1(e){e.preventDefault()}function GT(e){e.stopPropagation()}var xe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(xe||(xe={}));const R3={start:[xe.Space,xe.Enter],cancel:[xe.Esc],end:[xe.Space,xe.Enter]},qT=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case xe.Right:return{...n,x:n.x+25};case xe.Left:return{...n,x:n.x-25};case xe.Down:return{...n,y:n.y+25};case xe.Up:return{...n,y:n.y-25}}};class Kh{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Ea(Rs(n)),this.windowListeners=new Ea(Ct(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Kt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&N3(o),n(vn)}handleKeyDown(t){if(Vc(t)){const{active:n,context:o,options:s}=this.props,{keyboardCodes:a=R3,coordinateGetter:l=qT,scrollBehavior:i="smooth"}=s,{code:c}=t;if(a.end.includes(c)){this.handleEnd(t);return}if(a.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:vn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const f=Xa(p,u),b={x:0,y:0},{scrollableAncestors:j}=o.current;for(const y of j){const w=t.code,{isTop:g,isRight:h,isLeft:m,isBottom:S,maxScroll:C,minScroll:x}=E3(y),_=VT(y),k={x:Math.min(w===xe.Right?_.right-_.width/2:_.right,Math.max(w===xe.Right?_.left:_.left+_.width/2,p.x)),y:Math.min(w===xe.Down?_.bottom-_.height/2:_.bottom,Math.max(w===xe.Down?_.top:_.top+_.height/2,p.y))},N=w===xe.Right&&!h||w===xe.Left&&!m,O=w===xe.Down&&!S||w===xe.Up&&!g;if(N&&k.x!==p.x){const L=y.scrollLeft+f.x,U=w===xe.Right&&L<=C.x||w===xe.Left&&L>=x.x;if(U&&!f.y){y.scrollTo({left:L,behavior:i});return}U?b.x=y.scrollLeft-L:b.x=w===xe.Right?y.scrollLeft-C.x:y.scrollLeft-x.x,b.x&&y.scrollBy({left:-b.x,behavior:i});break}else if(O&&k.y!==p.y){const L=y.scrollTop+f.y,U=w===xe.Down&&L<=C.y||w===xe.Up&&L>=x.y;if(U&&!f.x){y.scrollTo({top:L,behavior:i});return}U?b.y=y.scrollTop-L:b.y=w===xe.Down?y.scrollTop-C.y:y.scrollTop-x.y,b.y&&y.scrollBy({top:-b.y,behavior:i});break}}this.handleMove(t,ds(Xa(p,this.referenceCoordinates),b))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Kh.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=R3,onActivation:s}=t,{active:a}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=a.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),s==null||s({event:e.nativeEvent}),!0)}return!1}}];function a1(e){return!!(e&&"distance"in e)}function l1(e){return!!(e&&"delay"in e)}class Yh{constructor(t,n,o){var s;o===void 0&&(o=YT(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:a}=t,{target:l}=a;this.props=t,this.events=n,this.document=Rs(l),this.documentListeners=new Ea(this.document),this.listeners=new Ea(o),this.windowListeners=new Ea(Ct(l)),this.initialCoordinates=(s=uc(a))!=null?s:vn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.DragStart,s1),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),this.windowListeners.add(Kt.ContextMenu,s1),this.documentListeners.add(Kt.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(l1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(a1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Kt.Click,GT,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Kt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:s,props:a}=this,{onMove:l,options:{activationConstraint:i}}=a;if(!s)return;const c=(n=uc(t))!=null?n:vn,d=Xa(s,c);if(!o&&i){if(a1(i)){if(i.tolerance!=null&&zd(d,i.tolerance))return this.handleCancel();if(zd(d,i.distance))return this.handleStart()}return l1(i)&&zd(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===xe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const QT={move:{name:"pointermove"},end:{name:"pointerup"}};class Gh extends Yh{constructor(t){const{event:n}=t,o=Rs(n.target);super(t,QT,o)}}Gh.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const XT={move:{name:"mousemove"},end:{name:"mouseup"}};var op;(function(e){e[e.RightClick=2]="RightClick"})(op||(op={}));class JT extends Yh{constructor(t){super(t,XT,Rs(t.event.target))}}JT.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===op.RightClick?!1:(o==null||o({event:n}),!0)}}];const Fd={move:{name:"touchmove"},end:{name:"touchend"}};class eE extends Yh{constructor(t){super(t,Fd)}static setup(){return window.addEventListener(Fd.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Fd.move.name,t)};function t(){}}}eE.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:s}=n;return s.length>1?!1:(o==null||o({event:n}),!0)}}];var ka;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(ka||(ka={}));var hc;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(hc||(hc={}));function tE(e){let{acceleration:t,activator:n=ka.Pointer,canScroll:o,draggingRect:s,enabled:a,interval:l=5,order:i=hc.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const b=rE({delta:p,disabled:!a}),[j,y]=mT(),w=v.useRef({x:0,y:0}),g=v.useRef({x:0,y:0}),h=v.useMemo(()=>{switch(n){case ka.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case ka.DraggableRect:return s}},[n,s,c]),m=v.useRef(null),S=v.useCallback(()=>{const x=m.current;if(!x)return;const _=w.current.x*g.current.x,k=w.current.y*g.current.y;x.scrollBy(_,k)},[]),C=v.useMemo(()=>i===hc.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!a||!d.length||!h){y();return}for(const x of C){if((o==null?void 0:o(x))===!1)continue;const _=d.indexOf(x),k=u[_];if(!k)continue;const{direction:N,speed:O}=HT(x,k,h,t,f);for(const L of["x","y"])b[L][N[L]]||(O[L]=0,N[L]=0);if(O.x>0||O.y>0){y(),m.current=x,j(S,l),w.current=O,g.current=N;return}}w.current={x:0,y:0},g.current={x:0,y:0},y()},[t,S,o,y,a,l,JSON.stringify(h),JSON.stringify(b),j,d,C,u,JSON.stringify(f)])}const nE={x:{[rt.Backward]:!1,[rt.Forward]:!1},y:{[rt.Backward]:!1,[rt.Forward]:!1}};function rE(e){let{delta:t,disabled:n}=e;const o=dc(t);return vl(s=>{if(n||!o||!s)return nE;const a={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[rt.Backward]:s.x[rt.Backward]||a.x===-1,[rt.Forward]:s.x[rt.Forward]||a.x===1},y:{[rt.Backward]:s.y[rt.Backward]||a.y===-1,[rt.Forward]:s.y[rt.Forward]||a.y===1}}},[n,t,o])}function oE(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return vl(s=>{var a;return t===null?null:(a=o??s)!=null?a:null},[o,t])}function sE(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:s}=o,a=s.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...a]},[]),[e,t])}var Ja;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ja||(Ja={}));var sp;(function(e){e.Optimized="optimized"})(sp||(sp={}));const i1=new Map;function aE(e,t){let{dragging:n,dependencies:o,config:s}=t;const[a,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=s,u=v.useRef(e),p=w(),f=Qa(p),b=v.useCallback(function(g){g===void 0&&(g=[]),!f.current&&l(h=>h===null?g:h.concat(g.filter(m=>!h.includes(m))))},[f]),j=v.useRef(null),y=vl(g=>{if(p&&!n)return i1;if(!g||g===i1||u.current!==e||a!=null){const h=new Map;for(let m of e){if(!m)continue;if(a&&a.length>0&&!a.includes(m.id)&&m.rect.current){h.set(m.id,m.rect.current);continue}const S=m.node.current,C=S?new Zh(c(S),S):null;m.rect.current=C,C&&h.set(m.id,C)}return h}return g},[e,a,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||b()},[n,p]),v.useEffect(()=>{a&&a.length>0&&l(null)},[JSON.stringify(a)]),v.useEffect(()=>{p||typeof i!="number"||j.current!==null||(j.current=setTimeout(()=>{b(),j.current=null},i))},[i,p,b,...o]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:a!=null};function w(){switch(d){case Ja.Always:return!1;case Ja.BeforeDragging:return n;default:return!n}}}function qh(e,t){return vl(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function lE(e,t){return qh(e,t)}function iE(e){let{callback:t,disabled:n}=e;const o=Hc(t),s=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:a}=window;return new a(o)},[o,n]);return v.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Zc(e){let{callback:t,disabled:n}=e;const o=Hc(t),s=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:a}=window;return new a(o)},[n]);return v.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function cE(e){return new Zh(Os(e),e)}function c1(e,t,n){t===void 0&&(t=cE);const[o,s]=v.useReducer(i,null),a=iE({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){s();break}}}}),l=Zc({callback:s});return tn(()=>{s(),e?(l==null||l.observe(e),a==null||a.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),a==null||a.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function dE(e){const t=qh(e);return y3(e,t)}const d1=[];function uE(e){const t=v.useRef(e),n=vl(o=>e?o&&o!==d1&&e&&t.current&&e.parentNode===t.current.parentNode?o:Wc(e):d1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function pE(e){const[t,n]=v.useState(null),o=v.useRef(e),s=v.useCallback(a=>{const l=Id(a.target);l&&n(i=>i?(i.set(l,rp(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const a=o.current;if(e!==a){l(a);const i=e.map(c=>{const d=Id(c);return d?(d.addEventListener("scroll",s,{passive:!0}),[d,rp(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(a)};function l(i){i.forEach(c=>{const d=Id(c);d==null||d.removeEventListener("scroll",s)})}},[s,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((a,l)=>ds(a,l),vn):k3(e):vn,[e,t])}function u1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==vn;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?Xa(e,n.current):vn}function hE(e){v.useEffect(()=>{if(!Uc)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function mE(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:s,handler:a}=o;return n[s]=l=>{a(l,t)},n},{}),[e,t])}function O3(e){return v.useMemo(()=>e?IT(e):null,[e])}const Ud=[];function fE(e,t){t===void 0&&(t=Os);const[n]=e,o=O3(n?Ct(n):null),[s,a]=v.useReducer(i,Ud),l=Zc({callback:a});return e.length>0&&s===Ud&&a(),tn(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),a())},[e]),s;function i(){return e.length?e.map(c=>T3(c)?o:new Zh(t(c),c)):Ud}}function D3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return gl(t)?t:e}function xE(e){let{measure:t}=e;const[n,o]=v.useState(null),s=v.useCallback(d=>{for(const{target:u}of d)if(gl(u)){o(p=>{const f=t(u);return p?{...p,width:f.width,height:f.height}:f});break}},[t]),a=Zc({callback:s}),l=v.useCallback(d=>{const u=D3(d);a==null||a.disconnect(),u&&(a==null||a.observe(u)),o(u?t(u):null)},[t,a]),[i,c]=cc(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const gE=[{sensor:Gh,options:{}},{sensor:Kh,options:{}}],vE={current:{}},Di={draggable:{measure:o1},droppable:{measure:o1,strategy:Ja.WhileDragging,frequency:sp.Optimized},dragOverlay:{measure:Os}};class Na extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const bE={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Na,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:pc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Di,measureDroppableContainers:pc,windowRect:null,measuringScheduled:!1},L3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:pc,draggableNodes:new Map,over:null,measureDroppableContainers:pc},jl=v.createContext(L3),B3=v.createContext(bE);function jE(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Na}}}function yE(e,t){switch(t.type){case Qe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Qe.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Qe.DragEnd:case Qe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Qe.RegisterDroppable:{const{element:n}=t,{id:o}=n,s=new Na(e.droppable.containers);return s.set(o,n),{...e,droppable:{...e.droppable,containers:s}}}case Qe.SetDroppableDisabled:{const{id:n,key:o,disabled:s}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const l=new Na(e.droppable.containers);return l.set(n,{...a,disabled:s}),{...e,droppable:{...e.droppable,containers:l}}}case Qe.UnregisterDroppable:{const{id:n,key:o}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const a=new Na(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function SE(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:s}=v.useContext(jl),a=dc(o),l=dc(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&a&&l!=null){if(!Vc(a)||document.activeElement===a.target)return;const i=s.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=gT(u);if(p){p.focus();break}}})}},[o,t,s,l,a]),null}function $3(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((s,a)=>a({transform:s,...o}),n):n}function CE(e){return v.useMemo(()=>({draggable:{...Di.draggable,...e==null?void 0:e.draggable},droppable:{...Di.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Di.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function _E(e){let{activeNode:t,measure:n,initialRect:o,config:s=!0}=e;const a=v.useRef(!1),{x:l,y:i}=typeof s=="boolean"?{x:s,y:s}:s;tn(()=>{if(!l&&!i||!t){a.current=!1;return}if(a.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=y3(u,o);if(l||(p.x=0),i||(p.y=0),a.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const f=C3(d);f&&f.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const Kc=v.createContext({...vn,scaleX:1,scaleY:1});var gr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(gr||(gr={}));const wE=v.memo(function(t){var n,o,s,a;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=gE,collisionDetection:p=LT,measuring:f,modifiers:b,...j}=t;const y=v.useReducer(yE,void 0,jE),[w,g]=y,[h,m]=CT(),[S,C]=v.useState(gr.Uninitialized),x=S===gr.Initialized,{draggable:{active:_,nodes:k,translate:N},droppable:{containers:O}}=w,L=_?k.get(_):null,U=v.useRef({initial:null,translated:null}),Z=v.useMemo(()=>{var Ke;return _!=null?{id:_,data:(Ke=L==null?void 0:L.data)!=null?Ke:vE,rect:U}:null},[_,L]),te=v.useRef(null),[we,je]=v.useState(null),[ee,$]=v.useState(null),P=Qa(j,Object.values(j)),I=bl("DndDescribedBy",l),W=v.useMemo(()=>O.getEnabled(),[O]),Y=CE(f),{droppableRects:Te,measureDroppableContainers:de,measuringScheduled:Se}=aE(W,{dragging:x,dependencies:[N.x,N.y],config:Y.droppable}),ie=oE(k,_),Le=v.useMemo(()=>ee?uc(ee):null,[ee]),dt=nd(),wt=lE(ie,Y.draggable.measure);_E({activeNode:_?k.get(_):null,config:dt.layoutShiftCompensation,initialRect:wt,measure:Y.draggable.measure});const fe=c1(ie,Y.draggable.measure,wt),Be=c1(ie?ie.parentElement:null),et=v.useRef({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:Te,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),At=O.getNodeFor((n=et.current.over)==null?void 0:n.id),sn=xE({measure:Y.dragOverlay.measure}),Tt=(o=sn.nodeRef.current)!=null?o:ie,cr=x?(s=sn.rect)!=null?s:fe:null,Ol=!!(sn.nodeRef.current&&sn.rect),Dl=dE(Ol?null:fe),Is=O3(Tt?Ct(Tt):null),Cn=uE(x?At??ie:null),_n=fE(Cn),Yr=$3(b,{transform:{x:N.x-Dl.x,y:N.y-Dl.y,scaleX:1,scaleY:1},activatorEvent:ee,active:Z,activeNodeRect:fe,containerNodeRect:Be,draggingNodeRect:cr,over:et.current.over,overlayNodeRect:sn.rect,scrollableAncestors:Cn,scrollableAncestorRects:_n,windowRect:Is}),No=Le?ds(Le,N):null,an=pE(Cn),Gr=u1(an),Ll=u1(an,[fe]),ln=ds(Yr,Gr),dr=cr?AT(cr,Yr):null,Et=Z&&dr?p({active:Z,collisionRect:dr,droppableRects:Te,droppableContainers:W,pointerCoordinates:No}):null,zs=j3(Et,"id"),[cn,Fs]=v.useState(null),ed=Ol?Yr:ds(Yr,Ll),Bl=BT(ed,(a=cn==null?void 0:cn.rect)!=null?a:null,fe),qr=v.useCallback((Ke,gt)=>{let{sensor:E,options:R}=gt;if(te.current==null)return;const D=k.get(te.current);if(!D)return;const M=Ke.nativeEvent,F=new E({active:te.current,activeNode:D,event:M,options:R,context:et,onStart(q){const X=te.current;if(X==null)return;const G=k.get(X);if(!G)return;const{onDragStart:ue}=P.current,Me={active:{id:X,data:G.data,rect:U}};Vn.unstable_batchedUpdates(()=>{ue==null||ue(Me),C(gr.Initializing),g({type:Qe.DragStart,initialCoordinates:q,active:X}),h({type:"onDragStart",event:Me})})},onMove(q){g({type:Qe.DragMove,coordinates:q})},onEnd:se(Qe.DragEnd),onCancel:se(Qe.DragCancel)});Vn.unstable_batchedUpdates(()=>{je(F),$(Ke.nativeEvent)});function se(q){return async function(){const{active:G,collisions:ue,over:Me,scrollAdjustedTranslate:le}=et.current;let ye=null;if(G&&le){const{cancelDrop:Pe}=P.current;ye={activatorEvent:M,active:G,collisions:ue,delta:le,over:Me},q===Qe.DragEnd&&typeof Pe=="function"&&await Promise.resolve(Pe(ye))&&(q=Qe.DragCancel)}te.current=null,Vn.unstable_batchedUpdates(()=>{g({type:q}),C(gr.Uninitialized),Fs(null),je(null),$(null);const Pe=q===Qe.DragEnd?"onDragEnd":"onDragCancel";if(ye){const ut=P.current[Pe];ut==null||ut(ye),h({type:Pe,event:ye})}})}}},[k]),$l=v.useCallback((Ke,gt)=>(E,R)=>{const D=E.nativeEvent,M=k.get(R);if(te.current!==null||!M||D.dndKit||D.defaultPrevented)return;const F={active:M};Ke(E,gt.options,F)===!0&&(D.dndKit={capturedBy:gt.sensor},te.current=R,qr(E,gt))},[k,qr]),Ro=sE(u,$l);hE(u),tn(()=>{fe&&S===gr.Initializing&&C(gr.Initialized)},[fe,S]),v.useEffect(()=>{const{onDragMove:Ke}=P.current,{active:gt,activatorEvent:E,collisions:R,over:D}=et.current;if(!gt||!E)return;const M={active:gt,activatorEvent:E,collisions:R,delta:{x:ln.x,y:ln.y},over:D};Vn.unstable_batchedUpdates(()=>{Ke==null||Ke(M),h({type:"onDragMove",event:M})})},[ln.x,ln.y]),v.useEffect(()=>{const{active:Ke,activatorEvent:gt,collisions:E,droppableContainers:R,scrollAdjustedTranslate:D}=et.current;if(!Ke||te.current==null||!gt||!D)return;const{onDragOver:M}=P.current,F=R.get(zs),se=F&&F.rect.current?{id:F.id,rect:F.rect.current,data:F.data,disabled:F.disabled}:null,q={active:Ke,activatorEvent:gt,collisions:E,delta:{x:D.x,y:D.y},over:se};Vn.unstable_batchedUpdates(()=>{Fs(se),M==null||M(q),h({type:"onDragOver",event:q})})},[zs]),tn(()=>{et.current={activatorEvent:ee,active:Z,activeNode:ie,collisionRect:dr,collisions:Et,droppableRects:Te,draggableNodes:k,draggingNode:Tt,draggingNodeRect:cr,droppableContainers:O,over:cn,scrollableAncestors:Cn,scrollAdjustedTranslate:ln},U.current={initial:cr,translated:dr}},[Z,ie,Et,dr,k,Tt,cr,Te,O,cn,Cn,ln]),tE({...dt,delta:N,draggingRect:dr,pointerCoordinates:No,scrollableAncestors:Cn,scrollableAncestorRects:_n});const td=v.useMemo(()=>({active:Z,activeNode:ie,activeNodeRect:fe,activatorEvent:ee,collisions:Et,containerNodeRect:Be,dragOverlay:sn,draggableNodes:k,droppableContainers:O,droppableRects:Te,over:cn,measureDroppableContainers:de,scrollableAncestors:Cn,scrollableAncestorRects:_n,measuringConfiguration:Y,measuringScheduled:Se,windowRect:Is}),[Z,ie,fe,ee,Et,Be,sn,k,O,Te,cn,de,Cn,_n,Y,Se,Is]),Al=v.useMemo(()=>({activatorEvent:ee,activators:Ro,active:Z,activeNodeRect:fe,ariaDescribedById:{draggable:I},dispatch:g,draggableNodes:k,over:cn,measureDroppableContainers:de}),[ee,Ro,Z,fe,g,I,k,cn,de]);return V.createElement(g3.Provider,{value:m},V.createElement(jl.Provider,{value:Al},V.createElement(B3.Provider,{value:td},V.createElement(Kc.Provider,{value:Bl},d)),V.createElement(SE,{disabled:(i==null?void 0:i.restoreFocus)===!1})),V.createElement(TT,{...i,hiddenTextDescribedById:I}));function nd(){const Ke=(we==null?void 0:we.autoScrollEnabled)===!1,gt=typeof c=="object"?c.enabled===!1:c===!1,E=x&&!Ke&&!gt;return typeof c=="object"?{...c,enabled:E}:{enabled:E}}}),TE=v.createContext(null),p1="button",EE="Droppable";function kE(e){let{id:t,data:n,disabled:o=!1,attributes:s}=e;const a=bl(EE),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=v.useContext(jl),{role:b=p1,roleDescription:j="draggable",tabIndex:y=0}=s??{},w=(c==null?void 0:c.id)===t,g=v.useContext(w?Kc:TE),[h,m]=cc(),[S,C]=cc(),x=mE(l,t),_=Qa(n);tn(()=>(p.set(t,{id:t,key:a,node:h,activatorNode:S,data:_}),()=>{const N=p.get(t);N&&N.key===a&&p.delete(t)}),[p,t]);const k=v.useMemo(()=>({role:b,tabIndex:y,"aria-disabled":o,"aria-pressed":w&&b===p1?!0:void 0,"aria-roledescription":j,"aria-describedby":u.draggable}),[o,b,y,w,j,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:k,isDragging:w,listeners:o?void 0:x,node:h,over:f,setNodeRef:m,setActivatorNodeRef:C,transform:g}}function A3(){return v.useContext(B3)}const NE="Droppable",RE={timeout:25};function OE(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:s}=e;const a=bl(NE),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(jl),u=v.useRef({disabled:n}),p=v.useRef(!1),f=v.useRef(null),b=v.useRef(null),{disabled:j,updateMeasurementsFor:y,timeout:w}={...RE,...s},g=Qa(y??o),h=v.useCallback(()=>{if(!p.current){p.current=!0;return}b.current!=null&&clearTimeout(b.current),b.current=setTimeout(()=>{d(Array.isArray(g.current)?g.current:[g.current]),b.current=null},w)},[w]),m=Zc({callback:h,disabled:j||!l}),S=v.useCallback((k,N)=>{m&&(N&&(m.unobserve(N),p.current=!1),k&&m.observe(k))},[m]),[C,x]=cc(S),_=Qa(t);return v.useEffect(()=>{!m||!C.current||(m.disconnect(),p.current=!1,m.observe(C.current))},[C,m]),tn(()=>(i({type:Qe.RegisterDroppable,element:{id:o,key:a,disabled:n,node:C,rect:f,data:_}}),()=>i({type:Qe.UnregisterDroppable,key:a,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Qe.SetDroppableDisabled,id:o,key:a,disabled:n}),u.current.disabled=n)},[o,a,n,i]),{active:l,rect:f,isOver:(c==null?void 0:c.id)===o,node:C,over:c,setNodeRef:x}}function DE(e){let{animation:t,children:n}=e;const[o,s]=v.useState(null),[a,l]=v.useState(null),i=dc(n);return!n&&!o&&i&&s(i),tn(()=>{if(!a)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){s(null);return}Promise.resolve(t(d,a)).then(()=>{s(null)})},[t,o,a]),V.createElement(V.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const LE={x:0,y:0,scaleX:1,scaleY:1};function BE(e){let{children:t}=e;return V.createElement(jl.Provider,{value:L3},V.createElement(Kc.Provider,{value:LE},t))}const $E={position:"fixed",touchAction:"none"},AE=e=>Vc(e)?"transform 250ms ease":void 0,ME=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:s,children:a,className:l,rect:i,style:c,transform:d,transition:u=AE}=e;if(!i)return null;const p=s?d:{...d,scaleX:1,scaleY:1},f={...$E,width:i.width,height:i.height,top:i.top,left:i.left,transform:Lr.Transform.toString(p),transformOrigin:s&&o?kT(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return V.createElement(n,{className:l,style:f,ref:t},a)}),PE=e=>t=>{let{active:n,dragOverlay:o}=t;const s={},{styles:a,className:l}=e;if(a!=null&&a.active)for(const[i,c]of Object.entries(a.active))c!==void 0&&(s[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(a!=null&&a.dragOverlay)for(const[i,c]of Object.entries(a.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(s))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},IE=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:Lr.Transform.toString(t)},{transform:Lr.Transform.toString(n)}]},zE={duration:250,easing:"ease",keyframes:IE,sideEffects:PE({styles:{active:{opacity:"0"}}})};function FE(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:s}=e;return Hc((a,l)=>{if(t===null)return;const i=n.get(a);if(!i)return;const c=i.node.current;if(!c)return;const d=D3(l);if(!d)return;const{transform:u}=Ct(l).getComputedStyle(l),p=S3(u);if(!p)return;const f=typeof t=="function"?t:UE(t);return N3(c,s.draggable.measure),f({active:{id:a,data:i.data,node:c,rect:s.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:s.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:s,transform:p})})}function UE(e){const{duration:t,easing:n,sideEffects:o,keyframes:s}={...zE,...e};return a=>{let{active:l,dragOverlay:i,transform:c,...d}=a;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},f={x:c.x-u.x,y:c.y-u.y,...p},b=s({...d,active:l,dragOverlay:i,transform:{initial:c,final:f}}),[j]=b,y=b[b.length-1];if(JSON.stringify(j)===JSON.stringify(y))return;const w=o==null?void 0:o({active:l,dragOverlay:i,...d}),g=i.node.animate(b,{duration:t,easing:n,fill:"forwards"});return new Promise(h=>{g.onfinish=()=>{w==null||w(),h()}})}}let h1=0;function HE(e){return v.useMemo(()=>{if(e!=null)return h1++,h1},[e])}const VE=V.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:s,transition:a,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggableNodes:j,droppableContainers:y,dragOverlay:w,over:g,measuringConfiguration:h,scrollableAncestors:m,scrollableAncestorRects:S,windowRect:C}=A3(),x=v.useContext(Kc),_=HE(p==null?void 0:p.id),k=$3(l,{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggingNodeRect:w.rect,over:g,overlayNodeRect:w.rect,scrollableAncestors:m,scrollableAncestorRects:S,transform:x,windowRect:C}),N=qh(f),O=FE({config:o,draggableNodes:j,droppableContainers:y,measuringConfiguration:h}),L=N?w.setRef:void 0;return V.createElement(BE,null,V.createElement(DE,{animation:O},p&&_?V.createElement(ME,{key:_,id:p.id,ref:L,as:i,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:N,style:{zIndex:d,...s},transform:k},n):null))});function Qh(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function WE(e,t){return e.reduce((n,o,s)=>{const a=t.get(o);return a&&(n[s]=a),n},Array(e.length))}function ci(e){return e!==null&&e>=0}function ZE(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function KE(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const di={scaleX:1,scaleY:1},YE=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:s,overIndex:a,index:l}=e;const i=(t=n[s])!=null?t:o;if(!i)return null;const c=GE(n,l,s);if(l===s){const d=n[a];return d?{x:s<a?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...di}:null}return l>s&&l<=a?{x:-i.width-c,y:0,...di}:l<s&&l>=a?{x:i.width+c,y:0,...di}:{x:0,y:0,...di}};function GE(e,t,n){const o=e[t],s=e[t-1],a=e[t+1];return!o||!s&&!a?0:n<t?s?o.left-(s.left+s.width):a.left-(o.left+o.width):a?a.left-(o.left+o.width):o.left-(s.left+s.width)}const Xh=e=>{let{rects:t,activeIndex:n,overIndex:o,index:s}=e;const a=Qh(t,o,n),l=t[s],i=a[s];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},ui={scaleX:1,scaleY:1},qE=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:s,rects:a,overIndex:l}=e;const i=(t=a[n])!=null?t:o;if(!i)return null;if(s===n){const d=a[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...ui}:null}const c=QE(a,s,n);return s>n&&s<=l?{x:0,y:-i.height-c,...ui}:s<n&&s>=l?{x:0,y:i.height+c,...ui}:{x:0,y:0,...ui}};function QE(e,t,n){const o=e[t],s=e[t-1],a=e[t+1];return o?n<t?s?o.top-(s.top+s.height):a?a.top-(o.top+o.height):0:a?a.top-(o.top+o.height):s?o.top-(s.top+s.height):0:0}const M3="Sortable",P3=V.createContext({activeIndex:-1,containerId:M3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Xh,disabled:{draggable:!1,droppable:!1}});function XE(e){let{children:t,id:n,items:o,strategy:s=Xh,disabled:a=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=A3(),p=bl(M3,n),f=i.rect!==null,b=v.useMemo(()=>o.map(x=>typeof x=="object"&&"id"in x?x.id:x),[o]),j=l!=null,y=l?b.indexOf(l.id):-1,w=d?b.indexOf(d.id):-1,g=v.useRef(b),h=!ZE(b,g.current),m=w!==-1&&y===-1||h,S=KE(a);tn(()=>{h&&j&&u(b)},[h,b,j,u]),v.useEffect(()=>{g.current=b},[b]);const C=v.useMemo(()=>({activeIndex:y,containerId:p,disabled:S,disableTransforms:m,items:b,overIndex:w,useDragOverlay:f,sortedRects:WE(b,c),strategy:s}),[y,p,S.draggable,S.droppable,m,b,w,c,f,s]);return V.createElement(P3.Provider,{value:C},t)}const JE=e=>{let{id:t,items:n,activeIndex:o,overIndex:s}=e;return Qh(n,o,s).indexOf(t)},ek=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:s,items:a,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==a&&s===l?!1:n?!0:l!==s&&t===c},tk={duration:200,easing:"ease"},I3="transform",nk=Lr.Transition.toString({property:I3,duration:0,easing:"linear"}),rk={roleDescription:"sortable"};function ok(e){let{disabled:t,index:n,node:o,rect:s}=e;const[a,l]=v.useState(null),i=v.useRef(n);return tn(()=>{if(!t&&n!==i.current&&o.current){const c=s.current;if(c){const d=Os(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,s]),v.useEffect(()=>{a&&l(null)},[a]),a}function sk(e){let{animateLayoutChanges:t=ek,attributes:n,disabled:o,data:s,getNewIndex:a=JE,id:l,strategy:i,resizeObserverConfig:c,transition:d=tk}=e;const{items:u,containerId:p,activeIndex:f,disabled:b,disableTransforms:j,sortedRects:y,overIndex:w,useDragOverlay:g,strategy:h}=v.useContext(P3),m=ak(o,b),S=u.indexOf(l),C=v.useMemo(()=>({sortable:{containerId:p,index:S,items:u},...s}),[p,s,S,u]),x=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:_,node:k,isOver:N,setNodeRef:O}=OE({id:l,data:C,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:L,activatorEvent:U,activeNodeRect:Z,attributes:te,setNodeRef:we,listeners:je,isDragging:ee,over:$,setActivatorNodeRef:P,transform:I}=kE({id:l,data:C,attributes:{...rk,...n},disabled:m.draggable}),W=hT(O,we),Y=!!L,Te=Y&&!j&&ci(f)&&ci(w),de=!g&&ee,Se=de&&Te?I:null,Le=Te?Se??(i??h)({rects:y,activeNodeRect:Z,activeIndex:f,overIndex:w,index:S}):null,dt=ci(f)&&ci(w)?a({id:l,items:u,activeIndex:f,overIndex:w}):S,wt=L==null?void 0:L.id,fe=v.useRef({activeId:wt,items:u,newIndex:dt,containerId:p}),Be=u!==fe.current.items,et=t({active:L,containerId:p,isDragging:ee,isSorting:Y,id:l,index:S,items:u,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:d,wasDragging:fe.current.activeId!=null}),At=ok({disabled:!et,index:S,node:k,rect:_});return v.useEffect(()=>{Y&&fe.current.newIndex!==dt&&(fe.current.newIndex=dt),p!==fe.current.containerId&&(fe.current.containerId=p),u!==fe.current.items&&(fe.current.items=u)},[Y,dt,p,u]),v.useEffect(()=>{if(wt===fe.current.activeId)return;if(wt&&!fe.current.activeId){fe.current.activeId=wt;return}const Tt=setTimeout(()=>{fe.current.activeId=wt},50);return()=>clearTimeout(Tt)},[wt]),{active:L,activeIndex:f,attributes:te,data:C,rect:_,index:S,newIndex:dt,items:u,isOver:N,isSorting:Y,isDragging:ee,listeners:je,node:k,overIndex:w,over:$,setNodeRef:W,setActivatorNodeRef:P,setDroppableNodeRef:O,setDraggableNodeRef:we,transform:At??Le,transition:sn()};function sn(){if(At||Be&&fe.current.newIndex===S)return nk;if(!(de&&!Vc(U)||!d)&&(Y||et))return Lr.Transition.toString({...d,property:I3})}}function ak(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function mc(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const lk=[xe.Down,xe.Right,xe.Up,xe.Left],ik=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:s,droppableContainers:a,over:l,scrollableAncestors:i}}=t;if(lk.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];a.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const f=s.get(p.id);if(f)switch(e.code){case xe.Down:o.top<f.top&&c.push(p);break;case xe.Up:o.top>f.top&&c.push(p);break;case xe.Left:o.left>f.left&&c.push(p);break;case xe.Right:o.left<f.left&&c.push(p);break}});const d=OT({active:n,collisionRect:o,droppableRects:s,droppableContainers:c,pointerCoordinates:null});let u=j3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=a.get(n.id),f=a.get(u),b=f?s.get(f.id):null,j=f==null?void 0:f.node.current;if(j&&b&&p&&f){const w=Wc(j).some((x,_)=>i[_]!==x),g=z3(p,f),h=ck(p,f),m=w||!g?{x:0,y:0}:{x:h?o.width-b.width:0,y:h?o.height-b.height:0},S={x:b.left,y:b.top};return m.x&&m.y?S:Xa(S,m)}}}};function z3(e,t){return!mc(e)||!mc(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function ck(e,t){return!mc(e)||!mc(t)||!z3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const dk=e=>{let{transform:t}=e;return{...t,y:0}};function F3(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const Jh=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:F3(o,n,t)},uk=e=>{let{transform:t}=e;return{...t,x:0}},U3=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:F3(t,n,o)},em=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:s=[Jh],strategy:a=Xh,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=ET(t1(Gh),t1(Kh,{coordinateGetter:ik}));function p(j){const y=e.findIndex(w=>w.id===j.active.id);d(y)}function f(){d(null)}function b(j){const{active:y,over:w}=j;if(y.id!==w.id){const g=e.findIndex(m=>m.id===y.id),h=e.findIndex(m=>m.id===w.id);e[g].moved=!0,t(Qh(e,g,h))}d(null)}return r.jsxs(wE,{sensors:u,collisionDetection:RT,onDragStart:p,onDragCancel:f,onDragEnd:b,modifiers:s,children:[r.jsx(XE,{items:e,strategy:a,children:r.jsx(n,{...i,children:e.map(j=>r.jsx(pk,{id:j.id,item:j,Item:o,...i,role:"drag"},j.id))})}),l&&c&&r.jsx(VE,{children:r.jsx(l,{item:c,...i})})]})},pk=({id:e,item:t,Item:n,...o})=>{const{attributes:s,listeners:a,setNodeRef:l,transform:i,transition:c}=sk({id:e}),d={transform:Lr.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:a,...s,...o})},H3=({...e})=>r.jsx(em,{modifiers:[uk,U3,Jh],strategy:qE,...e}),hk=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:s})=>{const a=qa(t),l=o.map(c=>Bh(e[c],"id label")),i=c=>{s(c.map(d=>d.id))};return r.jsxs(Sn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(H3,{items:l,Item:dT,setOrder:i,isVisible:a,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(pT,{})]})},mk=xt.Consumer(hk),fk=({headerClass:e,Summary:t=Uw,PageSize:n=nT,Columns:o=mk})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),xk=xt.Consumer(fk),m1=({value:e})=>ge(e)?e:"",gk=({value:e})=>ge(e)?ua(e):"",f1=({value:e})=>ge(e)?IC(e):"",vk=({value:e})=>ge(e)?zC(e):"",bk=({value:e})=>ge(e)?e?"true":"false":"",jk={default:m1,text:m1,number:gk,price:f1,currency:f1,boolean:bk,title:vk},yk=({row:e,column:t,name:n,value:o,cellClass:s,sortColumn:a,sortingClass:l="sorting",displayTypes:i=jk})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=a===n,p=ce(s,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},Sk=xt.Consumer(yk),Ck=({row:e,columns:t,rowClass:n,onRowClick:o=Ce,visibleColumns:s,Cell:a=Sk})=>r.jsx("tr",{className:n,onClick:()=>o(e),children:s.map(l=>{const i=t[l],c=i.field??l,d=e[c];return r.jsx(a,{row:e,name:l,field:c,column:i,value:d},l)})}),_k=xt.Consumer(Ck),wk=({page:e,Row:t=_k})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),Tk=xt.Consumer(wk),Ek=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:s,sortUpIcon:a="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:f,filteringClass:b="filtering",filterIcon:j="filter",filteringIcon:y="filter-solid",filterIconClass:w="filter-icon",headingClass:g="heading",rightClass:h="right"})=>{const m=e===n,S=m&&o,C=ge(f[e]);return r.jsx("th",{className:ce(g,t.right?h:null,u?b:null,C?b:null,m?d:null),onClick:()=>s(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(re,{className:w,name:C?y:j,onClick:p}),r.jsx(re,{className:c,name:m?S?a:l:i})]})]})})},kk=xt.Consumer(Ek),Nk=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=kk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(s=>r.jsx(o,{name:s,column:e[s]},s))})}),Rk=xt.Consumer(Nk),Ok=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:s="filtering",clearFilterIcon:a="cross"})=>r.jsx("th",{className:ce(o,ge(t[e])?s:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(re,{name:a,onClick:()=>n(e,null)})]})}),Dk=xt.Consumer(Ok),Lk=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=Dk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(s=>r.jsx(o,{name:s,column:e[s]},s))})}),Bk=xt.Consumer(Lk),$k=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,onRowClick:o,showFilters:s,Headings:a=Rk,Filters:l=Bk,Rows:i=Tk})=>r.jsxs("table",{className:ce(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(a,{}),s&&r.jsx(l,{}),r.jsx(i,{})]}),Ak=xt.Consumer($k),Mk=({scrollX:e,Table:t=Ak})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),Pk=xt.Consumer(Mk),Ik=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:s="solid",render:a,...l})=>{const d=t-1,u=t,p=e+1,f=e>0?e-1:null,b=ge(f)?f+1:null,j=e<d?e+1:null,y=ge(j)?j+1:null;return a({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:f,prevPageNo:b,nextPage:j,nextPageNo:y,buttonClass:n,pageClass:o,currentPageClass:s,...l})},Vr=Ur(Ik),zk=Vr.Use,Fk=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:s="arrow-left"})=>r.jsx(B,{className:o,icon:s,onClick:()=>t(e),disabled:$c(e)}),Uk=Vr.Consumer(Fk),Hk=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:s="arrow-right"})=>r.jsx(B,{className:o,icon:s,onClick:()=>t(e),disabled:!e}),Vk=Vr.Consumer(Hk),Wk=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:s})=>r.jsx(B,{text:t,className:o,onClick:s}),Zk=Vr.Consumer(Wk),Kk=r.jsx(r.Fragment,{children:"…"}),Yk=({pageSeparatorClass:e="separator",pageSeparator:t=Kk})=>r.jsx("div",{className:e,children:t}),Gk=Vr.Consumer(Yk),qk=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:s,prevPageNo:a,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:f,pageClass:b=f,currentPageClass:j="brand",showFirstLast:y=!0,Separator:w=Gk,Page:g=Zk})=>r.jsxs("div",{className:p,children:[y&&s>n&&r.jsxs(r.Fragment,{children:[r.jsx(g,{page:n,pageNo:o,className:b,onClick:()=>u(n)}),s>n+1&&r.jsx(w,{})]}),ge(s)&&r.jsx(g,{page:s,pageNo:a,className:b,onClick:()=>u(s)}),r.jsx(g,{page:e,pageNo:t,className:j,current:!0,disabled:!0}),ge(l)&&r.jsx(g,{page:l,pageNo:i,className:b,onClick:()=>u(l)}),y&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(w,{}),r.jsx(g,{page:c,pageNo:d,className:b,onClick:()=>u(c)})]})]}),Qk=Vr.Consumer(qk),Xk=({className:e="pager",size:t,color:n,Previous:o=Uk,Next:s=Vk,Pages:a=Qk})=>r.jsxs("div",{className:ce(e,t,n),children:[r.jsx(o,{}),r.jsx(a,{}),r.jsx(s,{})]}),Jk=Vr.Consumer(Xk),eN=({Content:e=Jk,...t})=>r.jsx(Vr.Provider,{...t,children:r.jsx(e,{})}),Xt=Q(eN,"Pager"),tN=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Xt,{page:n.page,pages:n.pages,setPage:s=>o(s+1),...t})}),nN=xt.Consumer(tN),rN=({color:e,className:t="datatable",Header:n=xk,Body:o=Pk,Footer:s=nN})=>r.jsxs("section",{className:ce(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(s,{})]}),oN=xt.Consumer(rN),sN=({Content:e=oN,...t})=>r.jsx(xt.Provider,{...t,children:r.jsx(e,{})}),$t=Q(sN,"Datatable"),aN=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),lN=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),iN=({className:e,size:t,color:n,lined:o,border:s,radius:a,shaded:l,shadow:i,open:c,Summary:d=aN,Content:u=lN,...p})=>r.jsxs("details",{className:ce(e,n,wo(s),Es(a),Ts(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Je=Q(iN,"Details");var Nt;let cN=(Nt=class extends ic{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,s]=this.props.findOption(n,t),a=this.inputValue(o);return{value:o,cursor:s,input:a,options:n}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Fh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Uh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Ic:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case zc:this.close();break;case iw:this.debug("backspace"),this.searchBackspace();break;case lw:return;case Hh:if(this.state.isOpen){if(!(this.state.searchInput??wa).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){this.debug(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}this.debug(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??wa)+t)}searchBackspace(){this.setSearch(ge(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:ge(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},ve(Nt,"debug",!1),ve(Nt,"debugPrefix","Select > "),ve(Nt,"debugColor","MediumVioletRed"),ve(Nt,"defaultProps",{...Nt.defaultProps,options:[],search:!1,findOption:tw,validOption:ml,searchOptions:nw,displayValue:lc("displayValue"),displayOption:lc("displayOption")}),ve(Nt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),ve(Nt,"initialState",{value:wa,cursor:void 0,...Nt.inactiveState}),ve(Nt,"initialProps",{}),ve(Nt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),Nt);const Eo=Ur(cN),dN=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:s="Select",placeholderClass:a="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsxs("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:[ge(e)&&e.length?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:a,children:s})," "]}),r.jsx("div",{className:c,children:r.jsx(re,{name:"angle-down"})})]}),uN=Eo.Consumer(dN),pN=({option:e,active:t,activeRef:n,selected:o,onClick:s,onMouseEnter:a,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:ce(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:a,onClick:s,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),hN=Eo.Consumer(pN),mN=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),fN=Eo.Consumer(mN),xN=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:s,selectOption:a,setCursor:l,Option:i=hN,NoOptions:c=fN})=>r.jsx("div",{className:n,ref:t,children:ws(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:ge(o)&&e[o]===d,selected:s===d,onClick:()=>a(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),gN=Eo.Consumer(xN),vN=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:s,clearSearch:a,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:f,searchIcon:b="search",clearSearchIcon:j="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(re,{name:b})}),r.jsx("input",{ref:o,className:f,type:"text",placeholder:l,value:e??"",onClick:y=>y.stopPropagation(),onChange:y=>s(y.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:ce(u,e?p:null),onClick:a,children:r.jsx(re,{name:j})})]})}),bN=Eo.Consumer(vN),jN=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:s="open",closedClass:a="closed",Input:l=uN,Search:i=bN,Menu:c=gN})=>r.jsxs("div",{className:ce(o,t?s:a),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),yN=Eo.Consumer(jN),SN=({Content:e=yN,...t})=>r.jsx(Eo.Provider,{...t,children:r.jsx(e,{})}),rn=Q(SN,"Select");var CN=Object.defineProperty,_N=(e,t,n)=>t in e?CN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,On=(e,t,n)=>(_N(e,typeof t!="symbol"?t+"":t,n),n),wN=Object.defineProperty,TN=(e,t,n)=>t in e?wN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hd=(e,t,n)=>(TN(e,typeof t!="symbol"?t+"":t,n),n);function EN(e={},t={},n={}){return Object.entries(t).reduce((o,[s,a])=>{const l=n[a];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function kN(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const s=e[o]||DN(`Cannot expose non-existent action method: ${o}`);return n[o]=s.bind(e),n},{})}function NN(e,t){const n=e.debug??t.debug,o=x1(e.debugPrefix??t.debugPrefix,e),s=x1(e.debugColor??t.debugColor,e);return n?o?(a,...l)=>console.log(`%c${o}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function RN(e){return Array.isArray(e)}function V3(e){return typeof e=="function"}function x1(e,t){return V3(e)?e(t):e}function ON(e){return RN(e)?e:[e]}function DN(...e){throw new Error(e.join(""))}const W3=(e,t={})=>{const n=V.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:s=>r.jsx(n.Provider,{value:s,children:o.children})}),Consumer:o=>s=>r.jsx(n.Consumer,{children:a=>r.jsx(o,{...a,...s})}),Children:({children:o})=>ON(o).map((s,a)=>V3(s)?r.jsx(n.Consumer,{children:s},a):s),Use:()=>V.useContext(n)}};let Li=class extends V.Component{constructor(e){super(e);const t=this.constructor;this.debug=NN(e,t),this.state=EN(t.initialState,t.initialProps,e),this.actions=kN(this,t.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Hd(Li,"initialState",{}),Hd(Li,"initialProps",{}),Hd(Li,"actions",[]);function Z3(e){return typeof e=="boolean"}function Ds(e){return typeof e=="string"}function el(e){return Array.isArray(e)}function Yc(e){return typeof e=="function"}function LN(e){return e instanceof RegExp}function Ls(e){return typeof e=="object"&&!el(e)&&!K3(e)}function BN(e){return e===void 0}function K3(e){return e===null}function Pt(e){return!(BN(e)||K3(e))}function $N(e){return!Pt(e)}function AN(...e){throw new Error(e.join(""))}const g1=(e,...t)=>Yc(e)?e(...t):e;function us(){}function MN(){return Intl.DateTimeFormat().resolvedOptions().locale}MN();function Y3(e,t=/,\s*|\s+/){return $N(e)?[]:Ds(e)?e.length?e.split(t):[]:el(e)?e:[e]}function G3(e,t=!0,n={}){return Ls(e)?e:Y3(e).reduce((o,s)=>(o[s]=Yc(t)?t(s):t,o),n)}function PN(e){if(Yc(e))return e;if(LN(e))return t=>e.test(t);if(Ls(e))return t=>!!e[t];if(el(e)||Ds(e)){const t=G3(e);return n=>!!t[n]}AN("Invalid selector() specification: "+e)}const IN=(e,t,n={})=>{let o={},s={delete:!1,...n};const a=PN(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),o[l]=i}}),o},zN="",FN="blur",yl="changed",UN="disabled",Gc="focus",HN="fulfilled",Sl="invalid",q3="Optional",VN="radio",Q3="Required",WN="A value is required",v1="reset",Cl="submitted",Bs="submitting",tm="text",ZN="unvalidated",_l="valid",Wr="validating",KN=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],YN=["id","name","action","method","encType"];let X3=class extends Li{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(v1)}}setStatus(e,t={},n=us){this.mounted&&this.setState(o=>({...Yc(t)?t(o):t,status:this.newStatus(e,o.status)}),n)}setResetState(e,t){this.setStatus(v1,e,t)}setChangedState(e,t){this.setStatus(yl,e,t)}setValidatingState(e,t){this.setStatus(Wr,e,t)}setInvalidState(e,t){this.setStatus(Sl,e,t)}setValidState(e,t){this.setStatus(_l,e,t)}setUnvalidatedState(e,t){this.setStatus(ZN,e,t)}};function J3(e,t){return t.reduce((n,o)=>(Pt(e[o])&&(n[o]=e[o]),n),{})}const qc=e=>J3(e,KN),GN=e=>J3(e,YN),e0=e=>e.filter(Pt).join(" "),qN=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Bn=(...e)=>e0(e.flatMap(t=>Ls(t)?qN(t):t)),Qc=e=>Bn(e.inputClass,e.inline&&"inline"),ts=(e,t,n=t)=>(e==null?void 0:e[t])||n,QN=(e,t={},...n)=>e0(Object.entries(e).reduce((o,[s,a])=>(a&&o.push(t[s]||s),o),[...n])),XN=e=>{const{status:t,className:n,classes:o,required:s,showRequired:a,showOptional:l}=e;return QN(t,o,ts(o,"field"),n,a&&s?"required":null,l&&!s?"optional":null)},t0=(e,...t)=>{const{gap:n,space:o,stack:s,className:a}=e;return a||(o?Bn("flex","space",...t):Bn("flex",n?`gap-v-none gap-h-${n}`:null,s?`stack-${s}`:null,...t))},JN=(e,...t)=>{const{grid:n,gap:o,stack:s,className:a}=e;return a||(n?Bn(`grid-${n}`,o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t):Bn(...t))},eR={boolean:!0,string:!0,number:!0},n0=e=>eR[typeof e]?{value:e,text:e}:e,fc=(...e)=>function(...t){for(let n of e.filter(Boolean))n(...t)};function b1(e){if(Z3(e))return[1,!1];if(Pt(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const tR=(e,t)=>Ds(e)?{[t]:e}:e,nR={submittingClass:Bs,validatingClass:Wr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},j1={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:WN,requiredLabel:Q3,optionalLabel:q3},rR=G3(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),bs={[_l]:!1,[Sl]:!1},oR={...bs,[yl]:!0},sR={...bs,[Wr]:!0},aR={[_l]:!1,[Sl]:!0,[Wr]:!1},lR={[_l]:!0,[Sl]:!1,[Wr]:!1},iR={[Gc]:!1},cR={[Gc]:!0},dR={[Bs]:!0,[Cl]:!1},uR={[Bs]:!1,[Cl]:!0},r0={changed:oR,validating:sR,invalid:aR,valid:lR},o0=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),pR=()=>{const e={...bs,[yl]:!1,[Wr]:!1,[Cl]:!1,[Bs]:!1};return o0({...r0,reset:e,submitting:dR,submitted:uR,unvalidated:bs})},hR=(e={})=>{const t={...bs,[yl]:!1,[Wr]:!1,[Gc]:!1,[UN]:e.disabled||!1};return o0({...r0,reset:t,focus:cR,blur:iR,unvalidated:bs})},mR=({status:e,any:t=!1,...n})=>{const o=[yl,Wr,_l,Sl,Bs,Cl].filter(s=>Pt(n[s])).map(s=>e[s]);return t?o.some(Boolean):o.every(Boolean)};class Io extends X3{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,o={...n},s={...nR,...this.props};this.state={...s,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,n){var o,s;const a=((o=this.props.fields)==null?void 0:o[t])??{},l=n.value??((s=this.props.values)==null?void 0:s[t]);return{name:t,...IN(this.props,rR),...a,...n,value:l}}attachField(t,n){this.debug(`attaching ${t} field`),this.fields[t]=n,this.setState(o=>({values:{...o.values,[t]:n.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(Bs,t,n)}setSubmittedState(t,n){this.setStatus(Cl,t,n)}setFocus(t,n){var o;n==null||n.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,n){this.debug(`setValue(${t}, ${n})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:n}}))}setValues(t,n){this.debug("setValues():",t),n==null||n.preventDefault(),Object.entries(t).forEach(([o,s])=>{var a;return(a=this.fields[o])==null?void 0:a.setValue(s)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((s,{status:a,value:l,reason:i})=>(a===HN?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(i),s),{values:{...this.state.values},errors:[]})).then(o=>{var s;return this.debug("field validation complete: ",o),(s=o.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",o),n(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(a=>t({...o,values:a})).catch(a=>n(a))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const n=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",n),this.setSubmittedState(),n!=null&&n.ok||(n==null?void 0:n.status)===200)this.debug(`Success response ok:${n==null?void 0:n.ok} status:${n==null?void 0:n.status}`),this.handleSuccess(n);else if((n==null?void 0:n.status)>=400&&n.status<=500)this.debug(`Error response status:${n==null?void 0:n.status}`),this.handleError(n.data);else throw new Error(`Unknown response: ${n==null?void 0:n.status}`)}catch(n){this.debug("onSubmit error:",n),this.setSubmittedState(),this.handleError(Ds(n)?{error:n}:n instanceof Error?{error:n.message}:n)}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||us;this.setValidState({},fc(()=>n(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const n=el(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||us;this.setInvalidState(t,fc(()=>o(t),n?()=>n.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const n=t.reduce((o,s)=>{const a=s.name??s.param??s.field,{message:l}=s,i=a&&this.fields[a];return i&&(s.label||(s.label=i.props.label),i.setInvalidState({message:l}),o.push(i)),o},[]);return this.state.focusInvalidField&&n.length?n[0]:null}sanitiseErrors(t){if(Ls(t)&&(t=Object.entries(t).map(([n,o])=>({name:n,...tR(o,"message")}))),!el(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(n=>n.message??(n.message=n.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}On(Io,"newStatus",pR),On(Io,"debug",!1),On(Io,"debugPrefix","Form > "),On(Io,"debugColor","rebeccapurple"),On(Io,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const fR=W3(Io),{Context:FG,Provider:xR,Consumer:gR,Children:vR,Use:$s}=fR,bR=({children:e})=>{const t=$s(),n=GN(t),{submit:o,className:s}=t;return r.jsx("form",{className:s,...n,onSubmit:o,noValidate:!0,children:r.jsx(vR,{children:e})})},jR=({children:e,Layout:t=bR,...n})=>r.jsx(xR,{...n,children:r.jsx(t,{children:e})}),yR=e=>{const{id:t,value:n}=e;return{...e,id:t||v.useId(),value:n??e.default??zN}};class zo extends X3{constructor(t){super(t),this.name=t.name;const{value:n}=t,o=n;this.form=this.props.form,this.state={...this.state,initialValue:o,value:n,error:null},this.debug("initial state:",this.state),this.inputRef=v.createRef(),this.resetRef=v.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):us}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(Gc,t,n)}setBlurState(t,n){return this.setStatus(FN,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var n,o;t==null||t.preventDefault(),(o=(n=this.inputRef)==null?void 0:n.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:s,validateOnInvalid:a=!0,minValidateLength:l=1}=this.props,[i]=b1(n);let c=s||a&&o;i<l&&!o&&(c=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),c?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.form.setValue(this.props.name,n),this.setResetState({value:n,message:this.props.message},()=>{var o,s;return(s=(o=this.resetRef)==null?void 0:o.current)==null?void 0:s.reset()}),n}validation(t){this.validate(t).then(us).catch(us)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,fc(this.on.valid,t)),{...n,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,fc(this.on.invalid,t)),{...n,...o}})}validator(){return async(t,n)=>{const{value:o=""}=this.state,{validate:s,required:a,requiredMessage:l,validMessage:i}={...j1,...this.props},[,c]=b1(o);if(this.setValidatingState(),s)return await this.validateValidator(t,n,s,i);if(c)return await this.validateEmpty(t,n,a,i,l);this.debug("no validation defined"),t({value:o,message:i})}}async validateValidator(t,n,o,s){this.debug("calling validate function");const a=this.getContext();try{this.debug(`calling validate function with value [${a.value}]`);const l=await o(a.value,a,t,n);this.debug("validate function passed:",l),t(Ls(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const i=Ds(l)?l:l.message;this.debug("rejecting with message:",i),n({message:i})}}validateEmpty(t,n,o,s,a){o?(this.debug("failing validation - required field is empty"),n({message:a})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,n){n==null||n.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,n){n==null||n.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...j1,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}On(zo,"newStatus",hR),On(zo,"debug",!1),On(zo,"debugPrefix",e=>`Field [${e.name}] > `),On(zo,"debugColor","teal"),On(zo,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const SR=W3(zo),{Context:UG,Provider:CR,Consumer:HG,Children:_R,Use:_t}=SR,s0=({field:e=_t()})=>{const{label:t,id:n,required:o}=e,s=e.showRequired&&o,a=e.showOptional&&!o,l=t||s||a,i=e.labelClass,c={};return s&&e.requiredLabel!==Q3&&(c["--required-text"]=`"${e.requiredLabel}"`),a&&e.optionalLabel!==q3&&(c["--optional-text"]=`"${e.optionalLabel}"`),l&&r.jsx("label",{htmlFor:n,className:i,style:c,children:t||r.jsx("span",{children:" "})})},wR=e=>t=>e.onChange(t.target.value),TR=e=>t=>e.onChange(t.target.checked),Br={default:wR,checkbox:TR},ER=({field:e=_t()})=>{const{id:t,text:n,inline:o,border:s,labelClass:a,type:l="checkbox",handler:i=Br[l]||Br.default}=e,c=qc(e),d=Bn("checkbox",a,{inline:o,border:s});return r.jsxs("label",{htmlFor:t,className:d,children:[r.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:Qc(e),...c,checked:e.value}),n]})},a0=({field:e=_t()})=>r.jsx("input",{type:"hidden",name:e.name,value:e.value}),kR=({field:e=_t()})=>{const{inline:t,border:n,options:o=[],inputClass:s,optionClass:a,optionsClass:l="options",type:i="radio",handler:c=Br[i]||Br.default}=e,d=qc(e);return r.jsx("div",{className:Bn(l),children:o.map((u,p)=>{u=n0(u);const f=`${e.id}-${u.value}`,b=e.value==u.value,j=(e.value?b:p==0)?e.inputRef:null,y=Bn("radio",a,u.className,{inline:t,border:n});return r.jsxs("label",{className:y,disabled:u.disabled,htmlFor:f,children:[r.jsx("input",{type:i,className:s,ref:j,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:f,checked:b,value:u.value}),u.text]},u.value)})})},NR=({field:e=_t()})=>{const{options:t=[],placeholder:n,type:o="select",optionClass:s="option",handler:a=Br[o]||Br.default}=e,l=qc(e);return r.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:Qc(e),onChange:a(e),...l,value:e.value,required:e.required||!!n,children:[!!n&&r.jsx("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(i=>(i=n0(i),r.jsx("option",{className:s,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},y1=({field:e=_t()})=>{const{type:t=tm,handler:n=Br[t]||Br.default}=e,o=qc(e);return r.jsx("input",{type:t,ref:e.inputRef,className:Qc(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:n(e),...o})},RR=({field:e=_t()})=>{const{rows:t=5,cols:n=20}=e;return r.jsx("textarea",{id:e.id,ref:e.inputRef,className:Qc(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:n})},tl={default:y1,checkbox:ER,hidden:a0,radio:kR,select:NR,text:y1,textarea:RR},l0=(e,t)=>tl[e]=t,OR=({field:e=_t()})=>r.jsx("div",{className:Bn("prefix",e.prefixClass),children:e.prefix}),DR=({field:e=_t()})=>r.jsx("div",{className:Bn("suffix",e.suffixClass),children:e.suffix}),LR=({field:e=_t()})=>{const{classes:t,prefix:n,suffix:o,inputsClass:s,inline:a,type:l=tm,Prefix:i=OR,Suffix:c=DR}=e,d=tl[l]||tl.default;let u=[ts(t,"inputs")];Pt(n)&&u.push(ts(t,"prefixed")),Pt(o)&&u.push(ts(t,"suffixed")),a&&u.push(ts(t,"inline")),Pt(s)&&u.push(s);const p=u.join(" ");return r.jsxs("div",{className:p,children:[Pt(n)&&r.jsx(i,{field:e}),r.jsx(d,{field:e}),Pt(o)&&r.jsx(c,{field:e})]})},i0=({field:e=_t()})=>{const{prefix:t,suffix:n,type:o=tm}=e,s=tl[o]||tl.default;return o==VN?r.jsx(s,{field:e}):Pt(t)||Pt(n)?r.jsx(LR,{}):r.jsx(s,{field:e})},c0=({field:e=_t()})=>{const{help:t,message:n,classes:o}=e,s=n??t,a=ts(o,"help");return s?r.jsx("div",{className:a,children:s}):null},d0=({field:e=_t(),children:t})=>{const{type:n,Label:o=s0,Message:s=c0,Input:a=i0}=e,l=XN(e);return n==="hidden"?r.jsx(a0,{field:e}):r.jsx("div",{className:l,children:t||r.jsxs(r.Fragment,{children:[r.jsx(o,{field:e}),r.jsx(a,{field:e}),r.jsx(s,{field:e})]})})},u0=({name:e,children:t,...n})=>{const o=$s(),s=yR(o.fieldSpec(e,n)),a=s.Layout||d0;return r.jsx(CR,{form:o,...s,children:t?r.jsx(_R,{children:t}):r.jsx(a,{})})},p0=({names:e,className:t,grid:n=!1,gap:o=4,stack:s,...a})=>{const l=Y3(e);return Z3(n)&&n&&(n=l.length),r.jsx("div",{className:JN({grid:n,gap:o,stack:s,props:a},t),children:l.map(i=>r.jsx(u0,{name:i,...a},i))})},BR=({className:e="",legend:t,children:n,fields:o,...s})=>r.jsxs("fieldset",{className:e,children:[!!t&&r.jsx("legend",{children:t}),!!o&&r.jsx(p0,{names:o,...s}),n]}),$R=({children:e,...t})=>mR(t)&&e,h0=gR($R),AR=({values:e=!0,status:t=!1,all:n=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:s="Form Debugging",valuesTitle:a="Values",statusTitle:l="Status",...i})=>{const c=$s();return r.jsxs("div",{className:o,children:[s&&r.jsx("h3",{className:"mar-v-none",children:s}),r.jsxs("div",{className:"grid-1 gap-4",children:[e&&r.jsxs("div",{children:[a&&r.jsx("h4",{className:"mar-v-none",children:a}),r.jsx(S1,{rows:Object.entries(c.values),...i})]}),(t||n)&&c.status&&r.jsxs("div",{children:[l&&r.jsx("h4",{children:l}),r.jsx(S1,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},S1=({rows:e,children:t,color:n="brand",tableClass:o=`${n} shaded celled wide small pad-none mar-b-0`,...s})=>r.jsx("table",{className:o,children:r.jsx("tbody",{children:t||e.map(([a,l])=>r.jsx(MR,{name:a,value:l,...s},a))})}),MR=({name:e,value:t,keyClass:n="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>r.jsxs("tr",{valign:"top",children:[r.jsx("th",{className:n,children:e}),r.jsx("td",{className:o,children:r.jsx(PR,{value:t})})]}),PR=({value:e})=>Ls(e)?JSON.stringify(e):Pt(e)?e.toString():"",IR=({error:e})=>{const t=e.label||e.name;return r.jsxs(r.Fragment,{children:[!!t&&r.jsxs("b",{children:[t,": "]}),e.message]})},zR=({error:e})=>Ds(e)?e:r.jsx(IR,{error:e}),FR=({form:e=$s(),title:t=e.errorsTitle,prompt:n=e.errorsPrompt,fieldErrors:o=!1,className:s="error alert border"})=>{const{error:a,errors:l,Error:i=zR}=e,c=!!a,d=(o?l.length:0)+(c?1:0);return d!==0?r.jsxs("div",{className:s,children:[!!t&&r.jsx("div",{className:"headline",children:g1(t,d)}),r.jsxs("div",{children:[c&&r.jsx("h4",{children:r.jsx(i,{error:a})}),o&&l.length!==0&&r.jsxs(r.Fragment,{children:[!!n&&r.jsx("p",{className:"wide",children:g1(n,l.length)}),r.jsx("ul",{children:l.map((u,p)=>r.jsx("li",{children:r.jsx(i,{error:u})},p))})]})]})]}):null},UR=({field:e=_t(),selectValue:t=e.selectValue||H2})=>r.jsx(rn,{...e,onSelect:n=>e.onChange(t(n))}),pi={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class hr extends Ta{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?HC(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const n=this.inputValue(t);return{value:t,input:n}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):wa}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),zr(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...pi})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Fh:this.setCursor(n+1);break;case Uh:this.setCursor(n-1);break;case Ic:this.selectCursor();break;case zc:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.setState({value:t,input:n,...pi},this.props.onReset)}clear(){this.debug("clear()"),this.setState({value:void 0,input:wa,...pi},this.props.onClear)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...pi},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&ge(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){h3(this._resultsRef,t)}}ve(hr,"debug",!1),ve(hr,"debugPrefix","Search > "),ve(hr,"debugColor","MediumVioletRed"),ve(hr,"defaultProps",{minLength:2,debounceTime:500,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onReset:Ce,onClear:Ce,onSelect:Ce,displayValue:lc("displayValue"),displayResult:lc("displayResult")}),ve(hr,"initialState",{value:"",searching:!1}),ve(hr,"initialProps",{value:"initialValue"}),ve(hr,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","clear","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const As=Ur(hr),HR=({input:e,onFocus:t,onBlur:n,onChange:o,clear:s,placeholder:a="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:f="text",inputClass:b="",disabled:j,searching:y})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(re,{name:i})}),r.jsx("input",{type:f,placeholder:a,value:e,onFocus:t,onBlur:n,onChange:o,disabled:j,className:b}),r.jsx("div",{className:p,onClick:s,children:r.jsx(re,{name:y?c:l})})]}),VR=As.Consumer(HR),WR=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:s,displayResult:a,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:ce(l,{[i]:t}),onClick:o,onMouseEnter:s,ref:t?n:null,children:a(e)}),ZR=As.Consumer(WR),KR=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),YR=As.Consumer(KR),GR=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:s,resultsClass:a="menu border bdr-1",Result:l=ZR,NoResults:i=YR})=>r.jsx("div",{className:a,ref:t,children:ws(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:ge(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>s(d)},c.id??c.value??d)):r.jsx(i,{})}),qR=As.Consumer(GR),QR=({results:e,onKeyDown:t,Input:n=VR,Results:o=qR})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),XR=As.Consumer(QR),JR=({Content:e=XR,...t})=>r.jsx(As.Provider,{...t,children:r.jsx(e,{})}),tr=Q(JR,"Search"),eO=({field:e=_t(),selectValue:t=e.selectValue||H2})=>r.jsx(tr,{...e,onSelect:n=>e.onChange(t(n)),onReset:e.reset}),tO=({color:e,className:t,style:n,fixed:o,light:s,dark:a,children:l})=>r.jsx("div",{className:ce("overlay",t,e,{fixed:o,light:s,dark:a}),style:n,children:l}),ko=Q(tO,"Overlay"),C1=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),_1=(e,t,n,o,s,a)=>{n?(t.push(`stc-${s}`,`std-${a}`),z2(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},w1=(e,t,n,o,s)=>{n?t.push(`flc-${o}`,`fld-${s}`):e.push("fill=none")},nO=({size:e,className:t,icon:n="cog",color:o="brand",stroke:s=!0,strokeWidth:a,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:f=o,bgStroke:b=!1,bgStrokeWidth:j,bgStrokeStop:y=60,bgStrokeStopDark:w=70,bgFill:g=!0,bgFillStop:h=70,bgFillStopDark:m=30,shrink:S=p?5:0,reverse:C=!1,animation:x=C?"spin.reverse":"spin"})=>{const _=ce(e,t),k=[],N=[f],O=[],L=[o,x];_1(k,N,b,j,y,w),_1(O,L,s,a,l,i),w1(k,N,g,h,m),w1(O,L,c,d,u),S&&O.push(`shrink=${S}`);const U=p?`${p}${C1(k,N)}`:"",Z=`${n}${C1(O,L)}`,te=p?`${U} ${Z}`:Z;return r.jsx(re,{name:te,className:_})},K=Q(nO,"Spinner"),rO=({text:e="Submitting...",size:t="largest",className:n="flex middle center pad-8",light:o,dark:s,fixed:a,spinnerSize:l="x4",Spinner:i=K,...c})=>r.jsx(h0,{submitting:!0,children:r.jsx(ko,{className:ce(n,t),light:o,dark:s,fixed:a,children:r.jsxs("div",{className:"text-center",children:[i&&r.jsx(i,{size:l,...c}),r.jsx("div",{className:"mar-t-4",children:e})]})})}),nm=Q(rO,"Submitting"),oO=({text:e="Cancel",className:t="cancel",Button:n=B,...o})=>r.jsx(n,{text:e,className:t,...o}),sO=Q(oO,"Cancel"),aO=({type:e="reset",text:t="Reset",className:n="reset",Button:o=B,...s})=>{const{reset:a}=$s();return r.jsx(o,{type:e,text:t,className:n,onClick:a,...s})},m0=Q(aO,"Reset"),lO=({type:e="submit",text:t="Submit",className:n="submit",Button:o=B,...s})=>{const{submit:a,status:l}=$s();return r.jsx(o,{type:e,text:t,className:n,onClick:a,disabled:l.submitting,...s})},wl=Q(lO,"Submit"),iO=({className:e,gap:t=4,space:n=!1,reset:o={},submit:s={}})=>r.jsxs("div",{className:t0({className:e,gap:t,space:n},"controls"),children:[r.jsx(m0,{...o}),r.jsx(wl,{...s})]}),cO=Q(iO,"ResetSubmit"),dO=({className:e,gap:t=4,space:n=!1,cancel:o={},submit:s={}})=>r.jsxs("div",{className:t0({className:e,gap:t,space:n},"controls"),children:[r.jsx(sO,{...o}),r.jsx(wl,{...s})]});Q(dO,"CancelSubmit");l0("uiselect",UR);l0("search",eO);const lr=Q(jR,"Form"),at=Q(u0,"Field");Q(p0,"Fields");Q(BR,"Fieldset");Q(FR,"Errors");Q(h0,"Status");const Ms=Q(AR,"Debug");Q(d0,"Layout");Q(s0,"Label");Q(i0,"Input");Q(c0,"Message");const uO=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(re,{name:t})}),pO=Q(uO,"ModalClose"),hO=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,mO=Q(hO,"ModalHeader"),fO=({footer:e})=>!!e&&r.jsx("footer",{children:e}),xO=Q(fO,"ModalFooter"),gO=({text:e,children:t,Header:n=mO,Footer:o=xO,...s})=>r.jsxs("article",{children:[r.jsx(n,{...s}),e||t,r.jsx(o,{...s})]}),vO=Q(gO,"ModalContent"),bO=({ref:e,open:t,close:n,className:o,closeClass:s="close",closeIcon:a="cross",Close:l=pO,Content:i=vO,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:a,className:s}),r.jsx(i,{...c})]})),In=Q(bO,"Modal"),jO=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Fr({visible:e});return{show:n,hide:o,Modal:s=>r.jsx(In,{open:t,...s})}},yO=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Fr({visible:e});return{show:n,hide:o,Overlay:s=>t&&r.jsx(ko,{...s})}},SO=({className:e,disabled:t,children:n})=>r.jsx("label",{className:ce(e,{disabled:t}),children:n}),CO=Q(SO,"RadioLabel"),_O=({name:e,option:t,tabIndex:n=0,onChange:o=Ce,checked:s})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:a=>o(a.target.checked),checked:s}),wO=Q(_O,"RadioInput"),TO=({name:e,option:t,checked:n,inline:o,border:s,labelClass:a="radio",inputClass:l,Label:i=CO,Input:c=wO,onChange:d})=>r.jsxs(i,{className:ce(a,t.labelClass,{inline:o,border:s}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:ce(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),EO=Q(TO,"RadioOption"),kO=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:s,Option:a=EO,...l})=>r.jsx("div",{className:ce(o,{disabled:s}),children:n.map(i=>{const c=_o(i)?i:{value:i,label:i};return r.jsx(a,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),$n=Q(kO,"Radio"),NO=({...e})=>r.jsx(em,{modifiers:[dk,U3,Jh],strategy:YE,...e}),RO=({tab:e})=>{if(!e)return null;const{content:t,Component:n}=e;return t||(n?r.jsx(n,{tab:e}):"No content, element or Component defined for tab")},OO=({tabs:e,storageKey:t,storageItem:n="active-tab",tabsetClass:o="tabset",tabsClass:s="tabs",activeClass:a="active",disabledClass:l="disabled",className:i,bodyClass:c,color:d,size:u,solid:p,lined:f,center:b,right:j,Body:y=RO})=>{const w=t&&Fc(t),[g,h]=V.useState(w&&w.get(n)||0),m=x=>{h(x),w&&w.set(n,x)},S=ce(o,i,d,u,{solid:p,lined:f,center:b,right:j}),C=ce(s,d,u);return r.jsxs("div",{className:S,children:[r.jsx("ul",{className:C,children:e.map((x,_)=>r.jsx("li",{className:ce({[a]:g===_,[l]:x.disabled}),onClick:()=>x.disabled?Ce:m(_),children:r.jsx(To,{...x})},x.id||_))}),r.jsx("div",{className:c,children:r.jsx(y,{tabs:e,active:g,tab:e[g]})})]})},lt=Q(OO,"Tabset"),DO=({minWidth:e,gap:t,children:n,className:o,tilesClass:s="tiles",style:a={}})=>(e&&(a["--tile-min-width"]=e),r.jsx("div",{className:ce(o,s,l3(t)),style:a,children:n})),co=Q(DO,"Tiles"),f0=[{text:"On",value:!0},{text:"Off",value:!1}],x0=(e,t)=>Oh(t)?t:e.findIndex(n=>n.value===t.value),LO=({selected:e=0,findSelectedIndex:t=x0,onSelect:n=Ce,options:o=f0,activeProps:s={},inactiveProps:a={className:"outline"},buttonsClass:l="buttons",size:i,className:c,...d}={})=>{const u=t(o,e),p=o.map((f,b)=>{const j=b===u;return{...f,...j?s:a,className:ce(f.className,j?s.className:a.className),onClick:()=>n(f,b)}});return r.jsx(yn,{buttons:p,className:ce(i,c,l),...d})},bn=Q(LO,"Toggle"),g0=({selected:e=0,findSelectedIndex:t=x0,options:n=f0,onSelect:o=Ce,storageKey:s,storageItem:a="selected",...l}={})=>{const i=t(n,e),c=s&&Fc(s),[d,u]=v.useState(c?c.get(a)??i:i),[p,f]=v.useState(n[d]),b=j=>{c&&c.set(a,j),u(j),f(n[j]),o(n[j],j)};return[p,({...j})=>r.jsx(bn,{options:n,selected:d,onSelect:(y,w)=>b(w),...l,...j})]},BO=e=>{const[,t]=g0(e);return r.jsx(t,{})};function $O(){const e=v.useRef(0);return e.current++,e.current}const Xc=(e,t={})=>{const{onChange:n}=t,[o,s]=v.useState(n?n(e):e),a=Object.keys(e).reduce((l,i)=>{const c=`set${uw(i)}`;return l[c]=d=>s(u=>{const p={...u,[i]:Ac(d,u[i])};return n?n(p):p}),l},{});return[o,a]},AO=()=>r.jsxs(ne,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),MO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,PO=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],v0=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),PO.map(o=>r.jsx("option",{value:o,children:o},o))]}),IO=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],b0=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),IO.map(n=>r.jsx("option",{value:n,children:n},n))]}),zO=[0,1,2,3,4,5,6,8,10],FO=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),zO.map(n=>r.jsx("option",{value:n,children:n},n))]}),UO=[1,2,3,4,5],HO=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),UO.map(n=>r.jsx("option",{value:n,children:n},n))]}),T1=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),VO=[0,1,2,3,4,5,6,8,10],WO=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),VO.map(o=>r.jsx("option",{value:o,children:o},o))]}),ZO=Object.keys(ul.icons),ap=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),ZO.map(o=>r.jsx("option",{value:o,children:o},o))]}),KO=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),s=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${GO(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(qO,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Wn,{code:i,language:"html",expand:!0})]})]}),r.jsx(YO,{options:n,setOption:a,toggleOption:s})]})},YO=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),s=n("title"),a=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),f=n("icon"),b=n("headIcon"),j=t("stripe"),y=t("revealable");return r.jsxs("div",{children:[r.jsx(Vd,{label:"Headline",value:e.headline,setValue:o}),r.jsx(Vd,{label:"Title",value:e.title,setValue:s}),r.jsx(Vd,{label:"Text",value:e.text,setValue:a}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(QO,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(v0,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(b0,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(HO,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(WO,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(FO,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(ap,{icon:e.headIcon,setIcon:b,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(ap,{icons:e.icon,setIcon:f})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(T1,{checked:e.stripe,toggle:j,label:"Stripe"}),r.jsx(T1,{checked:e.revealable,toggle:y,label:"Revealable",disabled:!e.headline})]})]})]})},GO=e=>{const t=["headline","title","text","type","color","size","headIcon","icon"].filter(s=>e[s]).map(s=>`${s}="${e[s]}"`),n=["shadow","border","radius"].filter(s=>e[s]).map(s=>`${s}={${e[s]}}`),o=["stripe","revealable","dismissable"].filter(s=>e[s]);return[...t,...n,...o].join(`
  `)},qO=({options:e})=>r.jsx(ne,{...e}),QO=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),Vd=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(re,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),j0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(J,{Component:AO,code:MO,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(KO,{})]}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),rm=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),JO=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},Tl=Ur(JO),eD=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),om=Ur(Tl.Consumer(eD)),tD=({id:e,code:t,title:n=t,children:o,addPageToc:s,split:a})=>{const l=rm(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{s&&s(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:a?"columns-2 stack-desktop":"",children:o})]})},z=om.Consumer(tD),T=({Component:e,Source:t,children:n,code:o,title:s,caption:a=o?r.jsx("code",{children:o}):s,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(z,{code:o,title:s,...u,children:[r.jsx("div",{className:"mar-b-4",children:n}),r.jsx(J,{Component:e,code:t,caption:a,expand:l,undent:i,highlightLines:d,lineProps:c})]}),nD=()=>r.jsxs("div",{children:[r.jsx(ma,{text:"Error alert"}),r.jsx(ma,{text:"Error alert with border",border:!0}),r.jsx(ma,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(ma,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),rD=`import React from 'react'
import { Error } from '@/src/index.jsx'

const Component = () =>
  <div>
    {/* START */}
    {/* PRETEND: import { Error } from '@abw/badger-react-ui' */}
    {/* PRETEND:  */}
    <Error
      text="Error alert"
    />
    <Error
      text="Error alert with border"
      border
    />
    <Error
      headline="Error Alert"
      text="Error alert with headline"
      border shadow
    />
    <Error
      title="Stonehenge"
      text="Crushed by a dwarf"
      icon="exclamation-thick"
      stripe shadow={3}
    />
    {/* END */}
  </div>

export default Component
`,y0=()=>r.jsx(T,{code:"Error",Component:nD,Source:rD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),oD=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),sD=()=>r.jsxs("div",{children:[r.jsx(pa,{text:"Info alert"}),r.jsx(pa,{text:"Info alert with border",border:!0}),r.jsx(pa,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(pa,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),aD=`import React from 'react'
import { Info } from '@/src/index.jsx'

const Component = () =>
  <div>
    {/* START */}
    {/* PRETEND: import { Info } from '@abw/badger-react-ui' */}
    {/* PRETEND:  */}
    <Info
      text="Info alert"
    />
    <Info
      text="Info alert with border"
      border
    />
    <Info
      headline="Info Alert"
      text="Info alert with headline"
      border shadow
    />
    <Info
      title="Stonehenge"
      text="Where the demons dwell"
      icon="info"
      stripe shadow={3}
    />
    {/* END */}
  </div>

export default Component
`,S0=()=>r.jsx(T,{code:"Info",Component:sD,Source:aD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),lD=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),iD=()=>r.jsxs("div",{children:[r.jsx(es,{text:"Success alert"}),r.jsx(es,{text:"Success alert with border",border:!0}),r.jsx(es,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(es,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),cD=`import React from 'react'
import { Success } from '@/src/index.jsx'

const Component = () =>
  <div>
    {/* START */}
    {/* PRETEND: import { Success } from '@abw/badger-react-ui' */}
    {/* PRETEND:  */}
    <Success
      text="Success alert"
    />
    <Success
      text="Success alert with border"
      border
    />
    <Success
      headline="Success Alert"
      text="Success alert with headline"
      border shadow
    />
    <Success
      title="Stonehenge"
      text="Where the banshees live..."
      icon="check-thicker-shrink=4"
      stripe shadow={3}
    />
    {/* END */}
  </div>

export default Component
`,C0=()=>r.jsx(T,{code:"Success",Component:iD,Source:cD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),dD=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),uD=()=>r.jsxs("div",{children:[r.jsx(ha,{text:"Warning alert"}),r.jsx(ha,{text:"Warning alert with border",border:!0}),r.jsx(ha,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(ha,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),pD=`import React from 'react'
import { Warning } from '@/src/index.jsx'

const Component = () =>
  <div>
    {/* START */}
    {/* PRETEND: import { Warning } from '@abw/badger-react-ui' */}
    {/* PRETEND:  */}
    <Warning
      text="Warning alert"
    />
    <Warning
      text="Warning alert with border"
      border
    />
    <Warning
      headline="Warning Alert"
      text="Warning alert with headline"
      border shadow
    />
    <Warning
      title="Stonehenge"
      text="...and they do live well"
      icon="exclamation-thick"
      stripe shadow={3}
    />
    {/* END */}
  </div>

export default Component
`,_0=()=>r.jsx(T,{code:"Warning",Component:uD,Source:pD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),hD=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),mD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Border Alert",border:!0}),r.jsx(ne,{text:"Border Width 2",border:2})]}),fD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Border Alert"
      border
    />
    <Alert
      text="Border Width 2"
      border={2}
    />
  </div>
/* END */

export default Component
`,w0=()=>r.jsx(T,{code:"border",Component:mD,Source:fD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),xD=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),gD=()=>r.jsx(ne,{text:"Hello World!",className:"border shadow-2"}),vD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,T0=()=>r.jsx(T,{code:"className",Component:gD,Source:vD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),bD=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),jD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Red Alert",color:"red"}),r.jsx(ne,{text:"Brown Alert",color:"brown"}),r.jsx(ne,{text:"Orange Alert",color:"orange"}),r.jsx(ne,{text:"Yellow Alert",color:"yellow"}),r.jsx(ne,{text:"Green Alert",color:"green"}),r.jsx(ne,{text:"Teal Alert",color:"teal"}),r.jsx(ne,{text:"Blue Alert",color:"blue"}),r.jsx(ne,{text:"Indigo Alert",color:"indigo"}),r.jsx(ne,{text:"Violet Alert",color:"violet"}),r.jsx(ne,{text:"Purple Alert",color:"purple"}),r.jsx(ne,{text:"Pink Alert",color:"pink"}),r.jsx(ne,{text:"Maroon Alert",color:"maroon"})]}),yD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Red Alert"
      color="red"
    />
    <Alert
      text="Brown Alert"
      color="brown"
    />
    <Alert
      text="Orange Alert"
      color="orange"
    />
    <Alert
      text="Yellow Alert"
      color="yellow"
    />
    <Alert
      text="Green Alert"
      color="green"
    />
    <Alert
      text="Teal Alert"
      color="teal"
    />
    <Alert
      text="Blue Alert"
      color="blue"
    />
    <Alert
      text="Indigo Alert"
      color="indigo"
    />
    <Alert
      text="Violet Alert"
      color="violet"
    />
    <Alert
      text="Purple Alert"
      color="purple"
    />
    <Alert
      text="Pink Alert"
      color="pink"
    />
    <Alert
      text="Maroon Alert"
      color="maroon"
    />
  </div>
/* END */

export default Component
`,E0=()=>r.jsx(T,{code:"color",Component:jD,Source:yD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),SD=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),CD=()=>r.jsx(ne,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),_D=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Dismissable Alert"
    text="A dismissable alert"
    dismissable
  />
/* END */

export default Component
`,k0=()=>r.jsx(T,{code:"dismissable",Component:CD,Source:_D,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),wD=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),TD=()=>r.jsx(ne,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),ED=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Icon Alert"
    headIcon="bars"
    text="An alert with a headline icon"
  />
/* END */

export default Component
`,N0=()=>r.jsx(T,{code:"headicon",Component:TD,Source:ED,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),kD=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),ND=()=>r.jsx(ne,{headline:"Headline Alert",text:"An alert with a headline"}),RD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,R0=()=>r.jsx(T,{code:"headline",Component:ND,Source:RD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),OD=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),DD=()=>r.jsxs("div",{children:[r.jsx(ne,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(ne,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(ne,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),LD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      icon="info"
      type="info"
      title="Eleven"
      text="It's one louder"
    />
    <Alert
      icon="check"
      type="success"
      title="Eleven"
      text="It's one louder"
    />
    <Alert
      icon="exclamation"
      type="error"
      title="Eleven"
      text="It's one louder"
    />
  </div>
/* END */

export default Component
`,O0=()=>r.jsx(T,{code:"icon",Component:DD,Source:LD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),BD=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),$D=()=>r.jsx(ne,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),AD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Dismissable Alert"
    text="A dismissable alert"
    onDismiss={() => window.alert('Bye!')}
    dismissable
  />
/* END */

export default Component
`,D0=()=>r.jsx(T,{code:"onDismiss",Component:$D,Source:AD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),MD=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),PD=()=>r.jsx(ne,{text:"Radius Alert",radius:4}),ID=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,L0=()=>r.jsx(T,{code:"radius",Component:PD,Source:ID,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),zD=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),FD=()=>r.jsx(ne,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),UD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Revealable Alert"
    text="A revealable alert"
    revealable
  />
/* END */

export default Component
`,B0=()=>r.jsx(T,{code:"revealable",Component:FD,Source:UD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),HD=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),VD=()=>r.jsx(ne,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),WD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Revealed Alert"
    text="A revealed alert"
    revealable
    revealed
  />
/* END */

export default Component
`,$0=()=>r.jsx(T,{code:"revealed",Component:VD,Source:WD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),ZD=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),KD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(ne,{text:"Alert With Shadow 2",shadow:2}),r.jsx(ne,{text:"Alert With Shadow 3",shadow:3}),r.jsx(ne,{text:"Alert With Shadow 4",shadow:4}),r.jsx(ne,{text:"Alert With Shadow 5",shadow:5})]}),YD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Alert With Default Shadow (1)"
      shadow
    />
    <Alert
      text="Alert With Shadow 2"
      shadow={2}
    />
    <Alert
      text="Alert With Shadow 3"
      shadow={3}
    />
    <Alert
      text="Alert With Shadow 4"
      shadow={4}
    />
    <Alert
      text="Alert With Shadow 5"
      shadow={5}
    />
  </div>
/* END */

export default Component
`,A0=()=>r.jsx(T,{code:"shadow",Component:KD,Source:YD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),GD=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),qD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Smallest Alert",size:"smallest"}),r.jsx(ne,{text:"Smaller Alert",size:"smaller"}),r.jsx(ne,{text:"Small Alert",size:"small"}),r.jsx(ne,{text:"Medium Alert",size:"medium"}),r.jsx(ne,{text:"Large Alert",size:"large"}),r.jsx(ne,{text:"Larger Alert",size:"larger"}),r.jsx(ne,{text:"Largest Alert",size:"largest"})]}),QD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Smallest Alert"
      size="smallest"
    />
    <Alert
      text="Smaller Alert"
      size="smaller"
    />
    <Alert
      text="Small Alert"
      size="small"
    />
    <Alert
      text="Medium Alert"
      size="medium"
    />
    <Alert
      text="Large Alert"
      size="large"
    />
    <Alert
      text="Larger Alert"
      size="larger"
    />
    <Alert
      text="Largest Alert"
      size="largest"
    />
  </div>
/* END */

export default Component
`,M0=()=>r.jsx(T,{code:"size",Component:qD,Source:QD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),XD=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),JD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(ne,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(ne,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(ne,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(ne,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),eL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Stripe Alert"
      stripe shadow={4}
    />
    <Alert
      text="Info Stripe Alert"
      type="info"
      stripe shadow={4}
    />
    <Alert
      text="Success Stripe Alert"
      type="success"
      stripe shadow={4}
    />
    <Alert
      text="Warning Stripe Alert"
      type="warning"
      stripe shadow={4}
    />
    <Alert
      text="Error Stripe Alert"
      type="error"
      stripe shadow={4}
    />
  </div>
/* END */

export default Component
`,P0=()=>r.jsx(T,{code:"stripe",Component:JD,Source:eL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),tL=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),nL=()=>r.jsx(ne,{text:"Hello World!"}),rL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,I0=()=>r.jsx(T,{code:"text",Component:nL,Source:rL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),oL=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),sL=()=>r.jsx(ne,{title:"Hello World!",children:"This is an alert"}),aL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,z0=()=>r.jsx(T,{code:"title",Component:sL,Source:aL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),iL=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Info Alert",type:"info"}),r.jsx(ne,{text:"Success Alert",type:"success"}),r.jsx(ne,{text:"Warning Alert",type:"warning"}),r.jsx(ne,{text:"Error Alert",type:"error"})]}),cL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Info Alert"
      type="info"
    />
    <Alert
      text="Success Alert"
      type="success"
    />
    <Alert
      text="Warning Alert"
      type="warning"
    />
    <Alert
      text="Error Alert"
      type="error"
    />
  </div>
/* END */

export default Component
`,F0=()=>r.jsx(T,{code:"type",Component:iL,Source:cL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),De=({tocName:e,children:t})=>r.jsx(om.Provider,{tocName:e,children:t}),uL=({id:e,title:t,addPageTocHeading:n})=>{const o=rm(e||t),s=v.useRef();return v.useEffect(()=>{n&&n(o,t,s)},[e,t]),r.jsx("h2",{id:o,ref:s,className:"section-heading",children:t})},oe=om.Consumer(uL),pL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(j0,{}),r.jsxs(De,{tocName:"alert",children:[r.jsx(oe,{title:"Properties"}),r.jsx(z0,{}),r.jsx(I0,{}),r.jsx(R0,{}),r.jsx(N0,{}),r.jsx(B0,{}),r.jsx($0,{}),r.jsx(k0,{}),r.jsx(D0,{}),r.jsx(T0,{}),r.jsx(w0,{}),r.jsx(L0,{}),r.jsx(A0,{}),r.jsx(M0,{}),r.jsx(E0,{}),r.jsx(F0,{}),r.jsx(P0,{}),r.jsx(O0,{}),r.jsx(oe,{title:"Components"}),r.jsx(S0,{}),r.jsx(C0,{}),r.jsx(_0,{}),r.jsx(y0,{})]})]}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:pL},Symbol.toStringTag,{value:"Module"})),mL=()=>r.jsx(ae,{children:"This is a Badge"}),fL=`import { Badge } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Badge } from '@abw/badger-react-ui'

const BadgeExample = () =>
  <Badge>
    This is a Badge
  </Badge>

export default BadgeExample
`,U0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Badge"})," component can be used to render a badge. Any child elements will be included as content."]}),r.jsx("p",{children:"There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles."}),r.jsx(J,{Component:mL,code:fL,expand:!0})]}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),gL=()=>r.jsx(ae,{text:"Custom Badge Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),vL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge Content"
    Content={
      ({text}) =>
        <span className="pad-4">
          😀 {text}
        </span>
    }
  />
/* END */

export default Component
`,H0=()=>r.jsxs(T,{code:"Content",Component:gL,Source:vL,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the badge content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the badge text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that badge content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all badges."]})]}),bL=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),jL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(ae,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(ae,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(ae,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),yL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      text="Border 2"
      color="red"
      outline
      border={2}
    />
    <Badge
      text="Border 3"
      color="brown"
      outline
      border={3}
    />
    <Badge
      text="Border 4"
      color="orange"
      outline
      border={4}
    />
    <Badge
      text="Border 5"
      color="yellow"
      outline
      border={5}
    />
  </div>
/* END */

export default Component
`,V0=()=>r.jsx(T,{code:"border",Component:jL,Source:yL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),CL=()=>r.jsx(ae,{text:"Custom Badge",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),_L=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,W0=()=>r.jsx(T,{code:"className",Component:CL,Source:_L,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the badge."]})}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),TL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(ae,{text:"Red Badge",color:"red"}),r.jsx(ae,{text:"Brown Badge",color:"brown"}),r.jsx(ae,{text:"Orange Badge",color:"orange"}),r.jsx(ae,{text:"Yellow Badge",color:"yellow"}),r.jsx(ae,{text:"Green Badge",color:"green"}),r.jsx(ae,{text:"Teal Badge",color:"teal"}),r.jsx(ae,{text:"Blue Badge",color:"blue"}),r.jsx(ae,{text:"Indigo Badge",color:"indigo"}),r.jsx(ae,{text:"Violet Badge",color:"violet"}),r.jsx(ae,{text:"Purple Badge",color:"purple"}),r.jsx(ae,{text:"Pink Badge",color:"pink"}),r.jsx(ae,{text:"Maroon Badge",color:"maroon"})]}),EL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Badge
      text="Red Badge"
      color="red"
    />
    <Badge
      text="Brown Badge"
      color="brown"
    />
    <Badge
      text="Orange Badge"
      color="orange"
    />
    <Badge
      text="Yellow Badge"
      color="yellow"
    />
    <Badge
      text="Green Badge"
      color="green"
    />
    <Badge
      text="Teal Badge"
      color="teal"
    />
    <Badge
      text="Blue Badge"
      color="blue"
    />
    <Badge
      text="Indigo Badge"
      color="indigo"
    />
    <Badge
      text="Violet Badge"
      color="violet"
    />
    <Badge
      text="Purple Badge"
      color="purple"
    />
    <Badge
      text="Pink Badge"
      color="pink"
    />
    <Badge
      text="Maroon Badge"
      color="maroon"
    />
  </div>
/* END */

export default Component
`,Z0=()=>r.jsx(T,{code:"color",Component:TL,Source:EL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the badge."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),NL=()=>r.jsx(ae,{color:"green",icon:"thumb"}),RL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    icon="thumb"
  />
/* END */

export default Component
`,K0=()=>r.jsx(T,{code:"icon",Component:NL,Source:RL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a badge."]})}),OL=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),DL=()=>r.jsx(ae,{color:"green",text:"Unlocked",iconLeft:"unlocked"}),LL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    text="Unlocked"
    iconLeft="unlocked"
  />
/* END */

export default Component
`,Y0=()=>r.jsx(T,{code:"iconLeft",Component:DL,Source:LL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a badge."]})}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),$L=()=>r.jsx(ae,{color:"red",text:"Locked",iconRight:"locked"}),AL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="red"
    text="Locked"
    iconRight="locked"
  />
/* END */

export default Component
`,G0=()=>r.jsx(T,{code:"iconRight",Component:$L,Source:AL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a badge."]})}),ML=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),PL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Radius 0",color:"olive",radius:0}),r.jsx(ae,{text:"Radius 2",color:"green",radius:2}),r.jsx(ae,{text:"Radius 4",color:"teal",radius:3}),r.jsx(ae,{text:"Radius 6",color:"blue",radius:4})]}),IL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      text="Radius 0"
      color="olive"
      radius={0}
    />
    <Badge
      text="Radius 2"
      color="green"
      radius={2}
    />
    <Badge
      text="Radius 4"
      color="teal"
      radius={3}
    />
    <Badge
      text="Radius 6"
      color="blue"
      radius={4}
    />
  </div>
/* END */

export default Component
`,q0=()=>r.jsx(T,{code:"radius",Component:PL,Source:IL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),FL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(ae,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(ae,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(ae,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(ae,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),UL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      text="Shadow 1"
      color="indigo"
      outline shadow
    />
    <Badge
      text="Shadow 2"
      color="violet"
      outline shadow={2}
    />
    <Badge
      text="Shadow 3"
      color="purple"
      outline shadow={3}
    />
    <Badge
      text="Shadow 4"
      color="pink"
      outline shadow={4}
    />
    <Badge
      text="Shadow 5"
      color="maroon"
      outline shadow={5}
    />
  </div>
/* END */

export default Component
`,Q0=()=>r.jsx(T,{code:"shadow",Component:FL,Source:UL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the badge ranging from 1 to 5."]})}),HL=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),VL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Smallest",size:"smallest"}),r.jsx(ae,{text:"Smaller",size:"smaller"}),r.jsx(ae,{text:"Small",size:"small"}),r.jsx(ae,{text:"Medium",size:"medium"}),r.jsx(ae,{text:"Large",size:"large"}),r.jsx(ae,{text:"Larger",size:"larger"}),r.jsx(ae,{text:"Largest",size:"largest"}),r.jsx(ae,{text:"x3",size:"x3"}),r.jsx(ae,{text:"x5",size:"x5"}),r.jsx(ae,{text:"x7",size:"x7"})]}),WL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      text="Smallest"
      size="smallest"
    />
    <Badge
      text="Smaller"
      size="smaller"
    />
    <Badge
      text="Small"
      size="small"
    />
    <Badge
      text="Medium"
      size="medium"
    />
    <Badge
      text="Large"
      size="large"
    />
    <Badge
      text="Larger"
      size="larger"
    />
    <Badge
      text="Largest"
      size="largest"
    />
    <Badge
      text="x3"
      size="x3"
    />
    <Badge
      text="x5"
      size="x5"
    />
    <Badge
      text="x7"
      size="x7"
    />
  </div>
/* END */

export default Component
`,X0=()=>r.jsx(T,{code:"size",Component:VL,Source:WL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the badge size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),ZL=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),KL=()=>r.jsx(ae,{text:"Tag Badge",tag:!0}),YL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Tag Badge" tag/>
/* END */

export default Component
`,J0=()=>r.jsx(T,{code:"tag",Component:KL,Source:YL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tag"})," property can be used to add the ",r.jsx("code",{children:"tag"})," CSS class to change the appearance of the badge."]})}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),qL=()=>r.jsx(ae,{text:"Grey Badge"}),QL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Grey Badge"/>
/* END */

export default Component
`,e4=()=>r.jsx(T,{code:"text",Component:qL,Source:QL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the badge."]})}),XL=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),JL=()=>r.jsx(ae,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),eB=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Tooltip"
    label="This is a tooltip"
    tooltip="top left"
  />
/* END */

export default Component
`,t4=()=>r.jsx(T,{code:"tooltip",Component:JL,Source:eB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the badge.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),tB=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),nB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Badge"}),r.jsx(U0,{}),r.jsxs(De,{tocName:"badge",children:[r.jsx(oe,{title:"Properties"}),r.jsx(e4,{}),r.jsx(J0,{}),r.jsx(Z0,{}),r.jsx(W0,{}),r.jsx(V0,{}),r.jsx(q0,{}),r.jsx(Q0,{}),r.jsx(X0,{}),r.jsx(K0,{}),r.jsx(Y0,{}),r.jsx(G0,{}),r.jsx(t4,{}),r.jsx(oe,{title:"Components"}),r.jsx(H0,{})]})]}),rB=Object.freeze(Object.defineProperty({__proto__:null,default:nB},Symbol.toStringTag,{value:"Module"})),oB=()=>r.jsx(B,{children:"This is a button"}),sB=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,n4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(J,{Component:oB,code:sB,expand:!0})]}),aB=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),lB=()=>r.jsx(B,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),iB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button Content"
    Content={
      ({text}) =>
        <span className="pad-4">
          😀 {text}
        </span>
    }
  />
/* END */

export default Component
`,r4=()=>r.jsxs(T,{code:"Content",Component:lB,Source:iB,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),cB=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),dB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Bare",color:"red",bare:!0}),r.jsx(B,{text:"Green Bare",color:"green",bare:!0}),r.jsx(B,{text:"Blue Bare",color:"blue",bare:!0})]}),uB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Button
      text="Red Bare"
      color="red"
      bare
    />
    <Button
      text="Green Bare"
      color="green"
      bare
    />
    <Button
      text="Blue Bare"
      color="blue"
      bare
    />
  </div>
/* END */

export default Component
`,o4=()=>r.jsx(T,{code:"bare",Component:dB,Source:uB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),pB=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),hB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(B,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(B,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(B,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),mB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Button
      text="Border 2"
      color="red"
      outline
      border={2}
    />
    <Button
      text="Border 3"
      color="brown"
      outline
      border={3}
    />
    <Button
      text="Border 4"
      color="orange"
      outline
      border={4}
    />
    <Button
      text="Border 5"
      color="yellow"
      outline
      border={5}
    />
  </div>
/* END */

export default Component
`,s4=()=>r.jsx(T,{code:"border",Component:hB,Source:mB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),fB=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),xB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),gB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Button
      text="Yellow Button"
      color="yellow"
    />
    <Button
      text="Bright Yellow Button"
      color="yellow"
      bright
    />
  </div>
/* END */

export default Component
`,a4=()=>r.jsx(T,{code:"bright",Component:xB,Source:gB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),vB=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),bB=()=>r.jsx(B,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),jB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,l4=()=>r.jsx(T,{code:"className",Component:bB,Source:jB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),yB=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),SB=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Brown Button",color:"brown"}),r.jsx(B,{text:"Orange Button",color:"orange"}),r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Green Button",color:"green"}),r.jsx(B,{text:"Teal Button",color:"teal"}),r.jsx(B,{text:"Blue Button",color:"blue"}),r.jsx(B,{text:"Indigo Button",color:"indigo"}),r.jsx(B,{text:"Violet Button",color:"violet"}),r.jsx(B,{text:"Purple Button",color:"purple"}),r.jsx(B,{text:"Pink Button",color:"pink"}),r.jsx(B,{text:"Maroon Button",color:"maroon"})]}),CB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="grid-2 gap-4 stack-tablet">
    <Button
      text="Red Button"
      color="red"
    />
    <Button
      text="Brown Button"
      color="brown"
    />
    <Button
      text="Orange Button"
      color="orange"
    />
    <Button
      text="Yellow Button"
      color="yellow"
    />
    <Button
      text="Green Button"
      color="green"
    />
    <Button
      text="Teal Button"
      color="teal"
    />
    <Button
      text="Blue Button"
      color="blue"
    />
    <Button
      text="Indigo Button"
      color="indigo"
    />
    <Button
      text="Violet Button"
      color="violet"
    />
    <Button
      text="Purple Button"
      color="purple"
    />
    <Button
      text="Pink Button"
      color="pink"
    />
    <Button
      text="Maroon Button"
      color="maroon"
    />
  </div>
/* END */

export default Component
`,i4=()=>r.jsx(T,{code:"color",Component:SB,Source:CB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),_B=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),wB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Dark Red Button",color:"red",dark:!0})]}),TB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Button
      text="Red Button"
      color="red"
    />
    <Button
      text="Dark Red Button"
      color="red"
      dark
    />
  </div>
/* END */

export default Component
`,c4=()=>r.jsx(T,{code:"dark",Component:wB,Source:TB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),EB=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),kB=()=>r.jsx(B,{text:"Disabled Button",disabled:!0}),NB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,d4=()=>r.jsx(T,{code:"disabled",Component:kB,Source:NB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),RB=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),OB=()=>r.jsx(B,{color:"green",icon:"bars"}),DB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,u4=()=>r.jsx(T,{code:"icon",Component:OB,Source:DB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),LB=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),BB=()=>r.jsx(B,{color:"green",text:"Back",iconLeft:"angle-left"}),$B=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    text="Back"
    iconLeft="angle-left"
  />
/* END */

export default Component
`,p4=()=>r.jsx(T,{code:"iconLeft",Component:BB,Source:$B,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),AB=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),MB=()=>r.jsx(B,{color:"green",text:"Next",iconRight:"angle-right"}),PB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    text="Next"
    iconRight="angle-right"
  />
/* END */

export default Component
`,h4=()=>r.jsx(T,{code:"iconRight",Component:MB,Source:PB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),IB=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),zB=()=>r.jsx(B,{text:"I am labelled!",label:"This is a label"}),FB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,m4=()=>r.jsx(T,{code:"label",Component:zB,Source:FB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),UB=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),HB=()=>r.jsx(B,{text:"Click Me!",onClick:()=>window.alert("Click!")}),VB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,f4=()=>r.jsx(T,{code:"onClick",Component:HB,Source:VB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),WB=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),ZB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Outline",color:"red",outline:!0}),r.jsx(B,{text:"Green Outline",color:"green",outline:!0}),r.jsx(B,{text:"Blue Outline",color:"blue",outline:!0})]}),KB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Button
      text="Red Outline"
      color="red"
      outline
    />
    <Button
      text="Green Outline"
      color="green"
      outline
    />
    <Button
      text="Blue Outline"
      color="blue"
      outline
    />
  </div>
/* END */

export default Component
`,x4=()=>r.jsx(T,{code:"outline",Component:ZB,Source:KB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),YB=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),GB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Radius 0",color:"olive",radius:0}),r.jsx(B,{text:"Radius 2",color:"green",radius:2}),r.jsx(B,{text:"Radius 4",color:"teal",radius:3}),r.jsx(B,{text:"Radius 6",color:"blue",radius:4})]}),qB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Button
      text="Radius 0"
      color="olive"
      radius={0}
    />
    <Button
      text="Radius 2"
      color="green"
      radius={2}
    />
    <Button
      text="Radius 4"
      color="teal"
      radius={3}
    />
    <Button
      text="Radius 6"
      color="blue"
      radius={4}
    />
  </div>
/* END */

export default Component
`,g4=()=>r.jsx(T,{code:"radius",Component:GB,Source:qB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),QB=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),XB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(B,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(B,{text:"Blue Shaded",color:"blue",shaded:!0})]}),JB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Button
      text="Red Shaded"
      color="red"
      shaded
    />
    <Button
      text="Green Shaded"
      color="green"
      shaded
    />
    <Button
      text="Blue Shaded"
      color="blue"
      shaded
    />
  </div>
/* END */

export default Component
`,v4=()=>r.jsx(T,{code:"shaded",Component:XB,Source:JB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),e$=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),t$=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(B,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(B,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(B,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(B,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),n$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Button
      text="Shadow 1"
      color="indigo"
      outline shadow
    />
    <Button
      text="Shadow 2"
      color="violet"
      outline shadow={2}
    />
    <Button
      text="Shadow 3"
      color="purple"
      outline shadow={3}
    />
    <Button
      text="Shadow 4"
      color="pink"
      outline shadow={4}
    />
    <Button
      text="Shadow 5"
      color="maroon"
      outline shadow={5}
    />
  </div>
/* END */

export default Component
`,b4=()=>r.jsx(T,{code:"shadow",Component:t$,Source:n$,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),r$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),o$=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Smallest",size:"smallest"}),r.jsx(B,{text:"Smaller",size:"smaller"}),r.jsx(B,{text:"Small",size:"small"}),r.jsx(B,{text:"Medium",size:"medium"}),r.jsx(B,{text:"Large",size:"large"}),r.jsx(B,{text:"Larger",size:"larger"}),r.jsx(B,{text:"Largest",size:"largest"}),r.jsx(B,{text:"x3",size:"x3"}),r.jsx(B,{text:"x5",size:"x5"}),r.jsx(B,{text:"x7",size:"x7"})]}),s$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Button
      text="Smallest"
      size="smallest"
    />
    <Button
      text="Smaller"
      size="smaller"
    />
    <Button
      text="Small"
      size="small"
    />
    <Button
      text="Medium"
      size="medium"
    />
    <Button
      text="Large"
      size="large"
    />
    <Button
      text="Larger"
      size="larger"
    />
    <Button
      text="Largest"
      size="largest"
    />
    <Button
      text="x3"
      size="x3"
    />
    <Button
      text="x5"
      size="x5"
    />
    <Button
      text="x7"
      size="x7"
    />
  </div>
/* END */

export default Component
`,j4=()=>r.jsx(T,{code:"size",Component:o$,Source:s$,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),a$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),l$=()=>r.jsx(B,{text:"Grey Button"}),i$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,y4=()=>r.jsx(T,{code:"text",Component:l$,Source:i$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),c$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),d$=()=>r.jsx(B,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),u$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Tooltip"
    label="This is a tooltip"
    tooltip="top left"
  />
/* END */

export default Component
`,S4=()=>r.jsx(T,{code:"tooltip",Component:d$,Source:u$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),p$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),h$=()=>r.jsx(B,{text:"Grey Button",type:"submit"}),m$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,C4=()=>r.jsxs(T,{code:"type",Component:h$,Source:m$,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),f$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),x$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(n4,{}),r.jsxs(De,{tocName:"button",children:[r.jsx(oe,{title:"Properties"}),r.jsx(y4,{}),r.jsx(f4,{}),r.jsx(d4,{}),r.jsx(i4,{}),r.jsx(a4,{}),r.jsx(c4,{}),r.jsx(v4,{}),r.jsx(x4,{}),r.jsx(o4,{}),r.jsx(l4,{}),r.jsx(s4,{}),r.jsx(g4,{}),r.jsx(b4,{}),r.jsx(j4,{}),r.jsx(u4,{}),r.jsx(p4,{}),r.jsx(h4,{}),r.jsx(m4,{}),r.jsx(S4,{}),r.jsx(C4,{}),r.jsx(oe,{title:"Components"}),r.jsx(r4,{})]})]}),g$=Object.freeze(Object.defineProperty({__proto__:null,default:x$},Symbol.toStringTag,{value:"Module"})),v$=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),b$=()=>r.jsx(yn,{buttons:[{text:"One"},{text:"Two"}],Button:v$}),j$=`import { Buttons } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons } from '@abw/badger-react-ui'

const MyButton = ({text}) =>
  <span className="border pad pad-h-4 mar">
    {text}
  </span>

const ButtonsExample = () =>
  <Buttons
    buttons={[
      { text: 'One' },
      { text: 'Two' },
    ]}
    Button={MyButton}
  />

export default ButtonsExample
`,_4=()=>r.jsx(T,{code:"Button",Component:b$,Source:j$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),y$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),S$=()=>r.jsxs(yn,{children:[r.jsx(B,{text:"One",outline:!0}),r.jsx(B,{text:"Two",outline:!0})]}),C$=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,w4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(J,{Component:S$,code:C$,expand:!0})]}),_$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),w$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),T$=`import React from 'react'
import { Buttons } from '@/src/index.jsx'

const ButtonsExample = () =>
  <>
    {/* START */}
    <Buttons
      outline
      buttonClass="blue shadow-1"
      buttons={[
        { text: 'One' },
        { text: 'Two' },
      ]}
    />
    {/* END */}
  </>

export default ButtonsExample
`,T4=()=>r.jsx(T,{code:"buttonClass",Component:w$,Source:T$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),E$=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),k$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),N$=`import React from 'react'
import { Buttons } from '@/src/index.jsx'

const ButtonsExample = () =>
  <>
    {/* START */}
    <Buttons
      buttons={[
        { text: 'One', outline: true },
        { text: 'Two', outline: true },
      ]}
    />
    {/* END */}
  </>

export default ButtonsExample
`,E4=()=>r.jsx(T,{code:"buttons",Component:k$,Source:N$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),R$=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),O$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),D$=`import React from 'react'
import { Buttons } from '@/src/index.jsx'

const ButtonsExample = () =>
  <>
    {/* START */}
    <Buttons
      outline
      className="buttons border pad-2 bgc-90 bgd-10 bdr-2"
      buttons={[
        { text: 'One' },
        { text: 'Two' },
      ]}
    />
    {/* END */}
  </>

export default ButtonsExample
`,k4=()=>r.jsx(T,{code:"className",Component:O$,Source:D$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),L$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),B$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),$$=`import React from 'react'
import { Buttons } from '@/src/index.jsx'

const ButtonsExample = () =>
  <>
    {/* START */}
    <Buttons
      outline
      buttons={[
        { text: 'One' },
        { text: 'Two' },
        { text: 'Three',
          outline: false,
          color: 'orange'
        },
      ]}
    />
    {/* END */}
  </>

export default ButtonsExample
`;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ve.apply(this,arguments)}var We;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(We||(We={}));const E1="popstate";function A$(e){e===void 0&&(e={});function t(o,s){let{pathname:a,search:l,hash:i}=o.location;return nl("",{pathname:a,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){return typeof s=="string"?s:go(s)}return P$(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function M$(){return Math.random().toString(36).substr(2,8)}function k1(e,t){return{usr:e.state,key:e.key,idx:t}}function nl(e,t,n,o){return n===void 0&&(n=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||o||M$()})}function go(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function P$(e,t,n,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:a=!1}=o,l=s.history,i=We.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ve({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=We.Pop;let w=u(),g=w==null?null:w-d;d=w,c&&c({action:i,location:y.location,delta:g})}function f(w,g){i=We.Push;let h=nl(y.location,w,g);n&&n(h,w),d=u()+1;let m=k1(h,d),S=y.createHref(h);try{l.pushState(m,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(S)}a&&c&&c({action:i,location:y.location,delta:1})}function b(w,g){i=We.Replace;let h=nl(y.location,w,g);n&&n(h,w),d=u();let m=k1(h,d),S=y.createHref(h);l.replaceState(m,"",S),a&&c&&c({action:i,location:y.location,delta:0})}function j(w){let g=s.location.origin!=="null"?s.location.origin:s.location.href,h=typeof w=="string"?w:go(w);return pe(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return i},get location(){return e(s,l)},listen(w){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(E1,p),c=w,()=>{s.removeEventListener(E1,p),c=null}},createHref(w){return t(s,w)},createURL:j,encodeLocation(w){let g=j(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:b,go(w){return l.go(w)}};return y}var Ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ue||(Ue={}));const I$=new Set(["lazy","caseSensitive","path","id","index","children"]);function z$(e){return e.index===!0}function lp(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((s,a)=>{let l=[...n,a],i=typeof s.id=="string"?s.id:l.join("-");if(pe(s.index!==!0||!s.children,"Cannot specify children on an index route"),pe(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),z$(s)){let c=Ve({},s,t(s),{id:i});return o[i]=c,c}else{let c=Ve({},s,t(s),{id:i,children:void 0});return o[i]=c,s.children&&(c.children=lp(s.children,t,l,o)),c}})}function ns(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?ir(t):t,s=$r(o.pathname||"/",n);if(s==null)return null;let a=N4(e);U$(a);let l=null;for(let i=0;l==null&&i<a.length;++i)l=Q$(a[i],J$(s));return l}function F$(e,t){let{route:n,pathname:o,params:s}=e;return{id:n.id,pathname:o,params:s,data:t[n.id],handle:n.handle}}function N4(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let s=(a,l,i)=>{let c={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Gn([o,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(pe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),N4(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:G$(d,a.index),routesMeta:u})};return e.forEach((a,l)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,l);else for(let c of R4(a.path))s(a,l,c)}),t}function R4(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return s?[a,""]:[a];let l=R4(o.join("/")),i=[];return i.push(...l.map(c=>c===""?a:[a,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function U$(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q$(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const H$=/^:\w+$/,V$=3,W$=2,Z$=1,K$=10,Y$=-2,N1=e=>e==="*";function G$(e,t){let n=e.split("/"),o=n.length;return n.some(N1)&&(o+=Y$),t&&(o+=W$),n.filter(s=>!N1(s)).reduce((s,a)=>s+(H$.test(a)?V$:a===""?Z$:K$),o)}function q$(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function Q$(e,t){let{routesMeta:n}=e,o={},s="/",a=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=s==="/"?t:t.slice(s.length)||"/",u=ip({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;a.push({params:o,pathname:Gn([s,u.pathname]),pathnameBase:rA(Gn([s,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(s=Gn([s,u.pathnameBase]))}return a}function ip(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=X$(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:f,isOptional:b}=u;if(f==="*"){let y=i[p]||"";l=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const j=i[p];return b&&!j?d[f]=void 0:d[f]=eA(j||"",f),d},{}),pathname:a,pathnameBase:l,pattern:e}}function X$(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function J$(e){try{return decodeURI(e)}catch(t){return xo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function eA(e,t){try{return decodeURIComponent(e)}catch(n){return xo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $r(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function tA(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:s=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:nA(n,t):t,search:oA(o),hash:sA(s)}}function nA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Wd(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sm(e,t){let n=O4(e);return t?n.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function am(e,t,n,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=ir(e):(s=Ve({},e),pe(!s.pathname||!s.pathname.includes("?"),Wd("?","pathname","search",s)),pe(!s.pathname||!s.pathname.includes("#"),Wd("#","pathname","hash",s)),pe(!s.search||!s.search.includes("#"),Wd("#","search","hash",s)));let a=e===""||s.pathname==="",l=a?"/":s.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}i=p>=0?t[p]:"/"}let c=tA(s,i),d=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),rA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class lm{constructor(t,n,o,s){s===void 0&&(s=!1),this.status=t,this.statusText=n||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function D4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const L4=["post","put","patch","delete"],aA=new Set(L4),lA=["get",...L4],iA=new Set(lA),cA=new Set([301,302,303,307,308]),dA=new Set([307,308]),Zd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},uA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},B4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pA=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),$4="remix-router-transitions";function hA(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;s=R=>({hasErrorBoundary:E(R)})}else s=pA;let a={},l=lp(e.routes,s,void 0,a),i,c=e.basename||"/",d=Ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,f=null,b=null,j=null,y=e.hydrationData!=null,w=ns(l,e.history.location,c),g=null;if(w==null){let E=Zt(404,{pathname:e.history.location.pathname}),{matches:R,route:D}=M1(l);w=R,g={[D.id]:E}}let h,m=w.some(E=>E.route.lazy),S=w.some(E=>E.route.loader);if(m)h=!1;else if(!S)h=!0;else if(d.v7_partialHydration){let E=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;h=w.every(D=>D.route.loader&&D.route.loader.hydrate!==!0&&(E&&E[D.route.id]!==void 0||R&&R[D.route.id]!==void 0))}else h=e.hydrationData!=null;let C,x={historyAction:e.history.action,location:e.history.location,matches:w,initialized:h,navigation:Zd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},_=We.Pop,k=!1,N,O=!1,L=new Map,U=null,Z=!1,te=!1,we=[],je=[],ee=new Map,$=0,P=-1,I=new Map,W=new Set,Y=new Map,Te=new Map,de=new Set,Se=new Map,ie=new Map,Le=!1;function dt(){if(u=e.history.listen(E=>{let{action:R,location:D,delta:M}=E;if(Le){Le=!1;return}xo(ie.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=$l({currentLocation:x.location,nextLocation:D,historyAction:R});if(F&&M!=null){Le=!0,e.history.go(M*-1),qr(F,{state:"blocked",location:D,proceed(){qr(F,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),e.history.go(M)},reset(){let se=new Map(x.blockers);se.set(F,Xs),Be({blockers:se})}});return}return Tt(R,D)}),n){_A(t,L);let E=()=>wA(t,L);t.addEventListener("pagehide",E),U=()=>t.removeEventListener("pagehide",E)}return x.initialized||Tt(We.Pop,x.location,{initialHydration:!0}),C}function wt(){u&&u(),U&&U(),p.clear(),N&&N.abort(),x.fetchers.forEach((E,R)=>ln(R)),x.blockers.forEach((E,R)=>Bl(R))}function fe(E){return p.add(E),()=>p.delete(E)}function Be(E,R){R===void 0&&(R={}),x=Ve({},x,E);let D=[],M=[];d.v7_fetcherPersist&&x.fetchers.forEach((F,se)=>{F.state==="idle"&&(de.has(se)?M.push(se):D.push(se))}),[...p].forEach(F=>F(x,{deletedFetchers:M,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),d.v7_fetcherPersist&&(D.forEach(F=>x.fetchers.delete(F)),M.forEach(F=>ln(F)))}function et(E,R,D){var M,F;let{flushSync:se}=D===void 0?{}:D,q=x.actionData!=null&&x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((M=E.state)==null?void 0:M._isRedirect)!==!0,X;R.actionData?Object.keys(R.actionData).length>0?X=R.actionData:X=null:q?X=x.actionData:X=null;let G=R.loaderData?A1(x.loaderData,R.loaderData,R.matches||[],R.errors):x.loaderData,ue=x.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((ye,Pe)=>ue.set(Pe,Xs)));let Me=k===!0||x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&((F=E.state)==null?void 0:F._isRedirect)!==!0;i&&(l=i,i=void 0),Z||_===We.Pop||(_===We.Push?e.history.push(E,E.state):_===We.Replace&&e.history.replace(E,E.state));let le;if(_===We.Pop){let ye=L.get(x.location.pathname);ye&&ye.has(E.pathname)?le={currentLocation:x.location,nextLocation:E}:L.has(E.pathname)&&(le={currentLocation:E,nextLocation:x.location})}else if(O){let ye=L.get(x.location.pathname);ye?ye.add(E.pathname):(ye=new Set([E.pathname]),L.set(x.location.pathname,ye)),le={currentLocation:x.location,nextLocation:E}}Be(Ve({},R,{actionData:X,loaderData:G,historyAction:_,location:E,initialized:!0,navigation:Zd,revalidation:"idle",restoreScrollPosition:Ke(E,R.matches||x.matches),preventScrollReset:Me,blockers:ue}),{viewTransitionOpts:le,flushSync:se===!0}),_=We.Pop,k=!1,O=!1,Z=!1,te=!1,we=[],je=[]}async function At(E,R){if(typeof E=="number"){e.history.go(E);return}let D=cp(x.location,x.matches,c,d.v7_prependBasename,E,d.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:M,submission:F,error:se}=R1(d.v7_normalizeFormMethod,!1,D,R),q=x.location,X=nl(x.location,M,R&&R.state);X=Ve({},X,e.history.encodeLocation(X));let G=R&&R.replace!=null?R.replace:void 0,ue=We.Push;G===!0?ue=We.Replace:G===!1||F!=null&&hn(F.formMethod)&&F.formAction===x.location.pathname+x.location.search&&(ue=We.Replace);let Me=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,le=(R&&R.unstable_flushSync)===!0,ye=$l({currentLocation:q,nextLocation:X,historyAction:ue});if(ye){qr(ye,{state:"blocked",location:X,proceed(){qr(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),At(E,R)},reset(){let Pe=new Map(x.blockers);Pe.set(ye,Xs),Be({blockers:Pe})}});return}return await Tt(ue,X,{submission:F,pendingError:se,preventScrollReset:Me,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:le})}function sn(){if(No(),Be({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Tt(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Tt(_||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Tt(E,R,D){N&&N.abort(),N=null,_=E,Z=(D&&D.startUninterruptedRevalidation)===!0,nd(x.location,x.matches),k=(D&&D.preventScrollReset)===!0,O=(D&&D.enableViewTransition)===!0;let M=i||l,F=D&&D.overrideNavigation,se=ns(M,R,c),q=(D&&D.flushSync)===!0;if(!se){let Pe=Zt(404,{pathname:R.pathname}),{matches:ut,route:tt}=M1(M);Ro(),et(R,{matches:ut,loaderData:{},errors:{[tt.id]:Pe}},{flushSync:q});return}if(x.initialized&&!te&&vA(x.location,R)&&!(D&&D.submission&&hn(D.submission.formMethod))){et(R,{matches:se},{flushSync:q});return}N=new AbortController;let X=ea(e.history,R,N.signal,D&&D.submission),G,ue;if(D&&D.pendingError)ue={[Ra(se).route.id]:D.pendingError};else if(D&&D.submission&&hn(D.submission.formMethod)){let Pe=await cr(X,R,D.submission,se,{replace:D.replace,flushSync:q});if(Pe.shortCircuited)return;G=Pe.pendingActionData,ue=Pe.pendingActionError,F=Kd(R,D.submission),q=!1,X=new Request(X.url,{signal:X.signal})}let{shortCircuited:Me,loaderData:le,errors:ye}=await Ol(X,R,se,F,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,D&&D.initialHydration===!0,q,G,ue);Me||(N=null,et(R,Ve({matches:se},G?{actionData:G}:{},{loaderData:le,errors:ye})))}async function cr(E,R,D,M,F){F===void 0&&(F={}),No();let se=SA(R,D);Be({navigation:se},{flushSync:F.flushSync===!0});let q,X=up(M,R);if(!X.route.action&&!X.route.lazy)q={type:Ue.error,error:Zt(405,{method:E.method,pathname:R.pathname,routeId:X.route.id})};else if(q=await Js("action",E,X,M,a,s,c,d.v7_relativeSplatPath),E.signal.aborted)return{shortCircuited:!0};if(ao(q)){let G;return F&&F.replace!=null?G=F.replace:G=q.location===x.location.pathname+x.location.search,await _n(x,q,{submission:D,replace:G}),{shortCircuited:!0}}if(rs(q)){let G=Ra(M,X.route.id);return(F&&F.replace)!==!0&&(_=We.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:q.error}}}if(so(q))throw Zt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:q.data}}}async function Ol(E,R,D,M,F,se,q,X,G,ue,Me){let le=M||Kd(R,F),ye=F||se||z1(le),Pe=i||l,[ut,tt]=O1(e.history,x,D,ye,R,d.v7_partialHydration&&X===!0,te,we,je,de,Y,W,Pe,c,ue,Me);if(Ro(Ee=>!(D&&D.some($e=>$e.route.id===Ee))||ut&&ut.some($e=>$e.route.id===Ee)),P=++$,ut.length===0&&tt.length===0){let Ee=cn();return et(R,Ve({matches:D,loaderData:{},errors:Me||null},ue?{actionData:ue}:{},Ee?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(!Z&&(!d.v7_partialHydration||!X)){tt.forEach($e=>{let wn=x.fetchers.get($e.key),Pl=ta(void 0,wn?wn.data:void 0);x.fetchers.set($e.key,Pl)});let Ee=ue||x.actionData;Be(Ve({navigation:le},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},tt.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G})}tt.forEach(Ee=>{ee.has(Ee.key)&&Et(Ee.key),Ee.controller&&ee.set(Ee.key,Ee.controller)});let Oo=()=>tt.forEach(Ee=>Et(Ee.key));N&&N.signal.addEventListener("abort",Oo);let{results:rd,loaderResults:Do,fetcherResults:ur}=await Yr(x.matches,D,ut,tt,E);if(E.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Oo),tt.forEach(Ee=>ee.delete(Ee.key));let Qr=P1(rd);if(Qr){if(Qr.idx>=ut.length){let Ee=tt[Qr.idx-ut.length].key;W.add(Ee)}return await _n(x,Qr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:od,errors:sd}=$1(x,D,ut,Do,Me,tt,ur,Se);Se.forEach((Ee,$e)=>{Ee.subscribe(wn=>{(wn||Ee.done)&&Se.delete($e)})});let ad=cn(),Lo=Fs(P),Ml=ad||Lo||tt.length>0;return Ve({loaderData:od,errors:sd},Ml?{fetchers:new Map(x.fetchers)}:{})}function Dl(E,R,D,M){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ee.has(E)&&Et(E);let F=(M&&M.unstable_flushSync)===!0,se=i||l,q=cp(x.location,x.matches,c,d.v7_prependBasename,D,d.v7_relativeSplatPath,R,M==null?void 0:M.relative),X=ns(se,q,c);if(!X){Gr(E,R,Zt(404,{pathname:q}),{flushSync:F});return}let{path:G,submission:ue,error:Me}=R1(d.v7_normalizeFormMethod,!0,q,M);if(Me){Gr(E,R,Me,{flushSync:F});return}let le=up(X,G);if(k=(M&&M.preventScrollReset)===!0,ue&&hn(ue.formMethod)){Is(E,R,G,le,X,F,ue);return}Y.set(E,{routeId:R,path:G}),Cn(E,R,G,le,X,F,ue)}async function Is(E,R,D,M,F,se,q){if(No(),Y.delete(E),!M.route.action&&!M.route.lazy){let $e=Zt(405,{method:q.formMethod,pathname:D,routeId:R});Gr(E,R,$e,{flushSync:se});return}let X=x.fetchers.get(E);an(E,CA(q,X),{flushSync:se});let G=new AbortController,ue=ea(e.history,D,G.signal,q);ee.set(E,G);let Me=$,le=await Js("action",ue,M,F,a,s,c,d.v7_relativeSplatPath);if(ue.signal.aborted){ee.get(E)===G&&ee.delete(E);return}if(d.v7_fetcherPersist&&de.has(E)){if(ao(le)||rs(le)){an(E,mr(void 0));return}}else{if(ao(le))if(ee.delete(E),P>Me){an(E,mr(void 0));return}else return W.add(E),an(E,ta(q)),_n(x,le,{fetcherSubmission:q});if(rs(le)){Gr(E,R,le.error);return}}if(so(le))throw Zt(400,{type:"defer-action"});let ye=x.navigation.location||x.location,Pe=ea(e.history,ye,G.signal),ut=i||l,tt=x.navigation.state!=="idle"?ns(ut,x.navigation.location,c):x.matches;pe(tt,"Didn't find any matches after fetcher action");let Oo=++$;I.set(E,Oo);let rd=ta(q,le.data);x.fetchers.set(E,rd);let[Do,ur]=O1(e.history,x,tt,q,ye,!1,te,we,je,de,Y,W,ut,c,{[M.route.id]:le.data},void 0);ur.filter($e=>$e.key!==E).forEach($e=>{let wn=$e.key,Pl=x.fetchers.get(wn),a6=ta(void 0,Pl?Pl.data:void 0);x.fetchers.set(wn,a6),ee.has(wn)&&Et(wn),$e.controller&&ee.set(wn,$e.controller)}),Be({fetchers:new Map(x.fetchers)});let Qr=()=>ur.forEach($e=>Et($e.key));G.signal.addEventListener("abort",Qr);let{results:od,loaderResults:sd,fetcherResults:ad}=await Yr(x.matches,tt,Do,ur,Pe);if(G.signal.aborted)return;G.signal.removeEventListener("abort",Qr),I.delete(E),ee.delete(E),ur.forEach($e=>ee.delete($e.key));let Lo=P1(od);if(Lo){if(Lo.idx>=Do.length){let $e=ur[Lo.idx-Do.length].key;W.add($e)}return _n(x,Lo.result)}let{loaderData:Ml,errors:Ee}=$1(x,x.matches,Do,sd,void 0,ur,ad,Se);if(x.fetchers.has(E)){let $e=mr(le.data);x.fetchers.set(E,$e)}Fs(Oo),x.navigation.state==="loading"&&Oo>P?(pe(_,"Expected pending action"),N&&N.abort(),et(x.navigation.location,{matches:tt,loaderData:Ml,errors:Ee,fetchers:new Map(x.fetchers)})):(Be({errors:Ee,loaderData:A1(x.loaderData,Ml,tt,Ee),fetchers:new Map(x.fetchers)}),te=!1)}async function Cn(E,R,D,M,F,se,q){let X=x.fetchers.get(E);an(E,ta(q,X?X.data:void 0),{flushSync:se});let G=new AbortController,ue=ea(e.history,D,G.signal);ee.set(E,G);let Me=$,le=await Js("loader",ue,M,F,a,s,c,d.v7_relativeSplatPath);if(so(le)&&(le=await P4(le,ue.signal,!0)||le),ee.get(E)===G&&ee.delete(E),!ue.signal.aborted){if(de.has(E)){an(E,mr(void 0));return}if(ao(le))if(P>Me){an(E,mr(void 0));return}else{W.add(E),await _n(x,le);return}if(rs(le)){Gr(E,R,le.error);return}pe(!so(le),"Unhandled fetcher deferred data"),an(E,mr(le.data))}}async function _n(E,R,D){let{submission:M,fetcherSubmission:F,replace:se}=D===void 0?{}:D;R.revalidate&&(te=!0);let q=nl(E.location,R.location,{_isRedirect:!0});if(pe(q,"Expected a location on the redirect navigation"),n){let ye=!1;if(R.reloadDocument)ye=!0;else if(B4.test(R.location)){const Pe=e.history.createURL(R.location);ye=Pe.origin!==t.location.origin||$r(Pe.pathname,c)==null}if(ye){se?t.location.replace(R.location):t.location.assign(R.location);return}}N=null;let X=se===!0?We.Replace:We.Push,{formMethod:G,formAction:ue,formEncType:Me}=E.navigation;!M&&!F&&G&&ue&&Me&&(M=z1(E.navigation));let le=M||F;if(dA.has(R.status)&&le&&hn(le.formMethod))await Tt(X,q,{submission:Ve({},le,{formAction:R.location}),preventScrollReset:k});else{let ye=Kd(q,M);await Tt(X,q,{overrideNavigation:ye,fetcherSubmission:F,preventScrollReset:k})}}async function Yr(E,R,D,M,F){let se=await Promise.all([...D.map(G=>Js("loader",F,G,R,a,s,c,d.v7_relativeSplatPath)),...M.map(G=>G.matches&&G.match&&G.controller?Js("loader",ea(e.history,G.path,G.controller.signal),G.match,G.matches,a,s,c,d.v7_relativeSplatPath):{type:Ue.error,error:Zt(404,{pathname:G.path})})]),q=se.slice(0,D.length),X=se.slice(D.length);return await Promise.all([I1(E,D,q,q.map(()=>F.signal),!1,x.loaderData),I1(E,M.map(G=>G.match),X,M.map(G=>G.controller?G.controller.signal:null),!0)]),{results:se,loaderResults:q,fetcherResults:X}}function No(){te=!0,we.push(...Ro()),Y.forEach((E,R)=>{ee.has(R)&&(je.push(R),Et(R))})}function an(E,R,D){D===void 0&&(D={}),x.fetchers.set(E,R),Be({fetchers:new Map(x.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function Gr(E,R,D,M){M===void 0&&(M={});let F=Ra(x.matches,R);ln(E),Be({errors:{[F.route.id]:D},fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Ll(E){return d.v7_fetcherPersist&&(Te.set(E,(Te.get(E)||0)+1),de.has(E)&&de.delete(E)),x.fetchers.get(E)||uA}function ln(E){let R=x.fetchers.get(E);ee.has(E)&&!(R&&R.state==="loading"&&I.has(E))&&Et(E),Y.delete(E),I.delete(E),W.delete(E),de.delete(E),x.fetchers.delete(E)}function dr(E){if(d.v7_fetcherPersist){let R=(Te.get(E)||0)-1;R<=0?(Te.delete(E),de.add(E)):Te.set(E,R)}else ln(E);Be({fetchers:new Map(x.fetchers)})}function Et(E){let R=ee.get(E);pe(R,"Expected fetch controller: "+E),R.abort(),ee.delete(E)}function zs(E){for(let R of E){let D=Ll(R),M=mr(D.data);x.fetchers.set(R,M)}}function cn(){let E=[],R=!1;for(let D of W){let M=x.fetchers.get(D);pe(M,"Expected fetcher: "+D),M.state==="loading"&&(W.delete(D),E.push(D),R=!0)}return zs(E),R}function Fs(E){let R=[];for(let[D,M]of I)if(M<E){let F=x.fetchers.get(D);pe(F,"Expected fetcher: "+D),F.state==="loading"&&(Et(D),I.delete(D),R.push(D))}return zs(R),R.length>0}function ed(E,R){let D=x.blockers.get(E)||Xs;return ie.get(E)!==R&&ie.set(E,R),D}function Bl(E){x.blockers.delete(E),ie.delete(E)}function qr(E,R){let D=x.blockers.get(E)||Xs;pe(D.state==="unblocked"&&R.state==="blocked"||D.state==="blocked"&&R.state==="blocked"||D.state==="blocked"&&R.state==="proceeding"||D.state==="blocked"&&R.state==="unblocked"||D.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+D.state+" -> "+R.state);let M=new Map(x.blockers);M.set(E,R),Be({blockers:M})}function $l(E){let{currentLocation:R,nextLocation:D,historyAction:M}=E;if(ie.size===0)return;ie.size>1&&xo(!1,"A router only supports one blocker at a time");let F=Array.from(ie.entries()),[se,q]=F[F.length-1],X=x.blockers.get(se);if(!(X&&X.state==="proceeding")&&q({currentLocation:R,nextLocation:D,historyAction:M}))return se}function Ro(E){let R=[];return Se.forEach((D,M)=>{(!E||E(M))&&(D.cancel(),R.push(M),Se.delete(M))}),R}function td(E,R,D){if(f=E,j=R,b=D||null,!y&&x.navigation===Zd){y=!0;let M=Ke(x.location,x.matches);M!=null&&Be({restoreScrollPosition:M})}return()=>{f=null,j=null,b=null}}function Al(E,R){return b&&b(E,R.map(M=>F$(M,x.loaderData)))||E.key}function nd(E,R){if(f&&j){let D=Al(E,R);f[D]=j()}}function Ke(E,R){if(f){let D=Al(E,R),M=f[D];if(typeof M=="number")return M}return null}function gt(E){a={},i=lp(E,s,void 0,a)}return C={get basename(){return c},get future(){return d},get state(){return x},get routes(){return l},get window(){return t},initialize:dt,subscribe:fe,enableScrollRestoration:td,navigate:At,fetch:Dl,revalidate:sn,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:Ll,deleteFetcher:dr,dispose:wt,getBlocker:ed,deleteBlocker:Bl,_internalFetchControllers:ee,_internalActiveDeferreds:Se,_internalSetRoutes:gt},C}function mA(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function cp(e,t,n,o,s,a,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=am(s||".",sm(c,a),$r(e.pathname,n)||e.pathname,i==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&d&&d.route.index&&!im(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Gn([n,u.pathname])),go(u)}function R1(e,t,n,o){if(!o||!mA(o))return{path:n};if(o.formMethod&&!yA(o.formMethod))return{path:n,error:Zt(405,{method:o.formMethod})};let s=()=>({path:n,error:Zt(400,{type:"invalid-body"})}),a=o.formMethod||"get",l=e?a.toUpperCase():a.toLowerCase(),i=M4(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!hn(l))return s();let f=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((b,j)=>{let[y,w]=j;return""+b+y+"="+w+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:f}}}else if(o.formEncType==="application/json"){if(!hn(l))return s();try{let f=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:f,text:void 0}}}catch{return s()}}}pe(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=dp(o.formData),d=o.formData;else if(o.body instanceof FormData)c=dp(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=B1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=B1(c)}catch{return s()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(hn(u.formMethod))return{path:n,submission:u};let p=ir(n);return t&&p.search&&im(p.search)&&c.append("index",""),p.search="?"+c,{path:go(p),submission:u}}function fA(e,t){let n=e;if(t){let o=e.findIndex(s=>s.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function O1(e,t,n,o,s,a,l,i,c,d,u,p,f,b,j,y){let w=y?Object.values(y)[0]:j?Object.values(j)[0]:void 0,g=e.createURL(t.location),h=e.createURL(s),m=y?Object.keys(y)[0]:void 0,C=fA(n,m).filter((_,k)=>{let{route:N}=_;if(N.lazy)return!0;if(N.loader==null)return!1;if(a)return N.loader.hydrate?!0:t.loaderData[N.id]===void 0&&(!t.errors||t.errors[N.id]===void 0);if(xA(t.loaderData,t.matches[k],_)||i.some(U=>U===_.route.id))return!0;let O=t.matches[k],L=_;return D1(_,Ve({currentUrl:g,currentParams:O.params,nextUrl:h,nextParams:L.params},o,{actionResult:w,defaultShouldRevalidate:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||A4(O,L)}))}),x=[];return u.forEach((_,k)=>{if(a||!n.some(Z=>Z.route.id===_.routeId)||d.has(k))return;let N=ns(f,_.path,b);if(!N){x.push({key:k,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(k),L=up(N,_.path),U=!1;p.has(k)?U=!1:c.includes(k)?U=!0:O&&O.state!=="idle"&&O.data===void 0?U=l:U=D1(L,Ve({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},o,{actionResult:w,defaultShouldRevalidate:l})),U&&x.push({key:k,routeId:_.routeId,path:_.path,matches:N,match:L,controller:new AbortController})}),[C,x]}function xA(e,t,n){let o=!t||n.route.id!==t.route.id,s=e[n.route.id]===void 0;return o||s}function A4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function D1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function L1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let s=n[e.id];pe(s,"No route found in manifest");let a={};for(let l in o){let c=s[l]!==void 0&&l!=="hasErrorBoundary";xo(!c,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!I$.has(l)&&(a[l]=o[l])}Object.assign(s,a),Object.assign(s,Ve({},t(s),{lazy:void 0}))}async function Js(e,t,n,o,s,a,l,i,c){c===void 0&&(c={});let d,u,p,f=y=>{let w,g=new Promise((h,m)=>w=m);return p=()=>w(),t.signal.addEventListener("abort",p),Promise.race([y({request:t,params:n.params,context:c.requestContext}),g])};try{let y=n.route[e];if(n.route.lazy)if(y){let w,g=await Promise.all([f(y).catch(h=>{w=h}),L1(n.route,a,s)]);if(w)throw w;u=g[0]}else if(await L1(n.route,a,s),y=n.route[e],y)u=await f(y);else if(e==="action"){let w=new URL(t.url),g=w.pathname+w.search;throw Zt(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:Ue.data,data:void 0};else if(y)u=await f(y);else{let w=new URL(t.url),g=w.pathname+w.search;throw Zt(404,{pathname:g})}pe(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){d=Ue.error,u=y}finally{p&&t.signal.removeEventListener("abort",p)}if(jA(u)){let y=u.status;if(cA.has(y)){let g=u.headers.get("Location");if(pe(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!B4.test(g))g=cp(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,g,i);else if(!c.isStaticRequest){let h=new URL(t.url),m=g.startsWith("//")?new URL(h.protocol+g):new URL(g),S=$r(m.pathname,l)!=null;m.origin===h.origin&&S&&(g=m.pathname+m.search+m.hash)}if(c.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Ue.redirect,status:y,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===Ue.error?Ue.error:Ue.data,response:u};let w;try{let g=u.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?w=await u.json():w=await u.text()}catch(g){return{type:Ue.error,error:g}}return d===Ue.error?{type:d,error:new lm(y,u.statusText,w),headers:u.headers}:{type:Ue.data,data:w,statusCode:u.status,headers:u.headers}}if(d===Ue.error)return{type:d,error:u};if(bA(u)){var b,j;return{type:Ue.deferred,deferredData:u,statusCode:(b=u.init)==null?void 0:b.status,headers:((j=u.init)==null?void 0:j.headers)&&new Headers(u.init.headers)}}return{type:Ue.data,data:u}}function ea(e,t,n,o){let s=e.createURL(M4(t)).toString(),a={signal:n};if(o&&hn(o.formMethod)){let{formMethod:l,formEncType:i}=o;a.method=l.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(o.json)):i==="text/plain"?a.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?a.body=dp(o.formData):a.body=o.formData}return new Request(s,a)}function dp(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function B1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function gA(e,t,n,o,s){let a={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let f=t[p].route.id;if(pe(!ao(u),"Cannot handle redirect results in processLoaderData"),rs(u)){let b=Ra(e,f),j=u.error;o&&(j=Object.values(o)[0],o=void 0),l=l||{},l[b.route.id]==null&&(l[b.route.id]=j),a[f]=void 0,c||(c=!0,i=D4(u.error)?u.error.status:500),u.headers&&(d[f]=u.headers)}else so(u)?(s.set(f,u.deferredData),a[f]=u.deferredData.data):a[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[f]=u.headers)}),o&&(l=o,a[Object.keys(o)[0]]=void 0),{loaderData:a,errors:l,statusCode:i||200,loaderHeaders:d}}function $1(e,t,n,o,s,a,l,i){let{loaderData:c,errors:d}=gA(t,n,o,s,i);for(let u=0;u<a.length;u++){let{key:p,match:f,controller:b}=a[u];pe(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let j=l[u];if(!(b&&b.signal.aborted))if(rs(j)){let y=Ra(e.matches,f==null?void 0:f.route.id);d&&d[y.route.id]||(d=Ve({},d,{[y.route.id]:j.error})),e.fetchers.delete(p)}else if(ao(j))pe(!1,"Unhandled fetcher revalidation redirect");else if(so(j))pe(!1,"Unhandled fetcher deferred data");else{let y=mr(j.data);e.fetchers.set(p,y)}}return{loaderData:c,errors:d}}function A1(e,t,n,o){let s=Ve({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&a.route.loader&&(s[l]=e[l]),o&&o.hasOwnProperty(l))break}return s}function Ra(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function M1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Zt(e,t){let{pathname:n,routeId:o,method:s,type:a}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&n&&o?i="You made a "+s+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":a==="defer-action"?i="defer() is not supported in actions":a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",s&&n&&o?i="You made a "+s.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":s&&(i='Invalid request method "'+s.toUpperCase()+'"')),new lm(e||500,l,new Error(i),!0)}function P1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ao(n))return{result:n,idx:t}}}function M4(e){let t=typeof e=="string"?ir(e):e;return go(Ve({},t,{hash:""}))}function vA(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function so(e){return e.type===Ue.deferred}function rs(e){return e.type===Ue.error}function ao(e){return(e&&e.type)===Ue.redirect}function bA(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function jA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yA(e){return iA.has(e.toLowerCase())}function hn(e){return aA.has(e.toLowerCase())}async function I1(e,t,n,o,s,a){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!A4(d,c)&&(a&&a[c.route.id])!==void 0;if(so(i)&&(s||u)){let p=o[l];pe(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await P4(i,p,s).then(f=>{f&&(n[l]=f||n[l])})}}}async function P4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ue.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Ue.error,error:s}}return{type:Ue.data,data:e.deferredData.data}}}function im(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function up(e,t){let n=typeof t=="string"?ir(t).search:t.search;if(e[e.length-1].route.index&&im(n||""))return e[e.length-1];let o=O4(e);return o[o.length-1]}function z1(e){let{formMethod:t,formAction:n,formEncType:o,text:s,formData:a,json:l}=e;if(!(!t||!n||!o)){if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:s};if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:a,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function Kd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function SA(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ta(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function CA(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function mr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function _A(e,t){try{let n=e.sessionStorage.getItem($4);if(n){let o=JSON.parse(n);for(let[s,a]of Object.entries(o||{}))a&&Array.isArray(a)&&t.set(s,new Set(a||[]))}}catch{}}function wA(e,t){if(t.size>0){let n={};for(let[o,s]of t)n[o]=[...s];try{e.sessionStorage.setItem($4,JSON.stringify(n))}catch(o){xo(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},rl.apply(this,arguments)}const El=v.createContext(null),cm=v.createContext(null),Zr=v.createContext(null),Jc=v.createContext(null),Kr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),I4=v.createContext(null);function TA(e,t){let{relative:n}=t===void 0?{}:t;kl()||pe(!1);let{basename:o,navigator:s}=v.useContext(Zr),{hash:a,pathname:l,search:i}=Nl(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Gn([o,l])),s.createHref({pathname:c,search:i,hash:a})}function kl(){return v.useContext(Jc)!=null}function Ps(){return kl()||pe(!1),v.useContext(Jc).location}function z4(e){v.useContext(Zr).static||v.useLayoutEffect(e)}function EA(){let{isDataRoute:e}=v.useContext(Kr);return e?FA():kA()}function kA(){kl()||pe(!1);let e=v.useContext(El),{basename:t,future:n,navigator:o}=v.useContext(Zr),{matches:s}=v.useContext(Kr),{pathname:a}=Ps(),l=JSON.stringify(sm(s,n.v7_relativeSplatPath)),i=v.useRef(!1);return z4(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=am(d,JSON.parse(l),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Gn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,a,e])}const NA=v.createContext(null);function RA(e){let t=v.useContext(Kr).outlet;return t&&v.createElement(NA.Provider,{value:e},t)}function Nl(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Zr),{matches:s}=v.useContext(Kr),{pathname:a}=Ps(),l=JSON.stringify(sm(s,o.v7_relativeSplatPath));return v.useMemo(()=>am(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function OA(e,t,n,o){kl()||pe(!1);let{navigator:s}=v.useContext(Zr),{matches:a}=v.useContext(Kr),l=a[a.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Ps(),u;if(t){var p;let w=typeof t=="string"?ir(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||pe(!1),u=w}else u=d;let f=u.pathname||"/",b=c==="/"?f:f.slice(c.length)||"/",j=ns(e,{pathname:b}),y=AA(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:Gn([c,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Gn([c,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,o);return t&&y?v.createElement(Jc.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:We.Pop}},y):y}function DA(){let e=zA(),t=D4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:s},n):null,a)}const LA=v.createElement(DA,null);class BA extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Kr.Provider,{value:this.props.routeContext},v.createElement(I4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $A(e){let{routeContext:t,match:n,children:o}=e,s=v.useContext(El);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Kr.Provider,{value:t},o)}function AA(e,t,n,o){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let l=e,i=(s=n)==null?void 0:s.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||pe(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:b}=n,j=p.route.loader&&f[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,f)=>{let b,j=!1,y=null,w=null;n&&(b=i&&p.route.id?i[p.route.id]:void 0,y=p.route.errorElement||LA,c&&(d<0&&f===0?(UA("route-fallback",!1),j=!0,w=null):d===f&&(j=!0,w=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,f+1)),h=()=>{let m;return b?m=y:j?m=w:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=u,v.createElement($A,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?v.createElement(BA,{location:n.location,revalidation:n.revalidation,component:y,error:b,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var F4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(F4||{}),xc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xc||{});function MA(e){let t=v.useContext(El);return t||pe(!1),t}function PA(e){let t=v.useContext(cm);return t||pe(!1),t}function IA(e){let t=v.useContext(Kr);return t||pe(!1),t}function U4(e){let t=IA(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function zA(){var e;let t=v.useContext(I4),n=PA(xc.UseRouteError),o=U4(xc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function FA(){let{router:e}=MA(F4.UseNavigateStable),t=U4(xc.UseNavigateStable),n=v.useRef(!1);return z4(()=>{n.current=!0}),v.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,rl({fromRouteId:t},a)))},[e,t])}const F1={};function UA(e,t,n){!t&&!F1[e]&&(F1[e]=!0)}function HA(e){return RA(e.context)}function VA(e){let{basename:t="/",children:n=null,location:o,navigationType:s=We.Pop,navigator:a,static:l=!1,future:i}=e;kl()&&pe(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:a,static:l,future:rl({v7_relativeSplatPath:!1},i)}),[c,i,a,l]);typeof o=="string"&&(o=ir(o));let{pathname:u="/",search:p="",hash:f="",state:b=null,key:j="default"}=o,y=v.useMemo(()=>{let w=$r(u,c);return w==null?null:{location:{pathname:w,search:p,hash:f,state:b,key:j},navigationType:s}},[c,u,p,f,b,j,s]);return y==null?null:v.createElement(Zr.Provider,{value:d},v.createElement(Jc.Provider,{children:n,value:y}))}new Promise(()=>{});function WA(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},js.apply(this,arguments)}function H4(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function ZA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function KA(e,t){return e.button===0&&(!t||t==="_self")&&!ZA(e)}const YA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],GA=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function qA(e,t){return hA({basename:t==null?void 0:t.basename,future:js({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:A$({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||QA(),routes:e,mapRouteProperties:WA,window:t==null?void 0:t.window}).initialize()}function QA(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=js({},t,{errors:XA(t.errors)})),t}function XA(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,s]of t)if(s&&s.__type==="RouteErrorResponse")n[o]=new lm(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let a=window[s.__subType];if(typeof a=="function")try{let l=new a(s.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let a=new Error(s.message);a.stack="",n[o]=a}}else n[o]=s;return n}const V4=v.createContext({isTransitioning:!1}),JA=v.createContext(new Map),eM="startTransition",U1=_6[eM],tM="flushSync",H1=$8[tM];function nM(e){U1?U1(e):e()}function na(e){H1?H1(e):e()}class rM{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function oM(e){let{fallbackElement:t,router:n,future:o}=e,[s,a]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[f,b]=v.useState(),[j,y]=v.useState(),w=v.useRef(new Map),{v7_startTransition:g}=o||{},h=v.useCallback(_=>{g?nM(_):_()},[g]),m=v.useCallback((_,k)=>{let{deletedFetchers:N,unstable_flushSync:O,unstable_viewTransitionOpts:L}=k;N.forEach(Z=>w.current.delete(Z)),_.fetchers.forEach((Z,te)=>{Z.data!==void 0&&w.current.set(te,Z.data)});let U=n.window==null||typeof n.window.document.startViewTransition!="function";if(!L||U){O?na(()=>a(_)):h(()=>a(_));return}if(O){na(()=>{f&&(u&&u.resolve(),f.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:L.currentLocation,nextLocation:L.nextLocation})});let Z=n.window.document.startViewTransition(()=>{na(()=>a(_))});Z.finished.finally(()=>{na(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})})}),na(()=>b(Z));return}f?(u&&u.resolve(),f.skipTransition(),y({state:_,currentLocation:L.currentLocation,nextLocation:L.nextLocation})):(i(_),d({isTransitioning:!0,flushSync:!1,currentLocation:L.currentLocation,nextLocation:L.nextLocation}))},[n.window,f,u,w,h]);v.useLayoutEffect(()=>n.subscribe(m),[n,m]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new rM)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let _=l,k=u.promise,N=n.window.document.startViewTransition(async()=>{h(()=>a(_)),await k});N.finished.finally(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})}),b(N)}},[h,l,u,n.window]),v.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,f,s.location,l]),v.useEffect(()=>{!c.isTransitioning&&j&&(i(j.state),d({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}),y(void 0))},[c.isTransitioning,j]),v.useEffect(()=>{},[]);let S=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:_=>n.navigate(_),push:(_,k,N)=>n.navigate(_,{state:k,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(_,k,N)=>n.navigate(_,{replace:!0,state:k,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),C=n.basename||"/",x=v.useMemo(()=>({router:n,navigator:S,static:!1,basename:C}),[n,S,C]);return v.createElement(v.Fragment,null,v.createElement(El.Provider,{value:x},v.createElement(cm.Provider,{value:s},v.createElement(JA.Provider,{value:w.current},v.createElement(V4.Provider,{value:c},v.createElement(VA,{basename:C,location:s.location,navigationType:s.historyAction,navigator:S,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},s.initialized||n.future.v7_partialHydration?v.createElement(sM,{routes:n.routes,future:n.future,state:s}):t))))),null)}function sM(e){let{routes:t,future:n,state:o}=e;return OA(t,void 0,o,n)}const aM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iM=v.forwardRef(function(t,n){let{onClick:o,relative:s,reloadDocument:a,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,f=H4(t,YA),{basename:b}=v.useContext(Zr),j,y=!1;if(typeof d=="string"&&lM.test(d)&&(j=d,aM))try{let m=new URL(window.location.href),S=d.startsWith("//")?new URL(m.protocol+d):new URL(d),C=$r(S.pathname,b);S.origin===m.origin&&C!=null?d=C+S.search+S.hash:y=!0}catch{}let w=TA(d,{relative:s}),g=uM(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:s,unstable_viewTransition:p});function h(m){o&&o(m),m.defaultPrevented||g(m)}return v.createElement("a",js({},f,{href:j||w,onClick:y||a?o:h,ref:n,target:c}))}),cM=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:s=!1,className:a="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=H4(t,GA),f=Nl(c,{relative:p.relative}),b=Ps(),j=v.useContext(cm),{navigator:y}=v.useContext(Zr),w=j!=null&&pM(f)&&d===!0,g=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,h=b.pathname,m=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;s||(h=h.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase());const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!l&&h.startsWith(g)&&h.charAt(S)==="/",x=m!=null&&(m===g||!l&&m.startsWith(g)&&m.charAt(g.length)==="/"),_={isActive:C,isPending:x,isTransitioning:w},k=C?o:void 0,N;typeof a=="function"?N=a(_):N=[a,C?"active":null,x?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let O=typeof i=="function"?i(_):i;return v.createElement(iM,js({},p,{"aria-current":k,className:N,ref:n,style:O,to:c,unstable_viewTransition:d}),typeof u=="function"?u(_):u)});var pp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pp||(pp={}));var V1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(V1||(V1={}));function dM(e){let t=v.useContext(El);return t||pe(!1),t}function uM(e,t){let{target:n,replace:o,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=EA(),d=Ps(),u=Nl(e,{relative:l});return v.useCallback(p=>{if(KA(p,n)){p.preventDefault();let f=o!==void 0?o:go(d)===go(u);c(e,{replace:f,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i})}},[d,c,u,o,s,n,e,a,l,i])}function pM(e,t){t===void 0&&(t={});let n=v.useContext(V4);n==null&&pe(!1);let{basename:o}=dM(pp.useViewTransitionState),s=Nl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=$r(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=$r(n.nextLocation.pathname,o)||n.nextLocation.pathname;return ip(s.pathname,l)!=null||ip(s.pathname,a)!=null}const jn=({to:e,className:t="",exact:n,onClick:o,label:s,style:a,...l})=>r.jsx(cM,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":s,style:a,children:r.jsx(To,{...l})}),W4=(e,t)=>(n={})=>r.jsx(jn,{to:e,className:"code",...n,children:t}),Z4=W4("/components/button","Button"),hM=W4("/components/buttons","Buttons"),K4=()=>r.jsx(T,{code:"outline",Component:B$,Source:$$,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx(Z4,{})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent"," ",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),mM=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),fM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(w4,{}),r.jsxs(De,{tocName:"buttons",children:[r.jsx(oe,{title:"Properties"}),r.jsx(E4,{}),r.jsx(K4,{}),r.jsx(k4,{}),r.jsx(T4,{}),r.jsx(oe,{title:"Components"}),r.jsx(_4,{})]})]}),xM=Object.freeze(Object.defineProperty({__proto__:null,default:fM},Symbol.toStringTag,{value:"Module"})),gM=()=>r.jsx(yw,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),vM=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,Y4=()=>r.jsx(T,{code:"CheckboxState",Component:gM,Source:vM,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),bM=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),jM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",checked:e,onChange:t})},yM=`import { Checkbox } from '@/src/index.jsx'

/* START */
import React, { useState } from 'react'
// PRETEND: import { Checkbox } from '@abw/badger-react-ui

const CheckboxExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  )
}

export default CheckboxExample`,G4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(J,{Component:jM,code:yM,expand:!0})]}),SM=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),CM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{border:!0,text:"I like badgers",checked:e,onChange:t})},_M=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const ClassName = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      border
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default ClassName`,q4=()=>r.jsx(T,{code:"border",Component:CM,Source:_M,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),wM=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),TM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",checked:e,onChange:t})},EM=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const CheckedExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default CheckedExample`,Q4=()=>r.jsx(T,{code:"checked",Component:TM,Source:EM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),kM=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),NM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},RM=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const CheckedTextExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      checkedText="I like badgers (well done!)"
      uncheckedText="I like badgers (you really should!)"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default CheckedTextExample`,X4=()=>r.jsx(T,{code:"checkedText / uncheckedText",Component:NM,Source:RM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),OM=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),DM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},LM=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const ClassName = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      text="I like badgers"
      className="large border"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default ClassName`,J4=()=>r.jsx(T,{code:"className",Component:DM,Source:LM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),BM=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),$M=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},AM=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const DisabledExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      disabled
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default DisabledExample`,ev=()=>r.jsx(T,{code:"disabled",Component:$M,Source:AM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),MM=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),PM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",checked:e,onChange:t})},IM=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const OnChangeExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default OnChangeExample`,tv=()=>r.jsx(T,{code:"onChange",Component:PM,Source:IM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),zM=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),FM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"Badger are the best!",checked:e,onChange:t})},UM=`import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const TextExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      text="Badger are the best!"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default TextExample`,nv=()=>r.jsx(T,{code:"text",Component:FM,Source:UM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),HM=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),VM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(G4,{}),r.jsxs(De,{tocName:"checkbox",children:[r.jsx(oe,{title:"Properties"}),r.jsx(nv,{}),r.jsx(Q4,{}),r.jsx(X4,{}),r.jsx(tv,{}),r.jsx(J4,{}),r.jsx(q4,{}),r.jsx(ev,{}),r.jsx(oe,{title:"Components"}),r.jsx(Y4,{})]})]}),WM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),ZM=()=>r.jsx(r.Fragment,{children:r.jsx(Pn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),KM=`import { Confirm } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Confirm } from '@abw/badger-react-ui

const ConfirmExample = () =>
  <>
    <Confirm
      text="Delete"
      color="red"
      iconRight="trash"
      onClick={() => window.alert('Confirmed!')}
    />
  </>

export default ConfirmExample`,rv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(J,{Component:ZM,code:KM,expand:!0})]}),YM=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),GM=()=>r.jsx(Pn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),qM=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const CancelExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    cancel={{
      text: 'Go Back',
      color: 'yellow',
      outline: false,
      iconLeft: 'angle-left',
    }}
  />
  /* END */

export default CancelExample`,ov=()=>r.jsx(T,{code:"cancel",Component:GM,Source:qM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),QM=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),XM=()=>r.jsx(Pn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),JM=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const CancelExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    cancelText="Nah"
    cancelColor="blue"
    cancelIcon="angle-left"
  />
  /* END */

export default CancelExample`,sv=()=>r.jsx(T,{id:"cancelProps",code:"cancelXXX",Component:XM,Source:JM,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),tP=()=>r.jsx(r.Fragment,{children:r.jsx(Pn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),nP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const ConfirmExample = () =>
  <>
    {/* START */}
    <Confirm
      className="buttons border pad-2 bgc-90 bgd-10 bdr-2"
      icon="trash"
      color="red"
    />
    {/* END */}
  </>

export default ConfirmExample
`,av=()=>r.jsx(T,{code:"className",Component:tP,Source:nP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),rP=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),oP=()=>r.jsx(Pn,{text:"Click to Delete",color:"red"}),sP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,lv=()=>r.jsx(T,{code:"color",Component:oP,Source:sP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),aP=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),lP=()=>r.jsx(Pn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),iP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const ConfirmExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    confirm={{
      text: 'Yep, do it!',
      color: 'green',
      iconRight: 'angle-right',
    }}
  />
  /* END */

export default ConfirmExample`,iv=()=>r.jsx(T,{code:"confirm",Component:lP,Source:iP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),cP=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),dP=()=>r.jsx(Pn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),uP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const ConfirmProps = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    confirmText="Yep"
    confirmColor="green"
    confirmIcon="trash"
  />
  /* END */

export default ConfirmProps`,cv=()=>r.jsx(T,{id:"confirmProps",code:"confirmXXX",Component:dP,Source:uP,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),pP=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),hP=()=>r.jsx(Pn,{text:"Click to Delete",color:"red",iconRight:"trash"}),mP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
    iconRight="trash"
  />
/* END */

export default Component
`,dv=()=>r.jsx(T,{code:"iconRight",Component:hP,Source:mP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),xP=()=>r.jsx(Pn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),gP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,uv=()=>r.jsx(T,{code:"onClick",Component:xP,Source:gP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),vP=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),bP=()=>r.jsx(Pn,{text:"Click to Delete"}),jP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,pv=()=>r.jsx(T,{code:"text",Component:bP,Source:jP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),yP=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),SP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(rv,{}),r.jsxs(De,{tocName:"confirm",children:[r.jsx(oe,{title:"Properties"}),r.jsx(pv,{}),r.jsx(lv,{}),r.jsx(dv,{}),r.jsx(av,{}),r.jsx(ov,{}),r.jsx(sv,{}),r.jsx(iv,{}),r.jsx(cv,{}),r.jsx(oe,{title:"Event Handlers"}),r.jsx(uv,{})]})]}),CP=Object.freeze(Object.defineProperty({__proto__:null,default:SP},Symbol.toStringTag,{value:"Module"})),on=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],_P=()=>r.jsx($t,{rows:on,columns:"id name animal role"}),wP=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () =>
  <Datatable
    rows={animals}
    columns="id name animal role"
  />

export default DatatableExample`,hv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),r.jsx(J,{Component:_P,code:wP})]}),TP=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),EP=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),kP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns="id name animal role"
    />
    /* END */
  )
}

export default DatatableExample`,mv=()=>r.jsx(T,{code:"color",Component:EP,Source:kP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),NP=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),RP=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),OP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={[
        { id: 10101, name: 'Alan',    salary: 123456, admin: true  },
        { id: 1010,  name: 'Brian',   salary: 45678,  admin: false },
        { id: 101,   name: 'Charlie', salary: 56789,  admin: false },
      ]}
      columns={{
        id:     {
          type: 'number',
          className: 'text-right'
        },
        name: {
        },
        salary: {
          type: 'currency',
          className: 'text-right'
        },
        admin: {
          type: 'boolean',
          className: 'text-right'
        }
      }}
    />
    /* END */
  )
}

export default DatatableExample`,DP=()=>r.jsxs(T,{code:"type",Component:RP,Source:OP,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:DP},Symbol.toStringTag,{value:"Module"})),BP=()=>r.jsx($t,{rows:on,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),$P=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={animals}
      columns={{
        id: { },
        name: {
          display: ({ row }) => \`\${row.name} \${row.animal}\`
        }
      }}
    />
    /* END */
  )
}

export default DatatableExample`,fv=()=>r.jsx(T,{code:"display",Component:BP,Source:$P,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:fv},Symbol.toStringTag,{value:"Module"})),MP=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),PP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns="id name animal role"
    />
    /* END */
  )
}

export default DatatableExample
`,IP=()=>r.jsx($t,{color:"brand",rows:on,columns:["id","name","animal","role"]}),zP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns={[
        'id',
        'name',
        'animal',
        'role'
      ]}
    />
    /* END */
  )
}

export default DatatableExample
`,FP=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),UP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns={[
        { field: 'id'     },
        { field: 'name'   },
        { field: 'animal' },
        { field: 'role'   },
      ]}
    />
    /* END */
  )
}

export default DatatableExample
`,HP=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),VP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns={[
        { field: 'id',   label: 'Ref.', type: 'number' },
        { field: 'name', label: 'Username' },
        { field: 'animal' },
        { field: 'role'   },
      ]}
    />
    /* END */
  )
}

export default DatatableExample
`,WP=()=>r.jsx($t,{color:"brand",rows:on,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),ZP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns={{
        id:     { label: 'Ref.',     type: 'number' },
        name:   { label: 'Username', type: 'string' },
        animal: { },
        role:   { },
      }}
    />
    /* END */
  )
}

export default DatatableExample
`,xv=()=>r.jsxs(z,{code:"columns",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),r.jsx(J,{Component:MP,code:PP,caption:"columns",expand:!1,undent:2}),r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),r.jsx(J,{Component:IP,code:zP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),r.jsx(J,{Component:FP,code:UP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),r.jsx(J,{Component:HP,code:VP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]}),r.jsx(J,{Component:WP,code:ZP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),KP=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),YP=()=>r.jsx($t,{rows:on,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),GP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={animals}
      columns={{
        id:   { label: 'User ID' },
        name: { label: 'User Name' }
      }}
    />
    /* END */
  )
}

export default DatatableExample`,gv=()=>r.jsx(T,{code:"label",Component:YP,Source:GP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),qP=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),QP=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),XP=`import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={[
        { id: 10101, name: 'Alan',    salary: 123456, admin: true  },
        { id: 1010,  name: 'Brian',   salary: 45678,  admin: false },
        { id: 101,   name: 'Charlie', salary: 56789,  admin: false },
      ]}
      columns={{
        id:     { type: 'number' },
        name:   { },
        salary: { type: 'currency' },
        admin:  { type: 'boolean' }
      }}
    />
    /* END */
  )
}

export default DatatableExample`,vv=()=>r.jsxs(T,{code:"type",Component:QP,Source:XP,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),JP=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),eI=()=>r.jsx($t,{rows:on,columns:"id name animal role",onRowClick:e=>window.alert(`Animal #${e.id}: ${e.name}`)}),tI=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={animals}
      columns="id name animal role"
      onRowClick={
        row => window.alert(\`Animal #\${row.id}: \${row.name}\`)
      }
    />
    /* END */
  )
}

export default DatatableExample`,bv=()=>r.jsx(T,{code:"onRowClick",Component:eI,Source:tI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onRowClick"})," property can be used to define a handler which will be called when the user clicks on a row.  When set the table will have the ",r.jsx("code",{children:"selectable"})," CSS class added to highlight the hovered row."]})}),nI=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),rI=()=>r.jsx($t,{rows:on,columns:"id name animal role",pager:{size:"small",color:"blue"}}),oI=`import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={animals}
      columns="id name animal role"
      pager={{ size: 'small', color: 'blue' }}
    />
    /* END */
  )
}

export default DatatableExample`,jv=()=>r.jsx(T,{code:"pager",Component:rI,Source:oI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(jn,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),sI=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),aI=`export const animals = [
  { name: 'Alan',       animal: 'Anteater', id: 10,  role: 'admin' },
  { name: 'Bobby',      animal: 'Badger',   id: 20,  role: 'admin' },
  { name: 'Brenda',     animal: 'Badger',   id: 30,  role: 'admin' },
  { name: 'Christina',  animal: 'Cat',      id: 40,  role: 'user'  },
  { name: 'Derek',      animal: 'Dog',      id: 50,  role: 'user'  },
  { name: 'Delia',      animal: 'Donkey',   id: 60,  role: 'admin' },
  { name: 'Edwin',      animal: 'Elephant', id: 70,  role: 'admin' },
  { name: 'Frank',      animal: 'Ferret',   id: 80,  role: 'user'  },
  { name: 'Felicity',   animal: 'Fox',      id: 90,  role: 'admin' },
  { name: 'Gertrude',   animal: 'Goat',     id: 11,  role: 'admin' },
  { name: 'Hector',     animal: 'Hamster',  id: 12,  role: 'admin' },
  { name: 'Ian',        animal: 'Iguana',   id: 13,  role: 'user'  },
  { name: 'Julie',      animal: 'Jellyfish',id: 14,  role: 'user'  },
  { name: 'Kevin',      animal: 'Koala',    id: 21,  role: 'user'  },
  { name: 'Lionel',     animal: 'Llama',    id: 22,  role: 'user'  },
  { name: 'Mary',       animal: 'Magpie',   id: 23,  role: 'user'  },
  { name: 'Nerys',      animal: 'Narwhal',  id: 24,  role: 'user'  },
  { name: 'Oliver',     animal: 'Octopus',  id: 31,  role: 'user'  },
  { name: 'Penny',      animal: 'Panda',    id: 32,  role: 'admin' },
  { name: 'Quentin',    animal: 'Quail',    id: 33,  role: 'admin' },
  { name: 'Roger',      animal: 'Raccoon',  id: 41,  role: 'user'  },
  { name: 'Simon',      animal: 'Stoat',    id: 42,  role: 'user'  },
  { name: 'Terry',      animal: 'Tiger',    id: 43,  role: 'user'  },
  { name: 'Ursula',     animal: 'Unicorn',  id: 101, role: 'user'  },
  { name: 'Violet',     animal: 'Vole',     id: 102, role: 'user'  },
  { name: 'Willy',      animal: 'Wombat',   id: 103, role: 'user'  },
  { name: 'Xerces',     animal: 'Xenus',    id: 201, role: 'user'  },
  { name: 'Yvonne',     animal: 'Yaz',      id: 202, role: 'user'  },
  { name: 'Zebedee',    animal: 'Zebra',    id: 203, role: 'user'  },
  { name: 'Al',         animal: 'Zebra',    id: 301, role: 'guest' },
  { name: 'Bob',        animal: 'Wombat',   id: 302, role: 'guest' },
  { name: 'Chris',      animal: 'Panda',    id: 303, role: 'guest' },
  { name: 'Kevin',      animal: 'Gerbil',   id: 304, role: 'guest' },
  { name: 'Roland',     animal: 'Rat',      id: 1234, role: 'superstar' },
]
`,yv=()=>r.jsxs(z,{code:"rows",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(Wn,{code:aI,language:"js"})})})]}),lI=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),iI=()=>r.jsx($t,{rows:on,columns:"id name animal role",storageKey:"badger-datatable-animals-demo1"}),cI=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () =>
  <Datatable
    rows={animals}
    columns="id name animal role"
    storageKey="badger-datatable-animals-demo1"
  />

export default DatatableExample`,Sv=()=>r.jsxs(T,{code:"storageKey",Component:iI,Source:cI,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," property can be used to provide a key to store the data table state in local storage.  This allows the page number, page size, visible columns, column order, sort column and sort direction to be preserved across visits to the page."]}),r.jsx("p",{children:"Try changing some of those setting in the example below.  Then reload the browser page.  You should see the setting preserved."})]}),dI=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),uI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(hv,{}),r.jsxs(De,{tocName:"datatable",children:[r.jsx(oe,{title:"Properties"}),r.jsx(yv,{}),r.jsx(xv,{}),r.jsx(bv,{}),r.jsx(mv,{}),r.jsx(jv,{}),r.jsx(Sv,{}),r.jsx(oe,{title:"Column Properties"}),r.jsx(vv,{}),r.jsx(fv,{}),r.jsx(gv,{})]})]}),pI=Object.freeze(Object.defineProperty({__proto__:null,default:uI},Symbol.toStringTag,{value:"Module"})),hI=()=>r.jsx(Je,{summary:"Click to reveal",children:"This is the content that is revealed."}),mI=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,Cv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(J,{Component:hI,code:mI})]}),fI=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),xI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),gI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="Bordered" border>
      This is the content that is revealed.
    </Details>
    <Details summary="Bordered and Lined" border lined>
      This is the content that is revealed.
    </Details>
    <Details summary="Wide Border" border={3} lined>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,_v=()=>r.jsx(T,{code:"border",Component:xI,Source:gI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),vI=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),bI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),jI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="Blue Border" color="blue" border lined>
      This is the content that is revealed.
    </Details>
    <Details summary="Blue Shaded" color="blue" shaded lined border>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,wv=()=>r.jsx(T,{code:"color",Component:bI,Source:jI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),yI=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),SI=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",content:"This is the content that is revealed."})}),CI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="This is the summary"
      content="This is the content that is revealed."
    />
    {/* END */}
  </div>

export default DetailsExample`,Tv=()=>r.jsx(T,{code:"content",Component:SI,Source:CI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),wI=()=>r.jsx(Je,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),TI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,Ev=()=>r.jsx(T,{code:"lined",Component:wI,Source:TI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),kI=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),NI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,kv=()=>r.jsx(T,{code:"open",Component:kI,Source:NI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),RI=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),OI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),DI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="Border Radius" border lined radius={2}>
      This is the content that is revealed.
    </Details>
    <Details summary="Border Radius" border lined radius={4}>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,Nv=()=>r.jsx(T,{code:"radius",Component:OI,Source:DI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),LI=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),BI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),$I=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="Shaded" shaded>
      This is the content that is revealed.
    </Details>
    <Details summary="Shaded and Border" border shaded>
      This is the content that is revealed.
    </Details>
    <Details summary="Shaded, Lined and Border" border shaded lined>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,Rv=()=>r.jsx(T,{code:"shaded",Component:BI,Source:$I,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),AI=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),MI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),PI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="Shadow 1" border shaded shadow={1}>
      This is the content that is revealed.
    </Details>

    <Details summary="Shadow 3" border shaded shadow={3}>
      This is the content that is revealed.
    </Details>

    <Details summary="Shadow 5" border shaded shadow={5}>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,Ov=()=>r.jsx(T,{code:"shadow",Component:MI,Source:PI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),II=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),zI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Je,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(re,{name:"cog"})]}),children:"This is the content that is revealed."})]}),FI=`import React from 'react'
import { Details, Icon } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary">
      This is the content that is revealed.
    </Details>

    <Details
      border lined
      summary={
        <div className="wide flex space middle pad-r-2">
          <div>Control Panel</div>
          <Icon name="cog"/>
        </div>
      }
    >
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,Dv=()=>r.jsx(T,{code:"summary",Component:zI,Source:FI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),UI=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),HI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(Cv,{}),r.jsxs(De,{tocName:"details",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Dv,{}),r.jsx(Tv,{}),r.jsx(kv,{}),r.jsx(Ev,{}),r.jsx(_v,{}),r.jsx(Nv,{}),r.jsx(Rv,{}),r.jsx(Ov,{}),r.jsx(wv,{}),r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(z,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(z,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(oe,{title:"Components"}),r.jsx(z,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(z,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),VI=Object.freeze(Object.defineProperty({__proto__:null,default:HI},Symbol.toStringTag,{value:"Module"})),WI=()=>r.jsx(Hr,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),ZI=`import { DropdownMenu } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownExample = () => {
  return (
    <DropdownMenu
      text='Dropdown Menu'
      iconRight="angle-down"
      options={[
        'Alan Aardvark',
        'Amy Aardvark',
        'Anne Aardvark',
        'Bart Badger',
        'Betty Badger',
        'Bobby Badger',
        'Brenda Badger',
        'Brian Badger',
        'Colin Camel',
        'David Donkey',
        'Eddie Elephant',
        'Franky Ferret',
        'Gina Goat',
        'Helen Horse',
        'Ian Iguana',
        'Juliet Jackdaw',
        'Kevin Kangaroo',
        'Linda Llama',
        'Mike Monkey',
      ]}
    />
  )
}

export default DropdownExample`,Lv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(jn,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),r.jsx(J,{Component:WI,code:ZI})]}),KI=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),YI=()=>r.jsx(Hr,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),GI=`import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownMenuExample = () =>
  /* START */
  <DropdownMenu
    text='Dropdown Menu'
    iconRight="angle-down"
    onSelect={item => alert(\`You selected: \${item.text}\`)}
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownMenuExample`,Bv=()=>r.jsx(T,{code:"onSelect",Component:YI,Source:GI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),qI=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),QI=()=>r.jsx(Hr,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),XI=`import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <DropdownMenu
    text='Simple Options'
    iconRight="angle-down"
    options={[
      'Hello',
      'World',
      10,
      11,
    ]}
  />
  /* END */

export default DropdownExample`,JI=()=>r.jsx(Hr,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),ez=`import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <DropdownMenu
    text='Option Separators'
    iconRight="angle-down"
    options={[
      'One',
      'Two',
      'Three',
      {
        separator: true
      },
      'Eleven',
      'Twelve',
      'Thirteen',
      {
        separator: true
      },
      'One Hundred',
      'Two Hundred',
      'Three Hundred',
    ]}
  />
  /* END */

export default DropdownExample`,tz=()=>r.jsx(Hr,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),nz=`import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <DropdownMenu
    text='Object Options'
    iconRight="angle-down"
    options={[
      {
        text: 'Star',
        iconLeft: 'star'
      },
      {
        text: 'Heart',
        iconRight: 'heart',
        className: 'text-right'
      },
      {
        text: 'Move',
        iconLeft: 'angle-left',
        iconRight: 'angle-right'
      },
      {
        text:
          <div className="flex space small">
            <div>Foo</div>
            <div>Bar</div>
          </div>
      },
    ]}
  />
  /* END */

export default DropdownExample`,rz=()=>r.jsx(Hr,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),oz=`import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <DropdownMenu
    text='Option Headings'
    iconRight="angle-down"
    options={[
      {
        heading: 'Single Digit Numbers'
      },
      'One',
      'Two',
      'Three',
      {
        heading: 'Double Digit Numbers'
      },
      'Eleven',
      'Twelve',
      'Thirteen',
      {
        heading: 'Triple Digit Numbers'
      },
      'One Hundred',
      'Two Hundred',
      'Three Hundred',
    ]}
  />
  /* END */

export default DropdownExample`,sz=()=>r.jsx(Hr,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),az=`import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <DropdownMenu
    text='Disabled Options'
    iconRight="angle-down"
    options={[
      {
        text: 'Disabled #1',
        disabled: true
      },
      {
        text: 'Enabled #2',
      },
      {
        text: 'Disabled #3',
        disabled: true
      },
      {
        text: 'Enabled #4',
      },
      {
        text: 'Disabled #5',
        disabled: true
      },
    ]}
  />
  /* END */

export default DropdownExample`,$v=()=>r.jsxs(z,{code:"options",children:[r.jsxs("div",{className:"mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(J,{Component:QI,code:XI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),r.jsx(J,{Component:tz,code:nz,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]}),r.jsx(J,{Component:sz,code:az,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]}),r.jsx(J,{Component:JI,code:ez,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]}),r.jsx(J,{Component:rz,code:oz,caption:"options",expand:!1,undent:2})]}),lz=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),vo=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),iz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(Lv,{}),r.jsxs(De,{tocName:"dropdown-menu",children:[r.jsx(oe,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(jn,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx($v,{}),r.jsx(Bv,{}),r.jsxs(vo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(z,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(z,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),cz=Object.freeze(Object.defineProperty({__proto__:null,default:iz},Symbol.toStringTag,{value:"Module"})),dz=()=>r.jsx(Sn,{text:"Dropdown",children:"Hello World!"}),uz=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,Av=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),r.jsx(J,{Component:dz,code:uz})]}),pz=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),hz=()=>r.jsx(Sn,{text:"Dropdown Content",content:"Hello World!"}),mz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Mv=()=>r.jsx(T,{code:"content",Component:hz,Source:mz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),fz=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),xz=()=>r.jsx(Sn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),gz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconLeft'
    iconLeft='angle-down'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Pv=()=>r.jsx(T,{code:"iconLeft",Component:xz,Source:gz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),vz=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),bz=()=>r.jsx(Sn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),jz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownMenuExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconLeftRotate'
    iconLeft='angle-right'
    iconLeftRotate={90}
    content='Hello World!'
  />
  /* END */

export default DropdownMenuExample`,Iv=()=>r.jsx(T,{code:"iconLeftRotate",Component:bz,Source:jz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),yz=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),Sz=()=>r.jsx(Sn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),Cz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconRight'
    iconRight='angle-down'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,zv=()=>r.jsx(T,{code:"iconRight",Component:Sz,Source:Cz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),_z=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),wz=()=>r.jsx(Sn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),Tz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconRightRotate'
    iconRight='angle-left'
    iconRightRotate={-90}
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Fv=()=>r.jsx(T,{code:"iconRightRotate",Component:wz,Source:Tz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),Ez=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),kz=()=>r.jsx(Sn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),Nz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    openOnHover={true}
    text='Dropdown openOnHover'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Uv=()=>r.jsx(T,{code:"openOnHover",Component:kz,Source:Nz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),Rz=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),Oz=()=>r.jsx(Sn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),Dz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    right
    text='Dropdown Right'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Hv=()=>r.jsx(T,{code:"right",Component:Oz,Source:Dz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),Lz=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),Bz=()=>r.jsx(Sn,{text:"Dropdown Trigger Text",children:"Hello World!"}),$z=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,Vv=()=>r.jsx(T,{code:"text",Component:Bz,Source:$z,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),Az=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"})),Mz=()=>r.jsx(Sn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),Pz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    wide
    text='Dropdown Wide'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Wv=()=>r.jsx(T,{code:"wide",Component:Mz,Source:Pz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),Iz=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),zz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(Av,{}),r.jsxs(De,{tocName:"dropdown",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Vv,{}),r.jsx(Mv,{}),r.jsx(Uv,{}),r.jsx(Hv,{}),r.jsx(Wv,{}),r.jsx(Pv,{}),r.jsx(Iv,{}),r.jsx(zv,{}),r.jsx(Fv,{}),r.jsxs(vo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(z,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(z,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(z,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(z,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(z,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),Fz=Object.freeze(Object.defineProperty({__proto__:null,default:zz},Symbol.toStringTag,{value:"Module"})),Uz=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],Hz=e=>Uz.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),Vz=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"animal",type:"search",label:"Animal",onSearch:Hz}),r.jsx(Ms,{})]}),Wz=`import { Form, Field, Debug } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Beatrice Badger',
  'Belinda Badger',
  'Ben Badger',
  'Bert Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Brook Badger',
  'Buzz Badger',
]

const onSearch = input =>
  animals.filter(
    animal =>
      animal
        .toLowerCase()
        .indexOf(input.toLowerCase()) !== -1
  )

const SearchExample = () =>
  <Form>
    <Field
      name="animal"
      type="search"
      label="Animal"
      onSearch={onSearch}
    />
    <Debug/>
  </Form>

export default SearchExample`,Zz=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],W1=e=>Zz.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),Kz=e=>e.id,Yz=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"animal1",type:"search",label:"Animal",onSearch:W1}),r.jsx(at,{name:"animal2",type:"search",label:"Animal",onSearch:W1,selectValue:Kz}),r.jsx(Ms,{})]}),Gz=`import { Form, Field, Debug } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/badger-react-ui

const animals = [
  { id:  1, name: 'Alan Aardvark' },
  { id:  2, name: 'Amy Aardvark' },
  { id:  3, name: 'Anne Aardvark' },
  { id:  4, name: 'Bart Badger' },
  { id:  5, name: 'Beatrice Badger' },
  { id:  6, name: 'Belinda Badger' },
  { id:  7, name: 'Ben Badger' },
  { id:  8, name: 'Bert Badger' },
  { id:  9, name: 'Betty Badger' },
  { id: 10, name: 'Bobby Badger' },
  { id: 11, name: 'Brenda Badger' },
  { id: 12, name: 'Brian Badger' },
  { id: 13, name: 'Brook Badger' },
  { id: 14, name: 'Buzz Badger' },
]

const onSearch = input =>
  animals.filter(
    animal =>
      animal
        .name
        .toLowerCase()
        .indexOf(input.toLowerCase()) !== -1
  )

const selectValue = option =>
  option.id

const SearchExample = () =>
  <Form>
    <Field
      name="animal1"
      type="search"
      label="Animal"
      onSearch={onSearch}
    />
    <Field
      name="animal2"
      type="search"
      label="Animal"
      onSearch={onSearch}
      selectValue={selectValue}
    />
    <Debug/>
  </Form>

export default SearchExample`,Zv=()=>r.jsxs(z,{code:"search",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"search"})," ","to use the ",r.jsx(jn,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",r.jsx("code",{children:"onSearch"})," handler defined below."]}),r.jsx(J,{Component:Vz,code:Wz}),r.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(J,{Component:Yz,code:Gz})]}),qz=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Qz=()=>zr(2e3).then(()=>({ok:"All is good"})),Kv=()=>r.jsxs(lr,{className:"relative",onSubmit:Qz,children:[r.jsx(at,{name:"name",label:"Your name",required:!0}),r.jsx(at,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(wl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(nm,{size:"small",spinnerSize:"x3",text:"Posting...",icon:"envelope",color:"green",strokeStop:50,animation:"beat"})]}),Xz=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),Jz=()=>zr(2e3).then(()=>({ok:"All is good"})),Yv=()=>r.jsxs(lr,{className:"relative",onSubmit:Jz,children:[r.jsx(at,{name:"name",label:"Your name",required:!0}),r.jsx(at,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(wl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(nm,{})]}),eF=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),tF=`/* eslint-disable quotes */
import { Form, Field, Submit, Submitting } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, Submit, Submitting } from '@abw/badger-react-ui

const onSubmit = () => sleep(2000).then(
  () => ({ ok: 'All is good' })
)

const FormExample = () =>
  <Form
    className="relative"
    onSubmit={onSubmit}
  >
    <Field
      name="name"
      label="Your name"
      required
    />
    <Field
      name="comment"
      label="Comment"
      type="textarea"
      required
    />
    <Submit
      text="Submit"
      color="green"
      iconRight="arrow-right"
    />
    <Submitting/>
  </Form>

export default FormExample`,nF=`/* eslint-disable quotes */
import { Form, Field, Submit, Submitting } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, Submit, Submitting } from '@abw/badger-react-ui

const onSubmit = () => sleep(2000).then(
  () => ({ ok: 'All is good' })
)

const FormExample = () =>
  <Form
    className="relative"
    onSubmit={onSubmit}
  >
    <Field
      name="name"
      label="Your name"
      required
    />
    <Field
      name="comment"
      label="Comment"
      type="textarea"
      required
    />
    <Submit
      text="Submit"
      color="green"
      iconRight="arrow-right"
    />
    <Submitting
      size="small"
      spinnerSize="x3"
      text="Posting..."
      icon="envelope"
      color="green"
      strokeStop={50}
      animation="beat"
    />
  </Form>

export default FormExample`,Gv=()=>r.jsxs(z,{code:"Submitting",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Submitting"})," component can be used to add an overlay with a ",r.jsx(jn,{to:"/components/spinner",text:"Spinner"})," and message when the form is submitting."]}),r.jsx(J,{Component:Yv,code:tF}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the overall size. The ",r.jsx("code",{children:"spinnerSize"})," can be used to set the size of the spinner icon. The ",r.jsx("code",{children:"text"})," property can be used to change the text displayed. All other properties are forwarded to the"," ",r.jsx(jn,{to:"/components/spinner",text:"Spinner"})," component."]}),r.jsx(J,{Component:Kv,code:nF})]}),rF=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),oF=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),r.jsx(Ms,{})]}),sF=`import React from 'react'
import { Form, Field, Debug } from '@/src/index.jsx'

const UISelectExample = () =>
  /* START */
  <Form>
    <Field
      name="animal"
      type="uiselect"
      label="Animal"
      options={[
        'Ant',
        'Badger',
        'Cat',
        'Dog',
        'Elephant'
      ]}
    />
    <Debug/>
  </Form>
  /* END */

export default UISelectExample`,aF=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),r.jsx(Ms,{})]}),lF=`import React from 'react'
import { Form, Field, Debug } from '@/src/index.jsx'

const UISelectExample = () =>
  /* START */
  <Form>
    <Field
      name="badger"
      type="uiselect"
      label="Badger"
      search
      options={[
        { id: 1, name: 'Bella Badger', },
        { id: 2, name: 'Benjamin Badger', },
        { id: 3, name: 'Bethany Badger', },
        { id: 4, name: 'Billy Badger', },
        { id: 5, name: 'Bobby Badger', },
        { id: 6, name: 'Brenda Badger', },
        { id: 7, name: 'Brian Badger', },
        { id: 8, name: 'Brianna Badger', },
      ]}
    />
    <Debug/>
  </Form>
  /* END */

export default UISelectExample`,iF=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),r.jsx(Ms,{})]}),cF=`import React from 'react'
import { Form, Field, Debug } from '@/src/index.jsx'

const UISelectExample = () =>
  /* START */
  <Form>
    <Field
      name="member"
      type="uiselect"
      label="Musician"
      value="david"
      selectValue={option => option.value}
      options={[
        { value: 'nigel', text: 'Nigel Tufnel' },
        { value: 'david', text: 'David St. Hubbins' },
        { value: 'derek', text: 'Derek Smalls' },
      ]}
    />
    <Debug/>
  </Form>
  /* END */

export default UISelectExample`,qv=()=>r.jsxs(z,{code:"uiselect",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"uiselect"})," ","to use the ",r.jsx(jn,{to:"/components/select",text:"Select"})," component."]}),r.jsx(J,{Component:oF,code:sF}),r.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",r.jsx("code",{children:"search"})," property is set here to enable searching."]}),r.jsx(J,{Component:aF,code:lF}),r.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(J,{Component:iF,code:cF})]}),dF=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),uF=["Guitar","Bass","Drums","Keyboards","Mandolin"],pF=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],hF=e=>pF.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),mF=()=>zr(2e3).then(()=>({ok:"All is good"})),fF=()=>r.jsxs(lr,{className:"relative",onSubmit:mF,resetOnSuccess:!0,children:[r.jsx(at,{name:"email",label:"Email address",required:!0}),r.jsx(at,{name:"password",label:"Password",type:"password",required:!0}),r.jsx(at,{name:"instrument",type:"uiselect",label:"Instrument",options:uF}),r.jsx(at,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:hF}),r.jsx(at,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),r.jsx(cO,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),r.jsx(nm,{}),e=>r.jsx(B,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),r.jsx(Ms,{})]}),xF=`/* eslint-disable quotes */
import { Form, Field, ResetSubmit, Debug, Button, Submitting } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Button, Debug, Submitting } from '@abw/badger-react-ui

const instruments = [
  'Guitar',
  'Bass',
  'Drums',
  'Keyboards',
  'Mandolin'
]

const quotes = [
  "Eleven, it's one louder",
  "These go up to eleven",
  "How much more black could this be",
  "The answer is none, none more black",
  "He died in a bizarre gardening accident",
  "You can't really dust for vomit",
  "No, we're all out. Do you wear black?",
  "The sustain, listen to it.",
  "What's wrong with being sexy?"
]

const searchQuotes = input =>
  quotes.filter(
    quote => quote
      .toLowerCase()
      .indexOf(input.toLowerCase()) >= 0
  )

const onSubmit = () => sleep(2000).then(
  () => ({ ok: 'All is good' })
)

const FormExample = () =>
  <Form
    className="relative"
    onSubmit={onSubmit}
    resetOnSuccess
  >
    <Field
      name="email"
      label="Email address"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <Field
      name="instrument"
      type="uiselect"
      label="Instrument"
      options={instruments}
    />
    <Field
      name="quote"
      type="search"
      label="Favourite Quote"
      help="Hint: try 'black' or 'eleven'"
      onSearch={searchQuotes}
    />
    <Field
      name="terms"
      type="checkbox"
      text="I like badgers"
      required
    />
    <ResetSubmit
      space
      submit={{
        color: 'green',
        iconRight: 'arrow-right',
        text: 'Register'
      }}
    />
    <Submitting/>
    { form =>
      <Button
        text="Set Example Form Values"
        className="mar-t-2 wide orange"
        onClick={
          () => form.setValues({
            email: 'nigel@spinal-tap.com',
            password: 'eleven',
            instrument: 'Guitar',
            quote: 'These go up to eleven',
            terms: true
          })
        }
      />
    }
    <Debug/>
  </Form>

export default FormExample`,gF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Form"}),r.jsxs("p",{className:"large wide",children:["The library includes"," ",r.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),r.jsx(J,{Component:fF,code:xF,caption:"Form"}),r.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",r.jsx(jn,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",r.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),r.jsxs(De,{tocName:"form",children:[r.jsx(oe,{title:"Input Components"}),r.jsx(qv,{}),r.jsx(Zv,{}),r.jsx(oe,{title:"Additional Component"}),r.jsx(Gv,{})]})]}),vF=Object.freeze(Object.defineProperty({__proto__:null,default:gF},Symbol.toStringTag,{value:"Module"})),bF=()=>r.jsx(re,{name:"check"}),jF=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,yF=MC(0,100,5),hi=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:s=>n(s.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),yF.map(s=>r.jsx("option",{value:s,children:s},s))]}),SF=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),s=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${_F(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(wF,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Wn,{code:i,language:"html",expand:!0})]})]}),r.jsx(CF,{options:n,setOption:a,toggleOption:s})]})},CF=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),s=t("color"),a=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(ap,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(b0,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(v0,{color:e.color,setColor:s,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(hi,{stop:e.foreground,setStop:a})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(hi,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(hi,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(hi,{stop:e.backgroundDark,setStop:c})]})]})]})},Qv=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,s)=>(o[s]=e[s],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},_F=e=>{const t=Qv(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},wF=({options:e})=>r.jsx(re,{...Qv(e)}),Xv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(J,{Component:bF,code:jF,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(SF,{})]}),TF=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),Jv=()=>r.jsxs(z,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(ul.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(re,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),EF=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),kF=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(re,{name:"check",className:"smallest"}),r.jsx(re,{name:"check",className:"smaller"}),r.jsx(re,{name:"check",className:"small"}),r.jsx(re,{name:"check"}),r.jsx(re,{name:"check",className:"large"}),r.jsx(re,{name:"check",className:"larger"}),r.jsx(re,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(re,{name:"check",className:"larger green fgc-50"}),r.jsx(re,{name:"cross",className:"larger red fgc-50"})]})]}),NF=`import React from 'react'
import { Icon } from '@/src/index.jsx'

const Component = () =>
/* START */
  <>
    <div className="flex gap-2 middle">
      <Icon name="check" className="smallest"/>
      <Icon name="check" className="smaller"/>
      <Icon name="check" className="small"/>
      <Icon name="check"/>
      <Icon name="check" className="large"/>
      <Icon name="check" className="larger"/>
      <Icon name="check" className="largest"/>
    </div>
    <div className="flex gap-2 mar-t-4">
      <Icon
        name="check"
        className="larger green fgc-50"
      />
      <Icon
        name="cross"
        className="larger red fgc-50"
      />
    </div>
  </>
/* END */

export default Component`,e5=()=>r.jsx(T,{code:"className",Component:kF,Source:NF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),RF=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),OF=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(re,{name:"check",color:"green-50"}),r.jsx(re,{name:"check",color:"green-70-30"}),r.jsx(re,{name:"check",color:"green-70--30"}),r.jsx(re,{name:"check",color:"green-70-30-30-70"})]}),DF=`import React from 'react'
import { Icon } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex gap-2 x2">
    <Icon name="check" color="green-50"/>
    <Icon name="check" color="green-70-30"/>
    <Icon name="check" color="green-70--30"/>
    <Icon name="check" color="green-70-30-30-70"/>
  </div>
/* END */

export default Component`,t5=()=>r.jsxs(T,{code:"color",Component:OF,Source:DF,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),LF=Object.freeze(Object.defineProperty({__proto__:null,default:t5},Symbol.toStringTag,{value:"Module"})),BF=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(re,{name:"bars"}),r.jsx(re,{name:"check"}),r.jsx(re,{name:"cross"}),r.jsx(re,{name:"arrow"}),r.jsx(re,{name:"arrow-right"}),r.jsx(re,{name:"arrow-down-thicker.red.fgc-50"})]}),$F=`import React from 'react'
import { Icon } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex gap-2 x2">
    <Icon name="bars"/>
    <Icon name="check"/>
    <Icon name="cross"/>
    <Icon name="arrow"/>
    <Icon name="arrow-right"/>
    <Icon name="arrow-down-thicker.red.fgc-50"/>
  </div>
/* END */

export default Component`,n5=()=>r.jsxs(T,{code:"name",Component:BF,Source:$F,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),AF=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),MF=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(re,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(re,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),PF=`import React from 'react'
import { Icon } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex gap-2">
    <Icon
      className="x3"
      path="M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"
    />
    <Icon
      className="x3"
      path="M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z"
      width={24}
      height={24}
    />
  </div>
/* END */

export default Component`,r5=()=>r.jsx(T,{code:"path",Component:MF,Source:PF,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),IF=Object.freeze(Object.defineProperty({__proto__:null,default:r5},Symbol.toStringTag,{value:"Module"})),zF=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(re,{name:"check",size:"smallest"}),r.jsx(re,{name:"check",size:"smaller"}),r.jsx(re,{name:"check",size:"small"}),r.jsx(re,{name:"check",size:"medium"}),r.jsx(re,{name:"check",size:"large"}),r.jsx(re,{name:"check",size:"larger"}),r.jsx(re,{name:"check",size:"largest"})]}),FF=`import React from 'react'
import { Icon } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex gap-2">
    <Icon name="check" size="smallest"/>
    <Icon name="check" size="smaller"/>
    <Icon name="check" size="small"/>
    <Icon name="check" size="medium"/>
    <Icon name="check" size="large"/>
    <Icon name="check" size="larger"/>
    <Icon name="check" size="largest"/>
  </div>
/* END */

export default Component`,o5=()=>r.jsx(T,{code:"size",Component:zF,Source:FF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),UF=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),HF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx(Xv,{}),r.jsxs(De,{tocName:"icon",children:[r.jsx(oe,{title:"Properties"}),r.jsx(n5,{}),r.jsx(e5,{}),r.jsx(o5,{}),r.jsx(t5,{}),r.jsx(r5,{}),r.jsx(oe,{title:"Components"}),r.jsx(Jv,{})]})]}),VF=Object.freeze(Object.defineProperty({__proto__:null,default:HF},Symbol.toStringTag,{value:"Module"})),WF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(In,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},ZF=`import { Modal, Button } from '@/src/index.jsx'

/* START */
import React, { useState } from 'react'
// PRETEND: import { Modal, Button } from '@abw/badger-react-ui

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal open={open} className="max-width-30rem">
        <header>
          <h3>A Modal!</h3>
        </header>
        <p>
          This is a modal.  The content is rendered
          as an <code>article</code>.  You can include{' '}
          <code>header</code> and <code>footer</code>{' '}
          sections if you want, although they&apos;re
          entirely optional.
        </p>
        <footer>
          <Button
            color="red"
            text="Close Modal"
            onClick={() => setOpen(false)}
          />
        </footer>
      </Modal>

      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,s5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(J,{Component:WF,code:ZF,expand:!0})]}),KF=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),YF=()=>{const{show:e,hide:t,Modal:n}=jO();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(B,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:e})]})},GF=`import { ModalState, Button } from '@/src/index.jsx'
/* START */
import React from 'react'
// PRETEND: import { ModalState, Button } from '@abw/badger-react-ui'

const ModalStateExample = () => {
  const { show, hide, Modal } = ModalState()
  return (
    <>
      <Modal>
        <p>
          Modal State
        </p>
        <Button
          color="red"
          text="Close Modal"
          onClick={hide}
        />
      </Modal>

      <Button
        color="green"
        text="Open Modal"
        onClick={show}
      />
    </>
  )
}

export default ModalStateExample`,a5=()=>r.jsx(T,{code:"ModalState",Component:YF,Source:GF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),qF=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),QF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(In,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},XF=`import { Modal, Button } from '@/src/index.jsx'
import React, { useState } from 'react'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        className="large max-width-25rem pad-8"
      >
        <p>
          I do not, for one, think that the
          problem was that the band was down.
          I think that the problem may have
          been that there was a Stonehenge
          monument on the stage that was in
          danger of being crushed by a dwarf.
          Alright? That tended to understate
          the hugeness of the object.
        </p>
        <Button
          color="red"
          text="Close Modal"
          onClick={() => setOpen(false)}
        />
      </Modal>
      {/* END */}
      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,l5=()=>r.jsx(T,{code:"className",Component:QF,Source:XF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),JF=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),eU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},tU=`import React, { useState } from 'react'
import { Modal, Button } from '@/src/index.jsx'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
      >
        <p>
          This is a modal with a close button.
        </p>
      </Modal>
      {/* END */}

      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,i5=()=>r.jsx(T,{code:"close",Component:eU,Source:tU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),nU=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),rU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},oU=`import React, { useState } from 'react'
import { Modal, Button } from '@/src/index.jsx'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
        closeIcon="thumb"
      >
        <p>
          This is a modal with a custom
          close icon.
        </p>
      </Modal>
      {/* END */}

      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,c5=()=>r.jsx(T,{code:"closeIcon",Component:rU,Source:oU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),sU=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),aU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(B,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},lU=`import { Modal, Button } from '@/src/index.jsx'
import React, { useState } from 'react'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
        title="Hello World!"
        text="This is a modal with a custom footer"
        footer={
          <div className="text-right">
            <Button
              color="red"
              text="Close"
              size="small"
              iconRight="cross"
              onClick={() => setOpen(false)}
            />
          </div>
        }
      />
      {/* END */}
      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,d5=()=>r.jsx(T,{code:"footer",Component:aU,Source:lU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),iU=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),cU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},dU=`import { Modal, Button } from '@/src/index.jsx'
import React, { useState } from 'react'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
        text="This is a modal with a custom header"
        header={
          <>
            <h3>Custom Header</h3>
            <p>
              Hello World!
            </p>
          </>
        }
      />
      {/* END */}
      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,u5=()=>r.jsx(T,{code:"header",Component:cU,Source:dU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),uU=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),pU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},hU=`import { Modal, Button } from '@/src/index.jsx'

import React, { useState } from 'react'
// PRETEND: import { Modal, Button } from '@abw/badger-react-ui

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
        text="This is a modal"
      />
      {/* END */}

      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,p5=()=>r.jsx(T,{code:"text",Component:pU,Source:hU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),mU=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),fU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},xU=`import { Modal, Button } from '@/src/index.jsx'
import React, { useState } from 'react'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
        text="This is a modal with a title"
        title="My Modal"
      />
      {/* END */}
      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,h5=()=>r.jsx(T,{code:"title",Component:fU,Source:xU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),gU=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),vU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(s5,{}),r.jsxs(De,{tocName:"modal",children:[r.jsx(oe,{title:"Properties"}),r.jsx(l5,{}),r.jsx(i5,{}),r.jsx(c5,{}),r.jsx(p5,{}),r.jsx(h5,{}),r.jsx(u5,{}),r.jsx(d5,{}),r.jsx(oe,{title:"Components"}),r.jsx(a5,{})]})]}),bU=Object.freeze(Object.defineProperty({__proto__:null,default:vU},Symbol.toStringTag,{value:"Module"})),jU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(ko,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"})]})},yU=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Overlay, Button, VisibleState } from '@abw/badger-react-ui

const OverlayExample = () => {
  const { isVisible, show, hide } = VisibleState()

  return (
    <div className="relative pad-6 border">
      { isVisible &&
        <Overlay className="flex middle center pad-8">
          <div>
            <p className="larger">
              I do not, for one, think that the problem was that the
              band was down. I think that the problem may have been...
              that there was a Stonehenge monument on the stage that
              was in danger of being crushed by a dwarf. Alright? That
              tended to understate the hugeness of the object.
            </p>
            <Button
              onClick={hide}
              className="red"
              text="Hide Overlay"
            />
          </div>
        </Overlay>
      }
      <p className="mar-t-none">
        May I make a suggestion? May I make a suggestion?
        I&apos;ve got one other suggestion.
      </p>
      <p>
        Well let&apos;s hear yours. Let&apos;s hear your suggestion.
      </p>
      <p>
        Stonehenge! It&apos;s the best production value we&apos;ve
        ever had on stage.
      </p>
      <p>
        But we haven&apos;t got the equipment. We haven&apos;t got the
        equipment, we haven&apos;t got Stonehenge, we haven&apos;t...
      </p>
      <p>
        Not yet we don&apos;t. Let&apos;s start... Musically, musically
        we all know it. Musically we all know it. Right? No
        problems musically. We go right on stage. And it&apos;s quite
        simple. This is you know... Ian can take care of this...
      </p>
      <p>
        I know what the Stonehenge monument looks like.
        We don&apos;t have that piece of scenery anymore.
      </p>
      <p>
        I know, so we build a new one. And this is it, look!
      </p>
      <Button
        onClick={show}
        color="green"
        text="Show Overlay"
      />
    </div>
  )
}

export default OverlayExample`,m5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(J,{Component:jU,code:yU})]}),SU=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),CU=()=>{const{show:e,hide:t,Overlay:n}=yO();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(B,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(B,{color:"green",text:"Show Overlay",onClick:e})]})},_U=`import { OverlayState, Button } from '@/src/index.jsx'
/* START */
import React from 'react'
// PRETEND: import { OverlayState, Button } from '@abw/badger-react-ui'

const OverlayStateExample = () => {
  const { show, hide, Overlay } = OverlayState()
  return (
    <>
      <Overlay fixed className="flex center middle">
        <div>
          <h1 className="mar-b-4">
            Overlay State
          </h1>
          <Button
            color="red"
            text="Hide Overlay"
            onClick={hide}
          />
        </div>
      </Overlay>

      <Button
        color="green"
        text="Show Overlay"
        onClick={show}
      />
    </>
  )
}

export default OverlayStateExample`,f5=()=>r.jsx(T,{code:"OverlayState",Component:CU,Source:_U,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),wU=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),TU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(In,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},EU=`import { Modal, Button } from '@/src/index.jsx'
import React, { useState } from 'react'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        className="large max-width-25rem pad-8"
      >
        <p>
          I do not, for one, think that the
          problem was that the band was down.
          I think that the problem may have
          been that there was a Stonehenge
          monument on the stage that was in
          danger of being crushed by a dwarf.
          Alright? That tended to understate
          the hugeness of the object.
        </p>
        <Button
          color="red"
          text="Close Modal"
          onClick={() => setOpen(false)}
        />
      </Modal>
      {/* END */}
      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample`,kU=()=>r.jsx(T,{code:"className",Component:TU,Source:EU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),NU=Object.freeze(Object.defineProperty({__proto__:null,default:kU},Symbol.toStringTag,{value:"Module"})),RU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(ko,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},OU=`import React from 'react'
import { Overlay, VisibleState, Button } from '@/src/index.jsx'

const ColorExample = () => {
  const { isVisible, show, hide } = VisibleState()

  return (
    <div className="relative pad-6 border">
      <Button
        onClick={show}
        color="green"
        text="Show Red Overlay"
      />
      { isVisible &&
        /* START */
        <Overlay
          className="flex space top pad-6"
          style={{
            '--color':              'var(--red-70)',
            '--background-color':   'var(--red-20)',
            '--background-opacity': '10%',
          }}
        >
          <p className="larger">
            Custom red overlay
          </p>
          <Button
            onClick={hide}
            className="red"
            text="Hide Overlay"
          />
        </Overlay>
        /* END */
      }
    </div>
  )
}

export default ColorExample`,x5=()=>r.jsx(T,{title:"Custom Colors",Component:RU,Source:OU,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),DU=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),LU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(ko,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},BU=`import React from 'react'
import { Overlay, VisibleState, Button } from '@/src/index.jsx'

const OverlayExample = () => {
  const { isVisible, show, hide } = VisibleState()

  return (
    <div className="relative pad-6 border">
      <Button
        onClick={show}
        color="green"
        text="Show Overlay"
      />
      { isVisible &&
        /* START */
        <Overlay fixed className="flex center middle">
          <div className="max-width-40rem">
            <p className="larger">
              I do not, for one, think that the problem was that the
              band was down. I think that the problem may have been...
              that there was a Stonehenge monument on the stage that
              was in danger of being crushed by a dwarf. Alright? That
              tended to understate the hugeness of the object.
            </p>
            <Button
              onClick={hide}
              className="red"
              text="Hide Overlay"
            />
          </div>
        </Overlay>
        /* END */
      }
    </div>
  )
}

export default OverlayExample`,g5=()=>r.jsx(T,{code:"fixed",Component:LU,Source:BU,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),$U=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),AU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(ko,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},MU=`import React from 'react'
import { Overlay, VisibleState, Button } from '@/src/index.jsx'

const ColorExample = () => {
  const { isVisible, show, hide } = VisibleState()

  return (
    <div className="relative pad-6 border">
      <Button
        onClick={show}
        color="green"
        text="Show Light Overlay"
      />
      { isVisible &&
        /* START */
        <Overlay light className="flex space top pad-6">
          <p className="larger">
            Light overlay
          </p>
          <Button
            onClick={hide}
            className="red"
            text="Hide Overlay"
          />
        </Overlay>
        /* END */
      }
    </div>
  )
}

export default ColorExample`,PU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(ko,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},IU=`import React from 'react'
import { Overlay, VisibleState, Button } from '@/src/index.jsx'

const ColorExample = () => {
  const { isVisible, show, hide } = VisibleState()

  return (
    <div className="relative pad-6 border">
      <Button
        onClick={show}
        color="green"
        text="Show Dark Overlay"
      />
      { isVisible &&
        /* START */
        <Overlay dark className="flex space top pad-6">
          <p className="larger">
            Dark overlay
          </p>
          <Button
            onClick={hide}
            className="red"
            text="Hide Overlay"
          />
        </Overlay>
        /* END */
      }
    </div>
  )
}

export default ColorExample`,v5=()=>r.jsxs(z,{code:"light / dark",children:[r.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(J,{Component:AU,code:MU,caption:"light",undent:8}),r.jsx(J,{Component:PU,code:IU,caption:"dark",undent:8})]}),zU=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),FU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(m5,{}),r.jsxs(De,{tocName:"overlay",children:[r.jsx(oe,{title:"Properties"}),r.jsx(g5,{}),r.jsx(v5,{}),r.jsx(oe,{title:"Styling"}),r.jsx(x5,{}),r.jsx(oe,{title:"Components"}),r.jsx(f5,{})]})]}),UU=Object.freeze(Object.defineProperty({__proto__:null,default:FU},Symbol.toStringTag,{value:"Module"})),HU=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=zk(),s=o[e];return r.jsx(B,{text:s,className:t,onClick:n})},VU=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Xt,{pages:t,page:n,setPage:o,pageRanges:e,Page:HU,size:"small"})},WU=`import { Pager, usePager, Button } from '@/src/index.jsx'

/* START */
import React, { useState } from 'react'
// PRETEND: import { Pager, usePager, Button } from '@abw/badger-react-ui

const MyPageButton = ({
  page,
  className,
  onClick,
})=> {
  const { pageRanges } = usePager()
  const range = pageRanges[page]
  return(
    <Button
      text={range}
      className={className}
      onClick={onClick}
    />
  )
}

const PagerExample = () => {
  const pageRanges = [
    'A-C', 'D-F', 'G-I', 'J-M',
    'N-P', 'Q-T', 'U-W', 'X-Z'
  ]
  const pages = pageRanges.length
  const [page, setPage] = useState(0)

  return (
    <Pager
      pages={pages}
      page={page}
      setPage={setPage}
      pageRanges={pageRanges}
      Page={MyPageButton}
      size="small"
    />
  )
}

export default PagerExample`,b5=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(ZU,{name:t,value:n},t))})}),ZU=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),j5=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]}),r.jsx(b5,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Components"}),r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]}),r.jsx(J,{Component:VU,code:WU})]}),KU=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),YU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t})},GU=`import { Pager } from '@/src/index.jsx'

/* START */
import React, { useState } from 'react'
// PRETEND: import { Pager } from '@abw/badger-react-ui

const PagerExample = () => {
  const [page, setPage] = useState(0)

  return (
    <Pager
      pages={11}
      page={page}
      setPage={setPage}
    />
  )
}

export default PagerExample`,y5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]}),r.jsx(J,{Component:YU,code:GU})]}),qU=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),QU=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Xt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},XU=`import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    <div className="grid-1 gap-4">
      {/* START */}
      <Pager
        pages={11}
        page={page}
        setPage={setPage}
        className="pager small brand border pad-2 bdr-2 bgc-90 bgd-10"
      />
      {/* END */}
    </div>
  )
}

export default Component
`,S5=()=>r.jsx(T,{code:"className",Component:QU,Source:XU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),JU=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),eH=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"blue"})]})},tH=`import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    <div className="grid-1 gap-4">
      {/* START */}
      <Pager
        pages={11}
        page={page} setPage={setPage}
        color="red"
      />
      <Pager
        pages={11}
        page={page} setPage={setPage}
        color="green"
      />
      <Pager
        pages={11}
        page={page} setPage={setPage}
        color="blue"
      />
      {/* END */}
    </div>
  )
}

export default Component
`,C5=()=>r.jsx(T,{code:"color",Component:eH,Source:tH,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),nH=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),rH=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},oH=`import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    /* START */
    <Pager
      pages={11}
      page={page} setPage={setPage}
      prevIcon="angle-left"
      nextIcon="angle-right"
    />
    /* END */
  )
}

export default Component
`,_5=()=>r.jsx(T,{code:"prevIcon / nextIcon",Component:rH,Source:oH,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),sH=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),aH=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},lH=`import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    /* START */
    <Pager
      pages={11}
      page={page} setPage={setPage}
      nextIcon="angle-right"
    />
    /* END */
  )
}

export default Component
`,iH=()=>r.jsx(T,{code:"nextIcon",Component:aH,Source:lH,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),cH=Object.freeze(Object.defineProperty({__proto__:null,default:iH},Symbol.toStringTag,{value:"Module"})),dH=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,showFirstLast:!1})},uH=`import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    /* START */
    <Pager
      pages={11}
      page={page} setPage={setPage}
      showFirstLast={false}
    />
    /* END */
  )
}

export default Component
`,w5=()=>r.jsxs(T,{code:"showFirstLast",Component:dH,Source:uH,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),pH=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),hH=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Xt,{pages:11,page:e,setPage:t,size:"small"})]})},mH=`import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    <div className="grid-1 gap-4">
      {/* START */}
      <Pager
        pages={11}
        page={page} setPage={setPage}
        size="smaller"
      />
      <Pager
        pages={11}
        page={page} setPage={setPage}
        size="small"
      />
      {/* END */}
    </div>
  )
}

export default Component
`,T5=()=>r.jsx(T,{code:"size",Component:hH,Source:mH,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),fH=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),xH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(y5,{}),r.jsx(j5,{}),r.jsxs(De,{tocName:"pager",children:[r.jsx(oe,{title:"Properties"}),r.jsx(S5,{}),r.jsx(C5,{}),r.jsx(T5,{}),r.jsx(_5,{}),r.jsx(w5,{}),r.jsxs(vo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(z,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(z,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(z,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(z,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(z,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(z,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),gH=Object.freeze(Object.defineProperty({__proto__:null,default:xH},Symbol.toStringTag,{value:"Module"})),vH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:["David","Nigel","Derek"]})},bH=`import { Radio } from '@/src/index.jsx'

/* START */
import React, { useState } from 'react'
// PRETEND: import { Radio } from '@abw/badger-react-ui

const RadioExample = () => {
  const [value, setValue] = useState(false)
  return (
    <Radio
      value={value}
      onChange={setValue}
      options={[
        'David',
        'Nigel',
        'Derek',
      ]}
    />
  )
}

export default RadioExample`,E5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(J,{Component:vH,code:bH,expand:!0})]}),jH=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),yH=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx($n,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx($n,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},SH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const BorderExample = () => {
  const [value1, setValue1] = useState(false)
  const [value2, setValue2] = useState(false)
  return (
    <>
      {/* START */}
      <Radio
        border
        labelClass="mar-b-2"
        value={value1}
        onChange={setValue1}
        options={[
          'David',
          'Nigel',
          'Derek'
        ]}
      />
      <Radio
        border inline
        labelClass="mar-r-2"
        value={value2}
        onChange={setValue2}
        options={[
          'David',
          'Nigel',
          'Derek'
        ]}
      />
      {/* END */}
    </>
  )
}

export default BorderExample`,k5=()=>r.jsxs(T,{code:"border",Component:yH,Source:SH,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),CH=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),_H=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},wH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const ClassName = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      className="grid-3 gap-2"
      value={value}
      onChange={setValue}
      options={[
        'David',
        'Nigel',
        'Derek'
      ]}
    />
    /* END */
  )
}

export default ClassName`,N5=()=>r.jsx(T,{code:"className",Component:_H,Source:wH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),TH=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),EH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},kH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const DisabledExample = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      value={value}
      onChange={setValue}
      options={[
        {
          value: 'david',
          text: 'David St. Hubbins'
        },
        {
          value: 'nigel',
          text: 'Nigel Tufnel'
        },
        {
          value: 'derek',
          text: 'Derek Smalls'
        },
        {
          value: 'john',
          text: 'John "Stumpy" Pepys',
          disabled: true
        },
        {
          value: 'eric',
          text: 'Eric "Stumpy Joe" Childs',
          disabled: true
        },
        {
          value: 'peter',
          text: 'Peter "James" Bond',
          disabled: true
        },
        {
          value: 'mick',
          text: 'Mick Shrimpton',
          disabled: true
        }
      ]}
    />
    /* END */
  )
}

export default DisabledExample`,R5=()=>r.jsx(T,{code:"disabled",Component:EH,Source:kH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),NH=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),RH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},OH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const InlineExample = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      inline
      value={value}
      onChange={setValue}
      options={[
        'David',
        'Nigel',
        'Derek'
      ]}
    />
    /* END */
  )
}

export default InlineExample`,O5=()=>r.jsx(T,{code:"inline",Component:RH,Source:OH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),DH=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),LH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},BH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const NameExample = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      name="tap"
      value={value}
      onChange={setValue}
      options={[
        'David',
        'Nigel',
        'Derek'
      ]}
    />
    /* END */
  )
}

export default NameExample`,D5=()=>r.jsx(T,{code:"name",Component:LH,Source:BH,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),$H=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),AH=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx($n,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},MH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const OnChangeExample = () => {
  const [value, setValue] = useState(false)
  return (
    <>
      <Radio
        value={value}
        onChange={setValue}
        options={[
          'David',
          'Nigel',
          'Derek'
        ]}
      />
      { Boolean(value) &&
        <div className="mar-t-2">
          Selected value: {value}
        </div>
      }
    </>
  )
}
/* END */

export default OnChangeExample`,Ft=({id:e,text:t})=>r.jsx("a",{href:`#${rm(e||t)}`,className:"code",children:t}),L5=()=>r.jsx(T,{code:"onChange",Component:AH,Source:MH,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(Ft,{text:"value"}),"."]})}),PH=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),IH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},zH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const OptionsExample = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      value={value}
      onChange={setValue}
      options={[
        { value: 'david', text: 'David St. Hubbins' },
        { value: 'nigel', text: 'Nigel Tufnel' },
        { value: 'derek', text: 'Derek Smalls' }
      ]}
    />
    /* END */
  )
}

export default OptionsExample`,B5=()=>r.jsx(T,{code:"options",Component:IH,Source:zH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),FH=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),UH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:["David","Nigel","Derek"]})},HH=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const ValueExample = () => {
  const [value, setValue] = useState(false)
  return (
    <Radio
      value={value}
      onChange={setValue}
      options={[
        'David',
        'Nigel',
        'Derek'
      ]}
    />
  )
}
/* END */

export default ValueExample`,$5=()=>r.jsx(T,{code:"value",Component:UH,Source:HH,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(Ft,{text:"onChange"})," to update the value."]})}),VH=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),WH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(E5,{}),r.jsxs(De,{tocName:"radio",children:[r.jsx(oe,{title:"Properties"}),r.jsx($5,{}),r.jsx(L5,{}),r.jsx(D5,{}),r.jsx(N5,{}),r.jsx(O5,{}),r.jsx(k5,{}),r.jsx(oe,{title:"Option Properties"}),r.jsx(B5,{}),r.jsx(R5,{})]})]}),ZH=Object.freeze(Object.defineProperty({__proto__:null,default:WH},Symbol.toStringTag,{value:"Module"})),KH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],YH=()=>{const e=t=>KH.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(tr,{onSearch:e})},GH=`import { Search } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
]

const SearchExample = () => {
  const onSearch =input =>
    animals.filter(
      animal =>
        animal
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )

  return (
    <Search onSearch={onSearch}/>
  )
}

export default SearchExample`,A5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(J,{Component:YH,code:GH})]}),qH=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),QH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],XH=()=>{const[e,t]=V.useState(),n=o=>QH.filter(s=>s.toLowerCase().indexOf(o.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(tr,{onLoad:t,onSearch:n,value:"Brian Badger"}),r.jsx(B,{onClick:()=>e==null?void 0:e.clear(),text:"Clear"})]})},JH=`import { Search, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search, Button } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Beatrice Badger',
  'Belinda Badger',
  'Ben Badger',
  'Bert Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Brook Badger',
  'Buzz Badger',
]

const OnSelectExample = () => {
  const [search, setSearch] = React.useState()

  const onSearch = input =>
    animals.filter(
      animal =>
        animal
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )

  return (
    <div className="grid-2 gap-2">
      <Search
        onLoad={setSearch}
        onSearch={onSearch}
        value="Brian Badger"
      />
      <Button
        onClick={() => search?.clear()}
        text="Clear"
      />
    </div>
  )
}

export default OnSelectExample`,M5=()=>r.jsx(T,{code:"clear",Component:XH,Source:JH,children:r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"onLoad"})," property to save a reference to the search context.  You can call the ",r.jsx("code",{children:"clear"})," method on that to programmatically clear the input.  This has the same effect as clicking on the cross icon to the right of the input."]})}),eV=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),tV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],nV=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>tV.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(tr,{onSearch:t,displayResult:e})},rV=`import { Search } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search } from '@abw/badger-react-ui

const animals = [
  { name: 'Alan Aardvark', tel: '555-1245' },
  { name: 'Amy Aardvark',  tel: '555-2233' },
  { name: 'Anne Aardvark', tel: '555-6565' },
  { name: 'Bart Badger',   tel: '555-4201' },
  { name: 'Betty Badger',  tel: '555-1111' },
  { name: 'Bobby Badger',  tel: '555-9876' },
  { name: 'Brenda Badger', tel: '555-3443' },
  { name: 'Brian Badger',  tel: '555-1337' },
]

const DisplayResultExample = () => {
  const displayResult = result =>
    <div className="flex space baseline">
      <div>
        {result.name}
      </div>
      <div className="smaller">
        {result.tel}
      </div>
    </div>

  const onSearch = input =>
    animals.filter(
      animal =>
        animal
          .name
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )

  return (
    <Search
      onSearch={onSearch}
      displayResult={displayResult}
    />
  )
}

export default DisplayResultExample`,P5=()=>r.jsx(T,{code:"displayResult",Component:nV,Source:rV,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),oV=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),sV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],aV=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>sV.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(tr,{onSearch:t,displayValue:e})},lV=`import { Search } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search } from '@abw/badger-react-ui

const animals = [
  { id: 100, name: 'Alan Aardvark', tel: '555-1245' },
  { id: 101, name: 'Amy Aardvark',  tel: '555-2233' },
  { id: 102, name: 'Anne Aardvark', tel: '555-6565' },
  { id: 110, name: 'Bart Badger',   tel: '555-4201' },
  { id: 111, name: 'Betty Badger',  tel: '555-1111' },
  { id: 112, name: 'Bobby Badger',  tel: '555-9876' },
  { id: 113, name: 'Brenda Badger', tel: '555-3443' },
  { id: 114, name: 'Brian Badger',  tel: '555-1337' },
]

const DisplayValueExample = () => {
  const displayValue = result =>
    \`#\${result.id}: \${result.name} (\${result.tel})\`

  const onSearch = input =>
    animals.filter(
      animal =>
        animal
          .name
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )

  return (
    <Search
      onSearch={onSearch}
      displayValue={displayValue}
    />
  )
}

export default DisplayValueExample`,I5=()=>r.jsx(T,{code:"displayValue",Component:aV,Source:lV,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),iV=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),cV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],dV=()=>{const e=async t=>zr(500).then(()=>cV.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(tr,{onSearch:e,debug:!0})},uV=`import { Search } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Search } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Beatrice Badger',
  'Belinda Badger',
  'Ben Badger',
  'Bert Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Brook Badger',
  'Buzz Badger',
]

const OnSearchExample = () => {
  // emulate an asynchronous API call
  const onSearch = async input =>
    sleep(500).then(
      () => animals.filter(
        animal =>
          animal
            .toLowerCase()
            .indexOf(input.toLowerCase()) !== -1
      )
    )

  return (
    <Search onSearch={onSearch} debug/>
  )
}

export default OnSearchExample`,z5=()=>r.jsx(T,{code:"onSearch",Component:dV,Source:uV,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),pV=Object.freeze(Object.defineProperty({__proto__:null,default:z5},Symbol.toStringTag,{value:"Module"})),hV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],mV=()=>{const e=n=>hV.filter(o=>o.toLowerCase().indexOf(n.toLowerCase())!==-1),t=n=>alert(`You selected ${n}`);return r.jsx(tr,{onSearch:e,onSelect:t})},fV=`import { Search } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Beatrice Badger',
  'Belinda Badger',
  'Ben Badger',
  'Bert Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Brook Badger',
  'Buzz Badger',
]

const OnSelectExample = () => {
  const onSearch = input =>
    animals.filter(
      animal =>
        animal
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )

  const onSelect = option =>
    alert(\`You selected \${option}\`)

  return (
    <Search
      onSearch={onSearch}
      onSelect={onSelect}
    />
  )
}

export default OnSelectExample`,F5=()=>r.jsx(T,{code:"onSelect",Component:mV,Source:fV,children:r.jsxs("p",{children:["You can define an ",r.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),xV=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),gV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],vV=()=>{const[e,t]=V.useState(),[n,o]=V.useState(),s=a=>gV.filter(l=>l.toLowerCase().indexOf(a.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(tr,{onLoad:t,onSearch:s}),r.jsx(B,{onClick:()=>e==null?void 0:e.reset(),text:"Reset"}),r.jsx(tr,{onLoad:o,onSearch:s,value:"Ben Badger"}),r.jsx(B,{onClick:()=>n==null?void 0:n.reset(),text:"Reset"})]})},bV=`import { Search, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search, Button } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Beatrice Badger',
  'Belinda Badger',
  'Ben Badger',
  'Bert Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Brook Badger',
  'Buzz Badger',
]

const OnSelectExample = () => {
  const [search1, setSearch1] = React.useState()
  const [search2, setSearch2] = React.useState()

  const onSearch = input =>
    animals.filter(
      animal =>
        animal
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )

  return (
    <div className="grid-2 gap-2">
      <Search
        onLoad={setSearch1}
        onSearch={onSearch}
      />
      <Button
        onClick={() => search1?.reset()}
        text="Reset"
      />
      <Search
        onLoad={setSearch2}
        onSearch={onSearch}
        value="Ben Badger"
      />
      <Button
        onClick={() => search2?.reset()}
        text="Reset"
      />
    </div>
  )
}

export default OnSelectExample`,U5=()=>r.jsxs(T,{code:"reset",Component:vV,Source:bV,children:[r.jsxs("p",{children:["You can call the ",r.jsx("code",{children:"reset"})," method on the search object to reset the search.  Note that it will be reset to the original state, so if an initial value was provided to the component then that will be restored.  Use the ",r.jsx("code",{children:"clear"})," method if you want to clear the input instead."]}),r.jsx("p",{children:'Try changing the values in the search components below.  Clicking on the first reset button will reset the first component to a blank state. Clicking on the second reset button will reset the second component to its original state, containing the value "Ben Badger".'})]}),jV=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),yV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(A5,{}),r.jsxs(De,{tocName:"search",children:[r.jsx(oe,{title:"Properties"}),r.jsx(z5,{}),r.jsx(F5,{}),r.jsx(P5,{}),r.jsx(I5,{}),r.jsx(oe,{title:"Functions"}),r.jsx(M5,{}),r.jsx(U5,{})]})]}),SV=Object.freeze(Object.defineProperty({__proto__:null,default:yV},Symbol.toStringTag,{value:"Module"})),CV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],_V=()=>r.jsx(rn,{options:CV}),wV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Search } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Colin Camel',
  'David Donkey',
  'Eddie Elephant',
  'Franky Ferret',
  'Gina Goat',
  'Helen Horse',
  'Ian Iguana',
  'Juliet Jackdaw',
  'Kevin Kangaroo',
  'Linda Llama',
]

const SelectExample = () =>
  <Select options={animals}/>

export default SelectExample`,H5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(J,{Component:_V,code:wV}),r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]}),r.jsx(b5,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),TV=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),EV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],kV=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(rn,{options:EV,displayOption:e})},NV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { name: 'Alan Aardvark', tel: '555-1245' },
  { name: 'Amy Aardvark',  tel: '555-2233' },
  { name: 'Anne Aardvark', tel: '555-6565' },
  { name: 'Bart Badger',   tel: '555-4201' },
  { name: 'Betty Badger',  tel: '555-1111' },
  { name: 'Bobby Badger',  tel: '555-9876' },
  { name: 'Brenda Badger', tel: '555-3443' },
  { name: 'Brian Badger',  tel: '555-1337' },
]

const DisplayOptionExample = () => {
  const displayOption = result =>
    <div className="flex space baseline">
      <div>
        {result.name}
      </div>
      <div className="smaller">
        {result.tel}
      </div>
    </div>

  return (
    <Select
      options={animals}
      displayOption={displayOption}
    />
  )
}

export default DisplayOptionExample`,V5=()=>r.jsx(T,{code:"displayOption",Component:kV,Source:NV,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),RV=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),OV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],DV=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(rn,{options:OV,displayValue:e})},LV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 100, name: 'Alan Aardvark', tel: '555-1245' },
  { id: 101, name: 'Amy Aardvark',  tel: '555-2233' },
  { id: 102, name: 'Anne Aardvark', tel: '555-6565' },
  { id: 110, name: 'Bart Badger',   tel: '555-4201' },
  { id: 111, name: 'Betty Badger',  tel: '555-1111' },
  { id: 112, name: 'Bobby Badger',  tel: '555-9876' },
  { id: 113, name: 'Brenda Badger', tel: '555-3443' },
  { id: 114, name: 'Brian Badger',  tel: '555-1337' },
]

const DisplayValueExample = () => {
  const displayValue = option =>
    <div className="flex baseline">
      <span className="smaller mar-r-2">#{option.id}</span>{' '}
      {option.name} ({option.tel})
    </div>

  return (
    <Select
      options={animals}
      displayValue={displayValue}
    />
  )
}

export default DisplayValueExample`,W5=()=>r.jsx(T,{code:"displayValue",Component:DV,Source:LV,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),BV=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),$V=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],AV=()=>r.jsx(rn,{options:$V}),MV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 101, name: 'Alan Aardvark' },
  { id: 102, name: 'Amy Aardvark'  },
  { id: 103, name: 'Anne Aardvark', disabled: true },
  { id: 104, name: 'Bart Badger'   },
  { id: 105, name: 'Betty Badger'  },
  { id: 106, name: 'Bobby Badger', disabled: true },
  { id: 107, name: 'Brenda Badger' },
  { id: 108, name: 'Brian Badger'  },
  { id: 109, name: 'Colin Camel', disabled: true },
  { id: 110, name: 'Derek Donkey'  },
]

const OptionsExample = () =>
  <Select
    options={animals}
  />

export default OptionsExample`,Z5=()=>r.jsxs(T,{code:"options",Component:AV,Source:MV,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(Ft,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(Ft,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(Ft,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),PV=Object.freeze(Object.defineProperty({__proto__:null,default:Z5},Symbol.toStringTag,{value:"Module"})),IV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],zV=()=>r.jsx(rn,{search:!0,options:IV}),FV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const names = [
  'Alan Aardvark',
  'Amy Aardvark' ,
  'Anne Aardvark',
  'Bart Badger'  ,
  'Betty Badger' ,
  'Bobby Badger' ,
  'Brenda Badger',
  'Brian Badger' ,
  'Ignored Iguana',
]

const SearchExample = () =>
  <Select
    search
    options={names}
  />

export default SearchExample`,UV=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],HV=()=>r.jsx(rn,{search:!0,options:UV}),VV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 1, name: 'Alan Aardvark' },
  { id: 2, name: 'Amy Aardvark'  },
  { id: 3, name: 'Anne Aardvark' },
  { id: 4, name: 'Bart Badger'   },
  { id: 5, name: 'Betty Badger'  },
  { id: 6, name: 'Bobby Badger'  },
  { id: 7, name: 'Brenda Badger' },
  { id: 8, name: 'Brian Badger'  },
  { id: 9, name: 'Ignored Iguana', disabled: true },
]

const SearchExample = () =>
  <Select
    search
    options={animals}
  />

export default SearchExample`,K5=()=>r.jsxs(z,{code:"search",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",r.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),r.jsxs("p",{children:["Try entering ",r.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",r.jsx("code",{children:"aa"})," ","(e.g all the ",r.jsx("b",{children:"Aa"}),"rdvarks) and ",r.jsx("code",{children:"an"})," (Al",r.jsx("b",{children:"an"})," Aardvark,"," ",r.jsx("b",{children:"An"}),"ne Aardvark and Bri",r.jsx("b",{children:"an"})," Badger)."]}),r.jsx(J,{Component:zV,code:FV}),r.jsxs("p",{children:["If the ",r.jsx("code",{children:"options"})," are an array of objects then it will look for a ",r.jsx("code",{children:"search"}),", ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"}),","," ",r.jsx("code",{children:"name"})," or ",r.jsx("code",{children:"value"})," property in each object and use that."]}),r.jsx(J,{Component:HV,code:VV})]}),WV=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),ZV=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],KV=(e,t)=>{const n=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().indexOf(n)>=0||o.department.toLowerCase().indexOf(n)>=0)},YV=e=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:"smaller",children:e.department})]}),GV=()=>r.jsx(rn,{search:!0,options:ZV,searchOptions:KV,displayOption:YV}),qV=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 1, name: 'Alan',    department: 'Accounts'   },
  { id: 2, name: 'Amelia',  department: 'Accounts'   },
  { id: 3, name: 'Anne',    department: 'Sales'      },
  { id: 4, name: 'Bart',    department: 'Sales'      },
  { id: 5, name: 'Betty',   department: 'Shipping'   },
  { id: 6, name: 'Bobby',   department: 'Sales'      },
  { id: 7, name: 'Brenda',  department: 'Management' },
  { id: 8, name: 'Bruce',   department: 'Management' },
]

const searchOptions = (search, options) => {
  const lcsearch = search.toLowerCase()
  return options.filter(
    option => option.name.toLowerCase().indexOf(lcsearch) >= 0
      || option.department.toLowerCase().indexOf(lcsearch) >= 0
  )
}

const displayOption = result =>
  <div className="flex space baseline">
    <div>
      {result.name}
    </div>
    <div className="smaller">
      {result.department}
    </div>
  </div>

const SearchExample = () =>
  <Select
    search
    options={animals}
    searchOptions={searchOptions}
    displayOption={displayOption}
  />

export default SearchExample`,Y5=()=>r.jsxs(T,{code:"searchOptions",Component:GV,Source:qV,expand:!0,children:[r.jsxs("p",{children:["You can define your own ",r.jsx("code",{children:"searchOptions"})," function to search through the ",r.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),r.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",r.jsx("code",{children:"name"})," or their ",r.jsx("code",{children:"department"}),". Try entering ",r.jsx("code",{children:"an"}),".  It will match Al",r.jsx("b",{children:"an"}),", and ",r.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",r.jsx("b",{children:"an"}),"agement."]})]}),QV=Object.freeze(Object.defineProperty({__proto__:null,default:Y5},Symbol.toStringTag,{value:"Module"})),XV=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],JV=()=>r.jsx(rn,{validOption:e=>!e.isFruit,options:XV}),eW=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 101, name: 'Alan Aardvark' },
  { id: 102, name: 'Amy Apple',    isFruit: true },
  { id: 103, name: 'Anne Aardvark' },
  { id: 104, name: 'Bart Banana',  isFruit: true },
  { id: 105, name: 'Betty Badger'  },
  { id: 106, name: 'Bobby Badger'  },
  { id: 107, name: 'Brenda Badger' },
  { id: 108, name: 'Brian Badger'  },
  { id: 109, name: 'Colin Cherry', isFruit: true },
  { id: 110, name: 'Derek Donkey'  },
]

const OptionsExample = () =>
  <Select
    validOption={ option => ! option.isFruit }
    options={animals}
  />

export default OptionsExample`,G5=()=>r.jsxs(T,{code:"validOption",Component:JV,Source:eW,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),tW=Object.freeze(Object.defineProperty({__proto__:null,default:G5},Symbol.toStringTag,{value:"Module"})),nW=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],rW=()=>r.jsx(rn,{options:nW,value:"Bobby Badger"}),oW=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
]

const ValueExample = () =>
  <Select
    options={animals}
    value="Bobby Badger"
  />

export default ValueExample`,sW=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],aW=()=>r.jsx(rn,{options:sW,value:5}),lW=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 1, name: 'Alan Aardvark' },
  { id: 2, name: 'Amy Aardvark'  },
  { id: 3, name: 'Anne Aardvark' },
  { id: 4, name: 'Bart Badger'   },
  { id: 5, name: 'Betty Badger'  },
  { id: 6, name: 'Bobby Badger'  },
  { id: 7, name: 'Brenda Badger' },
  { id: 8, name: 'Brian Badger'  },
]

const ValueExample = () =>
  <Select
    options={animals}
    value={5}
  />

export default ValueExample`,q5=()=>r.jsxs(z,{code:"value",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]}),r.jsx(J,{Component:rW,code:oW,caption:"value",expand:!1}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]}),r.jsx(J,{Component:aW,code:lW,caption:"value",expand:!1})]}),iW=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),cW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(H5,{}),r.jsxs(De,{tocName:"select",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Z5,{}),r.jsx(q5,{}),r.jsx(V5,{}),r.jsx(W5,{}),r.jsx(G5,{}),r.jsx(K5,{}),r.jsx(Y5,{}),r.jsx(z,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(z,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(z,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(z,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(z,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(z,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(vo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Event Handlers"}),r.jsxs(z,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(z,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(z,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(z,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(z,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(z,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(z,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(z,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(z,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(z,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(z,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(z,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(z,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsx(z,{code:"Content",children:"Renders the content of the select component."}),r.jsx(z,{code:"Input",children:"Renders the input field."}),r.jsx(z,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(z,{code:"Option",children:"Renders an individual option."}),r.jsx(z,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),dW=Object.freeze(Object.defineProperty({__proto__:null,default:cW},Symbol.toStringTag,{value:"Module"})),Z1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],uW=()=>{const[e,t]=V.useState(!1),[n,o]=V.useState(Z1),s=i=>{o(i),t(!0)},a=()=>{o(Z1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(NO,{items:n,Item:l,setOrder:s})})]})},pW=`import { HorizontalSort, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { HorizontalSort, Button } from '@abw/badger-react-ui

const animals = [
  { id: 100, animal: 'Ant' },
  { id: 101, animal: 'Bat' },
  { id: 102, animal: 'Cat' },
  { id: 103, animal: 'Dog' },
]

const HorizontalSortExample = () => {
  const [changed, setChanged] = React.useState(false)
  const [items, setItems] = React.useState(animals)

  const setOrder = items => {
    setItems(items)
    setChanged(true)
  }

  const resetOrder = () => {
    setItems(
      animals.map(
        row => ({ ...row, moved: false })
      )
    )
    setChanged(false)
  }

  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }) =>
    <div
      ref={setNodeRef} style={style}
      className={\`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 \${item.moved ? 'moved' : ''}\`}
      {...props}
      {...listeners}
    >
      {item.animal}
    </div>

  return (
    <>
      <div className="flex space middle mar-b-4">
        <h3>Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button
              color="brown"
              size="smallest"
              text="Reset Order"
              iconLeft="rotate-flipx"
              onClick={resetOrder}
            />
          </div>
        }
      </div>
      <div className="sortable list Horizontal">
        <HorizontalSort
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}

export default HorizontalSortExample`,Q5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(J,{Component:uW,code:pW})]}),hW=Object.freeze(Object.defineProperty({__proto__:null,default:Q5},Symbol.toStringTag,{value:"Module"})),K1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],mW=()=>{const[e,t]=V.useState(!1),[n,o]=V.useState(K1),s=i=>{o(i),t(!0)},a=()=>{o(K1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(em,{items:n,Item:l,setOrder:s})})]})},fW=`import { Sortable, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Sortable, Button } from '@abw/badger-react-ui

export const animals = [
  { id: 100, animal: 'Alan Aardvark' },
  { id: 101, animal: 'Brian Badger' },
  { id: 102, animal: 'Colin Camel' },
  { id: 103, animal: 'David Dog' },
  { id: 104, animal: 'Edward Elephant' },
  { id: 105, animal: 'Frank Ferret' },
  { id: 106, animal: 'Gerald Giraffe' },
  { id: 107, animal: 'Hector Hedgehog' },
]

const SortableExample = () => {
  const [changed, setChanged] = React.useState(false)
  const [items, setItems] = React.useState(animals)

  const setOrder = items => {
    setItems(items)
    setChanged(true)
  }

  const resetOrder = () => {
    setItems(
      animals.map(
        row => ({ ...row, moved: false })
      )
    )
    setChanged(false)
  }

  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }) =>
    <div
      ref={setNodeRef}
      style={style}
      className={\`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 \${item.moved ? 'moved' : ''}\`}
      {...props}
      {...listeners}
    >
      {item.animal}
    </div>

  return (
    <>
      <div className="flex space middle mar-b-4">
        <h3>Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button
              color="brown"
              size="smallest"
              text="Reset Order"
              iconLeft="rotate-flipx"
              onClick={resetOrder}
            />
          </div>
        }
      </div>
      <div className={\`sortable \${changed ? 'changed' : ''}\`}>
        <Sortable
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}

export default SortableExample`,X5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(J,{Component:mW,code:fW})]}),xW=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),Y1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],gW=()=>{const[e,t]=V.useState(!1),[n,o]=V.useState(Y1),s=i=>{o(i),t(!0)},a=()=>{o(Y1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(H3,{items:n,Item:l,setOrder:s})})]})},vW=`import { VerticalSort, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { VerticalSort, Button } from '@abw/badger-react-ui

export const animals = [
  { id: 100, animal: 'Alan Aardvark' },
  { id: 101, animal: 'Brian Badger' },
  { id: 102, animal: 'Colin Camel' },
  { id: 103, animal: 'David Dog' },
  { id: 104, animal: 'Edward Elephant' },
  { id: 105, animal: 'Frank Ferret' },
  { id: 106, animal: 'Gerald Giraffe' },
  { id: 107, animal: 'Hector Hedgehog' },
]

const VerticalSortExample = () => {
  const [changed, setChanged] = React.useState(false)
  const [items, setItems] = React.useState(animals)

  const setOrder = items => {
    setItems(items)
    setChanged(true)
  }

  const resetOrder = () => {
    setItems(
      animals.map(
        row => ({ ...row, moved: false })
      )
    )
    setChanged(false)
  }

  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }) =>
    <div
      ref={setNodeRef} style={style}
      className={\`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 \${item.moved ? 'moved' : ''}\`}
      {...props}
      {...listeners}
    >
      {item.animal}
    </div>

  return (
    <>
      <div className="flex space middle mar-b-4">
        <h3 className="mar-t-none">Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button
              color="brown"
              size="smallest"
              text="Reset Order"
              iconLeft="rotate-flipx"
              onClick={resetOrder}
            />
          </div>
        }
      </div>
      <div className="sortable list vertical">
        <VerticalSort
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}

export default VerticalSortExample`,J5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(J,{Component:gW,code:vW})]}),bW=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),jW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(X5,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(J5,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(Q5,{}),r.jsx(De,{tocName:"sortable",children:r.jsx(vo,{children:r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Properties"}),r.jsxs(z,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(z,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(z,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),yW=Object.freeze(Object.defineProperty({__proto__:null,default:jW},Symbol.toStringTag,{value:"Module"})),SW=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(K,{}),r.jsx(K,{color:"red"}),r.jsx(K,{color:"orange",fill:!0}),r.jsx(K,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(K,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(K,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(K,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),CW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 middle wrap">
    <Spinner/>
    <Spinner color="red"/>
    <Spinner color="orange" fill/>
    <Spinner color="yellow" fill stroke="thin"/>
    <Spinner color="green"  fill stroke="thinner" bgIcon="circle" bgStroke bgFill={false}/>
    <Spinner color="teal"   fill stroke="thinner" bgIcon="circle" bgStroke="thin"/>
    <Spinner color="blue"   fill stroke="thinner" bgIcon="circle" bgStroke="thinner" fillStop={90} strokeStop={60}/>
  </div>

export default SpinnerExample`,eb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(J,{Component:SW,code:CW,expand:!0})]}),_W=Object.freeze(Object.defineProperty({__proto__:null,default:eb},Symbol.toStringTag,{value:"Module"})),wW=()=>r.jsx("div",{className:"x3",children:r.jsx(K,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),TW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,tb=()=>r.jsx(T,{code:"bgColor",Component:wW,Source:TW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),EW=Object.freeze(Object.defineProperty({__proto__:null,default:tb},Symbol.toStringTag,{value:"Module"})),kW=()=>r.jsx("div",{className:"x3",children:r.jsx(K,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),NW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,nb=()=>r.jsx(T,{code:"bgFill",Component:kW,Source:NW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),RW=Object.freeze(Object.defineProperty({__proto__:null,default:nb},Symbol.toStringTag,{value:"Module"})),OW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(K,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(K,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),DW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,rb=()=>r.jsx(T,{code:"bgFillStop",Component:OW,Source:DW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),LW=Object.freeze(Object.defineProperty({__proto__:null,default:rb},Symbol.toStringTag,{value:"Module"})),BW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:!1}),r.jsx(K,{bgIcon:"circle"}),r.jsx(K,{bgIcon:"square40"}),r.jsx(K,{bgIcon:"square30"}),r.jsx(K,{bgIcon:"square20"}),r.jsx(K,{bgIcon:"square10"}),r.jsx(K,{bgIcon:"square"})]}),$W=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon={false}/>
    <Spinner bgIcon="circle"/>
    <Spinner bgIcon="square40"/>
    <Spinner bgIcon="square30"/>
    <Spinner bgIcon="square20"/>
    <Spinner bgIcon="square10"/>
    <Spinner bgIcon="square"/>
  </div>

export default SpinnerExample`,ob=()=>r.jsx(T,{code:"bgIcon",Component:BW,Source:$W,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(Ft,{text:"shrink"})," property."]})}),AW=Object.freeze(Object.defineProperty({__proto__:null,default:ob},Symbol.toStringTag,{value:"Module"})),MW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle",bgStroke:!0}),r.jsx(K,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(K,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(K,{bgIcon:"circle",bgStroke:"thinnest"})]}),PW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke/>
    <Spinner bgIcon="circle" bgStroke="thin"/>
    <Spinner bgIcon="circle" bgStroke="thinner"/>
    <Spinner bgIcon="circle" bgStroke="thinnest"/>
  </div>

export default SpinnerExample`,sb=()=>r.jsxs(T,{code:"bgStroke",Component:MW,Source:PW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),IW=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),zW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(K,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(K,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),FW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,ab=()=>r.jsx(T,{code:"bgStrokeStop",Component:zW,Source:FW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),UW=Object.freeze(Object.defineProperty({__proto__:null,default:ab},Symbol.toStringTag,{value:"Module"})),HW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(K,{color:"red"}),r.jsx(K,{color:"orange"}),r.jsx(K,{color:"yellow"}),r.jsx(K,{color:"green"})]}),VW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner color="red"/>
    <Spinner color="orange"/>
    <Spinner color="yellow"/>
    <Spinner color="green"/>
  </div>

export default SpinnerExample`,lb=()=>r.jsxs(T,{code:"color",Component:HW,Source:VW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),WW=Object.freeze(Object.defineProperty({__proto__:null,default:lb},Symbol.toStringTag,{value:"Module"})),ZW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{fill:!0,color:"red"}),r.jsx(K,{fill:!0,color:"orange"}),r.jsx(K,{fill:!0,color:"yellow"}),r.jsx(K,{fill:!0,color:"green"})]}),KW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner fill color="red"/>
    <Spinner fill color="orange"/>
    <Spinner fill color="yellow"/>
    <Spinner fill color="green"/>
  </div>

export default SpinnerExample`,ib=()=>r.jsx(T,{code:"fill",Component:ZW,Source:KW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),YW=Object.freeze(Object.defineProperty({__proto__:null,default:ib},Symbol.toStringTag,{value:"Module"})),GW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(K,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(K,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(K,{fill:!0,fillStop:80,fillStopDark:10})]}),qW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner fill fillStop={50} fillStopDark={40}/>
    <Spinner fill fillStop={60} fillStopDark={30}/>
    <Spinner fill fillStop={70} fillStopDark={20}/>
    <Spinner fill fillStop={80} fillStopDark={10}/>
  </div>

export default SpinnerExample`,cb=()=>r.jsx(T,{code:"fillStop",Component:GW,Source:qW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),QW=Object.freeze(Object.defineProperty({__proto__:null,default:cb},Symbol.toStringTag,{value:"Module"})),XW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(K,{icon:"rotate"}),r.jsx(K,{icon:"asterisk"}),r.jsx(K,{icon:"arrow"})]}),JW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,db=()=>r.jsx(T,{code:"icon",Component:XW,Source:JW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),eZ=Object.freeze(Object.defineProperty({__proto__:null,default:db},Symbol.toStringTag,{value:"Module"})),tZ=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(K,{}),r.jsx(K,{reverse:!0})]}),nZ=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,ub=()=>r.jsx(T,{code:"reverse",Component:tZ,Source:nZ,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),rZ=Object.freeze(Object.defineProperty({__proto__:null,default:ub},Symbol.toStringTag,{value:"Module"})),oZ=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle"}),r.jsx(K,{bgIcon:"circle",shrink:6}),r.jsx(K,{bgIcon:"circle",shrink:7}),r.jsx(K,{bgIcon:"circle",shrink:8})]}),sZ=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle"/>
    <Spinner bgIcon="circle" shrink={6}/>
    <Spinner bgIcon="circle" shrink={7}/>
    <Spinner bgIcon="circle" shrink={8}/>
  </div>

export default SpinnerExample`,pb=()=>r.jsx(T,{code:"shrink",Component:oZ,Source:sZ,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(Ft,{text:"bgIcon"})," is set, otherwise it is 0."]})}),aZ=Object.freeze(Object.defineProperty({__proto__:null,default:pb},Symbol.toStringTag,{value:"Module"})),lZ=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(K,{size:"x3"}),r.jsx(K,{size:"x5"}),r.jsx(K,{size:"x8"})]}),iZ=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,hb=()=>r.jsxs(T,{code:"size",Component:lZ,Source:iZ,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),cZ=Object.freeze(Object.defineProperty({__proto__:null,default:hb},Symbol.toStringTag,{value:"Module"})),dZ=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{stroke:"thinnest"}),r.jsx(K,{stroke:"thinner"}),r.jsx(K,{stroke:"thin"}),r.jsx(K,{}),r.jsx(K,{stroke:"thick"}),r.jsx(K,{stroke:"thicker"}),r.jsx(K,{stroke:"thickest"}),r.jsx(K,{stroke:!1,fill:!0})]}),uZ=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner stroke="thinnest"/>
    <Spinner stroke="thinner"/>
    <Spinner stroke="thin"/>
    <Spinner/>
    <Spinner stroke="thick"/>
    <Spinner stroke="thicker"/>
    <Spinner stroke="thickest"/>
    <Spinner stroke={false} fill/>
  </div>

export default SpinnerExample`,mb=()=>r.jsxs(T,{code:"stroke",Component:dZ,Source:uZ,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(Ft,{text:"fill"}),")"]})]}),pZ=Object.freeze(Object.defineProperty({__proto__:null,default:mb},Symbol.toStringTag,{value:"Module"})),hZ=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{strokeStop:20,strokeStopDark:80}),r.jsx(K,{strokeStop:50,strokeStopDark:50}),r.jsx(K,{strokeStop:80,strokeStopDark:20})]}),mZ=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,fb=()=>r.jsx(T,{code:"strokeStop",Component:hZ,Source:mZ,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),fZ=Object.freeze(Object.defineProperty({__proto__:null,default:fb},Symbol.toStringTag,{value:"Module"})),xZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx(eb,{}),r.jsxs(De,{tocName:"spinner",children:[r.jsx(oe,{title:"Properties"}),r.jsx(hb,{}),r.jsx(ub,{}),r.jsx(pb,{}),r.jsx(db,{}),r.jsx(lb,{}),r.jsx(mb,{}),r.jsx(fb,{}),r.jsx(ib,{}),r.jsx(cb,{}),r.jsx(ob,{}),r.jsx(tb,{}),r.jsx(sb,{}),r.jsx(ab,{}),r.jsx(nb,{}),r.jsx(rb,{})]})]}),gZ=Object.freeze(Object.defineProperty({__proto__:null,default:xZ},Symbol.toStringTag,{value:"Module"})),vZ=()=>{const e=[{text:"One",content:"This is one"},{text:"Two",content:"This is two"},{text:"Three",content:"This is three"},{text:"Four",disabled:!0}];return r.jsx(lt,{lined:!0,tabs:e})},bZ=`import { Tabset } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Tabset } from '@abw/badger-react-ui

const TabsetExample = () => {
  const tabs = [
    { text: 'One',   content: 'This is one' },
    { text: 'Two',   content: 'This is two' },
    { text: 'Three', content: 'This is three' },
    { text: 'Four',  disabled: true }
  ]
  return (
    <Tabset lined tabs={tabs}/>
  )
}

export default TabsetExample`,xb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Tabset"})," component renders a selectable set of tabs."]}),r.jsx(J,{Component:vZ,code:bZ})]}),jZ=Object.freeze(Object.defineProperty({__proto__:null,default:xb},Symbol.toStringTag,{value:"Module"})),yZ=()=>r.jsx(lt,{solid:!0,lined:!0,center:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),SZ=`import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    solid lined center color="blue"
    tabs={[
      { text: 'Ten', content: 'Quite loud' },
      { text: 'Eleven', content: 'One louder' },
    ]}
  />
/* END */

export default TabsetExample`,gb=()=>r.jsx(T,{code:"center",Component:yZ,Source:SZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"center"})," property can be added to center align the tabs."]})}),CZ=Object.freeze(Object.defineProperty({__proto__:null,default:gb},Symbol.toStringTag,{value:"Module"})),_Z=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(lt,{lined:!0,solid:!0,tabs:e}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"brand"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"orange"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"teal"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"violet"})]})},wZ=`import { Tabset } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Tabset } from '@abw/badger-react-ui

const TabsetExample = () => {
  const tabs = [
    {
      text: 'Ten',
      content: 'Quite loud'
    },
    {
      text: 'Eleven',
      content: 'One louder'
    },
  ]
  return (
    <div className="grid-1 gap-4">
      <Tabset lined solid tabs={tabs}/>
      <Tabset lined solid tabs={tabs} color="brand"/>
      <Tabset lined solid tabs={tabs} color="orange"/>
      <Tabset lined solid tabs={tabs} color="teal"/>
      <Tabset lined solid tabs={tabs} color="violet"/>
    </div>
  )
}

export default TabsetExample`,vb=()=>r.jsx(T,{code:"color",Component:_Z,Source:wZ,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range for the tabs."]})}),TZ=Object.freeze(Object.defineProperty({__proto__:null,default:vb},Symbol.toStringTag,{value:"Module"})),EZ=()=>r.jsx(lt,{lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),kZ=`import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    lined
    tabs={[
      { text: 'Ten', content: 'Quite loud' },
      { text: 'Eleven', content: 'One louder' },
    ]}
  />
/* END */

export default TabsetExample`,bb=()=>r.jsx(T,{code:"lined",Component:EZ,Source:kZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a line under the tabs."]})}),NZ=Object.freeze(Object.defineProperty({__proto__:null,default:bb},Symbol.toStringTag,{value:"Module"})),RZ=()=>r.jsx(lt,{solid:!0,lined:!0,right:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),OZ=`import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    solid lined right color="blue"
    tabs={[
      { text: 'Ten', content: 'Quite loud' },
      { text: 'Eleven', content: 'One louder' },
    ]}
  />
/* END */

export default TabsetExample`,jb=()=>r.jsx(T,{code:"right",Component:RZ,Source:OZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can be added to right align the tabs."]})}),DZ=Object.freeze(Object.defineProperty({__proto__:null,default:jb},Symbol.toStringTag,{value:"Module"})),LZ=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(lt,{lined:!0,solid:!0,tabs:e}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,size:"smaller"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,size:"larger"})]})},BZ=`import { Tabset } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Tabset } from '@abw/badger-react-ui

const TabsetExample = () => {
  const tabs = [
    {
      text: 'Ten',
      content: 'Quite loud'
    },
    {
      text: 'Eleven',
      content: 'One louder'
    },
  ]
  return (
    <div className="grid-1 gap-4">
      <Tabset lined solid tabs={tabs}/>
      <Tabset lined solid tabs={tabs} size="smaller"/>
      <Tabset lined solid tabs={tabs} size="larger"/>
    </div>
  )
}

export default TabsetExample`,yb=()=>r.jsx(T,{code:"size",Component:LZ,Source:BZ,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size of the tabs."]})}),$Z=Object.freeze(Object.defineProperty({__proto__:null,default:yb},Symbol.toStringTag,{value:"Module"})),AZ=()=>r.jsxs(r.Fragment,{children:[r.jsx(lt,{solid:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),r.jsx(lt,{solid:!0,lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]})]}),MZ=`import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <>
    <Tabset
      solid
      tabs={[
        { text: 'Ten', content: 'Quite loud' },
        { text: 'Eleven', content: 'One louder' },
      ]}
    />
    <Tabset
      solid lined
      tabs={[
        { text: 'Ten', content: 'Quite loud' },
        { text: 'Eleven', content: 'One louder' },
      ]}
    />
  </>
/* END */

export default TabsetExample`,Sb=()=>r.jsx(T,{code:"solid",Component:AZ,Source:MZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"solid"})," property can be used to render the tabs using solid colors.  It can be used in conjunction with ",r.jsx("code",{children:"lined"}),"."]})}),PZ=Object.freeze(Object.defineProperty({__proto__:null,default:Sb},Symbol.toStringTag,{value:"Module"})),IZ=()=>r.jsx(lt,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),zZ=`import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    storageKey="badger-tabset-demo"
    lined solid color="orange"
    tabs={[
      {
        text: 'Ten',
        content: 'Quite loud'
      },
      {
        text: 'Eleven',
        content: 'One louder'
      },
    ]}
  />
/* END*/

export default TabsetExample`,Cb=()=>r.jsxs(T,{code:"storageKey",Component:IZ,Source:zZ,expand:!0,undent:2,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",r.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',r.jsx("code",{children:"contact-tabs"}),"."]})]}),FZ=Object.freeze(Object.defineProperty({__proto__:null,default:Cb},Symbol.toStringTag,{value:"Module"})),UZ=({tab:e})=>r.jsxs("div",{className:"border pad-2 mar-t-2",children:["This is a component for rendering ",e.otherData]}),HZ=()=>{const e=[{text:"One",iconLeft:"asterisk",content:"This is one"},{text:"Two",iconRight:"cog",content:r.jsx("div",{className:"border pad-2 mar-t-2",children:"This is two"})},{icon:"heart",otherData:"the heart tab",Component:UZ},{icon:"thumb-down",disabled:!0}];return r.jsx(lt,{lined:!0,tabs:e})},VZ=`import { Tabset } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Tabset } from '@abw/badger-react-ui

const TabContent = ({ tab }) =>
  <div className="border pad-2 mar-t-2">
    This is a component for
    rendering {tab.otherData}
  </div>

const TabsetExample = () => {
  const tabs = [
    {
      text: 'One',
      iconLeft: 'asterisk',
      content: 'This is one'
    },
    {
      text: 'Two',
      iconRight: 'cog',
      content: <div className="border pad-2 mar-t-2">This is two</div>
    },
    {
      icon: 'heart',
      otherData: 'the heart tab',
      Component: TabContent
    },
    {
      icon: 'thumb-down',
      disabled: true
    }
  ]
  return (
    <Tabset lined tabs={tabs}/>
  )
}

export default TabsetExample`,_b=()=>r.jsxs(T,{code:"tabs",Component:HZ,Source:VZ,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"tabs"})," property should be used to define an array of objects containing properties for each tab.  This can include ",r.jsx("code",{children:"text"})," for the tab text, ",r.jsx("code",{children:"icon"})," for a tab icon, ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," for icons to appear either side of the text, and ",r.jsx("code",{children:"disabled"})," to disable the tab"]}),r.jsxs("p",{children:["A ",r.jsx("code",{children:"content"})," property can be defined containing the content that should be rendered when the tab is select. Alternately you can provide a ",r.jsx("code",{children:"Component"})," which should be a React component. This will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]}),WZ=Object.freeze(Object.defineProperty({__proto__:null,default:_b},Symbol.toStringTag,{value:"Module"})),ZZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Tabset"}),r.jsx(xb,{}),r.jsxs(De,{tocName:"tabset",children:[r.jsx(oe,{title:"Properties"}),r.jsx(_b,{}),r.jsx(Cb,{}),r.jsx(bb,{}),r.jsx(Sb,{}),r.jsx(vb,{}),r.jsx(yb,{}),r.jsx(gb,{}),r.jsx(jb,{}),r.jsxs(z,{code:"tabsetClass",children:["The CSS class added to the tabset container.  This defaults to ",r.jsx("code",{children:"tabset"}),"."]}),r.jsxs(z,{code:"tabsClass",children:["The CSS class added to the tabs list.  This defaults to ",r.jsx("code",{children:"tabs"}),"."]}),r.jsxs(z,{code:"activeClass",children:["The CSS class added to the active tab.  This defaults to ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"disabledClass",children:["The CSS class added to a disabled active tab.  This defaults to ",r.jsx("code",{children:"disabled"}),"."]}),r.jsx(z,{code:"className",children:"An additional CSS class to be added to the tabset container.  Use this for applying additional margin utility classes, for example."}),r.jsx(z,{code:"bodyClass",children:"A CSS class to be added to the body container."}),r.jsxs(z,{code:"Body",children:["A component to render the body for each tab.  It will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]})]}),KZ=Object.freeze(Object.defineProperty({__proto__:null,default:ZZ},Symbol.toStringTag,{value:"Module"})),YZ=()=>r.jsx(co,{gap:2,children:r.jsx(Oa,{})}),Oa=()=>["A","B","C","D","E","F","G","H"].map(e=>r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:e},e)),GZ=`import { Tiles } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Tiles } from '@abw/badger-react-ui

const TilesExample = () =>
  <Tiles gap={2}>
    <Cards/>
  </Tiles>

export const Cards = () =>
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(
    letter =>
      <div
        key={letter}
        className="surface-3 pad-2 border bdr-1"
      >
        {letter}
      </div>
  )

export default TilesExample`,wb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Tiles"})," component implements a grid layout for tiling the child components."]}),r.jsx(J,{Component:YZ,code:GZ})]}),qZ=Object.freeze(Object.defineProperty({__proto__:null,default:wb},Symbol.toStringTag,{value:"Module"})),QZ=()=>r.jsxs(co,{gap:2,children:[r.jsx("div",{className:"cols-2 surface-3 pad-2 border bdr-1",children:"A"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"B"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"C"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"D"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"E"}),r.jsx("div",{className:"cols-2 surface-3 pad-2 border bdr-1",children:"F"}),r.jsx("div",{className:"cols-4 surface-3 pad-2 border bdr-1",children:"G"})]}),XZ=`import React from 'react'
import { Tiles } from '@/src/index.jsx'

const TilesExample = () =>
  /* START */
  <Tiles gap={2}>
    <div className="cols-2 surface-3 pad-2 border bdr-1">A</div>
    <div className="surface-3 pad-2 border bdr-1">B</div>
    <div className="surface-3 pad-2 border bdr-1">C</div>
    <div className="surface-3 pad-2 border bdr-1">D</div>
    <div className="surface-3 pad-2 border bdr-1">E</div>
    <div className="cols-2 surface-3 pad-2 border bdr-1">F</div>
    <div className="cols-4 surface-3 pad-2 border bdr-1">G</div>
  </Tiles>
  /* END */

export default TilesExample`,Tb=()=>r.jsx(T,{code:"cols",Component:QZ,Source:XZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cols-N"})," property can be added to an immediate child element to make it span a number of columns."]})}),JZ=Object.freeze(Object.defineProperty({__proto__:null,default:Tb},Symbol.toStringTag,{value:"Module"})),eK=()=>r.jsxs("div",{className:"grid-1 gap-8",children:[r.jsx(co,{gap:2,children:r.jsx(Oa,{})}),r.jsx(co,{gap:"2 4",children:r.jsx(Oa,{})}),r.jsx(co,{gap:[4,2],children:r.jsx(Oa,{})})]}),tK=`import React from 'react'
import { Tiles } from '@/src/index.jsx'
import { Cards } from '../Tiles/Component.jsx'

const TilesExample = () =>
  /* START */
  <div className="grid-1 gap-8">
    <Tiles gap={2}>
      <Cards/>
    </Tiles>
    <Tiles gap="2 4">
      <Cards/>
    </Tiles>
    <Tiles gap={[4, 2]}>
      <Cards/>
    </Tiles>
  </div>
  /* END */

export default TilesExample`,Eb=()=>r.jsxs(T,{code:"gap",Component:eK,Source:tK,expand:!0,undent:2,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"gap"})," property can be used to define the gap between tiles in units of 0.25rem.  A single value provides the vertical and horizontal gap."]}),r.jsx("p",{children:"Two values can be provided, either as an array or a whitespace delimited string, providing different values for the vertical and horizontal gaps."})]}),nK=Object.freeze(Object.defineProperty({__proto__:null,default:Eb},Symbol.toStringTag,{value:"Module"})),rK=()=>r.jsx(co,{gap:2,minWidth:"50px",children:r.jsx(Oa,{})}),oK=`import React from 'react'
import { Tiles } from '@/src/index.jsx'
import { Cards } from '../Tiles/Component.jsx'

const TilesExample = () =>
  /* START */
  <Tiles gap={2} minWidth="50px">
    <Cards/>
  </Tiles>
  /* END */

export default TilesExample`,kb=()=>r.jsx(T,{code:"minWidth",Component:rK,Source:oK,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"minWidth"})," property can be used to set the minimum width of a tile."]})}),sK=Object.freeze(Object.defineProperty({__proto__:null,default:kb},Symbol.toStringTag,{value:"Module"})),aK=()=>r.jsxs(co,{gap:2,children:[r.jsx("div",{className:"rows-2 surface-3 pad-2 border bdr-1",children:"A"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"B"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"C"}),r.jsx("div",{className:"rows-2 surface-3 pad-2 border bdr-1",children:"D"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"E"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"F"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"G"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"H"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"I"}),r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"J"})]}),lK=`import React from 'react'
import { Tiles } from '@/src/index.jsx'

const TilesExample = () =>
  /* START */
  <Tiles gap={2}>
    <div className="rows-2 surface-3 pad-2 border bdr-1">A</div>
    <div className="surface-3 pad-2 border bdr-1">B</div>
    <div className="surface-3 pad-2 border bdr-1">C</div>
    <div className="rows-2 surface-3 pad-2 border bdr-1">D</div>
    <div className="surface-3 pad-2 border bdr-1">E</div>
    <div className="surface-3 pad-2 border bdr-1">F</div>
    <div className="surface-3 pad-2 border bdr-1">G</div>
    <div className="surface-3 pad-2 border bdr-1">H</div>
    <div className="surface-3 pad-2 border bdr-1">I</div>
    <div className="surface-3 pad-2 border bdr-1">J</div>
  </Tiles>
  /* END */

export default TilesExample`,Nb=()=>r.jsx(T,{code:"rows",Component:aK,Source:lK,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows-N"})," property can be added to an immediate child element to make it span a number of rows."]})}),iK=Object.freeze(Object.defineProperty({__proto__:null,default:Nb},Symbol.toStringTag,{value:"Module"})),cK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Tiles"}),r.jsx(wb,{}),r.jsxs(De,{tocName:"tiles",children:[r.jsx(oe,{title:"Properties"}),r.jsx(kb,{}),r.jsx(Eb,{}),r.jsx(oe,{title:"Child Properties"}),r.jsx(Tb,{}),r.jsx(Nb,{})]})]}),dK=Object.freeze(Object.defineProperty({__proto__:null,default:cK},Symbol.toStringTag,{value:"Module"})),uK=()=>{const[e,t]=V.useState(0),[n,o]=V.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(bn,{selected:e,onSelect:t}),r.jsx(bn,{options:[{text:"Red",color:"red"},{text:"Green",color:"green"},{text:"Blue",color:"blue"}],selected:n,onSelect:(s,a)=>o(a)})]})},pK=`import { Toggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState(0)
  return (
    <div className="grid-1 gap-4">
      <Toggle
        selected={selected}
        onSelect={setSelected}
      />
      <Toggle
        options={[
          { text: 'Red',   color: 'red'   },
          { text: 'Green', color: 'green' },
          { text: 'Blue',  color: 'blue'  },
        ]}
        selected={selectedColor}
        onSelect={(option, n) => setSelectedColor(n)}
      />
    </div>
  )
}

export default ToggleExample`,Rb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Toggle"})," component renders a switchable toggle using the ",r.jsx(hM,{})," component."]}),r.jsx(J,{Component:uK,code:pK})]}),hK=Object.freeze(Object.defineProperty({__proto__:null,default:Rb},Symbol.toStringTag,{value:"Module"})),mK=()=>r.jsx(BO,{options:[{text:"Hot",color:"red"},{text:"Cold",color:"blue"}],onSelect:e=>console.log(`You selected ${e.text}`),storageKey:"bru-toggle-temperature"}),fK=`import { ToggleState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { ToggleState } from '@abw/badger-react-ui

const ToggleStateExample = () =>
  <ToggleState
    options={[
      { text: 'Hot',  color: 'red'  },
      { text: 'Cold', color: 'blue' },
    ]}
    onSelect={
      option =>
        console.log(\`You selected \${option.text}\`)
    }
    storageKey="bru-toggle-temperature"
  />

export default ToggleStateExample`,Ob=()=>r.jsxs(T,{code:"ToggleState",Component:mK,Source:fK,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"ToggleState"})," component is a wrapper around the"," ",r.jsx("code",{children:"Toggle"})," component which maintains the state of the selected option internally.  Use the ",r.jsx("code",{children:"onSelect"})," handler to get notification when a new option is selected."]}),r.jsxs("p",{children:["You can also define a ",r.jsx("code",{children:"storageKey"})," to store the selected option in local storage.  Try selecting an option below and then reload the page.  You should see the option selection restored."]})]}),xK=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),gK=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{activeProps:{className:"brand weight-black"},selected:e,onSelect:t})},vK=`import { Toggle } from '@/src/index.jsx'

import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  return (
  /* START */
    <Toggle
      activeProps={{
        className: 'brand weight-black'
      }}
      selected={selected}
      onSelect={setSelected}
    />
  /* END */
  )
}

export default ToggleExample`,Db=()=>r.jsx(T,{code:"activeProps",Component:gK,Source:vK,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"activeProps"})," property can be used to define properties for the active button."]})}),bK=Object.freeze(Object.defineProperty({__proto__:null,default:Db},Symbol.toStringTag,{value:"Module"})),jK=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{color:"brand",selected:e,onSelect:t})},yK=`import { Toggle } from '@/src/index.jsx'

import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  return (
  /* START */
    <Toggle
      color="brand"
      selected={selected}
      onSelect={setSelected}
    />
  /* END */
  )
}

export default ToggleExample`,Lb=()=>r.jsx(T,{code:"color",Component:jK,Source:yK,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range for the buttons."]})}),SK=Object.freeze(Object.defineProperty({__proto__:null,default:Lb},Symbol.toStringTag,{value:"Module"})),CK=()=>{const e={id:10,text:"Love",iconLeft:"thumb-up"},t={id:11,text:"Hate",iconLeft:"thumb-down"},[n,o]=V.useState(t),s=(a,l)=>a.findIndex(i=>i.id===l.id);return r.jsx(bn,{options:[e,t],selected:n,onSelect:o,findSelectedIndex:s})},_K=`import { Toggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const love = {
    id:       10,
    text:     'Love',
    iconLeft: 'thumb-up'
  }
  const hate = {
    id:       11,
    text:     'Hate',
    iconLeft: 'thumb-down'
  }
  const [selected, setSelected] = React.useState(hate)

  const findSelectedIndex = (options, selected) =>
    options.findIndex(
      option => option.id === selected.id
    )

  return (
    <Toggle
      options={[ love, hate ]}
      selected={selected}
      onSelect={setSelected}
      findSelectedIndex={findSelectedIndex}
    />
  )
}

export default ToggleExample`,Bb=()=>r.jsxs(T,{code:"findSelectedIndex",Component:CK,Source:_K,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"findSelectedIndex"})," property can be used to provide an alternative function to determine the index of a selected option. The default function looks for the option that matches the"," ",r.jsx("code",{children:"value"})," property of the selected option."]}),r.jsxs("p",{children:["In this example we define a function to match the index of the selected option using the ",r.jsx("code",{children:"id"})," property."]})]}),wK=Object.freeze(Object.defineProperty({__proto__:null,default:Bb},Symbol.toStringTag,{value:"Module"})),TK=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{inactiveProps:{className:"grey outline weight-100"},selected:e,onSelect:t})},EK=`import { Toggle } from '@/src/index.jsx'

import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  return (
  /* START */
    <Toggle
      inactiveProps={{
        className: 'grey outline weight-100'
      }}
      selected={selected}
      onSelect={setSelected}
    />
  /* END */
  )
}

export default ToggleExample`,$b=()=>r.jsx(T,{code:"inactiveProps",Component:TK,Source:EK,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inactiveProps"})," property can be used to define properties for inactive buttons."]})}),kK=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),NK=()=>{const[e,t]=V.useState(0),n=[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}];return r.jsx(bn,{options:n,selected:e,onSelect:(o,s)=>t(s)})},RK=`import { Toggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  const options = [
    {
      text:     'Love',
      iconLeft: 'thumb-up'
    },
    {
      text:     'Hate',
      iconLeft: 'thumb-down'
    },
  ]
  return (
    <Toggle
      options={options}
      selected={selected}
      onSelect={(option, n) => setSelected(n)}
    />
  )
}

export default ToggleExample`,Ab=()=>r.jsxs(T,{code:"onSelect",Component:NK,Source:RK,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to provider a handler which will be called when an option is selected.  It is passed two arguments: the ",r.jsx("code",{children:"option"})," object and the numerical index of the option in the ",r.jsx("code",{children:"options"})," array."]}),r.jsxs("p",{children:["You can safely use the second argument, the numerical index, as the value to store for the ",r.jsx("code",{children:"selected"})," option.  You can use the first argument, the option object as long as each option has a"," ",r.jsx("code",{children:"value"})," property to uniquely identify it."]})]}),OK=Object.freeze(Object.defineProperty({__proto__:null,default:Ab},Symbol.toStringTag,{value:"Module"})),DK=()=>{const[e,t]=V.useState(0),n=[{value:"love",text:"Love",iconLeft:"thumb-up"},{value:"hate",text:"Hate",iconLeft:"thumb-down"}];return r.jsxs(r.Fragment,{children:[r.jsx(bn,{options:n,selected:e,onSelect:t}),r.jsxs("p",{className:"mar-t-2",children:["You ",e.value," this!"]})]})},LK=`import { Toggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  const options = [
    {
      value:    'love',
      text:     'Love',
      iconLeft: 'thumb-up'
    },
    {
      value:    'hate',
      text:     'Hate',
      iconLeft: 'thumb-down'
    },
  ]
  return (
    <>
      <Toggle
        options={options}
        selected={selected}
        onSelect={setSelected}
      />
      <p className="mar-t-2">
        You {selected.value} this!
      </p>
    </>
  )
}

export default ToggleExample`,Mb=()=>r.jsxs(T,{code:"options",Component:DK,Source:LK,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property can be used to define the available options.  Each object in the array can contain any of the properties accepted by the ",r.jsx(Z4,{})," component, e.g. ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"icon"}),", ",r.jsx("code",{children:"iconLeft"}),", ",r.jsx("code",{children:"iconRight"}),", etc."]}),r.jsxs("p",{children:["When used as shown in this example (where the ",r.jsx("code",{children:"selected"})," value is the option object), each option should have a ",r.jsx("code",{children:"value"})," to uniquely identify it."]})]}),BK=Object.freeze(Object.defineProperty({__proto__:null,default:Mb},Symbol.toStringTag,{value:"Module"})),$K=()=>{const[e,t]=V.useState(0),n=[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}];return r.jsx(bn,{options:n,selected:e,onSelect:(o,s)=>t(s)})},AK=`import { Toggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  const options = [
    {
      text:     'Love',
      iconLeft: 'thumb-up'
    },
    {
      text:     'Hate',
      iconLeft: 'thumb-down'
    },
  ]
  return (
    <Toggle
      options={options}
      selected={selected}
      onSelect={(option, n) => setSelected(n)}
    />
  )
}

export default ToggleExample`,Pb=()=>r.jsx(T,{code:"selected",Component:$K,Source:AK,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"selected"})," property should be used to indicate which option is selected.  This can be an object that contains the same"," ",r.jsx("code",{children:"value"})," property as the option, or the numerical index of the item in the ",r.jsx("code",{children:"options"})," list.  The default value is"," ",r.jsx("code",{children:"0"}),", selecting the first option."]})}),MK=Object.freeze(Object.defineProperty({__proto__:null,default:Pb},Symbol.toStringTag,{value:"Module"})),PK=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{size:"smaller",selected:e,onSelect:t})},IK=`import { Toggle } from '@/src/index.jsx'

import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  return (
  /* START */
    <Toggle
      size="smaller"
      selected={selected}
      onSelect={setSelected}
    />
  /* END */
  )
}

export default ToggleExample`,Ib=()=>r.jsx(T,{code:"size",Component:PK,Source:IK,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size of the buttons."]})}),zK=Object.freeze(Object.defineProperty({__proto__:null,default:Ib},Symbol.toStringTag,{value:"Module"})),FK=()=>r.jsx(lt,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),UK=`import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    storageKey="badger-tabset-demo"
    lined solid color="orange"
    tabs={[
      {
        text: 'Ten',
        content: 'Quite loud'
      },
      {
        text: 'Eleven',
        content: 'One louder'
      },
    ]}
  />
/* END*/

export default TabsetExample`,HK=()=>r.jsxs(T,{code:"storageKey",Component:FK,Source:UK,expand:!0,undent:2,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",r.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',r.jsx("code",{children:"contact-tabs"}),"."]})]}),VK=Object.freeze(Object.defineProperty({__proto__:null,default:HK},Symbol.toStringTag,{value:"Module"})),WK=()=>{const[e,t]=g0({options:[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}],storageKey:"bru-toggle-love-hate"});return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(t,{}),r.jsx(t,{size:"small",color:"violet"}),r.jsx(t,{size:"smaller",color:"blue"}),"You ",e.text.toLowerCase()," this!"]})},ZK=`import { useToggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useToggle } from '@abw/badger-react-ui

const UseToggleExample = () => {
  const [option, Toggle] = useToggle({
    options: [
      { text: 'Love', iconLeft: 'thumb-up'   },
      { text: 'Hate', iconLeft: 'thumb-down' },
    ],
    storageKey: 'bru-toggle-love-hate'
  })
  return (
    <div className="grid-1 gap-4">
      <Toggle/>
      <Toggle size="small" color="violet"/>
      <Toggle size="smaller" color="blue"/>
      You {option.text.toLowerCase()} this!
    </div>
  )
}

export default UseToggleExample`,zb=()=>r.jsx(T,{code:"useToggle",Component:WK,Source:ZK,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"useToggle"})," hook can be called to return an array containing the currently selected ",r.jsx("code",{children:"option"})," and a"," ",r.jsx("code",{children:"Toggle"})," component.  You can render the component multiple times and each instance will share the same state. Additional properties can be passed each time you render it."]})}),KK=Object.freeze(Object.defineProperty({__proto__:null,default:zb},Symbol.toStringTag,{value:"Module"})),YK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Toggle"}),r.jsx(Rb,{}),r.jsxs(De,{tocName:"toggle",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Mb,{}),r.jsx(Pb,{}),r.jsx(Ab,{}),r.jsx(Bb,{}),r.jsx(Ib,{}),r.jsx(Lb,{}),r.jsx(Db,{}),r.jsx($b,{}),r.jsx(oe,{title:"Components"}),r.jsx(Ob,{}),r.jsx(zb,{})]})]}),GK=Object.freeze(Object.defineProperty({__proto__:null,default:YK},Symbol.toStringTag,{value:"Module"})),qK=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,QK="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",XK="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",JK=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,eY=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,tY=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(Wn,{code:qK,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(vo,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(Wn,{code:QK,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(vo,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(Wn,{code:XK,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(Wn,{code:JK,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(Wn,{code:eY,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),nY=Object.freeze(Object.defineProperty({__proto__:null,default:tY},Symbol.toStringTag,{value:"Module"})),rY=()=>{const[e,t]=Xc({badgers:3,ferrets:2,stoats:1});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Yd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Yd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Yd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{className:"text-right",children:e.badgers+e.ferrets+e.stoats})]})]})})},Yd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:r.jsxs("div",{className:"flex space",children:[e,r.jsx(yn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})}),r.jsx("td",{className:"text-right",children:t})]}),oY=`import React from 'react'
import { useComplexState, Buttons } from '@/src/index.jsx'

// PRETEND: import { useComplexState, Button } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
  const [state, setters] = useComplexState(
    { badgers: 3, ferrets: 2, stoats: 1 }
  )
  return (
    <table className="wide celled shaded">
      <tbody>
        <Row
          caption="Badgers"
          value={state.badgers}
          setter={setters.setBadgers}
        />
        <Row
          caption="Ferrets"
          value={state.ferrets}
          setter={setters.setFerrets}
        />
        <Row
          caption="Stoats"
          value={state.stoats}
          setter={setters.setStoats}
        />
        <tr>
          <th>Total</th>
          <td className="text-right">
            {state.badgers + state.ferrets + state.stoats}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
/* START */
const Row = ({ caption, value, setter }) =>
  <tr>
    <th>
      <div className="flex space">
        {caption}
        <Buttons
          color="orange" outline
          buttons={[
            {
              icon: 'minus',
              onClick: () => setter(
                current => current - 1
              )
            },
            {
              icon: 'plus',
              onClick: () => setter(
                current => current + 1
              )
            }
          ]}
        />
      </div>
    </th>
    <td className="text-right">{value}</td>
  </tr>
/* END */

export default UseComplexStateExample`,Fb=()=>r.jsxs(T,{title:"Setter Functions",Component:rY,Source:oY,children:[r.jsx("p",{children:"The setter functions can be passed a function which will receive the current value and should return the modified value."}),r.jsxs("p",{children:["In this example we modify the ",r.jsx("code",{children:"Row"})," component to add buttons to increment and decrement the current value."]})]}),sY=Object.freeze(Object.defineProperty({__proto__:null,default:Fb},Symbol.toStringTag,{value:"Module"})),aY=()=>{const[e,t]=Xc({badgers:3,ferrets:2,stoats:1},{onChange:n=>({...n,total:n.badgers+n.ferrets+n.stoats})});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Gd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Gd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Gd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{className:"text-right",children:e.total})]})]})})},Gd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:r.jsxs("div",{className:"flex space",children:[e,r.jsx(yn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})}),r.jsx("td",{className:"text-right",children:t})]}),lY=`import React from 'react'
import { useComplexState, Buttons } from '@/src/index.jsx'

// PRETEND: import { useComplexState, Button } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
/* START */
  const [state, setters] = useComplexState(
    { badgers: 3, ferrets: 2, stoats: 1 },
    {
      onChange: state => ({
        ...state,
        total: state.badgers + state.ferrets + state.stoats
      })
    }
  )
  return (
    <table className="wide celled shaded">
      <tbody>
        <Row
          caption="Badgers"
          value={state.badgers}
          setter={setters.setBadgers}
        />
        <Row
          caption="Ferrets"
          value={state.ferrets}
          setter={setters.setFerrets}
        />
        <Row
          caption="Stoats"
          value={state.stoats}
          setter={setters.setStoats}
        />
        <tr>
          <th>Total</th>
          <td className="text-right">
            {state.total}
          </td>
        </tr>
      </tbody>
    </table>
  )
/* END */
}
const Row = ({ caption, value, setter }) =>
  <tr>
    <th>
      <div className="flex space">
        {caption}
        <Buttons
          color="orange" outline
          buttons={[
            {
              icon: 'minus',
              onClick: () => setter(
                current => current - 1
              )
            },
            {
              icon: 'plus',
              onClick: () => setter(
                current => current + 1
              )
            }
          ]}
        />
      </div>
    </th>
    <td className="text-right">{value}</td>
  </tr>

export default UseComplexStateExample`,Ub=()=>r.jsxs(T,{code:"onChange",Component:aY,Source:lY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"useComplexState()"})," function can be passed a second argument with additional configuration options.  These can include an ",r.jsx("code",{children:"onChange"})," handler which will be called any time a state variable is modified.  It will be passed a copy of the modified state.  It can make any further changes to the state before returning it."]}),r.jsxs("p",{children:["In this example we provide an ",r.jsx("code",{children:"onChange"})," handler to calculate the total number of animals.  Note that the handler will be called when the state is initially defined.  This ensures that the ",r.jsx("code",{children:"total"})," state value is always defined, even before we click on any buttons to change a number."]})]}),iY=Object.freeze(Object.defineProperty({__proto__:null,default:Ub},Symbol.toStringTag,{value:"Module"})),Hb=()=>{const[e,t]=Xc({badgers:3,ferrets:2,stoats:1});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(qd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(qd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(qd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{children:e.badgers+e.ferrets+e.stoats})]})]})})},qd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:e}),r.jsx("td",{children:r.jsx("input",{type:"number",value:t,onChange:o=>n(parseInt(o.target.value))})})]}),cY=Object.freeze(Object.defineProperty({__proto__:null,default:Hb},Symbol.toStringTag,{value:"Module"})),dY=`import { useComplexState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useComplexState } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
  const [state, setters] = useComplexState(
    { badgers: 3, ferrets: 2, stoats: 1 }
  )
  return (
    <table className="wide celled shaded">
      <tbody>
        <Row
          caption="Badgers"
          value={state.badgers}
          setter={setters.setBadgers}
        />
        <Row
          caption="Ferrets"
          value={state.ferrets}
          setter={setters.setFerrets}
        />
        <Row
          caption="Stoats"
          value={state.stoats}
          setter={setters.setStoats}
        />
        <tr>
          <th>Total</th>
          <td>{state.badgers + state.ferrets + state.stoats}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Row = ({ caption, value, setter }) =>
  <tr>
    <th>{caption}</th>
    <td>
      <input
        type="number"
        value={value}
        onChange={e => setter(parseInt(e.target.value))}
      />
    </td>
  </tr>


export default UseComplexStateExample`,uY=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"useComplexState"}),r.jsxs("p",{className:"large",children:["This hook is a wrapper around ",r.jsx("code",{children:"React.useState"})," which can be used to maintain a complex state object."]}),r.jsxs("p",{children:["Call the"," ",r.jsx("code",{children:"useComplexState()"})," function passing it an object containing one or more key/values pairs.  It will return an array of"," ",r.jsx("code",{children:"[state, setters]"}),", where the ",r.jsx("code",{children:"state"})," contains the current state, starting with the values you supplied, and the"," ",r.jsx("code",{children:"setters"})," is an object containing setter functions for each item in the state."]}),r.jsxs("p",{children:["If you provide an item in the state called ",r.jsx("code",{children:"badgers"}),", for example, then the corresponding setter function will be called"," ",r.jsx("code",{children:"setBadgers"}),"."]}),r.jsx(J,{Component:Hb,code:dY}),r.jsxs(De,{tocName:"useComplexState",children:[r.jsx(Fb,{}),r.jsx(Ub,{})]})]}),pY=Object.freeze(Object.defineProperty({__proto__:null,default:uY},Symbol.toStringTag,{value:"Module"})),Vb=()=>{const e=$O(),[t,n]=V.useState(0);return r.jsxs("div",{className:"flex space",children:[r.jsxs("div",{children:["Count: ",t,r.jsxs("div",{className:"smaller",children:["renderCount: ",e]})]}),r.jsx(yn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})},hY=Object.freeze(Object.defineProperty({__proto__:null,default:Vb},Symbol.toStringTag,{value:"Module"})),mY=`import { useRenderCount, Buttons } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useRenderCount, Buttons } from '@abw/badger-react-ui

const UseRenderCountExample = () => {
  const renderCount = useRenderCount()
  const [count, setCount] = React.useState(0)

  return (
    <div className="flex space">
      <div>
        Count: {count}
        <div className="smaller">
          renderCount: {renderCount}
        </div>
      </div>
      <Buttons
        color="orange" outline
        buttons={[
          {
            icon: 'minus',
            onClick: () => setCount(
              count => count - 1
            )
          },
          {
            icon: 'plus',
            onClick: () => setCount(
              count => count + 1
            )
          }
        ]}
      />
    </div>
  )
}


export default UseRenderCountExample`,fY=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"useRenderCount"}),r.jsx("p",{className:"large",children:"This simple hook is useful for debugging UI components.  It returns a counter which is incremented every time the component is rendered."}),r.jsx(J,{Component:Vb,code:mY})]}),xY=Object.freeze(Object.defineProperty({__proto__:null,default:fY},Symbol.toStringTag,{value:"Module"})),gY=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),v.createElement("path",{className:"react-ui",d:"M407.024,205.209C406.398,205.396 405.414,205.584 404.069,205.771C402.725,205.959 401.334,206.053 399.896,206.053C398.52,206.053 397.285,205.959 396.191,205.771C395.097,205.584 394.175,205.209 393.425,204.646C392.674,204.083 392.096,203.317 391.69,202.348C391.283,201.379 391.08,200.113 391.08,198.55L391.08,170.414C391.08,168.976 391.346,167.741 391.877,166.71C392.409,165.678 393.175,164.756 394.175,163.943C395.175,163.13 396.41,162.395 397.879,161.739C399.349,161.082 400.928,160.504 402.616,160.004C404.304,159.504 406.054,159.113 407.868,158.832C409.681,158.55 411.494,158.41 413.307,158.41C416.308,158.41 418.684,158.988 420.435,160.145C422.186,161.301 423.061,163.193 423.061,165.819C423.061,166.694 422.936,167.554 422.686,168.398C422.436,169.242 422.123,170.008 421.748,170.695C420.435,170.695 419.091,170.758 417.715,170.883C416.34,171.008 414.995,171.196 413.682,171.446C412.369,171.696 411.135,171.962 409.978,172.243C408.821,172.524 407.836,172.853 407.024,173.228L407.024,205.209ZM451.947,206.803C448.258,206.803 444.835,206.287 441.677,205.256C438.52,204.224 435.769,202.676 433.424,200.613C431.08,198.55 429.235,195.955 427.891,192.829C426.547,189.703 425.875,186.045 425.875,181.856C425.875,177.729 426.547,174.181 427.891,171.211C429.235,168.241 431.001,165.803 433.19,163.896C435.378,161.989 437.879,160.582 440.693,159.676C443.506,158.769 446.382,158.316 449.321,158.316C452.635,158.316 455.651,158.816 458.371,159.816C461.091,160.817 463.436,162.192 465.405,163.943C467.375,165.694 468.907,167.788 470.001,170.227C471.095,172.665 471.642,175.322 471.642,178.198C471.642,180.324 471.048,181.95 469.86,183.075C468.672,184.201 467.015,184.92 464.889,185.232L441.724,188.702C442.412,190.766 443.819,192.313 445.945,193.345C448.07,194.376 450.509,194.892 453.26,194.892C455.823,194.892 458.246,194.564 460.528,193.907C462.81,193.251 464.671,192.485 466.109,191.61C467.109,192.235 467.953,193.11 468.641,194.236C469.329,195.361 469.672,196.549 469.672,197.8C469.672,200.613 468.359,202.708 465.733,204.083C463.733,205.146 461.482,205.865 458.981,206.24C456.48,206.615 454.135,206.803 451.947,206.803ZM449.321,169.945C447.82,169.945 446.523,170.195 445.429,170.695C444.335,171.196 443.444,171.837 442.756,172.618C442.068,173.4 441.552,174.275 441.208,175.244C440.865,176.213 440.661,177.198 440.599,178.198L456.636,175.572C456.449,174.322 455.761,173.071 454.573,171.821C453.385,170.57 451.634,169.945 449.321,169.945ZM498.09,158.316C501.466,158.316 504.545,158.66 507.327,159.347C510.11,160.035 512.486,161.082 514.455,162.489C516.425,163.896 517.941,165.678 519.004,167.835C520.067,169.992 520.598,172.54 520.598,175.479L520.598,196.487C520.598,198.112 520.145,199.441 519.238,200.472C518.332,201.504 517.253,202.395 516.003,203.145C511.939,205.584 506.218,206.803 498.84,206.803C495.526,206.803 492.541,206.49 489.883,205.865C487.226,205.24 484.944,204.302 483.037,203.052C481.13,201.801 479.661,200.207 478.629,198.268C477.597,196.33 477.082,194.079 477.082,191.516C477.082,187.202 478.363,183.888 480.927,181.575C483.49,179.261 487.46,177.823 492.838,177.26L505.123,175.947L505.123,175.291C505.123,173.478 504.326,172.18 502.732,171.399C501.138,170.617 498.84,170.227 495.839,170.227C493.463,170.227 491.149,170.477 488.899,170.977C486.648,171.477 484.616,172.102 482.802,172.853C481.99,172.29 481.302,171.43 480.739,170.273C480.176,169.117 479.895,167.913 479.895,166.663C479.895,165.037 480.286,163.74 481.067,162.771C481.849,161.801 483.053,160.973 484.678,160.285C486.491,159.598 488.633,159.097 491.103,158.785C493.572,158.472 495.901,158.316 498.09,158.316ZM498.84,195.174C499.903,195.174 501.075,195.064 502.357,194.845C503.639,194.626 504.592,194.329 505.217,193.954L505.217,186.451L498.465,187.014C496.714,187.139 495.276,187.514 494.151,188.14C493.025,188.765 492.462,189.703 492.462,190.953C492.462,192.204 492.947,193.22 493.916,194.001C494.885,194.783 496.526,195.174 498.84,195.174ZM556.049,170.883C554.486,170.883 553.001,171.133 551.594,171.633C550.188,172.134 548.968,172.868 547.937,173.837C546.905,174.806 546.077,176.01 545.451,177.448C544.826,178.886 544.513,180.574 544.513,182.512C544.513,186.389 545.623,189.296 547.843,191.235C550.062,193.173 552.767,194.142 555.955,194.142C557.831,194.142 559.457,193.923 560.832,193.485C562.208,193.048 563.427,192.579 564.49,192.079C565.74,192.954 566.678,193.907 567.303,194.939C567.929,195.971 568.241,197.206 568.241,198.644C568.241,201.207 567.022,203.192 564.584,204.599C562.145,206.006 558.769,206.709 554.455,206.709C550.516,206.709 546.952,206.131 543.763,204.974C540.574,203.817 537.839,202.192 535.557,200.097C533.275,198.003 531.509,195.486 530.258,192.548C529.008,189.609 528.382,186.358 528.382,182.794C528.382,178.667 529.054,175.057 530.399,171.962C531.743,168.867 533.572,166.319 535.885,164.318C538.199,162.317 540.871,160.817 543.904,159.816C546.936,158.816 550.141,158.316 553.517,158.316C558.019,158.316 561.489,159.129 563.927,160.754C566.366,162.38 567.585,164.474 567.585,167.038C567.585,168.226 567.303,169.336 566.741,170.367C566.178,171.399 565.522,172.29 564.771,173.04C563.708,172.54 562.427,172.055 560.926,171.586C559.425,171.118 557.8,170.883 556.049,170.883ZM592.157,189.64C592.157,191.266 592.672,192.423 593.704,193.11C594.736,193.798 596.189,194.142 598.065,194.142C599.003,194.142 599.972,194.064 600.973,193.907C601.973,193.751 602.848,193.548 603.599,193.298C604.161,193.986 604.646,194.752 605.052,195.596C605.459,196.44 605.662,197.456 605.662,198.644C605.662,201.02 604.771,202.958 602.989,204.458C601.207,205.959 598.065,206.709 593.563,206.709C588.061,206.709 583.825,205.459 580.855,202.958C577.886,200.457 576.401,196.393 576.401,190.766L576.401,150.625C577.088,150.438 578.073,150.235 579.355,150.016C580.637,149.797 581.997,149.687 583.435,149.687C586.186,149.687 588.327,150.172 589.859,151.141C591.391,152.11 592.157,154.158 592.157,157.284L592.157,163.286L604.443,163.286C604.818,163.974 605.177,164.834 605.521,165.866C605.865,166.897 606.037,168.038 606.037,169.289C606.037,171.477 605.552,173.056 604.583,174.025C603.614,174.994 602.317,175.479 600.691,175.479L592.157,175.479L592.157,189.64ZM684.067,184.294C684.067,187.671 683.488,190.75 682.332,193.532C681.175,196.315 679.502,198.691 677.314,200.66C675.126,202.63 672.469,204.146 669.342,205.209C666.216,206.272 662.684,206.803 658.745,206.803C654.806,206.803 651.273,206.272 648.147,205.209C645.021,204.146 642.363,202.63 640.175,200.66C637.987,198.691 636.314,196.315 635.157,193.532C634.001,190.75 633.422,187.671 633.422,184.294L633.422,148.468C634.11,148.343 635.204,148.171 636.705,147.952C638.205,147.734 639.644,147.624 641.019,147.624C642.457,147.624 643.723,147.734 644.817,147.952C645.912,148.171 646.834,148.562 647.584,149.125C648.334,149.687 648.897,150.469 649.272,151.469C649.647,152.47 649.835,153.783 649.835,155.408L649.835,184.013C649.835,187.014 650.663,189.359 652.32,191.047C653.977,192.735 656.119,193.579 658.745,193.579C661.433,193.579 663.59,192.735 665.216,191.047C666.841,189.359 667.654,187.014 667.654,184.013L667.654,148.468C668.342,148.343 669.436,148.171 670.937,147.952C672.437,147.734 673.875,147.624 675.251,147.624C676.689,147.624 677.955,147.734 679.049,147.952C680.143,148.171 681.066,148.562 681.816,149.125C682.566,149.687 683.129,150.469 683.504,151.469C683.879,152.47 684.067,153.783 684.067,155.408L684.067,184.294ZM712.39,204.927C711.702,205.115 710.624,205.302 709.154,205.49C707.685,205.678 706.231,205.771 704.793,205.771C703.355,205.771 702.089,205.662 700.995,205.443C699.901,205.224 698.979,204.833 698.228,204.271C697.478,203.708 696.915,202.927 696.54,201.926C696.165,200.926 695.977,199.613 695.977,197.987L695.977,148.468C696.665,148.343 697.759,148.171 699.26,147.952C700.761,147.734 702.199,147.624 703.574,147.624C705.012,147.624 706.278,147.734 707.372,147.952C708.467,148.171 709.389,148.562 710.139,149.125C710.889,149.687 711.452,150.469 711.827,151.469C712.202,152.47 712.39,153.783 712.39,155.408L712.39,204.927Z"}),v.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"})),vY=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),bY=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(gY,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(vY,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),jY=Object.freeze(Object.defineProperty({__proto__:null,default:bY},Symbol.toStringTag,{value:"Module"})),yY=()=>{const e={Select:{placeholder:"Pick one"},Button:{color:"green",iconRight:"check"},Spinner:{color:"violet",icon:"star"}};return r.jsxs(Z2.Provider,{...e,children:[r.jsx(rn,{options:[{value:10,text:"ten"},{value:11,text:"eleven"}]}),r.jsxs("div",{className:"flex space middle mar-t-2",children:[r.jsx(B,{text:"OK"}),r.jsx(K,{size:"larger"}),r.jsx(B,{text:"Not OK",color:"red",iconRight:"thumb-down"})]})]})},SY=`import { Theme, Select, Button, Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Theme, Select, Button, Spinner } from '@abw/badger-react-ui

const BorderClassExamples = () => {
  const myTheme = {
    Select: {
      placeholder: 'Pick one'
    },
    Button: {
      color: 'green',
      iconRight: 'check'
    },
    Spinner: {
      color: 'violet',
      icon: 'star'
    }
  }
  return (
    <Theme.Provider {...myTheme}>
      <Select
        options={[
          { value: 10, text: 'ten'    },
          { value: 11, text: 'eleven' },
        ]}
      />
      <div className="flex space middle mar-t-2">
        <Button text="OK"/>
        <Spinner size="larger"/>
        <Button text="Not OK" color="red" iconRight="thumb-down"/>
      </div>
    </Theme.Provider>
  )
}

export default BorderClassExamples`,CY=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Theming"}),r.jsxs("p",{className:"large",children:["The components can be themed using"," ",r.jsx("a",{href:"https://abw.github.io/react-one-louder/",children:"react-one-louder"}),"."]}),r.jsxs("p",{children:["This allows you to define a theme that provides default properties for the various components in the library. Import the ",r.jsx("code",{children:"Theme"})," component and define a"," ",r.jsx("code",{children:"Theme.Provider"})," around your app or a section of it. Pass it your theme configuration as its properties."]}),r.jsxs("p",{children:["Any components rendered inside the provider context will use the default properties that you have defined.  In the example below we set the default ",r.jsx("code",{children:"placeholder"})," for the ",r.jsx("code",{children:"Select"})," ","component, and default ",r.jsx("code",{children:"color"})," and ",r.jsx("code",{children:"iconRight"})," properties for the ",r.jsx("code",{children:"Button"})," component. These are only default values and can be overridden by providing a component with specific values, as shown for the second button in the example."]}),r.jsx(J,{Component:yY,code:SY,expand:!0})]}),_Y=Object.freeze(Object.defineProperty({__proto__:null,default:CY},Symbol.toStringTag,{value:"Module"})),Qd=({border:e})=>{const t=wo(e);return r.jsx("div",{className:t,children:t})},wY=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(Qd,{}),r.jsx(Qd,{border:!0}),r.jsx(Qd,{border:2})]}),TY=`import { borderClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { borderClass } from '@abw/badger-react-ui

const MyComponent = ({ border }) => {
  const cls = borderClass(border)
  return (
    <div className={cls}>
      {cls}
    </div>
  )
}

const BorderClassExamples = () =>
  <div className="grid-1 gap-2">
    <MyComponent/>
    <MyComponent border/>
    <MyComponent border={2}/>
  </div>

export default BorderClassExamples`,Wb=()=>r.jsx(T,{code:"borderClass",Component:wY,Source:TY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"borderClass"})," utility function can be used to construct a CSS class for adding a border.  If the argument is a true value then it will return the ",r.jsx("code",{children:"border"})," CSS class.  If the value is a number then it will add the corresponding ",r.jsx("code",{children:"bdw-N"})," class to set the border width."]})}),EY=Object.freeze(Object.defineProperty({__proto__:null,default:Wb},Symbol.toStringTag,{value:"Module"})),kY=()=>r.jsxs("div",{children:[r.jsx("div",{children:ce("foo","bar","baz")}),r.jsx("div",{children:ce("foo",null,"bar",void 0,"baz")}),r.jsx("div",{children:ce("foo",{active:!1,example:!0})})]}),NY=`import { classes } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { classes } from '@abw/badger-react-ui

const ClassesExamples = () =>
  <div>
    <div>
      { classes('foo', 'bar', 'baz') }
    </div>
    <div>
      { classes('foo', null, 'bar', undefined, 'baz') }
    </div>
    <div>
      { classes('foo', { active: false, example: true })}
    </div>
  </div>

export default ClassesExamples`,Zb=()=>r.jsxs(T,{code:"classes",Component:kY,Source:NY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"classes"})," utility function can be used to construct a single CSS class string from various input values."]}),r.jsx("p",{children:"Any null or undefined values will be ignored. If any argument is an object then the keys in the object will be included if the corresponding value is truthy."})]}),RY=Object.freeze(Object.defineProperty({__proto__:null,default:Zb},Symbol.toStringTag,{value:"Module"})),ra=({color:e})=>{const t=zh(e);return r.jsxs("div",{className:`pad-4 border bdc-50 ${t}`,children:["colorClass: ",t]})},OY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(ra,{}),r.jsx(ra,{color:"red"}),r.jsx(ra,{color:"red-50"}),r.jsx(ra,{color:"red-20-80"}),r.jsx(ra,{color:"red-20-80-80-20"})]}),DY=`import { colorClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { colorClass } from '@abw/badger-react-ui

const MyComponent = ({ color }) => {
  const cls = colorClass(color)
  return (
    <div className={\`pad-4 border bdc-50 \${cls}\`}>
      colorClass: {cls}
    </div>
  )
}

const ColorClassExamples = () =>
  <div className="grid-1 gap-4">
    <MyComponent/>
    <MyComponent color="red"/>
    <MyComponent color="red-50"/>
    <MyComponent color="red-20-80"/>
    <MyComponent color="red-20-80-80-20"/>
  </div>

export default ColorClassExamples`,Kb=()=>r.jsx(T,{code:"colorClass",Component:OY,Source:DY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"colorClass"})," utility function can be used to construct a CSS class for defining colors.  The format for the argument is a color range name optionally followed by one to four color stop numbers, separated by hyphens.  The first number is the foreground color stop, used to add an ",r.jsx("code",{children:"fgc-N"})," CSS class. The second in the background color stop, adding a ",r.jsx("code",{children:"bgc-N"})," class.  The third and fourth numbers are the foreground and background color stops in dark mode, adding "," ",r.jsx("code",{children:"fgd-N"})," and ",r.jsx("code",{children:"bgd-N"})," classes respectively."]})}),LY=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Xd=({gap:e})=>r.jsx("div",{className:ce("tiles",l3(e)),children:["A","B","C","D","E","F","G","H"].map(t=>r.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:t},t))}),BY=()=>r.jsxs("div",{className:"grid-1 gap-6",children:[r.jsx(Xd,{gap:2}),r.jsx(Xd,{gap:[2,4]}),r.jsx(Xd,{gap:"3 1"})]}),$Y=`import { classes, gapClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { classes, gapClass } from '@abw/badger-react-ui

const MyTiles = ({ gap }) =>
  <div className={classes('tiles', gapClass(gap))}>
    { ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(
      letter =>
        <div key={letter} className="surface-3 pad-2 border bdr-1">
          {letter}
        </div>
    )}
  </div>

const GapClassExamples = () =>
  <div className="grid-1 gap-6">
    <MyTiles gap={2}/>
    <MyTiles gap={[2, 4]}/>
    <MyTiles gap="3 1"/>
  </div>

export default GapClassExamples`,Yb=()=>r.jsx(T,{code:"gapClass",Component:BY,Source:$Y,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"gapClass"})," utility function can be used to construct a CSS class for adding gaps between element, e.g. when using flex or grid layout.  A single value can be provided and will be used for both vertical and horizontal gaps.  Or two values can be provided, either as an array or whitespace delimited string, giving different gaps in the vertical and horizontal directions.  The values are multiples of 0.25rem."]})}),AY=Object.freeze(Object.defineProperty({__proto__:null,default:Yb},Symbol.toStringTag,{value:"Module"})),Ao=({margin:e})=>{const t=a3(e);return r.jsx("div",{className:"bgc-50",children:r.jsxs("div",{className:`border bgc-90 ${t}`,children:["marginClass: ",t]})})},MY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ao,{}),r.jsx(Ao,{margin:!0}),r.jsx(Ao,{margin:2}),r.jsx(Ao,{margin:"h-4"}),r.jsx(Ao,{margin:"2 4"}),r.jsx(Ao,{margin:"1 2 3 4"})]}),PY=`import { marginClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { marginClass } from '@abw/badger-react-ui

const MyComponent = ({ margin }) => {
  const cls = marginClass(margin)
  return (
    <div className="bgc-50">
      <div className={\`border bgc-90 \${cls}\`}>
        marginClass: {cls}
      </div>
    </div>
  )
}

const MarginClassExamples = () =>
  <div className="grid-1 gap-4">
    <MyComponent/>
    <MyComponent margin/>
    <MyComponent margin={2}/>
    <MyComponent margin="h-4"/>
    <MyComponent margin="2 4"/>
    <MyComponent margin="1 2 3 4"/>
  </div>

export default MarginClassExamples`,Gb=()=>r.jsx(T,{code:"marginClass",Component:MY,Source:PY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"marginClass"})," utility function can be used to construct a CSS class for adding padding.  It works in the same way as ",r.jsx("code",{children:"paddingClass"}),"."]})}),IY=Object.freeze(Object.defineProperty({__proto__:null,default:Gb},Symbol.toStringTag,{value:"Module"})),Mo=({padding:e})=>{const t=s3(e);return r.jsxs("div",{className:`border ${t}`,children:["paddingClass: ",t]})},zY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Mo,{}),r.jsx(Mo,{padding:!0}),r.jsx(Mo,{padding:2}),r.jsx(Mo,{padding:"h-4"}),r.jsx(Mo,{padding:"2 4"}),r.jsx(Mo,{padding:"1 2 3 4"})]}),FY=`import { paddingClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { paddingClass } from '@abw/badger-react-ui

const MyComponent = ({ padding }) => {
  const cls = paddingClass(padding)
  return (
    <div className={\`border \${cls}\`}>
      paddingClass: {cls}
    </div>
  )
}

const PaddingClassExamples = () =>
  <div className="grid-1 gap-4">
    <MyComponent/>
    <MyComponent padding/>
    <MyComponent padding={2}/>
    <MyComponent padding="h-4"/>
    <MyComponent padding="2 4"/>
    <MyComponent padding="1 2 3 4"/>
  </div>

export default PaddingClassExamples`,qb=()=>r.jsxs(T,{code:"paddingClass",Component:zY,Source:FY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"paddingClass"})," utility function can be used to construct a CSS class for adding padding.  If the value is true then the"," ",r.jsx("code",{children:"pad"})," CSS class will be returned, adding a single unit (0.25rem) of padding to all sides of the element."]}),r.jsxs("p",{children:["If the value contains two whitespace delimited values then they are assumed to be vertical and horizontal padding values and a class of the form ",r.jsx("code",{children:"pad-v-N pad-h-N"})," will be returned."]}),r.jsxs("p",{children:["If the value contains four whitespace delimited values then they are assumed to be padding values for the top, right, bottom and left edges. A CSS class of the form ",r.jsx("code",{children:"pad-t-N pad-r-N pad-b-N pad-l-N"})," will be returned."]}),r.jsxs("p",{children:["In any other case the value will be prepended by ",r.jsx("code",{children:"pad-"}),". A null or undefine value will return nothing."]})]}),UY=Object.freeze(Object.defineProperty({__proto__:null,default:qb},Symbol.toStringTag,{value:"Module"})),mi=({radius:e})=>{const t=Es(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["radiusClass: ",t]})},HY=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(mi,{}),r.jsx(mi,{radius:1}),r.jsx(mi,{radius:2}),r.jsx(mi,{radius:4})]}),VY=`import { radiusClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { radiusClasses } from '@abw/badger-react-ui

const MyComponent = ({ radius }) => {
  const cls = radiusClass(radius)
  return (
    <div className={\`border pad-4 \${cls}\`}>
      radiusClass: {cls}
    </div>
  )
}

const RadiusClassExamples = () =>
  <div className="grid-1 gap-2">
    <MyComponent/>
    <MyComponent radius={1}/>
    <MyComponent radius={2}/>
    <MyComponent radius={4}/>
  </div>

export default RadiusClassExamples`,Qb=()=>r.jsx(T,{code:"radiusClass",Component:HY,Source:VY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radiusClass"})," utility function can be used to construct a CSS class for adding a border radius.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"bdr-N"})," class to set the border radius."]})}),WY=Object.freeze(Object.defineProperty({__proto__:null,default:Qb},Symbol.toStringTag,{value:"Module"})),fi=({shadow:e})=>{const t=Ts(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["shadowClass: ",t]})},ZY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(fi,{}),r.jsx(fi,{shadow:1}),r.jsx(fi,{shadow:2}),r.jsx(fi,{shadow:4})]}),KY=`import { shadowClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { shadowClass } from '@abw/badger-react-ui

const MyComponent = ({ shadow }) => {
  const cls = shadowClass(shadow)
  return (
    <div className={\`border pad-4 \${cls}\`}>
      shadowClass: {cls}
    </div>
  )
}

const ShadowClassExamples = () =>
  <div className="grid-1 gap-4">
    <MyComponent/>
    <MyComponent shadow={1}/>
    <MyComponent shadow={2}/>
    <MyComponent shadow={4}/>
  </div>

export default ShadowClassExamples`,Xb=()=>r.jsx(T,{code:"shadowClass",Component:ZY,Source:KY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadowClass"})," utility function can be used to construct a CSS class for adding a box shadow.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"shadow-N"})," class to set the box shadow."]})}),YY=Object.freeze(Object.defineProperty({__proto__:null,default:Xb},Symbol.toStringTag,{value:"Module"})),xi=e=>{const t=z_(e);return r.jsxs("div",{...t,children:["styleProps: ",JSON.stringify(t)]})},GY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(xi,{}),r.jsx(xi,{size:"large"}),r.jsx(xi,{color:"red-50"}),r.jsx(xi,{className:"my-special-class",color:"red",border:!0,radius:2,shadow:2,padding:"2 4"})]}),qY=`import { styleProps } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { styleProps } from '@abw/badger-react-ui

const MyComponent = props => {
  const sp = styleProps(props)
  return (
    <div {...sp}>
      styleProps: {JSON.stringify(sp)}
    </div>
  )
}

const StylePropsExamples = () =>
  <div className="grid-1 gap-4">
    <MyComponent/>
    <MyComponent size="large"/>
    <MyComponent color="red-50"/>
    <MyComponent
      className="my-special-class"
      color="red"
      border radius={2}
      shadow={2}
      padding="2 4"
    />
  </div>

export default StylePropsExamples`,Jb=()=>r.jsxs(T,{code:"styleProps",Component:GY,Source:qY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"styleProps"})," utility function can be used to extract any of the above style properties and generate the corresponding CSS class as the ",r.jsx("code",{children:"className"})," property.  Any other properties will be passed through."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"padding"})," and ",r.jsx("code",{children:"margin"})," properties may be abbreviated to ",r.jsx("code",{children:"pad"})," and ",r.jsx("code",{children:"mar"})," respectively."]})]}),QY=Object.freeze(Object.defineProperty({__proto__:null,default:Jb},Symbol.toStringTag,{value:"Module"})),XY=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"CSS Classes"}),r.jsxs(De,{tocName:"classes",children:[r.jsx(Zb,{}),r.jsx(Wb,{}),r.jsx(Qb,{}),r.jsx(Xb,{}),r.jsx(Kb,{}),r.jsx(qb,{}),r.jsx(Gb,{}),r.jsx(Yb,{}),r.jsx(Jb,{})]})]}),JY=Object.freeze(Object.defineProperty({__proto__:null,default:XY},Symbol.toStringTag,{value:"Module"})),eG=()=>{const e=Fc("unique-key"),[t,n]=V.useState(e.get("form-values")),[o,s]=V.useState(),a=c=>{s(c),zr(3e3).then(()=>s(null))},l=c=>(e.set("form-values",c),a("Form values have been stored in local storage"),{ok:!0}),i=()=>{e.delete("form-values"),n(null),a("Form values have been removed from local storage")};return r.jsxs("div",{children:[r.jsxs(lr,{values:t,onSubmit:l,onReset:i,children:[r.jsx(at,{name:"name",label:"Your name"}),r.jsx(at,{name:"email",label:"Your email address"}),r.jsxs("div",{className:"flex space",children:[r.jsx(m0,{color:"grey outline",text:"Clear",iconRight:"cross"}),r.jsx(wl,{color:"green",text:"Save",iconRight:"check"})]})]}),o&&r.jsx(es,{text:o,className:"mar-t-4"})]})},tG=`import { Storage, Form, Field, Reset, Submit, Success } from '@/src/index.jsx'

/* START */
import React from 'react'
import { sleep } from '@abw/badger-utils'
// PRETEND: import { Storage, Form, Field, Submit, Success } from '@abw/badger-react-ui

const StorageExample = () => {
  // create a store and load any existing values
  const store  = Storage('unique-key')
  const [values, setValues] = React.useState(
    store.get('form-values')
  )

  // display a message for 3 seconds
  const [message, setMessage] = React.useState()
  const flashMessage = text => {
    setMessage(text)
    sleep(3000).then( () => setMessage(null) )
  }

  // store data when form is submitted
  const onSubmit = values => {
    store.set('form-values', values)
    flashMessage('Form values have been stored in local storage')
    return { ok: true }
  }

  // clear data when form is reset
  const onReset = () => {
    store.delete('form-values')
    setValues(null)
    flashMessage('Form values have been removed from local storage')
  }

  return (
    <div>
      <Form values={values} onSubmit={onSubmit} onReset={onReset}>
        <Field name="name" label="Your name"/>
        <Field name="email" label="Your email address"/>
        <div className="flex space">
          <Reset color="grey outline" text="Clear" iconRight="cross"/>
          <Submit color="green" text="Save" iconRight="check"/>
        </div>
      </Form>
      { message && <Success text={message} className="mar-t-4"/>}
    </div>
  )
}

export default StorageExample`,e6=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Storage"})," utility can be used to manage local storage to persist UI options or other data."]}),r.jsxs("p",{children:["Call the ",r.jsx("code",{children:"Storage"})," function with a unique key to create a local store.  Then call the ",r.jsx("code",{children:"get"})," method on that object to fetch an item from the store, ",r.jsx("code",{children:"set"})," to set the value for an item or ",r.jsx("code",{children:"delete"})," to delete an item from the store."]}),r.jsx("p",{children:"Store values can be complex data which will be automatically converted to and from JSON."}),r.jsx("p",{children:"Enter some details in the form below and click on the save button. The form values will then be stored in local storage.  Reload the browser page and you should see the values persist."}),r.jsx(J,{Component:eG,code:tG,expand:!0})]}),nG=Object.freeze(Object.defineProperty({__proto__:null,default:e6},Symbol.toStringTag,{value:"Module"})),rG=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Storage"}),r.jsx(e6,{})]}),oG=Object.freeze(Object.defineProperty({__proto__:null,default:rG},Symbol.toStringTag,{value:"Module"})),t6=({path:e,onClick:t,width:n=512,height:o=512,style:s,className:a="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:a,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),sG=e=>r.jsx(t6,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),n6=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:s,captionStyle:a,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:s,className:o}),!!t&&r.jsx("div",{className:i,style:a,children:t})]}),aG=e=>{const{setDark:t}=Rl();return r.jsx(n6,{Icon:sG,onClick:t,...e})},lG=e=>r.jsx(t6,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),iG=e=>{const{setLight:t}=Rl();return r.jsx(n6,{Icon:lG,onClick:t,...e})},cG=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:s}=Rl();return n?r.jsx(iG,{onClick:s,...e}):r.jsx(aG,{onClick:o,...t})},r6=v.createContext(),Rl=()=>v.useContext(r6),gi="dark",Jd="light",dG="(prefers-color-scheme: dark)",eu=()=>!1,uG=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},pG=()=>({matches:eu,addEventListener:eu,removeEventListener:eu}),o6=typeof window<"u",tu=o6&&window.localStorage?window.localStorage:uG(),hG=o6&&window.matchMedia?e=>window.matchMedia(e):pG,hp=hG(dG),mG=()=>hp.matches,fG=e=>e.split(" "),G1=(e,t="")=>`${e} ${t}`,xG=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?tu.getItem(e):null,[s,a=""]=o?fG(o):[mG(),null],[l,i]=v.useState(s===gi),[c,d]=v.useState(a||t),u=j=>{i(j),e&&tu.setItem(e,G1(j?gi:Jd,c))},p=j=>{d(j),e&&tu.setItem(e,G1(l?gi:Jd,j))},f=j=>u(j.matches);v.useEffect(()=>(hp.addEventListener("change",f),()=>hp.removeEventListener("change",f)),[]);const b={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?gi:Jd,variant:c,setVariant:p};return r.jsx(r6.Provider,{value:b,children:n})},s6="1.0.0",gG="2024-04-11",q1="sidebar",vG="no-sidebar",bG=()=>{const{variant:e,setVariant:t}=Rl();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(re,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===q1?vG:q1)}),r.jsx(jn,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",s6]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(re,{name:"github",className:"mar-r-4"})}),r.jsx(cG,{})]})]})})},jG=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",s6,r.jsx("br",{}),gG]})]})}),yG=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var s,a;(a=t.current)==null||a.scrollTo({top:((s=o.ref.current)==null?void 0:s.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),SG=Tl.Consumer(yG),CG=({title:e,path:t,items:n,tocs:o})=>{const s=Nl(),a=t&&s.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:a,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=s.pathname===l.to;return r.jsxs("li",{children:[r.jsx(jn,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(SG,{toc:o[l.tocName]})]},l.to)})})]})},oa=Tl.Consumer(CG),_G={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},wG={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/badge",text:"Badge",tocName:"badge"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"},{to:"/components/tabset",text:"Tabset",tocName:"tabset"},{to:"/components/tiles",text:"Tiles",tocName:"tiles"},{to:"/components/toggle",text:"Toggle",tocName:"toggle"}]},TG={title:"Utilities",path:"/utilities",items:[{to:"/utilities/classes",text:"CSS Classes",tocName:"classes"},{to:"/utilities/storage",text:"Storage",tocName:"storage"}]},EG={title:"Hooks",path:"/hooks",items:[{to:"/hooks/useComplexState",text:"useComplexState",tocName:"useComplexState"},{to:"/hooks/useRenderCount",text:"useRenderCount",tocName:"useRenderCount"}]},kG={title:"Theming",path:"/theming",items:[{to:"/theming",text:"It's One Louder",tocName:"theming"}]},NG=()=>r.jsxs(r.Fragment,{children:[r.jsx(oa,{..._G}),r.jsx(oa,{...wG}),r.jsx(oa,{...TG}),r.jsx(oa,{...EG}),r.jsx(oa,{...kG})]});function RG(){const{pathname:e}=Ps();return v.useEffect(()=>OG(document.getElementById("content")),[e]),null}function OG(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const DG=({contentRef:e})=>{const{theme:t,variant:n}=Rl();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(bG,{}),r.jsxs("div",{id:"app",children:[r.jsx(RG,{}),r.jsx("aside",{children:r.jsx(NG,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(HA,{})})]}),r.jsx(jG,{})]})},LG=Tl.Consumer(DG),BG=/\/_layout$/,$G=/\/_examples\//,AG=MG(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":XO,"../pages/components/alert/_examples/Error/index.jsx":oD,"../pages/components/alert/_examples/Info/index.jsx":lD,"../pages/components/alert/_examples/Success/index.jsx":dD,"../pages/components/alert/_examples/Warning/index.jsx":hD,"../pages/components/alert/_examples/border/index.jsx":xD,"../pages/components/alert/_examples/className/index.jsx":bD,"../pages/components/alert/_examples/color/index.jsx":SD,"../pages/components/alert/_examples/dismissable/index.jsx":wD,"../pages/components/alert/_examples/headIcon/index.jsx":kD,"../pages/components/alert/_examples/headline/index.jsx":OD,"../pages/components/alert/_examples/icon/index.jsx":BD,"../pages/components/alert/_examples/onDismiss/index.jsx":MD,"../pages/components/alert/_examples/radius/index.jsx":zD,"../pages/components/alert/_examples/revealable/index.jsx":HD,"../pages/components/alert/_examples/revealed/index.jsx":ZD,"../pages/components/alert/_examples/shadow/index.jsx":GD,"../pages/components/alert/_examples/size/index.jsx":XD,"../pages/components/alert/_examples/stripe/index.jsx":tL,"../pages/components/alert/_examples/text/index.jsx":oL,"../pages/components/alert/_examples/title/index.jsx":lL,"../pages/components/alert/_examples/type/index.jsx":dL,"../pages/components/alert/index.jsx":hL,"../pages/components/badge/_examples/Badge/index.jsx":xL,"../pages/components/badge/_examples/Content/index.jsx":bL,"../pages/components/badge/_examples/border/index.jsx":SL,"../pages/components/badge/_examples/className/index.jsx":wL,"../pages/components/badge/_examples/color/index.jsx":kL,"../pages/components/badge/_examples/icon/index.jsx":OL,"../pages/components/badge/_examples/iconLeft/index.jsx":BL,"../pages/components/badge/_examples/iconRight/index.jsx":ML,"../pages/components/badge/_examples/radius/index.jsx":zL,"../pages/components/badge/_examples/shadow/index.jsx":HL,"../pages/components/badge/_examples/size/index.jsx":ZL,"../pages/components/badge/_examples/tag/index.jsx":GL,"../pages/components/badge/_examples/text/index.jsx":XL,"../pages/components/badge/_examples/tooltip/index.jsx":tB,"../pages/components/badge/index.jsx":rB,"../pages/components/button/_examples/Button/index.jsx":aB,"../pages/components/button/_examples/Content/index.jsx":cB,"../pages/components/button/_examples/bare/index.jsx":pB,"../pages/components/button/_examples/border/index.jsx":fB,"../pages/components/button/_examples/bright/index.jsx":vB,"../pages/components/button/_examples/className/index.jsx":yB,"../pages/components/button/_examples/color/index.jsx":_B,"../pages/components/button/_examples/dark/index.jsx":EB,"../pages/components/button/_examples/disabled/index.jsx":RB,"../pages/components/button/_examples/icon/index.jsx":LB,"../pages/components/button/_examples/iconLeft/index.jsx":AB,"../pages/components/button/_examples/iconRight/index.jsx":IB,"../pages/components/button/_examples/label/index.jsx":UB,"../pages/components/button/_examples/onClick/index.jsx":WB,"../pages/components/button/_examples/outline/index.jsx":YB,"../pages/components/button/_examples/radius/index.jsx":QB,"../pages/components/button/_examples/shaded/index.jsx":e$,"../pages/components/button/_examples/shadow/index.jsx":r$,"../pages/components/button/_examples/size/index.jsx":a$,"../pages/components/button/_examples/text/index.jsx":c$,"../pages/components/button/_examples/tooltip/index.jsx":p$,"../pages/components/button/_examples/type/index.jsx":f$,"../pages/components/button/index.jsx":g$,"../pages/components/buttons/_examples/Button/index.jsx":y$,"../pages/components/buttons/_examples/Buttons/index.jsx":_$,"../pages/components/buttons/_examples/buttonClass/index.jsx":E$,"../pages/components/buttons/_examples/buttonsProp/index.jsx":R$,"../pages/components/buttons/_examples/className/index.jsx":L$,"../pages/components/buttons/_examples/outline/index.jsx":mM,"../pages/components/buttons/index.jsx":xM,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":bM,"../pages/components/checkbox/_examples/Overview/index.jsx":SM,"../pages/components/checkbox/_examples/border/index.jsx":wM,"../pages/components/checkbox/_examples/checked/index.jsx":kM,"../pages/components/checkbox/_examples/checkedText/index.jsx":OM,"../pages/components/checkbox/_examples/className/index.jsx":BM,"../pages/components/checkbox/_examples/disabled/index.jsx":MM,"../pages/components/checkbox/_examples/onChange/index.jsx":zM,"../pages/components/checkbox/_examples/text/index.jsx":HM,"../pages/components/checkbox/index.jsx":WM,"../pages/components/confirm/_examples/Overview/index.jsx":YM,"../pages/components/confirm/_examples/cancel/index.jsx":QM,"../pages/components/confirm/_examples/cancelProps/index.jsx":eP,"../pages/components/confirm/_examples/className/index.jsx":rP,"../pages/components/confirm/_examples/color/index.jsx":aP,"../pages/components/confirm/_examples/confirm/index.jsx":cP,"../pages/components/confirm/_examples/confirmProps/index.jsx":pP,"../pages/components/confirm/_examples/iconRight/index.jsx":fP,"../pages/components/confirm/_examples/onClick/index.jsx":vP,"../pages/components/confirm/_examples/text/index.jsx":yP,"../pages/components/confirm/index.jsx":CP,"../pages/components/datatable/_examples/Datatable/index.jsx":TP,"../pages/components/datatable/_examples/color/index.jsx":NP,"../pages/components/datatable/_examples/columns/className/index.jsx":LP,"../pages/components/datatable/_examples/columns/display/index.jsx":AP,"../pages/components/datatable/_examples/columns/index.jsx":KP,"../pages/components/datatable/_examples/columns/label/index.jsx":qP,"../pages/components/datatable/_examples/columns/type/index.jsx":JP,"../pages/components/datatable/_examples/onRowClick/index.jsx":nI,"../pages/components/datatable/_examples/pager/index.jsx":sI,"../pages/components/datatable/_examples/rows/index.jsx":lI,"../pages/components/datatable/_examples/storageKey/index.jsx":dI,"../pages/components/datatable/index.jsx":pI,"../pages/components/details/_examples/Details/index.jsx":fI,"../pages/components/details/_examples/border/index.jsx":vI,"../pages/components/details/_examples/color/index.jsx":yI,"../pages/components/details/_examples/content/index.jsx":_I,"../pages/components/details/_examples/lined/index.jsx":EI,"../pages/components/details/_examples/open/index.jsx":RI,"../pages/components/details/_examples/radius/index.jsx":LI,"../pages/components/details/_examples/shaded/index.jsx":AI,"../pages/components/details/_examples/shadow/index.jsx":II,"../pages/components/details/_examples/summary/index.jsx":UI,"../pages/components/details/index.jsx":VI,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":KI,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":qI,"../pages/components/dropdown-menu/_examples/options/index.jsx":lz,"../pages/components/dropdown-menu/index.jsx":cz,"../pages/components/dropdown/_examples/Dropdown/index.jsx":pz,"../pages/components/dropdown/_examples/content/index.jsx":fz,"../pages/components/dropdown/_examples/iconLeft/index.jsx":vz,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":yz,"../pages/components/dropdown/_examples/iconRight/index.jsx":_z,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":Ez,"../pages/components/dropdown/_examples/openOnHover/index.jsx":Rz,"../pages/components/dropdown/_examples/right/index.jsx":Lz,"../pages/components/dropdown/_examples/text/index.jsx":Az,"../pages/components/dropdown/_examples/wide/index.jsx":Iz,"../pages/components/dropdown/index.jsx":Fz,"../pages/components/form/_examples/search/index.jsx":qz,"../pages/components/form/_examples/submitting/custom.jsx":Xz,"../pages/components/form/_examples/submitting/defaults.jsx":eF,"../pages/components/form/_examples/submitting/index.jsx":rF,"../pages/components/form/_examples/uiselect/index.jsx":dF,"../pages/components/form/index.jsx":vF,"../pages/components/icon/_examples/Icon/index.jsx":TF,"../pages/components/icon/_examples/IconLibrary/index.jsx":EF,"../pages/components/icon/_examples/className/index.jsx":RF,"../pages/components/icon/_examples/color/index.jsx":LF,"../pages/components/icon/_examples/name/index.jsx":AF,"../pages/components/icon/_examples/path/index.jsx":IF,"../pages/components/icon/_examples/size/index.jsx":UF,"../pages/components/icon/index.jsx":VF,"../pages/components/modal/_examples/Modal/index.jsx":KF,"../pages/components/modal/_examples/ModalState/index.jsx":qF,"../pages/components/modal/_examples/className/index.jsx":JF,"../pages/components/modal/_examples/close/index.jsx":nU,"../pages/components/modal/_examples/closeIcon/index.jsx":sU,"../pages/components/modal/_examples/footer/index.jsx":iU,"../pages/components/modal/_examples/header/index.jsx":uU,"../pages/components/modal/_examples/text/index.jsx":mU,"../pages/components/modal/_examples/title/index.jsx":gU,"../pages/components/modal/index.jsx":bU,"../pages/components/overlay/_examples/Overlay/index.jsx":SU,"../pages/components/overlay/_examples/OverlayState/index.jsx":wU,"../pages/components/overlay/_examples/className/index.jsx":NU,"../pages/components/overlay/_examples/custom/index.jsx":DU,"../pages/components/overlay/_examples/fixed/index.jsx":$U,"../pages/components/overlay/_examples/theme/index.jsx":zU,"../pages/components/overlay/index.jsx":UU,"../pages/components/pager/_examples/Context/index.jsx":KU,"../pages/components/pager/_examples/Pager/index.jsx":qU,"../pages/components/pager/_examples/className/index.jsx":JU,"../pages/components/pager/_examples/color/index.jsx":nH,"../pages/components/pager/_examples/icons/index.jsx":sH,"../pages/components/pager/_examples/nextIcon/index.jsx":cH,"../pages/components/pager/_examples/showFirstLast/index.jsx":pH,"../pages/components/pager/_examples/size/index.jsx":fH,"../pages/components/pager/index.jsx":gH,"../pages/components/radio/_examples/Overview/index.jsx":jH,"../pages/components/radio/_examples/border/index.jsx":CH,"../pages/components/radio/_examples/className/index.jsx":TH,"../pages/components/radio/_examples/disabled/index.jsx":NH,"../pages/components/radio/_examples/inline/index.jsx":DH,"../pages/components/radio/_examples/name/index.jsx":$H,"../pages/components/radio/_examples/onChange/index.jsx":PH,"../pages/components/radio/_examples/options/index.jsx":FH,"../pages/components/radio/_examples/value/index.jsx":VH,"../pages/components/radio/index.jsx":ZH,"../pages/components/search/_examples/Search/index.jsx":qH,"../pages/components/search/_examples/clear/index.jsx":eV,"../pages/components/search/_examples/displayResult/index.jsx":oV,"../pages/components/search/_examples/displayValue/index.jsx":iV,"../pages/components/search/_examples/onSearch/index.jsx":pV,"../pages/components/search/_examples/onSelect/index.jsx":xV,"../pages/components/search/_examples/reset/index.jsx":jV,"../pages/components/search/index.jsx":SV,"../pages/components/select/_examples/Select/index.jsx":TV,"../pages/components/select/_examples/displayOption/index.jsx":RV,"../pages/components/select/_examples/displayValue/index.jsx":BV,"../pages/components/select/_examples/options/index.jsx":PV,"../pages/components/select/_examples/search/index.jsx":WV,"../pages/components/select/_examples/searchOptions/index.jsx":QV,"../pages/components/select/_examples/validOption/index.jsx":tW,"../pages/components/select/_examples/value/index.jsx":iW,"../pages/components/select/index.jsx":dW,"../pages/components/sortable/_examples/Horizontal/index.jsx":hW,"../pages/components/sortable/_examples/Sortable/index.jsx":xW,"../pages/components/sortable/_examples/Vertical/index.jsx":bW,"../pages/components/sortable/index.jsx":yW,"../pages/components/spinner/_examples/Spinner/index.jsx":_W,"../pages/components/spinner/_examples/bgColor/index.jsx":EW,"../pages/components/spinner/_examples/bgFill/index.jsx":RW,"../pages/components/spinner/_examples/bgFillStop/index.jsx":LW,"../pages/components/spinner/_examples/bgIcon/index.jsx":AW,"../pages/components/spinner/_examples/bgStroke/index.jsx":IW,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":UW,"../pages/components/spinner/_examples/color/index.jsx":WW,"../pages/components/spinner/_examples/fill/index.jsx":YW,"../pages/components/spinner/_examples/fillStop/index.jsx":QW,"../pages/components/spinner/_examples/icon/index.jsx":eZ,"../pages/components/spinner/_examples/reverse/index.jsx":rZ,"../pages/components/spinner/_examples/shrink/index.jsx":aZ,"../pages/components/spinner/_examples/size/index.jsx":cZ,"../pages/components/spinner/_examples/stroke/index.jsx":pZ,"../pages/components/spinner/_examples/strokeStop/index.jsx":fZ,"../pages/components/spinner/index.jsx":gZ,"../pages/components/tabset/_examples/Tabset/index.jsx":jZ,"../pages/components/tabset/_examples/center/index.jsx":CZ,"../pages/components/tabset/_examples/color/index.jsx":TZ,"../pages/components/tabset/_examples/lined/index.jsx":NZ,"../pages/components/tabset/_examples/right/index.jsx":DZ,"../pages/components/tabset/_examples/size/index.jsx":$Z,"../pages/components/tabset/_examples/solid/index.jsx":PZ,"../pages/components/tabset/_examples/storageKey/index.jsx":FZ,"../pages/components/tabset/_examples/tabs/index.jsx":WZ,"../pages/components/tabset/index.jsx":KZ,"../pages/components/tiles/_examples/Tiles/index.jsx":qZ,"../pages/components/tiles/_examples/cols/index.jsx":JZ,"../pages/components/tiles/_examples/gap/index.jsx":nK,"../pages/components/tiles/_examples/minWidth/index.jsx":sK,"../pages/components/tiles/_examples/rows/index.jsx":iK,"../pages/components/tiles/index.jsx":dK,"../pages/components/toggle/_examples/Toggle/index.jsx":hK,"../pages/components/toggle/_examples/ToggleState/index.jsx":xK,"../pages/components/toggle/_examples/activeProps/index.jsx":bK,"../pages/components/toggle/_examples/color/index.jsx":SK,"../pages/components/toggle/_examples/findSelectedIndex/index.jsx":wK,"../pages/components/toggle/_examples/inactiveProps/index.jsx":kK,"../pages/components/toggle/_examples/onSelect/index.jsx":OK,"../pages/components/toggle/_examples/options/index.jsx":BK,"../pages/components/toggle/_examples/selected/index.jsx":MK,"../pages/components/toggle/_examples/size/index.jsx":zK,"../pages/components/toggle/_examples/storageKey/index.jsx":VK,"../pages/components/toggle/_examples/useToggle/index.jsx":KK,"../pages/components/toggle/index.jsx":GK,"../pages/getting-started/installation.jsx":nY,"../pages/hooks/useComplexState/_examples/functions/index.jsx":sY,"../pages/hooks/useComplexState/_examples/onChange/index.jsx":iY,"../pages/hooks/useComplexState/_examples/useComplexState.jsx":cY,"../pages/hooks/useComplexState/index.jsx":pY,"../pages/hooks/useRenderCount/_examples/useRenderCount.jsx":hY,"../pages/hooks/useRenderCount/index.jsx":xY,"../pages/index.jsx":jY,"../pages/theming/index.jsx":_Y,"../pages/utilities/classes/_examples/borderClass/index.jsx":EY,"../pages/utilities/classes/_examples/classes/index.jsx":RY,"../pages/utilities/classes/_examples/colorClass/index.jsx":LY,"../pages/utilities/classes/_examples/gapClass/index.jsx":AY,"../pages/utilities/classes/_examples/marginClass/index.jsx":IY,"../pages/utilities/classes/_examples/paddingClass/index.jsx":UY,"../pages/utilities/classes/_examples/radiusClass/index.jsx":WY,"../pages/utilities/classes/_examples/shadowClass/index.jsx":YY,"../pages/utilities/classes/_examples/styleProps/index.jsx":QY,"../pages/utilities/classes/index.jsx":JY,"../pages/utilities/storage/_examples/Storage/index.jsx":nG,"../pages/utilities/storage/index.jsx":oG}));function MG(e){const n=Object.entries(e).map(PG).filter(s=>!s.path.match($G)).reduce((s,a)=>(s[a.path]=a,s),{}),o=Object.keys(n).filter(s=>s.match(BG)).sort((s,a)=>a.length-s.length);for(let s of o){const a=n[s];delete n[s];const l=s.replace(/_layout$/,""),i=l.length;a.path=l,a.children=[];const c=n[l];c&&(delete c.path,c.index=!0,a.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",a.children.push(p)}n[l]=a}return Object.values(n)}function PG([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const IG=qA([{path:"/",element:r.jsx(LG,{}),children:AG}],{basename:"/badger-react-ui"});nu.createRoot(document.getElementById("root")).render(r.jsx(V.StrictMode,{children:r.jsx(xG,{storageKey:"theme",children:r.jsx(Tl.Provider,{children:r.jsx(oM,{router:IG})})})}));
