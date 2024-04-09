var Qb=Object.defineProperty;var Xb=(e,t,n)=>t in e?Qb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>(Xb(e,typeof t!="symbol"?t+"":t,n),n);function K1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Y1={exports:{}},fc={},G1={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),Jb=Symbol.for("react.portal"),e6=Symbol.for("react.fragment"),t6=Symbol.for("react.strict_mode"),n6=Symbol.for("react.profiler"),r6=Symbol.for("react.provider"),o6=Symbol.for("react.context"),s6=Symbol.for("react.forward_ref"),a6=Symbol.for("react.suspense"),l6=Symbol.for("react.memo"),i6=Symbol.for("react.lazy"),sm=Symbol.iterator;function c6(e){return e===null||typeof e!="object"?null:(e=sm&&e[sm]||e["@@iterator"],typeof e=="function"?e:null)}var q1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q1=Object.assign,X1={};function js(e,t,n){this.props=e,this.context=t,this.refs=X1,this.updater=n||q1}js.prototype.isReactComponent={};js.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};js.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function J1(){}J1.prototype=js.prototype;function dp(e,t,n){this.props=e,this.context=t,this.refs=X1,this.updater=n||q1}var up=dp.prototype=new J1;up.constructor=dp;Q1(up,js.prototype);up.isPureReactComponent=!0;var am=Array.isArray,ex=Object.prototype.hasOwnProperty,pp={current:null},tx={key:!0,ref:!0,__self:!0,__source:!0};function nx(e,t,n){var o,s={},a=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)ex.call(t,o)&&!tx.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)s[o]===void 0&&(s[o]=i[o]);return{$$typeof:tl,type:e,key:a,ref:l,props:s,_owner:pp.current}}function d6(e,t){return{$$typeof:tl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hp(e){return typeof e=="object"&&e!==null&&e.$$typeof===tl}function u6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lm=/\/+/g;function sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u6(""+e.key):t.toString(36)}function xi(e,t,n,o,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case tl:case Jb:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+sd(l,0):o,am(s)?(n="",e!=null&&(n=e.replace(lm,"$&/")+"/"),xi(s,t,n,"",function(d){return d})):s!=null&&(hp(s)&&(s=d6(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(lm,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=o===""?".":o+":",am(e))for(var i=0;i<e.length;i++){a=e[i];var c=o+sd(a,i);l+=xi(a,t,n,c,s)}else if(c=c6(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=o+sd(a,i++),l+=xi(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ml(e,t,n){if(e==null)return e;var o=[],s=0;return xi(e,o,"","",function(a){return t.call(n,a,s++)}),o}function p6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},gi={transition:null},h6={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:gi,ReactCurrentOwner:pp};me.Children={map:Ml,forEach:function(e,t,n){Ml(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ml(e,function(){t++}),t},toArray:function(e){return Ml(e,function(t){return t})||[]},only:function(e){if(!hp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=js;me.Fragment=e6;me.Profiler=n6;me.PureComponent=dp;me.StrictMode=t6;me.Suspense=a6;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h6;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Q1({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=pp.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)ex.call(t,c)&&!tx.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:tl,type:e.type,key:s,ref:a,props:o,_owner:l}};me.createContext=function(e){return e={$$typeof:o6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r6,_context:e},e.Consumer=e};me.createElement=nx;me.createFactory=function(e){var t=nx.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:s6,render:e}};me.isValidElement=hp;me.lazy=function(e){return{$$typeof:i6,_payload:{_status:-1,_result:e},_init:p6}};me.memo=function(e,t){return{$$typeof:l6,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=gi.transition;gi.transition={};try{e()}finally{gi.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return yt.current.useCallback(e,t)};me.useContext=function(e){return yt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};me.useEffect=function(e,t){return yt.current.useEffect(e,t)};me.useId=function(){return yt.current.useId()};me.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return yt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};me.useRef=function(e){return yt.current.useRef(e)};me.useState=function(e){return yt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return yt.current.useTransition()};me.version="18.2.0";G1.exports=me;var v=G1.exports;const V=nr(v),m6=K1({__proto__:null,default:V},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f6=v,x6=Symbol.for("react.element"),g6=Symbol.for("react.fragment"),v6=Object.prototype.hasOwnProperty,b6=f6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j6={key:!0,ref:!0,__self:!0,__source:!0};function rx(e,t,n){var o,s={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)v6.call(t,o)&&!j6.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:x6,type:e,key:a,ref:l,props:s,_owner:b6.current}}fc.Fragment=g6;fc.jsx=rx;fc.jsxs=rx;Y1.exports=fc;var r=Y1.exports,Jd={},ox={exports:{}},Ht={},sx={exports:{}},ax={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,P){var I=$.length;$.push(P);e:for(;0<I;){var W=I-1>>>1,Y=$[W];if(0<s(Y,P))$[W]=P,$[I]=Y,I=W;else break e}}function n($){return $.length===0?null:$[0]}function o($){if($.length===0)return null;var P=$[0],I=$.pop();if(I!==P){$[0]=I;e:for(var W=0,Y=$.length,Te=Y>>>1;W<Te;){var ce=2*(W+1)-1,Se=$[ce],ie=ce+1,Le=$[ie];if(0>s(Se,I))ie<Y&&0>s(Le,Se)?($[W]=Le,$[ie]=I,W=ie):($[W]=Se,$[ce]=I,W=ce);else if(ie<Y&&0>s(Le,I))$[W]=Le,$[ie]=I,W=ie;else break e}}return P}function s($,P){var I=$.sortIndex-P.sortIndex;return I!==0?I:$.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,f=3,b=!1,j=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m($){for(var P=n(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=$)o(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function S($){if(y=!1,m($),!j)if(n(c)!==null)j=!0,je(C);else{var P=n(d);P!==null&&X(S,P.startTime-$)}}function C($,P){j=!1,y&&(y=!1,g(k),k=-1),b=!0;var I=f;try{for(m(P),p=n(c);p!==null&&(!(p.expirationTime>P)||$&&!D());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var Y=W(p.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(c)&&o(c),m(P)}else o(c);p=n(c)}if(p!==null)var Te=!0;else{var ce=n(d);ce!==null&&X(S,ce.startTime-P),Te=!1}return Te}finally{p=null,f=I,b=!1}}var x=!1,_=null,k=-1,N=5,O=-1;function D(){return!(e.unstable_now()-O<N)}function U(){if(_!==null){var $=e.unstable_now();O=$;var P=!0;try{P=_(!0,$)}finally{P?Z():(x=!1,_=null)}}else x=!1}var Z;if(typeof h=="function")Z=function(){h(U)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,we=te.port2;te.port1.onmessage=U,Z=function(){we.postMessage(null)}}else Z=function(){w(U,0)};function je($){_=$,x||(x=!0,Z())}function X($,P){k=w(function(){$(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){j||b||(j=!0,je(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var I=f;f=P;try{return $()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,P){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var I=f;f=$;try{return P()}finally{f=I}},e.unstable_scheduleCallback=function($,P,I){var W=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,$){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=I+Y,$={id:u++,callback:P,priorityLevel:$,startTime:I,expirationTime:Y,sortIndex:-1},I>W?($.sortIndex=I,t(d,$),n(c)===null&&$===n(d)&&(y?(g(k),k=-1):y=!0,X(S,I-W))):($.sortIndex=Y,t(c,$),j||b||(j=!0,je(C))),$},e.unstable_shouldYield=D,e.unstable_wrapCallback=function($){var P=f;return function(){var I=f;f=P;try{return $.apply(this,arguments)}finally{f=I}}}})(ax);sx.exports=ax;var y6=sx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=v,Ut=y6;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ix=new Set,Na={};function vo(e,t){us(e,t),us(e+"Capture",t)}function us(e,t){for(Na[e]=t,e=0;e<t.length;e++)ix.add(t[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=Object.prototype.hasOwnProperty,S6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,im={},cm={};function C6(e){return eu.call(cm,e)?!0:eu.call(im,e)?!1:S6.test(e)?cm[e]=!0:(im[e]=!0,!1)}function _6(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w6(e,t,n,o){if(t===null||typeof t>"u"||_6(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,n,o,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function fp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mp,fp);ct[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mp,fp);ct[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mp,fp);ct[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function xp(e,t,n,o){var s=ct.hasOwnProperty(t)?ct[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w6(t,n,s,o)&&(n=null),o||s===null?C6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var rr=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),zo=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),cx=Symbol.for("react.provider"),dx=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),bp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),ux=Symbol.for("react.offscreen"),dm=Symbol.iterator;function zs(e){return e===null||typeof e!="object"?null:(e=dm&&e[dm]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,ad;function ra(e){if(ad===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ad=t&&t[1]||""}return`
`+ad+e}var ld=!1;function id(e,t){if(!e||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=o.stack.split(`
`),l=s.length-1,i=a.length-1;1<=l&&0<=i&&s[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==a[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ra(e):""}function T6(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=id(e.type,!1),e;case 11:return e=id(e.type.render,!1),e;case 1:return e=id(e.type,!0),e;default:return""}}function ou(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fo:return"Fragment";case zo:return"Portal";case tu:return"Profiler";case gp:return"StrictMode";case nu:return"Suspense";case ru:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dx:return(e.displayName||"Context")+".Consumer";case cx:return(e._context.displayName||"Context")+".Provider";case vp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bp:return t=e.displayName||null,t!==null?t:ou(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return ou(e(t))}catch{}}return null}function E6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(t);case 8:return t===gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function px(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k6(e){var t=px(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Il(e){e._valueTracker||(e._valueTracker=k6(e))}function hx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=px(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function su(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function um(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mx(e,t){t=t.checked,t!=null&&xp(e,"checked",t,!1)}function au(e,t){mx(e,t);var n=Rr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lu(e,t.type,n):t.hasOwnProperty("defaultValue")&&lu(e,t.type,Rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lu(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function rs(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Rr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function iu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(oa(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rr(n)}}function fx(e,t){var n=Rr(t.value),o=Rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function mm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zl,gx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ra(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N6=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(e){N6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ma[t]=ma[e]})});function vx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ma.hasOwnProperty(e)&&ma[e]?(""+t).trim():t+"px"}function bx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=vx(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var R6=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(e,t){if(t){if(R6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function uu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function jp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hu=null,os=null,ss=null;function fm(e){if(e=ol(e)){if(typeof hu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=jc(t),hu(e.stateNode,e.type,t))}}function jx(e){os?ss?ss.push(e):ss=[e]:os=e}function yx(){if(os){var e=os,t=ss;if(ss=os=null,fm(e),t)for(e=0;e<t.length;e++)fm(t[e])}}function Sx(e,t){return e(t)}function Cx(){}var cd=!1;function _x(e,t,n){if(cd)return e(t,n);cd=!0;try{return Sx(e,t,n)}finally{cd=!1,(os!==null||ss!==null)&&(Cx(),yx())}}function Oa(e,t){var n=e.stateNode;if(n===null)return null;var o=jc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var mu=!1;if(qn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{mu=!1}function O6(e,t,n,o,s,a,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var fa=!1,Bi=null,$i=!1,fu=null,L6={onError:function(e){fa=!0,Bi=e}};function D6(e,t,n,o,s,a,l,i,c){fa=!1,Bi=null,O6.apply(L6,arguments)}function B6(e,t,n,o,s,a,l,i,c){if(D6.apply(this,arguments),fa){if(fa){var d=Bi;fa=!1,Bi=null}else throw Error(A(198));$i||($i=!0,fu=d)}}function bo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xm(e){if(bo(e)!==e)throw Error(A(188))}function $6(e){var t=e.alternate;if(!t){if(t=bo(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return xm(s),e;if(a===o)return xm(s),t;a=a.sibling}throw Error(A(188))}if(n.return!==o.return)n=s,o=a;else{for(var l=!1,i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==o)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Tx(e){return e=$6(e),e!==null?Ex(e):null}function Ex(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ex(e);if(t!==null)return t;e=e.sibling}return null}var kx=Ut.unstable_scheduleCallback,gm=Ut.unstable_cancelCallback,A6=Ut.unstable_shouldYield,M6=Ut.unstable_requestPaint,Ze=Ut.unstable_now,P6=Ut.unstable_getCurrentPriorityLevel,yp=Ut.unstable_ImmediatePriority,Nx=Ut.unstable_UserBlockingPriority,Ai=Ut.unstable_NormalPriority,I6=Ut.unstable_LowPriority,Rx=Ut.unstable_IdlePriority,xc=null,Ln=null;function z6(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(xc,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:H6,F6=Math.log,U6=Math.LN2;function H6(e){return e>>>=0,e===0?32:31-(F6(e)/U6|0)|0}var Fl=64,Ul=4194304;function sa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~s;i!==0?o=sa(i):(a&=l,a!==0&&(o=sa(a)))}else l=n&~s,l!==0?o=sa(l):a!==0&&(o=sa(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-fn(t),s=1<<n,o|=e[n],t&=~s;return o}function V6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W6(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-fn(a),i=1<<l,c=s[l];c===-1?(!(i&n)||i&o)&&(s[l]=V6(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function xu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ox(){var e=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),e}function dd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=n}function Z6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-fn(n),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~a}}function Sp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-fn(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var _e=0;function Lx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dx,Cp,Bx,$x,Ax,gu=!1,Hl=[],Sr=null,Cr=null,_r=null,La=new Map,Da=new Map,vr=[],K6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":La.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function Us(e,t,n,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ol(t),t!==null&&Cp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Y6(e,t,n,o,s){switch(t){case"focusin":return Sr=Us(Sr,e,t,n,o,s),!0;case"dragenter":return Cr=Us(Cr,e,t,n,o,s),!0;case"mouseover":return _r=Us(_r,e,t,n,o,s),!0;case"pointerover":var a=s.pointerId;return La.set(a,Us(La.get(a)||null,e,t,n,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Da.set(a,Us(Da.get(a)||null,e,t,n,o,s)),!0}return!1}function Mx(e){var t=no(e.target);if(t!==null){var n=bo(t);if(n!==null){if(t=n.tag,t===13){if(t=wx(n),t!==null){e.blockedOn=t,Ax(e.priority,function(){Bx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);pu=o,n.target.dispatchEvent(o),pu=null}else return t=ol(n),t!==null&&Cp(t),e.blockedOn=n,!1;t.shift()}return!0}function bm(e,t,n){vi(e)&&n.delete(t)}function G6(){gu=!1,Sr!==null&&vi(Sr)&&(Sr=null),Cr!==null&&vi(Cr)&&(Cr=null),_r!==null&&vi(_r)&&(_r=null),La.forEach(bm),Da.forEach(bm)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,gu||(gu=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,G6)))}function Ba(e){function t(s){return Hs(s,e)}if(0<Hl.length){Hs(Hl[0],e);for(var n=1;n<Hl.length;n++){var o=Hl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Sr!==null&&Hs(Sr,e),Cr!==null&&Hs(Cr,e),_r!==null&&Hs(_r,e),La.forEach(t),Da.forEach(t),n=0;n<vr.length;n++)o=vr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)Mx(n),n.blockedOn===null&&vr.shift()}var as=rr.ReactCurrentBatchConfig,Pi=!0;function q6(e,t,n,o){var s=_e,a=as.transition;as.transition=null;try{_e=1,_p(e,t,n,o)}finally{_e=s,as.transition=a}}function Q6(e,t,n,o){var s=_e,a=as.transition;as.transition=null;try{_e=4,_p(e,t,n,o)}finally{_e=s,as.transition=a}}function _p(e,t,n,o){if(Pi){var s=vu(e,t,n,o);if(s===null)jd(e,t,o,Ii,n),vm(e,o);else if(Y6(s,e,t,n,o))o.stopPropagation();else if(vm(e,o),t&4&&-1<K6.indexOf(e)){for(;s!==null;){var a=ol(s);if(a!==null&&Dx(a),a=vu(e,t,n,o),a===null&&jd(e,t,o,Ii,n),a===s)break;s=a}s!==null&&o.stopPropagation()}else jd(e,t,o,null,n)}}var Ii=null;function vu(e,t,n,o){if(Ii=null,e=jp(o),e=no(e),e!==null)if(t=bo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ii=e,null}function Px(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P6()){case yp:return 1;case Nx:return 4;case Ai:case I6:return 16;case Rx:return 536870912;default:return 16}default:return 16}}var jr=null,wp=null,bi=null;function Ix(){if(bi)return bi;var e,t=wp,n=t.length,o,s="value"in jr?jr.value:jr.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===s[a-o];o++);return bi=s.slice(e,1<o?1-o:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function jm(){return!1}function Vt(e){function t(n,o,s,a,l){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vl:jm,this.isPropagationStopped=jm,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=Vt(ys),rl=Fe({},ys,{view:0,detail:0}),X6=Vt(rl),ud,pd,Vs,gc=Fe({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(ud=e.screenX-Vs.screenX,pd=e.screenY-Vs.screenY):pd=ud=0,Vs=e),ud)},movementY:function(e){return"movementY"in e?e.movementY:pd}}),ym=Vt(gc),J6=Fe({},gc,{dataTransfer:0}),e8=Vt(J6),t8=Fe({},rl,{relatedTarget:0}),hd=Vt(t8),n8=Fe({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),r8=Vt(n8),o8=Fe({},ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s8=Vt(o8),a8=Fe({},ys,{data:0}),Sm=Vt(a8),l8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c8[e])?!!t[e]:!1}function Ep(){return d8}var u8=Fe({},rl,{key:function(e){if(e.key){var t=l8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p8=Vt(u8),h8=Fe({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Vt(h8),m8=Fe({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),f8=Vt(m8),x8=Fe({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),g8=Vt(x8),v8=Fe({},gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b8=Vt(v8),j8=[9,13,27,32],kp=qn&&"CompositionEvent"in window,xa=null;qn&&"documentMode"in document&&(xa=document.documentMode);var y8=qn&&"TextEvent"in window&&!xa,zx=qn&&(!kp||xa&&8<xa&&11>=xa),_m=String.fromCharCode(32),wm=!1;function Fx(e,t){switch(e){case"keyup":return j8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ux(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Uo=!1;function S8(e,t){switch(e){case"compositionend":return Ux(t);case"keypress":return t.which!==32?null:(wm=!0,_m);case"textInput":return e=t.data,e===_m&&wm?null:e;default:return null}}function C8(e,t){if(Uo)return e==="compositionend"||!kp&&Fx(e,t)?(e=Ix(),bi=wp=jr=null,Uo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zx&&t.locale!=="ko"?null:t.data;default:return null}}var _8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_8[e.type]:t==="textarea"}function Hx(e,t,n,o){jx(o),t=zi(t,"onChange"),0<t.length&&(n=new Tp("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ga=null,$a=null;function w8(e){eg(e,0)}function vc(e){var t=Wo(e);if(hx(t))return e}function T8(e,t){if(e==="change")return t}var Vx=!1;if(qn){var md;if(qn){var fd="oninput"in document;if(!fd){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),fd=typeof Em.oninput=="function"}md=fd}else md=!1;Vx=md&&(!document.documentMode||9<document.documentMode)}function km(){ga&&(ga.detachEvent("onpropertychange",Wx),$a=ga=null)}function Wx(e){if(e.propertyName==="value"&&vc($a)){var t=[];Hx(t,$a,e,jp(e)),_x(w8,t)}}function E8(e,t,n){e==="focusin"?(km(),ga=t,$a=n,ga.attachEvent("onpropertychange",Wx)):e==="focusout"&&km()}function k8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc($a)}function N8(e,t){if(e==="click")return vc(t)}function R8(e,t){if(e==="input"||e==="change")return vc(t)}function O8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:O8;function Aa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!eu.call(t,s)||!gn(e[s],t[s]))return!1}return!0}function Nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rm(e,t){var n=Nm(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Zx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kx(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function L8(e){var t=Kx(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zx(n.ownerDocument.documentElement,n)){if(o!==null&&Np(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=Rm(n,a);var l=Rm(n,o);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D8=qn&&"documentMode"in document&&11>=document.documentMode,Ho=null,bu=null,va=null,ju=!1;function Om(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||Ho==null||Ho!==Di(o)||(o=Ho,"selectionStart"in o&&Np(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),va&&Aa(va,o)||(va=o,o=zi(bu,"onSelect"),0<o.length&&(t=new Tp("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Ho)))}function Wl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vo={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},xd={},Yx={};qn&&(Yx=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function bc(e){if(xd[e])return xd[e];if(!Vo[e])return e;var t=Vo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yx)return xd[e]=t[n];return e}var Gx=bc("animationend"),qx=bc("animationiteration"),Qx=bc("animationstart"),Xx=bc("transitionend"),Jx=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Jx.set(e,t),vo(t,[e])}for(var gd=0;gd<Lm.length;gd++){var vd=Lm[gd],B8=vd.toLowerCase(),$8=vd[0].toUpperCase()+vd.slice(1);Ar(B8,"on"+$8)}Ar(Gx,"onAnimationEnd");Ar(qx,"onAnimationIteration");Ar(Qx,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Xx,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A8=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Dm(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,B6(o,t,void 0,e),e.currentTarget=null}function eg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==a&&s.isPropagationStopped())break e;Dm(s,i,d),a=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==a&&s.isPropagationStopped())break e;Dm(s,i,d),a=c}}}if($i)throw e=fu,$i=!1,fu=null,e}function Re(e,t){var n=t[wu];n===void 0&&(n=t[wu]=new Set);var o=e+"__bubble";n.has(o)||(tg(t,e,2,!1),n.add(o))}function bd(e,t,n){var o=0;t&&(o|=4),tg(n,e,o,t)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Ma(e){if(!e[Zl]){e[Zl]=!0,ix.forEach(function(n){n!=="selectionchange"&&(A8.has(n)||bd(n,!1,e),bd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zl]||(t[Zl]=!0,bd("selectionchange",!1,t))}}function tg(e,t,n,o){switch(Px(t)){case 1:var s=q6;break;case 4:s=Q6;break;default:s=_p}n=s.bind(null,t,n,e),s=void 0,!mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function jd(e,t,n,o,s){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=no(i),l===null)return;if(c=l.tag,c===5||c===6){o=a=l;continue e}i=i.parentNode}}o=o.return}_x(function(){var d=a,u=jp(n),p=[];e:{var f=Jx.get(e);if(f!==void 0){var b=Tp,j=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":b=p8;break;case"focusin":j="focus",b=hd;break;case"focusout":j="blur",b=hd;break;case"beforeblur":case"afterblur":b=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=e8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=f8;break;case Gx:case qx:case Qx:b=r8;break;case Xx:b=g8;break;case"scroll":b=X6;break;case"wheel":b=b8;break;case"copy":case"cut":case"paste":b=s8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Cm}var y=(t&4)!==0,w=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var h=d,m;h!==null;){m=h;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=Oa(h,g),S!=null&&y.push(Pa(h,S,m)))),w)break;h=h.return}0<y.length&&(f=new b(f,j,null,n,u),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==pu&&(j=n.relatedTarget||n.fromElement)&&(no(j)||j[Qn]))break e;if((b||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,b?(j=n.relatedTarget||n.toElement,b=d,j=j?no(j):null,j!==null&&(w=bo(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(b=null,j=d),b!==j)){if(y=ym,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Cm,S="onPointerLeave",g="onPointerEnter",h="pointer"),w=b==null?f:Wo(b),m=j==null?f:Wo(j),f=new y(S,h+"leave",b,n,u),f.target=w,f.relatedTarget=m,S=null,no(u)===d&&(y=new y(g,h+"enter",j,n,u),y.target=m,y.relatedTarget=w,S=y),w=S,b&&j)t:{for(y=b,g=j,h=0,m=y;m;m=Do(m))h++;for(m=0,S=g;S;S=Do(S))m++;for(;0<h-m;)y=Do(y),h--;for(;0<m-h;)g=Do(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Do(y),g=Do(g)}y=null}else y=null;b!==null&&Bm(p,f,b,y,!1),j!==null&&w!==null&&Bm(p,w,j,y,!0)}}e:{if(f=d?Wo(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var C=T8;else if(Tm(f))if(Vx)C=R8;else{C=k8;var x=E8}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=N8);if(C&&(C=C(e,d))){Hx(p,C,n,u);break e}x&&x(e,f,d),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&lu(f,"number",f.value)}switch(x=d?Wo(d):window,e){case"focusin":(Tm(x)||x.contentEditable==="true")&&(Ho=x,bu=d,va=null);break;case"focusout":va=bu=Ho=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Om(p,n,u);break;case"selectionchange":if(D8)break;case"keydown":case"keyup":Om(p,n,u)}var _;if(kp)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Uo?Fx(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(zx&&n.locale!=="ko"&&(Uo||k!=="onCompositionStart"?k==="onCompositionEnd"&&Uo&&(_=Ix()):(jr=u,wp="value"in jr?jr.value:jr.textContent,Uo=!0)),x=zi(d,k),0<x.length&&(k=new Sm(k,e,null,n,u),p.push({event:k,listeners:x}),_?k.data=_:(_=Ux(n),_!==null&&(k.data=_)))),(_=y8?S8(e,n):C8(e,n))&&(d=zi(d,"onBeforeInput"),0<d.length&&(u=new Sm("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=_))}eg(p,t)})}function Pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zi(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Oa(e,n),a!=null&&o.unshift(Pa(e,a,s)),a=Oa(e,t),a!=null&&o.push(Pa(e,a,s))),e=e.return}return o}function Do(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bm(e,t,n,o,s){for(var a=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,s?(c=Oa(n,a),c!=null&&l.unshift(Pa(n,c,i))):s||(c=Oa(n,a),c!=null&&l.push(Pa(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var M8=/\r\n?/g,P8=/\u0000|\uFFFD/g;function $m(e){return(typeof e=="string"?e:""+e).replace(M8,`
`).replace(P8,"")}function Kl(e,t,n){if(t=$m(t),$m(e)!==t&&n)throw Error(A(425))}function Fi(){}var yu=null,Su=null;function Cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,I8=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,z8=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(F8)}:_u;function F8(e){setTimeout(function(){throw e})}function yd(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),Ba(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);Ba(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Ss,Ia="__reactProps$"+Ss,Qn="__reactContainer$"+Ss,wu="__reactEvents$"+Ss,U8="__reactListeners$"+Ss,H8="__reactHandles$"+Ss;function no(e){var t=e[Rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[Rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mm(e);e!==null;){if(n=e[Rn])return n;e=Mm(e)}return t}e=n,n=e.parentNode}return null}function ol(e){return e=e[Rn]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function jc(e){return e[Ia]||null}var Tu=[],Zo=-1;function Mr(e){return{current:e}}function Oe(e){0>Zo||(e.current=Tu[Zo],Tu[Zo]=null,Zo--)}function ke(e,t){Zo++,Tu[Zo]=e.current,e.current=t}var Or={},ft=Mr(Or),Lt=Mr(!1),co=Or;function ps(e,t){var n=e.type.contextTypes;if(!n)return Or;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Dt(e){return e=e.childContextTypes,e!=null}function Ui(){Oe(Lt),Oe(ft)}function Pm(e,t,n){if(ft.current!==Or)throw Error(A(168));ke(ft,t),ke(Lt,n)}function ng(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(A(108,E6(e)||"Unknown",s));return Fe({},n,o)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,co=ft.current,ke(ft,e),ke(Lt,Lt.current),!0}function Im(e,t,n){var o=e.stateNode;if(!o)throw Error(A(169));n?(e=ng(e,t,co),o.__reactInternalMemoizedMergedChildContext=e,Oe(Lt),Oe(ft),ke(ft,e)):Oe(Lt),ke(Lt,n)}var Un=null,yc=!1,Sd=!1;function rg(e){Un===null?Un=[e]:Un.push(e)}function V8(e){yc=!0,rg(e)}function Pr(){if(!Sd&&Un!==null){Sd=!0;var e=0,t=_e;try{var n=Un;for(_e=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Un=null,yc=!1}catch(s){throw Un!==null&&(Un=Un.slice(e+1)),kx(yp,Pr),s}finally{_e=t,Sd=!1}}return null}var Ko=[],Yo=0,Vi=null,Wi=0,Yt=[],Gt=0,uo=null,Zn=1,Kn="";function Jr(e,t){Ko[Yo++]=Wi,Ko[Yo++]=Vi,Vi=e,Wi=t}function og(e,t,n){Yt[Gt++]=Zn,Yt[Gt++]=Kn,Yt[Gt++]=uo,uo=e;var o=Zn;e=Kn;var s=32-fn(o)-1;o&=~(1<<s),n+=1;var a=32-fn(t)+s;if(30<a){var l=s-s%5;a=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Zn=1<<32-fn(t)+s|n<<s|o,Kn=a+e}else Zn=1<<a|n<<s|o,Kn=e}function Rp(e){e.return!==null&&(Jr(e,1),og(e,1,0))}function Op(e){for(;e===Vi;)Vi=Ko[--Yo],Ko[Yo]=null,Wi=Ko[--Yo],Ko[Yo]=null;for(;e===uo;)uo=Yt[--Gt],Yt[Gt]=null,Kn=Yt[--Gt],Yt[Gt]=null,Zn=Yt[--Gt],Yt[Gt]=null}var zt=null,It=null,$e=!1,mn=null;function sg(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,It=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=uo!==null?{id:Zn,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,It=null,!0):!1;default:return!1}}function Eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ku(e){if($e){var t=It;if(t){var n=t;if(!zm(e,t)){if(Eu(e))throw Error(A(418));t=wr(n.nextSibling);var o=zt;t&&zm(e,t)?sg(o,n):(e.flags=e.flags&-4097|2,$e=!1,zt=e)}}else{if(Eu(e))throw Error(A(418));e.flags=e.flags&-4097|2,$e=!1,zt=e}}}function Fm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function Yl(e){if(e!==zt)return!1;if(!$e)return Fm(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cu(e.type,e.memoizedProps)),t&&(t=It)){if(Eu(e))throw ag(),Error(A(418));for(;t;)sg(e,t),t=wr(t.nextSibling)}if(Fm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=zt?wr(e.stateNode.nextSibling):null;return!0}function ag(){for(var e=It;e;)e=wr(e.nextSibling)}function hs(){It=zt=null,$e=!1}function Lp(e){mn===null?mn=[e]:mn.push(e)}var W8=rr.ReactCurrentBatchConfig;function un(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zi=Mr(null),Ki=null,Go=null,Dp=null;function Bp(){Dp=Go=Ki=null}function $p(e){var t=Zi.current;Oe(Zi),e._currentValue=t}function Nu(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function ls(e,t){Ki=e,Dp=Go=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Dp!==e)if(e={context:e,memoizedValue:t,next:null},Go===null){if(Ki===null)throw Error(A(308));Go=e,Ki.dependencies={lanes:0,firstContext:e}}else Go=Go.next=e;return t}var ro=null;function Ap(e){ro===null?ro=[e]:ro.push(e)}function lg(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,Ap(t)):(n.next=s.next,s.next=n),t.interleaved=n,Xn(e,o)}function Xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xr=!1;function Mp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ig(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,be&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Xn(e,n)}return s=o.interleaved,s===null?(t.next=t,Ap(o)):(t.next=s.next,s.next=t),o.interleaved=t,Xn(e,n)}function yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Sp(e,n)}}function Um(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yi(e,t,n,o){var s=e.updateQueue;xr=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=s.baseState;l=0,u=d=c=null,i=a;do{var f=i.lane,b=i.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var j=e,y=i;switch(f=t,b=n,y.tag){case 1:if(j=y.payload,typeof j=="function"){p=j.call(b,p,f);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,f=typeof j=="function"?j.call(b,p,f):j,f==null)break e;p=Fe({},p,f);break e;case 2:xr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[i]:f.push(i))}else b={eventTime:b,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=b,c=p):u=u.next=b,l|=f;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;f=i,i=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(u===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);ho|=l,e.lanes=l,e.memoizedState=p}}function Hm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var cg=new lx.Component().refs;function Ru(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={isMounted:function(e){return(e=e._reactInternals)?bo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=jt(),s=kr(e),a=Yn(o,s);a.payload=t,n!=null&&(a.callback=n),t=Tr(e,a,s),t!==null&&(xn(t,e,s,o),yi(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=jt(),s=kr(e),a=Yn(o,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tr(e,a,s),t!==null&&(xn(t,e,s,o),yi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),o=kr(e),s=Yn(n,o);s.tag=2,t!=null&&(s.callback=t),t=Tr(e,s,o),t!==null&&(xn(t,e,o,n),yi(t,e,o))}};function Vm(e,t,n,o,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,l):t.prototype&&t.prototype.isPureReactComponent?!Aa(n,o)||!Aa(s,a):!0}function dg(e,t,n){var o=!1,s=Or,a=t.contextType;return typeof a=="object"&&a!==null?a=Jt(a):(s=Dt(t)?co:ft.current,o=t.contextTypes,a=(o=o!=null)?ps(e,s):Or),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Wm(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Ou(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=cg,Mp(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Jt(a):(a=Dt(t)?co:ft.current,s.context=ps(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ru(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Sc.enqueueReplaceState(s,s.state,null),Yi(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ws(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var o=n.stateNode}if(!o)throw Error(A(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var i=s.refs;i===cg&&(i=s.refs={}),l===null?delete i[a]:i[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Gl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zm(e){var t=e._init;return t(e._payload)}function ug(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function o(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(g,h){return g=Nr(g,h),g.index=0,g.sibling=null,g}function a(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,h,m,S){return h===null||h.tag!==6?(h=Nd(m,g.mode,S),h.return=g,h):(h=s(h,m),h.return=g,h)}function c(g,h,m,S){var C=m.type;return C===Fo?u(g,h,m.props.children,S,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fr&&Zm(C)===h.type)?(S=s(h,m.props),S.ref=Ws(g,h,m),S.return=g,S):(S=Ei(m.type,m.key,m.props,null,g.mode,S),S.ref=Ws(g,h,m),S.return=g,S)}function d(g,h,m,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Rd(m,g.mode,S),h.return=g,h):(h=s(h,m.children||[]),h.return=g,h)}function u(g,h,m,S,C){return h===null||h.tag!==7?(h=io(m,g.mode,S,C),h.return=g,h):(h=s(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Nd(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pl:return m=Ei(h.type,h.key,h.props,null,g.mode,m),m.ref=Ws(g,null,h),m.return=g,m;case zo:return h=Rd(h,g.mode,m),h.return=g,h;case fr:var S=h._init;return p(g,S(h._payload),m)}if(oa(h)||zs(h))return h=io(h,g.mode,m,null),h.return=g,h;Gl(g,h)}return null}function f(g,h,m,S){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(g,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pl:return m.key===C?c(g,h,m,S):null;case zo:return m.key===C?d(g,h,m,S):null;case fr:return C=m._init,f(g,h,C(m._payload),S)}if(oa(m)||zs(m))return C!==null?null:u(g,h,m,S,null);Gl(g,m)}return null}function b(g,h,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,i(h,g,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pl:return g=g.get(S.key===null?m:S.key)||null,c(h,g,S,C);case zo:return g=g.get(S.key===null?m:S.key)||null,d(h,g,S,C);case fr:var x=S._init;return b(g,h,m,x(S._payload),C)}if(oa(S)||zs(S))return g=g.get(m)||null,u(h,g,S,C,null);Gl(h,S)}return null}function j(g,h,m,S){for(var C=null,x=null,_=h,k=h=0,N=null;_!==null&&k<m.length;k++){_.index>k?(N=_,_=null):N=_.sibling;var O=f(g,_,m[k],S);if(O===null){_===null&&(_=N);break}e&&_&&O.alternate===null&&t(g,_),h=a(O,h,k),x===null?C=O:x.sibling=O,x=O,_=N}if(k===m.length)return n(g,_),$e&&Jr(g,k),C;if(_===null){for(;k<m.length;k++)_=p(g,m[k],S),_!==null&&(h=a(_,h,k),x===null?C=_:x.sibling=_,x=_);return $e&&Jr(g,k),C}for(_=o(g,_);k<m.length;k++)N=b(_,g,k,m[k],S),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?k:N.key),h=a(N,h,k),x===null?C=N:x.sibling=N,x=N);return e&&_.forEach(function(D){return t(g,D)}),$e&&Jr(g,k),C}function y(g,h,m,S){var C=zs(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var x=C=null,_=h,k=h=0,N=null,O=m.next();_!==null&&!O.done;k++,O=m.next()){_.index>k?(N=_,_=null):N=_.sibling;var D=f(g,_,O.value,S);if(D===null){_===null&&(_=N);break}e&&_&&D.alternate===null&&t(g,_),h=a(D,h,k),x===null?C=D:x.sibling=D,x=D,_=N}if(O.done)return n(g,_),$e&&Jr(g,k),C;if(_===null){for(;!O.done;k++,O=m.next())O=p(g,O.value,S),O!==null&&(h=a(O,h,k),x===null?C=O:x.sibling=O,x=O);return $e&&Jr(g,k),C}for(_=o(g,_);!O.done;k++,O=m.next())O=b(_,g,k,O.value,S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?k:O.key),h=a(O,h,k),x===null?C=O:x.sibling=O,x=O);return e&&_.forEach(function(U){return t(g,U)}),$e&&Jr(g,k),C}function w(g,h,m,S){if(typeof m=="object"&&m!==null&&m.type===Fo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Pl:e:{for(var C=m.key,x=h;x!==null;){if(x.key===C){if(C=m.type,C===Fo){if(x.tag===7){n(g,x.sibling),h=s(x,m.props.children),h.return=g,g=h;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fr&&Zm(C)===x.type){n(g,x.sibling),h=s(x,m.props),h.ref=Ws(g,x,m),h.return=g,g=h;break e}n(g,x);break}else t(g,x);x=x.sibling}m.type===Fo?(h=io(m.props.children,g.mode,S,m.key),h.return=g,g=h):(S=Ei(m.type,m.key,m.props,null,g.mode,S),S.ref=Ws(g,h,m),S.return=g,g=S)}return l(g);case zo:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=s(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Rd(m,g.mode,S),h.return=g,g=h}return l(g);case fr:return x=m._init,w(g,h,x(m._payload),S)}if(oa(m))return j(g,h,m,S);if(zs(m))return y(g,h,m,S);Gl(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=s(h,m),h.return=g,g=h):(n(g,h),h=Nd(m,g.mode,S),h.return=g,g=h),l(g)):n(g,h)}return w}var ms=ug(!0),pg=ug(!1),sl={},Dn=Mr(sl),za=Mr(sl),Fa=Mr(sl);function oo(e){if(e===sl)throw Error(A(174));return e}function Pp(e,t){switch(ke(Fa,t),ke(za,e),ke(Dn,sl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cu(t,e)}Oe(Dn),ke(Dn,t)}function fs(){Oe(Dn),Oe(za),Oe(Fa)}function hg(e){oo(Fa.current);var t=oo(Dn.current),n=cu(t,e.type);t!==n&&(ke(za,e),ke(Dn,n))}function Ip(e){za.current===e&&(Oe(Dn),Oe(za))}var Ie=Mr(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cd=[];function zp(){for(var e=0;e<Cd.length;e++)Cd[e]._workInProgressVersionPrimary=null;Cd.length=0}var Si=rr.ReactCurrentDispatcher,_d=rr.ReactCurrentBatchConfig,po=0,ze=null,qe=null,nt=null,qi=!1,ba=!1,Ua=0,Z8=0;function pt(){throw Error(A(321))}function Fp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Up(e,t,n,o,s,a){if(po=a,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?q8:Q8,e=n(o,s),ba){a=0;do{if(ba=!1,Ua=0,25<=a)throw Error(A(301));a+=1,nt=qe=null,t.updateQueue=null,Si.current=X8,e=n(o,s)}while(ba)}if(Si.current=Qi,t=qe!==null&&qe.next!==null,po=0,nt=qe=ze=null,qi=!1,t)throw Error(A(300));return e}function Hp(){var e=Ua!==0;return Ua=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?ze.memoizedState=nt=e:nt=nt.next=e,nt}function en(){if(qe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=nt===null?ze.memoizedState:nt.next;if(t!==null)nt=t,qe=e;else{if(e===null)throw Error(A(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},nt===null?ze.memoizedState=nt=e:nt=nt.next=e}return nt}function Ha(e,t){return typeof t=="function"?t(e):t}function wd(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=qe,s=o.baseQueue,a=n.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}o.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,o=o.baseState;var i=l=null,c=null,d=a;do{var u=d.lane;if((po&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,ze.lanes|=u,ho|=u}d=d.next}while(d!==null&&d!==a);c===null?l=o:c.next=i,gn(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do a=s.lane,ze.lanes|=a,ho|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Td(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);gn(a,t.memoizedState)||(Ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function mg(){}function fg(e,t){var n=ze,o=en(),s=t(),a=!gn(o.memoizedState,s);if(a&&(o.memoizedState=s,Ot=!0),o=o.queue,Vp(vg.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Va(9,gg.bind(null,n,o,s,t),void 0,null),ot===null)throw Error(A(349));po&30||xg(n,t,s)}return s}function xg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gg(e,t,n,o){t.value=n,t.getSnapshot=o,bg(t)&&jg(e)}function vg(e,t,n){return n(function(){bg(t)&&jg(e)})}function bg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function jg(e){var t=Xn(e,1);t!==null&&xn(t,e,1,-1)}function Km(e){var t=En();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},t.queue=e,e=e.dispatch=G8.bind(null,ze,e),[t.memoizedState,e]}function Va(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function yg(){return en().memoizedState}function Ci(e,t,n,o){var s=En();ze.flags|=e,s.memoizedState=Va(1|t,n,void 0,o===void 0?null:o)}function Cc(e,t,n,o){var s=en();o=o===void 0?null:o;var a=void 0;if(qe!==null){var l=qe.memoizedState;if(a=l.destroy,o!==null&&Fp(o,l.deps)){s.memoizedState=Va(t,n,a,o);return}}ze.flags|=e,s.memoizedState=Va(1|t,n,a,o)}function Ym(e,t){return Ci(8390656,8,e,t)}function Vp(e,t){return Cc(2048,8,e,t)}function Sg(e,t){return Cc(4,2,e,t)}function Cg(e,t){return Cc(4,4,e,t)}function _g(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wg(e,t,n){return n=n!=null?n.concat([e]):null,Cc(4,4,_g.bind(null,t,e),n)}function Wp(){}function Tg(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Fp(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Eg(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Fp(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function kg(e,t,n){return po&21?(gn(n,t)||(n=Ox(),ze.lanes|=n,ho|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function K8(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var o=_d.transition;_d.transition={};try{e(!1),t()}finally{_e=n,_d.transition=o}}function Ng(){return en().memoizedState}function Y8(e,t,n){var o=kr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(e))Og(t,n);else if(n=lg(e,t,n,o),n!==null){var s=jt();xn(n,e,o,s),Lg(n,t,o)}}function G8(e,t,n){var o=kr(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(e))Og(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,i=a(l,n);if(s.hasEagerState=!0,s.eagerState=i,gn(i,l)){var c=t.interleaved;c===null?(s.next=s,Ap(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=lg(e,t,s,o),n!==null&&(s=jt(),xn(n,e,o,s),Lg(n,t,o))}}function Rg(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Og(e,t){ba=qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lg(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Sp(e,n)}}var Qi={readContext:Jt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},q8={readContext:Jt,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Ym,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4194308,4,_g.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ci(4,2,e,t)},useMemo:function(e,t){var n=En();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=En();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Y8.bind(null,ze,e),[o.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:Km,useDebugValue:Wp,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Km(!1),t=e[0];return e=K8.bind(null,e[1]),En().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ze,s=En();if($e){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ot===null)throw Error(A(349));po&30||xg(o,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Ym(vg.bind(null,o,a,e),[e]),o.flags|=2048,Va(9,gg.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=En(),t=ot.identifierPrefix;if($e){var n=Kn,o=Zn;n=(o&~(1<<32-fn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Z8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q8={readContext:Jt,useCallback:Tg,useContext:Jt,useEffect:Vp,useImperativeHandle:wg,useInsertionEffect:Sg,useLayoutEffect:Cg,useMemo:Eg,useReducer:wd,useRef:yg,useState:function(){return wd(Ha)},useDebugValue:Wp,useDeferredValue:function(e){var t=en();return kg(t,qe.memoizedState,e)},useTransition:function(){var e=wd(Ha)[0],t=en().memoizedState;return[e,t]},useMutableSource:mg,useSyncExternalStore:fg,useId:Ng,unstable_isNewReconciler:!1},X8={readContext:Jt,useCallback:Tg,useContext:Jt,useEffect:Vp,useImperativeHandle:wg,useInsertionEffect:Sg,useLayoutEffect:Cg,useMemo:Eg,useReducer:Td,useRef:yg,useState:function(){return Td(Ha)},useDebugValue:Wp,useDeferredValue:function(e){var t=en();return qe===null?t.memoizedState=e:kg(t,qe.memoizedState,e)},useTransition:function(){var e=Td(Ha)[0],t=en().memoizedState;return[e,t]},useMutableSource:mg,useSyncExternalStore:fg,useId:Ng,unstable_isNewReconciler:!1};function xs(e,t){try{var n="",o=t;do n+=T6(o),o=o.return;while(o);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Ed(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Lu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J8=typeof WeakMap=="function"?WeakMap:Map;function Dg(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ji||(Ji=!0,Uu=o),Lu(e,t)},n}function Bg(e,t,n){n=Yn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){Lu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Lu(e,t),typeof o!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gm(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new J8;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=hj.bind(null,e,t,n),t.then(e,e))}function qm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qm(e,t,n,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,Tr(n,t,1))),n.lanes|=1),e)}var ej=rr.ReactCurrentOwner,Ot=!1;function bt(e,t,n,o){t.child=e===null?pg(t,null,n,o):ms(t,e.child,n,o)}function Xm(e,t,n,o,s){n=n.render;var a=t.ref;return ls(t,s),o=Up(e,t,n,o,a,s),n=Hp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Jn(e,t,s)):($e&&n&&Rp(t),t.flags|=1,bt(e,t,o,s),t.child)}function Jm(e,t,n,o,s){if(e===null){var a=n.type;return typeof a=="function"&&!Jp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,$g(e,t,a,o,s)):(e=Ei(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(l,o)&&e.ref===t.ref)return Jn(e,t,s)}return t.flags|=1,e=Nr(a,o),e.ref=t.ref,e.return=t,t.child=e}function $g(e,t,n,o,s){if(e!==null){var a=e.memoizedProps;if(Aa(a,o)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=o=a,(e.lanes&s)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Jn(e,t,s)}return Du(e,t,n,o,s)}function Ag(e,t,n){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Qo,Mt),Mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Qo,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,ke(Qo,Mt),Mt|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,ke(Qo,Mt),Mt|=o;return bt(e,t,s,n),t.child}function Mg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Du(e,t,n,o,s){var a=Dt(n)?co:ft.current;return a=ps(t,a),ls(t,s),n=Up(e,t,n,o,a,s),o=Hp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Jn(e,t,s)):($e&&o&&Rp(t),t.flags|=1,bt(e,t,n,s),t.child)}function ef(e,t,n,o,s){if(Dt(n)){var a=!0;Hi(t)}else a=!1;if(ls(t,s),t.stateNode===null)_i(e,t),dg(t,n,o),Ou(t,n,o,s),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Jt(d):(d=Dt(n)?co:ft.current,d=ps(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&Wm(t,l,o,d),xr=!1;var f=t.memoizedState;l.state=f,Yi(t,o,l,s),c=t.memoizedState,i!==o||f!==c||Lt.current||xr?(typeof u=="function"&&(Ru(t,n,u,o),c=t.memoizedState),(i=xr||Vm(t,n,i,o,f,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,ig(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:un(t.type,i),l.props=d,p=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=Dt(n)?co:ft.current,c=ps(t,c));var b=n.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||f!==c)&&Wm(t,l,o,c),xr=!1,f=t.memoizedState,l.state=f,Yi(t,o,l,s);var j=t.memoizedState;i!==p||f!==j||Lt.current||xr?(typeof b=="function"&&(Ru(t,n,b,o),j=t.memoizedState),(d=xr||Vm(t,n,d,o,f,j,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,j,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=j),l.props=o,l.state=j,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Bu(e,t,n,o,a,s)}function Bu(e,t,n,o,s,a){Mg(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return s&&Im(t,n,!1),Jn(e,t,a);o=t.stateNode,ej.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=ms(t,e.child,null,a),t.child=ms(t,null,i,a)):bt(e,t,i,a),t.memoizedState=o.state,s&&Im(t,n,!0),t.child}function Pg(e){var t=e.stateNode;t.pendingContext?Pm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pm(e,t.context,!1),Pp(e,t.containerInfo)}function tf(e,t,n,o,s){return hs(),Lp(s),t.flags|=256,bt(e,t,n,o),t.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ig(e,t,n){var o=t.pendingProps,s=Ie.current,a=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Ie,s&1),e===null)return ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Tc(l,o,0,null),e=io(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Au(n),t.memoizedState=$u,e):Zp(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return tj(e,t,l,o,i,s,n);if(a){a=o.fallback,l=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Nr(s,c),o.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=Nr(i,a):(a=io(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=e.child.memoizedState,l=l===null?Au(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=$u,o}return a=e.child,e=a.sibling,o=Nr(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Zp(e,t){return t=Tc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ql(e,t,n,o){return o!==null&&Lp(o),ms(t,e.child,null,n),e=Zp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tj(e,t,n,o,s,a,l){if(n)return t.flags&256?(t.flags&=-257,o=Ed(Error(A(422))),ql(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=Tc({mode:"visible",children:o.children},s,0,null),a=io(a,s,l,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&ms(t,e.child,null,l),t.child.memoizedState=Au(l),t.memoizedState=$u,a);if(!(t.mode&1))return ql(e,t,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var i=o.dgst;return o=i,a=Error(A(419)),o=Ed(a,o,void 0),ql(e,t,l,o)}if(i=(l&e.childLanes)!==0,Ot||i){if(o=ot,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Xn(e,s),xn(o,e,s,-1))}return Xp(),o=Ed(Error(A(421))),ql(e,t,l,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=mj.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,It=wr(s.nextSibling),zt=t,$e=!0,mn=null,e!==null&&(Yt[Gt++]=Zn,Yt[Gt++]=Kn,Yt[Gt++]=uo,Zn=e.id,Kn=e.overflow,uo=t),t=Zp(t,o.children),t.flags|=4096,t)}function nf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Nu(e.return,t,n)}function kd(e,t,n,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=s)}function zg(e,t,n){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(bt(e,t,o.children,n),o=Ie.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,n,t);else if(e.tag===19)nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Ie,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),kd(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Gi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}kd(t,!0,n,null,a);break;case"together":kd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ho|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Nr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nj(e,t,n){switch(t.tag){case 3:Pg(t),hs();break;case 5:hg(t);break;case 1:Dt(t.type)&&Hi(t);break;case 4:Pp(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;ke(Zi,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?Ig(e,t,n):(ke(Ie,Ie.current&1),e=Jn(e,t,n),e!==null?e.sibling:null);ke(Ie,Ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return zg(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Ie,Ie.current),o)break;return null;case 22:case 23:return t.lanes=0,Ag(e,t,n)}return Jn(e,t,n)}var Fg,Mu,Ug,Hg;Fg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mu=function(){};Ug=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,oo(Dn.current);var a=null;switch(n){case"input":s=su(e,s),o=su(e,o),a=[];break;case"select":s=Fe({},s,{value:void 0}),o=Fe({},o,{value:void 0}),a=[];break;case"textarea":s=iu(e,s),o=iu(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fi)}du(n,o);var l;n=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var i=s[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Na.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in o){var c=o[d];if(i=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Na.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Re("scroll",e),a||i===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Hg=function(e,t,n,o){n!==o&&(t.flags|=4)};function Zs(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function rj(e,t,n){var o=t.pendingProps;switch(Op(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Dt(t.type)&&Ui(),ht(t),null;case 3:return o=t.stateNode,fs(),Oe(Lt),Oe(ft),zp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Yl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mn!==null&&(Wu(mn),mn=null))),Mu(e,t),ht(t),null;case 5:Ip(t);var s=oo(Fa.current);if(n=t.type,e!==null&&t.stateNode!=null)Ug(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return ht(t),null}if(e=oo(Dn.current),Yl(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Rn]=t,o[Ia]=a,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<aa.length;s++)Re(aa[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":um(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":hm(o,a),Re("invalid",o)}du(n,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?o.textContent!==i&&(a.suppressHydrationWarning!==!0&&Kl(o.textContent,i,e),s=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Kl(o.textContent,i,e),s=["children",""+i]):Na.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Re("scroll",o)}switch(n){case"input":Il(o),pm(o,a,!0);break;case"textarea":Il(o),mm(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Fi)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Rn]=t,e[Ia]=o,Fg(e,t,!1,!1),t.stateNode=e;e:{switch(l=uu(n,o),n){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<aa.length;s++)Re(aa[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":um(e,o),s=su(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Fe({},o,{value:void 0}),Re("invalid",e);break;case"textarea":hm(e,o),s=iu(e,o),Re("invalid",e);break;default:s=o}du(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?bx(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gx(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ra(e,c):typeof c=="number"&&Ra(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Na.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Re("scroll",e):c!=null&&xp(e,a,c,l))}switch(n){case"input":Il(e),pm(e,o,!1);break;case"textarea":Il(e),mm(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Rr(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?rs(e,!!o.multiple,a,!1):o.defaultValue!=null&&rs(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Fi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)Hg(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(n=oo(Fa.current),oo(Dn.current),Yl(t)){if(o=t.stateNode,n=t.memoizedProps,o[Rn]=t,(a=o.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:Kl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kl(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Rn]=t,t.stateNode=o}return ht(t),null;case 13:if(Oe(Ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&It!==null&&t.mode&1&&!(t.flags&128))ag(),hs(),t.flags|=98560,a=!1;else if(a=Yl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[Rn]=t}else hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ht(t),a=!1}else mn!==null&&(Wu(mn),mn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?Xe===0&&(Xe=3):Xp())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return fs(),Mu(e,t),e===null&&Ma(t.stateNode.containerInfo),ht(t),null;case 10:return $p(t.type._context),ht(t),null;case 17:return Dt(t.type)&&Ui(),ht(t),null;case 19:if(Oe(Ie),a=t.memoizedState,a===null)return ht(t),null;if(o=(t.flags&128)!==0,l=a.rendering,l===null)if(o)Zs(a,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Gi(e),l!==null){for(t.flags|=128,Zs(a,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ze()>gs&&(t.flags|=128,o=!0,Zs(a,!1),t.lanes=4194304)}else{if(!o)if(e=Gi(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!$e)return ht(t),null}else 2*Ze()-a.renderingStartTime>gs&&n!==1073741824&&(t.flags|=128,o=!0,Zs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ze(),t.sibling=null,n=Ie.current,ke(Ie,o?n&1|2:n&1),t):(ht(t),null);case 22:case 23:return Qp(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Mt&1073741824&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function oj(e,t){switch(Op(t),t.tag){case 1:return Dt(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fs(),Oe(Lt),Oe(ft),zp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ip(t),null;case 13:if(Oe(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Ie),null;case 4:return fs(),null;case 10:return $p(t.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var Ql=!1,mt=!1,sj=typeof WeakSet=="function"?WeakSet:Set,H=null;function qo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){He(e,t,o)}else n.current=null}function Pu(e,t,n){try{n()}catch(o){He(e,t,o)}}var rf=!1;function aj(e,t){if(yu=Pi,e=Kx(),Np(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var b;p!==n||s!==0&&p.nodeType!==3||(i=l+s),p!==a||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break t;if(f===n&&++d===s&&(i=l),f===a&&++u===o&&(c=l),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Su={focusedElem:e,selectionRange:n},Pi=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,w=j.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:un(t.type,y),w);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){He(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return j=rf,rf=!1,j}function ja(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Pu(t,n,a)}s=s.next}while(s!==o)}}function _c(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Iu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vg(e){var t=e.alternate;t!==null&&(e.alternate=null,Vg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[Ia],delete t[wu],delete t[U8],delete t[H8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wg(e){return e.tag===5||e.tag===3||e.tag===4}function of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fi));else if(o!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function Fu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Fu(e,t,n),e=e.sibling;e!==null;)Fu(e,t,n),e=e.sibling}var st=null,pn=!1;function pr(e,t,n){for(n=n.child;n!==null;)Zg(e,t,n),n=n.sibling}function Zg(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:mt||qo(n,t);case 6:var o=st,s=pn;st=null,pr(e,t,n),st=o,pn=s,st!==null&&(pn?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(pn?(e=st,n=n.stateNode,e.nodeType===8?yd(e.parentNode,n):e.nodeType===1&&yd(e,n),Ba(e)):yd(st,n.stateNode));break;case 4:o=st,s=pn,st=n.stateNode.containerInfo,pn=!0,pr(e,t,n),st=o,pn=s;break;case 0:case 11:case 14:case 15:if(!mt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Pu(n,t,l),s=s.next}while(s!==o)}pr(e,t,n);break;case 1:if(!mt&&(qo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){He(n,t,i)}pr(e,t,n);break;case 21:pr(e,t,n);break;case 22:n.mode&1?(mt=(o=mt)||n.memoizedState!==null,pr(e,t,n),mt=o):pr(e,t,n);break;default:pr(e,t,n)}}function sf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sj),t.forEach(function(o){var s=fj.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function dn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var a=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:st=i.stateNode,pn=!1;break e;case 3:st=i.stateNode.containerInfo,pn=!0;break e;case 4:st=i.stateNode.containerInfo,pn=!0;break e}i=i.return}if(st===null)throw Error(A(160));Zg(a,l,s),st=null,pn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){He(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kg(t,e),t=t.sibling}function Kg(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),Tn(e),o&4){try{ja(3,e,e.return),_c(3,e)}catch(y){He(e,e.return,y)}try{ja(5,e,e.return)}catch(y){He(e,e.return,y)}}break;case 1:dn(t,e),Tn(e),o&512&&n!==null&&qo(n,n.return);break;case 5:if(dn(t,e),Tn(e),o&512&&n!==null&&qo(n,n.return),e.flags&32){var s=e.stateNode;try{Ra(s,"")}catch(y){He(e,e.return,y)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&mx(s,a),uu(i,l);var d=uu(i,a);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?bx(s,p):u==="dangerouslySetInnerHTML"?gx(s,p):u==="children"?Ra(s,p):xp(s,u,p,d)}switch(i){case"input":au(s,a);break;case"textarea":fx(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?rs(s,!!a.multiple,b,!1):f!==!!a.multiple&&(a.defaultValue!=null?rs(s,!!a.multiple,a.defaultValue,!0):rs(s,!!a.multiple,a.multiple?[]:"",!1))}s[Ia]=a}catch(y){He(e,e.return,y)}}break;case 6:if(dn(t,e),Tn(e),o&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(y){He(e,e.return,y)}}break;case 3:if(dn(t,e),Tn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(y){He(e,e.return,y)}break;case 4:dn(t,e),Tn(e);break;case 13:dn(t,e),Tn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Gp=Ze())),o&4&&sf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(mt=(d=mt)||u,dn(t,e),mt=d):dn(t,e),Tn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(p=H=u;H!==null;){switch(f=H,b=f.child,f.tag){case 0:case 11:case 14:case 15:ja(4,f,f.return);break;case 1:qo(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(y){He(o,n,y)}}break;case 5:qo(f,f.return);break;case 22:if(f.memoizedState!==null){lf(p);continue}}b!==null?(b.return=f,H=b):lf(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{s=p.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=vx("display",l))}catch(y){He(e,e.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){He(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),Tn(e),o&4&&sf(e);break;case 21:break;default:dn(t,e),Tn(e)}}function Tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wg(n)){var o=n;break e}n=n.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Ra(s,""),o.flags&=-33);var a=of(e);Fu(e,a,s);break;case 3:case 4:var l=o.stateNode.containerInfo,i=of(e);zu(e,i,l);break;default:throw Error(A(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lj(e,t,n){H=e,Yg(e)}function Yg(e,t,n){for(var o=(e.mode&1)!==0;H!==null;){var s=H,a=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Ql;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||mt;i=Ql;var d=mt;if(Ql=l,(mt=c)&&!d)for(H=s;H!==null;)l=H,c=l.child,l.tag===22&&l.memoizedState!==null?cf(s):c!==null?(c.return=l,H=c):cf(s);for(;a!==null;)H=a,Yg(a),a=a.sibling;H=s,Ql=i,mt=d}af(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,H=a):af(e)}}function af(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||_c(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!mt)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Hm(t,a,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hm(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Ba(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}mt||t.flags&512&&Iu(t)}catch(f){He(t,t.return,f)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function lf(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function cf(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(c){He(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(c){He(t,s,c)}}var a=t.return;try{Iu(t)}catch(c){He(t,a,c)}break;case 5:var l=t.return;try{Iu(t)}catch(c){He(t,l,c)}}}catch(c){He(t,t.return,c)}if(t===e){H=null;break}var i=t.sibling;if(i!==null){i.return=t.return,H=i;break}H=t.return}}var ij=Math.ceil,Xi=rr.ReactCurrentDispatcher,Kp=rr.ReactCurrentOwner,Qt=rr.ReactCurrentBatchConfig,be=0,ot=null,Ye=null,it=0,Mt=0,Qo=Mr(0),Xe=0,Wa=null,ho=0,wc=0,Yp=0,ya=null,Rt=null,Gp=0,gs=1/0,Fn=null,Ji=!1,Uu=null,Er=null,Xl=!1,yr=null,ec=0,Sa=0,Hu=null,wi=-1,Ti=0;function jt(){return be&6?Ze():wi!==-1?wi:wi=Ze()}function kr(e){return e.mode&1?be&2&&it!==0?it&-it:W8.transition!==null?(Ti===0&&(Ti=Ox()),Ti):(e=_e,e!==0||(e=window.event,e=e===void 0?16:Px(e.type)),e):1}function xn(e,t,n,o){if(50<Sa)throw Sa=0,Hu=null,Error(A(185));nl(e,n,o),(!(be&2)||e!==ot)&&(e===ot&&(!(be&2)&&(wc|=n),Xe===4&&br(e,it)),Bt(e,o),n===1&&be===0&&!(t.mode&1)&&(gs=Ze()+500,yc&&Pr()))}function Bt(e,t){var n=e.callbackNode;W6(e,t);var o=Mi(e,e===ot?it:0);if(o===0)n!==null&&gm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&gm(n),t===1)e.tag===0?V8(df.bind(null,e)):rg(df.bind(null,e)),z8(function(){!(be&6)&&Pr()}),n=null;else{switch(Lx(o)){case 1:n=yp;break;case 4:n=Nx;break;case 16:n=Ai;break;case 536870912:n=Rx;break;default:n=Ai}n=n2(n,Gg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gg(e,t){if(wi=-1,Ti=0,be&6)throw Error(A(327));var n=e.callbackNode;if(is()&&e.callbackNode!==n)return null;var o=Mi(e,e===ot?it:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=tc(e,o);else{t=o;var s=be;be|=2;var a=Qg();(ot!==e||it!==t)&&(Fn=null,gs=Ze()+500,lo(e,t));do try{uj();break}catch(i){qg(e,i)}while(1);Bp(),Xi.current=a,be=s,Ye!==null?t=0:(ot=null,it=0,t=Xe)}if(t!==0){if(t===2&&(s=xu(e),s!==0&&(o=s,t=Vu(e,s))),t===1)throw n=Wa,lo(e,0),br(e,o),Bt(e,Ze()),n;if(t===6)br(e,o);else{if(s=e.current.alternate,!(o&30)&&!cj(s)&&(t=tc(e,o),t===2&&(a=xu(e),a!==0&&(o=a,t=Vu(e,a))),t===1))throw n=Wa,lo(e,0),br(e,o),Bt(e,Ze()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:eo(e,Rt,Fn);break;case 3:if(br(e,o),(o&130023424)===o&&(t=Gp+500-Ze(),10<t)){if(Mi(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){jt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=_u(eo.bind(null,e,Rt,Fn),t);break}eo(e,Rt,Fn);break;case 4:if(br(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var l=31-fn(o);a=1<<l,l=t[l],l>s&&(s=l),o&=~a}if(o=s,o=Ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ij(o/1960))-o,10<o){e.timeoutHandle=_u(eo.bind(null,e,Rt,Fn),o);break}eo(e,Rt,Fn);break;case 5:eo(e,Rt,Fn);break;default:throw Error(A(329))}}}return Bt(e,Ze()),e.callbackNode===n?Gg.bind(null,e):null}function Vu(e,t){var n=ya;return e.current.memoizedState.isDehydrated&&(lo(e,t).flags|=256),e=tc(e,t),e!==2&&(t=Rt,Rt=n,t!==null&&Wu(t)),e}function Wu(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function cj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],a=s.getSnapshot;s=s.value;try{if(!gn(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~Yp,t&=~wc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-fn(t),o=1<<n;e[n]=-1,t&=~o}}function df(e){if(be&6)throw Error(A(327));is();var t=Mi(e,0);if(!(t&1))return Bt(e,Ze()),null;var n=tc(e,t);if(e.tag!==0&&n===2){var o=xu(e);o!==0&&(t=o,n=Vu(e,o))}if(n===1)throw n=Wa,lo(e,0),br(e,t),Bt(e,Ze()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,eo(e,Rt,Fn),Bt(e,Ze()),null}function qp(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(gs=Ze()+500,yc&&Pr())}}function mo(e){yr!==null&&yr.tag===0&&!(be&6)&&is();var t=be;be|=1;var n=Qt.transition,o=_e;try{if(Qt.transition=null,_e=1,e)return e()}finally{_e=o,Qt.transition=n,be=t,!(be&6)&&Pr()}}function Qp(){Mt=Qo.current,Oe(Qo)}function lo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I8(n)),Ye!==null)for(n=Ye.return;n!==null;){var o=n;switch(Op(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ui();break;case 3:fs(),Oe(Lt),Oe(ft),zp();break;case 5:Ip(o);break;case 4:fs();break;case 13:Oe(Ie);break;case 19:Oe(Ie);break;case 10:$p(o.type._context);break;case 22:case 23:Qp()}n=n.return}if(ot=e,Ye=e=Nr(e.current,null),it=Mt=t,Xe=0,Wa=null,Yp=wc=ho=0,Rt=ya=null,ro!==null){for(t=0;t<ro.length;t++)if(n=ro[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,a=n.pending;if(a!==null){var l=a.next;a.next=s,o.next=l}n.pending=o}ro=null}return e}function qg(e,t){do{var n=Ye;try{if(Bp(),Si.current=Qi,qi){for(var o=ze.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}qi=!1}if(po=0,nt=qe=ze=null,ba=!1,Ua=0,Kp.current=null,n===null||n.return===null){Xe=1,Wa=t,Ye=null;break}e:{var a=e,l=n.return,i=n,c=t;if(t=it,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=qm(l);if(b!==null){b.flags&=-257,Qm(b,l,i,a,t),b.mode&1&&Gm(a,d,t),t=b,c=d;var j=t.updateQueue;if(j===null){var y=new Set;y.add(c),t.updateQueue=y}else j.add(c);break e}else{if(!(t&1)){Gm(a,d,t),Xp();break e}c=Error(A(426))}}else if($e&&i.mode&1){var w=qm(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qm(w,l,i,a,t),Lp(xs(c,i));break e}}a=c=xs(c,i),Xe!==4&&(Xe=2),ya===null?ya=[a]:ya.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Dg(a,c,t);Um(a,g);break e;case 1:i=c;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Er===null||!Er.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Bg(a,i,t);Um(a,S);break e}}a=a.return}while(a!==null)}Jg(n)}catch(C){t=C,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function Qg(){var e=Xi.current;return Xi.current=Qi,e===null?Qi:e}function Xp(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),ot===null||!(ho&268435455)&&!(wc&268435455)||br(ot,it)}function tc(e,t){var n=be;be|=2;var o=Qg();(ot!==e||it!==t)&&(Fn=null,lo(e,t));do try{dj();break}catch(s){qg(e,s)}while(1);if(Bp(),be=n,Xi.current=o,Ye!==null)throw Error(A(261));return ot=null,it=0,Xe}function dj(){for(;Ye!==null;)Xg(Ye)}function uj(){for(;Ye!==null&&!A6();)Xg(Ye)}function Xg(e){var t=t2(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Jg(e):Ye=t,Kp.current=null}function Jg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=oj(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ye=null;return}}else if(n=rj(n,t,Mt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Xe===0&&(Xe=5)}function eo(e,t,n){var o=_e,s=Qt.transition;try{Qt.transition=null,_e=1,pj(e,t,n,o)}finally{Qt.transition=s,_e=o}return null}function pj(e,t,n,o){do is();while(yr!==null);if(be&6)throw Error(A(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Z6(e,a),e===ot&&(Ye=ot=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,n2(Ai,function(){return is(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qt.transition,Qt.transition=null;var l=_e;_e=1;var i=be;be|=4,Kp.current=null,aj(e,n),Kg(n,e),L8(Su),Pi=!!yu,Su=yu=null,e.current=n,lj(n),M6(),be=i,_e=l,Qt.transition=a}else e.current=n;if(Xl&&(Xl=!1,yr=e,ec=s),a=e.pendingLanes,a===0&&(Er=null),z6(n.stateNode),Bt(e,Ze()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ji)throw Ji=!1,e=Uu,Uu=null,e;return ec&1&&e.tag!==0&&is(),a=e.pendingLanes,a&1?e===Hu?Sa++:(Sa=0,Hu=e):Sa=0,Pr(),null}function is(){if(yr!==null){var e=Lx(ec),t=Qt.transition,n=_e;try{if(Qt.transition=null,_e=16>e?16:e,yr===null)var o=!1;else{if(e=yr,yr=null,ec=0,be&6)throw Error(A(331));var s=be;for(be|=4,H=e.current;H!==null;){var a=H,l=a.child;if(H.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:ja(8,u,a)}var p=u.child;if(p!==null)p.return=u,H=p;else for(;H!==null;){u=H;var f=u.sibling,b=u.return;if(Vg(u),u===d){H=null;break}if(f!==null){f.return=b,H=f;break}H=b}}}var j=a.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,H=l;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ja(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,H=g;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){l=H;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,H=m;else e:for(l=h;H!==null;){if(i=H,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:_c(9,i)}}catch(C){He(i,i.return,C)}if(i===l){H=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,H=S;break e}H=i.return}}if(be=s,Pr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(xc,e)}catch{}o=!0}return o}finally{_e=n,Qt.transition=t}}return!1}function uf(e,t,n){t=xs(n,t),t=Dg(e,t,1),e=Tr(e,t,1),t=jt(),e!==null&&(nl(e,1,t),Bt(e,t))}function He(e,t,n){if(e.tag===3)uf(e,e,n);else for(;t!==null;){if(t.tag===3){uf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Er===null||!Er.has(o))){e=xs(n,e),e=Bg(t,e,1),t=Tr(t,e,1),e=jt(),t!==null&&(nl(t,1,e),Bt(t,e));break}}t=t.return}}function hj(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>Ze()-Gp?lo(e,0):Yp|=n),Bt(e,t)}function e2(e,t){t===0&&(e.mode&1?(t=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):t=1);var n=jt();e=Xn(e,t),e!==null&&(nl(e,t,n),Bt(e,n))}function mj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),e2(e,n)}function fj(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),e2(e,n)}var t2;t2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,nj(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,$e&&t.flags&1048576&&og(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;_i(e,t),e=t.pendingProps;var s=ps(t,ft.current);ls(t,n),s=Up(null,t,o,e,s,n);var a=Hp();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Dt(o)?(a=!0,Hi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Mp(t),s.updater=Sc,t.stateNode=s,s._reactInternals=t,Ou(t,o,e,n),t=Bu(null,t,o,!0,a,n)):(t.tag=0,$e&&a&&Rp(t),bt(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(_i(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=gj(o),e=un(o,e),s){case 0:t=Du(null,t,o,e,n);break e;case 1:t=ef(null,t,o,e,n);break e;case 11:t=Xm(null,t,o,e,n);break e;case 14:t=Jm(null,t,o,un(o.type,e),n);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Du(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),ef(e,t,o,s,n);case 3:e:{if(Pg(t),e===null)throw Error(A(387));o=t.pendingProps,a=t.memoizedState,s=a.element,ig(e,t),Yi(t,o,null,n);var l=t.memoizedState;if(o=l.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=xs(Error(A(423)),t),t=tf(e,t,o,n,s);break e}else if(o!==s){s=xs(Error(A(424)),t),t=tf(e,t,o,n,s);break e}else for(It=wr(t.stateNode.containerInfo.firstChild),zt=t,$e=!0,mn=null,n=pg(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),o===s){t=Jn(e,t,n);break e}bt(e,t,o,n)}t=t.child}return t;case 5:return hg(t),e===null&&ku(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,Cu(o,s)?l=null:a!==null&&Cu(o,a)&&(t.flags|=32),Mg(e,t),bt(e,t,l,n),t.child;case 6:return e===null&&ku(t),null;case 13:return Ig(e,t,n);case 4:return Pp(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ms(t,null,o,n):bt(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Xm(e,t,o,s,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,ke(Zi,o._currentValue),o._currentValue=l,a!==null)if(gn(a.value,l)){if(a.children===s.children&&!Lt.current){t=Jn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(a.tag===1){c=Yn(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Nu(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Nu(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}bt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,ls(t,n),s=Jt(s),o=o(s),t.flags|=1,bt(e,t,o,n),t.child;case 14:return o=t.type,s=un(o,t.pendingProps),s=un(o.type,s),Jm(e,t,o,s,n);case 15:return $g(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),_i(e,t),t.tag=1,Dt(o)?(e=!0,Hi(t)):e=!1,ls(t,n),dg(t,o,s),Ou(t,o,s,n),Bu(null,t,o,!0,e,n);case 19:return zg(e,t,n);case 22:return Ag(e,t,n)}throw Error(A(156,t.tag))};function n2(e,t){return kx(e,t)}function xj(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,o){return new xj(e,t,n,o)}function Jp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gj(e){if(typeof e=="function")return Jp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vp)return 11;if(e===bp)return 14}return 2}function Nr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,o,s,a){var l=2;if(o=e,typeof e=="function")Jp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Fo:return io(n.children,s,a,t);case gp:l=8,s|=8;break;case tu:return e=qt(12,n,t,s|2),e.elementType=tu,e.lanes=a,e;case nu:return e=qt(13,n,t,s),e.elementType=nu,e.lanes=a,e;case ru:return e=qt(19,n,t,s),e.elementType=ru,e.lanes=a,e;case ux:return Tc(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cx:l=10;break e;case dx:l=9;break e;case vp:l=11;break e;case bp:l=14;break e;case fr:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=qt(l,n,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function io(e,t,n,o){return e=qt(7,e,o,t),e.lanes=n,e}function Tc(e,t,n,o){return e=qt(22,e,o,t),e.elementType=ux,e.lanes=n,e.stateNode={isHidden:!1},e}function Nd(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function Rd(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vj(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function eh(e,t,n,o,s,a,l,i,c){return e=new vj(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(a),e}function bj(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function r2(e){if(!e)return Or;e=e._reactInternals;e:{if(bo(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Dt(n))return ng(e,n,t)}return t}function o2(e,t,n,o,s,a,l,i,c){return e=eh(n,o,!0,e,s,a,l,i,c),e.context=r2(null),n=e.current,o=jt(),s=kr(n),a=Yn(o,s),a.callback=t??null,Tr(n,a,s),e.current.lanes=s,nl(e,s,o),Bt(e,o),e}function Ec(e,t,n,o){var s=t.current,a=jt(),l=kr(s);return n=r2(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(a,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Tr(s,t,l),e!==null&&(xn(e,s,l,a),yi(e,s,l)),l}function nc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function th(e,t){pf(e,t),(e=e.alternate)&&pf(e,t)}function jj(){return null}var s2=typeof reportError=="function"?reportError:function(e){console.error(e)};function nh(e){this._internalRoot=e}kc.prototype.render=nh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ec(e,t,null,null)};kc.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mo(function(){Ec(null,e,null,null)}),t[Qn]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=$x();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vr.length&&t!==0&&t<vr[n].priority;n++);vr.splice(n,0,e),n===0&&Mx(e)}};function rh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hf(){}function yj(e,t,n,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var d=nc(l);a.call(d)}}var l=o2(t,o,e,0,null,!1,!1,"",hf);return e._reactRootContainer=l,e[Qn]=l.current,Ma(e.nodeType===8?e.parentNode:e),mo(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var i=o;o=function(){var d=nc(c);i.call(d)}}var c=eh(e,0,!1,null,null,!1,!1,"",hf);return e._reactRootContainer=c,e[Qn]=c.current,Ma(e.nodeType===8?e.parentNode:e),mo(function(){Ec(t,c,n,o)}),c}function Rc(e,t,n,o,s){var a=n._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var i=s;s=function(){var c=nc(l);i.call(c)}}Ec(t,l,e,s)}else l=yj(n,t,e,s,o);return nc(l)}Dx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sa(t.pendingLanes);n!==0&&(Sp(t,n|1),Bt(t,Ze()),!(be&6)&&(gs=Ze()+500,Pr()))}break;case 13:mo(function(){var o=Xn(e,1);if(o!==null){var s=jt();xn(o,e,1,s)}}),th(e,1)}};Cp=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var n=jt();xn(t,e,134217728,n)}th(e,134217728)}};Bx=function(e){if(e.tag===13){var t=kr(e),n=Xn(e,t);if(n!==null){var o=jt();xn(n,e,t,o)}th(e,t)}};$x=function(){return _e};Ax=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}};hu=function(e,t,n){switch(t){case"input":if(au(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=jc(o);if(!s)throw Error(A(90));hx(o),au(o,s)}}}break;case"textarea":fx(e,n);break;case"select":t=n.value,t!=null&&rs(e,!!n.multiple,t,!1)}};Sx=qp;Cx=mo;var Sj={usingClientEntryPoint:!1,Events:[ol,Wo,jc,jx,yx,qp]},Ks={findFiberByHostInstance:no,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cj={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tx(e),e===null?null:e.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||jj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{xc=Jl.inject(Cj),Ln=Jl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sj;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(t))throw Error(A(200));return bj(e,t,null,n)};Ht.createRoot=function(e,t){if(!rh(e))throw Error(A(299));var n=!1,o="",s=s2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=eh(e,1,!1,null,null,n,!1,o,s),e[Qn]=t.current,Ma(e.nodeType===8?e.parentNode:e),new nh(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Tx(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return mo(e)};Ht.hydrate=function(e,t,n){if(!Nc(t))throw Error(A(200));return Rc(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!rh(e))throw Error(A(405));var o=n!=null&&n.hydratedSources||null,s=!1,a="",l=s2;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=o2(t,null,e,1,n??null,s,!1,a,l),e[Qn]=t.current,Ma(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new kc(t)};Ht.render=function(e,t,n){if(!Nc(t))throw Error(A(200));return Rc(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!Nc(e))throw Error(A(40));return e._reactRootContainer?(mo(function(){Rc(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};Ht.unstable_batchedUpdates=qp;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Nc(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Rc(e,t,n,!1,o)};Ht.version="18.2.0-next-9e3b772b8-20220608";function a2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a2)}catch(e){console.error(e)}}a2(),ox.exports=Ht;var Vn=ox.exports;const _j=nr(Vn),wj=K1({__proto__:null,default:_j},[Vn]);var mf=Vn;Jd.createRoot=mf.createRoot,Jd.hydrateRoot=mf.hydrateRoot;function Tj(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function Ej(e,t){if(e==null)return{};var n=Tj(e,t),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Zu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function kj(e){if(Array.isArray(e))return Zu(e)}function Nj(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rj(e,t){if(e){if(typeof e=="string")return Zu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zu(e,t)}}function Oj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lj(e){return kj(e)||Nj(e)||Rj(e)||Oj()}function Za(e){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Za(e)}function Dj(e,t){if(Za(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Za(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bj(e){var t=Dj(e,"string");return Za(t)=="symbol"?t:String(t)}function l2(e,t,n){return t=Bj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ku.apply(this,arguments)}function ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Xo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ff(Object(n),!0).forEach(function(o){l2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ff(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function $j(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Od={};function Aj(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Od[t]||(Od[t]=$j(e)),Od[t]}function Mj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(a){return a!=="token"}),s=Aj(o);return s.reduce(function(a,l){return Xo(Xo({},a),n[l])},t)}function xf(e){return e.join(" ")}function Pj(e,t){var n=0;return function(o){return n+=1,o.map(function(s,a){return i2({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function i2(e){var t=e.node,n=e.stylesheet,o=e.style,s=o===void 0?{}:o,a=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=Pj(n,a),f;if(!a)f=Xo(Xo({},i),{},{className:xf(i.className)});else{var b=Object.keys(n).reduce(function(g,h){return h.split(".").forEach(function(m){g.includes(m)||g.push(m)}),g},[]),j=i.className&&i.className.includes("token")?["token"]:[],y=i.className&&j.concat(i.className.filter(function(g){return!b.includes(g)}));f=Xo(Xo({},i),{},{className:xf(y)||void 0,style:Mj(i.className,Object.assign({},i.style,s),n)})}var w=p(t.children);return V.createElement(d,Ku({key:l},f),w)}}const Ij=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var zj=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gf(Object(n),!0).forEach(function(o){l2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Fj=/\n/g;function Uj(e){return e.match(Fj)}function Hj(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(s,a){var l=a+n;return V.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function Vj(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,s=o===void 0?{float:"left",paddingRight:"10px"}:o,a=e.numberStyle,l=a===void 0?{}:a,i=e.startingLineNumber;return V.createElement("code",{style:Object.assign({},n,s)},Hj({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function Wj(e){return"".concat(e.toString().length,".25em")}function c2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function d2(e,t,n){var o={display:"inline-block",minWidth:Wj(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,a=Nn(Nn({},o),s);return a}function ki(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,s=e.largestLineNumber,a=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,f=typeof i=="function"?i(n):i;if(f.className=d,n&&a){var b=d2(o,n,s);t.unshift(c2(n,b))}return p&u&&(f.style=Nn(Nn({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function u2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var s=e[o];if(s.type==="text")n.push(ki({children:[s],className:Lj(new Set(t))}));else if(s.children){var a=t.concat(s.properties.className);u2(s.children,a).forEach(function(l){return n.push(l)})}}return n}function Zj(e,t,n,o,s,a,l,i,c){var d,u=u2(e.value),p=[],f=-1,b=0;function j(C,x){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ki({children:C,lineNumber:x,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:s,lineProps:n,className:_,showLineNumbers:o,wrapLongLines:c})}function y(C,x){if(o&&x&&s){var _=d2(i,x,l);C.unshift(c2(x,_))}return C}function w(C,x){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||_.length>0?j(C,x,_):y(C,x)}for(var g=function(){var x=u[b],_=x.children[0].value,k=Uj(_);if(k){var N=_.split(`
`);N.forEach(function(O,D){var U=o&&p.length+a,Z={type:"text",value:"".concat(O,`
`)};if(D===0){var te=u.slice(f+1,b).concat(ki({children:[Z],className:x.properties.className})),we=w(te,U);p.push(we)}else if(D===N.length-1){var je=u[b+1]&&u[b+1].children&&u[b+1].children[0],X={type:"text",value:"".concat(O)};if(je){var $=ki({children:[X],className:x.properties.className});u.splice(b+1,0,$)}else{var P=[X],I=w(P,U,x.properties.className);p.push(I)}}else{var W=[Z],Y=w(W,U,x.properties.className);p.push(Y)}}),f=b}b++};b<u.length;)g();if(f!==u.length-1){var h=u.slice(f+1,u.length);if(h&&h.length){var m=o&&p.length+a,S=w(h,m);p.push(S)}}return t?p:(d=[]).concat.apply(d,p)}function Kj(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(s,a){return i2({node:s,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(a)})})}function p2(e){return e&&typeof e.highlightAuto<"u"}function Yj(e){var t=e.astGenerator,n=e.language,o=e.code,s=e.defaultCodeValue;if(p2(t)){var a=Ij(t,n);return n==="text"?{value:s,language:"text"}:a?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:s}}catch{return{value:s}}}function Gj(e,t){return function(o){var s=o.language,a=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:s?"language-".concat(s):void 0,style:Nn(Nn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(s,'"]')])}:u,f=o.useInlineStyles,b=f===void 0?!0:f,j=o.showLineNumbers,y=j===void 0?!1:j,w=o.showInlineLineNumbers,g=w===void 0?!0:w,h=o.startingLineNumber,m=h===void 0?1:h,S=o.lineNumberContainerStyle,C=o.lineNumberStyle,x=C===void 0?{}:C,_=o.wrapLines,k=o.wrapLongLines,N=k===void 0?!1:k,O=o.lineProps,D=O===void 0?{}:O,U=o.renderer,Z=o.PreTag,te=Z===void 0?"pre":Z,we=o.CodeTag,je=we===void 0?"code":we,X=o.code,$=X===void 0?(Array.isArray(a)?a[0]:a)||"":X,P=o.astGenerator,I=Ej(o,zj);P=P||e;var W=y?V.createElement(Vj,{containerStyle:S,codeStyle:p.style||{},numberStyle:x,startingLineNumber:m,codeString:$}):null,Y=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Te=p2(P)?"hljs":"prismjs",ce=b?Object.assign({},I,{style:Object.assign({},Y,d)}):Object.assign({},I,{className:I.className?"".concat(Te," ").concat(I.className):Te,style:Object.assign({},d)});if(N?p.style=Nn(Nn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Nn(Nn({},p.style),{},{whiteSpace:"pre"}),!P)return V.createElement(te,ce,W,V.createElement(je,p,$));(_===void 0&&U||N)&&(_=!0),U=U||Kj;var Se=[{type:"text",value:$}],ie=Yj({astGenerator:P,language:s,code:$,defaultCodeValue:Se});ie.language===null&&(ie.value=Se);var Le=ie.value.length+m,dt=Zj(ie,_,D,y,g,m,Le,x,N);return V.createElement(te,ce,V.createElement(je,p,!g&&W,U({rows:dt,stylesheet:i,useInlineStyles:b})))}}var qj=Xj,Qj=Object.prototype.hasOwnProperty;function Xj(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)Qj.call(n,o)&&(e[o]=n[o])}return e}var h2=m2,oh=m2.prototype;oh.space=null;oh.normal={};oh.property={};function m2(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var vf=qj,Jj=h2,ey=ty;function ty(e){for(var t=e.length,n=[],o=[],s=-1,a,l;++s<t;)a=e[s],n.push(a.property),o.push(a.normal),l=a.space;return new Jj(vf.apply(null,n),vf.apply(null,o),l)}var sh=ny;function ny(e){return e.toLowerCase()}var f2=x2,nn=x2.prototype;nn.space=null;nn.attribute=null;nn.property=null;nn.boolean=!1;nn.booleanish=!1;nn.overloadedBoolean=!1;nn.number=!1;nn.commaSeparated=!1;nn.spaceSeparated=!1;nn.commaOrSpaceSeparated=!1;nn.mustUseProperty=!1;nn.defined=!1;function x2(e,t){this.property=e,this.attribute=t}var An={},ry=0;An.boolean=jo();An.booleanish=jo();An.overloadedBoolean=jo();An.number=jo();An.spaceSeparated=jo();An.commaSeparated=jo();An.commaOrSpaceSeparated=jo();function jo(){return Math.pow(2,++ry)}var g2=f2,bf=An,v2=ah;ah.prototype=new g2;ah.prototype.defined=!0;var b2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],oy=b2.length;function ah(e,t,n,o){var s=-1,a;for(jf(this,"space",o),g2.call(this,e,t);++s<oy;)a=b2[s],jf(this,a,(n&bf[a])===bf[a])}function jf(e,t,n){n&&(e[t]=n)}var yf=sh,sy=h2,ay=v2,al=ly;function ly(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},s=e.properties,a=e.transform,l={},i={},c,d;for(c in s)d=new ay(c,a(o,c),s[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[yf(c)]=c,i[yf(d.attribute)]=c;return new sy(l,i,t)}var iy=al,cy=iy({space:"xlink",transform:dy,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function dy(e,t){return"xlink:"+t.slice(5).toLowerCase()}var uy=al,py=uy({space:"xml",transform:hy,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function hy(e,t){return"xml:"+t.slice(3).toLowerCase()}var my=fy;function fy(e,t){return t in e?e[t]:t}var xy=my,j2=gy;function gy(e,t){return xy(e,t.toLowerCase())}var vy=al,by=j2,jy=vy({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:by,properties:{xmlns:null,xmlnsXLink:null}}),lh=An,yy=al,kt=lh.booleanish,Wt=lh.number,Xr=lh.spaceSeparated,Sy=yy({transform:Cy,properties:{ariaActiveDescendant:null,ariaAtomic:kt,ariaAutoComplete:null,ariaBusy:kt,ariaChecked:kt,ariaColCount:Wt,ariaColIndex:Wt,ariaColSpan:Wt,ariaControls:Xr,ariaCurrent:null,ariaDescribedBy:Xr,ariaDetails:null,ariaDisabled:kt,ariaDropEffect:Xr,ariaErrorMessage:null,ariaExpanded:kt,ariaFlowTo:Xr,ariaGrabbed:kt,ariaHasPopup:null,ariaHidden:kt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xr,ariaLevel:Wt,ariaLive:null,ariaModal:kt,ariaMultiLine:kt,ariaMultiSelectable:kt,ariaOrientation:null,ariaOwns:Xr,ariaPlaceholder:null,ariaPosInSet:Wt,ariaPressed:kt,ariaReadOnly:kt,ariaRelevant:null,ariaRequired:kt,ariaRoleDescription:Xr,ariaRowCount:Wt,ariaRowIndex:Wt,ariaRowSpan:Wt,ariaSelected:kt,ariaSetSize:Wt,ariaSort:null,ariaValueMax:Wt,ariaValueMin:Wt,ariaValueNow:Wt,ariaValueText:null,role:null}});function Cy(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Cs=An,_y=al,wy=j2,he=Cs.boolean,Ty=Cs.overloadedBoolean,Ys=Cs.booleanish,Ne=Cs.number,vt=Cs.spaceSeparated,ei=Cs.commaSeparated,Ey=_y({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:wy,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ei,acceptCharset:vt,accessKey:vt,action:null,allow:null,allowFullScreen:he,allowPaymentRequest:he,allowUserMedia:he,alt:null,as:null,async:he,autoCapitalize:null,autoComplete:vt,autoFocus:he,autoPlay:he,capture:he,charSet:null,checked:he,cite:null,className:vt,cols:Ne,colSpan:null,content:null,contentEditable:Ys,controls:he,controlsList:vt,coords:Ne|ei,crossOrigin:null,data:null,dateTime:null,decoding:null,default:he,defer:he,dir:null,dirName:null,disabled:he,download:Ty,draggable:Ys,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:he,formTarget:null,headers:vt,height:Ne,hidden:he,high:Ne,href:null,hrefLang:null,htmlFor:vt,httpEquiv:vt,id:null,imageSizes:null,imageSrcSet:ei,inputMode:null,integrity:null,is:null,isMap:he,itemId:null,itemProp:vt,itemRef:vt,itemScope:he,itemType:vt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:he,low:Ne,manifest:null,max:null,maxLength:Ne,media:null,method:null,min:null,minLength:Ne,multiple:he,muted:he,name:null,nonce:null,noModule:he,noValidate:he,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:he,optimum:Ne,pattern:null,ping:vt,placeholder:null,playsInline:he,poster:null,preload:null,readOnly:he,referrerPolicy:null,rel:vt,required:he,reversed:he,rows:Ne,rowSpan:Ne,sandbox:vt,scope:null,scoped:he,seamless:he,selected:he,shape:null,size:Ne,sizes:null,slot:null,span:Ne,spellCheck:Ys,src:null,srcDoc:null,srcLang:null,srcSet:ei,start:Ne,step:null,style:null,tabIndex:Ne,target:null,title:null,translate:null,type:null,typeMustMatch:he,useMap:null,value:Ys,width:Ne,wrap:null,align:null,aLink:null,archive:vt,axis:null,background:null,bgColor:null,border:Ne,borderColor:null,bottomMargin:Ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:he,declare:he,event:null,face:null,frame:null,frameBorder:null,hSpace:Ne,leftMargin:Ne,link:null,longDesc:null,lowSrc:null,marginHeight:Ne,marginWidth:Ne,noResize:he,noHref:he,noShade:he,noWrap:he,object:null,profile:null,prompt:null,rev:null,rightMargin:Ne,rules:null,scheme:null,scrolling:Ys,standby:null,summary:null,text:null,topMargin:Ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:he,disableRemotePlayback:he,prefix:null,property:null,results:Ne,security:null,unselectable:null}}),ky=ey,Ny=cy,Ry=py,Oy=jy,Ly=Sy,Dy=Ey,By=ky([Ry,Ny,Oy,Ly,Dy]),$y=sh,Ay=v2,My=f2,ih="data",Py=Fy,Iy=/^data[-\w.:]+$/i,y2=/-[a-z]/g,zy=/[A-Z]/g;function Fy(e,t){var n=$y(t),o=t,s=My;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===ih&&Iy.test(t)&&(t.charAt(4)==="-"?o=Uy(t):t=Hy(t),s=Ay),new s(o,t))}function Uy(e){var t=e.slice(5).replace(y2,Wy);return ih+t.charAt(0).toUpperCase()+t.slice(1)}function Hy(e){var t=e.slice(4);return y2.test(t)?e:(t=t.replace(zy,Vy),t.charAt(0)!=="-"&&(t="-"+t),ih+t)}function Vy(e){return"-"+e.toLowerCase()}function Wy(e){return e.charAt(1).toUpperCase()}var Zy=Ky,Sf=/[#.]/g;function Ky(e,t){for(var n=e||"",o=t||"div",s={},a=0,l,i,c;a<n.length;)Sf.lastIndex=a,c=Sf.exec(n),l=n.slice(a,c?c.index:n.length),l&&(i?i==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:o=l,a+=l.length),c&&(i=c[0],a++);return{type:"element",tagName:o,properties:s,children:[]}}var ch={};ch.parse=qy;ch.stringify=Qy;var Cf="",Yy=" ",Gy=/[ \t\n\r\f]+/g;function qy(e){var t=String(e||Cf).trim();return t===Cf?[]:t.split(Gy)}function Qy(e){return e.join(Yy).trim()}var dh={};dh.parse=Xy;dh.stringify=Jy;var Yu=",",_f=" ",la="";function Xy(e){for(var t=[],n=String(e||la),o=n.indexOf(Yu),s=0,a=!1,l;!a;)o===-1&&(o=n.length,a=!0),l=n.slice(s,o).trim(),(l||!a)&&t.push(l),s=o+1,o=n.indexOf(Yu,s);return t}function Jy(e,t){var n=t||{},o=n.padLeft===!1?la:_f,s=n.padRight?_f:la;return e[e.length-1]===la&&(e=e.concat(la)),e.join(s+Yu+o).trim()}var e7=Py,wf=sh,t7=Zy,Tf=ch.parse,Ef=dh.parse,n7=o7,r7={}.hasOwnProperty;function o7(e,t,n){var o=n?c7(n):null;return s;function s(l,i){var c=t7(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&r7.call(o,u)?o[u]:u,i&&s7(i,c)&&(d.unshift(i),i=null),i)for(p in i)a(c.properties,p,i[p]);return S2(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(l,i,c){var d,u,p;c==null||c!==c||(d=e7(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=Tf(p):d.commaSeparated?p=Ef(p):d.commaOrSpaceSeparated&&(p=Tf(Ef(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=i7(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=l7(d,u,p))}}function s7(e,t){return typeof e=="string"||"length"in e||a7(t.tagName,e)}function a7(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function S2(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)S2(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function l7(e,t,n){var o,s,a;if(typeof n!="object"||!("length"in n))return kf(e,t,n);for(s=n.length,o=-1,a=[];++o<s;)a[o]=kf(e,t,n[o]);return a}function kf(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||wf(n)===wf(t))&&(o=!0),o}function i7(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function c7(e){for(var t=e.length,n=-1,o={},s;++n<t;)s=e[n],o[s.toLowerCase()]=s;return o}var d7=By,u7=n7,C2=u7(d7,"div");C2.displayName="html";var p7=C2,h7=p7;const m7="Æ",f7="&",x7="Á",g7="Â",v7="À",b7="Å",j7="Ã",y7="Ä",S7="©",C7="Ç",_7="Ð",w7="É",T7="Ê",E7="È",k7="Ë",N7=">",R7="Í",O7="Î",L7="Ì",D7="Ï",B7="<",$7="Ñ",A7="Ó",M7="Ô",P7="Ò",I7="Ø",z7="Õ",F7="Ö",U7='"',H7="®",V7="Þ",W7="Ú",Z7="Û",K7="Ù",Y7="Ü",G7="Ý",q7="á",Q7="â",X7="´",J7="æ",eS="à",tS="&",nS="å",rS="ã",oS="ä",sS="¦",aS="ç",lS="¸",iS="¢",cS="©",dS="¤",uS="°",pS="÷",hS="é",mS="ê",fS="è",xS="ð",gS="ë",vS="½",bS="¼",jS="¾",yS=">",SS="í",CS="î",_S="¡",wS="ì",TS="¿",ES="ï",kS="«",NS="<",RS="¯",OS="µ",LS="·",DS=" ",BS="¬",$S="ñ",AS="ó",MS="ô",PS="ò",IS="ª",zS="º",FS="ø",US="õ",HS="ö",VS="¶",WS="±",ZS="£",KS='"',YS="»",GS="®",qS="§",QS="­",XS="¹",JS="²",e9="³",t9="ß",n9="þ",r9="×",o9="ú",s9="û",a9="ù",l9="¨",i9="ü",c9="ý",d9="¥",u9="ÿ",p9={AElig:m7,AMP:f7,Aacute:x7,Acirc:g7,Agrave:v7,Aring:b7,Atilde:j7,Auml:y7,COPY:S7,Ccedil:C7,ETH:_7,Eacute:w7,Ecirc:T7,Egrave:E7,Euml:k7,GT:N7,Iacute:R7,Icirc:O7,Igrave:L7,Iuml:D7,LT:B7,Ntilde:$7,Oacute:A7,Ocirc:M7,Ograve:P7,Oslash:I7,Otilde:z7,Ouml:F7,QUOT:U7,REG:H7,THORN:V7,Uacute:W7,Ucirc:Z7,Ugrave:K7,Uuml:Y7,Yacute:G7,aacute:q7,acirc:Q7,acute:X7,aelig:J7,agrave:eS,amp:tS,aring:nS,atilde:rS,auml:oS,brvbar:sS,ccedil:aS,cedil:lS,cent:iS,copy:cS,curren:dS,deg:uS,divide:pS,eacute:hS,ecirc:mS,egrave:fS,eth:xS,euml:gS,frac12:vS,frac14:bS,frac34:jS,gt:yS,iacute:SS,icirc:CS,iexcl:_S,igrave:wS,iquest:TS,iuml:ES,laquo:kS,lt:NS,macr:RS,micro:OS,middot:LS,nbsp:DS,not:BS,ntilde:$S,oacute:AS,ocirc:MS,ograve:PS,ordf:IS,ordm:zS,oslash:FS,otilde:US,ouml:HS,para:VS,plusmn:WS,pound:ZS,quot:KS,raquo:YS,reg:GS,sect:qS,shy:QS,sup1:XS,sup2:JS,sup3:e9,szlig:t9,thorn:n9,times:r9,uacute:o9,ucirc:s9,ugrave:a9,uml:l9,uuml:i9,yacute:c9,yen:d9,yuml:u9},h9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var _2=m9;function m9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var f9=x9;function x9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var g9=v9;function v9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var b9=g9,j9=_2,y9=S9;function S9(e){return b9(e)||j9(e)}var ti,C9=59,_9=w9;function w9(e){var t="&"+e+";",n;return ti=ti||document.createElement("i"),ti.innerHTML=t,n=ti.textContent,n.charCodeAt(n.length-1)===C9&&e!=="semi"||n===t?!1:n}var Nf=p9,Rf=h9,T9=_2,E9=f9,w2=y9,k9=_9,N9=U9,R9={}.hasOwnProperty,Bo=String.fromCharCode,O9=Function.prototype,Of={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},L9=9,Lf=10,D9=12,B9=32,Df=38,$9=59,A9=60,M9=61,P9=35,I9=88,z9=120,F9=65533,Mo="named",uh="hexadecimal",ph="decimal",hh={};hh[uh]=16;hh[ph]=10;var Oc={};Oc[Mo]=w2;Oc[ph]=T9;Oc[uh]=E9;var T2=1,E2=2,k2=3,N2=4,R2=5,Gu=6,O2=7,Ir={};Ir[T2]="Named character references must be terminated by a semicolon";Ir[E2]="Numeric character references must be terminated by a semicolon";Ir[k2]="Named character references cannot be empty";Ir[N2]="Numeric character references cannot be empty";Ir[R2]="Named character references must be known";Ir[Gu]="Numeric character references cannot be disallowed";Ir[O2]="Numeric character references cannot be outside the permissible Unicode range";function U9(e,t){var n={},o,s;t||(t={});for(s in Of)o=t[s],n[s]=o??Of[s];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),H9(e,n)}function H9(e,t){var n=t.additional,o=t.nonTerminated,s=t.text,a=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],f=e.length,b=0,j=-1,y=u.column||1,w=u.line||1,g="",h=[],m,S,C,x,_,k,N,O,D,U,Z,te,we,je,X,$,P,I,W;for(typeof n=="string"&&(n=n.charCodeAt(0)),$=Y(),O=l?Te:O9,b--,f++;++b<f;)if(_===Lf&&(y=p[j]||1),_=e.charCodeAt(b),_===Df){if(N=e.charCodeAt(b+1),N===L9||N===Lf||N===D9||N===B9||N===Df||N===A9||N!==N||n&&N===n){g+=Bo(_),y++;continue}for(we=b+1,te=we,W=we,N===P9?(W=++te,N=e.charCodeAt(W),N===I9||N===z9?(je=uh,W=++te):je=ph):je=Mo,m="",Z="",x="",X=Oc[je],W--;++W<f&&(N=e.charCodeAt(W),!!X(N));)x+=Bo(N),je===Mo&&R9.call(Nf,x)&&(m=x,Z=Nf[x]);C=e.charCodeAt(W)===$9,C&&(W++,S=je===Mo?k9(x):!1,S&&(m=x,Z=S)),I=1+W-we,!C&&!o||(x?je===Mo?(C&&!Z?O(R2,1):(m!==x&&(W=te+m.length,I=1+W-te,C=!1),C||(D=m?T2:k2,t.attribute?(N=e.charCodeAt(W),N===M9?(O(D,I),Z=null):w2(N)?Z=null:O(D,I)):O(D,I))),k=Z):(C||O(E2,I),k=parseInt(x,hh[je]),V9(k)?(O(O2,I),k=Bo(F9)):k in Rf?(O(Gu,I),k=Rf[k]):(U="",W9(k)&&O(Gu,I),k>65535&&(k-=65536,U+=Bo(k>>>10|55296),k=56320|k&1023),k=U+Bo(k))):je!==Mo&&O(N2,I)),k?(ce(),$=Y(),b=W-1,y+=W-we+1,h.push(k),P=Y(),P.offset++,a&&a.call(c,k,{start:$,end:P},e.slice(we-1,W)),$=P):(x=e.slice(we-1,W),g+=x,y+=x.length,b=W-1)}else _===10&&(w++,j++,y=0),_===_?(g+=Bo(_),y++):ce();return h.join("");function Y(){return{line:w,column:y,offset:b+(u.offset||0)}}function Te(Se,ie){var Le=Y();Le.column+=ie,Le.offset+=ie,l.call(d,Ir[Se],Le,Se)}function ce(){g&&(h.push(g),s&&s.call(i,g,{start:$,end:Y()}),g="")}}function V9(e){return e>=55296&&e<=57343||e>1114111}function W9(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var L2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof c?new c(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++a}),h.__id},clone:function h(m,S){S=S||{};var C,x;switch(i.util.type(m)){case"Object":if(x=i.util.objId(m),S[x])return S[x];C={},S[x]=C;for(var _ in m)m.hasOwnProperty(_)&&(C[_]=h(m[_],S));return C;case"Array":return x=i.util.objId(m),S[x]?S[x]:(C=[],S[x]=C,m.forEach(function(k,N){C[N]=h(k,S)}),C);default:return m}},getLanguage:function(h){for(;h;){var m=s.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var S in m)if(m[S].src==h)return m[S]}return null}},isActive:function(h,m,S){for(var C="no-"+m;h;){var x=h.classList;if(x.contains(m))return!0;if(x.contains(C))return!1;h=h.parentElement}return!!S}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,m){var S=i.util.clone(i.languages[h]);for(var C in m)S[C]=m[C];return S},insertBefore:function(h,m,S,C){C=C||i.languages;var x=C[h],_={};for(var k in x)if(x.hasOwnProperty(k)){if(k==m)for(var N in S)S.hasOwnProperty(N)&&(_[N]=S[N]);S.hasOwnProperty(k)||(_[k]=x[k])}var O=C[h];return C[h]=_,i.languages.DFS(i.languages,function(D,U){U===O&&D!=h&&(this[D]=_)}),_},DFS:function h(m,S,C,x){x=x||{};var _=i.util.objId;for(var k in m)if(m.hasOwnProperty(k)){S.call(m,k,m[k],C||k);var N=m[k],O=i.util.type(N);O==="Object"&&!x[_(N)]?(x[_(N)]=!0,h(N,S,null,x)):O==="Array"&&!x[_(N)]&&(x[_(N)]=!0,h(N,S,k,x))}}},plugins:{},highlightAll:function(h,m){i.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,S){var C={callback:S,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var x=0,_;_=C.elements[x++];)i.highlightElement(_,m===!0,C.callback)},highlightElement:function(h,m,S){var C=i.util.getLanguage(h),x=i.languages[C];i.util.setLanguage(h,C);var _=h.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(_,C);var k=h.textContent,N={element:h,language:C,grammar:x,code:k};function O(U){N.highlightedCode=U,i.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,i.hooks.run("after-highlight",N),i.hooks.run("complete",N),S&&S.call(N.element)}if(i.hooks.run("before-sanity-check",N),_=N.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!N.code){i.hooks.run("complete",N),S&&S.call(N.element);return}if(i.hooks.run("before-highlight",N),!N.grammar){O(i.util.encode(N.code));return}if(m&&o.Worker){var D=new Worker(i.filename);D.onmessage=function(U){O(U.data)},D.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else O(i.highlight(N.code,N.grammar,N.language))},highlight:function(h,m,S){var C={code:h,grammar:m,language:S};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,m){var S=m.rest;if(S){for(var C in S)m[C]=S[C];delete m.rest}var x=new p;return f(x,x.head,h),u(h,x,m,x.head,0),j(x)},hooks:{all:{},add:function(h,m){var S=i.hooks.all;S[h]=S[h]||[],S[h].push(m)},run:function(h,m){var S=i.hooks.all[h];if(!(!S||!S.length))for(var C=0,x;x=S[C++];)x(m)}},Token:c};o.Prism=i;function c(h,m,S,C){this.type=h,this.content=m,this.alias=S,this.length=(C||"").length|0}c.stringify=function h(m,S){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(O){C+=h(O,S)}),C}var x={type:m.type,content:h(m.content,S),tag:"span",classes:["token",m.type],attributes:{},language:S},_=m.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(x.classes,_):x.classes.push(_)),i.hooks.run("wrap",x);var k="";for(var N in x.attributes)k+=" "+N+'="'+(x.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+k+">"+x.content+"</"+x.tag+">"};function d(h,m,S,C){h.lastIndex=m;var x=h.exec(S);if(x&&C&&x[1]){var _=x[1].length;x.index+=_,x[0]=x[0].slice(_)}return x}function u(h,m,S,C,x,_){for(var k in S)if(!(!S.hasOwnProperty(k)||!S[k])){var N=S[k];N=Array.isArray(N)?N:[N];for(var O=0;O<N.length;++O){if(_&&_.cause==k+","+O)return;var D=N[O],U=D.inside,Z=!!D.lookbehind,te=!!D.greedy,we=D.alias;if(te&&!D.pattern.global){var je=D.pattern.toString().match(/[imsuy]*$/)[0];D.pattern=RegExp(D.pattern.source,je+"g")}for(var X=D.pattern||D,$=C.next,P=x;$!==m.tail&&!(_&&P>=_.reach);P+=$.value.length,$=$.next){var I=$.value;if(m.length>h.length)return;if(!(I instanceof c)){var W=1,Y;if(te){if(Y=d(X,P,h,Z),!Y||Y.index>=h.length)break;var ie=Y.index,Te=Y.index+Y[0].length,ce=P;for(ce+=$.value.length;ie>=ce;)$=$.next,ce+=$.value.length;if(ce-=$.value.length,P=ce,$.value instanceof c)continue;for(var Se=$;Se!==m.tail&&(ce<Te||typeof Se.value=="string");Se=Se.next)W++,ce+=Se.value.length;W--,I=h.slice(P,ce),Y.index-=P}else if(Y=d(X,0,I,Z),!Y)continue;var ie=Y.index,Le=Y[0],dt=I.slice(0,ie),wt=I.slice(ie+Le.length),fe=P+I.length;_&&fe>_.reach&&(_.reach=fe);var De=$.prev;dt&&(De=f(m,De,dt),P+=dt.length),b(m,De,W);var et=new c(k,U?i.tokenize(Le,U):Le,we,Le);if($=f(m,De,et),wt&&f(m,$,wt),W>1){var At={cause:k+","+O,reach:fe};u(h,m,S,$.prev,P,At),_&&At.reach>_.reach&&(_.reach=At.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,S){var C=m.next,x={value:S,prev:m,next:C};return m.next=x,C.prev=x,h.length++,x}function b(h,m,S){for(var C=m.next,x=0;x<S&&C!==h.tail;x++)C=C.next;m.next=C,C.prev=m,h.length-=x}function j(h){for(var m=[],S=h.head.next;S!==h.tail;)m.push(S.value),S=S.next;return m}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(h){var m=JSON.parse(h.data),S=m.language,C=m.code,x=m.immediateClose;o.postMessage(i.highlight(C,i.languages[S],S)),x&&o.close()},!1)),i;var y=i.util.currentScript();y&&(i.filename=y.src,y.hasAttribute("data-manual")&&(i.manual=!0));function w(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",w):window.requestAnimationFrame?window.requestAnimationFrame(w):window.setTimeout(w,16)}return i}(t);e.exports&&(e.exports=n),typeof Li<"u"&&(Li.Prism=n)})(L2);var Z9=L2.exports,K9=mh;mh.displayName="markup";mh.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function mh(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var D2=fh;fh.displayName="css";fh.aliases=[];function fh(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const Y9=nr(D2);var G9=xh;xh.displayName="clike";xh.aliases=[];function xh(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var q9=gh;gh.displayName="javascript";gh.aliases=["js"];function gh(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ia=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Li=="object"?Li:{},Q9=hC();ia.Prism={manual:!0,disableWorkerMessageHandler:!0};var X9=h7,J9=N9,B2=Z9,eC=K9,tC=D2,nC=G9,rC=q9;Q9();var vh={}.hasOwnProperty;function $2(){}$2.prototype=B2;var Ge=new $2,oC=Ge;Ge.highlight=aC;Ge.register=ll;Ge.alias=sC;Ge.registered=lC;Ge.listLanguages=iC;ll(eC);ll(tC);ll(nC);ll(rC);Ge.util.encode=uC;Ge.Token.stringify=cC;function ll(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function sC(e,t){var n=Ge.languages,o=e,s,a,l,i;t&&(o={},o[e]=t);for(s in o)for(a=o[s],a=typeof a=="string"?[a]:a,l=a.length,i=-1;++i<l;)n[a[i]]=n[s]}function aC(e,t){var n=B2.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(vh.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function lC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return vh.call(Ge.languages,e)}function iC(){var e=Ge.languages,t=[],n;for(n in e)vh.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function cC(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?dC(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),X9(o.tag+"."+o.classes.join("."),pC(o.attributes),o.content))}function dC(e,t){for(var n=[],o=e.length,s=-1,a;++s<o;)a=e[s],a!==""&&a!==null&&a!==void 0&&n.push(a);for(s=-1,o=n.length;++s<o;)a=n[s],n[s]=Ge.Token.stringify(a,t,n);return n}function uC(e){return e}function pC(e){var t;for(t in e)e[t]=J9(e[t]);return e}function hC(){var e="Prism"in ia,t=e?ia.Prism:void 0;return n;function n(){e?ia.Prism=t:delete ia.Prism,e=void 0,t=void 0}}const bh=nr(oC);var jh=Gj(bh,{});jh.registerLanguage=function(e,t){return bh.register(t)};jh.alias=function(e,t){return bh.alias(e,t)};const yo=jh;var mC=yh;yh.displayName="bash";yh.aliases=["shell"];function yh(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,i=0;i<a.length;i++)l[a[i]]=t.languages.bash[a[i]];t.languages.shell=t.languages.bash})(e)}const fC=nr(mC);var xC=Sh;Sh.displayName="json";Sh.aliases=["webmanifest"];function Sh(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const gC=nr(xC);var vC=Ch;Ch.displayName="jsx";Ch.aliases=[];function Ch(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return a}),RegExp(d,u)}a=l(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var f=d[p],b=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:i(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:b=!0),(b||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var j=i(f);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(j+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(j=i(d[p-1])+j,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",j,null,j)}f.content&&typeof f.content!="string"&&c(f.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const bC=nr(vC);var jC=_h;_h.displayName="scss";_h.aliases=[];function _h(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const yC=nr(jC);var SC=wh;wh.displayName="yaml";wh.aliases=["yml"];function wh(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,s="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return s})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const CC=nr(SC);function A2(e){return typeof e=="boolean"}function So(e){return typeof e=="string"}function Th(e){return typeof e=="number"}function Eh(e){return Number.isInteger(e)}function _s(e){return Array.isArray(e)}function Lc(e){return typeof e=="function"}function _C(e){return e instanceof RegExp}function Co(e){return typeof e=="object"&&!_s(e)&&!M2(e)}function wC(e){return e===void 0}function M2(e){return e===null}function ge(e){return!(wC(e)||M2(e))}function Dc(e){return!ge(e)}function P2(...e){throw new Error(e.join(""))}const Bc=(e,...t)=>Lc(e)?e(...t):e;function Ce(){}const I2=e=>e;function TC(){return Intl.DateTimeFormat().resolvedOptions().locale}let kh={locale:TC(),currency:"GBP",currencySign:"£",thousands:","};const EC=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((s,a)=>s+a*o)};function kC(e,t={}){return new Intl.NumberFormat(t.locale||kh.locale,t).format(e)}function NC(e,t={}){return kC(e,{style:"currency",currency:kh.currency,...t})}function ca(e,t=kh.thousands){if(Dc(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function z2(e,t=/,\s*|\s+/){return Dc(e)?[]:So(e)?e.length?e.split(t):[]:_s(e)?e:[e]}function Ka(e,t=!0,n={}){return Co(e)?e:z2(e).reduce((o,s)=>(o[s]=Lc(t)?t(s):t,o),n)}function F2(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const RC=F2;function OC(e){if(Lc(e))return e;if(_C(e))return t=>e.test(t);if(Co(e))return t=>!!e[t];if(_s(e)||So(e)){const t=Ka(e);return n=>!!t[n]}P2("Invalid selector() specification: "+e)}const Nh=(e,t,n={})=>{let o={},s={delete:!1,...n};const a=OC(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),o[l]=i}}),o},Bf=(e,t)=>parseInt(e[t]||0),$f=(e,t)=>parseFloat(e[t]||0),Af=(e,t)=>(e[t]||"").toString(),Mf=e=>(t,n)=>Bf(t,e)-Bf(n,e),Ld=e=>(t,n)=>$f(t,e)-$f(n,e),Pf=e=>(t,n)=>{let o=Af(t,e).toLowerCase(),s=Af(n,e).toLowerCase();return o>s?1:s>o?-1:0},LC=e=>(t,n)=>e(n,t);function DC(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function zr(e){return new Promise(t=>setTimeout(t,e))}yo.registerLanguage("jsx",bC);yo.registerLanguage("json",gC);yo.registerLanguage("css",Y9);yo.registerLanguage("scss",yC);yo.registerLanguage("bash",fC);yo.registerLanguage("yaml",CC);const Wn=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:s=o,className:a="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,f]=v.useState(o),b=()=>{navigator.clipboard.writeText(e),u(!0),zr(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${a} ${p?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>f(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:b,children:d?"Copied":"Copy"})]}),r.jsx(yo,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:BC(e,{undent:c})})]})},BC=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},J=({Component:e,code:t,html:n,children:o,className:s="",language:a,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[r.jsx("div",{className:"source",children:r.jsx(Wn,{code:t||n,language:n?"html":a,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),ni=v.createContext();function If(e){return typeof e=="function"}function zf(e){return typeof e=="object"&&!U2(e)&&!$C(e)}function U2(e){return Array.isArray(e)}function $C(e){return e===null}function AC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:s}){if(!n)return r.jsx(t,{...o,ref:s});let a={},l=If(n)?n(e):e[n];if(U2(l)&&(t=l[0],l=l[1]),If(l)){const i=l(o,s,e);if(V.isValidElement(i))return i;zf(i)&&Object.assign(a,o,i)}else zf(l)?Object.assign(a,l,o):Object.assign(a,o);return r.jsx(t,{...a,ref:s})}const MC=e=>({Context:ni,Provider:({children:t,...n})=>r.jsx(ni.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ni.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>V.forwardRef((o,s)=>r.jsx(ni.Consumer,{children:a=>r.jsx(AC,{Implementation:t,context:a,spec:n,props:o,ref:s})}))}),H2=MC(),ee=H2.Component,PC="svg",qu="-",V2="fill",IC="path",zC="line",FC="rect",UC="array",HC="circle",VC="ellipse",WC="polygon",ZC="polyline",Rh=/-(?!\d)/,Ff="currentColor",Oh=512,Lh=512,il={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function KC(e,t,n=il){n.icons[e]=t}function YC(e,t=il){Object.entries(e).forEach(([n,o])=>KC(n,o,t))}const ri=v.createContext();function Uf(e){return typeof e=="function"}function Hf(e){return typeof e=="object"&&!W2(e)&&!GC(e)}function W2(e){return Array.isArray(e)}function GC(e){return e===null}function qC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:s}){if(!n)return r.jsx(t,{...o,ref:s});let a={},l=Uf(n)?n(e):e[n];if(W2(l)&&(t=l[0],l=l[1]),Uf(l)){const i=l(o,s,e);if(V.isValidElement(i))return i;Hf(i)&&Object.assign(a,o,i)}else Hf(l)?Object.assign(a,l,o):Object.assign(a,o);return r.jsx(t,{...a,ref:s})}const QC=e=>({Context:ri,Provider:({children:t,...n})=>r.jsx(ri.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ri.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>V.forwardRef((o,s)=>r.jsx(ri.Consumer,{children:a=>r.jsx(qC,{Implementation:t,context:a,spec:n,props:o,ref:s})}))}),XC=QC(),JC=XC.Component;function or(e){return typeof e=="string"}function cl(e){return Array.isArray(e)}function $c(e){return typeof e=="object"&&!cl(e)&&!K2(e)}function Z2(e){return e===void 0}function K2(e){return e===null}function Ac(e){return!(Z2(e)||K2(e))}function Y2(e){return!Ac(e)}function er(...e){throw new Error(e.join(""))}function e_(){return Intl.DateTimeFormat().resolvedOptions().locale}e_();function Qu(e,t=/,\s*|\s+/){return Y2(e)?[]:or(e)?e.length?e.split(t):[]:cl(e)?e:[e]}const t_=(e,t)=>{const n=e[t];return delete e[t],n};function dl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,s]=n.split(/\s*[:=]\s*/);return t[o]=Z2(s)?!0:s,t},{})}const Dh=e=>e.filter(Ac).join(" "),n_=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),r_=(...e)=>Dh(e.flatMap(t=>$c(t)?n_(t):t)),o_=e=>Qu(e,/\s+/),G2={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Lr={flip:(e,t)=>{or(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Lr.flop=Lr.flipy;Lr["flip-x"]=Lr.flipx;Lr["flip-y"]=Lr.flipy;function q2(e,t={...G2}){const n=or(e)?dl(e):e||{};return Object.entries(n).reduce((o,[s,a])=>{const l=s.toLowerCase();return(Lr[l]||er(`Invalid transform: ${l}`))(o,a),o},t)}const s_=4.42,zn=e=>`${s_*e}%`,a_={},Xu={outline:{fill:"none",stroke:"currentColor",strokeWidth:zn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:zn(.5)},thinner:{strokeWidth:zn(1)},thin:{strokeWidth:zn(1.5)},medium:{strokeWidth:zn(2)},thick:{strokeWidth:zn(2.5)},thicker:{strokeWidth:zn(3)},thickest:{strokeWidth:zn(3.5)}};Xu.line=Xu.outline;const l_={...Object.entries(Xu).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?Ff:t,stroke:(e,t)=>e.stroke=t===!0?Ff:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?zn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function rc(e,t){return(or(t)?t.split(Rh):t).forEach(n=>{const[o,s=!0]=n.split(/[:=]/),a=o.toLowerCase(),l=l_[a];if(l){l(e.style||(e.style={...a_}),s);return}(Lr[a]||er(`Invalid style or transform: ${a}`))(e.transform||(e.transform={...G2}),s)})}const i_={width:Oh,height:Lh,type:V2},Q2={svg:e=>({element:PC,svg:e}),array:e=>({element:UC,items:e}),path:e=>({element:IC,d:e}),polygon:e=>({element:WC,points:e}),polyline:e=>({element:ZC,points:e}),circle:e=>({element:HC,...oi(e,"cx cy r")}),ellipse:e=>({element:VC,...oi(e,"cx cy rx ry")}),line:e=>({element:zC,...oi(e,"x1 y1 x2 y2")}),rect:e=>({element:FC,...oi(e,"x y width height rx ry")})};function oi(e,t){const n=cl(t)?[...t]:Qu(t);return Qu(e).reduce((o,s)=>{if(n.length){const a=n.shift();o[a]=s}return o},{})}const X2=e=>{const[t,n=""]=e.split("?"),[o,...s]=t.split(/\.(?!\d)/),a=o.split(Rh).filter(i=>i.length),l=dl(n);return{dashes:a,classes:s,style:l}},c_=(e,t)=>{const n=X2(e),{dashes:o}=n;for(let s=o.length;s>0;s--){const a=o.slice(0,s).join(qu);if(t[a]){n.name=o.splice(0,s).join(qu);break}}return n},Vf=(e,t,n={})=>{const{icons:o}=t,s=c_(e,o),{name:a,classes:l,style:i,dashes:c}=s;Y2(a)&&er(`No icon found matching any leading subset of ${s.dashes.join(qu)}`);const d=t.icons[a]||er(`Icon not found in data: ${a}`),u=J2(d,t,{...n,name:a});if((l.length||n.className)&&(u.className=Dh([...l||[],n.className])),u.transform&&(u.transform=q2(u.transform)),u.style&&(u.style=or(u.style)?dl(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};rc(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&rc(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function d_(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const J2=(e,t,n={})=>{const{defaults:o={}}=t,s={...i_,...o,...n};return e3(s,e,t)},e3=(e,t,n)=>{if(or(t))return u_(e,t);if($c(t))return p_(e,t,n);if(cl(t))return h_(e,t,n);er(`Cannot parse icon data: ${t}`)};function u_(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,s]=n,{dashes:a,classes:l}=X2(o),i=a.shift(),c=Q2[i]||er(`Invalid icon data element: ${i}`);return e.body=c(s),l.length&&(e.body.className=Dh(l)),a.length&&rc(e.body,a),e}return e.body={element:"path",d:t},e}function p_(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const s=t_(o,"data");return e3(e,s,n),Object.assign(e,o),e}for(let s of Object.entries(Q2)){const[a,l]=s,i=o[a];if(Ac(i))return e.body=l(i),delete o[a],Object.assign(e,o),e}er(`Cannot parse icon data: ${JSON.stringify(t)}`)}function h_(e,t,n){return e.body={element:"array",items:t.map(o=>J2(o,n).body)},e}const m_=({size:e,...t})=>{t.width??(t.width=e||Oh),t.height??(t.height=e||Lh),t.path&&Object.assign(t,d_(t.path));let n;return t.style&&(or(t.style)?(n=dl(t.style),t.style={}):n={...t.style}),rc(t,t.type?t.type.split(Rh).filter(o=>o.length):V2),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=q2(t.transform)),t},Bh=e=>$c(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,s=>s[1].toUpperCase())]=o,t),{}):e,f_=e=>Ac(e)?Bh(dl(e)):null,sr=({style:e,class:t,...n})=>({style:or(e)?f_(e):Bh(e),className:t,...n}),x_=e=>r.jsx("circle",{...sr(e)}),g_=e=>r.jsx("ellipse",{...sr(e)}),v_=e=>r.jsx("line",{...sr(e)}),t3=e=>r.jsx("path",{...sr(e)}),b_=e=>r.jsx("polygon",{...sr(e)}),j_=e=>r.jsx("polyline",{...sr(e)}),y_=e=>r.jsx("rect",{...sr(e)}),S_=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...sr(t)}),C_=({items:e,...t})=>r.jsx("g",{...sr(t),children:e.map((n,o)=>r.jsx(oc,{body:n},o))}),__={array:C_,circle:x_,ellipse:g_,line:v_,path:t3,polygon:b_,polyline:j_,rect:y_,svg:S_},oc=({path:e,body:t,...n})=>{if(e)return r.jsx(t3,{d:e,...n});if(or(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if($c(t)){const{element:o,...s}=t,a=__[o]||er(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(a,{...s})}if(cl(t))return t.map((o,s)=>r.jsx(oc,{body:o},s));er(`Don't know how to handle body: ${t}`)};function w_({width:e,height:t,transform:n,children:o}){const s=e/2,a=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${s} ${a})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${s} -${a})`,children:o})})})}const Dd=({onClick:e,minx:t=0,miny:n=0,width:o=Oh,height:s=Lh,style:a,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${s}`,className:`${i} icon`,style:Bh(a),onClick:e,children:[!!c&&console.log("style: ",a),l?r.jsx(w_,{width:o,height:s,transform:l,children:r.jsx(oc,{...d})}):r.jsx(oc,{...d})]}),T_=({name:e,iconsClass:t="icons",library:n=il,...o})=>{if(!e)return r.jsx(Dd,{...m_(o)});const s=o_(e);return s.length===1?r.jsx(Dd,{...o,...Vf(e,n,o)}):r.jsx("div",{className:r_(t,o.className),children:s.map(a=>r.jsx(Dd,{...o,...Vf(a,n,o)},a))})},Ni=JC(T_,"Icon"),E_=e=>e.filter(ge).join(" "),k_=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),pe=(...e)=>E_(e.flatMap(t=>Co(t)?k_(t):t)),$h=e=>{if(!e)return null;const[t,n,o,s,a]=e.split("-");return pe(t,O_(n),L_(o),D_(s),B_(a))},N_=({className:e,size:t,color:n,...o})=>({...o,className:pe(e,t,$h(n))}),R_=({className:e,size:t,color:n,border:o,radius:s,shadow:a,pad:l,mar:i,padding:c=l,margin:d=i,...u})=>({...u,className:pe(e,t,$h(n),_o(o),Ts(s),ws(a),n3(c),r3(d))}),_o=e=>o3(e,"border",t=>`border bdw-${t}`),ws=e=>o3(e,"shadow-1",t=>`shadow-${t}`),n3=e=>s3(e,"pad"),r3=e=>s3(e,"mar"),Ts=e=>ul(e,t=>`bdr-${t}`),O_=e=>ul(e,t=>`fgc-${t}`),L_=e=>ul(e,t=>`bgc-${t}`),D_=e=>ul(e,t=>`fgd-${t}`),B_=e=>ul(e,t=>`bgd-${t}`),ul=(e,t)=>Eh(parseInt(e))?Bc(t,e):null,$_=(e,t,n)=>e===!0?t:ge(e)?Bc(n,e):null,o3=(e,t,n)=>e===!0?t:parseInt(e)?Bc(n,e):null,s3=(e,t)=>$_(e,t,n=>A_(t,z2(n))),A_=(e,t)=>t.length===2?Wf(e,["v","h"],t):t.length===4?Wf(e,["t","r","b","l"],t):t.map(n=>`${e}-${n}`).join(" "),Wf=(e,t,n)=>n.map((o,s)=>`${e}-${t[s]}-${o}`).join(" "),re=e=>r.jsx(Ni,{...N_(e)});function Zf(e,t,n={}){return ge(t)&&(n[e]=Eh(t)?`${t}deg`:t),Object.keys(n).length?n:null}const M_=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:s,iconRight:a,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Ni,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Ni,{name:n,className:o,style:Zf("--icon-rotate",s),fixedWidth:!0}),c||d,!!a&&r.jsx(Ni,{name:a,className:l,style:Zf("--icon-rotate",i),fixedWidth:!0})]}),wo=ee(M_,"WithIcons");YC({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const P_=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:s="angle-down",closedIcon:a="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(re,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(re,{name:o?s:a,fixedWidth:!0,className:"reveal"})]}),a3=ee(P_,"AlertControls"),I_=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:s,Controls:a=a3})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(re,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(a,{...s})]}),z_=ee(I_,"AlertHeadline"),F_=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),l3=ee(F_,"AlertContent"),U_=({icon:e,Content:t=l3,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(re,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),H_=ee(U_,"AlertIcon"),i3=e=>So(e)||Th(e)||A2(e),pl=e=>i3(e)||!e.separator&&!e.heading&&!e.disabled,V_=e=>i3(e)?e:e.value??e.id,W_=(e,t,n=V_)=>{if(Dc(t))return[];const o=e.findIndex(s=>t===n(s));return o>=0?[e[o],o]:[]},Z_=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{const s=Co(o),a=s?o.search??o.text??o.label??o.name??o.value:o;if(s&&o.fixed)return!0;if(ge(a)){const l=a.toString().toLowerCase();return n.every(i=>l.indexOf(i)>=0)}return!1})};function K_(e,t=pl){const n=e.findIndex(t);return n<0?null:n}function Y_(e,t=pl){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function G_(e,t,n=pl){for(let o=1;o<=e.length;o++){const s=(t+o)%e.length;if(n(e[s]))return s}return null}function q_(e,t,n=pl){for(let o=1;o<=e.length;o++){const s=(t+e.length-o)%e.length;if(n(e[s]))return s}return null}const Ca="",Ah="ArrowDown",Mh="ArrowUp",Q_="Tab",Mc="Enter",Ph=" ",Pc="Escape",X_="Backspace",sc=e=>{const t=`HINT: define ${e}() to render this value`;return n=>So(n)||Th(n)?n:Co(n)?n.text??n.label??n.name??t:t},J_=e=>So(e)||Th(e)?e:r.jsx(wo,{...e}),c3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,s=e.scrollTop,a=s+e.offsetHeight;n<s?e.scrollTo({top:n}):o>a&&e.scrollTo({top:s+(o-a)})};function ew(){let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}}const si=typeof window<"u"&&window.localStorage||ew(),ai=(e,t)=>[e,t].join("-");function Ic(e){return{get:(t,n)=>{const o=si.getItem(ai(e,t));return ge(o)?JSON.parse(o):ge(n)?(si.setItem(ai(e,t),JSON.stringify(n)),n):null},set:(t,n)=>si.setItem(ai(e,t),JSON.stringify(n)),delete:t=>si.removeItem(ai(e,t))}}const tw=e=>e.charAt(0).toUpperCase()+e.slice(1),ar=({title:e,headline:t,headIcon:n,type:o,size:s,color:a,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:f,onDismiss:b,icon:j,dismissable:y=!1,revealable:w=!1,revealed:g=!1,openIcon:h,closedIcon:m,dismissIcon:S,Headline:C=z_,Controls:x=a3,Content:_=l3,Icon:k=H_})=>{const[N,O]=v.useState(w?g:!0),[D,U]=v.useState(!1),Z=pe("alert",o,s,a,u,{revealable:w,dismissable:y,stripe:l},N?"revealed":null,ws(d),_o(i),Ts(c)),te=()=>O(I=>!I),je={dismissable:y,revealable:w,isRevealed:N,dismiss:()=>{U(!0),b&&b()},openIcon:h,closedIcon:m,dismissIcon:S},X={title:e,text:p,children:f},$={...X,icon:j,Content:_},P={headline:t,headIcon:n,toggle:te,revealable:w,controlProps:je,Controls:x};return D?null:r.jsxs("div",{className:Z,children:[!!t&&r.jsx(C,{...P}),N&&(j?r.jsx(k,{...$}):r.jsx(_,{...X}))]})},da=ee(e=>r.jsx(ar,{...e,type:"info"}),"Info"),Jo=ee(e=>r.jsx(ar,{...e,type:"success"}),"Success"),ua=ee(e=>r.jsx(ar,{...e,type:"warning"}),"Warning"),pa=ee(e=>r.jsx(ar,{...e,type:"error"}),"Error");ar.Info=da;ar.Success=Jo;ar.Warning=ua;ar.Error=pa;const ne=ee(ar,"Alert"),nw=({size:e,color:t,className:n,tag:o,shadow:s,border:a,radius:l,tooltip:i,icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,label:j,text:y,children:w,Content:g=wo,...h})=>{const m=pe("badge",e,t,n,{tag:o,icon:c},ws(s),_o(a),Ts(l)),S={icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,text:y,children:w};return r.jsx("div",{className:m,"data-tooltip":i,"aria-label":j,...h,children:r.jsx(g,{...S})})},ae=ee(nw,"Badge"),rw=({type:e="button",size:t,color:n,className:o,disabled:s,bright:a,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:f,label:b,tooltip:j,tabIndex:y=0,icon:w,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:S,iconRightClass:C,text:x,children:_,Content:k=wo,...N})=>{const O=pe(t,n,o,{bright:a,dark:l,outline:i,bare:c,shaded:d,icon:w},ws(u),_o(p),Ts(f)),D={icon:w,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:S,iconRightClass:C,text:x,children:_};return r.jsx("button",{className:O,"aria-label":b,tabIndex:y,type:e,disabled:s,"aria-disabled":s,"data-tooltip":j,...N,children:r.jsx(k,{...D})})},B=ee(rw,"Button"),ow=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:s=B,...a})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(s,{className:o,...a,...l},i)):t}),yn=ee(ow,"Buttons"),sw=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:pe(e,{disabled:t}),ref:o,children:n}),aw=ee(sw,"CheckboxLabel"),lw=({disabled:e=!1,tabIndex:t=0,onChange:n=Ce,ref:o,...s})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:a=>n(a.target.checked),...s}),iw=ee(lw,"CheckboxInput"),cw=({size:e,color:t,border:n,inline:o,className:s="checkbox",text:a,ref:l,inputRef:i,checked:c,checkedText:d=a,uncheckedText:u=a,inputClass:p,Label:f=aw,Input:b=iw,...j})=>r.jsxs(f,{className:pe(e,t,s,_o(n),{inline:o}),ref:l,checked:c,...j,children:[r.jsx(b,{className:p,ref:i,checked:c,...j}),c?d:u]}),Mn=ee(cw,"Checkbox"),dw=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},uw=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:s}=dw({checked:e}),a=l=>{s(l),t&&t(l)};return r.jsx(Mn,{checked:o,onChange:a,...n})},Fr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},pw=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:s="red",confirmClass:a,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:s,className:a},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:f,className:b=f,buttonClass:j,onClick:y=()=>window.alert("No confirm action defined"),...w})=>{const{isVisible:g,hide:h,show:m}=Fr({visible:t}),C={iconRight:n,text:o,color:s,className:a,...u,onClick:_=>{_.preventDefault(),h(),y()}},x={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:h};return r.jsx(yn,{className:b,buttonClass:j,buttons:g?[x,C]:[{...w,onClick:m}]})},Pn=ee(pw,"Confirm");var hw=Object.defineProperty,mw=(e,t,n)=>t in e?hw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bd=(e,t,n)=>(mw(e,typeof t!="symbol"?t+"":t,n),n);const Ur=(e,t={})=>{const n=V.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:s=>r.jsx(n.Provider,{value:s,children:o.children})}),Consumer:o=>s=>r.jsx(n.Consumer,{children:a=>r.jsx(o,{...a,...s})}),Use:()=>V.useContext(n)}};function fw(e={},t={},n={}){return Object.entries(t).reduce((o,[s,a])=>{const l=n[a];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function xw(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const s=e[o]||vw(`Cannot expose non-existent action method: ${o}`);return n[o]=s.bind(e),n},{})}function gw(e,t){const n=e.debug??t.debug,o=Kf(e.debugPrefix??t.debugPrefix,e),s=Kf(e.debugColor??t.debugColor,e);return n?o?(a,...l)=>console.log(`%c${o}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function Kf(e,t){return typeof e=="function"?e(t):e}function vw(...e){throw new Error(e.join(""))}class _a extends V.Component{constructor(t){super(t);const n=this.constructor;this.debug=gw(t,n),this.state=fw(n.initialState,n.initialProps,t),this.actions=xw(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Bd(_a,"initialState",{}),Bd(_a,"initialProps",{}),Bd(_a,"actions",[]);const $d=e=>{So(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=F2(t)),e.id||(e.id=t),e},bw=e=>{if(So(e))return Ka(e,$d);if(_s(e))return e.reduce((t,n)=>{const o=$d(n);return t[o.field]=o,t},{});if(Co(e))return Object.entries(e).reduce((t,[n,o])=>{const s=$d({...o,field:n});return t[s.field]=s,t},{});P2("Invalid columns definition")},jw=(e,t)=>{if(t){const n=t.filter(o=>e[o]);if(n.length)return n}return Object.keys(e).filter(n=>!e[n].hidden)},yw=(e,t)=>{if(t){const n=t.filter(o=>e[o]);if(n.length)return n}return Object.keys(e)},Sw=(e,t,n)=>t&&e[t]?[t,n]:[null,null],Cw=({value:e,search:t})=>ge(e)?e.toString()===t.toString():!1,Gs=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(ge(e)){const o=e.toString().toLowerCase();return n.every(s=>o.indexOf(s)>-1)}else return!1},_w=({value:e,search:t})=>ge(e)?parseInt(e)===parseInt(t):!1,ww=({value:e,search:t})=>ge(e)?parseFloat(e)===parseFloat(t):!1,Tw=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},Yf={string:Gs,text:Gs,number:Gs,price:Gs,pounds:Gs,select:Cw,boolean:Tw,integer:_w,float:ww},Ew=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(s=>o.every(a=>{const l=n[a],i=t[a],c=i.field||a,d=s[c],u=i.filterType||i.type,p=i.filter||Yf[u]||Yf.text;return ge(l)&&l.length?p({row:s,field:c,value:d,search:l}):!0}))},kw=(e,t=1,n=e.length)=>{const o=e.length,s=Math.ceil(o/n);t=Math.min(t,s);const a=t-1,l=n*a,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:s,page:a,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:s,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},Gf={string:Pf,text:Pf,number:Ld,price:Ld,currency:Ld,integer:Mf,id:Mf},Nw=(e,t,n,o)=>{if(!n)return e;const s=t[n],a=s.sort,l=s.type||"text",i=Lc(a)?a:(Gf[l]||Gf.text)(n);return e.sort(o?LC(i):i)},Rw=({render:e,rows:t=[],storageKey:n,storageItem:o="state",debug:s,...a})=>{const l=s?console.log:Ce,[i,c]=v.useMemo(()=>{const O=n&&Ic(n),D=O?O.get(o,{}):{};return[O,D]},[n]),[d,u,p,f,b]=v.useMemo(()=>{const O=bw(a.columns);return[O,jw(O,c.visibleColumns),yw(O,c.columnOrder),...Sw(O,c.sortColumn??a.sortColumn,c.sortReverse??a.sortReverse)]},[a.columns,a.sortColumn,a.sortReverse,c]),[j,y]=qc({pageNo:c.pageNo??a.pageNo??1,pageSize:c.pageSize??a.pageSize??10,sortColumn:f,sortReverse:b,columnOrder:p,visibleColumns:u});v.useEffect(()=>{i&&(l("Saving state in local storage:",j),i.set(o,j))},[j,i]);const w=O=>{j.sortColumn===O?(l(`Sort column already set to ${O}, changing direction`),y.setSortReverse(D=>!D)):(l(`Setting sort column to ${O}`),y.setSortColumn(O),y.setSortReverse(!1))},g=O=>y.setVisibleColumns(D=>{const U=Ka(D),Z=U[O]?D.filter(te=>te!==O):Object.keys(d).filter(te=>te===O||U[te]);return l("New visible columns:",Z),Z}),h=O=>{let D=[],U=[];const Z=Ka(j.visibleColumns);O.forEach(te=>{D.push(te),Z[te]&&U.push(te)}),l("New order of all columns:",D),l("New order of visible columns:",U),y.setVisibleColumns(U),y.setColumnOrder(D)},[m,S]=v.useState(!1),[C,x]=v.useState({}),_=O=>{O.preventDefault(),O.stopPropagation(),S(D=>!D)},k=(O,D)=>{x(U=>{const Z={...U};return ge(D)&&D.length?Z[O]=D:delete Z[O],Z}),y.setPageNo(1)},N=v.useMemo(()=>kw(Nw(Ew(t,d,C),d,j.sortColumn,j.sortReverse),j.pageNo,j.pageSize),[t,d,C,j.sortColumn,j.sortReverse,j.pageNo,j.pageSize]);return e({...a,rows:t,columns:d,page:N,showFilters:m,toggleFilters:_,filters:C,setFilter:k,toggleSortColumn:w,toggleVisibleColumn:g,changeColumnOrder:h,...j,...y})},xt=Ur(Rw),Ow=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(B,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(B,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${ca(e.total)} rows`:`rows ${ca(e.from)}-${ca(e.to)} of ${ca(e.total)}`," "]})]}),Lw=xt.Consumer(Ow);var Hn;let d3=(Hn=class extends _a{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),zr(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():this.debug(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Mc:case Ph:this.state.isOpen?this.close():this.open();break;case Pc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},ve(Hn,"debug",!1),ve(Hn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onClick:Ce,onOpen:Ce,onClose:Ce}),ve(Hn,"inactiveState",{isOpen:!1}),ve(Hn,"initialState",{...Hn.inactiveState}),Hn);const to=class to extends d3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Ah:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Mh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Mc:case Ph:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Pc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return K_(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return Y_(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return G_(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return q_(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&ge(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){c3(this._menuRef,t)}};ve(to,"debug",!1),ve(to,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onClick:Ce,onOpen:Ce,onClose:Ce,onSelect:Ce,closeOnSelect:!0}),ve(to,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),ve(to,"initialState",{...to.inactiveState});let ac=to;var kn;let Dw=(kn=class extends ac{},ve(kn,"debug",!1),ve(kn,"debugPrefix","Dropdown > "),ve(kn,"debugColor","MediumVioletRed"),ve(kn,"defaultProps",{...kn.defaultProps,options:[],displayOption:J_}),ve(kn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),kn);const hl=Ur(Dw),Bw=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(wo,{...Nh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),$w=hl.Consumer(Bw),Aw=({option:e,active:t,activeRef:n,selected:o,onClick:s,onMouseEnter:a,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:pe(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:a,onClick:s,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),Mw=hl.Consumer(Aw),Pw=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:pe(t,e.className)}),Iw=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:pe(n,t,e.className),children:e.heading}),zw=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:s,selectOption:a,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=Mw,Separator:u=Pw,Heading:p=Iw})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((f,b)=>f.separator?r.jsx(u,{option:f},b):f.heading?r.jsx(p,{option:f},b):r.jsx(d,{option:f,active:ge(o)&&e[o]===f,selected:s===f,onClick:()=>a(f),onMouseEnter:()=>l(b)},f.id??f.value??b))}),Fw=hl.Consumer(zw),Uw=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:s,size:a,wide:l,Trigger:i=$w,Options:c=Fw})=>r.jsxs("div",{className:pe(e,a,o?t:n,{right:s,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),Hw=hl.Consumer(Uw),Vw=({Content:e=Hw,...t})=>r.jsx(hl.Provider,{...t,children:r.jsx(e,{})}),Hr=ee(Vw,"DropdownMenu"),Ww=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Hr,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),Zw=xt.Consumer(Ww);class ha extends d3{}ve(ha,"debug",!1),ve(ha,"debugPrefix","Dropdown > "),ve(ha,"debugColor","MediumVioletRed"),ve(ha,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const ml=Ur(ha),Kw=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(wo,{...Nh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),Yw=ml.Consumer(Kw),Gw=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),qw=ml.Consumer(Gw),Qw=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:s,size:a,wide:l,Trigger:i=Yw,Body:c=qw})=>r.jsxs("div",{className:pe(e,a,o?t:n,{right:s,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),Xw=ml.Consumer(Qw),Jw=({Content:e=Xw,content:t,children:n,...o})=>r.jsx(ml.Provider,{content:t||n,...o,children:r.jsx(e,{})}),Sn=ee(Jw,"Dropdown"),eT=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:s,isVisible:a,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx(Mn,{className:"fluid flex middle no-focus",checked:a[e.id]||!1,onChange:()=>s(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(re,{name:"drag",className:"drag-handle"})})]}),tT=({close:e})=>r.jsx(B,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),nT=ml.Consumer(tT);function rT(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(s=>s(o))},t)}const zc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Es(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Ih(e){return"nodeType"in e}function Ct(e){var t,n;return e?Es(e)?e:Ih(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function zh(e){const{Document:t}=Ct(e);return e instanceof t}function fl(e){return Es(e)?!1:e instanceof Ct(e).HTMLElement}function u3(e){return e instanceof Ct(e).SVGElement}function ks(e){return e?Es(e)?e.document:Ih(e)?zh(e)?e:fl(e)||u3(e)?e.ownerDocument:document:document:document}const tn=zc?v.useLayoutEffect:v.useEffect;function Fc(e){const t=v.useRef(e);return tn(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t.current==null?void 0:t.current(...o)},[])}function oT(){const e=v.useRef(null),t=v.useCallback((o,s)=>{e.current=setInterval(o,s)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Ya(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return tn(()=>{n.current!==e&&(n.current=e)},t),n}function xl(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function lc(e){const t=Fc(e),n=v.useRef(null),o=v.useCallback(s=>{s!==n.current&&(t==null||t(s,n.current)),n.current=s},[]);return[n,o]}function ic(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Ad={};function gl(e,t){return v.useMemo(()=>{if(t)return t;const n=Ad[e]==null?0:Ad[e]+1;return Ad[e]=n,e+"-"+n},[e,t])}function p3(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return o.reduce((a,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=a[c];u!=null&&(a[c]=u+e*d)}return a},{...t})}}const cs=p3(1),Ga=p3(-1);function sT(e){return"clientX"in e&&"clientY"in e}function Uc(e){if(!e)return!1;const{KeyboardEvent:t}=Ct(e.target);return t&&e instanceof t}function aT(e){if(!e)return!1;const{TouchEvent:t}=Ct(e.target);return t&&e instanceof t}function cc(e){if(aT(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return sT(e)?{x:e.clientX,y:e.clientY}:null}const Dr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Dr.Translate.toString(e),Dr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),qf="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function lT(e){return e.matches(qf)?e:e.querySelector(qf)}const iT={display:"none"};function cT(e){let{id:t,value:n}=e;return V.createElement("div",{id:t,style:iT},n)}function dT(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const s={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return V.createElement("div",{id:t,style:s,role:"status","aria-live":o,"aria-atomic":!0},n)}function uT(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const h3=v.createContext(null);function pT(e){const t=v.useContext(h3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function hT(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:s,event:a}=o;e.forEach(l=>{var i;return(i=l[s])==null?void 0:i.call(l,a)})},[e]),t]}const mT={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},fT={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function xT(e){let{announcements:t=fT,container:n,hiddenTextDescribedById:o,screenReaderInstructions:s=mT}=e;const{announce:a,announcement:l}=uT(),i=gl("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),pT(v.useMemo(()=>({onDragStart(p){let{active:f}=p;a(t.onDragStart({active:f}))},onDragMove(p){let{active:f,over:b}=p;t.onDragMove&&a(t.onDragMove({active:f,over:b}))},onDragOver(p){let{active:f,over:b}=p;a(t.onDragOver({active:f,over:b}))},onDragEnd(p){let{active:f,over:b}=p;a(t.onDragEnd({active:f,over:b}))},onDragCancel(p){let{active:f,over:b}=p;a(t.onDragCancel({active:f,over:b}))}}),[a,t])),!c)return null;const u=V.createElement(V.Fragment,null,V.createElement(cT,{id:o,value:s.draggable}),V.createElement(dT,{id:i,announcement:l}));return n?Vn.createPortal(u,n):u}var Qe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Qe||(Qe={}));function dc(){}function Qf(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function gT(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const vn=Object.freeze({x:0,y:0});function m3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function vT(e,t){const n=cc(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function f3(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function bT(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function Xf(e){let{left:t,top:n,height:o,width:s}=e;return[{x:t,y:n},{x:t+s,y:n},{x:t,y:n+o},{x:t+s,y:n+o}]}function x3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Jf(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const jT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=Jf(t,t.left,t.top),a=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=m3(Jf(c),s);a.push({id:i,data:{droppableContainer:l,value:d}})}}return a.sort(f3)},yT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=Xf(t),a=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=Xf(c),u=s.reduce((f,b,j)=>f+m3(d[j],b),0),p=Number((u/4).toFixed(4));a.push({id:i,data:{droppableContainer:l,value:p}})}}return a.sort(f3)};function ST(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),s=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),l=s-o,i=a-n;if(o<s&&n<a){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const CT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=[];for(const a of o){const{id:l}=a,i=n.get(l);if(i){const c=ST(i,t);c>0&&s.push({id:l,data:{droppableContainer:a,value:c}})}}return s.sort(bT)};function _T(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function g3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:vn}function wT(e){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];return s.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const TT=wT(1);function v3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function ET(e,t,n){const o=v3(t);if(!o)return e;const{scaleX:s,scaleY:a,x:l,y:i}=o,c=e.left-l-(1-s)*parseFloat(n),d=e.top-i-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),u=s?e.width/s:e.width,p=a?e.height/a:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const kT={ignoreTransform:!1};function Ns(e,t){t===void 0&&(t=kT);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=Ct(e).getComputedStyle(e);d&&(n=ET(n,d,u))}const{top:o,left:s,width:a,height:l,bottom:i,right:c}=n;return{top:o,left:s,width:a,height:l,bottom:i,right:c}}function e1(e){return Ns(e,{ignoreTransform:!0})}function NT(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function RT(e,t){return t===void 0&&(t=Ct(e).getComputedStyle(e)),t.position==="fixed"}function OT(e,t){t===void 0&&(t=Ct(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const a=t[s];return typeof a=="string"?n.test(a):!1})}function Hc(e,t){const n=[];function o(s){if(t!=null&&n.length>=t||!s)return n;if(zh(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!fl(s)||u3(s)||n.includes(s))return n;const a=Ct(e).getComputedStyle(s);return s!==e&&OT(s,a)&&n.push(s),RT(s,a)?n:o(s.parentNode)}return e?o(e):n}function b3(e){const[t]=Hc(e,1);return t??null}function Md(e){return!zc||!e?null:Es(e)?e:Ih(e)?zh(e)||e===ks(e).scrollingElement?window:fl(e)?e:null:null}function j3(e){return Es(e)?e.scrollX:e.scrollLeft}function y3(e){return Es(e)?e.scrollY:e.scrollTop}function Ju(e){return{x:j3(e),y:y3(e)}}var rt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(rt||(rt={}));function S3(e){return!zc||!e?!1:e===document.scrollingElement}function C3(e){const t={x:0,y:0},n=S3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},s=e.scrollTop<=t.y,a=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:s,isLeft:a,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const LT={x:.2,y:.2};function DT(e,t,n,o,s){let{top:a,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),s===void 0&&(s=LT);const{isTop:d,isBottom:u,isLeft:p,isRight:f}=C3(e),b={x:0,y:0},j={x:0,y:0},y={height:t.height*s.y,width:t.width*s.x};return!d&&a<=t.top+y.height?(b.y=rt.Backward,j.y=o*Math.abs((t.top+y.height-a)/y.height)):!u&&c>=t.bottom-y.height&&(b.y=rt.Forward,j.y=o*Math.abs((t.bottom-y.height-c)/y.height)),!f&&i>=t.right-y.width?(b.x=rt.Forward,j.x=o*Math.abs((t.right-y.width-i)/y.width)):!p&&l<=t.left+y.width&&(b.x=rt.Backward,j.x=o*Math.abs((t.left+y.width-l)/y.width)),{direction:b,speed:j}}function BT(e){if(e===document.scrollingElement){const{innerWidth:a,innerHeight:l}=window;return{top:0,left:0,right:a,bottom:l,width:a,height:l}}const{top:t,left:n,right:o,bottom:s}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:s,width:e.clientWidth,height:e.clientHeight}}function _3(e){return e.reduce((t,n)=>cs(t,Ju(n)),vn)}function $T(e){return e.reduce((t,n)=>t+j3(n),0)}function AT(e){return e.reduce((t,n)=>t+y3(n),0)}function w3(e,t){if(t===void 0&&(t=Ns),!e)return;const{top:n,left:o,bottom:s,right:a}=t(e);b3(e)&&(s<=0||a<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const MT=[["x",["left","right"],$T],["y",["top","bottom"],AT]];class Fh{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Hc(n),s=_3(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[a,l,i]of MT)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=s[a]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class wa{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var s;(s=this.target)==null||s.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function PT(e){const{EventTarget:t}=Ct(e);return e instanceof t?e:ks(e)}function Pd(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Kt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Kt||(Kt={}));function t1(e){e.preventDefault()}function IT(e){e.stopPropagation()}var xe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(xe||(xe={}));const T3={start:[xe.Space,xe.Enter],cancel:[xe.Esc],end:[xe.Space,xe.Enter]},zT=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case xe.Right:return{...n,x:n.x+25};case xe.Left:return{...n,x:n.x-25};case xe.Down:return{...n,y:n.y+25};case xe.Up:return{...n,y:n.y-25}}};class Uh{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new wa(ks(n)),this.windowListeners=new wa(Ct(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Kt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&w3(o),n(vn)}handleKeyDown(t){if(Uc(t)){const{active:n,context:o,options:s}=this.props,{keyboardCodes:a=T3,coordinateGetter:l=zT,scrollBehavior:i="smooth"}=s,{code:c}=t;if(a.end.includes(c)){this.handleEnd(t);return}if(a.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:vn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const f=Ga(p,u),b={x:0,y:0},{scrollableAncestors:j}=o.current;for(const y of j){const w=t.code,{isTop:g,isRight:h,isLeft:m,isBottom:S,maxScroll:C,minScroll:x}=C3(y),_=BT(y),k={x:Math.min(w===xe.Right?_.right-_.width/2:_.right,Math.max(w===xe.Right?_.left:_.left+_.width/2,p.x)),y:Math.min(w===xe.Down?_.bottom-_.height/2:_.bottom,Math.max(w===xe.Down?_.top:_.top+_.height/2,p.y))},N=w===xe.Right&&!h||w===xe.Left&&!m,O=w===xe.Down&&!S||w===xe.Up&&!g;if(N&&k.x!==p.x){const D=y.scrollLeft+f.x,U=w===xe.Right&&D<=C.x||w===xe.Left&&D>=x.x;if(U&&!f.y){y.scrollTo({left:D,behavior:i});return}U?b.x=y.scrollLeft-D:b.x=w===xe.Right?y.scrollLeft-C.x:y.scrollLeft-x.x,b.x&&y.scrollBy({left:-b.x,behavior:i});break}else if(O&&k.y!==p.y){const D=y.scrollTop+f.y,U=w===xe.Down&&D<=C.y||w===xe.Up&&D>=x.y;if(U&&!f.x){y.scrollTo({top:D,behavior:i});return}U?b.y=y.scrollTop-D:b.y=w===xe.Down?y.scrollTop-C.y:y.scrollTop-x.y,b.y&&y.scrollBy({top:-b.y,behavior:i});break}}this.handleMove(t,cs(Ga(p,this.referenceCoordinates),b))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Uh.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=T3,onActivation:s}=t,{active:a}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=a.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),s==null||s({event:e.nativeEvent}),!0)}return!1}}];function n1(e){return!!(e&&"distance"in e)}function r1(e){return!!(e&&"delay"in e)}class Hh{constructor(t,n,o){var s;o===void 0&&(o=PT(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:a}=t,{target:l}=a;this.props=t,this.events=n,this.document=ks(l),this.documentListeners=new wa(this.document),this.listeners=new wa(o),this.windowListeners=new wa(Ct(l)),this.initialCoordinates=(s=cc(a))!=null?s:vn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.DragStart,t1),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),this.windowListeners.add(Kt.ContextMenu,t1),this.documentListeners.add(Kt.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(r1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(n1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Kt.Click,IT,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Kt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:s,props:a}=this,{onMove:l,options:{activationConstraint:i}}=a;if(!s)return;const c=(n=cc(t))!=null?n:vn,d=Ga(s,c);if(!o&&i){if(n1(i)){if(i.tolerance!=null&&Pd(d,i.tolerance))return this.handleCancel();if(Pd(d,i.distance))return this.handleStart()}return r1(i)&&Pd(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===xe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const FT={move:{name:"pointermove"},end:{name:"pointerup"}};class Vh extends Hh{constructor(t){const{event:n}=t,o=ks(n.target);super(t,FT,o)}}Vh.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const UT={move:{name:"mousemove"},end:{name:"mouseup"}};var ep;(function(e){e[e.RightClick=2]="RightClick"})(ep||(ep={}));class HT extends Hh{constructor(t){super(t,UT,ks(t.event.target))}}HT.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===ep.RightClick?!1:(o==null||o({event:n}),!0)}}];const Id={move:{name:"touchmove"},end:{name:"touchend"}};class VT extends Hh{constructor(t){super(t,Id)}static setup(){return window.addEventListener(Id.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Id.move.name,t)};function t(){}}}VT.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:s}=n;return s.length>1?!1:(o==null||o({event:n}),!0)}}];var Ta;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Ta||(Ta={}));var uc;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(uc||(uc={}));function WT(e){let{acceleration:t,activator:n=Ta.Pointer,canScroll:o,draggingRect:s,enabled:a,interval:l=5,order:i=uc.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const b=KT({delta:p,disabled:!a}),[j,y]=oT(),w=v.useRef({x:0,y:0}),g=v.useRef({x:0,y:0}),h=v.useMemo(()=>{switch(n){case Ta.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Ta.DraggableRect:return s}},[n,s,c]),m=v.useRef(null),S=v.useCallback(()=>{const x=m.current;if(!x)return;const _=w.current.x*g.current.x,k=w.current.y*g.current.y;x.scrollBy(_,k)},[]),C=v.useMemo(()=>i===uc.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!a||!d.length||!h){y();return}for(const x of C){if((o==null?void 0:o(x))===!1)continue;const _=d.indexOf(x),k=u[_];if(!k)continue;const{direction:N,speed:O}=DT(x,k,h,t,f);for(const D of["x","y"])b[D][N[D]]||(O[D]=0,N[D]=0);if(O.x>0||O.y>0){y(),m.current=x,j(S,l),w.current=O,g.current=N;return}}w.current={x:0,y:0},g.current={x:0,y:0},y()},[t,S,o,y,a,l,JSON.stringify(h),JSON.stringify(b),j,d,C,u,JSON.stringify(f)])}const ZT={x:{[rt.Backward]:!1,[rt.Forward]:!1},y:{[rt.Backward]:!1,[rt.Forward]:!1}};function KT(e){let{delta:t,disabled:n}=e;const o=ic(t);return xl(s=>{if(n||!o||!s)return ZT;const a={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[rt.Backward]:s.x[rt.Backward]||a.x===-1,[rt.Forward]:s.x[rt.Forward]||a.x===1},y:{[rt.Backward]:s.y[rt.Backward]||a.y===-1,[rt.Forward]:s.y[rt.Forward]||a.y===1}}},[n,t,o])}function YT(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return xl(s=>{var a;return t===null?null:(a=o??s)!=null?a:null},[o,t])}function GT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:s}=o,a=s.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...a]},[]),[e,t])}var qa;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(qa||(qa={}));var tp;(function(e){e.Optimized="optimized"})(tp||(tp={}));const o1=new Map;function qT(e,t){let{dragging:n,dependencies:o,config:s}=t;const[a,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=s,u=v.useRef(e),p=w(),f=Ya(p),b=v.useCallback(function(g){g===void 0&&(g=[]),!f.current&&l(h=>h===null?g:h.concat(g.filter(m=>!h.includes(m))))},[f]),j=v.useRef(null),y=xl(g=>{if(p&&!n)return o1;if(!g||g===o1||u.current!==e||a!=null){const h=new Map;for(let m of e){if(!m)continue;if(a&&a.length>0&&!a.includes(m.id)&&m.rect.current){h.set(m.id,m.rect.current);continue}const S=m.node.current,C=S?new Fh(c(S),S):null;m.rect.current=C,C&&h.set(m.id,C)}return h}return g},[e,a,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||b()},[n,p]),v.useEffect(()=>{a&&a.length>0&&l(null)},[JSON.stringify(a)]),v.useEffect(()=>{p||typeof i!="number"||j.current!==null||(j.current=setTimeout(()=>{b(),j.current=null},i))},[i,p,b,...o]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:a!=null};function w(){switch(d){case qa.Always:return!1;case qa.BeforeDragging:return n;default:return!n}}}function Wh(e,t){return xl(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function QT(e,t){return Wh(e,t)}function XT(e){let{callback:t,disabled:n}=e;const o=Fc(t),s=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:a}=window;return new a(o)},[o,n]);return v.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Vc(e){let{callback:t,disabled:n}=e;const o=Fc(t),s=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:a}=window;return new a(o)},[n]);return v.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function JT(e){return new Fh(Ns(e),e)}function s1(e,t,n){t===void 0&&(t=JT);const[o,s]=v.useReducer(i,null),a=XT({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){s();break}}}}),l=Vc({callback:s});return tn(()=>{s(),e?(l==null||l.observe(e),a==null||a.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),a==null||a.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function eE(e){const t=Wh(e);return g3(e,t)}const a1=[];function tE(e){const t=v.useRef(e),n=xl(o=>e?o&&o!==a1&&e&&t.current&&e.parentNode===t.current.parentNode?o:Hc(e):a1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function nE(e){const[t,n]=v.useState(null),o=v.useRef(e),s=v.useCallback(a=>{const l=Md(a.target);l&&n(i=>i?(i.set(l,Ju(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const a=o.current;if(e!==a){l(a);const i=e.map(c=>{const d=Md(c);return d?(d.addEventListener("scroll",s,{passive:!0}),[d,Ju(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(a)};function l(i){i.forEach(c=>{const d=Md(c);d==null||d.removeEventListener("scroll",s)})}},[s,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((a,l)=>cs(a,l),vn):_3(e):vn,[e,t])}function l1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==vn;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?Ga(e,n.current):vn}function rE(e){v.useEffect(()=>{if(!zc)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function oE(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:s,handler:a}=o;return n[s]=l=>{a(l,t)},n},{}),[e,t])}function E3(e){return v.useMemo(()=>e?NT(e):null,[e])}const zd=[];function sE(e,t){t===void 0&&(t=Ns);const[n]=e,o=E3(n?Ct(n):null),[s,a]=v.useReducer(i,zd),l=Vc({callback:a});return e.length>0&&s===zd&&a(),tn(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),a())},[e]),s;function i(){return e.length?e.map(c=>S3(c)?o:new Fh(t(c),c)):zd}}function k3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return fl(t)?t:e}function aE(e){let{measure:t}=e;const[n,o]=v.useState(null),s=v.useCallback(d=>{for(const{target:u}of d)if(fl(u)){o(p=>{const f=t(u);return p?{...p,width:f.width,height:f.height}:f});break}},[t]),a=Vc({callback:s}),l=v.useCallback(d=>{const u=k3(d);a==null||a.disconnect(),u&&(a==null||a.observe(u)),o(u?t(u):null)},[t,a]),[i,c]=lc(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const lE=[{sensor:Vh,options:{}},{sensor:Uh,options:{}}],iE={current:{}},Ri={draggable:{measure:e1},droppable:{measure:e1,strategy:qa.WhileDragging,frequency:tp.Optimized},dragOverlay:{measure:Ns}};class Ea extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const cE={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ea,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:dc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ri,measureDroppableContainers:dc,windowRect:null,measuringScheduled:!1},N3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:dc,draggableNodes:new Map,over:null,measureDroppableContainers:dc},vl=v.createContext(N3),R3=v.createContext(cE);function dE(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ea}}}function uE(e,t){switch(t.type){case Qe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Qe.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Qe.DragEnd:case Qe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Qe.RegisterDroppable:{const{element:n}=t,{id:o}=n,s=new Ea(e.droppable.containers);return s.set(o,n),{...e,droppable:{...e.droppable,containers:s}}}case Qe.SetDroppableDisabled:{const{id:n,key:o,disabled:s}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const l=new Ea(e.droppable.containers);return l.set(n,{...a,disabled:s}),{...e,droppable:{...e.droppable,containers:l}}}case Qe.UnregisterDroppable:{const{id:n,key:o}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const a=new Ea(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function pE(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:s}=v.useContext(vl),a=ic(o),l=ic(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&a&&l!=null){if(!Uc(a)||document.activeElement===a.target)return;const i=s.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=lT(u);if(p){p.focus();break}}})}},[o,t,s,l,a]),null}function O3(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((s,a)=>a({transform:s,...o}),n):n}function hE(e){return v.useMemo(()=>({draggable:{...Ri.draggable,...e==null?void 0:e.draggable},droppable:{...Ri.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ri.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function mE(e){let{activeNode:t,measure:n,initialRect:o,config:s=!0}=e;const a=v.useRef(!1),{x:l,y:i}=typeof s=="boolean"?{x:s,y:s}:s;tn(()=>{if(!l&&!i||!t){a.current=!1;return}if(a.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=g3(u,o);if(l||(p.x=0),i||(p.y=0),a.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const f=b3(d);f&&f.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const Wc=v.createContext({...vn,scaleX:1,scaleY:1});var gr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(gr||(gr={}));const fE=v.memo(function(t){var n,o,s,a;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=lE,collisionDetection:p=CT,measuring:f,modifiers:b,...j}=t;const y=v.useReducer(uE,void 0,dE),[w,g]=y,[h,m]=hT(),[S,C]=v.useState(gr.Uninitialized),x=S===gr.Initialized,{draggable:{active:_,nodes:k,translate:N},droppable:{containers:O}}=w,D=_?k.get(_):null,U=v.useRef({initial:null,translated:null}),Z=v.useMemo(()=>{var Ke;return _!=null?{id:_,data:(Ke=D==null?void 0:D.data)!=null?Ke:iE,rect:U}:null},[_,D]),te=v.useRef(null),[we,je]=v.useState(null),[X,$]=v.useState(null),P=Ya(j,Object.values(j)),I=gl("DndDescribedBy",l),W=v.useMemo(()=>O.getEnabled(),[O]),Y=hE(f),{droppableRects:Te,measureDroppableContainers:ce,measuringScheduled:Se}=qT(W,{dragging:x,dependencies:[N.x,N.y],config:Y.droppable}),ie=YT(k,_),Le=v.useMemo(()=>X?cc(X):null,[X]),dt=ed(),wt=QT(ie,Y.draggable.measure);mE({activeNode:_?k.get(_):null,config:dt.layoutShiftCompensation,initialRect:wt,measure:Y.draggable.measure});const fe=s1(ie,Y.draggable.measure,wt),De=s1(ie?ie.parentElement:null),et=v.useRef({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:Te,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),At=O.getNodeFor((n=et.current.over)==null?void 0:n.id),sn=aE({measure:Y.dragOverlay.measure}),Tt=(o=sn.nodeRef.current)!=null?o:ie,cr=x?(s=sn.rect)!=null?s:fe:null,Nl=!!(sn.nodeRef.current&&sn.rect),Rl=eE(Nl?null:fe),Ms=E3(Tt?Ct(Tt):null),Cn=tE(x?At??ie:null),_n=sE(Cn),Yr=O3(b,{transform:{x:N.x-Rl.x,y:N.y-Rl.y,scaleX:1,scaleY:1},activatorEvent:X,active:Z,activeNodeRect:fe,containerNodeRect:De,draggingNodeRect:cr,over:et.current.over,overlayNodeRect:sn.rect,scrollableAncestors:Cn,scrollableAncestorRects:_n,windowRect:Ms}),ko=Le?cs(Le,N):null,an=nE(Cn),Gr=l1(an),Ol=l1(an,[fe]),ln=cs(Yr,Gr),dr=cr?TT(cr,Yr):null,Et=Z&&dr?p({active:Z,collisionRect:dr,droppableRects:Te,droppableContainers:W,pointerCoordinates:ko}):null,Ps=x3(Et,"id"),[cn,Is]=v.useState(null),Xc=Nl?Yr:cs(Yr,Ol),Ll=_T(Xc,(a=cn==null?void 0:cn.rect)!=null?a:null,fe),qr=v.useCallback((Ke,gt)=>{let{sensor:E,options:R}=gt;if(te.current==null)return;const L=k.get(te.current);if(!L)return;const M=Ke.nativeEvent,F=new E({active:te.current,activeNode:L,event:M,options:R,context:et,onStart(q){const Q=te.current;if(Q==null)return;const G=k.get(Q);if(!G)return;const{onDragStart:de}=P.current,Me={active:{id:Q,data:G.data,rect:U}};Vn.unstable_batchedUpdates(()=>{de==null||de(Me),C(gr.Initializing),g({type:Qe.DragStart,initialCoordinates:q,active:Q}),h({type:"onDragStart",event:Me})})},onMove(q){g({type:Qe.DragMove,coordinates:q})},onEnd:se(Qe.DragEnd),onCancel:se(Qe.DragCancel)});Vn.unstable_batchedUpdates(()=>{je(F),$(Ke.nativeEvent)});function se(q){return async function(){const{active:G,collisions:de,over:Me,scrollAdjustedTranslate:le}=et.current;let ye=null;if(G&&le){const{cancelDrop:Pe}=P.current;ye={activatorEvent:M,active:G,collisions:de,delta:le,over:Me},q===Qe.DragEnd&&typeof Pe=="function"&&await Promise.resolve(Pe(ye))&&(q=Qe.DragCancel)}te.current=null,Vn.unstable_batchedUpdates(()=>{g({type:q}),C(gr.Uninitialized),Is(null),je(null),$(null);const Pe=q===Qe.DragEnd?"onDragEnd":"onDragCancel";if(ye){const ut=P.current[Pe];ut==null||ut(ye),h({type:Pe,event:ye})}})}}},[k]),Dl=v.useCallback((Ke,gt)=>(E,R)=>{const L=E.nativeEvent,M=k.get(R);if(te.current!==null||!M||L.dndKit||L.defaultPrevented)return;const F={active:M};Ke(E,gt.options,F)===!0&&(L.dndKit={capturedBy:gt.sensor},te.current=R,qr(E,gt))},[k,qr]),No=GT(u,Dl);rE(u),tn(()=>{fe&&S===gr.Initializing&&C(gr.Initialized)},[fe,S]),v.useEffect(()=>{const{onDragMove:Ke}=P.current,{active:gt,activatorEvent:E,collisions:R,over:L}=et.current;if(!gt||!E)return;const M={active:gt,activatorEvent:E,collisions:R,delta:{x:ln.x,y:ln.y},over:L};Vn.unstable_batchedUpdates(()=>{Ke==null||Ke(M),h({type:"onDragMove",event:M})})},[ln.x,ln.y]),v.useEffect(()=>{const{active:Ke,activatorEvent:gt,collisions:E,droppableContainers:R,scrollAdjustedTranslate:L}=et.current;if(!Ke||te.current==null||!gt||!L)return;const{onDragOver:M}=P.current,F=R.get(Ps),se=F&&F.rect.current?{id:F.id,rect:F.rect.current,data:F.data,disabled:F.disabled}:null,q={active:Ke,activatorEvent:gt,collisions:E,delta:{x:L.x,y:L.y},over:se};Vn.unstable_batchedUpdates(()=>{Is(se),M==null||M(q),h({type:"onDragOver",event:q})})},[Ps]),tn(()=>{et.current={activatorEvent:X,active:Z,activeNode:ie,collisionRect:dr,collisions:Et,droppableRects:Te,draggableNodes:k,draggingNode:Tt,draggingNodeRect:cr,droppableContainers:O,over:cn,scrollableAncestors:Cn,scrollAdjustedTranslate:ln},U.current={initial:cr,translated:dr}},[Z,ie,Et,dr,k,Tt,cr,Te,O,cn,Cn,ln]),WT({...dt,delta:N,draggingRect:dr,pointerCoordinates:ko,scrollableAncestors:Cn,scrollableAncestorRects:_n});const Jc=v.useMemo(()=>({active:Z,activeNode:ie,activeNodeRect:fe,activatorEvent:X,collisions:Et,containerNodeRect:De,dragOverlay:sn,draggableNodes:k,droppableContainers:O,droppableRects:Te,over:cn,measureDroppableContainers:ce,scrollableAncestors:Cn,scrollableAncestorRects:_n,measuringConfiguration:Y,measuringScheduled:Se,windowRect:Ms}),[Z,ie,fe,X,Et,De,sn,k,O,Te,cn,ce,Cn,_n,Y,Se,Ms]),Bl=v.useMemo(()=>({activatorEvent:X,activators:No,active:Z,activeNodeRect:fe,ariaDescribedById:{draggable:I},dispatch:g,draggableNodes:k,over:cn,measureDroppableContainers:ce}),[X,No,Z,fe,g,I,k,cn,ce]);return V.createElement(h3.Provider,{value:m},V.createElement(vl.Provider,{value:Bl},V.createElement(R3.Provider,{value:Jc},V.createElement(Wc.Provider,{value:Ll},d)),V.createElement(pE,{disabled:(i==null?void 0:i.restoreFocus)===!1})),V.createElement(xT,{...i,hiddenTextDescribedById:I}));function ed(){const Ke=(we==null?void 0:we.autoScrollEnabled)===!1,gt=typeof c=="object"?c.enabled===!1:c===!1,E=x&&!Ke&&!gt;return typeof c=="object"?{...c,enabled:E}:{enabled:E}}}),xE=v.createContext(null),i1="button",gE="Droppable";function vE(e){let{id:t,data:n,disabled:o=!1,attributes:s}=e;const a=gl(gE),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=v.useContext(vl),{role:b=i1,roleDescription:j="draggable",tabIndex:y=0}=s??{},w=(c==null?void 0:c.id)===t,g=v.useContext(w?Wc:xE),[h,m]=lc(),[S,C]=lc(),x=oE(l,t),_=Ya(n);tn(()=>(p.set(t,{id:t,key:a,node:h,activatorNode:S,data:_}),()=>{const N=p.get(t);N&&N.key===a&&p.delete(t)}),[p,t]);const k=v.useMemo(()=>({role:b,tabIndex:y,"aria-disabled":o,"aria-pressed":w&&b===i1?!0:void 0,"aria-roledescription":j,"aria-describedby":u.draggable}),[o,b,y,w,j,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:k,isDragging:w,listeners:o?void 0:x,node:h,over:f,setNodeRef:m,setActivatorNodeRef:C,transform:g}}function L3(){return v.useContext(R3)}const bE="Droppable",jE={timeout:25};function yE(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:s}=e;const a=gl(bE),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(vl),u=v.useRef({disabled:n}),p=v.useRef(!1),f=v.useRef(null),b=v.useRef(null),{disabled:j,updateMeasurementsFor:y,timeout:w}={...jE,...s},g=Ya(y??o),h=v.useCallback(()=>{if(!p.current){p.current=!0;return}b.current!=null&&clearTimeout(b.current),b.current=setTimeout(()=>{d(Array.isArray(g.current)?g.current:[g.current]),b.current=null},w)},[w]),m=Vc({callback:h,disabled:j||!l}),S=v.useCallback((k,N)=>{m&&(N&&(m.unobserve(N),p.current=!1),k&&m.observe(k))},[m]),[C,x]=lc(S),_=Ya(t);return v.useEffect(()=>{!m||!C.current||(m.disconnect(),p.current=!1,m.observe(C.current))},[C,m]),tn(()=>(i({type:Qe.RegisterDroppable,element:{id:o,key:a,disabled:n,node:C,rect:f,data:_}}),()=>i({type:Qe.UnregisterDroppable,key:a,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Qe.SetDroppableDisabled,id:o,key:a,disabled:n}),u.current.disabled=n)},[o,a,n,i]),{active:l,rect:f,isOver:(c==null?void 0:c.id)===o,node:C,over:c,setNodeRef:x}}function SE(e){let{animation:t,children:n}=e;const[o,s]=v.useState(null),[a,l]=v.useState(null),i=ic(n);return!n&&!o&&i&&s(i),tn(()=>{if(!a)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){s(null);return}Promise.resolve(t(d,a)).then(()=>{s(null)})},[t,o,a]),V.createElement(V.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const CE={x:0,y:0,scaleX:1,scaleY:1};function _E(e){let{children:t}=e;return V.createElement(vl.Provider,{value:N3},V.createElement(Wc.Provider,{value:CE},t))}const wE={position:"fixed",touchAction:"none"},TE=e=>Uc(e)?"transform 250ms ease":void 0,EE=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:s,children:a,className:l,rect:i,style:c,transform:d,transition:u=TE}=e;if(!i)return null;const p=s?d:{...d,scaleX:1,scaleY:1},f={...wE,width:i.width,height:i.height,top:i.top,left:i.left,transform:Dr.Transform.toString(p),transformOrigin:s&&o?vT(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return V.createElement(n,{className:l,style:f,ref:t},a)}),kE=e=>t=>{let{active:n,dragOverlay:o}=t;const s={},{styles:a,className:l}=e;if(a!=null&&a.active)for(const[i,c]of Object.entries(a.active))c!==void 0&&(s[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(a!=null&&a.dragOverlay)for(const[i,c]of Object.entries(a.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(s))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},NE=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:Dr.Transform.toString(t)},{transform:Dr.Transform.toString(n)}]},RE={duration:250,easing:"ease",keyframes:NE,sideEffects:kE({styles:{active:{opacity:"0"}}})};function OE(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:s}=e;return Fc((a,l)=>{if(t===null)return;const i=n.get(a);if(!i)return;const c=i.node.current;if(!c)return;const d=k3(l);if(!d)return;const{transform:u}=Ct(l).getComputedStyle(l),p=v3(u);if(!p)return;const f=typeof t=="function"?t:LE(t);return w3(c,s.draggable.measure),f({active:{id:a,data:i.data,node:c,rect:s.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:s.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:s,transform:p})})}function LE(e){const{duration:t,easing:n,sideEffects:o,keyframes:s}={...RE,...e};return a=>{let{active:l,dragOverlay:i,transform:c,...d}=a;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},f={x:c.x-u.x,y:c.y-u.y,...p},b=s({...d,active:l,dragOverlay:i,transform:{initial:c,final:f}}),[j]=b,y=b[b.length-1];if(JSON.stringify(j)===JSON.stringify(y))return;const w=o==null?void 0:o({active:l,dragOverlay:i,...d}),g=i.node.animate(b,{duration:t,easing:n,fill:"forwards"});return new Promise(h=>{g.onfinish=()=>{w==null||w(),h()}})}}let c1=0;function DE(e){return v.useMemo(()=>{if(e!=null)return c1++,c1},[e])}const BE=V.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:s,transition:a,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggableNodes:j,droppableContainers:y,dragOverlay:w,over:g,measuringConfiguration:h,scrollableAncestors:m,scrollableAncestorRects:S,windowRect:C}=L3(),x=v.useContext(Wc),_=DE(p==null?void 0:p.id),k=O3(l,{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggingNodeRect:w.rect,over:g,overlayNodeRect:w.rect,scrollableAncestors:m,scrollableAncestorRects:S,transform:x,windowRect:C}),N=Wh(f),O=OE({config:o,draggableNodes:j,droppableContainers:y,measuringConfiguration:h}),D=N?w.setRef:void 0;return V.createElement(_E,null,V.createElement(SE,{animation:O},p&&_?V.createElement(EE,{key:_,id:p.id,ref:D,as:i,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:N,style:{zIndex:d,...s},transform:k},n):null))});function Zh(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function $E(e,t){return e.reduce((n,o,s)=>{const a=t.get(o);return a&&(n[s]=a),n},Array(e.length))}function li(e){return e!==null&&e>=0}function AE(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ME(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const ii={scaleX:1,scaleY:1},PE=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:s,overIndex:a,index:l}=e;const i=(t=n[s])!=null?t:o;if(!i)return null;const c=IE(n,l,s);if(l===s){const d=n[a];return d?{x:s<a?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...ii}:null}return l>s&&l<=a?{x:-i.width-c,y:0,...ii}:l<s&&l>=a?{x:i.width+c,y:0,...ii}:{x:0,y:0,...ii}};function IE(e,t,n){const o=e[t],s=e[t-1],a=e[t+1];return!o||!s&&!a?0:n<t?s?o.left-(s.left+s.width):a.left-(o.left+o.width):a?a.left-(o.left+o.width):o.left-(s.left+s.width)}const Kh=e=>{let{rects:t,activeIndex:n,overIndex:o,index:s}=e;const a=Zh(t,o,n),l=t[s],i=a[s];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},ci={scaleX:1,scaleY:1},zE=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:s,rects:a,overIndex:l}=e;const i=(t=a[n])!=null?t:o;if(!i)return null;if(s===n){const d=a[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...ci}:null}const c=FE(a,s,n);return s>n&&s<=l?{x:0,y:-i.height-c,...ci}:s<n&&s>=l?{x:0,y:i.height+c,...ci}:{x:0,y:0,...ci}};function FE(e,t,n){const o=e[t],s=e[t-1],a=e[t+1];return o?n<t?s?o.top-(s.top+s.height):a?a.top-(o.top+o.height):0:a?a.top-(o.top+o.height):s?o.top-(s.top+s.height):0:0}const D3="Sortable",B3=V.createContext({activeIndex:-1,containerId:D3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Kh,disabled:{draggable:!1,droppable:!1}});function UE(e){let{children:t,id:n,items:o,strategy:s=Kh,disabled:a=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=L3(),p=gl(D3,n),f=i.rect!==null,b=v.useMemo(()=>o.map(x=>typeof x=="object"&&"id"in x?x.id:x),[o]),j=l!=null,y=l?b.indexOf(l.id):-1,w=d?b.indexOf(d.id):-1,g=v.useRef(b),h=!AE(b,g.current),m=w!==-1&&y===-1||h,S=ME(a);tn(()=>{h&&j&&u(b)},[h,b,j,u]),v.useEffect(()=>{g.current=b},[b]);const C=v.useMemo(()=>({activeIndex:y,containerId:p,disabled:S,disableTransforms:m,items:b,overIndex:w,useDragOverlay:f,sortedRects:$E(b,c),strategy:s}),[y,p,S.draggable,S.droppable,m,b,w,c,f,s]);return V.createElement(B3.Provider,{value:C},t)}const HE=e=>{let{id:t,items:n,activeIndex:o,overIndex:s}=e;return Zh(n,o,s).indexOf(t)},VE=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:s,items:a,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==a&&s===l?!1:n?!0:l!==s&&t===c},WE={duration:200,easing:"ease"},$3="transform",ZE=Dr.Transition.toString({property:$3,duration:0,easing:"linear"}),KE={roleDescription:"sortable"};function YE(e){let{disabled:t,index:n,node:o,rect:s}=e;const[a,l]=v.useState(null),i=v.useRef(n);return tn(()=>{if(!t&&n!==i.current&&o.current){const c=s.current;if(c){const d=Ns(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,s]),v.useEffect(()=>{a&&l(null)},[a]),a}function GE(e){let{animateLayoutChanges:t=VE,attributes:n,disabled:o,data:s,getNewIndex:a=HE,id:l,strategy:i,resizeObserverConfig:c,transition:d=WE}=e;const{items:u,containerId:p,activeIndex:f,disabled:b,disableTransforms:j,sortedRects:y,overIndex:w,useDragOverlay:g,strategy:h}=v.useContext(B3),m=qE(o,b),S=u.indexOf(l),C=v.useMemo(()=>({sortable:{containerId:p,index:S,items:u},...s}),[p,s,S,u]),x=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:_,node:k,isOver:N,setNodeRef:O}=yE({id:l,data:C,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:D,activatorEvent:U,activeNodeRect:Z,attributes:te,setNodeRef:we,listeners:je,isDragging:X,over:$,setActivatorNodeRef:P,transform:I}=vE({id:l,data:C,attributes:{...KE,...n},disabled:m.draggable}),W=rT(O,we),Y=!!D,Te=Y&&!j&&li(f)&&li(w),ce=!g&&X,Se=ce&&Te?I:null,Le=Te?Se??(i??h)({rects:y,activeNodeRect:Z,activeIndex:f,overIndex:w,index:S}):null,dt=li(f)&&li(w)?a({id:l,items:u,activeIndex:f,overIndex:w}):S,wt=D==null?void 0:D.id,fe=v.useRef({activeId:wt,items:u,newIndex:dt,containerId:p}),De=u!==fe.current.items,et=t({active:D,containerId:p,isDragging:X,isSorting:Y,id:l,index:S,items:u,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:d,wasDragging:fe.current.activeId!=null}),At=YE({disabled:!et,index:S,node:k,rect:_});return v.useEffect(()=>{Y&&fe.current.newIndex!==dt&&(fe.current.newIndex=dt),p!==fe.current.containerId&&(fe.current.containerId=p),u!==fe.current.items&&(fe.current.items=u)},[Y,dt,p,u]),v.useEffect(()=>{if(wt===fe.current.activeId)return;if(wt&&!fe.current.activeId){fe.current.activeId=wt;return}const Tt=setTimeout(()=>{fe.current.activeId=wt},50);return()=>clearTimeout(Tt)},[wt]),{active:D,activeIndex:f,attributes:te,data:C,rect:_,index:S,newIndex:dt,items:u,isOver:N,isSorting:Y,isDragging:X,listeners:je,node:k,overIndex:w,over:$,setNodeRef:W,setActivatorNodeRef:P,setDroppableNodeRef:O,setDraggableNodeRef:we,transform:At??Le,transition:sn()};function sn(){if(At||De&&fe.current.newIndex===S)return ZE;if(!(ce&&!Uc(U)||!d)&&(Y||et))return Dr.Transition.toString({...d,property:$3})}}function qE(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function pc(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const QE=[xe.Down,xe.Right,xe.Up,xe.Left],XE=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:s,droppableContainers:a,over:l,scrollableAncestors:i}}=t;if(QE.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];a.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const f=s.get(p.id);if(f)switch(e.code){case xe.Down:o.top<f.top&&c.push(p);break;case xe.Up:o.top>f.top&&c.push(p);break;case xe.Left:o.left>f.left&&c.push(p);break;case xe.Right:o.left<f.left&&c.push(p);break}});const d=yT({active:n,collisionRect:o,droppableRects:s,droppableContainers:c,pointerCoordinates:null});let u=x3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=a.get(n.id),f=a.get(u),b=f?s.get(f.id):null,j=f==null?void 0:f.node.current;if(j&&b&&p&&f){const w=Hc(j).some((x,_)=>i[_]!==x),g=A3(p,f),h=JE(p,f),m=w||!g?{x:0,y:0}:{x:h?o.width-b.width:0,y:h?o.height-b.height:0},S={x:b.left,y:b.top};return m.x&&m.y?S:Ga(S,m)}}}};function A3(e,t){return!pc(e)||!pc(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function JE(e,t){return!pc(e)||!pc(t)||!A3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const ek=e=>{let{transform:t}=e;return{...t,y:0}};function M3(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const Yh=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:M3(o,n,t)},tk=e=>{let{transform:t}=e;return{...t,x:0}},P3=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:M3(t,n,o)},Gh=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:s=[Yh],strategy:a=Kh,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=gT(Qf(Vh),Qf(Uh,{coordinateGetter:XE}));function p(j){const y=e.findIndex(w=>w.id===j.active.id);d(y)}function f(){d(null)}function b(j){const{active:y,over:w}=j;if(y.id!==w.id){const g=e.findIndex(m=>m.id===y.id),h=e.findIndex(m=>m.id===w.id);e[g].moved=!0,t(Zh(e,g,h))}d(null)}return r.jsxs(fE,{sensors:u,collisionDetection:jT,onDragStart:p,onDragCancel:f,onDragEnd:b,modifiers:s,children:[r.jsx(UE,{items:e,strategy:a,children:r.jsx(n,{...i,children:e.map(j=>r.jsx(nk,{id:j.id,item:j,Item:o,...i,role:"drag"},j.id))})}),l&&c&&r.jsx(BE,{children:r.jsx(l,{item:c,...i})})]})},nk=({id:e,item:t,Item:n,...o})=>{const{attributes:s,listeners:a,setNodeRef:l,transform:i,transition:c}=GE({id:e}),d={transform:Dr.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:a,...s,...o})},I3=({...e})=>r.jsx(Gh,{modifiers:[tk,P3,Yh],strategy:zE,...e}),rk=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:s})=>{const a=Ka(t),l=o.map(c=>Nh(e[c],"id label")),i=c=>{s(c.map(d=>d.id))};return r.jsxs(Sn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(I3,{items:l,Item:eT,setOrder:i,isVisible:a,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(nT,{})]})},ok=xt.Consumer(rk),sk=({headerClass:e,Summary:t=Lw,PageSize:n=Zw,Columns:o=ok})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),ak=xt.Consumer(sk),d1=({value:e})=>ge(e)?e:"",lk=({value:e})=>ge(e)?ca(e):"",u1=({value:e})=>ge(e)?NC(e):"",ik=({value:e})=>ge(e)?RC(e):"",ck=({value:e})=>ge(e)?e?"true":"false":"",dk={default:d1,text:d1,number:lk,price:u1,currency:u1,boolean:ck,title:ik},uk=({row:e,column:t,name:n,value:o,cellClass:s,sortColumn:a,sortingClass:l="sorting",displayTypes:i=dk})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=a===n,p=pe(s,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},pk=xt.Consumer(uk),hk=({row:e,columns:t,rowClass:n,onRowClick:o=Ce,visibleColumns:s,Cell:a=pk})=>r.jsx("tr",{className:n,onClick:()=>o(e),children:s.map(l=>{const i=t[l],c=i.field??l,d=e[c];return r.jsx(a,{row:e,name:l,field:c,column:i,value:d},l)})}),mk=xt.Consumer(hk),fk=({page:e,Row:t=mk})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),xk=xt.Consumer(fk),gk=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:s,sortUpIcon:a="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:f,filteringClass:b="filtering",filterIcon:j="filter",filteringIcon:y="filter-solid",filterIconClass:w="filter-icon",headingClass:g="heading",rightClass:h="right"})=>{const m=e===n,S=m&&o,C=ge(f[e]);return r.jsx("th",{className:pe(g,t.right?h:null,u?b:null,C?b:null,m?d:null),onClick:()=>s(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(re,{className:w,name:C?y:j,onClick:p}),r.jsx(re,{className:c,name:m?S?a:l:i})]})]})})},vk=xt.Consumer(gk),bk=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=vk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(s=>r.jsx(o,{name:s,column:e[s]},s))})}),jk=xt.Consumer(bk),yk=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:s="filtering",clearFilterIcon:a="cross"})=>r.jsx("th",{className:pe(o,ge(t[e])?s:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(re,{name:a,onClick:()=>n(e,null)})]})}),Sk=xt.Consumer(yk),Ck=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=Sk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(s=>r.jsx(o,{name:s,column:e[s]},s))})}),_k=xt.Consumer(Ck),wk=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,onRowClick:o,showFilters:s,Headings:a=jk,Filters:l=_k,Rows:i=xk})=>r.jsxs("table",{className:pe(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(a,{}),s&&r.jsx(l,{}),r.jsx(i,{})]}),Tk=xt.Consumer(wk),Ek=({scrollX:e,Table:t=Tk})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),kk=xt.Consumer(Ek),Nk=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:s="solid",render:a,...l})=>{const d=t-1,u=t,p=e+1,f=e>0?e-1:null,b=ge(f)?f+1:null,j=e<d?e+1:null,y=ge(j)?j+1:null;return a({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:f,prevPageNo:b,nextPage:j,nextPageNo:y,buttonClass:n,pageClass:o,currentPageClass:s,...l})},Vr=Ur(Nk),Rk=Vr.Use,Ok=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:s="arrow-left"})=>r.jsx(B,{className:o,icon:s,onClick:()=>t(e),disabled:Dc(e)}),Lk=Vr.Consumer(Ok),Dk=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:s="arrow-right"})=>r.jsx(B,{className:o,icon:s,onClick:()=>t(e),disabled:!e}),Bk=Vr.Consumer(Dk),$k=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:s})=>r.jsx(B,{text:t,className:o,onClick:s}),Ak=Vr.Consumer($k),Mk=r.jsx(r.Fragment,{children:"…"}),Pk=({pageSeparatorClass:e="separator",pageSeparator:t=Mk})=>r.jsx("div",{className:e,children:t}),Ik=Vr.Consumer(Pk),zk=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:s,prevPageNo:a,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:f,pageClass:b=f,currentPageClass:j="brand",showFirstLast:y=!0,Separator:w=Ik,Page:g=Ak})=>r.jsxs("div",{className:p,children:[y&&s>n&&r.jsxs(r.Fragment,{children:[r.jsx(g,{page:n,pageNo:o,className:b,onClick:()=>u(n)}),s>n+1&&r.jsx(w,{})]}),ge(s)&&r.jsx(g,{page:s,pageNo:a,className:b,onClick:()=>u(s)}),r.jsx(g,{page:e,pageNo:t,className:j,current:!0,disabled:!0}),ge(l)&&r.jsx(g,{page:l,pageNo:i,className:b,onClick:()=>u(l)}),y&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(w,{}),r.jsx(g,{page:c,pageNo:d,className:b,onClick:()=>u(c)})]})]}),Fk=Vr.Consumer(zk),Uk=({className:e="pager",size:t,color:n,Previous:o=Lk,Next:s=Bk,Pages:a=Fk})=>r.jsxs("div",{className:pe(e,t,n),children:[r.jsx(o,{}),r.jsx(a,{}),r.jsx(s,{})]}),Hk=Vr.Consumer(Uk),Vk=({Content:e=Hk,...t})=>r.jsx(Vr.Provider,{...t,children:r.jsx(e,{})}),Xt=ee(Vk,"Pager"),Wk=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Xt,{page:n.page,pages:n.pages,setPage:s=>o(s+1),...t})}),Zk=xt.Consumer(Wk),Kk=({color:e,className:t="datatable",Header:n=ak,Body:o=kk,Footer:s=Zk})=>r.jsxs("section",{className:pe(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(s,{})]}),Yk=xt.Consumer(Kk),Gk=({Content:e=Yk,...t})=>r.jsx(xt.Provider,{...t,children:r.jsx(e,{})}),$t=ee(Gk,"Datatable"),qk=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),Qk=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),Xk=({className:e,size:t,color:n,lined:o,border:s,radius:a,shaded:l,shadow:i,open:c,Summary:d=qk,Content:u=Qk,...p})=>r.jsxs("details",{className:pe(e,n,_o(s),Ts(a),ws(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Je=ee(Xk,"Details");var Nt;let Jk=(Nt=class extends ac{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,s]=this.props.findOption(n,t),a=this.inputValue(o);return{value:o,cursor:s,input:a,options:n}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Ah:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Mh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Mc:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Pc:this.close();break;case X_:this.debug("backspace"),this.searchBackspace();break;case Q_:return;case Ph:if(this.state.isOpen){if(!(this.state.searchInput??Ca).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){this.debug(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}this.debug(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??Ca)+t)}searchBackspace(){this.setSearch(ge(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:ge(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},ve(Nt,"debug",!1),ve(Nt,"debugPrefix","Select > "),ve(Nt,"debugColor","MediumVioletRed"),ve(Nt,"defaultProps",{...Nt.defaultProps,options:[],search:!1,findOption:W_,validOption:pl,searchOptions:Z_,displayValue:sc("displayValue"),displayOption:sc("displayOption")}),ve(Nt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),ve(Nt,"initialState",{value:Ca,cursor:void 0,...Nt.inactiveState}),ve(Nt,"initialProps",{}),ve(Nt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),Nt);const To=Ur(Jk),eN=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:s="Select",placeholderClass:a="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsxs("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:[ge(e)&&e.length?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:a,children:s})," "]}),r.jsx("div",{className:c,children:r.jsx(re,{name:"angle-down"})})]}),tN=To.Consumer(eN),nN=({option:e,active:t,activeRef:n,selected:o,onClick:s,onMouseEnter:a,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:pe(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:a,onClick:s,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),rN=To.Consumer(nN),oN=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),sN=To.Consumer(oN),aN=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:s,selectOption:a,setCursor:l,Option:i=rN,NoOptions:c=sN})=>r.jsx("div",{className:n,ref:t,children:_s(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:ge(o)&&e[o]===d,selected:s===d,onClick:()=>a(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),lN=To.Consumer(aN),iN=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:s,clearSearch:a,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:f,searchIcon:b="search",clearSearchIcon:j="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(re,{name:b})}),r.jsx("input",{ref:o,className:f,type:"text",placeholder:l,value:e??"",onClick:y=>y.stopPropagation(),onChange:y=>s(y.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:pe(u,e?p:null),onClick:a,children:r.jsx(re,{name:j})})]})}),cN=To.Consumer(iN),dN=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:s="open",closedClass:a="closed",Input:l=tN,Search:i=cN,Menu:c=lN})=>r.jsxs("div",{className:pe(o,t?s:a),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),uN=To.Consumer(dN),pN=({Content:e=uN,...t})=>r.jsx(To.Provider,{...t,children:r.jsx(e,{})}),rn=ee(pN,"Select");var hN=Object.defineProperty,mN=(e,t,n)=>t in e?hN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,On=(e,t,n)=>(mN(e,typeof t!="symbol"?t+"":t,n),n),fN=Object.defineProperty,xN=(e,t,n)=>t in e?fN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fd=(e,t,n)=>(xN(e,typeof t!="symbol"?t+"":t,n),n);function gN(e={},t={},n={}){return Object.entries(t).reduce((o,[s,a])=>{const l=n[a];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function vN(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const s=e[o]||SN(`Cannot expose non-existent action method: ${o}`);return n[o]=s.bind(e),n},{})}function bN(e,t){const n=e.debug??t.debug,o=p1(e.debugPrefix??t.debugPrefix,e),s=p1(e.debugColor??t.debugColor,e);return n?o?(a,...l)=>console.log(`%c${o}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function jN(e){return Array.isArray(e)}function z3(e){return typeof e=="function"}function p1(e,t){return z3(e)?e(t):e}function yN(e){return jN(e)?e:[e]}function SN(...e){throw new Error(e.join(""))}const F3=(e,t={})=>{const n=V.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:s=>r.jsx(n.Provider,{value:s,children:o.children})}),Consumer:o=>s=>r.jsx(n.Consumer,{children:a=>r.jsx(o,{...a,...s})}),Children:({children:o})=>yN(o).map((s,a)=>z3(s)?r.jsx(n.Consumer,{children:s},a):s),Use:()=>V.useContext(n)}};let Oi=class extends V.Component{constructor(e){super(e);const t=this.constructor;this.debug=bN(e,t),this.state=gN(t.initialState,t.initialProps,e),this.actions=vN(this,t.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Fd(Oi,"initialState",{}),Fd(Oi,"initialProps",{}),Fd(Oi,"actions",[]);function U3(e){return typeof e=="boolean"}function Rs(e){return typeof e=="string"}function Qa(e){return Array.isArray(e)}function Zc(e){return typeof e=="function"}function CN(e){return e instanceof RegExp}function Os(e){return typeof e=="object"&&!Qa(e)&&!H3(e)}function _N(e){return e===void 0}function H3(e){return e===null}function Pt(e){return!(_N(e)||H3(e))}function wN(e){return!Pt(e)}function TN(...e){throw new Error(e.join(""))}const h1=(e,...t)=>Zc(e)?e(...t):e;function ds(){}function EN(){return Intl.DateTimeFormat().resolvedOptions().locale}EN();function V3(e,t=/,\s*|\s+/){return wN(e)?[]:Rs(e)?e.length?e.split(t):[]:Qa(e)?e:[e]}function W3(e,t=!0,n={}){return Os(e)?e:V3(e).reduce((o,s)=>(o[s]=Zc(t)?t(s):t,o),n)}function kN(e){if(Zc(e))return e;if(CN(e))return t=>e.test(t);if(Os(e))return t=>!!e[t];if(Qa(e)||Rs(e)){const t=W3(e);return n=>!!t[n]}TN("Invalid selector() specification: "+e)}const NN=(e,t,n={})=>{let o={},s={delete:!1,...n};const a=kN(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),o[l]=i}}),o},RN="",ON="blur",bl="changed",LN="disabled",Kc="focus",DN="fulfilled",jl="invalid",Z3="Optional",BN="radio",K3="Required",$N="A value is required",m1="reset",yl="submitted",Ls="submitting",qh="text",AN="unvalidated",Sl="valid",Wr="validating",MN=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],PN=["id","name","action","method","encType"];let Y3=class extends Oi{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(m1)}}setStatus(e,t={},n=ds){this.mounted&&this.setState(o=>({...Zc(t)?t(o):t,status:this.newStatus(e,o.status)}),n)}setResetState(e,t){this.setStatus(m1,e,t)}setChangedState(e,t){this.setStatus(bl,e,t)}setValidatingState(e,t){this.setStatus(Wr,e,t)}setInvalidState(e,t){this.setStatus(jl,e,t)}setValidState(e,t){this.setStatus(Sl,e,t)}setUnvalidatedState(e,t){this.setStatus(AN,e,t)}};function G3(e,t){return t.reduce((n,o)=>(Pt(e[o])&&(n[o]=e[o]),n),{})}const Yc=e=>G3(e,MN),IN=e=>G3(e,PN),q3=e=>e.filter(Pt).join(" "),zN=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Bn=(...e)=>q3(e.flatMap(t=>Os(t)?zN(t):t)),Gc=e=>Bn(e.inputClass,e.inline&&"inline"),es=(e,t,n=t)=>(e==null?void 0:e[t])||n,FN=(e,t={},...n)=>q3(Object.entries(e).reduce((o,[s,a])=>(a&&o.push(t[s]||s),o),[...n])),UN=e=>{const{status:t,className:n,classes:o,required:s,showRequired:a,showOptional:l}=e;return FN(t,o,es(o,"field"),n,a&&s?"required":null,l&&!s?"optional":null)},Q3=(e,...t)=>{const{gap:n,space:o,stack:s,className:a}=e;return a||(o?Bn("flex","space",...t):Bn("flex",n?`gap-v-none gap-h-${n}`:null,s?`stack-${s}`:null,...t))},HN=(e,...t)=>{const{grid:n,gap:o,stack:s,className:a}=e;return a||(n?Bn(`grid-${n}`,o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t):Bn(...t))},VN={boolean:!0,string:!0,number:!0},X3=e=>VN[typeof e]?{value:e,text:e}:e,hc=(...e)=>function(...t){for(let n of e.filter(Boolean))n(...t)};function f1(e){if(U3(e))return[1,!1];if(Pt(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const WN=(e,t)=>Rs(e)?{[t]:e}:e,ZN={submittingClass:Ls,validatingClass:Wr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},x1={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:$N,requiredLabel:K3,optionalLabel:Z3},KN=W3(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),vs={[Sl]:!1,[jl]:!1},YN={...vs,[bl]:!0},GN={...vs,[Wr]:!0},qN={[Sl]:!1,[jl]:!0,[Wr]:!1},QN={[Sl]:!0,[jl]:!1,[Wr]:!1},XN={[Kc]:!1},JN={[Kc]:!0},eR={[Ls]:!0,[yl]:!1},tR={[Ls]:!1,[yl]:!0},J3={changed:YN,validating:GN,invalid:qN,valid:QN},e0=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),nR=()=>{const e={...vs,[bl]:!1,[Wr]:!1,[yl]:!1,[Ls]:!1};return e0({...J3,reset:e,submitting:eR,submitted:tR,unvalidated:vs})},rR=(e={})=>{const t={...vs,[bl]:!1,[Wr]:!1,[Kc]:!1,[LN]:e.disabled||!1};return e0({...J3,reset:t,focus:JN,blur:XN,unvalidated:vs})},oR=({status:e,any:t=!1,...n})=>{const o=[bl,Wr,Sl,jl,Ls,yl].filter(s=>Pt(n[s])).map(s=>e[s]);return t?o.some(Boolean):o.every(Boolean)};class Po extends Y3{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,o={...n},s={...ZN,...this.props};this.state={...s,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,n){var o,s;const a=((o=this.props.fields)==null?void 0:o[t])??{},l=n.value??((s=this.props.values)==null?void 0:s[t]);return{name:t,...NN(this.props,KN),...a,...n,value:l}}attachField(t,n){this.debug(`attaching ${t} field`),this.fields[t]=n,this.setState(o=>({values:{...o.values,[t]:n.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(Ls,t,n)}setSubmittedState(t,n){this.setStatus(yl,t,n)}setFocus(t,n){var o;n==null||n.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,n){this.debug(`setValue(${t}, ${n})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:n}}))}setValues(t,n){this.debug("setValues():",t),n==null||n.preventDefault(),Object.entries(t).forEach(([o,s])=>{var a;return(a=this.fields[o])==null?void 0:a.setValue(s)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((s,{status:a,value:l,reason:i})=>(a===DN?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(i),s),{values:{...this.state.values},errors:[]})).then(o=>{var s;return this.debug("field validation complete: ",o),(s=o.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",o),n(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(a=>t({...o,values:a})).catch(a=>n(a))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const n=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",n),this.setSubmittedState(),n!=null&&n.ok||(n==null?void 0:n.status)===200)this.debug(`Success response ok:${n==null?void 0:n.ok} status:${n==null?void 0:n.status}`),this.handleSuccess(n);else if((n==null?void 0:n.status)>=400&&n.status<=500)this.debug(`Error response status:${n==null?void 0:n.status}`),this.handleError(n.data);else throw new Error(`Unknown response: ${n==null?void 0:n.status}`)}catch(n){this.debug("onSubmit error:",n),this.setSubmittedState(),this.handleError(Rs(n)?{error:n}:n instanceof Error?{error:n.message}:n)}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||ds;this.setValidState({},hc(()=>n(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const n=Qa(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||ds;this.setInvalidState(t,hc(()=>o(t),n?()=>n.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const n=t.reduce((o,s)=>{const a=s.name??s.param??s.field,{message:l}=s,i=a&&this.fields[a];return i&&(s.label||(s.label=i.props.label),i.setInvalidState({message:l}),o.push(i)),o},[]);return this.state.focusInvalidField&&n.length?n[0]:null}sanitiseErrors(t){if(Os(t)&&(t=Object.entries(t).map(([n,o])=>({name:n,...WN(o,"message")}))),!Qa(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(n=>n.message??(n.message=n.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}On(Po,"newStatus",nR),On(Po,"debug",!1),On(Po,"debugPrefix","Form > "),On(Po,"debugColor","rebeccapurple"),On(Po,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const sR=F3(Po),{Context:cG,Provider:aR,Consumer:lR,Children:iR,Use:Ds}=sR,cR=({children:e})=>{const t=Ds(),n=IN(t),{submit:o,className:s}=t;return r.jsx("form",{className:s,...n,onSubmit:o,noValidate:!0,children:r.jsx(iR,{children:e})})},dR=({children:e,Layout:t=cR,...n})=>r.jsx(aR,{...n,children:r.jsx(t,{children:e})}),uR=e=>{const{id:t,value:n}=e;return{...e,id:t||v.useId(),value:n??e.default??RN}};class Io extends Y3{constructor(t){super(t),this.name=t.name;const{value:n}=t,o=n;this.form=this.props.form,this.state={...this.state,initialValue:o,value:n,error:null},this.debug("initial state:",this.state),this.inputRef=v.createRef(),this.resetRef=v.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):ds}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(Kc,t,n)}setBlurState(t,n){return this.setStatus(ON,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var n,o;t==null||t.preventDefault(),(o=(n=this.inputRef)==null?void 0:n.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:s,validateOnInvalid:a=!0,minValidateLength:l=1}=this.props,[i]=f1(n);let c=s||a&&o;i<l&&!o&&(c=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),c?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.form.setValue(this.props.name,n),this.setResetState({value:n,message:this.props.message},()=>{var o,s;return(s=(o=this.resetRef)==null?void 0:o.current)==null?void 0:s.reset()}),n}validation(t){this.validate(t).then(ds).catch(ds)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,hc(this.on.valid,t)),{...n,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,hc(this.on.invalid,t)),{...n,...o}})}validator(){return async(t,n)=>{const{value:o=""}=this.state,{validate:s,required:a,requiredMessage:l,validMessage:i}={...x1,...this.props},[,c]=f1(o);if(this.setValidatingState(),s)return await this.validateValidator(t,n,s,i);if(c)return await this.validateEmpty(t,n,a,i,l);this.debug("no validation defined"),t({value:o,message:i})}}async validateValidator(t,n,o,s){this.debug("calling validate function");const a=this.getContext();try{this.debug(`calling validate function with value [${a.value}]`);const l=await o(a.value,a,t,n);this.debug("validate function passed:",l),t(Os(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const i=Rs(l)?l:l.message;this.debug("rejecting with message:",i),n({message:i})}}validateEmpty(t,n,o,s,a){o?(this.debug("failing validation - required field is empty"),n({message:a})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,n){n==null||n.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,n){n==null||n.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...x1,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}On(Io,"newStatus",rR),On(Io,"debug",!1),On(Io,"debugPrefix",e=>`Field [${e.name}] > `),On(Io,"debugColor","teal"),On(Io,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const pR=F3(Io),{Context:dG,Provider:hR,Consumer:uG,Children:mR,Use:_t}=pR,t0=({field:e=_t()})=>{const{label:t,id:n,required:o}=e,s=e.showRequired&&o,a=e.showOptional&&!o,l=t||s||a,i=e.labelClass,c={};return s&&e.requiredLabel!==K3&&(c["--required-text"]=`"${e.requiredLabel}"`),a&&e.optionalLabel!==Z3&&(c["--optional-text"]=`"${e.optionalLabel}"`),l&&r.jsx("label",{htmlFor:n,className:i,style:c,children:t||r.jsx("span",{children:" "})})},fR=e=>t=>e.onChange(t.target.value),xR=e=>t=>e.onChange(t.target.checked),Br={default:fR,checkbox:xR},gR=({field:e=_t()})=>{const{id:t,text:n,inline:o,border:s,labelClass:a,type:l="checkbox",handler:i=Br[l]||Br.default}=e,c=Yc(e),d=Bn("checkbox",a,{inline:o,border:s});return r.jsxs("label",{htmlFor:t,className:d,children:[r.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:Gc(e),...c,checked:e.value}),n]})},n0=({field:e=_t()})=>r.jsx("input",{type:"hidden",name:e.name,value:e.value}),vR=({field:e=_t()})=>{const{inline:t,border:n,options:o=[],inputClass:s,optionClass:a,optionsClass:l="options",type:i="radio",handler:c=Br[i]||Br.default}=e,d=Yc(e);return r.jsx("div",{className:Bn(l),children:o.map((u,p)=>{u=X3(u);const f=`${e.id}-${u.value}`,b=e.value==u.value,j=(e.value?b:p==0)?e.inputRef:null,y=Bn("radio",a,u.className,{inline:t,border:n});return r.jsxs("label",{className:y,disabled:u.disabled,htmlFor:f,children:[r.jsx("input",{type:i,className:s,ref:j,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:f,checked:b,value:u.value}),u.text]},u.value)})})},bR=({field:e=_t()})=>{const{options:t=[],placeholder:n,type:o="select",optionClass:s="option",handler:a=Br[o]||Br.default}=e,l=Yc(e);return r.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:Gc(e),onChange:a(e),...l,value:e.value,required:e.required||!!n,children:[!!n&&r.jsx("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(i=>(i=X3(i),r.jsx("option",{className:s,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},g1=({field:e=_t()})=>{const{type:t=qh,handler:n=Br[t]||Br.default}=e,o=Yc(e);return r.jsx("input",{type:t,ref:e.inputRef,className:Gc(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:n(e),...o})},jR=({field:e=_t()})=>{const{rows:t=5,cols:n=20}=e;return r.jsx("textarea",{id:e.id,ref:e.inputRef,className:Gc(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:n})},Xa={default:g1,checkbox:gR,hidden:n0,radio:vR,select:bR,text:g1,textarea:jR},r0=(e,t)=>Xa[e]=t,yR=({field:e=_t()})=>r.jsx("div",{className:Bn("prefix",e.prefixClass),children:e.prefix}),SR=({field:e=_t()})=>r.jsx("div",{className:Bn("suffix",e.suffixClass),children:e.suffix}),CR=({field:e=_t()})=>{const{classes:t,prefix:n,suffix:o,inputsClass:s,inline:a,type:l=qh,Prefix:i=yR,Suffix:c=SR}=e,d=Xa[l]||Xa.default;let u=[es(t,"inputs")];Pt(n)&&u.push(es(t,"prefixed")),Pt(o)&&u.push(es(t,"suffixed")),a&&u.push(es(t,"inline")),Pt(s)&&u.push(s);const p=u.join(" ");return r.jsxs("div",{className:p,children:[Pt(n)&&r.jsx(i,{field:e}),r.jsx(d,{field:e}),Pt(o)&&r.jsx(c,{field:e})]})},o0=({field:e=_t()})=>{const{prefix:t,suffix:n,type:o=qh}=e,s=Xa[o]||Xa.default;return o==BN?r.jsx(s,{field:e}):Pt(t)||Pt(n)?r.jsx(CR,{}):r.jsx(s,{field:e})},s0=({field:e=_t()})=>{const{help:t,message:n,classes:o}=e,s=n??t,a=es(o,"help");return s?r.jsx("div",{className:a,children:s}):null},a0=({field:e=_t(),children:t})=>{const{type:n,Label:o=t0,Message:s=s0,Input:a=o0}=e,l=UN(e);return n==="hidden"?r.jsx(n0,{field:e}):r.jsx("div",{className:l,children:t||r.jsxs(r.Fragment,{children:[r.jsx(o,{field:e}),r.jsx(a,{field:e}),r.jsx(s,{field:e})]})})},l0=({name:e,children:t,...n})=>{const o=Ds(),s=uR(o.fieldSpec(e,n)),a=s.Layout||a0;return r.jsx(hR,{form:o,...s,children:t?r.jsx(mR,{children:t}):r.jsx(a,{})})},i0=({names:e,className:t,grid:n=!1,gap:o=4,stack:s,...a})=>{const l=V3(e);return U3(n)&&n&&(n=l.length),r.jsx("div",{className:HN({grid:n,gap:o,stack:s,props:a},t),children:l.map(i=>r.jsx(l0,{name:i,...a},i))})},_R=({className:e="",legend:t,children:n,fields:o,...s})=>r.jsxs("fieldset",{className:e,children:[!!t&&r.jsx("legend",{children:t}),!!o&&r.jsx(i0,{names:o,...s}),n]}),wR=({children:e,...t})=>oR(t)&&e,c0=lR(wR),TR=({values:e=!0,status:t=!1,all:n=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:s="Form Debugging",valuesTitle:a="Values",statusTitle:l="Status",...i})=>{const c=Ds();return r.jsxs("div",{className:o,children:[s&&r.jsx("h3",{className:"mar-v-none",children:s}),r.jsxs("div",{className:"grid-1 gap-4",children:[e&&r.jsxs("div",{children:[a&&r.jsx("h4",{className:"mar-v-none",children:a}),r.jsx(v1,{rows:Object.entries(c.values),...i})]}),(t||n)&&c.status&&r.jsxs("div",{children:[l&&r.jsx("h4",{children:l}),r.jsx(v1,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},v1=({rows:e,children:t,color:n="brand",tableClass:o=`${n} shaded celled wide small pad-none mar-b-0`,...s})=>r.jsx("table",{className:o,children:r.jsx("tbody",{children:t||e.map(([a,l])=>r.jsx(ER,{name:a,value:l,...s},a))})}),ER=({name:e,value:t,keyClass:n="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>r.jsxs("tr",{valign:"top",children:[r.jsx("th",{className:n,children:e}),r.jsx("td",{className:o,children:r.jsx(kR,{value:t})})]}),kR=({value:e})=>Os(e)?JSON.stringify(e):Pt(e)?e.toString():"",NR=({error:e})=>{const t=e.label||e.name;return r.jsxs(r.Fragment,{children:[!!t&&r.jsxs("b",{children:[t,": "]}),e.message]})},RR=({error:e})=>Rs(e)?e:r.jsx(NR,{error:e}),OR=({form:e=Ds(),title:t=e.errorsTitle,prompt:n=e.errorsPrompt,fieldErrors:o=!1,className:s="error alert border"})=>{const{error:a,errors:l,Error:i=RR}=e,c=!!a,d=(o?l.length:0)+(c?1:0);return d!==0?r.jsxs("div",{className:s,children:[!!t&&r.jsx("div",{className:"headline",children:h1(t,d)}),r.jsxs("div",{children:[c&&r.jsx("h4",{children:r.jsx(i,{error:a})}),o&&l.length!==0&&r.jsxs(r.Fragment,{children:[!!n&&r.jsx("p",{className:"wide",children:h1(n,l.length)}),r.jsx("ul",{children:l.map((u,p)=>r.jsx("li",{children:r.jsx(i,{error:u})},p))})]})]})]}):null},LR=({field:e=_t(),selectValue:t=e.selectValue||I2})=>r.jsx(rn,{...e,onSelect:n=>e.onChange(t(n))}),di={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class hr extends _a{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?DC(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const n=this.inputValue(t);return{value:t,input:n}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):Ca}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),zr(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...di})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Ah:this.setCursor(n+1);break;case Mh:this.setCursor(n-1);break;case Mc:this.selectCursor();break;case Pc:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.setState({value:t,input:n,...di},this.props.onReset)}clear(){this.debug("clear()"),this.setState({value:void 0,input:Ca,...di},this.props.onClear)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...di},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&ge(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){c3(this._resultsRef,t)}}ve(hr,"debug",!1),ve(hr,"debugPrefix","Search > "),ve(hr,"debugColor","MediumVioletRed"),ve(hr,"defaultProps",{minLength:2,debounceTime:500,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onReset:Ce,onClear:Ce,onSelect:Ce,displayValue:sc("displayValue"),displayResult:sc("displayResult")}),ve(hr,"initialState",{value:"",searching:!1}),ve(hr,"initialProps",{value:"initialValue"}),ve(hr,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","clear","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const Bs=Ur(hr),DR=({input:e,onFocus:t,onBlur:n,onChange:o,clear:s,placeholder:a="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:f="text",inputClass:b="",disabled:j,searching:y})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(re,{name:i})}),r.jsx("input",{type:f,placeholder:a,value:e,onFocus:t,onBlur:n,onChange:o,disabled:j,className:b}),r.jsx("div",{className:p,onClick:s,children:r.jsx(re,{name:y?c:l})})]}),BR=Bs.Consumer(DR),$R=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:s,displayResult:a,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:pe(l,{[i]:t}),onClick:o,onMouseEnter:s,ref:t?n:null,children:a(e)}),AR=Bs.Consumer($R),MR=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),PR=Bs.Consumer(MR),IR=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:s,resultsClass:a="menu border bdr-1",Result:l=AR,NoResults:i=PR})=>r.jsx("div",{className:a,ref:t,children:_s(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:ge(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>s(d)},c.id??c.value??d)):r.jsx(i,{})}),zR=Bs.Consumer(IR),FR=({results:e,onKeyDown:t,Input:n=BR,Results:o=zR})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),UR=Bs.Consumer(FR),HR=({Content:e=UR,...t})=>r.jsx(Bs.Provider,{...t,children:r.jsx(e,{})}),tr=ee(HR,"Search"),VR=({field:e=_t(),selectValue:t=e.selectValue||I2})=>r.jsx(tr,{...e,onSelect:n=>e.onChange(t(n)),onReset:e.reset}),WR=({color:e,className:t,style:n,fixed:o,light:s,dark:a,children:l})=>r.jsx("div",{className:pe("overlay",t,e,{fixed:o,light:s,dark:a}),style:n,children:l}),Eo=ee(WR,"Overlay"),b1=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),j1=(e,t,n,o,s,a)=>{n?(t.push(`stc-${s}`,`std-${a}`),A2(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},y1=(e,t,n,o,s)=>{n?t.push(`flc-${o}`,`fld-${s}`):e.push("fill=none")},ZR=({size:e,className:t,icon:n="cog",color:o="brand",stroke:s=!0,strokeWidth:a,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:f=o,bgStroke:b=!1,bgStrokeWidth:j,bgStrokeStop:y=60,bgStrokeStopDark:w=70,bgFill:g=!0,bgFillStop:h=70,bgFillStopDark:m=30,shrink:S=p?5:0,reverse:C=!1,animation:x=C?"spin.reverse":"spin"})=>{const _=pe(e,t),k=[],N=[f],O=[],D=[o,x];j1(k,N,b,j,y,w),j1(O,D,s,a,l,i),y1(k,N,g,h,m),y1(O,D,c,d,u),S&&O.push(`shrink=${S}`);const U=p?`${p}${b1(k,N)}`:"",Z=`${n}${b1(O,D)}`,te=p?`${U} ${Z}`:Z;return r.jsx(re,{name:te,className:_})},K=ee(ZR,"Spinner"),KR=({text:e="Submitting...",size:t="largest",className:n="flex middle center pad-8",light:o,dark:s,fixed:a,spinnerSize:l="x4",Spinner:i=K,...c})=>r.jsx(c0,{submitting:!0,children:r.jsx(Eo,{className:pe(n,t),light:o,dark:s,fixed:a,children:r.jsxs("div",{className:"text-center",children:[i&&r.jsx(i,{size:l,...c}),r.jsx("div",{className:"mar-t-4",children:e})]})})}),Qh=ee(KR,"Submitting"),YR=({text:e="Cancel",className:t="cancel",Button:n=B,...o})=>r.jsx(n,{text:e,className:t,...o}),GR=ee(YR,"Cancel"),qR=({type:e="reset",text:t="Reset",className:n="reset",Button:o=B,...s})=>{const{reset:a}=Ds();return r.jsx(o,{type:e,text:t,className:n,onClick:a,...s})},d0=ee(qR,"Reset"),QR=({type:e="submit",text:t="Submit",className:n="submit",Button:o=B,...s})=>{const{submit:a,status:l}=Ds();return r.jsx(o,{type:e,text:t,className:n,onClick:a,disabled:l.submitting,...s})},Cl=ee(QR,"Submit"),XR=({className:e,gap:t=4,space:n=!1,reset:o={},submit:s={}})=>r.jsxs("div",{className:Q3({className:e,gap:t,space:n},"controls"),children:[r.jsx(d0,{...o}),r.jsx(Cl,{...s})]}),JR=ee(XR,"ResetSubmit"),eO=({className:e,gap:t=4,space:n=!1,cancel:o={},submit:s={}})=>r.jsxs("div",{className:Q3({className:e,gap:t,space:n},"controls"),children:[r.jsx(GR,{...o}),r.jsx(Cl,{...s})]});ee(eO,"CancelSubmit");r0("uiselect",LR);r0("search",VR);const lr=ee(dR,"Form"),at=ee(l0,"Field");ee(i0,"Fields");ee(_R,"Fieldset");ee(OR,"Errors");ee(c0,"Status");const $s=ee(TR,"Debug");ee(a0,"Layout");ee(t0,"Label");ee(o0,"Input");ee(s0,"Message");const tO=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(re,{name:t})}),nO=ee(tO,"ModalClose"),rO=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,oO=ee(rO,"ModalHeader"),sO=({footer:e})=>!!e&&r.jsx("footer",{children:e}),aO=ee(sO,"ModalFooter"),lO=({text:e,children:t,Header:n=oO,Footer:o=aO,...s})=>r.jsxs("article",{children:[r.jsx(n,{...s}),e||t,r.jsx(o,{...s})]}),iO=ee(lO,"ModalContent"),cO=({ref:e,open:t,close:n,className:o,closeClass:s="close",closeIcon:a="cross",Close:l=nO,Content:i=iO,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:a,className:s}),r.jsx(i,{...c})]})),In=ee(cO,"Modal"),dO=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Fr({visible:e});return{show:n,hide:o,Modal:s=>r.jsx(In,{open:t,...s})}},uO=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Fr({visible:e});return{show:n,hide:o,Overlay:s=>t&&r.jsx(Eo,{...s})}},pO=({className:e,disabled:t,children:n})=>r.jsx("label",{className:pe(e,{disabled:t}),children:n}),hO=ee(pO,"RadioLabel"),mO=({name:e,option:t,tabIndex:n=0,onChange:o=Ce,checked:s})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:a=>o(a.target.checked),checked:s}),fO=ee(mO,"RadioInput"),xO=({name:e,option:t,checked:n,inline:o,border:s,labelClass:a="radio",inputClass:l,Label:i=hO,Input:c=fO,onChange:d})=>r.jsxs(i,{className:pe(a,t.labelClass,{inline:o,border:s}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:pe(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),gO=ee(xO,"RadioOption"),vO=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:s,Option:a=gO,...l})=>r.jsx("div",{className:pe(o,{disabled:s}),children:n.map(i=>{const c=Co(i)?i:{value:i,label:i};return r.jsx(a,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),$n=ee(vO,"Radio"),bO=({...e})=>r.jsx(Gh,{modifiers:[ek,P3,Yh],strategy:PE,...e}),jO=({tab:e})=>{if(!e)return null;const{content:t,Component:n}=e;return t||(n?r.jsx(n,{tab:e}):"No content, element or Component defined for tab")},lt=({tabs:e,storageKey:t,storageItem:n="active-tab",tabsetClass:o="tabset",tabsClass:s="tabs",activeClass:a="active",disabledClass:l="disabled",className:i,bodyClass:c,color:d,size:u,solid:p,lined:f,center:b,right:j,Body:y=jO})=>{const w=t&&Ic(t),[g,h]=V.useState(w&&w.get(n)||0),m=x=>{h(x),w&&w.set(n,x)},S=pe(o,i,d,u,{solid:p,lined:f,center:b,right:j}),C=pe(s,d,u);return r.jsxs("div",{className:S,children:[r.jsx("ul",{className:C,children:e.map((x,_)=>r.jsx("li",{className:pe({[a]:g===_,[l]:x.disabled}),onClick:()=>x.disabled?Ce:m(_),children:r.jsx(wo,{...x})},x.id||_))}),r.jsx("div",{className:c,children:r.jsx(y,{tabs:e,active:g,tab:e[g]})})]})},u0=[{text:"On",value:!0},{text:"Off",value:!1}],p0=(e,t)=>Eh(t)?t:e.findIndex(n=>n.value===t.value),yO=({selected:e=0,findSelectedIndex:t=p0,onSelect:n=Ce,options:o=u0,activeProps:s={},inactiveProps:a={className:"outline"},buttonsClass:l="buttons",size:i,className:c,...d}={})=>{const u=t(o,e),p=o.map((f,b)=>{const j=b===u;return{...f,...j?s:a,className:pe(f.className,j?s.className:a.className),onClick:()=>n(f,b)}});return r.jsx(yn,{buttons:p,className:pe(i,c,l),...d})},bn=ee(yO,"Toggle"),h0=({selected:e=0,findSelectedIndex:t=p0,options:n=u0,onSelect:o=Ce,storageKey:s,storageItem:a="selected",...l}={})=>{const i=t(n,e),c=s&&Ic(s),[d,u]=v.useState(c?c.get(a)??i:i),[p,f]=v.useState(n[d]),b=j=>{c&&c.set(a,j),u(j),f(n[j]),o(n[j],j)};return[p,({...j})=>r.jsx(bn,{options:n,selected:d,onSelect:(y,w)=>b(w),...l,...j})]},SO=e=>{const[,t]=h0(e);return r.jsx(t,{})};function CO(){const e=v.useRef(0);return e.current++,e.current}const qc=(e,t={})=>{const{onChange:n}=t,[o,s]=v.useState(n?n(e):e),a=Object.keys(e).reduce((l,i)=>{const c=`set${tw(i)}`;return l[c]=d=>s(u=>{const p={...u,[i]:Bc(d,u[i])};return n?n(p):p}),l},{});return[o,a]},_O=()=>r.jsxs(ne,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),wO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,TO=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],m0=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),TO.map(o=>r.jsx("option",{value:o,children:o},o))]}),EO=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],f0=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),EO.map(n=>r.jsx("option",{value:n,children:n},n))]}),kO=[0,1,2,3,4,5,6,8,10],NO=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),kO.map(n=>r.jsx("option",{value:n,children:n},n))]}),RO=[1,2,3,4,5],OO=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),RO.map(n=>r.jsx("option",{value:n,children:n},n))]}),S1=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),LO=[0,1,2,3,4,5,6,8,10],DO=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),LO.map(o=>r.jsx("option",{value:o,children:o},o))]}),BO=Object.keys(il.icons),np=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),BO.map(o=>r.jsx("option",{value:o,children:o},o))]}),$O=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),s=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${MO(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(PO,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Wn,{code:i,language:"html",expand:!0})]})]}),r.jsx(AO,{options:n,setOption:a,toggleOption:s})]})},AO=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),s=n("title"),a=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),f=n("icon"),b=n("headIcon"),j=t("stripe"),y=t("revealable");return r.jsxs("div",{children:[r.jsx(Ud,{label:"Headline",value:e.headline,setValue:o}),r.jsx(Ud,{label:"Title",value:e.title,setValue:s}),r.jsx(Ud,{label:"Text",value:e.text,setValue:a}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(IO,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(m0,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(f0,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(OO,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(DO,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(NO,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(np,{icon:e.headIcon,setIcon:b,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(np,{icons:e.icon,setIcon:f})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(S1,{checked:e.stripe,toggle:j,label:"Stripe"}),r.jsx(S1,{checked:e.revealable,toggle:y,label:"Revealable",disabled:!e.headline})]})]})]})},MO=e=>{const t=["headline","title","text","type","color","size","headIcon","icon"].filter(s=>e[s]).map(s=>`${s}="${e[s]}"`),n=["shadow","border","radius"].filter(s=>e[s]).map(s=>`${s}={${e[s]}}`),o=["stripe","revealable","dismissable"].filter(s=>e[s]);return[...t,...n,...o].join(`
  `)},PO=({options:e})=>r.jsx(ne,{...e}),IO=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),Ud=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(re,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),x0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(J,{Component:_O,code:wO,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx($O,{})]}),zO=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),Xh=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),FO=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},_l=Ur(FO),UO=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Jh=Ur(_l.Consumer(UO)),HO=({id:e,code:t,title:n=t,children:o,addPageToc:s,split:a})=>{const l=Xh(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{s&&s(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:a?"cols-2 stack-desktop":"",children:o})]})},z=Jh.Consumer(HO),T=({Component:e,Source:t,children:n,code:o,title:s,caption:a=o?r.jsx("code",{children:o}):s,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(z,{code:o,title:s,...u,children:[r.jsx("div",{className:"mar-b-4",children:n}),r.jsx(J,{Component:e,code:t,caption:a,expand:l,undent:i,highlightLines:d,lineProps:c})]}),VO=()=>r.jsxs("div",{children:[r.jsx(pa,{text:"Error alert"}),r.jsx(pa,{text:"Error alert with border",border:!0}),r.jsx(pa,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(pa,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),WO=`import React from 'react'
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
`,g0=()=>r.jsx(T,{code:"Error",Component:VO,Source:WO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),ZO=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),KO=()=>r.jsxs("div",{children:[r.jsx(da,{text:"Info alert"}),r.jsx(da,{text:"Info alert with border",border:!0}),r.jsx(da,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(da,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),YO=`import React from 'react'
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
`,v0=()=>r.jsx(T,{code:"Info",Component:KO,Source:YO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),GO=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),qO=()=>r.jsxs("div",{children:[r.jsx(Jo,{text:"Success alert"}),r.jsx(Jo,{text:"Success alert with border",border:!0}),r.jsx(Jo,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Jo,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),QO=`import React from 'react'
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
`,b0=()=>r.jsx(T,{code:"Success",Component:qO,Source:QO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),JO=()=>r.jsxs("div",{children:[r.jsx(ua,{text:"Warning alert"}),r.jsx(ua,{text:"Warning alert with border",border:!0}),r.jsx(ua,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(ua,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),eL=`import React from 'react'
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
`,j0=()=>r.jsx(T,{code:"Warning",Component:JO,Source:eL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),tL=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),nL=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Border Alert",border:!0}),r.jsx(ne,{text:"Border Width 2",border:2})]}),rL=`import React from 'react'
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
`,y0=()=>r.jsx(T,{code:"border",Component:nL,Source:rL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),oL=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),sL=()=>r.jsx(ne,{text:"Hello World!",className:"border shadow-2"}),aL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,S0=()=>r.jsx(T,{code:"className",Component:sL,Source:aL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),iL=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Red Alert",color:"red"}),r.jsx(ne,{text:"Brown Alert",color:"brown"}),r.jsx(ne,{text:"Orange Alert",color:"orange"}),r.jsx(ne,{text:"Yellow Alert",color:"yellow"}),r.jsx(ne,{text:"Green Alert",color:"green"}),r.jsx(ne,{text:"Teal Alert",color:"teal"}),r.jsx(ne,{text:"Blue Alert",color:"blue"}),r.jsx(ne,{text:"Indigo Alert",color:"indigo"}),r.jsx(ne,{text:"Violet Alert",color:"violet"}),r.jsx(ne,{text:"Purple Alert",color:"purple"}),r.jsx(ne,{text:"Pink Alert",color:"pink"}),r.jsx(ne,{text:"Maroon Alert",color:"maroon"})]}),cL=`import React from 'react'
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
`,C0=()=>r.jsx(T,{code:"color",Component:iL,Source:cL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),uL=()=>r.jsx(ne,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),pL=`import React from 'react'
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
`,_0=()=>r.jsx(T,{code:"dismissable",Component:uL,Source:pL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),mL=()=>r.jsx(ne,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),fL=`import React from 'react'
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
`,w0=()=>r.jsx(T,{code:"headicon",Component:mL,Source:fL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),gL=()=>r.jsx(ne,{headline:"Headline Alert",text:"An alert with a headline"}),vL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,T0=()=>r.jsx(T,{code:"headline",Component:gL,Source:vL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),bL=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),jL=()=>r.jsxs("div",{children:[r.jsx(ne,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(ne,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(ne,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),yL=`import React from 'react'
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
`,E0=()=>r.jsx(T,{code:"icon",Component:jL,Source:yL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),CL=()=>r.jsx(ne,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),_L=`import React from 'react'
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
`,k0=()=>r.jsx(T,{code:"onDismiss",Component:CL,Source:_L,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),TL=()=>r.jsx(ne,{text:"Radius Alert",radius:4}),EL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,N0=()=>r.jsx(T,{code:"radius",Component:TL,Source:EL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),NL=()=>r.jsx(ne,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),RL=`import React from 'react'
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
`,R0=()=>r.jsx(T,{code:"revealable",Component:NL,Source:RL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),OL=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),LL=()=>r.jsx(ne,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),DL=`import React from 'react'
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
`,O0=()=>r.jsx(T,{code:"revealed",Component:LL,Source:DL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),$L=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(ne,{text:"Alert With Shadow 2",shadow:2}),r.jsx(ne,{text:"Alert With Shadow 3",shadow:3}),r.jsx(ne,{text:"Alert With Shadow 4",shadow:4}),r.jsx(ne,{text:"Alert With Shadow 5",shadow:5})]}),AL=`import React from 'react'
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
`,L0=()=>r.jsx(T,{code:"shadow",Component:$L,Source:AL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),ML=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),PL=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Smallest Alert",size:"smallest"}),r.jsx(ne,{text:"Smaller Alert",size:"smaller"}),r.jsx(ne,{text:"Small Alert",size:"small"}),r.jsx(ne,{text:"Medium Alert",size:"medium"}),r.jsx(ne,{text:"Large Alert",size:"large"}),r.jsx(ne,{text:"Larger Alert",size:"larger"}),r.jsx(ne,{text:"Largest Alert",size:"largest"})]}),IL=`import React from 'react'
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
`,D0=()=>r.jsx(T,{code:"size",Component:PL,Source:IL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),FL=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(ne,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(ne,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(ne,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(ne,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),UL=`import React from 'react'
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
`,B0=()=>r.jsx(T,{code:"stripe",Component:FL,Source:UL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),HL=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),VL=()=>r.jsx(ne,{text:"Hello World!"}),WL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,$0=()=>r.jsx(T,{code:"text",Component:VL,Source:WL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),ZL=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),KL=()=>r.jsx(ne,{title:"Hello World!",children:"This is an alert"}),YL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,A0=()=>r.jsx(T,{code:"title",Component:KL,Source:YL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),qL=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Info Alert",type:"info"}),r.jsx(ne,{text:"Success Alert",type:"success"}),r.jsx(ne,{text:"Warning Alert",type:"warning"}),r.jsx(ne,{text:"Error Alert",type:"error"})]}),QL=`import React from 'react'
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
`,M0=()=>r.jsx(T,{code:"type",Component:qL,Source:QL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),XL=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),Ae=({tocName:e,children:t})=>r.jsx(Jh.Provider,{tocName:e,children:t}),JL=({id:e,title:t,addPageTocHeading:n})=>{const o=Xh(e||t),s=v.useRef();return v.useEffect(()=>{n&&n(o,t,s)},[e,t]),r.jsx("h2",{id:o,ref:s,className:"section-heading",children:t})},oe=Jh.Consumer(JL),eD=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(x0,{}),r.jsxs(Ae,{tocName:"alert",children:[r.jsx(oe,{title:"Properties"}),r.jsx(A0,{}),r.jsx($0,{}),r.jsx(T0,{}),r.jsx(w0,{}),r.jsx(R0,{}),r.jsx(O0,{}),r.jsx(_0,{}),r.jsx(k0,{}),r.jsx(S0,{}),r.jsx(y0,{}),r.jsx(N0,{}),r.jsx(L0,{}),r.jsx(D0,{}),r.jsx(C0,{}),r.jsx(M0,{}),r.jsx(B0,{}),r.jsx(E0,{}),r.jsx(oe,{title:"Components"}),r.jsx(v0,{}),r.jsx(b0,{}),r.jsx(j0,{}),r.jsx(g0,{})]})]}),tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD=()=>r.jsx(ae,{children:"This is a Badge"}),rD=`import { Badge } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Badge } from '@abw/badger-react-ui'

const BadgeExample = () =>
  <Badge>
    This is a Badge
  </Badge>

export default BadgeExample
`,P0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Badge"})," component can be used to render a badge. Any child elements will be included as content."]}),r.jsx("p",{children:"There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles."}),r.jsx(J,{Component:nD,code:rD,expand:!0})]}),oD=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),sD=()=>r.jsx(ae,{text:"Custom Badge Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),aD=`import React from 'react'
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
`,I0=()=>r.jsxs(T,{code:"Content",Component:sD,Source:aD,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the badge content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the badge text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that badge content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all badges."]})]}),lD=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),iD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(ae,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(ae,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(ae,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),cD=`import React from 'react'
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
`,z0=()=>r.jsx(T,{code:"border",Component:iD,Source:cD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width."]})}),dD=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),uD=()=>r.jsx(ae,{text:"Custom Badge",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),pD=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,F0=()=>r.jsx(T,{code:"className",Component:uD,Source:pD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the badge."]})}),hD=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),mD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(ae,{text:"Red Badge",color:"red"}),r.jsx(ae,{text:"Brown Badge",color:"brown"}),r.jsx(ae,{text:"Orange Badge",color:"orange"}),r.jsx(ae,{text:"Yellow Badge",color:"yellow"}),r.jsx(ae,{text:"Green Badge",color:"green"}),r.jsx(ae,{text:"Teal Badge",color:"teal"}),r.jsx(ae,{text:"Blue Badge",color:"blue"}),r.jsx(ae,{text:"Indigo Badge",color:"indigo"}),r.jsx(ae,{text:"Violet Badge",color:"violet"}),r.jsx(ae,{text:"Purple Badge",color:"purple"}),r.jsx(ae,{text:"Pink Badge",color:"pink"}),r.jsx(ae,{text:"Maroon Badge",color:"maroon"})]}),fD=`import React from 'react'
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
`,U0=()=>r.jsx(T,{code:"color",Component:mD,Source:fD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the badge."]})}),xD=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),gD=()=>r.jsx(ae,{color:"green",icon:"thumb"}),vD=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    icon="thumb"
  />
/* END */

export default Component
`,H0=()=>r.jsx(T,{code:"icon",Component:gD,Source:vD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a badge."]})}),bD=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),jD=()=>r.jsx(ae,{color:"green",text:"Unlocked",iconLeft:"unlocked"}),yD=`import React from 'react'
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
`,V0=()=>r.jsx(T,{code:"iconLeft",Component:jD,Source:yD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a badge."]})}),SD=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),CD=()=>r.jsx(ae,{color:"red",text:"Locked",iconRight:"locked"}),_D=`import React from 'react'
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
`,W0=()=>r.jsx(T,{code:"iconRight",Component:CD,Source:_D,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a badge."]})}),wD=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),TD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Radius 0",color:"olive",radius:0}),r.jsx(ae,{text:"Radius 2",color:"green",radius:2}),r.jsx(ae,{text:"Radius 4",color:"teal",radius:3}),r.jsx(ae,{text:"Radius 6",color:"blue",radius:4})]}),ED=`import React from 'react'
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
`,Z0=()=>r.jsx(T,{code:"radius",Component:TD,Source:ED,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),kD=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),ND=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(ae,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(ae,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(ae,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(ae,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),RD=`import React from 'react'
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
`,K0=()=>r.jsx(T,{code:"shadow",Component:ND,Source:RD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the badge ranging from 1 to 5."]})}),OD=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),LD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Smallest",size:"smallest"}),r.jsx(ae,{text:"Smaller",size:"smaller"}),r.jsx(ae,{text:"Small",size:"small"}),r.jsx(ae,{text:"Medium",size:"medium"}),r.jsx(ae,{text:"Large",size:"large"}),r.jsx(ae,{text:"Larger",size:"larger"}),r.jsx(ae,{text:"Largest",size:"largest"}),r.jsx(ae,{text:"x3",size:"x3"}),r.jsx(ae,{text:"x5",size:"x5"}),r.jsx(ae,{text:"x7",size:"x7"})]}),DD=`import React from 'react'
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
`,Y0=()=>r.jsx(T,{code:"size",Component:LD,Source:DD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the badge size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),BD=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),$D=()=>r.jsx(ae,{text:"Tag Badge",tag:!0}),AD=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Tag Badge" tag/>
/* END */

export default Component
`,G0=()=>r.jsx(T,{code:"tag",Component:$D,Source:AD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tag"})," property can be used to add the ",r.jsx("code",{children:"tag"})," CSS class to change the appearance of the badge."]})}),MD=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),PD=()=>r.jsx(ae,{text:"Grey Badge"}),ID=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Grey Badge"/>
/* END */

export default Component
`,q0=()=>r.jsx(T,{code:"text",Component:PD,Source:ID,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the badge."]})}),zD=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),FD=()=>r.jsx(ae,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),UD=`import React from 'react'
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
`,Q0=()=>r.jsx(T,{code:"tooltip",Component:FD,Source:UD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the badge.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),HD=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),VD=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Badge"}),r.jsx(P0,{}),r.jsxs(Ae,{tocName:"badge",children:[r.jsx(oe,{title:"Properties"}),r.jsx(q0,{}),r.jsx(G0,{}),r.jsx(U0,{}),r.jsx(F0,{}),r.jsx(z0,{}),r.jsx(Z0,{}),r.jsx(K0,{}),r.jsx(Y0,{}),r.jsx(H0,{}),r.jsx(V0,{}),r.jsx(W0,{}),r.jsx(Q0,{}),r.jsx(oe,{title:"Components"}),r.jsx(I0,{})]})]}),WD=Object.freeze(Object.defineProperty({__proto__:null,default:VD},Symbol.toStringTag,{value:"Module"})),ZD=()=>r.jsx(B,{children:"This is a button"}),KD=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,X0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(J,{Component:ZD,code:KD,expand:!0})]}),YD=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),GD=()=>r.jsx(B,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),qD=`import React from 'react'
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
`,J0=()=>r.jsxs(T,{code:"Content",Component:GD,Source:qD,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),QD=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),XD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Bare",color:"red",bare:!0}),r.jsx(B,{text:"Green Bare",color:"green",bare:!0}),r.jsx(B,{text:"Blue Bare",color:"blue",bare:!0})]}),JD=`import React from 'react'
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
`,e4=()=>r.jsx(T,{code:"bare",Component:XD,Source:JD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),eB=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),tB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(B,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(B,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(B,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),nB=`import React from 'react'
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
`,t4=()=>r.jsx(T,{code:"border",Component:tB,Source:nB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),rB=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),oB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),sB=`import React from 'react'
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
`,n4=()=>r.jsx(T,{code:"bright",Component:oB,Source:sB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),aB=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),lB=()=>r.jsx(B,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),iB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,r4=()=>r.jsx(T,{code:"className",Component:lB,Source:iB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),cB=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),dB=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Brown Button",color:"brown"}),r.jsx(B,{text:"Orange Button",color:"orange"}),r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Green Button",color:"green"}),r.jsx(B,{text:"Teal Button",color:"teal"}),r.jsx(B,{text:"Blue Button",color:"blue"}),r.jsx(B,{text:"Indigo Button",color:"indigo"}),r.jsx(B,{text:"Violet Button",color:"violet"}),r.jsx(B,{text:"Purple Button",color:"purple"}),r.jsx(B,{text:"Pink Button",color:"pink"}),r.jsx(B,{text:"Maroon Button",color:"maroon"})]}),uB=`import React from 'react'
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
`,o4=()=>r.jsx(T,{code:"color",Component:dB,Source:uB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),pB=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),hB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Dark Red Button",color:"red",dark:!0})]}),mB=`import React from 'react'
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
`,s4=()=>r.jsx(T,{code:"dark",Component:hB,Source:mB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),fB=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),xB=()=>r.jsx(B,{text:"Disabled Button",disabled:!0}),gB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,a4=()=>r.jsx(T,{code:"disabled",Component:xB,Source:gB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),vB=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),bB=()=>r.jsx(B,{color:"green",icon:"bars"}),jB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,l4=()=>r.jsx(T,{code:"icon",Component:bB,Source:jB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),yB=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),SB=()=>r.jsx(B,{color:"green",text:"Back",iconLeft:"angle-left"}),CB=`import React from 'react'
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
`,i4=()=>r.jsx(T,{code:"iconLeft",Component:SB,Source:CB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),_B=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),wB=()=>r.jsx(B,{color:"green",text:"Next",iconRight:"angle-right"}),TB=`import React from 'react'
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
`,c4=()=>r.jsx(T,{code:"iconRight",Component:wB,Source:TB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),EB=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),kB=()=>r.jsx(B,{text:"I am labelled!",label:"This is a label"}),NB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,d4=()=>r.jsx(T,{code:"label",Component:kB,Source:NB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),RB=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),OB=()=>r.jsx(B,{text:"Click Me!",onClick:()=>window.alert("Click!")}),LB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,u4=()=>r.jsx(T,{code:"onClick",Component:OB,Source:LB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),DB=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),BB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Outline",color:"red",outline:!0}),r.jsx(B,{text:"Green Outline",color:"green",outline:!0}),r.jsx(B,{text:"Blue Outline",color:"blue",outline:!0})]}),$B=`import React from 'react'
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
`,p4=()=>r.jsx(T,{code:"outline",Component:BB,Source:$B,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),AB=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),MB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Radius 0",color:"olive",radius:0}),r.jsx(B,{text:"Radius 2",color:"green",radius:2}),r.jsx(B,{text:"Radius 4",color:"teal",radius:3}),r.jsx(B,{text:"Radius 6",color:"blue",radius:4})]}),PB=`import React from 'react'
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
`,h4=()=>r.jsx(T,{code:"radius",Component:MB,Source:PB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),IB=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),zB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(B,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(B,{text:"Blue Shaded",color:"blue",shaded:!0})]}),FB=`import React from 'react'
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
`,m4=()=>r.jsx(T,{code:"shaded",Component:zB,Source:FB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),UB=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),HB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(B,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(B,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(B,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(B,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),VB=`import React from 'react'
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
`,f4=()=>r.jsx(T,{code:"shadow",Component:HB,Source:VB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),WB=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),ZB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Smallest",size:"smallest"}),r.jsx(B,{text:"Smaller",size:"smaller"}),r.jsx(B,{text:"Small",size:"small"}),r.jsx(B,{text:"Medium",size:"medium"}),r.jsx(B,{text:"Large",size:"large"}),r.jsx(B,{text:"Larger",size:"larger"}),r.jsx(B,{text:"Largest",size:"largest"}),r.jsx(B,{text:"x3",size:"x3"}),r.jsx(B,{text:"x5",size:"x5"}),r.jsx(B,{text:"x7",size:"x7"})]}),KB=`import React from 'react'
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
`,x4=()=>r.jsx(T,{code:"size",Component:ZB,Source:KB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),YB=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),GB=()=>r.jsx(B,{text:"Grey Button"}),qB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,g4=()=>r.jsx(T,{code:"text",Component:GB,Source:qB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),QB=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),XB=()=>r.jsx(B,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),JB=`import React from 'react'
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
`,v4=()=>r.jsx(T,{code:"tooltip",Component:XB,Source:JB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),e$=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),t$=()=>r.jsx(B,{text:"Grey Button",type:"submit"}),n$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,b4=()=>r.jsxs(T,{code:"type",Component:t$,Source:n$,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),r$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),o$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(X0,{}),r.jsxs(Ae,{tocName:"button",children:[r.jsx(oe,{title:"Properties"}),r.jsx(g4,{}),r.jsx(u4,{}),r.jsx(a4,{}),r.jsx(o4,{}),r.jsx(n4,{}),r.jsx(s4,{}),r.jsx(m4,{}),r.jsx(p4,{}),r.jsx(e4,{}),r.jsx(r4,{}),r.jsx(t4,{}),r.jsx(h4,{}),r.jsx(f4,{}),r.jsx(x4,{}),r.jsx(l4,{}),r.jsx(i4,{}),r.jsx(c4,{}),r.jsx(d4,{}),r.jsx(v4,{}),r.jsx(b4,{}),r.jsx(oe,{title:"Components"}),r.jsx(J0,{})]})]}),s$=Object.freeze(Object.defineProperty({__proto__:null,default:o$},Symbol.toStringTag,{value:"Module"})),a$=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),l$=()=>r.jsx(yn,{buttons:[{text:"One"},{text:"Two"}],Button:a$}),i$=`import { Buttons } from '@/src/index.jsx'

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
`,j4=()=>r.jsx(T,{code:"Button",Component:l$,Source:i$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),c$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),d$=()=>r.jsxs(yn,{children:[r.jsx(B,{text:"One",outline:!0}),r.jsx(B,{text:"Two",outline:!0})]}),u$=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,y4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(J,{Component:d$,code:u$,expand:!0})]}),p$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),h$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),m$=`import React from 'react'
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
`,S4=()=>r.jsx(T,{code:"buttonClass",Component:h$,Source:m$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),f$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),x$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),g$=`import React from 'react'
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
`,C4=()=>r.jsx(T,{code:"buttons",Component:x$,Source:g$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),v$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),b$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),j$=`import React from 'react'
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
`,_4=()=>r.jsx(T,{code:"className",Component:b$,Source:j$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),y$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),S$=()=>r.jsx(r.Fragment,{children:r.jsx(yn,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),C$=`import React from 'react'
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
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ve.apply(this,arguments)}var We;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(We||(We={}));const C1="popstate";function _$(e){e===void 0&&(e={});function t(o,s){let{pathname:a,search:l,hash:i}=o.location;return Ja("",{pathname:a,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){return typeof s=="string"?s:xo(s)}return T$(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w$(){return Math.random().toString(36).substr(2,8)}function _1(e,t){return{usr:e.state,key:e.key,idx:t}}function Ja(e,t,n,o){return n===void 0&&(n=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||o||w$()})}function xo(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function T$(e,t,n,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:a=!1}=o,l=s.history,i=We.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ve({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=We.Pop;let w=u(),g=w==null?null:w-d;d=w,c&&c({action:i,location:y.location,delta:g})}function f(w,g){i=We.Push;let h=Ja(y.location,w,g);n&&n(h,w),d=u()+1;let m=_1(h,d),S=y.createHref(h);try{l.pushState(m,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(S)}a&&c&&c({action:i,location:y.location,delta:1})}function b(w,g){i=We.Replace;let h=Ja(y.location,w,g);n&&n(h,w),d=u();let m=_1(h,d),S=y.createHref(h);l.replaceState(m,"",S),a&&c&&c({action:i,location:y.location,delta:0})}function j(w){let g=s.location.origin!=="null"?s.location.origin:s.location.href,h=typeof w=="string"?w:xo(w);return ue(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return i},get location(){return e(s,l)},listen(w){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(C1,p),c=w,()=>{s.removeEventListener(C1,p),c=null}},createHref(w){return t(s,w)},createURL:j,encodeLocation(w){let g=j(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:b,go(w){return l.go(w)}};return y}var Ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ue||(Ue={}));const E$=new Set(["lazy","caseSensitive","path","id","index","children"]);function k$(e){return e.index===!0}function rp(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((s,a)=>{let l=[...n,a],i=typeof s.id=="string"?s.id:l.join("-");if(ue(s.index!==!0||!s.children,"Cannot specify children on an index route"),ue(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),k$(s)){let c=Ve({},s,t(s),{id:i});return o[i]=c,c}else{let c=Ve({},s,t(s),{id:i,children:void 0});return o[i]=c,s.children&&(c.children=rp(s.children,t,l,o)),c}})}function ts(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?ir(t):t,s=$r(o.pathname||"/",n);if(s==null)return null;let a=w4(e);R$(a);let l=null;for(let i=0;l==null&&i<a.length;++i)l=I$(a[i],F$(s));return l}function N$(e,t){let{route:n,pathname:o,params:s}=e;return{id:n.id,pathname:o,params:s,data:t[n.id],handle:n.handle}}function w4(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let s=(a,l,i)=>{let c={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(ue(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Gn([o,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(ue(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),w4(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:M$(d,a.index),routesMeta:u})};return e.forEach((a,l)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,l);else for(let c of T4(a.path))s(a,l,c)}),t}function T4(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return s?[a,""]:[a];let l=T4(o.join("/")),i=[];return i.push(...l.map(c=>c===""?a:[a,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function R$(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:P$(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const O$=/^:\w+$/,L$=3,D$=2,B$=1,$$=10,A$=-2,w1=e=>e==="*";function M$(e,t){let n=e.split("/"),o=n.length;return n.some(w1)&&(o+=A$),t&&(o+=D$),n.filter(s=>!w1(s)).reduce((s,a)=>s+(O$.test(a)?L$:a===""?B$:$$),o)}function P$(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function I$(e,t){let{routesMeta:n}=e,o={},s="/",a=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=s==="/"?t:t.slice(s.length)||"/",u=op({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;a.push({params:o,pathname:Gn([s,u.pathname]),pathnameBase:W$(Gn([s,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(s=Gn([s,u.pathnameBase]))}return a}function op(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=z$(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:f,isOptional:b}=u;if(f==="*"){let y=i[p]||"";l=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const j=i[p];return b&&!j?d[f]=void 0:d[f]=U$(j||"",f),d},{}),pathname:a,pathnameBase:l,pattern:e}}function z$(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function F$(e){try{return decodeURI(e)}catch(t){return fo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function U$(e,t){try{return decodeURIComponent(e)}catch(n){return fo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $r(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function H$(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:s=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:V$(n,t):t,search:Z$(o),hash:K$(s)}}function V$(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Hd(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function E4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function em(e,t){let n=E4(e);return t?n.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function tm(e,t,n,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=ir(e):(s=Ve({},e),ue(!s.pathname||!s.pathname.includes("?"),Hd("?","pathname","search",s)),ue(!s.pathname||!s.pathname.includes("#"),Hd("#","pathname","hash",s)),ue(!s.search||!s.search.includes("#"),Hd("#","search","hash",s)));let a=e===""||s.pathname==="",l=a?"/":s.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}i=p>=0?t[p]:"/"}let c=H$(s,i),d=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),W$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z$=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,K$=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class nm{constructor(t,n,o,s){s===void 0&&(s=!1),this.status=t,this.statusText=n||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function k4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const N4=["post","put","patch","delete"],Y$=new Set(N4),G$=["get",...N4],q$=new Set(G$),Q$=new Set([301,302,303,307,308]),X$=new Set([307,308]),Vd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},J$={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},R4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eA=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),O4="remix-router-transitions";function tA(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;s=R=>({hasErrorBoundary:E(R)})}else s=eA;let a={},l=rp(e.routes,s,void 0,a),i,c=e.basename||"/",d=Ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,f=null,b=null,j=null,y=e.hydrationData!=null,w=ts(l,e.history.location,c),g=null;if(w==null){let E=Zt(404,{pathname:e.history.location.pathname}),{matches:R,route:L}=D1(l);w=R,g={[L.id]:E}}let h,m=w.some(E=>E.route.lazy),S=w.some(E=>E.route.loader);if(m)h=!1;else if(!S)h=!0;else if(d.v7_partialHydration){let E=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;h=w.every(L=>L.route.loader&&L.route.loader.hydrate!==!0&&(E&&E[L.route.id]!==void 0||R&&R[L.route.id]!==void 0))}else h=e.hydrationData!=null;let C,x={historyAction:e.history.action,location:e.history.location,matches:w,initialized:h,navigation:Vd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},_=We.Pop,k=!1,N,O=!1,D=new Map,U=null,Z=!1,te=!1,we=[],je=[],X=new Map,$=0,P=-1,I=new Map,W=new Set,Y=new Map,Te=new Map,ce=new Set,Se=new Map,ie=new Map,Le=!1;function dt(){if(u=e.history.listen(E=>{let{action:R,location:L,delta:M}=E;if(Le){Le=!1;return}fo(ie.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Dl({currentLocation:x.location,nextLocation:L,historyAction:R});if(F&&M!=null){Le=!0,e.history.go(M*-1),qr(F,{state:"blocked",location:L,proceed(){qr(F,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),e.history.go(M)},reset(){let se=new Map(x.blockers);se.set(F,qs),De({blockers:se})}});return}return Tt(R,L)}),n){pA(t,D);let E=()=>hA(t,D);t.addEventListener("pagehide",E),U=()=>t.removeEventListener("pagehide",E)}return x.initialized||Tt(We.Pop,x.location,{initialHydration:!0}),C}function wt(){u&&u(),U&&U(),p.clear(),N&&N.abort(),x.fetchers.forEach((E,R)=>ln(R)),x.blockers.forEach((E,R)=>Ll(R))}function fe(E){return p.add(E),()=>p.delete(E)}function De(E,R){R===void 0&&(R={}),x=Ve({},x,E);let L=[],M=[];d.v7_fetcherPersist&&x.fetchers.forEach((F,se)=>{F.state==="idle"&&(ce.has(se)?M.push(se):L.push(se))}),[...p].forEach(F=>F(x,{deletedFetchers:M,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),d.v7_fetcherPersist&&(L.forEach(F=>x.fetchers.delete(F)),M.forEach(F=>ln(F)))}function et(E,R,L){var M,F;let{flushSync:se}=L===void 0?{}:L,q=x.actionData!=null&&x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((M=E.state)==null?void 0:M._isRedirect)!==!0,Q;R.actionData?Object.keys(R.actionData).length>0?Q=R.actionData:Q=null:q?Q=x.actionData:Q=null;let G=R.loaderData?L1(x.loaderData,R.loaderData,R.matches||[],R.errors):x.loaderData,de=x.blockers;de.size>0&&(de=new Map(de),de.forEach((ye,Pe)=>de.set(Pe,qs)));let Me=k===!0||x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&((F=E.state)==null?void 0:F._isRedirect)!==!0;i&&(l=i,i=void 0),Z||_===We.Pop||(_===We.Push?e.history.push(E,E.state):_===We.Replace&&e.history.replace(E,E.state));let le;if(_===We.Pop){let ye=D.get(x.location.pathname);ye&&ye.has(E.pathname)?le={currentLocation:x.location,nextLocation:E}:D.has(E.pathname)&&(le={currentLocation:E,nextLocation:x.location})}else if(O){let ye=D.get(x.location.pathname);ye?ye.add(E.pathname):(ye=new Set([E.pathname]),D.set(x.location.pathname,ye)),le={currentLocation:x.location,nextLocation:E}}De(Ve({},R,{actionData:Q,loaderData:G,historyAction:_,location:E,initialized:!0,navigation:Vd,revalidation:"idle",restoreScrollPosition:Ke(E,R.matches||x.matches),preventScrollReset:Me,blockers:de}),{viewTransitionOpts:le,flushSync:se===!0}),_=We.Pop,k=!1,O=!1,Z=!1,te=!1,we=[],je=[]}async function At(E,R){if(typeof E=="number"){e.history.go(E);return}let L=sp(x.location,x.matches,c,d.v7_prependBasename,E,d.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:M,submission:F,error:se}=T1(d.v7_normalizeFormMethod,!1,L,R),q=x.location,Q=Ja(x.location,M,R&&R.state);Q=Ve({},Q,e.history.encodeLocation(Q));let G=R&&R.replace!=null?R.replace:void 0,de=We.Push;G===!0?de=We.Replace:G===!1||F!=null&&hn(F.formMethod)&&F.formAction===x.location.pathname+x.location.search&&(de=We.Replace);let Me=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,le=(R&&R.unstable_flushSync)===!0,ye=Dl({currentLocation:q,nextLocation:Q,historyAction:de});if(ye){qr(ye,{state:"blocked",location:Q,proceed(){qr(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),At(E,R)},reset(){let Pe=new Map(x.blockers);Pe.set(ye,qs),De({blockers:Pe})}});return}return await Tt(de,Q,{submission:F,pendingError:se,preventScrollReset:Me,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:le})}function sn(){if(ko(),De({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Tt(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Tt(_||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Tt(E,R,L){N&&N.abort(),N=null,_=E,Z=(L&&L.startUninterruptedRevalidation)===!0,ed(x.location,x.matches),k=(L&&L.preventScrollReset)===!0,O=(L&&L.enableViewTransition)===!0;let M=i||l,F=L&&L.overrideNavigation,se=ts(M,R,c),q=(L&&L.flushSync)===!0;if(!se){let Pe=Zt(404,{pathname:R.pathname}),{matches:ut,route:tt}=D1(M);No(),et(R,{matches:ut,loaderData:{},errors:{[tt.id]:Pe}},{flushSync:q});return}if(x.initialized&&!te&&aA(x.location,R)&&!(L&&L.submission&&hn(L.submission.formMethod))){et(R,{matches:se},{flushSync:q});return}N=new AbortController;let Q=Xs(e.history,R,N.signal,L&&L.submission),G,de;if(L&&L.pendingError)de={[ka(se).route.id]:L.pendingError};else if(L&&L.submission&&hn(L.submission.formMethod)){let Pe=await cr(Q,R,L.submission,se,{replace:L.replace,flushSync:q});if(Pe.shortCircuited)return;G=Pe.pendingActionData,de=Pe.pendingActionError,F=Wd(R,L.submission),q=!1,Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:Me,loaderData:le,errors:ye}=await Nl(Q,R,se,F,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,q,G,de);Me||(N=null,et(R,Ve({matches:se},G?{actionData:G}:{},{loaderData:le,errors:ye})))}async function cr(E,R,L,M,F){F===void 0&&(F={}),ko();let se=dA(R,L);De({navigation:se},{flushSync:F.flushSync===!0});let q,Q=lp(M,R);if(!Q.route.action&&!Q.route.lazy)q={type:Ue.error,error:Zt(405,{method:E.method,pathname:R.pathname,routeId:Q.route.id})};else if(q=await Qs("action",E,Q,M,a,s,c,d.v7_relativeSplatPath),E.signal.aborted)return{shortCircuited:!0};if(ao(q)){let G;return F&&F.replace!=null?G=F.replace:G=q.location===x.location.pathname+x.location.search,await _n(x,q,{submission:L,replace:G}),{shortCircuited:!0}}if(ns(q)){let G=ka(M,Q.route.id);return(F&&F.replace)!==!0&&(_=We.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:q.error}}}if(so(q))throw Zt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:q.data}}}async function Nl(E,R,L,M,F,se,q,Q,G,de,Me){let le=M||Wd(R,F),ye=F||se||A1(le),Pe=i||l,[ut,tt]=E1(e.history,x,L,ye,R,d.v7_partialHydration&&Q===!0,te,we,je,ce,Y,W,Pe,c,de,Me);if(No(Ee=>!(L&&L.some(Be=>Be.route.id===Ee))||ut&&ut.some(Be=>Be.route.id===Ee)),P=++$,ut.length===0&&tt.length===0){let Ee=cn();return et(R,Ve({matches:L,loaderData:{},errors:Me||null},de?{actionData:de}:{},Ee?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(!Z&&(!d.v7_partialHydration||!Q)){tt.forEach(Be=>{let wn=x.fetchers.get(Be.key),Al=Js(void 0,wn?wn.data:void 0);x.fetchers.set(Be.key,Al)});let Ee=de||x.actionData;De(Ve({navigation:le},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},tt.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G})}tt.forEach(Ee=>{X.has(Ee.key)&&Et(Ee.key),Ee.controller&&X.set(Ee.key,Ee.controller)});let Ro=()=>tt.forEach(Ee=>Et(Ee.key));N&&N.signal.addEventListener("abort",Ro);let{results:td,loaderResults:Oo,fetcherResults:ur}=await Yr(x.matches,L,ut,tt,E);if(E.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Ro),tt.forEach(Ee=>X.delete(Ee.key));let Qr=B1(td);if(Qr){if(Qr.idx>=ut.length){let Ee=tt[Qr.idx-ut.length].key;W.add(Ee)}return await _n(x,Qr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:nd,errors:rd}=O1(x,L,ut,Oo,Me,tt,ur,Se);Se.forEach((Ee,Be)=>{Ee.subscribe(wn=>{(wn||Ee.done)&&Se.delete(Be)})});let od=cn(),Lo=Is(P),$l=od||Lo||tt.length>0;return Ve({loaderData:nd,errors:rd},$l?{fetchers:new Map(x.fetchers)}:{})}function Rl(E,R,L,M){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");X.has(E)&&Et(E);let F=(M&&M.unstable_flushSync)===!0,se=i||l,q=sp(x.location,x.matches,c,d.v7_prependBasename,L,d.v7_relativeSplatPath,R,M==null?void 0:M.relative),Q=ts(se,q,c);if(!Q){Gr(E,R,Zt(404,{pathname:q}),{flushSync:F});return}let{path:G,submission:de,error:Me}=T1(d.v7_normalizeFormMethod,!0,q,M);if(Me){Gr(E,R,Me,{flushSync:F});return}let le=lp(Q,G);if(k=(M&&M.preventScrollReset)===!0,de&&hn(de.formMethod)){Ms(E,R,G,le,Q,F,de);return}Y.set(E,{routeId:R,path:G}),Cn(E,R,G,le,Q,F,de)}async function Ms(E,R,L,M,F,se,q){if(ko(),Y.delete(E),!M.route.action&&!M.route.lazy){let Be=Zt(405,{method:q.formMethod,pathname:L,routeId:R});Gr(E,R,Be,{flushSync:se});return}let Q=x.fetchers.get(E);an(E,uA(q,Q),{flushSync:se});let G=new AbortController,de=Xs(e.history,L,G.signal,q);X.set(E,G);let Me=$,le=await Qs("action",de,M,F,a,s,c,d.v7_relativeSplatPath);if(de.signal.aborted){X.get(E)===G&&X.delete(E);return}if(d.v7_fetcherPersist&&ce.has(E)){if(ao(le)||ns(le)){an(E,mr(void 0));return}}else{if(ao(le))if(X.delete(E),P>Me){an(E,mr(void 0));return}else return W.add(E),an(E,Js(q)),_n(x,le,{fetcherSubmission:q});if(ns(le)){Gr(E,R,le.error);return}}if(so(le))throw Zt(400,{type:"defer-action"});let ye=x.navigation.location||x.location,Pe=Xs(e.history,ye,G.signal),ut=i||l,tt=x.navigation.state!=="idle"?ts(ut,x.navigation.location,c):x.matches;ue(tt,"Didn't find any matches after fetcher action");let Ro=++$;I.set(E,Ro);let td=Js(q,le.data);x.fetchers.set(E,td);let[Oo,ur]=E1(e.history,x,tt,q,ye,!1,te,we,je,ce,Y,W,ut,c,{[M.route.id]:le.data},void 0);ur.filter(Be=>Be.key!==E).forEach(Be=>{let wn=Be.key,Al=x.fetchers.get(wn),qb=Js(void 0,Al?Al.data:void 0);x.fetchers.set(wn,qb),X.has(wn)&&Et(wn),Be.controller&&X.set(wn,Be.controller)}),De({fetchers:new Map(x.fetchers)});let Qr=()=>ur.forEach(Be=>Et(Be.key));G.signal.addEventListener("abort",Qr);let{results:nd,loaderResults:rd,fetcherResults:od}=await Yr(x.matches,tt,Oo,ur,Pe);if(G.signal.aborted)return;G.signal.removeEventListener("abort",Qr),I.delete(E),X.delete(E),ur.forEach(Be=>X.delete(Be.key));let Lo=B1(nd);if(Lo){if(Lo.idx>=Oo.length){let Be=ur[Lo.idx-Oo.length].key;W.add(Be)}return _n(x,Lo.result)}let{loaderData:$l,errors:Ee}=O1(x,x.matches,Oo,rd,void 0,ur,od,Se);if(x.fetchers.has(E)){let Be=mr(le.data);x.fetchers.set(E,Be)}Is(Ro),x.navigation.state==="loading"&&Ro>P?(ue(_,"Expected pending action"),N&&N.abort(),et(x.navigation.location,{matches:tt,loaderData:$l,errors:Ee,fetchers:new Map(x.fetchers)})):(De({errors:Ee,loaderData:L1(x.loaderData,$l,tt,Ee),fetchers:new Map(x.fetchers)}),te=!1)}async function Cn(E,R,L,M,F,se,q){let Q=x.fetchers.get(E);an(E,Js(q,Q?Q.data:void 0),{flushSync:se});let G=new AbortController,de=Xs(e.history,L,G.signal);X.set(E,G);let Me=$,le=await Qs("loader",de,M,F,a,s,c,d.v7_relativeSplatPath);if(so(le)&&(le=await B4(le,de.signal,!0)||le),X.get(E)===G&&X.delete(E),!de.signal.aborted){if(ce.has(E)){an(E,mr(void 0));return}if(ao(le))if(P>Me){an(E,mr(void 0));return}else{W.add(E),await _n(x,le);return}if(ns(le)){Gr(E,R,le.error);return}ue(!so(le),"Unhandled fetcher deferred data"),an(E,mr(le.data))}}async function _n(E,R,L){let{submission:M,fetcherSubmission:F,replace:se}=L===void 0?{}:L;R.revalidate&&(te=!0);let q=Ja(E.location,R.location,{_isRedirect:!0});if(ue(q,"Expected a location on the redirect navigation"),n){let ye=!1;if(R.reloadDocument)ye=!0;else if(R4.test(R.location)){const Pe=e.history.createURL(R.location);ye=Pe.origin!==t.location.origin||$r(Pe.pathname,c)==null}if(ye){se?t.location.replace(R.location):t.location.assign(R.location);return}}N=null;let Q=se===!0?We.Replace:We.Push,{formMethod:G,formAction:de,formEncType:Me}=E.navigation;!M&&!F&&G&&de&&Me&&(M=A1(E.navigation));let le=M||F;if(X$.has(R.status)&&le&&hn(le.formMethod))await Tt(Q,q,{submission:Ve({},le,{formAction:R.location}),preventScrollReset:k});else{let ye=Wd(q,M);await Tt(Q,q,{overrideNavigation:ye,fetcherSubmission:F,preventScrollReset:k})}}async function Yr(E,R,L,M,F){let se=await Promise.all([...L.map(G=>Qs("loader",F,G,R,a,s,c,d.v7_relativeSplatPath)),...M.map(G=>G.matches&&G.match&&G.controller?Qs("loader",Xs(e.history,G.path,G.controller.signal),G.match,G.matches,a,s,c,d.v7_relativeSplatPath):{type:Ue.error,error:Zt(404,{pathname:G.path})})]),q=se.slice(0,L.length),Q=se.slice(L.length);return await Promise.all([$1(E,L,q,q.map(()=>F.signal),!1,x.loaderData),$1(E,M.map(G=>G.match),Q,M.map(G=>G.controller?G.controller.signal:null),!0)]),{results:se,loaderResults:q,fetcherResults:Q}}function ko(){te=!0,we.push(...No()),Y.forEach((E,R)=>{X.has(R)&&(je.push(R),Et(R))})}function an(E,R,L){L===void 0&&(L={}),x.fetchers.set(E,R),De({fetchers:new Map(x.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Gr(E,R,L,M){M===void 0&&(M={});let F=ka(x.matches,R);ln(E),De({errors:{[F.route.id]:L},fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Ol(E){return d.v7_fetcherPersist&&(Te.set(E,(Te.get(E)||0)+1),ce.has(E)&&ce.delete(E)),x.fetchers.get(E)||J$}function ln(E){let R=x.fetchers.get(E);X.has(E)&&!(R&&R.state==="loading"&&I.has(E))&&Et(E),Y.delete(E),I.delete(E),W.delete(E),ce.delete(E),x.fetchers.delete(E)}function dr(E){if(d.v7_fetcherPersist){let R=(Te.get(E)||0)-1;R<=0?(Te.delete(E),ce.add(E)):Te.set(E,R)}else ln(E);De({fetchers:new Map(x.fetchers)})}function Et(E){let R=X.get(E);ue(R,"Expected fetch controller: "+E),R.abort(),X.delete(E)}function Ps(E){for(let R of E){let L=Ol(R),M=mr(L.data);x.fetchers.set(R,M)}}function cn(){let E=[],R=!1;for(let L of W){let M=x.fetchers.get(L);ue(M,"Expected fetcher: "+L),M.state==="loading"&&(W.delete(L),E.push(L),R=!0)}return Ps(E),R}function Is(E){let R=[];for(let[L,M]of I)if(M<E){let F=x.fetchers.get(L);ue(F,"Expected fetcher: "+L),F.state==="loading"&&(Et(L),I.delete(L),R.push(L))}return Ps(R),R.length>0}function Xc(E,R){let L=x.blockers.get(E)||qs;return ie.get(E)!==R&&ie.set(E,R),L}function Ll(E){x.blockers.delete(E),ie.delete(E)}function qr(E,R){let L=x.blockers.get(E)||qs;ue(L.state==="unblocked"&&R.state==="blocked"||L.state==="blocked"&&R.state==="blocked"||L.state==="blocked"&&R.state==="proceeding"||L.state==="blocked"&&R.state==="unblocked"||L.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+R.state);let M=new Map(x.blockers);M.set(E,R),De({blockers:M})}function Dl(E){let{currentLocation:R,nextLocation:L,historyAction:M}=E;if(ie.size===0)return;ie.size>1&&fo(!1,"A router only supports one blocker at a time");let F=Array.from(ie.entries()),[se,q]=F[F.length-1],Q=x.blockers.get(se);if(!(Q&&Q.state==="proceeding")&&q({currentLocation:R,nextLocation:L,historyAction:M}))return se}function No(E){let R=[];return Se.forEach((L,M)=>{(!E||E(M))&&(L.cancel(),R.push(M),Se.delete(M))}),R}function Jc(E,R,L){if(f=E,j=R,b=L||null,!y&&x.navigation===Vd){y=!0;let M=Ke(x.location,x.matches);M!=null&&De({restoreScrollPosition:M})}return()=>{f=null,j=null,b=null}}function Bl(E,R){return b&&b(E,R.map(M=>N$(M,x.loaderData)))||E.key}function ed(E,R){if(f&&j){let L=Bl(E,R);f[L]=j()}}function Ke(E,R){if(f){let L=Bl(E,R),M=f[L];if(typeof M=="number")return M}return null}function gt(E){a={},i=rp(E,s,void 0,a)}return C={get basename(){return c},get future(){return d},get state(){return x},get routes(){return l},get window(){return t},initialize:dt,subscribe:fe,enableScrollRestoration:Jc,navigate:At,fetch:Rl,revalidate:sn,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:Ol,deleteFetcher:dr,dispose:wt,getBlocker:Xc,deleteBlocker:Ll,_internalFetchControllers:X,_internalActiveDeferreds:Se,_internalSetRoutes:gt},C}function nA(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function sp(e,t,n,o,s,a,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=tm(s||".",em(c,a),$r(e.pathname,n)||e.pathname,i==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&d&&d.route.index&&!rm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Gn([n,u.pathname])),xo(u)}function T1(e,t,n,o){if(!o||!nA(o))return{path:n};if(o.formMethod&&!cA(o.formMethod))return{path:n,error:Zt(405,{method:o.formMethod})};let s=()=>({path:n,error:Zt(400,{type:"invalid-body"})}),a=o.formMethod||"get",l=e?a.toUpperCase():a.toLowerCase(),i=D4(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!hn(l))return s();let f=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((b,j)=>{let[y,w]=j;return""+b+y+"="+w+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:f}}}else if(o.formEncType==="application/json"){if(!hn(l))return s();try{let f=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:f,text:void 0}}}catch{return s()}}}ue(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=ap(o.formData),d=o.formData;else if(o.body instanceof FormData)c=ap(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=R1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=R1(c)}catch{return s()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(hn(u.formMethod))return{path:n,submission:u};let p=ir(n);return t&&p.search&&rm(p.search)&&c.append("index",""),p.search="?"+c,{path:xo(p),submission:u}}function rA(e,t){let n=e;if(t){let o=e.findIndex(s=>s.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function E1(e,t,n,o,s,a,l,i,c,d,u,p,f,b,j,y){let w=y?Object.values(y)[0]:j?Object.values(j)[0]:void 0,g=e.createURL(t.location),h=e.createURL(s),m=y?Object.keys(y)[0]:void 0,C=rA(n,m).filter((_,k)=>{let{route:N}=_;if(N.lazy)return!0;if(N.loader==null)return!1;if(a)return N.loader.hydrate?!0:t.loaderData[N.id]===void 0&&(!t.errors||t.errors[N.id]===void 0);if(oA(t.loaderData,t.matches[k],_)||i.some(U=>U===_.route.id))return!0;let O=t.matches[k],D=_;return k1(_,Ve({currentUrl:g,currentParams:O.params,nextUrl:h,nextParams:D.params},o,{actionResult:w,defaultShouldRevalidate:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||L4(O,D)}))}),x=[];return u.forEach((_,k)=>{if(a||!n.some(Z=>Z.route.id===_.routeId)||d.has(k))return;let N=ts(f,_.path,b);if(!N){x.push({key:k,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(k),D=lp(N,_.path),U=!1;p.has(k)?U=!1:c.includes(k)?U=!0:O&&O.state!=="idle"&&O.data===void 0?U=l:U=k1(D,Ve({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},o,{actionResult:w,defaultShouldRevalidate:l})),U&&x.push({key:k,routeId:_.routeId,path:_.path,matches:N,match:D,controller:new AbortController})}),[C,x]}function oA(e,t,n){let o=!t||n.route.id!==t.route.id,s=e[n.route.id]===void 0;return o||s}function L4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function k1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function N1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let s=n[e.id];ue(s,"No route found in manifest");let a={};for(let l in o){let c=s[l]!==void 0&&l!=="hasErrorBoundary";fo(!c,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!E$.has(l)&&(a[l]=o[l])}Object.assign(s,a),Object.assign(s,Ve({},t(s),{lazy:void 0}))}async function Qs(e,t,n,o,s,a,l,i,c){c===void 0&&(c={});let d,u,p,f=y=>{let w,g=new Promise((h,m)=>w=m);return p=()=>w(),t.signal.addEventListener("abort",p),Promise.race([y({request:t,params:n.params,context:c.requestContext}),g])};try{let y=n.route[e];if(n.route.lazy)if(y){let w,g=await Promise.all([f(y).catch(h=>{w=h}),N1(n.route,a,s)]);if(w)throw w;u=g[0]}else if(await N1(n.route,a,s),y=n.route[e],y)u=await f(y);else if(e==="action"){let w=new URL(t.url),g=w.pathname+w.search;throw Zt(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:Ue.data,data:void 0};else if(y)u=await f(y);else{let w=new URL(t.url),g=w.pathname+w.search;throw Zt(404,{pathname:g})}ue(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){d=Ue.error,u=y}finally{p&&t.signal.removeEventListener("abort",p)}if(iA(u)){let y=u.status;if(Q$.has(y)){let g=u.headers.get("Location");if(ue(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!R4.test(g))g=sp(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,g,i);else if(!c.isStaticRequest){let h=new URL(t.url),m=g.startsWith("//")?new URL(h.protocol+g):new URL(g),S=$r(m.pathname,l)!=null;m.origin===h.origin&&S&&(g=m.pathname+m.search+m.hash)}if(c.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Ue.redirect,status:y,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===Ue.error?Ue.error:Ue.data,response:u};let w;try{let g=u.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?w=await u.json():w=await u.text()}catch(g){return{type:Ue.error,error:g}}return d===Ue.error?{type:d,error:new nm(y,u.statusText,w),headers:u.headers}:{type:Ue.data,data:w,statusCode:u.status,headers:u.headers}}if(d===Ue.error)return{type:d,error:u};if(lA(u)){var b,j;return{type:Ue.deferred,deferredData:u,statusCode:(b=u.init)==null?void 0:b.status,headers:((j=u.init)==null?void 0:j.headers)&&new Headers(u.init.headers)}}return{type:Ue.data,data:u}}function Xs(e,t,n,o){let s=e.createURL(D4(t)).toString(),a={signal:n};if(o&&hn(o.formMethod)){let{formMethod:l,formEncType:i}=o;a.method=l.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(o.json)):i==="text/plain"?a.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?a.body=ap(o.formData):a.body=o.formData}return new Request(s,a)}function ap(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function R1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function sA(e,t,n,o,s){let a={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let f=t[p].route.id;if(ue(!ao(u),"Cannot handle redirect results in processLoaderData"),ns(u)){let b=ka(e,f),j=u.error;o&&(j=Object.values(o)[0],o=void 0),l=l||{},l[b.route.id]==null&&(l[b.route.id]=j),a[f]=void 0,c||(c=!0,i=k4(u.error)?u.error.status:500),u.headers&&(d[f]=u.headers)}else so(u)?(s.set(f,u.deferredData),a[f]=u.deferredData.data):a[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[f]=u.headers)}),o&&(l=o,a[Object.keys(o)[0]]=void 0),{loaderData:a,errors:l,statusCode:i||200,loaderHeaders:d}}function O1(e,t,n,o,s,a,l,i){let{loaderData:c,errors:d}=sA(t,n,o,s,i);for(let u=0;u<a.length;u++){let{key:p,match:f,controller:b}=a[u];ue(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let j=l[u];if(!(b&&b.signal.aborted))if(ns(j)){let y=ka(e.matches,f==null?void 0:f.route.id);d&&d[y.route.id]||(d=Ve({},d,{[y.route.id]:j.error})),e.fetchers.delete(p)}else if(ao(j))ue(!1,"Unhandled fetcher revalidation redirect");else if(so(j))ue(!1,"Unhandled fetcher deferred data");else{let y=mr(j.data);e.fetchers.set(p,y)}}return{loaderData:c,errors:d}}function L1(e,t,n,o){let s=Ve({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&a.route.loader&&(s[l]=e[l]),o&&o.hasOwnProperty(l))break}return s}function ka(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function D1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Zt(e,t){let{pathname:n,routeId:o,method:s,type:a}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&n&&o?i="You made a "+s+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":a==="defer-action"?i="defer() is not supported in actions":a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",s&&n&&o?i="You made a "+s.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":s&&(i='Invalid request method "'+s.toUpperCase()+'"')),new nm(e||500,l,new Error(i),!0)}function B1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ao(n))return{result:n,idx:t}}}function D4(e){let t=typeof e=="string"?ir(e):e;return xo(Ve({},t,{hash:""}))}function aA(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function so(e){return e.type===Ue.deferred}function ns(e){return e.type===Ue.error}function ao(e){return(e&&e.type)===Ue.redirect}function lA(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function iA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function cA(e){return q$.has(e.toLowerCase())}function hn(e){return Y$.has(e.toLowerCase())}async function $1(e,t,n,o,s,a){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!L4(d,c)&&(a&&a[c.route.id])!==void 0;if(so(i)&&(s||u)){let p=o[l];ue(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await B4(i,p,s).then(f=>{f&&(n[l]=f||n[l])})}}}async function B4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ue.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Ue.error,error:s}}return{type:Ue.data,data:e.deferredData.data}}}function rm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function lp(e,t){let n=typeof t=="string"?ir(t).search:t.search;if(e[e.length-1].route.index&&rm(n||""))return e[e.length-1];let o=E4(e);return o[o.length-1]}function A1(e){let{formMethod:t,formAction:n,formEncType:o,text:s,formData:a,json:l}=e;if(!(!t||!n||!o)){if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:s};if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:a,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function Wd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function dA(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Js(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function uA(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function mr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pA(e,t){try{let n=e.sessionStorage.getItem(O4);if(n){let o=JSON.parse(n);for(let[s,a]of Object.entries(o||{}))a&&Array.isArray(a)&&t.set(s,new Set(a||[]))}}catch{}}function hA(e,t){if(t.size>0){let n={};for(let[o,s]of t)n[o]=[...s];try{e.sessionStorage.setItem(O4,JSON.stringify(n))}catch(o){fo(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},el.apply(this,arguments)}const wl=v.createContext(null),om=v.createContext(null),Zr=v.createContext(null),Qc=v.createContext(null),Kr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),$4=v.createContext(null);function mA(e,t){let{relative:n}=t===void 0?{}:t;Tl()||ue(!1);let{basename:o,navigator:s}=v.useContext(Zr),{hash:a,pathname:l,search:i}=El(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Gn([o,l])),s.createHref({pathname:c,search:i,hash:a})}function Tl(){return v.useContext(Qc)!=null}function As(){return Tl()||ue(!1),v.useContext(Qc).location}function A4(e){v.useContext(Zr).static||v.useLayoutEffect(e)}function fA(){let{isDataRoute:e}=v.useContext(Kr);return e?NA():xA()}function xA(){Tl()||ue(!1);let e=v.useContext(wl),{basename:t,future:n,navigator:o}=v.useContext(Zr),{matches:s}=v.useContext(Kr),{pathname:a}=As(),l=JSON.stringify(em(s,n.v7_relativeSplatPath)),i=v.useRef(!1);return A4(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=tm(d,JSON.parse(l),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Gn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,a,e])}const gA=v.createContext(null);function vA(e){let t=v.useContext(Kr).outlet;return t&&v.createElement(gA.Provider,{value:e},t)}function El(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Zr),{matches:s}=v.useContext(Kr),{pathname:a}=As(),l=JSON.stringify(em(s,o.v7_relativeSplatPath));return v.useMemo(()=>tm(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function bA(e,t,n,o){Tl()||ue(!1);let{navigator:s}=v.useContext(Zr),{matches:a}=v.useContext(Kr),l=a[a.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=As(),u;if(t){var p;let w=typeof t=="string"?ir(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||ue(!1),u=w}else u=d;let f=u.pathname||"/",b=c==="/"?f:f.slice(c.length)||"/",j=ts(e,{pathname:b}),y=_A(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:Gn([c,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Gn([c,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,o);return t&&y?v.createElement(Qc.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:We.Pop}},y):y}function jA(){let e=kA(),t=k4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:s},n):null,a)}const yA=v.createElement(jA,null);class SA extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Kr.Provider,{value:this.props.routeContext},v.createElement($4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CA(e){let{routeContext:t,match:n,children:o}=e,s=v.useContext(wl);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Kr.Provider,{value:t},o)}function _A(e,t,n,o){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let l=e,i=(s=n)==null?void 0:s.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||ue(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:b}=n,j=p.route.loader&&f[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,f)=>{let b,j=!1,y=null,w=null;n&&(b=i&&p.route.id?i[p.route.id]:void 0,y=p.route.errorElement||yA,c&&(d<0&&f===0?(RA("route-fallback",!1),j=!0,w=null):d===f&&(j=!0,w=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,f+1)),h=()=>{let m;return b?m=y:j?m=w:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=u,v.createElement(CA,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?v.createElement(SA,{location:n.location,revalidation:n.revalidation,component:y,error:b,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var M4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(M4||{}),mc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mc||{});function wA(e){let t=v.useContext(wl);return t||ue(!1),t}function TA(e){let t=v.useContext(om);return t||ue(!1),t}function EA(e){let t=v.useContext(Kr);return t||ue(!1),t}function P4(e){let t=EA(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function kA(){var e;let t=v.useContext($4),n=TA(mc.UseRouteError),o=P4(mc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function NA(){let{router:e}=wA(M4.UseNavigateStable),t=P4(mc.UseNavigateStable),n=v.useRef(!1);return A4(()=>{n.current=!0}),v.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,el({fromRouteId:t},a)))},[e,t])}const M1={};function RA(e,t,n){!t&&!M1[e]&&(M1[e]=!0)}function OA(e){return vA(e.context)}function LA(e){let{basename:t="/",children:n=null,location:o,navigationType:s=We.Pop,navigator:a,static:l=!1,future:i}=e;Tl()&&ue(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:a,static:l,future:el({v7_relativeSplatPath:!1},i)}),[c,i,a,l]);typeof o=="string"&&(o=ir(o));let{pathname:u="/",search:p="",hash:f="",state:b=null,key:j="default"}=o,y=v.useMemo(()=>{let w=$r(u,c);return w==null?null:{location:{pathname:w,search:p,hash:f,state:b,key:j},navigationType:s}},[c,u,p,f,b,j,s]);return y==null?null:v.createElement(Zr.Provider,{value:d},v.createElement(Qc.Provider,{children:n,value:y}))}new Promise(()=>{});function DA(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},bs.apply(this,arguments)}function I4(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function BA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $A(e,t){return e.button===0&&(!t||t==="_self")&&!BA(e)}const AA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MA=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function PA(e,t){return tA({basename:t==null?void 0:t.basename,future:bs({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:_$({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||IA(),routes:e,mapRouteProperties:DA,window:t==null?void 0:t.window}).initialize()}function IA(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=bs({},t,{errors:zA(t.errors)})),t}function zA(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,s]of t)if(s&&s.__type==="RouteErrorResponse")n[o]=new nm(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let a=window[s.__subType];if(typeof a=="function")try{let l=new a(s.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let a=new Error(s.message);a.stack="",n[o]=a}}else n[o]=s;return n}const z4=v.createContext({isTransitioning:!1}),FA=v.createContext(new Map),UA="startTransition",P1=m6[UA],HA="flushSync",I1=wj[HA];function VA(e){P1?P1(e):e()}function ea(e){I1?I1(e):e()}class WA{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function ZA(e){let{fallbackElement:t,router:n,future:o}=e,[s,a]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[f,b]=v.useState(),[j,y]=v.useState(),w=v.useRef(new Map),{v7_startTransition:g}=o||{},h=v.useCallback(_=>{g?VA(_):_()},[g]),m=v.useCallback((_,k)=>{let{deletedFetchers:N,unstable_flushSync:O,unstable_viewTransitionOpts:D}=k;N.forEach(Z=>w.current.delete(Z)),_.fetchers.forEach((Z,te)=>{Z.data!==void 0&&w.current.set(te,Z.data)});let U=n.window==null||typeof n.window.document.startViewTransition!="function";if(!D||U){O?ea(()=>a(_)):h(()=>a(_));return}if(O){ea(()=>{f&&(u&&u.resolve(),f.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let Z=n.window.document.startViewTransition(()=>{ea(()=>a(_))});Z.finished.finally(()=>{ea(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})})}),ea(()=>b(Z));return}f?(u&&u.resolve(),f.skipTransition(),y({state:_,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(i(_),d({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[n.window,f,u,w,h]);v.useLayoutEffect(()=>n.subscribe(m),[n,m]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new WA)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let _=l,k=u.promise,N=n.window.document.startViewTransition(async()=>{h(()=>a(_)),await k});N.finished.finally(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})}),b(N)}},[h,l,u,n.window]),v.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,f,s.location,l]),v.useEffect(()=>{!c.isTransitioning&&j&&(i(j.state),d({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}),y(void 0))},[c.isTransitioning,j]),v.useEffect(()=>{},[]);let S=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:_=>n.navigate(_),push:(_,k,N)=>n.navigate(_,{state:k,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(_,k,N)=>n.navigate(_,{replace:!0,state:k,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),C=n.basename||"/",x=v.useMemo(()=>({router:n,navigator:S,static:!1,basename:C}),[n,S,C]);return v.createElement(v.Fragment,null,v.createElement(wl.Provider,{value:x},v.createElement(om.Provider,{value:s},v.createElement(FA.Provider,{value:w.current},v.createElement(z4.Provider,{value:c},v.createElement(LA,{basename:C,location:s.location,navigationType:s.historyAction,navigator:S,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},s.initialized||n.future.v7_partialHydration?v.createElement(KA,{routes:n.routes,future:n.future,state:s}):t))))),null)}function KA(e){let{routes:t,future:n,state:o}=e;return bA(t,void 0,o,n)}const YA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qA=v.forwardRef(function(t,n){let{onClick:o,relative:s,reloadDocument:a,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,f=I4(t,AA),{basename:b}=v.useContext(Zr),j,y=!1;if(typeof d=="string"&&GA.test(d)&&(j=d,YA))try{let m=new URL(window.location.href),S=d.startsWith("//")?new URL(m.protocol+d):new URL(d),C=$r(S.pathname,b);S.origin===m.origin&&C!=null?d=C+S.search+S.hash:y=!0}catch{}let w=mA(d,{relative:s}),g=JA(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:s,unstable_viewTransition:p});function h(m){o&&o(m),m.defaultPrevented||g(m)}return v.createElement("a",bs({},f,{href:j||w,onClick:y||a?o:h,ref:n,target:c}))}),QA=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:s=!1,className:a="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=I4(t,MA),f=El(c,{relative:p.relative}),b=As(),j=v.useContext(om),{navigator:y}=v.useContext(Zr),w=j!=null&&eM(f)&&d===!0,g=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,h=b.pathname,m=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;s||(h=h.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase());const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!l&&h.startsWith(g)&&h.charAt(S)==="/",x=m!=null&&(m===g||!l&&m.startsWith(g)&&m.charAt(g.length)==="/"),_={isActive:C,isPending:x,isTransitioning:w},k=C?o:void 0,N;typeof a=="function"?N=a(_):N=[a,C?"active":null,x?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let O=typeof i=="function"?i(_):i;return v.createElement(qA,bs({},p,{"aria-current":k,className:N,ref:n,style:O,to:c,unstable_viewTransition:d}),typeof u=="function"?u(_):u)});var ip;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ip||(ip={}));var z1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(z1||(z1={}));function XA(e){let t=v.useContext(wl);return t||ue(!1),t}function JA(e,t){let{target:n,replace:o,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=fA(),d=As(),u=El(e,{relative:l});return v.useCallback(p=>{if($A(p,n)){p.preventDefault();let f=o!==void 0?o:xo(d)===xo(u);c(e,{replace:f,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i})}},[d,c,u,o,s,n,e,a,l,i])}function eM(e,t){t===void 0&&(t={});let n=v.useContext(z4);n==null&&ue(!1);let{basename:o}=XA(ip.useViewTransitionState),s=El(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=$r(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=$r(n.nextLocation.pathname,o)||n.nextLocation.pathname;return op(s.pathname,l)!=null||op(s.pathname,a)!=null}const jn=({to:e,className:t="",exact:n,onClick:o,label:s,style:a,...l})=>r.jsx(QA,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":s,style:a,children:r.jsx(wo,{...l})}),F4=(e,t)=>(n={})=>r.jsx(jn,{to:e,className:"code",...n,children:t}),U4=F4("/components/button","Button"),tM=F4("/components/buttons","Buttons"),H4=()=>r.jsx(T,{code:"outline",Component:S$,Source:C$,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx(U4,{})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent"," ",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),nM=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),rM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(y4,{}),r.jsxs(Ae,{tocName:"buttons",children:[r.jsx(oe,{title:"Properties"}),r.jsx(C4,{}),r.jsx(H4,{}),r.jsx(_4,{}),r.jsx(S4,{}),r.jsx(oe,{title:"Components"}),r.jsx(j4,{})]})]}),oM=Object.freeze(Object.defineProperty({__proto__:null,default:rM},Symbol.toStringTag,{value:"Module"})),sM=()=>r.jsx(uw,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),aM=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,V4=()=>r.jsx(T,{code:"CheckboxState",Component:sM,Source:aM,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),iM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",checked:e,onChange:t})},cM=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,W4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(J,{Component:iM,code:cM,expand:!0})]}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),uM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{border:!0,text:"I like badgers",checked:e,onChange:t})},pM=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,Z4=()=>r.jsx(T,{code:"border",Component:uM,Source:pM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),hM=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),mM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",checked:e,onChange:t})},fM=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,K4=()=>r.jsx(T,{code:"checked",Component:mM,Source:fM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),xM=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),gM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},vM=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,Y4=()=>r.jsx(T,{code:"checkedText / uncheckedText",Component:gM,Source:vM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),bM=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),jM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},yM=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,G4=()=>r.jsx(T,{code:"className",Component:jM,Source:yM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),SM=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),CM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},_M=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,q4=()=>r.jsx(T,{code:"disabled",Component:CM,Source:_M,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),wM=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),TM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"I like badgers",checked:e,onChange:t})},EM=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,Q4=()=>r.jsx(T,{code:"onChange",Component:TM,Source:EM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),kM=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),NM=()=>{const[e,t]=v.useState(!1);return r.jsx(Mn,{text:"Badger are the best!",checked:e,onChange:t})},RM=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,X4=()=>r.jsx(T,{code:"text",Component:NM,Source:RM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),OM=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),LM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(W4,{}),r.jsxs(Ae,{tocName:"checkbox",children:[r.jsx(oe,{title:"Properties"}),r.jsx(X4,{}),r.jsx(K4,{}),r.jsx(Y4,{}),r.jsx(Q4,{}),r.jsx(G4,{}),r.jsx(Z4,{}),r.jsx(q4,{}),r.jsx(oe,{title:"Components"}),r.jsx(V4,{})]})]}),DM=Object.freeze(Object.defineProperty({__proto__:null,default:LM},Symbol.toStringTag,{value:"Module"})),BM=()=>r.jsx(r.Fragment,{children:r.jsx(Pn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),$M=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,J4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(J,{Component:BM,code:$M,expand:!0})]}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),MM=()=>r.jsx(Pn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),PM=`import React from 'react'
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

export default CancelExample`,ev=()=>r.jsx(T,{code:"cancel",Component:MM,Source:PM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),IM=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),zM=()=>r.jsx(Pn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),FM=`import React from 'react'
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

export default CancelExample`,tv=()=>r.jsx(T,{id:"cancelProps",code:"cancelXXX",Component:zM,Source:FM,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),UM=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),HM=()=>r.jsx(r.Fragment,{children:r.jsx(Pn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),VM=`import React from 'react'
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
`,nv=()=>r.jsx(T,{code:"className",Component:HM,Source:VM,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),WM=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),ZM=()=>r.jsx(Pn,{text:"Click to Delete",color:"red"}),KM=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,rv=()=>r.jsx(T,{code:"color",Component:ZM,Source:KM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),YM=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),GM=()=>r.jsx(Pn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),qM=`import React from 'react'
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

export default ConfirmExample`,ov=()=>r.jsx(T,{code:"confirm",Component:GM,Source:qM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),QM=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),XM=()=>r.jsx(Pn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),JM=`import React from 'react'
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

export default ConfirmProps`,sv=()=>r.jsx(T,{id:"confirmProps",code:"confirmXXX",Component:XM,Source:JM,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),tP=()=>r.jsx(Pn,{text:"Click to Delete",color:"red",iconRight:"trash"}),nP=`import React from 'react'
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
`,av=()=>r.jsx(T,{code:"iconRight",Component:tP,Source:nP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),rP=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),oP=()=>r.jsx(Pn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),sP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,lv=()=>r.jsx(T,{code:"onClick",Component:oP,Source:sP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),aP=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),lP=()=>r.jsx(Pn,{text:"Click to Delete"}),iP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,iv=()=>r.jsx(T,{code:"text",Component:lP,Source:iP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),cP=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),dP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(J4,{}),r.jsxs(Ae,{tocName:"confirm",children:[r.jsx(oe,{title:"Properties"}),r.jsx(iv,{}),r.jsx(rv,{}),r.jsx(av,{}),r.jsx(nv,{}),r.jsx(ev,{}),r.jsx(tv,{}),r.jsx(ov,{}),r.jsx(sv,{}),r.jsx(oe,{title:"Event Handlers"}),r.jsx(lv,{})]})]}),uP=Object.freeze(Object.defineProperty({__proto__:null,default:dP},Symbol.toStringTag,{value:"Module"})),on=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],pP=()=>r.jsx($t,{rows:on,columns:"id name animal role"}),hP=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () =>
  <Datatable
    rows={animals}
    columns="id name animal role"
  />

export default DatatableExample`,cv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),r.jsx(J,{Component:pP,code:hP})]}),mP=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),fP=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),xP=`import React from 'react'
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

export default DatatableExample`,dv=()=>r.jsx(T,{code:"color",Component:fP,Source:xP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),gP=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),vP=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),bP=`import React from 'react'
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

export default DatatableExample`,jP=()=>r.jsxs(T,{code:"type",Component:vP,Source:bP,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),yP=Object.freeze(Object.defineProperty({__proto__:null,default:jP},Symbol.toStringTag,{value:"Module"})),SP=()=>r.jsx($t,{rows:on,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),CP=`import React from 'react'
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

export default DatatableExample`,uv=()=>r.jsx(T,{code:"display",Component:SP,Source:CP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),_P=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),wP=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),TP=`import React from 'react'
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
`,EP=()=>r.jsx($t,{color:"brand",rows:on,columns:["id","name","animal","role"]}),kP=`import React from 'react'
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
`,NP=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),RP=`import React from 'react'
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
`,OP=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),LP=`import React from 'react'
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
`,DP=()=>r.jsx($t,{color:"brand",rows:on,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),BP=`import React from 'react'
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
`,pv=()=>r.jsxs(z,{code:"columns",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),r.jsx(J,{Component:wP,code:TP,caption:"columns",expand:!1,undent:2}),r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),r.jsx(J,{Component:EP,code:kP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),r.jsx(J,{Component:NP,code:RP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),r.jsx(J,{Component:OP,code:LP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]}),r.jsx(J,{Component:DP,code:BP,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),$P=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),AP=()=>r.jsx($t,{rows:on,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),MP=`import React from 'react'
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

export default DatatableExample`,hv=()=>r.jsx(T,{code:"label",Component:AP,Source:MP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),PP=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),IP=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),zP=`import React from 'react'
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

export default DatatableExample`,mv=()=>r.jsxs(T,{code:"type",Component:IP,Source:zP,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),FP=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),UP=()=>r.jsx($t,{rows:on,columns:"id name animal role",onRowClick:e=>window.alert(`Animal #${e.id}: ${e.name}`)}),HP=`import React from 'react'
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

export default DatatableExample`,fv=()=>r.jsx(T,{code:"onRowClick",Component:UP,Source:HP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onRowClick"})," property can be used to define a handler which will be called when the user clicks on a row.  When set the table will have the ",r.jsx("code",{children:"selectable"})," CSS class added to highlight the hovered row."]})}),VP=Object.freeze(Object.defineProperty({__proto__:null,default:fv},Symbol.toStringTag,{value:"Module"})),WP=()=>r.jsx($t,{rows:on,columns:"id name animal role",pager:{size:"small",color:"blue"}}),ZP=`import React from 'react'
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

export default DatatableExample`,xv=()=>r.jsx(T,{code:"pager",Component:WP,Source:ZP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(jn,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),KP=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),YP=`export const animals = [
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
`,gv=()=>r.jsxs(z,{code:"rows",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(Wn,{code:YP,language:"js"})})})]}),GP=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),qP=()=>r.jsx($t,{rows:on,columns:"id name animal role",storageKey:"badger-datatable-animals-demo1"}),QP=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,vv=()=>r.jsxs(T,{code:"storageKey",Component:qP,Source:QP,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," property can be used to provide a key to store the data table state in local storage.  This allows the page number, page size, visible columns, column order, sort column and sort direction to be preserved across visits to the page."]}),r.jsx("p",{children:"Try changing some of those setting in the example below.  Then reload the browser page.  You should see the setting preserved."})]}),XP=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),JP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(cv,{}),r.jsxs(Ae,{tocName:"datatable",children:[r.jsx(oe,{title:"Properties"}),r.jsx(gv,{}),r.jsx(pv,{}),r.jsx(fv,{}),r.jsx(dv,{}),r.jsx(xv,{}),r.jsx(vv,{}),r.jsx(oe,{title:"Column Properties"}),r.jsx(mv,{}),r.jsx(uv,{}),r.jsx(hv,{})]})]}),eI=Object.freeze(Object.defineProperty({__proto__:null,default:JP},Symbol.toStringTag,{value:"Module"})),tI=()=>r.jsx(Je,{summary:"Click to reveal",children:"This is the content that is revealed."}),nI=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,bv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(J,{Component:tI,code:nI})]}),rI=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),oI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),sI=`import React from 'react'
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

export default DetailsExample`,jv=()=>r.jsx(T,{code:"border",Component:oI,Source:sI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),aI=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),lI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),iI=`import React from 'react'
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

export default DetailsExample`,yv=()=>r.jsx(T,{code:"color",Component:lI,Source:iI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),cI=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),dI=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",content:"This is the content that is revealed."})}),uI=`import React from 'react'
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

export default DetailsExample`,Sv=()=>r.jsx(T,{code:"content",Component:dI,Source:uI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),pI=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),hI=()=>r.jsx(Je,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),mI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,Cv=()=>r.jsx(T,{code:"lined",Component:hI,Source:mI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),fI=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),xI=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),gI=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,_v=()=>r.jsx(T,{code:"open",Component:xI,Source:gI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),vI=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),bI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),jI=`import React from 'react'
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

export default DetailsExample`,wv=()=>r.jsx(T,{code:"radius",Component:bI,Source:jI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),yI=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),SI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),CI=`import React from 'react'
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

export default DetailsExample`,Tv=()=>r.jsx(T,{code:"shaded",Component:SI,Source:CI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),wI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),TI=`import React from 'react'
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

export default DetailsExample`,Ev=()=>r.jsx(T,{code:"shadow",Component:wI,Source:TI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),kI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Je,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(re,{name:"cog"})]}),children:"This is the content that is revealed."})]}),NI=`import React from 'react'
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

export default DetailsExample`,kv=()=>r.jsx(T,{code:"summary",Component:kI,Source:NI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),RI=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),OI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(bv,{}),r.jsxs(Ae,{tocName:"details",children:[r.jsx(oe,{title:"Properties"}),r.jsx(kv,{}),r.jsx(Sv,{}),r.jsx(_v,{}),r.jsx(Cv,{}),r.jsx(jv,{}),r.jsx(wv,{}),r.jsx(Tv,{}),r.jsx(Ev,{}),r.jsx(yv,{}),r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(z,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(z,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(oe,{title:"Components"}),r.jsx(z,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(z,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),LI=Object.freeze(Object.defineProperty({__proto__:null,default:OI},Symbol.toStringTag,{value:"Module"})),DI=()=>r.jsx(Hr,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),BI=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,Nv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(jn,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),r.jsx(J,{Component:DI,code:BI})]}),$I=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),AI=()=>r.jsx(Hr,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),MI=`import React from 'react'
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

export default DropdownMenuExample`,Rv=()=>r.jsx(T,{code:"onSelect",Component:AI,Source:MI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),PI=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),II=()=>r.jsx(Hr,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),zI=`import React from 'react'
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

export default DropdownExample`,FI=()=>r.jsx(Hr,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),UI=`import React from 'react'
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

export default DropdownExample`,HI=()=>r.jsx(Hr,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),VI=`import React from 'react'
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

export default DropdownExample`,WI=()=>r.jsx(Hr,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),ZI=`import React from 'react'
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

export default DropdownExample`,KI=()=>r.jsx(Hr,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),YI=`import React from 'react'
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

export default DropdownExample`,Ov=()=>r.jsxs(z,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(J,{Component:II,code:zI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),r.jsx(J,{Component:HI,code:VI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]}),r.jsx(J,{Component:KI,code:YI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]}),r.jsx(J,{Component:FI,code:UI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]}),r.jsx(J,{Component:WI,code:ZI,caption:"options",expand:!1,undent:2})]}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),go=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),qI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(Nv,{}),r.jsxs(Ae,{tocName:"dropdown-menu",children:[r.jsx(oe,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(jn,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx(Ov,{}),r.jsx(Rv,{}),r.jsxs(go,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(z,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(z,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),QI=Object.freeze(Object.defineProperty({__proto__:null,default:qI},Symbol.toStringTag,{value:"Module"})),XI=()=>r.jsx(Sn,{text:"Dropdown",children:"Hello World!"}),JI=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,Lv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),r.jsx(J,{Component:XI,code:JI})]}),ez=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),tz=()=>r.jsx(Sn,{text:"Dropdown Content",content:"Hello World!"}),nz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,Dv=()=>r.jsx(T,{code:"content",Component:tz,Source:nz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),rz=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),oz=()=>r.jsx(Sn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),sz=`import React from 'react'
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

export default DropdownExample`,Bv=()=>r.jsx(T,{code:"iconLeft",Component:oz,Source:sz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),az=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),lz=()=>r.jsx(Sn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),iz=`import React from 'react'
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

export default DropdownMenuExample`,$v=()=>r.jsx(T,{code:"iconLeftRotate",Component:lz,Source:iz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),cz=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),dz=()=>r.jsx(Sn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),uz=`import React from 'react'
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

export default DropdownExample`,Av=()=>r.jsx(T,{code:"iconRight",Component:dz,Source:uz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),pz=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),hz=()=>r.jsx(Sn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),mz=`import React from 'react'
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

export default DropdownExample`,Mv=()=>r.jsx(T,{code:"iconRightRotate",Component:hz,Source:mz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),fz=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),xz=()=>r.jsx(Sn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),gz=`import React from 'react'
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

export default DropdownExample`,Pv=()=>r.jsx(T,{code:"openOnHover",Component:xz,Source:gz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),vz=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),bz=()=>r.jsx(Sn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),jz=`import React from 'react'
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

export default DropdownExample`,Iv=()=>r.jsx(T,{code:"right",Component:bz,Source:jz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),yz=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),Sz=()=>r.jsx(Sn,{text:"Dropdown Trigger Text",children:"Hello World!"}),Cz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,zv=()=>r.jsx(T,{code:"text",Component:Sz,Source:Cz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),_z=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),wz=()=>r.jsx(Sn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),Tz=`import React from 'react'
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

export default DropdownExample`,Fv=()=>r.jsx(T,{code:"wide",Component:wz,Source:Tz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),Ez=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),kz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(Lv,{}),r.jsxs(Ae,{tocName:"dropdown",children:[r.jsx(oe,{title:"Properties"}),r.jsx(zv,{}),r.jsx(Dv,{}),r.jsx(Pv,{}),r.jsx(Iv,{}),r.jsx(Fv,{}),r.jsx(Bv,{}),r.jsx($v,{}),r.jsx(Av,{}),r.jsx(Mv,{}),r.jsxs(go,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(z,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(z,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(z,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(z,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(z,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),Nz=Object.freeze(Object.defineProperty({__proto__:null,default:kz},Symbol.toStringTag,{value:"Module"})),Rz=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],Oz=e=>Rz.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),Lz=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"animal",type:"search",label:"Animal",onSearch:Oz}),r.jsx($s,{})]}),Dz=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,Bz=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],F1=e=>Bz.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),$z=e=>e.id,Az=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"animal1",type:"search",label:"Animal",onSearch:F1}),r.jsx(at,{name:"animal2",type:"search",label:"Animal",onSearch:F1,selectValue:$z}),r.jsx($s,{})]}),Mz=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,Uv=()=>r.jsxs(z,{code:"search",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"search"})," ","to use the ",r.jsx(jn,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",r.jsx("code",{children:"onSearch"})," handler defined below."]}),r.jsx(J,{Component:Lz,code:Dz}),r.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(J,{Component:Az,code:Mz})]}),Pz=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),Iz=()=>zr(2e3).then(()=>({ok:"All is good"})),Hv=()=>r.jsxs(lr,{className:"relative",onSubmit:Iz,children:[r.jsx(at,{name:"name",label:"Your name",required:!0}),r.jsx(at,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(Cl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Qh,{size:"small",spinnerSize:"x3",text:"Posting...",icon:"envelope",color:"green",strokeStop:50,animation:"beat"})]}),zz=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),Fz=()=>zr(2e3).then(()=>({ok:"All is good"})),Vv=()=>r.jsxs(lr,{className:"relative",onSubmit:Fz,children:[r.jsx(at,{name:"name",label:"Your name",required:!0}),r.jsx(at,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(Cl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Qh,{})]}),Uz=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"})),Hz=`/* eslint-disable quotes */
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

export default FormExample`,Vz=`/* eslint-disable quotes */
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

export default FormExample`,Wv=()=>r.jsxs(z,{code:"Submitting",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Submitting"})," component can be used to add an overlay with a ",r.jsx(jn,{to:"/components/spinner",text:"Spinner"})," and message when the form is submitting."]}),r.jsx(J,{Component:Vv,code:Hz}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the overall size. The ",r.jsx("code",{children:"spinnerSize"})," can be used to set the size of the spinner icon. The ",r.jsx("code",{children:"text"})," property can be used to change the text displayed. All other properties are forwarded to the"," ",r.jsx(jn,{to:"/components/spinner",text:"Spinner"})," component."]}),r.jsx(J,{Component:Hv,code:Vz})]}),Wz=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),Zz=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),r.jsx($s,{})]}),Kz=`import React from 'react'
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

export default UISelectExample`,Yz=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),r.jsx($s,{})]}),Gz=`import React from 'react'
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

export default UISelectExample`,qz=()=>r.jsxs(lr,{children:[r.jsx(at,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),r.jsx($s,{})]}),Qz=`import React from 'react'
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

export default UISelectExample`,Zv=()=>r.jsxs(z,{code:"uiselect",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"uiselect"})," ","to use the ",r.jsx(jn,{to:"/components/select",text:"Select"})," component."]}),r.jsx(J,{Component:Zz,code:Kz}),r.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",r.jsx("code",{children:"search"})," property is set here to enable searching."]}),r.jsx(J,{Component:Yz,code:Gz}),r.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(J,{Component:qz,code:Qz})]}),Xz=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Jz=["Guitar","Bass","Drums","Keyboards","Mandolin"],eF=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],tF=e=>eF.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),nF=()=>zr(2e3).then(()=>({ok:"All is good"})),rF=()=>r.jsxs(lr,{className:"relative",onSubmit:nF,resetOnSuccess:!0,children:[r.jsx(at,{name:"email",label:"Email address",required:!0}),r.jsx(at,{name:"password",label:"Password",type:"password",required:!0}),r.jsx(at,{name:"instrument",type:"uiselect",label:"Instrument",options:Jz}),r.jsx(at,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:tF}),r.jsx(at,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),r.jsx(JR,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),r.jsx(Qh,{}),e=>r.jsx(B,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),r.jsx($s,{})]}),oF=`/* eslint-disable quotes */
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

export default FormExample`,sF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Form"}),r.jsxs("p",{className:"large wide",children:["The library includes"," ",r.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),r.jsx(J,{Component:rF,code:oF,caption:"Form"}),r.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",r.jsx(jn,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",r.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),r.jsxs(Ae,{tocName:"form",children:[r.jsx(oe,{title:"Input Components"}),r.jsx(Zv,{}),r.jsx(Uv,{}),r.jsx(oe,{title:"Additional Component"}),r.jsx(Wv,{})]})]}),aF=Object.freeze(Object.defineProperty({__proto__:null,default:sF},Symbol.toStringTag,{value:"Module"})),lF=()=>r.jsx(re,{name:"check"}),iF=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,cF=EC(0,100,5),ui=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:s=>n(s.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),cF.map(s=>r.jsx("option",{value:s,children:s},s))]}),dF=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),s=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${pF(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(hF,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Wn,{code:i,language:"html",expand:!0})]})]}),r.jsx(uF,{options:n,setOption:a,toggleOption:s})]})},uF=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),s=t("color"),a=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(np,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(f0,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(m0,{color:e.color,setColor:s,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(ui,{stop:e.foreground,setStop:a})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(ui,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(ui,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(ui,{stop:e.backgroundDark,setStop:c})]})]})]})},Kv=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,s)=>(o[s]=e[s],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},pF=e=>{const t=Kv(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},hF=({options:e})=>r.jsx(re,{...Kv(e)}),Yv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(J,{Component:lF,code:iF,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(dF,{})]}),mF=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),Gv=()=>r.jsxs(z,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(il.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(re,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),fF=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),xF=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(re,{name:"check",className:"smallest"}),r.jsx(re,{name:"check",className:"smaller"}),r.jsx(re,{name:"check",className:"small"}),r.jsx(re,{name:"check"}),r.jsx(re,{name:"check",className:"large"}),r.jsx(re,{name:"check",className:"larger"}),r.jsx(re,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(re,{name:"check",className:"larger green fgc-50"}),r.jsx(re,{name:"cross",className:"larger red fgc-50"})]})]}),gF=`import React from 'react'
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

export default Component`,qv=()=>r.jsx(T,{code:"className",Component:xF,Source:gF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),vF=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),bF=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(re,{name:"check",color:"green-50"}),r.jsx(re,{name:"check",color:"green-70-30"}),r.jsx(re,{name:"check",color:"green-70--30"}),r.jsx(re,{name:"check",color:"green-70-30-30-70"})]}),jF=`import React from 'react'
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

export default Component`,Qv=()=>r.jsxs(T,{code:"color",Component:bF,Source:jF,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),yF=Object.freeze(Object.defineProperty({__proto__:null,default:Qv},Symbol.toStringTag,{value:"Module"})),SF=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(re,{name:"bars"}),r.jsx(re,{name:"check"}),r.jsx(re,{name:"cross"}),r.jsx(re,{name:"arrow"}),r.jsx(re,{name:"arrow-right"}),r.jsx(re,{name:"arrow-down-thicker.red.fgc-50"})]}),CF=`import React from 'react'
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

export default Component`,Xv=()=>r.jsxs(T,{code:"name",Component:SF,Source:CF,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),_F=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),wF=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(re,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(re,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),TF=`import React from 'react'
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

export default Component`,Jv=()=>r.jsx(T,{code:"path",Component:wF,Source:TF,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),EF=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),kF=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(re,{name:"check",size:"smallest"}),r.jsx(re,{name:"check",size:"smaller"}),r.jsx(re,{name:"check",size:"small"}),r.jsx(re,{name:"check",size:"medium"}),r.jsx(re,{name:"check",size:"large"}),r.jsx(re,{name:"check",size:"larger"}),r.jsx(re,{name:"check",size:"largest"})]}),NF=`import React from 'react'
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

export default Component`,e5=()=>r.jsx(T,{code:"size",Component:kF,Source:NF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),RF=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),OF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx(Yv,{}),r.jsxs(Ae,{tocName:"icon",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Xv,{}),r.jsx(qv,{}),r.jsx(e5,{}),r.jsx(Qv,{}),r.jsx(Jv,{}),r.jsx(oe,{title:"Components"}),r.jsx(Gv,{})]})]}),LF=Object.freeze(Object.defineProperty({__proto__:null,default:OF},Symbol.toStringTag,{value:"Module"})),DF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(In,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},BF=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,t5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(J,{Component:DF,code:BF,expand:!0})]}),$F=Object.freeze(Object.defineProperty({__proto__:null,default:t5},Symbol.toStringTag,{value:"Module"})),AF=()=>{const{show:e,hide:t,Modal:n}=dO();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(B,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:e})]})},MF=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,n5=()=>r.jsx(T,{code:"ModalState",Component:AF,Source:MF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),PF=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),IF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(In,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},zF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,r5=()=>r.jsx(T,{code:"className",Component:IF,Source:zF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),FF=Object.freeze(Object.defineProperty({__proto__:null,default:r5},Symbol.toStringTag,{value:"Module"})),UF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},HF=`import React, { useState } from 'react'
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

export default ModalExample`,o5=()=>r.jsx(T,{code:"close",Component:UF,Source:HF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),VF=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),WF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},ZF=`import React, { useState } from 'react'
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

export default ModalExample`,s5=()=>r.jsx(T,{code:"closeIcon",Component:WF,Source:ZF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),KF=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),YF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(B,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},GF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,a5=()=>r.jsx(T,{code:"footer",Component:YF,Source:GF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),qF=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),QF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},XF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,l5=()=>r.jsx(T,{code:"header",Component:QF,Source:XF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),JF=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),eU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},tU=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,i5=()=>r.jsx(T,{code:"text",Component:eU,Source:tU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),nU=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),rU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(In,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},oU=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,c5=()=>r.jsx(T,{code:"title",Component:rU,Source:oU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),sU=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),aU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(t5,{}),r.jsxs(Ae,{tocName:"modal",children:[r.jsx(oe,{title:"Properties"}),r.jsx(r5,{}),r.jsx(o5,{}),r.jsx(s5,{}),r.jsx(i5,{}),r.jsx(c5,{}),r.jsx(l5,{}),r.jsx(a5,{}),r.jsx(oe,{title:"Components"}),r.jsx(n5,{})]})]}),lU=Object.freeze(Object.defineProperty({__proto__:null,default:aU},Symbol.toStringTag,{value:"Module"})),iU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(Eo,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"})]})},cU=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,d5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(J,{Component:iU,code:cU})]}),dU=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),uU=()=>{const{show:e,hide:t,Overlay:n}=uO();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(B,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(B,{color:"green",text:"Show Overlay",onClick:e})]})},pU=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,u5=()=>r.jsx(T,{code:"OverlayState",Component:uU,Source:pU,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),hU=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),mU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(In,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},fU=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,xU=()=>r.jsx(T,{code:"className",Component:mU,Source:fU,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),gU=Object.freeze(Object.defineProperty({__proto__:null,default:xU},Symbol.toStringTag,{value:"Module"})),vU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(Eo,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},bU=`import React from 'react'
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

export default ColorExample`,p5=()=>r.jsx(T,{title:"Custom Colors",Component:vU,Source:bU,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),jU=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),yU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(Eo,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},SU=`import React from 'react'
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

export default OverlayExample`,h5=()=>r.jsx(T,{code:"fixed",Component:yU,Source:SU,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),CU=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),_U=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(Eo,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},wU=`import React from 'react'
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

export default ColorExample`,TU=()=>{const{isVisible:e,show:t,hide:n}=Fr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(Eo,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},EU=`import React from 'react'
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

export default ColorExample`,m5=()=>r.jsxs(z,{code:"light / dark",children:[r.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(J,{Component:_U,code:wU,caption:"light",undent:8}),r.jsx(J,{Component:TU,code:EU,caption:"dark",undent:8})]}),kU=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),NU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(d5,{}),r.jsxs(Ae,{tocName:"overlay",children:[r.jsx(oe,{title:"Properties"}),r.jsx(h5,{}),r.jsx(m5,{}),r.jsx(oe,{title:"Styling"}),r.jsx(p5,{}),r.jsx(oe,{title:"Components"}),r.jsx(u5,{})]})]}),RU=Object.freeze(Object.defineProperty({__proto__:null,default:NU},Symbol.toStringTag,{value:"Module"})),OU=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=Rk(),s=o[e];return r.jsx(B,{text:s,className:t,onClick:n})},LU=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Xt,{pages:t,page:n,setPage:o,pageRanges:e,Page:OU,size:"small"})},DU=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,f5=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(BU,{name:t,value:n},t))})}),BU=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),x5=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]}),r.jsx(f5,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Components"}),r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]}),r.jsx(J,{Component:LU,code:DU})]}),$U=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),AU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t})},MU=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,g5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]}),r.jsx(J,{Component:AU,code:MU})]}),PU=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),IU=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Xt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},zU=`import React, { useState } from 'react'
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
`,v5=()=>r.jsx(T,{code:"className",Component:IU,Source:zU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),FU=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),UU=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"blue"})]})},HU=`import React, { useState } from 'react'
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
`,b5=()=>r.jsx(T,{code:"color",Component:UU,Source:HU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),VU=Object.freeze(Object.defineProperty({__proto__:null,default:b5},Symbol.toStringTag,{value:"Module"})),WU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},ZU=`import React, { useState } from 'react'
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
`,j5=()=>r.jsx(T,{code:"prevIcon / nextIcon",Component:WU,Source:ZU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),KU=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),YU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},GU=`import React, { useState } from 'react'
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
`,qU=()=>r.jsx(T,{code:"nextIcon",Component:YU,Source:GU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),QU=Object.freeze(Object.defineProperty({__proto__:null,default:qU},Symbol.toStringTag,{value:"Module"})),XU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,showFirstLast:!1})},JU=`import React, { useState } from 'react'
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
`,y5=()=>r.jsxs(T,{code:"showFirstLast",Component:XU,Source:JU,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),eH=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),tH=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Xt,{pages:11,page:e,setPage:t,size:"small"})]})},nH=`import React, { useState } from 'react'
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
`,S5=()=>r.jsx(T,{code:"size",Component:tH,Source:nH,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),rH=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),oH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(g5,{}),r.jsx(x5,{}),r.jsxs(Ae,{tocName:"pager",children:[r.jsx(oe,{title:"Properties"}),r.jsx(v5,{}),r.jsx(b5,{}),r.jsx(S5,{}),r.jsx(j5,{}),r.jsx(y5,{}),r.jsxs(go,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(z,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(z,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(z,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(z,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(z,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(z,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),sH=Object.freeze(Object.defineProperty({__proto__:null,default:oH},Symbol.toStringTag,{value:"Module"})),aH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:["David","Nigel","Derek"]})},lH=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,C5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(J,{Component:aH,code:lH,expand:!0})]}),iH=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),cH=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx($n,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx($n,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},dH=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,_5=()=>r.jsxs(T,{code:"border",Component:cH,Source:dH,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),uH=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),pH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},hH=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,w5=()=>r.jsx(T,{code:"className",Component:pH,Source:hH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),mH=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),fH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},xH=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,T5=()=>r.jsx(T,{code:"disabled",Component:fH,Source:xH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),gH=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),vH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},bH=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,E5=()=>r.jsx(T,{code:"inline",Component:vH,Source:bH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),jH=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),yH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},SH=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,k5=()=>r.jsx(T,{code:"name",Component:yH,Source:SH,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),CH=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),_H=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx($n,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},wH=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,Ft=({id:e,text:t})=>r.jsx("a",{href:`#${Xh(e||t)}`,className:"code",children:t}),N5=()=>r.jsx(T,{code:"onChange",Component:_H,Source:wH,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(Ft,{text:"value"}),"."]})}),TH=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),EH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},kH=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,R5=()=>r.jsx(T,{code:"options",Component:EH,Source:kH,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),NH=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),RH=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{value:e,onChange:t,options:["David","Nigel","Derek"]})},OH=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,O5=()=>r.jsx(T,{code:"value",Component:RH,Source:OH,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(Ft,{text:"onChange"})," to update the value."]})}),LH=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),DH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(C5,{}),r.jsxs(Ae,{tocName:"radio",children:[r.jsx(oe,{title:"Properties"}),r.jsx(O5,{}),r.jsx(N5,{}),r.jsx(k5,{}),r.jsx(w5,{}),r.jsx(E5,{}),r.jsx(_5,{}),r.jsx(oe,{title:"Option Properties"}),r.jsx(R5,{}),r.jsx(T5,{})]})]}),BH=Object.freeze(Object.defineProperty({__proto__:null,default:DH},Symbol.toStringTag,{value:"Module"})),$H=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],AH=()=>{const e=t=>$H.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(tr,{onSearch:e})},MH=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,L5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(J,{Component:AH,code:MH})]}),PH=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),IH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],zH=()=>{const[e,t]=V.useState(),n=o=>IH.filter(s=>s.toLowerCase().indexOf(o.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(tr,{onLoad:t,onSearch:n,value:"Brian Badger"}),r.jsx(B,{onClick:()=>e==null?void 0:e.clear(),text:"Clear"})]})},FH=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,D5=()=>r.jsx(T,{code:"clear",Component:zH,Source:FH,children:r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"onLoad"})," property to save a reference to the search context.  You can call the ",r.jsx("code",{children:"clear"})," method on that to programmatically clear the input.  This has the same effect as clicking on the cross icon to the right of the input."]})}),UH=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),HH=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],VH=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>HH.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(tr,{onSearch:t,displayResult:e})},WH=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,B5=()=>r.jsx(T,{code:"displayResult",Component:VH,Source:WH,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),ZH=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),KH=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],YH=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>KH.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(tr,{onSearch:t,displayValue:e})},GH=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,$5=()=>r.jsx(T,{code:"displayValue",Component:YH,Source:GH,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),qH=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),QH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],XH=()=>{const e=async t=>zr(500).then(()=>QH.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(tr,{onSearch:e,debug:!0})},JH=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,A5=()=>r.jsx(T,{code:"onSearch",Component:XH,Source:JH,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),eV=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),tV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],nV=()=>{const e=n=>tV.filter(o=>o.toLowerCase().indexOf(n.toLowerCase())!==-1),t=n=>alert(`You selected ${n}`);return r.jsx(tr,{onSearch:e,onSelect:t})},rV=`import { Search } from '@/src/index.jsx'

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

export default OnSelectExample`,M5=()=>r.jsx(T,{code:"onSelect",Component:nV,Source:rV,children:r.jsxs("p",{children:["You can define an ",r.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),oV=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),sV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],aV=()=>{const[e,t]=V.useState(),[n,o]=V.useState(),s=a=>sV.filter(l=>l.toLowerCase().indexOf(a.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(tr,{onLoad:t,onSearch:s}),r.jsx(B,{onClick:()=>e==null?void 0:e.reset(),text:"Reset"}),r.jsx(tr,{onLoad:o,onSearch:s,value:"Ben Badger"}),r.jsx(B,{onClick:()=>n==null?void 0:n.reset(),text:"Reset"})]})},lV=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,P5=()=>r.jsxs(T,{code:"reset",Component:aV,Source:lV,children:[r.jsxs("p",{children:["You can call the ",r.jsx("code",{children:"reset"})," method on the search object to reset the search.  Note that it will be reset to the original state, so if an initial value was provided to the component then that will be restored.  Use the ",r.jsx("code",{children:"clear"})," method if you want to clear the input instead."]}),r.jsx("p",{children:'Try changing the values in the search components below.  Clicking on the first reset button will reset the first component to a blank state. Clicking on the second reset button will reset the second component to its original state, containing the value "Ben Badger".'})]}),iV=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),cV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(L5,{}),r.jsxs(Ae,{tocName:"search",children:[r.jsx(oe,{title:"Properties"}),r.jsx(A5,{}),r.jsx(M5,{}),r.jsx(B5,{}),r.jsx($5,{}),r.jsx(oe,{title:"Functions"}),r.jsx(D5,{}),r.jsx(P5,{})]})]}),dV=Object.freeze(Object.defineProperty({__proto__:null,default:cV},Symbol.toStringTag,{value:"Module"})),uV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],pV=()=>r.jsx(rn,{options:uV}),hV=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,I5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(J,{Component:pV,code:hV}),r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]}),r.jsx(f5,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),mV=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),fV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],xV=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(rn,{options:fV,displayOption:e})},gV=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,z5=()=>r.jsx(T,{code:"displayOption",Component:xV,Source:gV,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),vV=Object.freeze(Object.defineProperty({__proto__:null,default:z5},Symbol.toStringTag,{value:"Module"})),bV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],jV=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(rn,{options:bV,displayValue:e})},yV=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,F5=()=>r.jsx(T,{code:"displayValue",Component:jV,Source:yV,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),SV=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),CV=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],_V=()=>r.jsx(rn,{options:CV}),wV=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,U5=()=>r.jsxs(T,{code:"options",Component:_V,Source:wV,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(Ft,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(Ft,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(Ft,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),TV=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),EV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],kV=()=>r.jsx(rn,{search:!0,options:EV}),NV=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,RV=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],OV=()=>r.jsx(rn,{search:!0,options:RV}),LV=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,H5=()=>r.jsxs(z,{code:"search",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",r.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),r.jsxs("p",{children:["Try entering ",r.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",r.jsx("code",{children:"aa"})," ","(e.g all the ",r.jsx("b",{children:"Aa"}),"rdvarks) and ",r.jsx("code",{children:"an"})," (Al",r.jsx("b",{children:"an"})," Aardvark,"," ",r.jsx("b",{children:"An"}),"ne Aardvark and Bri",r.jsx("b",{children:"an"})," Badger)."]})]}),r.jsx(J,{Component:kV,code:NV}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["If the ",r.jsx("code",{children:"options"})," are an array of objects then it will look for a ",r.jsx("code",{children:"search"}),", ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"}),","," ",r.jsx("code",{children:"name"})," or ",r.jsx("code",{children:"value"})," property in each object and use that."]})}),r.jsx(J,{Component:OV,code:LV})]}),DV=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),BV=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],$V=(e,t)=>{const n=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().indexOf(n)>=0||o.department.toLowerCase().indexOf(n)>=0)},AV=e=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:"smaller",children:e.department})]}),MV=()=>r.jsx(rn,{search:!0,options:BV,searchOptions:$V,displayOption:AV}),PV=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,V5=()=>r.jsxs(T,{code:"searchOptions",Component:MV,Source:PV,expand:!0,children:[r.jsxs("p",{children:["You can define your own ",r.jsx("code",{children:"searchOptions"})," function to search through the ",r.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),r.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",r.jsx("code",{children:"name"})," or their ",r.jsx("code",{children:"department"}),". Try entering ",r.jsx("code",{children:"an"}),".  It will match Al",r.jsx("b",{children:"an"}),", and ",r.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",r.jsx("b",{children:"an"}),"agement."]})]}),IV=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),zV=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],FV=()=>r.jsx(rn,{validOption:e=>!e.isFruit,options:zV}),UV=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,W5=()=>r.jsxs(T,{code:"validOption",Component:FV,Source:UV,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),HV=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),VV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],WV=()=>r.jsx(rn,{options:VV,value:"Bobby Badger"}),ZV=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,KV=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],YV=()=>r.jsx(rn,{options:KV,value:5}),GV=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,Z5=()=>r.jsxs(z,{code:"value",children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),r.jsx(J,{Component:WV,code:ZV,caption:"value",expand:!1}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]})}),r.jsx(J,{Component:YV,code:GV,caption:"value",expand:!1})]}),qV=Object.freeze(Object.defineProperty({__proto__:null,default:Z5},Symbol.toStringTag,{value:"Module"})),QV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(I5,{}),r.jsxs(Ae,{tocName:"select",children:[r.jsx(oe,{title:"Properties"}),r.jsx(U5,{}),r.jsx(Z5,{}),r.jsx(z5,{}),r.jsx(F5,{}),r.jsx(W5,{}),r.jsx(H5,{}),r.jsx(V5,{}),r.jsx(z,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(z,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(z,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(z,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(z,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(z,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(go,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Event Handlers"}),r.jsxs(z,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(z,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(z,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(z,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(z,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(z,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(z,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(z,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(z,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(z,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(z,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(z,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(z,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsx(z,{code:"Content",children:"Renders the content of the select component."}),r.jsx(z,{code:"Input",children:"Renders the input field."}),r.jsx(z,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(z,{code:"Option",children:"Renders an individual option."}),r.jsx(z,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),XV=Object.freeze(Object.defineProperty({__proto__:null,default:QV},Symbol.toStringTag,{value:"Module"})),U1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],JV=()=>{const[e,t]=V.useState(!1),[n,o]=V.useState(U1),s=i=>{o(i),t(!0)},a=()=>{o(U1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(bO,{items:n,Item:l,setOrder:s})})]})},eW=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,K5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(J,{Component:JV,code:eW})]}),tW=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),H1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],nW=()=>{const[e,t]=V.useState(!1),[n,o]=V.useState(H1),s=i=>{o(i),t(!0)},a=()=>{o(H1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(Gh,{items:n,Item:l,setOrder:s})})]})},rW=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,Y5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(J,{Component:nW,code:rW})]}),oW=Object.freeze(Object.defineProperty({__proto__:null,default:Y5},Symbol.toStringTag,{value:"Module"})),V1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],sW=()=>{const[e,t]=V.useState(!1),[n,o]=V.useState(V1),s=i=>{o(i),t(!0)},a=()=>{o(V1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(I3,{items:n,Item:l,setOrder:s})})]})},aW=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,G5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(J,{Component:sW,code:aW})]}),lW=Object.freeze(Object.defineProperty({__proto__:null,default:G5},Symbol.toStringTag,{value:"Module"})),iW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(Y5,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(G5,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(K5,{}),r.jsx(Ae,{tocName:"sortable",children:r.jsx(go,{children:r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Properties"}),r.jsxs(z,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(z,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(z,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),cW=Object.freeze(Object.defineProperty({__proto__:null,default:iW},Symbol.toStringTag,{value:"Module"})),dW=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(K,{}),r.jsx(K,{color:"red"}),r.jsx(K,{color:"orange",fill:!0}),r.jsx(K,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(K,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(K,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(K,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),uW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,q5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(J,{Component:dW,code:uW,expand:!0})]}),pW=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),hW=()=>r.jsx("div",{className:"x3",children:r.jsx(K,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),mW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,Q5=()=>r.jsx(T,{code:"bgColor",Component:hW,Source:mW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),fW=Object.freeze(Object.defineProperty({__proto__:null,default:Q5},Symbol.toStringTag,{value:"Module"})),xW=()=>r.jsx("div",{className:"x3",children:r.jsx(K,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),gW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,X5=()=>r.jsx(T,{code:"bgFill",Component:xW,Source:gW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),vW=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),bW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(K,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(K,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),jW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,J5=()=>r.jsx(T,{code:"bgFillStop",Component:bW,Source:jW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),yW=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),SW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:!1}),r.jsx(K,{bgIcon:"circle"}),r.jsx(K,{bgIcon:"square40"}),r.jsx(K,{bgIcon:"square30"}),r.jsx(K,{bgIcon:"square20"}),r.jsx(K,{bgIcon:"square10"}),r.jsx(K,{bgIcon:"square"})]}),CW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,eb=()=>r.jsx(T,{code:"bgIcon",Component:SW,Source:CW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(Ft,{text:"shrink"})," property."]})}),_W=Object.freeze(Object.defineProperty({__proto__:null,default:eb},Symbol.toStringTag,{value:"Module"})),wW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle",bgStroke:!0}),r.jsx(K,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(K,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(K,{bgIcon:"circle",bgStroke:"thinnest"})]}),TW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,tb=()=>r.jsxs(T,{code:"bgStroke",Component:wW,Source:TW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),EW=Object.freeze(Object.defineProperty({__proto__:null,default:tb},Symbol.toStringTag,{value:"Module"})),kW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(K,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(K,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),NW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,nb=()=>r.jsx(T,{code:"bgStrokeStop",Component:kW,Source:NW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),RW=Object.freeze(Object.defineProperty({__proto__:null,default:nb},Symbol.toStringTag,{value:"Module"})),OW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(K,{color:"red"}),r.jsx(K,{color:"orange"}),r.jsx(K,{color:"yellow"}),r.jsx(K,{color:"green"})]}),LW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,rb=()=>r.jsxs(T,{code:"color",Component:OW,Source:LW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),DW=Object.freeze(Object.defineProperty({__proto__:null,default:rb},Symbol.toStringTag,{value:"Module"})),BW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{fill:!0,color:"red"}),r.jsx(K,{fill:!0,color:"orange"}),r.jsx(K,{fill:!0,color:"yellow"}),r.jsx(K,{fill:!0,color:"green"})]}),$W=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,ob=()=>r.jsx(T,{code:"fill",Component:BW,Source:$W,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),AW=Object.freeze(Object.defineProperty({__proto__:null,default:ob},Symbol.toStringTag,{value:"Module"})),MW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(K,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(K,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(K,{fill:!0,fillStop:80,fillStopDark:10})]}),PW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,sb=()=>r.jsx(T,{code:"fillStop",Component:MW,Source:PW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),IW=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),zW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(K,{icon:"rotate"}),r.jsx(K,{icon:"asterisk"}),r.jsx(K,{icon:"arrow"})]}),FW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,ab=()=>r.jsx(T,{code:"icon",Component:zW,Source:FW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),UW=Object.freeze(Object.defineProperty({__proto__:null,default:ab},Symbol.toStringTag,{value:"Module"})),HW=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(K,{}),r.jsx(K,{reverse:!0})]}),VW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,lb=()=>r.jsx(T,{code:"reverse",Component:HW,Source:VW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),WW=Object.freeze(Object.defineProperty({__proto__:null,default:lb},Symbol.toStringTag,{value:"Module"})),ZW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{bgIcon:"circle"}),r.jsx(K,{bgIcon:"circle",shrink:6}),r.jsx(K,{bgIcon:"circle",shrink:7}),r.jsx(K,{bgIcon:"circle",shrink:8})]}),KW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,ib=()=>r.jsx(T,{code:"shrink",Component:ZW,Source:KW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(Ft,{text:"bgIcon"})," is set, otherwise it is 0."]})}),YW=Object.freeze(Object.defineProperty({__proto__:null,default:ib},Symbol.toStringTag,{value:"Module"})),GW=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(K,{size:"x3"}),r.jsx(K,{size:"x5"}),r.jsx(K,{size:"x8"})]}),qW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,cb=()=>r.jsxs(T,{code:"size",Component:GW,Source:qW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),QW=Object.freeze(Object.defineProperty({__proto__:null,default:cb},Symbol.toStringTag,{value:"Module"})),XW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{stroke:"thinnest"}),r.jsx(K,{stroke:"thinner"}),r.jsx(K,{stroke:"thin"}),r.jsx(K,{}),r.jsx(K,{stroke:"thick"}),r.jsx(K,{stroke:"thicker"}),r.jsx(K,{stroke:"thickest"}),r.jsx(K,{stroke:!1,fill:!0})]}),JW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,db=()=>r.jsxs(T,{code:"stroke",Component:XW,Source:JW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(Ft,{text:"fill"}),")"]})]}),eZ=Object.freeze(Object.defineProperty({__proto__:null,default:db},Symbol.toStringTag,{value:"Module"})),tZ=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(K,{strokeStop:20,strokeStopDark:80}),r.jsx(K,{strokeStop:50,strokeStopDark:50}),r.jsx(K,{strokeStop:80,strokeStopDark:20})]}),nZ=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,ub=()=>r.jsx(T,{code:"strokeStop",Component:tZ,Source:nZ,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),rZ=Object.freeze(Object.defineProperty({__proto__:null,default:ub},Symbol.toStringTag,{value:"Module"})),oZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx(q5,{}),r.jsxs(Ae,{tocName:"spinner",children:[r.jsx(oe,{title:"Properties"}),r.jsx(cb,{}),r.jsx(lb,{}),r.jsx(ib,{}),r.jsx(ab,{}),r.jsx(rb,{}),r.jsx(db,{}),r.jsx(ub,{}),r.jsx(ob,{}),r.jsx(sb,{}),r.jsx(eb,{}),r.jsx(Q5,{}),r.jsx(tb,{}),r.jsx(nb,{}),r.jsx(X5,{}),r.jsx(J5,{})]})]}),sZ=Object.freeze(Object.defineProperty({__proto__:null,default:oZ},Symbol.toStringTag,{value:"Module"})),aZ=()=>{const e=[{text:"One",content:"This is one"},{text:"Two",content:"This is two"},{text:"Three",content:"This is three"},{text:"Four",disabled:!0}];return r.jsx(lt,{lined:!0,tabs:e})},lZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,pb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Tabset"})," component renders a selectable set of tabs."]}),r.jsx(J,{Component:aZ,code:lZ})]}),iZ=Object.freeze(Object.defineProperty({__proto__:null,default:pb},Symbol.toStringTag,{value:"Module"})),cZ=()=>r.jsx(lt,{solid:!0,lined:!0,center:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),dZ=`import React from 'react'
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

export default TabsetExample`,hb=()=>r.jsx(T,{code:"center",Component:cZ,Source:dZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"center"})," property can be added to center align the tabs."]})}),uZ=Object.freeze(Object.defineProperty({__proto__:null,default:hb},Symbol.toStringTag,{value:"Module"})),pZ=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(lt,{lined:!0,solid:!0,tabs:e}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"brand"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"orange"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"teal"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,color:"violet"})]})},hZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,mb=()=>r.jsx(T,{code:"color",Component:pZ,Source:hZ,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range for the tabs."]})}),mZ=Object.freeze(Object.defineProperty({__proto__:null,default:mb},Symbol.toStringTag,{value:"Module"})),fZ=()=>r.jsx(lt,{lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),xZ=`import React from 'react'
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

export default TabsetExample`,fb=()=>r.jsx(T,{code:"lined",Component:fZ,Source:xZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a line under the tabs."]})}),gZ=Object.freeze(Object.defineProperty({__proto__:null,default:fb},Symbol.toStringTag,{value:"Module"})),vZ=()=>r.jsx(lt,{solid:!0,lined:!0,right:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),bZ=`import React from 'react'
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

export default TabsetExample`,xb=()=>r.jsx(T,{code:"right",Component:vZ,Source:bZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can be added to right align the tabs."]})}),jZ=Object.freeze(Object.defineProperty({__proto__:null,default:xb},Symbol.toStringTag,{value:"Module"})),yZ=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(lt,{lined:!0,solid:!0,tabs:e}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,size:"smaller"}),r.jsx(lt,{lined:!0,solid:!0,tabs:e,size:"larger"})]})},SZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,gb=()=>r.jsx(T,{code:"size",Component:yZ,Source:SZ,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size of the tabs."]})}),CZ=Object.freeze(Object.defineProperty({__proto__:null,default:gb},Symbol.toStringTag,{value:"Module"})),_Z=()=>r.jsxs(r.Fragment,{children:[r.jsx(lt,{solid:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),r.jsx(lt,{solid:!0,lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]})]}),wZ=`import React from 'react'
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

export default TabsetExample`,vb=()=>r.jsx(T,{code:"solid",Component:_Z,Source:wZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"solid"})," property can be used to render the tabs using solid colors.  It can be used in conjunction with ",r.jsx("code",{children:"lined"}),"."]})}),TZ=Object.freeze(Object.defineProperty({__proto__:null,default:vb},Symbol.toStringTag,{value:"Module"})),EZ=()=>r.jsx(lt,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),kZ=`import React from 'react'
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

export default TabsetExample`,bb=()=>r.jsxs(T,{code:"storageKey",Component:EZ,Source:kZ,expand:!0,undent:2,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",r.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',r.jsx("code",{children:"contact-tabs"}),"."]})]}),NZ=Object.freeze(Object.defineProperty({__proto__:null,default:bb},Symbol.toStringTag,{value:"Module"})),RZ=({tab:e})=>r.jsxs("div",{className:"border pad-2 mar-t-2",children:["This is a component for rendering ",e.otherData]}),OZ=()=>{const e=[{text:"One",iconLeft:"asterisk",content:"This is one"},{text:"Two",iconRight:"cog",content:r.jsx("div",{className:"border pad-2 mar-t-2",children:"This is two"})},{icon:"heart",otherData:"the heart tab",Component:RZ},{icon:"thumb-down",disabled:!0}];return r.jsx(lt,{lined:!0,tabs:e})},LZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,jb=()=>r.jsxs(T,{code:"tabs",Component:OZ,Source:LZ,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"tabs"})," property should be used to define an array of objects containing properties for each tab.  This can include ",r.jsx("code",{children:"text"})," for the tab text, ",r.jsx("code",{children:"icon"})," for a tab icon, ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," for icons to appear either side of the text, and ",r.jsx("code",{children:"disabled"})," to disable the tab"]}),r.jsxs("p",{children:["A ",r.jsx("code",{children:"content"})," property can be defined containing the content that should be rendered when the tab is select. Alternately you can provide a ",r.jsx("code",{children:"Component"})," which should be a React component. This will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]}),DZ=Object.freeze(Object.defineProperty({__proto__:null,default:jb},Symbol.toStringTag,{value:"Module"})),BZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Tabset"}),r.jsx(pb,{}),r.jsxs(Ae,{tocName:"tabset",children:[r.jsx(oe,{title:"Properties"}),r.jsx(jb,{}),r.jsx(bb,{}),r.jsx(fb,{}),r.jsx(vb,{}),r.jsx(mb,{}),r.jsx(gb,{}),r.jsx(hb,{}),r.jsx(xb,{}),r.jsxs(z,{code:"tabsetClass",children:["The CSS class added to the tabset container.  This defaults to ",r.jsx("code",{children:"tabset"}),"."]}),r.jsxs(z,{code:"tabsClass",children:["The CSS class added to the tabs list.  This defaults to ",r.jsx("code",{children:"tabs"}),"."]}),r.jsxs(z,{code:"activeClass",children:["The CSS class added to the active tab.  This defaults to ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"disabledClass",children:["The CSS class added to a disabled active tab.  This defaults to ",r.jsx("code",{children:"disabled"}),"."]}),r.jsx(z,{code:"className",children:"An additional CSS class to be added to the tabset container.  Use this for applying additional margin utility classes, for example."}),r.jsx(z,{code:"bodyClass",children:"A CSS class to be added to the body container."}),r.jsxs(z,{code:"Body",children:["A component to render the body for each tab.  It will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]})]}),$Z=Object.freeze(Object.defineProperty({__proto__:null,default:BZ},Symbol.toStringTag,{value:"Module"})),AZ=()=>{const[e,t]=V.useState(0),[n,o]=V.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(bn,{selected:e,onSelect:t}),r.jsx(bn,{options:[{text:"Red",color:"red"},{text:"Green",color:"green"},{text:"Blue",color:"blue"}],selected:n,onSelect:(s,a)=>o(a)})]})},MZ=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,yb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Toggle"})," component renders a switchable toggle using the ",r.jsx(tM,{})," component."]}),r.jsx(J,{Component:AZ,code:MZ})]}),PZ=Object.freeze(Object.defineProperty({__proto__:null,default:yb},Symbol.toStringTag,{value:"Module"})),IZ=()=>r.jsx(SO,{options:[{text:"Hot",color:"red"},{text:"Cold",color:"blue"}],onSelect:e=>console.log(`You selected ${e.text}`),storageKey:"bru-toggle-temperature"}),zZ=`import { ToggleState } from '@/src/index.jsx'

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

export default ToggleStateExample`,Sb=()=>r.jsxs(T,{code:"ToggleState",Component:IZ,Source:zZ,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"ToggleState"})," component is a wrapper around the"," ",r.jsx("code",{children:"Toggle"})," component which maintains the state of the selected option internally.  Use the ",r.jsx("code",{children:"onSelect"})," handler to get notification when a new option is selected."]}),r.jsxs("p",{children:["You can also define a ",r.jsx("code",{children:"storageKey"})," to store the selected option in local storage.  Try selecting an option below and then reload the page.  You should see the option selection restored."]})]}),FZ=Object.freeze(Object.defineProperty({__proto__:null,default:Sb},Symbol.toStringTag,{value:"Module"})),UZ=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{activeProps:{className:"brand weight-black"},selected:e,onSelect:t})},HZ=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,Cb=()=>r.jsx(T,{code:"activeProps",Component:UZ,Source:HZ,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"activeProps"})," property can be used to define properties for the active button."]})}),VZ=Object.freeze(Object.defineProperty({__proto__:null,default:Cb},Symbol.toStringTag,{value:"Module"})),WZ=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{color:"brand",selected:e,onSelect:t})},ZZ=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,_b=()=>r.jsx(T,{code:"color",Component:WZ,Source:ZZ,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range for the buttons."]})}),KZ=Object.freeze(Object.defineProperty({__proto__:null,default:_b},Symbol.toStringTag,{value:"Module"})),YZ=()=>{const e={id:10,text:"Love",iconLeft:"thumb-up"},t={id:11,text:"Hate",iconLeft:"thumb-down"},[n,o]=V.useState(t),s=(a,l)=>a.findIndex(i=>i.id===l.id);return r.jsx(bn,{options:[e,t],selected:n,onSelect:o,findSelectedIndex:s})},GZ=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,wb=()=>r.jsxs(T,{code:"findSelectedIndex",Component:YZ,Source:GZ,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"findSelectedIndex"})," property can be used to provide an alternative function to determine the index of a selected option. The default function looks for the option that matches the"," ",r.jsx("code",{children:"value"})," property of the selected option."]}),r.jsxs("p",{children:["In this example we define a function to match the index of the selected option using the ",r.jsx("code",{children:"id"})," property."]})]}),qZ=Object.freeze(Object.defineProperty({__proto__:null,default:wb},Symbol.toStringTag,{value:"Module"})),QZ=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{inactiveProps:{className:"grey outline weight-100"},selected:e,onSelect:t})},XZ=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,Tb=()=>r.jsx(T,{code:"inactiveProps",Component:QZ,Source:XZ,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inactiveProps"})," property can be used to define properties for inactive buttons."]})}),JZ=Object.freeze(Object.defineProperty({__proto__:null,default:Tb},Symbol.toStringTag,{value:"Module"})),eK=()=>{const[e,t]=V.useState(0),n=[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}];return r.jsx(bn,{options:n,selected:e,onSelect:(o,s)=>t(s)})},tK=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,Eb=()=>r.jsxs(T,{code:"onSelect",Component:eK,Source:tK,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to provider a handler which will be called when an option is selected.  It is passed two arguments: the ",r.jsx("code",{children:"option"})," object and the numerical index of the option in the ",r.jsx("code",{children:"options"})," array."]}),r.jsxs("p",{children:["You can safely use the second argument, the numerical index, as the value to store for the ",r.jsx("code",{children:"selected"})," option.  You can use the first argument, the option object as long as each option has a"," ",r.jsx("code",{children:"value"})," property to uniquely identify it."]})]}),nK=Object.freeze(Object.defineProperty({__proto__:null,default:Eb},Symbol.toStringTag,{value:"Module"})),rK=()=>{const[e,t]=V.useState(0),n=[{value:"love",text:"Love",iconLeft:"thumb-up"},{value:"hate",text:"Hate",iconLeft:"thumb-down"}];return r.jsxs(r.Fragment,{children:[r.jsx(bn,{options:n,selected:e,onSelect:t}),r.jsxs("p",{className:"mar-t-2",children:["You ",e.value," this!"]})]})},oK=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,kb=()=>r.jsxs(T,{code:"options",Component:rK,Source:oK,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property can be used to define the available options.  Each object in the array can contain any of the properties accepted by the ",r.jsx(U4,{})," component, e.g. ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"icon"}),", ",r.jsx("code",{children:"iconLeft"}),", ",r.jsx("code",{children:"iconRight"}),", etc."]}),r.jsxs("p",{children:["When used as shown in this example (where the ",r.jsx("code",{children:"selected"})," value is the option object), each option should have a ",r.jsx("code",{children:"value"})," to uniquely identify it."]})]}),sK=Object.freeze(Object.defineProperty({__proto__:null,default:kb},Symbol.toStringTag,{value:"Module"})),aK=()=>{const[e,t]=V.useState(0),n=[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}];return r.jsx(bn,{options:n,selected:e,onSelect:(o,s)=>t(s)})},lK=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,Nb=()=>r.jsx(T,{code:"selected",Component:aK,Source:lK,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"selected"})," property should be used to indicate which option is selected.  This can be an object that contains the same"," ",r.jsx("code",{children:"value"})," property as the option, or the numerical index of the item in the ",r.jsx("code",{children:"options"})," list.  The default value is"," ",r.jsx("code",{children:"0"}),", selecting the first option."]})}),iK=Object.freeze(Object.defineProperty({__proto__:null,default:Nb},Symbol.toStringTag,{value:"Module"})),cK=()=>{const[e,t]=V.useState(0);return r.jsx(bn,{size:"smaller",selected:e,onSelect:t})},dK=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,Rb=()=>r.jsx(T,{code:"size",Component:cK,Source:dK,expand:!0,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size of the buttons."]})}),uK=Object.freeze(Object.defineProperty({__proto__:null,default:Rb},Symbol.toStringTag,{value:"Module"})),pK=()=>r.jsx(lt,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),hK=`import React from 'react'
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

export default TabsetExample`,mK=()=>r.jsxs(T,{code:"storageKey",Component:pK,Source:hK,expand:!0,undent:2,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",r.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',r.jsx("code",{children:"contact-tabs"}),"."]})]}),fK=Object.freeze(Object.defineProperty({__proto__:null,default:mK},Symbol.toStringTag,{value:"Module"})),xK=()=>{const[e,t]=h0({options:[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}],storageKey:"bru-toggle-love-hate"});return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(t,{}),r.jsx(t,{size:"small",color:"violet"}),r.jsx(t,{size:"smaller",color:"blue"}),"You ",e.text.toLowerCase()," this!"]})},gK=`import { useToggle } from '@/src/index.jsx'

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

export default UseToggleExample`,Ob=()=>r.jsx(T,{code:"useToggle",Component:xK,Source:gK,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"useToggle"})," hook can be called to return an array containing the currently selected ",r.jsx("code",{children:"option"})," and a"," ",r.jsx("code",{children:"Toggle"})," component.  You can render the component multiple times and each instance will share the same state. Additional properties can be passed each time you render it."]})}),vK=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),bK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Toggle"}),r.jsx(yb,{}),r.jsxs(Ae,{tocName:"toggle",children:[r.jsx(oe,{title:"Properties"}),r.jsx(kb,{}),r.jsx(Nb,{}),r.jsx(Eb,{}),r.jsx(wb,{}),r.jsx(Rb,{}),r.jsx(_b,{}),r.jsx(Cb,{}),r.jsx(Tb,{}),r.jsx(oe,{title:"Components"}),r.jsx(Sb,{}),r.jsx(Ob,{})]})]}),jK=Object.freeze(Object.defineProperty({__proto__:null,default:bK},Symbol.toStringTag,{value:"Module"})),yK=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,SK="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",CK="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",_K=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,wK=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,TK=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(Wn,{code:yK,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(go,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(Wn,{code:SK,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(go,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(Wn,{code:CK,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(Wn,{code:_K,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(Wn,{code:wK,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),EK=Object.freeze(Object.defineProperty({__proto__:null,default:TK},Symbol.toStringTag,{value:"Module"})),kK=()=>{const[e,t]=qc({badgers:3,ferrets:2,stoats:1});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Zd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Zd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Zd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{className:"text-right",children:e.badgers+e.ferrets+e.stoats})]})]})})},Zd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:r.jsxs("div",{className:"flex space",children:[e,r.jsx(yn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})}),r.jsx("td",{className:"text-right",children:t})]}),NK=`import React from 'react'
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

export default UseComplexStateExample`,Lb=()=>r.jsxs(T,{title:"Setter Functions",Component:kK,Source:NK,children:[r.jsx("p",{children:"The setter functions can be passed a function which will receive the current value and should return the modified value."}),r.jsxs("p",{children:["In this example we modify the ",r.jsx("code",{children:"Row"})," component to add buttons to increment and decrement the current value."]})]}),RK=Object.freeze(Object.defineProperty({__proto__:null,default:Lb},Symbol.toStringTag,{value:"Module"})),OK=()=>{const[e,t]=qc({badgers:3,ferrets:2,stoats:1},{onChange:n=>({...n,total:n.badgers+n.ferrets+n.stoats})});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Kd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Kd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Kd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{className:"text-right",children:e.total})]})]})})},Kd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:r.jsxs("div",{className:"flex space",children:[e,r.jsx(yn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})}),r.jsx("td",{className:"text-right",children:t})]}),LK=`import React from 'react'
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

export default UseComplexStateExample`,Db=()=>r.jsxs(T,{code:"onChange",Component:OK,Source:LK,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"useComplexState()"})," function can be passed a second argument with additional configuration options.  These can include an ",r.jsx("code",{children:"onChange"})," handler which will be called any time a state variable is modified.  It will be passed a copy of the modified state.  It can make any further changes to the state before returning it."]}),r.jsxs("p",{children:["In this example we provide an ",r.jsx("code",{children:"onChange"})," handler to calculate the total number of animals.  Note that the handler will be called when the state is initially defined.  This ensures that the ",r.jsx("code",{children:"total"})," state value is always defined, even before we click on any buttons to change a number."]})]}),DK=Object.freeze(Object.defineProperty({__proto__:null,default:Db},Symbol.toStringTag,{value:"Module"})),Bb=()=>{const[e,t]=qc({badgers:3,ferrets:2,stoats:1});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Yd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Yd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Yd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{children:e.badgers+e.ferrets+e.stoats})]})]})})},Yd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:e}),r.jsx("td",{children:r.jsx("input",{type:"number",value:t,onChange:o=>n(parseInt(o.target.value))})})]}),BK=Object.freeze(Object.defineProperty({__proto__:null,default:Bb},Symbol.toStringTag,{value:"Module"})),$K=`import { useComplexState } from '@/src/index.jsx'

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


export default UseComplexStateExample`,AK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"useComplexState"}),r.jsxs("p",{className:"large",children:["This hook is a wrapper around ",r.jsx("code",{children:"React.useState"})," which can be used to maintain a complex state object."]}),r.jsxs("p",{children:["Call the"," ",r.jsx("code",{children:"useComplexState()"})," function passing it an object containing one or more key/values pairs.  It will return an array of"," ",r.jsx("code",{children:"[state, setters]"}),", where the ",r.jsx("code",{children:"state"})," contains the current state, starting with the values you supplied, and the"," ",r.jsx("code",{children:"setters"})," is an object containing setter functions for each item in the state."]}),r.jsxs("p",{children:["If you provide an item in the state called ",r.jsx("code",{children:"badgers"}),", for example, then the corresponding setter function will be called"," ",r.jsx("code",{children:"setBadgers"}),"."]}),r.jsx(J,{Component:Bb,code:$K}),r.jsxs(Ae,{tocName:"useComplexState",children:[r.jsx(Lb,{}),r.jsx(Db,{})]})]}),MK=Object.freeze(Object.defineProperty({__proto__:null,default:AK},Symbol.toStringTag,{value:"Module"})),$b=()=>{const e=CO(),[t,n]=V.useState(0);return r.jsxs("div",{className:"flex space",children:[r.jsxs("div",{children:["Count: ",t,r.jsxs("div",{className:"smaller",children:["renderCount: ",e]})]}),r.jsx(yn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})},PK=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),IK=`import { useRenderCount, Buttons } from '@/src/index.jsx'

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


export default UseRenderCountExample`,zK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"useRenderCount"}),r.jsx("p",{className:"large",children:"This simple hook is useful for debugging UI components.  It returns a counter which is incremented every time the component is rendered."}),r.jsx(J,{Component:$b,code:IK})]}),FK=Object.freeze(Object.defineProperty({__proto__:null,default:zK},Symbol.toStringTag,{value:"Module"})),UK=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),HK=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),VK=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(UK,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(HK,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),WK=Object.freeze(Object.defineProperty({__proto__:null,default:VK},Symbol.toStringTag,{value:"Module"})),ZK=()=>{const e={Select:{placeholder:"Pick one"},Button:{color:"green",iconRight:"check"},Spinner:{color:"violet",icon:"star"}};return r.jsxs(H2.Provider,{...e,children:[r.jsx(rn,{options:[{value:10,text:"ten"},{value:11,text:"eleven"}]}),r.jsxs("div",{className:"flex space middle mar-t-2",children:[r.jsx(B,{text:"OK"}),r.jsx(K,{size:"larger"}),r.jsx(B,{text:"Not OK",color:"red",iconRight:"thumb-down"})]})]})},KK=`import { Theme, Select, Button, Spinner } from '@/src/index.jsx'

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

export default BorderClassExamples`,YK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Theming"}),r.jsxs("p",{className:"large",children:["The components can be themed using"," ",r.jsx("a",{href:"https://abw.github.io/react-one-louder/",children:"react-one-louder"}),"."]}),r.jsxs("p",{children:["This allows you to define a theme that provides default properties for the various components in the library. Import the ",r.jsx("code",{children:"Theme"})," component and define a"," ",r.jsx("code",{children:"Theme.Provider"})," around your app or a section of it. Pass it your theme configuration as its properties."]}),r.jsxs("p",{children:["Any components rendered inside the provider context will use the default properties that you have defined.  In the example below we set the default ",r.jsx("code",{children:"placeholder"})," for the ",r.jsx("code",{children:"Select"})," ","component, and default ",r.jsx("code",{children:"color"})," and ",r.jsx("code",{children:"iconRight"})," properties for the ",r.jsx("code",{children:"Button"})," component. These are only default values and can be overridden by providing a component with specific values, as shown for the second button in the example."]}),r.jsx(J,{Component:ZK,code:KK,expand:!0})]}),GK=Object.freeze(Object.defineProperty({__proto__:null,default:YK},Symbol.toStringTag,{value:"Module"})),Gd=({border:e})=>{const t=_o(e);return r.jsx("div",{className:t,children:t})},qK=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(Gd,{}),r.jsx(Gd,{border:!0}),r.jsx(Gd,{border:2})]}),QK=`import { borderClass } from '@/src/index.jsx'

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

export default BorderClassExamples`,Ab=()=>r.jsx(T,{code:"borderClass",Component:qK,Source:QK,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"borderClass"})," utility function can be used to construct a CSS class for adding a border.  If the argument is a true value then it will return the ",r.jsx("code",{children:"border"})," CSS class.  If the value is a number then it will add the corresponding ",r.jsx("code",{children:"bdw-N"})," class to set the border width."]})}),XK=Object.freeze(Object.defineProperty({__proto__:null,default:Ab},Symbol.toStringTag,{value:"Module"})),JK=()=>r.jsxs("div",{children:[r.jsx("div",{children:pe("foo","bar","baz")}),r.jsx("div",{children:pe("foo",null,"bar",void 0,"baz")}),r.jsx("div",{children:pe("foo",{active:!1,example:!0})})]}),eY=`import { classes } from '@/src/index.jsx'

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

export default ClassesExamples`,Mb=()=>r.jsxs(T,{code:"classes",Component:JK,Source:eY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"classes"})," utility function can be used to construct a single CSS class string from various input values."]}),r.jsx("p",{children:"Any null or undefined values will be ignored. If any argument is an object then the keys in the object will be included if the corresponding value is truthy."})]}),tY=Object.freeze(Object.defineProperty({__proto__:null,default:Mb},Symbol.toStringTag,{value:"Module"})),ta=({color:e})=>{const t=$h(e);return r.jsxs("div",{className:`pad-4 border bdc-50 ${t}`,children:["colorClass: ",t]})},nY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(ta,{}),r.jsx(ta,{color:"red"}),r.jsx(ta,{color:"red-50"}),r.jsx(ta,{color:"red-20-80"}),r.jsx(ta,{color:"red-20-80-80-20"})]}),rY=`import { colorClass } from '@/src/index.jsx'

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

export default ColorClassExamples`,Pb=()=>r.jsx(T,{code:"colorClass",Component:nY,Source:rY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"colorClass"})," utility function can be used to construct a CSS class for defining colors.  The format for the argument is a color range name optionally followed by one to four color stop numbers, separated by hyphens.  The first number is the foreground color stop, used to add an ",r.jsx("code",{children:"fgc-N"})," CSS class. The second in the background color stop, adding a ",r.jsx("code",{children:"bgc-N"})," class.  The third and fourth numbers are the foreground and background color stops in dark mode, adding "," ",r.jsx("code",{children:"fgd-N"})," and ",r.jsx("code",{children:"bgd-N"})," classes respectively."]})}),oY=Object.freeze(Object.defineProperty({__proto__:null,default:Pb},Symbol.toStringTag,{value:"Module"})),$o=({margin:e})=>{const t=r3(e);return r.jsx("div",{className:"bgc-50",children:r.jsxs("div",{className:`border bgc-90 ${t}`,children:["marginClass: ",t]})})},sY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx($o,{}),r.jsx($o,{margin:!0}),r.jsx($o,{margin:2}),r.jsx($o,{margin:"h-4"}),r.jsx($o,{margin:"2 4"}),r.jsx($o,{margin:"1 2 3 4"})]}),aY=`import { marginClass } from '@/src/index.jsx'

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

export default MarginClassExamples`,Ib=()=>r.jsx(T,{code:"marginClass",Component:sY,Source:aY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"marginClass"})," utility function can be used to construct a CSS class for adding padding.  It works in the same way as ",r.jsx("code",{children:"paddingClass"}),"."]})}),lY=Object.freeze(Object.defineProperty({__proto__:null,default:Ib},Symbol.toStringTag,{value:"Module"})),Ao=({padding:e})=>{const t=n3(e);return r.jsxs("div",{className:`border ${t}`,children:["paddingClass: ",t]})},iY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ao,{}),r.jsx(Ao,{padding:!0}),r.jsx(Ao,{padding:2}),r.jsx(Ao,{padding:"h-4"}),r.jsx(Ao,{padding:"2 4"}),r.jsx(Ao,{padding:"1 2 3 4"})]}),cY=`import { paddingClass } from '@/src/index.jsx'

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

export default PaddingClassExamples`,zb=()=>r.jsxs(T,{code:"paddingClass",Component:iY,Source:cY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"paddingClass"})," utility function can be used to construct a CSS class for adding padding.  If the value is true then the"," ",r.jsx("code",{children:"pad"})," CSS class will be returned, adding a single unit (0.25rem) of padding to all sides of the element."]}),r.jsxs("p",{children:["If the value contains two whitespace delimited values then they are assumed to be vertical and horizontal padding values and a class of the form ",r.jsx("code",{children:"pad-v-N pad-h-N"})," will be returned."]}),r.jsxs("p",{children:["If the value contains four whitespace delimited values then they are assumed to be padding values for the top, right, bottom and left edges. A CSS class of the form ",r.jsx("code",{children:"pad-t-N pad-r-N pad-b-N pad-l-N"})," will be returned."]}),r.jsxs("p",{children:["In any other case the value will be prepended by ",r.jsx("code",{children:"pad-"}),". A null or undefine value will return nothing."]})]}),dY=Object.freeze(Object.defineProperty({__proto__:null,default:zb},Symbol.toStringTag,{value:"Module"})),pi=({radius:e})=>{const t=Ts(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["radiusClass: ",t]})},uY=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(pi,{}),r.jsx(pi,{radius:1}),r.jsx(pi,{radius:2}),r.jsx(pi,{radius:4})]}),pY=`import { radiusClass } from '@/src/index.jsx'

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

export default RadiusClassExamples`,Fb=()=>r.jsx(T,{code:"radiusClass",Component:uY,Source:pY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radiusClass"})," utility function can be used to construct a CSS class for adding a border radius.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"bdr-N"})," class to set the border radius."]})}),hY=Object.freeze(Object.defineProperty({__proto__:null,default:Fb},Symbol.toStringTag,{value:"Module"})),hi=({shadow:e})=>{const t=ws(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["shadowClass: ",t]})},mY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(hi,{}),r.jsx(hi,{shadow:1}),r.jsx(hi,{shadow:2}),r.jsx(hi,{shadow:4})]}),fY=`import { shadowClass } from '@/src/index.jsx'

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

export default ShadowClassExamples`,Ub=()=>r.jsx(T,{code:"shadowClass",Component:mY,Source:fY,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadowClass"})," utility function can be used to construct a CSS class for adding a box shadow.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"shadow-N"})," class to set the box shadow."]})}),xY=Object.freeze(Object.defineProperty({__proto__:null,default:Ub},Symbol.toStringTag,{value:"Module"})),mi=e=>{const t=R_(e);return r.jsxs("div",{...t,children:["styleProps: ",JSON.stringify(t)]})},gY=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(mi,{}),r.jsx(mi,{size:"large"}),r.jsx(mi,{color:"red-50"}),r.jsx(mi,{className:"my-special-class",color:"red",border:!0,radius:2,shadow:2,padding:"2 4"})]}),vY=`import { styleProps } from '@/src/index.jsx'

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

export default StylePropsExamples`,Hb=()=>r.jsxs(T,{code:"styleProps",Component:gY,Source:vY,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"styleProps"})," utility function can be used to extract any of the above style properties and generate the corresponding CSS class as the ",r.jsx("code",{children:"className"})," property.  Any other properties will be passed through."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"padding"})," and ",r.jsx("code",{children:"margin"})," properties may be abbreviated to ",r.jsx("code",{children:"pad"})," and ",r.jsx("code",{children:"mar"})," respectively."]})]}),bY=Object.freeze(Object.defineProperty({__proto__:null,default:Hb},Symbol.toStringTag,{value:"Module"})),jY=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"CSS Classes"}),r.jsxs(Ae,{tocName:"classes",children:[r.jsx(Mb,{}),r.jsx(Ab,{}),r.jsx(Fb,{}),r.jsx(Ub,{}),r.jsx(Pb,{}),r.jsx(zb,{}),r.jsx(Ib,{}),r.jsx(Hb,{})]})]}),yY=Object.freeze(Object.defineProperty({__proto__:null,default:jY},Symbol.toStringTag,{value:"Module"})),SY=()=>{const e=Ic("unique-key"),[t,n]=V.useState(e.get("form-values")),[o,s]=V.useState(),a=c=>{s(c),zr(3e3).then(()=>s(null))},l=c=>(e.set("form-values",c),a("Form values have been stored in local storage"),{ok:!0}),i=()=>{e.delete("form-values"),n(null),a("Form values have been removed from local storage")};return r.jsxs("div",{children:[r.jsxs(lr,{values:t,onSubmit:l,onReset:i,children:[r.jsx(at,{name:"name",label:"Your name"}),r.jsx(at,{name:"email",label:"Your email address"}),r.jsxs("div",{className:"flex space",children:[r.jsx(d0,{color:"grey outline",text:"Clear",iconRight:"cross"}),r.jsx(Cl,{color:"green",text:"Save",iconRight:"check"})]})]}),o&&r.jsx(Jo,{text:o,className:"mar-t-4"})]})},CY=`import { Storage, Form, Field, Reset, Submit, Success } from '@/src/index.jsx'

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

export default StorageExample`,Vb=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Storage"})," utility can be used to manage local storage to persist UI options or other data."]}),r.jsxs("p",{children:["Call the ",r.jsx("code",{children:"Storage"})," function with a unique key to create a local store.  Then call the ",r.jsx("code",{children:"get"})," method on that object to fetch an item from the store, ",r.jsx("code",{children:"set"})," to set the value for an item or ",r.jsx("code",{children:"delete"})," to delete an item from the store."]}),r.jsx("p",{children:"Store values can be complex data which will be automatically converted to and from JSON."}),r.jsx("p",{children:"Enter some details in the form below and click on the save button. The form values will then be stored in local storage.  Reload the browser page and you should see the values persist."}),r.jsx(J,{Component:SY,code:CY,expand:!0})]}),_Y=Object.freeze(Object.defineProperty({__proto__:null,default:Vb},Symbol.toStringTag,{value:"Module"})),wY=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Storage"}),r.jsx(Vb,{})]}),TY=Object.freeze(Object.defineProperty({__proto__:null,default:wY},Symbol.toStringTag,{value:"Module"})),Wb=({path:e,onClick:t,width:n=512,height:o=512,style:s,className:a="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:a,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),EY=e=>r.jsx(Wb,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Zb=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:s,captionStyle:a,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:s,className:o}),!!t&&r.jsx("div",{className:i,style:a,children:t})]}),kY=e=>{const{setDark:t}=kl();return r.jsx(Zb,{Icon:EY,onClick:t,...e})},NY=e=>r.jsx(Wb,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),RY=e=>{const{setLight:t}=kl();return r.jsx(Zb,{Icon:NY,onClick:t,...e})},OY=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:s}=kl();return n?r.jsx(RY,{onClick:s,...e}):r.jsx(kY,{onClick:o,...t})},Kb=v.createContext(),kl=()=>v.useContext(Kb),fi="dark",qd="light",LY="(prefers-color-scheme: dark)",Qd=()=>!1,DY=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},BY=()=>({matches:Qd,addEventListener:Qd,removeEventListener:Qd}),Yb=typeof window<"u",Xd=Yb&&window.localStorage?window.localStorage:DY(),$Y=Yb&&window.matchMedia?e=>window.matchMedia(e):BY,cp=$Y(LY),AY=()=>cp.matches,MY=e=>e.split(" "),W1=(e,t="")=>`${e} ${t}`,PY=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?Xd.getItem(e):null,[s,a=""]=o?MY(o):[AY(),null],[l,i]=v.useState(s===fi),[c,d]=v.useState(a||t),u=j=>{i(j),e&&Xd.setItem(e,W1(j?fi:qd,c))},p=j=>{d(j),e&&Xd.setItem(e,W1(l?fi:qd,j))},f=j=>u(j.matches);v.useEffect(()=>(cp.addEventListener("change",f),()=>cp.removeEventListener("change",f)),[]);const b={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?fi:qd,variant:c,setVariant:p};return r.jsx(Kb.Provider,{value:b,children:n})},Gb="0.2.6",IY="2024-04-09",Z1="sidebar",zY="no-sidebar",FY=()=>{const{variant:e,setVariant:t}=kl();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(re,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===Z1?zY:Z1)}),r.jsx(jn,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",Gb]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(re,{name:"github",className:"mar-r-4"})}),r.jsx(OY,{})]})]})})},UY=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",Gb,r.jsx("br",{}),IY]})]})}),HY=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var s,a;(a=t.current)==null||a.scrollTo({top:((s=o.ref.current)==null?void 0:s.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),VY=_l.Consumer(HY),WY=({title:e,path:t,items:n,tocs:o})=>{const s=El(),a=t&&s.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:a,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=s.pathname===l.to;return r.jsxs("li",{children:[r.jsx(jn,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(VY,{toc:o[l.tocName]})]},l.to)})})]})},na=_l.Consumer(WY),ZY={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},KY={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/badge",text:"Badge",tocName:"badge"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"},{to:"/components/tabset",text:"Tabset",tocName:"tabset"},{to:"/components/toggle",text:"Toggle",tocName:"toggle"}]},YY={title:"Utilities",path:"/utilities",items:[{to:"/utilities/classes",text:"CSS Classes",tocName:"classes"},{to:"/utilities/storage",text:"Storage",tocName:"storage"}]},GY={title:"Hooks",path:"/hooks",items:[{to:"/hooks/useComplexState",text:"useComplexState",tocName:"useComplexState"},{to:"/hooks/useRenderCount",text:"useRenderCount",tocName:"useRenderCount"}]},qY={title:"Theming",path:"/theming",items:[{to:"/theming",text:"It's One Louder",tocName:"theming"}]},QY=()=>r.jsxs(r.Fragment,{children:[r.jsx(na,{...ZY}),r.jsx(na,{...KY}),r.jsx(na,{...YY}),r.jsx(na,{...GY}),r.jsx(na,{...qY})]});function XY(){const{pathname:e}=As();return v.useEffect(()=>JY(document.getElementById("content")),[e]),null}function JY(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const eG=({contentRef:e})=>{const{theme:t,variant:n}=kl();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(FY,{}),r.jsxs("div",{id:"app",children:[r.jsx(XY,{}),r.jsx("aside",{children:r.jsx(QY,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(OA,{})})]}),r.jsx(UY,{})]})},tG=_l.Consumer(eG),nG=/\/_layout$/,rG=/\/_examples\//,oG=sG(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":zO,"../pages/components/alert/_examples/Error/index.jsx":ZO,"../pages/components/alert/_examples/Info/index.jsx":GO,"../pages/components/alert/_examples/Success/index.jsx":XO,"../pages/components/alert/_examples/Warning/index.jsx":tL,"../pages/components/alert/_examples/border/index.jsx":oL,"../pages/components/alert/_examples/className/index.jsx":lL,"../pages/components/alert/_examples/color/index.jsx":dL,"../pages/components/alert/_examples/dismissable/index.jsx":hL,"../pages/components/alert/_examples/headIcon/index.jsx":xL,"../pages/components/alert/_examples/headline/index.jsx":bL,"../pages/components/alert/_examples/icon/index.jsx":SL,"../pages/components/alert/_examples/onDismiss/index.jsx":wL,"../pages/components/alert/_examples/radius/index.jsx":kL,"../pages/components/alert/_examples/revealable/index.jsx":OL,"../pages/components/alert/_examples/revealed/index.jsx":BL,"../pages/components/alert/_examples/shadow/index.jsx":ML,"../pages/components/alert/_examples/size/index.jsx":zL,"../pages/components/alert/_examples/stripe/index.jsx":HL,"../pages/components/alert/_examples/text/index.jsx":ZL,"../pages/components/alert/_examples/title/index.jsx":GL,"../pages/components/alert/_examples/type/index.jsx":XL,"../pages/components/alert/index.jsx":tD,"../pages/components/badge/_examples/Badge/index.jsx":oD,"../pages/components/badge/_examples/Content/index.jsx":lD,"../pages/components/badge/_examples/border/index.jsx":dD,"../pages/components/badge/_examples/className/index.jsx":hD,"../pages/components/badge/_examples/color/index.jsx":xD,"../pages/components/badge/_examples/icon/index.jsx":bD,"../pages/components/badge/_examples/iconLeft/index.jsx":SD,"../pages/components/badge/_examples/iconRight/index.jsx":wD,"../pages/components/badge/_examples/radius/index.jsx":kD,"../pages/components/badge/_examples/shadow/index.jsx":OD,"../pages/components/badge/_examples/size/index.jsx":BD,"../pages/components/badge/_examples/tag/index.jsx":MD,"../pages/components/badge/_examples/text/index.jsx":zD,"../pages/components/badge/_examples/tooltip/index.jsx":HD,"../pages/components/badge/index.jsx":WD,"../pages/components/button/_examples/Button/index.jsx":YD,"../pages/components/button/_examples/Content/index.jsx":QD,"../pages/components/button/_examples/bare/index.jsx":eB,"../pages/components/button/_examples/border/index.jsx":rB,"../pages/components/button/_examples/bright/index.jsx":aB,"../pages/components/button/_examples/className/index.jsx":cB,"../pages/components/button/_examples/color/index.jsx":pB,"../pages/components/button/_examples/dark/index.jsx":fB,"../pages/components/button/_examples/disabled/index.jsx":vB,"../pages/components/button/_examples/icon/index.jsx":yB,"../pages/components/button/_examples/iconLeft/index.jsx":_B,"../pages/components/button/_examples/iconRight/index.jsx":EB,"../pages/components/button/_examples/label/index.jsx":RB,"../pages/components/button/_examples/onClick/index.jsx":DB,"../pages/components/button/_examples/outline/index.jsx":AB,"../pages/components/button/_examples/radius/index.jsx":IB,"../pages/components/button/_examples/shaded/index.jsx":UB,"../pages/components/button/_examples/shadow/index.jsx":WB,"../pages/components/button/_examples/size/index.jsx":YB,"../pages/components/button/_examples/text/index.jsx":QB,"../pages/components/button/_examples/tooltip/index.jsx":e$,"../pages/components/button/_examples/type/index.jsx":r$,"../pages/components/button/index.jsx":s$,"../pages/components/buttons/_examples/Button/index.jsx":c$,"../pages/components/buttons/_examples/Buttons/index.jsx":p$,"../pages/components/buttons/_examples/buttonClass/index.jsx":f$,"../pages/components/buttons/_examples/buttonsProp/index.jsx":v$,"../pages/components/buttons/_examples/className/index.jsx":y$,"../pages/components/buttons/_examples/outline/index.jsx":nM,"../pages/components/buttons/index.jsx":oM,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":lM,"../pages/components/checkbox/_examples/Overview/index.jsx":dM,"../pages/components/checkbox/_examples/border/index.jsx":hM,"../pages/components/checkbox/_examples/checked/index.jsx":xM,"../pages/components/checkbox/_examples/checkedText/index.jsx":bM,"../pages/components/checkbox/_examples/className/index.jsx":SM,"../pages/components/checkbox/_examples/disabled/index.jsx":wM,"../pages/components/checkbox/_examples/onChange/index.jsx":kM,"../pages/components/checkbox/_examples/text/index.jsx":OM,"../pages/components/checkbox/index.jsx":DM,"../pages/components/confirm/_examples/Overview/index.jsx":AM,"../pages/components/confirm/_examples/cancel/index.jsx":IM,"../pages/components/confirm/_examples/cancelProps/index.jsx":UM,"../pages/components/confirm/_examples/className/index.jsx":WM,"../pages/components/confirm/_examples/color/index.jsx":YM,"../pages/components/confirm/_examples/confirm/index.jsx":QM,"../pages/components/confirm/_examples/confirmProps/index.jsx":eP,"../pages/components/confirm/_examples/iconRight/index.jsx":rP,"../pages/components/confirm/_examples/onClick/index.jsx":aP,"../pages/components/confirm/_examples/text/index.jsx":cP,"../pages/components/confirm/index.jsx":uP,"../pages/components/datatable/_examples/Datatable/index.jsx":mP,"../pages/components/datatable/_examples/color/index.jsx":gP,"../pages/components/datatable/_examples/columns/className/index.jsx":yP,"../pages/components/datatable/_examples/columns/display/index.jsx":_P,"../pages/components/datatable/_examples/columns/index.jsx":$P,"../pages/components/datatable/_examples/columns/label/index.jsx":PP,"../pages/components/datatable/_examples/columns/type/index.jsx":FP,"../pages/components/datatable/_examples/onRowClick/index.jsx":VP,"../pages/components/datatable/_examples/pager/index.jsx":KP,"../pages/components/datatable/_examples/rows/index.jsx":GP,"../pages/components/datatable/_examples/storageKey/index.jsx":XP,"../pages/components/datatable/index.jsx":eI,"../pages/components/details/_examples/Details/index.jsx":rI,"../pages/components/details/_examples/border/index.jsx":aI,"../pages/components/details/_examples/color/index.jsx":cI,"../pages/components/details/_examples/content/index.jsx":pI,"../pages/components/details/_examples/lined/index.jsx":fI,"../pages/components/details/_examples/open/index.jsx":vI,"../pages/components/details/_examples/radius/index.jsx":yI,"../pages/components/details/_examples/shaded/index.jsx":_I,"../pages/components/details/_examples/shadow/index.jsx":EI,"../pages/components/details/_examples/summary/index.jsx":RI,"../pages/components/details/index.jsx":LI,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":$I,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":PI,"../pages/components/dropdown-menu/_examples/options/index.jsx":GI,"../pages/components/dropdown-menu/index.jsx":QI,"../pages/components/dropdown/_examples/Dropdown/index.jsx":ez,"../pages/components/dropdown/_examples/content/index.jsx":rz,"../pages/components/dropdown/_examples/iconLeft/index.jsx":az,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":cz,"../pages/components/dropdown/_examples/iconRight/index.jsx":pz,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":fz,"../pages/components/dropdown/_examples/openOnHover/index.jsx":vz,"../pages/components/dropdown/_examples/right/index.jsx":yz,"../pages/components/dropdown/_examples/text/index.jsx":_z,"../pages/components/dropdown/_examples/wide/index.jsx":Ez,"../pages/components/dropdown/index.jsx":Nz,"../pages/components/form/_examples/search/index.jsx":Pz,"../pages/components/form/_examples/submitting/custom.jsx":zz,"../pages/components/form/_examples/submitting/defaults.jsx":Uz,"../pages/components/form/_examples/submitting/index.jsx":Wz,"../pages/components/form/_examples/uiselect/index.jsx":Xz,"../pages/components/form/index.jsx":aF,"../pages/components/icon/_examples/Icon/index.jsx":mF,"../pages/components/icon/_examples/IconLibrary/index.jsx":fF,"../pages/components/icon/_examples/className/index.jsx":vF,"../pages/components/icon/_examples/color/index.jsx":yF,"../pages/components/icon/_examples/name/index.jsx":_F,"../pages/components/icon/_examples/path/index.jsx":EF,"../pages/components/icon/_examples/size/index.jsx":RF,"../pages/components/icon/index.jsx":LF,"../pages/components/modal/_examples/Modal/index.jsx":$F,"../pages/components/modal/_examples/ModalState/index.jsx":PF,"../pages/components/modal/_examples/className/index.jsx":FF,"../pages/components/modal/_examples/close/index.jsx":VF,"../pages/components/modal/_examples/closeIcon/index.jsx":KF,"../pages/components/modal/_examples/footer/index.jsx":qF,"../pages/components/modal/_examples/header/index.jsx":JF,"../pages/components/modal/_examples/text/index.jsx":nU,"../pages/components/modal/_examples/title/index.jsx":sU,"../pages/components/modal/index.jsx":lU,"../pages/components/overlay/_examples/Overlay/index.jsx":dU,"../pages/components/overlay/_examples/OverlayState/index.jsx":hU,"../pages/components/overlay/_examples/className/index.jsx":gU,"../pages/components/overlay/_examples/custom/index.jsx":jU,"../pages/components/overlay/_examples/fixed/index.jsx":CU,"../pages/components/overlay/_examples/theme/index.jsx":kU,"../pages/components/overlay/index.jsx":RU,"../pages/components/pager/_examples/Context/index.jsx":$U,"../pages/components/pager/_examples/Pager/index.jsx":PU,"../pages/components/pager/_examples/className/index.jsx":FU,"../pages/components/pager/_examples/color/index.jsx":VU,"../pages/components/pager/_examples/icons/index.jsx":KU,"../pages/components/pager/_examples/nextIcon/index.jsx":QU,"../pages/components/pager/_examples/showFirstLast/index.jsx":eH,"../pages/components/pager/_examples/size/index.jsx":rH,"../pages/components/pager/index.jsx":sH,"../pages/components/radio/_examples/Overview/index.jsx":iH,"../pages/components/radio/_examples/border/index.jsx":uH,"../pages/components/radio/_examples/className/index.jsx":mH,"../pages/components/radio/_examples/disabled/index.jsx":gH,"../pages/components/radio/_examples/inline/index.jsx":jH,"../pages/components/radio/_examples/name/index.jsx":CH,"../pages/components/radio/_examples/onChange/index.jsx":TH,"../pages/components/radio/_examples/options/index.jsx":NH,"../pages/components/radio/_examples/value/index.jsx":LH,"../pages/components/radio/index.jsx":BH,"../pages/components/search/_examples/Search/index.jsx":PH,"../pages/components/search/_examples/clear/index.jsx":UH,"../pages/components/search/_examples/displayResult/index.jsx":ZH,"../pages/components/search/_examples/displayValue/index.jsx":qH,"../pages/components/search/_examples/onSearch/index.jsx":eV,"../pages/components/search/_examples/onSelect/index.jsx":oV,"../pages/components/search/_examples/reset/index.jsx":iV,"../pages/components/search/index.jsx":dV,"../pages/components/select/_examples/Select/index.jsx":mV,"../pages/components/select/_examples/displayOption/index.jsx":vV,"../pages/components/select/_examples/displayValue/index.jsx":SV,"../pages/components/select/_examples/options/index.jsx":TV,"../pages/components/select/_examples/search/index.jsx":DV,"../pages/components/select/_examples/searchOptions/index.jsx":IV,"../pages/components/select/_examples/validOption/index.jsx":HV,"../pages/components/select/_examples/value/index.jsx":qV,"../pages/components/select/index.jsx":XV,"../pages/components/sortable/_examples/Horizontal/index.jsx":tW,"../pages/components/sortable/_examples/Sortable/index.jsx":oW,"../pages/components/sortable/_examples/Vertical/index.jsx":lW,"../pages/components/sortable/index.jsx":cW,"../pages/components/spinner/_examples/Spinner/index.jsx":pW,"../pages/components/spinner/_examples/bgColor/index.jsx":fW,"../pages/components/spinner/_examples/bgFill/index.jsx":vW,"../pages/components/spinner/_examples/bgFillStop/index.jsx":yW,"../pages/components/spinner/_examples/bgIcon/index.jsx":_W,"../pages/components/spinner/_examples/bgStroke/index.jsx":EW,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":RW,"../pages/components/spinner/_examples/color/index.jsx":DW,"../pages/components/spinner/_examples/fill/index.jsx":AW,"../pages/components/spinner/_examples/fillStop/index.jsx":IW,"../pages/components/spinner/_examples/icon/index.jsx":UW,"../pages/components/spinner/_examples/reverse/index.jsx":WW,"../pages/components/spinner/_examples/shrink/index.jsx":YW,"../pages/components/spinner/_examples/size/index.jsx":QW,"../pages/components/spinner/_examples/stroke/index.jsx":eZ,"../pages/components/spinner/_examples/strokeStop/index.jsx":rZ,"../pages/components/spinner/index.jsx":sZ,"../pages/components/tabset/_examples/Tabset/index.jsx":iZ,"../pages/components/tabset/_examples/center/index.jsx":uZ,"../pages/components/tabset/_examples/color/index.jsx":mZ,"../pages/components/tabset/_examples/lined/index.jsx":gZ,"../pages/components/tabset/_examples/right/index.jsx":jZ,"../pages/components/tabset/_examples/size/index.jsx":CZ,"../pages/components/tabset/_examples/solid/index.jsx":TZ,"../pages/components/tabset/_examples/storageKey/index.jsx":NZ,"../pages/components/tabset/_examples/tabs/index.jsx":DZ,"../pages/components/tabset/index.jsx":$Z,"../pages/components/toggle/_examples/Toggle/index.jsx":PZ,"../pages/components/toggle/_examples/ToggleState/index.jsx":FZ,"../pages/components/toggle/_examples/activeProps/index.jsx":VZ,"../pages/components/toggle/_examples/color/index.jsx":KZ,"../pages/components/toggle/_examples/findSelectedIndex/index.jsx":qZ,"../pages/components/toggle/_examples/inactiveProps/index.jsx":JZ,"../pages/components/toggle/_examples/onSelect/index.jsx":nK,"../pages/components/toggle/_examples/options/index.jsx":sK,"../pages/components/toggle/_examples/selected/index.jsx":iK,"../pages/components/toggle/_examples/size/index.jsx":uK,"../pages/components/toggle/_examples/storageKey/index.jsx":fK,"../pages/components/toggle/_examples/useToggle/index.jsx":vK,"../pages/components/toggle/index.jsx":jK,"../pages/getting-started/installation.jsx":EK,"../pages/hooks/useComplexState/_examples/functions/index.jsx":RK,"../pages/hooks/useComplexState/_examples/onChange/index.jsx":DK,"../pages/hooks/useComplexState/_examples/useComplexState.jsx":BK,"../pages/hooks/useComplexState/index.jsx":MK,"../pages/hooks/useRenderCount/_examples/useRenderCount.jsx":PK,"../pages/hooks/useRenderCount/index.jsx":FK,"../pages/index.jsx":WK,"../pages/theming/index.jsx":GK,"../pages/utilities/classes/_examples/borderClass/index.jsx":XK,"../pages/utilities/classes/_examples/classes/index.jsx":tY,"../pages/utilities/classes/_examples/colorClass/index.jsx":oY,"../pages/utilities/classes/_examples/marginClass/index.jsx":lY,"../pages/utilities/classes/_examples/paddingClass/index.jsx":dY,"../pages/utilities/classes/_examples/radiusClass/index.jsx":hY,"../pages/utilities/classes/_examples/shadowClass/index.jsx":xY,"../pages/utilities/classes/_examples/styleProps/index.jsx":bY,"../pages/utilities/classes/index.jsx":yY,"../pages/utilities/storage/_examples/Storage/index.jsx":_Y,"../pages/utilities/storage/index.jsx":TY}));function sG(e){const n=Object.entries(e).map(aG).filter(s=>!s.path.match(rG)).reduce((s,a)=>(s[a.path]=a,s),{}),o=Object.keys(n).filter(s=>s.match(nG)).sort((s,a)=>a.length-s.length);for(let s of o){const a=n[s];delete n[s];const l=s.replace(/_layout$/,""),i=l.length;a.path=l,a.children=[];const c=n[l];c&&(delete c.path,c.index=!0,a.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",a.children.push(p)}n[l]=a}return Object.values(n)}function aG([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const lG=PA([{path:"/",element:r.jsx(tG,{}),children:oG}],{basename:"/badger-react-ui"});Jd.createRoot(document.getElementById("root")).render(r.jsx(V.StrictMode,{children:r.jsx(PY,{storageKey:"theme",children:r.jsx(_l.Provider,{children:r.jsx(ZA,{router:lG})})})}));
