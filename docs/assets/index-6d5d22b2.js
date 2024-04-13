var W5=Object.defineProperty;var K5=(e,t,o)=>t in e?W5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var be=(e,t,o)=>(K5(e,typeof t!="symbol"?t+"":t,o),o);function a1(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l1={exports:{}},yc={},i1={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),G5=Symbol.for("react.portal"),Y5=Symbol.for("react.fragment"),Z5=Symbol.for("react.strict_mode"),q5=Symbol.for("react.profiler"),Q5=Symbol.for("react.provider"),X5=Symbol.for("react.context"),J5=Symbol.for("react.forward_ref"),e6=Symbol.for("react.suspense"),t6=Symbol.for("react.memo"),n6=Symbol.for("react.lazy"),xm=Symbol.iterator;function o6(e){return e===null||typeof e!="object"?null:(e=xm&&e[xm]||e["@@iterator"],typeof e=="function"?e:null)}var c1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d1=Object.assign,u1={};function Rs(e,t,o){this.props=e,this.context=t,this.refs=u1,this.updater=o||c1}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function p1(){}p1.prototype=Rs.prototype;function vp(e,t,o){this.props=e,this.context=t,this.refs=u1,this.updater=o||c1}var jp=vp.prototype=new p1;jp.constructor=vp;d1(jp,Rs.prototype);jp.isPureReactComponent=!0;var gm=Array.isArray,h1=Object.prototype.hasOwnProperty,yp={current:null},m1={key:!0,ref:!0,__self:!0,__source:!0};function f1(e,t,o){var r,s={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)h1.call(t,r)&&!m1.hasOwnProperty(r)&&(s[r]=t[r]);var i=arguments.length-2;if(i===1)s.children=o;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:il,type:e,key:a,ref:l,props:s,_owner:yp.current}}function r6(e,t){return{$$typeof:il,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sp(e){return typeof e=="object"&&e!==null&&e.$$typeof===il}function s6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var bm=/\/+/g;function ud(e,t){return typeof e=="object"&&e!==null&&e.key!=null?s6(""+e.key):t.toString(36)}function Si(e,t,o,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case il:case G5:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+ud(l,0):r,gm(s)?(o="",e!=null&&(o=e.replace(bm,"$&/")+"/"),Si(s,t,o,"",function(d){return d})):s!=null&&(Sp(s)&&(s=r6(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(bm,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",gm(e))for(var i=0;i<e.length;i++){a=e[i];var c=r+ud(a,i);l+=Si(a,t,o,c,s)}else if(c=o6(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=r+ud(a,i++),l+=Si(a,t,o,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ul(e,t,o){if(e==null)return e;var r=[],s=0;return Si(e,r,"","",function(a){return t.call(o,a,s++)}),r}function a6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var St={current:null},Ci={transition:null},l6={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:yp};me.Children={map:Ul,forEach:function(e,t,o){Ul(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return Ul(e,function(){t++}),t},toArray:function(e){return Ul(e,function(t){return t})||[]},only:function(e){if(!Sp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=Rs;me.Fragment=Y5;me.Profiler=q5;me.PureComponent=vp;me.StrictMode=Z5;me.Suspense=e6;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l6;me.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=d1({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=yp.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)h1.call(t,c)&&!m1.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=o;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];r.children=i}return{$$typeof:il,type:e.type,key:s,ref:a,props:r,_owner:l}};me.createContext=function(e){return e={$$typeof:X5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q5,_context:e},e.Consumer=e};me.createElement=f1;me.createFactory=function(e){var t=f1.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:J5,render:e}};me.isValidElement=Sp;me.lazy=function(e){return{$$typeof:n6,_payload:{_status:-1,_result:e},_init:a6}};me.memo=function(e,t){return{$$typeof:t6,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return St.current.useCallback(e,t)};me.useContext=function(e){return St.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return St.current.useDeferredValue(e)};me.useEffect=function(e,t){return St.current.useEffect(e,t)};me.useId=function(){return St.current.useId()};me.useImperativeHandle=function(e,t,o){return St.current.useImperativeHandle(e,t,o)};me.useInsertionEffect=function(e,t){return St.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return St.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return St.current.useMemo(e,t)};me.useReducer=function(e,t,o){return St.current.useReducer(e,t,o)};me.useRef=function(e){return St.current.useRef(e)};me.useState=function(e){return St.current.useState(e)};me.useSyncExternalStore=function(e,t,o){return St.current.useSyncExternalStore(e,t,o)};me.useTransition=function(){return St.current.useTransition()};me.version="18.2.0";i1.exports=me;var b=i1.exports;const H=lo(b),i6=a1({__proto__:null,default:H},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c6=b,d6=Symbol.for("react.element"),u6=Symbol.for("react.fragment"),p6=Object.prototype.hasOwnProperty,h6=c6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m6={key:!0,ref:!0,__self:!0,__source:!0};function x1(e,t,o){var r,s={},a=null,l=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)p6.call(t,r)&&!m6.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:d6,type:e,key:a,ref:l,props:s,_owner:h6.current}}yc.Fragment=u6;yc.jsx=x1;yc.jsxs=x1;l1.exports=yc;var n=l1.exports,au={},g1={exports:{}},Gt={},b1={exports:{}},v1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,P){var I=$.length;$.push(P);e:for(;0<I;){var W=I-1>>>1,Y=$[W];if(0<s(Y,P))$[W]=P,$[I]=Y,I=W;else break e}}function o($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var P=$[0],I=$.pop();if(I!==P){$[0]=I;e:for(var W=0,Y=$.length,Te=Y>>>1;W<Te;){var de=2*(W+1)-1,Se=$[de],ce=de+1,Le=$[ce];if(0>s(Se,I))ce<Y&&0>s(Le,Se)?($[W]=Le,$[ce]=I,W=ce):($[W]=Se,$[de]=I,W=de);else if(ce<Y&&0>s(Le,I))$[W]=Le,$[ce]=I,W=ce;else break e}}return P}function s($,P){var I=$.sortIndex-P.sortIndex;return I!==0?I:$.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,f=3,v=!1,y=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m($){for(var P=o(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=$)r(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=o(d)}}function j($){if(S=!1,m($),!y)if(o(c)!==null)y=!0,je(C);else{var P=o(d);P!==null&&ee(j,P.startTime-$)}}function C($,P){y=!1,S&&(S=!1,g(k),k=-1),v=!0;var I=f;try{for(m(P),p=o(c);p!==null&&(!(p.expirationTime>P)||$&&!B());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var Y=W(p.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===o(c)&&r(c),m(P)}else r(c);p=o(c)}if(p!==null)var Te=!0;else{var de=o(d);de!==null&&ee(j,de.startTime-P),Te=!1}return Te}finally{p=null,f=I,v=!1}}var x=!1,_=null,k=-1,R=5,O=-1;function B(){return!(e.unstable_now()-O<R)}function U(){if(_!==null){var $=e.unstable_now();O=$;var P=!0;try{P=_(!0,$)}finally{P?K():(x=!1,_=null)}}else x=!1}var K;if(typeof h=="function")K=function(){h(U)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,we=ne.port2;ne.port1.onmessage=U,K=function(){we.postMessage(null)}}else K=function(){T(U,0)};function je($){_=$,x||(x=!0,K())}function ee($,P){k=T(function(){$(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,je(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return o(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var I=f;f=P;try{return $()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,P){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var I=f;f=$;try{return P()}finally{f=I}},e.unstable_scheduleCallback=function($,P,I){var W=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,$){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=I+Y,$={id:u++,callback:P,priorityLevel:$,startTime:I,expirationTime:Y,sortIndex:-1},I>W?($.sortIndex=I,t(d,$),o(c)===null&&$===o(d)&&(S?(g(k),k=-1):S=!0,ee(j,I-W))):($.sortIndex=Y,t(c,$),y||v||(y=!0,je(C))),$},e.unstable_shouldYield=B,e.unstable_wrapCallback=function($){var P=f;return function(){var I=f;f=P;try{return $.apply(this,arguments)}finally{f=I}}}})(v1);b1.exports=v1;var f6=b1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=b,Kt=f6;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y1=new Set,Aa={};function _r(e,t){vs(e,t),vs(e+"Capture",t)}function vs(e,t){for(Aa[e]=t,e=0;e<t.length;e++)y1.add(t[e])}var to=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,x6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vm={},jm={};function g6(e){return lu.call(jm,e)?!0:lu.call(vm,e)?!1:x6.test(e)?jm[e]=!0:(vm[e]=!0,!1)}function b6(e,t,o,r){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function v6(e,t,o,r){if(t===null||typeof t>"u"||b6(e,t,o,r))return!0;if(r)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ct(e,t,o,r,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){dt[e]=new Ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];dt[t]=new Ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){dt[e]=new Ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){dt[e]=new Ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){dt[e]=new Ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){dt[e]=new Ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){dt[e]=new Ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){dt[e]=new Ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){dt[e]=new Ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cp=/[\-:]([a-z])/g;function _p(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cp,_p);dt[t]=new Ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cp,_p);dt[t]=new Ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cp,_p);dt[t]=new Ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){dt[e]=new Ct(e,1,!1,e.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){dt[e]=new Ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function wp(e,t,o,r){var s=dt.hasOwnProperty(t)?dt[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v6(t,o,s,r)&&(o=null),r||s===null?g6(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):s.mustUseProperty?e[s.propertyName]=o===null?s.type===3?!1:"":o:(t=s.attributeName,r=s.attributeNamespace,o===null?e.removeAttribute(t):(s=s.type,o=s===3||s===4&&o===!0?"":""+o,r?e.setAttributeNS(r,t,o):e.setAttribute(t,o))))}var io=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vl=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),S1=Symbol.for("react.provider"),C1=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),jo=Symbol.for("react.lazy"),_1=Symbol.for("react.offscreen"),ym=Symbol.iterator;function Gs(e){return e===null||typeof e!="object"?null:(e=ym&&e[ym]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,pd;function da(e){if(pd===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);pd=t&&t[1]||""}return`
`+pd+e}var hd=!1;function md(e,t){if(!e||hd)return"";hd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=r.stack.split(`
`),l=s.length-1,i=a.length-1;1<=l&&0<=i&&s[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==a[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{hd=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?da(e):""}function j6(e){switch(e.tag){case 5:return da(e.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return e=md(e.type,!1),e;case 11:return e=md(e.type.render,!1),e;case 1:return e=md(e.type,!0),e;default:return""}}function uu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yr:return"Fragment";case Gr:return"Portal";case iu:return"Profiler";case Tp:return"StrictMode";case cu:return"Suspense";case du:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C1:return(e.displayName||"Context")+".Consumer";case S1:return(e._context.displayName||"Context")+".Provider";case Ep:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kp:return t=e.displayName||null,t!==null?t:uu(e.type)||"Memo";case jo:t=e._payload,e=e._init;try{return uu(e(t))}catch{}}return null}function y6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(t);case 8:return t===Tp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $o(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function w1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S6(e){var t=w1(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,a=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wl(e){e._valueTracker||(e._valueTracker=S6(e))}function T1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),r="";return e&&(r=w1(e)?e.checked?"true":"false":e.value),e=r,e!==o?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pu(e,t){var o=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Sm(e,t){var o=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;o=$o(t.value!=null?t.value:o),e._wrapperState={initialChecked:r,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function E1(e,t){t=t.checked,t!=null&&wp(e,"checked",t,!1)}function hu(e,t){E1(e,t);var o=$o(t.value),r=t.type;if(o!=null)r==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mu(e,t.type,o):t.hasOwnProperty("defaultValue")&&mu(e,t.type,$o(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cm(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function mu(e,t,o){(t!=="number"||Ii(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var ua=Array.isArray;function us(e,t,o,r){if(e=e.options,t){t={};for(var s=0;s<o.length;s++)t["$"+o[s]]=!0;for(o=0;o<e.length;o++)s=t.hasOwnProperty("$"+e[o].value),e[o].selected!==s&&(e[o].selected=s),s&&r&&(e[o].defaultSelected=!0)}else{for(o=""+$o(o),t=null,s=0;s<e.length;s++){if(e[s].value===o){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function fu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _m(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(A(92));if(ua(o)){if(1<o.length)throw Error(A(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:$o(o)}}function k1(e,t){var o=$o(t.value),r=$o(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),r!=null&&(e.defaultValue=""+r)}function wm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function R1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?R1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kl,N1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,o,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ma(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C6=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(e){C6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ja[t]=ja[e]})});function O1(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||ja.hasOwnProperty(e)&&ja[e]?(""+t).trim():t+"px"}function D1(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var r=o.indexOf("--")===0,s=O1(o,t[o],r);o==="float"&&(o="cssFloat"),r?e.setProperty(o,s):e[o]=s}}var _6=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(e,t){if(t){if(_6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function bu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vu=null;function Rp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ju=null,ps=null,hs=null;function Tm(e){if(e=ul(e)){if(typeof ju!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Tc(t),ju(e.stateNode,e.type,t))}}function L1(e){ps?hs?hs.push(e):hs=[e]:ps=e}function B1(){if(ps){var e=ps,t=hs;if(hs=ps=null,Tm(e),t)for(e=0;e<t.length;e++)Tm(t[e])}}function $1(e,t){return e(t)}function A1(){}var fd=!1;function M1(e,t,o){if(fd)return e(t,o);fd=!0;try{return $1(e,t,o)}finally{fd=!1,(ps!==null||hs!==null)&&(A1(),B1())}}function Pa(e,t){var o=e.stateNode;if(o===null)return null;var r=Tc(o);if(r===null)return null;o=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(A(231,t,typeof o));return o}var yu=!1;if(to)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{yu=!1}function w6(e,t,o,r,s,a,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(o,d)}catch(u){this.onError(u)}}var ya=!1,zi=null,Fi=!1,Su=null,T6={onError:function(e){ya=!0,zi=e}};function E6(e,t,o,r,s,a,l,i,c){ya=!1,zi=null,w6.apply(T6,arguments)}function k6(e,t,o,r,s,a,l,i,c){if(E6.apply(this,arguments),ya){if(ya){var d=zi;ya=!1,zi=null}else throw Error(A(198));Fi||(Fi=!0,Su=d)}}function wr(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function P1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Em(e){if(wr(e)!==e)throw Error(A(188))}function R6(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var o=e,r=t;;){var s=o.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){o=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===o)return Em(s),e;if(a===r)return Em(s),t;a=a.sibling}throw Error(A(188))}if(o.return!==r.return)o=s,r=a;else{for(var l=!1,i=s.child;i;){if(i===o){l=!0,o=s,r=a;break}if(i===r){l=!0,r=s,o=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===o){l=!0,o=a,r=s;break}if(i===r){l=!0,r=a,o=s;break}i=i.sibling}if(!l)throw Error(A(189))}}if(o.alternate!==r)throw Error(A(190))}if(o.tag!==3)throw Error(A(188));return o.stateNode.current===o?e:t}function I1(e){return e=R6(e),e!==null?z1(e):null}function z1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=z1(e);if(t!==null)return t;e=e.sibling}return null}var F1=Kt.unstable_scheduleCallback,km=Kt.unstable_cancelCallback,N6=Kt.unstable_shouldYield,O6=Kt.unstable_requestPaint,Ge=Kt.unstable_now,D6=Kt.unstable_getCurrentPriorityLevel,Np=Kt.unstable_ImmediatePriority,H1=Kt.unstable_UserBlockingPriority,Hi=Kt.unstable_NormalPriority,L6=Kt.unstable_LowPriority,U1=Kt.unstable_IdlePriority,Sc=null,Pn=null;function B6(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Sc,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:M6,$6=Math.log,A6=Math.LN2;function M6(e){return e>>>=0,e===0?32:31-($6(e)/A6|0)|0}var Gl=64,Yl=4194304;function pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,t){var o=e.pendingLanes;if(o===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,l=o&268435455;if(l!==0){var i=l&~s;i!==0?r=pa(i):(a&=l,a!==0&&(r=pa(a)))}else l=o&~s,l!==0?r=pa(l):a!==0&&(r=pa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)o=31-jn(t),s=1<<o,r|=e[o],t&=~s;return r}function P6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I6(e,t){for(var o=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-jn(a),i=1<<l,c=s[l];c===-1?(!(i&o)||i&r)&&(s[l]=P6(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function Cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function V1(){var e=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),e}function xd(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function cl(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jn(t),e[t]=o}function z6(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<o;){var s=31-jn(o),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,o&=~a}}function Op(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var r=31-jn(o),s=1<<r;s&t|e[r]&t&&(e[r]|=t),o&=~s}}var _e=0;function W1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var K1,Dp,G1,Y1,Z1,_u=!1,Zl=[],Eo=null,ko=null,Ro=null,Ia=new Map,za=new Map,Co=[],F6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(e,t){switch(e){case"focusin":case"focusout":Eo=null;break;case"dragenter":case"dragleave":ko=null;break;case"mouseover":case"mouseout":Ro=null;break;case"pointerover":case"pointerout":Ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(t.pointerId)}}function Zs(e,t,o,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:o,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ul(t),t!==null&&Dp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function H6(e,t,o,r,s){switch(t){case"focusin":return Eo=Zs(Eo,e,t,o,r,s),!0;case"dragenter":return ko=Zs(ko,e,t,o,r,s),!0;case"mouseover":return Ro=Zs(Ro,e,t,o,r,s),!0;case"pointerover":var a=s.pointerId;return Ia.set(a,Zs(Ia.get(a)||null,e,t,o,r,s)),!0;case"gotpointercapture":return a=s.pointerId,za.set(a,Zs(za.get(a)||null,e,t,o,r,s)),!0}return!1}function q1(e){var t=ir(e.target);if(t!==null){var o=wr(t);if(o!==null){if(t=o.tag,t===13){if(t=P1(o),t!==null){e.blockedOn=t,Z1(e.priority,function(){G1(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=wu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);vu=r,o.target.dispatchEvent(r),vu=null}else return t=ul(o),t!==null&&Dp(t),e.blockedOn=o,!1;t.shift()}return!0}function Nm(e,t,o){_i(e)&&o.delete(t)}function U6(){_u=!1,Eo!==null&&_i(Eo)&&(Eo=null),ko!==null&&_i(ko)&&(ko=null),Ro!==null&&_i(Ro)&&(Ro=null),Ia.forEach(Nm),za.forEach(Nm)}function qs(e,t){e.blockedOn===t&&(e.blockedOn=null,_u||(_u=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,U6)))}function Fa(e){function t(s){return qs(s,e)}if(0<Zl.length){qs(Zl[0],e);for(var o=1;o<Zl.length;o++){var r=Zl[o];r.blockedOn===e&&(r.blockedOn=null)}}for(Eo!==null&&qs(Eo,e),ko!==null&&qs(ko,e),Ro!==null&&qs(Ro,e),Ia.forEach(t),za.forEach(t),o=0;o<Co.length;o++)r=Co[o],r.blockedOn===e&&(r.blockedOn=null);for(;0<Co.length&&(o=Co[0],o.blockedOn===null);)q1(o),o.blockedOn===null&&Co.shift()}var ms=io.ReactCurrentBatchConfig,Vi=!0;function V6(e,t,o,r){var s=_e,a=ms.transition;ms.transition=null;try{_e=1,Lp(e,t,o,r)}finally{_e=s,ms.transition=a}}function W6(e,t,o,r){var s=_e,a=ms.transition;ms.transition=null;try{_e=4,Lp(e,t,o,r)}finally{_e=s,ms.transition=a}}function Lp(e,t,o,r){if(Vi){var s=wu(e,t,o,r);if(s===null)Td(e,t,r,Wi,o),Rm(e,r);else if(H6(s,e,t,o,r))r.stopPropagation();else if(Rm(e,r),t&4&&-1<F6.indexOf(e)){for(;s!==null;){var a=ul(s);if(a!==null&&K1(a),a=wu(e,t,o,r),a===null&&Td(e,t,r,Wi,o),a===s)break;s=a}s!==null&&r.stopPropagation()}else Td(e,t,r,null,o)}}var Wi=null;function wu(e,t,o,r){if(Wi=null,e=Rp(r),e=ir(e),e!==null)if(t=wr(e),t===null)e=null;else if(o=t.tag,o===13){if(e=P1(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function Q1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D6()){case Np:return 1;case H1:return 4;case Hi:case L6:return 16;case U1:return 536870912;default:return 16}default:return 16}}var wo=null,Bp=null,wi=null;function X1(){if(wi)return wi;var e,t=Bp,o=t.length,r,s="value"in wo?wo.value:wo.textContent,a=s.length;for(e=0;e<o&&t[e]===s[e];e++);var l=o-e;for(r=1;r<=l&&t[o-r]===s[a-r];r++);return wi=s.slice(e,1<r?1-r:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function Om(){return!1}function Yt(e){function t(o,r,s,a,l){this._reactName=o,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(o=e[i],this[i]=o?o(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ql:Om,this.isPropagationStopped=Om,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),t}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$p=Yt(Ns),dl=Fe({},Ns,{view:0,detail:0}),K6=Yt(dl),gd,bd,Qs,Cc=Fe({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(gd=e.screenX-Qs.screenX,bd=e.screenY-Qs.screenY):bd=gd=0,Qs=e),gd)},movementY:function(e){return"movementY"in e?e.movementY:bd}}),Dm=Yt(Cc),G6=Fe({},Cc,{dataTransfer:0}),Y6=Yt(G6),Z6=Fe({},dl,{relatedTarget:0}),vd=Yt(Z6),q6=Fe({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Q6=Yt(q6),X6=Fe({},Ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J6=Yt(X6),ey=Fe({},Ns,{data:0}),Lm=Yt(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oy[e])?!!t[e]:!1}function Ap(){return ry}var sy=Fe({},dl,{key:function(e){if(e.key){var t=ty[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ay=Yt(sy),ly=Fe({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Yt(ly),iy=Fe({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),cy=Yt(iy),dy=Fe({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=Yt(dy),py=Fe({},Cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=Yt(py),my=[9,13,27,32],Mp=to&&"CompositionEvent"in window,Sa=null;to&&"documentMode"in document&&(Sa=document.documentMode);var fy=to&&"TextEvent"in window&&!Sa,J1=to&&(!Mp||Sa&&8<Sa&&11>=Sa),$m=String.fromCharCode(32),Am=!1;function eg(e,t){switch(e){case"keyup":return my.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function xy(e,t){switch(e){case"compositionend":return tg(t);case"keypress":return t.which!==32?null:(Am=!0,$m);case"textInput":return e=t.data,e===$m&&Am?null:e;default:return null}}function gy(e,t){if(Zr)return e==="compositionend"||!Mp&&eg(e,t)?(e=X1(),wi=Bp=wo=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return J1&&t.locale!=="ko"?null:t.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!by[e.type]:t==="textarea"}function ng(e,t,o,r){L1(r),t=Ki(t,"onChange"),0<t.length&&(o=new $p("onChange","change",null,o,r),e.push({event:o,listeners:t}))}var Ca=null,Ha=null;function vy(e){hg(e,0)}function _c(e){var t=Xr(e);if(T1(t))return e}function jy(e,t){if(e==="change")return t}var og=!1;if(to){var jd;if(to){var yd="oninput"in document;if(!yd){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),yd=typeof Pm.oninput=="function"}jd=yd}else jd=!1;og=jd&&(!document.documentMode||9<document.documentMode)}function Im(){Ca&&(Ca.detachEvent("onpropertychange",rg),Ha=Ca=null)}function rg(e){if(e.propertyName==="value"&&_c(Ha)){var t=[];ng(t,Ha,e,Rp(e)),M1(vy,t)}}function yy(e,t,o){e==="focusin"?(Im(),Ca=t,Ha=o,Ca.attachEvent("onpropertychange",rg)):e==="focusout"&&Im()}function Sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _c(Ha)}function Cy(e,t){if(e==="click")return _c(t)}function _y(e,t){if(e==="input"||e==="change")return _c(t)}function wy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sn=typeof Object.is=="function"?Object.is:wy;function Ua(e,t){if(Sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var s=o[r];if(!lu.call(t,s)||!Sn(e[s],t[s]))return!1}return!0}function zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fm(e,t){var o=zm(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=t&&r>=t)return{node:o,offset:t-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=zm(o)}}function sg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ag(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ty(e){var t=ag(),o=e.focusedElem,r=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&sg(o.ownerDocument.documentElement,o)){if(r!==null&&Pp(o)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=o.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=Fm(o,a);var l=Fm(o,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ey=to&&"documentMode"in document&&11>=document.documentMode,qr=null,Tu=null,_a=null,Eu=!1;function Hm(e,t,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Eu||qr==null||qr!==Ii(r)||(r=qr,"selectionStart"in r&&Pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_a&&Ua(_a,r)||(_a=r,r=Ki(Tu,"onSelect"),0<r.length&&(t=new $p("onSelect","select",null,t,o),e.push({event:t,listeners:r}),t.target=qr)))}function Ql(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Qr={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},Sd={},lg={};to&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function wc(e){if(Sd[e])return Sd[e];if(!Qr[e])return e;var t=Qr[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in lg)return Sd[e]=t[o];return e}var ig=wc("animationend"),cg=wc("animationiteration"),dg=wc("animationstart"),ug=wc("transitionend"),pg=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fo(e,t){pg.set(e,t),_r(t,[e])}for(var Cd=0;Cd<Um.length;Cd++){var _d=Um[Cd],ky=_d.toLowerCase(),Ry=_d[0].toUpperCase()+_d.slice(1);Fo(ky,"on"+Ry)}Fo(ig,"onAnimationEnd");Fo(cg,"onAnimationIteration");Fo(dg,"onAnimationStart");Fo("dblclick","onDoubleClick");Fo("focusin","onFocus");Fo("focusout","onBlur");Fo(ug,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Vm(e,t,o){var r=e.type||"unknown-event";e.currentTarget=o,k6(r,t,void 0,e),e.currentTarget=null}function hg(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==a&&s.isPropagationStopped())break e;Vm(s,i,d),a=c}else for(l=0;l<r.length;l++){if(i=r[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==a&&s.isPropagationStopped())break e;Vm(s,i,d),a=c}}}if(Fi)throw e=Su,Fi=!1,Su=null,e}function Oe(e,t){var o=t[Du];o===void 0&&(o=t[Du]=new Set);var r=e+"__bubble";o.has(r)||(mg(t,e,2,!1),o.add(r))}function wd(e,t,o){var r=0;t&&(r|=4),mg(o,e,r,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Va(e){if(!e[Xl]){e[Xl]=!0,y1.forEach(function(o){o!=="selectionchange"&&(Ny.has(o)||wd(o,!1,e),wd(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,wd("selectionchange",!1,t))}}function mg(e,t,o,r){switch(Q1(t)){case 1:var s=V6;break;case 4:s=W6;break;default:s=Lp}o=s.bind(null,t,o,e),s=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,o,{capture:!0,passive:s}):e.addEventListener(t,o,!0):s!==void 0?e.addEventListener(t,o,{passive:s}):e.addEventListener(t,o,!1)}function Td(e,t,o,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=ir(i),l===null)return;if(c=l.tag,c===5||c===6){r=a=l;continue e}i=i.parentNode}}r=r.return}M1(function(){var d=a,u=Rp(o),p=[];e:{var f=pg.get(e);if(f!==void 0){var v=$p,y=e;switch(e){case"keypress":if(Ti(o)===0)break e;case"keydown":case"keyup":v=ay;break;case"focusin":y="focus",v=vd;break;case"focusout":y="blur",v=vd;break;case"beforeblur":case"afterblur":v=vd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Y6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=cy;break;case ig:case cg:case dg:v=Q6;break;case ug:v=uy;break;case"scroll":v=K6;break;case"wheel":v=hy;break;case"copy":case"cut":case"paste":v=J6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Bm}var S=(t&4)!==0,T=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var h=d,m;h!==null;){m=h;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,g!==null&&(j=Pa(h,g),j!=null&&S.push(Wa(h,j,m)))),T)break;h=h.return}0<S.length&&(f=new v(f,y,null,o,u),p.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&o!==vu&&(y=o.relatedTarget||o.fromElement)&&(ir(y)||y[no]))break e;if((v||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=o.relatedTarget||o.toElement,v=d,y=y?ir(y):null,y!==null&&(T=wr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=d),v!==y)){if(S=Dm,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(S=Bm,j="onPointerLeave",g="onPointerEnter",h="pointer"),T=v==null?f:Xr(v),m=y==null?f:Xr(y),f=new S(j,h+"leave",v,o,u),f.target=T,f.relatedTarget=m,j=null,ir(u)===d&&(S=new S(g,h+"enter",y,o,u),S.target=m,S.relatedTarget=T,j=S),T=j,v&&y)t:{for(S=v,g=y,h=0,m=S;m;m=zr(m))h++;for(m=0,j=g;j;j=zr(j))m++;for(;0<h-m;)S=zr(S),h--;for(;0<m-h;)g=zr(g),m--;for(;h--;){if(S===g||g!==null&&S===g.alternate)break t;S=zr(S),g=zr(g)}S=null}else S=null;v!==null&&Wm(p,f,v,S,!1),y!==null&&T!==null&&Wm(p,T,y,S,!0)}}e:{if(f=d?Xr(d):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var C=jy;else if(Mm(f))if(og)C=_y;else{C=Sy;var x=yy}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Cy);if(C&&(C=C(e,d))){ng(p,C,o,u);break e}x&&x(e,f,d),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&mu(f,"number",f.value)}switch(x=d?Xr(d):window,e){case"focusin":(Mm(x)||x.contentEditable==="true")&&(qr=x,Tu=d,_a=null);break;case"focusout":_a=Tu=qr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Hm(p,o,u);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":Hm(p,o,u)}var _;if(Mp)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Zr?eg(e,o)&&(k="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(k="onCompositionStart");k&&(J1&&o.locale!=="ko"&&(Zr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Zr&&(_=X1()):(wo=u,Bp="value"in wo?wo.value:wo.textContent,Zr=!0)),x=Ki(d,k),0<x.length&&(k=new Lm(k,e,null,o,u),p.push({event:k,listeners:x}),_?k.data=_:(_=tg(o),_!==null&&(k.data=_)))),(_=fy?xy(e,o):gy(e,o))&&(d=Ki(d,"onBeforeInput"),0<d.length&&(u=new Lm("onBeforeInput","beforeinput",null,o,u),p.push({event:u,listeners:d}),u.data=_))}hg(p,t)})}function Wa(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Ki(e,t){for(var o=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Pa(e,o),a!=null&&r.unshift(Wa(e,a,s)),a=Pa(e,t),a!=null&&r.push(Wa(e,a,s))),e=e.return}return r}function zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wm(e,t,o,r,s){for(var a=t._reactName,l=[];o!==null&&o!==r;){var i=o,c=i.alternate,d=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&d!==null&&(i=d,s?(c=Pa(o,a),c!=null&&l.unshift(Wa(o,c,i))):s||(c=Pa(o,a),c!=null&&l.push(Wa(o,c,i)))),o=o.return}l.length!==0&&e.push({event:t,listeners:l})}var Oy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Km(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Dy,"")}function Jl(e,t,o){if(t=Km(t),Km(e)!==t&&o)throw Error(A(425))}function Gi(){}var ku=null,Ru=null;function Nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch($y)}:Ou;function $y(e){setTimeout(function(){throw e})}function Ed(e,t){var o=t,r=0;do{var s=o.nextSibling;if(e.removeChild(o),s&&s.nodeType===8)if(o=s.data,o==="/$"){if(r===0){e.removeChild(s),Fa(t);return}r--}else o!=="$"&&o!=="$?"&&o!=="$!"||r++;o=s}while(o);Fa(t)}function No(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ym(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var Os=Math.random().toString(36).slice(2),An="__reactFiber$"+Os,Ka="__reactProps$"+Os,no="__reactContainer$"+Os,Du="__reactEvents$"+Os,Ay="__reactListeners$"+Os,My="__reactHandles$"+Os;function ir(e){var t=e[An];if(t)return t;for(var o=e.parentNode;o;){if(t=o[no]||o[An]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=Ym(e);e!==null;){if(o=e[An])return o;e=Ym(e)}return t}e=o,o=e.parentNode}return null}function ul(e){return e=e[An]||e[no],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Tc(e){return e[Ka]||null}var Lu=[],Jr=-1;function Ho(e){return{current:e}}function De(e){0>Jr||(e.current=Lu[Jr],Lu[Jr]=null,Jr--)}function ke(e,t){Jr++,Lu[Jr]=e.current,e.current=t}var Ao={},xt=Ho(Ao),Bt=Ho(!1),xr=Ao;function js(e,t){var o=e.type.contextTypes;if(!o)return Ao;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in o)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function $t(e){return e=e.childContextTypes,e!=null}function Yi(){De(Bt),De(xt)}function Zm(e,t,o){if(xt.current!==Ao)throw Error(A(168));ke(xt,t),ke(Bt,o)}function fg(e,t,o){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return o;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(A(108,y6(e)||"Unknown",s));return Fe({},o,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ao,xr=xt.current,ke(xt,e),ke(Bt,Bt.current),!0}function qm(e,t,o){var r=e.stateNode;if(!r)throw Error(A(169));o?(e=fg(e,t,xr),r.__reactInternalMemoizedMergedChildContext=e,De(Bt),De(xt),ke(xt,e)):De(Bt),ke(Bt,o)}var Gn=null,Ec=!1,kd=!1;function xg(e){Gn===null?Gn=[e]:Gn.push(e)}function Py(e){Ec=!0,xg(e)}function Uo(){if(!kd&&Gn!==null){kd=!0;var e=0,t=_e;try{var o=Gn;for(_e=1;e<o.length;e++){var r=o[e];do r=r(!0);while(r!==null)}Gn=null,Ec=!1}catch(s){throw Gn!==null&&(Gn=Gn.slice(e+1)),F1(Np,Uo),s}finally{_e=t,kd=!1}}return null}var es=[],ts=0,qi=null,Qi=0,Xt=[],Jt=0,gr=null,Qn=1,Xn="";function sr(e,t){es[ts++]=Qi,es[ts++]=qi,qi=e,Qi=t}function gg(e,t,o){Xt[Jt++]=Qn,Xt[Jt++]=Xn,Xt[Jt++]=gr,gr=e;var r=Qn;e=Xn;var s=32-jn(r)-1;r&=~(1<<s),o+=1;var a=32-jn(t)+s;if(30<a){var l=s-s%5;a=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Qn=1<<32-jn(t)+s|o<<s|r,Xn=a+e}else Qn=1<<a|o<<s|r,Xn=e}function Ip(e){e.return!==null&&(sr(e,1),gg(e,1,0))}function zp(e){for(;e===qi;)qi=es[--ts],es[ts]=null,Qi=es[--ts],es[ts]=null;for(;e===gr;)gr=Xt[--Jt],Xt[Jt]=null,Xn=Xt[--Jt],Xt[Jt]=null,Qn=Xt[--Jt],Xt[Jt]=null}var Vt=null,Ut=null,Ae=!1,vn=null;function bg(e,t){var o=en(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function Qm(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Ut=No(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=gr!==null?{id:Qn,overflow:Xn}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=en(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,Vt=e,Ut=null,!0):!1;default:return!1}}function Bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $u(e){if(Ae){var t=Ut;if(t){var o=t;if(!Qm(e,t)){if(Bu(e))throw Error(A(418));t=No(o.nextSibling);var r=Vt;t&&Qm(e,t)?bg(r,o):(e.flags=e.flags&-4097|2,Ae=!1,Vt=e)}}else{if(Bu(e))throw Error(A(418));e.flags=e.flags&-4097|2,Ae=!1,Vt=e}}}function Xm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function ei(e){if(e!==Vt)return!1;if(!Ae)return Xm(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nu(e.type,e.memoizedProps)),t&&(t=Ut)){if(Bu(e))throw vg(),Error(A(418));for(;t;)bg(e,t),t=No(t.nextSibling)}if(Xm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){Ut=No(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}Ut=null}}else Ut=Vt?No(e.stateNode.nextSibling):null;return!0}function vg(){for(var e=Ut;e;)e=No(e.nextSibling)}function ys(){Ut=Vt=null,Ae=!1}function Fp(e){vn===null?vn=[e]:vn.push(e)}var Iy=io.ReactCurrentBatchConfig;function xn(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}var Xi=Ho(null),Ji=null,ns=null,Hp=null;function Up(){Hp=ns=Ji=null}function Vp(e){var t=Xi.current;De(Xi),e._currentValue=t}function Au(e,t,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===o)break;e=e.return}}function fs(e,t){Ji=e,Hp=ns=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Dt=!0),e.firstContext=null)}function on(e){var t=e._currentValue;if(Hp!==e)if(e={context:e,memoizedValue:t,next:null},ns===null){if(Ji===null)throw Error(A(308));ns=e,Ji.dependencies={lanes:0,firstContext:e}}else ns=ns.next=e;return t}var cr=null;function Wp(e){cr===null?cr=[e]:cr.push(e)}function jg(e,t,o,r){var s=t.interleaved;return s===null?(o.next=o,Wp(t)):(o.next=s.next,s.next=o),t.interleaved=o,oo(e,r)}function oo(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var yo=!1;function Kp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Oo(e,t,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,oo(e,o)}return s=r.interleaved,s===null?(t.next=t,Wp(r)):(t.next=s.next,s.next=t),r.interleaved=t,oo(e,o)}function Ei(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,o|=r,t.lanes=o,Op(e,o)}}function Jm(e,t){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var s=null,a=null;if(o=o.firstBaseUpdate,o!==null){do{var l={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};a===null?s=a=l:a=a.next=l,o=o.next}while(o!==null);a===null?s=a=t:a=a.next=t}else s=a=t;o={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function ec(e,t,o,r){var s=e.updateQueue;yo=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=s.baseState;l=0,u=d=c=null,i=a;do{var f=i.lane,v=i.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,S=i;switch(f=t,v=o,S.tag){case 1:if(y=S.payload,typeof y=="function"){p=y.call(v,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,f=typeof y=="function"?y.call(v,p,f):y,f==null)break e;p=Fe({},p,f);break e;case 2:yo=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[i]:f.push(i))}else v={eventTime:v,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=v,c=p):u=u.next=v,l|=f;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;f=i,i=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(u===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);vr|=l,e.lanes=l,e.memoizedState=p}}function ef(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=o,typeof s!="function")throw Error(A(191,s));s.call(r)}}}var Sg=new j1.Component().refs;function Mu(e,t,o,r){t=e.memoizedState,o=o(r,t),o=o==null?t:Fe({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var kc={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var r=yt(),s=Lo(e),a=Jn(r,s);a.payload=t,o!=null&&(a.callback=o),t=Oo(e,a,s),t!==null&&(yn(t,e,s,r),Ei(t,e,s))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var r=yt(),s=Lo(e),a=Jn(r,s);a.tag=1,a.payload=t,o!=null&&(a.callback=o),t=Oo(e,a,s),t!==null&&(yn(t,e,s,r),Ei(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=yt(),r=Lo(e),s=Jn(o,r);s.tag=2,t!=null&&(s.callback=t),t=Oo(e,s,r),t!==null&&(yn(t,e,r,o),Ei(t,e,r))}};function tf(e,t,o,r,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ua(o,r)||!Ua(s,a):!0}function Cg(e,t,o){var r=!1,s=Ao,a=t.contextType;return typeof a=="object"&&a!==null?a=on(a):(s=$t(t)?xr:xt.current,r=t.contextTypes,a=(r=r!=null)?js(e,s):Ao),t=new t(o,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function nf(e,t,o,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,r),t.state!==e&&kc.enqueueReplaceState(t,t.state,null)}function Pu(e,t,o,r){var s=e.stateNode;s.props=o,s.state=e.memoizedState,s.refs=Sg,Kp(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=on(a):(a=$t(t)?xr:xt.current,s.context=js(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Mu(e,t,a,o),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&kc.enqueueReplaceState(s,s.state,null),ec(e,o,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Xs(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(A(309));var r=o.stateNode}if(!r)throw Error(A(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var i=s.refs;i===Sg&&(i=s.refs={}),l===null?delete i[a]:i[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!o._owner)throw Error(A(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function of(e){var t=e._init;return t(e._payload)}function _g(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function o(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(g,h){return g=Bo(g,h),g.index=0,g.sibling=null,g}function a(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,h,m,j){return h===null||h.tag!==6?(h=$d(m,g.mode,j),h.return=g,h):(h=s(h,m),h.return=g,h)}function c(g,h,m,j){var C=m.type;return C===Yr?u(g,h,m.props.children,j,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jo&&of(C)===h.type)?(j=s(h,m.props),j.ref=Xs(g,h,m),j.return=g,j):(j=Li(m.type,m.key,m.props,null,g.mode,j),j.ref=Xs(g,h,m),j.return=g,j)}function d(g,h,m,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ad(m,g.mode,j),h.return=g,h):(h=s(h,m.children||[]),h.return=g,h)}function u(g,h,m,j,C){return h===null||h.tag!==7?(h=mr(m,g.mode,j,C),h.return=g,h):(h=s(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$d(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vl:return m=Li(h.type,h.key,h.props,null,g.mode,m),m.ref=Xs(g,null,h),m.return=g,m;case Gr:return h=Ad(h,g.mode,m),h.return=g,h;case jo:var j=h._init;return p(g,j(h._payload),m)}if(ua(h)||Gs(h))return h=mr(h,g.mode,m,null),h.return=g,h;ti(g,h)}return null}function f(g,h,m,j){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(g,h,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vl:return m.key===C?c(g,h,m,j):null;case Gr:return m.key===C?d(g,h,m,j):null;case jo:return C=m._init,f(g,h,C(m._payload),j)}if(ua(m)||Gs(m))return C!==null?null:u(g,h,m,j,null);ti(g,m)}return null}function v(g,h,m,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(m)||null,i(h,g,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Vl:return g=g.get(j.key===null?m:j.key)||null,c(h,g,j,C);case Gr:return g=g.get(j.key===null?m:j.key)||null,d(h,g,j,C);case jo:var x=j._init;return v(g,h,m,x(j._payload),C)}if(ua(j)||Gs(j))return g=g.get(m)||null,u(h,g,j,C,null);ti(h,j)}return null}function y(g,h,m,j){for(var C=null,x=null,_=h,k=h=0,R=null;_!==null&&k<m.length;k++){_.index>k?(R=_,_=null):R=_.sibling;var O=f(g,_,m[k],j);if(O===null){_===null&&(_=R);break}e&&_&&O.alternate===null&&t(g,_),h=a(O,h,k),x===null?C=O:x.sibling=O,x=O,_=R}if(k===m.length)return o(g,_),Ae&&sr(g,k),C;if(_===null){for(;k<m.length;k++)_=p(g,m[k],j),_!==null&&(h=a(_,h,k),x===null?C=_:x.sibling=_,x=_);return Ae&&sr(g,k),C}for(_=r(g,_);k<m.length;k++)R=v(_,g,k,m[k],j),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?k:R.key),h=a(R,h,k),x===null?C=R:x.sibling=R,x=R);return e&&_.forEach(function(B){return t(g,B)}),Ae&&sr(g,k),C}function S(g,h,m,j){var C=Gs(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var x=C=null,_=h,k=h=0,R=null,O=m.next();_!==null&&!O.done;k++,O=m.next()){_.index>k?(R=_,_=null):R=_.sibling;var B=f(g,_,O.value,j);if(B===null){_===null&&(_=R);break}e&&_&&B.alternate===null&&t(g,_),h=a(B,h,k),x===null?C=B:x.sibling=B,x=B,_=R}if(O.done)return o(g,_),Ae&&sr(g,k),C;if(_===null){for(;!O.done;k++,O=m.next())O=p(g,O.value,j),O!==null&&(h=a(O,h,k),x===null?C=O:x.sibling=O,x=O);return Ae&&sr(g,k),C}for(_=r(g,_);!O.done;k++,O=m.next())O=v(_,g,k,O.value,j),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?k:O.key),h=a(O,h,k),x===null?C=O:x.sibling=O,x=O);return e&&_.forEach(function(U){return t(g,U)}),Ae&&sr(g,k),C}function T(g,h,m,j){if(typeof m=="object"&&m!==null&&m.type===Yr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vl:e:{for(var C=m.key,x=h;x!==null;){if(x.key===C){if(C=m.type,C===Yr){if(x.tag===7){o(g,x.sibling),h=s(x,m.props.children),h.return=g,g=h;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jo&&of(C)===x.type){o(g,x.sibling),h=s(x,m.props),h.ref=Xs(g,x,m),h.return=g,g=h;break e}o(g,x);break}else t(g,x);x=x.sibling}m.type===Yr?(h=mr(m.props.children,g.mode,j,m.key),h.return=g,g=h):(j=Li(m.type,m.key,m.props,null,g.mode,j),j.ref=Xs(g,h,m),j.return=g,g=j)}return l(g);case Gr:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){o(g,h.sibling),h=s(h,m.children||[]),h.return=g,g=h;break e}else{o(g,h);break}else t(g,h);h=h.sibling}h=Ad(m,g.mode,j),h.return=g,g=h}return l(g);case jo:return x=m._init,T(g,h,x(m._payload),j)}if(ua(m))return y(g,h,m,j);if(Gs(m))return S(g,h,m,j);ti(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(o(g,h.sibling),h=s(h,m),h.return=g,g=h):(o(g,h),h=$d(m,g.mode,j),h.return=g,g=h),l(g)):o(g,h)}return T}var Ss=_g(!0),wg=_g(!1),pl={},In=Ho(pl),Ga=Ho(pl),Ya=Ho(pl);function dr(e){if(e===pl)throw Error(A(174));return e}function Gp(e,t){switch(ke(Ya,t),ke(Ga,e),ke(In,pl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xu(t,e)}De(In),ke(In,t)}function Cs(){De(In),De(Ga),De(Ya)}function Tg(e){dr(Ya.current);var t=dr(In.current),o=xu(t,e.type);t!==o&&(ke(Ga,e),ke(In,o))}function Yp(e){Ga.current===e&&(De(In),De(Ga))}var Ie=Ho(0);function tc(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rd=[];function Zp(){for(var e=0;e<Rd.length;e++)Rd[e]._workInProgressVersionPrimary=null;Rd.length=0}var ki=io.ReactCurrentDispatcher,Nd=io.ReactCurrentBatchConfig,br=0,ze=null,Qe=null,rt=null,nc=!1,wa=!1,Za=0,zy=0;function ht(){throw Error(A(321))}function qp(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Sn(e[o],t[o]))return!1;return!0}function Qp(e,t,o,r,s,a){if(br=a,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?Vy:Wy,e=o(r,s),wa){a=0;do{if(wa=!1,Za=0,25<=a)throw Error(A(301));a+=1,rt=Qe=null,t.updateQueue=null,ki.current=Ky,e=o(r,s)}while(wa)}if(ki.current=oc,t=Qe!==null&&Qe.next!==null,br=0,rt=Qe=ze=null,nc=!1,t)throw Error(A(300));return e}function Xp(){var e=Za!==0;return Za=0,e}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?ze.memoizedState=rt=e:rt=rt.next=e,rt}function rn(){if(Qe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=rt===null?ze.memoizedState:rt.next;if(t!==null)rt=t,Qe=e;else{if(e===null)throw Error(A(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},rt===null?ze.memoizedState=rt=e:rt=rt.next=e}return rt}function qa(e,t){return typeof t=="function"?t(e):t}function Od(e){var t=rn(),o=t.queue;if(o===null)throw Error(A(311));o.lastRenderedReducer=e;var r=Qe,s=r.baseQueue,a=o.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}r.baseQueue=s=a,o.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=l=null,c=null,d=a;do{var u=d.lane;if((br&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=r):c=c.next=p,ze.lanes|=u,vr|=u}d=d.next}while(d!==null&&d!==a);c===null?l=r:c.next=i,Sn(r,t.memoizedState)||(Dt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,o.lastRenderedState=r}if(e=o.interleaved,e!==null){s=e;do a=s.lane,ze.lanes|=a,vr|=a,s=s.next;while(s!==e)}else s===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Dd(e){var t=rn(),o=t.queue;if(o===null)throw Error(A(311));o.lastRenderedReducer=e;var r=o.dispatch,s=o.pending,a=t.memoizedState;if(s!==null){o.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);Sn(a,t.memoizedState)||(Dt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),o.lastRenderedState=a}return[a,r]}function Eg(){}function kg(e,t){var o=ze,r=rn(),s=t(),a=!Sn(r.memoizedState,s);if(a&&(r.memoizedState=s,Dt=!0),r=r.queue,Jp(Og.bind(null,o,r,e),[e]),r.getSnapshot!==t||a||rt!==null&&rt.memoizedState.tag&1){if(o.flags|=2048,Qa(9,Ng.bind(null,o,r,s,t),void 0,null),at===null)throw Error(A(349));br&30||Rg(o,t,s)}return s}function Rg(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function Ng(e,t,o,r){t.value=o,t.getSnapshot=r,Dg(t)&&Lg(e)}function Og(e,t,o){return o(function(){Dg(t)&&Lg(e)})}function Dg(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Sn(e,o)}catch{return!0}}function Lg(e){var t=oo(e,1);t!==null&&yn(t,e,1,-1)}function rf(e){var t=Ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},t.queue=e,e=e.dispatch=Uy.bind(null,ze,e),[t.memoizedState,e]}function Qa(e,t,o,r){return e={tag:e,create:t,destroy:o,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,t.lastEffect=e)),e}function Bg(){return rn().memoizedState}function Ri(e,t,o,r){var s=Ln();ze.flags|=e,s.memoizedState=Qa(1|t,o,void 0,r===void 0?null:r)}function Rc(e,t,o,r){var s=rn();r=r===void 0?null:r;var a=void 0;if(Qe!==null){var l=Qe.memoizedState;if(a=l.destroy,r!==null&&qp(r,l.deps)){s.memoizedState=Qa(t,o,a,r);return}}ze.flags|=e,s.memoizedState=Qa(1|t,o,a,r)}function sf(e,t){return Ri(8390656,8,e,t)}function Jp(e,t){return Rc(2048,8,e,t)}function $g(e,t){return Rc(4,2,e,t)}function Ag(e,t){return Rc(4,4,e,t)}function Mg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pg(e,t,o){return o=o!=null?o.concat([e]):null,Rc(4,4,Mg.bind(null,t,e),o)}function eh(){}function Ig(e,t){var o=rn();t=t===void 0?null:t;var r=o.memoizedState;return r!==null&&t!==null&&qp(t,r[1])?r[0]:(o.memoizedState=[e,t],e)}function zg(e,t){var o=rn();t=t===void 0?null:t;var r=o.memoizedState;return r!==null&&t!==null&&qp(t,r[1])?r[0]:(e=e(),o.memoizedState=[e,t],e)}function Fg(e,t,o){return br&21?(Sn(o,t)||(o=V1(),ze.lanes|=o,vr|=o,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=o)}function Fy(e,t){var o=_e;_e=o!==0&&4>o?o:4,e(!0);var r=Nd.transition;Nd.transition={};try{e(!1),t()}finally{_e=o,Nd.transition=r}}function Hg(){return rn().memoizedState}function Hy(e,t,o){var r=Lo(e);if(o={lane:r,action:o,hasEagerState:!1,eagerState:null,next:null},Ug(e))Vg(t,o);else if(o=jg(e,t,o,r),o!==null){var s=yt();yn(o,e,r,s),Wg(o,t,r)}}function Uy(e,t,o){var r=Lo(e),s={lane:r,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ug(e))Vg(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,i=a(l,o);if(s.hasEagerState=!0,s.eagerState=i,Sn(i,l)){var c=t.interleaved;c===null?(s.next=s,Wp(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}o=jg(e,t,s,r),o!==null&&(s=yt(),yn(o,e,r,s),Wg(o,t,r))}}function Ug(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Vg(e,t){wa=nc=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function Wg(e,t,o){if(o&4194240){var r=t.lanes;r&=e.pendingLanes,o|=r,t.lanes=o,Op(e,o)}}var oc={readContext:on,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},Vy={readContext:on,useCallback:function(e,t){return Ln().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:sf,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,Ri(4194308,4,Mg.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var o=Ln();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var r=Ln();return t=o!==void 0?o(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hy.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Ln();return e={current:e},t.memoizedState=e},useState:rf,useDebugValue:eh,useDeferredValue:function(e){return Ln().memoizedState=e},useTransition:function(){var e=rf(!1),t=e[0];return e=Fy.bind(null,e[1]),Ln().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var r=ze,s=Ln();if(Ae){if(o===void 0)throw Error(A(407));o=o()}else{if(o=t(),at===null)throw Error(A(349));br&30||Rg(r,t,o)}s.memoizedState=o;var a={value:o,getSnapshot:t};return s.queue=a,sf(Og.bind(null,r,a,e),[e]),r.flags|=2048,Qa(9,Ng.bind(null,r,a,o,t),void 0,null),o},useId:function(){var e=Ln(),t=at.identifierPrefix;if(Ae){var o=Xn,r=Qn;o=(r&~(1<<32-jn(r)-1)).toString(32)+o,t=":"+t+"R"+o,o=Za++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=zy++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wy={readContext:on,useCallback:Ig,useContext:on,useEffect:Jp,useImperativeHandle:Pg,useInsertionEffect:$g,useLayoutEffect:Ag,useMemo:zg,useReducer:Od,useRef:Bg,useState:function(){return Od(qa)},useDebugValue:eh,useDeferredValue:function(e){var t=rn();return Fg(t,Qe.memoizedState,e)},useTransition:function(){var e=Od(qa)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:kg,useId:Hg,unstable_isNewReconciler:!1},Ky={readContext:on,useCallback:Ig,useContext:on,useEffect:Jp,useImperativeHandle:Pg,useInsertionEffect:$g,useLayoutEffect:Ag,useMemo:zg,useReducer:Dd,useRef:Bg,useState:function(){return Dd(qa)},useDebugValue:eh,useDeferredValue:function(e){var t=rn();return Qe===null?t.memoizedState=e:Fg(t,Qe.memoizedState,e)},useTransition:function(){var e=Dd(qa)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:kg,useId:Hg,unstable_isNewReconciler:!1};function _s(e,t){try{var o="",r=t;do o+=j6(r),r=r.return;while(r);var s=o}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Ld(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function Iu(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function Kg(e,t,o){o=Jn(-1,o),o.tag=3,o.payload={element:null};var r=t.value;return o.callback=function(){sc||(sc=!0,Zu=r),Iu(e,t)},o}function Gg(e,t,o){o=Jn(-1,o),o.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;o.payload=function(){return r(s)},o.callback=function(){Iu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(o.callback=function(){Iu(e,t),typeof r!="function"&&(Do===null?Do=new Set([this]):Do.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),o}function af(e,t,o){var r=e.pingCache;if(r===null){r=e.pingCache=new Gy;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(o)||(s.add(o),e=l8.bind(null,e,t,o),t.then(e,e))}function lf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cf(e,t,o,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=Jn(-1,1),t.tag=2,Oo(o,t,1))),o.lanes|=1),e)}var Yy=io.ReactCurrentOwner,Dt=!1;function jt(e,t,o,r){t.child=e===null?wg(t,null,o,r):Ss(t,e.child,o,r)}function df(e,t,o,r,s){o=o.render;var a=t.ref;return fs(t,s),r=Qp(e,t,o,r,a,s),o=Xp(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ro(e,t,s)):(Ae&&o&&Ip(t),t.flags|=1,jt(e,t,r,s),t.child)}function uf(e,t,o,r,s){if(e===null){var a=o.type;return typeof a=="function"&&!ih(a)&&a.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=a,Yg(e,t,a,r,s)):(e=Li(o.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(o=o.compare,o=o!==null?o:Ua,o(l,r)&&e.ref===t.ref)return ro(e,t,s)}return t.flags|=1,e=Bo(a,r),e.ref=t.ref,e.return=t,t.child=e}function Yg(e,t,o,r,s){if(e!==null){var a=e.memoizedProps;if(Ua(a,r)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(Dt=!0);else return t.lanes=e.lanes,ro(e,t,s)}return zu(e,t,o,r,s)}function Zg(e,t,o){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(rs,Ft),Ft|=o;else{if(!(o&1073741824))return e=a!==null?a.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(rs,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:o,ke(rs,Ft),Ft|=r}else a!==null?(r=a.baseLanes|o,t.memoizedState=null):r=o,ke(rs,Ft),Ft|=r;return jt(e,t,s,o),t.child}function qg(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function zu(e,t,o,r,s){var a=$t(o)?xr:xt.current;return a=js(t,a),fs(t,s),o=Qp(e,t,o,r,a,s),r=Xp(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ro(e,t,s)):(Ae&&r&&Ip(t),t.flags|=1,jt(e,t,o,s),t.child)}function pf(e,t,o,r,s){if($t(o)){var a=!0;Zi(t)}else a=!1;if(fs(t,s),t.stateNode===null)Ni(e,t),Cg(t,o,r),Pu(t,o,r,s),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=o.contextType;typeof d=="object"&&d!==null?d=on(d):(d=$t(o)?xr:xt.current,d=js(t,d));var u=o.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||c!==d)&&nf(t,l,r,d),yo=!1;var f=t.memoizedState;l.state=f,ec(t,r,l,s),c=t.memoizedState,i!==r||f!==c||Bt.current||yo?(typeof u=="function"&&(Mu(t,o,u,r),c=t.memoizedState),(i=yo||tf(t,o,i,r,f,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yg(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:xn(t.type,i),l.props=d,p=t.pendingProps,f=l.context,c=o.contextType,typeof c=="object"&&c!==null?c=on(c):(c=$t(o)?xr:xt.current,c=js(t,c));var v=o.getDerivedStateFromProps;(u=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||f!==c)&&nf(t,l,r,c),yo=!1,f=t.memoizedState,l.state=f,ec(t,r,l,s);var y=t.memoizedState;i!==p||f!==y||Bt.current||yo?(typeof v=="function"&&(Mu(t,o,v,r),y=t.memoizedState),(d=yo||tf(t,o,d,r,f,y,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Fu(e,t,o,r,a,s)}function Fu(e,t,o,r,s,a){qg(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&qm(t,o,!1),ro(e,t,a);r=t.stateNode,Yy.current=t;var i=l&&typeof o.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ss(t,e.child,null,a),t.child=Ss(t,null,i,a)):jt(e,t,i,a),t.memoizedState=r.state,s&&qm(t,o,!0),t.child}function Qg(e){var t=e.stateNode;t.pendingContext?Zm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zm(e,t.context,!1),Gp(e,t.containerInfo)}function hf(e,t,o,r,s){return ys(),Fp(s),t.flags|=256,jt(e,t,o,r),t.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Uu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,t,o){var r=t.pendingProps,s=Ie.current,a=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Ie,s&1),e===null)return $u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Dc(l,r,0,null),e=mr(e,r,o,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Uu(o),t.memoizedState=Hu,e):th(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Zy(e,t,l,r,i,s,o);if(a){a=r.fallback,l=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Bo(s,c),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=Bo(i,a):(a=mr(a,l,o,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Uu(o):{baseLanes:l.baseLanes|o,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~o,t.memoizedState=Hu,r}return a=e.child,e=a.sibling,r=Bo(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=o),r.return=t,r.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=r,t.memoizedState=null,r}function th(e,t){return t=Dc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,o,r){return r!==null&&Fp(r),Ss(t,e.child,null,o),e=th(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zy(e,t,o,r,s,a,l){if(o)return t.flags&256?(t.flags&=-257,r=Ld(Error(A(422))),ni(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=Dc({mode:"visible",children:r.children},s,0,null),a=mr(a,s,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ss(t,e.child,null,l),t.child.memoizedState=Uu(l),t.memoizedState=Hu,a);if(!(t.mode&1))return ni(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(A(419)),r=Ld(a,r,void 0),ni(e,t,l,r)}if(i=(l&e.childLanes)!==0,Dt||i){if(r=at,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,oo(e,s),yn(r,e,s,-1))}return lh(),r=Ld(Error(A(421))),ni(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=i8.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Ut=No(s.nextSibling),Vt=t,Ae=!0,vn=null,e!==null&&(Xt[Jt++]=Qn,Xt[Jt++]=Xn,Xt[Jt++]=gr,Qn=e.id,Xn=e.overflow,gr=t),t=th(t,r.children),t.flags|=4096,t)}function mf(e,t,o){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Au(e.return,t,o)}function Bd(e,t,o,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=o,a.tailMode=s)}function Jg(e,t,o){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(jt(e,t,r.children,o),r=Ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,o,t);else if(e.tag===19)mf(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Ie,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(o=t.child,s=null;o!==null;)e=o.alternate,e!==null&&tc(e)===null&&(s=o),o=o.sibling;o=s,o===null?(s=t.child,t.child=null):(s=o.sibling,o.sibling=null),Bd(t,!1,s,o,a);break;case"backwards":for(o=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&tc(e)===null){t.child=s;break}e=s.sibling,s.sibling=o,o=s,s=e}Bd(t,!0,o,null,a);break;case"together":Bd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ro(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),vr|=t.lanes,!(o&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,o=Bo(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Bo(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function qy(e,t,o){switch(t.tag){case 3:Qg(t),ys();break;case 5:Tg(t);break;case 1:$t(t.type)&&Zi(t);break;case 4:Gp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ke(Xi,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ie,Ie.current&1),t.flags|=128,null):o&t.child.childLanes?Xg(e,t,o):(ke(Ie,Ie.current&1),e=ro(e,t,o),e!==null?e.sibling:null);ke(Ie,Ie.current&1);break;case 19:if(r=(o&t.childLanes)!==0,e.flags&128){if(r)return Jg(e,t,o);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Ie,Ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Zg(e,t,o)}return ro(e,t,o)}var e2,Vu,t2,n2;e2=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Vu=function(){};t2=function(e,t,o,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,dr(In.current);var a=null;switch(o){case"input":s=pu(e,s),r=pu(e,r),a=[];break;case"select":s=Fe({},s,{value:void 0}),r=Fe({},r,{value:void 0}),a=[];break;case"textarea":s=fu(e,s),r=fu(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}gu(o,r);var l;o=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var i=s[d];for(l in i)i.hasOwnProperty(l)&&(o||(o={}),o[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Aa.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(i=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(o||(o={}),o[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(o||(o={}),o[l]=c[l])}else o||(a||(a=[]),a.push(d,o)),o=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Oe("scroll",e),a||i===c||(a=[])):(a=a||[]).push(d,c))}o&&(a=a||[]).push("style",o);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};n2=function(e,t,o,r){o!==r&&(t.flags|=4)};function Js(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(t)for(var s=e.child;s!==null;)o|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)o|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=o,t}function Qy(e,t,o){var r=t.pendingProps;switch(zp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return $t(t.type)&&Yi(),mt(t),null;case 3:return r=t.stateNode,Cs(),De(Bt),De(xt),Zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vn!==null&&(Xu(vn),vn=null))),Vu(e,t),mt(t),null;case 5:Yp(t);var s=dr(Ya.current);if(o=t.type,e!==null&&t.stateNode!=null)t2(e,t,o,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return mt(t),null}if(e=dr(In.current),ei(t)){r=t.stateNode,o=t.type;var a=t.memoizedProps;switch(r[An]=t,r[Ka]=a,e=(t.mode&1)!==0,o){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(s=0;s<ha.length;s++)Oe(ha[s],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Sm(r,a),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Oe("invalid",r);break;case"textarea":_m(r,a),Oe("invalid",r)}gu(o,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Jl(r.textContent,i,e),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Jl(r.textContent,i,e),s=["children",""+i]):Aa.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Oe("scroll",r)}switch(o){case"input":Wl(r),Cm(r,a,!0);break;case"textarea":Wl(r),wm(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Gi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=R1(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(o,{is:r.is}):(e=l.createElement(o),o==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,o),e[An]=t,e[Ka]=r,e2(e,t,!1,!1),t.stateNode=e;e:{switch(l=bu(o,r),o){case"dialog":Oe("cancel",e),Oe("close",e),s=r;break;case"iframe":case"object":case"embed":Oe("load",e),s=r;break;case"video":case"audio":for(s=0;s<ha.length;s++)Oe(ha[s],e);s=r;break;case"source":Oe("error",e),s=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),s=r;break;case"details":Oe("toggle",e),s=r;break;case"input":Sm(e,r),s=pu(e,r),Oe("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Fe({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":_m(e,r),s=fu(e,r),Oe("invalid",e);break;default:s=r}gu(o,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?D1(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&N1(e,c)):a==="children"?typeof c=="string"?(o!=="textarea"||c!=="")&&Ma(e,c):typeof c=="number"&&Ma(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Aa.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Oe("scroll",e):c!=null&&wp(e,a,c,l))}switch(o){case"input":Wl(e),Cm(e,r,!1);break;case"textarea":Wl(e),wm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$o(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?us(e,!!r.multiple,a,!1):r.defaultValue!=null&&us(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Gi)}switch(o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)n2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(o=dr(Ya.current),dr(In.current),ei(t)){if(r=t.stateNode,o=t.memoizedProps,r[An]=t,(a=r.nodeValue!==o)&&(e=Vt,e!==null))switch(e.tag){case 3:Jl(r.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jl(r.nodeValue,o,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(o.nodeType===9?o:o.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return mt(t),null;case 13:if(De(Ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&Ut!==null&&t.mode&1&&!(t.flags&128))vg(),ys(),t.flags|=98560,a=!1;else if(a=ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[An]=t}else ys(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),a=!1}else vn!==null&&(Xu(vn),vn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=o,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?et===0&&(et=3):lh())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return Cs(),Vu(e,t),e===null&&Va(t.stateNode.containerInfo),mt(t),null;case 10:return Vp(t.type._context),mt(t),null;case 17:return $t(t.type)&&Yi(),mt(t),null;case 19:if(De(Ie),a=t.memoizedState,a===null)return mt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Js(a,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=tc(e),l!==null){for(t.flags|=128,Js(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=o,o=t.child;o!==null;)a=o,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ke(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ge()>ws&&(t.flags|=128,r=!0,Js(a,!1),t.lanes=4194304)}else{if(!r)if(e=tc(l),e!==null){if(t.flags|=128,r=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),Js(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ae)return mt(t),null}else 2*Ge()-a.renderingStartTime>ws&&o!==1073741824&&(t.flags|=128,r=!0,Js(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(o=a.last,o!==null?o.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ge(),t.sibling=null,o=Ie.current,ke(Ie,r?o&1|2:o&1),t):(mt(t),null);case 22:case 23:return ah(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ft&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Xy(e,t){switch(zp(t),t.tag){case 1:return $t(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cs(),De(Bt),De(xt),Zp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yp(t),null;case 13:if(De(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ys()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Ie),null;case 4:return Cs(),null;case 10:return Vp(t.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var oi=!1,ft=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,V=null;function os(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(r){Ue(e,t,r)}else o.current=null}function Wu(e,t,o){try{o()}catch(r){Ue(e,t,r)}}var ff=!1;function e8(e,t){if(ku=Vi,e=ag(),Pp(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{o.nodeType,a.nodeType}catch{o=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var v;p!==o||s!==0&&p.nodeType!==3||(i=l+s),p!==a||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)f=p,p=v;for(;;){if(p===e)break t;if(f===o&&++d===s&&(i=l),f===a&&++u===r&&(c=l),(v=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=v}o=i===-1||c===-1?null:{start:i,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ru={focusedElem:e,selectionRange:o},Vi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,T=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:xn(t.type,S),T);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(j){Ue(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return y=ff,ff=!1,y}function Ta(e,t,o){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Wu(t,o,a)}s=s.next}while(s!==r)}}function Nc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var r=o.create;o.destroy=r()}o=o.next}while(o!==t)}}function Ku(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function o2(e){var t=e.alternate;t!==null&&(e.alternate=null,o2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[Ka],delete t[Du],delete t[Ay],delete t[My])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function r2(e){return e.tag===5||e.tag===3||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,t,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(Gu(e,t,o),e=e.sibling;e!==null;)Gu(e,t,o),e=e.sibling}function Yu(e,t,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yu(e,t,o),e=e.sibling;e!==null;)Yu(e,t,o),e=e.sibling}var lt=null,gn=!1;function go(e,t,o){for(o=o.child;o!==null;)s2(e,t,o),o=o.sibling}function s2(e,t,o){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Sc,o)}catch{}switch(o.tag){case 5:ft||os(o,t);case 6:var r=lt,s=gn;lt=null,go(e,t,o),lt=r,gn=s,lt!==null&&(gn?(e=lt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):lt.removeChild(o.stateNode));break;case 18:lt!==null&&(gn?(e=lt,o=o.stateNode,e.nodeType===8?Ed(e.parentNode,o):e.nodeType===1&&Ed(e,o),Fa(e)):Ed(lt,o.stateNode));break;case 4:r=lt,s=gn,lt=o.stateNode.containerInfo,gn=!0,go(e,t,o),lt=r,gn=s;break;case 0:case 11:case 14:case 15:if(!ft&&(r=o.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Wu(o,t,l),s=s.next}while(s!==r)}go(e,t,o);break;case 1:if(!ft&&(os(o,t),r=o.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=o.memoizedProps,r.state=o.memoizedState,r.componentWillUnmount()}catch(i){Ue(o,t,i)}go(e,t,o);break;case 21:go(e,t,o);break;case 22:o.mode&1?(ft=(r=ft)||o.memoizedState!==null,go(e,t,o),ft=r):go(e,t,o);break;default:go(e,t,o)}}function gf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Jy),t.forEach(function(r){var s=c8.bind(null,e,r);o.has(r)||(o.add(r),r.then(s,s))})}}function fn(e,t){var o=t.deletions;if(o!==null)for(var r=0;r<o.length;r++){var s=o[r];try{var a=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:lt=i.stateNode,gn=!1;break e;case 3:lt=i.stateNode.containerInfo,gn=!0;break e;case 4:lt=i.stateNode.containerInfo,gn=!0;break e}i=i.return}if(lt===null)throw Error(A(160));s2(a,l,s),lt=null,gn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Ue(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a2(t,e),t=t.sibling}function a2(e,t){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(t,e),Dn(e),r&4){try{Ta(3,e,e.return),Nc(3,e)}catch(S){Ue(e,e.return,S)}try{Ta(5,e,e.return)}catch(S){Ue(e,e.return,S)}}break;case 1:fn(t,e),Dn(e),r&512&&o!==null&&os(o,o.return);break;case 5:if(fn(t,e),Dn(e),r&512&&o!==null&&os(o,o.return),e.flags&32){var s=e.stateNode;try{Ma(s,"")}catch(S){Ue(e,e.return,S)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=o!==null?o.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&E1(s,a),bu(i,l);var d=bu(i,a);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?D1(s,p):u==="dangerouslySetInnerHTML"?N1(s,p):u==="children"?Ma(s,p):wp(s,u,p,d)}switch(i){case"input":hu(s,a);break;case"textarea":k1(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?us(s,!!a.multiple,v,!1):f!==!!a.multiple&&(a.defaultValue!=null?us(s,!!a.multiple,a.defaultValue,!0):us(s,!!a.multiple,a.multiple?[]:"",!1))}s[Ka]=a}catch(S){Ue(e,e.return,S)}}break;case 6:if(fn(t,e),Dn(e),r&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(S){Ue(e,e.return,S)}}break;case 3:if(fn(t,e),Dn(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{Fa(t.containerInfo)}catch(S){Ue(e,e.return,S)}break;case 4:fn(t,e),Dn(e);break;case 13:fn(t,e),Dn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(rh=Ge())),r&4&&gf(e);break;case 22:if(u=o!==null&&o.memoizedState!==null,e.mode&1?(ft=(d=ft)||u,fn(t,e),ft=d):fn(t,e),Dn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(V=e,u=e.child;u!==null;){for(p=V=u;V!==null;){switch(f=V,v=f.child,f.tag){case 0:case 11:case 14:case 15:Ta(4,f,f.return);break;case 1:os(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,o=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){Ue(r,o,S)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){vf(p);continue}}v!==null?(v.return=f,V=v):vf(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{s=p.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=O1("display",l))}catch(S){Ue(e,e.return,S)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(S){Ue(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fn(t,e),Dn(e),r&4&&gf(e);break;case 21:break;default:fn(t,e),Dn(e)}}function Dn(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(r2(o)){var r=o;break e}o=o.return}throw Error(A(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ma(s,""),r.flags&=-33);var a=xf(e);Yu(e,a,s);break;case 3:case 4:var l=r.stateNode.containerInfo,i=xf(e);Gu(e,i,l);break;default:throw Error(A(161))}}catch(c){Ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t8(e,t,o){V=e,l2(e)}function l2(e,t,o){for(var r=(e.mode&1)!==0;V!==null;){var s=V,a=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||oi;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||ft;i=oi;var d=ft;if(oi=l,(ft=c)&&!d)for(V=s;V!==null;)l=V,c=l.child,l.tag===22&&l.memoizedState!==null?jf(s):c!==null?(c.return=l,V=c):jf(s);for(;a!==null;)V=a,l2(a),a=a.sibling;V=s,oi=i,ft=d}bf(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,V=a):bf(e)}}function bf(e){for(;V!==null;){var t=V;if(t.flags&8772){var o=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||Nc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ft)if(o===null)r.componentDidMount();else{var s=t.elementType===t.type?o.memoizedProps:xn(t.type,o.memoizedProps);r.componentDidUpdate(s,o.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ef(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}ef(t,l,o)}break;case 5:var i=t.stateNode;if(o===null&&t.flags&4){o=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&o.focus();break;case"img":c.src&&(o.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ft||t.flags&512&&Ku(t)}catch(f){Ue(t,t.return,f)}}if(t===e){V=null;break}if(o=t.sibling,o!==null){o.return=t.return,V=o;break}V=t.return}}function vf(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var o=t.sibling;if(o!==null){o.return=t.return,V=o;break}V=t.return}}function jf(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Nc(4,t)}catch(c){Ue(t,o,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){Ue(t,s,c)}}var a=t.return;try{Ku(t)}catch(c){Ue(t,a,c)}break;case 5:var l=t.return;try{Ku(t)}catch(c){Ue(t,l,c)}}}catch(c){Ue(t,t.return,c)}if(t===e){V=null;break}var i=t.sibling;if(i!==null){i.return=t.return,V=i;break}V=t.return}}var n8=Math.ceil,rc=io.ReactCurrentDispatcher,nh=io.ReactCurrentOwner,tn=io.ReactCurrentBatchConfig,ve=0,at=null,Ze=null,ct=0,Ft=0,rs=Ho(0),et=0,Xa=null,vr=0,Oc=0,oh=0,Ea=null,Ot=null,rh=0,ws=1/0,Kn=null,sc=!1,Zu=null,Do=null,ri=!1,To=null,ac=0,ka=0,qu=null,Oi=-1,Di=0;function yt(){return ve&6?Ge():Oi!==-1?Oi:Oi=Ge()}function Lo(e){return e.mode&1?ve&2&&ct!==0?ct&-ct:Iy.transition!==null?(Di===0&&(Di=V1()),Di):(e=_e,e!==0||(e=window.event,e=e===void 0?16:Q1(e.type)),e):1}function yn(e,t,o,r){if(50<ka)throw ka=0,qu=null,Error(A(185));cl(e,o,r),(!(ve&2)||e!==at)&&(e===at&&(!(ve&2)&&(Oc|=o),et===4&&_o(e,ct)),At(e,r),o===1&&ve===0&&!(t.mode&1)&&(ws=Ge()+500,Ec&&Uo()))}function At(e,t){var o=e.callbackNode;I6(e,t);var r=Ui(e,e===at?ct:0);if(r===0)o!==null&&km(o),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(o!=null&&km(o),t===1)e.tag===0?Py(yf.bind(null,e)):xg(yf.bind(null,e)),By(function(){!(ve&6)&&Uo()}),o=null;else{switch(W1(r)){case 1:o=Np;break;case 4:o=H1;break;case 16:o=Hi;break;case 536870912:o=U1;break;default:o=Hi}o=f2(o,i2.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function i2(e,t){if(Oi=-1,Di=0,ve&6)throw Error(A(327));var o=e.callbackNode;if(xs()&&e.callbackNode!==o)return null;var r=Ui(e,e===at?ct:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lc(e,r);else{t=r;var s=ve;ve|=2;var a=d2();(at!==e||ct!==t)&&(Kn=null,ws=Ge()+500,hr(e,t));do try{s8();break}catch(i){c2(e,i)}while(1);Up(),rc.current=a,ve=s,Ze!==null?t=0:(at=null,ct=0,t=et)}if(t!==0){if(t===2&&(s=Cu(e),s!==0&&(r=s,t=Qu(e,s))),t===1)throw o=Xa,hr(e,0),_o(e,r),At(e,Ge()),o;if(t===6)_o(e,r);else{if(s=e.current.alternate,!(r&30)&&!o8(s)&&(t=lc(e,r),t===2&&(a=Cu(e),a!==0&&(r=a,t=Qu(e,a))),t===1))throw o=Xa,hr(e,0),_o(e,r),At(e,Ge()),o;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:ar(e,Ot,Kn);break;case 3:if(_o(e,r),(r&130023424)===r&&(t=rh+500-Ge(),10<t)){if(Ui(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){yt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ou(ar.bind(null,e,Ot,Kn),t);break}ar(e,Ot,Kn);break;case 4:if(_o(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-jn(r);a=1<<l,l=t[l],l>s&&(s=l),r&=~a}if(r=s,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n8(r/1960))-r,10<r){e.timeoutHandle=Ou(ar.bind(null,e,Ot,Kn),r);break}ar(e,Ot,Kn);break;case 5:ar(e,Ot,Kn);break;default:throw Error(A(329))}}}return At(e,Ge()),e.callbackNode===o?i2.bind(null,e):null}function Qu(e,t){var o=Ea;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=lc(e,t),e!==2&&(t=Ot,Ot=o,t!==null&&Xu(t)),e}function Xu(e){Ot===null?Ot=e:Ot.push.apply(Ot,e)}function o8(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var r=0;r<o.length;r++){var s=o[r],a=s.getSnapshot;s=s.value;try{if(!Sn(a(),s))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _o(e,t){for(t&=~oh,t&=~Oc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-jn(t),r=1<<o;e[o]=-1,t&=~r}}function yf(e){if(ve&6)throw Error(A(327));xs();var t=Ui(e,0);if(!(t&1))return At(e,Ge()),null;var o=lc(e,t);if(e.tag!==0&&o===2){var r=Cu(e);r!==0&&(t=r,o=Qu(e,r))}if(o===1)throw o=Xa,hr(e,0),_o(e,t),At(e,Ge()),o;if(o===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,Ot,Kn),At(e,Ge()),null}function sh(e,t){var o=ve;ve|=1;try{return e(t)}finally{ve=o,ve===0&&(ws=Ge()+500,Ec&&Uo())}}function jr(e){To!==null&&To.tag===0&&!(ve&6)&&xs();var t=ve;ve|=1;var o=tn.transition,r=_e;try{if(tn.transition=null,_e=1,e)return e()}finally{_e=r,tn.transition=o,ve=t,!(ve&6)&&Uo()}}function ah(){Ft=rs.current,De(rs)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Ly(o)),Ze!==null)for(o=Ze.return;o!==null;){var r=o;switch(zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Cs(),De(Bt),De(xt),Zp();break;case 5:Yp(r);break;case 4:Cs();break;case 13:De(Ie);break;case 19:De(Ie);break;case 10:Vp(r.type._context);break;case 22:case 23:ah()}o=o.return}if(at=e,Ze=e=Bo(e.current,null),ct=Ft=t,et=0,Xa=null,oh=Oc=vr=0,Ot=Ea=null,cr!==null){for(t=0;t<cr.length;t++)if(o=cr[t],r=o.interleaved,r!==null){o.interleaved=null;var s=r.next,a=o.pending;if(a!==null){var l=a.next;a.next=s,r.next=l}o.pending=r}cr=null}return e}function c2(e,t){do{var o=Ze;try{if(Up(),ki.current=oc,nc){for(var r=ze.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}nc=!1}if(br=0,rt=Qe=ze=null,wa=!1,Za=0,nh.current=null,o===null||o.return===null){et=1,Xa=t,Ze=null;break}e:{var a=e,l=o.return,i=o,c=t;if(t=ct,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=lf(l);if(v!==null){v.flags&=-257,cf(v,l,i,a,t),v.mode&1&&af(a,d,t),t=v,c=d;var y=t.updateQueue;if(y===null){var S=new Set;S.add(c),t.updateQueue=S}else y.add(c);break e}else{if(!(t&1)){af(a,d,t),lh();break e}c=Error(A(426))}}else if(Ae&&i.mode&1){var T=lf(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),cf(T,l,i,a,t),Fp(_s(c,i));break e}}a=c=_s(c,i),et!==4&&(et=2),Ea===null?Ea=[a]:Ea.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Kg(a,c,t);Jm(a,g);break e;case 1:i=c;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Do===null||!Do.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var j=Gg(a,i,t);Jm(a,j);break e}}a=a.return}while(a!==null)}p2(o)}catch(C){t=C,Ze===o&&o!==null&&(Ze=o=o.return);continue}break}while(1)}function d2(){var e=rc.current;return rc.current=oc,e===null?oc:e}function lh(){(et===0||et===3||et===2)&&(et=4),at===null||!(vr&268435455)&&!(Oc&268435455)||_o(at,ct)}function lc(e,t){var o=ve;ve|=2;var r=d2();(at!==e||ct!==t)&&(Kn=null,hr(e,t));do try{r8();break}catch(s){c2(e,s)}while(1);if(Up(),ve=o,rc.current=r,Ze!==null)throw Error(A(261));return at=null,ct=0,et}function r8(){for(;Ze!==null;)u2(Ze)}function s8(){for(;Ze!==null&&!N6();)u2(Ze)}function u2(e){var t=m2(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?p2(e):Ze=t,nh.current=null}function p2(e){var t=e;do{var o=t.alternate;if(e=t.return,t.flags&32768){if(o=Xy(o,t),o!==null){o.flags&=32767,Ze=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Ze=null;return}}else if(o=Qy(o,t,Ft),o!==null){Ze=o;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);et===0&&(et=5)}function ar(e,t,o){var r=_e,s=tn.transition;try{tn.transition=null,_e=1,a8(e,t,o,r)}finally{tn.transition=s,_e=r}return null}function a8(e,t,o,r){do xs();while(To!==null);if(ve&6)throw Error(A(327));o=e.finishedWork;var s=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=o.lanes|o.childLanes;if(z6(e,a),e===at&&(Ze=at=null,ct=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ri||(ri=!0,f2(Hi,function(){return xs(),null})),a=(o.flags&15990)!==0,o.subtreeFlags&15990||a){a=tn.transition,tn.transition=null;var l=_e;_e=1;var i=ve;ve|=4,nh.current=null,e8(e,o),a2(o,e),Ty(Ru),Vi=!!ku,Ru=ku=null,e.current=o,t8(o),O6(),ve=i,_e=l,tn.transition=a}else e.current=o;if(ri&&(ri=!1,To=e,ac=s),a=e.pendingLanes,a===0&&(Do=null),B6(o.stateNode),At(e,Ge()),t!==null)for(r=e.onRecoverableError,o=0;o<t.length;o++)s=t[o],r(s.value,{componentStack:s.stack,digest:s.digest});if(sc)throw sc=!1,e=Zu,Zu=null,e;return ac&1&&e.tag!==0&&xs(),a=e.pendingLanes,a&1?e===qu?ka++:(ka=0,qu=e):ka=0,Uo(),null}function xs(){if(To!==null){var e=W1(ac),t=tn.transition,o=_e;try{if(tn.transition=null,_e=16>e?16:e,To===null)var r=!1;else{if(e=To,To=null,ac=0,ve&6)throw Error(A(331));var s=ve;for(ve|=4,V=e.current;V!==null;){var a=V,l=a.child;if(V.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(V=d;V!==null;){var u=V;switch(u.tag){case 0:case 11:case 15:Ta(8,u,a)}var p=u.child;if(p!==null)p.return=u,V=p;else for(;V!==null;){u=V;var f=u.sibling,v=u.return;if(o2(u),u===d){V=null;break}if(f!==null){f.return=v,V=f;break}V=v}}}var y=a.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}V=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,V=l;else e:for(;V!==null;){if(a=V,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ta(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,V=g;break e}V=a.return}}var h=e.current;for(V=h;V!==null;){l=V;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,V=m;else e:for(l=h;V!==null;){if(i=V,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Nc(9,i)}}catch(C){Ue(i,i.return,C)}if(i===l){V=null;break e}var j=i.sibling;if(j!==null){j.return=i.return,V=j;break e}V=i.return}}if(ve=s,Uo(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Sc,e)}catch{}r=!0}return r}finally{_e=o,tn.transition=t}}return!1}function Sf(e,t,o){t=_s(o,t),t=Kg(e,t,1),e=Oo(e,t,1),t=yt(),e!==null&&(cl(e,1,t),At(e,t))}function Ue(e,t,o){if(e.tag===3)Sf(e,e,o);else for(;t!==null;){if(t.tag===3){Sf(t,e,o);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Do===null||!Do.has(r))){e=_s(o,e),e=Gg(t,e,1),t=Oo(t,e,1),e=yt(),t!==null&&(cl(t,1,e),At(t,e));break}}t=t.return}}function l8(e,t,o){var r=e.pingCache;r!==null&&r.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&o,at===e&&(ct&o)===o&&(et===4||et===3&&(ct&130023424)===ct&&500>Ge()-rh?hr(e,0):oh|=o),At(e,t)}function h2(e,t){t===0&&(e.mode&1?(t=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):t=1);var o=yt();e=oo(e,t),e!==null&&(cl(e,t,o),At(e,o))}function i8(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),h2(e,o)}function c8(e,t){var o=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(o=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),h2(e,o)}var m2;m2=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Dt=!0;else{if(!(e.lanes&o)&&!(t.flags&128))return Dt=!1,qy(e,t,o);Dt=!!(e.flags&131072)}else Dt=!1,Ae&&t.flags&1048576&&gg(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var s=js(t,xt.current);fs(t,o),s=Qp(null,t,r,e,s,o);var a=Xp();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(r)?(a=!0,Zi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Kp(t),s.updater=kc,t.stateNode=s,s._reactInternals=t,Pu(t,r,e,o),t=Fu(null,t,r,!0,a,o)):(t.tag=0,Ae&&a&&Ip(t),jt(null,t,s,o),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=u8(r),e=xn(r,e),s){case 0:t=zu(null,t,r,e,o);break e;case 1:t=pf(null,t,r,e,o);break e;case 11:t=df(null,t,r,e,o);break e;case 14:t=uf(null,t,r,xn(r.type,e),o);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:xn(r,s),zu(e,t,r,s,o);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:xn(r,s),pf(e,t,r,s,o);case 3:e:{if(Qg(t),e===null)throw Error(A(387));r=t.pendingProps,a=t.memoizedState,s=a.element,yg(e,t),ec(t,r,null,o);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=_s(Error(A(423)),t),t=hf(e,t,r,o,s);break e}else if(r!==s){s=_s(Error(A(424)),t),t=hf(e,t,r,o,s);break e}else for(Ut=No(t.stateNode.containerInfo.firstChild),Vt=t,Ae=!0,vn=null,o=wg(t,null,r,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ys(),r===s){t=ro(e,t,o);break e}jt(e,t,r,o)}t=t.child}return t;case 5:return Tg(t),e===null&&$u(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,Nu(r,s)?l=null:a!==null&&Nu(r,a)&&(t.flags|=32),qg(e,t),jt(e,t,l,o),t.child;case 6:return e===null&&$u(t),null;case 13:return Xg(e,t,o);case 4:return Gp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ss(t,null,r,o):jt(e,t,r,o),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:xn(r,s),df(e,t,r,s,o);case 7:return jt(e,t,t.pendingProps,o),t.child;case 8:return jt(e,t,t.pendingProps.children,o),t.child;case 12:return jt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,ke(Xi,r._currentValue),r._currentValue=l,a!==null)if(Sn(a.value,l)){if(a.children===s.children&&!Bt.current){t=ro(e,t,o);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Jn(-1,o&-o),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=o,c=a.alternate,c!==null&&(c.lanes|=o),Au(a.return,o,t),i.lanes|=o;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(A(341));l.lanes|=o,i=l.alternate,i!==null&&(i.lanes|=o),Au(l,o,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}jt(e,t,s.children,o),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,fs(t,o),s=on(s),r=r(s),t.flags|=1,jt(e,t,r,o),t.child;case 14:return r=t.type,s=xn(r,t.pendingProps),s=xn(r.type,s),uf(e,t,r,s,o);case 15:return Yg(e,t,t.type,t.pendingProps,o);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:xn(r,s),Ni(e,t),t.tag=1,$t(r)?(e=!0,Zi(t)):e=!1,fs(t,o),Cg(t,r,s),Pu(t,r,s,o),Fu(null,t,r,!0,e,o);case 19:return Jg(e,t,o);case 22:return Zg(e,t,o)}throw Error(A(156,t.tag))};function f2(e,t){return F1(e,t)}function d8(e,t,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,o,r){return new d8(e,t,o,r)}function ih(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u8(e){if(typeof e=="function")return ih(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ep)return 11;if(e===kp)return 14}return 2}function Bo(e,t){var o=e.alternate;return o===null?(o=en(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Li(e,t,o,r,s,a){var l=2;if(r=e,typeof e=="function")ih(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yr:return mr(o.children,s,a,t);case Tp:l=8,s|=8;break;case iu:return e=en(12,o,t,s|2),e.elementType=iu,e.lanes=a,e;case cu:return e=en(13,o,t,s),e.elementType=cu,e.lanes=a,e;case du:return e=en(19,o,t,s),e.elementType=du,e.lanes=a,e;case _1:return Dc(o,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S1:l=10;break e;case C1:l=9;break e;case Ep:l=11;break e;case kp:l=14;break e;case jo:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=en(l,o,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function mr(e,t,o,r){return e=en(7,e,r,t),e.lanes=o,e}function Dc(e,t,o,r){return e=en(22,e,r,t),e.elementType=_1,e.lanes=o,e.stateNode={isHidden:!1},e}function $d(e,t,o){return e=en(6,e,null,t),e.lanes=o,e}function Ad(e,t,o){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p8(e,t,o,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ch(e,t,o,r,s,a,l,i,c){return e=new p8(e,t,o,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=en(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(a),e}function h8(e,t,o){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:o}}function x2(e){if(!e)return Ao;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var o=e.type;if($t(o))return fg(e,o,t)}return t}function g2(e,t,o,r,s,a,l,i,c){return e=ch(o,r,!0,e,s,a,l,i,c),e.context=x2(null),o=e.current,r=yt(),s=Lo(o),a=Jn(r,s),a.callback=t??null,Oo(o,a,s),e.current.lanes=s,cl(e,s,r),At(e,r),e}function Lc(e,t,o,r){var s=t.current,a=yt(),l=Lo(s);return o=x2(o),t.context===null?t.context=o:t.pendingContext=o,t=Jn(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Oo(s,t,l),e!==null&&(yn(e,s,l,a),Ei(e,s,l)),l}function ic(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function dh(e,t){Cf(e,t),(e=e.alternate)&&Cf(e,t)}function m8(){return null}var b2=typeof reportError=="function"?reportError:function(e){console.error(e)};function uh(e){this._internalRoot=e}Bc.prototype.render=uh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Lc(e,t,null,null)};Bc.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Lc(null,e,null,null)}),t[no]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Y1();e={blockedOn:null,target:e,priority:t};for(var o=0;o<Co.length&&t!==0&&t<Co[o].priority;o++);Co.splice(o,0,e),o===0&&q1(e)}};function ph(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _f(){}function f8(e,t,o,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var d=ic(l);a.call(d)}}var l=g2(t,r,e,0,null,!1,!1,"",_f);return e._reactRootContainer=l,e[no]=l.current,Va(e.nodeType===8?e.parentNode:e),jr(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var d=ic(c);i.call(d)}}var c=ch(e,0,!1,null,null,!1,!1,"",_f);return e._reactRootContainer=c,e[no]=c.current,Va(e.nodeType===8?e.parentNode:e),jr(function(){Lc(t,c,o,r)}),c}function Ac(e,t,o,r,s){var a=o._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var i=s;s=function(){var c=ic(l);i.call(c)}}Lc(t,l,e,s)}else l=f8(o,t,e,s,r);return ic(l)}K1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=pa(t.pendingLanes);o!==0&&(Op(t,o|1),At(t,Ge()),!(ve&6)&&(ws=Ge()+500,Uo()))}break;case 13:jr(function(){var r=oo(e,1);if(r!==null){var s=yt();yn(r,e,1,s)}}),dh(e,1)}};Dp=function(e){if(e.tag===13){var t=oo(e,134217728);if(t!==null){var o=yt();yn(t,e,134217728,o)}dh(e,134217728)}};G1=function(e){if(e.tag===13){var t=Lo(e),o=oo(e,t);if(o!==null){var r=yt();yn(o,e,t,r)}dh(e,t)}};Y1=function(){return _e};Z1=function(e,t){var o=_e;try{return _e=e,t()}finally{_e=o}};ju=function(e,t,o){switch(t){case"input":if(hu(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var r=o[t];if(r!==e&&r.form===e.form){var s=Tc(r);if(!s)throw Error(A(90));T1(r),hu(r,s)}}}break;case"textarea":k1(e,o);break;case"select":t=o.value,t!=null&&us(e,!!o.multiple,t,!1)}};$1=sh;A1=jr;var x8={usingClientEntryPoint:!1,Events:[ul,Xr,Tc,L1,B1,sh]},ea={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},g8={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:io.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=I1(e),e===null?null:e.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||m8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{Sc=si.inject(g8),Pn=si}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x8;Gt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ph(t))throw Error(A(200));return h8(e,t,null,o)};Gt.createRoot=function(e,t){if(!ph(e))throw Error(A(299));var o=!1,r="",s=b2;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ch(e,1,!1,null,null,o,!1,r,s),e[no]=t.current,Va(e.nodeType===8?e.parentNode:e),new uh(t)};Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=I1(t),e=e===null?null:e.stateNode,e};Gt.flushSync=function(e){return jr(e)};Gt.hydrate=function(e,t,o){if(!$c(t))throw Error(A(200));return Ac(null,e,t,!0,o)};Gt.hydrateRoot=function(e,t,o){if(!ph(e))throw Error(A(405));var r=o!=null&&o.hydratedSources||null,s=!1,a="",l=b2;if(o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(a=o.identifierPrefix),o.onRecoverableError!==void 0&&(l=o.onRecoverableError)),t=g2(t,null,e,1,o??null,s,!1,a,l),e[no]=t.current,Va(e),r)for(e=0;e<r.length;e++)o=r[e],s=o._getVersion,s=s(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,s]:t.mutableSourceEagerHydrationData.push(o,s);return new Bc(t)};Gt.render=function(e,t,o){if(!$c(t))throw Error(A(200));return Ac(null,e,t,!1,o)};Gt.unmountComponentAtNode=function(e){if(!$c(e))throw Error(A(40));return e._reactRootContainer?(jr(function(){Ac(null,null,e,!1,function(){e._reactRootContainer=null,e[no]=null})}),!0):!1};Gt.unstable_batchedUpdates=sh;Gt.unstable_renderSubtreeIntoContainer=function(e,t,o,r){if(!$c(o))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ac(e,t,o,!1,r)};Gt.version="18.2.0-next-9e3b772b8-20220608";function v2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v2)}catch(e){console.error(e)}}v2(),g1.exports=Gt;var Zn=g1.exports;const b8=lo(Zn),v8=a1({__proto__:null,default:b8},[Zn]);var wf=Zn;au.createRoot=wf.createRoot,au.hydrateRoot=wf.hydrateRoot;function j8(e,t){if(e==null)return{};var o={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(o[s]=e[s]);return o}function y8(e,t){if(e==null)return{};var o=j8(e,t),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ju(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function S8(e){if(Array.isArray(e))return Ju(e)}function C8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _8(e,t){if(e){if(typeof e=="string")return Ju(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ju(e,t)}}function w8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T8(e){return S8(e)||C8(e)||_8(e)||w8()}function Ja(e){"@babel/helpers - typeof";return Ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ja(e)}function E8(e,t){if(Ja(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(Ja(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k8(e){var t=E8(e,"string");return Ja(t)=="symbol"?t:String(t)}function j2(e,t,o){return t=k8(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ep(){return ep=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ep.apply(this,arguments)}function Tf(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,r)}return o}function ss(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Tf(Object(o),!0).forEach(function(r){j2(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Tf(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function R8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Md={};function N8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Md[t]||(Md[t]=R8(e)),Md[t]}function O8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=e.filter(function(a){return a!=="token"}),s=N8(r);return s.reduce(function(a,l){return ss(ss({},a),o[l])},t)}function Ef(e){return e.join(" ")}function D8(e,t){var o=0;return function(r){return o+=1,r.map(function(s,a){return y2({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(o,"-").concat(a)})})}}function y2(e){var t=e.node,o=e.stylesheet,r=e.style,s=r===void 0?{}:r,a=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=D8(o,a),f;if(!a)f=ss(ss({},i),{},{className:Ef(i.className)});else{var v=Object.keys(o).reduce(function(g,h){return h.split(".").forEach(function(m){g.includes(m)||g.push(m)}),g},[]),y=i.className&&i.className.includes("token")?["token"]:[],S=i.className&&y.concat(i.className.filter(function(g){return!v.includes(g)}));f=ss(ss({},i),{},{className:Ef(S)||void 0,style:O8(i.className,Object.assign({},i.style,s),o)})}var T=p(t.children);return H.createElement(d,ep({key:l},f),T)}}const L8=function(e,t){var o=e.listLanguages();return o.indexOf(t)!==-1};var B8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function kf(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,r)}return o}function $n(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?kf(Object(o),!0).forEach(function(r){j2(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):kf(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}var $8=/\n/g;function A8(e){return e.match($8)}function M8(e){var t=e.lines,o=e.startingLineNumber,r=e.style;return t.map(function(s,a){var l=a+o;return H.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(l):r},"".concat(l,`
`))})}function P8(e){var t=e.codeString,o=e.codeStyle,r=e.containerStyle,s=r===void 0?{float:"left",paddingRight:"10px"}:r,a=e.numberStyle,l=a===void 0?{}:a,i=e.startingLineNumber;return H.createElement("code",{style:Object.assign({},o,s)},M8({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function I8(e){return"".concat(e.toString().length,".25em")}function S2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function C2(e,t,o){var r={display:"inline-block",minWidth:I8(o),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,a=$n($n({},r),s);return a}function Bi(e){var t=e.children,o=e.lineNumber,r=e.lineNumberStyle,s=e.largestLineNumber,a=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,f=typeof i=="function"?i(o):i;if(f.className=d,o&&a){var v=C2(r,o,s);t.unshift(S2(o,v))}return p&u&&(f.style=$n($n({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function _2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var s=e[r];if(s.type==="text")o.push(Bi({children:[s],className:T8(new Set(t))}));else if(s.children){var a=t.concat(s.properties.className);_2(s.children,a).forEach(function(l){return o.push(l)})}}return o}function z8(e,t,o,r,s,a,l,i,c){var d,u=_2(e.value),p=[],f=-1,v=0;function y(C,x){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Bi({children:C,lineNumber:x,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:s,lineProps:o,className:_,showLineNumbers:r,wrapLongLines:c})}function S(C,x){if(r&&x&&s){var _=C2(i,x,l);C.unshift(S2(x,_))}return C}function T(C,x){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||_.length>0?y(C,x,_):S(C,x)}for(var g=function(){var x=u[v],_=x.children[0].value,k=A8(_);if(k){var R=_.split(`
`);R.forEach(function(O,B){var U=r&&p.length+a,K={type:"text",value:"".concat(O,`
`)};if(B===0){var ne=u.slice(f+1,v).concat(Bi({children:[K],className:x.properties.className})),we=T(ne,U);p.push(we)}else if(B===R.length-1){var je=u[v+1]&&u[v+1].children&&u[v+1].children[0],ee={type:"text",value:"".concat(O)};if(je){var $=Bi({children:[ee],className:x.properties.className});u.splice(v+1,0,$)}else{var P=[ee],I=T(P,U,x.properties.className);p.push(I)}}else{var W=[K],Y=T(W,U,x.properties.className);p.push(Y)}}),f=v}v++};v<u.length;)g();if(f!==u.length-1){var h=u.slice(f+1,u.length);if(h&&h.length){var m=r&&p.length+a,j=T(h,m);p.push(j)}}return t?p:(d=[]).concat.apply(d,p)}function F8(e){var t=e.rows,o=e.stylesheet,r=e.useInlineStyles;return t.map(function(s,a){return y2({node:s,stylesheet:o,useInlineStyles:r,key:"code-segement".concat(a)})})}function w2(e){return e&&typeof e.highlightAuto<"u"}function H8(e){var t=e.astGenerator,o=e.language,r=e.code,s=e.defaultCodeValue;if(w2(t)){var a=L8(t,o);return o==="text"?{value:s,language:"text"}:a?t.highlight(o,r):t.highlightAuto(r)}try{return o&&o!=="text"?{value:t.highlight(r,o)}:{value:s}}catch{return{value:s}}}function U8(e,t){return function(r){var s=r.language,a=r.children,l=r.style,i=l===void 0?t:l,c=r.customStyle,d=c===void 0?{}:c,u=r.codeTagProps,p=u===void 0?{className:s?"language-".concat(s):void 0,style:$n($n({},i['code[class*="language-"]']),i['code[class*="language-'.concat(s,'"]')])}:u,f=r.useInlineStyles,v=f===void 0?!0:f,y=r.showLineNumbers,S=y===void 0?!1:y,T=r.showInlineLineNumbers,g=T===void 0?!0:T,h=r.startingLineNumber,m=h===void 0?1:h,j=r.lineNumberContainerStyle,C=r.lineNumberStyle,x=C===void 0?{}:C,_=r.wrapLines,k=r.wrapLongLines,R=k===void 0?!1:k,O=r.lineProps,B=O===void 0?{}:O,U=r.renderer,K=r.PreTag,ne=K===void 0?"pre":K,we=r.CodeTag,je=we===void 0?"code":we,ee=r.code,$=ee===void 0?(Array.isArray(a)?a[0]:a)||"":ee,P=r.astGenerator,I=y8(r,B8);P=P||e;var W=S?H.createElement(P8,{containerStyle:j,codeStyle:p.style||{},numberStyle:x,startingLineNumber:m,codeString:$}):null,Y=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Te=w2(P)?"hljs":"prismjs",de=v?Object.assign({},I,{style:Object.assign({},Y,d)}):Object.assign({},I,{className:I.className?"".concat(Te," ").concat(I.className):Te,style:Object.assign({},d)});if(R?p.style=$n($n({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=$n($n({},p.style),{},{whiteSpace:"pre"}),!P)return H.createElement(ne,de,W,H.createElement(je,p,$));(_===void 0&&U||R)&&(_=!0),U=U||F8;var Se=[{type:"text",value:$}],ce=H8({astGenerator:P,language:s,code:$,defaultCodeValue:Se});ce.language===null&&(ce.value=Se);var Le=ce.value.length+m,ut=z8(ce,_,B,S,g,m,Le,x,R);return H.createElement(ne,de,H.createElement(je,p,!g&&W,U({rows:ut,stylesheet:i,useInlineStyles:v})))}}var V8=K8,W8=Object.prototype.hasOwnProperty;function K8(){for(var e={},t=0;t<arguments.length;t++){var o=arguments[t];for(var r in o)W8.call(o,r)&&(e[r]=o[r])}return e}var T2=E2,hh=E2.prototype;hh.space=null;hh.normal={};hh.property={};function E2(e,t,o){this.property=e,this.normal=t,o&&(this.space=o)}var Rf=V8,G8=T2,Y8=Z8;function Z8(e){for(var t=e.length,o=[],r=[],s=-1,a,l;++s<t;)a=e[s],o.push(a.property),r.push(a.normal),l=a.space;return new G8(Rf.apply(null,o),Rf.apply(null,r),l)}var mh=q8;function q8(e){return e.toLowerCase()}var k2=R2,ln=R2.prototype;ln.space=null;ln.attribute=null;ln.property=null;ln.boolean=!1;ln.booleanish=!1;ln.overloadedBoolean=!1;ln.number=!1;ln.commaSeparated=!1;ln.spaceSeparated=!1;ln.commaOrSpaceSeparated=!1;ln.mustUseProperty=!1;ln.defined=!1;function R2(e,t){this.property=e,this.attribute=t}var Hn={},Q8=0;Hn.boolean=Tr();Hn.booleanish=Tr();Hn.overloadedBoolean=Tr();Hn.number=Tr();Hn.spaceSeparated=Tr();Hn.commaSeparated=Tr();Hn.commaOrSpaceSeparated=Tr();function Tr(){return Math.pow(2,++Q8)}var N2=k2,Nf=Hn,O2=fh;fh.prototype=new N2;fh.prototype.defined=!0;var D2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],X8=D2.length;function fh(e,t,o,r){var s=-1,a;for(Of(this,"space",r),N2.call(this,e,t);++s<X8;)a=D2[s],Of(this,a,(o&Nf[a])===Nf[a])}function Of(e,t,o){o&&(e[t]=o)}var Df=mh,J8=T2,eS=O2,hl=tS;function tS(e){var t=e.space,o=e.mustUseProperty||[],r=e.attributes||{},s=e.properties,a=e.transform,l={},i={},c,d;for(c in s)d=new eS(c,a(r,c),s[c],t),o.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[Df(c)]=c,i[Df(d.attribute)]=c;return new J8(l,i,t)}var nS=hl,oS=nS({space:"xlink",transform:rS,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function rS(e,t){return"xlink:"+t.slice(5).toLowerCase()}var sS=hl,aS=sS({space:"xml",transform:lS,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function lS(e,t){return"xml:"+t.slice(3).toLowerCase()}var iS=cS;function cS(e,t){return t in e?e[t]:t}var dS=iS,L2=uS;function uS(e,t){return dS(e,t.toLowerCase())}var pS=hl,hS=L2,mS=pS({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:hS,properties:{xmlns:null,xmlnsXLink:null}}),xh=Hn,fS=hl,Rt=xh.booleanish,Zt=xh.number,rr=xh.spaceSeparated,xS=fS({transform:gS,properties:{ariaActiveDescendant:null,ariaAtomic:Rt,ariaAutoComplete:null,ariaBusy:Rt,ariaChecked:Rt,ariaColCount:Zt,ariaColIndex:Zt,ariaColSpan:Zt,ariaControls:rr,ariaCurrent:null,ariaDescribedBy:rr,ariaDetails:null,ariaDisabled:Rt,ariaDropEffect:rr,ariaErrorMessage:null,ariaExpanded:Rt,ariaFlowTo:rr,ariaGrabbed:Rt,ariaHasPopup:null,ariaHidden:Rt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:rr,ariaLevel:Zt,ariaLive:null,ariaModal:Rt,ariaMultiLine:Rt,ariaMultiSelectable:Rt,ariaOrientation:null,ariaOwns:rr,ariaPlaceholder:null,ariaPosInSet:Zt,ariaPressed:Rt,ariaReadOnly:Rt,ariaRelevant:null,ariaRequired:Rt,ariaRoleDescription:rr,ariaRowCount:Zt,ariaRowIndex:Zt,ariaRowSpan:Zt,ariaSelected:Rt,ariaSetSize:Zt,ariaSort:null,ariaValueMax:Zt,ariaValueMin:Zt,ariaValueNow:Zt,ariaValueText:null,role:null}});function gS(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Ds=Hn,bS=hl,vS=L2,he=Ds.boolean,jS=Ds.overloadedBoolean,ta=Ds.booleanish,Ne=Ds.number,vt=Ds.spaceSeparated,ai=Ds.commaSeparated,yS=bS({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:vS,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ai,acceptCharset:vt,accessKey:vt,action:null,allow:null,allowFullScreen:he,allowPaymentRequest:he,allowUserMedia:he,alt:null,as:null,async:he,autoCapitalize:null,autoComplete:vt,autoFocus:he,autoPlay:he,capture:he,charSet:null,checked:he,cite:null,className:vt,cols:Ne,colSpan:null,content:null,contentEditable:ta,controls:he,controlsList:vt,coords:Ne|ai,crossOrigin:null,data:null,dateTime:null,decoding:null,default:he,defer:he,dir:null,dirName:null,disabled:he,download:jS,draggable:ta,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:he,formTarget:null,headers:vt,height:Ne,hidden:he,high:Ne,href:null,hrefLang:null,htmlFor:vt,httpEquiv:vt,id:null,imageSizes:null,imageSrcSet:ai,inputMode:null,integrity:null,is:null,isMap:he,itemId:null,itemProp:vt,itemRef:vt,itemScope:he,itemType:vt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:he,low:Ne,manifest:null,max:null,maxLength:Ne,media:null,method:null,min:null,minLength:Ne,multiple:he,muted:he,name:null,nonce:null,noModule:he,noValidate:he,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:he,optimum:Ne,pattern:null,ping:vt,placeholder:null,playsInline:he,poster:null,preload:null,readOnly:he,referrerPolicy:null,rel:vt,required:he,reversed:he,rows:Ne,rowSpan:Ne,sandbox:vt,scope:null,scoped:he,seamless:he,selected:he,shape:null,size:Ne,sizes:null,slot:null,span:Ne,spellCheck:ta,src:null,srcDoc:null,srcLang:null,srcSet:ai,start:Ne,step:null,style:null,tabIndex:Ne,target:null,title:null,translate:null,type:null,typeMustMatch:he,useMap:null,value:ta,width:Ne,wrap:null,align:null,aLink:null,archive:vt,axis:null,background:null,bgColor:null,border:Ne,borderColor:null,bottomMargin:Ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:he,declare:he,event:null,face:null,frame:null,frameBorder:null,hSpace:Ne,leftMargin:Ne,link:null,longDesc:null,lowSrc:null,marginHeight:Ne,marginWidth:Ne,noResize:he,noHref:he,noShade:he,noWrap:he,object:null,profile:null,prompt:null,rev:null,rightMargin:Ne,rules:null,scheme:null,scrolling:ta,standby:null,summary:null,text:null,topMargin:Ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:he,disableRemotePlayback:he,prefix:null,property:null,results:Ne,security:null,unselectable:null}}),SS=Y8,CS=oS,_S=aS,wS=mS,TS=xS,ES=yS,kS=SS([_S,CS,wS,TS,ES]),RS=mh,NS=O2,OS=k2,gh="data",DS=$S,LS=/^data[-\w.:]+$/i,B2=/-[a-z]/g,BS=/[A-Z]/g;function $S(e,t){var o=RS(t),r=t,s=OS;return o in e.normal?e.property[e.normal[o]]:(o.length>4&&o.slice(0,4)===gh&&LS.test(t)&&(t.charAt(4)==="-"?r=AS(t):t=MS(t),s=NS),new s(r,t))}function AS(e){var t=e.slice(5).replace(B2,IS);return gh+t.charAt(0).toUpperCase()+t.slice(1)}function MS(e){var t=e.slice(4);return B2.test(t)?e:(t=t.replace(BS,PS),t.charAt(0)!=="-"&&(t="-"+t),gh+t)}function PS(e){return"-"+e.toLowerCase()}function IS(e){return e.charAt(1).toUpperCase()}var zS=FS,Lf=/[#.]/g;function FS(e,t){for(var o=e||"",r=t||"div",s={},a=0,l,i,c;a<o.length;)Lf.lastIndex=a,c=Lf.exec(o),l=o.slice(a,c?c.index:o.length),l&&(i?i==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:r=l,a+=l.length),c&&(i=c[0],a++);return{type:"element",tagName:r,properties:s,children:[]}}var bh={};bh.parse=VS;bh.stringify=WS;var Bf="",HS=" ",US=/[ \t\n\r\f]+/g;function VS(e){var t=String(e||Bf).trim();return t===Bf?[]:t.split(US)}function WS(e){return e.join(HS).trim()}var vh={};vh.parse=KS;vh.stringify=GS;var tp=",",$f=" ",ma="";function KS(e){for(var t=[],o=String(e||ma),r=o.indexOf(tp),s=0,a=!1,l;!a;)r===-1&&(r=o.length,a=!0),l=o.slice(s,r).trim(),(l||!a)&&t.push(l),s=r+1,r=o.indexOf(tp,s);return t}function GS(e,t){var o=t||{},r=o.padLeft===!1?ma:$f,s=o.padRight?$f:ma;return e[e.length-1]===ma&&(e=e.concat(ma)),e.join(s+tp+r).trim()}var YS=DS,Af=mh,ZS=zS,Mf=bh.parse,Pf=vh.parse,qS=XS,QS={}.hasOwnProperty;function XS(e,t,o){var r=o?o7(o):null;return s;function s(l,i){var c=ZS(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=r&&QS.call(r,u)?r[u]:u,i&&JS(i,c)&&(d.unshift(i),i=null),i)for(p in i)a(c.properties,p,i[p]);return $2(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(l,i,c){var d,u,p;c==null||c!==c||(d=YS(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=Mf(p):d.commaSeparated?p=Pf(p):d.commaOrSpaceSeparated&&(p=Mf(Pf(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=n7(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=t7(d,u,p))}}function JS(e,t){return typeof e=="string"||"length"in e||e7(t.tagName,e)}function e7(e,t){var o=t.type;return e==="input"||!o||typeof o!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(o=o.toLowerCase(),e==="button"?o!=="menu"&&o!=="submit"&&o!=="reset"&&o!=="button":"value"in t)}function $2(e,t){var o,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(o=-1,r=t.length;++o<r;)$2(e,t[o]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function t7(e,t,o){var r,s,a;if(typeof o!="object"||!("length"in o))return If(e,t,o);for(s=o.length,r=-1,a=[];++r<s;)a[r]=If(e,t,o[r]);return a}function If(e,t,o){var r=o;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||Af(o)===Af(t))&&(r=!0),r}function n7(e){var t=[],o;for(o in e)t.push([o,e[o]].join(": "));return t.join("; ")}function o7(e){for(var t=e.length,o=-1,r={},s;++o<t;)s=e[o],r[s.toLowerCase()]=s;return r}var r7=kS,s7=qS,A2=s7(r7,"div");A2.displayName="html";var a7=A2,l7=a7;const i7="Æ",c7="&",d7="Á",u7="Â",p7="À",h7="Å",m7="Ã",f7="Ä",x7="©",g7="Ç",b7="Ð",v7="É",j7="Ê",y7="È",S7="Ë",C7=">",_7="Í",w7="Î",T7="Ì",E7="Ï",k7="<",R7="Ñ",N7="Ó",O7="Ô",D7="Ò",L7="Ø",B7="Õ",$7="Ö",A7='"',M7="®",P7="Þ",I7="Ú",z7="Û",F7="Ù",H7="Ü",U7="Ý",V7="á",W7="â",K7="´",G7="æ",Y7="à",Z7="&",q7="å",Q7="ã",X7="ä",J7="¦",e9="ç",t9="¸",n9="¢",o9="©",r9="¤",s9="°",a9="÷",l9="é",i9="ê",c9="è",d9="ð",u9="ë",p9="½",h9="¼",m9="¾",f9=">",x9="í",g9="î",b9="¡",v9="ì",j9="¿",y9="ï",S9="«",C9="<",_9="¯",w9="µ",T9="·",E9=" ",k9="¬",R9="ñ",N9="ó",O9="ô",D9="ò",L9="ª",B9="º",$9="ø",A9="õ",M9="ö",P9="¶",I9="±",z9="£",F9='"',H9="»",U9="®",V9="§",W9="­",K9="¹",G9="²",Y9="³",Z9="ß",q9="þ",Q9="×",X9="ú",J9="û",eC="ù",tC="¨",nC="ü",oC="ý",rC="¥",sC="ÿ",aC={AElig:i7,AMP:c7,Aacute:d7,Acirc:u7,Agrave:p7,Aring:h7,Atilde:m7,Auml:f7,COPY:x7,Ccedil:g7,ETH:b7,Eacute:v7,Ecirc:j7,Egrave:y7,Euml:S7,GT:C7,Iacute:_7,Icirc:w7,Igrave:T7,Iuml:E7,LT:k7,Ntilde:R7,Oacute:N7,Ocirc:O7,Ograve:D7,Oslash:L7,Otilde:B7,Ouml:$7,QUOT:A7,REG:M7,THORN:P7,Uacute:I7,Ucirc:z7,Ugrave:F7,Uuml:H7,Yacute:U7,aacute:V7,acirc:W7,acute:K7,aelig:G7,agrave:Y7,amp:Z7,aring:q7,atilde:Q7,auml:X7,brvbar:J7,ccedil:e9,cedil:t9,cent:n9,copy:o9,curren:r9,deg:s9,divide:a9,eacute:l9,ecirc:i9,egrave:c9,eth:d9,euml:u9,frac12:p9,frac14:h9,frac34:m9,gt:f9,iacute:x9,icirc:g9,iexcl:b9,igrave:v9,iquest:j9,iuml:y9,laquo:S9,lt:C9,macr:_9,micro:w9,middot:T9,nbsp:E9,not:k9,ntilde:R9,oacute:N9,ocirc:O9,ograve:D9,ordf:L9,ordm:B9,oslash:$9,otilde:A9,ouml:M9,para:P9,plusmn:I9,pound:z9,quot:F9,raquo:H9,reg:U9,sect:V9,shy:W9,sup1:K9,sup2:G9,sup3:Y9,szlig:Z9,thorn:q9,times:Q9,uacute:X9,ucirc:J9,ugrave:eC,uml:tC,uuml:nC,yacute:oC,yen:rC,yuml:sC},lC={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var M2=iC;function iC(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var cC=dC;function dC(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var uC=pC;function pC(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var hC=uC,mC=M2,fC=xC;function xC(e){return hC(e)||mC(e)}var li,gC=59,bC=vC;function vC(e){var t="&"+e+";",o;return li=li||document.createElement("i"),li.innerHTML=t,o=li.textContent,o.charCodeAt(o.length-1)===gC&&e!=="semi"||o===t?!1:o}var zf=aC,Ff=lC,jC=M2,yC=cC,P2=fC,SC=bC,CC=AC,_C={}.hasOwnProperty,Fr=String.fromCharCode,wC=Function.prototype,Hf={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},TC=9,Uf=10,EC=12,kC=32,Vf=38,RC=59,NC=60,OC=61,DC=35,LC=88,BC=120,$C=65533,Vr="named",jh="hexadecimal",yh="decimal",Sh={};Sh[jh]=16;Sh[yh]=10;var Mc={};Mc[Vr]=P2;Mc[yh]=jC;Mc[jh]=yC;var I2=1,z2=2,F2=3,H2=4,U2=5,np=6,V2=7,Vo={};Vo[I2]="Named character references must be terminated by a semicolon";Vo[z2]="Numeric character references must be terminated by a semicolon";Vo[F2]="Named character references cannot be empty";Vo[H2]="Numeric character references cannot be empty";Vo[U2]="Named character references must be known";Vo[np]="Numeric character references cannot be disallowed";Vo[V2]="Numeric character references cannot be outside the permissible Unicode range";function AC(e,t){var o={},r,s;t||(t={});for(s in Hf)r=t[s],o[s]=r??Hf[s];return(o.position.indent||o.position.start)&&(o.indent=o.position.indent||[],o.position=o.position.start),MC(e,o)}function MC(e,t){var o=t.additional,r=t.nonTerminated,s=t.text,a=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],f=e.length,v=0,y=-1,S=u.column||1,T=u.line||1,g="",h=[],m,j,C,x,_,k,R,O,B,U,K,ne,we,je,ee,$,P,I,W;for(typeof o=="string"&&(o=o.charCodeAt(0)),$=Y(),O=l?Te:wC,v--,f++;++v<f;)if(_===Uf&&(S=p[y]||1),_=e.charCodeAt(v),_===Vf){if(R=e.charCodeAt(v+1),R===TC||R===Uf||R===EC||R===kC||R===Vf||R===NC||R!==R||o&&R===o){g+=Fr(_),S++;continue}for(we=v+1,ne=we,W=we,R===DC?(W=++ne,R=e.charCodeAt(W),R===LC||R===BC?(je=jh,W=++ne):je=yh):je=Vr,m="",K="",x="",ee=Mc[je],W--;++W<f&&(R=e.charCodeAt(W),!!ee(R));)x+=Fr(R),je===Vr&&_C.call(zf,x)&&(m=x,K=zf[x]);C=e.charCodeAt(W)===RC,C&&(W++,j=je===Vr?SC(x):!1,j&&(m=x,K=j)),I=1+W-we,!C&&!r||(x?je===Vr?(C&&!K?O(U2,1):(m!==x&&(W=ne+m.length,I=1+W-ne,C=!1),C||(B=m?I2:F2,t.attribute?(R=e.charCodeAt(W),R===OC?(O(B,I),K=null):P2(R)?K=null:O(B,I)):O(B,I))),k=K):(C||O(z2,I),k=parseInt(x,Sh[je]),PC(k)?(O(V2,I),k=Fr($C)):k in Ff?(O(np,I),k=Ff[k]):(U="",IC(k)&&O(np,I),k>65535&&(k-=65536,U+=Fr(k>>>10|55296),k=56320|k&1023),k=U+Fr(k))):je!==Vr&&O(H2,I)),k?(de(),$=Y(),v=W-1,S+=W-we+1,h.push(k),P=Y(),P.offset++,a&&a.call(c,k,{start:$,end:P},e.slice(we-1,W)),$=P):(x=e.slice(we-1,W),g+=x,S+=x.length,v=W-1)}else _===10&&(T++,y++,S=0),_===_?(g+=Fr(_),S++):de();return h.join("");function Y(){return{line:T,column:S,offset:v+(u.offset||0)}}function Te(Se,ce){var Le=Y();Le.column+=ce,Le.offset+=ce,l.call(d,Vo[Se],Le,Se)}function de(){g&&(h.push(g),s&&s.call(i,g,{start:$,end:Y()}),g="")}}function PC(e){return e>=55296&&e<=57343||e>1114111}function IC(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var W2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var o=function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,l={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof c?new c(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++a}),h.__id},clone:function h(m,j){j=j||{};var C,x;switch(i.util.type(m)){case"Object":if(x=i.util.objId(m),j[x])return j[x];C={},j[x]=C;for(var _ in m)m.hasOwnProperty(_)&&(C[_]=h(m[_],j));return C;case"Array":return x=i.util.objId(m),j[x]?j[x]:(C=[],j[x]=C,m.forEach(function(k,R){C[R]=h(k,j)}),C);default:return m}},getLanguage:function(h){for(;h;){var m=s.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var j in m)if(m[j].src==h)return m[j]}return null}},isActive:function(h,m,j){for(var C="no-"+m;h;){var x=h.classList;if(x.contains(m))return!0;if(x.contains(C))return!1;h=h.parentElement}return!!j}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,m){var j=i.util.clone(i.languages[h]);for(var C in m)j[C]=m[C];return j},insertBefore:function(h,m,j,C){C=C||i.languages;var x=C[h],_={};for(var k in x)if(x.hasOwnProperty(k)){if(k==m)for(var R in j)j.hasOwnProperty(R)&&(_[R]=j[R]);j.hasOwnProperty(k)||(_[k]=x[k])}var O=C[h];return C[h]=_,i.languages.DFS(i.languages,function(B,U){U===O&&B!=h&&(this[B]=_)}),_},DFS:function h(m,j,C,x){x=x||{};var _=i.util.objId;for(var k in m)if(m.hasOwnProperty(k)){j.call(m,k,m[k],C||k);var R=m[k],O=i.util.type(R);O==="Object"&&!x[_(R)]?(x[_(R)]=!0,h(R,j,null,x)):O==="Array"&&!x[_(R)]&&(x[_(R)]=!0,h(R,j,k,x))}}},plugins:{},highlightAll:function(h,m){i.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,j){var C={callback:j,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var x=0,_;_=C.elements[x++];)i.highlightElement(_,m===!0,C.callback)},highlightElement:function(h,m,j){var C=i.util.getLanguage(h),x=i.languages[C];i.util.setLanguage(h,C);var _=h.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(_,C);var k=h.textContent,R={element:h,language:C,grammar:x,code:k};function O(U){R.highlightedCode=U,i.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,i.hooks.run("after-highlight",R),i.hooks.run("complete",R),j&&j.call(R.element)}if(i.hooks.run("before-sanity-check",R),_=R.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!R.code){i.hooks.run("complete",R),j&&j.call(R.element);return}if(i.hooks.run("before-highlight",R),!R.grammar){O(i.util.encode(R.code));return}if(m&&r.Worker){var B=new Worker(i.filename);B.onmessage=function(U){O(U.data)},B.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else O(i.highlight(R.code,R.grammar,R.language))},highlight:function(h,m,j){var C={code:h,grammar:m,language:j};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,m){var j=m.rest;if(j){for(var C in j)m[C]=j[C];delete m.rest}var x=new p;return f(x,x.head,h),u(h,x,m,x.head,0),y(x)},hooks:{all:{},add:function(h,m){var j=i.hooks.all;j[h]=j[h]||[],j[h].push(m)},run:function(h,m){var j=i.hooks.all[h];if(!(!j||!j.length))for(var C=0,x;x=j[C++];)x(m)}},Token:c};r.Prism=i;function c(h,m,j,C){this.type=h,this.content=m,this.alias=j,this.length=(C||"").length|0}c.stringify=function h(m,j){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(O){C+=h(O,j)}),C}var x={type:m.type,content:h(m.content,j),tag:"span",classes:["token",m.type],attributes:{},language:j},_=m.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(x.classes,_):x.classes.push(_)),i.hooks.run("wrap",x);var k="";for(var R in x.attributes)k+=" "+R+'="'+(x.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+k+">"+x.content+"</"+x.tag+">"};function d(h,m,j,C){h.lastIndex=m;var x=h.exec(j);if(x&&C&&x[1]){var _=x[1].length;x.index+=_,x[0]=x[0].slice(_)}return x}function u(h,m,j,C,x,_){for(var k in j)if(!(!j.hasOwnProperty(k)||!j[k])){var R=j[k];R=Array.isArray(R)?R:[R];for(var O=0;O<R.length;++O){if(_&&_.cause==k+","+O)return;var B=R[O],U=B.inside,K=!!B.lookbehind,ne=!!B.greedy,we=B.alias;if(ne&&!B.pattern.global){var je=B.pattern.toString().match(/[imsuy]*$/)[0];B.pattern=RegExp(B.pattern.source,je+"g")}for(var ee=B.pattern||B,$=C.next,P=x;$!==m.tail&&!(_&&P>=_.reach);P+=$.value.length,$=$.next){var I=$.value;if(m.length>h.length)return;if(!(I instanceof c)){var W=1,Y;if(ne){if(Y=d(ee,P,h,K),!Y||Y.index>=h.length)break;var ce=Y.index,Te=Y.index+Y[0].length,de=P;for(de+=$.value.length;ce>=de;)$=$.next,de+=$.value.length;if(de-=$.value.length,P=de,$.value instanceof c)continue;for(var Se=$;Se!==m.tail&&(de<Te||typeof Se.value=="string");Se=Se.next)W++,de+=Se.value.length;W--,I=h.slice(P,de),Y.index-=P}else if(Y=d(ee,0,I,K),!Y)continue;var ce=Y.index,Le=Y[0],ut=I.slice(0,ce),Tt=I.slice(ce+Le.length),fe=P+I.length;_&&fe>_.reach&&(_.reach=fe);var Be=$.prev;ut&&(Be=f(m,Be,ut),P+=ut.length),v(m,Be,W);var nt=new c(k,U?i.tokenize(Le,U):Le,we,Le);if($=f(m,Be,nt),Tt&&f(m,$,Tt),W>1){var zt={cause:k+","+O,reach:fe};u(h,m,j,$.prev,P,zt),_&&zt.reach>_.reach&&(_.reach=zt.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,j){var C=m.next,x={value:j,prev:m,next:C};return m.next=x,C.prev=x,h.length++,x}function v(h,m,j){for(var C=m.next,x=0;x<j&&C!==h.tail;x++)C=C.next;m.next=C,C.prev=m,h.length-=x}function y(h){for(var m=[],j=h.head.next;j!==h.tail;)m.push(j.value),j=j.next;return m}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(h){var m=JSON.parse(h.data),j=m.language,C=m.code,x=m.immediateClose;r.postMessage(i.highlight(C,i.languages[j],j)),x&&r.close()},!1)),i;var S=i.util.currentScript();S&&(i.filename=S.src,S.hasAttribute("data-manual")&&(i.manual=!0));function T(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return i}(t);e.exports&&(e.exports=o),typeof Pi<"u"&&(Pi.Prism=o)})(W2);var zC=W2.exports,FC=Ch;Ch.displayName="markup";Ch.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Ch(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(o,r){var s={};s["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var l={};l[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,o){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:e.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var K2=_h;_h.displayName="css";_h.aliases=[];function _h(e){(function(t){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const HC=lo(K2);var UC=wh;wh.displayName="clike";wh.aliases=[];function wh(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var VC=Th;Th.displayName="javascript";Th.aliases=["js"];function Th(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var fa=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Pi=="object"?Pi:{},WC=l_();fa.Prism={manual:!0,disableWorkerMessageHandler:!0};var KC=l7,GC=CC,G2=zC,YC=FC,ZC=K2,qC=UC,QC=VC;WC();var Eh={}.hasOwnProperty;function Y2(){}Y2.prototype=G2;var qe=new Y2,XC=qe;qe.highlight=e_;qe.register=ml;qe.alias=JC;qe.registered=t_;qe.listLanguages=n_;ml(YC);ml(ZC);ml(qC);ml(QC);qe.util.encode=s_;qe.Token.stringify=o_;function ml(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");qe.languages[e.displayName]===void 0&&e(qe)}function JC(e,t){var o=qe.languages,r=e,s,a,l,i;t&&(r={},r[e]=t);for(s in r)for(a=r[s],a=typeof a=="string"?[a]:a,l=a.length,i=-1;++i<l;)o[a[i]]=o[s]}function e_(e,t){var o=G2.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(qe.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Eh.call(qe.languages,t))r=qe.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return o.call(this,e,r,t)}function t_(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Eh.call(qe.languages,e)}function n_(){var e=qe.languages,t=[],o;for(o in e)Eh.call(e,o)&&typeof e[o]=="object"&&t.push(o);return t}function o_(e,t,o){var r;return typeof e=="string"?{type:"text",value:e}:qe.util.type(e)==="Array"?r_(e,t):(r={type:e.type,content:qe.Token.stringify(e.content,t,o),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:o},e.alias&&(r.classes=r.classes.concat(e.alias)),qe.hooks.run("wrap",r),KC(r.tag+"."+r.classes.join("."),a_(r.attributes),r.content))}function r_(e,t){for(var o=[],r=e.length,s=-1,a;++s<r;)a=e[s],a!==""&&a!==null&&a!==void 0&&o.push(a);for(s=-1,r=o.length;++s<r;)a=o[s],o[s]=qe.Token.stringify(a,t,o);return o}function s_(e){return e}function a_(e){var t;for(t in e)e[t]=GC(e[t]);return e}function l_(){var e="Prism"in fa,t=e?fa.Prism:void 0;return o;function o(){e?fa.Prism=t:delete fa.Prism,e=void 0,t=void 0}}const kh=lo(XC);var Rh=U8(kh,{});Rh.registerLanguage=function(e,t){return kh.register(t)};Rh.alias=function(e,t){return kh.alias(e,t)};const Er=Rh;var i_=Nh;Nh.displayName="bash";Nh.aliases=["shell"];function Nh(e){(function(t){var o="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:r,environment:{pattern:RegExp("\\$"+o),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+o),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+o),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+o),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,i=0;i<a.length;i++)l[a[i]]=t.languages.bash[a[i]];t.languages.shell=t.languages.bash})(e)}const c_=lo(i_);var d_=Oh;Oh.displayName="json";Oh.aliases=["webmanifest"];function Oh(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const u_=lo(d_);var p_=Dh;Dh.displayName="jsx";Dh.aliases=[];function Dh(e){(function(t){var o=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return a}),RegExp(d,u)}a=l(a).source,t.languages.jsx=t.languages.extend("markup",o),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=o.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var f=d[p],v=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:i(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:v=!0),(v||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var y=i(f);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(y+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(y=i(d[p-1])+y,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",y,null,y)}f.content&&typeof f.content!="string"&&c(f.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const h_=lo(p_);var m_=Lh;Lh.displayName="scss";Lh.aliases=[];function Lh(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const f_=lo(m_);var x_=Bh;Bh.displayName="yaml";Bh.aliases=["yml"];function Bh(e){(function(t){var o=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,s="(?:"+r.source+"(?:[ 	]+"+o.source+")?|"+o.source+"(?:[ 	]+"+r.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return s})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:o,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const g_=lo(x_);function Z2(e){return typeof e=="boolean"}function kr(e){return typeof e=="string"}function $h(e){return typeof e=="number"}function Ah(e){return Number.isInteger(e)}function Rr(e){return Array.isArray(e)}function Pc(e){return typeof e=="function"}function b_(e){return e instanceof RegExp}function Wo(e){return typeof e=="object"&&!Rr(e)&&!Q2(e)}function q2(e){return kr(e)||$h(e)||Z2(e)}function v_(e){return e===void 0}function Q2(e){return e===null}function ge(e){return!(v_(e)||Q2(e))}function Ic(e){return!ge(e)}function X2(...e){throw new Error(e.join(""))}const Ts=(e,...t)=>Pc(e)?e(...t):e;function Ce(){}const J2=e=>e;function j_(){return Intl.DateTimeFormat().resolvedOptions().locale}let Mh={locale:j_(),currency:"GBP",currencySign:"£",thousands:","};const y_=(e,t,o=1)=>{const r=t<e?-Math.abs(o):o;return Array(1+Math.floor(Math.abs((t-e)/o))).fill(e).map((s,a)=>s+a*r)};function S_(e,t={}){return new Intl.NumberFormat(t.locale||Mh.locale,t).format(e)}function C_(e,t={}){return S_(e,{style:"currency",currency:Mh.currency,...t})}function xa(e,t=Mh.thousands){if(Ic(e))return"";for(var o=e.toString().split("."),r=/(\d+)(\d{3})/;r.test(o[0]);)o[0]=o[0].replace(r,`$1${t}$2`);return o.join(".")}function Ph(e,t=/,\s*|\s+/){return Ic(e)?[]:kr(e)?e.length?e.split(t):[]:Rr(e)?e:[e]}function el(e,t=!0,o={}){return Wo(e)?e:Ph(e).reduce((r,s)=>(r[s]=Pc(t)?t(s):t,r),o)}function e3(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const __=e3;function w_(e){if(Pc(e))return e;if(b_(e))return t=>e.test(t);if(Wo(e))return t=>!!e[t];if(Rr(e)||kr(e)){const t=el(e);return o=>!!t[o]}X2("Invalid selector() specification: "+e)}const Ih=(e,t,o={})=>{let r={},s={delete:!1,...o};const a=w_(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),r[l]=i}}),r},Wf=(e,t)=>parseInt(e[t]||0),Kf=(e,t)=>parseFloat(e[t]||0),Gf=(e,t)=>(e[t]||"").toString(),Yf=e=>(t,o)=>Wf(t,e)-Wf(o,e),Pd=e=>(t,o)=>Kf(t,e)-Kf(o,e),Zf=e=>(t,o)=>{let r=Gf(t,e).toLowerCase(),s=Gf(o,e).toLowerCase();return r>s?1:s>r?-1:0},T_=e=>(t,o)=>e(o,t);function E_(e,t=300){let o;return(...r)=>{clearTimeout(o),o=setTimeout(()=>e.apply(this,r),t)}}function Un(e){return new Promise(t=>setTimeout(t,e))}Er.registerLanguage("jsx",h_);Er.registerLanguage("json",u_);Er.registerLanguage("css",HC);Er.registerLanguage("scss",f_);Er.registerLanguage("bash",c_);Er.registerLanguage("yaml",g_);const qn=({code:e,language:t="jsx",caption:o,expand:r=!1,fixed:s=r,className:a="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=b.useState(!1),[p,f]=b.useState(r),v=()=>{navigator.clipboard.writeText(e),u(!0),Un(2e3).then(()=>u(!1))};return n.jsxs("div",{className:`codeblock ${a} ${p?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!o&&n.jsx("h4",{className:"caption",children:o}),n.jsxs("div",{className:"controls",children:[n.jsx("div",{className:"expand",onClick:()=>f(!p),children:p?"Compress":"Expand"}),n.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:v,children:d?"Copied":"Copy"})]}),n.jsx(Er,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:k_(e,{undent:c})})]})},k_=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const o=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(o,"")}return e},Q=({Component:e,code:t,html:o,children:r,className:s="",language:a,...l})=>n.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[n.jsx("div",{className:"source",children:n.jsx(qn,{code:t||o,language:o?"html":a,...l})}),!!r&&n.jsx("div",{className:"interim",children:r}),e?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx(e,{})]}):null,o?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx("div",{dangerouslySetInnerHTML:{__html:o}})]}):null]}),ii=b.createContext();function qf(e){return typeof e=="function"}function Qf(e){return typeof e=="object"&&!t3(e)&&!R_(e)}function t3(e){return Array.isArray(e)}function R_(e){return e===null}function N_({context:e={},Implementation:t,spec:o=!1,props:r={},ref:s}){if(!o)return n.jsx(t,{...r,ref:s});let a={},l=qf(o)?o(e):e[o];if(t3(l)&&(t=l[0],l=l[1]),qf(l)){const i=l(r,s,e);if(H.isValidElement(i))return i;Qf(i)&&Object.assign(a,r,i)}else Qf(l)?Object.assign(a,l,r):Object.assign(a,r);return n.jsx(t,{...a,ref:s})}const O_=e=>({Context:ii,Provider:({children:t,...o})=>n.jsx(ii.Provider,{value:{...e,...o},children:t}),Consumer:t=>o=>n.jsx(ii.Consumer,{children:r=>n.jsx(t,{...r,...o,context:r})}),Component:(t,o=t.displayName||t.name)=>H.forwardRef((r,s)=>n.jsx(ii.Consumer,{children:a=>n.jsx(N_,{Implementation:t,context:a,spec:o,props:r,ref:s})}))}),n3=O_(),X=n3.Component,D_="svg",op="-",o3="fill",L_="path",B_="line",$_="rect",A_="array",M_="circle",P_="ellipse",I_="polygon",z_="polyline",zh=/-(?!\d)/,Xf="currentColor",Fh=512,Hh=512,fl={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function F_(e,t,o=fl){o.icons[e]=t}function H_(e,t=fl){Object.entries(e).forEach(([o,r])=>F_(o,r,t))}const ci=b.createContext();function Jf(e){return typeof e=="function"}function ex(e){return typeof e=="object"&&!r3(e)&&!U_(e)}function r3(e){return Array.isArray(e)}function U_(e){return e===null}function V_({context:e={},Implementation:t,spec:o=!1,props:r={},ref:s}){if(!o)return n.jsx(t,{...r,ref:s});let a={},l=Jf(o)?o(e):e[o];if(r3(l)&&(t=l[0],l=l[1]),Jf(l)){const i=l(r,s,e);if(H.isValidElement(i))return i;ex(i)&&Object.assign(a,r,i)}else ex(l)?Object.assign(a,l,r):Object.assign(a,r);return n.jsx(t,{...a,ref:s})}const W_=e=>({Context:ci,Provider:({children:t,...o})=>n.jsx(ci.Provider,{value:{...e,...o},children:t}),Consumer:t=>o=>n.jsx(ci.Consumer,{children:r=>n.jsx(t,{...r,...o,context:r})}),Component:(t,o=t.displayName||t.name)=>H.forwardRef((r,s)=>n.jsx(ci.Consumer,{children:a=>n.jsx(V_,{Implementation:t,context:a,spec:o,props:r,ref:s})}))}),K_=W_(),G_=K_.Component;function co(e){return typeof e=="string"}function xl(e){return Array.isArray(e)}function zc(e){return typeof e=="object"&&!xl(e)&&!a3(e)}function s3(e){return e===void 0}function a3(e){return e===null}function Fc(e){return!(s3(e)||a3(e))}function l3(e){return!Fc(e)}function so(...e){throw new Error(e.join(""))}function Y_(){return Intl.DateTimeFormat().resolvedOptions().locale}Y_();function rp(e,t=/,\s*|\s+/){return l3(e)?[]:co(e)?e.length?e.split(t):[]:xl(e)?e:[e]}const Z_=(e,t)=>{const o=e[t];return delete e[t],o};function gl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,o)=>{const[r,s]=o.split(/\s*[:=]\s*/);return t[r]=s3(s)?!0:s,t},{})}const Uh=e=>e.filter(Fc).join(" "),q_=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Q_=(...e)=>Uh(e.flatMap(t=>zc(t)?q_(t):t)),X_=e=>rp(e,/\s+/),i3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Mo={flip:(e,t)=>{co(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Mo.flop=Mo.flipy;Mo["flip-x"]=Mo.flipx;Mo["flip-y"]=Mo.flipy;function c3(e,t={...i3}){const o=co(e)?gl(e):e||{};return Object.entries(o).reduce((r,[s,a])=>{const l=s.toLowerCase();return(Mo[l]||so(`Invalid transform: ${l}`))(r,a),r},t)}const J_=4.42,Wn=e=>`${J_*e}%`,ew={},sp={outline:{fill:"none",stroke:"currentColor",strokeWidth:Wn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Wn(.5)},thinner:{strokeWidth:Wn(1)},thin:{strokeWidth:Wn(1.5)},medium:{strokeWidth:Wn(2)},thick:{strokeWidth:Wn(2.5)},thicker:{strokeWidth:Wn(3)},thickest:{strokeWidth:Wn(3.5)}};sp.line=sp.outline;const tw={...Object.entries(sp).reduce((e,[t,o])=>(e[t]=r=>Object.assign(r,o),e),{}),fill:(e,t)=>e.fill=t===!0?Xf:t,stroke:(e,t)=>e.stroke=t===!0?Xf:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Wn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function cc(e,t){return(co(t)?t.split(zh):t).forEach(o=>{const[r,s=!0]=o.split(/[:=]/),a=r.toLowerCase(),l=tw[a];if(l){l(e.style||(e.style={...ew}),s);return}(Mo[a]||so(`Invalid style or transform: ${a}`))(e.transform||(e.transform={...i3}),s)})}const nw={width:Fh,height:Hh,type:o3},d3={svg:e=>({element:D_,svg:e}),array:e=>({element:A_,items:e}),path:e=>({element:L_,d:e}),polygon:e=>({element:I_,points:e}),polyline:e=>({element:z_,points:e}),circle:e=>({element:M_,...di(e,"cx cy r")}),ellipse:e=>({element:P_,...di(e,"cx cy rx ry")}),line:e=>({element:B_,...di(e,"x1 y1 x2 y2")}),rect:e=>({element:$_,...di(e,"x y width height rx ry")})};function di(e,t){const o=xl(t)?[...t]:rp(t);return rp(e).reduce((r,s)=>{if(o.length){const a=o.shift();r[a]=s}return r},{})}const u3=e=>{const[t,o=""]=e.split("?"),[r,...s]=t.split(/\.(?!\d)/),a=r.split(zh).filter(i=>i.length),l=gl(o);return{dashes:a,classes:s,style:l}},ow=(e,t)=>{const o=u3(e),{dashes:r}=o;for(let s=r.length;s>0;s--){const a=r.slice(0,s).join(op);if(t[a]){o.name=r.splice(0,s).join(op);break}}return o},tx=(e,t,o={})=>{const{icons:r}=t,s=ow(e,r),{name:a,classes:l,style:i,dashes:c}=s;l3(a)&&so(`No icon found matching any leading subset of ${s.dashes.join(op)}`);const d=t.icons[a]||so(`Icon not found in data: ${a}`),u=p3(d,t,{...o,name:a});if((l.length||o.className)&&(u.className=Uh([...l||[],o.className])),u.transform&&(u.transform=c3(u.transform)),u.style&&(u.style=co(u.style)?gl(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};cc(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&cc(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function rw(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const p3=(e,t,o={})=>{const{defaults:r={}}=t,s={...nw,...r,...o};return h3(s,e,t)},h3=(e,t,o)=>{if(co(t))return sw(e,t);if(zc(t))return aw(e,t,o);if(xl(t))return lw(e,t,o);so(`Cannot parse icon data: ${t}`)};function sw(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const o=t.match(/^(.*?):(.*)/);if(o){const[,r,s]=o,{dashes:a,classes:l}=u3(r),i=a.shift(),c=d3[i]||so(`Invalid icon data element: ${i}`);return e.body=c(s),l.length&&(e.body.className=Uh(l)),a.length&&cc(e.body,a),e}return e.body={element:"path",d:t},e}function aw(e,t,o){const r={...t};if(r.element)return e.body=r,e;if(r.data){const s=Z_(r,"data");return h3(e,s,o),Object.assign(e,r),e}for(let s of Object.entries(d3)){const[a,l]=s,i=r[a];if(Fc(i))return e.body=l(i),delete r[a],Object.assign(e,r),e}so(`Cannot parse icon data: ${JSON.stringify(t)}`)}function lw(e,t,o){return e.body={element:"array",items:t.map(r=>p3(r,o).body)},e}const iw=({size:e,...t})=>{t.width??(t.width=e||Fh),t.height??(t.height=e||Hh),t.path&&Object.assign(t,rw(t.path));let o;return t.style&&(co(t.style)?(o=gl(t.style),t.style={}):o={...t.style}),cc(t,t.type?t.type.split(zh).filter(r=>r.length):o3),delete t.type,t.style&&o&&Object.assign(t.style,o),t.transform&&(t.transform=c3(t.transform)),t},Vh=e=>zc(e)?Object.entries(e).reduce((t,[o,r])=>(t[o.replace(/(?!-)-./g,s=>s[1].toUpperCase())]=r,t),{}):e,cw=e=>Fc(e)?Vh(gl(e)):null,uo=({style:e,class:t,...o})=>({style:co(e)?cw(e):Vh(e),className:t,...o}),dw=e=>n.jsx("circle",{...uo(e)}),uw=e=>n.jsx("ellipse",{...uo(e)}),pw=e=>n.jsx("line",{...uo(e)}),m3=e=>n.jsx("path",{...uo(e)}),hw=e=>n.jsx("polygon",{...uo(e)}),mw=e=>n.jsx("polyline",{...uo(e)}),fw=e=>n.jsx("rect",{...uo(e)}),xw=({svg:e,...t})=>n.jsx("g",{dangerouslySetInnerHTML:{__html:e},...uo(t)}),gw=({items:e,...t})=>n.jsx("g",{...uo(t),children:e.map((o,r)=>n.jsx(dc,{body:o},r))}),bw={array:gw,circle:dw,ellipse:uw,line:pw,path:m3,polygon:hw,polyline:mw,rect:fw,svg:xw},dc=({path:e,body:t,...o})=>{if(e)return n.jsx(m3,{d:e,...o});if(co(t))return n.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(zc(t)){const{element:r,...s}=t,a=bw[r]||so(`Invalid element type: ${r} => `,JSON.stringify(t));return n.jsx(a,{...s})}if(xl(t))return t.map((r,s)=>n.jsx(dc,{body:r},s));so(`Don't know how to handle body: ${t}`)};function vw({width:e,height:t,transform:o,children:r}){const s=e/2,a=t/2,l=o.x*e/16,i=o.y*t/16,c=o.size/16*(o.flipX?-1:1),d=o.size/16*(o.flipY?-1:1),u=o.rotate;return n.jsx("g",{transform:`translate(${s} ${a})`,children:n.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:n.jsx("g",{transform:`translate(-${s} -${a})`,children:r})})})}const Id=({onClick:e,minx:t=0,miny:o=0,width:r=Fh,height:s=Hh,style:a,transform:l,className:i="",debug:c,...d})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${o} ${r} ${s}`,className:`${i} icon`,style:Vh(a),onClick:e,children:[!!c&&console.log("style: ",a),l?n.jsx(vw,{width:r,height:s,transform:l,children:n.jsx(dc,{...d})}):n.jsx(dc,{...d})]}),jw=({name:e,iconsClass:t="icons",library:o=fl,...r})=>{if(!e)return n.jsx(Id,{...iw(r)});const s=X_(e);return s.length===1?n.jsx(Id,{...r,...tx(e,o,r)}):n.jsx("div",{className:Q_(t,r.className),children:s.map(a=>n.jsx(Id,{...r,...tx(a,o,r)},a))})},$i=G_(jw,"Icon"),yw=e=>e.filter(ge).join(" "),Sw=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),ie=(...e)=>yw(e.flatMap(t=>Wo(t)?Sw(t):t)),Hc=e=>{if(!e)return null;const[t,o,r,s,a]=e.split("-");return ie(t,ww(o),Tw(r),Ew(s),kw(a))},Cw=({className:e,size:t,color:o,...r})=>({...r,className:ie(e,t,Hc(o))}),_w=({className:e,size:t,color:o,border:r,radius:s,shadow:a,pad:l,mar:i,padding:c=l,margin:d=i,...u})=>({...u,className:ie(e,t,Hc(o),Ko(r),Or(s),Nr(a),f3(c),x3(d))}),Ko=e=>b3(e,"border",t=>`border bdw-${t}`),Nr=e=>b3(e,"shadow-1",t=>`shadow-${t}`),f3=e=>v3(e,"pad"),x3=e=>v3(e,"mar"),Or=e=>Ls(e,t=>`bdr-${t}`),ww=e=>Ls(e,t=>`fgc-${t}`),Tw=e=>Ls(e,t=>`bgc-${t}`),Ew=e=>Ls(e,t=>`fgd-${t}`),kw=e=>Ls(e,t=>`bgd-${t}`),g3=e=>Ls(e,t=>{const o=Ph(t);return o.length===2?ap("gap",["v","h"],o):`gap-${t}`}),Ls=(e,t)=>Ah(parseInt(e))?Ts(t,e):null,Rw=(e,t,o)=>e===!0?t:ge(e)?Ts(o,e):null,b3=(e,t,o)=>e===!0?t:parseInt(e)?Ts(o,e):null,v3=(e,t)=>Rw(e,t,o=>Nw(t,Ph(o))),Nw=(e,t)=>t.length===2?ap(e,["v","h"],t):t.length===4?ap(e,["t","r","b","l"],t):t.map(o=>`${e}-${o}`).join(" "),ap=(e,t,o)=>o.map((r,s)=>`${e}-${t[s]}-${r}`).join(" "),re=e=>n.jsx($i,{...Cw(e)});function nx(e,t,o={}){return ge(t)&&(o[e]=Ah(t)?`${t}deg`:t),Object.keys(o).length?o:null}const Ow=({icon:e,iconClass:t,iconLeft:o,iconLeftClass:r="on-left",iconLeftRotate:s,iconRight:a,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>n.jsxs(n.Fragment,{children:[!!e&&n.jsx($i,{name:e,className:t,fixedWidth:!0}),!!o&&n.jsx($i,{name:o,className:r,style:nx("--icon-rotate",s),fixedWidth:!0}),c||d,!!a&&n.jsx($i,{name:a,className:l,style:nx("--icon-rotate",i),fixedWidth:!0})]}),Dr=X(Ow,"WithIcons");H_({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const Dw=({dismissable:e,dismiss:t,revealable:o,isRevealed:r,openIcon:s="angle-down",closedIcon:a="angle-left",dismissIcon:l="cross"})=>n.jsxs("div",{className:"on-right",children:[!!e&&n.jsx(re,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!o&&n.jsx(re,{name:r?s:a,fixedWidth:!0,className:"reveal"})]}),j3=X(Dw,"AlertControls"),Lw=({headline:e,headIcon:t,toggle:o,revealable:r=!1,controlProps:s,Controls:a=j3})=>n.jsxs("div",{className:"headline flex space",onClick:r?o:null,children:[n.jsxs("div",{children:[!!t&&n.jsx(re,{name:t,fixedWidth:!0,className:"on-left"}),e]}),n.jsx(a,{...s})]}),Bw=X(Lw,"AlertHeadline"),$w=({title:e,text:t,children:o})=>n.jsxs(n.Fragment,{children:[e&&n.jsx("h3",{children:e}),t?n.jsx("p",{children:t}):o]}),y3=X($w,"AlertContent"),Aw=({icon:e,Content:t=y3,...o})=>n.jsxs("div",{className:"side-icon",children:[n.jsx(re,{name:e}),n.jsx("div",{className:"wide",children:n.jsx(t,{...o})})]}),Mw=X(Aw,"AlertIcon"),bl=e=>q2(e)||!e.separator&&!e.heading&&!e.disabled,Pw=e=>q2(e)?e:e.value??e.id,Iw=(e,t,o=Pw)=>{if(Ic(t))return[];const r=e.findIndex(s=>t===o(s));return r>=0?[e[r],r]:[]},zw=(e,t)=>{const o=e.toLowerCase().split(/\s+/);return t.filter(r=>{const s=Wo(r),a=s?r.search??r.text??r.label??r.name??r.value:r;if(s&&r.fixed)return!0;if(ge(a)){const l=a.toString().toLowerCase();return o.every(i=>l.indexOf(i)>=0)}return!1})};function Fw(e,t=bl){const o=e.findIndex(t);return o<0?null:o}function Hw(e,t=bl){for(let o=e.length-1;o>=0;o--)if(t(e[o]))return o;return null}function Uw(e,t,o=bl){for(let r=1;r<=e.length;r++){const s=(t+r)%e.length;if(o(e[s]))return s}return null}function Vw(e,t,o=bl){for(let r=1;r<=e.length;r++){const s=(t+e.length-r)%e.length;if(o(e[s]))return s}return null}const Ra="",Wh="ArrowDown",Kh="ArrowUp",Ww="Tab",Uc="Enter",Gh=" ",Vc="Escape",Kw="Backspace",uc=e=>{const t=`HINT: define ${e}() to render this value`;return o=>kr(o)||$h(o)?o:Wo(o)?o.text??o.label??o.name??t:t},Gw=e=>kr(e)||$h(e)?e:n.jsx(Dr,{...e}),S3=(e,t)=>{if(!e||!t)return;const o=t.offsetTop,r=o+t.offsetHeight,s=e.scrollTop,a=s+e.offsetHeight;o<s?e.scrollTo({top:o}):r>a&&e.scrollTo({top:s+(r-a)})};function Yw(){let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,o)=>e[t]=o,removeItem:t=>delete e[t]}}const ui=typeof window<"u"&&window.localStorage||Yw(),pi=(e,t)=>[e,t].join("-");function Wc(e){return{get:(t,o)=>{const r=ui.getItem(pi(e,t));return ge(r)?JSON.parse(r):ge(o)?(ui.setItem(pi(e,t),JSON.stringify(o)),o):null},set:(t,o)=>ui.setItem(pi(e,t),JSON.stringify(o)),delete:t=>ui.removeItem(pi(e,t))}}const Zw=e=>e.charAt(0).toUpperCase()+e.slice(1),po=({title:e,headline:t,headIcon:o,type:r,size:s,color:a,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:f,onDismiss:v,icon:y,dismissable:S=!1,revealable:T=!1,revealed:g=!1,openIcon:h,closedIcon:m,dismissIcon:j,Headline:C=Bw,Controls:x=j3,Content:_=y3,Icon:k=Mw})=>{const[R,O]=b.useState(T?g:!0),[B,U]=b.useState(!1),K=ie("alert",r,s,a,u,{revealable:T,dismissable:S,stripe:l},R?"revealed":null,Nr(d),Ko(i),Or(c)),ne=()=>O(I=>!I),je={dismissable:S,revealable:T,isRevealed:R,dismiss:()=>{U(!0),v&&v()},openIcon:h,closedIcon:m,dismissIcon:j},ee={title:e,text:p,children:f},$={...ee,icon:y,Content:_},P={headline:t,headIcon:o,toggle:ne,revealable:T,controlProps:je,Controls:x};return B?null:n.jsxs("div",{className:K,children:[!!t&&n.jsx(C,{...P}),R&&(y?n.jsx(k,{...$}):n.jsx(_,{...ee}))]})},ga=X(e=>n.jsx(po,{...e,type:"info"}),"Info"),as=X(e=>n.jsx(po,{...e,type:"success"}),"Success"),ls=X(e=>n.jsx(po,{...e,type:"warning"}),"Warning"),ba=X(e=>n.jsx(po,{...e,type:"error"}),"Error");po.Info=ga;po.Success=as;po.Warning=ls;po.Error=ba;const oe=X(po,"Alert"),qw=({size:e,color:t,className:o,tag:r,shadow:s,border:a,radius:l,tooltip:i,icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:v,label:y,text:S,children:T,Content:g=Dr,...h})=>{const m=ie("badge",e,t,o,{tag:r,icon:c},Nr(s),Ko(a),Or(l)),j={icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:v,text:S,children:T};return n.jsx("div",{className:m,"data-tooltip":i,"aria-label":y,...h,children:n.jsx(g,{...j})})},ae=X(qw,"Badge"),Qw=({type:e="button",size:t,color:o,className:r,disabled:s,bright:a,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:f,label:v,tooltip:y,tabIndex:S=0,icon:T,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:j,iconRightClass:C,text:x,children:_,Content:k=Dr,...R})=>{const O=ie(t,o,r,{bright:a,dark:l,outline:i,bare:c,shaded:d,icon:T},Nr(u),Ko(p),Or(f)),B={icon:T,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:j,iconRightClass:C,text:x,children:_};return n.jsx("button",{className:O,"aria-label":v,tabIndex:S,type:e,disabled:s,"aria-disabled":s,"data-tooltip":y,...R,children:n.jsx(k,{...B})})},L=X(Qw,"Button"),Xw=({buttons:e,children:t,className:o="buttons",buttonClass:r,Button:s=L,...a})=>n.jsx("div",{className:o,children:e?e.map((l,i)=>n.jsx(s,{className:r,...a,...l},i)):t}),sn=X(Xw,"Buttons"),Jw=({className:e,disabled:t,children:o,ref:r})=>n.jsx("label",{className:ie(e,{disabled:t}),ref:r,children:o}),eT=X(Jw,"CheckboxLabel"),tT=({disabled:e=!1,tabIndex:t=0,onChange:o=Ce,ref:r,...s})=>n.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:a=>o(a.target.checked),...s}),nT=X(tT,"CheckboxInput"),oT=({size:e,color:t,border:o,inline:r,className:s="checkbox",text:a,ref:l,inputRef:i,checked:c,checkedText:d=a,uncheckedText:u=a,inputClass:p,Label:f=eT,Input:v=nT,...y})=>n.jsxs(f,{className:ie(e,t,s,Ko(o),{inline:r}),ref:l,checked:c,...y,children:[n.jsx(v,{className:p,ref:i,checked:c,...y}),c?d:u]}),Vn=X(oT,"Checkbox"),rT=({checked:e=!1}={})=>{const[t,o]=b.useState(e);return{isChecked:t,setChecked:o,check:()=>o(!0),uncheck:()=>o(!1)}},sT=({checked:e=!1,onChange:t,...o})=>{const{isChecked:r,setChecked:s}=rT({checked:e}),a=l=>{s(l),t&&t(l)};return n.jsx(Vn,{checked:r,onChange:a,...o})},Go=({visible:e=!1}={})=>{const[t,o]=b.useState(e);return{isVisible:t,setVisible:o,show:()=>o(!0),hide:()=>o(!1)}},aT=({close:e,icon:t="cross",className:o="close"})=>n.jsx("div",{className:o,onClick:e,children:n.jsx(re,{name:t})}),lT=X(aT,"ModalClose"),iT=({title:e,header:t})=>e||t?n.jsxs("header",{children:[!!e&&n.jsx("h3",{children:e}),t]}):null,cT=X(iT,"ModalHeader"),dT=({footer:e})=>!!e&&n.jsx("footer",{children:e}),uT=X(dT,"ModalFooter"),pT=({text:e,children:t,Header:o=cT,Footer:r=uT,...s})=>n.jsxs("article",{children:[n.jsx(o,{...s}),e||t,n.jsx(r,{...s})]}),hT=X(pT,"ModalContent"),mT=({ref:e,open:t,close:o,className:r,closeClass:s="close",closeIcon:a="cross",Close:l=lT,Content:i=hT,...c})=>(e||(e=b.useRef(null)),b.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),n.jsxs("dialog",{ref:e,className:r,children:[!!o&&n.jsx(l,{close:o,icon:a,className:s}),n.jsx(i,{...c})]})),Tn=X(mT,"Modal"),fT=({isVisible:e,title:t,header:o,prompt:r,modalClass:s,...a})=>n.jsx(Tn,{...a,open:e,title:t,header:o,className:s,text:r??n.jsx(ox,{...a}),footer:!!r&&n.jsx(ox,{...a})}),ox=({buttonClass:e,cancel:t,confirm:o})=>n.jsxs("div",{className:"flex space gap-4",children:[n.jsx(L,{className:e,...t}),n.jsx(L,{className:e,...o})]}),xT=({initiallyRevealed:e=!1,open:t=e,confirmIcon:o="check",confirmText:r="Confirm",confirmColor:s="red",confirmClass:a,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:o,text:r,color:s,className:a},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:f,className:v=f,buttonClass:y,modal:S,onClick:T=()=>window.alert("No confirm action defined"),...g})=>{const{isVisible:h,hide:m,show:j}=Go({visible:t}),x={iconRight:o,text:r,color:s,className:a,...u,onClick:k=>{k.preventDefault(),m(),T()}},_={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:m};return S?n.jsxs(n.Fragment,{children:[n.jsx(sn,{className:v,buttonClass:y,buttons:[{...g,onClick:j}]}),n.jsx(fT,{isVisible:h,confirm:x,cancel:_,...g})]}):n.jsx(sn,{className:v,buttonClass:y,buttons:h?[_,x]:[{...g,onClick:j}]})},Lt=X(xT,"Confirm");var gT=Object.defineProperty,bT=(e,t,o)=>t in e?gT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,zd=(e,t,o)=>(bT(e,typeof t!="symbol"?t+"":t,o),o);const Yo=(e,t={})=>{const o=H.createContext(t);return{Context:o,Provider:r=>n.jsx(e,{...r,render:s=>n.jsx(o.Provider,{value:s,children:r.children})}),Consumer:r=>s=>n.jsx(o.Consumer,{children:a=>n.jsx(r,{...a,...s})}),Use:()=>H.useContext(o)}};function vT(e={},t={},o={}){return Object.entries(t).reduce((r,[s,a])=>{const l=o[a];return l!==null&&typeof l<"u"&&(r[s]=l),r},{...e})}function jT(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((o,r)=>{const s=e[r]||ST(`Cannot expose non-existent action method: ${r}`);return o[r]=s.bind(e),o},{})}function yT(e,t){const o=e.debug??t.debug,r=rx(e.debugPrefix??t.debugPrefix,e),s=rx(e.debugColor??t.debugColor,e);return o?r?(a,...l)=>console.log(`%c${r}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function rx(e,t){return typeof e=="function"?e(t):e}function ST(...e){throw new Error(e.join(""))}class Na extends H.Component{constructor(t){super(t);const o=this.constructor;this.debug=yT(t,o),this.state=vT(o.initialState,o.initialProps,t),this.actions=jT(this,o.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}zd(Na,"initialState",{}),zd(Na,"initialProps",{}),zd(Na,"actions",[]);const Fd=e=>{kr(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=e3(t)),e.id||(e.id=t),e},CT=e=>{if(kr(e))return el(e,Fd);if(Rr(e))return e.reduce((t,o)=>{const r=Fd(o);return t[r.field]=r,t},{});if(Wo(e))return Object.entries(e).reduce((t,[o,r])=>{const s=Fd({...r,field:o});return t[s.field]=s,t},{});X2("Invalid columns definition")},_T=(e,t)=>{if(t){const o=t.filter(r=>e[r]);if(o.length)return o}return Object.keys(e).filter(o=>!e[o].hidden)},wT=(e,t)=>{if(t){const o=t.filter(r=>e[r]);if(o.length)return o}return Object.keys(e)},TT=(e,t,o)=>t&&e[t]?[t,o]:[null,null],ET=({value:e,search:t})=>ge(e)?e.toString()===t.toString():!1,na=({value:e,search:t})=>{const o=t.toLowerCase().split(/\s+/);if(ge(e)){const r=e.toString().toLowerCase();return o.every(s=>r.indexOf(s)>-1)}else return!1},kT=({value:e,search:t})=>ge(e)?parseInt(e)===parseInt(t):!1,RT=({value:e,search:t})=>ge(e)?parseFloat(e)===parseFloat(t):!1,NT=({value:e=!1,search:t})=>{const o=parseInt(t)!==0;return e===o},sx={string:na,text:na,number:na,price:na,pounds:na,select:ET,boolean:NT,integer:kT,float:RT},OT=(e,t,o)=>{const r=Object.keys(o);return r.length===0?e:e.filter(s=>r.every(a=>{const l=o[a],i=t[a],c=i.field||a,d=s[c],u=i.filterType||i.type,p=i.filter||sx[u]||sx.text;return ge(l)&&l.length?p({row:s,field:c,value:d,search:l}):!0}))},DT=(e,t=1,o=e.length)=>{const r=e.length,s=Math.ceil(r/o);t=Math.min(t,s);const a=t-1,l=o*a,i=Math.min(l+o-1,r-1),c=e.slice(l,i+1);return{pageSize:o,pages:s,page:a,pageNo:t,total:r,firstIndex:l,lastIndex:i,firstPage:1,lastPage:s,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:r===1,none:r===0,rows:c}},ax={string:Zf,text:Zf,number:Pd,price:Pd,currency:Pd,integer:Yf,id:Yf},LT=(e,t,o,r)=>{if(!o)return e;const s=t[o],a=s.sort,l=s.type||"text",i=Pc(a)?a:(ax[l]||ax.text)(o);return e.sort(r?T_(i):i)},BT=({render:e,rows:t=[],storageKey:o,storageItem:r="state",debug:s,...a})=>{const l=s?console.log:Ce,[i,c]=b.useMemo(()=>{const O=o&&Wc(o),B=O?O.get(r,{}):{};return[O,B]},[o]),[d,u,p,f,v]=b.useMemo(()=>{const O=CT(a.columns);return[O,_T(O,c.visibleColumns),wT(O,c.columnOrder),...TT(O,c.sortColumn??a.sortColumn,c.sortReverse??a.sortReverse)]},[a.columns,a.sortColumn,a.sortReverse,c]),[y,S]=nd({pageNo:c.pageNo??a.pageNo??1,pageSize:c.pageSize??a.pageSize??10,sortColumn:f,sortReverse:v,columnOrder:p,visibleColumns:u});b.useEffect(()=>{i&&(l("Saving state in local storage:",y),i.set(r,y))},[y,i]);const T=O=>{y.sortColumn===O?(l(`Sort column already set to ${O}, changing direction`),S.setSortReverse(B=>!B)):(l(`Setting sort column to ${O}`),S.setSortColumn(O),S.setSortReverse(!1))},g=O=>S.setVisibleColumns(B=>{const U=el(B),K=U[O]?B.filter(ne=>ne!==O):Object.keys(d).filter(ne=>ne===O||U[ne]);return l("New visible columns:",K),K}),h=O=>{let B=[],U=[];const K=el(y.visibleColumns);O.forEach(ne=>{B.push(ne),K[ne]&&U.push(ne)}),l("New order of all columns:",B),l("New order of visible columns:",U),S.setVisibleColumns(U),S.setColumnOrder(B)},[m,j]=b.useState(!1),[C,x]=b.useState({}),_=O=>{O.preventDefault(),O.stopPropagation(),j(B=>!B)},k=(O,B)=>{x(U=>{const K={...U};return ge(B)&&B.length?K[O]=B:delete K[O],K}),S.setPageNo(1)},R=b.useMemo(()=>DT(LT(OT(t,d,C),d,y.sortColumn,y.sortReverse),y.pageNo,y.pageSize),[t,d,C,y.sortColumn,y.sortReverse,y.pageNo,y.pageSize]);return e({...a,rows:t,columns:d,page:R,showFilters:m,toggleFilters:_,filters:C,setFilter:k,toggleSortColumn:T,toggleVisibleColumn:g,changeColumnOrder:h,...y,...S})},gt=Yo(BT),$T=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:o})=>n.jsxs("div",{className:t,children:[n.jsx(L,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>o(e.pageNo-1)}),n.jsx(L,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>o(e.pageNo+1)}),n.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${xa(e.total)} rows`:`rows ${xa(e.from)}-${xa(e.to)} of ${xa(e.total)}`," "]})]}),AT=gt.Consumer($T);var Yn;let C3=(Yn=class extends Na{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),Un(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():this.debug(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Uc:case Gh:this.state.isOpen?this.close():this.open();break;case Vc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},be(Yn,"debug",!1),be(Yn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onClick:Ce,onOpen:Ce,onClose:Ce}),be(Yn,"inactiveState",{isOpen:!1}),be(Yn,"initialState",{...Yn.inactiveState}),Yn);const lr=class lr extends C3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Wh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Kh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Uc:case Gh:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Vc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return Fw(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return Hw(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return Uw(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return Vw(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,o=this.menuOptions();if(o&&o.length&&ge(t)){const r=o[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){S3(this._menuRef,t)}};be(lr,"debug",!1),be(lr,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onClick:Ce,onOpen:Ce,onClose:Ce,onSelect:Ce,closeOnSelect:!0}),be(lr,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),be(lr,"initialState",{...lr.inactiveState});let pc=lr;var Bn;let MT=(Bn=class extends pc{},be(Bn,"debug",!1),be(Bn,"debugPrefix","Dropdown > "),be(Bn,"debugColor","MediumVioletRed"),be(Bn,"defaultProps",{...Bn.defaultProps,options:[],displayOption:Gw}),be(Bn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),Bn);const vl=Yo(MT),PT=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:o="safe-area",onMouseEnter:r,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>n.jsxs("div",{className:e,onClick:c,onMouseEnter:r,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[n.jsx(Dr,{...Ih(d,/^(icon|text)/)}),n.jsx("div",{className:o})]}),IT=vl.Consumer(PT),zT=({option:e,active:t,activeRef:o,selected:r,onClick:s,onMouseEnter:a,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>n.jsx("div",{className:ie(l,e.className,t?i:null,r?c:null,e.disabled?d:null),onMouseEnter:a,onClick:s,ref:t?o:null,"aria-disabled":e.disabled,children:u(e)}),FT=vl.Consumer(zT),HT=({option:e,separatorClass:t="separator"})=>n.jsx("div",{className:ie(t,e.className)}),UT=({option:e,optionClass:t="item no-hover",headingClass:o="heading"})=>n.jsx("h4",{className:ie(o,t,e.className),children:e.heading}),VT=({options:e=[],menuRef:t,menuClass:o="menu border bdr-1",cursor:r,selected:s,selectOption:a,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=FT,Separator:u=HT,Heading:p=UT})=>n.jsx("div",{className:o,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((f,v)=>f.separator?n.jsx(u,{option:f},v):f.heading?n.jsx(p,{option:f},v):n.jsx(d,{option:f,active:ge(r)&&e[r]===f,selected:s===f,onClick:()=>a(f),onMouseEnter:()=>l(v)},f.id??f.value??v))}),WT=vl.Consumer(VT),KT=({className:e="dropdown",openClass:t="open",closedClass:o="closed",isOpen:r,right:s,size:a,wide:l,Trigger:i=IT,Options:c=WT})=>n.jsxs("div",{className:ie(e,a,r?t:o,{right:s,wide:l}),children:[n.jsx(i,{}),r&&n.jsx(c,{})]}),GT=vl.Consumer(KT),YT=({Content:e=GT,...t})=>n.jsx(vl.Provider,{...t,children:n.jsx(e,{})}),Zo=X(YT,"DropdownMenu"),ZT=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>n.jsx("div",{className:"pagesize",children:n.jsx(Zo,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(o=>({n:o,text:`${o} per page`})),onSelect:o=>e(o.n)})}),qT=gt.Consumer(ZT);class va extends C3{}be(va,"debug",!1),be(va,"debugPrefix","Dropdown > "),be(va,"debugColor","MediumVioletRed"),be(va,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const jl=Yo(va),QT=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:o="safe-area",onMouseEnter:r,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>n.jsxs("div",{className:e,onClick:c,onMouseEnter:r,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[n.jsx(Dr,{...Ih(d,/^(icon|text)/)}),n.jsx("div",{className:o})]}),XT=jl.Consumer(QT),JT=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:o,content:r})=>n.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:o,children:r||"No content defined"}),eE=jl.Consumer(JT),tE=({className:e="dropdown",openClass:t="open",closedClass:o="closed",isOpen:r,right:s,size:a,wide:l,Trigger:i=XT,Body:c=eE})=>n.jsxs("div",{className:ie(e,a,r?t:o,{right:s,wide:l}),children:[n.jsx(i,{}),r&&n.jsx(c,{})]}),nE=jl.Consumer(tE),oE=({Content:e=nE,content:t,children:o,...r})=>n.jsx(jl.Provider,{content:t||o,...r,children:n.jsx(e,{})}),En=X(oE,"Dropdown"),rE=({item:e,setNodeRef:t,style:o,listeners:r,toggleVisibleColumn:s,isVisible:a,...l})=>n.jsxs("div",{ref:t,style:o,className:`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${e.moved?"moved":""}`,...l,children:[n.jsx(Vn,{className:"fluid flex middle no-focus",checked:a[e.id]||!1,onChange:()=>s(e.id),text:e.label},e.id),n.jsx("div",{...r,className:"pad-h-2",children:n.jsx(re,{name:"drag",className:"drag-handle"})})]}),sE=({close:e})=>n.jsx(L,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),aE=jl.Consumer(sE);function lE(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return b.useMemo(()=>r=>{t.forEach(s=>s(r))},t)}const Kc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bs(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Yh(e){return"nodeType"in e}function _t(e){var t,o;return e?Bs(e)?e:Yh(e)&&(t=(o=e.ownerDocument)==null?void 0:o.defaultView)!=null?t:window:window}function Zh(e){const{Document:t}=_t(e);return e instanceof t}function yl(e){return Bs(e)?!1:e instanceof _t(e).HTMLElement}function _3(e){return e instanceof _t(e).SVGElement}function $s(e){return e?Bs(e)?e.document:Yh(e)?Zh(e)?e:yl(e)||_3(e)?e.ownerDocument:document:document:document}const an=Kc?b.useLayoutEffect:b.useEffect;function Gc(e){const t=b.useRef(e);return an(()=>{t.current=e}),b.useCallback(function(){for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return t.current==null?void 0:t.current(...r)},[])}function iE(){const e=b.useRef(null),t=b.useCallback((r,s)=>{e.current=setInterval(r,s)},[]),o=b.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,o]}function tl(e,t){t===void 0&&(t=[e]);const o=b.useRef(e);return an(()=>{o.current!==e&&(o.current=e)},t),o}function Sl(e,t){const o=b.useRef();return b.useMemo(()=>{const r=e(o.current);return o.current=r,r},[...t])}function hc(e){const t=Gc(e),o=b.useRef(null),r=b.useCallback(s=>{s!==o.current&&(t==null||t(s,o.current)),o.current=s},[]);return[o,r]}function mc(e){const t=b.useRef();return b.useEffect(()=>{t.current=e},[e]),t.current}let Hd={};function Cl(e,t){return b.useMemo(()=>{if(t)return t;const o=Hd[e]==null?0:Hd[e]+1;return Hd[e]=o,e+"-"+o},[e,t])}function w3(e){return function(t){for(var o=arguments.length,r=new Array(o>1?o-1:0),s=1;s<o;s++)r[s-1]=arguments[s];return r.reduce((a,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=a[c];u!=null&&(a[c]=u+e*d)}return a},{...t})}}const gs=w3(1),nl=w3(-1);function cE(e){return"clientX"in e&&"clientY"in e}function Yc(e){if(!e)return!1;const{KeyboardEvent:t}=_t(e.target);return t&&e instanceof t}function dE(e){if(!e)return!1;const{TouchEvent:t}=_t(e.target);return t&&e instanceof t}function fc(e){if(dE(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:o}=e.touches[0];return{x:t,y:o}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:o}=e.changedTouches[0];return{x:t,y:o}}}return cE(e)?{x:e.clientX,y:e.clientY}:null}const Po=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:o}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(o?Math.round(o):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:o}=e;return"scaleX("+t+") scaleY("+o+")"}},Transform:{toString(e){if(e)return[Po.Translate.toString(e),Po.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:o,easing:r}=e;return t+" "+o+"ms "+r}}}),lx="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function uE(e){return e.matches(lx)?e:e.querySelector(lx)}const pE={display:"none"};function hE(e){let{id:t,value:o}=e;return H.createElement("div",{id:t,style:pE},o)}function mE(e){let{id:t,announcement:o,ariaLiveType:r="assertive"}=e;const s={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return H.createElement("div",{id:t,style:s,role:"status","aria-live":r,"aria-atomic":!0},o)}function fE(){const[e,t]=b.useState("");return{announce:b.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const T3=b.createContext(null);function xE(e){const t=b.useContext(T3);b.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function gE(){const[e]=b.useState(()=>new Set),t=b.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[b.useCallback(r=>{let{type:s,event:a}=r;e.forEach(l=>{var i;return(i=l[s])==null?void 0:i.call(l,a)})},[e]),t]}const bE={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},vE={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:o}=e;return o?"Draggable item "+t.id+" was moved over droppable area "+o.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:o}=e;return o?"Draggable item "+t.id+" was dropped over droppable area "+o.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function jE(e){let{announcements:t=vE,container:o,hiddenTextDescribedById:r,screenReaderInstructions:s=bE}=e;const{announce:a,announcement:l}=fE(),i=Cl("DndLiveRegion"),[c,d]=b.useState(!1);if(b.useEffect(()=>{d(!0)},[]),xE(b.useMemo(()=>({onDragStart(p){let{active:f}=p;a(t.onDragStart({active:f}))},onDragMove(p){let{active:f,over:v}=p;t.onDragMove&&a(t.onDragMove({active:f,over:v}))},onDragOver(p){let{active:f,over:v}=p;a(t.onDragOver({active:f,over:v}))},onDragEnd(p){let{active:f,over:v}=p;a(t.onDragEnd({active:f,over:v}))},onDragCancel(p){let{active:f,over:v}=p;a(t.onDragCancel({active:f,over:v}))}}),[a,t])),!c)return null;const u=H.createElement(H.Fragment,null,H.createElement(hE,{id:r,value:s.draggable}),H.createElement(mE,{id:i,announcement:l}));return o?Zn.createPortal(u,o):u}var Xe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Xe||(Xe={}));function xc(){}function ix(e,t){return b.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function yE(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return b.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const Cn=Object.freeze({x:0,y:0});function E3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function SE(e,t){const o=fc(e);if(!o)return"0 0";const r={x:(o.x-t.left)/t.width*100,y:(o.y-t.top)/t.height*100};return r.x+"% "+r.y+"%"}function k3(e,t){let{data:{value:o}}=e,{data:{value:r}}=t;return o-r}function CE(e,t){let{data:{value:o}}=e,{data:{value:r}}=t;return r-o}function cx(e){let{left:t,top:o,height:r,width:s}=e;return[{x:t,y:o},{x:t+s,y:o},{x:t,y:o+r},{x:t+s,y:o+r}]}function R3(e,t){if(!e||e.length===0)return null;const[o]=e;return t?o[t]:o}function dx(e,t,o){return t===void 0&&(t=e.left),o===void 0&&(o=e.top),{x:t+e.width*.5,y:o+e.height*.5}}const _E=e=>{let{collisionRect:t,droppableRects:o,droppableContainers:r}=e;const s=dx(t,t.left,t.top),a=[];for(const l of r){const{id:i}=l,c=o.get(i);if(c){const d=E3(dx(c),s);a.push({id:i,data:{droppableContainer:l,value:d}})}}return a.sort(k3)},wE=e=>{let{collisionRect:t,droppableRects:o,droppableContainers:r}=e;const s=cx(t),a=[];for(const l of r){const{id:i}=l,c=o.get(i);if(c){const d=cx(c),u=s.reduce((f,v,y)=>f+E3(d[y],v),0),p=Number((u/4).toFixed(4));a.push({id:i,data:{droppableContainer:l,value:p}})}}return a.sort(k3)};function TE(e,t){const o=Math.max(t.top,e.top),r=Math.max(t.left,e.left),s=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),l=s-r,i=a-o;if(r<s&&o<a){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const EE=e=>{let{collisionRect:t,droppableRects:o,droppableContainers:r}=e;const s=[];for(const a of r){const{id:l}=a,i=o.get(l);if(i){const c=TE(i,t);c>0&&s.push({id:l,data:{droppableContainer:a,value:c}})}}return s.sort(CE)};function kE(e,t,o){return{...e,scaleX:t&&o?t.width/o.width:1,scaleY:t&&o?t.height/o.height:1}}function N3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Cn}function RE(e){return function(o){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return s.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...o})}}const NE=RE(1);function O3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function OE(e,t,o){const r=O3(t);if(!r)return e;const{scaleX:s,scaleY:a,x:l,y:i}=r,c=e.left-l-(1-s)*parseFloat(o),d=e.top-i-(1-a)*parseFloat(o.slice(o.indexOf(" ")+1)),u=s?e.width/s:e.width,p=a?e.height/a:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const DE={ignoreTransform:!1};function As(e,t){t===void 0&&(t=DE);let o=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=_t(e).getComputedStyle(e);d&&(o=OE(o,d,u))}const{top:r,left:s,width:a,height:l,bottom:i,right:c}=o;return{top:r,left:s,width:a,height:l,bottom:i,right:c}}function ux(e){return As(e,{ignoreTransform:!0})}function LE(e){const t=e.innerWidth,o=e.innerHeight;return{top:0,left:0,right:t,bottom:o,width:t,height:o}}function BE(e,t){return t===void 0&&(t=_t(e).getComputedStyle(e)),t.position==="fixed"}function $E(e,t){t===void 0&&(t=_t(e).getComputedStyle(e));const o=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const a=t[s];return typeof a=="string"?o.test(a):!1})}function Zc(e,t){const o=[];function r(s){if(t!=null&&o.length>=t||!s)return o;if(Zh(s)&&s.scrollingElement!=null&&!o.includes(s.scrollingElement))return o.push(s.scrollingElement),o;if(!yl(s)||_3(s)||o.includes(s))return o;const a=_t(e).getComputedStyle(s);return s!==e&&$E(s,a)&&o.push(s),BE(s,a)?o:r(s.parentNode)}return e?r(e):o}function D3(e){const[t]=Zc(e,1);return t??null}function Ud(e){return!Kc||!e?null:Bs(e)?e:Yh(e)?Zh(e)||e===$s(e).scrollingElement?window:yl(e)?e:null:null}function L3(e){return Bs(e)?e.scrollX:e.scrollLeft}function B3(e){return Bs(e)?e.scrollY:e.scrollTop}function lp(e){return{x:L3(e),y:B3(e)}}var st;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(st||(st={}));function $3(e){return!Kc||!e?!1:e===document.scrollingElement}function A3(e){const t={x:0,y:0},o=$3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-o.width,y:e.scrollHeight-o.height},s=e.scrollTop<=t.y,a=e.scrollLeft<=t.x,l=e.scrollTop>=r.y,i=e.scrollLeft>=r.x;return{isTop:s,isLeft:a,isBottom:l,isRight:i,maxScroll:r,minScroll:t}}const AE={x:.2,y:.2};function ME(e,t,o,r,s){let{top:a,left:l,right:i,bottom:c}=o;r===void 0&&(r=10),s===void 0&&(s=AE);const{isTop:d,isBottom:u,isLeft:p,isRight:f}=A3(e),v={x:0,y:0},y={x:0,y:0},S={height:t.height*s.y,width:t.width*s.x};return!d&&a<=t.top+S.height?(v.y=st.Backward,y.y=r*Math.abs((t.top+S.height-a)/S.height)):!u&&c>=t.bottom-S.height&&(v.y=st.Forward,y.y=r*Math.abs((t.bottom-S.height-c)/S.height)),!f&&i>=t.right-S.width?(v.x=st.Forward,y.x=r*Math.abs((t.right-S.width-i)/S.width)):!p&&l<=t.left+S.width&&(v.x=st.Backward,y.x=r*Math.abs((t.left+S.width-l)/S.width)),{direction:v,speed:y}}function PE(e){if(e===document.scrollingElement){const{innerWidth:a,innerHeight:l}=window;return{top:0,left:0,right:a,bottom:l,width:a,height:l}}const{top:t,left:o,right:r,bottom:s}=e.getBoundingClientRect();return{top:t,left:o,right:r,bottom:s,width:e.clientWidth,height:e.clientHeight}}function M3(e){return e.reduce((t,o)=>gs(t,lp(o)),Cn)}function IE(e){return e.reduce((t,o)=>t+L3(o),0)}function zE(e){return e.reduce((t,o)=>t+B3(o),0)}function P3(e,t){if(t===void 0&&(t=As),!e)return;const{top:o,left:r,bottom:s,right:a}=t(e);D3(e)&&(s<=0||a<=0||o>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const FE=[["x",["left","right"],IE],["y",["top","bottom"],zE]];class qh{constructor(t,o){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Zc(o),s=M3(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[a,l,i]of FE)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(r),u=s[a]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Oa{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(o=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...o)})},this.target=t}add(t,o,r){var s;(s=this.target)==null||s.addEventListener(t,o,r),this.listeners.push([t,o,r])}}function HE(e){const{EventTarget:t}=_t(e);return e instanceof t?e:$s(e)}function Vd(e,t){const o=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(o**2+r**2)>t:"x"in t&&"y"in t?o>t.x&&r>t.y:"x"in t?o>t.x:"y"in t?r>t.y:!1}var Qt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Qt||(Qt={}));function px(e){e.preventDefault()}function UE(e){e.stopPropagation()}var xe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(xe||(xe={}));const I3={start:[xe.Space,xe.Enter],cancel:[xe.Esc],end:[xe.Space,xe.Enter]},VE=(e,t)=>{let{currentCoordinates:o}=t;switch(e.code){case xe.Right:return{...o,x:o.x+25};case xe.Left:return{...o,x:o.x-25};case xe.Down:return{...o,y:o.y+25};case xe.Up:return{...o,y:o.y-25}}};class Qh{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:o}}=t;this.props=t,this.listeners=new Oa($s(o)),this.windowListeners=new Oa(_t(o)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Qt.Resize,this.handleCancel),this.windowListeners.add(Qt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Qt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:o}=this.props,r=t.node.current;r&&P3(r),o(Cn)}handleKeyDown(t){if(Yc(t)){const{active:o,context:r,options:s}=this.props,{keyboardCodes:a=I3,coordinateGetter:l=VE,scrollBehavior:i="smooth"}=s,{code:c}=t;if(a.end.includes(c)){this.handleEnd(t);return}if(a.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=r.current,u=d?{x:d.left,y:d.top}:Cn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:o,context:r.current,currentCoordinates:u});if(p){const f=nl(p,u),v={x:0,y:0},{scrollableAncestors:y}=r.current;for(const S of y){const T=t.code,{isTop:g,isRight:h,isLeft:m,isBottom:j,maxScroll:C,minScroll:x}=A3(S),_=PE(S),k={x:Math.min(T===xe.Right?_.right-_.width/2:_.right,Math.max(T===xe.Right?_.left:_.left+_.width/2,p.x)),y:Math.min(T===xe.Down?_.bottom-_.height/2:_.bottom,Math.max(T===xe.Down?_.top:_.top+_.height/2,p.y))},R=T===xe.Right&&!h||T===xe.Left&&!m,O=T===xe.Down&&!j||T===xe.Up&&!g;if(R&&k.x!==p.x){const B=S.scrollLeft+f.x,U=T===xe.Right&&B<=C.x||T===xe.Left&&B>=x.x;if(U&&!f.y){S.scrollTo({left:B,behavior:i});return}U?v.x=S.scrollLeft-B:v.x=T===xe.Right?S.scrollLeft-C.x:S.scrollLeft-x.x,v.x&&S.scrollBy({left:-v.x,behavior:i});break}else if(O&&k.y!==p.y){const B=S.scrollTop+f.y,U=T===xe.Down&&B<=C.y||T===xe.Up&&B>=x.y;if(U&&!f.x){S.scrollTo({top:B,behavior:i});return}U?v.y=S.scrollTop-B:v.y=T===xe.Down?S.scrollTop-C.y:S.scrollTop-x.y,v.y&&S.scrollBy({top:-v.y,behavior:i});break}}this.handleMove(t,gs(nl(p,this.referenceCoordinates),v))}}}handleMove(t,o){const{onMove:r}=this.props;t.preventDefault(),r(o)}handleEnd(t){const{onEnd:o}=this.props;t.preventDefault(),this.detach(),o()}handleCancel(t){const{onCancel:o}=this.props;t.preventDefault(),this.detach(),o()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Qh.activators=[{eventName:"onKeyDown",handler:(e,t,o)=>{let{keyboardCodes:r=I3,onActivation:s}=t,{active:a}=o;const{code:l}=e.nativeEvent;if(r.start.includes(l)){const i=a.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),s==null||s({event:e.nativeEvent}),!0)}return!1}}];function hx(e){return!!(e&&"distance"in e)}function mx(e){return!!(e&&"delay"in e)}class Xh{constructor(t,o,r){var s;r===void 0&&(r=HE(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=o;const{event:a}=t,{target:l}=a;this.props=t,this.events=o,this.document=$s(l),this.documentListeners=new Oa(this.document),this.listeners=new Oa(r),this.windowListeners=new Oa(_t(l)),this.initialCoordinates=(s=fc(a))!=null?s:Cn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:o,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Qt.Resize,this.handleCancel),this.windowListeners.add(Qt.DragStart,px),this.windowListeners.add(Qt.VisibilityChange,this.handleCancel),this.windowListeners.add(Qt.ContextMenu,px),this.documentListeners.add(Qt.Keydown,this.handleKeydown),o){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(mx(o)){this.timeoutId=setTimeout(this.handleStart,o.delay);return}if(hx(o))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:o}=this.props;t&&(this.activated=!0,this.documentListeners.add(Qt.Click,UE,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Qt.SelectionChange,this.removeTextSelection),o(t))}handleMove(t){var o;const{activated:r,initialCoordinates:s,props:a}=this,{onMove:l,options:{activationConstraint:i}}=a;if(!s)return;const c=(o=fc(t))!=null?o:Cn,d=nl(s,c);if(!r&&i){if(hx(i)){if(i.tolerance!=null&&Vd(d,i.tolerance))return this.handleCancel();if(Vd(d,i.distance))return this.handleStart()}return mx(i)&&Vd(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===xe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const WE={move:{name:"pointermove"},end:{name:"pointerup"}};class Jh extends Xh{constructor(t){const{event:o}=t,r=$s(o.target);super(t,WE,r)}}Jh.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:o}=e,{onActivation:r}=t;return!o.isPrimary||o.button!==0?!1:(r==null||r({event:o}),!0)}}];const KE={move:{name:"mousemove"},end:{name:"mouseup"}};var ip;(function(e){e[e.RightClick=2]="RightClick"})(ip||(ip={}));class GE extends Xh{constructor(t){super(t,KE,$s(t.event.target))}}GE.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:o}=e,{onActivation:r}=t;return o.button===ip.RightClick?!1:(r==null||r({event:o}),!0)}}];const Wd={move:{name:"touchmove"},end:{name:"touchend"}};class YE extends Xh{constructor(t){super(t,Wd)}static setup(){return window.addEventListener(Wd.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Wd.move.name,t)};function t(){}}}YE.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:o}=e,{onActivation:r}=t;const{touches:s}=o;return s.length>1?!1:(r==null||r({event:o}),!0)}}];var Da;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Da||(Da={}));var gc;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(gc||(gc={}));function ZE(e){let{acceleration:t,activator:o=Da.Pointer,canScroll:r,draggingRect:s,enabled:a,interval:l=5,order:i=gc.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const v=QE({delta:p,disabled:!a}),[y,S]=iE(),T=b.useRef({x:0,y:0}),g=b.useRef({x:0,y:0}),h=b.useMemo(()=>{switch(o){case Da.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Da.DraggableRect:return s}},[o,s,c]),m=b.useRef(null),j=b.useCallback(()=>{const x=m.current;if(!x)return;const _=T.current.x*g.current.x,k=T.current.y*g.current.y;x.scrollBy(_,k)},[]),C=b.useMemo(()=>i===gc.TreeOrder?[...d].reverse():d,[i,d]);b.useEffect(()=>{if(!a||!d.length||!h){S();return}for(const x of C){if((r==null?void 0:r(x))===!1)continue;const _=d.indexOf(x),k=u[_];if(!k)continue;const{direction:R,speed:O}=ME(x,k,h,t,f);for(const B of["x","y"])v[B][R[B]]||(O[B]=0,R[B]=0);if(O.x>0||O.y>0){S(),m.current=x,y(j,l),T.current=O,g.current=R;return}}T.current={x:0,y:0},g.current={x:0,y:0},S()},[t,j,r,S,a,l,JSON.stringify(h),JSON.stringify(v),y,d,C,u,JSON.stringify(f)])}const qE={x:{[st.Backward]:!1,[st.Forward]:!1},y:{[st.Backward]:!1,[st.Forward]:!1}};function QE(e){let{delta:t,disabled:o}=e;const r=mc(t);return Sl(s=>{if(o||!r||!s)return qE;const a={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[st.Backward]:s.x[st.Backward]||a.x===-1,[st.Forward]:s.x[st.Forward]||a.x===1},y:{[st.Backward]:s.y[st.Backward]||a.y===-1,[st.Forward]:s.y[st.Forward]||a.y===1}}},[o,t,r])}function XE(e,t){const o=t!==null?e.get(t):void 0,r=o?o.node.current:null;return Sl(s=>{var a;return t===null?null:(a=r??s)!=null?a:null},[r,t])}function JE(e,t){return b.useMemo(()=>e.reduce((o,r)=>{const{sensor:s}=r,a=s.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,r)}));return[...o,...a]},[]),[e,t])}var ol;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(ol||(ol={}));var cp;(function(e){e.Optimized="optimized"})(cp||(cp={}));const fx=new Map;function ek(e,t){let{dragging:o,dependencies:r,config:s}=t;const[a,l]=b.useState(null),{frequency:i,measure:c,strategy:d}=s,u=b.useRef(e),p=T(),f=tl(p),v=b.useCallback(function(g){g===void 0&&(g=[]),!f.current&&l(h=>h===null?g:h.concat(g.filter(m=>!h.includes(m))))},[f]),y=b.useRef(null),S=Sl(g=>{if(p&&!o)return fx;if(!g||g===fx||u.current!==e||a!=null){const h=new Map;for(let m of e){if(!m)continue;if(a&&a.length>0&&!a.includes(m.id)&&m.rect.current){h.set(m.id,m.rect.current);continue}const j=m.node.current,C=j?new qh(c(j),j):null;m.rect.current=C,C&&h.set(m.id,C)}return h}return g},[e,a,o,p,c]);return b.useEffect(()=>{u.current=e},[e]),b.useEffect(()=>{p||v()},[o,p]),b.useEffect(()=>{a&&a.length>0&&l(null)},[JSON.stringify(a)]),b.useEffect(()=>{p||typeof i!="number"||y.current!==null||(y.current=setTimeout(()=>{v(),y.current=null},i))},[i,p,v,...r]),{droppableRects:S,measureDroppableContainers:v,measuringScheduled:a!=null};function T(){switch(d){case ol.Always:return!1;case ol.BeforeDragging:return o;default:return!o}}}function em(e,t){return Sl(o=>e?o||(typeof t=="function"?t(e):e):null,[t,e])}function tk(e,t){return em(e,t)}function nk(e){let{callback:t,disabled:o}=e;const r=Gc(t),s=b.useMemo(()=>{if(o||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:a}=window;return new a(r)},[r,o]);return b.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function qc(e){let{callback:t,disabled:o}=e;const r=Gc(t),s=b.useMemo(()=>{if(o||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:a}=window;return new a(r)},[o]);return b.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function ok(e){return new qh(As(e),e)}function xx(e,t,o){t===void 0&&(t=ok);const[r,s]=b.useReducer(i,null),a=nk({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){s();break}}}}),l=qc({callback:s});return an(()=>{s(),e?(l==null||l.observe(e),a==null||a.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),a==null||a.disconnect())},[e]),r;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??o)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function rk(e){const t=em(e);return N3(e,t)}const gx=[];function sk(e){const t=b.useRef(e),o=Sl(r=>e?r&&r!==gx&&e&&t.current&&e.parentNode===t.current.parentNode?r:Zc(e):gx,[e]);return b.useEffect(()=>{t.current=e},[e]),o}function ak(e){const[t,o]=b.useState(null),r=b.useRef(e),s=b.useCallback(a=>{const l=Ud(a.target);l&&o(i=>i?(i.set(l,lp(l)),new Map(i)):null)},[]);return b.useEffect(()=>{const a=r.current;if(e!==a){l(a);const i=e.map(c=>{const d=Ud(c);return d?(d.addEventListener("scroll",s,{passive:!0}),[d,lp(d)]):null}).filter(c=>c!=null);o(i.length?new Map(i):null),r.current=e}return()=>{l(e),l(a)};function l(i){i.forEach(c=>{const d=Ud(c);d==null||d.removeEventListener("scroll",s)})}},[s,e]),b.useMemo(()=>e.length?t?Array.from(t.values()).reduce((a,l)=>gs(a,l),Cn):M3(e):Cn,[e,t])}function bx(e,t){t===void 0&&(t=[]);const o=b.useRef(null);return b.useEffect(()=>{o.current=null},t),b.useEffect(()=>{const r=e!==Cn;r&&!o.current&&(o.current=e),!r&&o.current&&(o.current=null)},[e]),o.current?nl(e,o.current):Cn}function lk(e){b.useEffect(()=>{if(!Kc)return;const t=e.map(o=>{let{sensor:r}=o;return r.setup==null?void 0:r.setup()});return()=>{for(const o of t)o==null||o()}},e.map(t=>{let{sensor:o}=t;return o}))}function ik(e,t){return b.useMemo(()=>e.reduce((o,r)=>{let{eventName:s,handler:a}=r;return o[s]=l=>{a(l,t)},o},{}),[e,t])}function z3(e){return b.useMemo(()=>e?LE(e):null,[e])}const Kd=[];function ck(e,t){t===void 0&&(t=As);const[o]=e,r=z3(o?_t(o):null),[s,a]=b.useReducer(i,Kd),l=qc({callback:a});return e.length>0&&s===Kd&&a(),an(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),a())},[e]),s;function i(){return e.length?e.map(c=>$3(c)?r:new qh(t(c),c)):Kd}}function F3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return yl(t)?t:e}function dk(e){let{measure:t}=e;const[o,r]=b.useState(null),s=b.useCallback(d=>{for(const{target:u}of d)if(yl(u)){r(p=>{const f=t(u);return p?{...p,width:f.width,height:f.height}:f});break}},[t]),a=qc({callback:s}),l=b.useCallback(d=>{const u=F3(d);a==null||a.disconnect(),u&&(a==null||a.observe(u)),r(u?t(u):null)},[t,a]),[i,c]=hc(l);return b.useMemo(()=>({nodeRef:i,rect:o,setRef:c}),[o,i,c])}const uk=[{sensor:Jh,options:{}},{sensor:Qh,options:{}}],pk={current:{}},Ai={draggable:{measure:ux},droppable:{measure:ux,strategy:ol.WhileDragging,frequency:cp.Optimized},dragOverlay:{measure:As}};class La extends Map{get(t){var o;return t!=null&&(o=super.get(t))!=null?o:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:o}=t;return!o})}getNodeFor(t){var o,r;return(o=(r=this.get(t))==null?void 0:r.node.current)!=null?o:void 0}}const hk={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new La,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:xc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ai,measureDroppableContainers:xc,windowRect:null,measuringScheduled:!1},H3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:xc,draggableNodes:new Map,over:null,measureDroppableContainers:xc},_l=b.createContext(H3),U3=b.createContext(hk);function mk(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new La}}}function fk(e,t){switch(t.type){case Xe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Xe.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Xe.DragEnd:case Xe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Xe.RegisterDroppable:{const{element:o}=t,{id:r}=o,s=new La(e.droppable.containers);return s.set(r,o),{...e,droppable:{...e.droppable,containers:s}}}case Xe.SetDroppableDisabled:{const{id:o,key:r,disabled:s}=t,a=e.droppable.containers.get(o);if(!a||r!==a.key)return e;const l=new La(e.droppable.containers);return l.set(o,{...a,disabled:s}),{...e,droppable:{...e.droppable,containers:l}}}case Xe.UnregisterDroppable:{const{id:o,key:r}=t,s=e.droppable.containers.get(o);if(!s||r!==s.key)return e;const a=new La(e.droppable.containers);return a.delete(o),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function xk(e){let{disabled:t}=e;const{active:o,activatorEvent:r,draggableNodes:s}=b.useContext(_l),a=mc(r),l=mc(o==null?void 0:o.id);return b.useEffect(()=>{if(!t&&!r&&a&&l!=null){if(!Yc(a)||document.activeElement===a.target)return;const i=s.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=uE(u);if(p){p.focus();break}}})}},[r,t,s,l,a]),null}function V3(e,t){let{transform:o,...r}=t;return e!=null&&e.length?e.reduce((s,a)=>a({transform:s,...r}),o):o}function gk(e){return b.useMemo(()=>({draggable:{...Ai.draggable,...e==null?void 0:e.draggable},droppable:{...Ai.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ai.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function bk(e){let{activeNode:t,measure:o,initialRect:r,config:s=!0}=e;const a=b.useRef(!1),{x:l,y:i}=typeof s=="boolean"?{x:s,y:s}:s;an(()=>{if(!l&&!i||!t){a.current=!1;return}if(a.current||!r)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=o(d),p=N3(u,r);if(l||(p.x=0),i||(p.y=0),a.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const f=D3(d);f&&f.scrollBy({top:p.y,left:p.x})}},[t,l,i,r,o])}const Qc=b.createContext({...Cn,scaleX:1,scaleY:1});var So;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(So||(So={}));const vk=b.memo(function(t){var o,r,s,a;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=uk,collisionDetection:p=EE,measuring:f,modifiers:v,...y}=t;const S=b.useReducer(fk,void 0,mk),[T,g]=S,[h,m]=gE(),[j,C]=b.useState(So.Uninitialized),x=j===So.Initialized,{draggable:{active:_,nodes:k,translate:R},droppable:{containers:O}}=T,B=_?k.get(_):null,U=b.useRef({initial:null,translated:null}),K=b.useMemo(()=>{var Ye;return _!=null?{id:_,data:(Ye=B==null?void 0:B.data)!=null?Ye:pk,rect:U}:null},[_,B]),ne=b.useRef(null),[we,je]=b.useState(null),[ee,$]=b.useState(null),P=tl(y,Object.values(y)),I=Cl("DndDescribedBy",l),W=b.useMemo(()=>O.getEnabled(),[O]),Y=gk(f),{droppableRects:Te,measureDroppableContainers:de,measuringScheduled:Se}=ek(W,{dragging:x,dependencies:[R.x,R.y],config:Y.droppable}),ce=XE(k,_),Le=b.useMemo(()=>ee?fc(ee):null,[ee]),ut=ad(),Tt=tk(ce,Y.draggable.measure);bk({activeNode:_?k.get(_):null,config:ut.layoutShiftCompensation,initialRect:Tt,measure:Y.draggable.measure});const fe=xx(ce,Y.draggable.measure,Tt),Be=xx(ce?ce.parentElement:null),nt=b.useRef({activatorEvent:null,active:null,activeNode:ce,collisionRect:null,collisions:null,droppableRects:Te,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),zt=O.getNodeFor((o=nt.current.over)==null?void 0:o.id),un=dk({measure:Y.dragOverlay.measure}),Et=(r=un.nodeRef.current)!=null?r:ce,mo=x?(s=un.rect)!=null?s:fe:null,$l=!!(un.nodeRef.current&&un.rect),Al=rk($l?null:fe),Vs=z3(Et?_t(Et):null),Rn=sk(x?zt??ce:null),Nn=ck(Rn),er=V3(v,{transform:{x:R.x-Al.x,y:R.y-Al.y,scaleX:1,scaleY:1},activatorEvent:ee,active:K,activeNodeRect:fe,containerNodeRect:Be,draggingNodeRect:mo,over:nt.current.over,overlayNodeRect:un.rect,scrollableAncestors:Rn,scrollableAncestorRects:Nn,windowRect:Vs}),$r=Le?gs(Le,R):null,pn=ak(Rn),tr=bx(pn),Ml=bx(pn,[fe]),hn=gs(er,tr),fo=mo?NE(mo,er):null,kt=K&&fo?p({active:K,collisionRect:fo,droppableRects:Te,droppableContainers:W,pointerCoordinates:$r}):null,Ws=R3(kt,"id"),[mn,Ks]=b.useState(null),rd=$l?er:gs(er,Ml),Pl=kE(rd,(a=mn==null?void 0:mn.rect)!=null?a:null,fe),nr=b.useCallback((Ye,bt)=>{let{sensor:E,options:N}=bt;if(ne.current==null)return;const D=k.get(ne.current);if(!D)return;const M=Ye.nativeEvent,F=new E({active:ne.current,activeNode:D,event:M,options:N,context:nt,onStart(q){const J=ne.current;if(J==null)return;const Z=k.get(J);if(!Z)return;const{onDragStart:ue}=P.current,Me={active:{id:J,data:Z.data,rect:U}};Zn.unstable_batchedUpdates(()=>{ue==null||ue(Me),C(So.Initializing),g({type:Xe.DragStart,initialCoordinates:q,active:J}),h({type:"onDragStart",event:Me})})},onMove(q){g({type:Xe.DragMove,coordinates:q})},onEnd:se(Xe.DragEnd),onCancel:se(Xe.DragCancel)});Zn.unstable_batchedUpdates(()=>{je(F),$(Ye.nativeEvent)});function se(q){return async function(){const{active:Z,collisions:ue,over:Me,scrollAdjustedTranslate:le}=nt.current;let ye=null;if(Z&&le){const{cancelDrop:Pe}=P.current;ye={activatorEvent:M,active:Z,collisions:ue,delta:le,over:Me},q===Xe.DragEnd&&typeof Pe=="function"&&await Promise.resolve(Pe(ye))&&(q=Xe.DragCancel)}ne.current=null,Zn.unstable_batchedUpdates(()=>{g({type:q}),C(So.Uninitialized),Ks(null),je(null),$(null);const Pe=q===Xe.DragEnd?"onDragEnd":"onDragCancel";if(ye){const pt=P.current[Pe];pt==null||pt(ye),h({type:Pe,event:ye})}})}}},[k]),Il=b.useCallback((Ye,bt)=>(E,N)=>{const D=E.nativeEvent,M=k.get(N);if(ne.current!==null||!M||D.dndKit||D.defaultPrevented)return;const F={active:M};Ye(E,bt.options,F)===!0&&(D.dndKit={capturedBy:bt.sensor},ne.current=N,nr(E,bt))},[k,nr]),Ar=JE(u,Il);lk(u),an(()=>{fe&&j===So.Initializing&&C(So.Initialized)},[fe,j]),b.useEffect(()=>{const{onDragMove:Ye}=P.current,{active:bt,activatorEvent:E,collisions:N,over:D}=nt.current;if(!bt||!E)return;const M={active:bt,activatorEvent:E,collisions:N,delta:{x:hn.x,y:hn.y},over:D};Zn.unstable_batchedUpdates(()=>{Ye==null||Ye(M),h({type:"onDragMove",event:M})})},[hn.x,hn.y]),b.useEffect(()=>{const{active:Ye,activatorEvent:bt,collisions:E,droppableContainers:N,scrollAdjustedTranslate:D}=nt.current;if(!Ye||ne.current==null||!bt||!D)return;const{onDragOver:M}=P.current,F=N.get(Ws),se=F&&F.rect.current?{id:F.id,rect:F.rect.current,data:F.data,disabled:F.disabled}:null,q={active:Ye,activatorEvent:bt,collisions:E,delta:{x:D.x,y:D.y},over:se};Zn.unstable_batchedUpdates(()=>{Ks(se),M==null||M(q),h({type:"onDragOver",event:q})})},[Ws]),an(()=>{nt.current={activatorEvent:ee,active:K,activeNode:ce,collisionRect:fo,collisions:kt,droppableRects:Te,draggableNodes:k,draggingNode:Et,draggingNodeRect:mo,droppableContainers:O,over:mn,scrollableAncestors:Rn,scrollAdjustedTranslate:hn},U.current={initial:mo,translated:fo}},[K,ce,kt,fo,k,Et,mo,Te,O,mn,Rn,hn]),ZE({...ut,delta:R,draggingRect:fo,pointerCoordinates:$r,scrollableAncestors:Rn,scrollableAncestorRects:Nn});const sd=b.useMemo(()=>({active:K,activeNode:ce,activeNodeRect:fe,activatorEvent:ee,collisions:kt,containerNodeRect:Be,dragOverlay:un,draggableNodes:k,droppableContainers:O,droppableRects:Te,over:mn,measureDroppableContainers:de,scrollableAncestors:Rn,scrollableAncestorRects:Nn,measuringConfiguration:Y,measuringScheduled:Se,windowRect:Vs}),[K,ce,fe,ee,kt,Be,un,k,O,Te,mn,de,Rn,Nn,Y,Se,Vs]),zl=b.useMemo(()=>({activatorEvent:ee,activators:Ar,active:K,activeNodeRect:fe,ariaDescribedById:{draggable:I},dispatch:g,draggableNodes:k,over:mn,measureDroppableContainers:de}),[ee,Ar,K,fe,g,I,k,mn,de]);return H.createElement(T3.Provider,{value:m},H.createElement(_l.Provider,{value:zl},H.createElement(U3.Provider,{value:sd},H.createElement(Qc.Provider,{value:Pl},d)),H.createElement(xk,{disabled:(i==null?void 0:i.restoreFocus)===!1})),H.createElement(jE,{...i,hiddenTextDescribedById:I}));function ad(){const Ye=(we==null?void 0:we.autoScrollEnabled)===!1,bt=typeof c=="object"?c.enabled===!1:c===!1,E=x&&!Ye&&!bt;return typeof c=="object"?{...c,enabled:E}:{enabled:E}}}),jk=b.createContext(null),vx="button",yk="Droppable";function Sk(e){let{id:t,data:o,disabled:r=!1,attributes:s}=e;const a=Cl(yk),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=b.useContext(_l),{role:v=vx,roleDescription:y="draggable",tabIndex:S=0}=s??{},T=(c==null?void 0:c.id)===t,g=b.useContext(T?Qc:jk),[h,m]=hc(),[j,C]=hc(),x=ik(l,t),_=tl(o);an(()=>(p.set(t,{id:t,key:a,node:h,activatorNode:j,data:_}),()=>{const R=p.get(t);R&&R.key===a&&p.delete(t)}),[p,t]);const k=b.useMemo(()=>({role:v,tabIndex:S,"aria-disabled":r,"aria-pressed":T&&v===vx?!0:void 0,"aria-roledescription":y,"aria-describedby":u.draggable}),[r,v,S,T,y,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:k,isDragging:T,listeners:r?void 0:x,node:h,over:f,setNodeRef:m,setActivatorNodeRef:C,transform:g}}function W3(){return b.useContext(U3)}const Ck="Droppable",_k={timeout:25};function wk(e){let{data:t,disabled:o=!1,id:r,resizeObserverConfig:s}=e;const a=Cl(Ck),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=b.useContext(_l),u=b.useRef({disabled:o}),p=b.useRef(!1),f=b.useRef(null),v=b.useRef(null),{disabled:y,updateMeasurementsFor:S,timeout:T}={..._k,...s},g=tl(S??r),h=b.useCallback(()=>{if(!p.current){p.current=!0;return}v.current!=null&&clearTimeout(v.current),v.current=setTimeout(()=>{d(Array.isArray(g.current)?g.current:[g.current]),v.current=null},T)},[T]),m=qc({callback:h,disabled:y||!l}),j=b.useCallback((k,R)=>{m&&(R&&(m.unobserve(R),p.current=!1),k&&m.observe(k))},[m]),[C,x]=hc(j),_=tl(t);return b.useEffect(()=>{!m||!C.current||(m.disconnect(),p.current=!1,m.observe(C.current))},[C,m]),an(()=>(i({type:Xe.RegisterDroppable,element:{id:r,key:a,disabled:o,node:C,rect:f,data:_}}),()=>i({type:Xe.UnregisterDroppable,key:a,id:r})),[r]),b.useEffect(()=>{o!==u.current.disabled&&(i({type:Xe.SetDroppableDisabled,id:r,key:a,disabled:o}),u.current.disabled=o)},[r,a,o,i]),{active:l,rect:f,isOver:(c==null?void 0:c.id)===r,node:C,over:c,setNodeRef:x}}function Tk(e){let{animation:t,children:o}=e;const[r,s]=b.useState(null),[a,l]=b.useState(null),i=mc(o);return!o&&!r&&i&&s(i),an(()=>{if(!a)return;const c=r==null?void 0:r.key,d=r==null?void 0:r.props.id;if(c==null||d==null){s(null);return}Promise.resolve(t(d,a)).then(()=>{s(null)})},[t,r,a]),H.createElement(H.Fragment,null,o,r?b.cloneElement(r,{ref:l}):null)}const Ek={x:0,y:0,scaleX:1,scaleY:1};function kk(e){let{children:t}=e;return H.createElement(_l.Provider,{value:H3},H.createElement(Qc.Provider,{value:Ek},t))}const Rk={position:"fixed",touchAction:"none"},Nk=e=>Yc(e)?"transform 250ms ease":void 0,Ok=b.forwardRef((e,t)=>{let{as:o,activatorEvent:r,adjustScale:s,children:a,className:l,rect:i,style:c,transform:d,transition:u=Nk}=e;if(!i)return null;const p=s?d:{...d,scaleX:1,scaleY:1},f={...Rk,width:i.width,height:i.height,top:i.top,left:i.left,transform:Po.Transform.toString(p),transformOrigin:s&&r?SE(r,i):void 0,transition:typeof u=="function"?u(r):u,...c};return H.createElement(o,{className:l,style:f,ref:t},a)}),Dk=e=>t=>{let{active:o,dragOverlay:r}=t;const s={},{styles:a,className:l}=e;if(a!=null&&a.active)for(const[i,c]of Object.entries(a.active))c!==void 0&&(s[i]=o.node.style.getPropertyValue(i),o.node.style.setProperty(i,c));if(a!=null&&a.dragOverlay)for(const[i,c]of Object.entries(a.dragOverlay))c!==void 0&&r.node.style.setProperty(i,c);return l!=null&&l.active&&o.node.classList.add(l.active),l!=null&&l.dragOverlay&&r.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(s))o.node.style.setProperty(c,d);l!=null&&l.active&&o.node.classList.remove(l.active)}},Lk=e=>{let{transform:{initial:t,final:o}}=e;return[{transform:Po.Transform.toString(t)},{transform:Po.Transform.toString(o)}]},Bk={duration:250,easing:"ease",keyframes:Lk,sideEffects:Dk({styles:{active:{opacity:"0"}}})};function $k(e){let{config:t,draggableNodes:o,droppableContainers:r,measuringConfiguration:s}=e;return Gc((a,l)=>{if(t===null)return;const i=o.get(a);if(!i)return;const c=i.node.current;if(!c)return;const d=F3(l);if(!d)return;const{transform:u}=_t(l).getComputedStyle(l),p=O3(u);if(!p)return;const f=typeof t=="function"?t:Ak(t);return P3(c,s.draggable.measure),f({active:{id:a,data:i.data,node:c,rect:s.draggable.measure(c)},draggableNodes:o,dragOverlay:{node:l,rect:s.dragOverlay.measure(d)},droppableContainers:r,measuringConfiguration:s,transform:p})})}function Ak(e){const{duration:t,easing:o,sideEffects:r,keyframes:s}={...Bk,...e};return a=>{let{active:l,dragOverlay:i,transform:c,...d}=a;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},f={x:c.x-u.x,y:c.y-u.y,...p},v=s({...d,active:l,dragOverlay:i,transform:{initial:c,final:f}}),[y]=v,S=v[v.length-1];if(JSON.stringify(y)===JSON.stringify(S))return;const T=r==null?void 0:r({active:l,dragOverlay:i,...d}),g=i.node.animate(v,{duration:t,easing:o,fill:"forwards"});return new Promise(h=>{g.onfinish=()=>{T==null||T(),h()}})}}let jx=0;function Mk(e){return b.useMemo(()=>{if(e!=null)return jx++,jx},[e])}const Pk=H.memo(e=>{let{adjustScale:t=!1,children:o,dropAnimation:r,style:s,transition:a,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:v,draggableNodes:y,droppableContainers:S,dragOverlay:T,over:g,measuringConfiguration:h,scrollableAncestors:m,scrollableAncestorRects:j,windowRect:C}=W3(),x=b.useContext(Qc),_=Mk(p==null?void 0:p.id),k=V3(l,{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:v,draggingNodeRect:T.rect,over:g,overlayNodeRect:T.rect,scrollableAncestors:m,scrollableAncestorRects:j,transform:x,windowRect:C}),R=em(f),O=$k({config:r,draggableNodes:y,droppableContainers:S,measuringConfiguration:h}),B=R?T.setRef:void 0;return H.createElement(kk,null,H.createElement(Tk,{animation:O},p&&_?H.createElement(Ok,{key:_,id:p.id,ref:B,as:i,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:R,style:{zIndex:d,...s},transform:k},o):null))});function tm(e,t,o){const r=e.slice();return r.splice(o<0?r.length+o:o,0,r.splice(t,1)[0]),r}function Ik(e,t){return e.reduce((o,r,s)=>{const a=t.get(r);return a&&(o[s]=a),o},Array(e.length))}function hi(e){return e!==null&&e>=0}function zk(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}function Fk(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const mi={scaleX:1,scaleY:1},Hk=e=>{var t;let{rects:o,activeNodeRect:r,activeIndex:s,overIndex:a,index:l}=e;const i=(t=o[s])!=null?t:r;if(!i)return null;const c=Uk(o,l,s);if(l===s){const d=o[a];return d?{x:s<a?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...mi}:null}return l>s&&l<=a?{x:-i.width-c,y:0,...mi}:l<s&&l>=a?{x:i.width+c,y:0,...mi}:{x:0,y:0,...mi}};function Uk(e,t,o){const r=e[t],s=e[t-1],a=e[t+1];return!r||!s&&!a?0:o<t?s?r.left-(s.left+s.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(s.left+s.width)}const nm=e=>{let{rects:t,activeIndex:o,overIndex:r,index:s}=e;const a=tm(t,r,o),l=t[s],i=a[s];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},fi={scaleX:1,scaleY:1},Vk=e=>{var t;let{activeIndex:o,activeNodeRect:r,index:s,rects:a,overIndex:l}=e;const i=(t=a[o])!=null?t:r;if(!i)return null;if(s===o){const d=a[l];return d?{x:0,y:o<l?d.top+d.height-(i.top+i.height):d.top-i.top,...fi}:null}const c=Wk(a,s,o);return s>o&&s<=l?{x:0,y:-i.height-c,...fi}:s<o&&s>=l?{x:0,y:i.height+c,...fi}:{x:0,y:0,...fi}};function Wk(e,t,o){const r=e[t],s=e[t-1],a=e[t+1];return r?o<t?s?r.top-(s.top+s.height):a?a.top-(r.top+r.height):0:a?a.top-(r.top+r.height):s?r.top-(s.top+s.height):0:0}const K3="Sortable",G3=H.createContext({activeIndex:-1,containerId:K3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:nm,disabled:{draggable:!1,droppable:!1}});function Kk(e){let{children:t,id:o,items:r,strategy:s=nm,disabled:a=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=W3(),p=Cl(K3,o),f=i.rect!==null,v=b.useMemo(()=>r.map(x=>typeof x=="object"&&"id"in x?x.id:x),[r]),y=l!=null,S=l?v.indexOf(l.id):-1,T=d?v.indexOf(d.id):-1,g=b.useRef(v),h=!zk(v,g.current),m=T!==-1&&S===-1||h,j=Fk(a);an(()=>{h&&y&&u(v)},[h,v,y,u]),b.useEffect(()=>{g.current=v},[v]);const C=b.useMemo(()=>({activeIndex:S,containerId:p,disabled:j,disableTransforms:m,items:v,overIndex:T,useDragOverlay:f,sortedRects:Ik(v,c),strategy:s}),[S,p,j.draggable,j.droppable,m,v,T,c,f,s]);return H.createElement(G3.Provider,{value:C},t)}const Gk=e=>{let{id:t,items:o,activeIndex:r,overIndex:s}=e;return tm(o,r,s).indexOf(t)},Yk=e=>{let{containerId:t,isSorting:o,wasDragging:r,index:s,items:a,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!r||i!==a&&s===l?!1:o?!0:l!==s&&t===c},Zk={duration:200,easing:"ease"},Y3="transform",qk=Po.Transition.toString({property:Y3,duration:0,easing:"linear"}),Qk={roleDescription:"sortable"};function Xk(e){let{disabled:t,index:o,node:r,rect:s}=e;const[a,l]=b.useState(null),i=b.useRef(o);return an(()=>{if(!t&&o!==i.current&&r.current){const c=s.current;if(c){const d=As(r.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}o!==i.current&&(i.current=o)},[t,o,r,s]),b.useEffect(()=>{a&&l(null)},[a]),a}function Jk(e){let{animateLayoutChanges:t=Yk,attributes:o,disabled:r,data:s,getNewIndex:a=Gk,id:l,strategy:i,resizeObserverConfig:c,transition:d=Zk}=e;const{items:u,containerId:p,activeIndex:f,disabled:v,disableTransforms:y,sortedRects:S,overIndex:T,useDragOverlay:g,strategy:h}=b.useContext(G3),m=eR(r,v),j=u.indexOf(l),C=b.useMemo(()=>({sortable:{containerId:p,index:j,items:u},...s}),[p,s,j,u]),x=b.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:_,node:k,isOver:R,setNodeRef:O}=wk({id:l,data:C,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:B,activatorEvent:U,activeNodeRect:K,attributes:ne,setNodeRef:we,listeners:je,isDragging:ee,over:$,setActivatorNodeRef:P,transform:I}=Sk({id:l,data:C,attributes:{...Qk,...o},disabled:m.draggable}),W=lE(O,we),Y=!!B,Te=Y&&!y&&hi(f)&&hi(T),de=!g&&ee,Se=de&&Te?I:null,Le=Te?Se??(i??h)({rects:S,activeNodeRect:K,activeIndex:f,overIndex:T,index:j}):null,ut=hi(f)&&hi(T)?a({id:l,items:u,activeIndex:f,overIndex:T}):j,Tt=B==null?void 0:B.id,fe=b.useRef({activeId:Tt,items:u,newIndex:ut,containerId:p}),Be=u!==fe.current.items,nt=t({active:B,containerId:p,isDragging:ee,isSorting:Y,id:l,index:j,items:u,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:d,wasDragging:fe.current.activeId!=null}),zt=Xk({disabled:!nt,index:j,node:k,rect:_});return b.useEffect(()=>{Y&&fe.current.newIndex!==ut&&(fe.current.newIndex=ut),p!==fe.current.containerId&&(fe.current.containerId=p),u!==fe.current.items&&(fe.current.items=u)},[Y,ut,p,u]),b.useEffect(()=>{if(Tt===fe.current.activeId)return;if(Tt&&!fe.current.activeId){fe.current.activeId=Tt;return}const Et=setTimeout(()=>{fe.current.activeId=Tt},50);return()=>clearTimeout(Et)},[Tt]),{active:B,activeIndex:f,attributes:ne,data:C,rect:_,index:j,newIndex:ut,items:u,isOver:R,isSorting:Y,isDragging:ee,listeners:je,node:k,overIndex:T,over:$,setNodeRef:W,setActivatorNodeRef:P,setDroppableNodeRef:O,setDraggableNodeRef:we,transform:zt??Le,transition:un()};function un(){if(zt||Be&&fe.current.newIndex===j)return qk;if(!(de&&!Yc(U)||!d)&&(Y||nt))return Po.Transition.toString({...d,property:Y3})}}function eR(e,t){var o,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(o=e==null?void 0:e.draggable)!=null?o:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function bc(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const tR=[xe.Down,xe.Right,xe.Up,xe.Left],nR=(e,t)=>{let{context:{active:o,collisionRect:r,droppableRects:s,droppableContainers:a,over:l,scrollableAncestors:i}}=t;if(tR.includes(e.code)){if(e.preventDefault(),!o||!r)return;const c=[];a.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const f=s.get(p.id);if(f)switch(e.code){case xe.Down:r.top<f.top&&c.push(p);break;case xe.Up:r.top>f.top&&c.push(p);break;case xe.Left:r.left>f.left&&c.push(p);break;case xe.Right:r.left<f.left&&c.push(p);break}});const d=wE({active:o,collisionRect:r,droppableRects:s,droppableContainers:c,pointerCoordinates:null});let u=R3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=a.get(o.id),f=a.get(u),v=f?s.get(f.id):null,y=f==null?void 0:f.node.current;if(y&&v&&p&&f){const T=Zc(y).some((x,_)=>i[_]!==x),g=Z3(p,f),h=oR(p,f),m=T||!g?{x:0,y:0}:{x:h?r.width-v.width:0,y:h?r.height-v.height:0},j={x:v.left,y:v.top};return m.x&&m.y?j:nl(j,m)}}}};function Z3(e,t){return!bc(e)||!bc(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function oR(e,t){return!bc(e)||!bc(t)||!Z3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const rR=e=>{let{transform:t}=e;return{...t,y:0}};function q3(e,t,o){const r={...e};return t.top+e.y<=o.top?r.y=o.top-t.top:t.bottom+e.y>=o.top+o.height&&(r.y=o.top+o.height-t.bottom),t.left+e.x<=o.left?r.x=o.left-t.left:t.right+e.x>=o.left+o.width&&(r.x=o.left+o.width-t.right),r}const om=e=>{let{containerNodeRect:t,draggingNodeRect:o,transform:r}=e;return!o||!t?r:q3(r,o,t)},sR=e=>{let{transform:t}=e;return{...t,x:0}},Q3=e=>{let{transform:t,draggingNodeRect:o,windowRect:r}=e;return!o||!r?t:q3(t,o,r)},aR=({id:e,item:t,Item:o,...r})=>{const{attributes:s,listeners:a,setNodeRef:l,transform:i,transition:c}=Jk({id:e}),d={transform:Po.Translate.toString(i),transition:c};return n.jsx(o,{item:t,setNodeRef:l,style:d,listeners:a,...s,...r})},X3=({items:e,setOrder:t,List:o=({children:c})=>c,Item:r,modifiers:s=[om],strategy:a=nm,Overlay:l,...i})=>({Context:({children:u})=>{const[p,f]=b.useState(null),v=yE(ix(Jh),ix(Qh,{coordinateGetter:nR}));function y(g){const h=e.findIndex(m=>m.id===g.active.id);f(h)}function S(){f(null)}function T(g){const{active:h,over:m}=g;if(h.id!==m.id){const j=e.findIndex(x=>x.id===h.id),C=e.findIndex(x=>x.id===m.id);e[j].moved=!0,t(tm(e,j,C))}f(null)}return n.jsxs(vk,{sensors:v,collisionDetection:_E,onDragStart:y,onDragCancel:S,onDragEnd:T,modifiers:s,children:[n.jsx(Kk,{items:e,strategy:a,children:u}),l&&p&&n.jsx(Pk,{children:n.jsx(l,{item:p,...i})})]})},Content:()=>n.jsx(o,{...i,children:e.map(u=>n.jsx(aR,{id:u.id,item:u,Item:r,...i,role:"drag"},u.id))})}),rm=e=>{const{Context:t,Content:o}=X3(e);return n.jsx(t,{children:n.jsx(o,{})})},J3=({...e})=>n.jsx(rm,{modifiers:[sR,Q3,om],strategy:Vk,...e}),lR=({columns:e,visibleColumns:t,toggleVisibleColumn:o,columnOrder:r,changeColumnOrder:s})=>{const a=el(t),l=r.map(c=>Ih(e[c],"id label")),i=c=>{s(c.map(d=>d.id))};return n.jsxs(En,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[n.jsx("div",{className:"sortable list vertical",children:n.jsx(J3,{items:l,Item:rE,setOrder:i,isVisible:a,toggleVisibleColumn:o})}),n.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",n.jsx("br",{}),"Drag handle to order."]}),n.jsx(aE,{})]})},iR=gt.Consumer(lR),cR=({headerClass:e,Summary:t=AT,PageSize:o=qT,Columns:r=iR})=>n.jsx("header",{className:e,children:n.jsxs("div",{className:"flex space middle",children:[n.jsx("div",{children:n.jsx(t,{})}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx(r,{}),n.jsx(o,{})]})]})}),dR=gt.Consumer(cR),yx=({value:e})=>ge(e)?e:"",uR=({value:e})=>ge(e)?xa(e):"",Sx=({value:e})=>ge(e)?C_(e):"",pR=({value:e})=>ge(e)?__(e):"",hR=({value:e})=>ge(e)?e?"true":"false":"",mR={default:yx,text:yx,number:uR,price:Sx,currency:Sx,boolean:hR,title:pR},fR=({row:e,column:t,name:o,value:r,cellClass:s,sortColumn:a,sortingClass:l="sorting",displayTypes:i=mR})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=a===o,p=ie(s,t.className,u?l:null,t.right?"text-right":null);return n.jsx("td",{className:p,children:n.jsx(d,{row:e,column:t,value:r,name:o,field:o})})},xR=gt.Consumer(fR),gR=({row:e,columns:t,rowClass:o,onRowClick:r=Ce,visibleColumns:s,Cell:a=xR})=>n.jsx("tr",{className:o,onClick:()=>r(e),children:s.map(l=>{const i=t[l],c=i.field??l,d=e[c];return n.jsx(a,{row:e,name:l,field:c,column:i,value:d},l)})}),bR=gt.Consumer(gR),vR=({page:e,Row:t=bR})=>n.jsx("tbody",{children:e.rows.map((o,r)=>n.jsx(t,{row:o},o.id??r))}),jR=gt.Consumer(vR),yR=({name:e,column:t,sortColumn:o,sortReverse:r,toggleSortColumn:s,sortUpIcon:a="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:f,filteringClass:v="filtering",filterIcon:y="filter",filteringIcon:S="filter-solid",filterIconClass:T="filter-icon",headingClass:g="heading",rightClass:h="right"})=>{const m=e===o,j=m&&r,C=ge(f[e]);return n.jsx("th",{className:ie(g,t.right?h:null,u?v:null,C?v:null,m?d:null),onClick:()=>s(e),children:n.jsxs("div",{className:"flex space middle",children:[n.jsx("span",{className:"label",children:t.label}),n.jsxs("div",{className:"flex gap-1",children:[n.jsx(re,{className:T,name:C?S:y,onClick:p}),n.jsx(re,{className:c,name:m?j?a:l:i})]})]})})},SR=gt.Consumer(yR),CR=({columns:e,headingsClass:t="headings",visibleColumns:o,Heading:r=SR})=>n.jsx("thead",{children:n.jsx("tr",{className:t,children:o.map(s=>n.jsx(r,{name:s,column:e[s]},s))})}),_R=gt.Consumer(CR),wR=({name:e,filters:t,setFilter:o,filterClass:r="filter",filteringClass:s="filtering",clearFilterIcon:a="cross"})=>n.jsx("th",{className:ie(r,ge(t[e])?s:null),children:n.jsxs("div",{className:"flex space middle gap-1",children:[n.jsx("input",{type:"text",value:t[e]??"",onChange:l=>o(e,l.target.value)}),n.jsx(re,{name:a,onClick:()=>o(e,null)})]})}),TR=gt.Consumer(wR),ER=({columns:e,filtersClass:t="filters",visibleColumns:o,Filter:r=TR})=>n.jsx("thead",{children:n.jsx("tr",{className:t,children:o.map(s=>n.jsx(r,{name:s,column:e[s]},s))})}),kR=gt.Consumer(ER),RR=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:o,onRowClick:r,showFilters:s,Headings:a=_R,Filters:l=kR,Rows:i=jR})=>n.jsxs("table",{className:ie(e,o?"nowrap":"wide",{[t]:r}),children:[n.jsx(a,{}),s&&n.jsx(l,{}),n.jsx(i,{})]}),NR=gt.Consumer(RR),OR=({scrollX:e,Table:t=NR})=>n.jsx("div",{className:e?"scroll-x":"",children:n.jsx(t,{})}),DR=gt.Consumer(OR),LR=({page:e=0,pages:t,buttonClass:o="outline",pageClass:r=o,currentPageClass:s="solid",render:a,...l})=>{const d=t-1,u=t,p=e+1,f=e>0?e-1:null,v=ge(f)?f+1:null,y=e<d?e+1:null,S=ge(y)?y+1:null;return a({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:f,prevPageNo:v,nextPage:y,nextPageNo:S,buttonClass:o,pageClass:r,currentPageClass:s,...l})},qo=Yo(LR),BR=qo.Use,$R=({prevPage:e,setPage:t,buttonClass:o,prevClass:r=o,prevIcon:s="arrow-left"})=>n.jsx(L,{className:r,icon:s,onClick:()=>t(e),disabled:Ic(e)}),AR=qo.Consumer($R),MR=({nextPage:e,setPage:t,buttonClass:o,nextClass:r=o,nextIcon:s="arrow-right"})=>n.jsx(L,{className:r,icon:s,onClick:()=>t(e),disabled:!e}),PR=qo.Consumer(MR),IR=({pageNo:e,text:t=e,buttonClass:o,className:r=o,onClick:s})=>n.jsx(L,{text:t,className:r,onClick:s}),zR=qo.Consumer(IR),FR=n.jsx(n.Fragment,{children:"…"}),HR=({pageSeparatorClass:e="separator",pageSeparator:t=FR})=>n.jsx("div",{className:e,children:t}),UR=qo.Consumer(HR),VR=({page:e,pageNo:t,firstPage:o,firstPageNo:r,prevPage:s,prevPageNo:a,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:f,pageClass:v=f,currentPageClass:y="brand",showFirstLast:S=!0,Separator:T=UR,Page:g=zR})=>n.jsxs("div",{className:p,children:[S&&s>o&&n.jsxs(n.Fragment,{children:[n.jsx(g,{page:o,pageNo:r,className:v,onClick:()=>u(o)}),s>o+1&&n.jsx(T,{})]}),ge(s)&&n.jsx(g,{page:s,pageNo:a,className:v,onClick:()=>u(s)}),n.jsx(g,{page:e,pageNo:t,className:y,current:!0,disabled:!0}),ge(l)&&n.jsx(g,{page:l,pageNo:i,className:v,onClick:()=>u(l)}),S&&l&&l<c&&n.jsxs(n.Fragment,{children:[l<c-1&&n.jsx(T,{}),n.jsx(g,{page:c,pageNo:d,className:v,onClick:()=>u(c)})]})]}),WR=qo.Consumer(VR),KR=({className:e="pager",size:t,color:o,Previous:r=AR,Next:s=PR,Pages:a=WR})=>n.jsxs("div",{className:ie(e,t,o),children:[n.jsx(r,{}),n.jsx(a,{}),n.jsx(s,{})]}),GR=qo.Consumer(KR),YR=({Content:e=GR,...t})=>n.jsx(qo.Provider,{...t,children:n.jsx(e,{})}),nn=X(YR,"Pager"),ZR=({footerClass:e,pager:t={},page:o,setPageNo:r})=>n.jsx("footer",{className:e,children:n.jsx(nn,{page:o.page,pages:o.pages,setPage:s=>r(s+1),...t})}),qR=gt.Consumer(ZR),QR=({color:e,className:t="datatable",Header:o=dR,Body:r=DR,Footer:s=qR})=>n.jsxs("section",{className:ie(t,e),children:[n.jsx(o,{}),n.jsx(r,{}),n.jsx(s,{})]}),XR=gt.Consumer(QR),JR=({Content:e=XR,...t})=>n.jsx(gt.Provider,{...t,children:n.jsx(e,{})}),Mt=X(JR,"Datatable"),eN=({summary:e,summaryClass:t})=>n.jsx("summary",{className:t,children:e}),tN=({content:e,children:t,contentClass:o})=>n.jsx("div",{className:o,children:e||t}),nN=({className:e,size:t,color:o,lined:r,border:s,radius:a,shaded:l,shadow:i,open:c,Summary:d=eN,Content:u=tN,...p})=>n.jsxs("details",{className:ie(e,o,Ko(s),Or(a),Nr(i),{size:t,color:o,lined:r,shaded:l}),open:c,children:[n.jsx(d,{...p}),n.jsx(u,{...p})]}),tt=X(nN,"Details");var Nt;let oN=(Nt=class extends pc{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const o=this.props.options,[r,s]=this.props.findOption(o,t),a=this.inputValue(r);return{value:r,cursor:s,input:a,options:o}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):null}selectState(t){const o=this.inputValue(t);return{value:t,input:o,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Wh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Kh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Uc:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Vc:this.close();break;case Kw:this.debug("backspace"),this.searchBackspace();break;case Ww:return;case Gh:if(this.state.isOpen){if(!(this.state.searchInput??Ra).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){this.debug(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}this.debug(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??Ra)+t)}searchBackspace(){this.setSearch(ge(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:o}=this.props;this.setState(r=>({options:ge(r.searchInput)?o(r.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},be(Nt,"debug",!1),be(Nt,"debugPrefix","Select > "),be(Nt,"debugColor","MediumVioletRed"),be(Nt,"defaultProps",{...Nt.defaultProps,options:[],search:!1,findOption:Iw,validOption:bl,searchOptions:zw,displayValue:uc("displayValue"),displayOption:uc("displayOption")}),be(Nt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),be(Nt,"initialState",{value:Ra,cursor:void 0,...Nt.inactiveState}),be(Nt,"initialProps",{}),be(Nt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),Nt);const Lr=Yo(oN),rN=({input:e,onFocus:t,onBlur:o,onClick:r,placeholder:s="Select",placeholderClass:a="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>n.jsxs("div",{className:l,onClick:r,children:[n.jsxs("div",{onFocus:t,onBlur:o,disabled:d,className:i,tabIndex:0,children:[ge(e)&&e.length?n.jsx(n.Fragment,{children:e}):n.jsx("span",{className:a,children:s})," "]}),n.jsx("div",{className:c,children:n.jsx(re,{name:"angle-down"})})]}),sN=Lr.Consumer(rN),aN=({option:e,active:t,activeRef:o,selected:r,onClick:s,onMouseEnter:a,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>n.jsx("div",{className:ie(c,e.className,t?d:null,r?u:null,l(e)?null:p),onMouseEnter:a,onClick:s,ref:t?o:null,"aria-disabled":e.disabled,children:i(e)}),lN=Lr.Consumer(aN),iN=({noOptionsClass:e="none",noOptions:t="No options"})=>n.jsx("div",{className:e,children:t}),cN=Lr.Consumer(iN),dN=({options:e,menuRef:t,menuClass:o="menu border bdr-1",cursor:r,selected:s,selectOption:a,setCursor:l,Option:i=lN,NoOptions:c=cN})=>n.jsx("div",{className:o,ref:t,children:Rr(e)&&e.length?e.map((d,u)=>n.jsx(i,{option:d,active:ge(r)&&e[r]===d,selected:s===d,onClick:()=>a(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):n.jsx(c,{})}),uN=Lr.Consumer(dN),pN=({searchInput:e,focusSearch:t,blurSearch:o,searchRef:r,setSearch:s,clearSearch:a,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:f,searchIcon:v="search",clearSearchIcon:y="cross"})=>n.jsx("div",{className:i,children:n.jsxs("div",{className:c,children:[n.jsx("div",{className:d,children:n.jsx(re,{name:v})}),n.jsx("input",{ref:r,className:f,type:"text",placeholder:l,value:e??"",onClick:S=>S.stopPropagation(),onChange:S=>s(S.target.value),onFocus:t,onBlur:o,autoComplete:"chrome-is-broken",tabIndex:"0"}),n.jsx("div",{className:ie(u,e?p:null),onClick:a,children:n.jsx(re,{name:y})})]})}),hN=Lr.Consumer(pN),mN=({onKeyDown:e,isOpen:t,search:o,selectClass:r="select",openClass:s="open",closedClass:a="closed",Input:l=sN,Search:i=hN,Menu:c=uN})=>n.jsxs("div",{className:ie(r,t?s:a),onKeyDown:e,children:[n.jsx(l,{}),!!t&&!!o&&n.jsx(i,{}),!!t&&n.jsx(c,{})]}),fN=Lr.Consumer(mN),xN=({Content:e=fN,...t})=>n.jsx(Lr.Provider,{...t,children:n.jsx(e,{})}),cn=X(xN,"Select");var gN=Object.defineProperty,bN=(e,t,o)=>t in e?gN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Mn=(e,t,o)=>(bN(e,typeof t!="symbol"?t+"":t,o),o),vN=Object.defineProperty,jN=(e,t,o)=>t in e?vN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Gd=(e,t,o)=>(jN(e,typeof t!="symbol"?t+"":t,o),o);function yN(e={},t={},o={}){return Object.entries(t).reduce((r,[s,a])=>{const l=o[a];return l!==null&&typeof l<"u"&&(r[s]=l),r},{...e})}function SN(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((o,r)=>{const s=e[r]||TN(`Cannot expose non-existent action method: ${r}`);return o[r]=s.bind(e),o},{})}function CN(e,t){const o=e.debug??t.debug,r=Cx(e.debugPrefix??t.debugPrefix,e),s=Cx(e.debugColor??t.debugColor,e);return o?r?(a,...l)=>console.log(`%c${r}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function _N(e){return Array.isArray(e)}function e0(e){return typeof e=="function"}function Cx(e,t){return e0(e)?e(t):e}function wN(e){return _N(e)?e:[e]}function TN(...e){throw new Error(e.join(""))}const t0=(e,t={})=>{const o=H.createContext(t);return{Context:o,Provider:r=>n.jsx(e,{...r,render:s=>n.jsx(o.Provider,{value:s,children:r.children})}),Consumer:r=>s=>n.jsx(o.Consumer,{children:a=>n.jsx(r,{...a,...s})}),Children:({children:r})=>wN(r).map((s,a)=>e0(s)?n.jsx(o.Consumer,{children:s},a):s),Use:()=>H.useContext(o)}};let Mi=class extends H.Component{constructor(e){super(e);const t=this.constructor;this.debug=CN(e,t),this.state=yN(t.initialState,t.initialProps,e),this.actions=SN(this,t.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Gd(Mi,"initialState",{}),Gd(Mi,"initialProps",{}),Gd(Mi,"actions",[]);function n0(e){return typeof e=="boolean"}function Ms(e){return typeof e=="string"}function rl(e){return Array.isArray(e)}function Xc(e){return typeof e=="function"}function EN(e){return e instanceof RegExp}function Ps(e){return typeof e=="object"&&!rl(e)&&!o0(e)}function kN(e){return e===void 0}function o0(e){return e===null}function Ht(e){return!(kN(e)||o0(e))}function RN(e){return!Ht(e)}function NN(...e){throw new Error(e.join(""))}const _x=(e,...t)=>Xc(e)?e(...t):e;function bs(){}function ON(){return Intl.DateTimeFormat().resolvedOptions().locale}ON();function r0(e,t=/,\s*|\s+/){return RN(e)?[]:Ms(e)?e.length?e.split(t):[]:rl(e)?e:[e]}function s0(e,t=!0,o={}){return Ps(e)?e:r0(e).reduce((r,s)=>(r[s]=Xc(t)?t(s):t,r),o)}function DN(e){if(Xc(e))return e;if(EN(e))return t=>e.test(t);if(Ps(e))return t=>!!e[t];if(rl(e)||Ms(e)){const t=s0(e);return o=>!!t[o]}NN("Invalid selector() specification: "+e)}const LN=(e,t,o={})=>{let r={},s={delete:!1,...o};const a=DN(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),r[l]=i}}),r},BN="",$N="blur",wl="changed",AN="disabled",Jc="focus",MN="fulfilled",Tl="invalid",a0="Optional",PN="radio",l0="Required",IN="A value is required",wx="reset",El="submitted",Is="submitting",sm="text",zN="unvalidated",kl="valid",Qo="validating",FN=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],HN=["id","name","action","method","encType"];let i0=class extends Mi{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(wx)}}setStatus(e,t={},o=bs){this.mounted&&this.setState(r=>({...Xc(t)?t(r):t,status:this.newStatus(e,r.status)}),o)}setResetState(e,t){this.setStatus(wx,e,t)}setChangedState(e,t){this.setStatus(wl,e,t)}setValidatingState(e,t){this.setStatus(Qo,e,t)}setInvalidState(e,t){this.setStatus(Tl,e,t)}setValidState(e,t){this.setStatus(kl,e,t)}setUnvalidatedState(e,t){this.setStatus(zN,e,t)}};function c0(e,t){return t.reduce((o,r)=>(Ht(e[r])&&(o[r]=e[r]),o),{})}const ed=e=>c0(e,FN),UN=e=>c0(e,HN),d0=e=>e.filter(Ht).join(" "),VN=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),zn=(...e)=>d0(e.flatMap(t=>Ps(t)?VN(t):t)),td=e=>zn(e.inputClass,e.inline&&"inline"),is=(e,t,o=t)=>(e==null?void 0:e[t])||o,WN=(e,t={},...o)=>d0(Object.entries(e).reduce((r,[s,a])=>(a&&r.push(t[s]||s),r),[...o])),KN=e=>{const{status:t,className:o,classes:r,required:s,showRequired:a,showOptional:l}=e;return WN(t,r,is(r,"field"),o,a&&s?"required":null,l&&!s?"optional":null)},u0=(e,...t)=>{const{gap:o,space:r,stack:s,className:a}=e;return a||(r?zn("flex","space",...t):zn("flex",o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t))},GN=(e,...t)=>{const{grid:o,gap:r,stack:s,className:a}=e;return a||(o?zn(`grid-${o}`,r?`gap-v-none gap-h-${r}`:null,s?`stack-${s}`:null,...t):zn(...t))},YN={boolean:!0,string:!0,number:!0},p0=e=>YN[typeof e]?{value:e,text:e}:e,vc=(...e)=>function(...t){for(let o of e.filter(Boolean))o(...t)};function Tx(e){if(n0(e))return[1,!1];if(Ht(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const ZN=(e,t)=>Ms(e)?{[t]:e}:e,qN={submittingClass:Is,validatingClass:Qo,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},Ex={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:IN,requiredLabel:l0,optionalLabel:a0},QN=s0(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),Es={[kl]:!1,[Tl]:!1},XN={...Es,[wl]:!0},JN={...Es,[Qo]:!0},eO={[kl]:!1,[Tl]:!0,[Qo]:!1},tO={[kl]:!0,[Tl]:!1,[Qo]:!1},nO={[Jc]:!1},oO={[Jc]:!0},rO={[Is]:!0,[El]:!1},sO={[Is]:!1,[El]:!0},h0={changed:XN,validating:JN,invalid:eO,valid:tO},m0=e=>(t,o={})=>({...o,...e[t]||{[t]:!0}}),aO=()=>{const e={...Es,[wl]:!1,[Qo]:!1,[El]:!1,[Is]:!1};return m0({...h0,reset:e,submitting:rO,submitted:sO,unvalidated:Es})},lO=(e={})=>{const t={...Es,[wl]:!1,[Qo]:!1,[Jc]:!1,[AN]:e.disabled||!1};return m0({...h0,reset:t,focus:oO,blur:nO,unvalidated:Es})},iO=({status:e,any:t=!1,...o})=>{const r=[wl,Qo,kl,Tl,Is,El].filter(s=>Ht(o[s])).map(s=>e[s]);return t?r.some(Boolean):r.every(Boolean)};class Wr extends i0{constructor(t){super(t),this.fields={};const{hidden:o={}}=t,r={...o},s={...qN,...this.props};this.state={...s,...this.state,initialValues:r,values:{...r},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,o){var r,s;const a=((r=this.props.fields)==null?void 0:r[t])??{},l=o.value??((s=this.props.values)==null?void 0:s[t]);return{name:t,...LN(this.props,QN),...a,...o,value:l}}attachField(t,o){this.debug(`attaching ${t} field`),this.fields[t]=o,this.setState(r=>({values:{...r.values,[t]:o.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,o){this.setStatus(Is,t,o)}setSubmittedState(t,o){this.setStatus(El,t,o)}setFocus(t,o){var r;o==null||o.preventDefault(),(r=this.fields[t])==null||r.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,o){this.debug(`setValue(${t}, ${o})`),this.setChangedState(r=>({...r,values:{...r.values,[t]:o}}))}setValues(t,o){this.debug("setValues():",t),o==null||o.preventDefault(),Object.entries(t).forEach(([r,s])=>{var a;return(a=this.fields[r])==null?void 0:a.setValue(s)})}setHidden(t){const o={...this.state.hidden,...t};this.setState({hidden:o})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(o=>this.handleSubmit(o)).catch(o=>this.debug("Form is NOT valid:",o))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,o)=>Promise.allSettled(Object.values(this.fields).map(r=>r.validate())).then(r=>r.reduce((s,{status:a,value:l,reason:i})=>(a===MN?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(i),s),{values:{...this.state.values},errors:[]})).then(r=>{var s;return this.debug("field validation complete: ",r),(s=r.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",r),o(r)):this.props.validate?(this.debug("validating form: ",r),this.props.validate(r.values,this.getContext()).then(a=>t({...r,values:a})).catch(a=>o(a))):t(r)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const o=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",o),this.setSubmittedState(),o!=null&&o.ok||(o==null?void 0:o.status)===200)this.debug(`Success response ok:${o==null?void 0:o.ok} status:${o==null?void 0:o.status}`),this.handleSuccess(o);else if((o==null?void 0:o.status)>=400&&o.status<=500)this.debug(`Error response status:${o==null?void 0:o.status}`),this.handleError(o.data);else throw new Error(`Unknown response: ${o==null?void 0:o.status}`)}catch(o){this.debug("onSubmit error:",o),this.setSubmittedState(),this.handleError(Ms(o)?{error:o}:o instanceof Error?{error:o.message}:o)}})}handleSuccess(t){this.debug("handleSuccess()",t);const o=this.props.onSuccess||bs;this.setValidState({},vc(()=>o(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const o=rl(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),r=this.props.onError||this.props.onFailure||bs;this.setInvalidState(t,vc(()=>r(t),o?()=>o.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const o=t.reduce((r,s)=>{const a=s.name??s.param??s.field,{message:l}=s,i=a&&this.fields[a];return i&&(s.label||(s.label=i.props.label),i.setInvalidState({message:l}),r.push(i)),r},[]);return this.state.focusInvalidField&&o.length?o[0]:null}sanitiseErrors(t){if(Ps(t)&&(t=Object.entries(t).map(([o,r])=>({name:o,...ZN(r,"message")}))),!rl(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(o=>o.message??(o.message=o.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}Mn(Wr,"newStatus",aO),Mn(Wr,"debug",!1),Mn(Wr,"debugPrefix","Form > "),Mn(Wr,"debugColor","rebeccapurple"),Mn(Wr,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const cO=t0(Wr),{Context:NX,Provider:dO,Consumer:uO,Children:pO,Use:zs}=cO,hO=({children:e})=>{const t=zs(),o=UN(t),{submit:r,className:s}=t;return n.jsx("form",{className:s,...o,onSubmit:r,noValidate:!0,children:n.jsx(pO,{children:e})})},mO=({children:e,Layout:t=hO,...o})=>n.jsx(dO,{...o,children:n.jsx(t,{children:e})}),fO=e=>{const{id:t,value:o}=e;return{...e,id:t||b.useId(),value:o??e.default??BN}};class Kr extends i0{constructor(t){super(t),this.name=t.name;const{value:o}=t,r=o;this.form=this.props.form,this.state={...this.state,initialValue:r,value:o,error:null},this.debug("initial state:",this.state),this.inputRef=b.createRef(),this.resetRef=b.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):bs}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,o){return this.setStatus(Jc,t,o)}setBlurState(t,o){return this.setStatus($N,t,o)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var o,r;t==null||t.preventDefault(),(r=(o=this.inputRef)==null?void 0:o.current)==null||r.focus()}onChange(t){this.debug(`onChange(${t})`);const o=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:r}=this.state.status,{validateOnChange:s,validateOnInvalid:a=!0,minValidateLength:l=1}=this.props,[i]=Tx(o);let c=s||a&&r;i<l&&!r&&(c=!1),this.setChangedState({value:o},()=>{this.form.setValue(this.props.name,o),c?this.validation(this.on.change):this.on.change()})}setValue(t,o){o==null||o.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const o=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${o}`),this.form.setValue(this.props.name,o),this.setResetState({value:o,message:this.props.message},()=>{var r,s;return(s=(r=this.resetRef)==null?void 0:r.current)==null?void 0:s.reset()}),o}validation(t){this.validate(t).then(bs).catch(bs)}validate(t){this.debug("validate()");const o={name:this.name,label:this.props.label};return new Promise(this.validator()).then(r=>(this.debug("validate() passed:",r),this.setValidState(r,vc(this.on.valid,t)),{...o,...r})).catch(r=>{throw this.debug("validate() failed:",r),this.setInvalidState(r,vc(this.on.invalid,t)),{...o,...r}})}validator(){return async(t,o)=>{const{value:r=""}=this.state,{validate:s,required:a,optional:l,requiredMessage:i,validMessage:c}={...Ex,...this.props},[,d]=Tx(r);if(this.setValidatingState(),s)return d&&l?(this.debug("optional field is empty"),t({value:r,message:c})):await this.validateValidator(t,o,s,c);if(d)return await this.validateEmpty(t,o,a,c,i);this.debug("no validation defined"),t({value:r,message:c})}}async validateValidator(t,o,r,s){this.debug("calling validate function");const a=this.getContext();try{this.debug(`calling validate function with value [${a.value}]`);const l=await r(a.value,a,t,o);this.debug("validate function passed:",l),t(Ps(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const i=Ms(l)?l:l.message;this.debug("rejecting with message:",i),o({message:i})}}validateEmpty(t,o,r,s,a){r?(this.debug("failing validation - required field is empty"),o({message:a})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,o){o==null||o.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,o){o==null||o.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...Ex,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}Mn(Kr,"newStatus",lO),Mn(Kr,"debug",!1),Mn(Kr,"debugPrefix",e=>`Field [${e.name}] > `),Mn(Kr,"debugColor","teal"),Mn(Kr,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const xO=t0(Kr),{Context:OX,Provider:gO,Consumer:DX,Children:bO,Use:wt}=xO,f0=({field:e=wt()})=>{const{label:t,id:o,required:r,optional:s}=e,a=e.showRequired&&r,l=e.showOptional&&(s||!r),i=t||a||l,c=e.labelClass,d={};return a&&e.requiredLabel!==l0&&(d["--required-text"]=`"${e.requiredLabel}"`),l&&e.optionalLabel!==a0&&(d["--optional-text"]=`"${e.optionalLabel}"`),i&&n.jsx("label",{htmlFor:o,className:c,style:d,children:t||n.jsx("span",{children:" "})})},vO=e=>t=>e.onChange(t.target.value),jO=e=>t=>e.onChange(t.target.checked),Io={default:vO,checkbox:jO},yO=({field:e=wt()})=>{const{id:t,text:o,inline:r,border:s,labelClass:a,type:l="checkbox",handler:i=Io[l]||Io.default}=e,c=ed(e),d=zn("checkbox",a,{inline:r,border:s});return n.jsxs("label",{htmlFor:t,className:d,children:[n.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:td(e),...c,checked:e.value}),o]})},x0=({field:e=wt()})=>n.jsx("input",{type:"hidden",name:e.name,value:e.value}),SO=({field:e=wt()})=>{const{inline:t,border:o,options:r=[],inputClass:s,optionClass:a,optionsClass:l="options",type:i="radio",handler:c=Io[i]||Io.default}=e,d=ed(e);return n.jsx("div",{className:zn(l),children:r.map((u,p)=>{u=p0(u);const f=`${e.id}-${u.value}`,v=e.value==u.value,y=(e.value?v:p==0)?e.inputRef:null,S=zn("radio",a,u.className,{inline:t,border:o});return n.jsxs("label",{className:S,disabled:u.disabled,htmlFor:f,children:[n.jsx("input",{type:i,className:s,ref:y,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:f,checked:v,value:u.value}),u.text]},u.value)})})},CO=({field:e=wt()})=>{const{options:t=[],placeholder:o,type:r="select",optionClass:s="option",handler:a=Io[r]||Io.default}=e,l=ed(e);return n.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:td(e),onChange:a(e),...l,value:e.value,required:e.required||!!o,children:[!!o&&n.jsx("option",{value:"",hidden:!0,disabled:!0,children:o}),t.map(i=>(i=p0(i),n.jsx("option",{className:s,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},kx=({field:e=wt()})=>{const{type:t=sm,handler:o=Io[t]||Io.default}=e,r=ed(e);return n.jsx("input",{type:t,ref:e.inputRef,className:td(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:o(e),...r})},_O=({field:e=wt()})=>{const{rows:t=5,cols:o=20}=e;return n.jsx("textarea",{id:e.id,ref:e.inputRef,className:td(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:r=>e.onChange(r.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:o})},sl={default:kx,checkbox:yO,hidden:x0,radio:SO,select:CO,text:kx,textarea:_O},g0=(e,t)=>sl[e]=t,wO=({field:e=wt()})=>n.jsx("div",{className:zn("prefix",e.prefixClass),children:e.prefix}),TO=({field:e=wt()})=>n.jsx("div",{className:zn("suffix",e.suffixClass),children:e.suffix}),EO=({field:e=wt()})=>{const{classes:t,prefix:o,suffix:r,inputsClass:s,inline:a,type:l=sm,Prefix:i=wO,Suffix:c=TO}=e,d=sl[l]||sl.default;let u=[is(t,"inputs")];Ht(o)&&u.push(is(t,"prefixed")),Ht(r)&&u.push(is(t,"suffixed")),a&&u.push(is(t,"inline")),Ht(s)&&u.push(s);const p=u.join(" ");return n.jsxs("div",{className:p,children:[Ht(o)&&n.jsx(i,{field:e}),n.jsx(d,{field:e}),Ht(r)&&n.jsx(c,{field:e})]})},b0=({field:e=wt()})=>{const{prefix:t,suffix:o,type:r=sm}=e,s=sl[r]||sl.default;return r==PN?n.jsx(s,{field:e}):Ht(t)||Ht(o)?n.jsx(EO,{}):n.jsx(s,{field:e})},v0=({field:e=wt()})=>{const{help:t,message:o,classes:r}=e,s=o??t,a=is(r,"help");return s?n.jsx("div",{className:a,children:s}):null},j0=({field:e=wt(),children:t})=>{const{type:o,Label:r=f0,Message:s=v0,Input:a=b0}=e,l=KN(e);return o==="hidden"?n.jsx(x0,{field:e}):n.jsx("div",{className:l,children:t||n.jsxs(n.Fragment,{children:[n.jsx(r,{field:e}),n.jsx(a,{field:e}),n.jsx(s,{field:e})]})})},y0=({name:e,children:t,...o})=>{const r=zs(),s=fO(r.fieldSpec(e,o)),a=s.Layout||j0;return n.jsx(gO,{form:r,...s,children:t?n.jsx(bO,{children:t}):n.jsx(a,{})})},S0=({names:e,className:t,grid:o=!1,gap:r=4,stack:s,...a})=>{const l=r0(e);return n0(o)&&o&&(o=l.length),n.jsx("div",{className:GN({grid:o,gap:r,stack:s,props:a},t),children:l.map(i=>n.jsx(y0,{name:i,...a},i))})},kO=({className:e="",legend:t,children:o,fields:r,...s})=>n.jsxs("fieldset",{className:e,children:[!!t&&n.jsx("legend",{children:t}),!!r&&n.jsx(S0,{names:r,...s}),o]}),RO=({children:e,...t})=>iO(t)&&e,C0=uO(RO),NO=({values:e=!0,status:t=!1,all:o=!1,className:r="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:s="Form Debugging",valuesTitle:a="Values",statusTitle:l="Status",...i})=>{const c=zs();return n.jsxs("div",{className:r,children:[s&&n.jsx("h3",{className:"mar-v-none",children:s}),n.jsxs("div",{className:"grid-1 gap-4",children:[e&&n.jsxs("div",{children:[a&&n.jsx("h4",{className:"mar-v-none",children:a}),n.jsx(Rx,{rows:Object.entries(c.values),...i})]}),(t||o)&&c.status&&n.jsxs("div",{children:[l&&n.jsx("h4",{children:l}),n.jsx(Rx,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},Rx=({rows:e,children:t,color:o="brand",tableClass:r=`${o} shaded celled wide small pad-none mar-b-0`,...s})=>n.jsx("table",{className:r,children:n.jsx("tbody",{children:t||e.map(([a,l])=>n.jsx(OO,{name:a,value:l,...s},a))})}),OO=({name:e,value:t,keyClass:o="text-right split-3",valueClass:r="font-mono bgc-95 bgd-5"})=>n.jsxs("tr",{valign:"top",children:[n.jsx("th",{className:o,children:e}),n.jsx("td",{className:r,children:n.jsx(DO,{value:t})})]}),DO=({value:e})=>Ps(e)?JSON.stringify(e):Ht(e)?e.toString():"",LO=({error:e})=>{const t=e.label||e.name;return n.jsxs(n.Fragment,{children:[!!t&&n.jsxs("b",{children:[t,": "]}),e.message]})},BO=({error:e})=>Ms(e)?e:n.jsx(LO,{error:e}),$O=({form:e=zs(),title:t=e.errorsTitle,prompt:o=e.errorsPrompt,fieldErrors:r=!1,className:s="error alert border"})=>{const{error:a,errors:l,Error:i=BO}=e,c=!!a,d=(r?l.length:0)+(c?1:0);return d!==0?n.jsxs("div",{className:s,children:[!!t&&n.jsx("div",{className:"headline",children:_x(t,d)}),n.jsxs("div",{children:[c&&n.jsx("h4",{children:n.jsx(i,{error:a})}),r&&l.length!==0&&n.jsxs(n.Fragment,{children:[!!o&&n.jsx("p",{className:"wide",children:_x(o,l.length)}),n.jsx("ul",{children:l.map((u,p)=>n.jsx("li",{children:n.jsx(i,{error:u})},p))})]})]})]}):null},AO=({field:e=wt(),selectValue:t=e.selectValue||J2})=>n.jsx(cn,{...e,onSelect:o=>e.onChange(t(o))}),xi={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class bo extends Na{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?E_(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const o=this.inputValue(t);return{value:t,input:o}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):Ra}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Un(500).then(()=>this.clearResults())}onChange(t){const o=t.target.value;this.debug(`input: ${o}`),o.length>=this.props.minLength?this.setState({input:o},this.startSearch):this.setState({input:o,...xi})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const o=this.state.cursor;switch(t.key){case Wh:this.setCursor(o+1);break;case Kh:this.setCursor(o-1);break;case Uc:this.selectCursor();break;case Vc:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,o=this.inputValue(t);this.setState({value:t,input:o,...xi},this.props.onReset)}clear(){this.debug("clear()"),this.setState({value:void 0,input:Ra,...xi},this.props.onClear)}search(){const{input:t}=this.state,{minLength:o,onSearch:r}=this.props;if(t.length<o){this.debug(`search() cancelled - input is shorter than ${o}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const o=this.inputValue(t);this.setState({value:t,input:o,...xi},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:o}=this.state;this.setState({cursor:o&&o.length?(t+o.length)%o.length:void 0})}selectCursor(){const{cursor:t,results:o}=this.state;o&&o.length&&ge(t)&&this.selectResult(o[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){S3(this._resultsRef,t)}}be(bo,"debug",!1),be(bo,"debugPrefix","Search > "),be(bo,"debugColor","MediumVioletRed"),be(bo,"defaultProps",{minLength:2,debounceTime:500,onLoad:Ce,onUnload:Ce,onFocus:Ce,onBlur:Ce,onReset:Ce,onClear:Ce,onSelect:Ce,displayValue:uc("displayValue"),displayResult:uc("displayResult")}),be(bo,"initialState",{value:"",searching:!1}),be(bo,"initialProps",{value:"initialValue"}),be(bo,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","clear","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const Fs=Yo(bo),MO=({input:e,onFocus:t,onBlur:o,onChange:r,clear:s,placeholder:a="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:f="text",inputClass:v="",disabled:y,searching:S})=>n.jsxs("div",{className:d,children:[n.jsx("div",{className:u,children:n.jsx(re,{name:i})}),n.jsx("input",{type:f,placeholder:a,value:e,onFocus:t,onBlur:o,onChange:r,disabled:y,className:v}),n.jsx("div",{className:p,onClick:s,children:n.jsx(re,{name:S?c:l})})]}),PO=Fs.Consumer(MO),IO=({result:e,active:t,activeRef:o,onClick:r,onMouseEnter:s,displayResult:a,resultClass:l="item",activeClass:i="active"})=>n.jsx("div",{className:ie(l,{[i]:t}),onClick:r,onMouseEnter:s,ref:t?o:null,children:a(e)}),zO=Fs.Consumer(IO),FO=({noResultsClass:e="none",noResults:t="No results"})=>n.jsx("div",{className:e,children:t}),HO=Fs.Consumer(FO),UO=({results:e,resultsRef:t,cursor:o,selectResult:r,setCursor:s,resultsClass:a="menu border bdr-1",Result:l=zO,NoResults:i=HO})=>n.jsx("div",{className:a,ref:t,children:Rr(e)&&e.length?e.map((c,d)=>n.jsx(l,{result:c,active:ge(o)&&e[o]===c,onClick:()=>r(c),onMouseEnter:()=>s(d)},c.id??c.value??d)):n.jsx(i,{})}),VO=Fs.Consumer(UO),WO=({results:e,onKeyDown:t,Input:o=PO,Results:r=VO})=>n.jsxs("div",{className:"search",onKeyDown:t,children:[n.jsx(o,{}),!!e&&n.jsx(r,{})]}),KO=Fs.Consumer(WO),GO=({Content:e=KO,...t})=>n.jsx(Fs.Provider,{...t,children:n.jsx(e,{})}),ao=X(GO,"Search"),YO=({field:e=wt(),selectValue:t=e.selectValue||J2})=>n.jsx(ao,{...e,onSelect:o=>e.onChange(t(o)),onReset:e.reset}),ZO=({color:e,className:t,style:o,fixed:r,light:s,dark:a,children:l})=>n.jsx("div",{className:ie("overlay",t,e,{fixed:r,light:s,dark:a}),style:o,children:l}),Br=X(ZO,"Overlay"),Nx=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),Ox=(e,t,o,r,s,a)=>{o?(t.push(`stc-${s}`,`std-${a}`),Z2(o)?r&&e.push(`strokeWidth=${r}`):e.push(o)):e.push("stroke=none")},Dx=(e,t,o,r,s)=>{o?t.push(`flc-${r}`,`fld-${s}`):e.push("fill=none")},qO=({size:e,className:t,icon:o="cog",color:r="brand",stroke:s=!0,strokeWidth:a,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:f=r,bgStroke:v=!1,bgStrokeWidth:y,bgStrokeStop:S=60,bgStrokeStopDark:T=70,bgFill:g=!0,bgFillStop:h=70,bgFillStopDark:m=30,shrink:j=p?5:0,reverse:C=!1,animation:x=C?"spin.reverse":"spin"})=>{const _=ie(e,t),k=[],R=[f],O=[],B=[r,x];Ox(k,R,v,y,S,T),Ox(O,B,s,a,l,i),Dx(k,R,g,h,m),Dx(O,B,c,d,u),j&&O.push(`shrink=${j}`);const U=p?`${p}${Nx(k,R)}`:"",K=`${o}${Nx(O,B)}`,ne=p?`${U} ${K}`:K;return n.jsx(re,{name:ne,className:_})},G=X(qO,"Spinner"),QO=({text:e="Submitting...",size:t="largest",className:o="flex middle center pad-8",light:r,dark:s,fixed:a,spinnerSize:l="x4",Spinner:i=G,...c})=>n.jsx(C0,{submitting:!0,children:n.jsx(Br,{className:ie(o,t),light:r,dark:s,fixed:a,children:n.jsxs("div",{className:"text-center",children:[i&&n.jsx(i,{size:l,...c}),n.jsx("div",{className:"mar-t-4",children:e})]})})}),am=X(QO,"Submitting"),XO=({text:e="Cancel",className:t="cancel",Button:o=L,...r})=>n.jsx(o,{text:e,className:t,...r}),JO=X(XO,"Cancel"),eD=({type:e="reset",text:t="Reset",className:o="reset",Button:r=L,...s})=>{const{reset:a}=zs();return n.jsx(r,{type:e,text:t,className:o,onClick:a,...s})},_0=X(eD,"Reset"),tD=({type:e="submit",text:t="Submit",className:o="submit",Button:r=L,...s})=>{const{submit:a,status:l}=zs();return n.jsx(r,{type:e,text:t,className:o,onClick:a,disabled:l.submitting,...s})},Rl=X(tD,"Submit"),nD=({className:e,gap:t=4,space:o=!1,size:r,reset:s={},submit:a={}})=>n.jsxs("div",{className:u0({className:e,gap:t,space:o},r,"controls"),children:[n.jsx(_0,{...s}),n.jsx(Rl,{...a})]}),w0=X(nD,"ResetSubmit"),oD=({className:e,gap:t=4,space:o=!1,size:r,cancel:s={},submit:a={}})=>n.jsxs("div",{className:u0({className:e,gap:t,space:o},r,"controls"),children:[n.jsx(JO,{...s}),n.jsx(Rl,{...a})]}),rD=X(oD,"CancelSubmit");g0("uiselect",AO);g0("search",YO);const kn=X(mO,"Form"),Je=X(y0,"Field");X(S0,"Fields");X(kO,"Fieldset");X($O,"Errors");X(C0,"Status");const Hs=X(NO,"Debug");X(j0,"Layout");X(f0,"Label");X(b0,"Input");X(v0,"Message");const sD=({open:e=!1}={})=>{const{isVisible:t,show:o,hide:r}=Go({visible:e});return{show:o,hide:r,Modal:s=>n.jsx(Tn,{open:t,...s})}},aD=({open:e=!1}={})=>{const{isVisible:t,show:o,hide:r}=Go({visible:e});return{show:o,hide:r,Overlay:s=>t&&n.jsx(Br,{...s})}},lD=({className:e,disabled:t,children:o})=>n.jsx("label",{className:ie(e,{disabled:t}),children:o}),iD=X(lD,"RadioLabel"),cD=({name:e,option:t,tabIndex:o=0,onChange:r=Ce,checked:s})=>n.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:o,onChange:a=>r(a.target.checked),checked:s}),dD=X(cD,"RadioInput"),uD=({name:e,option:t,checked:o,inline:r,border:s,labelClass:a="radio",inputClass:l,Label:i=iD,Input:c=dD,onChange:d})=>n.jsxs(i,{className:ie(a,t.labelClass,{inline:r,border:s}),disabled:t.disabled,option:t,children:[n.jsx(c,{name:e,option:t,checked:o,className:ie(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),pD=X(uD,"RadioOption"),hD=({name:e=b.useId(),value:t,options:o,className:r="radioset",disabled:s,Option:a=pD,...l})=>n.jsx("div",{className:ie(r,{disabled:s}),children:o.map(i=>{const c=Wo(i)?i:{value:i,label:i};return n.jsx(a,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),Fn=X(hD,"Radio"),mD=({...e})=>n.jsx(rm,{modifiers:[rR,Q3,om],strategy:Hk,...e}),dp=({th:e,text:t,...o})=>e?n.jsx("th",{...o,children:Ts(t,o)}):n.jsx("td",{...o,children:Ts(t,o)}),lm=e=>Rr(e)?{cells:e}:e,T0=e=>Wo(e)?e:{text:e},im=({cells:e,th:t=!1,Cell:o=dp,...r})=>n.jsx("tr",{...r,children:e.map((s,a)=>n.jsx(o,{th:s.th??t,...T0(s)},s.key??a))}),fD=({headRows:e,Row:t=im,HeadRow:o=t,...r})=>n.jsx("thead",{children:e.map((s,a)=>n.jsx(o,{th:!0,...lm(s),...r},s.key??a))}),xD=({bodyRows:e,Row:t=im,BodyRow:o=t,...r})=>n.jsx("tbody",{children:e.map((s,a)=>n.jsx(o,{...lm(s),...r},s.key??a))}),gD=({footRows:e,Row:t=im,FootRow:o=t,...r})=>n.jsx("tfoot",{children:e.map((s,a)=>n.jsx(o,{...lm(s),...r},s.key??a))}),We=({className:e,border:t,color:o,radius:r,shadow:s,size:a,lined:l,celled:i,shaded:c,striped:d,wide:u,compressed:p,expanded:f,headings:v,rows:y,footings:S,bodyRows:T=y,headRows:g=v&&[v],footRows:h=S&&[S],Head:m=fD,Body:j=xD,Foot:C=gD,...x})=>{const _=ie(e,a,Hc(o),Ko(t),Or(r),Nr(s),{celled:i,lined:l,shaded:c,striped:d,wide:u,compressed:p,expanded:f});return n.jsxs("table",{className:_,children:[!!g&&n.jsx(m,{headRows:g,...x}),n.jsx(j,{bodyRows:T,...x}),!!h&&n.jsx(C,{footRows:h,...x})]})},bD=({tab:e})=>{if(!e)return null;const{content:t,Component:o}=e;return t||(o?n.jsx(o,{tab:e}):"No content, element or Component defined for tab")},vD=({tabs:e,storageKey:t,storageItem:o="active-tab",tabsetClass:r="tabset",tabsClass:s="tabs",activeClass:a="active",disabledClass:l="disabled",className:i,bodyClass:c,color:d,size:u,solid:p,lined:f,center:v,right:y,Body:S=bD})=>{const T=t&&Wc(t),[g,h]=H.useState(T&&T.get(o)||0),m=x=>{h(x),T&&T.set(o,x)},j=ie(r,i,d,u,{solid:p,lined:f,center:v,right:y}),C=ie(s,d,u);return n.jsxs("div",{className:j,children:[n.jsx("ul",{className:C,children:e.map((x,_)=>n.jsx("li",{className:ie({[a]:g===_,[l]:x.disabled}),onClick:()=>x.disabled?Ce:m(_),children:n.jsx(Dr,{...x})},x.id||_))}),n.jsx("div",{className:c,children:n.jsx(S,{tabs:e,active:g,tab:e[g]})})]})},it=X(vD,"Tabset"),jD=({minWidth:e,gap:t,children:o,className:r,tilesClass:s="tiles",style:a={}})=>(e&&(a["--tile-min-width"]=e),n.jsx("div",{className:ie(r,s,g3(t)),style:a,children:o})),fr=X(jD,"Tiles"),E0=[{text:"On",value:!0},{text:"Off",value:!1}],k0=(e,t)=>Ah(t)?t:e.findIndex(o=>o.value===t.value),yD=({selected:e=0,findSelectedIndex:t=k0,onSelect:o=Ce,options:r=E0,activeProps:s={},inactiveProps:a={className:"outline"},buttonsClass:l="buttons",size:i,className:c,...d}={})=>{const u=t(r,e),p=r.map((f,v)=>{const y=v===u;return{...f,...y?s:a,className:ie(f.className,y?s.className:a.className),onClick:()=>o(f,v)}});return n.jsx(sn,{buttons:p,className:ie(i,c,l),...d})},_n=X(yD,"Toggle"),R0=({selected:e=0,findSelectedIndex:t=k0,options:o=E0,onSelect:r=Ce,storageKey:s,storageItem:a="selected",...l}={})=>{const i=t(o,e),c=s&&Wc(s),[d,u]=b.useState(c?c.get(a)??i:i),[p,f]=b.useState(o[d]),v=y=>{c&&c.set(a,y),u(y),f(o[y]),r(o[y],y)};return[p,({...y})=>n.jsx(_n,{options:o,selected:d,onSelect:(S,T)=>v(T),...l,...y})]},SD=e=>{const[,t]=R0(e);return n.jsx(t,{})};function CD(){const e=b.useRef(0);return e.current++,e.current}const nd=(e,t={})=>{const{onChange:o}=t,[r,s]=b.useState(o?o(e):e),a=Object.keys(e).reduce((l,i)=>{const c=`set${Zw(i)}`;return l[c]=d=>s(u=>{const p={...u,[i]:Ts(d,u[i])};return o?o(p):p}),l},{});return[r,a]},_D=()=>n.jsxs(oe,{children:[n.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),wD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,TD=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],N0=({color:e,setColor:t,disabled:o=!1})=>n.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:o,children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),n.jsx("option",{value:"",children:"Default"}),TD.map(r=>n.jsx("option",{value:r,children:r},r))]}),ED=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],O0=({size:e,setSize:t})=>n.jsxs("select",{name:"size",required:!0,value:e,onChange:o=>t(o.target.value),children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),n.jsx("option",{value:"",children:"Default"}),ED.map(o=>n.jsx("option",{value:o,children:o},o))]}),kD=[0,1,2,3,4,5,6,8,10],RD=({radius:e,setRadius:t})=>n.jsxs("select",{name:"radius",required:!0,value:e,onChange:o=>t(o.target.value),children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),n.jsx("option",{value:"",children:"Default"}),kD.map(o=>n.jsx("option",{value:o,children:o},o))]}),ND=[1,2,3,4,5],OD=({shadow:e,setShadow:t})=>n.jsxs("select",{name:"shadow",required:!0,value:e,onChange:o=>t(o.target.value),children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),n.jsx("option",{value:"",children:"Default"}),ND.map(o=>n.jsx("option",{value:o,children:o},o))]}),Lx=({checked:e,toggle:t,label:o,disabled:r=!1})=>n.jsxs("label",{className:"checkbox border no-focus",children:[n.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),o]}),DD=[0,1,2,3,4,5,6,8,10],LD=({border:e,setBorder:t,disabled:o=!1})=>n.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:o,children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),n.jsx("option",{value:"",children:"Default"}),DD.map(r=>n.jsx("option",{value:r,children:r},r))]}),BD=Object.keys(fl.icons),up=({icon:e,setIcon:t,disabled:o=!1})=>n.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:o,children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),n.jsx("option",{value:"",children:"None"}),BD.map(r=>n.jsx("option",{value:r,children:r},r))]}),$D=()=>{const[e,t]=b.useState(0),[o,r]=b.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),s=c=>()=>{r(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{r(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${MD(o)}
/>`;return n.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Output"}),n.jsx("div",{className:"output mar-b-8",children:n.jsx(PD,{options:o},e)})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Markup"}),n.jsx(qn,{code:i,language:"html",expand:!0})]})]}),n.jsx(AD,{options:o,setOption:a,toggleOption:s})]})},AD=({options:e,toggleOption:t,setOption:o})=>{const r=o("headline"),s=o("title"),a=o("text"),l=o("type"),i=o("size"),c=o("color"),d=o("border"),u=o("radius"),p=o("shadow"),f=o("icon"),v=o("headIcon"),y=t("stripe"),S=t("revealable");return n.jsxs("div",{children:[n.jsx(Yd,{label:"Headline",value:e.headline,setValue:r}),n.jsx(Yd,{label:"Title",value:e.title,setValue:s}),n.jsx(Yd,{label:"Text",value:e.text,setValue:a}),n.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Type"}),n.jsx(ID,{type:e.type,setType:l})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Color"}),n.jsx(N0,{color:e.color,setColor:c,disabled:e.type})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Size"}),n.jsx(O0,{size:e.size,setSize:i})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Shadow"}),n.jsx(OD,{shadow:e.shadow,setShadow:p})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Border Width"}),n.jsx(LD,{border:e.border,setBorder:d,disabled:e.stripe})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Border Radius"}),n.jsx(RD,{radius:e.radius,setRadius:u})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Headline Icon"}),n.jsx(up,{icon:e.headIcon,setIcon:v,disabled:!e.headline})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Body Icon"}),n.jsx(up,{icons:e.icon,setIcon:f})]})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Options"}),n.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[n.jsx(Lx,{checked:e.stripe,toggle:y,label:"Stripe"}),n.jsx(Lx,{checked:e.revealable,toggle:S,label:"Revealable",disabled:!e.headline})]})]})]})},MD=e=>{const t=["headline","title","text","type","color","size","headIcon","icon"].filter(s=>e[s]).map(s=>`${s}="${e[s]}"`),o=["shadow","border","radius"].filter(s=>e[s]).map(s=>`${s}={${e[s]}}`),r=["stripe","revealable","dismissable"].filter(s=>e[s]);return[...t,...o,...r].join(`
  `)},PD=({options:e})=>n.jsx(oe,{...e}),ID=({type:e,setType:t})=>n.jsxs("select",{name:"type",required:!0,value:e,onChange:o=>t(o.target.value),children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),n.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(o=>n.jsx("option",{value:o,children:o},o))]}),Yd=({label:e,value:t,setValue:o})=>n.jsxs("div",{className:"field",children:[n.jsx("label",{children:e}),n.jsxs("div",{className:"inputs",children:[n.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>o(r.target.value)}),n.jsx("div",{className:"suffix",children:n.jsx(re,{name:"cross",className:"hover",onClick:()=>o("")})})]})]}),D0=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["Use the ",n.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),n.jsx(Q,{Component:_D,code:wD,expand:!0}),n.jsx("h2",{children:"Demo"}),n.jsx($D,{})]}),zD=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),cm=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),FD=({render:e})=>{const[t,o]=b.useState({}),r=b.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},o({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},o({...t})},contentRef:r})},Nl=Yo(FD),HD=({addToc:e,addTocHeading:t,tocName:o,render:r})=>r({addPageToc:(l,i,c)=>{e(o,l,i,c)},addPageTocHeading:(l,i,c)=>{t(o,l,i,c)}}),dm=Yo(Nl.Consumer(HD)),UD=({id:e,code:t,title:o=t,children:r,addPageToc:s,split:a})=>{const l=cm(e||t||o),i=b.useRef(),c=t?`code:${t}`:o;return b.useEffect(()=>{s&&s(l,c,i)},[e,t,o]),n.jsxs("section",{id:l,ref:i,children:[n.jsx("h3",{className:t?"font-mono page-section":"page-section",children:o}),n.jsx("div",{className:a?"columns-2 stack-desktop":"",children:r})]})},z=dm.Consumer(UD),w=({Component:e,Source:t,children:o,code:r,title:s,caption:a=r?n.jsx("code",{children:r}):s,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>n.jsxs(z,{code:r,title:s,...u,children:[n.jsx("div",{className:"mar-b-4",children:o}),n.jsx(Q,{Component:e,code:t,caption:a,expand:l,undent:i,highlightLines:d,lineProps:c})]}),VD=()=>n.jsxs("div",{children:[n.jsx(ba,{text:"Error alert"}),n.jsx(ba,{text:"Error alert with border",border:!0}),n.jsx(ba,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),n.jsx(ba,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),WD=`import React from 'react'
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
`,L0=()=>n.jsx(w,{code:"Error",Component:VD,Source:WD,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),KD=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),GD=()=>n.jsxs("div",{children:[n.jsx(ga,{text:"Info alert"}),n.jsx(ga,{text:"Info alert with border",border:!0}),n.jsx(ga,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),n.jsx(ga,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),YD=`import React from 'react'
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
`,B0=()=>n.jsx(w,{code:"Info",Component:GD,Source:YD,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),ZD=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),qD=()=>n.jsxs("div",{children:[n.jsx(as,{text:"Success alert"}),n.jsx(as,{text:"Success alert with border",border:!0}),n.jsx(as,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),n.jsx(as,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),QD=`import React from 'react'
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
`,$0=()=>n.jsx(w,{code:"Success",Component:qD,Source:QD,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),XD=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),JD=()=>n.jsxs("div",{children:[n.jsx(ls,{text:"Warning alert"}),n.jsx(ls,{text:"Warning alert with border",border:!0}),n.jsx(ls,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),n.jsx(ls,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),eL=`import React from 'react'
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
`,A0=()=>n.jsx(w,{code:"Warning",Component:JD,Source:eL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),tL=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),nL=()=>n.jsxs("div",{children:[n.jsx(oe,{text:"Border Alert",border:!0}),n.jsx(oe,{text:"Border Width 2",border:2})]}),oL=`import React from 'react'
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
`,M0=()=>n.jsx(w,{code:"border",Component:nL,Source:oL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),sL=()=>n.jsx(oe,{text:"Hello World!",className:"border shadow-2"}),aL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,P0=()=>n.jsx(w,{code:"className",Component:sL,Source:aL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),iL=()=>n.jsxs("div",{children:[n.jsx(oe,{text:"Red Alert",color:"red"}),n.jsx(oe,{text:"Brown Alert",color:"brown"}),n.jsx(oe,{text:"Orange Alert",color:"orange"}),n.jsx(oe,{text:"Yellow Alert",color:"yellow"}),n.jsx(oe,{text:"Green Alert",color:"green"}),n.jsx(oe,{text:"Teal Alert",color:"teal"}),n.jsx(oe,{text:"Blue Alert",color:"blue"}),n.jsx(oe,{text:"Indigo Alert",color:"indigo"}),n.jsx(oe,{text:"Violet Alert",color:"violet"}),n.jsx(oe,{text:"Purple Alert",color:"purple"}),n.jsx(oe,{text:"Pink Alert",color:"pink"}),n.jsx(oe,{text:"Maroon Alert",color:"maroon"})]}),cL=`import React from 'react'
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
`,I0=()=>n.jsx(w,{code:"color",Component:iL,Source:cL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),uL=()=>n.jsx(oe,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),pL=`import React from 'react'
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
`,z0=()=>n.jsx(w,{code:"dismissable",Component:uL,Source:pL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),mL=()=>n.jsx(oe,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),fL=`import React from 'react'
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
`,F0=()=>n.jsx(w,{code:"headicon",Component:mL,Source:fL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),gL=()=>n.jsx(oe,{headline:"Headline Alert",text:"An alert with a headline"}),bL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,H0=()=>n.jsx(w,{code:"headline",Component:gL,Source:bL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),jL=()=>n.jsxs("div",{children:[n.jsx(oe,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),n.jsx(oe,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),n.jsx(oe,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),yL=`import React from 'react'
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
`,U0=()=>n.jsx(w,{code:"icon",Component:jL,Source:yL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),CL=()=>n.jsx(oe,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),_L=`import React from 'react'
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
`,V0=()=>n.jsx(w,{code:"onDismiss",Component:CL,Source:_L,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),TL=()=>n.jsx(oe,{text:"Radius Alert",radius:4}),EL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,W0=()=>n.jsx(w,{code:"radius",Component:TL,Source:EL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),RL=()=>n.jsx(oe,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),NL=`import React from 'react'
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
`,K0=()=>n.jsx(w,{code:"revealable",Component:RL,Source:NL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),OL=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),DL=()=>n.jsx(oe,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),LL=`import React from 'react'
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
`,G0=()=>n.jsx(w,{code:"revealed",Component:DL,Source:LL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),$L=()=>n.jsxs("div",{children:[n.jsx(oe,{text:"Alert With Default Shadow (1)",shadow:!0}),n.jsx(oe,{text:"Alert With Shadow 2",shadow:2}),n.jsx(oe,{text:"Alert With Shadow 3",shadow:3}),n.jsx(oe,{text:"Alert With Shadow 4",shadow:4}),n.jsx(oe,{text:"Alert With Shadow 5",shadow:5})]}),AL=`import React from 'react'
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
`,Y0=()=>n.jsx(w,{code:"shadow",Component:$L,Source:AL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),ML=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),PL=()=>n.jsxs("div",{children:[n.jsx(oe,{text:"Smallest Alert",size:"smallest"}),n.jsx(oe,{text:"Smaller Alert",size:"smaller"}),n.jsx(oe,{text:"Small Alert",size:"small"}),n.jsx(oe,{text:"Medium Alert",size:"medium"}),n.jsx(oe,{text:"Large Alert",size:"large"}),n.jsx(oe,{text:"Larger Alert",size:"larger"}),n.jsx(oe,{text:"Largest Alert",size:"largest"})]}),IL=`import React from 'react'
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
`,Z0=()=>n.jsx(w,{code:"size",Component:PL,Source:IL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the text size."]})}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),FL=()=>n.jsxs("div",{children:[n.jsx(oe,{text:"Stripe Alert",stripe:!0,shadow:4}),n.jsx(oe,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),n.jsx(oe,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),n.jsx(oe,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),n.jsx(oe,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),HL=`import React from 'react'
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
`,q0=()=>n.jsx(w,{code:"stripe",Component:FL,Source:HL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",n.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),VL=()=>n.jsx(oe,{text:"Hello World!"}),WL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,Q0=()=>n.jsx(w,{code:"text",Component:VL,Source:WL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property can be used to set the body text."]})}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),GL=()=>n.jsx(oe,{title:"Hello World!",children:"This is an alert"}),YL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,X0=()=>n.jsx(w,{code:"title",Component:GL,Source:YL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can be used to set a title."]})}),ZL=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),qL=()=>n.jsxs("div",{children:[n.jsx(oe,{text:"Info Alert",type:"info"}),n.jsx(oe,{text:"Success Alert",type:"success"}),n.jsx(oe,{text:"Warning Alert",type:"warning"}),n.jsx(oe,{text:"Error Alert",type:"error"})]}),QL=`import React from 'react'
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
`,J0=()=>n.jsx(w,{code:"type",Component:qL,Source:QL,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",n.jsx("code",{children:"info"}),", ",n.jsx("code",{children:"success"}),","," ",n.jsx("code",{children:"warning"})," or ",n.jsx("code",{children:"error"}),"."]})}),XL=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),Re=({tocName:e,children:t})=>n.jsx(dm.Provider,{tocName:e,children:t}),JL=({id:e,title:t,addPageTocHeading:o})=>{const r=cm(e||t),s=b.useRef();return b.useEffect(()=>{o&&o(r,t,s)},[e,t]),n.jsx("h2",{id:r,ref:s,className:"section-heading",children:t})},te=dm.Consumer(JL),eB=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Alert"}),n.jsx(D0,{}),n.jsxs(Re,{tocName:"alert",children:[n.jsx(te,{title:"Properties"}),n.jsx(X0,{}),n.jsx(Q0,{}),n.jsx(H0,{}),n.jsx(F0,{}),n.jsx(K0,{}),n.jsx(G0,{}),n.jsx(z0,{}),n.jsx(V0,{}),n.jsx(P0,{}),n.jsx(M0,{}),n.jsx(W0,{}),n.jsx(Y0,{}),n.jsx(Z0,{}),n.jsx(I0,{}),n.jsx(J0,{}),n.jsx(q0,{}),n.jsx(U0,{}),n.jsx(te,{title:"Components"}),n.jsx(B0,{}),n.jsx($0,{}),n.jsx(A0,{}),n.jsx(L0,{})]})]}),tB=Object.freeze(Object.defineProperty({__proto__:null,default:eB},Symbol.toStringTag,{value:"Module"})),nB=()=>n.jsx(ae,{children:"This is a Badge"}),oB=`import { Badge } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Badge } from '@abw/badger-react-ui'

const BadgeExample = () =>
  <Badge>
    This is a Badge
  </Badge>

export default BadgeExample
`,e4=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Badge"})," component can be used to render a badge. Any child elements will be included as content."]}),n.jsx("p",{children:"There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles."}),n.jsx(Q,{Component:nB,code:oB,expand:!0})]}),rB=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),sB=()=>n.jsx(ae,{text:"Custom Badge Content",Content:({text:e})=>n.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),aB=`import React from 'react'
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
`,t4=()=>n.jsxs(w,{code:"Content",Component:sB,Source:aB,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the badge content. By default it uses ",n.jsx("code",{children:"WithIcons"})," to render the badge text with optional icons."]}),n.jsxs("p",{children:["If you want to change the way that badge content is generated on a global level then you can use the theming engine to define a different ",n.jsx("code",{children:"Content"})," component for all badges."]})]}),lB=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),iB=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(ae,{text:"Border 2",color:"red",outline:!0,border:2}),n.jsx(ae,{text:"Border 3",color:"brown",outline:!0,border:3}),n.jsx(ae,{text:"Border 4",color:"orange",outline:!0,border:4}),n.jsx(ae,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),cB=`import React from 'react'
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
`,n4=()=>n.jsx(w,{code:"border",Component:iB,Source:cB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property can be used to set the border width."]})}),dB=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),uB=()=>n.jsx(ae,{text:"Custom Badge",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),pB=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,o4=()=>n.jsx(w,{code:"className",Component:uB,Source:pB,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be added to add a CSS class to the badge."]})}),hB=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),mB=()=>n.jsxs("div",{className:"flex wrap gap-4",children:[n.jsx(ae,{text:"Red Badge",color:"red"}),n.jsx(ae,{text:"Brown Badge",color:"brown"}),n.jsx(ae,{text:"Orange Badge",color:"orange"}),n.jsx(ae,{text:"Yellow Badge",color:"yellow"}),n.jsx(ae,{text:"Green Badge",color:"green"}),n.jsx(ae,{text:"Teal Badge",color:"teal"}),n.jsx(ae,{text:"Blue Badge",color:"blue"}),n.jsx(ae,{text:"Indigo Badge",color:"indigo"}),n.jsx(ae,{text:"Violet Badge",color:"violet"}),n.jsx(ae,{text:"Purple Badge",color:"purple"}),n.jsx(ae,{text:"Pink Badge",color:"pink"}),n.jsx(ae,{text:"Maroon Badge",color:"maroon"})]}),fB=`import React from 'react'
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
`,r4=()=>n.jsx(w,{code:"color",Component:mB,Source:fB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range used for the badge."]})}),xB=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),gB=()=>n.jsx(ae,{color:"green",icon:"thumb"}),bB=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    icon="thumb"
  />
/* END */

export default Component
`,s4=()=>n.jsx(w,{code:"icon",Component:gB,Source:bB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"icon"})," property can be used to add an icon to a badge."]})}),vB=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),jB=()=>n.jsx(ae,{color:"green",text:"Unlocked",iconLeft:"unlocked"}),yB=`import React from 'react'
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
`,a4=()=>n.jsx(w,{code:"iconLeft",Component:jB,Source:yB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a badge."]})}),SB=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),CB=()=>n.jsx(ae,{color:"red",text:"Locked",iconRight:"locked"}),_B=`import React from 'react'
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
`,l4=()=>n.jsx(w,{code:"iconRight",Component:CB,Source:_B,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a badge."]})}),wB=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),TB=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(ae,{text:"Radius 0",color:"olive",radius:0}),n.jsx(ae,{text:"Radius 2",color:"green",radius:2}),n.jsx(ae,{text:"Radius 4",color:"teal",radius:3}),n.jsx(ae,{text:"Radius 6",color:"blue",radius:4})]}),EB=`import React from 'react'
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
`,i4=()=>n.jsx(w,{code:"radius",Component:TB,Source:EB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),kB=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),RB=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(ae,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),n.jsx(ae,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),n.jsx(ae,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),n.jsx(ae,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),n.jsx(ae,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),NB=`import React from 'react'
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
`,c4=()=>n.jsx(w,{code:"shadow",Component:RB,Source:NB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shadow"})," property can be used to add a shadow to the badge ranging from 1 to 5."]})}),OB=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),DB=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(ae,{text:"Smallest",size:"smallest"}),n.jsx(ae,{text:"Smaller",size:"smaller"}),n.jsx(ae,{text:"Small",size:"small"}),n.jsx(ae,{text:"Medium",size:"medium"}),n.jsx(ae,{text:"Large",size:"large"}),n.jsx(ae,{text:"Larger",size:"larger"}),n.jsx(ae,{text:"Largest",size:"largest"}),n.jsx(ae,{text:"x3",size:"x3"}),n.jsx(ae,{text:"x5",size:"x5"}),n.jsx(ae,{text:"x7",size:"x7"})]}),LB=`import React from 'react'
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
`,d4=()=>n.jsx(w,{code:"size",Component:DB,Source:LB,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the badge size. This can be one of: ",n.jsx("code",{children:"smallest"}),", ",n.jsx("code",{children:"smaller"}),", ",n.jsx("code",{children:"small"})," ",",",n.jsx("code",{children:"medium"})," (default - same as no explicit size), ",n.jsx("code",{children:"large"})," ",",",n.jsx("code",{children:"larger"}),", ",n.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",n.jsx("code",{children:"x2"}),", ",n.jsx("code",{children:"x3"}),", etc., up to ",n.jsx("code",{children:"x10"}),"."]})}),BB=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),$B=()=>n.jsx(ae,{text:"Tag Badge",tag:!0}),AB=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Tag Badge" tag/>
/* END */

export default Component
`,u4=()=>n.jsx(w,{code:"tag",Component:$B,Source:AB,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"tag"})," property can be used to add the ",n.jsx("code",{children:"tag"})," CSS class to change the appearance of the badge."]})}),MB=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),PB=()=>n.jsx(ae,{text:"Grey Badge"}),IB=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Grey Badge"/>
/* END */

export default Component
`,p4=()=>n.jsx(w,{code:"text",Component:PB,Source:IB,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property can be used to set the text for the badge."]})}),zB=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),FB=()=>n.jsx(ae,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),HB=`import React from 'react'
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
`,h4=()=>n.jsx(w,{code:"tooltip",Component:FB,Source:HB,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"tooltip"})," property can be used to set the",n.jsx("code",{children:"data-tooltip"})," property on the badge.  This can be used to indicate the direction of the tooltip, e.g. ",n.jsx("code",{children:"top"}),","," ",n.jsx("code",{children:"right"}),", ",n.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",n.jsx("code",{children:"label"})," property."]})}),UB=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),VB=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Badge"}),n.jsx(e4,{}),n.jsxs(Re,{tocName:"badge",children:[n.jsx(te,{title:"Properties"}),n.jsx(p4,{}),n.jsx(u4,{}),n.jsx(r4,{}),n.jsx(o4,{}),n.jsx(n4,{}),n.jsx(i4,{}),n.jsx(c4,{}),n.jsx(d4,{}),n.jsx(s4,{}),n.jsx(a4,{}),n.jsx(l4,{}),n.jsx(h4,{}),n.jsx(te,{title:"Components"}),n.jsx(t4,{})]})]}),WB=Object.freeze(Object.defineProperty({__proto__:null,default:VB},Symbol.toStringTag,{value:"Module"})),KB=()=>n.jsx(L,{children:"This is a button"}),GB=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,m4=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),n.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",n.jsx("code",{children:"button"})," component."]}),n.jsx(Q,{Component:KB,code:GB,expand:!0})]}),YB=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),ZB=()=>n.jsx(L,{text:"Custom Button Content",Content:({text:e})=>n.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),qB=`import React from 'react'
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
`,f4=()=>n.jsxs(w,{code:"Content",Component:ZB,Source:qB,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",n.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),n.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",n.jsx("code",{children:"Content"})," component for all buttons."]})]}),QB=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),XB=()=>n.jsxs("div",{className:"flex wrap gap-4",children:[n.jsx(L,{text:"Red Bare",color:"red",bare:!0}),n.jsx(L,{text:"Green Bare",color:"green",bare:!0}),n.jsx(L,{text:"Blue Bare",color:"blue",bare:!0})]}),JB=`import React from 'react'
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
`,x4=()=>n.jsx(w,{code:"bare",Component:XB,Source:JB,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),e$=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),t$=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(L,{text:"Border 2",color:"red",outline:!0,border:2}),n.jsx(L,{text:"Border 3",color:"brown",outline:!0,border:3}),n.jsx(L,{text:"Border 4",color:"orange",outline:!0,border:4}),n.jsx(L,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),n$=`import React from 'react'
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
`,g4=()=>n.jsx(w,{code:"border",Component:t$,Source:n$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),o$=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),r$=()=>n.jsxs("div",{className:"flex wrap gap-4",children:[n.jsx(L,{text:"Yellow Button",color:"yellow"}),n.jsx(L,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),s$=`import React from 'react'
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
`,b4=()=>n.jsx(w,{code:"bright",Component:r$,Source:s$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),a$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),l$=()=>n.jsx(L,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),i$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,v4=()=>n.jsx(w,{code:"className",Component:l$,Source:i$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),c$=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),d$=()=>n.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[n.jsx(L,{text:"Red Button",color:"red"}),n.jsx(L,{text:"Brown Button",color:"brown"}),n.jsx(L,{text:"Orange Button",color:"orange"}),n.jsx(L,{text:"Yellow Button",color:"yellow"}),n.jsx(L,{text:"Green Button",color:"green"}),n.jsx(L,{text:"Teal Button",color:"teal"}),n.jsx(L,{text:"Blue Button",color:"blue"}),n.jsx(L,{text:"Indigo Button",color:"indigo"}),n.jsx(L,{text:"Violet Button",color:"violet"}),n.jsx(L,{text:"Purple Button",color:"purple"}),n.jsx(L,{text:"Pink Button",color:"pink"}),n.jsx(L,{text:"Maroon Button",color:"maroon"})]}),u$=`import React from 'react'
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
`,j4=()=>n.jsx(w,{code:"color",Component:d$,Source:u$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),p$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),h$=()=>n.jsxs("div",{className:"flex wrap gap-4",children:[n.jsx(L,{text:"Red Button",color:"red"}),n.jsx(L,{text:"Dark Red Button",color:"red",dark:!0})]}),m$=`import React from 'react'
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
`,y4=()=>n.jsx(w,{code:"dark",Component:h$,Source:m$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),f$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),x$=()=>n.jsx(L,{text:"Disabled Button",disabled:!0}),g$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,S4=()=>n.jsx(w,{code:"disabled",Component:x$,Source:g$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),b$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),v$=()=>n.jsx(L,{color:"green",icon:"bars"}),j$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,C4=()=>n.jsx(w,{code:"icon",Component:v$,Source:j$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),y$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),S$=()=>n.jsx(L,{color:"green",text:"Back",iconLeft:"angle-left"}),C$=`import React from 'react'
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
`,_4=()=>n.jsx(w,{code:"iconLeft",Component:S$,Source:C$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),_$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),w$=()=>n.jsx(L,{color:"green",text:"Next",iconRight:"angle-right"}),T$=`import React from 'react'
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
`,w4=()=>n.jsx(w,{code:"iconRight",Component:w$,Source:T$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),E$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),k$=()=>n.jsx(L,{text:"I am labelled!",label:"This is a label"}),R$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,T4=()=>n.jsx(w,{code:"label",Component:k$,Source:R$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"label"})," property can be used to set the",n.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),N$=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),O$=()=>n.jsx(L,{text:"Click Me!",onClick:()=>window.alert("Click!")}),D$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,E4=()=>n.jsx(w,{code:"onClick",Component:O$,Source:D$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),L$=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),B$=()=>n.jsxs("div",{className:"flex wrap gap-4",children:[n.jsx(L,{text:"Red Outline",color:"red",outline:!0}),n.jsx(L,{text:"Green Outline",color:"green",outline:!0}),n.jsx(L,{text:"Blue Outline",color:"blue",outline:!0})]}),$$=`import React from 'react'
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
`,k4=()=>n.jsx(w,{code:"outline",Component:B$,Source:$$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),A$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),M$=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(L,{text:"Radius 0",color:"olive",radius:0}),n.jsx(L,{text:"Radius 2",color:"green",radius:2}),n.jsx(L,{text:"Radius 4",color:"teal",radius:3}),n.jsx(L,{text:"Radius 6",color:"blue",radius:4})]}),P$=`import React from 'react'
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
`,R4=()=>n.jsx(w,{code:"radius",Component:M$,Source:P$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),I$=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),z$=()=>n.jsxs("div",{className:"flex wrap gap-4",children:[n.jsx(L,{text:"Red Shaded",color:"red",shaded:!0}),n.jsx(L,{text:"Green Shaded",color:"green",shaded:!0}),n.jsx(L,{text:"Blue Shaded",color:"blue",shaded:!0})]}),F$=`import React from 'react'
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
`,N4=()=>n.jsx(w,{code:"shaded",Component:z$,Source:F$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),H$=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),U$=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(L,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),n.jsx(L,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),n.jsx(L,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),n.jsx(L,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),n.jsx(L,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),V$=`import React from 'react'
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
`,O4=()=>n.jsx(w,{code:"shadow",Component:U$,Source:V$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),W$=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),K$=()=>n.jsxs("div",{className:"flex middle wrap gap-4",children:[n.jsx(L,{text:"Smallest",size:"smallest"}),n.jsx(L,{text:"Smaller",size:"smaller"}),n.jsx(L,{text:"Small",size:"small"}),n.jsx(L,{text:"Medium",size:"medium"}),n.jsx(L,{text:"Large",size:"large"}),n.jsx(L,{text:"Larger",size:"larger"}),n.jsx(L,{text:"Largest",size:"largest"}),n.jsx(L,{text:"x3",size:"x3"}),n.jsx(L,{text:"x5",size:"x5"}),n.jsx(L,{text:"x7",size:"x7"})]}),G$=`import React from 'react'
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
`,D4=()=>n.jsx(w,{code:"size",Component:K$,Source:G$,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",n.jsx("code",{children:"smallest"}),", ",n.jsx("code",{children:"smaller"}),", ",n.jsx("code",{children:"small"})," ",",",n.jsx("code",{children:"medium"})," (default - same as no explicit size), ",n.jsx("code",{children:"large"})," ",",",n.jsx("code",{children:"larger"}),", ",n.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",n.jsx("code",{children:"x2"}),", ",n.jsx("code",{children:"x3"}),", etc., up to ",n.jsx("code",{children:"x10"}),"."]})}),Y$=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),Z$=()=>n.jsx(L,{text:"Grey Button"}),q$=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,L4=()=>n.jsx(w,{code:"text",Component:Z$,Source:q$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),Q$=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),X$=()=>n.jsx(L,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),J$=`import React from 'react'
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
`,B4=()=>n.jsx(w,{code:"tooltip",Component:X$,Source:J$,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"tooltip"})," property can be used to set the",n.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",n.jsx("code",{children:"top"}),","," ",n.jsx("code",{children:"right"}),", ",n.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",n.jsx("code",{children:"label"})," property."]})}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),tA=()=>n.jsx(L,{text:"Grey Button",type:"submit"}),nA=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,$4=()=>n.jsxs(w,{code:"type",Component:tA,Source:nA,undent:2,expand:!0,children:[n.jsxs("p",{children:["The default ",n.jsx("code",{children:"type"})," for a button is set to ",n.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",n.jsx("code",{children:"form"})," element, the ",n.jsx("code",{children:"type"})," for a button would usually default to being ",n.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),n.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",n.jsx("code",{children:"type"})," to"," ",n.jsx("code",{children:"submit"}),".  You can also set it to ",n.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),oA=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),rA=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Button"}),n.jsx(m4,{}),n.jsxs(Re,{tocName:"button",children:[n.jsx(te,{title:"Properties"}),n.jsx(L4,{}),n.jsx(E4,{}),n.jsx(S4,{}),n.jsx(j4,{}),n.jsx(b4,{}),n.jsx(y4,{}),n.jsx(N4,{}),n.jsx(k4,{}),n.jsx(x4,{}),n.jsx(v4,{}),n.jsx(g4,{}),n.jsx(R4,{}),n.jsx(O4,{}),n.jsx(D4,{}),n.jsx(C4,{}),n.jsx(_4,{}),n.jsx(w4,{}),n.jsx(T4,{}),n.jsx(B4,{}),n.jsx($4,{}),n.jsx(te,{title:"Components"}),n.jsx(f4,{})]})]}),sA=Object.freeze(Object.defineProperty({__proto__:null,default:rA},Symbol.toStringTag,{value:"Module"})),aA=({text:e})=>n.jsx("span",{className:"border pad pad-h-4 mar",children:e}),lA=()=>n.jsx(sn,{buttons:[{text:"One"},{text:"Two"}],Button:aA}),iA=`import { Buttons } from '@/src/index.jsx'

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
`,A4=()=>n.jsx(w,{code:"Button",Component:lA,Source:iA,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),cA=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),dA=()=>n.jsxs(sn,{children:[n.jsx(L,{text:"One",outline:!0}),n.jsx(L,{text:"Two",outline:!0})]}),uA=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,M4=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),n.jsx(Q,{Component:dA,code:uA,expand:!0})]}),pA=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),hA=()=>n.jsx(n.Fragment,{children:n.jsx(sn,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),mA=`import React from 'react'
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
`,P4=()=>n.jsx(w,{code:"buttonClass",Component:hA,Source:mA,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",n.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),fA=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),xA=()=>n.jsx(n.Fragment,{children:n.jsx(sn,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),gA=`import React from 'react'
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
`,I4=()=>n.jsx(w,{code:"buttons",Component:xA,Source:gA,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),bA=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),vA=()=>n.jsx(n.Fragment,{children:n.jsx(sn,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),jA=`import React from 'react'
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
`,z4=()=>n.jsx(w,{code:"className",Component:vA,Source:jA,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",n.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",n.jsx("code",{children:"buttons"})," in the value you provide for ",n.jsx("code",{children:"className"})]})}),yA=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),SA=()=>n.jsx(n.Fragment,{children:n.jsx(sn,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),CA=`import React from 'react'
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
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},Ve.apply(this,arguments)}var Ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ke||(Ke={}));const Bx="popstate";function _A(e){e===void 0&&(e={});function t(r,s){let{pathname:a,search:l,hash:i}=r.location;return al("",{pathname:a,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function o(r,s){return typeof s=="string"?s:Sr(s)}return TA(t,o,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wA(){return Math.random().toString(36).substr(2,8)}function $x(e,t){return{usr:e.state,key:e.key,idx:t}}function al(e,t,o,r){return o===void 0&&(o=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ho(t):t,{state:o,key:t&&t.key||r||wA()})}function Sr(e){let{pathname:t="/",search:o="",hash:r=""}=e;return o&&o!=="?"&&(t+=o.charAt(0)==="?"?o:"?"+o),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ho(e){let t={};if(e){let o=e.indexOf("#");o>=0&&(t.hash=e.substr(o),e=e.substr(0,o));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function TA(e,t,o,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,l=s.history,i=Ke.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ve({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=Ke.Pop;let T=u(),g=T==null?null:T-d;d=T,c&&c({action:i,location:S.location,delta:g})}function f(T,g){i=Ke.Push;let h=al(S.location,T,g);o&&o(h,T),d=u()+1;let m=$x(h,d),j=S.createHref(h);try{l.pushState(m,"",j)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(j)}a&&c&&c({action:i,location:S.location,delta:1})}function v(T,g){i=Ke.Replace;let h=al(S.location,T,g);o&&o(h,T),d=u();let m=$x(h,d),j=S.createHref(h);l.replaceState(m,"",j),a&&c&&c({action:i,location:S.location,delta:0})}function y(T){let g=s.location.origin!=="null"?s.location.origin:s.location.href,h=typeof T=="string"?T:Sr(T);return pe(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let S={get action(){return i},get location(){return e(s,l)},listen(T){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Bx,p),c=T,()=>{s.removeEventListener(Bx,p),c=null}},createHref(T){return t(s,T)},createURL:y,encodeLocation(T){let g=y(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(T){return l.go(T)}};return S}var He;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(He||(He={}));const EA=new Set(["lazy","caseSensitive","path","id","index","children"]);function kA(e){return e.index===!0}function pp(e,t,o,r){return o===void 0&&(o=[]),r===void 0&&(r={}),e.map((s,a)=>{let l=[...o,a],i=typeof s.id=="string"?s.id:l.join("-");if(pe(s.index!==!0||!s.children,"Cannot specify children on an index route"),pe(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),kA(s)){let c=Ve({},s,t(s),{id:i});return r[i]=c,c}else{let c=Ve({},s,t(s),{id:i,children:void 0});return r[i]=c,s.children&&(c.children=pp(s.children,t,l,r)),c}})}function cs(e,t,o){o===void 0&&(o="/");let r=typeof t=="string"?ho(t):t,s=zo(r.pathname||"/",o);if(s==null)return null;let a=F4(e);NA(a);let l=null;for(let i=0;l==null&&i<a.length;++i)l=IA(a[i],FA(s));return l}function RA(e,t){let{route:o,pathname:r,params:s}=e;return{id:o.id,pathname:r,params:s,data:t[o.id],handle:o.handle}}function F4(e,t,o,r){t===void 0&&(t=[]),o===void 0&&(o=[]),r===void 0&&(r="");let s=(a,l,i)=>{let c={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=eo([r,c.relativePath]),u=o.concat(c);a.children&&a.children.length>0&&(pe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),F4(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:MA(d,a.index),routesMeta:u})};return e.forEach((a,l)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,l);else for(let c of H4(a.path))s(a,l,c)}),t}function H4(e){let t=e.split("/");if(t.length===0)return[];let[o,...r]=t,s=o.endsWith("?"),a=o.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let l=H4(r.join("/")),i=[];return i.push(...l.map(c=>c===""?a:[a,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function NA(e){e.sort((t,o)=>t.score!==o.score?o.score-t.score:PA(t.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}const OA=/^:\w+$/,DA=3,LA=2,BA=1,$A=10,AA=-2,Ax=e=>e==="*";function MA(e,t){let o=e.split("/"),r=o.length;return o.some(Ax)&&(r+=AA),t&&(r+=LA),o.filter(s=>!Ax(s)).reduce((s,a)=>s+(OA.test(a)?DA:a===""?BA:$A),r)}function PA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function IA(e,t){let{routesMeta:o}=e,r={},s="/",a=[];for(let l=0;l<o.length;++l){let i=o[l],c=l===o.length-1,d=s==="/"?t:t.slice(s.length)||"/",u=hp({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(r,u.params);let p=i.route;a.push({params:r,pathname:eo([s,u.pathname]),pathnameBase:WA(eo([s,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(s=eo([s,u.pathnameBase]))}return a}function hp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,r]=zA(e.path,e.caseSensitive,e.end),s=t.match(o);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:r.reduce((d,u,p)=>{let{paramName:f,isOptional:v}=u;if(f==="*"){let S=i[p]||"";l=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const y=i[p];return v&&!y?d[f]=void 0:d[f]=HA(y||"",f),d},{}),pathname:a,pathnameBase:l,pattern:e}}function zA(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!0),yr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function FA(e){try{return decodeURI(e)}catch(t){return yr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function HA(e,t){try{return decodeURIComponent(e)}catch(o){return yr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+o+").")),e}}function zo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let o=t.endsWith("/")?t.length-1:t.length,r=e.charAt(o);return r&&r!=="/"?null:e.slice(o)||"/"}function UA(e,t){t===void 0&&(t="/");let{pathname:o,search:r="",hash:s=""}=typeof e=="string"?ho(e):e;return{pathname:o?o.startsWith("/")?o:VA(o,t):t,search:KA(r),hash:GA(s)}}function VA(e,t){let o=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?o.length>1&&o.pop():s!=="."&&o.push(s)}),o.length>1?o.join("/"):"/"}function Zd(e,t,o,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U4(e){return e.filter((t,o)=>o===0||t.route.path&&t.route.path.length>0)}function um(e,t){let o=U4(e);return t?o.map((r,s)=>s===e.length-1?r.pathname:r.pathnameBase):o.map(r=>r.pathnameBase)}function pm(e,t,o,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=ho(e):(s=Ve({},e),pe(!s.pathname||!s.pathname.includes("?"),Zd("?","pathname","search",s)),pe(!s.pathname||!s.pathname.includes("#"),Zd("#","pathname","hash",s)),pe(!s.search||!s.search.includes("#"),Zd("#","search","hash",s)));let a=e===""||s.pathname==="",l=a?"/":s.pathname,i;if(l==null)i=o;else{let p=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}i=p>=0?t[p]:"/"}let c=UA(s,i),d=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const eo=e=>e.join("/").replace(/\/\/+/g,"/"),WA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),KA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class hm{constructor(t,o,r,s){s===void 0&&(s=!1),this.status=t,this.statusText=o||"",this.internal=s,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function V4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const W4=["post","put","patch","delete"],YA=new Set(W4),ZA=["get",...W4],qA=new Set(ZA),QA=new Set([301,302,303,307,308]),XA=new Set([307,308]),qd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},JA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},oa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},K4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),G4="remix-router-transitions";function tM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,o=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!o;pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;s=N=>({hasErrorBoundary:E(N)})}else s=eM;let a={},l=pp(e.routes,s,void 0,a),i,c=e.basename||"/",d=Ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,f=null,v=null,y=null,S=e.hydrationData!=null,T=cs(l,e.history.location,c),g=null;if(T==null){let E=qt(404,{pathname:e.history.location.pathname}),{matches:N,route:D}=Vx(l);T=N,g={[D.id]:E}}let h,m=T.some(E=>E.route.lazy),j=T.some(E=>E.route.loader);if(m)h=!1;else if(!j)h=!0;else if(d.v7_partialHydration){let E=e.hydrationData?e.hydrationData.loaderData:null,N=e.hydrationData?e.hydrationData.errors:null;h=T.every(D=>D.route.loader&&D.route.loader.hydrate!==!0&&(E&&E[D.route.id]!==void 0||N&&N[D.route.id]!==void 0))}else h=e.hydrationData!=null;let C,x={historyAction:e.history.action,location:e.history.location,matches:T,initialized:h,navigation:qd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},_=Ke.Pop,k=!1,R,O=!1,B=new Map,U=null,K=!1,ne=!1,we=[],je=[],ee=new Map,$=0,P=-1,I=new Map,W=new Set,Y=new Map,Te=new Map,de=new Set,Se=new Map,ce=new Map,Le=!1;function ut(){if(u=e.history.listen(E=>{let{action:N,location:D,delta:M}=E;if(Le){Le=!1;return}yr(ce.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Il({currentLocation:x.location,nextLocation:D,historyAction:N});if(F&&M!=null){Le=!0,e.history.go(M*-1),nr(F,{state:"blocked",location:D,proceed(){nr(F,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),e.history.go(M)},reset(){let se=new Map(x.blockers);se.set(F,oa),Be({blockers:se})}});return}return Et(N,D)}),o){pM(t,B);let E=()=>hM(t,B);t.addEventListener("pagehide",E),U=()=>t.removeEventListener("pagehide",E)}return x.initialized||Et(Ke.Pop,x.location,{initialHydration:!0}),C}function Tt(){u&&u(),U&&U(),p.clear(),R&&R.abort(),x.fetchers.forEach((E,N)=>hn(N)),x.blockers.forEach((E,N)=>Pl(N))}function fe(E){return p.add(E),()=>p.delete(E)}function Be(E,N){N===void 0&&(N={}),x=Ve({},x,E);let D=[],M=[];d.v7_fetcherPersist&&x.fetchers.forEach((F,se)=>{F.state==="idle"&&(de.has(se)?M.push(se):D.push(se))}),[...p].forEach(F=>F(x,{deletedFetchers:M,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),d.v7_fetcherPersist&&(D.forEach(F=>x.fetchers.delete(F)),M.forEach(F=>hn(F)))}function nt(E,N,D){var M,F;let{flushSync:se}=D===void 0?{}:D,q=x.actionData!=null&&x.navigation.formMethod!=null&&bn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((M=E.state)==null?void 0:M._isRedirect)!==!0,J;N.actionData?Object.keys(N.actionData).length>0?J=N.actionData:J=null:q?J=x.actionData:J=null;let Z=N.loaderData?Ux(x.loaderData,N.loaderData,N.matches||[],N.errors):x.loaderData,ue=x.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((ye,Pe)=>ue.set(Pe,oa)));let Me=k===!0||x.navigation.formMethod!=null&&bn(x.navigation.formMethod)&&((F=E.state)==null?void 0:F._isRedirect)!==!0;i&&(l=i,i=void 0),K||_===Ke.Pop||(_===Ke.Push?e.history.push(E,E.state):_===Ke.Replace&&e.history.replace(E,E.state));let le;if(_===Ke.Pop){let ye=B.get(x.location.pathname);ye&&ye.has(E.pathname)?le={currentLocation:x.location,nextLocation:E}:B.has(E.pathname)&&(le={currentLocation:E,nextLocation:x.location})}else if(O){let ye=B.get(x.location.pathname);ye?ye.add(E.pathname):(ye=new Set([E.pathname]),B.set(x.location.pathname,ye)),le={currentLocation:x.location,nextLocation:E}}Be(Ve({},N,{actionData:J,loaderData:Z,historyAction:_,location:E,initialized:!0,navigation:qd,revalidation:"idle",restoreScrollPosition:Ye(E,N.matches||x.matches),preventScrollReset:Me,blockers:ue}),{viewTransitionOpts:le,flushSync:se===!0}),_=Ke.Pop,k=!1,O=!1,K=!1,ne=!1,we=[],je=[]}async function zt(E,N){if(typeof E=="number"){e.history.go(E);return}let D=mp(x.location,x.matches,c,d.v7_prependBasename,E,d.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:M,submission:F,error:se}=Mx(d.v7_normalizeFormMethod,!1,D,N),q=x.location,J=al(x.location,M,N&&N.state);J=Ve({},J,e.history.encodeLocation(J));let Z=N&&N.replace!=null?N.replace:void 0,ue=Ke.Push;Z===!0?ue=Ke.Replace:Z===!1||F!=null&&bn(F.formMethod)&&F.formAction===x.location.pathname+x.location.search&&(ue=Ke.Replace);let Me=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,le=(N&&N.unstable_flushSync)===!0,ye=Il({currentLocation:q,nextLocation:J,historyAction:ue});if(ye){nr(ye,{state:"blocked",location:J,proceed(){nr(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),zt(E,N)},reset(){let Pe=new Map(x.blockers);Pe.set(ye,oa),Be({blockers:Pe})}});return}return await Et(ue,J,{submission:F,pendingError:se,preventScrollReset:Me,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:le})}function un(){if($r(),Be({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Et(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Et(_||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Et(E,N,D){R&&R.abort(),R=null,_=E,K=(D&&D.startUninterruptedRevalidation)===!0,ad(x.location,x.matches),k=(D&&D.preventScrollReset)===!0,O=(D&&D.enableViewTransition)===!0;let M=i||l,F=D&&D.overrideNavigation,se=cs(M,N,c),q=(D&&D.flushSync)===!0;if(!se){let Pe=qt(404,{pathname:N.pathname}),{matches:pt,route:ot}=Vx(M);Ar(),nt(N,{matches:pt,loaderData:{},errors:{[ot.id]:Pe}},{flushSync:q});return}if(x.initialized&&!ne&&aM(x.location,N)&&!(D&&D.submission&&bn(D.submission.formMethod))){nt(N,{matches:se},{flushSync:q});return}R=new AbortController;let J=sa(e.history,N,R.signal,D&&D.submission),Z,ue;if(D&&D.pendingError)ue={[Ba(se).route.id]:D.pendingError};else if(D&&D.submission&&bn(D.submission.formMethod)){let Pe=await mo(J,N,D.submission,se,{replace:D.replace,flushSync:q});if(Pe.shortCircuited)return;Z=Pe.pendingActionData,ue=Pe.pendingActionError,F=Qd(N,D.submission),q=!1,J=new Request(J.url,{signal:J.signal})}let{shortCircuited:Me,loaderData:le,errors:ye}=await $l(J,N,se,F,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,D&&D.initialHydration===!0,q,Z,ue);Me||(R=null,nt(N,Ve({matches:se},Z?{actionData:Z}:{},{loaderData:le,errors:ye})))}async function mo(E,N,D,M,F){F===void 0&&(F={}),$r();let se=dM(N,D);Be({navigation:se},{flushSync:F.flushSync===!0});let q,J=xp(M,N);if(!J.route.action&&!J.route.lazy)q={type:He.error,error:qt(405,{method:E.method,pathname:N.pathname,routeId:J.route.id})};else if(q=await ra("action",E,J,M,a,s,c,d.v7_relativeSplatPath),E.signal.aborted)return{shortCircuited:!0};if(pr(q)){let Z;return F&&F.replace!=null?Z=F.replace:Z=q.location===x.location.pathname+x.location.search,await Nn(x,q,{submission:D,replace:Z}),{shortCircuited:!0}}if(ds(q)){let Z=Ba(M,J.route.id);return(F&&F.replace)!==!0&&(_=Ke.Push),{pendingActionData:{},pendingActionError:{[Z.route.id]:q.error}}}if(ur(q))throw qt(400,{type:"defer-action"});return{pendingActionData:{[J.route.id]:q.data}}}async function $l(E,N,D,M,F,se,q,J,Z,ue,Me){let le=M||Qd(N,F),ye=F||se||Gx(le),Pe=i||l,[pt,ot]=Px(e.history,x,D,ye,N,d.v7_partialHydration&&J===!0,ne,we,je,de,Y,W,Pe,c,ue,Me);if(Ar(Ee=>!(D&&D.some($e=>$e.route.id===Ee))||pt&&pt.some($e=>$e.route.id===Ee)),P=++$,pt.length===0&&ot.length===0){let Ee=mn();return nt(N,Ve({matches:D,loaderData:{},errors:Me||null},ue?{actionData:ue}:{},Ee?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Z}),{shortCircuited:!0}}if(!K&&(!d.v7_partialHydration||!J)){ot.forEach($e=>{let On=x.fetchers.get($e.key),Hl=aa(void 0,On?On.data:void 0);x.fetchers.set($e.key,Hl)});let Ee=ue||x.actionData;Be(Ve({navigation:le},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},ot.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Z})}ot.forEach(Ee=>{ee.has(Ee.key)&&kt(Ee.key),Ee.controller&&ee.set(Ee.key,Ee.controller)});let Mr=()=>ot.forEach(Ee=>kt(Ee.key));R&&R.signal.addEventListener("abort",Mr);let{results:ld,loaderResults:Pr,fetcherResults:xo}=await er(x.matches,D,pt,ot,E);if(E.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",Mr),ot.forEach(Ee=>ee.delete(Ee.key));let or=Wx(ld);if(or){if(or.idx>=pt.length){let Ee=ot[or.idx-pt.length].key;W.add(Ee)}return await Nn(x,or.result,{replace:q}),{shortCircuited:!0}}let{loaderData:id,errors:cd}=Hx(x,D,pt,Pr,Me,ot,xo,Se);Se.forEach((Ee,$e)=>{Ee.subscribe(On=>{(On||Ee.done)&&Se.delete($e)})});let dd=mn(),Ir=Ks(P),Fl=dd||Ir||ot.length>0;return Ve({loaderData:id,errors:cd},Fl?{fetchers:new Map(x.fetchers)}:{})}function Al(E,N,D,M){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ee.has(E)&&kt(E);let F=(M&&M.unstable_flushSync)===!0,se=i||l,q=mp(x.location,x.matches,c,d.v7_prependBasename,D,d.v7_relativeSplatPath,N,M==null?void 0:M.relative),J=cs(se,q,c);if(!J){tr(E,N,qt(404,{pathname:q}),{flushSync:F});return}let{path:Z,submission:ue,error:Me}=Mx(d.v7_normalizeFormMethod,!0,q,M);if(Me){tr(E,N,Me,{flushSync:F});return}let le=xp(J,Z);if(k=(M&&M.preventScrollReset)===!0,ue&&bn(ue.formMethod)){Vs(E,N,Z,le,J,F,ue);return}Y.set(E,{routeId:N,path:Z}),Rn(E,N,Z,le,J,F,ue)}async function Vs(E,N,D,M,F,se,q){if($r(),Y.delete(E),!M.route.action&&!M.route.lazy){let $e=qt(405,{method:q.formMethod,pathname:D,routeId:N});tr(E,N,$e,{flushSync:se});return}let J=x.fetchers.get(E);pn(E,uM(q,J),{flushSync:se});let Z=new AbortController,ue=sa(e.history,D,Z.signal,q);ee.set(E,Z);let Me=$,le=await ra("action",ue,M,F,a,s,c,d.v7_relativeSplatPath);if(ue.signal.aborted){ee.get(E)===Z&&ee.delete(E);return}if(d.v7_fetcherPersist&&de.has(E)){if(pr(le)||ds(le)){pn(E,vo(void 0));return}}else{if(pr(le))if(ee.delete(E),P>Me){pn(E,vo(void 0));return}else return W.add(E),pn(E,aa(q)),Nn(x,le,{fetcherSubmission:q});if(ds(le)){tr(E,N,le.error);return}}if(ur(le))throw qt(400,{type:"defer-action"});let ye=x.navigation.location||x.location,Pe=sa(e.history,ye,Z.signal),pt=i||l,ot=x.navigation.state!=="idle"?cs(pt,x.navigation.location,c):x.matches;pe(ot,"Didn't find any matches after fetcher action");let Mr=++$;I.set(E,Mr);let ld=aa(q,le.data);x.fetchers.set(E,ld);let[Pr,xo]=Px(e.history,x,ot,q,ye,!1,ne,we,je,de,Y,W,pt,c,{[M.route.id]:le.data},void 0);xo.filter($e=>$e.key!==E).forEach($e=>{let On=$e.key,Hl=x.fetchers.get(On),V5=aa(void 0,Hl?Hl.data:void 0);x.fetchers.set(On,V5),ee.has(On)&&kt(On),$e.controller&&ee.set(On,$e.controller)}),Be({fetchers:new Map(x.fetchers)});let or=()=>xo.forEach($e=>kt($e.key));Z.signal.addEventListener("abort",or);let{results:id,loaderResults:cd,fetcherResults:dd}=await er(x.matches,ot,Pr,xo,Pe);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",or),I.delete(E),ee.delete(E),xo.forEach($e=>ee.delete($e.key));let Ir=Wx(id);if(Ir){if(Ir.idx>=Pr.length){let $e=xo[Ir.idx-Pr.length].key;W.add($e)}return Nn(x,Ir.result)}let{loaderData:Fl,errors:Ee}=Hx(x,x.matches,Pr,cd,void 0,xo,dd,Se);if(x.fetchers.has(E)){let $e=vo(le.data);x.fetchers.set(E,$e)}Ks(Mr),x.navigation.state==="loading"&&Mr>P?(pe(_,"Expected pending action"),R&&R.abort(),nt(x.navigation.location,{matches:ot,loaderData:Fl,errors:Ee,fetchers:new Map(x.fetchers)})):(Be({errors:Ee,loaderData:Ux(x.loaderData,Fl,ot,Ee),fetchers:new Map(x.fetchers)}),ne=!1)}async function Rn(E,N,D,M,F,se,q){let J=x.fetchers.get(E);pn(E,aa(q,J?J.data:void 0),{flushSync:se});let Z=new AbortController,ue=sa(e.history,D,Z.signal);ee.set(E,Z);let Me=$,le=await ra("loader",ue,M,F,a,s,c,d.v7_relativeSplatPath);if(ur(le)&&(le=await q4(le,ue.signal,!0)||le),ee.get(E)===Z&&ee.delete(E),!ue.signal.aborted){if(de.has(E)){pn(E,vo(void 0));return}if(pr(le))if(P>Me){pn(E,vo(void 0));return}else{W.add(E),await Nn(x,le);return}if(ds(le)){tr(E,N,le.error);return}pe(!ur(le),"Unhandled fetcher deferred data"),pn(E,vo(le.data))}}async function Nn(E,N,D){let{submission:M,fetcherSubmission:F,replace:se}=D===void 0?{}:D;N.revalidate&&(ne=!0);let q=al(E.location,N.location,{_isRedirect:!0});if(pe(q,"Expected a location on the redirect navigation"),o){let ye=!1;if(N.reloadDocument)ye=!0;else if(K4.test(N.location)){const Pe=e.history.createURL(N.location);ye=Pe.origin!==t.location.origin||zo(Pe.pathname,c)==null}if(ye){se?t.location.replace(N.location):t.location.assign(N.location);return}}R=null;let J=se===!0?Ke.Replace:Ke.Push,{formMethod:Z,formAction:ue,formEncType:Me}=E.navigation;!M&&!F&&Z&&ue&&Me&&(M=Gx(E.navigation));let le=M||F;if(XA.has(N.status)&&le&&bn(le.formMethod))await Et(J,q,{submission:Ve({},le,{formAction:N.location}),preventScrollReset:k});else{let ye=Qd(q,M);await Et(J,q,{overrideNavigation:ye,fetcherSubmission:F,preventScrollReset:k})}}async function er(E,N,D,M,F){let se=await Promise.all([...D.map(Z=>ra("loader",F,Z,N,a,s,c,d.v7_relativeSplatPath)),...M.map(Z=>Z.matches&&Z.match&&Z.controller?ra("loader",sa(e.history,Z.path,Z.controller.signal),Z.match,Z.matches,a,s,c,d.v7_relativeSplatPath):{type:He.error,error:qt(404,{pathname:Z.path})})]),q=se.slice(0,D.length),J=se.slice(D.length);return await Promise.all([Kx(E,D,q,q.map(()=>F.signal),!1,x.loaderData),Kx(E,M.map(Z=>Z.match),J,M.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{results:se,loaderResults:q,fetcherResults:J}}function $r(){ne=!0,we.push(...Ar()),Y.forEach((E,N)=>{ee.has(N)&&(je.push(N),kt(N))})}function pn(E,N,D){D===void 0&&(D={}),x.fetchers.set(E,N),Be({fetchers:new Map(x.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function tr(E,N,D,M){M===void 0&&(M={});let F=Ba(x.matches,N);hn(E),Be({errors:{[F.route.id]:D},fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Ml(E){return d.v7_fetcherPersist&&(Te.set(E,(Te.get(E)||0)+1),de.has(E)&&de.delete(E)),x.fetchers.get(E)||JA}function hn(E){let N=x.fetchers.get(E);ee.has(E)&&!(N&&N.state==="loading"&&I.has(E))&&kt(E),Y.delete(E),I.delete(E),W.delete(E),de.delete(E),x.fetchers.delete(E)}function fo(E){if(d.v7_fetcherPersist){let N=(Te.get(E)||0)-1;N<=0?(Te.delete(E),de.add(E)):Te.set(E,N)}else hn(E);Be({fetchers:new Map(x.fetchers)})}function kt(E){let N=ee.get(E);pe(N,"Expected fetch controller: "+E),N.abort(),ee.delete(E)}function Ws(E){for(let N of E){let D=Ml(N),M=vo(D.data);x.fetchers.set(N,M)}}function mn(){let E=[],N=!1;for(let D of W){let M=x.fetchers.get(D);pe(M,"Expected fetcher: "+D),M.state==="loading"&&(W.delete(D),E.push(D),N=!0)}return Ws(E),N}function Ks(E){let N=[];for(let[D,M]of I)if(M<E){let F=x.fetchers.get(D);pe(F,"Expected fetcher: "+D),F.state==="loading"&&(kt(D),I.delete(D),N.push(D))}return Ws(N),N.length>0}function rd(E,N){let D=x.blockers.get(E)||oa;return ce.get(E)!==N&&ce.set(E,N),D}function Pl(E){x.blockers.delete(E),ce.delete(E)}function nr(E,N){let D=x.blockers.get(E)||oa;pe(D.state==="unblocked"&&N.state==="blocked"||D.state==="blocked"&&N.state==="blocked"||D.state==="blocked"&&N.state==="proceeding"||D.state==="blocked"&&N.state==="unblocked"||D.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+D.state+" -> "+N.state);let M=new Map(x.blockers);M.set(E,N),Be({blockers:M})}function Il(E){let{currentLocation:N,nextLocation:D,historyAction:M}=E;if(ce.size===0)return;ce.size>1&&yr(!1,"A router only supports one blocker at a time");let F=Array.from(ce.entries()),[se,q]=F[F.length-1],J=x.blockers.get(se);if(!(J&&J.state==="proceeding")&&q({currentLocation:N,nextLocation:D,historyAction:M}))return se}function Ar(E){let N=[];return Se.forEach((D,M)=>{(!E||E(M))&&(D.cancel(),N.push(M),Se.delete(M))}),N}function sd(E,N,D){if(f=E,y=N,v=D||null,!S&&x.navigation===qd){S=!0;let M=Ye(x.location,x.matches);M!=null&&Be({restoreScrollPosition:M})}return()=>{f=null,y=null,v=null}}function zl(E,N){return v&&v(E,N.map(M=>RA(M,x.loaderData)))||E.key}function ad(E,N){if(f&&y){let D=zl(E,N);f[D]=y()}}function Ye(E,N){if(f){let D=zl(E,N),M=f[D];if(typeof M=="number")return M}return null}function bt(E){a={},i=pp(E,s,void 0,a)}return C={get basename(){return c},get future(){return d},get state(){return x},get routes(){return l},get window(){return t},initialize:ut,subscribe:fe,enableScrollRestoration:sd,navigate:zt,fetch:Al,revalidate:un,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:Ml,deleteFetcher:fo,dispose:Tt,getBlocker:rd,deleteBlocker:Pl,_internalFetchControllers:ee,_internalActiveDeferreds:Se,_internalSetRoutes:bt},C}function nM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function mp(e,t,o,r,s,a,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=pm(s||".",um(c,a),zo(e.pathname,o)||e.pathname,i==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&d&&d.route.index&&!mm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&o!=="/"&&(u.pathname=u.pathname==="/"?o:eo([o,u.pathname])),Sr(u)}function Mx(e,t,o,r){if(!r||!nM(r))return{path:o};if(r.formMethod&&!cM(r.formMethod))return{path:o,error:qt(405,{method:r.formMethod})};let s=()=>({path:o,error:qt(400,{type:"invalid-body"})}),a=r.formMethod||"get",l=e?a.toUpperCase():a.toLowerCase(),i=Z4(o);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bn(l))return s();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,y)=>{let[S,T]=y;return""+v+S+"="+T+`
`},""):String(r.body);return{path:o,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!bn(l))return s();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:o,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return s()}}}pe(typeof FormData=="function","FormData is not available in this environment");let c,d;if(r.formData)c=fp(r.formData),d=r.formData;else if(r.body instanceof FormData)c=fp(r.body),d=r.body;else if(r.body instanceof URLSearchParams)c=r.body,d=Fx(c);else if(r.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(r.body),d=Fx(c)}catch{return s()}let u={formMethod:l,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(bn(u.formMethod))return{path:o,submission:u};let p=ho(o);return t&&p.search&&mm(p.search)&&c.append("index",""),p.search="?"+c,{path:Sr(p),submission:u}}function oM(e,t){let o=e;if(t){let r=e.findIndex(s=>s.route.id===t);r>=0&&(o=e.slice(0,r))}return o}function Px(e,t,o,r,s,a,l,i,c,d,u,p,f,v,y,S){let T=S?Object.values(S)[0]:y?Object.values(y)[0]:void 0,g=e.createURL(t.location),h=e.createURL(s),m=S?Object.keys(S)[0]:void 0,C=oM(o,m).filter((_,k)=>{let{route:R}=_;if(R.lazy)return!0;if(R.loader==null)return!1;if(a)return R.loader.hydrate?!0:t.loaderData[R.id]===void 0&&(!t.errors||t.errors[R.id]===void 0);if(rM(t.loaderData,t.matches[k],_)||i.some(U=>U===_.route.id))return!0;let O=t.matches[k],B=_;return Ix(_,Ve({currentUrl:g,currentParams:O.params,nextUrl:h,nextParams:B.params},r,{actionResult:T,defaultShouldRevalidate:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||Y4(O,B)}))}),x=[];return u.forEach((_,k)=>{if(a||!o.some(K=>K.route.id===_.routeId)||d.has(k))return;let R=cs(f,_.path,v);if(!R){x.push({key:k,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(k),B=xp(R,_.path),U=!1;p.has(k)?U=!1:c.includes(k)?U=!0:O&&O.state!=="idle"&&O.data===void 0?U=l:U=Ix(B,Ve({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:o[o.length-1].params},r,{actionResult:T,defaultShouldRevalidate:l})),U&&x.push({key:k,routeId:_.routeId,path:_.path,matches:R,match:B,controller:new AbortController})}),[C,x]}function rM(e,t,o){let r=!t||o.route.id!==t.route.id,s=e[o.route.id]===void 0;return r||s}function Y4(e,t){let o=e.route.path;return e.pathname!==t.pathname||o!=null&&o.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ix(e,t){if(e.route.shouldRevalidate){let o=e.route.shouldRevalidate(t);if(typeof o=="boolean")return o}return t.defaultShouldRevalidate}async function zx(e,t,o){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let s=o[e.id];pe(s,"No route found in manifest");let a={};for(let l in r){let c=s[l]!==void 0&&l!=="hasErrorBoundary";yr(!c,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!EA.has(l)&&(a[l]=r[l])}Object.assign(s,a),Object.assign(s,Ve({},t(s),{lazy:void 0}))}async function ra(e,t,o,r,s,a,l,i,c){c===void 0&&(c={});let d,u,p,f=S=>{let T,g=new Promise((h,m)=>T=m);return p=()=>T(),t.signal.addEventListener("abort",p),Promise.race([S({request:t,params:o.params,context:c.requestContext}),g])};try{let S=o.route[e];if(o.route.lazy)if(S){let T,g=await Promise.all([f(S).catch(h=>{T=h}),zx(o.route,a,s)]);if(T)throw T;u=g[0]}else if(await zx(o.route,a,s),S=o.route[e],S)u=await f(S);else if(e==="action"){let T=new URL(t.url),g=T.pathname+T.search;throw qt(405,{method:t.method,pathname:g,routeId:o.route.id})}else return{type:He.data,data:void 0};else if(S)u=await f(S);else{let T=new URL(t.url),g=T.pathname+T.search;throw qt(404,{pathname:g})}pe(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+o.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(S){d=He.error,u=S}finally{p&&t.signal.removeEventListener("abort",p)}if(iM(u)){let S=u.status;if(QA.has(S)){let g=u.headers.get("Location");if(pe(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!K4.test(g))g=mp(new URL(t.url),r.slice(0,r.indexOf(o)+1),l,!0,g,i);else if(!c.isStaticRequest){let h=new URL(t.url),m=g.startsWith("//")?new URL(h.protocol+g):new URL(g),j=zo(m.pathname,l)!=null;m.origin===h.origin&&j&&(g=m.pathname+m.search+m.hash)}if(c.isStaticRequest)throw u.headers.set("Location",g),u;return{type:He.redirect,status:S,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===He.error?He.error:He.data,response:u};let T;try{let g=u.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?T=await u.json():T=await u.text()}catch(g){return{type:He.error,error:g}}return d===He.error?{type:d,error:new hm(S,u.statusText,T),headers:u.headers}:{type:He.data,data:T,statusCode:u.status,headers:u.headers}}if(d===He.error)return{type:d,error:u};if(lM(u)){var v,y;return{type:He.deferred,deferredData:u,statusCode:(v=u.init)==null?void 0:v.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:He.data,data:u}}function sa(e,t,o,r){let s=e.createURL(Z4(t)).toString(),a={signal:o};if(r&&bn(r.formMethod)){let{formMethod:l,formEncType:i}=r;a.method=l.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(r.json)):i==="text/plain"?a.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?a.body=fp(r.formData):a.body=r.formData}return new Request(s,a)}function fp(e){let t=new URLSearchParams;for(let[o,r]of e.entries())t.append(o,typeof r=="string"?r:r.name);return t}function Fx(e){let t=new FormData;for(let[o,r]of e.entries())t.append(o,r);return t}function sM(e,t,o,r,s){let a={},l=null,i,c=!1,d={};return o.forEach((u,p)=>{let f=t[p].route.id;if(pe(!pr(u),"Cannot handle redirect results in processLoaderData"),ds(u)){let v=Ba(e,f),y=u.error;r&&(y=Object.values(r)[0],r=void 0),l=l||{},l[v.route.id]==null&&(l[v.route.id]=y),a[f]=void 0,c||(c=!0,i=V4(u.error)?u.error.status:500),u.headers&&(d[f]=u.headers)}else ur(u)?(s.set(f,u.deferredData),a[f]=u.deferredData.data):a[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[f]=u.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:i||200,loaderHeaders:d}}function Hx(e,t,o,r,s,a,l,i){let{loaderData:c,errors:d}=sM(t,o,r,s,i);for(let u=0;u<a.length;u++){let{key:p,match:f,controller:v}=a[u];pe(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let y=l[u];if(!(v&&v.signal.aborted))if(ds(y)){let S=Ba(e.matches,f==null?void 0:f.route.id);d&&d[S.route.id]||(d=Ve({},d,{[S.route.id]:y.error})),e.fetchers.delete(p)}else if(pr(y))pe(!1,"Unhandled fetcher revalidation redirect");else if(ur(y))pe(!1,"Unhandled fetcher deferred data");else{let S=vo(y.data);e.fetchers.set(p,S)}}return{loaderData:c,errors:d}}function Ux(e,t,o,r){let s=Ve({},t);for(let a of o){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&a.route.loader&&(s[l]=e[l]),r&&r.hasOwnProperty(l))break}return s}function Ba(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Vx(e){let t=e.length===1?e[0]:e.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function qt(e,t){let{pathname:o,routeId:r,method:s,type:a}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&o&&r?i="You made a "+s+' request to "'+o+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?i="defer() is not supported in actions":a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+r+'" does not match URL "'+o+'"'):e===404?(l="Not Found",i='No route matches URL "'+o+'"'):e===405&&(l="Method Not Allowed",s&&o&&r?i="You made a "+s.toUpperCase()+' request to "'+o+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":s&&(i='Invalid request method "'+s.toUpperCase()+'"')),new hm(e||500,l,new Error(i),!0)}function Wx(e){for(let t=e.length-1;t>=0;t--){let o=e[t];if(pr(o))return{result:o,idx:t}}}function Z4(e){let t=typeof e=="string"?ho(e):e;return Sr(Ve({},t,{hash:""}))}function aM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ur(e){return e.type===He.deferred}function ds(e){return e.type===He.error}function pr(e){return(e&&e.type)===He.redirect}function lM(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function iM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function cM(e){return qA.has(e.toLowerCase())}function bn(e){return YA.has(e.toLowerCase())}async function Kx(e,t,o,r,s,a){for(let l=0;l<o.length;l++){let i=o[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!Y4(d,c)&&(a&&a[c.route.id])!==void 0;if(ur(i)&&(s||u)){let p=r[l];pe(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await q4(i,p,s).then(f=>{f&&(o[l]=f||o[l])})}}}async function q4(e,t,o){if(o===void 0&&(o=!1),!await e.deferredData.resolveData(t)){if(o)try{return{type:He.data,data:e.deferredData.unwrappedData}}catch(s){return{type:He.error,error:s}}return{type:He.data,data:e.deferredData.data}}}function mm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function xp(e,t){let o=typeof t=="string"?ho(t).search:t.search;if(e[e.length-1].route.index&&mm(o||""))return e[e.length-1];let r=U4(e);return r[r.length-1]}function Gx(e){let{formMethod:t,formAction:o,formEncType:r,text:s,formData:a,json:l}=e;if(!(!t||!o||!r)){if(s!=null)return{formMethod:t,formAction:o,formEncType:r,formData:void 0,json:void 0,text:s};if(a!=null)return{formMethod:t,formAction:o,formEncType:r,formData:a,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:o,formEncType:r,formData:void 0,json:l,text:void 0}}}function Qd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function dM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function aa(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function uM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function vo(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pM(e,t){try{let o=e.sessionStorage.getItem(G4);if(o){let r=JSON.parse(o);for(let[s,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(s,new Set(a||[]))}}catch{}}function hM(e,t){if(t.size>0){let o={};for(let[r,s]of t)o[r]=[...s];try{e.sessionStorage.setItem(G4,JSON.stringify(o))}catch(r){yr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ll.apply(this,arguments)}const Ol=b.createContext(null),fm=b.createContext(null),Xo=b.createContext(null),od=b.createContext(null),Jo=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Q4=b.createContext(null);function mM(e,t){let{relative:o}=t===void 0?{}:t;Dl()||pe(!1);let{basename:r,navigator:s}=b.useContext(Xo),{hash:a,pathname:l,search:i}=Ll(e,{relative:o}),c=l;return r!=="/"&&(c=l==="/"?r:eo([r,l])),s.createHref({pathname:c,search:i,hash:a})}function Dl(){return b.useContext(od)!=null}function Us(){return Dl()||pe(!1),b.useContext(od).location}function X4(e){b.useContext(Xo).static||b.useLayoutEffect(e)}function fM(){let{isDataRoute:e}=b.useContext(Jo);return e?RM():xM()}function xM(){Dl()||pe(!1);let e=b.useContext(Ol),{basename:t,future:o,navigator:r}=b.useContext(Xo),{matches:s}=b.useContext(Jo),{pathname:a}=Us(),l=JSON.stringify(um(s,o.v7_relativeSplatPath)),i=b.useRef(!1);return X4(()=>{i.current=!0}),b.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){r.go(d);return}let p=pm(d,JSON.parse(l),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:eo([t,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[t,r,l,a,e])}const gM=b.createContext(null);function bM(e){let t=b.useContext(Jo).outlet;return t&&b.createElement(gM.Provider,{value:e},t)}function Ll(e,t){let{relative:o}=t===void 0?{}:t,{future:r}=b.useContext(Xo),{matches:s}=b.useContext(Jo),{pathname:a}=Us(),l=JSON.stringify(um(s,r.v7_relativeSplatPath));return b.useMemo(()=>pm(e,JSON.parse(l),a,o==="path"),[e,l,a,o])}function vM(e,t,o,r){Dl()||pe(!1);let{navigator:s}=b.useContext(Xo),{matches:a}=b.useContext(Jo),l=a[a.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Us(),u;if(t){var p;let T=typeof t=="string"?ho(t):t;c==="/"||(p=T.pathname)!=null&&p.startsWith(c)||pe(!1),u=T}else u=d;let f=u.pathname||"/",v=c==="/"?f:f.slice(c.length)||"/",y=cs(e,{pathname:v}),S=_M(y&&y.map(T=>Object.assign({},T,{params:Object.assign({},i,T.params),pathname:eo([c,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?c:eo([c,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),a,o,r);return t&&S?b.createElement(od.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ke.Pop}},S):S}function jM(){let e=kM(),t=V4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),o?b.createElement("pre",{style:s},o):null,a)}const yM=b.createElement(jM,null);class SM extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,o){return o.location!==t.location||o.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:o.error,location:o.location,revalidation:t.revalidation||o.revalidation}}componentDidCatch(t,o){console.error("React Router caught the following error during render",t,o)}render(){return this.state.error!==void 0?b.createElement(Jo.Provider,{value:this.props.routeContext},b.createElement(Q4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CM(e){let{routeContext:t,match:o,children:r}=e,s=b.useContext(Ol);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(Jo.Provider,{value:t},r)}function _M(e,t,o,r){var s;if(t===void 0&&(t=[]),o===void 0&&(o=null),r===void 0&&(r=null),e==null){var a;if((a=o)!=null&&a.errors)e=o.matches;else return null}let l=e,i=(s=o)==null?void 0:s.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||pe(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(o&&r&&r.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:v}=o,y=p.route.loader&&f[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,f)=>{let v,y=!1,S=null,T=null;o&&(v=i&&p.route.id?i[p.route.id]:void 0,S=p.route.errorElement||yM,c&&(d<0&&f===0?(NM("route-fallback",!1),y=!0,T=null):d===f&&(y=!0,T=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,f+1)),h=()=>{let m;return v?m=S:y?m=T:p.route.Component?m=b.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=u,b.createElement(CM,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:o!=null},children:m})};return o&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?b.createElement(SM,{location:o.location,revalidation:o.revalidation,component:S,error:v,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var J4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J4||{}),jc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(jc||{});function wM(e){let t=b.useContext(Ol);return t||pe(!1),t}function TM(e){let t=b.useContext(fm);return t||pe(!1),t}function EM(e){let t=b.useContext(Jo);return t||pe(!1),t}function eb(e){let t=EM(),o=t.matches[t.matches.length-1];return o.route.id||pe(!1),o.route.id}function kM(){var e;let t=b.useContext(Q4),o=TM(jc.UseRouteError),r=eb(jc.UseRouteError);return t!==void 0?t:(e=o.errors)==null?void 0:e[r]}function RM(){let{router:e}=wM(J4.UseNavigateStable),t=eb(jc.UseNavigateStable),o=b.useRef(!1);return X4(()=>{o.current=!0}),b.useCallback(function(s,a){a===void 0&&(a={}),o.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ll({fromRouteId:t},a)))},[e,t])}const Yx={};function NM(e,t,o){!t&&!Yx[e]&&(Yx[e]=!0)}function OM(e){return bM(e.context)}function DM(e){let{basename:t="/",children:o=null,location:r,navigationType:s=Ke.Pop,navigator:a,static:l=!1,future:i}=e;Dl()&&pe(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:a,static:l,future:ll({v7_relativeSplatPath:!1},i)}),[c,i,a,l]);typeof r=="string"&&(r=ho(r));let{pathname:u="/",search:p="",hash:f="",state:v=null,key:y="default"}=r,S=b.useMemo(()=>{let T=zo(u,c);return T==null?null:{location:{pathname:T,search:p,hash:f,state:v,key:y},navigationType:s}},[c,u,p,f,v,y,s]);return S==null?null:b.createElement(Xo.Provider,{value:d},b.createElement(od.Provider,{children:o,value:S}))}new Promise(()=>{});function LM(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ks.apply(this,arguments)}function tb(e,t){if(e==null)return{};var o={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(o[s]=e[s]);return o}function BM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $M(e,t){return e.button===0&&(!t||t==="_self")&&!BM(e)}const AM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MM=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function PM(e,t){return tM({basename:t==null?void 0:t.basename,future:ks({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:_A({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||IM(),routes:e,mapRouteProperties:LM,window:t==null?void 0:t.window}).initialize()}function IM(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ks({},t,{errors:zM(t.errors)})),t}function zM(e){if(!e)return null;let t=Object.entries(e),o={};for(let[r,s]of t)if(s&&s.__type==="RouteErrorResponse")o[r]=new hm(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let a=window[s.__subType];if(typeof a=="function")try{let l=new a(s.message);l.stack="",o[r]=l}catch{}}if(o[r]==null){let a=new Error(s.message);a.stack="",o[r]=a}}else o[r]=s;return o}const nb=b.createContext({isTransitioning:!1}),FM=b.createContext(new Map),HM="startTransition",Zx=i6[HM],UM="flushSync",qx=v8[UM];function VM(e){Zx?Zx(e):e()}function la(e){qx?qx(e):e()}class WM{constructor(){this.status="pending",this.promise=new Promise((t,o)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",o(r))}})}}function KM(e){let{fallbackElement:t,router:o,future:r}=e,[s,a]=b.useState(o.state),[l,i]=b.useState(),[c,d]=b.useState({isTransitioning:!1}),[u,p]=b.useState(),[f,v]=b.useState(),[y,S]=b.useState(),T=b.useRef(new Map),{v7_startTransition:g}=r||{},h=b.useCallback(_=>{g?VM(_):_()},[g]),m=b.useCallback((_,k)=>{let{deletedFetchers:R,unstable_flushSync:O,unstable_viewTransitionOpts:B}=k;R.forEach(K=>T.current.delete(K)),_.fetchers.forEach((K,ne)=>{K.data!==void 0&&T.current.set(ne,K.data)});let U=o.window==null||typeof o.window.document.startViewTransition!="function";if(!B||U){O?la(()=>a(_)):h(()=>a(_));return}if(O){la(()=>{f&&(u&&u.resolve(),f.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:B.currentLocation,nextLocation:B.nextLocation})});let K=o.window.document.startViewTransition(()=>{la(()=>a(_))});K.finished.finally(()=>{la(()=>{p(void 0),v(void 0),i(void 0),d({isTransitioning:!1})})}),la(()=>v(K));return}f?(u&&u.resolve(),f.skipTransition(),S({state:_,currentLocation:B.currentLocation,nextLocation:B.nextLocation})):(i(_),d({isTransitioning:!0,flushSync:!1,currentLocation:B.currentLocation,nextLocation:B.nextLocation}))},[o.window,f,u,T,h]);b.useLayoutEffect(()=>o.subscribe(m),[o,m]),b.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new WM)},[c]),b.useEffect(()=>{if(u&&l&&o.window){let _=l,k=u.promise,R=o.window.document.startViewTransition(async()=>{h(()=>a(_)),await k});R.finished.finally(()=>{p(void 0),v(void 0),i(void 0),d({isTransitioning:!1})}),v(R)}},[h,l,u,o.window]),b.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,f,s.location,l]),b.useEffect(()=>{!c.isTransitioning&&y&&(i(y.state),d({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),S(void 0))},[c.isTransitioning,y]),b.useEffect(()=>{},[]);let j=b.useMemo(()=>({createHref:o.createHref,encodeLocation:o.encodeLocation,go:_=>o.navigate(_),push:(_,k,R)=>o.navigate(_,{state:k,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(_,k,R)=>o.navigate(_,{replace:!0,state:k,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[o]),C=o.basename||"/",x=b.useMemo(()=>({router:o,navigator:j,static:!1,basename:C}),[o,j,C]);return b.createElement(b.Fragment,null,b.createElement(Ol.Provider,{value:x},b.createElement(fm.Provider,{value:s},b.createElement(FM.Provider,{value:T.current},b.createElement(nb.Provider,{value:c},b.createElement(DM,{basename:C,location:s.location,navigationType:s.historyAction,navigator:j,future:{v7_relativeSplatPath:o.future.v7_relativeSplatPath}},s.initialized||o.future.v7_partialHydration?b.createElement(GM,{routes:o.routes,future:o.future,state:s}):t))))),null)}function GM(e){let{routes:t,future:o,state:r}=e;return vM(t,void 0,r,o)}const YM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qM=b.forwardRef(function(t,o){let{onClick:r,relative:s,reloadDocument:a,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,f=tb(t,AM),{basename:v}=b.useContext(Xo),y,S=!1;if(typeof d=="string"&&ZM.test(d)&&(y=d,YM))try{let m=new URL(window.location.href),j=d.startsWith("//")?new URL(m.protocol+d):new URL(d),C=zo(j.pathname,v);j.origin===m.origin&&C!=null?d=C+j.search+j.hash:S=!0}catch{}let T=mM(d,{relative:s}),g=JM(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:s,unstable_viewTransition:p});function h(m){r&&r(m),m.defaultPrevented||g(m)}return b.createElement("a",ks({},f,{href:y||T,onClick:S||a?r:h,ref:o,target:c}))}),QM=b.forwardRef(function(t,o){let{"aria-current":r="page",caseSensitive:s=!1,className:a="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=tb(t,MM),f=Ll(c,{relative:p.relative}),v=Us(),y=b.useContext(fm),{navigator:S}=b.useContext(Xo),T=y!=null&&eP(f)&&d===!0,g=S.encodeLocation?S.encodeLocation(f).pathname:f.pathname,h=v.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;s||(h=h.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase());const j=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!l&&h.startsWith(g)&&h.charAt(j)==="/",x=m!=null&&(m===g||!l&&m.startsWith(g)&&m.charAt(g.length)==="/"),_={isActive:C,isPending:x,isTransitioning:T},k=C?r:void 0,R;typeof a=="function"?R=a(_):R=[a,C?"active":null,x?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let O=typeof i=="function"?i(_):i;return b.createElement(qM,ks({},p,{"aria-current":k,className:R,ref:o,style:O,to:c,unstable_viewTransition:d}),typeof u=="function"?u(_):u)});var gp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gp||(gp={}));var Qx;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qx||(Qx={}));function XM(e){let t=b.useContext(Ol);return t||pe(!1),t}function JM(e,t){let{target:o,replace:r,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=fM(),d=Us(),u=Ll(e,{relative:l});return b.useCallback(p=>{if($M(p,o)){p.preventDefault();let f=r!==void 0?r:Sr(d)===Sr(u);c(e,{replace:f,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i})}},[d,c,u,r,s,o,e,a,l,i])}function eP(e,t){t===void 0&&(t={});let o=b.useContext(nb);o==null&&pe(!1);let{basename:r}=XM(gp.useViewTransitionState),s=Ll(e,{relative:t.relative});if(!o.isTransitioning)return!1;let a=zo(o.currentLocation.pathname,r)||o.currentLocation.pathname,l=zo(o.nextLocation.pathname,r)||o.nextLocation.pathname;return hp(s.pathname,l)!=null||hp(s.pathname,a)!=null}const wn=({to:e,className:t="",exact:o,onClick:r,label:s,style:a,...l})=>n.jsx(QM,{to:e,onClick:r,end:o&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":s,style:a,children:n.jsx(Dr,{...l})}),ob=(e,t)=>(o={})=>n.jsx(wn,{to:e,className:"code",...o,children:t}),rb=ob("/components/button","Button"),tP=ob("/components/buttons","Buttons"),sb=()=>n.jsx(w,{code:"outline",Component:SA,Source:CA,undent:4,expand:!0,children:n.jsxs("p",{children:["Additional properties passed to the ",n.jsx("code",{children:"Buttons"})," component will be forwarded to each ",n.jsx(rb,{})," component.  For example, you can set the ",n.jsx("code",{children:"outline"})," property on the parent"," ",n.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),oP=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Buttons"}),n.jsx(M4,{}),n.jsxs(Re,{tocName:"buttons",children:[n.jsx(te,{title:"Properties"}),n.jsx(I4,{}),n.jsx(sb,{}),n.jsx(z4,{}),n.jsx(P4,{}),n.jsx(te,{title:"Components"}),n.jsx(A4,{})]})]}),rP=Object.freeze(Object.defineProperty({__proto__:null,default:oP},Symbol.toStringTag,{value:"Module"})),sP=()=>n.jsx(sT,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),aP=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,ab=()=>n.jsx(w,{code:"CheckboxState",Component:sP,Source:aP,expand:!0,children:n.jsx("div",{children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),lP=Object.freeze(Object.defineProperty({__proto__:null,default:ab},Symbol.toStringTag,{value:"Module"})),iP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{text:"I like badgers",checked:e,onChange:t})},cP=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,lb=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),n.jsx(Q,{Component:iP,code:cP,expand:!0})]}),dP=Object.freeze(Object.defineProperty({__proto__:null,default:lb},Symbol.toStringTag,{value:"Module"})),uP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{border:!0,text:"I like badgers",checked:e,onChange:t})},pP=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,ib=()=>n.jsx(w,{code:"border",Component:uP,Source:pP,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",n.jsx("code",{children:"border"})," class."]})}),hP=Object.freeze(Object.defineProperty({__proto__:null,default:ib},Symbol.toStringTag,{value:"Module"})),mP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{text:"I like badgers",checked:e,onChange:t})},fP=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,cb=()=>n.jsx(w,{code:"checked",Component:mP,Source:fP,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",n.jsx("code",{children:"true"}),") or not (",n.jsx("code",{children:"false"}),")."]})}),xP=Object.freeze(Object.defineProperty({__proto__:null,default:cb},Symbol.toStringTag,{value:"Module"})),gP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},bP=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,db=()=>n.jsx(w,{code:"checkedText / uncheckedText",Component:gP,Source:bP,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"checkedText"})," and ",n.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),vP=Object.freeze(Object.defineProperty({__proto__:null,default:db},Symbol.toStringTag,{value:"Module"})),jP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},yP=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,ub=()=>n.jsx(w,{code:"className",Component:jP,Source:yP,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",n.jsx("code",{children:"label"})," element."]})}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:ub},Symbol.toStringTag,{value:"Module"})),CP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},_P=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,pb=()=>n.jsx(w,{code:"disabled",Component:CP,Source:_P,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),wP=Object.freeze(Object.defineProperty({__proto__:null,default:pb},Symbol.toStringTag,{value:"Module"})),TP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{text:"I like badgers",checked:e,onChange:t})},EP=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,hb=()=>n.jsx(w,{code:"onChange",Component:TP,Source:EP,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:hb},Symbol.toStringTag,{value:"Module"})),RP=()=>{const[e,t]=b.useState(!1);return n.jsx(Vn,{text:"Badger are the best!",checked:e,onChange:t})},NP=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,mb=()=>n.jsx(w,{code:"text",Component:RP,Source:NP,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),OP=Object.freeze(Object.defineProperty({__proto__:null,default:mb},Symbol.toStringTag,{value:"Module"})),DP=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Checkbox"}),n.jsx(lb,{}),n.jsxs(Re,{tocName:"checkbox",children:[n.jsx(te,{title:"Properties"}),n.jsx(mb,{}),n.jsx(cb,{}),n.jsx(db,{}),n.jsx(hb,{}),n.jsx(ub,{}),n.jsx(ib,{}),n.jsx(pb,{}),n.jsx(te,{title:"Components"}),n.jsx(ab,{})]})]}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:DP},Symbol.toStringTag,{value:"Module"})),BP=()=>n.jsx(n.Fragment,{children:n.jsx(Lt,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),$P=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,fb=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),n.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",n.jsx("code",{children:"text"}),","," ",n.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),n.jsx(Q,{Component:BP,code:$P,expand:!0})]}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:fb},Symbol.toStringTag,{value:"Module"})),MP=()=>n.jsx(Lt,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),PP=`import React from 'react'
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

export default CancelExample`,xb=()=>n.jsx(w,{code:"cancel",Component:MP,Source:PP,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),IP=Object.freeze(Object.defineProperty({__proto__:null,default:xb},Symbol.toStringTag,{value:"Module"})),zP=()=>n.jsx(Lt,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),FP=`import React from 'react'
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

export default CancelExample`,gb=()=>n.jsx(w,{id:"cancelProps",code:"cancelXXX",Component:zP,Source:FP,undent:2,expand:!0,children:n.jsxs("p",{children:["You can also set individual properties for the cancel button",n.jsx("code",{children:"cancelIcon"}),","," ",n.jsx("code",{children:"cancelText"}),","," ",n.jsx("code",{children:"cancelColor"})," and"," ",n.jsx("code",{children:"cancelClass"}),"."]})}),HP=Object.freeze(Object.defineProperty({__proto__:null,default:gb},Symbol.toStringTag,{value:"Module"})),UP=()=>n.jsx(n.Fragment,{children:n.jsx(Lt,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),VP=`import React from 'react'
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
`,bb=()=>n.jsx(w,{code:"className",Component:UP,Source:VP,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",n.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",n.jsx("code",{children:"buttons"})," in the value you provide for ",n.jsx("code",{children:"className"})]})}),WP=Object.freeze(Object.defineProperty({__proto__:null,default:bb},Symbol.toStringTag,{value:"Module"})),KP=()=>n.jsx(Lt,{text:"Click to Delete",color:"red"}),GP=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,vb=()=>n.jsx(w,{code:"color",Component:KP,Source:GP,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),YP=Object.freeze(Object.defineProperty({__proto__:null,default:vb},Symbol.toStringTag,{value:"Module"})),ZP=()=>n.jsx(Lt,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),qP=`import React from 'react'
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

export default ConfirmExample`,jb=()=>n.jsx(w,{code:"confirm",Component:ZP,Source:qP,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),QP=Object.freeze(Object.defineProperty({__proto__:null,default:jb},Symbol.toStringTag,{value:"Module"})),XP=()=>n.jsx(Lt,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),JP=`import React from 'react'
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

export default ConfirmProps`,yb=()=>n.jsx(w,{id:"confirmProps",code:"confirmXXX",Component:XP,Source:JP,undent:2,expand:!0,children:n.jsxs("p",{children:["You can also set individual properties for the confirm button",n.jsx("code",{children:"confirmIcon"}),","," ",n.jsx("code",{children:"confirmText"}),","," ",n.jsx("code",{children:"confirmColor"})," and"," ",n.jsx("code",{children:"confirmClass"}),"."]})}),eI=Object.freeze(Object.defineProperty({__proto__:null,default:yb},Symbol.toStringTag,{value:"Module"})),tI=()=>n.jsx(Lt,{text:"Click to Delete",color:"red",iconRight:"trash"}),nI=`import React from 'react'
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
`,Sb=()=>n.jsx(w,{code:"iconRight",Component:tI,Source:nI,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",n.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",n.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),oI=Object.freeze(Object.defineProperty({__proto__:null,default:Sb},Symbol.toStringTag,{value:"Module"})),rI=()=>n.jsxs("div",{className:"flex gap-4",children:[n.jsx(Lt,{text:"Delete 1",color:"red",modal:!0}),n.jsx(Lt,{text:"Delete 2",color:"brown",prompt:"Are you sure you want to delete this?",modal:!0}),n.jsx(Lt,{text:"Delete 3",color:"orange",title:n.jsx("h3",{children:"You are about to delete something!"}),prompt:"Are you sure you want to do that?",modal:!0}),n.jsx(Lt,{text:"Delete 4",color:"yellow",modalClass:"max-width-25rem",prompt:n.jsx(ls,{title:"Warning!",text:"This is forever. You can't undo this.",icon:"exclamation",border:!0}),modal:!0})]}),sI=`import React from 'react'
import { Confirm, Warning } from '@/src/index.jsx'

const ConfirmExample = () =>
  /* START */
  <div className="flex gap-4">
    <Confirm
      text="Delete 1"
      color="red"
      modal
    />
    <Confirm
      text="Delete 2"
      color="brown"
      prompt="Are you sure you want to delete this?"
      modal
    />
    <Confirm
      text="Delete 3"
      color="orange"
      title={<h3>You are about to delete something!</h3>}
      prompt="Are you sure you want to do that?"
      modal
    />
    <Confirm
      text="Delete 4"
      color="yellow"
      modalClass="max-width-25rem"
      prompt={
        <Warning
          title="Warning!"
          text="This is forever. You can't undo this."
          icon="exclamation"
          border
        />
      }
      modal
    />
  </div>
  /* END */

export default ConfirmExample`,Cb=()=>n.jsxs(w,{code:"modal",Component:rI,Source:sI,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"modal"})," property can be set to make the confirmation happen in a modal."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can be used to provide an additional prompt to the user.  The ",n.jsx("code",{children:"title"})," property can be used to provide a title, or ",n.jsx("code",{children:"heading"})," can be used to provide the entire header block.  The ",n.jsx("code",{children:"modalClass"})," property can be used to define a CSS class for the modal."]}),n.jsxs("p",{children:["If a ",n.jsx("code",{children:"prompt"})," is defined then the buttons will be rendered in the modal footer.  Otherwise they will be in the main modal body."]})]}),aI=Object.freeze(Object.defineProperty({__proto__:null,default:Cb},Symbol.toStringTag,{value:"Module"})),lI=()=>n.jsx(Lt,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),iI=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,_b=()=>n.jsx(w,{code:"onClick",Component:lI,Source:iI,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),cI=Object.freeze(Object.defineProperty({__proto__:null,default:_b},Symbol.toStringTag,{value:"Module"})),dI=()=>n.jsx(Lt,{text:"Click to Delete"}),uI=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,wb=()=>n.jsx(w,{code:"text",Component:dI,Source:uI,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),pI=Object.freeze(Object.defineProperty({__proto__:null,default:wb},Symbol.toStringTag,{value:"Module"})),hI=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Confirm"}),n.jsx(fb,{}),n.jsxs(Re,{tocName:"confirm",children:[n.jsx(te,{title:"Properties"}),n.jsx(wb,{}),n.jsx(vb,{}),n.jsx(Sb,{}),n.jsx(bb,{}),n.jsx(xb,{}),n.jsx(gb,{}),n.jsx(jb,{}),n.jsx(yb,{}),n.jsx(Cb,{}),n.jsx(te,{title:"Event Handlers"}),n.jsx(_b,{})]})]}),mI=Object.freeze(Object.defineProperty({__proto__:null,default:hI},Symbol.toStringTag,{value:"Module"})),dn=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],fI=()=>n.jsx(Mt,{rows:dn,columns:"id name animal role"}),xI=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () =>
  <Datatable
    rows={animals}
    columns="id name animal role"
  />

export default DatatableExample`,Tb=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),n.jsxs("p",{children:["The two mandatory properties are ",n.jsx("code",{children:"rows"})," and ",n.jsx("code",{children:"columns"}),". The ",n.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",n.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",n.jsx("code",{children:"rows"})," array."]}),n.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),n.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),n.jsx(Q,{Component:fI,code:xI})]}),gI=Object.freeze(Object.defineProperty({__proto__:null,default:Tb},Symbol.toStringTag,{value:"Module"})),bI=()=>n.jsx(Mt,{color:"brand",rows:dn,columns:"id name animal role"}),vI=`import React from 'react'
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

export default DatatableExample`,Eb=()=>n.jsx(w,{code:"color",Component:bI,Source:vI,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),jI=Object.freeze(Object.defineProperty({__proto__:null,default:Eb},Symbol.toStringTag,{value:"Module"})),yI=()=>n.jsx(Mt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),SI=`import React from 'react'
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

export default DatatableExample`,CI=()=>n.jsxs(w,{code:"type",Component:yI,Source:SI,undent:4,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),n.jsxs("p",{children:["The default value is ",n.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",n.jsx("code",{children:"number"}),","," ",n.jsx("code",{children:"currency"}),", ",n.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:CI},Symbol.toStringTag,{value:"Module"})),wI=()=>n.jsx(Mt,{rows:dn,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),TI=`import React from 'react'
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

export default DatatableExample`,kb=()=>n.jsx(w,{code:"display",Component:wI,Source:TI,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:kb},Symbol.toStringTag,{value:"Module"})),kI=()=>n.jsx(Mt,{color:"brand",rows:dn,columns:"id name animal role"}),RI=`import React from 'react'
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
`,NI=()=>n.jsx(Mt,{color:"brand",rows:dn,columns:["id","name","animal","role"]}),OI=`import React from 'react'
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
`,DI=()=>n.jsx(Mt,{color:"brand",rows:dn,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),LI=`import React from 'react'
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
`,BI=()=>n.jsx(Mt,{color:"brand",rows:dn,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),$I=`import React from 'react'
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
`,AI=()=>n.jsx(Mt,{color:"brand",rows:dn,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),MI=`import React from 'react'
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
`,Rb=()=>n.jsxs(z,{code:"columns",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"columns"})," property is used to define which properties in the ",n.jsx("code",{children:"rows"})," you want to display."]}),n.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),n.jsx(Q,{Component:kI,code:RI,caption:"columns",expand:!1,undent:2}),n.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),n.jsx(Q,{Component:NI,code:OI,caption:"columns",expand:!1,undent:2}),n.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',n.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),n.jsx(Q,{Component:DI,code:LI,caption:"columns",expand:!1,undent:2}),n.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",n.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",n.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",n.jsx("code",{children:"field"}),", and ",n.jsx("code",{children:"type"})," defaulting to ",n.jsx("code",{children:"string"}),"."]}),n.jsxs("p",{children:["You can define different values for ",n.jsx("code",{children:"label"})," and",n.jsx("code",{children:"type"})," (along with other properties"," ",n.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),n.jsxs("p",{children:["In this example we set the ",n.jsx("code",{children:"type"})," of the first column to be ",n.jsx("code",{children:"number"}),".  If you click on the"," ",n.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",n.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),n.jsx(Q,{Component:BI,code:$I,caption:"columns",expand:!1,undent:2}),n.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",n.jsx("code",{children:"label"})," and ",n.jsx("code",{children:"type"}),"."]}),n.jsx(Q,{Component:AI,code:MI,caption:"columns",expand:!1,undent:2}),n.jsxs("p",{children:["See the ",n.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",n.jsx("code",{children:"columns"}),"."]})]}),PI=Object.freeze(Object.defineProperty({__proto__:null,default:Rb},Symbol.toStringTag,{value:"Module"})),II=()=>n.jsx(Mt,{rows:dn,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),zI=`import React from 'react'
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

export default DatatableExample`,Nb=()=>n.jsx(w,{code:"label",Component:II,Source:zI,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),FI=Object.freeze(Object.defineProperty({__proto__:null,default:Nb},Symbol.toStringTag,{value:"Module"})),HI=()=>n.jsx(Mt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),UI=`import React from 'react'
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

export default DatatableExample`,Ob=()=>n.jsxs(w,{code:"type",Component:HI,Source:UI,undent:4,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),n.jsxs("p",{children:["The default value is ",n.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",n.jsx("code",{children:"number"}),","," ",n.jsx("code",{children:"currency"}),", ",n.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),VI=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),WI=()=>n.jsx(Mt,{rows:dn,columns:"id name animal role",onRowClick:e=>window.alert(`Animal #${e.id}: ${e.name}`)}),KI=`import React from 'react'
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

export default DatatableExample`,Db=()=>n.jsx(w,{code:"onRowClick",Component:WI,Source:KI,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onRowClick"})," property can be used to define a handler which will be called when the user clicks on a row.  When set the table will have the ",n.jsx("code",{children:"selectable"})," CSS class added to highlight the hovered row."]})}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:Db},Symbol.toStringTag,{value:"Module"})),YI=()=>n.jsx(Mt,{rows:dn,columns:"id name animal role",pager:{size:"small",color:"blue"}}),ZI=`import React from 'react'
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

export default DatatableExample`,Lb=()=>n.jsx(w,{code:"pager",Component:YI,Source:ZI,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",n.jsx(wn,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),qI=Object.freeze(Object.defineProperty({__proto__:null,default:Lb},Symbol.toStringTag,{value:"Module"})),QI=`export const animals = [
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
`,Bb=()=>n.jsxs(z,{code:"rows",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),n.jsxs("p",{children:["In these examples we're using this data for the ",n.jsx("code",{children:"rows"}),"."]}),n.jsx("div",{className:"example",children:n.jsx("div",{className:"source",children:n.jsx(qn,{code:QI,language:"js"})})})]}),XI=Object.freeze(Object.defineProperty({__proto__:null,default:Bb},Symbol.toStringTag,{value:"Module"})),JI=()=>n.jsx(Mt,{rows:dn,columns:"id name animal role",storageKey:"badger-datatable-animals-demo1"}),ez=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,$b=()=>n.jsxs(w,{code:"storageKey",Component:JI,Source:ez,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"storageKey"})," property can be used to provide a key to store the data table state in local storage.  This allows the page number, page size, visible columns, column order, sort column and sort direction to be preserved across visits to the page."]}),n.jsx("p",{children:"Try changing some of those setting in the example below.  Then reload the browser page.  You should see the setting preserved."})]}),tz=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),nz=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Datatable"}),n.jsx(Tb,{}),n.jsxs(Re,{tocName:"datatable",children:[n.jsx(te,{title:"Properties"}),n.jsx(Bb,{}),n.jsx(Rb,{}),n.jsx(Db,{}),n.jsx(Eb,{}),n.jsx(Lb,{}),n.jsx($b,{}),n.jsx(te,{title:"Column Properties"}),n.jsx(Ob,{}),n.jsx(kb,{}),n.jsx(Nb,{})]})]}),oz=Object.freeze(Object.defineProperty({__proto__:null,default:nz},Symbol.toStringTag,{value:"Module"})),rz=()=>n.jsx(tt,{summary:"Click to reveal",children:"This is the content that is revealed."}),sz=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,Ab=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",n.jsx("code",{children:"details"})," element."]}),n.jsx(Q,{Component:rz,code:sz})]}),az=Object.freeze(Object.defineProperty({__proto__:null,default:Ab},Symbol.toStringTag,{value:"Module"})),lz=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(tt,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),iz=`import React from 'react'
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

export default DetailsExample`,Mb=()=>n.jsx(w,{code:"border",Component:lz,Source:iz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",n.jsx("code",{children:"lined"})," ","property is used."]})}),cz=Object.freeze(Object.defineProperty({__proto__:null,default:Mb},Symbol.toStringTag,{value:"Module"})),dz=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(tt,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),uz=`import React from 'react'
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

export default DetailsExample`,Pb=()=>n.jsx(w,{code:"color",Component:dz,Source:uz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",n.jsx("code",{children:"border"}),","," ",n.jsx("code",{children:"lined"})," and ",n.jsx("code",{children:"shaded"})," properties."]})}),pz=Object.freeze(Object.defineProperty({__proto__:null,default:Pb},Symbol.toStringTag,{value:"Module"})),hz=()=>n.jsx("div",{className:"grid-1 gap-4",children:n.jsx(tt,{summary:"This is the summary",content:"This is the content that is revealed."})}),mz=`import React from 'react'
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

export default DetailsExample`,Ib=()=>n.jsx(w,{code:"content",Component:hz,Source:mz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),fz=Object.freeze(Object.defineProperty({__proto__:null,default:Ib},Symbol.toStringTag,{value:"Module"})),xz=()=>n.jsx(tt,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),gz=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,zb=()=>n.jsx(w,{code:"lined",Component:xz,Source:gz,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),bz=Object.freeze(Object.defineProperty({__proto__:null,default:zb},Symbol.toStringTag,{value:"Module"})),vz=()=>n.jsx("div",{className:"grid-1 gap-4",children:n.jsx(tt,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),jz=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,Fb=()=>n.jsx(w,{code:"open",Component:vz,Source:jz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),yz=Object.freeze(Object.defineProperty({__proto__:null,default:Fb},Symbol.toStringTag,{value:"Module"})),Sz=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(tt,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),Cz=`import React from 'react'
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

export default DetailsExample`,Hb=()=>n.jsx(w,{code:"radius",Component:Sz,Source:Cz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),_z=Object.freeze(Object.defineProperty({__proto__:null,default:Hb},Symbol.toStringTag,{value:"Module"})),wz=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(tt,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),Tz=`import React from 'react'
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

export default DetailsExample`,Ub=()=>n.jsx(w,{code:"shaded",Component:wz,Source:Tz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),Ez=Object.freeze(Object.defineProperty({__proto__:null,default:Ub},Symbol.toStringTag,{value:"Module"})),kz=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(tt,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),n.jsx(tt,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),Rz=`import React from 'react'
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

export default DetailsExample`,Vb=()=>n.jsx(w,{code:"shadow",Component:kz,Source:Rz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),Nz=Object.freeze(Object.defineProperty({__proto__:null,default:Vb},Symbol.toStringTag,{value:"Module"})),Oz=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(tt,{summary:"This is the summary",children:"This is the content that is revealed."}),n.jsx(tt,{border:!0,lined:!0,summary:n.jsxs("div",{className:"wide flex space middle pad-r-2",children:[n.jsx("div",{children:"Control Panel"}),n.jsx(re,{name:"cog"})]}),children:"This is the content that is revealed."})]}),Dz=`import React from 'react'
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

export default DetailsExample`,Wb=()=>n.jsx(w,{code:"summary",Component:Oz,Source:Dz,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),Lz=Object.freeze(Object.defineProperty({__proto__:null,default:Wb},Symbol.toStringTag,{value:"Module"})),Bz=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Details"}),n.jsx(Ab,{}),n.jsxs(Re,{tocName:"details",children:[n.jsx(te,{title:"Properties"}),n.jsx(Wb,{}),n.jsx(Ib,{}),n.jsx(Fb,{}),n.jsx(zb,{}),n.jsx(Mb,{}),n.jsx(Hb,{}),n.jsx(Ub,{}),n.jsx(Vb,{}),n.jsx(Pb,{}),n.jsx(te,{title:"CSS Classes"}),n.jsxs(z,{code:"className",children:["Set a CSS class for the ",n.jsx("code",{children:"details"})," container element."]}),n.jsxs(z,{code:"summaryClass",children:["Set a CSS class for the ",n.jsx("code",{children:"summary"})," element."]}),n.jsxs(z,{code:"contentClass",children:["Set a CSS class for the content ",n.jsx("code",{children:"div"})," element."]}),n.jsx(te,{title:"Components"}),n.jsx(z,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),n.jsx(z,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),$z=Object.freeze(Object.defineProperty({__proto__:null,default:Bz},Symbol.toStringTag,{value:"Module"})),Az=()=>n.jsx(Zo,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),Mz=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,Kb=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",n.jsx(wn,{to:"/components/dropdown",children:"Dropdown"})," component."]}),n.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",n.jsx("code",{children:"TAB"})," ","to the trigger and then press ",n.jsx("code",{children:"SPACE"}),", ",n.jsx("code",{children:"ENTER"}),","," ",n.jsx("code",{children:"DOWN"})," or ",n.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",n.jsx("code",{children:"DOWN"})," and ",n.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",n.jsx("code",{children:"ENTER"})," or"," ",n.jsx("code",{children:"SPACE"})," will select the current item and ",n.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),n.jsx(Q,{Component:Az,code:Mz})]}),Pz=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Iz=()=>n.jsx(Zo,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),zz=`import React from 'react'
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

export default DropdownMenuExample`,Gb=()=>n.jsx(w,{code:"onSelect",Component:Iz,Source:zz,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),Fz=Object.freeze(Object.defineProperty({__proto__:null,default:Gb},Symbol.toStringTag,{value:"Module"})),Hz=()=>n.jsx(Zo,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),Uz=`import React from 'react'
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

export default DropdownExample`,Vz=()=>n.jsx(Zo,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),Wz=`import React from 'react'
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

export default DropdownExample`,Kz=()=>n.jsx(Zo,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:n.jsxs("div",{className:"flex space small",children:[n.jsx("div",{children:"Foo"}),n.jsx("div",{children:"Bar"})]})}]}),Gz=`import React from 'react'
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

export default DropdownExample`,Yz=()=>n.jsx(Zo,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),Zz=`import React from 'react'
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

export default DropdownExample`,qz=()=>n.jsx(Zo,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),Qz=`import React from 'react'
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

export default DropdownExample`,Yb=()=>n.jsxs(z,{code:"options",children:[n.jsxs("div",{className:"mar-b-4",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),n.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),n.jsx(Q,{Component:Hz,code:Uz,caption:"options",expand:!1,undent:2}),n.jsxs("p",{children:["An element in the ",n.jsx("code",{children:"options"})," array can also be an object. It should contain a ",n.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",n.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),n.jsxs("p",{children:["The content for an element is rendered using the ",n.jsx("code",{children:"WithIcon"})," ","component from"," ",n.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",n.jsx("code",{children:"iconLeft"})," and ",n.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",n.jsx("code",{children:"iconLeftClass"})," and"," ",n.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),n.jsx(Q,{Component:Kz,code:Gz,caption:"options",expand:!1,undent:2}),n.jsxs("p",{children:["An object in the ",n.jsx("code",{children:"options"})," array can have a"," ",n.jsx("code",{children:"disabled"})," property set to ",n.jsx("code",{children:"true"})," to disable the option."]}),n.jsx(Q,{Component:qz,code:Qz,caption:"options",expand:!1,undent:2}),n.jsxs("p",{children:["An object in the ",n.jsx("code",{children:"options"})," array can have a"," ",n.jsx("code",{children:"separator"})," property set to ",n.jsx("code",{children:"true"})," to create a separator."]}),n.jsx(Q,{Component:Vz,code:Wz,caption:"options",expand:!1,undent:2}),n.jsxs("p",{children:["An object in the ",n.jsx("code",{children:"options"})," array can have a"," ",n.jsx("code",{children:"heading"})," property to create a section heading."]}),n.jsx(Q,{Component:Yz,code:Zz,caption:"options",expand:!1,undent:2})]}),Xz=Object.freeze(Object.defineProperty({__proto__:null,default:Yb},Symbol.toStringTag,{value:"Module"})),Cr=({children:e,align:t="top"})=>n.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),Jz=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Dropdown Menu"}),n.jsx(Kb,{}),n.jsxs(Re,{tocName:"dropdown-menu",children:[n.jsx(te,{title:"Properties"}),n.jsxs("p",{className:"large",children:["All the properties supported by the"," ",n.jsx(wn,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",n.jsx("code",{children:"DropdownMenu"}),"."]}),n.jsx(Yb,{}),n.jsx(Gb,{}),n.jsxs(Cr,{children:[n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"CSS Classes"}),n.jsxs(z,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",n.jsx("code",{children:"item no-hover"}),".  The"," ",n.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",n.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),n.jsxs(z,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",n.jsx("code",{children:"separator"}),"."]})]}),n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"Components"}),n.jsxs(z,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",n.jsx("code",{children:"DropdownMenuOptions"}),"."]}),n.jsxs(z,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",n.jsx("code",{children:"DropdownMenuOption"}),"."]}),n.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",n.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),eF=Object.freeze(Object.defineProperty({__proto__:null,default:Jz},Symbol.toStringTag,{value:"Module"})),tF=()=>n.jsx(En,{text:"Dropdown",children:"Hello World!"}),nF=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,Zb=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),n.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),n.jsx(Q,{Component:tF,code:nF})]}),oF=Object.freeze(Object.defineProperty({__proto__:null,default:Zb},Symbol.toStringTag,{value:"Module"})),rF=()=>n.jsx(En,{text:"Dropdown Content",content:"Hello World!"}),sF=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,qb=()=>n.jsx(w,{code:"content",Component:rF,Source:sF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",n.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),aF=Object.freeze(Object.defineProperty({__proto__:null,default:qb},Symbol.toStringTag,{value:"Module"})),lF=()=>n.jsx(En,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),iF=`import React from 'react'
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

export default DropdownExample`,Qb=()=>n.jsx(w,{code:"iconLeft",Component:lF,Source:iF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",n.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),cF=Object.freeze(Object.defineProperty({__proto__:null,default:Qb},Symbol.toStringTag,{value:"Module"})),dF=()=>n.jsx(En,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),uF=`import React from 'react'
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

export default DropdownMenuExample`,Xb=()=>n.jsx(w,{code:"iconLeftRotate",Component:dF,Source:uF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),pF=Object.freeze(Object.defineProperty({__proto__:null,default:Xb},Symbol.toStringTag,{value:"Module"})),hF=()=>n.jsx(En,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),mF=`import React from 'react'
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

export default DropdownExample`,Jb=()=>n.jsx(w,{code:"iconRight",Component:hF,Source:mF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",n.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),fF=Object.freeze(Object.defineProperty({__proto__:null,default:Jb},Symbol.toStringTag,{value:"Module"})),xF=()=>n.jsx(En,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),gF=`import React from 'react'
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

export default DropdownExample`,ev=()=>n.jsx(w,{code:"iconRightRotate",Component:xF,Source:gF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),bF=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),vF=()=>n.jsx(En,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),jF=`import React from 'react'
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

export default DropdownExample`,tv=()=>n.jsx(w,{code:"openOnHover",Component:vF,Source:jF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),yF=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),SF=()=>n.jsx(En,{right:!0,text:"Dropdown Right",content:"Hello World!"}),CF=`import React from 'react'
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

export default DropdownExample`,nv=()=>n.jsx(w,{code:"right",Component:SF,Source:CF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),_F=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),wF=()=>n.jsx(En,{text:"Dropdown Trigger Text",children:"Hello World!"}),TF=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,ov=()=>n.jsx(w,{code:"text",Component:wF,Source:TF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),EF=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),kF=()=>n.jsx(En,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),RF=`import React from 'react'
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

export default DropdownExample`,rv=()=>n.jsx(w,{code:"wide",Component:kF,Source:RF,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),NF=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),OF=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Dropdown"}),n.jsx(Zb,{}),n.jsxs(Re,{tocName:"dropdown",children:[n.jsx(te,{title:"Properties"}),n.jsx(ov,{}),n.jsx(qb,{}),n.jsx(tv,{}),n.jsx(nv,{}),n.jsx(rv,{}),n.jsx(Qb,{}),n.jsx(Xb,{}),n.jsx(Jb,{}),n.jsx(ev,{}),n.jsxs(Cr,{children:[n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"CSS Classes"}),n.jsxs(z,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",n.jsx("code",{children:"dropdown"}),"."]}),n.jsxs(z,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",n.jsx("code",{children:"open"}),"."]}),n.jsxs(z,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",n.jsx("code",{children:"closed"}),"."]}),n.jsxs(z,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",n.jsx("code",{children:"trigger"}),"."]}),n.jsxs(z,{code:"menuClass",children:[n.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",n.jsx("code",{children:"menu border bdr-1"}),".  The"," ",n.jsx("code",{children:"border"})," utility class adds a border and"," ",n.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"Components"}),n.jsxs(z,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",n.jsx("code",{children:"DropdownTrigger"}),"."]}),n.jsxs(z,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",n.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),DF=Object.freeze(Object.defineProperty({__proto__:null,default:OF},Symbol.toStringTag,{value:"Module"})),LF=()=>Un(2e3).then(()=>({ok:"All is good"})),BF=()=>n.jsxs(kn,{className:"relative",onSubmit:LF,children:[n.jsx(Je,{name:"name",label:"Your name",required:!0}),n.jsx(rD,{space:!0,size:"smaller",cancel:{iconLeft:"arrow-left",color:"grey outline"},submit:{iconRight:"check",color:"green"}})]}),$F=`/* eslint-disable quotes */
import { Form, Field, CancelSubmit } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/badger-react-ui

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
    <CancelSubmit
      space
      size="smaller"
      cancel={{
        iconLeft: 'arrow-left',
        color: 'grey outline'
      }}
      submit={{
        iconRight: 'check',
        color: 'green'
      }}
    />
  </Form>

export default FormExample`,sv=()=>n.jsxs(z,{code:"CancelSubmit",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"CancelSubmit"})," component is a wrapper around the equivalent component from Badger Form.  It allows you to define icons for buttons."]}),n.jsx(Q,{Component:BF,code:$F})]}),AF=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),MF=()=>Un(2e3).then(()=>({ok:"All is good"})),PF=()=>n.jsxs(kn,{className:"relative",onSubmit:MF,children:[n.jsx(Je,{name:"name",label:"Your name",required:!0}),n.jsx(w0,{space:!0,size:"smaller",cancel:{iconRight:"undo",color:"grey outline"},submit:{iconRight:"check",color:"green"}})]}),IF=`/* eslint-disable quotes */
import { Form, Field, ResetSubmit } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-react-ui

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
    <ResetSubmit
      space
      size="smaller"
      cancel={{
        iconRight: 'undo',
        color: 'grey outline'
      }}
      submit={{
        iconRight: 'check',
        color: 'green'
      }}
    />
  </Form>

export default FormExample`,av=()=>n.jsxs(z,{code:"ResetSubmit",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"ResetSubmit"})," component is a another wrapper around the equivalent component from Badger Form.  It also allows you to define icons for buttons."]}),n.jsx(Q,{Component:PF,code:IF})]}),zF=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),FF=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],HF=e=>FF.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),UF=()=>n.jsxs(kn,{children:[n.jsx(Je,{name:"animal",type:"search",label:"Animal",onSearch:HF}),n.jsx(Hs,{})]}),VF=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,WF=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],Xx=e=>WF.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),KF=e=>e.id,GF=()=>n.jsxs(kn,{children:[n.jsx(Je,{name:"animal1",type:"search",label:"Animal",onSearch:Xx}),n.jsx(Je,{name:"animal2",type:"search",label:"Animal",onSearch:Xx,selectValue:KF}),n.jsx(Hs,{})]}),YF=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,lv=()=>n.jsxs(z,{code:"search",children:[n.jsxs("p",{children:["The field ",n.jsx("code",{children:"type"})," property can be set to ",n.jsx("code",{children:"search"})," ","to use the ",n.jsx(wn,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",n.jsx("code",{children:"onSearch"})," handler defined below."]}),n.jsx(Q,{Component:UF,code:VF}),n.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",n.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",n.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),n.jsx(Q,{Component:GF,code:YF})]}),ZF=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),qF=()=>Un(2e3).then(()=>({ok:"All is good"})),iv=()=>n.jsxs(kn,{className:"relative",onSubmit:qF,children:[n.jsx(Je,{name:"name",label:"Your name",required:!0}),n.jsx(Je,{name:"comment",label:"Comment",type:"textarea",required:!0}),n.jsx(Rl,{text:"Submit",color:"green",iconRight:"arrow-right"}),n.jsx(am,{size:"small",spinnerSize:"x3",text:"Posting...",icon:"envelope",color:"green",strokeStop:50,animation:"beat"})]}),QF=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),XF=()=>Un(2e3).then(()=>({ok:"All is good"})),cv=()=>n.jsxs(kn,{className:"relative",onSubmit:XF,children:[n.jsx(Je,{name:"name",label:"Your name",required:!0}),n.jsx(Je,{name:"comment",label:"Comment",type:"textarea",required:!0}),n.jsx(Rl,{text:"Submit",color:"green",iconRight:"arrow-right"}),n.jsx(am,{})]}),JF=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),eH=`/* eslint-disable quotes */
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

export default FormExample`,tH=`/* eslint-disable quotes */
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

export default FormExample`,dv=()=>n.jsxs(z,{code:"Submitting",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Submitting"})," component can be used to add an overlay with a ",n.jsx(wn,{to:"/components/spinner",text:"Spinner"})," and message when the form is submitting."]}),n.jsx(Q,{Component:cv,code:eH}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the overall size. The ",n.jsx("code",{children:"spinnerSize"})," can be used to set the size of the spinner icon. The ",n.jsx("code",{children:"text"})," property can be used to change the text displayed. All other properties are forwarded to the"," ",n.jsx(wn,{to:"/components/spinner",text:"Spinner"})," component."]}),n.jsx(Q,{Component:iv,code:tH})]}),nH=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),oH=()=>n.jsxs(kn,{children:[n.jsx(Je,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),n.jsx(Hs,{})]}),rH=`import React from 'react'
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

export default UISelectExample`,sH=()=>n.jsxs(kn,{children:[n.jsx(Je,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),n.jsx(Hs,{})]}),aH=`import React from 'react'
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

export default UISelectExample`,lH=()=>n.jsxs(kn,{children:[n.jsx(Je,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),n.jsx(Hs,{})]}),iH=`import React from 'react'
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

export default UISelectExample`,uv=()=>n.jsxs(z,{code:"uiselect",children:[n.jsxs("p",{children:["The field ",n.jsx("code",{children:"type"})," property can be set to ",n.jsx("code",{children:"uiselect"})," ","to use the ",n.jsx(wn,{to:"/components/select",text:"Select"})," component."]}),n.jsx(Q,{Component:oH,code:rH}),n.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",n.jsx("code",{children:"search"})," property is set here to enable searching."]}),n.jsx(Q,{Component:sH,code:aH}),n.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",n.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),n.jsx(Q,{Component:lH,code:iH})]}),cH=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),dH=["Guitar","Bass","Drums","Keyboards","Mandolin"],uH=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],pH=e=>uH.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),hH=()=>Un(2e3).then(()=>({ok:"All is good"})),mH=()=>n.jsxs(kn,{className:"relative",onSubmit:hH,resetOnSuccess:!0,children:[n.jsx(Je,{name:"email",label:"Email address",required:!0}),n.jsx(Je,{name:"password",label:"Password",type:"password",required:!0}),n.jsx(Je,{name:"instrument",type:"uiselect",label:"Instrument",options:dH}),n.jsx(Je,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:pH}),n.jsx(Je,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),n.jsx(w0,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),n.jsx(am,{}),e=>n.jsx(L,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),n.jsx(Hs,{})]}),fH=`/* eslint-disable quotes */
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

export default FormExample`,xH=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Form"}),n.jsxs("p",{className:"large wide",children:["The library includes"," ",n.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),n.jsx(Q,{Component:mH,code:fH,caption:"Form"}),n.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",n.jsx(wn,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",n.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),n.jsxs(Re,{tocName:"form",children:[n.jsx(te,{title:"Input Components"}),n.jsx(uv,{}),n.jsx(lv,{}),n.jsx(te,{title:"Additional Components"}),n.jsx(dv,{}),n.jsx(sv,{}),n.jsx(av,{})]})]}),gH=Object.freeze(Object.defineProperty({__proto__:null,default:xH},Symbol.toStringTag,{value:"Module"})),bH=()=>n.jsx(re,{name:"check"}),vH=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,jH=y_(0,100,5),gi=({name:e,stop:t,setStop:o,disabled:r=!1})=>n.jsxs("select",{name:e,required:!0,value:t,onChange:s=>o(s.target.value),disabled:r,children:[n.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),n.jsx("option",{value:"",children:"None"}),jH.map(s=>n.jsx("option",{value:s,children:s},s))]}),yH=()=>{const[e,t]=b.useState(0),[o,r]=b.useState({name:"bars"}),s=c=>()=>{r(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{r(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${CH(o)}
/>`;return n.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Output"}),n.jsx("div",{className:"output mar-b-8",children:n.jsx(_H,{options:o},e)})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Markup"}),n.jsx(qn,{code:i,language:"html",expand:!0})]})]}),n.jsx(SH,{options:o,setOption:a,toggleOption:s})]})},SH=({options:e,setOption:t})=>{const o=t("name"),r=t("size"),s=t("color"),a=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return n.jsxs("div",{children:[n.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Icon Name"}),n.jsx(up,{icon:e.name,setIcon:o})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Size"}),n.jsx(O0,{size:e.size,setSize:r})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Color"}),n.jsx(N0,{color:e.color,setColor:s,disabled:e.type})]})]}),n.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Foreground Stop"}),n.jsx(gi,{stop:e.foreground,setStop:a})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Background Stop"}),n.jsx(gi,{stop:e.background,setStop:l})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Foreground Dark"}),n.jsx(gi,{stop:e.foregroundDark,setStop:i})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Background Dark"}),n.jsx(gi,{stop:e.backgroundDark,setStop:c})]})]})]})},pv=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,s)=>(r[s]=e[s],r),{}),o=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return o.length>4&&(t.color=o.replace(/-*$/,"")),t},CH=e=>{const t=pv(e);return Object.entries(t).map(([o,r])=>`${o}="${r}"`).join(`
  `)},_H=({options:e})=>n.jsx(re,{...pv(e)}),hv=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",n.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),n.jsx(Q,{Component:bH,code:vH,expand:!0}),n.jsx("h2",{children:"Demo"}),n.jsx(yH,{})]}),wH=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),mv=()=>n.jsxs(z,{code:"IconLibrary",children:[n.jsxs("p",{children:["The default set of icons is defined as ",n.jsx("code",{children:"IconLibrary"}),". The ",n.jsx("code",{children:"addIcon()"})," and ",n.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),n.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(fl.icons).map(e=>n.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[n.jsx(re,{name:e,className:"x3"}),n.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),TH=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),EH=()=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex gap-2 middle",children:[n.jsx(re,{name:"check",className:"smallest"}),n.jsx(re,{name:"check",className:"smaller"}),n.jsx(re,{name:"check",className:"small"}),n.jsx(re,{name:"check"}),n.jsx(re,{name:"check",className:"large"}),n.jsx(re,{name:"check",className:"larger"}),n.jsx(re,{name:"check",className:"largest"})]}),n.jsxs("div",{className:"flex gap-2 mar-t-4",children:[n.jsx(re,{name:"check",className:"larger green fgc-50"}),n.jsx(re,{name:"cross",className:"larger red fgc-50"})]})]}),kH=`import React from 'react'
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

export default Component`,fv=()=>n.jsx(w,{code:"className",Component:EH,Source:kH,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),RH=Object.freeze(Object.defineProperty({__proto__:null,default:fv},Symbol.toStringTag,{value:"Module"})),NH=()=>n.jsxs("div",{className:"flex gap-2 x2",children:[n.jsx(re,{name:"check",color:"green-50"}),n.jsx(re,{name:"check",color:"green-70-30"}),n.jsx(re,{name:"check",color:"green-70--30"}),n.jsx(re,{name:"check",color:"green-70-30-30-70"})]}),OH=`import React from 'react'
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

export default Component`,xv=()=>n.jsxs(w,{code:"color",Component:NH,Source:OH,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",n.jsx("code",{children:"red"}),","," ",n.jsx("code",{children:"green"}),", ",n.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),DH=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),LH=()=>n.jsxs("div",{className:"flex gap-2 x2",children:[n.jsx(re,{name:"bars"}),n.jsx(re,{name:"check"}),n.jsx(re,{name:"cross"}),n.jsx(re,{name:"arrow"}),n.jsx(re,{name:"arrow-right"}),n.jsx(re,{name:"arrow-down-thicker.red.fgc-50"})]}),BH=`import React from 'react'
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

export default Component`,gv=()=>n.jsxs(w,{code:"name",Component:LH,Source:BH,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),n.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),$H=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),AH=()=>n.jsxs("div",{className:"flex gap-2",children:[n.jsx(re,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),n.jsx(re,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),MH=`import React from 'react'
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

export default Component`,bv=()=>n.jsx(w,{code:"path",Component:AH,Source:MH,undent:2,expand:!0,children:n.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",n.jsx("code",{children:"width"})," and"," ",n.jsx("code",{children:"height"})," properties to change that."]})}),PH=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),IH=()=>n.jsxs("div",{className:"flex gap-2",children:[n.jsx(re,{name:"check",size:"smallest"}),n.jsx(re,{name:"check",size:"smaller"}),n.jsx(re,{name:"check",size:"small"}),n.jsx(re,{name:"check",size:"medium"}),n.jsx(re,{name:"check",size:"large"}),n.jsx(re,{name:"check",size:"larger"}),n.jsx(re,{name:"check",size:"largest"})]}),zH=`import React from 'react'
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

export default Component`,vv=()=>n.jsx(w,{code:"size",Component:IH,Source:zH,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),FH=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),HH=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Icon"}),n.jsx(hv,{}),n.jsxs(Re,{tocName:"icon",children:[n.jsx(te,{title:"Properties"}),n.jsx(gv,{}),n.jsx(fv,{}),n.jsx(vv,{}),n.jsx(xv,{}),n.jsx(bv,{}),n.jsx(te,{title:"Components"}),n.jsx(mv,{})]})]}),UH=Object.freeze(Object.defineProperty({__proto__:null,default:HH},Symbol.toStringTag,{value:"Module"})),VH=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(Tn,{open:e,className:"max-width-30rem",children:[n.jsx("header",{children:n.jsx("h3",{children:"A Modal!"})}),n.jsxs("p",{children:["This is a modal.  The content is rendered as an ",n.jsx("code",{children:"article"}),".  You can include"," ",n.jsx("code",{children:"header"})," and ",n.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),n.jsx("footer",{children:n.jsx(L,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},WH=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,jv=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),n.jsx(Q,{Component:VH,code:WH,expand:!0})]}),KH=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),GH=()=>{const{show:e,hide:t,Modal:o}=sD();return n.jsxs(n.Fragment,{children:[n.jsxs(o,{children:[n.jsx("p",{children:"Modal State"}),n.jsx(L,{color:"red",text:"Close Modal",onClick:t})]}),n.jsx(L,{color:"green",text:"Open Modal",onClick:e})]})},YH=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,yv=()=>n.jsx(w,{code:"ModalState",Component:GH,Source:YH,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",n.jsx("code",{children:"isVisible"})," property,"," ",n.jsx("code",{children:"show"})," and ",n.jsx("code",{children:"hide"})," functions to change the visibility, and a ",n.jsx("code",{children:"Modal"})," component."]})}),ZH=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),qH=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(Tn,{open:e,className:"large max-width-25rem pad-8",children:[n.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),n.jsx(L,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},QH=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Sv=()=>n.jsx(w,{code:"className",Component:qH,Source:QH,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",n.jsx("code",{children:"dialog"})," element."]})}),XH=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),JH=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Tn,{open:e,close:()=>t(!1),children:n.jsx("p",{children:"This is a modal with a close button."})}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},eU=`import React, { useState } from 'react'
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

export default ModalExample`,Cv=()=>n.jsx(w,{code:"close",Component:JH,Source:eU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),tU=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),nU=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Tn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:n.jsx("p",{children:"This is a modal with a custom close icon."})}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},oU=`import React, { useState } from 'react'
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

export default ModalExample`,_v=()=>n.jsx(w,{code:"closeIcon",Component:nU,Source:oU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),rU=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),sU=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Tn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:n.jsx("div",{className:"text-right",children:n.jsx(L,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},aU=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,wv=()=>n.jsx(w,{code:"footer",Component:sU,Source:aU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),lU=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),iU=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Tn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"Custom Header"}),n.jsx("p",{children:"Hello World!"})]})}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},cU=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Tv=()=>n.jsx(w,{code:"header",Component:iU,Source:cU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),dU=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),uU=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Tn,{open:e,close:()=>t(!1),text:"This is a modal"}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},pU=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,Ev=()=>n.jsx(w,{code:"text",Component:uU,Source:pU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"text"})," property can be used to define the body text."]})}),hU=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),mU=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Tn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},fU=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,kv=()=>n.jsx(w,{code:"title",Component:mU,Source:fU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can be used to add a title."]})}),xU=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),gU=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Modal"}),n.jsx(jv,{}),n.jsxs(Re,{tocName:"modal",children:[n.jsx(te,{title:"Properties"}),n.jsx(Sv,{}),n.jsx(Cv,{}),n.jsx(_v,{}),n.jsx(Ev,{}),n.jsx(kv,{}),n.jsx(Tv,{}),n.jsx(wv,{}),n.jsx(te,{title:"Components"}),n.jsx(yv,{})]})]}),bU=Object.freeze(Object.defineProperty({__proto__:null,default:gU},Symbol.toStringTag,{value:"Module"})),vU=()=>{const{isVisible:e,show:t,hide:o}=Go();return n.jsxs("div",{className:"relative pad-6 border",children:[e&&n.jsx(Br,{className:"flex middle center pad-8",children:n.jsxs("div",{children:[n.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),n.jsx(L,{onClick:o,className:"red",text:"Hide Overlay"})]})}),n.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),n.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),n.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),n.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),n.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),n.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),n.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),n.jsx(L,{onClick:t,color:"green",text:"Show Overlay"})]})},jU=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,Rv=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),n.jsx(Q,{Component:vU,code:jU})]}),yU=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),SU=()=>{const{show:e,hide:t,Overlay:o}=aD();return n.jsxs(n.Fragment,{children:[n.jsx(o,{fixed:!0,className:"flex center middle",children:n.jsxs("div",{children:[n.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),n.jsx(L,{color:"red",text:"Hide Overlay",onClick:t})]})}),n.jsx(L,{color:"green",text:"Show Overlay",onClick:e})]})},CU=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,Nv=()=>n.jsx(w,{code:"OverlayState",Component:SU,Source:CU,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",n.jsx("code",{children:"isVisible"})," property,"," ",n.jsx("code",{children:"show"})," and ",n.jsx("code",{children:"hide"})," functions to change the visibility, and an ",n.jsx("code",{children:"Overlay"})," component."]})}),_U=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),wU=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(Tn,{open:e,className:"large max-width-25rem pad-8",children:[n.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),n.jsx(L,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),n.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},TU=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,EU=()=>n.jsx(w,{code:"className",Component:wU,Source:TU,undent:6,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",n.jsx("code",{children:"dialog"})," element."]})}),kU=Object.freeze(Object.defineProperty({__proto__:null,default:EU},Symbol.toStringTag,{value:"Module"})),RU=()=>{const{isVisible:e,show:t,hide:o}=Go();return n.jsxs("div",{className:"relative pad-6 border",children:[n.jsx(L,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&n.jsxs(Br,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[n.jsx("p",{className:"larger",children:"Custom red overlay"}),n.jsx(L,{onClick:o,className:"red",text:"Hide Overlay"})]})]})},NU=`import React from 'react'
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

export default ColorExample`,Ov=()=>n.jsx(w,{title:"Custom Colors",Component:RU,Source:NU,undent:8,children:n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"--color"})," and ",n.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",n.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),OU=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),DU=()=>{const{isVisible:e,show:t,hide:o}=Go();return n.jsxs("div",{className:"relative pad-6 border",children:[n.jsx(L,{onClick:t,color:"green",text:"Show Overlay"}),e&&n.jsx(Br,{fixed:!0,className:"flex center middle",children:n.jsxs("div",{className:"max-width-40rem",children:[n.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),n.jsx(L,{onClick:o,className:"red",text:"Hide Overlay"})]})})]})},LU=`import React from 'react'
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

export default OverlayExample`,Dv=()=>n.jsx(w,{code:"fixed",Component:DU,Source:LU,undent:8,children:n.jsxs("p",{children:["Add the ",n.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),BU=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),$U=()=>{const{isVisible:e,show:t,hide:o}=Go();return n.jsxs("div",{className:"relative pad-6 border",children:[n.jsx(L,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&n.jsxs(Br,{light:!0,className:"flex space top pad-6",children:[n.jsx("p",{className:"larger",children:"Light overlay"}),n.jsx(L,{onClick:o,className:"red",text:"Hide Overlay"})]})]})},AU=`import React from 'react'
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

export default ColorExample`,MU=()=>{const{isVisible:e,show:t,hide:o}=Go();return n.jsxs("div",{className:"relative pad-6 border",children:[n.jsx(L,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&n.jsxs(Br,{dark:!0,className:"flex space top pad-6",children:[n.jsx("p",{className:"larger",children:"Dark overlay"}),n.jsx(L,{onClick:o,className:"red",text:"Hide Overlay"})]})]})},PU=`import React from 'react'
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

export default ColorExample`,Lv=()=>n.jsxs(z,{code:"light / dark",children:[n.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",n.jsx("code",{children:"light"})," or ",n.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),n.jsx(Q,{Component:$U,code:AU,caption:"light",undent:8}),n.jsx(Q,{Component:MU,code:PU,caption:"dark",undent:8})]}),IU=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),zU=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Overlay"}),n.jsx(Rv,{}),n.jsxs(Re,{tocName:"overlay",children:[n.jsx(te,{title:"Properties"}),n.jsx(Dv,{}),n.jsx(Lv,{}),n.jsx(te,{title:"Styling"}),n.jsx(Ov,{}),n.jsx(te,{title:"Components"}),n.jsx(Nv,{})]})]}),FU=Object.freeze(Object.defineProperty({__proto__:null,default:zU},Symbol.toStringTag,{value:"Module"})),HU=({page:e,className:t,onClick:o})=>{const{pageRanges:r}=BR(),s=r[e];return n.jsx(L,{text:s,className:t,onClick:o})},UU=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[o,r]=b.useState(0);return n.jsx(nn,{pages:t,page:o,setPage:r,pageRanges:e,Page:HU,size:"small"})},VU=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,Bv=({items:e})=>n.jsx("table",{className:"wide shaded striped celled",children:n.jsx("tbody",{children:e.map(([t,o])=>n.jsx(WU,{name:t,value:o},t))})}),WU=({name:e,value:t})=>n.jsxs("tr",{children:[n.jsx("td",{className:"font-mono",children:e}),n.jsx("td",{children:t})]}),$v=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Context"}),n.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),n.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",n.jsx("code",{children:"page"})," is"," ",n.jsx("code",{children:"0"})," and the highest value is ",n.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',n.jsx("code",{children:"No"})," suffix.  For example, the values for ",n.jsx("code",{children:"pageNo"})," range from ",n.jsx("code",{children:"1"})," to ",n.jsx("code",{children:"pages"}),", and will always be one more than ",n.jsx("code",{children:"page"}),"."]}),n.jsx(Bv,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",n.jsxs(n.Fragment,{children:["The current page number (1 based), effectively one louder than ",n.jsx("code",{children:"page"}),".  e.g. if ",n.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),n.jsx("h2",{children:"Custom Components"}),n.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",n.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",n.jsx("code",{children:"Pager"})," component."]}),n.jsxs("p",{children:["In this example we define a custom ",n.jsx("code",{children:"MyPageButton"})," component to replace the ",n.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",n.jsx("code",{children:"pageRanges"})," "," ","property."]}),n.jsx(Q,{Component:UU,code:VU})]}),KU=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),GU=()=>{const[e,t]=b.useState(0);return n.jsx(nn,{pages:11,page:e,setPage:t})},YU=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,Av=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),n.jsxs("p",{children:["The three mandatory properties are ",n.jsx("code",{children:"pages"})," indicating the total number of pages, ",n.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",n.jsx("code",{children:"pages"})," - 1) and a"," ",n.jsx("code",{children:"setPage"})," handler to set the page index."]}),n.jsx(Q,{Component:GU,code:YU})]}),ZU=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),qU=()=>{const[e,t]=b.useState(0);return n.jsx("div",{className:"grid-1 gap-4",children:n.jsx(nn,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},QU=`import React, { useState } from 'react'
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
`,Mv=()=>n.jsx(w,{code:"className",Component:qU,Source:QU,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",n.jsx("code",{children:"pager"}),"."]})}),XU=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),JU=()=>{const[e,t]=b.useState(0);return n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(nn,{pages:11,page:e,setPage:t,color:"red"}),n.jsx(nn,{pages:11,page:e,setPage:t,color:"green"}),n.jsx(nn,{pages:11,page:e,setPage:t,color:"blue"})]})},eV=`import React, { useState } from 'react'
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
`,Pv=()=>n.jsx(w,{code:"color",Component:JU,Source:eV,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),tV=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),nV=()=>{const[e,t]=b.useState(0);return n.jsx(nn,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},oV=`import React, { useState } from 'react'
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
`,Iv=()=>n.jsx(w,{code:"prevIcon / nextIcon",Component:nV,Source:oV,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"prevIcon"})," and ",n.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),rV=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),sV=()=>{const[e,t]=b.useState(0);return n.jsx(nn,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},aV=`import React, { useState } from 'react'
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
`,lV=()=>n.jsx(w,{code:"nextIcon",Component:sV,Source:aV,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),iV=Object.freeze(Object.defineProperty({__proto__:null,default:lV},Symbol.toStringTag,{value:"Module"})),cV=()=>{const[e,t]=b.useState(0);return n.jsx(nn,{pages:11,page:e,setPage:t,showFirstLast:!1})},dV=`import React, { useState } from 'react'
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
`,zv=()=>n.jsxs(w,{code:"showFirstLast",Component:cV,Source:dV,undent:4,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),n.jsxs("p",{children:["This value defaults to ",n.jsx("code",{children:"true"})," but can be set"," ",n.jsx("code",{children:"false"})," to hide these buttons."]})]}),uV=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),pV=()=>{const[e,t]=b.useState(0);return n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(nn,{pages:11,page:e,setPage:t,size:"smaller"}),n.jsx(nn,{pages:11,page:e,setPage:t,size:"small"})]})},hV=`import React, { useState } from 'react'
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
`,Fv=()=>n.jsx(w,{code:"size",Component:pV,Source:hV,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),mV=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),fV=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Pager"}),n.jsx(Av,{}),n.jsx($v,{}),n.jsxs(Re,{tocName:"pager",children:[n.jsx(te,{title:"Properties"}),n.jsx(Mv,{}),n.jsx(Pv,{}),n.jsx(Fv,{}),n.jsx(Iv,{}),n.jsx(zv,{}),n.jsxs(Cr,{children:[n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"CSS Classes"}),n.jsxs(z,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",n.jsx("code",{children:"pager"}),"."]}),n.jsxs(z,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",n.jsx("code",{children:"outline"}),"."]}),n.jsxs(z,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",n.jsx("code",{children:"buttonClass"}),"."]}),n.jsxs(z,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",n.jsx("code",{children:"buttonClass"}),"."]}),n.jsxs(z,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",n.jsx("code",{children:"pages"}),"."]}),n.jsxs(z,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",n.jsx("code",{children:"buttonClass"}),"."]}),n.jsxs(z,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",n.jsx("code",{children:"solid"}),"."]})]}),n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"Components"}),n.jsxs(z,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",n.jsx("code",{children:"PagerPrevious"}),"."]}),n.jsxs(z,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",n.jsx("code",{children:"PagerNext"}),"."]}),n.jsxs(z,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",n.jsx("code",{children:"PagerPages"}),"."]}),n.jsxs(z,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",n.jsx("code",{children:"PagerPage"}),"."]}),n.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",n.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),xV=Object.freeze(Object.defineProperty({__proto__:null,default:fV},Symbol.toStringTag,{value:"Module"})),gV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},bV=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,Hv=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),n.jsx(Q,{Component:gV,code:bV,expand:!0})]}),vV=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),jV=()=>{const[e,t]=b.useState(!1),[o,r]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Fn,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),n.jsx(Fn,{border:!0,inline:!0,labelClass:"mar-r-2",value:o,onChange:r,options:["David","Nigel","Derek"]})]})},yV=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,Uv=()=>n.jsxs(w,{code:"border",Component:jV,Source:yV,undent:4,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),n.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",n.jsx("code",{children:"labelClass"})," property."]})]}),SV=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),CV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},_V=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,Vv=()=>n.jsx(w,{code:"className",Component:CV,Source:_V,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),wV=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"})),TV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},EV=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,Wv=()=>n.jsx(w,{code:"disabled",Component:TV,Source:EV,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),kV=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),RV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},NV=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,Kv=()=>n.jsx(w,{code:"inline",Component:RV,Source:NV,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),OV=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),DV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},LV=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,Gv=()=>n.jsx(w,{code:"name",Component:DV,Source:LV,undent:4,expand:!0,children:n.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",n.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),BV=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),$V=()=>{const[e,t]=b.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Fn,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&n.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},AV=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,Wt=({id:e,text:t})=>n.jsx("a",{href:`#${cm(e||t)}`,className:"code",children:t}),Yv=()=>n.jsx(w,{code:"onChange",Component:$V,Source:AV,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",n.jsx(Wt,{text:"value"}),"."]})}),MV=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),PV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},IV=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,Zv=()=>n.jsx(w,{code:"options",Component:PV,Source:IV,undent:4,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",n.jsx("code",{children:"value"})," and any of ",n.jsx("code",{children:"text"}),", ",n.jsx("code",{children:"label"})," or"," ",n.jsx("code",{children:"name"})," for the displayed text."]})}),zV=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),FV=()=>{const[e,t]=b.useState(!1);return n.jsx(Fn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},HV=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,qv=()=>n.jsx(w,{code:"value",Component:FV,Source:HV,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",n.jsx(Wt,{text:"onChange"})," to update the value."]})}),UV=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),VV=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Radio"}),n.jsx(Hv,{}),n.jsxs(Re,{tocName:"radio",children:[n.jsx(te,{title:"Properties"}),n.jsx(qv,{}),n.jsx(Yv,{}),n.jsx(Gv,{}),n.jsx(Vv,{}),n.jsx(Kv,{}),n.jsx(Uv,{}),n.jsx(te,{title:"Option Properties"}),n.jsx(Zv,{}),n.jsx(Wv,{})]})]}),WV=Object.freeze(Object.defineProperty({__proto__:null,default:VV},Symbol.toStringTag,{value:"Module"})),KV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],GV=()=>{const e=t=>KV.filter(o=>o.toLowerCase().indexOf(t.toLowerCase())!==-1);return n.jsx(ao,{onSearch:e})},YV=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,Qv=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),n.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),n.jsx(Q,{Component:GV,code:YV})]}),ZV=Object.freeze(Object.defineProperty({__proto__:null,default:Qv},Symbol.toStringTag,{value:"Module"})),qV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],QV=()=>{const[e,t]=H.useState(),o=r=>qV.filter(s=>s.toLowerCase().indexOf(r.toLowerCase())!==-1);return n.jsxs("div",{className:"grid-2 gap-2",children:[n.jsx(ao,{onLoad:t,onSearch:o,value:"Brian Badger"}),n.jsx(L,{onClick:()=>e==null?void 0:e.clear(),text:"Clear"})]})},XV=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,Xv=()=>n.jsx(w,{code:"clear",Component:QV,Source:XV,children:n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onLoad"})," property to save a reference to the search context.  You can call the ",n.jsx("code",{children:"clear"})," method on that to programmatically clear the input.  This has the same effect as clicking on the cross icon to the right of the input."]})}),JV=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),eW=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],tW=()=>{const e=o=>n.jsxs("div",{className:"flex space baseline",children:[n.jsx("div",{children:o.name}),n.jsx("div",{className:"smaller",children:o.tel})]}),t=o=>eW.filter(r=>r.name.toLowerCase().indexOf(o.toLowerCase())!==-1);return n.jsx(ao,{onSearch:t,displayResult:e})},nW=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,Jv=()=>n.jsx(w,{code:"displayResult",Component:tW,Source:nW,children:n.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",n.jsx("code",{children:"text"}),","," ",n.jsx("code",{children:"label"})," or ",n.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",n.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),oW=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),rW=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],sW=()=>{const e=o=>`#${o.id}: ${o.name} (${o.tel})`,t=o=>rW.filter(r=>r.name.toLowerCase().indexOf(o.toLowerCase())!==-1);return n.jsx(ao,{onSearch:t,displayValue:e})},aW=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,ej=()=>n.jsx(w,{code:"displayValue",Component:sW,Source:aW,children:n.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",n.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),lW=Object.freeze(Object.defineProperty({__proto__:null,default:ej},Symbol.toStringTag,{value:"Module"})),iW=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],cW=()=>{const e=async t=>Un(500).then(()=>iW.filter(o=>o.toLowerCase().indexOf(t.toLowerCase())!==-1));return n.jsx(ao,{onSearch:e,debug:!0})},dW=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,tj=()=>n.jsx(w,{code:"onSearch",Component:cW,Source:dW,children:n.jsxs("p",{children:["You should provide an ",n.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),uW=Object.freeze(Object.defineProperty({__proto__:null,default:tj},Symbol.toStringTag,{value:"Module"})),pW=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],hW=()=>{const e=o=>pW.filter(r=>r.toLowerCase().indexOf(o.toLowerCase())!==-1),t=o=>alert(`You selected ${o}`);return n.jsx(ao,{onSearch:e,onSelect:t})},mW=`import { Search } from '@/src/index.jsx'

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

export default OnSelectExample`,nj=()=>n.jsx(w,{code:"onSelect",Component:hW,Source:mW,children:n.jsxs("p",{children:["You can define an ",n.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),fW=Object.freeze(Object.defineProperty({__proto__:null,default:nj},Symbol.toStringTag,{value:"Module"})),xW=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],gW=()=>{const[e,t]=H.useState(),[o,r]=H.useState(),s=a=>xW.filter(l=>l.toLowerCase().indexOf(a.toLowerCase())!==-1);return n.jsxs("div",{className:"grid-2 gap-2",children:[n.jsx(ao,{onLoad:t,onSearch:s}),n.jsx(L,{onClick:()=>e==null?void 0:e.reset(),text:"Reset"}),n.jsx(ao,{onLoad:r,onSearch:s,value:"Ben Badger"}),n.jsx(L,{onClick:()=>o==null?void 0:o.reset(),text:"Reset"})]})},bW=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,oj=()=>n.jsxs(w,{code:"reset",Component:gW,Source:bW,children:[n.jsxs("p",{children:["You can call the ",n.jsx("code",{children:"reset"})," method on the search object to reset the search.  Note that it will be reset to the original state, so if an initial value was provided to the component then that will be restored.  Use the ",n.jsx("code",{children:"clear"})," method if you want to clear the input instead."]}),n.jsx("p",{children:'Try changing the values in the search components below.  Clicking on the first reset button will reset the first component to a blank state. Clicking on the second reset button will reset the second component to its original state, containing the value "Ben Badger".'})]}),vW=Object.freeze(Object.defineProperty({__proto__:null,default:oj},Symbol.toStringTag,{value:"Module"})),jW=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Search"}),n.jsx(Qv,{}),n.jsxs(Re,{tocName:"search",children:[n.jsx(te,{title:"Properties"}),n.jsx(tj,{}),n.jsx(nj,{}),n.jsx(Jv,{}),n.jsx(ej,{}),n.jsx(te,{title:"Functions"}),n.jsx(Xv,{}),n.jsx(oj,{})]})]}),yW=Object.freeze(Object.defineProperty({__proto__:null,default:jW},Symbol.toStringTag,{value:"Module"})),SW=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],CW=()=>n.jsx(cn,{options:SW}),_W=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,rj=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Select"})," component implements a custom select input."]}),n.jsx(Q,{Component:CW,code:_W}),n.jsx("h2",{children:"Context"}),n.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),n.jsxs("p",{children:["Custom components can be wrapped with the ",n.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",n.jsx("code",{children:"useSelect"})," hook to access them."]}),n.jsx(Bv,{items:[["close","Handler to close the menu."],["cursor",n.jsxs(n.Fragment,{children:["The index of the currently selected option in the ",n.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",n.jsxs(n.Fragment,{children:["The selected element in the ",n.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),wW=Object.freeze(Object.defineProperty({__proto__:null,default:rj},Symbol.toStringTag,{value:"Module"})),TW=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],EW=()=>{const e=t=>n.jsxs("div",{className:"flex space baseline",children:[n.jsx("div",{children:t.name}),n.jsx("div",{className:"smaller",children:t.tel})]});return n.jsx(cn,{options:TW,displayOption:e})},kW=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,sj=()=>n.jsx(w,{code:"displayOption",Component:EW,Source:kW,expand:!0,children:n.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",n.jsx("code",{children:"text"}),","," ",n.jsx("code",{children:"label"})," or ",n.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",n.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),RW=Object.freeze(Object.defineProperty({__proto__:null,default:sj},Symbol.toStringTag,{value:"Module"})),NW=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],OW=()=>{const e=t=>n.jsxs("div",{className:"flex baseline",children:[n.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return n.jsx(cn,{options:NW,displayValue:e})},DW=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,aj=()=>n.jsx(w,{code:"displayValue",Component:OW,Source:DW,expand:!0,children:n.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",n.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),LW=Object.freeze(Object.defineProperty({__proto__:null,default:aj},Symbol.toStringTag,{value:"Module"})),BW=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],$W=()=>n.jsx(cn,{options:BW}),AW=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,lj=()=>n.jsxs(w,{code:"options",Component:$W,Source:AW,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),n.jsxs("p",{children:["When the ",n.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",n.jsx("code",{children:"id"})," or ",n.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",n.jsx("code",{children:"text"}),", ",n.jsx("code",{children:"label"})," or ",n.jsx("code",{children:"name"})," property. Alternately, you can define your own ",n.jsx(Wt,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",n.jsx(Wt,{text:"displayValue"})," function to display the selected value."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",n.jsx(Wt,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),MW=Object.freeze(Object.defineProperty({__proto__:null,default:lj},Symbol.toStringTag,{value:"Module"})),PW=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],IW=()=>n.jsx(cn,{search:!0,options:PW}),zW=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,FW=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],HW=()=>n.jsx(cn,{search:!0,options:FW}),UW=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,ij=()=>n.jsxs(z,{code:"search",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",n.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),n.jsxs("p",{children:["Try entering ",n.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",n.jsx("code",{children:"aa"})," ","(e.g all the ",n.jsx("b",{children:"Aa"}),"rdvarks) and ",n.jsx("code",{children:"an"})," (Al",n.jsx("b",{children:"an"})," Aardvark,"," ",n.jsx("b",{children:"An"}),"ne Aardvark and Bri",n.jsx("b",{children:"an"})," Badger)."]}),n.jsx(Q,{Component:IW,code:zW}),n.jsxs("p",{children:["If the ",n.jsx("code",{children:"options"})," are an array of objects then it will look for a ",n.jsx("code",{children:"search"}),", ",n.jsx("code",{children:"text"}),", ",n.jsx("code",{children:"label"}),","," ",n.jsx("code",{children:"name"})," or ",n.jsx("code",{children:"value"})," property in each object and use that."]}),n.jsx(Q,{Component:HW,code:UW})]}),VW=Object.freeze(Object.defineProperty({__proto__:null,default:ij},Symbol.toStringTag,{value:"Module"})),WW=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],KW=(e,t)=>{const o=e.toLowerCase();return t.filter(r=>r.name.toLowerCase().indexOf(o)>=0||r.department.toLowerCase().indexOf(o)>=0)},GW=e=>n.jsxs("div",{className:"flex space baseline",children:[n.jsx("div",{children:e.name}),n.jsx("div",{className:"smaller",children:e.department})]}),YW=()=>n.jsx(cn,{search:!0,options:WW,searchOptions:KW,displayOption:GW}),ZW=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,cj=()=>n.jsxs(w,{code:"searchOptions",Component:YW,Source:ZW,expand:!0,children:[n.jsxs("p",{children:["You can define your own ",n.jsx("code",{children:"searchOptions"})," function to search through the ",n.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),n.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",n.jsx("code",{children:"name"})," or their ",n.jsx("code",{children:"department"}),". Try entering ",n.jsx("code",{children:"an"}),".  It will match Al",n.jsx("b",{children:"an"}),", and ",n.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",n.jsx("b",{children:"an"}),"agement."]})]}),qW=Object.freeze(Object.defineProperty({__proto__:null,default:cj},Symbol.toStringTag,{value:"Module"})),QW=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],XW=()=>n.jsx(cn,{validOption:e=>!e.isFruit,options:QW}),JW=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,dj=()=>n.jsxs(w,{code:"validOption",Component:XW,Source:JW,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",n.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"validOption"})," function which rejects any options that have the ",n.jsx("code",{children:"isFruit"})," flag set."]})]}),eK=Object.freeze(Object.defineProperty({__proto__:null,default:dj},Symbol.toStringTag,{value:"Module"})),tK=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],nK=()=>n.jsx(cn,{options:tK,value:"Bobby Badger"}),oK=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,rK=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],sK=()=>n.jsx(cn,{options:rK,value:5}),aK=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,uj=()=>n.jsxs(z,{code:"value",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"value"})," property can be used to pre-select a value."]}),n.jsx(Q,{Component:nK,code:oK,caption:"value",expand:!1}),n.jsxs("p",{children:["When the ",n.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",n.jsx("code",{children:"value"})," should correspond to the"," ",n.jsx("code",{children:"value"})," or ",n.jsx("code",{children:"id"})," property of an element in the ",n.jsx("code",{children:"options"})," array."]}),n.jsx(Q,{Component:sK,code:aK,caption:"value",expand:!1})]}),lK=Object.freeze(Object.defineProperty({__proto__:null,default:uj},Symbol.toStringTag,{value:"Module"})),iK=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Select"}),n.jsx(rj,{}),n.jsxs(Re,{tocName:"select",children:[n.jsx(te,{title:"Properties"}),n.jsx(lj,{}),n.jsx(uj,{}),n.jsx(sj,{}),n.jsx(aj,{}),n.jsx(dj,{}),n.jsx(ij,{}),n.jsx(cj,{}),n.jsx(z,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),n.jsxs(z,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",n.jsx("code",{children:"Select"}),"."]}),n.jsxs(z,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",n.jsx("code",{children:"No options"}),"."]}),n.jsxs(z,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",n.jsx("code",{children:"false"}),"."]}),n.jsxs(z,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",n.jsx("code",{children:"true"}),"."]}),n.jsxs(z,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",n.jsx("code",{children:"300"}),"."]}),n.jsxs(Cr,{children:[n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"Event Handlers"}),n.jsxs(z,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",n.jsx("code",{children:"SearchContext"})," object."]}),n.jsxs(z,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",n.jsx("code",{children:"SearchContext"})," object."]}),n.jsx(z,{code:"onFocus",children:"Called when the component gains focus."}),n.jsx(z,{code:"onBlur",children:"Called when the component loses focus."}),n.jsx(z,{code:"onClick",children:"Called when the component is clicked."}),n.jsx(z,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),n.jsx(z,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),n.jsx(z,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"CSS Classes"}),n.jsxs(z,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",n.jsx("code",{children:"placeholder"}),"."]}),n.jsxs(z,{code:"inputClass",children:["Set the class for the input element. The default is ",n.jsx("code",{children:"input"}),"."]}),n.jsxs(z,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",n.jsx("code",{children:"selecting"}),"."]}),n.jsxs(z,{code:"optionsClass",children:["Set the class added for the options container. The default is ",n.jsx("code",{children:"menu border bdr-1"}),"."]}),n.jsxs(z,{code:"optionClass",children:["Set the class added to each option element. The default is ",n.jsx("code",{children:"item"}),"."]}),n.jsxs(z,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",n.jsx("code",{children:"active"}),"."]}),n.jsxs(z,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",n.jsx("code",{children:"none"}),"."]})]}),n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"Components"}),n.jsx(z,{code:"Content",children:"Renders the content of the select component."}),n.jsx(z,{code:"Input",children:"Renders the input field."}),n.jsx(z,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),n.jsx(z,{code:"Option",children:"Renders an individual option."}),n.jsx(z,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),cK=Object.freeze(Object.defineProperty({__proto__:null,default:iK},Symbol.toStringTag,{value:"Module"})),Jx=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],dK=()=>{const[e,t]=H.useState(!1),[o,r]=H.useState(Jx),s=i=>{r(i),t(!0)},a=()=>{r(Jx.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>n.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex space middle mar-b-4",children:[n.jsx("h3",{children:"Drag Items to Set Order"}),e&&n.jsx("div",{children:n.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),n.jsx("div",{className:"sortable list Horizontal",children:n.jsx(mD,{items:o,Item:l,setOrder:s})})]})},uK=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,pj=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),n.jsx(Q,{Component:dK,code:uK})]}),pK=Object.freeze(Object.defineProperty({__proto__:null,default:pj},Symbol.toStringTag,{value:"Module"})),e1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],hK=()=>{const[e,t]=H.useState(!1),[o,r]=H.useState(e1),s=d=>{r(d),t(!0)},a=()=>{r(e1.map(d=>({...d,moved:!1}))),t(!1)},l=({item:d,setNodeRef:u,style:p,listeners:f,...v})=>n.jsxs("tr",{ref:u,style:p,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${d.moved?"moved":""}`,...v,...f,children:[n.jsx("td",{children:d.id}),n.jsx("td",{children:d.animal})]}),{Context:i,Content:c}=X3({items:o,Item:l,setOrder:s});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex space middle mar-b-4",children:[n.jsx("h3",{children:"Drag Items to Set Order"}),e&&n.jsx("div",{children:n.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),n.jsx(i,{children:n.jsx("table",{className:"wide celled shaded sortable",children:n.jsx("tbody",{children:n.jsx(c,{})})})})]})},mK=`import { MakeSortable, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { MakeSortable, Button } from '@abw/badger-react-ui

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

const MakeSortableExample = () => {
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
    <tr
      ref={setNodeRef}
      style={style}
      className={\`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 \${item.moved ? 'moved' : ''}\`}
      {...props}
      {...listeners}
    >
      <td>
        {item.id}
      </td>
      <td>
        {item.animal}
      </td>
    </tr>

  const { Context, Content } = MakeSortable({
    items: items,
    Item: Item,
    setOrder: setOrder
  })


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
      <Context>
        <table className="wide celled shaded sortable">
          <tbody>
            <Content/>
          </tbody>
        </table>
      </Context>
    </>
  )
}

export default MakeSortableExample`,hj=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The above components are implemented using ",n.jsx("code",{children:"MakeSortable"}),"."]}),n.jsxs("p",{children:["In most cases you don't need to worry about this.  However, if you're trying to render a sortable table then you may see React warnings telling you that a ",n.jsx("code",{children:"div"})," element cannot appear as a child of a ",n.jsx("code",{children:"tr"})," element or something similar.  The reason for this is that ",n.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," creates a"," ",n.jsx("code",{children:"div"})," wrapper for the sortable context and it will put it wherever you've inserted the ",n.jsx("code",{children:"Sortable"})," component."]}),n.jsxs("p",{children:["The solution is to use ",n.jsx("code",{children:"MakeSortable"}),", passing it all the options supported by ",n.jsx("code",{children:"Sortable"}),".  It will return an object containing ",n.jsx("code",{children:"Context"})," and ",n.jsx("code",{children:"Content"})," components. Put the ",n.jsx("code",{children:"Context"})," around the outside of your table and then insert the ",n.jsx("code",{children:"Content"})," where you want the sortable items to appear."]}),n.jsx(Q,{Component:hK,code:mK})]}),fK=Object.freeze(Object.defineProperty({__proto__:null,default:hj},Symbol.toStringTag,{value:"Module"})),t1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],xK=()=>{const[e,t]=H.useState(!1),[o,r]=H.useState(t1),s=i=>{r(i),t(!0)},a=()=>{r(t1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>n.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex space middle mar-b-4",children:[n.jsx("h3",{children:"Drag Items to Set Order"}),e&&n.jsx("div",{children:n.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),n.jsx("div",{className:`sortable ${e?"changed":""}`,children:n.jsx(rm,{items:o,Item:l,setOrder:s})})]})},gK=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,mj=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",n.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),n.jsx(Q,{Component:xK,code:gK})]}),bK=Object.freeze(Object.defineProperty({__proto__:null,default:mj},Symbol.toStringTag,{value:"Module"})),n1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],vK=()=>{const[e,t]=H.useState(!1),[o,r]=H.useState(n1),s=i=>{r(i),t(!0)},a=()=>{r(n1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>n.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex space middle mar-b-4",children:[n.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&n.jsx("div",{children:n.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),n.jsx("div",{className:"sortable list vertical",children:n.jsx(J3,{items:o,Item:l,setOrder:s})})]})},jK=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,fj=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),n.jsx(Q,{Component:vK,code:jK})]}),yK=Object.freeze(Object.defineProperty({__proto__:null,default:fj},Symbol.toStringTag,{value:"Module"})),SK=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Sortable"}),n.jsx(mj,{}),n.jsx("h1",{children:"Vertical Sort"}),n.jsx(fj,{}),n.jsx("h1",{children:"Horizontal Sort"}),n.jsx(pj,{}),n.jsx("h1",{children:"MakeSortable"}),n.jsx(hj,{}),n.jsx(Re,{tocName:"sortable",children:n.jsx(Cr,{children:n.jsxs("div",{className:"flow",children:[n.jsx(te,{title:"Properties"}),n.jsxs(z,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",n.jsx("code",{children:"id"})," property to uniquely identify it."]}),n.jsxs(z,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",n.jsx("code",{children:"item"})," from the list of items, ",n.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",n.jsx("code",{children:"ref"})," ","property, a ",n.jsx("code",{children:"style"})," object containing style,",n.jsx("code",{children:"listeners"})," and other ",n.jsx("code",{children:"props"})," which should be added to the element."]}),n.jsxs(z,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",n.jsx("code",{children:"items"})," in the new order."]})]})})})]}),CK=Object.freeze(Object.defineProperty({__proto__:null,default:SK},Symbol.toStringTag,{value:"Module"})),_K=()=>n.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[n.jsx(G,{}),n.jsx(G,{color:"red"}),n.jsx(G,{color:"orange",fill:!0}),n.jsx(G,{color:"yellow",fill:!0,stroke:"thin"}),n.jsx(G,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),n.jsx(G,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),n.jsx(G,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),wK=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,xj=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),n.jsx(Q,{Component:_K,code:wK,expand:!0})]}),TK=Object.freeze(Object.defineProperty({__proto__:null,default:xj},Symbol.toStringTag,{value:"Module"})),EK=()=>n.jsx("div",{className:"x3",children:n.jsx(G,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),kK=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,gj=()=>n.jsx(w,{code:"bgColor",Component:EK,Source:kK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",n.jsx(Wt,{text:"bgIcon"})," is set."]})}),RK=Object.freeze(Object.defineProperty({__proto__:null,default:gj},Symbol.toStringTag,{value:"Module"})),NK=()=>n.jsx("div",{className:"x3",children:n.jsx(G,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),OK=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,bj=()=>n.jsx(w,{code:"bgFill",Component:NK,Source:OK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",n.jsx(Wt,{text:"bgIcon"})," is set."]})}),DK=Object.freeze(Object.defineProperty({__proto__:null,default:bj},Symbol.toStringTag,{value:"Module"})),LK=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),n.jsx(G,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),n.jsx(G,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),BK=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,vj=()=>n.jsx(w,{code:"bgFillStop",Component:LK,Source:BK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",n.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",n.jsx(Wt,{text:"bgIcon"})," is set."]})}),$K=Object.freeze(Object.defineProperty({__proto__:null,default:vj},Symbol.toStringTag,{value:"Module"})),AK=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{bgIcon:!1}),n.jsx(G,{bgIcon:"circle"}),n.jsx(G,{bgIcon:"square40"}),n.jsx(G,{bgIcon:"square30"}),n.jsx(G,{bgIcon:"square20"}),n.jsx(G,{bgIcon:"square10"}),n.jsx(G,{bgIcon:"square"})]}),MK=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,jj=()=>n.jsx(w,{code:"bgIcon",Component:AK,Source:MK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",n.jsx("code",{children:"false"}),".  When the"," ",n.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",n.jsx(Wt,{text:"shrink"})," property."]})}),PK=Object.freeze(Object.defineProperty({__proto__:null,default:jj},Symbol.toStringTag,{value:"Module"})),IK=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{bgIcon:"circle",bgStroke:!0}),n.jsx(G,{bgIcon:"circle",bgStroke:"thin"}),n.jsx(G,{bgIcon:"circle",bgStroke:"thinner"}),n.jsx(G,{bgIcon:"circle",bgStroke:"thinnest"})]}),zK=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,yj=()=>n.jsxs(w,{code:"bgStroke",Component:IK,Source:zK,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",n.jsx(Wt,{text:"bgIcon"})," is set."]}),n.jsxs("p",{children:["It can be set to ",n.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",n.jsx("code",{children:"thinnest"}),","," ",n.jsx("code",{children:"thinner"}),", ",n.jsx("code",{children:"thin"}),", ",n.jsx("code",{children:"thick"}),","," ",n.jsx("code",{children:"thicker"})," or ",n.jsx("code",{children:"thickest"}),"."]})]}),FK=Object.freeze(Object.defineProperty({__proto__:null,default:yj},Symbol.toStringTag,{value:"Module"})),HK=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),n.jsx(G,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),n.jsx(G,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),UK=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,Sj=()=>n.jsx(w,{code:"bgStrokeStop",Component:HK,Source:UK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",n.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",n.jsx(Wt,{text:"bgIcon"})," is set."]})}),VK=Object.freeze(Object.defineProperty({__proto__:null,default:Sj},Symbol.toStringTag,{value:"Module"})),WK=()=>n.jsxs("div",{className:"x3 flex gap-3",children:[n.jsx(G,{color:"red"}),n.jsx(G,{color:"orange"}),n.jsx(G,{color:"yellow"}),n.jsx(G,{color:"green"})]}),KK=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Cj=()=>n.jsxs(w,{code:"color",Component:WK,Source:KK,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",n.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),n.jsxs("p",{children:["This is simply a shortcut to add the specified ",n.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),GK=Object.freeze(Object.defineProperty({__proto__:null,default:Cj},Symbol.toStringTag,{value:"Module"})),YK=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{fill:!0,color:"red"}),n.jsx(G,{fill:!0,color:"orange"}),n.jsx(G,{fill:!0,color:"yellow"}),n.jsx(G,{fill:!0,color:"green"})]}),ZK=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,_j=()=>n.jsx(w,{code:"fill",Component:YK,Source:ZK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),qK=Object.freeze(Object.defineProperty({__proto__:null,default:_j},Symbol.toStringTag,{value:"Module"})),QK=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{fill:!0,fillStop:50,fillStopDark:40}),n.jsx(G,{fill:!0,fillStop:60,fillStopDark:30}),n.jsx(G,{fill:!0,fillStop:70,fillStopDark:20}),n.jsx(G,{fill:!0,fillStop:80,fillStopDark:10})]}),XK=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,wj=()=>n.jsx(w,{code:"fillStop",Component:QK,Source:XK,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",n.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),JK=Object.freeze(Object.defineProperty({__proto__:null,default:wj},Symbol.toStringTag,{value:"Module"})),eG=()=>n.jsxs("div",{className:"x3 flex gap-3",children:[n.jsx(G,{icon:"rotate"}),n.jsx(G,{icon:"asterisk"}),n.jsx(G,{icon:"arrow"})]}),tG=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,Tj=()=>n.jsx(w,{code:"icon",Component:eG,Source:tG,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",n.jsx("code",{children:"cog"}),"."]})}),nG=Object.freeze(Object.defineProperty({__proto__:null,default:Tj},Symbol.toStringTag,{value:"Module"})),oG=()=>n.jsxs("div",{className:"x3 flex gap-1",children:[n.jsx(G,{}),n.jsx(G,{reverse:!0})]}),rG=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,Ej=()=>n.jsx(w,{code:"reverse",Component:oG,Source:rG,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),sG=Object.freeze(Object.defineProperty({__proto__:null,default:Ej},Symbol.toStringTag,{value:"Module"})),aG=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{bgIcon:"circle"}),n.jsx(G,{bgIcon:"circle",shrink:6}),n.jsx(G,{bgIcon:"circle",shrink:7}),n.jsx(G,{bgIcon:"circle",shrink:8})]}),lG=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,kj=()=>n.jsx(w,{code:"shrink",Component:aG,Source:lG,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",n.jsx(Wt,{text:"bgIcon"})," is set, otherwise it is 0."]})}),iG=Object.freeze(Object.defineProperty({__proto__:null,default:kj},Symbol.toStringTag,{value:"Module"})),cG=()=>n.jsxs("div",{className:"flex middle gap-3",children:[n.jsx(G,{size:"x3"}),n.jsx(G,{size:"x5"}),n.jsx(G,{size:"x8"})]}),dG=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,Rj=()=>n.jsxs(w,{code:"size",Component:cG,Source:dG,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",n.jsx("code",{children:"smallest"}),","," ",n.jsx("code",{children:"smaller"}),", ",n.jsx("code",{children:"small"}),", ",n.jsx("code",{children:"medium"})," (default)"," ",n.jsx("code",{children:"large"}),", ",n.jsx("code",{children:"larger"})," or ",n.jsx("code",{children:"largest"}),", or one of the size multipliers from ",n.jsx("code",{children:"x2"})," up to ",n.jsx("code",{children:"x10"}),"."]}),n.jsxs("p",{children:["This is simply a shortcut to add the specified ",n.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),uG=Object.freeze(Object.defineProperty({__proto__:null,default:Rj},Symbol.toStringTag,{value:"Module"})),pG=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{stroke:"thinnest"}),n.jsx(G,{stroke:"thinner"}),n.jsx(G,{stroke:"thin"}),n.jsx(G,{}),n.jsx(G,{stroke:"thick"}),n.jsx(G,{stroke:"thicker"}),n.jsx(G,{stroke:"thickest"}),n.jsx(G,{stroke:!1,fill:!0})]}),hG=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Nj=()=>n.jsxs(w,{code:"stroke",Component:pG,Source:hG,undent:2,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",n.jsx("code",{children:"thinnest"}),","," ",n.jsx("code",{children:"thinner"}),", ",n.jsx("code",{children:"thin"}),", ",n.jsx("code",{children:"thick"}),","," ",n.jsx("code",{children:"thicker"})," or ",n.jsx("code",{children:"thickest"}),"."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"stroke"})," can be set to ",n.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",n.jsx(Wt,{text:"fill"}),")"]})]}),mG=Object.freeze(Object.defineProperty({__proto__:null,default:Nj},Symbol.toStringTag,{value:"Module"})),fG=()=>n.jsxs("div",{className:"x3 flex gap-3 wrap",children:[n.jsx(G,{strokeStop:20,strokeStopDark:80}),n.jsx(G,{strokeStop:50,strokeStopDark:50}),n.jsx(G,{strokeStop:80,strokeStopDark:20})]}),xG=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,Oj=()=>n.jsx(w,{code:"strokeStop",Component:fG,Source:xG,undent:2,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",n.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),gG=Object.freeze(Object.defineProperty({__proto__:null,default:Oj},Symbol.toStringTag,{value:"Module"})),bG=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Spinner"}),n.jsx(xj,{}),n.jsxs(Re,{tocName:"spinner",children:[n.jsx(te,{title:"Properties"}),n.jsx(Rj,{}),n.jsx(Ej,{}),n.jsx(kj,{}),n.jsx(Tj,{}),n.jsx(Cj,{}),n.jsx(Nj,{}),n.jsx(Oj,{}),n.jsx(_j,{}),n.jsx(wj,{}),n.jsx(jj,{}),n.jsx(gj,{}),n.jsx(yj,{}),n.jsx(Sj,{}),n.jsx(bj,{}),n.jsx(vj,{})]})]}),vG=Object.freeze(Object.defineProperty({__proto__:null,default:bG},Symbol.toStringTag,{value:"Module"})),jG=["Name","Loudness"],yG=[["Nigel Tufnel",11],["David St. Hubbins",10],["Derek Smalls",10],["Viv Savage",8],["Mick Shrimpton",0]],SG=["Total",39],CG=({cells:e})=>n.jsxs("tr",{children:[n.jsx("td",{children:e[0]}),n.jsx("td",{className:"text-right",children:e[1]})]}),o1=({cells:e})=>n.jsxs("tr",{children:[n.jsx("th",{children:e[0]}),n.jsx("th",{className:"text-right",children:e[1]})]}),_G=()=>n.jsx(We,{celled:!0,shaded:!0,Row:CG,HeadRow:o1,FootRow:o1,headings:jG,bodyRows:yG,footings:SG}),wG=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table, TableCell, cellProps } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = ['Total',39]

const Row = ({ cells }) =>
  <tr>
    <td>{cells[0]}</td>
    <td className="text-right">{cells[1]}</td>
  </tr>

const HeadRow = ({ cells }) =>
  <tr>
    <th>{cells[0]}</th>
    <th className="text-right">{cells[1]}</th>
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    HeadRow={HeadRow}
    FootRow={HeadRow}
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample`,Dj=()=>n.jsx(w,{code:"FootRow",Component:_G,Source:wG,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"FootRow"})," property allows you to define your own component for rendering rows in the footer.  This will override any value defined for ",n.jsx("code",{children:"Row"}),"."]})}),TG=Object.freeze(Object.defineProperty({__proto__:null,default:Dj},Symbol.toStringTag,{value:"Module"})),EG=["Name","Loudness"],kG=[["Nigel Tufnel",11],["David St. Hubbins",10],["Derek Smalls",10],["Viv Savage",8],["Mick Shrimpton",0]],RG=["Total",39],NG=({cells:e})=>n.jsxs("tr",{children:[n.jsx("td",{children:e[0]}),n.jsx("td",{className:"text-right",children:e[1]})]}),OG=({cells:e})=>n.jsxs("tr",{children:[n.jsx("th",{children:e[0]}),n.jsx("th",{className:"text-right",children:e[1]})]}),DG=()=>n.jsx(We,{celled:!0,shaded:!0,Row:NG,HeadRow:OG,headings:EG,bodyRows:kG,footings:RG}),LG=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table, TableCell, cellProps } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = ['Total',39]

const Row = ({ cells }) =>
  <tr>
    <td>{cells[0]}</td>
    <td className="text-right">{cells[1]}</td>
  </tr>

const HeadRow = ({ cells }) =>
  <tr>
    <th>{cells[0]}</th>
    <th className="text-right">{cells[1]}</th>
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    HeadRow={HeadRow}
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample`,Lj=()=>n.jsx(w,{code:"HeadRow",Component:DG,Source:LG,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"HeadRow"})," property allows you to define your own component for rendering rows in the header.  This will override any value defined for ",n.jsx("code",{children:"Row"}),"."]})}),BG=Object.freeze(Object.defineProperty({__proto__:null,default:Lj},Symbol.toStringTag,{value:"Module"})),$G=["Name","Loudness"],AG=[["Nigel Tufnel",11],["David St. Hubbins",10],["Derek Smalls",10],["Viv Savage",8],["Mick Shrimpton",0]],MG=["Total",39],PG=({cells:e,th:t=!1})=>n.jsxs("tr",{children:[n.jsx(dp,{text:e[0],th:t}),n.jsx(dp,{...T0(e[1]),th:t,className:"text-right"})]}),IG=()=>n.jsx(We,{celled:!0,shaded:!0,Row:PG,headings:$G,bodyRows:AG,footings:MG}),zG=`import { Table, TableCell, cellProps } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table, TableCell, cellProps } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = [ 'Total', 39 ]

const Row = ({ cells, th=false }) =>
  <tr>
    <TableCell
      text={cells[0]}
      th={th}
    />
    <TableCell
      {...cellProps(cells[1])}
      th={th}
      className="text-right"
    />
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample`,Bj=()=>n.jsxs(w,{code:"Row",Component:IG,Source:zG,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Row"})," property allows you to define your own component for rendering rows.  It can generate the cells directly or use the"," ",n.jsx("code",{children:"TableCell"})," component to generate them."]}),n.jsxs("p",{children:["It will be passed a ",n.jsx("code",{children:"th"})," flag indicating if the row is expected to generate ",n.jsx("code",{children:"th"})," cells instead of ",n.jsx("code",{children:"td"}),". This would be true when the table header is being rendered.  You can forward this property to the ",n.jsx("code",{children:"TableCell"})," component and it will take care of it for you."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"cellProps"})," utility function can be used to handle cells that are either simple values (strings, numbers, etc) and those that are objects.  It will convert a simple value to an object of the form ",n.jsxs("code",{children:["{"," text: ... ","}"]})]})]}),FG=Object.freeze(Object.defineProperty({__proto__:null,default:Bj},Symbol.toStringTag,{value:"Module"})),HG=["Name","Instrument"],UG=[["Nigel Tufnel","Guitar"],["David St. Hubbins","Guitar"],["Derek Smalls","Bass"],["Viv Savage","Keyboards"],["Mick Shrimpton","Drums"]],VG=()=>n.jsx(We,{celled:!0,striped:!0,headings:HG,rows:UG}),WG=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

const headings = ['Name', 'Instrument']
const rows = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled striped
    headings={headings}
    rows={rows}
  />

export default TableExample`,$j=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Table"})," component simplifies the process of generating tables."]}),n.jsx(Q,{Component:VG,code:WG})]}),KG=Object.freeze(Object.defineProperty({__proto__:null,default:$j},Symbol.toStringTag,{value:"Module"})),Pt=["Name","Instrument"],It=[["Nigel Tufnel","Guitar"],["David St. Hubbins","Guitar"],["Derek Smalls","Bass"],["Viv Savage","Keyboards"],["Mick Shrimpton","Drums"]],GG=Object.freeze(Object.defineProperty({__proto__:null,headings:Pt,rows:It},Symbol.toStringTag,{value:"Module"})),YG=()=>n.jsx(We,{border:2,celled:!0,striped:!0,headings:Pt,rows:It}),ZG=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    border={2}
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Aj=()=>n.jsx(w,{code:"border",Component:YG,Source:ZG,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"border"})," property is a shortcut to set the border width."]})}),qG=Object.freeze(Object.defineProperty({__proto__:null,default:Aj},Symbol.toStringTag,{value:"Module"})),QG=()=>n.jsx(We,{celled:!0,headings:Pt,rows:It}),XG=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    celled
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Mj=()=>n.jsx(w,{code:"celled",Component:QG,Source:XG,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"celled"})," property is a shortcut to add the"," ",n.jsx("code",{children:"celled"})," CSS class which adds border lines to each cell."]})}),JG=Object.freeze(Object.defineProperty({__proto__:null,default:Mj},Symbol.toStringTag,{value:"Module"})),eY=()=>n.jsx(We,{className:"red celled striped square shadow-1",headings:Pt,rows:It}),tY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    className="red celled striped square shadow-1"
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Pj=()=>n.jsx(w,{code:"className",Component:eY,Source:tY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property allows you to set the CSS class for the ",n.jsx("code",{children:"table"})," element."]})}),nY=Object.freeze(Object.defineProperty({__proto__:null,default:Pj},Symbol.toStringTag,{value:"Module"})),oY=()=>n.jsx(We,{color:"brand",celled:!0,striped:!0,headings:Pt,rows:It}),rY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    color="brand"
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Ij=()=>n.jsx(w,{code:"color",Component:oY,Source:rY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range for the table."]})}),sY=Object.freeze(Object.defineProperty({__proto__:null,default:Ij},Symbol.toStringTag,{value:"Module"})),aY=()=>n.jsx(We,{compressed:!0,celled:!0,striped:!0,headings:Pt,rows:It}),lY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    compressed
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,zj=()=>n.jsx(w,{code:"compressed",Component:aY,Source:lY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"compressed"})," property is a shortcut to add the"," ",n.jsx("code",{children:"compressed"})," CSS class which reduces the padding in each cell."]})}),iY=Object.freeze(Object.defineProperty({__proto__:null,default:zj},Symbol.toStringTag,{value:"Module"})),cY=()=>n.jsx(We,{expanded:!0,celled:!0,striped:!0,headings:Pt,rows:It}),dY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    expanded
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Fj=()=>n.jsx(w,{code:"expanded",Component:cY,Source:dY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"expanded"})," property is a shortcut to add the"," ",n.jsx("code",{children:"expanded"})," CSS class which increases the padding in each cell."]})}),uY=Object.freeze(Object.defineProperty({__proto__:null,default:Fj},Symbol.toStringTag,{value:"Module"})),pY=[["Name","Instrument"]],hY=[{className:"green text-center",cells:[{colSpan:2,text:"Spinal Tap"}]}],mY=[["Nigel Tufnel","Guitar"],["David St. Hubbins","Guitar"],["Derek Smalls","Bass"],["Viv Savage","Keyboards"],["Mick Shrimpton","Drums"]],fY=()=>n.jsx(We,{celled:!0,shaded:!0,headRows:pY,bodyRows:mY,footRows:hY}),xY=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

const headRows = [
  ['Name', 'Instrument']
]
const footRows = [
  {
    className: 'green text-center',
    cells: [
      { colSpan: 2, text: 'Spinal Tap' }
    ]
  },
]
const bodyRows = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled shaded
    headRows={headRows}
    bodyRows={bodyRows}
    footRows={footRows}
  />

export default TableExample`,Hj=()=>n.jsx(w,{code:"footRows",Component:fY,Source:xY,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"footRows"})," property is used to define an array of rows for the table footer.  The data format is the same as for"," ",n.jsx("code",{children:"rows"})," / ",n.jsx("code",{children:"bodyRows"}),"."]})}),gY=Object.freeze(Object.defineProperty({__proto__:null,default:Hj},Symbol.toStringTag,{value:"Module"})),bY=["Name","Loudness"],vY=[["Nigel Tufnel",11],["David St. Hubbins",10],["Derek Smalls",10],["Viv Savage",8],["Mick Shrimpton",0]],jY=[{className:"text-right",text:"Total"},39],yY=()=>n.jsx(We,{celled:!0,shaded:!0,headings:bY,bodyRows:vY,footings:jY}),SY=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = [
  { className: 'text-right', text: 'Total' },
  39
]

const TableExample = () =>
  <Table
    celled shaded
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample`,Uj=()=>n.jsx(w,{code:"footings",Component:yY,Source:SY,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"footings"})," property is a shortcut for the common case where you just want to have a single row in the footer.  It is equivalent to defining ",n.jsx("code",{children:"footRows"})," with the ",n.jsx("code",{children:"footings"})," as the only element."]})}),CY=Object.freeze(Object.defineProperty({__proto__:null,default:Uj},Symbol.toStringTag,{value:"Module"})),_Y=[{className:"green text-center",cells:[{colSpan:2,text:"Spinal Tap"}]},["Name","Instrument"]],wY=[["Nigel Tufnel","Guitar"],["David St. Hubbins","Guitar"],["Derek Smalls","Bass"],["Viv Savage","Keyboards"],["Mick Shrimpton","Drums"]],TY=()=>n.jsx(We,{celled:!0,shaded:!0,headRows:_Y,bodyRows:wY}),EY=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

const headRows = [
  {
    className: 'green text-center',
    cells: [
      { colSpan: 2, text: 'Spinal Tap' }
    ]
  },
  ['Name', 'Instrument']
]
const bodyRows = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled shaded
    headRows={headRows}
    bodyRows={bodyRows}
  />

export default TableExample`,Vj=()=>n.jsx(w,{code:"headRows",Component:TY,Source:EY,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"headRows"})," property is used to define an array of rows for the table header.  The data format is the same as for"," ",n.jsx("code",{children:"rows"})," / ",n.jsx("code",{children:"bodyRows"}),"."]})}),kY=Object.freeze(Object.defineProperty({__proto__:null,default:Vj},Symbol.toStringTag,{value:"Module"})),RY=["Name","Instrument"],NY=[["Nigel Tufnel","Guitar"],["David St. Hubbins","Guitar"],["Derek Smalls","Bass"],["Viv Savage","Keyboards"],["Mick Shrimpton","Drums"]],OY=()=>n.jsx(We,{celled:!0,shaded:!0,headings:RY,bodyRows:NY}),DY=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

const headings = ['Name', 'Instrument']
const bodyRows = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled shaded
    headings={headings}
    bodyRows={bodyRows}
  />

export default TableExample`,Wj=()=>n.jsx(w,{code:"headings",Component:OY,Source:DY,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"headings"})," property is a shortcut for the common case where you just want to have a single row in the header.  It is equivalent to defining ",n.jsx("code",{children:"headRows"})," with the ",n.jsx("code",{children:"headings"})," as the only element."]})}),LY=Object.freeze(Object.defineProperty({__proto__:null,default:Wj},Symbol.toStringTag,{value:"Module"})),BY=()=>n.jsx(We,{lined:!0,headings:Pt,rows:It}),$Y=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    lined
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Kj=()=>n.jsx(w,{code:"lined",Component:BY,Source:$Y,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"lined"})," property is a shortcut to add the"," ",n.jsx("code",{children:"lined"})," CSS class which adds border lines between each row."]})}),AY=Object.freeze(Object.defineProperty({__proto__:null,default:Kj},Symbol.toStringTag,{value:"Module"})),MY=()=>n.jsx(We,{radius:3,celled:!0,striped:!0,headings:Pt,rows:It}),PY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    radius={3}
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Gj=()=>n.jsx(w,{code:"radius",Component:MY,Source:PY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"radius"})," property is a shortcut to set the border radius.  It can be ",n.jsx("code",{children:"true"})," to set the default radius (1),"," ",n.jsx("code",{children:"false"})," to remove the border radius, or an integer to set the border radius in multiples of 0.25rem, with the pre-defined values being 0, 1, 2, 3, 4, 5, 6, 8 and 10."]})}),IY=Object.freeze(Object.defineProperty({__proto__:null,default:Gj},Symbol.toStringTag,{value:"Module"})),zY=[["Nigel Tufnel","Guitar"],["David St. Hubbins","Guitar"],["Derek Smalls","Bass"],["Viv Savage","Keyboards"],{className:"error",cells:["Mick Shrimpton","Drums"]},[{th:!0,text:"Ian Faith"},{th:!0,className:"green inverse",text:"Manager"}]],FY=()=>n.jsx(We,{celled:!0,shaded:!0,rows:zY}),HY=`import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

export const rows = [
  // simple rows as arrays of text
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  // row as an object with cells array
  {
    className: 'error',
    cells: ['Mick Shrimpton', 'Drums']
  },
  // row with cells as objects
  [
    { th: true, text: 'Ian Faith' },
    { th: true, className: 'green inverse', text: 'Manager' }
  ]
]

const TableExample = () =>
  <Table
    celled shaded
    rows={rows}
  />

export default TableExample`,Yj=()=>n.jsxs(w,{code:"rows",Component:FY,Source:HY,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"rows"})," (or ",n.jsx("code",{children:"bodyRows"}),") property is used to define an array of rows for the main table body."]}),n.jsxs("p",{children:["Each element in the ",n.jsx("code",{children:"rows"})," array can be an array of cells. Or it can be an object containing an array of cells as the"," ",n.jsx("code",{children:"cells"})," property and any other properties for the row (e.g. ",n.jsx("code",{children:"className"})," to set the CSS class for the row)."]}),n.jsxs("p",{children:["Each cell can be a simple text string or other value, or an object containing the value as the ",n.jsx("code",{children:"text"})," property, along with any other properties for the cell (e.g. ",n.jsx("code",{children:"className"}),")."]}),n.jsxs("p",{children:["Cells in the header are rendered as ",n.jsx("code",{children:"th"})," elements.  Cells in the body and footer are rendered as ",n.jsx("code",{children:"td"})," element.  The"," ","boolean ",n.jsx("code",{children:"th"})," property can be added to a cell to change this behaviour."]})]}),UY=Object.freeze(Object.defineProperty({__proto__:null,default:Yj},Symbol.toStringTag,{value:"Module"})),VY=()=>n.jsx(We,{shaded:!0,headings:Pt,rows:It}),WY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    shaded
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Zj=()=>n.jsx(w,{code:"shaded",Component:VY,Source:WY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shaded"})," property is a shortcut to add the"," ",n.jsx("code",{children:"shaded"})," CSS class which adds background colors to each cell."]})}),KY=Object.freeze(Object.defineProperty({__proto__:null,default:Zj},Symbol.toStringTag,{value:"Module"})),GY=()=>n.jsx(We,{shadow:3,celled:!0,striped:!0,headings:Pt,rows:It}),YY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    shadow={3}
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,qj=()=>n.jsx(w,{code:"shadow",Component:GY,Source:YY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shadow"})," property is a shortcut to add one of the shadow styles to the table.  The value should be an integer from 1 to 5."]})}),ZY=Object.freeze(Object.defineProperty({__proto__:null,default:qj},Symbol.toStringTag,{value:"Module"})),qY=()=>n.jsx(We,{size:"smaller",celled:!0,striped:!0,headings:Pt,rows:It}),QY=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    size="smaller"
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Qj=()=>n.jsx(w,{code:"size",Component:qY,Source:QY,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the table size using one of the semantic size classes (",n.jsx("code",{children:"smallest"}),","," ",n.jsx("code",{children:"smaller"}),", ",n.jsx("code",{children:"small"}),", ",n.jsx("code",{children:"large"}),","," ",n.jsx("code",{children:"larger"})," or ",n.jsx("code",{children:"largest"}),") or one of the size multipliers (",n.jsx("code",{children:"x2"}),", ",n.jsx("code",{children:"x3"}),", etc.)"]})}),XY=Object.freeze(Object.defineProperty({__proto__:null,default:Qj},Symbol.toStringTag,{value:"Module"})),JY=()=>n.jsx(We,{striped:!0,headings:Pt,rows:It}),eZ=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Xj=()=>n.jsx(w,{code:"striped",Component:JY,Source:eZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"striped"})," property is a shortcut to add the"," ",n.jsx("code",{children:"striped"})," CSS class which adds striped background colors to each cell."]})}),tZ=Object.freeze(Object.defineProperty({__proto__:null,default:Xj},Symbol.toStringTag,{value:"Module"})),nZ=()=>n.jsx(We,{wide:!0,celled:!0,striped:!0,headings:Pt,rows:It}),oZ=`import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    wide
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample`,Jj=()=>n.jsx(w,{code:"wide",Component:nZ,Source:oZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"wide"})," property is a shortcut to add the"," ",n.jsx("code",{children:"wide"})," CSS class which sets the table width to be 100% of the parent element."]})}),rZ=Object.freeze(Object.defineProperty({__proto__:null,default:Jj},Symbol.toStringTag,{value:"Module"})),sZ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Table"}),n.jsx($j,{}),n.jsxs(Re,{tocName:"table",children:[n.jsx(te,{title:"Data Properties"}),n.jsx(Yj,{}),n.jsx(Vj,{}),n.jsx(Wj,{}),n.jsx(Hj,{}),n.jsx(Uj,{}),n.jsx(te,{title:"Styling Properties"}),n.jsx(Pj,{}),n.jsx(Kj,{}),n.jsx(Mj,{}),n.jsx(Zj,{}),n.jsx(Xj,{}),n.jsx(Jj,{}),n.jsx(Qj,{}),n.jsx(zj,{}),n.jsx(Fj,{}),n.jsx(Ij,{}),n.jsx(Aj,{}),n.jsx(Gj,{}),n.jsx(qj,{}),n.jsx(te,{title:"Components"}),n.jsx(Bj,{}),n.jsx(Lj,{}),n.jsx(Dj,{})]})]}),aZ=Object.freeze(Object.defineProperty({__proto__:null,default:sZ},Symbol.toStringTag,{value:"Module"})),lZ=()=>{const e=[{text:"One",content:"This is one"},{text:"Two",content:"This is two"},{text:"Three",content:"This is three"},{text:"Four",disabled:!0}];return n.jsx(it,{lined:!0,tabs:e})},iZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,e5=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Tabset"})," component renders a selectable set of tabs."]}),n.jsx(Q,{Component:lZ,code:iZ})]}),cZ=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),dZ=()=>n.jsx(it,{solid:!0,lined:!0,center:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),uZ=`import React from 'react'
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

export default TabsetExample`,t5=()=>n.jsx(w,{code:"center",Component:dZ,Source:uZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"center"})," property can be added to center align the tabs."]})}),pZ=Object.freeze(Object.defineProperty({__proto__:null,default:t5},Symbol.toStringTag,{value:"Module"})),hZ=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(it,{lined:!0,solid:!0,tabs:e}),n.jsx(it,{lined:!0,solid:!0,tabs:e,color:"brand"}),n.jsx(it,{lined:!0,solid:!0,tabs:e,color:"orange"}),n.jsx(it,{lined:!0,solid:!0,tabs:e,color:"teal"}),n.jsx(it,{lined:!0,solid:!0,tabs:e,color:"violet"})]})},mZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,n5=()=>n.jsx(w,{code:"color",Component:hZ,Source:mZ,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range for the tabs."]})}),fZ=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),xZ=()=>n.jsx(it,{lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),gZ=`import React from 'react'
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

export default TabsetExample`,o5=()=>n.jsx(w,{code:"lined",Component:xZ,Source:gZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"lined"})," property can be used to add a line under the tabs."]})}),bZ=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),vZ=()=>n.jsx(it,{solid:!0,lined:!0,right:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),jZ=`import React from 'react'
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

export default TabsetExample`,r5=()=>n.jsx(w,{code:"right",Component:vZ,Source:jZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"right"})," property can be added to right align the tabs."]})}),yZ=Object.freeze(Object.defineProperty({__proto__:null,default:r5},Symbol.toStringTag,{value:"Module"})),SZ=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(it,{lined:!0,solid:!0,tabs:e}),n.jsx(it,{lined:!0,solid:!0,tabs:e,size:"smaller"}),n.jsx(it,{lined:!0,solid:!0,tabs:e,size:"larger"})]})},CZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,s5=()=>n.jsx(w,{code:"size",Component:SZ,Source:CZ,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the size of the tabs."]})}),_Z=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),wZ=()=>n.jsxs(n.Fragment,{children:[n.jsx(it,{solid:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),n.jsx(it,{solid:!0,lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]})]}),TZ=`import React from 'react'
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

export default TabsetExample`,a5=()=>n.jsx(w,{code:"solid",Component:wZ,Source:TZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"solid"})," property can be used to render the tabs using solid colors.  It can be used in conjunction with ",n.jsx("code",{children:"lined"}),"."]})}),EZ=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),kZ=()=>n.jsx(it,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),RZ=`import React from 'react'
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

export default TabsetExample`,l5=()=>n.jsxs(w,{code:"storageKey",Component:kZ,Source:RZ,expand:!0,undent:2,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",n.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',n.jsx("code",{children:"contact-tabs"}),"."]})]}),NZ=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),OZ=({tab:e})=>n.jsxs("div",{className:"border pad-2 mar-t-2",children:["This is a component for rendering ",e.otherData]}),DZ=()=>{const e=[{text:"One",iconLeft:"asterisk",content:"This is one"},{text:"Two",iconRight:"cog",content:n.jsx("div",{className:"border pad-2 mar-t-2",children:"This is two"})},{icon:"heart",otherData:"the heart tab",Component:OZ},{icon:"thumb-down",disabled:!0}];return n.jsx(it,{lined:!0,tabs:e})},LZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,i5=()=>n.jsxs(w,{code:"tabs",Component:DZ,Source:LZ,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"tabs"})," property should be used to define an array of objects containing properties for each tab.  This can include ",n.jsx("code",{children:"text"})," for the tab text, ",n.jsx("code",{children:"icon"})," for a tab icon, ",n.jsx("code",{children:"iconLeft"})," and ",n.jsx("code",{children:"iconRight"})," for icons to appear either side of the text, and ",n.jsx("code",{children:"disabled"})," to disable the tab"]}),n.jsxs("p",{children:["A ",n.jsx("code",{children:"content"})," property can be defined containing the content that should be rendered when the tab is select. Alternately you can provide a ",n.jsx("code",{children:"Component"})," which should be a React component. This will be passed the active ",n.jsx("code",{children:"tab"})," as a property."]})]}),BZ=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),$Z=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Tabset"}),n.jsx(e5,{}),n.jsxs(Re,{tocName:"tabset",children:[n.jsx(te,{title:"Properties"}),n.jsx(i5,{}),n.jsx(l5,{}),n.jsx(o5,{}),n.jsx(a5,{}),n.jsx(n5,{}),n.jsx(s5,{}),n.jsx(t5,{}),n.jsx(r5,{}),n.jsxs(z,{code:"tabsetClass",children:["The CSS class added to the tabset container.  This defaults to ",n.jsx("code",{children:"tabset"}),"."]}),n.jsxs(z,{code:"tabsClass",children:["The CSS class added to the tabs list.  This defaults to ",n.jsx("code",{children:"tabs"}),"."]}),n.jsxs(z,{code:"activeClass",children:["The CSS class added to the active tab.  This defaults to ",n.jsx("code",{children:"active"}),"."]}),n.jsxs(z,{code:"disabledClass",children:["The CSS class added to a disabled active tab.  This defaults to ",n.jsx("code",{children:"disabled"}),"."]}),n.jsx(z,{code:"className",children:"An additional CSS class to be added to the tabset container.  Use this for applying additional margin utility classes, for example."}),n.jsx(z,{code:"bodyClass",children:"A CSS class to be added to the body container."}),n.jsxs(z,{code:"Body",children:["A component to render the body for each tab.  It will be passed the active ",n.jsx("code",{children:"tab"})," as a property."]})]})]}),AZ=Object.freeze(Object.defineProperty({__proto__:null,default:$Z},Symbol.toStringTag,{value:"Module"})),MZ=()=>n.jsx(fr,{gap:2,children:n.jsx($a,{})}),$a=()=>["A","B","C","D","E","F","G","H"].map(e=>n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:e},e)),PZ=`import { Tiles } from '@/src/index.jsx'

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

export default TilesExample`,c5=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Tiles"})," component implements a grid layout for tiling the child components."]}),n.jsx(Q,{Component:MZ,code:PZ})]}),IZ=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),zZ=()=>n.jsxs(fr,{gap:2,children:[n.jsx("div",{className:"cols-2 surface-3 pad-2 border bdr-1",children:"A"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"B"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"C"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"D"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"E"}),n.jsx("div",{className:"cols-2 surface-3 pad-2 border bdr-1",children:"F"}),n.jsx("div",{className:"cols-4 surface-3 pad-2 border bdr-1",children:"G"})]}),FZ=`import React from 'react'
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

export default TilesExample`,d5=()=>n.jsx(w,{code:"cols",Component:zZ,Source:FZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"cols-N"})," property can be added to an immediate child element to make it span a number of columns."]})}),HZ=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),UZ=()=>n.jsxs("div",{className:"grid-1 gap-8",children:[n.jsx(fr,{gap:2,children:n.jsx($a,{})}),n.jsx(fr,{gap:"2 4",children:n.jsx($a,{})}),n.jsx(fr,{gap:[4,2],children:n.jsx($a,{})})]}),VZ=`import React from 'react'
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

export default TilesExample`,u5=()=>n.jsxs(w,{code:"gap",Component:UZ,Source:VZ,expand:!0,undent:2,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"gap"})," property can be used to define the gap between tiles in units of 0.25rem.  A single value provides the vertical and horizontal gap."]}),n.jsx("p",{children:"Two values can be provided, either as an array or a whitespace delimited string, providing different values for the vertical and horizontal gaps."})]}),WZ=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),KZ=()=>n.jsx(fr,{gap:2,minWidth:"50px",children:n.jsx($a,{})}),GZ=`import React from 'react'
import { Tiles } from '@/src/index.jsx'
import { Cards } from '../Tiles/Component.jsx'

const TilesExample = () =>
  /* START */
  <Tiles gap={2} minWidth="50px">
    <Cards/>
  </Tiles>
  /* END */

export default TilesExample`,p5=()=>n.jsx(w,{code:"minWidth",Component:KZ,Source:GZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"minWidth"})," property can be used to set the minimum width of a tile."]})}),YZ=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),ZZ=()=>n.jsxs(fr,{gap:2,children:[n.jsx("div",{className:"rows-2 surface-3 pad-2 border bdr-1",children:"A"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"B"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"C"}),n.jsx("div",{className:"rows-2 surface-3 pad-2 border bdr-1",children:"D"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"E"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"F"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"G"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"H"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"I"}),n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:"J"})]}),qZ=`import React from 'react'
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

export default TilesExample`,h5=()=>n.jsx(w,{code:"rows",Component:ZZ,Source:qZ,expand:!0,undent:2,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"rows-N"})," property can be added to an immediate child element to make it span a number of rows."]})}),QZ=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),XZ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Tiles"}),n.jsx(c5,{}),n.jsxs(Re,{tocName:"tiles",children:[n.jsx(te,{title:"Properties"}),n.jsx(p5,{}),n.jsx(u5,{}),n.jsx(te,{title:"Child Properties"}),n.jsx(d5,{}),n.jsx(h5,{})]})]}),JZ=Object.freeze(Object.defineProperty({__proto__:null,default:XZ},Symbol.toStringTag,{value:"Module"})),eq=()=>{const[e,t]=H.useState(0),[o,r]=H.useState(0);return n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(_n,{selected:e,onSelect:t}),n.jsx(_n,{options:[{text:"Red",color:"red"},{text:"Green",color:"green"},{text:"Blue",color:"blue"}],selected:o,onSelect:(s,a)=>r(a)})]})},tq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,m5=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Toggle"})," component renders a switchable toggle using the ",n.jsx(tP,{})," component."]}),n.jsx(Q,{Component:eq,code:tq})]}),nq=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),oq=()=>n.jsx(SD,{options:[{text:"Hot",color:"red"},{text:"Cold",color:"blue"}],onSelect:e=>console.log(`You selected ${e.text}`),storageKey:"bru-toggle-temperature"}),rq=`import { ToggleState } from '@/src/index.jsx'

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

export default ToggleStateExample`,f5=()=>n.jsxs(w,{code:"ToggleState",Component:oq,Source:rq,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"ToggleState"})," component is a wrapper around the"," ",n.jsx("code",{children:"Toggle"})," component which maintains the state of the selected option internally.  Use the ",n.jsx("code",{children:"onSelect"})," handler to get notification when a new option is selected."]}),n.jsxs("p",{children:["You can also define a ",n.jsx("code",{children:"storageKey"})," to store the selected option in local storage.  Try selecting an option below and then reload the page.  You should see the option selection restored."]})]}),sq=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),aq=()=>{const[e,t]=H.useState(0);return n.jsx(_n,{activeProps:{className:"brand weight-black"},selected:e,onSelect:t})},lq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,x5=()=>n.jsx(w,{code:"activeProps",Component:aq,Source:lq,expand:!0,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"activeProps"})," property can be used to define properties for the active button."]})}),iq=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),cq=()=>{const[e,t]=H.useState(0);return n.jsx(_n,{color:"brand",selected:e,onSelect:t})},dq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,g5=()=>n.jsx(w,{code:"color",Component:cq,Source:dq,expand:!0,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"color"})," property can be used to set the color range for the buttons."]})}),uq=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),pq=()=>{const e={id:10,text:"Love",iconLeft:"thumb-up"},t={id:11,text:"Hate",iconLeft:"thumb-down"},[o,r]=H.useState(t),s=(a,l)=>a.findIndex(i=>i.id===l.id);return n.jsx(_n,{options:[e,t],selected:o,onSelect:r,findSelectedIndex:s})},hq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,b5=()=>n.jsxs(w,{code:"findSelectedIndex",Component:pq,Source:hq,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"findSelectedIndex"})," property can be used to provide an alternative function to determine the index of a selected option. The default function looks for the option that matches the"," ",n.jsx("code",{children:"value"})," property of the selected option."]}),n.jsxs("p",{children:["In this example we define a function to match the index of the selected option using the ",n.jsx("code",{children:"id"})," property."]})]}),mq=Object.freeze(Object.defineProperty({__proto__:null,default:b5},Symbol.toStringTag,{value:"Module"})),fq=()=>{const[e,t]=H.useState(0);return n.jsx(_n,{inactiveProps:{className:"grey outline weight-100"},selected:e,onSelect:t})},xq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,v5=()=>n.jsx(w,{code:"inactiveProps",Component:fq,Source:xq,expand:!0,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"inactiveProps"})," property can be used to define properties for inactive buttons."]})}),gq=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),bq=()=>{const[e,t]=H.useState(0),o=[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}];return n.jsx(_n,{options:o,selected:e,onSelect:(r,s)=>t(s)})},vq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,j5=()=>n.jsxs(w,{code:"onSelect",Component:bq,Source:vq,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSelect"})," property should be used to provider a handler which will be called when an option is selected.  It is passed two arguments: the ",n.jsx("code",{children:"option"})," object and the numerical index of the option in the ",n.jsx("code",{children:"options"})," array."]}),n.jsxs("p",{children:["You can safely use the second argument, the numerical index, as the value to store for the ",n.jsx("code",{children:"selected"})," option.  You can use the first argument, the option object as long as each option has a"," ",n.jsx("code",{children:"value"})," property to uniquely identify it."]})]}),jq=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),yq=()=>{const[e,t]=H.useState(0),o=[{value:"love",text:"Love",iconLeft:"thumb-up"},{value:"hate",text:"Hate",iconLeft:"thumb-down"}];return n.jsxs(n.Fragment,{children:[n.jsx(_n,{options:o,selected:e,onSelect:t}),n.jsxs("p",{className:"mar-t-2",children:["You ",e.value," this!"]})]})},Sq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,y5=()=>n.jsxs(w,{code:"options",Component:yq,Source:Sq,expand:!0,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"options"})," property can be used to define the available options.  Each object in the array can contain any of the properties accepted by the ",n.jsx(rb,{})," component, e.g. ",n.jsx("code",{children:"text"}),","," ",n.jsx("code",{children:"icon"}),", ",n.jsx("code",{children:"iconLeft"}),", ",n.jsx("code",{children:"iconRight"}),", etc."]}),n.jsxs("p",{children:["When used as shown in this example (where the ",n.jsx("code",{children:"selected"})," value is the option object), each option should have a ",n.jsx("code",{children:"value"})," to uniquely identify it."]})]}),Cq=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),_q=()=>{const[e,t]=H.useState(0),o=[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}];return n.jsx(_n,{options:o,selected:e,onSelect:(r,s)=>t(s)})},wq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,S5=()=>n.jsx(w,{code:"selected",Component:_q,Source:wq,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"selected"})," property should be used to indicate which option is selected.  This can be an object that contains the same"," ",n.jsx("code",{children:"value"})," property as the option, or the numerical index of the item in the ",n.jsx("code",{children:"options"})," list.  The default value is"," ",n.jsx("code",{children:"0"}),", selecting the first option."]})}),Tq=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),Eq=()=>{const[e,t]=H.useState(0);return n.jsx(_n,{size:"smaller",selected:e,onSelect:t})},kq=`import { Toggle } from '@/src/index.jsx'

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

export default ToggleExample`,C5=()=>n.jsx(w,{code:"size",Component:Eq,Source:kq,expand:!0,undent:4,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the size of the buttons."]})}),Rq=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),Nq=()=>n.jsx(it,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),Oq=`import React from 'react'
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

export default TabsetExample`,Dq=()=>n.jsxs(w,{code:"storageKey",Component:Nq,Source:Oq,expand:!0,undent:2,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",n.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',n.jsx("code",{children:"contact-tabs"}),"."]})]}),Lq=Object.freeze(Object.defineProperty({__proto__:null,default:Dq},Symbol.toStringTag,{value:"Module"})),Bq=()=>{const[e,t]=R0({options:[{text:"Love",iconLeft:"thumb-up"},{text:"Hate",iconLeft:"thumb-down"}],storageKey:"bru-toggle-love-hate"});return n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(t,{}),n.jsx(t,{size:"small",color:"violet"}),n.jsx(t,{size:"smaller",color:"blue"}),"You ",e.text.toLowerCase()," this!"]})},$q=`import { useToggle } from '@/src/index.jsx'

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

export default UseToggleExample`,_5=()=>n.jsx(w,{code:"useToggle",Component:Bq,Source:$q,expand:!0,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"useToggle"})," hook can be called to return an array containing the currently selected ",n.jsx("code",{children:"option"})," and a"," ",n.jsx("code",{children:"Toggle"})," component.  You can render the component multiple times and each instance will share the same state. Additional properties can be passed each time you render it."]})}),Aq=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),Mq=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Toggle"}),n.jsx(m5,{}),n.jsxs(Re,{tocName:"toggle",children:[n.jsx(te,{title:"Properties"}),n.jsx(y5,{}),n.jsx(S5,{}),n.jsx(j5,{}),n.jsx(b5,{}),n.jsx(C5,{}),n.jsx(g5,{}),n.jsx(x5,{}),n.jsx(v5,{}),n.jsx(te,{title:"Components"}),n.jsx(f5,{}),n.jsx(_5,{})]})]}),Pq=Object.freeze(Object.defineProperty({__proto__:null,default:Mq},Symbol.toStringTag,{value:"Module"})),Iq=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,zq="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",Fq="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",Hq=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,Uq=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,Vq=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Installation"}),n.jsx("h2",{children:"Adding to a Javascript Project"}),n.jsxs("p",{children:["Add ",n.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),n.jsx(qn,{code:Iq,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Importing the CSS"}),n.jsxs(Cr,{children:[n.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),n.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",n.jsx("code",{children:"node_modules"})," directory."]})]}),n.jsx(qn,{code:zq,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Importing the SCSS"}),n.jsxs(Cr,{children:[n.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),n.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),n.jsx(qn,{code:Fq,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Includes Badger CSS!"}),n.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",n.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),n.jsx(qn,{code:Hq,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),n.jsx(qn,{code:Uq,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),Wq=Object.freeze(Object.defineProperty({__proto__:null,default:Vq},Symbol.toStringTag,{value:"Module"})),Kq=()=>{const[e,t]=nd({badgers:3,ferrets:2,stoats:1});return n.jsx("table",{className:"wide celled shaded",children:n.jsxs("tbody",{children:[n.jsx(Xd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),n.jsx(Xd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),n.jsx(Xd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),n.jsxs("tr",{children:[n.jsx("th",{children:"Total"}),n.jsx("td",{className:"text-right",children:e.badgers+e.ferrets+e.stoats})]})]})})},Xd=({caption:e,value:t,setter:o})=>n.jsxs("tr",{children:[n.jsx("th",{children:n.jsxs("div",{className:"flex space",children:[e,n.jsx(sn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>o(r=>r-1)},{icon:"plus",onClick:()=>o(r=>r+1)}]})]})}),n.jsx("td",{className:"text-right",children:t})]}),Gq=`import React from 'react'
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

export default UseComplexStateExample`,w5=()=>n.jsxs(w,{title:"Setter Functions",Component:Kq,Source:Gq,children:[n.jsx("p",{children:"The setter functions can be passed a function which will receive the current value and should return the modified value."}),n.jsxs("p",{children:["In this example we modify the ",n.jsx("code",{children:"Row"})," component to add buttons to increment and decrement the current value."]})]}),Yq=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),Zq=()=>{const[e,t]=nd({badgers:3,ferrets:2,stoats:1},{onChange:o=>({...o,total:o.badgers+o.ferrets+o.stoats})});return n.jsx("table",{className:"wide celled shaded",children:n.jsxs("tbody",{children:[n.jsx(Jd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),n.jsx(Jd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),n.jsx(Jd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),n.jsxs("tr",{children:[n.jsx("th",{children:"Total"}),n.jsx("td",{className:"text-right",children:e.total})]})]})})},Jd=({caption:e,value:t,setter:o})=>n.jsxs("tr",{children:[n.jsx("th",{children:n.jsxs("div",{className:"flex space",children:[e,n.jsx(sn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>o(r=>r-1)},{icon:"plus",onClick:()=>o(r=>r+1)}]})]})}),n.jsx("td",{className:"text-right",children:t})]}),qq=`import React from 'react'
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

export default UseComplexStateExample`,T5=()=>n.jsxs(w,{code:"onChange",Component:Zq,Source:qq,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"useComplexState()"})," function can be passed a second argument with additional configuration options.  These can include an ",n.jsx("code",{children:"onChange"})," handler which will be called any time a state variable is modified.  It will be passed a copy of the modified state.  It can make any further changes to the state before returning it."]}),n.jsxs("p",{children:["In this example we provide an ",n.jsx("code",{children:"onChange"})," handler to calculate the total number of animals.  Note that the handler will be called when the state is initially defined.  This ensures that the ",n.jsx("code",{children:"total"})," state value is always defined, even before we click on any buttons to change a number."]})]}),Qq=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),E5=()=>{const[e,t]=nd({badgers:3,ferrets:2,stoats:1});return n.jsx("table",{className:"wide celled shaded",children:n.jsxs("tbody",{children:[n.jsx(eu,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),n.jsx(eu,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),n.jsx(eu,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),n.jsxs("tr",{children:[n.jsx("th",{children:"Total"}),n.jsx("td",{children:e.badgers+e.ferrets+e.stoats})]})]})})},eu=({caption:e,value:t,setter:o})=>n.jsxs("tr",{children:[n.jsx("th",{children:e}),n.jsx("td",{children:n.jsx("input",{type:"number",value:t,onChange:r=>o(parseInt(r.target.value))})})]}),Xq=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),Jq=`import { useComplexState } from '@/src/index.jsx'

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


export default UseComplexStateExample`,eQ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"useComplexState"}),n.jsxs("p",{className:"large",children:["This hook is a wrapper around ",n.jsx("code",{children:"React.useState"})," which can be used to maintain a complex state object."]}),n.jsxs("p",{children:["Call the"," ",n.jsx("code",{children:"useComplexState()"})," function passing it an object containing one or more key/values pairs.  It will return an array of"," ",n.jsx("code",{children:"[state, setters]"}),", where the ",n.jsx("code",{children:"state"})," contains the current state, starting with the values you supplied, and the"," ",n.jsx("code",{children:"setters"})," is an object containing setter functions for each item in the state."]}),n.jsxs("p",{children:["If you provide an item in the state called ",n.jsx("code",{children:"badgers"}),", for example, then the corresponding setter function will be called"," ",n.jsx("code",{children:"setBadgers"}),"."]}),n.jsx(Q,{Component:E5,code:Jq}),n.jsxs(Re,{tocName:"useComplexState",children:[n.jsx(w5,{}),n.jsx(T5,{})]})]}),tQ=Object.freeze(Object.defineProperty({__proto__:null,default:eQ},Symbol.toStringTag,{value:"Module"})),k5=()=>{const e=CD(),[t,o]=H.useState(0);return n.jsxs("div",{className:"flex space",children:[n.jsxs("div",{children:["Count: ",t,n.jsxs("div",{className:"smaller",children:["renderCount: ",e]})]}),n.jsx(sn,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>o(r=>r-1)},{icon:"plus",onClick:()=>o(r=>r+1)}]})]})},nQ=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),oQ=`import { useRenderCount, Buttons } from '@/src/index.jsx'

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


export default UseRenderCountExample`,rQ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"useRenderCount"}),n.jsx("p",{className:"large",children:"This simple hook is useful for debugging UI components.  It returns a counter which is incremented every time the component is rendered."}),n.jsx(Q,{Component:k5,code:oQ})]}),sQ=Object.freeze(Object.defineProperty({__proto__:null,default:rQ},Symbol.toStringTag,{value:"Module"})),aQ=e=>b.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},b.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),b.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),b.createElement("path",{className:"react-ui",d:"M407.024,205.209C406.398,205.396 405.414,205.584 404.069,205.771C402.725,205.959 401.334,206.053 399.896,206.053C398.52,206.053 397.285,205.959 396.191,205.771C395.097,205.584 394.175,205.209 393.425,204.646C392.674,204.083 392.096,203.317 391.69,202.348C391.283,201.379 391.08,200.113 391.08,198.55L391.08,170.414C391.08,168.976 391.346,167.741 391.877,166.71C392.409,165.678 393.175,164.756 394.175,163.943C395.175,163.13 396.41,162.395 397.879,161.739C399.349,161.082 400.928,160.504 402.616,160.004C404.304,159.504 406.054,159.113 407.868,158.832C409.681,158.55 411.494,158.41 413.307,158.41C416.308,158.41 418.684,158.988 420.435,160.145C422.186,161.301 423.061,163.193 423.061,165.819C423.061,166.694 422.936,167.554 422.686,168.398C422.436,169.242 422.123,170.008 421.748,170.695C420.435,170.695 419.091,170.758 417.715,170.883C416.34,171.008 414.995,171.196 413.682,171.446C412.369,171.696 411.135,171.962 409.978,172.243C408.821,172.524 407.836,172.853 407.024,173.228L407.024,205.209ZM451.947,206.803C448.258,206.803 444.835,206.287 441.677,205.256C438.52,204.224 435.769,202.676 433.424,200.613C431.08,198.55 429.235,195.955 427.891,192.829C426.547,189.703 425.875,186.045 425.875,181.856C425.875,177.729 426.547,174.181 427.891,171.211C429.235,168.241 431.001,165.803 433.19,163.896C435.378,161.989 437.879,160.582 440.693,159.676C443.506,158.769 446.382,158.316 449.321,158.316C452.635,158.316 455.651,158.816 458.371,159.816C461.091,160.817 463.436,162.192 465.405,163.943C467.375,165.694 468.907,167.788 470.001,170.227C471.095,172.665 471.642,175.322 471.642,178.198C471.642,180.324 471.048,181.95 469.86,183.075C468.672,184.201 467.015,184.92 464.889,185.232L441.724,188.702C442.412,190.766 443.819,192.313 445.945,193.345C448.07,194.376 450.509,194.892 453.26,194.892C455.823,194.892 458.246,194.564 460.528,193.907C462.81,193.251 464.671,192.485 466.109,191.61C467.109,192.235 467.953,193.11 468.641,194.236C469.329,195.361 469.672,196.549 469.672,197.8C469.672,200.613 468.359,202.708 465.733,204.083C463.733,205.146 461.482,205.865 458.981,206.24C456.48,206.615 454.135,206.803 451.947,206.803ZM449.321,169.945C447.82,169.945 446.523,170.195 445.429,170.695C444.335,171.196 443.444,171.837 442.756,172.618C442.068,173.4 441.552,174.275 441.208,175.244C440.865,176.213 440.661,177.198 440.599,178.198L456.636,175.572C456.449,174.322 455.761,173.071 454.573,171.821C453.385,170.57 451.634,169.945 449.321,169.945ZM498.09,158.316C501.466,158.316 504.545,158.66 507.327,159.347C510.11,160.035 512.486,161.082 514.455,162.489C516.425,163.896 517.941,165.678 519.004,167.835C520.067,169.992 520.598,172.54 520.598,175.479L520.598,196.487C520.598,198.112 520.145,199.441 519.238,200.472C518.332,201.504 517.253,202.395 516.003,203.145C511.939,205.584 506.218,206.803 498.84,206.803C495.526,206.803 492.541,206.49 489.883,205.865C487.226,205.24 484.944,204.302 483.037,203.052C481.13,201.801 479.661,200.207 478.629,198.268C477.597,196.33 477.082,194.079 477.082,191.516C477.082,187.202 478.363,183.888 480.927,181.575C483.49,179.261 487.46,177.823 492.838,177.26L505.123,175.947L505.123,175.291C505.123,173.478 504.326,172.18 502.732,171.399C501.138,170.617 498.84,170.227 495.839,170.227C493.463,170.227 491.149,170.477 488.899,170.977C486.648,171.477 484.616,172.102 482.802,172.853C481.99,172.29 481.302,171.43 480.739,170.273C480.176,169.117 479.895,167.913 479.895,166.663C479.895,165.037 480.286,163.74 481.067,162.771C481.849,161.801 483.053,160.973 484.678,160.285C486.491,159.598 488.633,159.097 491.103,158.785C493.572,158.472 495.901,158.316 498.09,158.316ZM498.84,195.174C499.903,195.174 501.075,195.064 502.357,194.845C503.639,194.626 504.592,194.329 505.217,193.954L505.217,186.451L498.465,187.014C496.714,187.139 495.276,187.514 494.151,188.14C493.025,188.765 492.462,189.703 492.462,190.953C492.462,192.204 492.947,193.22 493.916,194.001C494.885,194.783 496.526,195.174 498.84,195.174ZM556.049,170.883C554.486,170.883 553.001,171.133 551.594,171.633C550.188,172.134 548.968,172.868 547.937,173.837C546.905,174.806 546.077,176.01 545.451,177.448C544.826,178.886 544.513,180.574 544.513,182.512C544.513,186.389 545.623,189.296 547.843,191.235C550.062,193.173 552.767,194.142 555.955,194.142C557.831,194.142 559.457,193.923 560.832,193.485C562.208,193.048 563.427,192.579 564.49,192.079C565.74,192.954 566.678,193.907 567.303,194.939C567.929,195.971 568.241,197.206 568.241,198.644C568.241,201.207 567.022,203.192 564.584,204.599C562.145,206.006 558.769,206.709 554.455,206.709C550.516,206.709 546.952,206.131 543.763,204.974C540.574,203.817 537.839,202.192 535.557,200.097C533.275,198.003 531.509,195.486 530.258,192.548C529.008,189.609 528.382,186.358 528.382,182.794C528.382,178.667 529.054,175.057 530.399,171.962C531.743,168.867 533.572,166.319 535.885,164.318C538.199,162.317 540.871,160.817 543.904,159.816C546.936,158.816 550.141,158.316 553.517,158.316C558.019,158.316 561.489,159.129 563.927,160.754C566.366,162.38 567.585,164.474 567.585,167.038C567.585,168.226 567.303,169.336 566.741,170.367C566.178,171.399 565.522,172.29 564.771,173.04C563.708,172.54 562.427,172.055 560.926,171.586C559.425,171.118 557.8,170.883 556.049,170.883ZM592.157,189.64C592.157,191.266 592.672,192.423 593.704,193.11C594.736,193.798 596.189,194.142 598.065,194.142C599.003,194.142 599.972,194.064 600.973,193.907C601.973,193.751 602.848,193.548 603.599,193.298C604.161,193.986 604.646,194.752 605.052,195.596C605.459,196.44 605.662,197.456 605.662,198.644C605.662,201.02 604.771,202.958 602.989,204.458C601.207,205.959 598.065,206.709 593.563,206.709C588.061,206.709 583.825,205.459 580.855,202.958C577.886,200.457 576.401,196.393 576.401,190.766L576.401,150.625C577.088,150.438 578.073,150.235 579.355,150.016C580.637,149.797 581.997,149.687 583.435,149.687C586.186,149.687 588.327,150.172 589.859,151.141C591.391,152.11 592.157,154.158 592.157,157.284L592.157,163.286L604.443,163.286C604.818,163.974 605.177,164.834 605.521,165.866C605.865,166.897 606.037,168.038 606.037,169.289C606.037,171.477 605.552,173.056 604.583,174.025C603.614,174.994 602.317,175.479 600.691,175.479L592.157,175.479L592.157,189.64ZM684.067,184.294C684.067,187.671 683.488,190.75 682.332,193.532C681.175,196.315 679.502,198.691 677.314,200.66C675.126,202.63 672.469,204.146 669.342,205.209C666.216,206.272 662.684,206.803 658.745,206.803C654.806,206.803 651.273,206.272 648.147,205.209C645.021,204.146 642.363,202.63 640.175,200.66C637.987,198.691 636.314,196.315 635.157,193.532C634.001,190.75 633.422,187.671 633.422,184.294L633.422,148.468C634.11,148.343 635.204,148.171 636.705,147.952C638.205,147.734 639.644,147.624 641.019,147.624C642.457,147.624 643.723,147.734 644.817,147.952C645.912,148.171 646.834,148.562 647.584,149.125C648.334,149.687 648.897,150.469 649.272,151.469C649.647,152.47 649.835,153.783 649.835,155.408L649.835,184.013C649.835,187.014 650.663,189.359 652.32,191.047C653.977,192.735 656.119,193.579 658.745,193.579C661.433,193.579 663.59,192.735 665.216,191.047C666.841,189.359 667.654,187.014 667.654,184.013L667.654,148.468C668.342,148.343 669.436,148.171 670.937,147.952C672.437,147.734 673.875,147.624 675.251,147.624C676.689,147.624 677.955,147.734 679.049,147.952C680.143,148.171 681.066,148.562 681.816,149.125C682.566,149.687 683.129,150.469 683.504,151.469C683.879,152.47 684.067,153.783 684.067,155.408L684.067,184.294ZM712.39,204.927C711.702,205.115 710.624,205.302 709.154,205.49C707.685,205.678 706.231,205.771 704.793,205.771C703.355,205.771 702.089,205.662 700.995,205.443C699.901,205.224 698.979,204.833 698.228,204.271C697.478,203.708 696.915,202.927 696.54,201.926C696.165,200.926 695.977,199.613 695.977,197.987L695.977,148.468C696.665,148.343 697.759,148.171 699.26,147.952C700.761,147.734 702.199,147.624 703.574,147.624C705.012,147.624 706.278,147.734 707.372,147.952C708.467,148.171 709.389,148.562 710.139,149.125C710.889,149.687 711.452,150.469 711.827,151.469C712.202,152.47 712.39,153.783 712.39,155.408L712.39,204.927Z"}),b.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"})),lQ=e=>b.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},b.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),b.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),b.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),b.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),b.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),b.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),b.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),iQ=()=>n.jsx("div",{className:"flow",children:n.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[n.jsx(aQ,{className:"brui-logo"}),n.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),n.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),n.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),n.jsx("div",{className:"text-center",children:n.jsx(lQ,{className:"width-10rem"})}),n.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),n.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),n.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),n.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),n.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),n.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),cQ=Object.freeze(Object.defineProperty({__proto__:null,default:iQ},Symbol.toStringTag,{value:"Module"})),dQ=()=>{const e={Select:{placeholder:"Pick one"},Button:{color:"green",iconRight:"check"},Spinner:{color:"violet",icon:"star"}};return n.jsxs(n3.Provider,{...e,children:[n.jsx(cn,{options:[{value:10,text:"ten"},{value:11,text:"eleven"}]}),n.jsxs("div",{className:"flex space middle mar-t-2",children:[n.jsx(L,{text:"OK"}),n.jsx(G,{size:"larger"}),n.jsx(L,{text:"Not OK",color:"red",iconRight:"thumb-down"})]})]})},uQ=`import { Theme, Select, Button, Spinner } from '@/src/index.jsx'

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

export default BorderClassExamples`,pQ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Theming"}),n.jsxs("p",{className:"large",children:["The components can be themed using"," ",n.jsx("a",{href:"https://abw.github.io/react-one-louder/",children:"react-one-louder"}),"."]}),n.jsxs("p",{children:["This allows you to define a theme that provides default properties for the various components in the library. Import the ",n.jsx("code",{children:"Theme"})," component and define a"," ",n.jsx("code",{children:"Theme.Provider"})," around your app or a section of it. Pass it your theme configuration as its properties."]}),n.jsxs("p",{children:["Any components rendered inside the provider context will use the default properties that you have defined.  In the example below we set the default ",n.jsx("code",{children:"placeholder"})," for the ",n.jsx("code",{children:"Select"})," ","component, and default ",n.jsx("code",{children:"color"})," and ",n.jsx("code",{children:"iconRight"})," properties for the ",n.jsx("code",{children:"Button"})," component. These are only default values and can be overridden by providing a component with specific values, as shown for the second button in the example."]}),n.jsx(Q,{Component:dQ,code:uQ,expand:!0})]}),hQ=Object.freeze(Object.defineProperty({__proto__:null,default:pQ},Symbol.toStringTag,{value:"Module"})),tu=({border:e})=>{const t=Ko(e);return n.jsx("div",{className:t,children:t})},mQ=()=>n.jsxs("div",{className:"grid-1 gap-2",children:[n.jsx(tu,{}),n.jsx(tu,{border:!0}),n.jsx(tu,{border:2})]}),fQ=`import { borderClass } from '@/src/index.jsx'

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

export default BorderClassExamples`,R5=()=>n.jsx(w,{code:"borderClass",Component:mQ,Source:fQ,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"borderClass"})," utility function can be used to construct a CSS class for adding a border.  If the argument is a true value then it will return the ",n.jsx("code",{children:"border"})," CSS class.  If the value is a number then it will add the corresponding ",n.jsx("code",{children:"bdw-N"})," class to set the border width."]})}),xQ=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),gQ=()=>n.jsxs("div",{children:[n.jsx("div",{children:ie("foo","bar","baz")}),n.jsx("div",{children:ie("foo",null,"bar",void 0,"baz")}),n.jsx("div",{children:ie("foo",{active:!1,example:!0})})]}),bQ=`import { classes } from '@/src/index.jsx'

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

export default ClassesExamples`,N5=()=>n.jsxs(w,{code:"classes",Component:gQ,Source:bQ,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"classes"})," utility function can be used to construct a single CSS class string from various input values."]}),n.jsx("p",{children:"Any null or undefined values will be ignored. If any argument is an object then the keys in the object will be included if the corresponding value is truthy."})]}),vQ=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),ia=({color:e})=>{const t=Hc(e);return n.jsxs("div",{className:`pad-4 border bdc-50 ${t}`,children:["colorClass: ",t]})},jQ=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(ia,{}),n.jsx(ia,{color:"red"}),n.jsx(ia,{color:"red-50"}),n.jsx(ia,{color:"red-20-80"}),n.jsx(ia,{color:"red-20-80-80-20"})]}),yQ=`import { colorClass } from '@/src/index.jsx'

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

export default ColorClassExamples`,O5=()=>n.jsx(w,{code:"colorClass",Component:jQ,Source:yQ,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"colorClass"})," utility function can be used to construct a CSS class for defining colors.  The format for the argument is a color range name optionally followed by one to four color stop numbers, separated by hyphens.  The first number is the foreground color stop, used to add an ",n.jsx("code",{children:"fgc-N"})," CSS class. The second in the background color stop, adding a ",n.jsx("code",{children:"bgc-N"})," class.  The third and fourth numbers are the foreground and background color stops in dark mode, adding "," ",n.jsx("code",{children:"fgd-N"})," and ",n.jsx("code",{children:"bgd-N"})," classes respectively."]})}),SQ=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),nu=({gap:e})=>n.jsx("div",{className:ie("tiles",g3(e)),children:["A","B","C","D","E","F","G","H"].map(t=>n.jsx("div",{className:"surface-3 pad-2 border bdr-1",children:t},t))}),CQ=()=>n.jsxs("div",{className:"grid-1 gap-6",children:[n.jsx(nu,{gap:2}),n.jsx(nu,{gap:[2,4]}),n.jsx(nu,{gap:"3 1"})]}),_Q=`import { classes, gapClass } from '@/src/index.jsx'

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

export default GapClassExamples`,D5=()=>n.jsx(w,{code:"gapClass",Component:CQ,Source:_Q,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"gapClass"})," utility function can be used to construct a CSS class for adding gaps between element, e.g. when using flex or grid layout.  A single value can be provided and will be used for both vertical and horizontal gaps.  Or two values can be provided, either as an array or whitespace delimited string, giving different gaps in the vertical and horizontal directions.  The values are multiples of 0.25rem."]})}),wQ=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),Hr=({margin:e})=>{const t=x3(e);return n.jsx("div",{className:"bgc-50",children:n.jsxs("div",{className:`border bgc-90 ${t}`,children:["marginClass: ",t]})})},TQ=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(Hr,{}),n.jsx(Hr,{margin:!0}),n.jsx(Hr,{margin:2}),n.jsx(Hr,{margin:"h-4"}),n.jsx(Hr,{margin:"2 4"}),n.jsx(Hr,{margin:"1 2 3 4"})]}),EQ=`import { marginClass } from '@/src/index.jsx'

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

export default MarginClassExamples`,L5=()=>n.jsx(w,{code:"marginClass",Component:TQ,Source:EQ,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"marginClass"})," utility function can be used to construct a CSS class for adding padding.  It works in the same way as ",n.jsx("code",{children:"paddingClass"}),"."]})}),kQ=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),Ur=({padding:e})=>{const t=f3(e);return n.jsxs("div",{className:`border ${t}`,children:["paddingClass: ",t]})},RQ=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(Ur,{}),n.jsx(Ur,{padding:!0}),n.jsx(Ur,{padding:2}),n.jsx(Ur,{padding:"h-4"}),n.jsx(Ur,{padding:"2 4"}),n.jsx(Ur,{padding:"1 2 3 4"})]}),NQ=`import { paddingClass } from '@/src/index.jsx'

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

export default PaddingClassExamples`,B5=()=>n.jsxs(w,{code:"paddingClass",Component:RQ,Source:NQ,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"paddingClass"})," utility function can be used to construct a CSS class for adding padding.  If the value is true then the"," ",n.jsx("code",{children:"pad"})," CSS class will be returned, adding a single unit (0.25rem) of padding to all sides of the element."]}),n.jsxs("p",{children:["If the value contains two whitespace delimited values then they are assumed to be vertical and horizontal padding values and a class of the form ",n.jsx("code",{children:"pad-v-N pad-h-N"})," will be returned."]}),n.jsxs("p",{children:["If the value contains four whitespace delimited values then they are assumed to be padding values for the top, right, bottom and left edges. A CSS class of the form ",n.jsx("code",{children:"pad-t-N pad-r-N pad-b-N pad-l-N"})," will be returned."]}),n.jsxs("p",{children:["In any other case the value will be prepended by ",n.jsx("code",{children:"pad-"}),". A null or undefine value will return nothing."]})]}),OQ=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),bi=({radius:e})=>{const t=Or(e);return n.jsxs("div",{className:`border pad-4 ${t}`,children:["radiusClass: ",t]})},DQ=()=>n.jsxs("div",{className:"grid-1 gap-2",children:[n.jsx(bi,{}),n.jsx(bi,{radius:1}),n.jsx(bi,{radius:2}),n.jsx(bi,{radius:4})]}),LQ=`import { radiusClass } from '@/src/index.jsx'

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

export default RadiusClassExamples`,$5=()=>n.jsx(w,{code:"radiusClass",Component:DQ,Source:LQ,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"radiusClass"})," utility function can be used to construct a CSS class for adding a border radius.  If the value is a number then it will return the corresponding ",n.jsx("code",{children:"bdr-N"})," class to set the border radius."]})}),BQ=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),vi=({shadow:e})=>{const t=Nr(e);return n.jsxs("div",{className:`border pad-4 ${t}`,children:["shadowClass: ",t]})},$Q=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(vi,{}),n.jsx(vi,{shadow:1}),n.jsx(vi,{shadow:2}),n.jsx(vi,{shadow:4})]}),AQ=`import { shadowClass } from '@/src/index.jsx'

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

export default ShadowClassExamples`,A5=()=>n.jsx(w,{code:"shadowClass",Component:$Q,Source:AQ,children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"shadowClass"})," utility function can be used to construct a CSS class for adding a box shadow.  If the value is a number then it will return the corresponding ",n.jsx("code",{children:"shadow-N"})," class to set the box shadow."]})}),MQ=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),ji=e=>{const t=_w(e);return n.jsxs("div",{...t,children:["styleProps: ",JSON.stringify(t)]})},PQ=()=>n.jsxs("div",{className:"grid-1 gap-4",children:[n.jsx(ji,{}),n.jsx(ji,{size:"large"}),n.jsx(ji,{color:"red-50"}),n.jsx(ji,{className:"my-special-class",color:"red",border:!0,radius:2,shadow:2,padding:"2 4"})]}),IQ=`import { styleProps } from '@/src/index.jsx'

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

export default StylePropsExamples`,M5=()=>n.jsxs(w,{code:"styleProps",Component:PQ,Source:IQ,children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"styleProps"})," utility function can be used to extract any of the above style properties and generate the corresponding CSS class as the ",n.jsx("code",{children:"className"})," property.  Any other properties will be passed through."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"padding"})," and ",n.jsx("code",{children:"margin"})," properties may be abbreviated to ",n.jsx("code",{children:"pad"})," and ",n.jsx("code",{children:"mar"})," respectively."]})]}),zQ=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),FQ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"CSS Classes"}),n.jsxs(Re,{tocName:"classes",children:[n.jsx(N5,{}),n.jsx(R5,{}),n.jsx($5,{}),n.jsx(A5,{}),n.jsx(O5,{}),n.jsx(B5,{}),n.jsx(L5,{}),n.jsx(D5,{}),n.jsx(M5,{})]})]}),HQ=Object.freeze(Object.defineProperty({__proto__:null,default:FQ},Symbol.toStringTag,{value:"Module"})),UQ=()=>{const e=Wc("unique-key"),[t,o]=H.useState(e.get("form-values")),[r,s]=H.useState(),a=c=>{s(c),Un(3e3).then(()=>s(null))},l=c=>(e.set("form-values",c),a("Form values have been stored in local storage"),{ok:!0}),i=()=>{e.delete("form-values"),o(null),a("Form values have been removed from local storage")};return n.jsxs("div",{children:[n.jsxs(kn,{values:t,onSubmit:l,onReset:i,children:[n.jsx(Je,{name:"name",label:"Your name"}),n.jsx(Je,{name:"email",label:"Your email address"}),n.jsxs("div",{className:"flex space",children:[n.jsx(_0,{color:"grey outline",text:"Clear",iconRight:"cross"}),n.jsx(Rl,{color:"green",text:"Save",iconRight:"check"})]})]}),r&&n.jsx(as,{text:r,className:"mar-t-4"})]})},VQ=`import { Storage, Form, Field, Reset, Submit, Success } from '@/src/index.jsx'

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

export default StorageExample`,P5=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{className:"large",children:["The ",n.jsx("code",{children:"Storage"})," utility can be used to manage local storage to persist UI options or other data."]}),n.jsxs("p",{children:["Call the ",n.jsx("code",{children:"Storage"})," function with a unique key to create a local store.  Then call the ",n.jsx("code",{children:"get"})," method on that object to fetch an item from the store, ",n.jsx("code",{children:"set"})," to set the value for an item or ",n.jsx("code",{children:"delete"})," to delete an item from the store."]}),n.jsx("p",{children:"Store values can be complex data which will be automatically converted to and from JSON."}),n.jsx("p",{children:"Enter some details in the form below and click on the save button. The form values will then be stored in local storage.  Reload the browser page and you should see the values persist."}),n.jsx(Q,{Component:UQ,code:VQ,expand:!0})]}),WQ=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),KQ=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Storage"}),n.jsx(P5,{})]}),GQ=Object.freeze(Object.defineProperty({__proto__:null,default:KQ},Symbol.toStringTag,{value:"Module"})),I5=({path:e,onClick:t,width:o=512,height:r=512,style:s,className:a="night-and-day--icon",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:a,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${o} ${r}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),YQ=e=>n.jsx(I5,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),z5=({Icon:e,caption:t,onClick:o,iconClass:r,iconStyle:s,captionStyle:a,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>n.jsxs("div",{className:l,onClick:o,style:c,children:[n.jsx(e,{style:s,className:r}),!!t&&n.jsx("div",{className:i,style:a,children:t})]}),ZQ=e=>{const{setDark:t}=Bl();return n.jsx(z5,{Icon:YQ,onClick:t,...e})},qQ=e=>n.jsx(I5,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),QQ=e=>{const{setLight:t}=Bl();return n.jsx(z5,{Icon:qQ,onClick:t,...e})},XQ=({sunrise:e={},nightfall:t={}})=>{const{isLight:o,setLight:r,setDark:s}=Bl();return o?n.jsx(QQ,{onClick:s,...e}):n.jsx(ZQ,{onClick:r,...t})},F5=b.createContext(),Bl=()=>b.useContext(F5),yi="dark",ou="light",JQ="(prefers-color-scheme: dark)",ru=()=>!1,eX=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,o)=>e[t]=o,removeItem:t=>delete e[t]}},tX=()=>({matches:ru,addEventListener:ru,removeEventListener:ru}),H5=typeof window<"u",su=H5&&window.localStorage?window.localStorage:eX(),nX=H5&&window.matchMedia?e=>window.matchMedia(e):tX,bp=nX(JQ),oX=()=>bp.matches,rX=e=>e.split(" "),r1=(e,t="")=>`${e} ${t}`,sX=({storageKey:e,defaultVariant:t,children:o})=>{const r=e?su.getItem(e):null,[s,a=""]=r?rX(r):[oX(),null],[l,i]=b.useState(s===yi),[c,d]=b.useState(a||t),u=y=>{i(y),e&&su.setItem(e,r1(y?yi:ou,c))},p=y=>{d(y),e&&su.setItem(e,r1(l?yi:ou,y))},f=y=>u(y.matches);b.useEffect(()=>(bp.addEventListener("change",f),()=>bp.removeEventListener("change",f)),[]);const v={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?yi:ou,variant:c,setVariant:p};return n.jsx(F5.Provider,{value:v,children:o})},U5="1.0.4",aX="2024-04-13",s1="sidebar",lX="no-sidebar",iX=()=>{const{variant:e,setVariant:t}=Bl();return n.jsx("header",{children:n.jsxs("nav",{children:[n.jsxs("div",{children:[n.jsx(re,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===s1?lX:s1)}),n.jsx(wn,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),n.jsxs("span",{className:"small mar-l-2",children:["v",U5]})]}),n.jsxs("div",{className:"flex middle",children:[n.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:n.jsx(re,{name:"github",className:"mar-r-4"})}),n.jsx(XQ,{})]})]})})},cX=()=>n.jsx("footer",{children:n.jsxs("div",{className:"flex space middle",children:[n.jsx("div",{className:"large",children:"Badger React UI"}),n.jsxs("div",{className:"text-center small",children:["by ",n.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),n.jsxs("div",{className:"text-right",children:["v",U5,n.jsx("br",{}),aX]})]})}),dX=({toc:e,contentRef:t})=>n.jsx("ul",{className:"toc",children:Object.entries(e).map(([o,r])=>n.jsx("li",{onClick:()=>{var s,a;(a=t.current)==null||a.scrollTo({top:((s=r.ref.current)==null?void 0:s.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?n.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?n.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},o))}),uX=Nl.Consumer(dX),pX=({title:e,path:t,items:o,tocs:r})=>{const s=Ll(),a=t&&s.pathname.slice(0,t.length)===t;return n.jsxs("details",{className:"menu",open:a,children:[n.jsx("summary",{children:e}),n.jsx("ul",{children:o.map(l=>{const i=s.pathname===l.to;return n.jsxs("li",{children:[n.jsx(wn,{className:"item",...l}),!!l.tocName&&i&&r[l.tocName]&&n.jsx(uX,{toc:r[l.tocName]})]},l.to)})})]})},ca=Nl.Consumer(pX),hX={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},mX={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/badge",text:"Badge",tocName:"badge"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"},{to:"/components/table",text:"Table",tocName:"table"},{to:"/components/tabset",text:"Tabset",tocName:"tabset"},{to:"/components/tiles",text:"Tiles",tocName:"tiles"},{to:"/components/toggle",text:"Toggle",tocName:"toggle"}]},fX={title:"Utilities",path:"/utilities",items:[{to:"/utilities/classes",text:"CSS Classes",tocName:"classes"},{to:"/utilities/storage",text:"Storage",tocName:"storage"}]},xX={title:"Hooks",path:"/hooks",items:[{to:"/hooks/useComplexState",text:"useComplexState",tocName:"useComplexState"},{to:"/hooks/useRenderCount",text:"useRenderCount",tocName:"useRenderCount"}]},gX={title:"Theming",path:"/theming",items:[{to:"/theming",text:"It's One Louder",tocName:"theming"}]},bX=()=>n.jsxs(n.Fragment,{children:[n.jsx(ca,{...hX}),n.jsx(ca,{...mX}),n.jsx(ca,{...fX}),n.jsx(ca,{...xX}),n.jsx(ca,{...gX})]});function vX(){const{pathname:e}=Us();return b.useEffect(()=>jX(document.getElementById("content")),[e]),null}function jX(e,{top:t=0,left:o=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:o,behavior:r})}const yX=({contentRef:e})=>{const{theme:t,variant:o}=Bl();return n.jsxs("div",{id:"site",className:o,"data-theme":t,children:[n.jsx(iX,{}),n.jsxs("div",{id:"app",children:[n.jsx(vX,{}),n.jsx("aside",{children:n.jsx(bX,{})}),n.jsx("main",{id:"content",ref:e,children:n.jsx(OM,{})})]}),n.jsx(cX,{})]})},SX=Nl.Consumer(yX),CX=/\/_layout$/,_X=/\/_examples\//,wX=TX(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":zD,"../pages/components/alert/_examples/Error/index.jsx":KD,"../pages/components/alert/_examples/Info/index.jsx":ZD,"../pages/components/alert/_examples/Success/index.jsx":XD,"../pages/components/alert/_examples/Warning/index.jsx":tL,"../pages/components/alert/_examples/border/index.jsx":rL,"../pages/components/alert/_examples/className/index.jsx":lL,"../pages/components/alert/_examples/color/index.jsx":dL,"../pages/components/alert/_examples/dismissable/index.jsx":hL,"../pages/components/alert/_examples/headIcon/index.jsx":xL,"../pages/components/alert/_examples/headline/index.jsx":vL,"../pages/components/alert/_examples/icon/index.jsx":SL,"../pages/components/alert/_examples/onDismiss/index.jsx":wL,"../pages/components/alert/_examples/radius/index.jsx":kL,"../pages/components/alert/_examples/revealable/index.jsx":OL,"../pages/components/alert/_examples/revealed/index.jsx":BL,"../pages/components/alert/_examples/shadow/index.jsx":ML,"../pages/components/alert/_examples/size/index.jsx":zL,"../pages/components/alert/_examples/stripe/index.jsx":UL,"../pages/components/alert/_examples/text/index.jsx":KL,"../pages/components/alert/_examples/title/index.jsx":ZL,"../pages/components/alert/_examples/type/index.jsx":XL,"../pages/components/alert/index.jsx":tB,"../pages/components/badge/_examples/Badge/index.jsx":rB,"../pages/components/badge/_examples/Content/index.jsx":lB,"../pages/components/badge/_examples/border/index.jsx":dB,"../pages/components/badge/_examples/className/index.jsx":hB,"../pages/components/badge/_examples/color/index.jsx":xB,"../pages/components/badge/_examples/icon/index.jsx":vB,"../pages/components/badge/_examples/iconLeft/index.jsx":SB,"../pages/components/badge/_examples/iconRight/index.jsx":wB,"../pages/components/badge/_examples/radius/index.jsx":kB,"../pages/components/badge/_examples/shadow/index.jsx":OB,"../pages/components/badge/_examples/size/index.jsx":BB,"../pages/components/badge/_examples/tag/index.jsx":MB,"../pages/components/badge/_examples/text/index.jsx":zB,"../pages/components/badge/_examples/tooltip/index.jsx":UB,"../pages/components/badge/index.jsx":WB,"../pages/components/button/_examples/Button/index.jsx":YB,"../pages/components/button/_examples/Content/index.jsx":QB,"../pages/components/button/_examples/bare/index.jsx":e$,"../pages/components/button/_examples/border/index.jsx":o$,"../pages/components/button/_examples/bright/index.jsx":a$,"../pages/components/button/_examples/className/index.jsx":c$,"../pages/components/button/_examples/color/index.jsx":p$,"../pages/components/button/_examples/dark/index.jsx":f$,"../pages/components/button/_examples/disabled/index.jsx":b$,"../pages/components/button/_examples/icon/index.jsx":y$,"../pages/components/button/_examples/iconLeft/index.jsx":_$,"../pages/components/button/_examples/iconRight/index.jsx":E$,"../pages/components/button/_examples/label/index.jsx":N$,"../pages/components/button/_examples/onClick/index.jsx":L$,"../pages/components/button/_examples/outline/index.jsx":A$,"../pages/components/button/_examples/radius/index.jsx":I$,"../pages/components/button/_examples/shaded/index.jsx":H$,"../pages/components/button/_examples/shadow/index.jsx":W$,"../pages/components/button/_examples/size/index.jsx":Y$,"../pages/components/button/_examples/text/index.jsx":Q$,"../pages/components/button/_examples/tooltip/index.jsx":eA,"../pages/components/button/_examples/type/index.jsx":oA,"../pages/components/button/index.jsx":sA,"../pages/components/buttons/_examples/Button/index.jsx":cA,"../pages/components/buttons/_examples/Buttons/index.jsx":pA,"../pages/components/buttons/_examples/buttonClass/index.jsx":fA,"../pages/components/buttons/_examples/buttonsProp/index.jsx":bA,"../pages/components/buttons/_examples/className/index.jsx":yA,"../pages/components/buttons/_examples/outline/index.jsx":nP,"../pages/components/buttons/index.jsx":rP,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":lP,"../pages/components/checkbox/_examples/Overview/index.jsx":dP,"../pages/components/checkbox/_examples/border/index.jsx":hP,"../pages/components/checkbox/_examples/checked/index.jsx":xP,"../pages/components/checkbox/_examples/checkedText/index.jsx":vP,"../pages/components/checkbox/_examples/className/index.jsx":SP,"../pages/components/checkbox/_examples/disabled/index.jsx":wP,"../pages/components/checkbox/_examples/onChange/index.jsx":kP,"../pages/components/checkbox/_examples/text/index.jsx":OP,"../pages/components/checkbox/index.jsx":LP,"../pages/components/confirm/_examples/Overview/index.jsx":AP,"../pages/components/confirm/_examples/cancel/index.jsx":IP,"../pages/components/confirm/_examples/cancelProps/index.jsx":HP,"../pages/components/confirm/_examples/className/index.jsx":WP,"../pages/components/confirm/_examples/color/index.jsx":YP,"../pages/components/confirm/_examples/confirm/index.jsx":QP,"../pages/components/confirm/_examples/confirmProps/index.jsx":eI,"../pages/components/confirm/_examples/iconRight/index.jsx":oI,"../pages/components/confirm/_examples/modal/index.jsx":aI,"../pages/components/confirm/_examples/onClick/index.jsx":cI,"../pages/components/confirm/_examples/text/index.jsx":pI,"../pages/components/confirm/index.jsx":mI,"../pages/components/datatable/_examples/Datatable/index.jsx":gI,"../pages/components/datatable/_examples/color/index.jsx":jI,"../pages/components/datatable/_examples/columns/className/index.jsx":_I,"../pages/components/datatable/_examples/columns/display/index.jsx":EI,"../pages/components/datatable/_examples/columns/index.jsx":PI,"../pages/components/datatable/_examples/columns/label/index.jsx":FI,"../pages/components/datatable/_examples/columns/type/index.jsx":VI,"../pages/components/datatable/_examples/onRowClick/index.jsx":GI,"../pages/components/datatable/_examples/pager/index.jsx":qI,"../pages/components/datatable/_examples/rows/index.jsx":XI,"../pages/components/datatable/_examples/storageKey/index.jsx":tz,"../pages/components/datatable/index.jsx":oz,"../pages/components/details/_examples/Details/index.jsx":az,"../pages/components/details/_examples/border/index.jsx":cz,"../pages/components/details/_examples/color/index.jsx":pz,"../pages/components/details/_examples/content/index.jsx":fz,"../pages/components/details/_examples/lined/index.jsx":bz,"../pages/components/details/_examples/open/index.jsx":yz,"../pages/components/details/_examples/radius/index.jsx":_z,"../pages/components/details/_examples/shaded/index.jsx":Ez,"../pages/components/details/_examples/shadow/index.jsx":Nz,"../pages/components/details/_examples/summary/index.jsx":Lz,"../pages/components/details/index.jsx":$z,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":Pz,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":Fz,"../pages/components/dropdown-menu/_examples/options/index.jsx":Xz,"../pages/components/dropdown-menu/index.jsx":eF,"../pages/components/dropdown/_examples/Dropdown/index.jsx":oF,"../pages/components/dropdown/_examples/content/index.jsx":aF,"../pages/components/dropdown/_examples/iconLeft/index.jsx":cF,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":pF,"../pages/components/dropdown/_examples/iconRight/index.jsx":fF,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":bF,"../pages/components/dropdown/_examples/openOnHover/index.jsx":yF,"../pages/components/dropdown/_examples/right/index.jsx":_F,"../pages/components/dropdown/_examples/text/index.jsx":EF,"../pages/components/dropdown/_examples/wide/index.jsx":NF,"../pages/components/dropdown/index.jsx":DF,"../pages/components/form/_examples/CancelSubmit/index.jsx":AF,"../pages/components/form/_examples/ResetSubmit/index.jsx":zF,"../pages/components/form/_examples/search/index.jsx":ZF,"../pages/components/form/_examples/submitting/custom.jsx":QF,"../pages/components/form/_examples/submitting/defaults.jsx":JF,"../pages/components/form/_examples/submitting/index.jsx":nH,"../pages/components/form/_examples/uiselect/index.jsx":cH,"../pages/components/form/index.jsx":gH,"../pages/components/icon/_examples/Icon/index.jsx":wH,"../pages/components/icon/_examples/IconLibrary/index.jsx":TH,"../pages/components/icon/_examples/className/index.jsx":RH,"../pages/components/icon/_examples/color/index.jsx":DH,"../pages/components/icon/_examples/name/index.jsx":$H,"../pages/components/icon/_examples/path/index.jsx":PH,"../pages/components/icon/_examples/size/index.jsx":FH,"../pages/components/icon/index.jsx":UH,"../pages/components/modal/_examples/Modal/index.jsx":KH,"../pages/components/modal/_examples/ModalState/index.jsx":ZH,"../pages/components/modal/_examples/className/index.jsx":XH,"../pages/components/modal/_examples/close/index.jsx":tU,"../pages/components/modal/_examples/closeIcon/index.jsx":rU,"../pages/components/modal/_examples/footer/index.jsx":lU,"../pages/components/modal/_examples/header/index.jsx":dU,"../pages/components/modal/_examples/text/index.jsx":hU,"../pages/components/modal/_examples/title/index.jsx":xU,"../pages/components/modal/index.jsx":bU,"../pages/components/overlay/_examples/Overlay/index.jsx":yU,"../pages/components/overlay/_examples/OverlayState/index.jsx":_U,"../pages/components/overlay/_examples/className/index.jsx":kU,"../pages/components/overlay/_examples/custom/index.jsx":OU,"../pages/components/overlay/_examples/fixed/index.jsx":BU,"../pages/components/overlay/_examples/theme/index.jsx":IU,"../pages/components/overlay/index.jsx":FU,"../pages/components/pager/_examples/Context/index.jsx":KU,"../pages/components/pager/_examples/Pager/index.jsx":ZU,"../pages/components/pager/_examples/className/index.jsx":XU,"../pages/components/pager/_examples/color/index.jsx":tV,"../pages/components/pager/_examples/icons/index.jsx":rV,"../pages/components/pager/_examples/nextIcon/index.jsx":iV,"../pages/components/pager/_examples/showFirstLast/index.jsx":uV,"../pages/components/pager/_examples/size/index.jsx":mV,"../pages/components/pager/index.jsx":xV,"../pages/components/radio/_examples/Overview/index.jsx":vV,"../pages/components/radio/_examples/border/index.jsx":SV,"../pages/components/radio/_examples/className/index.jsx":wV,"../pages/components/radio/_examples/disabled/index.jsx":kV,"../pages/components/radio/_examples/inline/index.jsx":OV,"../pages/components/radio/_examples/name/index.jsx":BV,"../pages/components/radio/_examples/onChange/index.jsx":MV,"../pages/components/radio/_examples/options/index.jsx":zV,"../pages/components/radio/_examples/value/index.jsx":UV,"../pages/components/radio/index.jsx":WV,"../pages/components/search/_examples/Search/index.jsx":ZV,"../pages/components/search/_examples/clear/index.jsx":JV,"../pages/components/search/_examples/displayResult/index.jsx":oW,"../pages/components/search/_examples/displayValue/index.jsx":lW,"../pages/components/search/_examples/onSearch/index.jsx":uW,"../pages/components/search/_examples/onSelect/index.jsx":fW,"../pages/components/search/_examples/reset/index.jsx":vW,"../pages/components/search/index.jsx":yW,"../pages/components/select/_examples/Select/index.jsx":wW,"../pages/components/select/_examples/displayOption/index.jsx":RW,"../pages/components/select/_examples/displayValue/index.jsx":LW,"../pages/components/select/_examples/options/index.jsx":MW,"../pages/components/select/_examples/search/index.jsx":VW,"../pages/components/select/_examples/searchOptions/index.jsx":qW,"../pages/components/select/_examples/validOption/index.jsx":eK,"../pages/components/select/_examples/value/index.jsx":lK,"../pages/components/select/index.jsx":cK,"../pages/components/sortable/_examples/Horizontal/index.jsx":pK,"../pages/components/sortable/_examples/MakeSortable/index.jsx":fK,"../pages/components/sortable/_examples/Sortable/index.jsx":bK,"../pages/components/sortable/_examples/Vertical/index.jsx":yK,"../pages/components/sortable/index.jsx":CK,"../pages/components/spinner/_examples/Spinner/index.jsx":TK,"../pages/components/spinner/_examples/bgColor/index.jsx":RK,"../pages/components/spinner/_examples/bgFill/index.jsx":DK,"../pages/components/spinner/_examples/bgFillStop/index.jsx":$K,"../pages/components/spinner/_examples/bgIcon/index.jsx":PK,"../pages/components/spinner/_examples/bgStroke/index.jsx":FK,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":VK,"../pages/components/spinner/_examples/color/index.jsx":GK,"../pages/components/spinner/_examples/fill/index.jsx":qK,"../pages/components/spinner/_examples/fillStop/index.jsx":JK,"../pages/components/spinner/_examples/icon/index.jsx":nG,"../pages/components/spinner/_examples/reverse/index.jsx":sG,"../pages/components/spinner/_examples/shrink/index.jsx":iG,"../pages/components/spinner/_examples/size/index.jsx":uG,"../pages/components/spinner/_examples/stroke/index.jsx":mG,"../pages/components/spinner/_examples/strokeStop/index.jsx":gG,"../pages/components/spinner/index.jsx":vG,"../pages/components/table/_examples/FootRow/index.jsx":TG,"../pages/components/table/_examples/HeadRow/index.jsx":BG,"../pages/components/table/_examples/Row/index.jsx":FG,"../pages/components/table/_examples/Table/index.jsx":KG,"../pages/components/table/_examples/border/index.jsx":qG,"../pages/components/table/_examples/celled/index.jsx":JG,"../pages/components/table/_examples/className/index.jsx":nY,"../pages/components/table/_examples/color/index.jsx":sY,"../pages/components/table/_examples/compressed/index.jsx":iY,"../pages/components/table/_examples/expanded/index.jsx":uY,"../pages/components/table/_examples/footRows/index.jsx":gY,"../pages/components/table/_examples/footings/index.jsx":CY,"../pages/components/table/_examples/headRows/index.jsx":kY,"../pages/components/table/_examples/headings/index.jsx":LY,"../pages/components/table/_examples/lined/index.jsx":AY,"../pages/components/table/_examples/radius/index.jsx":IY,"../pages/components/table/_examples/rows/index.jsx":UY,"../pages/components/table/_examples/shaded/index.jsx":KY,"../pages/components/table/_examples/shadow/index.jsx":ZY,"../pages/components/table/_examples/size/index.jsx":XY,"../pages/components/table/_examples/spinal-tap.jsx":GG,"../pages/components/table/_examples/striped/index.jsx":tZ,"../pages/components/table/_examples/wide/index.jsx":rZ,"../pages/components/table/index.jsx":aZ,"../pages/components/tabset/_examples/Tabset/index.jsx":cZ,"../pages/components/tabset/_examples/center/index.jsx":pZ,"../pages/components/tabset/_examples/color/index.jsx":fZ,"../pages/components/tabset/_examples/lined/index.jsx":bZ,"../pages/components/tabset/_examples/right/index.jsx":yZ,"../pages/components/tabset/_examples/size/index.jsx":_Z,"../pages/components/tabset/_examples/solid/index.jsx":EZ,"../pages/components/tabset/_examples/storageKey/index.jsx":NZ,"../pages/components/tabset/_examples/tabs/index.jsx":BZ,"../pages/components/tabset/index.jsx":AZ,"../pages/components/tiles/_examples/Tiles/index.jsx":IZ,"../pages/components/tiles/_examples/cols/index.jsx":HZ,"../pages/components/tiles/_examples/gap/index.jsx":WZ,"../pages/components/tiles/_examples/minWidth/index.jsx":YZ,"../pages/components/tiles/_examples/rows/index.jsx":QZ,"../pages/components/tiles/index.jsx":JZ,"../pages/components/toggle/_examples/Toggle/index.jsx":nq,"../pages/components/toggle/_examples/ToggleState/index.jsx":sq,"../pages/components/toggle/_examples/activeProps/index.jsx":iq,"../pages/components/toggle/_examples/color/index.jsx":uq,"../pages/components/toggle/_examples/findSelectedIndex/index.jsx":mq,"../pages/components/toggle/_examples/inactiveProps/index.jsx":gq,"../pages/components/toggle/_examples/onSelect/index.jsx":jq,"../pages/components/toggle/_examples/options/index.jsx":Cq,"../pages/components/toggle/_examples/selected/index.jsx":Tq,"../pages/components/toggle/_examples/size/index.jsx":Rq,"../pages/components/toggle/_examples/storageKey/index.jsx":Lq,"../pages/components/toggle/_examples/useToggle/index.jsx":Aq,"../pages/components/toggle/index.jsx":Pq,"../pages/getting-started/installation.jsx":Wq,"../pages/hooks/useComplexState/_examples/functions/index.jsx":Yq,"../pages/hooks/useComplexState/_examples/onChange/index.jsx":Qq,"../pages/hooks/useComplexState/_examples/useComplexState.jsx":Xq,"../pages/hooks/useComplexState/index.jsx":tQ,"../pages/hooks/useRenderCount/_examples/useRenderCount.jsx":nQ,"../pages/hooks/useRenderCount/index.jsx":sQ,"../pages/index.jsx":cQ,"../pages/theming/index.jsx":hQ,"../pages/utilities/classes/_examples/borderClass/index.jsx":xQ,"../pages/utilities/classes/_examples/classes/index.jsx":vQ,"../pages/utilities/classes/_examples/colorClass/index.jsx":SQ,"../pages/utilities/classes/_examples/gapClass/index.jsx":wQ,"../pages/utilities/classes/_examples/marginClass/index.jsx":kQ,"../pages/utilities/classes/_examples/paddingClass/index.jsx":OQ,"../pages/utilities/classes/_examples/radiusClass/index.jsx":BQ,"../pages/utilities/classes/_examples/shadowClass/index.jsx":MQ,"../pages/utilities/classes/_examples/styleProps/index.jsx":zQ,"../pages/utilities/classes/index.jsx":HQ,"../pages/utilities/storage/_examples/Storage/index.jsx":WQ,"../pages/utilities/storage/index.jsx":GQ}));function TX(e){const o=Object.entries(e).map(EX).filter(s=>!s.path.match(_X)).reduce((s,a)=>(s[a.path]=a,s),{}),r=Object.keys(o).filter(s=>s.match(CX)).sort((s,a)=>a.length-s.length);for(let s of r){const a=o[s];delete o[s];const l=s.replace(/_layout$/,""),i=l.length;a.path=l,a.children=[];const c=o[l];c&&(delete c.path,c.index=!0,a.children.push(c),delete o[l]);const d=Object.keys(o).filter(u=>u.slice(0,i)===l);for(let u of d){const p=o[u];delete o[u],u=u.slice(i),p.path=u.length?u:"/",a.children.push(p)}o[l]=a}return Object.values(o)}function EX([e,t]){const o=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:o,Component:r}}const kX=PM([{path:"/",element:n.jsx(SX,{}),children:wX}],{basename:"/badger-react-ui"});au.createRoot(document.getElementById("root")).render(n.jsx(H.StrictMode,{children:n.jsx(sX,{storageKey:"theme",children:n.jsx(Nl.Provider,{children:n.jsx(KM,{router:kX})})})}));
