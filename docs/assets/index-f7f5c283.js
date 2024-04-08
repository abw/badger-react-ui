var L6=Object.defineProperty;var B6=(e,t,n)=>t in e?L6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var je=(e,t,n)=>(B6(e,typeof t!="symbol"?t+"":t,n),n);function W1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z1={exports:{}},mc={},K1={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),$6=Symbol.for("react.portal"),A6=Symbol.for("react.fragment"),M6=Symbol.for("react.strict_mode"),P6=Symbol.for("react.profiler"),I6=Symbol.for("react.provider"),z6=Symbol.for("react.context"),F6=Symbol.for("react.forward_ref"),U6=Symbol.for("react.suspense"),V6=Symbol.for("react.memo"),H6=Symbol.for("react.lazy"),rm=Symbol.iterator;function W6(e){return e===null||typeof e!="object"?null:(e=rm&&e[rm]||e["@@iterator"],typeof e=="function"?e:null)}var Y1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G1=Object.assign,q1={};function bs(e,t,n){this.props=e,this.context=t,this.refs=q1,this.updater=n||Y1}bs.prototype.isReactComponent={};bs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q1(){}Q1.prototype=bs.prototype;function ip(e,t,n){this.props=e,this.context=t,this.refs=q1,this.updater=n||Y1}var cp=ip.prototype=new Q1;cp.constructor=ip;G1(cp,bs.prototype);cp.isPureReactComponent=!0;var om=Array.isArray,X1=Object.prototype.hasOwnProperty,dp={current:null},J1={key:!0,ref:!0,__self:!0,__source:!0};function e2(e,t,n){var o,s={},a=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)X1.call(t,o)&&!J1.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)s[o]===void 0&&(s[o]=i[o]);return{$$typeof:el,type:e,key:a,ref:l,props:s,_owner:dp.current}}function Z6(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function up(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function K6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sm=/\/+/g;function rd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K6(""+e.key):t.toString(36)}function fi(e,t,n,o,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case el:case $6:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+rd(l,0):o,om(s)?(n="",e!=null&&(n=e.replace(sm,"$&/")+"/"),fi(s,t,n,"",function(d){return d})):s!=null&&(up(s)&&(s=Z6(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(sm,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=o===""?".":o+":",om(e))for(var i=0;i<e.length;i++){a=e[i];var c=o+rd(a,i);l+=fi(a,t,n,c,s)}else if(c=W6(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=o+rd(a,i++),l+=fi(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Al(e,t,n){if(e==null)return e;var o=[],s=0;return fi(e,o,"","",function(a){return t.call(n,a,s++)}),o}function Y6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},xi={transition:null},G6={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:xi,ReactCurrentOwner:dp};xe.Children={map:Al,forEach:function(e,t,n){Al(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Al(e,function(){t++}),t},toArray:function(e){return Al(e,function(t){return t})||[]},only:function(e){if(!up(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=bs;xe.Fragment=A6;xe.Profiler=P6;xe.PureComponent=ip;xe.StrictMode=M6;xe.Suspense=U6;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G6;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=G1({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=dp.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)X1.call(t,c)&&!J1.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:el,type:e.type,key:s,ref:a,props:o,_owner:l}};xe.createContext=function(e){return e={$$typeof:z6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:I6,_context:e},e.Consumer=e};xe.createElement=e2;xe.createFactory=function(e){var t=e2.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:F6,render:e}};xe.isValidElement=up;xe.lazy=function(e){return{$$typeof:H6,_payload:{_status:-1,_result:e},_init:Y6}};xe.memo=function(e,t){return{$$typeof:V6,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};xe.useCallback=function(e,t){return yt.current.useCallback(e,t)};xe.useContext=function(e){return yt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};xe.useEffect=function(e,t){return yt.current.useEffect(e,t)};xe.useId=function(){return yt.current.useId()};xe.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return yt.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};xe.useRef=function(e){return yt.current.useRef(e)};xe.useState=function(e){return yt.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return yt.current.useTransition()};xe.version="18.2.0";K1.exports=xe;var v=K1.exports;const X=er(v),q6=W1({__proto__:null,default:X},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q6=v,X6=Symbol.for("react.element"),J6=Symbol.for("react.fragment"),eb=Object.prototype.hasOwnProperty,tb=Q6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nb={key:!0,ref:!0,__self:!0,__source:!0};function t2(e,t,n){var o,s={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)eb.call(t,o)&&!nb.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:X6,type:e,key:a,ref:l,props:s,_owner:tb.current}}mc.Fragment=J6;mc.jsx=t2;mc.jsxs=t2;Z1.exports=mc;var r=Z1.exports,Qd={},n2={exports:{}},Vt={},r2={exports:{}},o2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,P){var I=L.length;L.push(P);e:for(;0<I;){var H=I-1>>>1,K=L[H];if(0<s(K,P))L[H]=P,L[I]=K,I=H;else break e}}function n(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var P=L[0],I=L.pop();if(I!==P){L[0]=I;e:for(var H=0,K=L.length,_e=K>>>1;H<_e;){var ue=2*(H+1)-1,Ce=L[ue],ce=ue+1,De=L[ce];if(0>s(Ce,I))ce<K&&0>s(De,Ce)?(L[H]=De,L[ce]=I,H=ce):(L[H]=Ce,L[ue]=I,H=ue);else if(ce<K&&0>s(De,I))L[H]=De,L[ce]=I,H=ce;else break e}}return P}function s(L,P){var I=L.sortIndex-P.sortIndex;return I!==0?I:L.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,f=3,b=!1,S=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var P=n(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=L)o(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function y(L){if(j=!1,m(L),!S)if(n(c)!==null)S=!0,de(C);else{var P=n(d);P!==null&&W(y,P.startTime-L)}}function C(L,P){S=!1,j&&(j=!1,g(E),E=-1),b=!0;var I=f;try{for(m(P),p=n(c);p!==null&&(!(p.expirationTime>P)||L&&!$());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var K=H(p.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&o(c),m(P)}else o(c);p=n(c)}if(p!==null)var _e=!0;else{var ue=n(d);ue!==null&&W(y,ue.startTime-P),_e=!1}return _e}finally{p=null,f=I,b=!1}}var x=!1,w=null,E=-1,N=5,D=-1;function $(){return!(e.unstable_now()-D<N)}function Y(){if(w!==null){var L=e.unstable_now();D=L;var P=!0;try{P=w(!0,L)}finally{P?Q():(x=!1,w=null)}}else x=!1}var Q;if(typeof h=="function")Q=function(){h(Y)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,ae=U.port2;U.port1.onmessage=Y,Q=function(){ae.postMessage(null)}}else Q=function(){_(Y,0)};function de(L){w=L,x||(x=!0,Q())}function W(L,P){E=_(function(){L(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,de(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var I=f;f=P;try{return L()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=f;f=L;try{return P()}finally{f=I}},e.unstable_scheduleCallback=function(L,P,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,L){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,L={id:u++,callback:P,priorityLevel:L,startTime:I,expirationTime:K,sortIndex:-1},I>H?(L.sortIndex=I,t(d,L),n(c)===null&&L===n(d)&&(j?(g(E),E=-1):j=!0,W(y,I-H))):(L.sortIndex=K,t(c,L),S||b||(S=!0,de(C))),L},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(L){var P=f;return function(){var I=f;f=P;try{return L.apply(this,arguments)}finally{f=I}}}})(o2);r2.exports=o2;var rb=r2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s2=v,Ut=rb;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a2=new Set,Ea={};function go(e,t){ds(e,t),ds(e+"Capture",t)}function ds(e,t){for(Ea[e]=t,e=0;e<t.length;e++)a2.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,am={},lm={};function sb(e){return Xd.call(lm,e)?!0:Xd.call(am,e)?!1:ob.test(e)?lm[e]=!0:(am[e]=!0,!1)}function ab(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lb(e,t,n,o){if(t===null||typeof t>"u"||ab(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,n,o,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function hp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pp,hp);it[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pp,hp);it[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pp,hp);it[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function mp(e,t,n,o){var s=it.hasOwnProperty(t)?it[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lb(t,n,s,o)&&(n=null),o||s===null?sb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var tr=s2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),Io=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),l2=Symbol.for("react.provider"),i2=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),c2=Symbol.for("react.offscreen"),im=Symbol.iterator;function Is(e){return e===null||typeof e!="object"?null:(e=im&&e[im]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,od;function na(e){if(od===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);od=t&&t[1]||""}return`
`+od+e}var sd=!1;function ad(e,t){if(!e||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=o.stack.split(`
`),l=s.length-1,i=a.length-1;1<=l&&0<=i&&s[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==a[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?na(e):""}function ib(e){switch(e.tag){case 5:return na(e.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return e=ad(e.type,!1),e;case 11:return e=ad(e.type.render,!1),e;case 1:return e=ad(e.type,!0),e;default:return""}}function nu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zo:return"Fragment";case Io:return"Portal";case Jd:return"Profiler";case fp:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case i2:return(e.displayName||"Context")+".Consumer";case l2:return(e._context.displayName||"Context")+".Provider";case xp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gp:return t=e.displayName||null,t!==null?t:nu(e.type)||"Memo";case mr:t=e._payload,e=e._init;try{return nu(e(t))}catch{}}return null}function cb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(t);case 8:return t===fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function db(e){var t=d2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pl(e){e._valueTracker||(e._valueTracker=db(e))}function u2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=d2(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ru(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cm(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Nr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function p2(e,t){t=t.checked,t!=null&&mp(e,"checked",t,!1)}function ou(e,t){p2(e,t);var n=Nr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?su(e,t.type,n):t.hasOwnProperty("defaultValue")&&su(e,t.type,Nr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function su(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ra=Array.isArray;function ns(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Nr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function au(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function um(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ra(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nr(n)}}function h2(e,t){var n=Nr(t.value),o=Nr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function pm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function m2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?m2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Il,f2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Il.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ub=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(e){ub.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ha[t]=ha[e]})});function x2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ha.hasOwnProperty(e)&&ha[e]?(""+t).trim():t+"px"}function g2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=x2(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var pb=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(e,t){if(t){if(pb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function cu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=null;function vp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uu=null,rs=null,os=null;function hm(e){if(e=rl(e)){if(typeof uu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=bc(t),uu(e.stateNode,e.type,t))}}function v2(e){rs?os?os.push(e):os=[e]:rs=e}function b2(){if(rs){var e=rs,t=os;if(os=rs=null,hm(e),t)for(e=0;e<t.length;e++)hm(t[e])}}function j2(e,t){return e(t)}function y2(){}var ld=!1;function S2(e,t,n){if(ld)return e(t,n);ld=!0;try{return j2(e,t,n)}finally{ld=!1,(rs!==null||os!==null)&&(y2(),b2())}}function Ra(e,t){var n=e.stateNode;if(n===null)return null;var o=bc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var pu=!1;if(Yn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){pu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{pu=!1}function hb(e,t,n,o,s,a,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var ma=!1,Li=null,Bi=!1,hu=null,mb={onError:function(e){ma=!0,Li=e}};function fb(e,t,n,o,s,a,l,i,c){ma=!1,Li=null,hb.apply(mb,arguments)}function xb(e,t,n,o,s,a,l,i,c){if(fb.apply(this,arguments),ma){if(ma){var d=Li;ma=!1,Li=null}else throw Error(A(198));Bi||(Bi=!0,hu=d)}}function vo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function C2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mm(e){if(vo(e)!==e)throw Error(A(188))}function gb(e){var t=e.alternate;if(!t){if(t=vo(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return mm(s),e;if(a===o)return mm(s),t;a=a.sibling}throw Error(A(188))}if(n.return!==o.return)n=s,o=a;else{for(var l=!1,i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==o)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function w2(e){return e=gb(e),e!==null?_2(e):null}function _2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_2(e);if(t!==null)return t;e=e.sibling}return null}var T2=Ut.unstable_scheduleCallback,fm=Ut.unstable_cancelCallback,vb=Ut.unstable_shouldYield,bb=Ut.unstable_requestPaint,Ze=Ut.unstable_now,jb=Ut.unstable_getCurrentPriorityLevel,bp=Ut.unstable_ImmediatePriority,k2=Ut.unstable_UserBlockingPriority,$i=Ut.unstable_NormalPriority,yb=Ut.unstable_LowPriority,E2=Ut.unstable_IdlePriority,fc=null,Nn=null;function Sb(e){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(fc,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:_b,Cb=Math.log,wb=Math.LN2;function _b(e){return e>>>=0,e===0?32:31-(Cb(e)/wb|0)|0}var zl=64,Fl=4194304;function oa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~s;i!==0?o=oa(i):(a&=l,a!==0&&(o=oa(a)))}else l=n&~s,l!==0?o=oa(l):a!==0&&(o=oa(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-fn(t),s=1<<n,o|=e[n],t&=~s;return o}function Tb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kb(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-fn(a),i=1<<l,c=s[l];c===-1?(!(i&n)||i&o)&&(s[l]=Tb(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function mu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function N2(){var e=zl;return zl<<=1,!(zl&4194240)&&(zl=64),e}function id(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=n}function Eb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-fn(n),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~a}}function jp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-fn(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var we=0;function R2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var O2,yp,D2,L2,B2,fu=!1,Ul=[],yr=null,Sr=null,Cr=null,Oa=new Map,Da=new Map,gr=[],Nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Oa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function Fs(e,t,n,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=rl(t),t!==null&&yp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Rb(e,t,n,o,s){switch(t){case"focusin":return yr=Fs(yr,e,t,n,o,s),!0;case"dragenter":return Sr=Fs(Sr,e,t,n,o,s),!0;case"mouseover":return Cr=Fs(Cr,e,t,n,o,s),!0;case"pointerover":var a=s.pointerId;return Oa.set(a,Fs(Oa.get(a)||null,e,t,n,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Da.set(a,Fs(Da.get(a)||null,e,t,n,o,s)),!0}return!1}function $2(e){var t=to(e.target);if(t!==null){var n=vo(t);if(n!==null){if(t=n.tag,t===13){if(t=C2(n),t!==null){e.blockedOn=t,B2(e.priority,function(){D2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);du=o,n.target.dispatchEvent(o),du=null}else return t=rl(n),t!==null&&yp(t),e.blockedOn=n,!1;t.shift()}return!0}function gm(e,t,n){gi(e)&&n.delete(t)}function Ob(){fu=!1,yr!==null&&gi(yr)&&(yr=null),Sr!==null&&gi(Sr)&&(Sr=null),Cr!==null&&gi(Cr)&&(Cr=null),Oa.forEach(gm),Da.forEach(gm)}function Us(e,t){e.blockedOn===t&&(e.blockedOn=null,fu||(fu=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,Ob)))}function La(e){function t(s){return Us(s,e)}if(0<Ul.length){Us(Ul[0],e);for(var n=1;n<Ul.length;n++){var o=Ul[n];o.blockedOn===e&&(o.blockedOn=null)}}for(yr!==null&&Us(yr,e),Sr!==null&&Us(Sr,e),Cr!==null&&Us(Cr,e),Oa.forEach(t),Da.forEach(t),n=0;n<gr.length;n++)o=gr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)$2(n),n.blockedOn===null&&gr.shift()}var ss=tr.ReactCurrentBatchConfig,Mi=!0;function Db(e,t,n,o){var s=we,a=ss.transition;ss.transition=null;try{we=1,Sp(e,t,n,o)}finally{we=s,ss.transition=a}}function Lb(e,t,n,o){var s=we,a=ss.transition;ss.transition=null;try{we=4,Sp(e,t,n,o)}finally{we=s,ss.transition=a}}function Sp(e,t,n,o){if(Mi){var s=xu(e,t,n,o);if(s===null)vd(e,t,o,Pi,n),xm(e,o);else if(Rb(s,e,t,n,o))o.stopPropagation();else if(xm(e,o),t&4&&-1<Nb.indexOf(e)){for(;s!==null;){var a=rl(s);if(a!==null&&O2(a),a=xu(e,t,n,o),a===null&&vd(e,t,o,Pi,n),a===s)break;s=a}s!==null&&o.stopPropagation()}else vd(e,t,o,null,n)}}var Pi=null;function xu(e,t,n,o){if(Pi=null,e=vp(o),e=to(e),e!==null)if(t=vo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=C2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function A2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jb()){case bp:return 1;case k2:return 4;case $i:case yb:return 16;case E2:return 536870912;default:return 16}default:return 16}}var br=null,Cp=null,vi=null;function M2(){if(vi)return vi;var e,t=Cp,n=t.length,o,s="value"in br?br.value:br.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===s[a-o];o++);return vi=s.slice(e,1<o?1-o:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function vm(){return!1}function Ht(e){function t(n,o,s,a,l){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vl:vm,this.isPropagationStopped=vm,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Ht(js),nl=ze({},js,{view:0,detail:0}),Bb=Ht(nl),cd,dd,Vs,xc=ze({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_p,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(cd=e.screenX-Vs.screenX,dd=e.screenY-Vs.screenY):dd=cd=0,Vs=e),cd)},movementY:function(e){return"movementY"in e?e.movementY:dd}}),bm=Ht(xc),$b=ze({},xc,{dataTransfer:0}),Ab=Ht($b),Mb=ze({},nl,{relatedTarget:0}),ud=Ht(Mb),Pb=ze({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=Ht(Pb),zb=ze({},js,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fb=Ht(zb),Ub=ze({},js,{data:0}),jm=Ht(Ub),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wb[e])?!!t[e]:!1}function _p(){return Zb}var Kb=ze({},nl,{key:function(e){if(e.key){var t=Vb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_p,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yb=Ht(Kb),Gb=ze({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Ht(Gb),qb=ze({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_p}),Qb=Ht(qb),Xb=ze({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jb=Ht(Xb),e8=ze({},xc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t8=Ht(e8),n8=[9,13,27,32],Tp=Yn&&"CompositionEvent"in window,fa=null;Yn&&"documentMode"in document&&(fa=document.documentMode);var r8=Yn&&"TextEvent"in window&&!fa,P2=Yn&&(!Tp||fa&&8<fa&&11>=fa),Sm=String.fromCharCode(32),Cm=!1;function I2(e,t){switch(e){case"keyup":return n8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fo=!1;function o8(e,t){switch(e){case"compositionend":return z2(t);case"keypress":return t.which!==32?null:(Cm=!0,Sm);case"textInput":return e=t.data,e===Sm&&Cm?null:e;default:return null}}function s8(e,t){if(Fo)return e==="compositionend"||!Tp&&I2(e,t)?(e=M2(),vi=Cp=br=null,Fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return P2&&t.locale!=="ko"?null:t.data;default:return null}}var a8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a8[e.type]:t==="textarea"}function F2(e,t,n,o){v2(o),t=Ii(t,"onChange"),0<t.length&&(n=new wp("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var xa=null,Ba=null;function l8(e){X2(e,0)}function gc(e){var t=Ho(e);if(u2(t))return e}function i8(e,t){if(e==="change")return t}var U2=!1;if(Yn){var pd;if(Yn){var hd="oninput"in document;if(!hd){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),hd=typeof _m.oninput=="function"}pd=hd}else pd=!1;U2=pd&&(!document.documentMode||9<document.documentMode)}function Tm(){xa&&(xa.detachEvent("onpropertychange",V2),Ba=xa=null)}function V2(e){if(e.propertyName==="value"&&gc(Ba)){var t=[];F2(t,Ba,e,vp(e)),S2(l8,t)}}function c8(e,t,n){e==="focusin"?(Tm(),xa=t,Ba=n,xa.attachEvent("onpropertychange",V2)):e==="focusout"&&Tm()}function d8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gc(Ba)}function u8(e,t){if(e==="click")return gc(t)}function p8(e,t){if(e==="input"||e==="change")return gc(t)}function h8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:h8;function $a(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!Xd.call(t,s)||!gn(e[s],t[s]))return!1}return!0}function km(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Em(e,t){var n=km(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=km(n)}}function H2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?H2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W2(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function kp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m8(e){var t=W2(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&H2(n.ownerDocument.documentElement,n)){if(o!==null&&kp(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=Em(n,a);var l=Em(n,o);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f8=Yn&&"documentMode"in document&&11>=document.documentMode,Uo=null,gu=null,ga=null,vu=!1;function Nm(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||Uo==null||Uo!==Di(o)||(o=Uo,"selectionStart"in o&&kp(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ga&&$a(ga,o)||(ga=o,o=Ii(gu,"onSelect"),0<o.length&&(t=new wp("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Uo)))}function Hl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vo={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},md={},Z2={};Yn&&(Z2=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function vc(e){if(md[e])return md[e];if(!Vo[e])return e;var t=Vo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Z2)return md[e]=t[n];return e}var K2=vc("animationend"),Y2=vc("animationiteration"),G2=vc("animationstart"),q2=vc("transitionend"),Q2=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(e,t){Q2.set(e,t),go(t,[e])}for(var fd=0;fd<Rm.length;fd++){var xd=Rm[fd],x8=xd.toLowerCase(),g8=xd[0].toUpperCase()+xd.slice(1);$r(x8,"on"+g8)}$r(K2,"onAnimationEnd");$r(Y2,"onAnimationIteration");$r(G2,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(q2,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v8=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Om(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,xb(o,t,void 0,e),e.currentTarget=null}function X2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==a&&s.isPropagationStopped())break e;Om(s,i,d),a=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==a&&s.isPropagationStopped())break e;Om(s,i,d),a=c}}}if(Bi)throw e=hu,Bi=!1,hu=null,e}function Re(e,t){var n=t[Cu];n===void 0&&(n=t[Cu]=new Set);var o=e+"__bubble";n.has(o)||(J2(t,e,2,!1),n.add(o))}function gd(e,t,n){var o=0;t&&(o|=4),J2(n,e,o,t)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Aa(e){if(!e[Wl]){e[Wl]=!0,a2.forEach(function(n){n!=="selectionchange"&&(v8.has(n)||gd(n,!1,e),gd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wl]||(t[Wl]=!0,gd("selectionchange",!1,t))}}function J2(e,t,n,o){switch(A2(t)){case 1:var s=Db;break;case 4:s=Lb;break;default:s=Sp}n=s.bind(null,t,n,e),s=void 0,!pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vd(e,t,n,o,s){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=to(i),l===null)return;if(c=l.tag,c===5||c===6){o=a=l;continue e}i=i.parentNode}}o=o.return}S2(function(){var d=a,u=vp(n),p=[];e:{var f=Q2.get(e);if(f!==void 0){var b=wp,S=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":b=Yb;break;case"focusin":S="focus",b=ud;break;case"focusout":S="blur",b=ud;break;case"beforeblur":case"afterblur":b=ud;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Ab;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Qb;break;case K2:case Y2:case G2:b=Ib;break;case q2:b=Jb;break;case"scroll":b=Bb;break;case"wheel":b=t8;break;case"copy":case"cut":case"paste":b=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ym}var j=(t&4)!==0,_=!j&&e==="scroll",g=j?f!==null?f+"Capture":null:f;j=[];for(var h=d,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,g!==null&&(y=Ra(h,g),y!=null&&j.push(Ma(h,y,m)))),_)break;h=h.return}0<j.length&&(f=new b(f,S,null,n,u),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==du&&(S=n.relatedTarget||n.fromElement)&&(to(S)||S[Gn]))break e;if((b||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,b?(S=n.relatedTarget||n.toElement,b=d,S=S?to(S):null,S!==null&&(_=vo(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(b=null,S=d),b!==S)){if(j=bm,y="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=ym,y="onPointerLeave",g="onPointerEnter",h="pointer"),_=b==null?f:Ho(b),m=S==null?f:Ho(S),f=new j(y,h+"leave",b,n,u),f.target=_,f.relatedTarget=m,y=null,to(u)===d&&(j=new j(g,h+"enter",S,n,u),j.target=m,j.relatedTarget=_,y=j),_=y,b&&S)t:{for(j=b,g=S,h=0,m=j;m;m=Do(m))h++;for(m=0,y=g;y;y=Do(y))m++;for(;0<h-m;)j=Do(j),h--;for(;0<m-h;)g=Do(g),m--;for(;h--;){if(j===g||g!==null&&j===g.alternate)break t;j=Do(j),g=Do(g)}j=null}else j=null;b!==null&&Dm(p,f,b,j,!1),S!==null&&_!==null&&Dm(p,_,S,j,!0)}}e:{if(f=d?Ho(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var C=i8;else if(wm(f))if(U2)C=p8;else{C=d8;var x=c8}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=u8);if(C&&(C=C(e,d))){F2(p,C,n,u);break e}x&&x(e,f,d),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&su(f,"number",f.value)}switch(x=d?Ho(d):window,e){case"focusin":(wm(x)||x.contentEditable==="true")&&(Uo=x,gu=d,ga=null);break;case"focusout":ga=gu=Uo=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Nm(p,n,u);break;case"selectionchange":if(f8)break;case"keydown":case"keyup":Nm(p,n,u)}var w;if(Tp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Fo?I2(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(P2&&n.locale!=="ko"&&(Fo||E!=="onCompositionStart"?E==="onCompositionEnd"&&Fo&&(w=M2()):(br=u,Cp="value"in br?br.value:br.textContent,Fo=!0)),x=Ii(d,E),0<x.length&&(E=new jm(E,e,null,n,u),p.push({event:E,listeners:x}),w?E.data=w:(w=z2(n),w!==null&&(E.data=w)))),(w=r8?o8(e,n):s8(e,n))&&(d=Ii(d,"onBeforeInput"),0<d.length&&(u=new jm("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}X2(p,t)})}function Ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Ra(e,n),a!=null&&o.unshift(Ma(e,a,s)),a=Ra(e,t),a!=null&&o.push(Ma(e,a,s))),e=e.return}return o}function Do(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dm(e,t,n,o,s){for(var a=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,s?(c=Ra(n,a),c!=null&&l.unshift(Ma(n,c,i))):s||(c=Ra(n,a),c!=null&&l.push(Ma(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var b8=/\r\n?/g,j8=/\u0000|\uFFFD/g;function Lm(e){return(typeof e=="string"?e:""+e).replace(b8,`
`).replace(j8,"")}function Zl(e,t,n){if(t=Lm(t),Lm(e)!==t&&n)throw Error(A(425))}function zi(){}var bu=null,ju=null;function yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,y8=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,S8=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(e){return Bm.resolve(null).then(e).catch(C8)}:Su;function C8(e){setTimeout(function(){throw e})}function bd(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),La(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);La(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ys=Math.random().toString(36).slice(2),kn="__reactFiber$"+ys,Pa="__reactProps$"+ys,Gn="__reactContainer$"+ys,Cu="__reactEvents$"+ys,w8="__reactListeners$"+ys,_8="__reactHandles$"+ys;function to(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$m(e);e!==null;){if(n=e[kn])return n;e=$m(e)}return t}e=n,n=e.parentNode}return null}function rl(e){return e=e[kn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function bc(e){return e[Pa]||null}var wu=[],Wo=-1;function Ar(e){return{current:e}}function Oe(e){0>Wo||(e.current=wu[Wo],wu[Wo]=null,Wo--)}function Ee(e,t){Wo++,wu[Wo]=e.current,e.current=t}var Rr={},ft=Ar(Rr),Dt=Ar(!1),io=Rr;function us(e,t){var n=e.type.contextTypes;if(!n)return Rr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(e){return e=e.childContextTypes,e!=null}function Fi(){Oe(Dt),Oe(ft)}function Am(e,t,n){if(ft.current!==Rr)throw Error(A(168));Ee(ft,t),Ee(Dt,n)}function ex(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(A(108,cb(e)||"Unknown",s));return ze({},n,o)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rr,io=ft.current,Ee(ft,e),Ee(Dt,Dt.current),!0}function Mm(e,t,n){var o=e.stateNode;if(!o)throw Error(A(169));n?(e=ex(e,t,io),o.__reactInternalMemoizedMergedChildContext=e,Oe(Dt),Oe(ft),Ee(ft,e)):Oe(Dt),Ee(Dt,n)}var zn=null,jc=!1,jd=!1;function tx(e){zn===null?zn=[e]:zn.push(e)}function T8(e){jc=!0,tx(e)}function Mr(){if(!jd&&zn!==null){jd=!0;var e=0,t=we;try{var n=zn;for(we=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}zn=null,jc=!1}catch(s){throw zn!==null&&(zn=zn.slice(e+1)),T2(bp,Mr),s}finally{we=t,jd=!1}}return null}var Zo=[],Ko=0,Vi=null,Hi=0,Yt=[],Gt=0,co=null,Hn=1,Wn="";function Xr(e,t){Zo[Ko++]=Hi,Zo[Ko++]=Vi,Vi=e,Hi=t}function nx(e,t,n){Yt[Gt++]=Hn,Yt[Gt++]=Wn,Yt[Gt++]=co,co=e;var o=Hn;e=Wn;var s=32-fn(o)-1;o&=~(1<<s),n+=1;var a=32-fn(t)+s;if(30<a){var l=s-s%5;a=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Hn=1<<32-fn(t)+s|n<<s|o,Wn=a+e}else Hn=1<<a|n<<s|o,Wn=e}function Ep(e){e.return!==null&&(Xr(e,1),nx(e,1,0))}function Np(e){for(;e===Vi;)Vi=Zo[--Ko],Zo[Ko]=null,Hi=Zo[--Ko],Zo[Ko]=null;for(;e===co;)co=Yt[--Gt],Yt[Gt]=null,Wn=Yt[--Gt],Yt[Gt]=null,Hn=Yt[--Gt],Yt[Gt]=null}var zt=null,It=null,$e=!1,mn=null;function rx(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,It=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=co!==null?{id:Hn,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,It=null,!0):!1;default:return!1}}function _u(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tu(e){if($e){var t=It;if(t){var n=t;if(!Pm(e,t)){if(_u(e))throw Error(A(418));t=wr(n.nextSibling);var o=zt;t&&Pm(e,t)?rx(o,n):(e.flags=e.flags&-4097|2,$e=!1,zt=e)}}else{if(_u(e))throw Error(A(418));e.flags=e.flags&-4097|2,$e=!1,zt=e}}}function Im(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function Kl(e){if(e!==zt)return!1;if(!$e)return Im(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yu(e.type,e.memoizedProps)),t&&(t=It)){if(_u(e))throw ox(),Error(A(418));for(;t;)rx(e,t),t=wr(t.nextSibling)}if(Im(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=zt?wr(e.stateNode.nextSibling):null;return!0}function ox(){for(var e=It;e;)e=wr(e.nextSibling)}function ps(){It=zt=null,$e=!1}function Rp(e){mn===null?mn=[e]:mn.push(e)}var k8=tr.ReactCurrentBatchConfig;function un(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wi=Ar(null),Zi=null,Yo=null,Op=null;function Dp(){Op=Yo=Zi=null}function Lp(e){var t=Wi.current;Oe(Wi),e._currentValue=t}function ku(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function as(e,t){Zi=e,Op=Yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Op!==e)if(e={context:e,memoizedValue:t,next:null},Yo===null){if(Zi===null)throw Error(A(308));Yo=e,Zi.dependencies={lanes:0,firstContext:e}}else Yo=Yo.next=e;return t}var no=null;function Bp(e){no===null?no=[e]:no.push(e)}function sx(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,Bp(t)):(n.next=s.next,s.next=n),t.interleaved=n,qn(e,o)}function qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fr=!1;function $p(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ax(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ye&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,qn(e,n)}return s=o.interleaved,s===null?(t.next=t,Bp(o)):(t.next=s.next,s.next=t),o.interleaved=t,qn(e,n)}function ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,jp(e,n)}}function zm(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ki(e,t,n,o){var s=e.updateQueue;fr=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=s.baseState;l=0,u=d=c=null,i=a;do{var f=i.lane,b=i.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,j=i;switch(f=t,b=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){p=S.call(b,p,f);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,f=typeof S=="function"?S.call(b,p,f):S,f==null)break e;p=ze({},p,f);break e;case 2:fr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[i]:f.push(i))}else b={eventTime:b,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=b,c=p):u=u.next=b,l|=f;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;f=i,i=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(u===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);po|=l,e.lanes=l,e.memoizedState=p}}function Fm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var lx=new s2.Component().refs;function Eu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={isMounted:function(e){return(e=e._reactInternals)?vo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=jt(),s=kr(e),a=Zn(o,s);a.payload=t,n!=null&&(a.callback=n),t=_r(e,a,s),t!==null&&(xn(t,e,s,o),ji(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=jt(),s=kr(e),a=Zn(o,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=_r(e,a,s),t!==null&&(xn(t,e,s,o),ji(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),o=kr(e),s=Zn(n,o);s.tag=2,t!=null&&(s.callback=t),t=_r(e,s,o),t!==null&&(xn(t,e,o,n),ji(t,e,o))}};function Um(e,t,n,o,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,l):t.prototype&&t.prototype.isPureReactComponent?!$a(n,o)||!$a(s,a):!0}function ix(e,t,n){var o=!1,s=Rr,a=t.contextType;return typeof a=="object"&&a!==null?a=Jt(a):(s=Lt(t)?io:ft.current,o=t.contextTypes,a=(o=o!=null)?us(e,s):Rr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Vm(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Nu(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=lx,$p(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Jt(a):(a=Lt(t)?io:ft.current,s.context=us(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Eu(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&yc.enqueueReplaceState(s,s.state,null),Ki(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Hs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var o=n.stateNode}if(!o)throw Error(A(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var i=s.refs;i===lx&&(i=s.refs={}),l===null?delete i[a]:i[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Yl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hm(e){var t=e._init;return t(e._payload)}function cx(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function o(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(g,h){return g=Er(g,h),g.index=0,g.sibling=null,g}function a(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,h,m,y){return h===null||h.tag!==6?(h=kd(m,g.mode,y),h.return=g,h):(h=s(h,m),h.return=g,h)}function c(g,h,m,y){var C=m.type;return C===zo?u(g,h,m.props.children,y,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mr&&Hm(C)===h.type)?(y=s(h,m.props),y.ref=Hs(g,h,m),y.return=g,y):(y=Ti(m.type,m.key,m.props,null,g.mode,y),y.ref=Hs(g,h,m),y.return=g,y)}function d(g,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ed(m,g.mode,y),h.return=g,h):(h=s(h,m.children||[]),h.return=g,h)}function u(g,h,m,y,C){return h===null||h.tag!==7?(h=lo(m,g.mode,y,C),h.return=g,h):(h=s(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=kd(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ml:return m=Ti(h.type,h.key,h.props,null,g.mode,m),m.ref=Hs(g,null,h),m.return=g,m;case Io:return h=Ed(h,g.mode,m),h.return=g,h;case mr:var y=h._init;return p(g,y(h._payload),m)}if(ra(h)||Is(h))return h=lo(h,g.mode,m,null),h.return=g,h;Yl(g,h)}return null}function f(g,h,m,y){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(g,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ml:return m.key===C?c(g,h,m,y):null;case Io:return m.key===C?d(g,h,m,y):null;case mr:return C=m._init,f(g,h,C(m._payload),y)}if(ra(m)||Is(m))return C!==null?null:u(g,h,m,y,null);Yl(g,m)}return null}function b(g,h,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(m)||null,i(h,g,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:return g=g.get(y.key===null?m:y.key)||null,c(h,g,y,C);case Io:return g=g.get(y.key===null?m:y.key)||null,d(h,g,y,C);case mr:var x=y._init;return b(g,h,m,x(y._payload),C)}if(ra(y)||Is(y))return g=g.get(m)||null,u(h,g,y,C,null);Yl(h,y)}return null}function S(g,h,m,y){for(var C=null,x=null,w=h,E=h=0,N=null;w!==null&&E<m.length;E++){w.index>E?(N=w,w=null):N=w.sibling;var D=f(g,w,m[E],y);if(D===null){w===null&&(w=N);break}e&&w&&D.alternate===null&&t(g,w),h=a(D,h,E),x===null?C=D:x.sibling=D,x=D,w=N}if(E===m.length)return n(g,w),$e&&Xr(g,E),C;if(w===null){for(;E<m.length;E++)w=p(g,m[E],y),w!==null&&(h=a(w,h,E),x===null?C=w:x.sibling=w,x=w);return $e&&Xr(g,E),C}for(w=o(g,w);E<m.length;E++)N=b(w,g,E,m[E],y),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?E:N.key),h=a(N,h,E),x===null?C=N:x.sibling=N,x=N);return e&&w.forEach(function($){return t(g,$)}),$e&&Xr(g,E),C}function j(g,h,m,y){var C=Is(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var x=C=null,w=h,E=h=0,N=null,D=m.next();w!==null&&!D.done;E++,D=m.next()){w.index>E?(N=w,w=null):N=w.sibling;var $=f(g,w,D.value,y);if($===null){w===null&&(w=N);break}e&&w&&$.alternate===null&&t(g,w),h=a($,h,E),x===null?C=$:x.sibling=$,x=$,w=N}if(D.done)return n(g,w),$e&&Xr(g,E),C;if(w===null){for(;!D.done;E++,D=m.next())D=p(g,D.value,y),D!==null&&(h=a(D,h,E),x===null?C=D:x.sibling=D,x=D);return $e&&Xr(g,E),C}for(w=o(g,w);!D.done;E++,D=m.next())D=b(w,g,E,D.value,y),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?E:D.key),h=a(D,h,E),x===null?C=D:x.sibling=D,x=D);return e&&w.forEach(function(Y){return t(g,Y)}),$e&&Xr(g,E),C}function _(g,h,m,y){if(typeof m=="object"&&m!==null&&m.type===zo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ml:e:{for(var C=m.key,x=h;x!==null;){if(x.key===C){if(C=m.type,C===zo){if(x.tag===7){n(g,x.sibling),h=s(x,m.props.children),h.return=g,g=h;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mr&&Hm(C)===x.type){n(g,x.sibling),h=s(x,m.props),h.ref=Hs(g,x,m),h.return=g,g=h;break e}n(g,x);break}else t(g,x);x=x.sibling}m.type===zo?(h=lo(m.props.children,g.mode,y,m.key),h.return=g,g=h):(y=Ti(m.type,m.key,m.props,null,g.mode,y),y.ref=Hs(g,h,m),y.return=g,g=y)}return l(g);case Io:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=s(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Ed(m,g.mode,y),h.return=g,g=h}return l(g);case mr:return x=m._init,_(g,h,x(m._payload),y)}if(ra(m))return S(g,h,m,y);if(Is(m))return j(g,h,m,y);Yl(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=s(h,m),h.return=g,g=h):(n(g,h),h=kd(m,g.mode,y),h.return=g,g=h),l(g)):n(g,h)}return _}var hs=cx(!0),dx=cx(!1),ol={},Rn=Ar(ol),Ia=Ar(ol),za=Ar(ol);function ro(e){if(e===ol)throw Error(A(174));return e}function Ap(e,t){switch(Ee(za,t),Ee(Ia,e),Ee(Rn,ol),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lu(t,e)}Oe(Rn),Ee(Rn,t)}function ms(){Oe(Rn),Oe(Ia),Oe(za)}function ux(e){ro(za.current);var t=ro(Rn.current),n=lu(t,e.type);t!==n&&(Ee(Ia,e),Ee(Rn,n))}function Mp(e){Ia.current===e&&(Oe(Rn),Oe(Ia))}var Pe=Ar(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yd=[];function Pp(){for(var e=0;e<yd.length;e++)yd[e]._workInProgressVersionPrimary=null;yd.length=0}var yi=tr.ReactCurrentDispatcher,Sd=tr.ReactCurrentBatchConfig,uo=0,Ie=null,qe=null,nt=null,Gi=!1,va=!1,Fa=0,E8=0;function ut(){throw Error(A(321))}function Ip(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function zp(e,t,n,o,s,a){if(uo=a,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?D8:L8,e=n(o,s),va){a=0;do{if(va=!1,Fa=0,25<=a)throw Error(A(301));a+=1,nt=qe=null,t.updateQueue=null,yi.current=B8,e=n(o,s)}while(va)}if(yi.current=qi,t=qe!==null&&qe.next!==null,uo=0,nt=qe=Ie=null,Gi=!1,t)throw Error(A(300));return e}function Fp(){var e=Fa!==0;return Fa=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ie.memoizedState=nt=e:nt=nt.next=e,nt}function en(){if(qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=nt===null?Ie.memoizedState:nt.next;if(t!==null)nt=t,qe=e;else{if(e===null)throw Error(A(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},nt===null?Ie.memoizedState=nt=e:nt=nt.next=e}return nt}function Ua(e,t){return typeof t=="function"?t(e):t}function Cd(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=qe,s=o.baseQueue,a=n.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}o.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,o=o.baseState;var i=l=null,c=null,d=a;do{var u=d.lane;if((uo&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,Ie.lanes|=u,po|=u}d=d.next}while(d!==null&&d!==a);c===null?l=o:c.next=i,gn(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do a=s.lane,Ie.lanes|=a,po|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wd(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);gn(a,t.memoizedState)||(Ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function px(){}function hx(e,t){var n=Ie,o=en(),s=t(),a=!gn(o.memoizedState,s);if(a&&(o.memoizedState=s,Ot=!0),o=o.queue,Up(xx.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Va(9,fx.bind(null,n,o,s,t),void 0,null),ot===null)throw Error(A(349));uo&30||mx(n,t,s)}return s}function mx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fx(e,t,n,o){t.value=n,t.getSnapshot=o,gx(t)&&vx(e)}function xx(e,t,n){return n(function(){gx(t)&&vx(e)})}function gx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function vx(e){var t=qn(e,1);t!==null&&xn(t,e,1,-1)}function Wm(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t.queue=e,e=e.dispatch=O8.bind(null,Ie,e),[t.memoizedState,e]}function Va(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function bx(){return en().memoizedState}function Si(e,t,n,o){var s=wn();Ie.flags|=e,s.memoizedState=Va(1|t,n,void 0,o===void 0?null:o)}function Sc(e,t,n,o){var s=en();o=o===void 0?null:o;var a=void 0;if(qe!==null){var l=qe.memoizedState;if(a=l.destroy,o!==null&&Ip(o,l.deps)){s.memoizedState=Va(t,n,a,o);return}}Ie.flags|=e,s.memoizedState=Va(1|t,n,a,o)}function Zm(e,t){return Si(8390656,8,e,t)}function Up(e,t){return Sc(2048,8,e,t)}function jx(e,t){return Sc(4,2,e,t)}function yx(e,t){return Sc(4,4,e,t)}function Sx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cx(e,t,n){return n=n!=null?n.concat([e]):null,Sc(4,4,Sx.bind(null,t,e),n)}function Vp(){}function wx(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ip(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function _x(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ip(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Tx(e,t,n){return uo&21?(gn(n,t)||(n=N2(),Ie.lanes|=n,po|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function N8(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var o=Sd.transition;Sd.transition={};try{e(!1),t()}finally{we=n,Sd.transition=o}}function kx(){return en().memoizedState}function R8(e,t,n){var o=kr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ex(e))Nx(t,n);else if(n=sx(e,t,n,o),n!==null){var s=jt();xn(n,e,o,s),Rx(n,t,o)}}function O8(e,t,n){var o=kr(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ex(e))Nx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,i=a(l,n);if(s.hasEagerState=!0,s.eagerState=i,gn(i,l)){var c=t.interleaved;c===null?(s.next=s,Bp(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=sx(e,t,s,o),n!==null&&(s=jt(),xn(n,e,o,s),Rx(n,t,o))}}function Ex(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Nx(e,t){va=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rx(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,jp(e,n)}}var qi={readContext:Jt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},D8={readContext:Jt,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Zm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,Sx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=wn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=R8.bind(null,Ie,e),[o.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:Wm,useDebugValue:Vp,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=Wm(!1),t=e[0];return e=N8.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Ie,s=wn();if($e){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ot===null)throw Error(A(349));uo&30||mx(o,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Zm(xx.bind(null,o,a,e),[e]),o.flags|=2048,Va(9,fx.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=wn(),t=ot.identifierPrefix;if($e){var n=Wn,o=Hn;n=(o&~(1<<32-fn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L8={readContext:Jt,useCallback:wx,useContext:Jt,useEffect:Up,useImperativeHandle:Cx,useInsertionEffect:jx,useLayoutEffect:yx,useMemo:_x,useReducer:Cd,useRef:bx,useState:function(){return Cd(Ua)},useDebugValue:Vp,useDeferredValue:function(e){var t=en();return Tx(t,qe.memoizedState,e)},useTransition:function(){var e=Cd(Ua)[0],t=en().memoizedState;return[e,t]},useMutableSource:px,useSyncExternalStore:hx,useId:kx,unstable_isNewReconciler:!1},B8={readContext:Jt,useCallback:wx,useContext:Jt,useEffect:Up,useImperativeHandle:Cx,useInsertionEffect:jx,useLayoutEffect:yx,useMemo:_x,useReducer:wd,useRef:bx,useState:function(){return wd(Ua)},useDebugValue:Vp,useDeferredValue:function(e){var t=en();return qe===null?t.memoizedState=e:Tx(t,qe.memoizedState,e)},useTransition:function(){var e=wd(Ua)[0],t=en().memoizedState;return[e,t]},useMutableSource:px,useSyncExternalStore:hx,useId:kx,unstable_isNewReconciler:!1};function fs(e,t){try{var n="",o=t;do n+=ib(o),o=o.return;while(o);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function _d(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $8=typeof WeakMap=="function"?WeakMap:Map;function Ox(e,t,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Xi||(Xi=!0,zu=o),Ru(e,t)},n}function Dx(e,t,n){n=Zn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){Ru(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof o!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Km(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new $8;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=G8.bind(null,e,t,n),t.then(e,e))}function Ym(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gm(e,t,n,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zn(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e)}var A8=tr.ReactCurrentOwner,Ot=!1;function bt(e,t,n,o){t.child=e===null?dx(t,null,n,o):hs(t,e.child,n,o)}function qm(e,t,n,o,s){n=n.render;var a=t.ref;return as(t,s),o=zp(e,t,n,o,a,s),n=Fp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Qn(e,t,s)):($e&&n&&Ep(t),t.flags|=1,bt(e,t,o,s),t.child)}function Qm(e,t,n,o,s){if(e===null){var a=n.type;return typeof a=="function"&&!Qp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lx(e,t,a,o,s)):(e=Ti(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(l,o)&&e.ref===t.ref)return Qn(e,t,s)}return t.flags|=1,e=Er(a,o),e.ref=t.ref,e.return=t,t.child=e}function Lx(e,t,n,o,s){if(e!==null){var a=e.memoizedProps;if($a(a,o)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=o=a,(e.lanes&s)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Qn(e,t,s)}return Ou(e,t,n,o,s)}function Bx(e,t,n){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(qo,Mt),Mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(qo,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,Ee(qo,Mt),Mt|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,Ee(qo,Mt),Mt|=o;return bt(e,t,s,n),t.child}function $x(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ou(e,t,n,o,s){var a=Lt(n)?io:ft.current;return a=us(t,a),as(t,s),n=zp(e,t,n,o,a,s),o=Fp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Qn(e,t,s)):($e&&o&&Ep(t),t.flags|=1,bt(e,t,n,s),t.child)}function Xm(e,t,n,o,s){if(Lt(n)){var a=!0;Ui(t)}else a=!1;if(as(t,s),t.stateNode===null)Ci(e,t),ix(t,n,o),Nu(t,n,o,s),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Jt(d):(d=Lt(n)?io:ft.current,d=us(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&Vm(t,l,o,d),fr=!1;var f=t.memoizedState;l.state=f,Ki(t,o,l,s),c=t.memoizedState,i!==o||f!==c||Dt.current||fr?(typeof u=="function"&&(Eu(t,n,u,o),c=t.memoizedState),(i=fr||Um(t,n,i,o,f,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,ax(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:un(t.type,i),l.props=d,p=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=Lt(n)?io:ft.current,c=us(t,c));var b=n.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||f!==c)&&Vm(t,l,o,c),fr=!1,f=t.memoizedState,l.state=f,Ki(t,o,l,s);var S=t.memoizedState;i!==p||f!==S||Dt.current||fr?(typeof b=="function"&&(Eu(t,n,b,o),S=t.memoizedState),(d=fr||Um(t,n,d,o,f,S,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,S,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,S,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),l.props=o,l.state=S,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Du(e,t,n,o,a,s)}function Du(e,t,n,o,s,a){$x(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return s&&Mm(t,n,!1),Qn(e,t,a);o=t.stateNode,A8.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=hs(t,e.child,null,a),t.child=hs(t,null,i,a)):bt(e,t,i,a),t.memoizedState=o.state,s&&Mm(t,n,!0),t.child}function Ax(e){var t=e.stateNode;t.pendingContext?Am(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Am(e,t.context,!1),Ap(e,t.containerInfo)}function Jm(e,t,n,o,s){return ps(),Rp(s),t.flags|=256,bt(e,t,n,o),t.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Bu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mx(e,t,n){var o=t.pendingProps,s=Pe.current,a=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ee(Pe,s&1),e===null)return Tu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=_c(l,o,0,null),e=lo(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Bu(n),t.memoizedState=Lu,e):Hp(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return M8(e,t,l,o,i,s,n);if(a){a=o.fallback,l=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Er(s,c),o.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=Er(i,a):(a=lo(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=e.child.memoizedState,l=l===null?Bu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Lu,o}return a=e.child,e=a.sibling,o=Er(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Hp(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gl(e,t,n,o){return o!==null&&Rp(o),hs(t,e.child,null,n),e=Hp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M8(e,t,n,o,s,a,l){if(n)return t.flags&256?(t.flags&=-257,o=_d(Error(A(422))),Gl(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=_c({mode:"visible",children:o.children},s,0,null),a=lo(a,s,l,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&hs(t,e.child,null,l),t.child.memoizedState=Bu(l),t.memoizedState=Lu,a);if(!(t.mode&1))return Gl(e,t,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var i=o.dgst;return o=i,a=Error(A(419)),o=_d(a,o,void 0),Gl(e,t,l,o)}if(i=(l&e.childLanes)!==0,Ot||i){if(o=ot,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,qn(e,s),xn(o,e,s,-1))}return qp(),o=_d(Error(A(421))),Gl(e,t,l,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=q8.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,It=wr(s.nextSibling),zt=t,$e=!0,mn=null,e!==null&&(Yt[Gt++]=Hn,Yt[Gt++]=Wn,Yt[Gt++]=co,Hn=e.id,Wn=e.overflow,co=t),t=Hp(t,o.children),t.flags|=4096,t)}function ef(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ku(e.return,t,n)}function Td(e,t,n,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=s)}function Px(e,t,n){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(bt(e,t,o.children,n),o=Pe.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,n,t);else if(e.tag===19)ef(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(Pe,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Td(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Yi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Td(t,!0,n,null,a);break;case"together":Td(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),po|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function P8(e,t,n){switch(t.tag){case 3:Ax(t),ps();break;case 5:ux(t);break;case 1:Lt(t.type)&&Ui(t);break;case 4:Ap(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;Ee(Wi,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?Mx(e,t,n):(Ee(Pe,Pe.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Px(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Pe,Pe.current),o)break;return null;case 22:case 23:return t.lanes=0,Bx(e,t,n)}return Qn(e,t,n)}var Ix,$u,zx,Fx;Ix=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};zx=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,ro(Rn.current);var a=null;switch(n){case"input":s=ru(e,s),o=ru(e,o),a=[];break;case"select":s=ze({},s,{value:void 0}),o=ze({},o,{value:void 0}),a=[];break;case"textarea":s=au(e,s),o=au(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=zi)}iu(n,o);var l;n=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var i=s[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ea.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in o){var c=o[d];if(i=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Re("scroll",e),a||i===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Fx=function(e,t,n,o){n!==o&&(t.flags|=4)};function Ws(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function I8(e,t,n){var o=t.pendingProps;switch(Np(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Lt(t.type)&&Fi(),pt(t),null;case 3:return o=t.stateNode,ms(),Oe(Dt),Oe(ft),Pp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Kl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mn!==null&&(Vu(mn),mn=null))),$u(e,t),pt(t),null;case 5:Mp(t);var s=ro(za.current);if(n=t.type,e!==null&&t.stateNode!=null)zx(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return pt(t),null}if(e=ro(Rn.current),Kl(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[kn]=t,o[Pa]=a,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<sa.length;s++)Re(sa[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":cm(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":um(o,a),Re("invalid",o)}iu(n,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?o.textContent!==i&&(a.suppressHydrationWarning!==!0&&Zl(o.textContent,i,e),s=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Zl(o.textContent,i,e),s=["children",""+i]):Ea.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Re("scroll",o)}switch(n){case"input":Pl(o),dm(o,a,!0);break;case"textarea":Pl(o),pm(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=zi)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=m2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[kn]=t,e[Pa]=o,Ix(e,t,!1,!1),t.stateNode=e;e:{switch(l=cu(n,o),n){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<sa.length;s++)Re(sa[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":cm(e,o),s=ru(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=ze({},o,{value:void 0}),Re("invalid",e);break;case"textarea":um(e,o),s=au(e,o),Re("invalid",e);break;default:s=o}iu(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?g2(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&f2(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Na(e,c):typeof c=="number"&&Na(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ea.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Re("scroll",e):c!=null&&mp(e,a,c,l))}switch(n){case"input":Pl(e),dm(e,o,!1);break;case"textarea":Pl(e),pm(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Nr(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?ns(e,!!o.multiple,a,!1):o.defaultValue!=null&&ns(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=zi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)Fx(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(n=ro(za.current),ro(Rn.current),Kl(t)){if(o=t.stateNode,n=t.memoizedProps,o[kn]=t,(a=o.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:Zl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zl(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[kn]=t,t.stateNode=o}return pt(t),null;case 13:if(Oe(Pe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&It!==null&&t.mode&1&&!(t.flags&128))ox(),ps(),t.flags|=98560,a=!1;else if(a=Kl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[kn]=t}else ps(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),a=!1}else mn!==null&&(Vu(mn),mn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Xe===0&&(Xe=3):qp())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return ms(),$u(e,t),e===null&&Aa(t.stateNode.containerInfo),pt(t),null;case 10:return Lp(t.type._context),pt(t),null;case 17:return Lt(t.type)&&Fi(),pt(t),null;case 19:if(Oe(Pe),a=t.memoizedState,a===null)return pt(t),null;if(o=(t.flags&128)!==0,l=a.rendering,l===null)if(o)Ws(a,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yi(e),l!==null){for(t.flags|=128,Ws(a,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ze()>xs&&(t.flags|=128,o=!0,Ws(a,!1),t.lanes=4194304)}else{if(!o)if(e=Yi(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ws(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!$e)return pt(t),null}else 2*Ze()-a.renderingStartTime>xs&&n!==1073741824&&(t.flags|=128,o=!0,Ws(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ze(),t.sibling=null,n=Pe.current,Ee(Pe,o?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Gp(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Mt&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function z8(e,t){switch(Np(t),t.tag){case 1:return Lt(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ms(),Oe(Dt),Oe(ft),Pp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mp(t),null;case 13:if(Oe(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ps()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Pe),null;case 4:return ms(),null;case 10:return Lp(t.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var ql=!1,ht=!1,F8=typeof WeakSet=="function"?WeakSet:Set,V=null;function Go(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ve(e,t,o)}else n.current=null}function Au(e,t,n){try{n()}catch(o){Ve(e,t,o)}}var tf=!1;function U8(e,t){if(bu=Mi,e=W2(),kp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var b;p!==n||s!==0&&p.nodeType!==3||(i=l+s),p!==a||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break t;if(f===n&&++d===s&&(i=l),f===a&&++u===o&&(c=l),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:e,selectionRange:n},Mi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,_=S.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:un(t.type,j),_);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(y){Ve(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return S=tf,tf=!1,S}function ba(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Au(t,n,a)}s=s.next}while(s!==o)}}function Cc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ux(e){var t=e.alternate;t!==null&&(e.alternate=null,Ux(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Pa],delete t[Cu],delete t[w8],delete t[_8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vx(e){return e.tag===5||e.tag===3||e.tag===4}function nf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(o!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}function Iu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Iu(e,t,n),e=e.sibling;e!==null;)Iu(e,t,n),e=e.sibling}var st=null,pn=!1;function ur(e,t,n){for(n=n.child;n!==null;)Hx(e,t,n),n=n.sibling}function Hx(e,t,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:ht||Go(n,t);case 6:var o=st,s=pn;st=null,ur(e,t,n),st=o,pn=s,st!==null&&(pn?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(pn?(e=st,n=n.stateNode,e.nodeType===8?bd(e.parentNode,n):e.nodeType===1&&bd(e,n),La(e)):bd(st,n.stateNode));break;case 4:o=st,s=pn,st=n.stateNode.containerInfo,pn=!0,ur(e,t,n),st=o,pn=s;break;case 0:case 11:case 14:case 15:if(!ht&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Au(n,t,l),s=s.next}while(s!==o)}ur(e,t,n);break;case 1:if(!ht&&(Go(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){Ve(n,t,i)}ur(e,t,n);break;case 21:ur(e,t,n);break;case 22:n.mode&1?(ht=(o=ht)||n.memoizedState!==null,ur(e,t,n),ht=o):ur(e,t,n);break;default:ur(e,t,n)}}function rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F8),t.forEach(function(o){var s=Q8.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function dn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var a=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:st=i.stateNode,pn=!1;break e;case 3:st=i.stateNode.containerInfo,pn=!0;break e;case 4:st=i.stateNode.containerInfo,pn=!0;break e}i=i.return}if(st===null)throw Error(A(160));Hx(a,l,s),st=null,pn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Ve(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wx(t,e),t=t.sibling}function Wx(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),Cn(e),o&4){try{ba(3,e,e.return),Cc(3,e)}catch(j){Ve(e,e.return,j)}try{ba(5,e,e.return)}catch(j){Ve(e,e.return,j)}}break;case 1:dn(t,e),Cn(e),o&512&&n!==null&&Go(n,n.return);break;case 5:if(dn(t,e),Cn(e),o&512&&n!==null&&Go(n,n.return),e.flags&32){var s=e.stateNode;try{Na(s,"")}catch(j){Ve(e,e.return,j)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&p2(s,a),cu(i,l);var d=cu(i,a);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?g2(s,p):u==="dangerouslySetInnerHTML"?f2(s,p):u==="children"?Na(s,p):mp(s,u,p,d)}switch(i){case"input":ou(s,a);break;case"textarea":h2(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?ns(s,!!a.multiple,b,!1):f!==!!a.multiple&&(a.defaultValue!=null?ns(s,!!a.multiple,a.defaultValue,!0):ns(s,!!a.multiple,a.multiple?[]:"",!1))}s[Pa]=a}catch(j){Ve(e,e.return,j)}}break;case 6:if(dn(t,e),Cn(e),o&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(j){Ve(e,e.return,j)}}break;case 3:if(dn(t,e),Cn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{La(t.containerInfo)}catch(j){Ve(e,e.return,j)}break;case 4:dn(t,e),Cn(e);break;case 13:dn(t,e),Cn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Kp=Ze())),o&4&&rf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(d=ht)||u,dn(t,e),ht=d):dn(t,e),Cn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(V=e,u=e.child;u!==null;){for(p=V=u;V!==null;){switch(f=V,b=f.child,f.tag){case 0:case 11:case 14:case 15:ba(4,f,f.return);break;case 1:Go(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){Ve(o,n,j)}}break;case 5:Go(f,f.return);break;case 22:if(f.memoizedState!==null){sf(p);continue}}b!==null?(b.return=f,V=b):sf(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{s=p.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=x2("display",l))}catch(j){Ve(e,e.return,j)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(j){Ve(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),Cn(e),o&4&&rf(e);break;case 21:break;default:dn(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vx(n)){var o=n;break e}n=n.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Na(s,""),o.flags&=-33);var a=nf(e);Iu(e,a,s);break;case 3:case 4:var l=o.stateNode.containerInfo,i=nf(e);Pu(e,i,l);break;default:throw Error(A(161))}}catch(c){Ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V8(e,t,n){V=e,Zx(e)}function Zx(e,t,n){for(var o=(e.mode&1)!==0;V!==null;){var s=V,a=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||ql;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||ht;i=ql;var d=ht;if(ql=l,(ht=c)&&!d)for(V=s;V!==null;)l=V,c=l.child,l.tag===22&&l.memoizedState!==null?af(s):c!==null?(c.return=l,V=c):af(s);for(;a!==null;)V=a,Zx(a),a=a.sibling;V=s,ql=i,ht=d}of(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,V=a):of(e)}}function of(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Cc(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ht)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fm(t,a,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fm(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&La(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ht||t.flags&512&&Mu(t)}catch(f){Ve(t,t.return,f)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function sf(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function af(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(c){Ve(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(c){Ve(t,s,c)}}var a=t.return;try{Mu(t)}catch(c){Ve(t,a,c)}break;case 5:var l=t.return;try{Mu(t)}catch(c){Ve(t,l,c)}}}catch(c){Ve(t,t.return,c)}if(t===e){V=null;break}var i=t.sibling;if(i!==null){i.return=t.return,V=i;break}V=t.return}}var H8=Math.ceil,Qi=tr.ReactCurrentDispatcher,Wp=tr.ReactCurrentOwner,Qt=tr.ReactCurrentBatchConfig,ye=0,ot=null,Ye=null,lt=0,Mt=0,qo=Ar(0),Xe=0,Ha=null,po=0,wc=0,Zp=0,ja=null,Rt=null,Kp=0,xs=1/0,In=null,Xi=!1,zu=null,Tr=null,Ql=!1,jr=null,Ji=0,ya=0,Fu=null,wi=-1,_i=0;function jt(){return ye&6?Ze():wi!==-1?wi:wi=Ze()}function kr(e){return e.mode&1?ye&2&&lt!==0?lt&-lt:k8.transition!==null?(_i===0&&(_i=N2()),_i):(e=we,e!==0||(e=window.event,e=e===void 0?16:A2(e.type)),e):1}function xn(e,t,n,o){if(50<ya)throw ya=0,Fu=null,Error(A(185));tl(e,n,o),(!(ye&2)||e!==ot)&&(e===ot&&(!(ye&2)&&(wc|=n),Xe===4&&vr(e,lt)),Bt(e,o),n===1&&ye===0&&!(t.mode&1)&&(xs=Ze()+500,jc&&Mr()))}function Bt(e,t){var n=e.callbackNode;kb(e,t);var o=Ai(e,e===ot?lt:0);if(o===0)n!==null&&fm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&fm(n),t===1)e.tag===0?T8(lf.bind(null,e)):tx(lf.bind(null,e)),S8(function(){!(ye&6)&&Mr()}),n=null;else{switch(R2(o)){case 1:n=bp;break;case 4:n=k2;break;case 16:n=$i;break;case 536870912:n=E2;break;default:n=$i}n=eg(n,Kx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kx(e,t){if(wi=-1,_i=0,ye&6)throw Error(A(327));var n=e.callbackNode;if(ls()&&e.callbackNode!==n)return null;var o=Ai(e,e===ot?lt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ec(e,o);else{t=o;var s=ye;ye|=2;var a=Gx();(ot!==e||lt!==t)&&(In=null,xs=Ze()+500,ao(e,t));do try{K8();break}catch(i){Yx(e,i)}while(1);Dp(),Qi.current=a,ye=s,Ye!==null?t=0:(ot=null,lt=0,t=Xe)}if(t!==0){if(t===2&&(s=mu(e),s!==0&&(o=s,t=Uu(e,s))),t===1)throw n=Ha,ao(e,0),vr(e,o),Bt(e,Ze()),n;if(t===6)vr(e,o);else{if(s=e.current.alternate,!(o&30)&&!W8(s)&&(t=ec(e,o),t===2&&(a=mu(e),a!==0&&(o=a,t=Uu(e,a))),t===1))throw n=Ha,ao(e,0),vr(e,o),Bt(e,Ze()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:Jr(e,Rt,In);break;case 3:if(vr(e,o),(o&130023424)===o&&(t=Kp+500-Ze(),10<t)){if(Ai(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){jt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Su(Jr.bind(null,e,Rt,In),t);break}Jr(e,Rt,In);break;case 4:if(vr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var l=31-fn(o);a=1<<l,l=t[l],l>s&&(s=l),o&=~a}if(o=s,o=Ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*H8(o/1960))-o,10<o){e.timeoutHandle=Su(Jr.bind(null,e,Rt,In),o);break}Jr(e,Rt,In);break;case 5:Jr(e,Rt,In);break;default:throw Error(A(329))}}}return Bt(e,Ze()),e.callbackNode===n?Kx.bind(null,e):null}function Uu(e,t){var n=ja;return e.current.memoizedState.isDehydrated&&(ao(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Rt,Rt=n,t!==null&&Vu(t)),e}function Vu(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function W8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],a=s.getSnapshot;s=s.value;try{if(!gn(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~Zp,t&=~wc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-fn(t),o=1<<n;e[n]=-1,t&=~o}}function lf(e){if(ye&6)throw Error(A(327));ls();var t=Ai(e,0);if(!(t&1))return Bt(e,Ze()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var o=mu(e);o!==0&&(t=o,n=Uu(e,o))}if(n===1)throw n=Ha,ao(e,0),vr(e,t),Bt(e,Ze()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,Rt,In),Bt(e,Ze()),null}function Yp(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(xs=Ze()+500,jc&&Mr())}}function ho(e){jr!==null&&jr.tag===0&&!(ye&6)&&ls();var t=ye;ye|=1;var n=Qt.transition,o=we;try{if(Qt.transition=null,we=1,e)return e()}finally{we=o,Qt.transition=n,ye=t,!(ye&6)&&Mr()}}function Gp(){Mt=qo.current,Oe(qo)}function ao(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,y8(n)),Ye!==null)for(n=Ye.return;n!==null;){var o=n;switch(Np(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fi();break;case 3:ms(),Oe(Dt),Oe(ft),Pp();break;case 5:Mp(o);break;case 4:ms();break;case 13:Oe(Pe);break;case 19:Oe(Pe);break;case 10:Lp(o.type._context);break;case 22:case 23:Gp()}n=n.return}if(ot=e,Ye=e=Er(e.current,null),lt=Mt=t,Xe=0,Ha=null,Zp=wc=po=0,Rt=ja=null,no!==null){for(t=0;t<no.length;t++)if(n=no[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,a=n.pending;if(a!==null){var l=a.next;a.next=s,o.next=l}n.pending=o}no=null}return e}function Yx(e,t){do{var n=Ye;try{if(Dp(),yi.current=qi,Gi){for(var o=Ie.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Gi=!1}if(uo=0,nt=qe=Ie=null,va=!1,Fa=0,Wp.current=null,n===null||n.return===null){Xe=1,Ha=t,Ye=null;break}e:{var a=e,l=n.return,i=n,c=t;if(t=lt,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=Ym(l);if(b!==null){b.flags&=-257,Gm(b,l,i,a,t),b.mode&1&&Km(a,d,t),t=b,c=d;var S=t.updateQueue;if(S===null){var j=new Set;j.add(c),t.updateQueue=j}else S.add(c);break e}else{if(!(t&1)){Km(a,d,t),qp();break e}c=Error(A(426))}}else if($e&&i.mode&1){var _=Ym(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Gm(_,l,i,a,t),Rp(fs(c,i));break e}}a=c=fs(c,i),Xe!==4&&(Xe=2),ja===null?ja=[a]:ja.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Ox(a,c,t);zm(a,g);break e;case 1:i=c;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Tr===null||!Tr.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Dx(a,i,t);zm(a,y);break e}}a=a.return}while(a!==null)}Qx(n)}catch(C){t=C,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function Gx(){var e=Qi.current;return Qi.current=qi,e===null?qi:e}function qp(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),ot===null||!(po&268435455)&&!(wc&268435455)||vr(ot,lt)}function ec(e,t){var n=ye;ye|=2;var o=Gx();(ot!==e||lt!==t)&&(In=null,ao(e,t));do try{Z8();break}catch(s){Yx(e,s)}while(1);if(Dp(),ye=n,Qi.current=o,Ye!==null)throw Error(A(261));return ot=null,lt=0,Xe}function Z8(){for(;Ye!==null;)qx(Ye)}function K8(){for(;Ye!==null&&!vb();)qx(Ye)}function qx(e){var t=Jx(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Qx(e):Ye=t,Wp.current=null}function Qx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z8(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ye=null;return}}else if(n=I8(n,t,Mt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Xe===0&&(Xe=5)}function Jr(e,t,n){var o=we,s=Qt.transition;try{Qt.transition=null,we=1,Y8(e,t,n,o)}finally{Qt.transition=s,we=o}return null}function Y8(e,t,n,o){do ls();while(jr!==null);if(ye&6)throw Error(A(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Eb(e,a),e===ot&&(Ye=ot=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,eg($i,function(){return ls(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qt.transition,Qt.transition=null;var l=we;we=1;var i=ye;ye|=4,Wp.current=null,U8(e,n),Wx(n,e),m8(ju),Mi=!!bu,ju=bu=null,e.current=n,V8(n),bb(),ye=i,we=l,Qt.transition=a}else e.current=n;if(Ql&&(Ql=!1,jr=e,Ji=s),a=e.pendingLanes,a===0&&(Tr=null),Sb(n.stateNode),Bt(e,Ze()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(Xi)throw Xi=!1,e=zu,zu=null,e;return Ji&1&&e.tag!==0&&ls(),a=e.pendingLanes,a&1?e===Fu?ya++:(ya=0,Fu=e):ya=0,Mr(),null}function ls(){if(jr!==null){var e=R2(Ji),t=Qt.transition,n=we;try{if(Qt.transition=null,we=16>e?16:e,jr===null)var o=!1;else{if(e=jr,jr=null,Ji=0,ye&6)throw Error(A(331));var s=ye;for(ye|=4,V=e.current;V!==null;){var a=V,l=a.child;if(V.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(V=d;V!==null;){var u=V;switch(u.tag){case 0:case 11:case 15:ba(8,u,a)}var p=u.child;if(p!==null)p.return=u,V=p;else for(;V!==null;){u=V;var f=u.sibling,b=u.return;if(Ux(u),u===d){V=null;break}if(f!==null){f.return=b,V=f;break}V=b}}}var S=a.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}V=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,V=l;else e:for(;V!==null;){if(a=V,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ba(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,V=g;break e}V=a.return}}var h=e.current;for(V=h;V!==null;){l=V;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,V=m;else e:for(l=h;V!==null;){if(i=V,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Cc(9,i)}}catch(C){Ve(i,i.return,C)}if(i===l){V=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,V=y;break e}V=i.return}}if(ye=s,Mr(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(fc,e)}catch{}o=!0}return o}finally{we=n,Qt.transition=t}}return!1}function cf(e,t,n){t=fs(n,t),t=Ox(e,t,1),e=_r(e,t,1),t=jt(),e!==null&&(tl(e,1,t),Bt(e,t))}function Ve(e,t,n){if(e.tag===3)cf(e,e,n);else for(;t!==null;){if(t.tag===3){cf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Tr===null||!Tr.has(o))){e=fs(n,e),e=Dx(t,e,1),t=_r(t,e,1),e=jt(),t!==null&&(tl(t,1,e),Bt(t,e));break}}t=t.return}}function G8(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(lt&n)===n&&(Xe===4||Xe===3&&(lt&130023424)===lt&&500>Ze()-Kp?ao(e,0):Zp|=n),Bt(e,t)}function Xx(e,t){t===0&&(e.mode&1?(t=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):t=1);var n=jt();e=qn(e,t),e!==null&&(tl(e,t,n),Bt(e,n))}function q8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xx(e,n)}function Q8(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),Xx(e,n)}var Jx;Jx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,P8(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,$e&&t.flags&1048576&&nx(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ci(e,t),e=t.pendingProps;var s=us(t,ft.current);as(t,n),s=zp(null,t,o,e,s,n);var a=Fp();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(o)?(a=!0,Ui(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$p(t),s.updater=yc,t.stateNode=s,s._reactInternals=t,Nu(t,o,e,n),t=Du(null,t,o,!0,a,n)):(t.tag=0,$e&&a&&Ep(t),bt(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=J8(o),e=un(o,e),s){case 0:t=Ou(null,t,o,e,n);break e;case 1:t=Xm(null,t,o,e,n);break e;case 11:t=qm(null,t,o,e,n);break e;case 14:t=Qm(null,t,o,un(o.type,e),n);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Ou(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Xm(e,t,o,s,n);case 3:e:{if(Ax(t),e===null)throw Error(A(387));o=t.pendingProps,a=t.memoizedState,s=a.element,ax(e,t),Ki(t,o,null,n);var l=t.memoizedState;if(o=l.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=fs(Error(A(423)),t),t=Jm(e,t,o,n,s);break e}else if(o!==s){s=fs(Error(A(424)),t),t=Jm(e,t,o,n,s);break e}else for(It=wr(t.stateNode.containerInfo.firstChild),zt=t,$e=!0,mn=null,n=dx(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),o===s){t=Qn(e,t,n);break e}bt(e,t,o,n)}t=t.child}return t;case 5:return ux(t),e===null&&Tu(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,yu(o,s)?l=null:a!==null&&yu(o,a)&&(t.flags|=32),$x(e,t),bt(e,t,l,n),t.child;case 6:return e===null&&Tu(t),null;case 13:return Mx(e,t,n);case 4:return Ap(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=hs(t,null,o,n):bt(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),qm(e,t,o,s,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,Ee(Wi,o._currentValue),o._currentValue=l,a!==null)if(gn(a.value,l)){if(a.children===s.children&&!Dt.current){t=Qn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(a.tag===1){c=Zn(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ku(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),ku(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}bt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,as(t,n),s=Jt(s),o=o(s),t.flags|=1,bt(e,t,o,n),t.child;case 14:return o=t.type,s=un(o,t.pendingProps),s=un(o.type,s),Qm(e,t,o,s,n);case 15:return Lx(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:un(o,s),Ci(e,t),t.tag=1,Lt(o)?(e=!0,Ui(t)):e=!1,as(t,n),ix(t,o,s),Nu(t,o,s,n),Du(null,t,o,!0,e,n);case 19:return Px(e,t,n);case 22:return Bx(e,t,n)}throw Error(A(156,t.tag))};function eg(e,t){return T2(e,t)}function X8(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,o){return new X8(e,t,n,o)}function Qp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J8(e){if(typeof e=="function")return Qp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xp)return 11;if(e===gp)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ti(e,t,n,o,s,a){var l=2;if(o=e,typeof e=="function")Qp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zo:return lo(n.children,s,a,t);case fp:l=8,s|=8;break;case Jd:return e=qt(12,n,t,s|2),e.elementType=Jd,e.lanes=a,e;case eu:return e=qt(13,n,t,s),e.elementType=eu,e.lanes=a,e;case tu:return e=qt(19,n,t,s),e.elementType=tu,e.lanes=a,e;case c2:return _c(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case l2:l=10;break e;case i2:l=9;break e;case xp:l=11;break e;case gp:l=14;break e;case mr:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=qt(l,n,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function lo(e,t,n,o){return e=qt(7,e,o,t),e.lanes=n,e}function _c(e,t,n,o){return e=qt(22,e,o,t),e.elementType=c2,e.lanes=n,e.stateNode={isHidden:!1},e}function kd(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function Ed(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ej(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xp(e,t,n,o,s,a,l,i,c){return e=new ej(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$p(a),e}function tj(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function tg(e){if(!e)return Rr;e=e._reactInternals;e:{if(vo(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Lt(n))return ex(e,n,t)}return t}function ng(e,t,n,o,s,a,l,i,c){return e=Xp(n,o,!0,e,s,a,l,i,c),e.context=tg(null),n=e.current,o=jt(),s=kr(n),a=Zn(o,s),a.callback=t??null,_r(n,a,s),e.current.lanes=s,tl(e,s,o),Bt(e,o),e}function Tc(e,t,n,o){var s=t.current,a=jt(),l=kr(s);return n=tg(n),t.context===null?t.context=n:t.pendingContext=n,t=Zn(a,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=_r(s,t,l),e!==null&&(xn(e,s,l,a),ji(e,s,l)),l}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jp(e,t){df(e,t),(e=e.alternate)&&df(e,t)}function nj(){return null}var rg=typeof reportError=="function"?reportError:function(e){console.error(e)};function eh(e){this._internalRoot=e}kc.prototype.render=eh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Tc(e,t,null,null)};kc.prototype.unmount=eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ho(function(){Tc(null,e,null,null)}),t[Gn]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=L2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gr.length&&t!==0&&t<gr[n].priority;n++);gr.splice(n,0,e),n===0&&$2(e)}};function th(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function rj(e,t,n,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var d=tc(l);a.call(d)}}var l=ng(t,o,e,0,null,!1,!1,"",uf);return e._reactRootContainer=l,e[Gn]=l.current,Aa(e.nodeType===8?e.parentNode:e),ho(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var i=o;o=function(){var d=tc(c);i.call(d)}}var c=Xp(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=c,e[Gn]=c.current,Aa(e.nodeType===8?e.parentNode:e),ho(function(){Tc(t,c,n,o)}),c}function Nc(e,t,n,o,s){var a=n._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var i=s;s=function(){var c=tc(l);i.call(c)}}Tc(t,l,e,s)}else l=rj(n,t,e,s,o);return tc(l)}O2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oa(t.pendingLanes);n!==0&&(jp(t,n|1),Bt(t,Ze()),!(ye&6)&&(xs=Ze()+500,Mr()))}break;case 13:ho(function(){var o=qn(e,1);if(o!==null){var s=jt();xn(o,e,1,s)}}),Jp(e,1)}};yp=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var n=jt();xn(t,e,134217728,n)}Jp(e,134217728)}};D2=function(e){if(e.tag===13){var t=kr(e),n=qn(e,t);if(n!==null){var o=jt();xn(n,e,t,o)}Jp(e,t)}};L2=function(){return we};B2=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};uu=function(e,t,n){switch(t){case"input":if(ou(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=bc(o);if(!s)throw Error(A(90));u2(o),ou(o,s)}}}break;case"textarea":h2(e,n);break;case"select":t=n.value,t!=null&&ns(e,!!n.multiple,t,!1)}};j2=Yp;y2=ho;var oj={usingClientEntryPoint:!1,Events:[rl,Ho,bc,v2,b2,Yp]},Zs={findFiberByHostInstance:to,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sj={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=w2(e),e===null?null:e.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||nj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{fc=Xl.inject(sj),Nn=Xl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oj;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(t))throw Error(A(200));return tj(e,t,null,n)};Vt.createRoot=function(e,t){if(!th(e))throw Error(A(299));var n=!1,o="",s=rg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Xp(e,1,!1,null,null,n,!1,o,s),e[Gn]=t.current,Aa(e.nodeType===8?e.parentNode:e),new eh(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=w2(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return ho(e)};Vt.hydrate=function(e,t,n){if(!Ec(t))throw Error(A(200));return Nc(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!th(e))throw Error(A(405));var o=n!=null&&n.hydratedSources||null,s=!1,a="",l=rg;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ng(t,null,e,1,n??null,s,!1,a,l),e[Gn]=t.current,Aa(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new kc(t)};Vt.render=function(e,t,n){if(!Ec(t))throw Error(A(200));return Nc(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!Ec(e))throw Error(A(40));return e._reactRootContainer?(ho(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Yp;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ec(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Nc(e,t,n,!1,o)};Vt.version="18.2.0-next-9e3b772b8-20220608";function og(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(og)}catch(e){console.error(e)}}og(),n2.exports=Vt;var Un=n2.exports;const aj=er(Un),lj=W1({__proto__:null,default:aj},[Un]);var pf=Un;Qd.createRoot=pf.createRoot,Qd.hydrateRoot=pf.hydrateRoot;function ij(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function cj(e,t){if(e==null)return{};var n=ij(e,t),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function dj(e){if(Array.isArray(e))return Hu(e)}function uj(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pj(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function hj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mj(e){return dj(e)||uj(e)||pj(e)||hj()}function Wa(e){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wa(e)}function fj(e,t){if(Wa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Wa(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xj(e){var t=fj(e,"string");return Wa(t)=="symbol"?t:String(t)}function sg(e,t,n){return t=xj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wu(){return Wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Wu.apply(this,arguments)}function hf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hf(Object(n),!0).forEach(function(o){sg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function gj(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Nd={};function vj(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Nd[t]||(Nd[t]=gj(e)),Nd[t]}function bj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(a){return a!=="token"}),s=vj(o);return s.reduce(function(a,l){return Qo(Qo({},a),n[l])},t)}function mf(e){return e.join(" ")}function jj(e,t){var n=0;return function(o){return n+=1,o.map(function(s,a){return ag({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function ag(e){var t=e.node,n=e.stylesheet,o=e.style,s=o===void 0?{}:o,a=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=jj(n,a),f;if(!a)f=Qo(Qo({},i),{},{className:mf(i.className)});else{var b=Object.keys(n).reduce(function(g,h){return h.split(".").forEach(function(m){g.includes(m)||g.push(m)}),g},[]),S=i.className&&i.className.includes("token")?["token"]:[],j=i.className&&S.concat(i.className.filter(function(g){return!b.includes(g)}));f=Qo(Qo({},i),{},{className:mf(j)||void 0,style:bj(i.className,Object.assign({},i.style,s),n)})}var _=p(t.children);return X.createElement(d,Wu({key:l},f),_)}}const yj=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Sj=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ff(Object(n),!0).forEach(function(o){sg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ff(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Cj=/\n/g;function wj(e){return e.match(Cj)}function _j(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(s,a){var l=a+n;return X.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function Tj(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,s=o===void 0?{float:"left",paddingRight:"10px"}:o,a=e.numberStyle,l=a===void 0?{}:a,i=e.startingLineNumber;return X.createElement("code",{style:Object.assign({},n,s)},_j({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function kj(e){return"".concat(e.toString().length,".25em")}function lg(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function ig(e,t,n){var o={display:"inline-block",minWidth:kj(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,a=Tn(Tn({},o),s);return a}function ki(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,s=e.largestLineNumber,a=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,f=typeof i=="function"?i(n):i;if(f.className=d,n&&a){var b=ig(o,n,s);t.unshift(lg(n,b))}return p&u&&(f.style=Tn(Tn({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function cg(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var s=e[o];if(s.type==="text")n.push(ki({children:[s],className:mj(new Set(t))}));else if(s.children){var a=t.concat(s.properties.className);cg(s.children,a).forEach(function(l){return n.push(l)})}}return n}function Ej(e,t,n,o,s,a,l,i,c){var d,u=cg(e.value),p=[],f=-1,b=0;function S(C,x){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ki({children:C,lineNumber:x,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:s,lineProps:n,className:w,showLineNumbers:o,wrapLongLines:c})}function j(C,x){if(o&&x&&s){var w=ig(i,x,l);C.unshift(lg(x,w))}return C}function _(C,x){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?S(C,x,w):j(C,x)}for(var g=function(){var x=u[b],w=x.children[0].value,E=wj(w);if(E){var N=w.split(`
`);N.forEach(function(D,$){var Y=o&&p.length+a,Q={type:"text",value:"".concat(D,`
`)};if($===0){var U=u.slice(f+1,b).concat(ki({children:[Q],className:x.properties.className})),ae=_(U,Y);p.push(ae)}else if($===N.length-1){var de=u[b+1]&&u[b+1].children&&u[b+1].children[0],W={type:"text",value:"".concat(D)};if(de){var L=ki({children:[W],className:x.properties.className});u.splice(b+1,0,L)}else{var P=[W],I=_(P,Y,x.properties.className);p.push(I)}}else{var H=[Q],K=_(H,Y,x.properties.className);p.push(K)}}),f=b}b++};b<u.length;)g();if(f!==u.length-1){var h=u.slice(f+1,u.length);if(h&&h.length){var m=o&&p.length+a,y=_(h,m);p.push(y)}}return t?p:(d=[]).concat.apply(d,p)}function Nj(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(s,a){return ag({node:s,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(a)})})}function dg(e){return e&&typeof e.highlightAuto<"u"}function Rj(e){var t=e.astGenerator,n=e.language,o=e.code,s=e.defaultCodeValue;if(dg(t)){var a=yj(t,n);return n==="text"?{value:s,language:"text"}:a?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:s}}catch{return{value:s}}}function Oj(e,t){return function(o){var s=o.language,a=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:s?"language-".concat(s):void 0,style:Tn(Tn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(s,'"]')])}:u,f=o.useInlineStyles,b=f===void 0?!0:f,S=o.showLineNumbers,j=S===void 0?!1:S,_=o.showInlineLineNumbers,g=_===void 0?!0:_,h=o.startingLineNumber,m=h===void 0?1:h,y=o.lineNumberContainerStyle,C=o.lineNumberStyle,x=C===void 0?{}:C,w=o.wrapLines,E=o.wrapLongLines,N=E===void 0?!1:E,D=o.lineProps,$=D===void 0?{}:D,Y=o.renderer,Q=o.PreTag,U=Q===void 0?"pre":Q,ae=o.CodeTag,de=ae===void 0?"code":ae,W=o.code,L=W===void 0?(Array.isArray(a)?a[0]:a)||"":W,P=o.astGenerator,I=cj(o,Sj);P=P||e;var H=j?X.createElement(Tj,{containerStyle:y,codeStyle:p.style||{},numberStyle:x,startingLineNumber:m,codeString:L}):null,K=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},_e=dg(P)?"hljs":"prismjs",ue=b?Object.assign({},I,{style:Object.assign({},K,d)}):Object.assign({},I,{className:I.className?"".concat(_e," ").concat(I.className):_e,style:Object.assign({},d)});if(N?p.style=Tn(Tn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Tn(Tn({},p.style),{},{whiteSpace:"pre"}),!P)return X.createElement(U,ue,H,X.createElement(de,p,L));(w===void 0&&Y||N)&&(w=!0),Y=Y||Nj;var Ce=[{type:"text",value:L}],ce=Rj({astGenerator:P,language:s,code:L,defaultCodeValue:Ce});ce.language===null&&(ce.value=Ce);var De=ce.value.length+m,ct=Ej(ce,w,$,j,g,m,De,x,N);return X.createElement(U,ue,X.createElement(de,p,!g&&H,Y({rows:ct,stylesheet:i,useInlineStyles:b})))}}var Dj=Bj,Lj=Object.prototype.hasOwnProperty;function Bj(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)Lj.call(n,o)&&(e[o]=n[o])}return e}var ug=pg,nh=pg.prototype;nh.space=null;nh.normal={};nh.property={};function pg(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var xf=Dj,$j=ug,Aj=Mj;function Mj(e){for(var t=e.length,n=[],o=[],s=-1,a,l;++s<t;)a=e[s],n.push(a.property),o.push(a.normal),l=a.space;return new $j(xf.apply(null,n),xf.apply(null,o),l)}var rh=Pj;function Pj(e){return e.toLowerCase()}var hg=mg,nn=mg.prototype;nn.space=null;nn.attribute=null;nn.property=null;nn.boolean=!1;nn.booleanish=!1;nn.overloadedBoolean=!1;nn.number=!1;nn.commaSeparated=!1;nn.spaceSeparated=!1;nn.commaOrSpaceSeparated=!1;nn.mustUseProperty=!1;nn.defined=!1;function mg(e,t){this.property=e,this.attribute=t}var Bn={},Ij=0;Bn.boolean=bo();Bn.booleanish=bo();Bn.overloadedBoolean=bo();Bn.number=bo();Bn.spaceSeparated=bo();Bn.commaSeparated=bo();Bn.commaOrSpaceSeparated=bo();function bo(){return Math.pow(2,++Ij)}var fg=hg,gf=Bn,xg=oh;oh.prototype=new fg;oh.prototype.defined=!0;var gg=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],zj=gg.length;function oh(e,t,n,o){var s=-1,a;for(vf(this,"space",o),fg.call(this,e,t);++s<zj;)a=gg[s],vf(this,a,(n&gf[a])===gf[a])}function vf(e,t,n){n&&(e[t]=n)}var bf=rh,Fj=ug,Uj=xg,sl=Vj;function Vj(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},s=e.properties,a=e.transform,l={},i={},c,d;for(c in s)d=new Uj(c,a(o,c),s[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[bf(c)]=c,i[bf(d.attribute)]=c;return new Fj(l,i,t)}var Hj=sl,Wj=Hj({space:"xlink",transform:Zj,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Zj(e,t){return"xlink:"+t.slice(5).toLowerCase()}var Kj=sl,Yj=Kj({space:"xml",transform:Gj,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Gj(e,t){return"xml:"+t.slice(3).toLowerCase()}var qj=Qj;function Qj(e,t){return t in e?e[t]:t}var Xj=qj,vg=Jj;function Jj(e,t){return Xj(e,t.toLowerCase())}var ey=sl,ty=vg,ny=ey({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:ty,properties:{xmlns:null,xmlnsXLink:null}}),sh=Bn,ry=sl,Et=sh.booleanish,Wt=sh.number,Qr=sh.spaceSeparated,oy=ry({transform:sy,properties:{ariaActiveDescendant:null,ariaAtomic:Et,ariaAutoComplete:null,ariaBusy:Et,ariaChecked:Et,ariaColCount:Wt,ariaColIndex:Wt,ariaColSpan:Wt,ariaControls:Qr,ariaCurrent:null,ariaDescribedBy:Qr,ariaDetails:null,ariaDisabled:Et,ariaDropEffect:Qr,ariaErrorMessage:null,ariaExpanded:Et,ariaFlowTo:Qr,ariaGrabbed:Et,ariaHasPopup:null,ariaHidden:Et,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qr,ariaLevel:Wt,ariaLive:null,ariaModal:Et,ariaMultiLine:Et,ariaMultiSelectable:Et,ariaOrientation:null,ariaOwns:Qr,ariaPlaceholder:null,ariaPosInSet:Wt,ariaPressed:Et,ariaReadOnly:Et,ariaRelevant:null,ariaRequired:Et,ariaRoleDescription:Qr,ariaRowCount:Wt,ariaRowIndex:Wt,ariaRowSpan:Wt,ariaSelected:Et,ariaSetSize:Wt,ariaSort:null,ariaValueMax:Wt,ariaValueMin:Wt,ariaValueNow:Wt,ariaValueText:null,role:null}});function sy(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Ss=Bn,ay=sl,ly=vg,me=Ss.boolean,iy=Ss.overloadedBoolean,Ks=Ss.booleanish,Ne=Ss.number,vt=Ss.spaceSeparated,Jl=Ss.commaSeparated,cy=ay({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:ly,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Jl,acceptCharset:vt,accessKey:vt,action:null,allow:null,allowFullScreen:me,allowPaymentRequest:me,allowUserMedia:me,alt:null,as:null,async:me,autoCapitalize:null,autoComplete:vt,autoFocus:me,autoPlay:me,capture:me,charSet:null,checked:me,cite:null,className:vt,cols:Ne,colSpan:null,content:null,contentEditable:Ks,controls:me,controlsList:vt,coords:Ne|Jl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:me,defer:me,dir:null,dirName:null,disabled:me,download:iy,draggable:Ks,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:me,formTarget:null,headers:vt,height:Ne,hidden:me,high:Ne,href:null,hrefLang:null,htmlFor:vt,httpEquiv:vt,id:null,imageSizes:null,imageSrcSet:Jl,inputMode:null,integrity:null,is:null,isMap:me,itemId:null,itemProp:vt,itemRef:vt,itemScope:me,itemType:vt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:me,low:Ne,manifest:null,max:null,maxLength:Ne,media:null,method:null,min:null,minLength:Ne,multiple:me,muted:me,name:null,nonce:null,noModule:me,noValidate:me,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:me,optimum:Ne,pattern:null,ping:vt,placeholder:null,playsInline:me,poster:null,preload:null,readOnly:me,referrerPolicy:null,rel:vt,required:me,reversed:me,rows:Ne,rowSpan:Ne,sandbox:vt,scope:null,scoped:me,seamless:me,selected:me,shape:null,size:Ne,sizes:null,slot:null,span:Ne,spellCheck:Ks,src:null,srcDoc:null,srcLang:null,srcSet:Jl,start:Ne,step:null,style:null,tabIndex:Ne,target:null,title:null,translate:null,type:null,typeMustMatch:me,useMap:null,value:Ks,width:Ne,wrap:null,align:null,aLink:null,archive:vt,axis:null,background:null,bgColor:null,border:Ne,borderColor:null,bottomMargin:Ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:me,declare:me,event:null,face:null,frame:null,frameBorder:null,hSpace:Ne,leftMargin:Ne,link:null,longDesc:null,lowSrc:null,marginHeight:Ne,marginWidth:Ne,noResize:me,noHref:me,noShade:me,noWrap:me,object:null,profile:null,prompt:null,rev:null,rightMargin:Ne,rules:null,scheme:null,scrolling:Ks,standby:null,summary:null,text:null,topMargin:Ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:me,disableRemotePlayback:me,prefix:null,property:null,results:Ne,security:null,unselectable:null}}),dy=Aj,uy=Wj,py=Yj,hy=ny,my=oy,fy=cy,xy=dy([py,uy,hy,my,fy]),gy=rh,vy=xg,by=hg,ah="data",jy=Cy,yy=/^data[-\w.:]+$/i,bg=/-[a-z]/g,Sy=/[A-Z]/g;function Cy(e,t){var n=gy(t),o=t,s=by;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===ah&&yy.test(t)&&(t.charAt(4)==="-"?o=wy(t):t=_y(t),s=vy),new s(o,t))}function wy(e){var t=e.slice(5).replace(bg,ky);return ah+t.charAt(0).toUpperCase()+t.slice(1)}function _y(e){var t=e.slice(4);return bg.test(t)?e:(t=t.replace(Sy,Ty),t.charAt(0)!=="-"&&(t="-"+t),ah+t)}function Ty(e){return"-"+e.toLowerCase()}function ky(e){return e.charAt(1).toUpperCase()}var Ey=Ny,jf=/[#.]/g;function Ny(e,t){for(var n=e||"",o=t||"div",s={},a=0,l,i,c;a<n.length;)jf.lastIndex=a,c=jf.exec(n),l=n.slice(a,c?c.index:n.length),l&&(i?i==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:o=l,a+=l.length),c&&(i=c[0],a++);return{type:"element",tagName:o,properties:s,children:[]}}var lh={};lh.parse=Dy;lh.stringify=Ly;var yf="",Ry=" ",Oy=/[ \t\n\r\f]+/g;function Dy(e){var t=String(e||yf).trim();return t===yf?[]:t.split(Oy)}function Ly(e){return e.join(Ry).trim()}var ih={};ih.parse=By;ih.stringify=$y;var Zu=",",Sf=" ",aa="";function By(e){for(var t=[],n=String(e||aa),o=n.indexOf(Zu),s=0,a=!1,l;!a;)o===-1&&(o=n.length,a=!0),l=n.slice(s,o).trim(),(l||!a)&&t.push(l),s=o+1,o=n.indexOf(Zu,s);return t}function $y(e,t){var n=t||{},o=n.padLeft===!1?aa:Sf,s=n.padRight?Sf:aa;return e[e.length-1]===aa&&(e=e.concat(aa)),e.join(s+Zu+o).trim()}var Ay=jy,Cf=rh,My=Ey,wf=lh.parse,_f=ih.parse,Py=zy,Iy={}.hasOwnProperty;function zy(e,t,n){var o=n?Wy(n):null;return s;function s(l,i){var c=My(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&Iy.call(o,u)?o[u]:u,i&&Fy(i,c)&&(d.unshift(i),i=null),i)for(p in i)a(c.properties,p,i[p]);return jg(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(l,i,c){var d,u,p;c==null||c!==c||(d=Ay(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=wf(p):d.commaSeparated?p=_f(p):d.commaOrSpaceSeparated&&(p=wf(_f(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=Hy(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=Vy(d,u,p))}}function Fy(e,t){return typeof e=="string"||"length"in e||Uy(t.tagName,e)}function Uy(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function jg(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)jg(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function Vy(e,t,n){var o,s,a;if(typeof n!="object"||!("length"in n))return Tf(e,t,n);for(s=n.length,o=-1,a=[];++o<s;)a[o]=Tf(e,t,n[o]);return a}function Tf(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||Cf(n)===Cf(t))&&(o=!0),o}function Hy(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function Wy(e){for(var t=e.length,n=-1,o={},s;++n<t;)s=e[n],o[s.toLowerCase()]=s;return o}var Zy=xy,Ky=Py,yg=Ky(Zy,"div");yg.displayName="html";var Yy=yg,Gy=Yy;const qy="Æ",Qy="&",Xy="Á",Jy="Â",e7="À",t7="Å",n7="Ã",r7="Ä",o7="©",s7="Ç",a7="Ð",l7="É",i7="Ê",c7="È",d7="Ë",u7=">",p7="Í",h7="Î",m7="Ì",f7="Ï",x7="<",g7="Ñ",v7="Ó",b7="Ô",j7="Ò",y7="Ø",S7="Õ",C7="Ö",w7='"',_7="®",T7="Þ",k7="Ú",E7="Û",N7="Ù",R7="Ü",O7="Ý",D7="á",L7="â",B7="´",$7="æ",A7="à",M7="&",P7="å",I7="ã",z7="ä",F7="¦",U7="ç",V7="¸",H7="¢",W7="©",Z7="¤",K7="°",Y7="÷",G7="é",q7="ê",Q7="è",X7="ð",J7="ë",e9="½",t9="¼",n9="¾",r9=">",o9="í",s9="î",a9="¡",l9="ì",i9="¿",c9="ï",d9="«",u9="<",p9="¯",h9="µ",m9="·",f9=" ",x9="¬",g9="ñ",v9="ó",b9="ô",j9="ò",y9="ª",S9="º",C9="ø",w9="õ",_9="ö",T9="¶",k9="±",E9="£",N9='"',R9="»",O9="®",D9="§",L9="­",B9="¹",$9="²",A9="³",M9="ß",P9="þ",I9="×",z9="ú",F9="û",U9="ù",V9="¨",H9="ü",W9="ý",Z9="¥",K9="ÿ",Y9={AElig:qy,AMP:Qy,Aacute:Xy,Acirc:Jy,Agrave:e7,Aring:t7,Atilde:n7,Auml:r7,COPY:o7,Ccedil:s7,ETH:a7,Eacute:l7,Ecirc:i7,Egrave:c7,Euml:d7,GT:u7,Iacute:p7,Icirc:h7,Igrave:m7,Iuml:f7,LT:x7,Ntilde:g7,Oacute:v7,Ocirc:b7,Ograve:j7,Oslash:y7,Otilde:S7,Ouml:C7,QUOT:w7,REG:_7,THORN:T7,Uacute:k7,Ucirc:E7,Ugrave:N7,Uuml:R7,Yacute:O7,aacute:D7,acirc:L7,acute:B7,aelig:$7,agrave:A7,amp:M7,aring:P7,atilde:I7,auml:z7,brvbar:F7,ccedil:U7,cedil:V7,cent:H7,copy:W7,curren:Z7,deg:K7,divide:Y7,eacute:G7,ecirc:q7,egrave:Q7,eth:X7,euml:J7,frac12:e9,frac14:t9,frac34:n9,gt:r9,iacute:o9,icirc:s9,iexcl:a9,igrave:l9,iquest:i9,iuml:c9,laquo:d9,lt:u9,macr:p9,micro:h9,middot:m9,nbsp:f9,not:x9,ntilde:g9,oacute:v9,ocirc:b9,ograve:j9,ordf:y9,ordm:S9,oslash:C9,otilde:w9,ouml:_9,para:T9,plusmn:k9,pound:E9,quot:N9,raquo:R9,reg:O9,sect:D9,shy:L9,sup1:B9,sup2:$9,sup3:A9,szlig:M9,thorn:P9,times:I9,uacute:z9,ucirc:F9,ugrave:U9,uml:V9,uuml:H9,yacute:W9,yen:Z9,yuml:K9},G9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Sg=q9;function q9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var Q9=X9;function X9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var J9=eS;function eS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var tS=J9,nS=Sg,rS=oS;function oS(e){return tS(e)||nS(e)}var ei,sS=59,aS=lS;function lS(e){var t="&"+e+";",n;return ei=ei||document.createElement("i"),ei.innerHTML=t,n=ei.textContent,n.charCodeAt(n.length-1)===sS&&e!=="semi"||n===t?!1:n}var kf=Y9,Ef=G9,iS=Sg,cS=Q9,Cg=rS,dS=aS,uS=wS,pS={}.hasOwnProperty,Lo=String.fromCharCode,hS=Function.prototype,Nf={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},mS=9,Rf=10,fS=12,xS=32,Of=38,gS=59,vS=60,bS=61,jS=35,yS=88,SS=120,CS=65533,Ao="named",ch="hexadecimal",dh="decimal",uh={};uh[ch]=16;uh[dh]=10;var Rc={};Rc[Ao]=Cg;Rc[dh]=iS;Rc[ch]=cS;var wg=1,_g=2,Tg=3,kg=4,Eg=5,Ku=6,Ng=7,Pr={};Pr[wg]="Named character references must be terminated by a semicolon";Pr[_g]="Numeric character references must be terminated by a semicolon";Pr[Tg]="Named character references cannot be empty";Pr[kg]="Numeric character references cannot be empty";Pr[Eg]="Named character references must be known";Pr[Ku]="Numeric character references cannot be disallowed";Pr[Ng]="Numeric character references cannot be outside the permissible Unicode range";function wS(e,t){var n={},o,s;t||(t={});for(s in Nf)o=t[s],n[s]=o??Nf[s];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),_S(e,n)}function _S(e,t){var n=t.additional,o=t.nonTerminated,s=t.text,a=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],f=e.length,b=0,S=-1,j=u.column||1,_=u.line||1,g="",h=[],m,y,C,x,w,E,N,D,$,Y,Q,U,ae,de,W,L,P,I,H;for(typeof n=="string"&&(n=n.charCodeAt(0)),L=K(),D=l?_e:hS,b--,f++;++b<f;)if(w===Rf&&(j=p[S]||1),w=e.charCodeAt(b),w===Of){if(N=e.charCodeAt(b+1),N===mS||N===Rf||N===fS||N===xS||N===Of||N===vS||N!==N||n&&N===n){g+=Lo(w),j++;continue}for(ae=b+1,U=ae,H=ae,N===jS?(H=++U,N=e.charCodeAt(H),N===yS||N===SS?(de=ch,H=++U):de=dh):de=Ao,m="",Q="",x="",W=Rc[de],H--;++H<f&&(N=e.charCodeAt(H),!!W(N));)x+=Lo(N),de===Ao&&pS.call(kf,x)&&(m=x,Q=kf[x]);C=e.charCodeAt(H)===gS,C&&(H++,y=de===Ao?dS(x):!1,y&&(m=x,Q=y)),I=1+H-ae,!C&&!o||(x?de===Ao?(C&&!Q?D(Eg,1):(m!==x&&(H=U+m.length,I=1+H-U,C=!1),C||($=m?wg:Tg,t.attribute?(N=e.charCodeAt(H),N===bS?(D($,I),Q=null):Cg(N)?Q=null:D($,I)):D($,I))),E=Q):(C||D(_g,I),E=parseInt(x,uh[de]),TS(E)?(D(Ng,I),E=Lo(CS)):E in Ef?(D(Ku,I),E=Ef[E]):(Y="",kS(E)&&D(Ku,I),E>65535&&(E-=65536,Y+=Lo(E>>>10|55296),E=56320|E&1023),E=Y+Lo(E))):de!==Ao&&D(kg,I)),E?(ue(),L=K(),b=H-1,j+=H-ae+1,h.push(E),P=K(),P.offset++,a&&a.call(c,E,{start:L,end:P},e.slice(ae-1,H)),L=P):(x=e.slice(ae-1,H),g+=x,j+=x.length,b=H-1)}else w===10&&(_++,S++,j=0),w===w?(g+=Lo(w),j++):ue();return h.join("");function K(){return{line:_,column:j,offset:b+(u.offset||0)}}function _e(Ce,ce){var De=K();De.column+=ce,De.offset+=ce,l.call(d,Pr[Ce],De,Ce)}function ue(){g&&(h.push(g),s&&s.call(i,g,{start:L,end:K()}),g="")}}function TS(e){return e>=55296&&e<=57343||e>1114111}function kS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Rg={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof c?new c(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++a}),h.__id},clone:function h(m,y){y=y||{};var C,x;switch(i.util.type(m)){case"Object":if(x=i.util.objId(m),y[x])return y[x];C={},y[x]=C;for(var w in m)m.hasOwnProperty(w)&&(C[w]=h(m[w],y));return C;case"Array":return x=i.util.objId(m),y[x]?y[x]:(C=[],y[x]=C,m.forEach(function(E,N){C[N]=h(E,y)}),C);default:return m}},getLanguage:function(h){for(;h;){var m=s.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var y in m)if(m[y].src==h)return m[y]}return null}},isActive:function(h,m,y){for(var C="no-"+m;h;){var x=h.classList;if(x.contains(m))return!0;if(x.contains(C))return!1;h=h.parentElement}return!!y}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,m){var y=i.util.clone(i.languages[h]);for(var C in m)y[C]=m[C];return y},insertBefore:function(h,m,y,C){C=C||i.languages;var x=C[h],w={};for(var E in x)if(x.hasOwnProperty(E)){if(E==m)for(var N in y)y.hasOwnProperty(N)&&(w[N]=y[N]);y.hasOwnProperty(E)||(w[E]=x[E])}var D=C[h];return C[h]=w,i.languages.DFS(i.languages,function($,Y){Y===D&&$!=h&&(this[$]=w)}),w},DFS:function h(m,y,C,x){x=x||{};var w=i.util.objId;for(var E in m)if(m.hasOwnProperty(E)){y.call(m,E,m[E],C||E);var N=m[E],D=i.util.type(N);D==="Object"&&!x[w(N)]?(x[w(N)]=!0,h(N,y,null,x)):D==="Array"&&!x[w(N)]&&(x[w(N)]=!0,h(N,y,E,x))}}},plugins:{},highlightAll:function(h,m){i.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,y){var C={callback:y,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var x=0,w;w=C.elements[x++];)i.highlightElement(w,m===!0,C.callback)},highlightElement:function(h,m,y){var C=i.util.getLanguage(h),x=i.languages[C];i.util.setLanguage(h,C);var w=h.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,C);var E=h.textContent,N={element:h,language:C,grammar:x,code:E};function D(Y){N.highlightedCode=Y,i.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,i.hooks.run("after-highlight",N),i.hooks.run("complete",N),y&&y.call(N.element)}if(i.hooks.run("before-sanity-check",N),w=N.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!N.code){i.hooks.run("complete",N),y&&y.call(N.element);return}if(i.hooks.run("before-highlight",N),!N.grammar){D(i.util.encode(N.code));return}if(m&&o.Worker){var $=new Worker(i.filename);$.onmessage=function(Y){D(Y.data)},$.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else D(i.highlight(N.code,N.grammar,N.language))},highlight:function(h,m,y){var C={code:h,grammar:m,language:y};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,m){var y=m.rest;if(y){for(var C in y)m[C]=y[C];delete m.rest}var x=new p;return f(x,x.head,h),u(h,x,m,x.head,0),S(x)},hooks:{all:{},add:function(h,m){var y=i.hooks.all;y[h]=y[h]||[],y[h].push(m)},run:function(h,m){var y=i.hooks.all[h];if(!(!y||!y.length))for(var C=0,x;x=y[C++];)x(m)}},Token:c};o.Prism=i;function c(h,m,y,C){this.type=h,this.content=m,this.alias=y,this.length=(C||"").length|0}c.stringify=function h(m,y){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(D){C+=h(D,y)}),C}var x={type:m.type,content:h(m.content,y),tag:"span",classes:["token",m.type],attributes:{},language:y},w=m.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(x.classes,w):x.classes.push(w)),i.hooks.run("wrap",x);var E="";for(var N in x.attributes)E+=" "+N+'="'+(x.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+E+">"+x.content+"</"+x.tag+">"};function d(h,m,y,C){h.lastIndex=m;var x=h.exec(y);if(x&&C&&x[1]){var w=x[1].length;x.index+=w,x[0]=x[0].slice(w)}return x}function u(h,m,y,C,x,w){for(var E in y)if(!(!y.hasOwnProperty(E)||!y[E])){var N=y[E];N=Array.isArray(N)?N:[N];for(var D=0;D<N.length;++D){if(w&&w.cause==E+","+D)return;var $=N[D],Y=$.inside,Q=!!$.lookbehind,U=!!$.greedy,ae=$.alias;if(U&&!$.pattern.global){var de=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,de+"g")}for(var W=$.pattern||$,L=C.next,P=x;L!==m.tail&&!(w&&P>=w.reach);P+=L.value.length,L=L.next){var I=L.value;if(m.length>h.length)return;if(!(I instanceof c)){var H=1,K;if(U){if(K=d(W,P,h,Q),!K||K.index>=h.length)break;var ce=K.index,_e=K.index+K[0].length,ue=P;for(ue+=L.value.length;ce>=ue;)L=L.next,ue+=L.value.length;if(ue-=L.value.length,P=ue,L.value instanceof c)continue;for(var Ce=L;Ce!==m.tail&&(ue<_e||typeof Ce.value=="string");Ce=Ce.next)H++,ue+=Ce.value.length;H--,I=h.slice(P,ue),K.index-=P}else if(K=d(W,0,I,Q),!K)continue;var ce=K.index,De=K[0],ct=I.slice(0,ce),_t=I.slice(ce+De.length),ge=P+I.length;w&&ge>w.reach&&(w.reach=ge);var Le=L.prev;ct&&(Le=f(m,Le,ct),P+=ct.length),b(m,Le,H);var et=new c(E,Y?i.tokenize(De,Y):De,ae,De);if(L=f(m,Le,et),_t&&f(m,L,_t),H>1){var At={cause:E+","+D,reach:ge};u(h,m,y,L.prev,P,At),w&&At.reach>w.reach&&(w.reach=At.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,y){var C=m.next,x={value:y,prev:m,next:C};return m.next=x,C.prev=x,h.length++,x}function b(h,m,y){for(var C=m.next,x=0;x<y&&C!==h.tail;x++)C=C.next;m.next=C,C.prev=m,h.length-=x}function S(h){for(var m=[],y=h.head.next;y!==h.tail;)m.push(y.value),y=y.next;return m}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(h){var m=JSON.parse(h.data),y=m.language,C=m.code,x=m.immediateClose;o.postMessage(i.highlight(C,i.languages[y],y)),x&&o.close()},!1)),i;var j=i.util.currentScript();j&&(i.filename=j.src,j.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Oi<"u"&&(Oi.Prism=n)})(Rg);var ES=Rg.exports,NS=ph;ph.displayName="markup";ph.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function ph(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Og=hh;hh.displayName="css";hh.aliases=[];function hh(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const RS=er(Og);var OS=mh;mh.displayName="clike";mh.aliases=[];function mh(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var DS=fh;fh.displayName="javascript";fh.aliases=["js"];function fh(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var la=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Oi=="object"?Oi:{},LS=GS();la.Prism={manual:!0,disableWorkerMessageHandler:!0};var BS=Gy,$S=uS,Dg=ES,AS=NS,MS=Og,PS=OS,IS=DS;LS();var xh={}.hasOwnProperty;function Lg(){}Lg.prototype=Dg;var Ge=new Lg,zS=Ge;Ge.highlight=US;Ge.register=al;Ge.alias=FS;Ge.registered=VS;Ge.listLanguages=HS;al(AS);al(MS);al(PS);al(IS);Ge.util.encode=KS;Ge.Token.stringify=WS;function al(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function FS(e,t){var n=Ge.languages,o=e,s,a,l,i;t&&(o={},o[e]=t);for(s in o)for(a=o[s],a=typeof a=="string"?[a]:a,l=a.length,i=-1;++i<l;)n[a[i]]=n[s]}function US(e,t){var n=Dg.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(xh.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function VS(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return xh.call(Ge.languages,e)}function HS(){var e=Ge.languages,t=[],n;for(n in e)xh.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function WS(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?ZS(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),BS(o.tag+"."+o.classes.join("."),YS(o.attributes),o.content))}function ZS(e,t){for(var n=[],o=e.length,s=-1,a;++s<o;)a=e[s],a!==""&&a!==null&&a!==void 0&&n.push(a);for(s=-1,o=n.length;++s<o;)a=n[s],n[s]=Ge.Token.stringify(a,t,n);return n}function KS(e){return e}function YS(e){var t;for(t in e)e[t]=$S(e[t]);return e}function GS(){var e="Prism"in la,t=e?la.Prism:void 0;return n;function n(){e?la.Prism=t:delete la.Prism,e=void 0,t=void 0}}const gh=er(zS);var vh=Oj(gh,{});vh.registerLanguage=function(e,t){return gh.register(t)};vh.alias=function(e,t){return gh.alias(e,t)};const jo=vh;var qS=bh;bh.displayName="bash";bh.aliases=["shell"];function bh(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,i=0;i<a.length;i++)l[a[i]]=t.languages.bash[a[i]];t.languages.shell=t.languages.bash})(e)}const QS=er(qS);var XS=jh;jh.displayName="json";jh.aliases=["webmanifest"];function jh(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const JS=er(XS);var eC=yh;yh.displayName="jsx";yh.aliases=[];function yh(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return a}),RegExp(d,u)}a=l(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var f=d[p],b=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:i(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:b=!0),(b||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var S=i(f);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(S+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(S=i(d[p-1])+S,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",S,null,S)}f.content&&typeof f.content!="string"&&c(f.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const tC=er(eC);var nC=Sh;Sh.displayName="scss";Sh.aliases=[];function Sh(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const rC=er(nC);var oC=Ch;Ch.displayName="yaml";Ch.aliases=["yml"];function Ch(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,s="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return s})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return s}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const sC=er(oC);function Bg(e){return typeof e=="boolean"}function yo(e){return typeof e=="string"}function wh(e){return typeof e=="number"}function $g(e){return Number.isInteger(e)}function Cs(e){return Array.isArray(e)}function Oc(e){return typeof e=="function"}function aC(e){return e instanceof RegExp}function So(e){return typeof e=="object"&&!Cs(e)&&!Ag(e)}function lC(e){return e===void 0}function Ag(e){return e===null}function be(e){return!(lC(e)||Ag(e))}function Dc(e){return!be(e)}function Mg(...e){throw new Error(e.join(""))}const Lc=(e,...t)=>Oc(e)?e(...t):e;function ke(){}const Pg=e=>e;function iC(){return Intl.DateTimeFormat().resolvedOptions().locale}let _h={locale:iC(),currency:"GBP",currencySign:"£",thousands:","};const cC=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((s,a)=>s+a*o)};function dC(e,t={}){return new Intl.NumberFormat(t.locale||_h.locale,t).format(e)}function uC(e,t={}){return dC(e,{style:"currency",currency:_h.currency,...t})}function ia(e,t=_h.thousands){if(Dc(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function Ig(e,t=/,\s*|\s+/){return Dc(e)?[]:yo(e)?e.length?e.split(t):[]:Cs(e)?e:[e]}function Za(e,t=!0,n={}){return So(e)?e:Ig(e).reduce((o,s)=>(o[s]=Oc(t)?t(s):t,o),n)}function zg(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const pC=zg;function hC(e){if(Oc(e))return e;if(aC(e))return t=>e.test(t);if(So(e))return t=>!!e[t];if(Cs(e)||yo(e)){const t=Za(e);return n=>!!t[n]}Mg("Invalid selector() specification: "+e)}const Th=(e,t,n={})=>{let o={},s={delete:!1,...n};const a=hC(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),o[l]=i}}),o},Df=(e,t)=>parseInt(e[t]||0),Lf=(e,t)=>parseFloat(e[t]||0),Bf=(e,t)=>(e[t]||"").toString(),$f=e=>(t,n)=>Df(t,e)-Df(n,e),Rd=e=>(t,n)=>Lf(t,e)-Lf(n,e),Af=e=>(t,n)=>{let o=Bf(t,e).toLowerCase(),s=Bf(n,e).toLowerCase();return o>s?1:s>o?-1:0},mC=e=>(t,n)=>e(n,t);function fC(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function Ir(e){return new Promise(t=>setTimeout(t,e))}jo.registerLanguage("jsx",tC);jo.registerLanguage("json",JS);jo.registerLanguage("css",RS);jo.registerLanguage("scss",rC);jo.registerLanguage("bash",QS);jo.registerLanguage("yaml",sC);const Vn=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:s=o,className:a="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,f]=v.useState(o),b=()=>{navigator.clipboard.writeText(e),u(!0),Ir(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${a} ${p?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>f(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:b,children:d?"Copied":"Copy"})]}),r.jsx(jo,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:xC(e,{undent:c})})]})},xC=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},te=({Component:e,code:t,html:n,children:o,className:s="",language:a,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[r.jsx("div",{className:"source",children:r.jsx(Vn,{code:t||n,language:n?"html":a,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),ti=v.createContext();function Mf(e){return typeof e=="function"}function Pf(e){return typeof e=="object"&&!Fg(e)&&!gC(e)}function Fg(e){return Array.isArray(e)}function gC(e){return e===null}function vC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:s}){if(!n)return r.jsx(t,{...o,ref:s});let a={},l=Mf(n)?n(e):e[n];if(Fg(l)&&(t=l[0],l=l[1]),Mf(l)){const i=l(o,s,e);if(X.isValidElement(i))return i;Pf(i)&&Object.assign(a,o,i)}else Pf(l)?Object.assign(a,l,o):Object.assign(a,o);return r.jsx(t,{...a,ref:s})}const bC=e=>({Context:ti,Provider:({children:t,...n})=>r.jsx(ti.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ti.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>X.forwardRef((o,s)=>r.jsx(ti.Consumer,{children:a=>r.jsx(vC,{Implementation:t,context:a,spec:n,props:o,ref:s})}))}),Ug=bC(),ee=Ug.Component,jC="svg",Yu="-",Vg="fill",yC="path",SC="line",CC="rect",wC="array",_C="circle",TC="ellipse",kC="polygon",EC="polyline",kh=/-(?!\d)/,If="currentColor",Eh=512,Nh=512,ll={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function NC(e,t,n=ll){n.icons[e]=t}function RC(e,t=ll){Object.entries(e).forEach(([n,o])=>NC(n,o,t))}const ni=v.createContext();function zf(e){return typeof e=="function"}function Ff(e){return typeof e=="object"&&!Hg(e)&&!OC(e)}function Hg(e){return Array.isArray(e)}function OC(e){return e===null}function DC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:s}){if(!n)return r.jsx(t,{...o,ref:s});let a={},l=zf(n)?n(e):e[n];if(Hg(l)&&(t=l[0],l=l[1]),zf(l)){const i=l(o,s,e);if(X.isValidElement(i))return i;Ff(i)&&Object.assign(a,o,i)}else Ff(l)?Object.assign(a,l,o):Object.assign(a,o);return r.jsx(t,{...a,ref:s})}const LC=e=>({Context:ni,Provider:({children:t,...n})=>r.jsx(ni.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ni.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>X.forwardRef((o,s)=>r.jsx(ni.Consumer,{children:a=>r.jsx(DC,{Implementation:t,context:a,spec:n,props:o,ref:s})}))}),BC=LC(),$C=BC.Component;function nr(e){return typeof e=="string"}function il(e){return Array.isArray(e)}function Bc(e){return typeof e=="object"&&!il(e)&&!Zg(e)}function Wg(e){return e===void 0}function Zg(e){return e===null}function $c(e){return!(Wg(e)||Zg(e))}function Kg(e){return!$c(e)}function Xn(...e){throw new Error(e.join(""))}function AC(){return Intl.DateTimeFormat().resolvedOptions().locale}AC();function Gu(e,t=/,\s*|\s+/){return Kg(e)?[]:nr(e)?e.length?e.split(t):[]:il(e)?e:[e]}const MC=(e,t)=>{const n=e[t];return delete e[t],n};function cl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,s]=n.split(/\s*[:=]\s*/);return t[o]=Wg(s)?!0:s,t},{})}const Rh=e=>e.filter($c).join(" "),PC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),IC=(...e)=>Rh(e.flatMap(t=>Bc(t)?PC(t):t)),zC=e=>Gu(e,/\s+/),Yg={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Or={flip:(e,t)=>{nr(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Or.flop=Or.flipy;Or["flip-x"]=Or.flipx;Or["flip-y"]=Or.flipy;function Gg(e,t={...Yg}){const n=nr(e)?cl(e):e||{};return Object.entries(n).reduce((o,[s,a])=>{const l=s.toLowerCase();return(Or[l]||Xn(`Invalid transform: ${l}`))(o,a),o},t)}const FC=4.42,Pn=e=>`${FC*e}%`,UC={},qu={outline:{fill:"none",stroke:"currentColor",strokeWidth:Pn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Pn(.5)},thinner:{strokeWidth:Pn(1)},thin:{strokeWidth:Pn(1.5)},medium:{strokeWidth:Pn(2)},thick:{strokeWidth:Pn(2.5)},thicker:{strokeWidth:Pn(3)},thickest:{strokeWidth:Pn(3.5)}};qu.line=qu.outline;const VC={...Object.entries(qu).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?If:t,stroke:(e,t)=>e.stroke=t===!0?If:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Pn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function nc(e,t){return(nr(t)?t.split(kh):t).forEach(n=>{const[o,s=!0]=n.split(/[:=]/),a=o.toLowerCase(),l=VC[a];if(l){l(e.style||(e.style={...UC}),s);return}(Or[a]||Xn(`Invalid style or transform: ${a}`))(e.transform||(e.transform={...Yg}),s)})}const HC={width:Eh,height:Nh,type:Vg},qg={svg:e=>({element:jC,svg:e}),array:e=>({element:wC,items:e}),path:e=>({element:yC,d:e}),polygon:e=>({element:kC,points:e}),polyline:e=>({element:EC,points:e}),circle:e=>({element:_C,...ri(e,"cx cy r")}),ellipse:e=>({element:TC,...ri(e,"cx cy rx ry")}),line:e=>({element:SC,...ri(e,"x1 y1 x2 y2")}),rect:e=>({element:CC,...ri(e,"x y width height rx ry")})};function ri(e,t){const n=il(t)?[...t]:Gu(t);return Gu(e).reduce((o,s)=>{if(n.length){const a=n.shift();o[a]=s}return o},{})}const Qg=e=>{const[t,n=""]=e.split("?"),[o,...s]=t.split(/\.(?!\d)/),a=o.split(kh).filter(i=>i.length),l=cl(n);return{dashes:a,classes:s,style:l}},WC=(e,t)=>{const n=Qg(e),{dashes:o}=n;for(let s=o.length;s>0;s--){const a=o.slice(0,s).join(Yu);if(t[a]){n.name=o.splice(0,s).join(Yu);break}}return n},Uf=(e,t,n={})=>{const{icons:o}=t,s=WC(e,o),{name:a,classes:l,style:i,dashes:c}=s;Kg(a)&&Xn(`No icon found matching any leading subset of ${s.dashes.join(Yu)}`);const d=t.icons[a]||Xn(`Icon not found in data: ${a}`),u=Xg(d,t,{...n,name:a});if((l.length||n.className)&&(u.className=Rh([...l||[],n.className])),u.transform&&(u.transform=Gg(u.transform)),u.style&&(u.style=nr(u.style)?cl(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};nc(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&nc(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function ZC(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const Xg=(e,t,n={})=>{const{defaults:o={}}=t,s={...HC,...o,...n};return Jg(s,e,t)},Jg=(e,t,n)=>{if(nr(t))return KC(e,t);if(Bc(t))return YC(e,t,n);if(il(t))return GC(e,t,n);Xn(`Cannot parse icon data: ${t}`)};function KC(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,s]=n,{dashes:a,classes:l}=Qg(o),i=a.shift(),c=qg[i]||Xn(`Invalid icon data element: ${i}`);return e.body=c(s),l.length&&(e.body.className=Rh(l)),a.length&&nc(e.body,a),e}return e.body={element:"path",d:t},e}function YC(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const s=MC(o,"data");return Jg(e,s,n),Object.assign(e,o),e}for(let s of Object.entries(qg)){const[a,l]=s,i=o[a];if($c(i))return e.body=l(i),delete o[a],Object.assign(e,o),e}Xn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function GC(e,t,n){return e.body={element:"array",items:t.map(o=>Xg(o,n).body)},e}const qC=({size:e,...t})=>{t.width??(t.width=e||Eh),t.height??(t.height=e||Nh),t.path&&Object.assign(t,ZC(t.path));let n;return t.style&&(nr(t.style)?(n=cl(t.style),t.style={}):n={...t.style}),nc(t,t.type?t.type.split(kh).filter(o=>o.length):Vg),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=Gg(t.transform)),t},Oh=e=>Bc(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,s=>s[1].toUpperCase())]=o,t),{}):e,QC=e=>$c(e)?Oh(cl(e)):null,rr=({style:e,class:t,...n})=>({style:nr(e)?QC(e):Oh(e),className:t,...n}),XC=e=>r.jsx("circle",{...rr(e)}),JC=e=>r.jsx("ellipse",{...rr(e)}),ew=e=>r.jsx("line",{...rr(e)}),e3=e=>r.jsx("path",{...rr(e)}),tw=e=>r.jsx("polygon",{...rr(e)}),nw=e=>r.jsx("polyline",{...rr(e)}),rw=e=>r.jsx("rect",{...rr(e)}),ow=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...rr(t)}),sw=({items:e,...t})=>r.jsx("g",{...rr(t),children:e.map((n,o)=>r.jsx(rc,{body:n},o))}),aw={array:sw,circle:XC,ellipse:JC,line:ew,path:e3,polygon:tw,polyline:nw,rect:rw,svg:ow},rc=({path:e,body:t,...n})=>{if(e)return r.jsx(e3,{d:e,...n});if(nr(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Bc(t)){const{element:o,...s}=t,a=aw[o]||Xn(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(a,{...s})}if(il(t))return t.map((o,s)=>r.jsx(rc,{body:o},s));Xn(`Don't know how to handle body: ${t}`)};function lw({width:e,height:t,transform:n,children:o}){const s=e/2,a=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${s} ${a})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${s} -${a})`,children:o})})})}const Od=({onClick:e,minx:t=0,miny:n=0,width:o=Eh,height:s=Nh,style:a,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${s}`,className:`${i} icon`,style:Oh(a),onClick:e,children:[!!c&&console.log("style: ",a),l?r.jsx(lw,{width:o,height:s,transform:l,children:r.jsx(rc,{...d})}):r.jsx(rc,{...d})]}),iw=({name:e,iconsClass:t="icons",library:n=ll,...o})=>{if(!e)return r.jsx(Od,{...qC(o)});const s=zC(e);return s.length===1?r.jsx(Od,{...o,...Uf(e,n,o)}):r.jsx("div",{className:IC(t,o.className),children:s.map(a=>r.jsx(Od,{...o,...Uf(a,n,o)},a))})},Ei=$C(iw,"Icon"),cw=e=>e.filter(be).join(" "),dw=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),fe=(...e)=>cw(e.flatMap(t=>So(t)?dw(t):t)),Dh=e=>{if(!e)return null;const[t,n,o,s,a]=e.split("-");return fe(t,hw(n),mw(o),fw(s),xw(a))},uw=({className:e,size:t,color:n,...o})=>({...o,className:fe(e,t,Dh(n))}),pw=({className:e,size:t,color:n,border:o,radius:s,shadow:a,pad:l,mar:i,padding:c=l,margin:d=i,...u})=>({...u,className:fe(e,t,Dh(n),Co(o),_s(s),ws(a),t3(c),n3(d))}),Co=e=>r3(e,"border",t=>`border bdw-${t}`),ws=e=>r3(e,"shadow-1",t=>`shadow-${t}`),t3=e=>o3(e,"pad"),n3=e=>o3(e,"mar"),_s=e=>dl(e,t=>`bdr-${t}`),hw=e=>dl(e,t=>`fgc-${t}`),mw=e=>dl(e,t=>`bgc-${t}`),fw=e=>dl(e,t=>`fgd-${t}`),xw=e=>dl(e,t=>`bgd-${t}`),dl=(e,t)=>$g(parseInt(e))?Lc(t,e):null,gw=(e,t,n)=>e===!0?t:be(e)?Lc(n,e):null,r3=(e,t,n)=>e===!0?t:parseInt(e)?Lc(n,e):null,o3=(e,t)=>gw(e,t,n=>vw(t,Ig(n))),vw=(e,t)=>t.length===2?Vf(e,["v","h"],t):t.length===4?Vf(e,["t","r","b","l"],t):t.map(n=>`${e}-${n}`).join(" "),Vf=(e,t,n)=>n.map((o,s)=>`${e}-${t[s]}-${o}`).join(" "),re=e=>r.jsx(Ei,{...uw(e)});function Hf(e,t,n={}){return be(t)&&(n[e]=$g(t)?`${t}deg`:t),Object.keys(n).length?n:null}const bw=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:s,iconRight:a,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Ei,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Ei,{name:n,className:o,style:Hf("--icon-rotate",s),fixedWidth:!0}),c||d,!!a&&r.jsx(Ei,{name:a,className:l,style:Hf("--icon-rotate",i),fixedWidth:!0})]}),wo=ee(bw,"WithIcons");RC({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const jw=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:s="angle-down",closedIcon:a="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(re,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(re,{name:o?s:a,fixedWidth:!0,className:"reveal"})]}),s3=ee(jw,"AlertControls"),yw=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:s,Controls:a=s3})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(re,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(a,{...s})]}),Sw=ee(yw,"AlertHeadline"),Cw=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),a3=ee(Cw,"AlertContent"),ww=({icon:e,Content:t=a3,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(re,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),_w=ee(ww,"AlertIcon"),l3=e=>yo(e)||wh(e)||Bg(e),ul=e=>l3(e)||!e.separator&&!e.heading&&!e.disabled,Tw=e=>l3(e)?e:e.value??e.id,kw=(e,t,n=Tw)=>{if(Dc(t))return[];const o=e.findIndex(s=>t===n(s));return o>=0?[e[o],o]:[]},Ew=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{const s=So(o),a=s?o.search??o.text??o.label??o.name??o.value:o;if(s&&o.fixed)return!0;if(be(a)){const l=a.toString().toLowerCase();return n.every(i=>l.indexOf(i)>=0)}return!1})};function Nw(e,t=ul){const n=e.findIndex(t);return n<0?null:n}function Rw(e,t=ul){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function Ow(e,t,n=ul){for(let o=1;o<=e.length;o++){const s=(t+o)%e.length;if(n(e[s]))return s}return null}function Dw(e,t,n=ul){for(let o=1;o<=e.length;o++){const s=(t+e.length-o)%e.length;if(n(e[s]))return s}return null}const Sa="",Lh="ArrowDown",Bh="ArrowUp",Lw="Tab",Ac="Enter",$h=" ",Mc="Escape",Bw="Backspace",oc=e=>{const t=`HINT: define ${e}() to render this value`;return n=>yo(n)||wh(n)?n:So(n)?n.text??n.label??n.name??t:t},$w=e=>yo(e)||wh(e)?e:r.jsx(wo,{...e}),i3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,s=e.scrollTop,a=s+e.offsetHeight;n<s?e.scrollTo({top:n}):o>a&&e.scrollTo({top:s+(o-a)})};function Aw(){let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}}const oi=typeof window<"u"&&window.localStorage||Aw(),si=(e,t)=>[e,t].join("-");function Ah(e){return{get:(t,n)=>{const o=oi.getItem(si(e,t));return be(o)?JSON.parse(o):be(n)?(oi.setItem(si(e,t),JSON.stringify(n)),n):null},set:(t,n)=>oi.setItem(si(e,t),JSON.stringify(n)),delete:t=>oi.removeItem(si(e,t))}}const Mw=e=>e.charAt(0).toUpperCase()+e.slice(1),or=({title:e,headline:t,headIcon:n,type:o,size:s,color:a,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:f,onDismiss:b,icon:S,dismissable:j=!1,revealable:_=!1,revealed:g=!1,openIcon:h,closedIcon:m,dismissIcon:y,Headline:C=Sw,Controls:x=s3,Content:w=a3,Icon:E=_w})=>{const[N,D]=v.useState(_?g:!0),[$,Y]=v.useState(!1),Q=fe("alert",o,s,a,u,{revealable:_,dismissable:j,stripe:l},N?"revealed":null,ws(d),Co(i),_s(c)),U=()=>D(I=>!I),de={dismissable:j,revealable:_,isRevealed:N,dismiss:()=>{Y(!0),b&&b()},openIcon:h,closedIcon:m,dismissIcon:y},W={title:e,text:p,children:f},L={...W,icon:S,Content:w},P={headline:t,headIcon:n,toggle:U,revealable:_,controlProps:de,Controls:x};return $?null:r.jsxs("div",{className:Q,children:[!!t&&r.jsx(C,{...P}),N&&(S?r.jsx(E,{...L}):r.jsx(w,{...W}))]})},ca=ee(e=>r.jsx(or,{...e,type:"info"}),"Info"),Xo=ee(e=>r.jsx(or,{...e,type:"success"}),"Success"),da=ee(e=>r.jsx(or,{...e,type:"warning"}),"Warning"),ua=ee(e=>r.jsx(or,{...e,type:"error"}),"Error");or.Info=ca;or.Success=Xo;or.Warning=da;or.Error=ua;const ne=ee(or,"Alert"),Pw=({size:e,color:t,className:n,tag:o,shadow:s,border:a,radius:l,tooltip:i,icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,label:S,text:j,children:_,Content:g=wo,...h})=>{const m=fe("badge",e,t,n,{tag:o,icon:c},ws(s),Co(a),_s(l)),y={icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,text:j,children:_};return r.jsx("div",{className:m,"data-tooltip":i,"aria-label":S,...h,children:r.jsx(g,{...y})})},le=ee(Pw,"Badge"),Iw=({type:e="button",size:t,color:n,className:o,disabled:s,bright:a,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:f,label:b,tooltip:S,tabIndex:j=0,icon:_,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:y,iconRightClass:C,text:x,children:w,Content:E=wo,...N})=>{const D=fe(t,n,o,{bright:a,dark:l,outline:i,bare:c,shaded:d,icon:_},ws(u),Co(p),_s(f)),$={icon:_,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:y,iconRightClass:C,text:x,children:w};return r.jsx("button",{className:D,"aria-label":b,tabIndex:j,type:e,disabled:s,"aria-disabled":s,"data-tooltip":S,...N,children:r.jsx(E,{...$})})},B=ee(Iw,"Button"),zw=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:s=B,...a})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(s,{className:o,...a,...l},i)):t}),sr=ee(zw,"Buttons"),Fw=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:fe(e,{disabled:t}),ref:o,children:n}),Uw=ee(Fw,"CheckboxLabel"),Vw=({disabled:e=!1,tabIndex:t=0,onChange:n=ke,ref:o,...s})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:a=>n(a.target.checked),...s}),Hw=ee(Vw,"CheckboxInput"),Ww=({size:e,color:t,border:n,inline:o,className:s="checkbox",text:a,ref:l,inputRef:i,checked:c,checkedText:d=a,uncheckedText:u=a,inputClass:p,Label:f=Uw,Input:b=Hw,...S})=>r.jsxs(f,{className:fe(e,t,s,Co(n),{inline:o}),ref:l,checked:c,...S,children:[r.jsx(b,{className:p,ref:i,checked:c,...S}),c?d:u]}),$n=ee(Ww,"Checkbox"),Zw=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},Kw=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:s}=Zw({checked:e}),a=l=>{s(l),t&&t(l)};return r.jsx($n,{checked:o,onChange:a,...n})},zr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},Yw=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:s="red",confirmClass:a,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:s,className:a},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:f,className:b=f,buttonClass:S,onClick:j=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:g,hide:h,show:m}=zr({visible:t}),C={iconRight:n,text:o,color:s,className:a,...u,onClick:w=>{w.preventDefault(),h(),j()}},x={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:h};return r.jsx(sr,{className:b,buttonClass:S,buttons:g?[x,C]:[{..._,onClick:m}]})},An=ee(Yw,"Confirm");var Gw=Object.defineProperty,qw=(e,t,n)=>t in e?Gw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dd=(e,t,n)=>(qw(e,typeof t!="symbol"?t+"":t,n),n);const Fr=(e,t={})=>{const n=X.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:s=>r.jsx(n.Provider,{value:s,children:o.children})}),Consumer:o=>s=>r.jsx(n.Consumer,{children:a=>r.jsx(o,{...a,...s})}),Use:()=>X.useContext(n)}};function Qw(e={},t={},n={}){return Object.entries(t).reduce((o,[s,a])=>{const l=n[a];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function Xw(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const s=e[o]||e_(`Cannot expose non-existent action method: ${o}`);return n[o]=s.bind(e),n},{})}function Jw(e,t){const n=e.debug??t.debug,o=Wf(e.debugPrefix??t.debugPrefix,e),s=Wf(e.debugColor??t.debugColor,e);return n?o?(a,...l)=>console.log(`%c${o}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function Wf(e,t){return typeof e=="function"?e(t):e}function e_(...e){throw new Error(e.join(""))}class Ca extends X.Component{constructor(t){super(t);const n=this.constructor;this.debug=Jw(t,n),this.state=Qw(n.initialState,n.initialProps,t),this.actions=Xw(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Dd(Ca,"initialState",{}),Dd(Ca,"initialProps",{}),Dd(Ca,"actions",[]);const Ld=e=>{yo(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=zg(t)),e.id||(e.id=t),e},t_=e=>{if(yo(e))return Za(e,Ld);if(Cs(e))return e.reduce((t,n)=>{const o=Ld(n);return t[o.field]=o,t},{});if(So(e))return Object.entries(e).reduce((t,[n,o])=>{const s=Ld({...o,field:n});return t[s.field]=s,t},{});Mg("Invalid columns definition")},n_=(e,t)=>{if(t){const n=t.filter(o=>e[o]);if(n.length)return n}return Object.keys(e).filter(n=>!e[n].hidden)},r_=(e,t)=>{if(t){const n=t.filter(o=>e[o]);if(n.length)return n}return Object.keys(e)},o_=(e,t,n)=>t&&e[t]?[t,n]:[null,null],s_=({value:e,search:t})=>be(e)?e.toString()===t.toString():!1,Ys=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(be(e)){const o=e.toString().toLowerCase();return n.every(s=>o.indexOf(s)>-1)}else return!1},a_=({value:e,search:t})=>be(e)?parseInt(e)===parseInt(t):!1,l_=({value:e,search:t})=>be(e)?parseFloat(e)===parseFloat(t):!1,i_=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},Zf={string:Ys,text:Ys,number:Ys,price:Ys,pounds:Ys,select:s_,boolean:i_,integer:a_,float:l_},c_=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(s=>o.every(a=>{const l=n[a],i=t[a],c=i.field||a,d=s[c],u=i.filterType||i.type,p=i.filter||Zf[u]||Zf.text;return be(l)&&l.length?p({row:s,field:c,value:d,search:l}):!0}))},d_=(e,t=1,n=e.length)=>{const o=e.length,s=Math.ceil(o/n);t=Math.min(t,s);const a=t-1,l=n*a,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:s,page:a,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:s,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},Kf={string:Af,text:Af,number:Rd,price:Rd,currency:Rd,integer:$f,id:$f},u_=(e,t,n,o)=>{if(!n)return e;const s=t[n],a=s.sort,l=s.type||"text",i=Oc(a)?a:(Kf[l]||Kf.text)(n);return e.sort(o?mC(i):i)},p_=({render:e,rows:t=[],storageKey:n,storageItem:o="state",debug:s,...a})=>{const l=s?console.log:ke,[i,c]=v.useMemo(()=>{const U=n&&Ah(n),ae=U?U.get(o,{}):{};return[U,ae]},[n]),[d,u,p,f,b]=v.useMemo(()=>{const U=t_(a.columns);return[U,n_(U,c.visibleColumns),r_(U,c.columnOrder),...o_(U,c.sortColumn??a.sortColumn,c.sortReverse??a.sortReverse)]},[a.columns,a.sortColumn,a.sortReverse,c]),[S,j]=Yc({pageNo:c.pageNo??a.pageNo??1,pageSize:c.pageSize??a.pageSize??10,sortColumn:f,sortReverse:b,columnOrder:p,visibleColumns:u},{onChange:U=>(l("state changed: ",U),i&&i.set(o,U),U)});l("state: ",S),l("setters: ",j);const[_,g]=v.useState(!1),[h,m]=v.useState({}),[y,C]=v.useState(!1),x=()=>C(!0),w=()=>C(!1),E=U=>{S.sortColumn===U?j.setSortReverse(ae=>!ae):(j.setSortColumn(U),j.setSortReverse(!1))},N=U=>{U.preventDefault(),U.stopPropagation(),g(ae=>!ae)},D=(U,ae)=>{m(de=>{const W={...de};return be(ae)&&ae.length?W[U]=ae:delete W[U],W}),S.setPageNo(1)},$=U=>{j.setVisibleColumns(ae=>{const de=Za(ae);return de[U]?ae.filter(W=>W!==U):Object.keys(d).filter(W=>W===U||de[W])})},Y=U=>{let ae=[],de=[];const W=Za(S.visibleColumns);U.forEach(L=>{ae.push(L),W[L]&&de.push(L)}),j.setVisibleColumns(de),j.setColumnOrder(ae)},Q=v.useMemo(()=>d_(u_(c_(t,d,h),d,S.sortColumn,S.sortReverse),S.pageNo,S.pageSize),[t,d,h,S.sortColumn,S.sortReverse,S.pageNo,S.pageSize]);return e({...a,rows:t,columns:d,page:Q,showFilters:_,toggleFilters:N,filters:h,setFilter:D,toggleSortColumn:E,controlsVisible:y,showControls:x,hideControls:w,toggleVisibleColumn:$,changeColumnOrder:Y,...S,...j})},xt=Fr(p_),h_=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(B,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(B,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${ia(e.total)} rows`:`rows ${ia(e.from)}-${ia(e.to)} of ${ia(e.total)}`," "]})]}),m_=xt.Consumer(h_);var Fn;let c3=(Fn=class extends Ca{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),Ir(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Ac:case $h:this.state.isOpen?this.close():this.open();break;case Mc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},je(Fn,"debug",!1),je(Fn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:ke,onUnload:ke,onFocus:ke,onBlur:ke,onClick:ke,onOpen:ke,onClose:ke}),je(Fn,"inactiveState",{isOpen:!1}),je(Fn,"initialState",{...Fn.inactiveState}),Fn);const eo=class eo extends c3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Lh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Bh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Ac:case $h:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Mc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return Nw(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return Rw(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return Ow(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return Dw(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&be(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){i3(this._menuRef,t)}};je(eo,"debug",!1),je(eo,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:ke,onUnload:ke,onFocus:ke,onBlur:ke,onClick:ke,onOpen:ke,onClose:ke,onSelect:ke,closeOnSelect:!0}),je(eo,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),je(eo,"initialState",{...eo.inactiveState});let sc=eo;var _n;let f_=(_n=class extends sc{},je(_n,"debug",!1),je(_n,"debugPrefix","Dropdown > "),je(_n,"debugColor","MediumVioletRed"),je(_n,"defaultProps",{..._n.defaultProps,options:[],displayOption:$w}),je(_n,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),_n);const pl=Fr(f_),x_=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(wo,{...Th(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),g_=pl.Consumer(x_),v_=({option:e,active:t,activeRef:n,selected:o,onClick:s,onMouseEnter:a,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:fe(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:a,onClick:s,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),b_=pl.Consumer(v_),j_=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:fe(t,e.className)}),y_=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:fe(n,t,e.className),children:e.heading}),S_=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:s,selectOption:a,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=b_,Separator:u=j_,Heading:p=y_})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((f,b)=>f.separator?r.jsx(u,{option:f},b):f.heading?r.jsx(p,{option:f},b):r.jsx(d,{option:f,active:be(o)&&e[o]===f,selected:s===f,onClick:()=>a(f),onMouseEnter:()=>l(b)},f.id??f.value??b))}),C_=pl.Consumer(S_),w_=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:s,size:a,wide:l,Trigger:i=g_,Options:c=C_})=>r.jsxs("div",{className:fe(e,a,o?t:n,{right:s,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),__=pl.Consumer(w_),T_=({Content:e=__,...t})=>r.jsx(pl.Provider,{...t,children:r.jsx(e,{})}),Ur=ee(T_,"DropdownMenu"),k_=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Ur,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),E_=xt.Consumer(k_);class pa extends c3{}je(pa,"debug",!1),je(pa,"debugPrefix","Dropdown > "),je(pa,"debugColor","MediumVioletRed"),je(pa,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const hl=Fr(pa),N_=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:s,onKeyDown:a,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(wo,{...Th(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),R_=hl.Consumer(N_),O_=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),D_=hl.Consumer(O_),L_=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:s,size:a,wide:l,Trigger:i=R_,Body:c=D_})=>r.jsxs("div",{className:fe(e,a,o?t:n,{right:s,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),B_=hl.Consumer(L_),$_=({Content:e=B_,content:t,children:n,...o})=>r.jsx(hl.Provider,{content:t||n,...o,children:r.jsx(e,{})}),bn=ee($_,"Dropdown"),A_=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:s,isVisible:a,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx($n,{className:"fluid flex middle no-focus",checked:a[e.id]||!1,onChange:()=>s(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(re,{name:"drag",className:"drag-handle"})})]}),M_=({close:e})=>r.jsx(B,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),P_=hl.Consumer(M_);function I_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(s=>s(o))},t)}const Pc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ts(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Mh(e){return"nodeType"in e}function Ct(e){var t,n;return e?Ts(e)?e:Mh(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Ph(e){const{Document:t}=Ct(e);return e instanceof t}function ml(e){return Ts(e)?!1:e instanceof Ct(e).HTMLElement}function d3(e){return e instanceof Ct(e).SVGElement}function ks(e){return e?Ts(e)?e.document:Mh(e)?Ph(e)?e:ml(e)||d3(e)?e.ownerDocument:document:document:document}const tn=Pc?v.useLayoutEffect:v.useEffect;function Ic(e){const t=v.useRef(e);return tn(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t.current==null?void 0:t.current(...o)},[])}function z_(){const e=v.useRef(null),t=v.useCallback((o,s)=>{e.current=setInterval(o,s)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Ka(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return tn(()=>{n.current!==e&&(n.current=e)},t),n}function fl(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function ac(e){const t=Ic(e),n=v.useRef(null),o=v.useCallback(s=>{s!==n.current&&(t==null||t(s,n.current)),n.current=s},[]);return[n,o]}function lc(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Bd={};function xl(e,t){return v.useMemo(()=>{if(t)return t;const n=Bd[e]==null?0:Bd[e]+1;return Bd[e]=n,e+"-"+n},[e,t])}function u3(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return o.reduce((a,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=a[c];u!=null&&(a[c]=u+e*d)}return a},{...t})}}const is=u3(1),Ya=u3(-1);function F_(e){return"clientX"in e&&"clientY"in e}function zc(e){if(!e)return!1;const{KeyboardEvent:t}=Ct(e.target);return t&&e instanceof t}function U_(e){if(!e)return!1;const{TouchEvent:t}=Ct(e.target);return t&&e instanceof t}function ic(e){if(U_(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return F_(e)?{x:e.clientX,y:e.clientY}:null}const Dr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Dr.Translate.toString(e),Dr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),Yf="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function V_(e){return e.matches(Yf)?e:e.querySelector(Yf)}const H_={display:"none"};function W_(e){let{id:t,value:n}=e;return X.createElement("div",{id:t,style:H_},n)}function Z_(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const s={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return X.createElement("div",{id:t,style:s,role:"status","aria-live":o,"aria-atomic":!0},n)}function K_(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const p3=v.createContext(null);function Y_(e){const t=v.useContext(p3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function G_(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:s,event:a}=o;e.forEach(l=>{var i;return(i=l[s])==null?void 0:i.call(l,a)})},[e]),t]}const q_={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Q_={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function X_(e){let{announcements:t=Q_,container:n,hiddenTextDescribedById:o,screenReaderInstructions:s=q_}=e;const{announce:a,announcement:l}=K_(),i=xl("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),Y_(v.useMemo(()=>({onDragStart(p){let{active:f}=p;a(t.onDragStart({active:f}))},onDragMove(p){let{active:f,over:b}=p;t.onDragMove&&a(t.onDragMove({active:f,over:b}))},onDragOver(p){let{active:f,over:b}=p;a(t.onDragOver({active:f,over:b}))},onDragEnd(p){let{active:f,over:b}=p;a(t.onDragEnd({active:f,over:b}))},onDragCancel(p){let{active:f,over:b}=p;a(t.onDragCancel({active:f,over:b}))}}),[a,t])),!c)return null;const u=X.createElement(X.Fragment,null,X.createElement(W_,{id:o,value:s.draggable}),X.createElement(Z_,{id:i,announcement:l}));return n?Un.createPortal(u,n):u}var Qe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Qe||(Qe={}));function cc(){}function Gf(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function J_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const vn=Object.freeze({x:0,y:0});function h3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function eT(e,t){const n=ic(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function m3(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function tT(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function qf(e){let{left:t,top:n,height:o,width:s}=e;return[{x:t,y:n},{x:t+s,y:n},{x:t,y:n+o},{x:t+s,y:n+o}]}function f3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Qf(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const nT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=Qf(t,t.left,t.top),a=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=h3(Qf(c),s);a.push({id:i,data:{droppableContainer:l,value:d}})}}return a.sort(m3)},rT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=qf(t),a=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=qf(c),u=s.reduce((f,b,S)=>f+h3(d[S],b),0),p=Number((u/4).toFixed(4));a.push({id:i,data:{droppableContainer:l,value:p}})}}return a.sort(m3)};function oT(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),s=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),l=s-o,i=a-n;if(o<s&&n<a){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const sT=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const s=[];for(const a of o){const{id:l}=a,i=n.get(l);if(i){const c=oT(i,t);c>0&&s.push({id:l,data:{droppableContainer:a,value:c}})}}return s.sort(tT)};function aT(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function x3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:vn}function lT(e){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];return s.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const iT=lT(1);function g3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function cT(e,t,n){const o=g3(t);if(!o)return e;const{scaleX:s,scaleY:a,x:l,y:i}=o,c=e.left-l-(1-s)*parseFloat(n),d=e.top-i-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),u=s?e.width/s:e.width,p=a?e.height/a:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const dT={ignoreTransform:!1};function Es(e,t){t===void 0&&(t=dT);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=Ct(e).getComputedStyle(e);d&&(n=cT(n,d,u))}const{top:o,left:s,width:a,height:l,bottom:i,right:c}=n;return{top:o,left:s,width:a,height:l,bottom:i,right:c}}function Xf(e){return Es(e,{ignoreTransform:!0})}function uT(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function pT(e,t){return t===void 0&&(t=Ct(e).getComputedStyle(e)),t.position==="fixed"}function hT(e,t){t===void 0&&(t=Ct(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const a=t[s];return typeof a=="string"?n.test(a):!1})}function Fc(e,t){const n=[];function o(s){if(t!=null&&n.length>=t||!s)return n;if(Ph(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!ml(s)||d3(s)||n.includes(s))return n;const a=Ct(e).getComputedStyle(s);return s!==e&&hT(s,a)&&n.push(s),pT(s,a)?n:o(s.parentNode)}return e?o(e):n}function v3(e){const[t]=Fc(e,1);return t??null}function $d(e){return!Pc||!e?null:Ts(e)?e:Mh(e)?Ph(e)||e===ks(e).scrollingElement?window:ml(e)?e:null:null}function b3(e){return Ts(e)?e.scrollX:e.scrollLeft}function j3(e){return Ts(e)?e.scrollY:e.scrollTop}function Qu(e){return{x:b3(e),y:j3(e)}}var rt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(rt||(rt={}));function y3(e){return!Pc||!e?!1:e===document.scrollingElement}function S3(e){const t={x:0,y:0},n=y3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},s=e.scrollTop<=t.y,a=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:s,isLeft:a,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const mT={x:.2,y:.2};function fT(e,t,n,o,s){let{top:a,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),s===void 0&&(s=mT);const{isTop:d,isBottom:u,isLeft:p,isRight:f}=S3(e),b={x:0,y:0},S={x:0,y:0},j={height:t.height*s.y,width:t.width*s.x};return!d&&a<=t.top+j.height?(b.y=rt.Backward,S.y=o*Math.abs((t.top+j.height-a)/j.height)):!u&&c>=t.bottom-j.height&&(b.y=rt.Forward,S.y=o*Math.abs((t.bottom-j.height-c)/j.height)),!f&&i>=t.right-j.width?(b.x=rt.Forward,S.x=o*Math.abs((t.right-j.width-i)/j.width)):!p&&l<=t.left+j.width&&(b.x=rt.Backward,S.x=o*Math.abs((t.left+j.width-l)/j.width)),{direction:b,speed:S}}function xT(e){if(e===document.scrollingElement){const{innerWidth:a,innerHeight:l}=window;return{top:0,left:0,right:a,bottom:l,width:a,height:l}}const{top:t,left:n,right:o,bottom:s}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:s,width:e.clientWidth,height:e.clientHeight}}function C3(e){return e.reduce((t,n)=>is(t,Qu(n)),vn)}function gT(e){return e.reduce((t,n)=>t+b3(n),0)}function vT(e){return e.reduce((t,n)=>t+j3(n),0)}function w3(e,t){if(t===void 0&&(t=Es),!e)return;const{top:n,left:o,bottom:s,right:a}=t(e);v3(e)&&(s<=0||a<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const bT=[["x",["left","right"],gT],["y",["top","bottom"],vT]];class Ih{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Fc(n),s=C3(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[a,l,i]of bT)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=s[a]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class wa{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var s;(s=this.target)==null||s.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function jT(e){const{EventTarget:t}=Ct(e);return e instanceof t?e:ks(e)}function Ad(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Kt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Kt||(Kt={}));function Jf(e){e.preventDefault()}function yT(e){e.stopPropagation()}var ve;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(ve||(ve={}));const _3={start:[ve.Space,ve.Enter],cancel:[ve.Esc],end:[ve.Space,ve.Enter]},ST=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case ve.Right:return{...n,x:n.x+25};case ve.Left:return{...n,x:n.x-25};case ve.Down:return{...n,y:n.y+25};case ve.Up:return{...n,y:n.y-25}}};class zh{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new wa(ks(n)),this.windowListeners=new wa(Ct(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Kt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&w3(o),n(vn)}handleKeyDown(t){if(zc(t)){const{active:n,context:o,options:s}=this.props,{keyboardCodes:a=_3,coordinateGetter:l=ST,scrollBehavior:i="smooth"}=s,{code:c}=t;if(a.end.includes(c)){this.handleEnd(t);return}if(a.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:vn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const f=Ya(p,u),b={x:0,y:0},{scrollableAncestors:S}=o.current;for(const j of S){const _=t.code,{isTop:g,isRight:h,isLeft:m,isBottom:y,maxScroll:C,minScroll:x}=S3(j),w=xT(j),E={x:Math.min(_===ve.Right?w.right-w.width/2:w.right,Math.max(_===ve.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===ve.Down?w.bottom-w.height/2:w.bottom,Math.max(_===ve.Down?w.top:w.top+w.height/2,p.y))},N=_===ve.Right&&!h||_===ve.Left&&!m,D=_===ve.Down&&!y||_===ve.Up&&!g;if(N&&E.x!==p.x){const $=j.scrollLeft+f.x,Y=_===ve.Right&&$<=C.x||_===ve.Left&&$>=x.x;if(Y&&!f.y){j.scrollTo({left:$,behavior:i});return}Y?b.x=j.scrollLeft-$:b.x=_===ve.Right?j.scrollLeft-C.x:j.scrollLeft-x.x,b.x&&j.scrollBy({left:-b.x,behavior:i});break}else if(D&&E.y!==p.y){const $=j.scrollTop+f.y,Y=_===ve.Down&&$<=C.y||_===ve.Up&&$>=x.y;if(Y&&!f.x){j.scrollTo({top:$,behavior:i});return}Y?b.y=j.scrollTop-$:b.y=_===ve.Down?j.scrollTop-C.y:j.scrollTop-x.y,b.y&&j.scrollBy({top:-b.y,behavior:i});break}}this.handleMove(t,is(Ya(p,this.referenceCoordinates),b))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}zh.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=_3,onActivation:s}=t,{active:a}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=a.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),s==null||s({event:e.nativeEvent}),!0)}return!1}}];function e1(e){return!!(e&&"distance"in e)}function t1(e){return!!(e&&"delay"in e)}class Fh{constructor(t,n,o){var s;o===void 0&&(o=jT(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:a}=t,{target:l}=a;this.props=t,this.events=n,this.document=ks(l),this.documentListeners=new wa(this.document),this.listeners=new wa(o),this.windowListeners=new wa(Ct(l)),this.initialCoordinates=(s=ic(a))!=null?s:vn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.DragStart,Jf),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),this.windowListeners.add(Kt.ContextMenu,Jf),this.documentListeners.add(Kt.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(t1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(e1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Kt.Click,yT,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Kt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:s,props:a}=this,{onMove:l,options:{activationConstraint:i}}=a;if(!s)return;const c=(n=ic(t))!=null?n:vn,d=Ya(s,c);if(!o&&i){if(e1(i)){if(i.tolerance!=null&&Ad(d,i.tolerance))return this.handleCancel();if(Ad(d,i.distance))return this.handleStart()}return t1(i)&&Ad(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===ve.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const CT={move:{name:"pointermove"},end:{name:"pointerup"}};class Uh extends Fh{constructor(t){const{event:n}=t,o=ks(n.target);super(t,CT,o)}}Uh.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const wT={move:{name:"mousemove"},end:{name:"mouseup"}};var Xu;(function(e){e[e.RightClick=2]="RightClick"})(Xu||(Xu={}));class _T extends Fh{constructor(t){super(t,wT,ks(t.event.target))}}_T.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===Xu.RightClick?!1:(o==null||o({event:n}),!0)}}];const Md={move:{name:"touchmove"},end:{name:"touchend"}};class TT extends Fh{constructor(t){super(t,Md)}static setup(){return window.addEventListener(Md.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Md.move.name,t)};function t(){}}}TT.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:s}=n;return s.length>1?!1:(o==null||o({event:n}),!0)}}];var _a;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(_a||(_a={}));var dc;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(dc||(dc={}));function kT(e){let{acceleration:t,activator:n=_a.Pointer,canScroll:o,draggingRect:s,enabled:a,interval:l=5,order:i=dc.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const b=NT({delta:p,disabled:!a}),[S,j]=z_(),_=v.useRef({x:0,y:0}),g=v.useRef({x:0,y:0}),h=v.useMemo(()=>{switch(n){case _a.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case _a.DraggableRect:return s}},[n,s,c]),m=v.useRef(null),y=v.useCallback(()=>{const x=m.current;if(!x)return;const w=_.current.x*g.current.x,E=_.current.y*g.current.y;x.scrollBy(w,E)},[]),C=v.useMemo(()=>i===dc.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!a||!d.length||!h){j();return}for(const x of C){if((o==null?void 0:o(x))===!1)continue;const w=d.indexOf(x),E=u[w];if(!E)continue;const{direction:N,speed:D}=fT(x,E,h,t,f);for(const $ of["x","y"])b[$][N[$]]||(D[$]=0,N[$]=0);if(D.x>0||D.y>0){j(),m.current=x,S(y,l),_.current=D,g.current=N;return}}_.current={x:0,y:0},g.current={x:0,y:0},j()},[t,y,o,j,a,l,JSON.stringify(h),JSON.stringify(b),S,d,C,u,JSON.stringify(f)])}const ET={x:{[rt.Backward]:!1,[rt.Forward]:!1},y:{[rt.Backward]:!1,[rt.Forward]:!1}};function NT(e){let{delta:t,disabled:n}=e;const o=lc(t);return fl(s=>{if(n||!o||!s)return ET;const a={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[rt.Backward]:s.x[rt.Backward]||a.x===-1,[rt.Forward]:s.x[rt.Forward]||a.x===1},y:{[rt.Backward]:s.y[rt.Backward]||a.y===-1,[rt.Forward]:s.y[rt.Forward]||a.y===1}}},[n,t,o])}function RT(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return fl(s=>{var a;return t===null?null:(a=o??s)!=null?a:null},[o,t])}function OT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:s}=o,a=s.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...a]},[]),[e,t])}var Ga;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ga||(Ga={}));var Ju;(function(e){e.Optimized="optimized"})(Ju||(Ju={}));const n1=new Map;function DT(e,t){let{dragging:n,dependencies:o,config:s}=t;const[a,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=s,u=v.useRef(e),p=_(),f=Ka(p),b=v.useCallback(function(g){g===void 0&&(g=[]),!f.current&&l(h=>h===null?g:h.concat(g.filter(m=>!h.includes(m))))},[f]),S=v.useRef(null),j=fl(g=>{if(p&&!n)return n1;if(!g||g===n1||u.current!==e||a!=null){const h=new Map;for(let m of e){if(!m)continue;if(a&&a.length>0&&!a.includes(m.id)&&m.rect.current){h.set(m.id,m.rect.current);continue}const y=m.node.current,C=y?new Ih(c(y),y):null;m.rect.current=C,C&&h.set(m.id,C)}return h}return g},[e,a,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||b()},[n,p]),v.useEffect(()=>{a&&a.length>0&&l(null)},[JSON.stringify(a)]),v.useEffect(()=>{p||typeof i!="number"||S.current!==null||(S.current=setTimeout(()=>{b(),S.current=null},i))},[i,p,b,...o]),{droppableRects:j,measureDroppableContainers:b,measuringScheduled:a!=null};function _(){switch(d){case Ga.Always:return!1;case Ga.BeforeDragging:return n;default:return!n}}}function Vh(e,t){return fl(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function LT(e,t){return Vh(e,t)}function BT(e){let{callback:t,disabled:n}=e;const o=Ic(t),s=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:a}=window;return new a(o)},[o,n]);return v.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Uc(e){let{callback:t,disabled:n}=e;const o=Ic(t),s=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:a}=window;return new a(o)},[n]);return v.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function $T(e){return new Ih(Es(e),e)}function r1(e,t,n){t===void 0&&(t=$T);const[o,s]=v.useReducer(i,null),a=BT({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){s();break}}}}),l=Uc({callback:s});return tn(()=>{s(),e?(l==null||l.observe(e),a==null||a.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),a==null||a.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function AT(e){const t=Vh(e);return x3(e,t)}const o1=[];function MT(e){const t=v.useRef(e),n=fl(o=>e?o&&o!==o1&&e&&t.current&&e.parentNode===t.current.parentNode?o:Fc(e):o1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function PT(e){const[t,n]=v.useState(null),o=v.useRef(e),s=v.useCallback(a=>{const l=$d(a.target);l&&n(i=>i?(i.set(l,Qu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const a=o.current;if(e!==a){l(a);const i=e.map(c=>{const d=$d(c);return d?(d.addEventListener("scroll",s,{passive:!0}),[d,Qu(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(a)};function l(i){i.forEach(c=>{const d=$d(c);d==null||d.removeEventListener("scroll",s)})}},[s,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((a,l)=>is(a,l),vn):C3(e):vn,[e,t])}function s1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==vn;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?Ya(e,n.current):vn}function IT(e){v.useEffect(()=>{if(!Pc)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function zT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:s,handler:a}=o;return n[s]=l=>{a(l,t)},n},{}),[e,t])}function T3(e){return v.useMemo(()=>e?uT(e):null,[e])}const Pd=[];function FT(e,t){t===void 0&&(t=Es);const[n]=e,o=T3(n?Ct(n):null),[s,a]=v.useReducer(i,Pd),l=Uc({callback:a});return e.length>0&&s===Pd&&a(),tn(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),a())},[e]),s;function i(){return e.length?e.map(c=>y3(c)?o:new Ih(t(c),c)):Pd}}function k3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ml(t)?t:e}function UT(e){let{measure:t}=e;const[n,o]=v.useState(null),s=v.useCallback(d=>{for(const{target:u}of d)if(ml(u)){o(p=>{const f=t(u);return p?{...p,width:f.width,height:f.height}:f});break}},[t]),a=Uc({callback:s}),l=v.useCallback(d=>{const u=k3(d);a==null||a.disconnect(),u&&(a==null||a.observe(u)),o(u?t(u):null)},[t,a]),[i,c]=ac(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const VT=[{sensor:Uh,options:{}},{sensor:zh,options:{}}],HT={current:{}},Ni={draggable:{measure:Xf},droppable:{measure:Xf,strategy:Ga.WhileDragging,frequency:Ju.Optimized},dragOverlay:{measure:Es}};class Ta extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const WT={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ta,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:cc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ni,measureDroppableContainers:cc,windowRect:null,measuringScheduled:!1},E3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:cc,draggableNodes:new Map,over:null,measureDroppableContainers:cc},gl=v.createContext(E3),N3=v.createContext(WT);function ZT(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ta}}}function KT(e,t){switch(t.type){case Qe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Qe.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Qe.DragEnd:case Qe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Qe.RegisterDroppable:{const{element:n}=t,{id:o}=n,s=new Ta(e.droppable.containers);return s.set(o,n),{...e,droppable:{...e.droppable,containers:s}}}case Qe.SetDroppableDisabled:{const{id:n,key:o,disabled:s}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const l=new Ta(e.droppable.containers);return l.set(n,{...a,disabled:s}),{...e,droppable:{...e.droppable,containers:l}}}case Qe.UnregisterDroppable:{const{id:n,key:o}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const a=new Ta(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function YT(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:s}=v.useContext(gl),a=lc(o),l=lc(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&a&&l!=null){if(!zc(a)||document.activeElement===a.target)return;const i=s.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=V_(u);if(p){p.focus();break}}})}},[o,t,s,l,a]),null}function R3(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((s,a)=>a({transform:s,...o}),n):n}function GT(e){return v.useMemo(()=>({draggable:{...Ni.draggable,...e==null?void 0:e.draggable},droppable:{...Ni.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ni.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function qT(e){let{activeNode:t,measure:n,initialRect:o,config:s=!0}=e;const a=v.useRef(!1),{x:l,y:i}=typeof s=="boolean"?{x:s,y:s}:s;tn(()=>{if(!l&&!i||!t){a.current=!1;return}if(a.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=x3(u,o);if(l||(p.x=0),i||(p.y=0),a.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const f=v3(d);f&&f.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const Vc=v.createContext({...vn,scaleX:1,scaleY:1});var xr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(xr||(xr={}));const QT=v.memo(function(t){var n,o,s,a;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=VT,collisionDetection:p=sT,measuring:f,modifiers:b,...S}=t;const j=v.useReducer(KT,void 0,ZT),[_,g]=j,[h,m]=G_(),[y,C]=v.useState(xr.Uninitialized),x=y===xr.Initialized,{draggable:{active:w,nodes:E,translate:N},droppable:{containers:D}}=_,$=w?E.get(w):null,Y=v.useRef({initial:null,translated:null}),Q=v.useMemo(()=>{var Ke;return w!=null?{id:w,data:(Ke=$==null?void 0:$.data)!=null?Ke:HT,rect:Y}:null},[w,$]),U=v.useRef(null),[ae,de]=v.useState(null),[W,L]=v.useState(null),P=Ka(S,Object.values(S)),I=xl("DndDescribedBy",l),H=v.useMemo(()=>D.getEnabled(),[D]),K=GT(f),{droppableRects:_e,measureDroppableContainers:ue,measuringScheduled:Ce}=DT(H,{dragging:x,dependencies:[N.x,N.y],config:K.droppable}),ce=RT(E,w),De=v.useMemo(()=>W?ic(W):null,[W]),ct=Xc(),_t=LT(ce,K.draggable.measure);qT({activeNode:w?E.get(w):null,config:ct.layoutShiftCompensation,initialRect:_t,measure:K.draggable.measure});const ge=r1(ce,K.draggable.measure,_t),Le=r1(ce?ce.parentElement:null),et=v.useRef({activatorEvent:null,active:null,activeNode:ce,collisionRect:null,collisions:null,droppableRects:_e,draggableNodes:E,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),At=D.getNodeFor((n=et.current.over)==null?void 0:n.id),sn=UT({measure:K.dragOverlay.measure}),Tt=(o=sn.nodeRef.current)!=null?o:ce,ir=x?(s=sn.rect)!=null?s:ge:null,El=!!(sn.nodeRef.current&&sn.rect),Nl=AT(El?null:ge),As=T3(Tt?Ct(Tt):null),jn=MT(x?At??ce:null),yn=FT(jn),Kr=R3(b,{transform:{x:N.x-Nl.x,y:N.y-Nl.y,scaleX:1,scaleY:1},activatorEvent:W,active:Q,activeNodeRect:ge,containerNodeRect:Le,draggingNodeRect:ir,over:et.current.over,overlayNodeRect:sn.rect,scrollableAncestors:jn,scrollableAncestorRects:yn,windowRect:As}),ko=De?is(De,N):null,an=PT(jn),Yr=s1(an),Rl=s1(an,[ge]),ln=is(Kr,Yr),cr=ir?iT(ir,Kr):null,kt=Q&&cr?p({active:Q,collisionRect:cr,droppableRects:_e,droppableContainers:H,pointerCoordinates:ko}):null,Ms=f3(kt,"id"),[cn,Ps]=v.useState(null),qc=El?Kr:is(Kr,Rl),Ol=aT(qc,(a=cn==null?void 0:cn.rect)!=null?a:null,ge),Gr=v.useCallback((Ke,gt)=>{let{sensor:T,options:R}=gt;if(U.current==null)return;const O=E.get(U.current);if(!O)return;const M=Ke.nativeEvent,F=new T({active:U.current,activeNode:O,event:M,options:R,context:et,onStart(q){const J=U.current;if(J==null)return;const G=E.get(J);if(!G)return;const{onDragStart:pe}=P.current,Ae={active:{id:J,data:G.data,rect:Y}};Un.unstable_batchedUpdates(()=>{pe==null||pe(Ae),C(xr.Initializing),g({type:Qe.DragStart,initialCoordinates:q,active:J}),h({type:"onDragStart",event:Ae})})},onMove(q){g({type:Qe.DragMove,coordinates:q})},onEnd:se(Qe.DragEnd),onCancel:se(Qe.DragCancel)});Un.unstable_batchedUpdates(()=>{de(F),L(Ke.nativeEvent)});function se(q){return async function(){const{active:G,collisions:pe,over:Ae,scrollAdjustedTranslate:ie}=et.current;let Se=null;if(G&&ie){const{cancelDrop:Me}=P.current;Se={activatorEvent:M,active:G,collisions:pe,delta:ie,over:Ae},q===Qe.DragEnd&&typeof Me=="function"&&await Promise.resolve(Me(Se))&&(q=Qe.DragCancel)}U.current=null,Un.unstable_batchedUpdates(()=>{g({type:q}),C(xr.Uninitialized),Ps(null),de(null),L(null);const Me=q===Qe.DragEnd?"onDragEnd":"onDragCancel";if(Se){const dt=P.current[Me];dt==null||dt(Se),h({type:Me,event:Se})}})}}},[E]),Dl=v.useCallback((Ke,gt)=>(T,R)=>{const O=T.nativeEvent,M=E.get(R);if(U.current!==null||!M||O.dndKit||O.defaultPrevented)return;const F={active:M};Ke(T,gt.options,F)===!0&&(O.dndKit={capturedBy:gt.sensor},U.current=R,Gr(T,gt))},[E,Gr]),Eo=OT(u,Dl);IT(u),tn(()=>{ge&&y===xr.Initializing&&C(xr.Initialized)},[ge,y]),v.useEffect(()=>{const{onDragMove:Ke}=P.current,{active:gt,activatorEvent:T,collisions:R,over:O}=et.current;if(!gt||!T)return;const M={active:gt,activatorEvent:T,collisions:R,delta:{x:ln.x,y:ln.y},over:O};Un.unstable_batchedUpdates(()=>{Ke==null||Ke(M),h({type:"onDragMove",event:M})})},[ln.x,ln.y]),v.useEffect(()=>{const{active:Ke,activatorEvent:gt,collisions:T,droppableContainers:R,scrollAdjustedTranslate:O}=et.current;if(!Ke||U.current==null||!gt||!O)return;const{onDragOver:M}=P.current,F=R.get(Ms),se=F&&F.rect.current?{id:F.id,rect:F.rect.current,data:F.data,disabled:F.disabled}:null,q={active:Ke,activatorEvent:gt,collisions:T,delta:{x:O.x,y:O.y},over:se};Un.unstable_batchedUpdates(()=>{Ps(se),M==null||M(q),h({type:"onDragOver",event:q})})},[Ms]),tn(()=>{et.current={activatorEvent:W,active:Q,activeNode:ce,collisionRect:cr,collisions:kt,droppableRects:_e,draggableNodes:E,draggingNode:Tt,draggingNodeRect:ir,droppableContainers:D,over:cn,scrollableAncestors:jn,scrollAdjustedTranslate:ln},Y.current={initial:ir,translated:cr}},[Q,ce,kt,cr,E,Tt,ir,_e,D,cn,jn,ln]),kT({...ct,delta:N,draggingRect:cr,pointerCoordinates:ko,scrollableAncestors:jn,scrollableAncestorRects:yn});const Qc=v.useMemo(()=>({active:Q,activeNode:ce,activeNodeRect:ge,activatorEvent:W,collisions:kt,containerNodeRect:Le,dragOverlay:sn,draggableNodes:E,droppableContainers:D,droppableRects:_e,over:cn,measureDroppableContainers:ue,scrollableAncestors:jn,scrollableAncestorRects:yn,measuringConfiguration:K,measuringScheduled:Ce,windowRect:As}),[Q,ce,ge,W,kt,Le,sn,E,D,_e,cn,ue,jn,yn,K,Ce,As]),Ll=v.useMemo(()=>({activatorEvent:W,activators:Eo,active:Q,activeNodeRect:ge,ariaDescribedById:{draggable:I},dispatch:g,draggableNodes:E,over:cn,measureDroppableContainers:ue}),[W,Eo,Q,ge,g,I,E,cn,ue]);return X.createElement(p3.Provider,{value:m},X.createElement(gl.Provider,{value:Ll},X.createElement(N3.Provider,{value:Qc},X.createElement(Vc.Provider,{value:Ol},d)),X.createElement(YT,{disabled:(i==null?void 0:i.restoreFocus)===!1})),X.createElement(X_,{...i,hiddenTextDescribedById:I}));function Xc(){const Ke=(ae==null?void 0:ae.autoScrollEnabled)===!1,gt=typeof c=="object"?c.enabled===!1:c===!1,T=x&&!Ke&&!gt;return typeof c=="object"?{...c,enabled:T}:{enabled:T}}}),XT=v.createContext(null),a1="button",JT="Droppable";function ek(e){let{id:t,data:n,disabled:o=!1,attributes:s}=e;const a=xl(JT),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=v.useContext(gl),{role:b=a1,roleDescription:S="draggable",tabIndex:j=0}=s??{},_=(c==null?void 0:c.id)===t,g=v.useContext(_?Vc:XT),[h,m]=ac(),[y,C]=ac(),x=zT(l,t),w=Ka(n);tn(()=>(p.set(t,{id:t,key:a,node:h,activatorNode:y,data:w}),()=>{const N=p.get(t);N&&N.key===a&&p.delete(t)}),[p,t]);const E=v.useMemo(()=>({role:b,tabIndex:j,"aria-disabled":o,"aria-pressed":_&&b===a1?!0:void 0,"aria-roledescription":S,"aria-describedby":u.draggable}),[o,b,j,_,S,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:E,isDragging:_,listeners:o?void 0:x,node:h,over:f,setNodeRef:m,setActivatorNodeRef:C,transform:g}}function O3(){return v.useContext(N3)}const tk="Droppable",nk={timeout:25};function rk(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:s}=e;const a=xl(tk),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(gl),u=v.useRef({disabled:n}),p=v.useRef(!1),f=v.useRef(null),b=v.useRef(null),{disabled:S,updateMeasurementsFor:j,timeout:_}={...nk,...s},g=Ka(j??o),h=v.useCallback(()=>{if(!p.current){p.current=!0;return}b.current!=null&&clearTimeout(b.current),b.current=setTimeout(()=>{d(Array.isArray(g.current)?g.current:[g.current]),b.current=null},_)},[_]),m=Uc({callback:h,disabled:S||!l}),y=v.useCallback((E,N)=>{m&&(N&&(m.unobserve(N),p.current=!1),E&&m.observe(E))},[m]),[C,x]=ac(y),w=Ka(t);return v.useEffect(()=>{!m||!C.current||(m.disconnect(),p.current=!1,m.observe(C.current))},[C,m]),tn(()=>(i({type:Qe.RegisterDroppable,element:{id:o,key:a,disabled:n,node:C,rect:f,data:w}}),()=>i({type:Qe.UnregisterDroppable,key:a,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Qe.SetDroppableDisabled,id:o,key:a,disabled:n}),u.current.disabled=n)},[o,a,n,i]),{active:l,rect:f,isOver:(c==null?void 0:c.id)===o,node:C,over:c,setNodeRef:x}}function ok(e){let{animation:t,children:n}=e;const[o,s]=v.useState(null),[a,l]=v.useState(null),i=lc(n);return!n&&!o&&i&&s(i),tn(()=>{if(!a)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){s(null);return}Promise.resolve(t(d,a)).then(()=>{s(null)})},[t,o,a]),X.createElement(X.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const sk={x:0,y:0,scaleX:1,scaleY:1};function ak(e){let{children:t}=e;return X.createElement(gl.Provider,{value:E3},X.createElement(Vc.Provider,{value:sk},t))}const lk={position:"fixed",touchAction:"none"},ik=e=>zc(e)?"transform 250ms ease":void 0,ck=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:s,children:a,className:l,rect:i,style:c,transform:d,transition:u=ik}=e;if(!i)return null;const p=s?d:{...d,scaleX:1,scaleY:1},f={...lk,width:i.width,height:i.height,top:i.top,left:i.left,transform:Dr.Transform.toString(p),transformOrigin:s&&o?eT(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return X.createElement(n,{className:l,style:f,ref:t},a)}),dk=e=>t=>{let{active:n,dragOverlay:o}=t;const s={},{styles:a,className:l}=e;if(a!=null&&a.active)for(const[i,c]of Object.entries(a.active))c!==void 0&&(s[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(a!=null&&a.dragOverlay)for(const[i,c]of Object.entries(a.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(s))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},uk=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:Dr.Transform.toString(t)},{transform:Dr.Transform.toString(n)}]},pk={duration:250,easing:"ease",keyframes:uk,sideEffects:dk({styles:{active:{opacity:"0"}}})};function hk(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:s}=e;return Ic((a,l)=>{if(t===null)return;const i=n.get(a);if(!i)return;const c=i.node.current;if(!c)return;const d=k3(l);if(!d)return;const{transform:u}=Ct(l).getComputedStyle(l),p=g3(u);if(!p)return;const f=typeof t=="function"?t:mk(t);return w3(c,s.draggable.measure),f({active:{id:a,data:i.data,node:c,rect:s.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:s.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:s,transform:p})})}function mk(e){const{duration:t,easing:n,sideEffects:o,keyframes:s}={...pk,...e};return a=>{let{active:l,dragOverlay:i,transform:c,...d}=a;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},f={x:c.x-u.x,y:c.y-u.y,...p},b=s({...d,active:l,dragOverlay:i,transform:{initial:c,final:f}}),[S]=b,j=b[b.length-1];if(JSON.stringify(S)===JSON.stringify(j))return;const _=o==null?void 0:o({active:l,dragOverlay:i,...d}),g=i.node.animate(b,{duration:t,easing:n,fill:"forwards"});return new Promise(h=>{g.onfinish=()=>{_==null||_(),h()}})}}let l1=0;function fk(e){return v.useMemo(()=>{if(e!=null)return l1++,l1},[e])}const xk=X.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:s,transition:a,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggableNodes:S,droppableContainers:j,dragOverlay:_,over:g,measuringConfiguration:h,scrollableAncestors:m,scrollableAncestorRects:y,windowRect:C}=O3(),x=v.useContext(Vc),w=fk(p==null?void 0:p.id),E=R3(l,{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggingNodeRect:_.rect,over:g,overlayNodeRect:_.rect,scrollableAncestors:m,scrollableAncestorRects:y,transform:x,windowRect:C}),N=Vh(f),D=hk({config:o,draggableNodes:S,droppableContainers:j,measuringConfiguration:h}),$=N?_.setRef:void 0;return X.createElement(ak,null,X.createElement(ok,{animation:D},p&&w?X.createElement(ck,{key:w,id:p.id,ref:$,as:i,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:N,style:{zIndex:d,...s},transform:E},n):null))});function Hh(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function gk(e,t){return e.reduce((n,o,s)=>{const a=t.get(o);return a&&(n[s]=a),n},Array(e.length))}function ai(e){return e!==null&&e>=0}function vk(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function bk(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const li={scaleX:1,scaleY:1},jk=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:s,overIndex:a,index:l}=e;const i=(t=n[s])!=null?t:o;if(!i)return null;const c=yk(n,l,s);if(l===s){const d=n[a];return d?{x:s<a?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...li}:null}return l>s&&l<=a?{x:-i.width-c,y:0,...li}:l<s&&l>=a?{x:i.width+c,y:0,...li}:{x:0,y:0,...li}};function yk(e,t,n){const o=e[t],s=e[t-1],a=e[t+1];return!o||!s&&!a?0:n<t?s?o.left-(s.left+s.width):a.left-(o.left+o.width):a?a.left-(o.left+o.width):o.left-(s.left+s.width)}const Wh=e=>{let{rects:t,activeIndex:n,overIndex:o,index:s}=e;const a=Hh(t,o,n),l=t[s],i=a[s];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},ii={scaleX:1,scaleY:1},Sk=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:s,rects:a,overIndex:l}=e;const i=(t=a[n])!=null?t:o;if(!i)return null;if(s===n){const d=a[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...ii}:null}const c=Ck(a,s,n);return s>n&&s<=l?{x:0,y:-i.height-c,...ii}:s<n&&s>=l?{x:0,y:i.height+c,...ii}:{x:0,y:0,...ii}};function Ck(e,t,n){const o=e[t],s=e[t-1],a=e[t+1];return o?n<t?s?o.top-(s.top+s.height):a?a.top-(o.top+o.height):0:a?a.top-(o.top+o.height):s?o.top-(s.top+s.height):0:0}const D3="Sortable",L3=X.createContext({activeIndex:-1,containerId:D3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Wh,disabled:{draggable:!1,droppable:!1}});function wk(e){let{children:t,id:n,items:o,strategy:s=Wh,disabled:a=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=O3(),p=xl(D3,n),f=i.rect!==null,b=v.useMemo(()=>o.map(x=>typeof x=="object"&&"id"in x?x.id:x),[o]),S=l!=null,j=l?b.indexOf(l.id):-1,_=d?b.indexOf(d.id):-1,g=v.useRef(b),h=!vk(b,g.current),m=_!==-1&&j===-1||h,y=bk(a);tn(()=>{h&&S&&u(b)},[h,b,S,u]),v.useEffect(()=>{g.current=b},[b]);const C=v.useMemo(()=>({activeIndex:j,containerId:p,disabled:y,disableTransforms:m,items:b,overIndex:_,useDragOverlay:f,sortedRects:gk(b,c),strategy:s}),[j,p,y.draggable,y.droppable,m,b,_,c,f,s]);return X.createElement(L3.Provider,{value:C},t)}const _k=e=>{let{id:t,items:n,activeIndex:o,overIndex:s}=e;return Hh(n,o,s).indexOf(t)},Tk=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:s,items:a,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==a&&s===l?!1:n?!0:l!==s&&t===c},kk={duration:200,easing:"ease"},B3="transform",Ek=Dr.Transition.toString({property:B3,duration:0,easing:"linear"}),Nk={roleDescription:"sortable"};function Rk(e){let{disabled:t,index:n,node:o,rect:s}=e;const[a,l]=v.useState(null),i=v.useRef(n);return tn(()=>{if(!t&&n!==i.current&&o.current){const c=s.current;if(c){const d=Es(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,s]),v.useEffect(()=>{a&&l(null)},[a]),a}function Ok(e){let{animateLayoutChanges:t=Tk,attributes:n,disabled:o,data:s,getNewIndex:a=_k,id:l,strategy:i,resizeObserverConfig:c,transition:d=kk}=e;const{items:u,containerId:p,activeIndex:f,disabled:b,disableTransforms:S,sortedRects:j,overIndex:_,useDragOverlay:g,strategy:h}=v.useContext(L3),m=Dk(o,b),y=u.indexOf(l),C=v.useMemo(()=>({sortable:{containerId:p,index:y,items:u},...s}),[p,s,y,u]),x=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:w,node:E,isOver:N,setNodeRef:D}=rk({id:l,data:C,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:$,activatorEvent:Y,activeNodeRect:Q,attributes:U,setNodeRef:ae,listeners:de,isDragging:W,over:L,setActivatorNodeRef:P,transform:I}=ek({id:l,data:C,attributes:{...Nk,...n},disabled:m.draggable}),H=I_(D,ae),K=!!$,_e=K&&!S&&ai(f)&&ai(_),ue=!g&&W,Ce=ue&&_e?I:null,De=_e?Ce??(i??h)({rects:j,activeNodeRect:Q,activeIndex:f,overIndex:_,index:y}):null,ct=ai(f)&&ai(_)?a({id:l,items:u,activeIndex:f,overIndex:_}):y,_t=$==null?void 0:$.id,ge=v.useRef({activeId:_t,items:u,newIndex:ct,containerId:p}),Le=u!==ge.current.items,et=t({active:$,containerId:p,isDragging:W,isSorting:K,id:l,index:y,items:u,newIndex:ge.current.newIndex,previousItems:ge.current.items,previousContainerId:ge.current.containerId,transition:d,wasDragging:ge.current.activeId!=null}),At=Rk({disabled:!et,index:y,node:E,rect:w});return v.useEffect(()=>{K&&ge.current.newIndex!==ct&&(ge.current.newIndex=ct),p!==ge.current.containerId&&(ge.current.containerId=p),u!==ge.current.items&&(ge.current.items=u)},[K,ct,p,u]),v.useEffect(()=>{if(_t===ge.current.activeId)return;if(_t&&!ge.current.activeId){ge.current.activeId=_t;return}const Tt=setTimeout(()=>{ge.current.activeId=_t},50);return()=>clearTimeout(Tt)},[_t]),{active:$,activeIndex:f,attributes:U,data:C,rect:w,index:y,newIndex:ct,items:u,isOver:N,isSorting:K,isDragging:W,listeners:de,node:E,overIndex:_,over:L,setNodeRef:H,setActivatorNodeRef:P,setDroppableNodeRef:D,setDraggableNodeRef:ae,transform:At??De,transition:sn()};function sn(){if(At||Le&&ge.current.newIndex===y)return Ek;if(!(ue&&!zc(Y)||!d)&&(K||et))return Dr.Transition.toString({...d,property:B3})}}function Dk(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function uc(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Lk=[ve.Down,ve.Right,ve.Up,ve.Left],Bk=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:s,droppableContainers:a,over:l,scrollableAncestors:i}}=t;if(Lk.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];a.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const f=s.get(p.id);if(f)switch(e.code){case ve.Down:o.top<f.top&&c.push(p);break;case ve.Up:o.top>f.top&&c.push(p);break;case ve.Left:o.left>f.left&&c.push(p);break;case ve.Right:o.left<f.left&&c.push(p);break}});const d=rT({active:n,collisionRect:o,droppableRects:s,droppableContainers:c,pointerCoordinates:null});let u=f3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=a.get(n.id),f=a.get(u),b=f?s.get(f.id):null,S=f==null?void 0:f.node.current;if(S&&b&&p&&f){const _=Fc(S).some((x,w)=>i[w]!==x),g=$3(p,f),h=$k(p,f),m=_||!g?{x:0,y:0}:{x:h?o.width-b.width:0,y:h?o.height-b.height:0},y={x:b.left,y:b.top};return m.x&&m.y?y:Ya(y,m)}}}};function $3(e,t){return!uc(e)||!uc(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function $k(e,t){return!uc(e)||!uc(t)||!$3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const Ak=e=>{let{transform:t}=e;return{...t,y:0}};function A3(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const Zh=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:A3(o,n,t)},Mk=e=>{let{transform:t}=e;return{...t,x:0}},M3=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:A3(t,n,o)},Kh=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:s=[Zh],strategy:a=Wh,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=J_(Gf(Uh),Gf(zh,{coordinateGetter:Bk}));function p(S){const j=e.findIndex(_=>_.id===S.active.id);d(j)}function f(){d(null)}function b(S){const{active:j,over:_}=S;if(j.id!==_.id){const g=e.findIndex(m=>m.id===j.id),h=e.findIndex(m=>m.id===_.id);e[g].moved=!0,t(Hh(e,g,h))}d(null)}return r.jsxs(QT,{sensors:u,collisionDetection:nT,onDragStart:p,onDragCancel:f,onDragEnd:b,modifiers:s,children:[r.jsx(wk,{items:e,strategy:a,children:r.jsx(n,{...i,children:e.map(S=>r.jsx(Pk,{id:S.id,item:S,Item:o,...i,role:"drag"},S.id))})}),l&&c&&r.jsx(xk,{children:r.jsx(l,{item:c,...i})})]})},Pk=({id:e,item:t,Item:n,...o})=>{const{attributes:s,listeners:a,setNodeRef:l,transform:i,transition:c}=Ok({id:e}),d={transform:Dr.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:a,...s,...o})},P3=({...e})=>r.jsx(Kh,{modifiers:[Mk,M3,Zh],strategy:Sk,...e}),Ik=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:s})=>{const a=Za(t),l=o.map(c=>Th(e[c],"id label")),i=c=>{s(c.map(d=>d.id))};return r.jsxs(bn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(P3,{items:l,Item:A_,setOrder:i,isVisible:a,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(P_,{})]})},zk=xt.Consumer(Ik),Fk=({headerClass:e,Summary:t=m_,PageSize:n=E_,Columns:o=zk})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),Uk=xt.Consumer(Fk),i1=({value:e})=>be(e)?e:"",Vk=({value:e})=>be(e)?ia(e):"",c1=({value:e})=>be(e)?uC(e):"",Hk=({value:e})=>be(e)?pC(e):"",Wk=({value:e})=>be(e)?e?"true":"false":"",Zk={default:i1,text:i1,number:Vk,price:c1,currency:c1,boolean:Wk,title:Hk},Kk=({row:e,column:t,name:n,value:o,cellClass:s,sortColumn:a,sortingClass:l="sorting",displayTypes:i=Zk})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=a===n,p=fe(s,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},Yk=xt.Consumer(Kk),Gk=({row:e,columns:t,rowClass:n,onRowClick:o=ke,visibleColumns:s,Cell:a=Yk})=>r.jsx("tr",{className:n,onClick:()=>o(e),children:s.map(l=>{const i=t[l],c=i.field??l,d=e[c];return r.jsx(a,{row:e,name:l,field:c,column:i,value:d},l)})}),qk=xt.Consumer(Gk),Qk=({page:e,Row:t=qk})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),Xk=xt.Consumer(Qk),Jk=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:s,sortUpIcon:a="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:f,filteringClass:b="filtering",filterIcon:S="filter",filteringIcon:j="filter-solid",filterIconClass:_="filter-icon",headingClass:g="heading",rightClass:h="right"})=>{const m=e===n,y=m&&o,C=be(f[e]);return r.jsx("th",{className:fe(g,t.right?h:null,u?b:null,C?b:null,m?d:null),onClick:()=>s(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(re,{className:_,name:C?j:S,onClick:p}),r.jsx(re,{className:c,name:m?y?a:l:i})]})]})})},eE=xt.Consumer(Jk),tE=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=eE})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(s=>r.jsx(o,{name:s,column:e[s]},s))})}),nE=xt.Consumer(tE),rE=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:s="filtering",clearFilterIcon:a="cross"})=>r.jsx("th",{className:fe(o,be(t[e])?s:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(re,{name:a,onClick:()=>n(e,null)})]})}),oE=xt.Consumer(rE),sE=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=oE})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(s=>r.jsx(o,{name:s,column:e[s]},s))})}),aE=xt.Consumer(sE),lE=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,onRowClick:o,showFilters:s,Headings:a=nE,Filters:l=aE,Rows:i=Xk})=>r.jsxs("table",{className:fe(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(a,{}),s&&r.jsx(l,{}),r.jsx(i,{})]}),iE=xt.Consumer(lE),cE=({scrollX:e,Table:t=iE})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),dE=xt.Consumer(cE),uE=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:s="solid",render:a,...l})=>{const d=t-1,u=t,p=e+1,f=e>0?e-1:null,b=be(f)?f+1:null,S=e<d?e+1:null,j=be(S)?S+1:null;return a({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:f,prevPageNo:b,nextPage:S,nextPageNo:j,buttonClass:n,pageClass:o,currentPageClass:s,...l})},Vr=Fr(uE),pE=Vr.Use,hE=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:s="arrow-left"})=>r.jsx(B,{className:o,icon:s,onClick:()=>t(e),disabled:Dc(e)}),mE=Vr.Consumer(hE),fE=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:s="arrow-right"})=>r.jsx(B,{className:o,icon:s,onClick:()=>t(e),disabled:!e}),xE=Vr.Consumer(fE),gE=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:s})=>r.jsx(B,{text:t,className:o,onClick:s}),vE=Vr.Consumer(gE),bE=r.jsx(r.Fragment,{children:"…"}),jE=({pageSeparatorClass:e="separator",pageSeparator:t=bE})=>r.jsx("div",{className:e,children:t}),yE=Vr.Consumer(jE),SE=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:s,prevPageNo:a,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:f,pageClass:b=f,currentPageClass:S="brand",showFirstLast:j=!0,Separator:_=yE,Page:g=vE})=>r.jsxs("div",{className:p,children:[j&&s>n&&r.jsxs(r.Fragment,{children:[r.jsx(g,{page:n,pageNo:o,className:b,onClick:()=>u(n)}),s>n+1&&r.jsx(_,{})]}),be(s)&&r.jsx(g,{page:s,pageNo:a,className:b,onClick:()=>u(s)}),r.jsx(g,{page:e,pageNo:t,className:S,current:!0,disabled:!0}),be(l)&&r.jsx(g,{page:l,pageNo:i,className:b,onClick:()=>u(l)}),j&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(_,{}),r.jsx(g,{page:c,pageNo:d,className:b,onClick:()=>u(c)})]})]}),CE=Vr.Consumer(SE),wE=({className:e="pager",size:t,color:n,Previous:o=mE,Next:s=xE,Pages:a=CE})=>r.jsxs("div",{className:fe(e,t,n),children:[r.jsx(o,{}),r.jsx(a,{}),r.jsx(s,{})]}),_E=Vr.Consumer(wE),TE=({Content:e=_E,...t})=>r.jsx(Vr.Provider,{...t,children:r.jsx(e,{})}),Xt=ee(TE,"Pager"),kE=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Xt,{page:n.page,pages:n.pages,setPage:s=>o(s+1),...t})}),EE=xt.Consumer(kE),NE=({color:e,className:t="datatable",Header:n=Uk,Body:o=dE,Footer:s=EE})=>r.jsxs("section",{className:fe(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(s,{})]}),RE=xt.Consumer(NE),OE=({Content:e=RE,...t})=>r.jsx(xt.Provider,{...t,children:r.jsx(e,{})}),$t=ee(OE,"Datatable"),DE=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),LE=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),BE=({className:e,size:t,color:n,lined:o,border:s,radius:a,shaded:l,shadow:i,open:c,Summary:d=DE,Content:u=LE,...p})=>r.jsxs("details",{className:fe(e,n,Co(s),_s(a),ws(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Je=ee(BE,"Details");var Nt;let $E=(Nt=class extends sc{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,s]=this.props.findOption(n,t),a=this.inputValue(o);return{value:o,cursor:s,input:a,options:n}}inputValue(t=this.props.value){return be(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Lh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Bh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Ac:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Mc:this.close();break;case Bw:this.debug("backspace"),this.searchBackspace();break;case Lw:return;case $h:if(this.state.isOpen){if(!(this.state.searchInput??Sa).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){this.debug(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}this.debug(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??Sa)+t)}searchBackspace(){this.setSearch(be(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:be(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},je(Nt,"debug",!1),je(Nt,"debugPrefix","Select > "),je(Nt,"debugColor","MediumVioletRed"),je(Nt,"defaultProps",{...Nt.defaultProps,options:[],search:!1,findOption:kw,validOption:ul,searchOptions:Ew,displayValue:oc("displayValue"),displayOption:oc("displayOption")}),je(Nt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),je(Nt,"initialState",{value:Sa,cursor:void 0,...Nt.inactiveState}),je(Nt,"initialProps",{}),je(Nt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),Nt);const _o=Fr($E),AE=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:s="Select",placeholderClass:a="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsxs("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:[be(e)&&e.length?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:a,children:s})," "]}),r.jsx("div",{className:c,children:r.jsx(re,{name:"angle-down"})})]}),ME=_o.Consumer(AE),PE=({option:e,active:t,activeRef:n,selected:o,onClick:s,onMouseEnter:a,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:fe(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:a,onClick:s,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),IE=_o.Consumer(PE),zE=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),FE=_o.Consumer(zE),UE=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:s,selectOption:a,setCursor:l,Option:i=IE,NoOptions:c=FE})=>r.jsx("div",{className:n,ref:t,children:Cs(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:be(o)&&e[o]===d,selected:s===d,onClick:()=>a(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),VE=_o.Consumer(UE),HE=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:s,clearSearch:a,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:f,searchIcon:b="search",clearSearchIcon:S="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(re,{name:b})}),r.jsx("input",{ref:o,className:f,type:"text",placeholder:l,value:e??"",onClick:j=>j.stopPropagation(),onChange:j=>s(j.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:fe(u,e?p:null),onClick:a,children:r.jsx(re,{name:S})})]})}),WE=_o.Consumer(HE),ZE=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:s="open",closedClass:a="closed",Input:l=ME,Search:i=WE,Menu:c=VE})=>r.jsxs("div",{className:fe(o,t?s:a),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),KE=_o.Consumer(ZE),YE=({Content:e=KE,...t})=>r.jsx(_o.Provider,{...t,children:r.jsx(e,{})}),rn=ee(YE,"Select");var GE=Object.defineProperty,qE=(e,t,n)=>t in e?GE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,En=(e,t,n)=>(qE(e,typeof t!="symbol"?t+"":t,n),n),QE=Object.defineProperty,XE=(e,t,n)=>t in e?QE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Id=(e,t,n)=>(XE(e,typeof t!="symbol"?t+"":t,n),n);function JE(e={},t={},n={}){return Object.entries(t).reduce((o,[s,a])=>{const l=n[a];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function eN(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const s=e[o]||oN(`Cannot expose non-existent action method: ${o}`);return n[o]=s.bind(e),n},{})}function tN(e,t){const n=e.debug??t.debug,o=d1(e.debugPrefix??t.debugPrefix,e),s=d1(e.debugColor??t.debugColor,e);return n?o?(a,...l)=>console.log(`%c${o}%c${a}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function nN(e){return Array.isArray(e)}function I3(e){return typeof e=="function"}function d1(e,t){return I3(e)?e(t):e}function rN(e){return nN(e)?e:[e]}function oN(...e){throw new Error(e.join(""))}const z3=(e,t={})=>{const n=X.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:s=>r.jsx(n.Provider,{value:s,children:o.children})}),Consumer:o=>s=>r.jsx(n.Consumer,{children:a=>r.jsx(o,{...a,...s})}),Children:({children:o})=>rN(o).map((s,a)=>I3(s)?r.jsx(n.Consumer,{children:s},a):s),Use:()=>X.useContext(n)}};let Ri=class extends X.Component{constructor(e){super(e);const t=this.constructor;this.debug=tN(e,t),this.state=JE(t.initialState,t.initialProps,e),this.actions=eN(this,t.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Id(Ri,"initialState",{}),Id(Ri,"initialProps",{}),Id(Ri,"actions",[]);function F3(e){return typeof e=="boolean"}function Ns(e){return typeof e=="string"}function qa(e){return Array.isArray(e)}function Hc(e){return typeof e=="function"}function sN(e){return e instanceof RegExp}function Rs(e){return typeof e=="object"&&!qa(e)&&!U3(e)}function aN(e){return e===void 0}function U3(e){return e===null}function Pt(e){return!(aN(e)||U3(e))}function lN(e){return!Pt(e)}function iN(...e){throw new Error(e.join(""))}const u1=(e,...t)=>Hc(e)?e(...t):e;function cs(){}function cN(){return Intl.DateTimeFormat().resolvedOptions().locale}cN();function V3(e,t=/,\s*|\s+/){return lN(e)?[]:Ns(e)?e.length?e.split(t):[]:qa(e)?e:[e]}function H3(e,t=!0,n={}){return Rs(e)?e:V3(e).reduce((o,s)=>(o[s]=Hc(t)?t(s):t,o),n)}function dN(e){if(Hc(e))return e;if(sN(e))return t=>e.test(t);if(Rs(e))return t=>!!e[t];if(qa(e)||Ns(e)){const t=H3(e);return n=>!!t[n]}iN("Invalid selector() specification: "+e)}const uN=(e,t,n={})=>{let o={},s={delete:!1,...n};const a=dN(t);return Object.keys(e).map(l=>{if(a(l)){let i=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(i=s.value(i)),o[l]=i}}),o},pN="",hN="blur",vl="changed",mN="disabled",Wc="focus",fN="fulfilled",bl="invalid",W3="Optional",xN="radio",Z3="Required",gN="A value is required",p1="reset",jl="submitted",Os="submitting",Yh="text",vN="unvalidated",yl="valid",Hr="validating",bN=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],jN=["id","name","action","method","encType"];let K3=class extends Ri{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(p1)}}setStatus(e,t={},n=cs){this.mounted&&this.setState(o=>({...Hc(t)?t(o):t,status:this.newStatus(e,o.status)}),n)}setResetState(e,t){this.setStatus(p1,e,t)}setChangedState(e,t){this.setStatus(vl,e,t)}setValidatingState(e,t){this.setStatus(Hr,e,t)}setInvalidState(e,t){this.setStatus(bl,e,t)}setValidState(e,t){this.setStatus(yl,e,t)}setUnvalidatedState(e,t){this.setStatus(vN,e,t)}};function Y3(e,t){return t.reduce((n,o)=>(Pt(e[o])&&(n[o]=e[o]),n),{})}const Zc=e=>Y3(e,bN),yN=e=>Y3(e,jN),G3=e=>e.filter(Pt).join(" "),SN=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),On=(...e)=>G3(e.flatMap(t=>Rs(t)?SN(t):t)),Kc=e=>On(e.inputClass,e.inline&&"inline"),Jo=(e,t,n=t)=>(e==null?void 0:e[t])||n,CN=(e,t={},...n)=>G3(Object.entries(e).reduce((o,[s,a])=>(a&&o.push(t[s]||s),o),[...n])),wN=e=>{const{status:t,className:n,classes:o,required:s,showRequired:a,showOptional:l}=e;return CN(t,o,Jo(o,"field"),n,a&&s?"required":null,l&&!s?"optional":null)},q3=(e,...t)=>{const{gap:n,space:o,stack:s,className:a}=e;return a||(o?On("flex","space",...t):On("flex",n?`gap-v-none gap-h-${n}`:null,s?`stack-${s}`:null,...t))},_N=(e,...t)=>{const{grid:n,gap:o,stack:s,className:a}=e;return a||(n?On(`grid-${n}`,o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t):On(...t))},TN={boolean:!0,string:!0,number:!0},Q3=e=>TN[typeof e]?{value:e,text:e}:e,pc=(...e)=>function(...t){for(let n of e.filter(Boolean))n(...t)};function h1(e){if(F3(e))return[1,!1];if(Pt(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const kN=(e,t)=>Ns(e)?{[t]:e}:e,EN={submittingClass:Os,validatingClass:Hr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},m1={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:gN,requiredLabel:Z3,optionalLabel:W3},NN=H3(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),gs={[yl]:!1,[bl]:!1},RN={...gs,[vl]:!0},ON={...gs,[Hr]:!0},DN={[yl]:!1,[bl]:!0,[Hr]:!1},LN={[yl]:!0,[bl]:!1,[Hr]:!1},BN={[Wc]:!1},$N={[Wc]:!0},AN={[Os]:!0,[jl]:!1},MN={[Os]:!1,[jl]:!0},X3={changed:RN,validating:ON,invalid:DN,valid:LN},J3=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),PN=()=>{const e={...gs,[vl]:!1,[Hr]:!1,[jl]:!1,[Os]:!1};return J3({...X3,reset:e,submitting:AN,submitted:MN,unvalidated:gs})},IN=(e={})=>{const t={...gs,[vl]:!1,[Hr]:!1,[Wc]:!1,[mN]:e.disabled||!1};return J3({...X3,reset:t,focus:$N,blur:BN,unvalidated:gs})},zN=({status:e,any:t=!1,...n})=>{const o=[vl,Hr,yl,bl,Os,jl].filter(s=>Pt(n[s])).map(s=>e[s]);return t?o.some(Boolean):o.every(Boolean)};class Mo extends K3{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,o={...n},s={...EN,...this.props};this.state={...s,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,n){var o,s;const a=((o=this.props.fields)==null?void 0:o[t])??{},l=n.value??((s=this.props.values)==null?void 0:s[t]);return{name:t,...uN(this.props,NN),...a,...n,value:l}}attachField(t,n){this.debug(`attaching ${t} field`),this.fields[t]=n,this.setState(o=>({values:{...o.values,[t]:n.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(Os,t,n)}setSubmittedState(t,n){this.setStatus(jl,t,n)}setFocus(t,n){var o;n==null||n.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,n){this.debug(`setValue(${t}, ${n})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:n}}))}setValues(t,n){this.debug("setValues():",t),n==null||n.preventDefault(),Object.entries(t).forEach(([o,s])=>{var a;return(a=this.fields[o])==null?void 0:a.setValue(s)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((s,{status:a,value:l,reason:i})=>(a===fN?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(i),s),{values:{...this.state.values},errors:[]})).then(o=>{var s;return this.debug("field validation complete: ",o),(s=o.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",o),n(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(a=>t({...o,values:a})).catch(a=>n(a))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const n=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",n),this.setSubmittedState(),n!=null&&n.ok||(n==null?void 0:n.status)===200)this.debug(`Success response ok:${n==null?void 0:n.ok} status:${n==null?void 0:n.status}`),this.handleSuccess(n);else if((n==null?void 0:n.status)>=400&&n.status<=500)this.debug(`Error response status:${n==null?void 0:n.status}`),this.handleError(n.data);else throw new Error(`Unknown response: ${n==null?void 0:n.status}`)}catch(n){this.debug("onSubmit error:",n),this.setSubmittedState(),this.handleError(Ns(n)?{error:n}:n instanceof Error?{error:n.message}:n)}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||cs;this.setValidState({},pc(()=>n(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const n=qa(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||cs;this.setInvalidState(t,pc(()=>o(t),n?()=>n.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const n=t.reduce((o,s)=>{const a=s.name??s.param??s.field,{message:l}=s,i=a&&this.fields[a];return i&&(s.label||(s.label=i.props.label),i.setInvalidState({message:l}),o.push(i)),o},[]);return this.state.focusInvalidField&&n.length?n[0]:null}sanitiseErrors(t){if(Rs(t)&&(t=Object.entries(t).map(([n,o])=>({name:n,...kN(o,"message")}))),!qa(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(n=>n.message??(n.message=n.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}En(Mo,"newStatus",PN),En(Mo,"debug",!1),En(Mo,"debugPrefix","Form > "),En(Mo,"debugColor","rebeccapurple"),En(Mo,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const FN=z3(Mo),{Context:XK,Provider:UN,Consumer:VN,Children:HN,Use:Ds}=FN,WN=({children:e})=>{const t=Ds(),n=yN(t),{submit:o,className:s}=t;return r.jsx("form",{className:s,...n,onSubmit:o,noValidate:!0,children:r.jsx(HN,{children:e})})},ZN=({children:e,Layout:t=WN,...n})=>r.jsx(UN,{...n,children:r.jsx(t,{children:e})}),KN=e=>{const{id:t,value:n}=e;return{...e,id:t||v.useId(),value:n??e.default??pN}};class Po extends K3{constructor(t){super(t),this.name=t.name;const{value:n}=t,o=n;this.form=this.props.form,this.state={...this.state,initialValue:o,value:n,error:null},this.debug("initial state:",this.state),this.inputRef=v.createRef(),this.resetRef=v.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):cs}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(Wc,t,n)}setBlurState(t,n){return this.setStatus(hN,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var n,o;t==null||t.preventDefault(),(o=(n=this.inputRef)==null?void 0:n.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:s,validateOnInvalid:a=!0,minValidateLength:l=1}=this.props,[i]=h1(n);let c=s||a&&o;i<l&&!o&&(c=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),c?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.form.setValue(this.props.name,n),this.setResetState({value:n,message:this.props.message},()=>{var o,s;return(s=(o=this.resetRef)==null?void 0:o.current)==null?void 0:s.reset()}),n}validation(t){this.validate(t).then(cs).catch(cs)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,pc(this.on.valid,t)),{...n,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,pc(this.on.invalid,t)),{...n,...o}})}validator(){return async(t,n)=>{const{value:o=""}=this.state,{validate:s,required:a,requiredMessage:l,validMessage:i}={...m1,...this.props},[,c]=h1(o);if(this.setValidatingState(),s)return await this.validateValidator(t,n,s,i);if(c)return await this.validateEmpty(t,n,a,i,l);this.debug("no validation defined"),t({value:o,message:i})}}async validateValidator(t,n,o,s){this.debug("calling validate function");const a=this.getContext();try{this.debug(`calling validate function with value [${a.value}]`);const l=await o(a.value,a,t,n);this.debug("validate function passed:",l),t(Rs(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const i=Ns(l)?l:l.message;this.debug("rejecting with message:",i),n({message:i})}}validateEmpty(t,n,o,s,a){o?(this.debug("failing validation - required field is empty"),n({message:a})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,n){n==null||n.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,n){n==null||n.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...m1,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}En(Po,"newStatus",IN),En(Po,"debug",!1),En(Po,"debugPrefix",e=>`Field [${e.name}] > `),En(Po,"debugColor","teal"),En(Po,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const YN=z3(Po),{Context:JK,Provider:GN,Consumer:eY,Children:qN,Use:wt}=YN,e0=({field:e=wt()})=>{const{label:t,id:n,required:o}=e,s=e.showRequired&&o,a=e.showOptional&&!o,l=t||s||a,i=e.labelClass,c={};return s&&e.requiredLabel!==Z3&&(c["--required-text"]=`"${e.requiredLabel}"`),a&&e.optionalLabel!==W3&&(c["--optional-text"]=`"${e.optionalLabel}"`),l&&r.jsx("label",{htmlFor:n,className:i,style:c,children:t||r.jsx("span",{children:" "})})},QN=e=>t=>e.onChange(t.target.value),XN=e=>t=>e.onChange(t.target.checked),Lr={default:QN,checkbox:XN},JN=({field:e=wt()})=>{const{id:t,text:n,inline:o,border:s,labelClass:a,type:l="checkbox",handler:i=Lr[l]||Lr.default}=e,c=Zc(e),d=On("checkbox",a,{inline:o,border:s});return r.jsxs("label",{htmlFor:t,className:d,children:[r.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:Kc(e),...c,checked:e.value}),n]})},t0=({field:e=wt()})=>r.jsx("input",{type:"hidden",name:e.name,value:e.value}),eR=({field:e=wt()})=>{const{inline:t,border:n,options:o=[],inputClass:s,optionClass:a,optionsClass:l="options",type:i="radio",handler:c=Lr[i]||Lr.default}=e,d=Zc(e);return r.jsx("div",{className:On(l),children:o.map((u,p)=>{u=Q3(u);const f=`${e.id}-${u.value}`,b=e.value==u.value,S=(e.value?b:p==0)?e.inputRef:null,j=On("radio",a,u.className,{inline:t,border:n});return r.jsxs("label",{className:j,disabled:u.disabled,htmlFor:f,children:[r.jsx("input",{type:i,className:s,ref:S,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:f,checked:b,value:u.value}),u.text]},u.value)})})},tR=({field:e=wt()})=>{const{options:t=[],placeholder:n,type:o="select",optionClass:s="option",handler:a=Lr[o]||Lr.default}=e,l=Zc(e);return r.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:Kc(e),onChange:a(e),...l,value:e.value,required:e.required||!!n,children:[!!n&&r.jsx("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(i=>(i=Q3(i),r.jsx("option",{className:s,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},f1=({field:e=wt()})=>{const{type:t=Yh,handler:n=Lr[t]||Lr.default}=e,o=Zc(e);return r.jsx("input",{type:t,ref:e.inputRef,className:Kc(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:n(e),...o})},nR=({field:e=wt()})=>{const{rows:t=5,cols:n=20}=e;return r.jsx("textarea",{id:e.id,ref:e.inputRef,className:Kc(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:n})},Qa={default:f1,checkbox:JN,hidden:t0,radio:eR,select:tR,text:f1,textarea:nR},n0=(e,t)=>Qa[e]=t,rR=({field:e=wt()})=>r.jsx("div",{className:On("prefix",e.prefixClass),children:e.prefix}),oR=({field:e=wt()})=>r.jsx("div",{className:On("suffix",e.suffixClass),children:e.suffix}),sR=({field:e=wt()})=>{const{classes:t,prefix:n,suffix:o,inputsClass:s,inline:a,type:l=Yh,Prefix:i=rR,Suffix:c=oR}=e,d=Qa[l]||Qa.default;let u=[Jo(t,"inputs")];Pt(n)&&u.push(Jo(t,"prefixed")),Pt(o)&&u.push(Jo(t,"suffixed")),a&&u.push(Jo(t,"inline")),Pt(s)&&u.push(s);const p=u.join(" ");return r.jsxs("div",{className:p,children:[Pt(n)&&r.jsx(i,{field:e}),r.jsx(d,{field:e}),Pt(o)&&r.jsx(c,{field:e})]})},r0=({field:e=wt()})=>{const{prefix:t,suffix:n,type:o=Yh}=e,s=Qa[o]||Qa.default;return o==xN?r.jsx(s,{field:e}):Pt(t)||Pt(n)?r.jsx(sR,{}):r.jsx(s,{field:e})},o0=({field:e=wt()})=>{const{help:t,message:n,classes:o}=e,s=n??t,a=Jo(o,"help");return s?r.jsx("div",{className:a,children:s}):null},s0=({field:e=wt(),children:t})=>{const{type:n,Label:o=e0,Message:s=o0,Input:a=r0}=e,l=wN(e);return n==="hidden"?r.jsx(t0,{field:e}):r.jsx("div",{className:l,children:t||r.jsxs(r.Fragment,{children:[r.jsx(o,{field:e}),r.jsx(a,{field:e}),r.jsx(s,{field:e})]})})},a0=({name:e,children:t,...n})=>{const o=Ds(),s=KN(o.fieldSpec(e,n)),a=s.Layout||s0;return r.jsx(GN,{form:o,...s,children:t?r.jsx(qN,{children:t}):r.jsx(a,{})})},l0=({names:e,className:t,grid:n=!1,gap:o=4,stack:s,...a})=>{const l=V3(e);return F3(n)&&n&&(n=l.length),r.jsx("div",{className:_N({grid:n,gap:o,stack:s,props:a},t),children:l.map(i=>r.jsx(a0,{name:i,...a},i))})},aR=({className:e="",legend:t,children:n,fields:o,...s})=>r.jsxs("fieldset",{className:e,children:[!!t&&r.jsx("legend",{children:t}),!!o&&r.jsx(l0,{names:o,...s}),n]}),lR=({children:e,...t})=>zN(t)&&e,i0=VN(lR),iR=({values:e=!0,status:t=!1,all:n=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:s="Form Debugging",valuesTitle:a="Values",statusTitle:l="Status",...i})=>{const c=Ds();return r.jsxs("div",{className:o,children:[s&&r.jsx("h3",{className:"mar-v-none",children:s}),r.jsxs("div",{className:"grid-1 gap-4",children:[e&&r.jsxs("div",{children:[a&&r.jsx("h4",{className:"mar-v-none",children:a}),r.jsx(x1,{rows:Object.entries(c.values),...i})]}),(t||n)&&c.status&&r.jsxs("div",{children:[l&&r.jsx("h4",{children:l}),r.jsx(x1,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},x1=({rows:e,children:t,color:n="brand",tableClass:o=`${n} shaded celled wide small pad-none mar-b-0`,...s})=>r.jsx("table",{className:o,children:r.jsx("tbody",{children:t||e.map(([a,l])=>r.jsx(cR,{name:a,value:l,...s},a))})}),cR=({name:e,value:t,keyClass:n="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>r.jsxs("tr",{valign:"top",children:[r.jsx("th",{className:n,children:e}),r.jsx("td",{className:o,children:r.jsx(dR,{value:t})})]}),dR=({value:e})=>Rs(e)?JSON.stringify(e):Pt(e)?e.toString():"",uR=({error:e})=>{const t=e.label||e.name;return r.jsxs(r.Fragment,{children:[!!t&&r.jsxs("b",{children:[t,": "]}),e.message]})},pR=({error:e})=>Ns(e)?e:r.jsx(uR,{error:e}),hR=({form:e=Ds(),title:t=e.errorsTitle,prompt:n=e.errorsPrompt,fieldErrors:o=!1,className:s="error alert border"})=>{const{error:a,errors:l,Error:i=pR}=e,c=!!a,d=(o?l.length:0)+(c?1:0);return d!==0?r.jsxs("div",{className:s,children:[!!t&&r.jsx("div",{className:"headline",children:u1(t,d)}),r.jsxs("div",{children:[c&&r.jsx("h4",{children:r.jsx(i,{error:a})}),o&&l.length!==0&&r.jsxs(r.Fragment,{children:[!!n&&r.jsx("p",{className:"wide",children:u1(n,l.length)}),r.jsx("ul",{children:l.map((u,p)=>r.jsx("li",{children:r.jsx(i,{error:u})},p))})]})]})]}):null},mR=({field:e=wt(),selectValue:t=e.selectValue||Pg})=>r.jsx(rn,{...e,onSelect:n=>e.onChange(t(n))}),ci={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class pr extends Ca{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?fC(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const n=this.inputValue(t);return{value:t,input:n}}inputValue(t=this.props.value){return be(t)?this.props.displayValue(t):Sa}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Ir(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...ci})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Lh:this.setCursor(n+1);break;case Bh:this.setCursor(n-1);break;case Ac:this.selectCursor();break;case Mc:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.setState({value:t,input:n,...ci},this.props.onReset)}clear(){this.debug("clear()"),this.setState({value:void 0,input:Sa,...ci},this.props.onClear)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...ci},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&be(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){i3(this._resultsRef,t)}}je(pr,"debug",!1),je(pr,"debugPrefix","Search > "),je(pr,"debugColor","MediumVioletRed"),je(pr,"defaultProps",{minLength:2,debounceTime:500,onLoad:ke,onUnload:ke,onFocus:ke,onBlur:ke,onReset:ke,onClear:ke,onSelect:ke,displayValue:oc("displayValue"),displayResult:oc("displayResult")}),je(pr,"initialState",{value:"",searching:!1}),je(pr,"initialProps",{value:"initialValue"}),je(pr,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","clear","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const Ls=Fr(pr),fR=({input:e,onFocus:t,onBlur:n,onChange:o,clear:s,placeholder:a="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:f="text",inputClass:b="",disabled:S,searching:j})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(re,{name:i})}),r.jsx("input",{type:f,placeholder:a,value:e,onFocus:t,onBlur:n,onChange:o,disabled:S,className:b}),r.jsx("div",{className:p,onClick:s,children:r.jsx(re,{name:j?c:l})})]}),xR=Ls.Consumer(fR),gR=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:s,displayResult:a,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:fe(l,{[i]:t}),onClick:o,onMouseEnter:s,ref:t?n:null,children:a(e)}),vR=Ls.Consumer(gR),bR=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),jR=Ls.Consumer(bR),yR=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:s,resultsClass:a="menu border bdr-1",Result:l=vR,NoResults:i=jR})=>r.jsx("div",{className:a,ref:t,children:Cs(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:be(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>s(d)},c.id??c.value??d)):r.jsx(i,{})}),SR=Ls.Consumer(yR),CR=({results:e,onKeyDown:t,Input:n=xR,Results:o=SR})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),wR=Ls.Consumer(CR),_R=({Content:e=wR,...t})=>r.jsx(Ls.Provider,{...t,children:r.jsx(e,{})}),Jn=ee(_R,"Search"),TR=({field:e=wt(),selectValue:t=e.selectValue||Pg})=>r.jsx(Jn,{...e,onSelect:n=>e.onChange(t(n)),onReset:e.reset}),kR=({color:e,className:t,style:n,fixed:o,light:s,dark:a,children:l})=>r.jsx("div",{className:fe("overlay",t,e,{fixed:o,light:s,dark:a}),style:n,children:l}),To=ee(kR,"Overlay"),g1=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),v1=(e,t,n,o,s,a)=>{n?(t.push(`stc-${s}`,`std-${a}`),Bg(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},b1=(e,t,n,o,s)=>{n?t.push(`flc-${o}`,`fld-${s}`):e.push("fill=none")},ER=({size:e,className:t,icon:n="cog",color:o="brand",stroke:s=!0,strokeWidth:a,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:f=o,bgStroke:b=!1,bgStrokeWidth:S,bgStrokeStop:j=60,bgStrokeStopDark:_=70,bgFill:g=!0,bgFillStop:h=70,bgFillStopDark:m=30,shrink:y=p?5:0,reverse:C=!1,animation:x=C?"spin.reverse":"spin"})=>{const w=fe(e,t),E=[],N=[f],D=[],$=[o,x];v1(E,N,b,S,j,_),v1(D,$,s,a,l,i),b1(E,N,g,h,m),b1(D,$,c,d,u),y&&D.push(`shrink=${y}`);const Y=p?`${p}${g1(E,N)}`:"",Q=`${n}${g1(D,$)}`,U=p?`${Y} ${Q}`:Q;return r.jsx(re,{name:U,className:w})},Z=ee(ER,"Spinner"),NR=({text:e="Submitting...",size:t="largest",className:n="flex middle center pad-8",light:o,dark:s,fixed:a,spinnerSize:l="x4",Spinner:i=Z,...c})=>r.jsx(i0,{submitting:!0,children:r.jsx(To,{className:fe(n,t),light:o,dark:s,fixed:a,children:r.jsxs("div",{className:"text-center",children:[i&&r.jsx(i,{size:l,...c}),r.jsx("div",{className:"mar-t-4",children:e})]})})}),Gh=ee(NR,"Submitting"),RR=({text:e="Cancel",className:t="cancel",Button:n=B,...o})=>r.jsx(n,{text:e,className:t,...o}),OR=ee(RR,"Cancel"),DR=({type:e="reset",text:t="Reset",className:n="reset",Button:o=B,...s})=>{const{reset:a}=Ds();return r.jsx(o,{type:e,text:t,className:n,onClick:a,...s})},c0=ee(DR,"Reset"),LR=({type:e="submit",text:t="Submit",className:n="submit",Button:o=B,...s})=>{const{submit:a,status:l}=Ds();return r.jsx(o,{type:e,text:t,className:n,onClick:a,disabled:l.submitting,...s})},Sl=ee(LR,"Submit"),BR=({className:e,gap:t=4,space:n=!1,reset:o={},submit:s={}})=>r.jsxs("div",{className:q3({className:e,gap:t,space:n},"controls"),children:[r.jsx(c0,{...o}),r.jsx(Sl,{...s})]}),$R=ee(BR,"ResetSubmit"),AR=({className:e,gap:t=4,space:n=!1,cancel:o={},submit:s={}})=>r.jsxs("div",{className:q3({className:e,gap:t,space:n},"controls"),children:[r.jsx(OR,{...o}),r.jsx(Sl,{...s})]});ee(AR,"CancelSubmit");n0("uiselect",mR);n0("search",TR);const ar=ee(ZN,"Form"),at=ee(a0,"Field");ee(l0,"Fields");ee(aR,"Fieldset");ee(hR,"Errors");ee(i0,"Status");const Bs=ee(iR,"Debug");ee(s0,"Layout");ee(e0,"Label");ee(r0,"Input");ee(o0,"Message");const MR=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(re,{name:t})}),PR=ee(MR,"ModalClose"),IR=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,zR=ee(IR,"ModalHeader"),FR=({footer:e})=>!!e&&r.jsx("footer",{children:e}),UR=ee(FR,"ModalFooter"),VR=({text:e,children:t,Header:n=zR,Footer:o=UR,...s})=>r.jsxs("article",{children:[r.jsx(n,{...s}),e||t,r.jsx(o,{...s})]}),HR=ee(VR,"ModalContent"),WR=({ref:e,open:t,close:n,className:o,closeClass:s="close",closeIcon:a="cross",Close:l=PR,Content:i=HR,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:a,className:s}),r.jsx(i,{...c})]})),Mn=ee(WR,"Modal"),ZR=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=zr({visible:e});return{show:n,hide:o,Modal:s=>r.jsx(Mn,{open:t,...s})}},KR=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=zr({visible:e});return{show:n,hide:o,Overlay:s=>t&&r.jsx(To,{...s})}},YR=({className:e,disabled:t,children:n})=>r.jsx("label",{className:fe(e,{disabled:t}),children:n}),GR=ee(YR,"RadioLabel"),qR=({name:e,option:t,tabIndex:n=0,onChange:o=ke,checked:s})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:a=>o(a.target.checked),checked:s}),QR=ee(qR,"RadioInput"),XR=({name:e,option:t,checked:n,inline:o,border:s,labelClass:a="radio",inputClass:l,Label:i=GR,Input:c=QR,onChange:d})=>r.jsxs(i,{className:fe(a,t.labelClass,{inline:o,border:s}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:fe(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),JR=ee(XR,"RadioOption"),eO=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:s,Option:a=JR,...l})=>r.jsx("div",{className:fe(o,{disabled:s}),children:n.map(i=>{const c=So(i)?i:{value:i,label:i};return r.jsx(a,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),Dn=ee(eO,"Radio"),tO=({...e})=>r.jsx(Kh,{modifiers:[Ak,M3,Zh],strategy:jk,...e}),nO=({tab:e})=>{if(!e)return null;const{content:t,Component:n}=e;return t||(n?r.jsx(n,{tab:e}):"No content, element or Component defined for tab")},mt=({tabs:e,storageKey:t,storageItem:n="active-tab",tabsetClass:o="tabset",tabsClass:s="tabs",activeClass:a="active",disabledClass:l="disabled",className:i,bodyClass:c,color:d,size:u,solid:p,lined:f,center:b,right:S,Body:j=nO})=>{const _=t&&Ah(t),[g,h]=X.useState(_&&_.get(n)||0),m=x=>{h(x),_&&_.set(n,x)},y=fe(o,i,d,u,{solid:p,lined:f,center:b,right:S}),C=fe(s,d,u);return r.jsxs("div",{className:y,children:[r.jsx("ul",{className:C,children:e.map((x,w)=>r.jsx("li",{className:fe({[a]:g===w,[l]:x.disabled}),onClick:()=>x.disabled?ke:m(w),children:r.jsx(wo,{...x})},x.id||w))}),r.jsx("div",{className:c,children:r.jsx(j,{tabs:e,active:g,tab:e[g]})})]})},Yc=(e,t={})=>{const{onChange:n}=t,[o,s]=v.useState(n?n(e):e),a=Object.keys(e).reduce((l,i)=>{const c=`set${Mw(i)}`;return l[c]=d=>s(u=>{const p={...u,[i]:Lc(d,u[i])};return n?n(p):p}),l},{});return[o,a]},rO=()=>r.jsxs(ne,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),oO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,sO=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],d0=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),sO.map(o=>r.jsx("option",{value:o,children:o},o))]}),aO=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],u0=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),aO.map(n=>r.jsx("option",{value:n,children:n},n))]}),lO=[0,1,2,3,4,5,6,8,10],iO=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),lO.map(n=>r.jsx("option",{value:n,children:n},n))]}),cO=[1,2,3,4,5],dO=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),cO.map(n=>r.jsx("option",{value:n,children:n},n))]}),j1=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),uO=[0,1,2,3,4,5,6,8,10],pO=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),uO.map(o=>r.jsx("option",{value:o,children:o},o))]}),hO=Object.keys(ll.icons),ep=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),hO.map(o=>r.jsx("option",{value:o,children:o},o))]}),mO=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),s=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${xO(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(gO,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Vn,{code:i,language:"html",expand:!0})]})]}),r.jsx(fO,{options:n,setOption:a,toggleOption:s})]})},fO=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),s=n("title"),a=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),f=n("icon"),b=n("headIcon"),S=t("stripe"),j=t("revealable");return r.jsxs("div",{children:[r.jsx(zd,{label:"Headline",value:e.headline,setValue:o}),r.jsx(zd,{label:"Title",value:e.title,setValue:s}),r.jsx(zd,{label:"Text",value:e.text,setValue:a}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(vO,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(d0,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(u0,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(dO,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(pO,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(iO,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(ep,{icon:e.headIcon,setIcon:b,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(ep,{icons:e.icon,setIcon:f})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(j1,{checked:e.stripe,toggle:S,label:"Stripe"}),r.jsx(j1,{checked:e.revealable,toggle:j,label:"Revealable",disabled:!e.headline})]})]})]})},xO=e=>{const t=["headline","title","text","type","color","size","headIcon","icon"].filter(s=>e[s]).map(s=>`${s}="${e[s]}"`),n=["shadow","border","radius"].filter(s=>e[s]).map(s=>`${s}={${e[s]}}`),o=["stripe","revealable","dismissable"].filter(s=>e[s]);return[...t,...n,...o].join(`
  `)},gO=({options:e})=>r.jsx(ne,{...e}),vO=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),zd=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(re,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),p0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(te,{Component:rO,code:oO,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(mO,{})]}),bO=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),qh=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),jO=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},Cl=Fr(jO),yO=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Qh=Fr(Cl.Consumer(yO)),SO=({id:e,code:t,title:n=t,children:o,addPageToc:s,split:a})=>{const l=qh(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{s&&s(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:a?"cols-2 stack-desktop":"",children:o})]})},z=Qh.Consumer(SO),k=({Component:e,Source:t,children:n,code:o,title:s,caption:a=o?r.jsx("code",{children:o}):s,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(z,{code:o,title:s,...u,children:[r.jsx("div",{className:"mar-b-4",children:n}),r.jsx(te,{Component:e,code:t,caption:a,expand:l,undent:i,highlightLines:d,lineProps:c})]}),CO=()=>r.jsxs("div",{children:[r.jsx(ua,{text:"Error alert"}),r.jsx(ua,{text:"Error alert with border",border:!0}),r.jsx(ua,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(ua,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),wO=`import React from 'react'
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
`,h0=()=>r.jsx(k,{code:"Error",Component:CO,Source:wO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),_O=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),TO=()=>r.jsxs("div",{children:[r.jsx(ca,{text:"Info alert"}),r.jsx(ca,{text:"Info alert with border",border:!0}),r.jsx(ca,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(ca,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),kO=`import React from 'react'
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
`,m0=()=>r.jsx(k,{code:"Info",Component:TO,Source:kO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),EO=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),NO=()=>r.jsxs("div",{children:[r.jsx(Xo,{text:"Success alert"}),r.jsx(Xo,{text:"Success alert with border",border:!0}),r.jsx(Xo,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Xo,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),RO=`import React from 'react'
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
`,f0=()=>r.jsx(k,{code:"Success",Component:NO,Source:RO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),OO=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),DO=()=>r.jsxs("div",{children:[r.jsx(da,{text:"Warning alert"}),r.jsx(da,{text:"Warning alert with border",border:!0}),r.jsx(da,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(da,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),LO=`import React from 'react'
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
`,x0=()=>r.jsx(k,{code:"Warning",Component:DO,Source:LO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),BO=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),$O=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Border Alert",border:!0}),r.jsx(ne,{text:"Border Width 2",border:2})]}),AO=`import React from 'react'
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
`,g0=()=>r.jsx(k,{code:"border",Component:$O,Source:AO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),MO=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),PO=()=>r.jsx(ne,{text:"Hello World!",className:"border shadow-2"}),IO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,v0=()=>r.jsx(k,{code:"className",Component:PO,Source:IO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),zO=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),FO=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Red Alert",color:"red"}),r.jsx(ne,{text:"Brown Alert",color:"brown"}),r.jsx(ne,{text:"Orange Alert",color:"orange"}),r.jsx(ne,{text:"Yellow Alert",color:"yellow"}),r.jsx(ne,{text:"Green Alert",color:"green"}),r.jsx(ne,{text:"Teal Alert",color:"teal"}),r.jsx(ne,{text:"Blue Alert",color:"blue"}),r.jsx(ne,{text:"Indigo Alert",color:"indigo"}),r.jsx(ne,{text:"Violet Alert",color:"violet"}),r.jsx(ne,{text:"Purple Alert",color:"purple"}),r.jsx(ne,{text:"Pink Alert",color:"pink"}),r.jsx(ne,{text:"Maroon Alert",color:"maroon"})]}),UO=`import React from 'react'
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
`,b0=()=>r.jsx(k,{code:"color",Component:FO,Source:UO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),VO=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),HO=()=>r.jsx(ne,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),WO=`import React from 'react'
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
`,j0=()=>r.jsx(k,{code:"dismissable",Component:HO,Source:WO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),ZO=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),KO=()=>r.jsx(ne,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),YO=`import React from 'react'
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
`,y0=()=>r.jsx(k,{code:"headicon",Component:KO,Source:YO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),GO=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),qO=()=>r.jsx(ne,{headline:"Headline Alert",text:"An alert with a headline"}),QO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,S0=()=>r.jsx(k,{code:"headline",Component:qO,Source:QO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),JO=()=>r.jsxs("div",{children:[r.jsx(ne,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(ne,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(ne,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),eD=`import React from 'react'
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
`,C0=()=>r.jsx(k,{code:"icon",Component:JO,Source:eD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),tD=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),nD=()=>r.jsx(ne,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),rD=`import React from 'react'
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
`,w0=()=>r.jsx(k,{code:"onDismiss",Component:nD,Source:rD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),oD=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),sD=()=>r.jsx(ne,{text:"Radius Alert",radius:4}),aD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,_0=()=>r.jsx(k,{code:"radius",Component:sD,Source:aD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),lD=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),iD=()=>r.jsx(ne,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),cD=`import React from 'react'
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
`,T0=()=>r.jsx(k,{code:"revealable",Component:iD,Source:cD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),dD=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),uD=()=>r.jsx(ne,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),pD=`import React from 'react'
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
`,k0=()=>r.jsx(k,{code:"revealed",Component:uD,Source:pD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),hD=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),mD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(ne,{text:"Alert With Shadow 2",shadow:2}),r.jsx(ne,{text:"Alert With Shadow 3",shadow:3}),r.jsx(ne,{text:"Alert With Shadow 4",shadow:4}),r.jsx(ne,{text:"Alert With Shadow 5",shadow:5})]}),fD=`import React from 'react'
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
`,E0=()=>r.jsx(k,{code:"shadow",Component:mD,Source:fD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),xD=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),gD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Smallest Alert",size:"smallest"}),r.jsx(ne,{text:"Smaller Alert",size:"smaller"}),r.jsx(ne,{text:"Small Alert",size:"small"}),r.jsx(ne,{text:"Medium Alert",size:"medium"}),r.jsx(ne,{text:"Large Alert",size:"large"}),r.jsx(ne,{text:"Larger Alert",size:"larger"}),r.jsx(ne,{text:"Largest Alert",size:"largest"})]}),vD=`import React from 'react'
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
`,N0=()=>r.jsx(k,{code:"size",Component:gD,Source:vD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),bD=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),jD=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(ne,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(ne,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(ne,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(ne,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),yD=`import React from 'react'
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
`,R0=()=>r.jsx(k,{code:"stripe",Component:jD,Source:yD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),SD=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),CD=()=>r.jsx(ne,{text:"Hello World!"}),wD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,O0=()=>r.jsx(k,{code:"text",Component:CD,Source:wD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),_D=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),TD=()=>r.jsx(ne,{title:"Hello World!",children:"This is an alert"}),kD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,D0=()=>r.jsx(k,{code:"title",Component:TD,Source:kD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),ED=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),ND=()=>r.jsxs("div",{children:[r.jsx(ne,{text:"Info Alert",type:"info"}),r.jsx(ne,{text:"Success Alert",type:"success"}),r.jsx(ne,{text:"Warning Alert",type:"warning"}),r.jsx(ne,{text:"Error Alert",type:"error"})]}),RD=`import React from 'react'
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
`,L0=()=>r.jsx(k,{code:"type",Component:ND,Source:RD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),OD=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),Fe=({tocName:e,children:t})=>r.jsx(Qh.Provider,{tocName:e,children:t}),DD=({id:e,title:t,addPageTocHeading:n})=>{const o=qh(e||t),s=v.useRef();return v.useEffect(()=>{n&&n(o,t,s)},[e,t]),r.jsx("h2",{id:o,ref:s,className:"section-heading",children:t})},oe=Qh.Consumer(DD),LD=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(p0,{}),r.jsxs(Fe,{tocName:"alert",children:[r.jsx(oe,{title:"Properties"}),r.jsx(D0,{}),r.jsx(O0,{}),r.jsx(S0,{}),r.jsx(y0,{}),r.jsx(T0,{}),r.jsx(k0,{}),r.jsx(j0,{}),r.jsx(w0,{}),r.jsx(v0,{}),r.jsx(g0,{}),r.jsx(_0,{}),r.jsx(E0,{}),r.jsx(N0,{}),r.jsx(b0,{}),r.jsx(L0,{}),r.jsx(R0,{}),r.jsx(C0,{}),r.jsx(oe,{title:"Components"}),r.jsx(m0,{}),r.jsx(f0,{}),r.jsx(x0,{}),r.jsx(h0,{})]})]}),BD=Object.freeze(Object.defineProperty({__proto__:null,default:LD},Symbol.toStringTag,{value:"Module"})),$D=()=>r.jsx(le,{children:"This is a Badge"}),AD=`import { Badge } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Badge } from '@abw/badger-react-ui'

const BadgeExample = () =>
  <Badge>
    This is a Badge
  </Badge>

export default BadgeExample
`,B0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Badge"})," component can be used to render a badge. Any child elements will be included as content."]}),r.jsx("p",{children:"There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles."}),r.jsx(te,{Component:$D,code:AD,expand:!0})]}),MD=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),PD=()=>r.jsx(le,{text:"Custom Badge Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),ID=`import React from 'react'
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
`,$0=()=>r.jsxs(k,{code:"Content",Component:PD,Source:ID,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the badge content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the badge text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that badge content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all badges."]})]}),zD=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),FD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(le,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(le,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(le,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(le,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),UD=`import React from 'react'
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
`,A0=()=>r.jsx(k,{code:"border",Component:FD,Source:UD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width."]})}),VD=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),HD=()=>r.jsx(le,{text:"Custom Badge",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),WD=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,M0=()=>r.jsx(k,{code:"className",Component:HD,Source:WD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the badge."]})}),ZD=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),KD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(le,{text:"Red Badge",color:"red"}),r.jsx(le,{text:"Brown Badge",color:"brown"}),r.jsx(le,{text:"Orange Badge",color:"orange"}),r.jsx(le,{text:"Yellow Badge",color:"yellow"}),r.jsx(le,{text:"Green Badge",color:"green"}),r.jsx(le,{text:"Teal Badge",color:"teal"}),r.jsx(le,{text:"Blue Badge",color:"blue"}),r.jsx(le,{text:"Indigo Badge",color:"indigo"}),r.jsx(le,{text:"Violet Badge",color:"violet"}),r.jsx(le,{text:"Purple Badge",color:"purple"}),r.jsx(le,{text:"Pink Badge",color:"pink"}),r.jsx(le,{text:"Maroon Badge",color:"maroon"})]}),YD=`import React from 'react'
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
`,P0=()=>r.jsx(k,{code:"color",Component:KD,Source:YD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the badge."]})}),GD=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),qD=()=>r.jsx(le,{color:"green",icon:"thumb"}),QD=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    icon="thumb"
  />
/* END */

export default Component
`,I0=()=>r.jsx(k,{code:"icon",Component:qD,Source:QD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a badge."]})}),XD=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),JD=()=>r.jsx(le,{color:"green",text:"Unlocked",iconLeft:"unlocked"}),eL=`import React from 'react'
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
`,z0=()=>r.jsx(k,{code:"iconLeft",Component:JD,Source:eL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a badge."]})}),tL=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),nL=()=>r.jsx(le,{color:"red",text:"Locked",iconRight:"locked"}),rL=`import React from 'react'
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
`,F0=()=>r.jsx(k,{code:"iconRight",Component:nL,Source:rL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a badge."]})}),oL=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),sL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(le,{text:"Radius 0",color:"olive",radius:0}),r.jsx(le,{text:"Radius 2",color:"green",radius:2}),r.jsx(le,{text:"Radius 4",color:"teal",radius:3}),r.jsx(le,{text:"Radius 6",color:"blue",radius:4})]}),aL=`import React from 'react'
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
`,U0=()=>r.jsx(k,{code:"radius",Component:sL,Source:aL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),iL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(le,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(le,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(le,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(le,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(le,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),cL=`import React from 'react'
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
`,V0=()=>r.jsx(k,{code:"shadow",Component:iL,Source:cL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the badge ranging from 1 to 5."]})}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),uL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(le,{text:"Smallest",size:"smallest"}),r.jsx(le,{text:"Smaller",size:"smaller"}),r.jsx(le,{text:"Small",size:"small"}),r.jsx(le,{text:"Medium",size:"medium"}),r.jsx(le,{text:"Large",size:"large"}),r.jsx(le,{text:"Larger",size:"larger"}),r.jsx(le,{text:"Largest",size:"largest"}),r.jsx(le,{text:"x3",size:"x3"}),r.jsx(le,{text:"x5",size:"x5"}),r.jsx(le,{text:"x7",size:"x7"})]}),pL=`import React from 'react'
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
`,H0=()=>r.jsx(k,{code:"size",Component:uL,Source:pL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the badge size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),mL=()=>r.jsx(le,{text:"Tag Badge",tag:!0}),fL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Tag Badge" tag/>
/* END */

export default Component
`,W0=()=>r.jsx(k,{code:"tag",Component:mL,Source:fL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tag"})," property can be used to add the ",r.jsx("code",{children:"tag"})," CSS class to change the appearance of the badge."]})}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),gL=()=>r.jsx(le,{text:"Grey Badge"}),vL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Grey Badge"/>
/* END */

export default Component
`,Z0=()=>r.jsx(k,{code:"text",Component:gL,Source:vL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the badge."]})}),bL=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),jL=()=>r.jsx(le,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),yL=`import React from 'react'
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
`,K0=()=>r.jsx(k,{code:"tooltip",Component:jL,Source:yL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the badge.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),CL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Badge"}),r.jsx(B0,{}),r.jsxs(Fe,{tocName:"badge",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Z0,{}),r.jsx(W0,{}),r.jsx(P0,{}),r.jsx(M0,{}),r.jsx(A0,{}),r.jsx(U0,{}),r.jsx(V0,{}),r.jsx(H0,{}),r.jsx(I0,{}),r.jsx(z0,{}),r.jsx(F0,{}),r.jsx(K0,{}),r.jsx(oe,{title:"Components"}),r.jsx($0,{})]})]}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:CL},Symbol.toStringTag,{value:"Module"})),_L=()=>r.jsx(B,{children:"This is a button"}),TL=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,Y0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(te,{Component:_L,code:TL,expand:!0})]}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),EL=()=>r.jsx(B,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),NL=`import React from 'react'
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
`,G0=()=>r.jsxs(k,{code:"Content",Component:EL,Source:NL,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),OL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Bare",color:"red",bare:!0}),r.jsx(B,{text:"Green Bare",color:"green",bare:!0}),r.jsx(B,{text:"Blue Bare",color:"blue",bare:!0})]}),DL=`import React from 'react'
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
`,q0=()=>r.jsx(k,{code:"bare",Component:OL,Source:DL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),LL=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),BL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(B,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(B,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(B,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),$L=`import React from 'react'
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
`,Q0=()=>r.jsx(k,{code:"border",Component:BL,Source:$L,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),ML=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),PL=`import React from 'react'
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
`,X0=()=>r.jsx(k,{code:"bright",Component:ML,Source:PL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),IL=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),zL=()=>r.jsx(B,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),FL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,J0=()=>r.jsx(k,{code:"className",Component:zL,Source:FL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),VL=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Brown Button",color:"brown"}),r.jsx(B,{text:"Orange Button",color:"orange"}),r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Green Button",color:"green"}),r.jsx(B,{text:"Teal Button",color:"teal"}),r.jsx(B,{text:"Blue Button",color:"blue"}),r.jsx(B,{text:"Indigo Button",color:"indigo"}),r.jsx(B,{text:"Violet Button",color:"violet"}),r.jsx(B,{text:"Purple Button",color:"purple"}),r.jsx(B,{text:"Pink Button",color:"pink"}),r.jsx(B,{text:"Maroon Button",color:"maroon"})]}),HL=`import React from 'react'
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
`,e4=()=>r.jsx(k,{code:"color",Component:VL,Source:HL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),ZL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Dark Red Button",color:"red",dark:!0})]}),KL=`import React from 'react'
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
`,t4=()=>r.jsx(k,{code:"dark",Component:ZL,Source:KL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),YL=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),GL=()=>r.jsx(B,{text:"Disabled Button",disabled:!0}),qL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,n4=()=>r.jsx(k,{code:"disabled",Component:GL,Source:qL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),QL=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),XL=()=>r.jsx(B,{color:"green",icon:"bars"}),JL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,r4=()=>r.jsx(k,{code:"icon",Component:XL,Source:JL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),eB=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),tB=()=>r.jsx(B,{color:"green",text:"Back",iconLeft:"angle-left"}),nB=`import React from 'react'
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
`,o4=()=>r.jsx(k,{code:"iconLeft",Component:tB,Source:nB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),rB=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),oB=()=>r.jsx(B,{color:"green",text:"Next",iconRight:"angle-right"}),sB=`import React from 'react'
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
`,s4=()=>r.jsx(k,{code:"iconRight",Component:oB,Source:sB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),aB=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),lB=()=>r.jsx(B,{text:"I am labelled!",label:"This is a label"}),iB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,a4=()=>r.jsx(k,{code:"label",Component:lB,Source:iB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),cB=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),dB=()=>r.jsx(B,{text:"Click Me!",onClick:()=>window.alert("Click!")}),uB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,l4=()=>r.jsx(k,{code:"onClick",Component:dB,Source:uB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),pB=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),hB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Outline",color:"red",outline:!0}),r.jsx(B,{text:"Green Outline",color:"green",outline:!0}),r.jsx(B,{text:"Blue Outline",color:"blue",outline:!0})]}),mB=`import React from 'react'
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
`,i4=()=>r.jsx(k,{code:"outline",Component:hB,Source:mB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),fB=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),xB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Radius 0",color:"olive",radius:0}),r.jsx(B,{text:"Radius 2",color:"green",radius:2}),r.jsx(B,{text:"Radius 4",color:"teal",radius:3}),r.jsx(B,{text:"Radius 6",color:"blue",radius:4})]}),gB=`import React from 'react'
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
`,c4=()=>r.jsx(k,{code:"radius",Component:xB,Source:gB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),vB=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),bB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(B,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(B,{text:"Blue Shaded",color:"blue",shaded:!0})]}),jB=`import React from 'react'
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
`,d4=()=>r.jsx(k,{code:"shaded",Component:bB,Source:jB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),yB=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),SB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(B,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(B,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(B,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(B,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),CB=`import React from 'react'
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
`,u4=()=>r.jsx(k,{code:"shadow",Component:SB,Source:CB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),wB=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),_B=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Smallest",size:"smallest"}),r.jsx(B,{text:"Smaller",size:"smaller"}),r.jsx(B,{text:"Small",size:"small"}),r.jsx(B,{text:"Medium",size:"medium"}),r.jsx(B,{text:"Large",size:"large"}),r.jsx(B,{text:"Larger",size:"larger"}),r.jsx(B,{text:"Largest",size:"largest"}),r.jsx(B,{text:"x3",size:"x3"}),r.jsx(B,{text:"x5",size:"x5"}),r.jsx(B,{text:"x7",size:"x7"})]}),TB=`import React from 'react'
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
`,p4=()=>r.jsx(k,{code:"size",Component:_B,Source:TB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),kB=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),EB=()=>r.jsx(B,{text:"Grey Button"}),NB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,h4=()=>r.jsx(k,{code:"text",Component:EB,Source:NB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),RB=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),OB=()=>r.jsx(B,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),DB=`import React from 'react'
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
`,m4=()=>r.jsx(k,{code:"tooltip",Component:OB,Source:DB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),LB=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),BB=()=>r.jsx(B,{text:"Grey Button",type:"submit"}),$B=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,f4=()=>r.jsxs(k,{code:"type",Component:BB,Source:$B,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),AB=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),MB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(Y0,{}),r.jsxs(Fe,{tocName:"button",children:[r.jsx(oe,{title:"Properties"}),r.jsx(h4,{}),r.jsx(l4,{}),r.jsx(n4,{}),r.jsx(e4,{}),r.jsx(X0,{}),r.jsx(t4,{}),r.jsx(d4,{}),r.jsx(i4,{}),r.jsx(q0,{}),r.jsx(J0,{}),r.jsx(Q0,{}),r.jsx(c4,{}),r.jsx(u4,{}),r.jsx(p4,{}),r.jsx(r4,{}),r.jsx(o4,{}),r.jsx(s4,{}),r.jsx(a4,{}),r.jsx(m4,{}),r.jsx(f4,{}),r.jsx(oe,{title:"Components"}),r.jsx(G0,{})]})]}),PB=Object.freeze(Object.defineProperty({__proto__:null,default:MB},Symbol.toStringTag,{value:"Module"})),IB=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),zB=()=>r.jsx(sr,{buttons:[{text:"One"},{text:"Two"}],Button:IB}),FB=`import { Buttons } from '@/src/index.jsx'

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
`,x4=()=>r.jsx(k,{code:"Button",Component:zB,Source:FB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),UB=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),VB=()=>r.jsxs(sr,{children:[r.jsx(B,{text:"One",outline:!0}),r.jsx(B,{text:"Two",outline:!0})]}),HB=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,g4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(te,{Component:VB,code:HB,expand:!0})]}),WB=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),ZB=()=>r.jsx(r.Fragment,{children:r.jsx(sr,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),KB=`import React from 'react'
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
`,v4=()=>r.jsx(k,{code:"buttonClass",Component:ZB,Source:KB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),YB=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),GB=()=>r.jsx(r.Fragment,{children:r.jsx(sr,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),qB=`import React from 'react'
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
`,b4=()=>r.jsx(k,{code:"buttons",Component:GB,Source:qB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),QB=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),XB=()=>r.jsx(r.Fragment,{children:r.jsx(sr,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),JB=`import React from 'react'
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
`,j4=()=>r.jsx(k,{code:"className",Component:XB,Source:JB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),e$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),t$=()=>r.jsx(r.Fragment,{children:r.jsx(sr,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),n$=`import React from 'react'
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
`,y4=()=>r.jsx(k,{code:"outline",Component:t$,Source:n$,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx("code",{children:"Button"})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),r$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),o$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(g4,{}),r.jsxs(Fe,{tocName:"buttons",children:[r.jsx(oe,{title:"Properties"}),r.jsx(b4,{}),r.jsx(y4,{}),r.jsx(j4,{}),r.jsx(v4,{}),r.jsx(oe,{title:"Components"}),r.jsx(x4,{})]})]}),s$=Object.freeze(Object.defineProperty({__proto__:null,default:o$},Symbol.toStringTag,{value:"Module"})),a$=()=>r.jsx(Kw,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),l$=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,S4=()=>r.jsx(k,{code:"CheckboxState",Component:a$,Source:l$,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),i$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),c$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",checked:e,onChange:t})},d$=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,C4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(te,{Component:c$,code:d$,expand:!0})]}),u$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),p$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{border:!0,text:"I like badgers",checked:e,onChange:t})},h$=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,w4=()=>r.jsx(k,{code:"border",Component:p$,Source:h$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),m$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),f$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",checked:e,onChange:t})},x$=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,_4=()=>r.jsx(k,{code:"checked",Component:f$,Source:x$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),g$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),v$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},b$=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,T4=()=>r.jsx(k,{code:"checkedText / uncheckedText",Component:v$,Source:b$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),j$=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),y$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",className:"large border",checked:e,onChange:t})},S$=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,k4=()=>r.jsx(k,{code:"className",Component:y$,Source:S$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),C$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),w$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},_$=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,E4=()=>r.jsx(k,{code:"disabled",Component:w$,Source:_$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),T$=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),k$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",checked:e,onChange:t})},E$=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,N4=()=>r.jsx(k,{code:"onChange",Component:k$,Source:E$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),N$=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),R$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"Badger are the best!",checked:e,onChange:t})},O$=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,R4=()=>r.jsx(k,{code:"text",Component:R$,Source:O$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),D$=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),L$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(C4,{}),r.jsxs(Fe,{tocName:"checkbox",children:[r.jsx(oe,{title:"Properties"}),r.jsx(R4,{}),r.jsx(_4,{}),r.jsx(T4,{}),r.jsx(N4,{}),r.jsx(k4,{}),r.jsx(w4,{}),r.jsx(E4,{}),r.jsx(oe,{title:"Components"}),r.jsx(S4,{})]})]}),B$=Object.freeze(Object.defineProperty({__proto__:null,default:L$},Symbol.toStringTag,{value:"Module"})),$$=()=>r.jsx(r.Fragment,{children:r.jsx(An,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),A$=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,O4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(te,{Component:$$,code:A$,expand:!0})]}),M$=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),P$=()=>r.jsx(An,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),I$=`import React from 'react'
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

export default CancelExample`,D4=()=>r.jsx(k,{code:"cancel",Component:P$,Source:I$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),z$=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),F$=()=>r.jsx(An,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),U$=`import React from 'react'
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

export default CancelExample`,L4=()=>r.jsx(k,{id:"cancelProps",code:"cancelXXX",Component:F$,Source:U$,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),V$=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),H$=()=>r.jsx(r.Fragment,{children:r.jsx(An,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),W$=`import React from 'react'
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
`,B4=()=>r.jsx(k,{code:"className",Component:H$,Source:W$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),Z$=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),K$=()=>r.jsx(An,{text:"Click to Delete",color:"red"}),Y$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,$4=()=>r.jsx(k,{code:"color",Component:K$,Source:Y$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),G$=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),q$=()=>r.jsx(An,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),Q$=`import React from 'react'
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

export default ConfirmExample`,A4=()=>r.jsx(k,{code:"confirm",Component:q$,Source:Q$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),X$=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),J$=()=>r.jsx(An,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),eA=`import React from 'react'
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

export default ConfirmProps`,M4=()=>r.jsx(k,{id:"confirmProps",code:"confirmXXX",Component:J$,Source:eA,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),tA=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),nA=()=>r.jsx(An,{text:"Click to Delete",color:"red",iconRight:"trash"}),rA=`import React from 'react'
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
`,P4=()=>r.jsx(k,{code:"iconRight",Component:nA,Source:rA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),oA=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),sA=()=>r.jsx(An,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),aA=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,I4=()=>r.jsx(k,{code:"onClick",Component:sA,Source:aA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),lA=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),iA=()=>r.jsx(An,{text:"Click to Delete"}),cA=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,z4=()=>r.jsx(k,{code:"text",Component:iA,Source:cA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),dA=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),uA=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(O4,{}),r.jsxs(Fe,{tocName:"confirm",children:[r.jsx(oe,{title:"Properties"}),r.jsx(z4,{}),r.jsx($4,{}),r.jsx(P4,{}),r.jsx(B4,{}),r.jsx(D4,{}),r.jsx(L4,{}),r.jsx(A4,{}),r.jsx(M4,{}),r.jsx(oe,{title:"Event Handlers"}),r.jsx(I4,{})]})]}),pA=Object.freeze(Object.defineProperty({__proto__:null,default:uA},Symbol.toStringTag,{value:"Module"})),on=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],hA=()=>r.jsx($t,{rows:on,columns:"id name animal role"}),mA=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () =>
  <Datatable
    rows={animals}
    columns="id name animal role"
  />

export default DatatableExample`,F4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),r.jsx(te,{Component:hA,code:mA})]}),fA=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),xA=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),gA=`import React from 'react'
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

export default DatatableExample`,U4=()=>r.jsx(k,{code:"color",Component:xA,Source:gA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),vA=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),bA=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),jA=`import React from 'react'
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

export default DatatableExample`,yA=()=>r.jsxs(k,{code:"type",Component:bA,Source:jA,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),SA=Object.freeze(Object.defineProperty({__proto__:null,default:yA},Symbol.toStringTag,{value:"Module"})),CA=()=>r.jsx($t,{rows:on,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),wA=`import React from 'react'
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

export default DatatableExample`,V4=()=>r.jsx(k,{code:"display",Component:CA,Source:wA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),_A=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),TA=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),kA=`import React from 'react'
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
`,EA=()=>r.jsx($t,{color:"brand",rows:on,columns:["id","name","animal","role"]}),NA=`import React from 'react'
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
`,RA=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),OA=`import React from 'react'
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
`,DA=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),LA=`import React from 'react'
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
`,BA=()=>r.jsx($t,{color:"brand",rows:on,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),$A=`import React from 'react'
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
`,H4=()=>r.jsxs(z,{code:"columns",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),r.jsx(te,{Component:TA,code:kA,caption:"columns",expand:!1,undent:2}),r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),r.jsx(te,{Component:EA,code:NA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),r.jsx(te,{Component:RA,code:OA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),r.jsx(te,{Component:DA,code:LA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]}),r.jsx(te,{Component:BA,code:$A,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),AA=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),MA=()=>r.jsx($t,{rows:on,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),PA=`import React from 'react'
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

export default DatatableExample`,W4=()=>r.jsx(k,{code:"label",Component:MA,Source:PA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),IA=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),zA=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),FA=`import React from 'react'
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

export default DatatableExample`,Z4=()=>r.jsxs(k,{code:"type",Component:zA,Source:FA,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),UA=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),VA=()=>r.jsx($t,{rows:on,columns:"id name animal role",onRowClick:e=>window.alert(`Animal #${e.id}: ${e.name}`)}),HA=`import React from 'react'
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

export default DatatableExample`,K4=()=>r.jsx(k,{code:"onRowClick",Component:VA,Source:HA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onRowClick"})," property can be used to define a handler which will be called when the user clicks on a row.  When set the table will have the ",r.jsx("code",{children:"selectable"})," CSS class added to highlight the hovered row."]})}),WA=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),ZA=()=>r.jsx($t,{rows:on,columns:"id name animal role",pager:{size:"small",color:"blue"}}),KA=`import React from 'react'
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

export default DatatableExample`;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},He.apply(this,arguments)}var We;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(We||(We={}));const y1="popstate";function YA(e){e===void 0&&(e={});function t(o,s){let{pathname:a,search:l,hash:i}=o.location;return Xa("",{pathname:a,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){return typeof s=="string"?s:fo(s)}return qA(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function GA(){return Math.random().toString(36).substr(2,8)}function S1(e,t){return{usr:e.state,key:e.key,idx:t}}function Xa(e,t,n,o){return n===void 0&&(n=null),He({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?lr(t):t,{state:n,key:t&&t.key||o||GA()})}function fo(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function lr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function qA(e,t,n,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:a=!1}=o,l=s.history,i=We.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(He({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=We.Pop;let _=u(),g=_==null?null:_-d;d=_,c&&c({action:i,location:j.location,delta:g})}function f(_,g){i=We.Push;let h=Xa(j.location,_,g);n&&n(h,_),d=u()+1;let m=S1(h,d),y=j.createHref(h);try{l.pushState(m,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(y)}a&&c&&c({action:i,location:j.location,delta:1})}function b(_,g){i=We.Replace;let h=Xa(j.location,_,g);n&&n(h,_),d=u();let m=S1(h,d),y=j.createHref(h);l.replaceState(m,"",y),a&&c&&c({action:i,location:j.location,delta:0})}function S(_){let g=s.location.origin!=="null"?s.location.origin:s.location.href,h=typeof _=="string"?_:fo(_);return he(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let j={get action(){return i},get location(){return e(s,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(y1,p),c=_,()=>{s.removeEventListener(y1,p),c=null}},createHref(_){return t(s,_)},createURL:S,encodeLocation(_){let g=S(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:b,go(_){return l.go(_)}};return j}var Ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ue||(Ue={}));const QA=new Set(["lazy","caseSensitive","path","id","index","children"]);function XA(e){return e.index===!0}function tp(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((s,a)=>{let l=[...n,a],i=typeof s.id=="string"?s.id:l.join("-");if(he(s.index!==!0||!s.children,"Cannot specify children on an index route"),he(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),XA(s)){let c=He({},s,t(s),{id:i});return o[i]=c,c}else{let c=He({},s,t(s),{id:i,children:void 0});return o[i]=c,s.children&&(c.children=tp(s.children,t,l,o)),c}})}function es(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?lr(t):t,s=Br(o.pathname||"/",n);if(s==null)return null;let a=Y4(e);eM(a);let l=null;for(let i=0;l==null&&i<a.length;++i)l=cM(a[i],uM(s));return l}function JA(e,t){let{route:n,pathname:o,params:s}=e;return{id:n.id,pathname:o,params:s,data:t[n.id],handle:n.handle}}function Y4(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let s=(a,l,i)=>{let c={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Kn([o,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(he(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Y4(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:lM(d,a.index),routesMeta:u})};return e.forEach((a,l)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,l);else for(let c of G4(a.path))s(a,l,c)}),t}function G4(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return s?[a,""]:[a];let l=G4(o.join("/")),i=[];return i.push(...l.map(c=>c===""?a:[a,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function eM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iM(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const tM=/^:\w+$/,nM=3,rM=2,oM=1,sM=10,aM=-2,C1=e=>e==="*";function lM(e,t){let n=e.split("/"),o=n.length;return n.some(C1)&&(o+=aM),t&&(o+=rM),n.filter(s=>!C1(s)).reduce((s,a)=>s+(tM.test(a)?nM:a===""?oM:sM),o)}function iM(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function cM(e,t){let{routesMeta:n}=e,o={},s="/",a=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=s==="/"?t:t.slice(s.length)||"/",u=np({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;a.push({params:o,pathname:Kn([s,u.pathname]),pathnameBase:fM(Kn([s,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(s=Kn([s,u.pathnameBase]))}return a}function np(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=dM(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:f,isOptional:b}=u;if(f==="*"){let j=i[p]||"";l=a.slice(0,a.length-j.length).replace(/(.)\/+$/,"$1")}const S=i[p];return b&&!S?d[f]=void 0:d[f]=pM(S||"",f),d},{}),pathname:a,pathnameBase:l,pattern:e}}function dM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function uM(e){try{return decodeURI(e)}catch(t){return mo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pM(e,t){try{return decodeURIComponent(e)}catch(n){return mo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Br(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function hM(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:s=""}=typeof e=="string"?lr(e):e;return{pathname:n?n.startsWith("/")?n:mM(n,t):t,search:xM(o),hash:gM(s)}}function mM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Fd(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xh(e,t){let n=q4(e);return t?n.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Jh(e,t,n,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=lr(e):(s=He({},e),he(!s.pathname||!s.pathname.includes("?"),Fd("?","pathname","search",s)),he(!s.pathname||!s.pathname.includes("#"),Fd("#","pathname","hash",s)),he(!s.search||!s.search.includes("#"),Fd("#","search","hash",s)));let a=e===""||s.pathname==="",l=a?"/":s.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}i=p>=0?t[p]:"/"}let c=hM(s,i),d=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),fM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class em{constructor(t,n,o,s){s===void 0&&(s=!1),this.status=t,this.statusText=n||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function Q4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const X4=["post","put","patch","delete"],vM=new Set(X4),bM=["get",...X4],jM=new Set(bM),yM=new Set([301,302,303,307,308]),SM=new Set([307,308]),Ud={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},CM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Gs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},J4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),ev="remix-router-transitions";function _M(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let T=e.detectErrorBoundary;s=R=>({hasErrorBoundary:T(R)})}else s=wM;let a={},l=tp(e.routes,s,void 0,a),i,c=e.basename||"/",d=He({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,f=null,b=null,S=null,j=e.hydrationData!=null,_=es(l,e.history.location,c),g=null;if(_==null){let T=Zt(404,{pathname:e.history.location.pathname}),{matches:R,route:O}=O1(l);_=R,g={[O.id]:T}}let h,m=_.some(T=>T.route.lazy),y=_.some(T=>T.route.loader);if(m)h=!1;else if(!y)h=!0;else if(d.v7_partialHydration){let T=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;h=_.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(T&&T[O.route.id]!==void 0||R&&R[O.route.id]!==void 0))}else h=e.hydrationData!=null;let C,x={historyAction:e.history.action,location:e.history.location,matches:_,initialized:h,navigation:Ud,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},w=We.Pop,E=!1,N,D=!1,$=new Map,Y=null,Q=!1,U=!1,ae=[],de=[],W=new Map,L=0,P=-1,I=new Map,H=new Set,K=new Map,_e=new Map,ue=new Set,Ce=new Map,ce=new Map,De=!1;function ct(){if(u=e.history.listen(T=>{let{action:R,location:O,delta:M}=T;if(De){De=!1;return}mo(ce.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Dl({currentLocation:x.location,nextLocation:O,historyAction:R});if(F&&M!=null){De=!0,e.history.go(M*-1),Gr(F,{state:"blocked",location:O,proceed(){Gr(F,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(M)},reset(){let se=new Map(x.blockers);se.set(F,Gs),Le({blockers:se})}});return}return Tt(R,O)}),n){AM(t,$);let T=()=>MM(t,$);t.addEventListener("pagehide",T),Y=()=>t.removeEventListener("pagehide",T)}return x.initialized||Tt(We.Pop,x.location,{initialHydration:!0}),C}function _t(){u&&u(),Y&&Y(),p.clear(),N&&N.abort(),x.fetchers.forEach((T,R)=>ln(R)),x.blockers.forEach((T,R)=>Ol(R))}function ge(T){return p.add(T),()=>p.delete(T)}function Le(T,R){R===void 0&&(R={}),x=He({},x,T);let O=[],M=[];d.v7_fetcherPersist&&x.fetchers.forEach((F,se)=>{F.state==="idle"&&(ue.has(se)?M.push(se):O.push(se))}),[...p].forEach(F=>F(x,{deletedFetchers:M,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),d.v7_fetcherPersist&&(O.forEach(F=>x.fetchers.delete(F)),M.forEach(F=>ln(F)))}function et(T,R,O){var M,F;let{flushSync:se}=O===void 0?{}:O,q=x.actionData!=null&&x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((M=T.state)==null?void 0:M._isRedirect)!==!0,J;R.actionData?Object.keys(R.actionData).length>0?J=R.actionData:J=null:q?J=x.actionData:J=null;let G=R.loaderData?R1(x.loaderData,R.loaderData,R.matches||[],R.errors):x.loaderData,pe=x.blockers;pe.size>0&&(pe=new Map(pe),pe.forEach((Se,Me)=>pe.set(Me,Gs)));let Ae=E===!0||x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&((F=T.state)==null?void 0:F._isRedirect)!==!0;i&&(l=i,i=void 0),Q||w===We.Pop||(w===We.Push?e.history.push(T,T.state):w===We.Replace&&e.history.replace(T,T.state));let ie;if(w===We.Pop){let Se=$.get(x.location.pathname);Se&&Se.has(T.pathname)?ie={currentLocation:x.location,nextLocation:T}:$.has(T.pathname)&&(ie={currentLocation:T,nextLocation:x.location})}else if(D){let Se=$.get(x.location.pathname);Se?Se.add(T.pathname):(Se=new Set([T.pathname]),$.set(x.location.pathname,Se)),ie={currentLocation:x.location,nextLocation:T}}Le(He({},R,{actionData:J,loaderData:G,historyAction:w,location:T,initialized:!0,navigation:Ud,revalidation:"idle",restoreScrollPosition:Ke(T,R.matches||x.matches),preventScrollReset:Ae,blockers:pe}),{viewTransitionOpts:ie,flushSync:se===!0}),w=We.Pop,E=!1,D=!1,Q=!1,U=!1,ae=[],de=[]}async function At(T,R){if(typeof T=="number"){e.history.go(T);return}let O=rp(x.location,x.matches,c,d.v7_prependBasename,T,d.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:M,submission:F,error:se}=w1(d.v7_normalizeFormMethod,!1,O,R),q=x.location,J=Xa(x.location,M,R&&R.state);J=He({},J,e.history.encodeLocation(J));let G=R&&R.replace!=null?R.replace:void 0,pe=We.Push;G===!0?pe=We.Replace:G===!1||F!=null&&hn(F.formMethod)&&F.formAction===x.location.pathname+x.location.search&&(pe=We.Replace);let Ae=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,ie=(R&&R.unstable_flushSync)===!0,Se=Dl({currentLocation:q,nextLocation:J,historyAction:pe});if(Se){Gr(Se,{state:"blocked",location:J,proceed(){Gr(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),At(T,R)},reset(){let Me=new Map(x.blockers);Me.set(Se,Gs),Le({blockers:Me})}});return}return await Tt(pe,J,{submission:F,pendingError:se,preventScrollReset:Ae,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:ie})}function sn(){if(ko(),Le({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Tt(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Tt(w||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Tt(T,R,O){N&&N.abort(),N=null,w=T,Q=(O&&O.startUninterruptedRevalidation)===!0,Xc(x.location,x.matches),E=(O&&O.preventScrollReset)===!0,D=(O&&O.enableViewTransition)===!0;let M=i||l,F=O&&O.overrideNavigation,se=es(M,R,c),q=(O&&O.flushSync)===!0;if(!se){let Me=Zt(404,{pathname:R.pathname}),{matches:dt,route:tt}=O1(M);Eo(),et(R,{matches:dt,loaderData:{},errors:{[tt.id]:Me}},{flushSync:q});return}if(x.initialized&&!U&&RM(x.location,R)&&!(O&&O.submission&&hn(O.submission.formMethod))){et(R,{matches:se},{flushSync:q});return}N=new AbortController;let J=Qs(e.history,R,N.signal,O&&O.submission),G,pe;if(O&&O.pendingError)pe={[ka(se).route.id]:O.pendingError};else if(O&&O.submission&&hn(O.submission.formMethod)){let Me=await ir(J,R,O.submission,se,{replace:O.replace,flushSync:q});if(Me.shortCircuited)return;G=Me.pendingActionData,pe=Me.pendingActionError,F=Vd(R,O.submission),q=!1,J=new Request(J.url,{signal:J.signal})}let{shortCircuited:Ae,loaderData:ie,errors:Se}=await El(J,R,se,F,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,q,G,pe);Ae||(N=null,et(R,He({matches:se},G?{actionData:G}:{},{loaderData:ie,errors:Se})))}async function ir(T,R,O,M,F){F===void 0&&(F={}),ko();let se=BM(R,O);Le({navigation:se},{flushSync:F.flushSync===!0});let q,J=sp(M,R);if(!J.route.action&&!J.route.lazy)q={type:Ue.error,error:Zt(405,{method:T.method,pathname:R.pathname,routeId:J.route.id})};else if(q=await qs("action",T,J,M,a,s,c,d.v7_relativeSplatPath),T.signal.aborted)return{shortCircuited:!0};if(so(q)){let G;return F&&F.replace!=null?G=F.replace:G=q.location===x.location.pathname+x.location.search,await yn(x,q,{submission:O,replace:G}),{shortCircuited:!0}}if(ts(q)){let G=ka(M,J.route.id);return(F&&F.replace)!==!0&&(w=We.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:q.error}}}if(oo(q))throw Zt(400,{type:"defer-action"});return{pendingActionData:{[J.route.id]:q.data}}}async function El(T,R,O,M,F,se,q,J,G,pe,Ae){let ie=M||Vd(R,F),Se=F||se||B1(ie),Me=i||l,[dt,tt]=_1(e.history,x,O,Se,R,d.v7_partialHydration&&J===!0,U,ae,de,ue,K,H,Me,c,pe,Ae);if(Eo(Te=>!(O&&O.some(Be=>Be.route.id===Te))||dt&&dt.some(Be=>Be.route.id===Te)),P=++L,dt.length===0&&tt.length===0){let Te=cn();return et(R,He({matches:O,loaderData:{},errors:Ae||null},pe?{actionData:pe}:{},Te?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(!Q&&(!d.v7_partialHydration||!J)){tt.forEach(Be=>{let Sn=x.fetchers.get(Be.key),$l=Xs(void 0,Sn?Sn.data:void 0);x.fetchers.set(Be.key,$l)});let Te=pe||x.actionData;Le(He({navigation:ie},Te?Object.keys(Te).length===0?{actionData:null}:{actionData:Te}:{},tt.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G})}tt.forEach(Te=>{W.has(Te.key)&&kt(Te.key),Te.controller&&W.set(Te.key,Te.controller)});let No=()=>tt.forEach(Te=>kt(Te.key));N&&N.signal.addEventListener("abort",No);let{results:Jc,loaderResults:Ro,fetcherResults:dr}=await Kr(x.matches,O,dt,tt,T);if(T.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",No),tt.forEach(Te=>W.delete(Te.key));let qr=D1(Jc);if(qr){if(qr.idx>=dt.length){let Te=tt[qr.idx-dt.length].key;H.add(Te)}return await yn(x,qr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:ed,errors:td}=N1(x,O,dt,Ro,Ae,tt,dr,Ce);Ce.forEach((Te,Be)=>{Te.subscribe(Sn=>{(Sn||Te.done)&&Ce.delete(Be)})});let nd=cn(),Oo=Ps(P),Bl=nd||Oo||tt.length>0;return He({loaderData:ed,errors:td},Bl?{fetchers:new Map(x.fetchers)}:{})}function Nl(T,R,O,M){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");W.has(T)&&kt(T);let F=(M&&M.unstable_flushSync)===!0,se=i||l,q=rp(x.location,x.matches,c,d.v7_prependBasename,O,d.v7_relativeSplatPath,R,M==null?void 0:M.relative),J=es(se,q,c);if(!J){Yr(T,R,Zt(404,{pathname:q}),{flushSync:F});return}let{path:G,submission:pe,error:Ae}=w1(d.v7_normalizeFormMethod,!0,q,M);if(Ae){Yr(T,R,Ae,{flushSync:F});return}let ie=sp(J,G);if(E=(M&&M.preventScrollReset)===!0,pe&&hn(pe.formMethod)){As(T,R,G,ie,J,F,pe);return}K.set(T,{routeId:R,path:G}),jn(T,R,G,ie,J,F,pe)}async function As(T,R,O,M,F,se,q){if(ko(),K.delete(T),!M.route.action&&!M.route.lazy){let Be=Zt(405,{method:q.formMethod,pathname:O,routeId:R});Yr(T,R,Be,{flushSync:se});return}let J=x.fetchers.get(T);an(T,$M(q,J),{flushSync:se});let G=new AbortController,pe=Qs(e.history,O,G.signal,q);W.set(T,G);let Ae=L,ie=await qs("action",pe,M,F,a,s,c,d.v7_relativeSplatPath);if(pe.signal.aborted){W.get(T)===G&&W.delete(T);return}if(d.v7_fetcherPersist&&ue.has(T)){if(so(ie)||ts(ie)){an(T,hr(void 0));return}}else{if(so(ie))if(W.delete(T),P>Ae){an(T,hr(void 0));return}else return H.add(T),an(T,Xs(q)),yn(x,ie,{fetcherSubmission:q});if(ts(ie)){Yr(T,R,ie.error);return}}if(oo(ie))throw Zt(400,{type:"defer-action"});let Se=x.navigation.location||x.location,Me=Qs(e.history,Se,G.signal),dt=i||l,tt=x.navigation.state!=="idle"?es(dt,x.navigation.location,c):x.matches;he(tt,"Didn't find any matches after fetcher action");let No=++L;I.set(T,No);let Jc=Xs(q,ie.data);x.fetchers.set(T,Jc);let[Ro,dr]=_1(e.history,x,tt,q,Se,!1,U,ae,de,ue,K,H,dt,c,{[M.route.id]:ie.data},void 0);dr.filter(Be=>Be.key!==T).forEach(Be=>{let Sn=Be.key,$l=x.fetchers.get(Sn),D6=Xs(void 0,$l?$l.data:void 0);x.fetchers.set(Sn,D6),W.has(Sn)&&kt(Sn),Be.controller&&W.set(Sn,Be.controller)}),Le({fetchers:new Map(x.fetchers)});let qr=()=>dr.forEach(Be=>kt(Be.key));G.signal.addEventListener("abort",qr);let{results:ed,loaderResults:td,fetcherResults:nd}=await Kr(x.matches,tt,Ro,dr,Me);if(G.signal.aborted)return;G.signal.removeEventListener("abort",qr),I.delete(T),W.delete(T),dr.forEach(Be=>W.delete(Be.key));let Oo=D1(ed);if(Oo){if(Oo.idx>=Ro.length){let Be=dr[Oo.idx-Ro.length].key;H.add(Be)}return yn(x,Oo.result)}let{loaderData:Bl,errors:Te}=N1(x,x.matches,Ro,td,void 0,dr,nd,Ce);if(x.fetchers.has(T)){let Be=hr(ie.data);x.fetchers.set(T,Be)}Ps(No),x.navigation.state==="loading"&&No>P?(he(w,"Expected pending action"),N&&N.abort(),et(x.navigation.location,{matches:tt,loaderData:Bl,errors:Te,fetchers:new Map(x.fetchers)})):(Le({errors:Te,loaderData:R1(x.loaderData,Bl,tt,Te),fetchers:new Map(x.fetchers)}),U=!1)}async function jn(T,R,O,M,F,se,q){let J=x.fetchers.get(T);an(T,Xs(q,J?J.data:void 0),{flushSync:se});let G=new AbortController,pe=Qs(e.history,O,G.signal);W.set(T,G);let Ae=L,ie=await qs("loader",pe,M,F,a,s,c,d.v7_relativeSplatPath);if(oo(ie)&&(ie=await rv(ie,pe.signal,!0)||ie),W.get(T)===G&&W.delete(T),!pe.signal.aborted){if(ue.has(T)){an(T,hr(void 0));return}if(so(ie))if(P>Ae){an(T,hr(void 0));return}else{H.add(T),await yn(x,ie);return}if(ts(ie)){Yr(T,R,ie.error);return}he(!oo(ie),"Unhandled fetcher deferred data"),an(T,hr(ie.data))}}async function yn(T,R,O){let{submission:M,fetcherSubmission:F,replace:se}=O===void 0?{}:O;R.revalidate&&(U=!0);let q=Xa(T.location,R.location,{_isRedirect:!0});if(he(q,"Expected a location on the redirect navigation"),n){let Se=!1;if(R.reloadDocument)Se=!0;else if(J4.test(R.location)){const Me=e.history.createURL(R.location);Se=Me.origin!==t.location.origin||Br(Me.pathname,c)==null}if(Se){se?t.location.replace(R.location):t.location.assign(R.location);return}}N=null;let J=se===!0?We.Replace:We.Push,{formMethod:G,formAction:pe,formEncType:Ae}=T.navigation;!M&&!F&&G&&pe&&Ae&&(M=B1(T.navigation));let ie=M||F;if(SM.has(R.status)&&ie&&hn(ie.formMethod))await Tt(J,q,{submission:He({},ie,{formAction:R.location}),preventScrollReset:E});else{let Se=Vd(q,M);await Tt(J,q,{overrideNavigation:Se,fetcherSubmission:F,preventScrollReset:E})}}async function Kr(T,R,O,M,F){let se=await Promise.all([...O.map(G=>qs("loader",F,G,R,a,s,c,d.v7_relativeSplatPath)),...M.map(G=>G.matches&&G.match&&G.controller?qs("loader",Qs(e.history,G.path,G.controller.signal),G.match,G.matches,a,s,c,d.v7_relativeSplatPath):{type:Ue.error,error:Zt(404,{pathname:G.path})})]),q=se.slice(0,O.length),J=se.slice(O.length);return await Promise.all([L1(T,O,q,q.map(()=>F.signal),!1,x.loaderData),L1(T,M.map(G=>G.match),J,M.map(G=>G.controller?G.controller.signal:null),!0)]),{results:se,loaderResults:q,fetcherResults:J}}function ko(){U=!0,ae.push(...Eo()),K.forEach((T,R)=>{W.has(R)&&(de.push(R),kt(R))})}function an(T,R,O){O===void 0&&(O={}),x.fetchers.set(T,R),Le({fetchers:new Map(x.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Yr(T,R,O,M){M===void 0&&(M={});let F=ka(x.matches,R);ln(T),Le({errors:{[F.route.id]:O},fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Rl(T){return d.v7_fetcherPersist&&(_e.set(T,(_e.get(T)||0)+1),ue.has(T)&&ue.delete(T)),x.fetchers.get(T)||CM}function ln(T){let R=x.fetchers.get(T);W.has(T)&&!(R&&R.state==="loading"&&I.has(T))&&kt(T),K.delete(T),I.delete(T),H.delete(T),ue.delete(T),x.fetchers.delete(T)}function cr(T){if(d.v7_fetcherPersist){let R=(_e.get(T)||0)-1;R<=0?(_e.delete(T),ue.add(T)):_e.set(T,R)}else ln(T);Le({fetchers:new Map(x.fetchers)})}function kt(T){let R=W.get(T);he(R,"Expected fetch controller: "+T),R.abort(),W.delete(T)}function Ms(T){for(let R of T){let O=Rl(R),M=hr(O.data);x.fetchers.set(R,M)}}function cn(){let T=[],R=!1;for(let O of H){let M=x.fetchers.get(O);he(M,"Expected fetcher: "+O),M.state==="loading"&&(H.delete(O),T.push(O),R=!0)}return Ms(T),R}function Ps(T){let R=[];for(let[O,M]of I)if(M<T){let F=x.fetchers.get(O);he(F,"Expected fetcher: "+O),F.state==="loading"&&(kt(O),I.delete(O),R.push(O))}return Ms(R),R.length>0}function qc(T,R){let O=x.blockers.get(T)||Gs;return ce.get(T)!==R&&ce.set(T,R),O}function Ol(T){x.blockers.delete(T),ce.delete(T)}function Gr(T,R){let O=x.blockers.get(T)||Gs;he(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state);let M=new Map(x.blockers);M.set(T,R),Le({blockers:M})}function Dl(T){let{currentLocation:R,nextLocation:O,historyAction:M}=T;if(ce.size===0)return;ce.size>1&&mo(!1,"A router only supports one blocker at a time");let F=Array.from(ce.entries()),[se,q]=F[F.length-1],J=x.blockers.get(se);if(!(J&&J.state==="proceeding")&&q({currentLocation:R,nextLocation:O,historyAction:M}))return se}function Eo(T){let R=[];return Ce.forEach((O,M)=>{(!T||T(M))&&(O.cancel(),R.push(M),Ce.delete(M))}),R}function Qc(T,R,O){if(f=T,S=R,b=O||null,!j&&x.navigation===Ud){j=!0;let M=Ke(x.location,x.matches);M!=null&&Le({restoreScrollPosition:M})}return()=>{f=null,S=null,b=null}}function Ll(T,R){return b&&b(T,R.map(M=>JA(M,x.loaderData)))||T.key}function Xc(T,R){if(f&&S){let O=Ll(T,R);f[O]=S()}}function Ke(T,R){if(f){let O=Ll(T,R),M=f[O];if(typeof M=="number")return M}return null}function gt(T){a={},i=tp(T,s,void 0,a)}return C={get basename(){return c},get future(){return d},get state(){return x},get routes(){return l},get window(){return t},initialize:ct,subscribe:ge,enableScrollRestoration:Qc,navigate:At,fetch:Nl,revalidate:sn,createHref:T=>e.history.createHref(T),encodeLocation:T=>e.history.encodeLocation(T),getFetcher:Rl,deleteFetcher:cr,dispose:_t,getBlocker:qc,deleteBlocker:Ol,_internalFetchControllers:W,_internalActiveDeferreds:Ce,_internalSetRoutes:gt},C}function TM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function rp(e,t,n,o,s,a,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=Jh(s||".",Xh(c,a),Br(e.pathname,n)||e.pathname,i==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&d&&d.route.index&&!tm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Kn([n,u.pathname])),fo(u)}function w1(e,t,n,o){if(!o||!TM(o))return{path:n};if(o.formMethod&&!LM(o.formMethod))return{path:n,error:Zt(405,{method:o.formMethod})};let s=()=>({path:n,error:Zt(400,{type:"invalid-body"})}),a=o.formMethod||"get",l=e?a.toUpperCase():a.toLowerCase(),i=nv(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!hn(l))return s();let f=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((b,S)=>{let[j,_]=S;return""+b+j+"="+_+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:f}}}else if(o.formEncType==="application/json"){if(!hn(l))return s();try{let f=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:f,text:void 0}}}catch{return s()}}}he(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=op(o.formData),d=o.formData;else if(o.body instanceof FormData)c=op(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=E1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=E1(c)}catch{return s()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(hn(u.formMethod))return{path:n,submission:u};let p=lr(n);return t&&p.search&&tm(p.search)&&c.append("index",""),p.search="?"+c,{path:fo(p),submission:u}}function kM(e,t){let n=e;if(t){let o=e.findIndex(s=>s.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function _1(e,t,n,o,s,a,l,i,c,d,u,p,f,b,S,j){let _=j?Object.values(j)[0]:S?Object.values(S)[0]:void 0,g=e.createURL(t.location),h=e.createURL(s),m=j?Object.keys(j)[0]:void 0,C=kM(n,m).filter((w,E)=>{let{route:N}=w;if(N.lazy)return!0;if(N.loader==null)return!1;if(a)return N.loader.hydrate?!0:t.loaderData[N.id]===void 0&&(!t.errors||t.errors[N.id]===void 0);if(EM(t.loaderData,t.matches[E],w)||i.some(Y=>Y===w.route.id))return!0;let D=t.matches[E],$=w;return T1(w,He({currentUrl:g,currentParams:D.params,nextUrl:h,nextParams:$.params},o,{actionResult:_,defaultShouldRevalidate:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||tv(D,$)}))}),x=[];return u.forEach((w,E)=>{if(a||!n.some(Q=>Q.route.id===w.routeId)||d.has(E))return;let N=es(f,w.path,b);if(!N){x.push({key:E,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(E),$=sp(N,w.path),Y=!1;p.has(E)?Y=!1:c.includes(E)?Y=!0:D&&D.state!=="idle"&&D.data===void 0?Y=l:Y=T1($,He({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},o,{actionResult:_,defaultShouldRevalidate:l})),Y&&x.push({key:E,routeId:w.routeId,path:w.path,matches:N,match:$,controller:new AbortController})}),[C,x]}function EM(e,t,n){let o=!t||n.route.id!==t.route.id,s=e[n.route.id]===void 0;return o||s}function tv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function T1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function k1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let s=n[e.id];he(s,"No route found in manifest");let a={};for(let l in o){let c=s[l]!==void 0&&l!=="hasErrorBoundary";mo(!c,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!QA.has(l)&&(a[l]=o[l])}Object.assign(s,a),Object.assign(s,He({},t(s),{lazy:void 0}))}async function qs(e,t,n,o,s,a,l,i,c){c===void 0&&(c={});let d,u,p,f=j=>{let _,g=new Promise((h,m)=>_=m);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([j({request:t,params:n.params,context:c.requestContext}),g])};try{let j=n.route[e];if(n.route.lazy)if(j){let _,g=await Promise.all([f(j).catch(h=>{_=h}),k1(n.route,a,s)]);if(_)throw _;u=g[0]}else if(await k1(n.route,a,s),j=n.route[e],j)u=await f(j);else if(e==="action"){let _=new URL(t.url),g=_.pathname+_.search;throw Zt(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:Ue.data,data:void 0};else if(j)u=await f(j);else{let _=new URL(t.url),g=_.pathname+_.search;throw Zt(404,{pathname:g})}he(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(j){d=Ue.error,u=j}finally{p&&t.signal.removeEventListener("abort",p)}if(DM(u)){let j=u.status;if(yM.has(j)){let g=u.headers.get("Location");if(he(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!J4.test(g))g=rp(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,g,i);else if(!c.isStaticRequest){let h=new URL(t.url),m=g.startsWith("//")?new URL(h.protocol+g):new URL(g),y=Br(m.pathname,l)!=null;m.origin===h.origin&&y&&(g=m.pathname+m.search+m.hash)}if(c.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Ue.redirect,status:j,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===Ue.error?Ue.error:Ue.data,response:u};let _;try{let g=u.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?_=await u.json():_=await u.text()}catch(g){return{type:Ue.error,error:g}}return d===Ue.error?{type:d,error:new em(j,u.statusText,_),headers:u.headers}:{type:Ue.data,data:_,statusCode:u.status,headers:u.headers}}if(d===Ue.error)return{type:d,error:u};if(OM(u)){var b,S;return{type:Ue.deferred,deferredData:u,statusCode:(b=u.init)==null?void 0:b.status,headers:((S=u.init)==null?void 0:S.headers)&&new Headers(u.init.headers)}}return{type:Ue.data,data:u}}function Qs(e,t,n,o){let s=e.createURL(nv(t)).toString(),a={signal:n};if(o&&hn(o.formMethod)){let{formMethod:l,formEncType:i}=o;a.method=l.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(o.json)):i==="text/plain"?a.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?a.body=op(o.formData):a.body=o.formData}return new Request(s,a)}function op(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function E1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function NM(e,t,n,o,s){let a={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let f=t[p].route.id;if(he(!so(u),"Cannot handle redirect results in processLoaderData"),ts(u)){let b=ka(e,f),S=u.error;o&&(S=Object.values(o)[0],o=void 0),l=l||{},l[b.route.id]==null&&(l[b.route.id]=S),a[f]=void 0,c||(c=!0,i=Q4(u.error)?u.error.status:500),u.headers&&(d[f]=u.headers)}else oo(u)?(s.set(f,u.deferredData),a[f]=u.deferredData.data):a[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[f]=u.headers)}),o&&(l=o,a[Object.keys(o)[0]]=void 0),{loaderData:a,errors:l,statusCode:i||200,loaderHeaders:d}}function N1(e,t,n,o,s,a,l,i){let{loaderData:c,errors:d}=NM(t,n,o,s,i);for(let u=0;u<a.length;u++){let{key:p,match:f,controller:b}=a[u];he(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let S=l[u];if(!(b&&b.signal.aborted))if(ts(S)){let j=ka(e.matches,f==null?void 0:f.route.id);d&&d[j.route.id]||(d=He({},d,{[j.route.id]:S.error})),e.fetchers.delete(p)}else if(so(S))he(!1,"Unhandled fetcher revalidation redirect");else if(oo(S))he(!1,"Unhandled fetcher deferred data");else{let j=hr(S.data);e.fetchers.set(p,j)}}return{loaderData:c,errors:d}}function R1(e,t,n,o){let s=He({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&a.route.loader&&(s[l]=e[l]),o&&o.hasOwnProperty(l))break}return s}function ka(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function O1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Zt(e,t){let{pathname:n,routeId:o,method:s,type:a}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&n&&o?i="You made a "+s+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":a==="defer-action"?i="defer() is not supported in actions":a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",s&&n&&o?i="You made a "+s.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":s&&(i='Invalid request method "'+s.toUpperCase()+'"')),new em(e||500,l,new Error(i),!0)}function D1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(so(n))return{result:n,idx:t}}}function nv(e){let t=typeof e=="string"?lr(e):e;return fo(He({},t,{hash:""}))}function RM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function oo(e){return e.type===Ue.deferred}function ts(e){return e.type===Ue.error}function so(e){return(e&&e.type)===Ue.redirect}function OM(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function DM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function LM(e){return jM.has(e.toLowerCase())}function hn(e){return vM.has(e.toLowerCase())}async function L1(e,t,n,o,s,a){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!tv(d,c)&&(a&&a[c.route.id])!==void 0;if(oo(i)&&(s||u)){let p=o[l];he(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await rv(i,p,s).then(f=>{f&&(n[l]=f||n[l])})}}}async function rv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ue.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Ue.error,error:s}}return{type:Ue.data,data:e.deferredData.data}}}function tm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function sp(e,t){let n=typeof t=="string"?lr(t).search:t.search;if(e[e.length-1].route.index&&tm(n||""))return e[e.length-1];let o=q4(e);return o[o.length-1]}function B1(e){let{formMethod:t,formAction:n,formEncType:o,text:s,formData:a,json:l}=e;if(!(!t||!n||!o)){if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:s};if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:a,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function Vd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function BM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Xs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function $M(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function hr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function AM(e,t){try{let n=e.sessionStorage.getItem(ev);if(n){let o=JSON.parse(n);for(let[s,a]of Object.entries(o||{}))a&&Array.isArray(a)&&t.set(s,new Set(a||[]))}}catch{}}function MM(e,t){if(t.size>0){let n={};for(let[o,s]of t)n[o]=[...s];try{e.sessionStorage.setItem(ev,JSON.stringify(n))}catch(o){mo(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ja.apply(this,arguments)}const wl=v.createContext(null),nm=v.createContext(null),Wr=v.createContext(null),Gc=v.createContext(null),Zr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),ov=v.createContext(null);function PM(e,t){let{relative:n}=t===void 0?{}:t;_l()||he(!1);let{basename:o,navigator:s}=v.useContext(Wr),{hash:a,pathname:l,search:i}=Tl(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Kn([o,l])),s.createHref({pathname:c,search:i,hash:a})}function _l(){return v.useContext(Gc)!=null}function $s(){return _l()||he(!1),v.useContext(Gc).location}function sv(e){v.useContext(Wr).static||v.useLayoutEffect(e)}function IM(){let{isDataRoute:e}=v.useContext(Zr);return e?JM():zM()}function zM(){_l()||he(!1);let e=v.useContext(wl),{basename:t,future:n,navigator:o}=v.useContext(Wr),{matches:s}=v.useContext(Zr),{pathname:a}=$s(),l=JSON.stringify(Xh(s,n.v7_relativeSplatPath)),i=v.useRef(!1);return sv(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=Jh(d,JSON.parse(l),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Kn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,a,e])}const FM=v.createContext(null);function UM(e){let t=v.useContext(Zr).outlet;return t&&v.createElement(FM.Provider,{value:e},t)}function Tl(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Wr),{matches:s}=v.useContext(Zr),{pathname:a}=$s(),l=JSON.stringify(Xh(s,o.v7_relativeSplatPath));return v.useMemo(()=>Jh(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function VM(e,t,n,o){_l()||he(!1);let{navigator:s}=v.useContext(Wr),{matches:a}=v.useContext(Zr),l=a[a.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=$s(),u;if(t){var p;let _=typeof t=="string"?lr(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||he(!1),u=_}else u=d;let f=u.pathname||"/",b=c==="/"?f:f.slice(c.length)||"/",S=es(e,{pathname:b}),j=YM(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Kn([c,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Kn([c,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),a,n,o);return t&&j?v.createElement(Gc.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:We.Pop}},j):j}function HM(){let e=XM(),t=Q4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:s},n):null,a)}const WM=v.createElement(HM,null);class ZM extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Zr.Provider,{value:this.props.routeContext},v.createElement(ov.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KM(e){let{routeContext:t,match:n,children:o}=e,s=v.useContext(wl);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Zr.Provider,{value:t},o)}function YM(e,t,n,o){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let l=e,i=(s=n)==null?void 0:s.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||he(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:b}=n,S=p.route.loader&&f[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||S){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,f)=>{let b,S=!1,j=null,_=null;n&&(b=i&&p.route.id?i[p.route.id]:void 0,j=p.route.errorElement||WM,c&&(d<0&&f===0?(eP("route-fallback",!1),S=!0,_=null):d===f&&(S=!0,_=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,f+1)),h=()=>{let m;return b?m=j:S?m=_:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=u,v.createElement(KM,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?v.createElement(ZM,{location:n.location,revalidation:n.revalidation,component:j,error:b,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var av=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(av||{}),hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hc||{});function GM(e){let t=v.useContext(wl);return t||he(!1),t}function qM(e){let t=v.useContext(nm);return t||he(!1),t}function QM(e){let t=v.useContext(Zr);return t||he(!1),t}function lv(e){let t=QM(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function XM(){var e;let t=v.useContext(ov),n=qM(hc.UseRouteError),o=lv(hc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function JM(){let{router:e}=GM(av.UseNavigateStable),t=lv(hc.UseNavigateStable),n=v.useRef(!1);return sv(()=>{n.current=!0}),v.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Ja({fromRouteId:t},a)))},[e,t])}const $1={};function eP(e,t,n){!t&&!$1[e]&&($1[e]=!0)}function tP(e){return UM(e.context)}function nP(e){let{basename:t="/",children:n=null,location:o,navigationType:s=We.Pop,navigator:a,static:l=!1,future:i}=e;_l()&&he(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:a,static:l,future:Ja({v7_relativeSplatPath:!1},i)}),[c,i,a,l]);typeof o=="string"&&(o=lr(o));let{pathname:u="/",search:p="",hash:f="",state:b=null,key:S="default"}=o,j=v.useMemo(()=>{let _=Br(u,c);return _==null?null:{location:{pathname:_,search:p,hash:f,state:b,key:S},navigationType:s}},[c,u,p,f,b,S,s]);return j==null?null:v.createElement(Wr.Provider,{value:d},v.createElement(Gc.Provider,{children:n,value:j}))}new Promise(()=>{});function rP(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},vs.apply(this,arguments)}function iv(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function oP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sP(e,t){return e.button===0&&(!t||t==="_self")&&!oP(e)}const aP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],lP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function iP(e,t){return _M({basename:t==null?void 0:t.basename,future:vs({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:YA({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||cP(),routes:e,mapRouteProperties:rP,window:t==null?void 0:t.window}).initialize()}function cP(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=vs({},t,{errors:dP(t.errors)})),t}function dP(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,s]of t)if(s&&s.__type==="RouteErrorResponse")n[o]=new em(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let a=window[s.__subType];if(typeof a=="function")try{let l=new a(s.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let a=new Error(s.message);a.stack="",n[o]=a}}else n[o]=s;return n}const cv=v.createContext({isTransitioning:!1}),uP=v.createContext(new Map),pP="startTransition",A1=q6[pP],hP="flushSync",M1=lj[hP];function mP(e){A1?A1(e):e()}function Js(e){M1?M1(e):e()}class fP{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function xP(e){let{fallbackElement:t,router:n,future:o}=e,[s,a]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[f,b]=v.useState(),[S,j]=v.useState(),_=v.useRef(new Map),{v7_startTransition:g}=o||{},h=v.useCallback(w=>{g?mP(w):w()},[g]),m=v.useCallback((w,E)=>{let{deletedFetchers:N,unstable_flushSync:D,unstable_viewTransitionOpts:$}=E;N.forEach(Q=>_.current.delete(Q)),w.fetchers.forEach((Q,U)=>{Q.data!==void 0&&_.current.set(U,Q.data)});let Y=n.window==null||typeof n.window.document.startViewTransition!="function";if(!$||Y){D?Js(()=>a(w)):h(()=>a(w));return}if(D){Js(()=>{f&&(u&&u.resolve(),f.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:$.currentLocation,nextLocation:$.nextLocation})});let Q=n.window.document.startViewTransition(()=>{Js(()=>a(w))});Q.finished.finally(()=>{Js(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})})}),Js(()=>b(Q));return}f?(u&&u.resolve(),f.skipTransition(),j({state:w,currentLocation:$.currentLocation,nextLocation:$.nextLocation})):(i(w),d({isTransitioning:!0,flushSync:!1,currentLocation:$.currentLocation,nextLocation:$.nextLocation}))},[n.window,f,u,_,h]);v.useLayoutEffect(()=>n.subscribe(m),[n,m]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new fP)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let w=l,E=u.promise,N=n.window.document.startViewTransition(async()=>{h(()=>a(w)),await E});N.finished.finally(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})}),b(N)}},[h,l,u,n.window]),v.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,f,s.location,l]),v.useEffect(()=>{!c.isTransitioning&&S&&(i(S.state),d({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),j(void 0))},[c.isTransitioning,S]),v.useEffect(()=>{},[]);let y=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,E,N)=>n.navigate(w,{state:E,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(w,E,N)=>n.navigate(w,{replace:!0,state:E,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),C=n.basename||"/",x=v.useMemo(()=>({router:n,navigator:y,static:!1,basename:C}),[n,y,C]);return v.createElement(v.Fragment,null,v.createElement(wl.Provider,{value:x},v.createElement(nm.Provider,{value:s},v.createElement(uP.Provider,{value:_.current},v.createElement(cv.Provider,{value:c},v.createElement(nP,{basename:C,location:s.location,navigationType:s.historyAction,navigator:y,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},s.initialized||n.future.v7_partialHydration?v.createElement(gP,{routes:n.routes,future:n.future,state:s}):t))))),null)}function gP(e){let{routes:t,future:n,state:o}=e;return VM(t,void 0,o,n)}const vP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jP=v.forwardRef(function(t,n){let{onClick:o,relative:s,reloadDocument:a,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,f=iv(t,aP),{basename:b}=v.useContext(Wr),S,j=!1;if(typeof d=="string"&&bP.test(d)&&(S=d,vP))try{let m=new URL(window.location.href),y=d.startsWith("//")?new URL(m.protocol+d):new URL(d),C=Br(y.pathname,b);y.origin===m.origin&&C!=null?d=C+y.search+y.hash:j=!0}catch{}let _=PM(d,{relative:s}),g=CP(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:s,unstable_viewTransition:p});function h(m){o&&o(m),m.defaultPrevented||g(m)}return v.createElement("a",vs({},f,{href:S||_,onClick:j||a?o:h,ref:n,target:c}))}),yP=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:s=!1,className:a="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=iv(t,lP),f=Tl(c,{relative:p.relative}),b=$s(),S=v.useContext(nm),{navigator:j}=v.useContext(Wr),_=S!=null&&wP(f)&&d===!0,g=j.encodeLocation?j.encodeLocation(f).pathname:f.pathname,h=b.pathname,m=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;s||(h=h.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase());const y=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!l&&h.startsWith(g)&&h.charAt(y)==="/",x=m!=null&&(m===g||!l&&m.startsWith(g)&&m.charAt(g.length)==="/"),w={isActive:C,isPending:x,isTransitioning:_},E=C?o:void 0,N;typeof a=="function"?N=a(w):N=[a,C?"active":null,x?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(w):i;return v.createElement(jP,vs({},p,{"aria-current":E,className:N,ref:n,style:D,to:c,unstable_viewTransition:d}),typeof u=="function"?u(w):u)});var ap;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ap||(ap={}));var P1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(P1||(P1={}));function SP(e){let t=v.useContext(wl);return t||he(!1),t}function CP(e,t){let{target:n,replace:o,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=IM(),d=$s(),u=Tl(e,{relative:l});return v.useCallback(p=>{if(sP(p,n)){p.preventDefault();let f=o!==void 0?o:fo(d)===fo(u);c(e,{replace:f,state:s,preventScrollReset:a,relative:l,unstable_viewTransition:i})}},[d,c,u,o,s,n,e,a,l,i])}function wP(e,t){t===void 0&&(t={});let n=v.useContext(cv);n==null&&he(!1);let{basename:o}=SP(ap.useViewTransitionState),s=Tl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Br(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=Br(n.nextLocation.pathname,o)||n.nextLocation.pathname;return np(s.pathname,l)!=null||np(s.pathname,a)!=null}const Ln=({to:e,className:t="",exact:n,onClick:o,label:s,style:a,...l})=>r.jsx(yP,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":s,style:a,children:r.jsx(wo,{...l})}),dv=()=>r.jsx(k,{code:"pager",Component:ZA,Source:KA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(Ln,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),_P=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),TP=`export const animals = [
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
`,uv=()=>r.jsxs(z,{code:"rows",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(Vn,{code:TP,language:"js"})})})]}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),EP=()=>r.jsx($t,{rows:on,columns:"id name animal role",storageKey:"badger-datatable-animals-demo1"}),NP=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,pv=()=>r.jsxs(k,{code:"storageKey",Component:EP,Source:NP,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," property can be used to provide a key to store the data table state in local storage.  This allows the page number, page size, visible columns, column order, sort column and sort direction to be preserved across visits to the page."]}),r.jsx("p",{children:"Try changing some of those setting in the example below.  Then reload the browser page.  You should see the setting preserved."})]}),RP=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),OP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(F4,{}),r.jsxs(Fe,{tocName:"datatable",children:[r.jsx(oe,{title:"Properties"}),r.jsx(uv,{}),r.jsx(H4,{}),r.jsx(K4,{}),r.jsx(U4,{}),r.jsx(dv,{}),r.jsx(pv,{}),r.jsx(oe,{title:"Column Properties"}),r.jsx(Z4,{}),r.jsx(V4,{}),r.jsx(W4,{})]})]}),DP=Object.freeze(Object.defineProperty({__proto__:null,default:OP},Symbol.toStringTag,{value:"Module"})),LP=()=>r.jsx(Je,{summary:"Click to reveal",children:"This is the content that is revealed."}),BP=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,hv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(te,{Component:LP,code:BP})]}),$P=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),AP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),MP=`import React from 'react'
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

export default DetailsExample`,mv=()=>r.jsx(k,{code:"border",Component:AP,Source:MP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),PP=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),IP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),zP=`import React from 'react'
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

export default DetailsExample`,fv=()=>r.jsx(k,{code:"color",Component:IP,Source:zP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),FP=Object.freeze(Object.defineProperty({__proto__:null,default:fv},Symbol.toStringTag,{value:"Module"})),UP=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",content:"This is the content that is revealed."})}),VP=`import React from 'react'
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

export default DetailsExample`,xv=()=>r.jsx(k,{code:"content",Component:UP,Source:VP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),HP=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),WP=()=>r.jsx(Je,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),ZP=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,gv=()=>r.jsx(k,{code:"lined",Component:WP,Source:ZP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),KP=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),YP=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),GP=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,vv=()=>r.jsx(k,{code:"open",Component:YP,Source:GP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),qP=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),QP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),XP=`import React from 'react'
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

export default DetailsExample`,bv=()=>r.jsx(k,{code:"radius",Component:QP,Source:XP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),JP=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),eI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),tI=`import React from 'react'
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

export default DetailsExample`,jv=()=>r.jsx(k,{code:"shaded",Component:eI,Source:tI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),nI=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),rI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),oI=`import React from 'react'
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

export default DetailsExample`,yv=()=>r.jsx(k,{code:"shadow",Component:rI,Source:oI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),sI=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),aI=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Je,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(re,{name:"cog"})]}),children:"This is the content that is revealed."})]}),lI=`import React from 'react'
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

export default DetailsExample`,Sv=()=>r.jsx(k,{code:"summary",Component:aI,Source:lI,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),iI=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),cI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(hv,{}),r.jsxs(Fe,{tocName:"details",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Sv,{}),r.jsx(xv,{}),r.jsx(vv,{}),r.jsx(gv,{}),r.jsx(mv,{}),r.jsx(bv,{}),r.jsx(jv,{}),r.jsx(yv,{}),r.jsx(fv,{}),r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(z,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(z,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(oe,{title:"Components"}),r.jsx(z,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(z,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),dI=Object.freeze(Object.defineProperty({__proto__:null,default:cI},Symbol.toStringTag,{value:"Module"})),uI=()=>r.jsx(Ur,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),pI=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,Cv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(Ln,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),r.jsx(te,{Component:uI,code:pI})]}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),mI=()=>r.jsx(Ur,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),fI=`import React from 'react'
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

export default DropdownMenuExample`,wv=()=>r.jsx(k,{code:"onSelect",Component:mI,Source:fI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),xI=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),gI=()=>r.jsx(Ur,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),vI=`import React from 'react'
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

export default DropdownExample`,bI=()=>r.jsx(Ur,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),jI=`import React from 'react'
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

export default DropdownExample`,yI=()=>r.jsx(Ur,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),SI=`import React from 'react'
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

export default DropdownExample`,CI=()=>r.jsx(Ur,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),wI=`import React from 'react'
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

export default DropdownExample`,_I=()=>r.jsx(Ur,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),TI=`import React from 'react'
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

export default DropdownExample`,_v=()=>r.jsxs(z,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(te,{Component:gI,code:vI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),r.jsx(te,{Component:yI,code:SI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]}),r.jsx(te,{Component:_I,code:TI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]}),r.jsx(te,{Component:bI,code:jI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]}),r.jsx(te,{Component:CI,code:wI,caption:"options",expand:!1,undent:2})]}),kI=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),xo=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),EI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(Cv,{}),r.jsxs(Fe,{tocName:"dropdown-menu",children:[r.jsx(oe,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(Ln,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx(_v,{}),r.jsx(wv,{}),r.jsxs(xo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(z,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(z,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),NI=Object.freeze(Object.defineProperty({__proto__:null,default:EI},Symbol.toStringTag,{value:"Module"})),RI=()=>r.jsx(bn,{text:"Dropdown",children:"Hello World!"}),OI=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,Tv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),r.jsx(te,{Component:RI,code:OI})]}),DI=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),LI=()=>r.jsx(bn,{text:"Dropdown Content",content:"Hello World!"}),BI=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,kv=()=>r.jsx(k,{code:"content",Component:LI,Source:BI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),$I=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),AI=()=>r.jsx(bn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),MI=`import React from 'react'
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

export default DropdownExample`,Ev=()=>r.jsx(k,{code:"iconLeft",Component:AI,Source:MI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),PI=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),II=()=>r.jsx(bn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),zI=`import React from 'react'
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

export default DropdownMenuExample`,Nv=()=>r.jsx(k,{code:"iconLeftRotate",Component:II,Source:zI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),FI=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),UI=()=>r.jsx(bn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),VI=`import React from 'react'
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

export default DropdownExample`,Rv=()=>r.jsx(k,{code:"iconRight",Component:UI,Source:VI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),HI=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),WI=()=>r.jsx(bn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),ZI=`import React from 'react'
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

export default DropdownExample`,Ov=()=>r.jsx(k,{code:"iconRightRotate",Component:WI,Source:ZI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),KI=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),YI=()=>r.jsx(bn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),GI=`import React from 'react'
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

export default DropdownExample`,Dv=()=>r.jsx(k,{code:"openOnHover",Component:YI,Source:GI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),qI=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),QI=()=>r.jsx(bn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),XI=`import React from 'react'
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

export default DropdownExample`,Lv=()=>r.jsx(k,{code:"right",Component:QI,Source:XI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),JI=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),ez=()=>r.jsx(bn,{text:"Dropdown Trigger Text",children:"Hello World!"}),tz=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,Bv=()=>r.jsx(k,{code:"text",Component:ez,Source:tz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),nz=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),rz=()=>r.jsx(bn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),oz=`import React from 'react'
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

export default DropdownExample`,$v=()=>r.jsx(k,{code:"wide",Component:rz,Source:oz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),sz=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),az=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(Tv,{}),r.jsxs(Fe,{tocName:"dropdown",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Bv,{}),r.jsx(kv,{}),r.jsx(Dv,{}),r.jsx(Lv,{}),r.jsx($v,{}),r.jsx(Ev,{}),r.jsx(Nv,{}),r.jsx(Rv,{}),r.jsx(Ov,{}),r.jsxs(xo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(z,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(z,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(z,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(z,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(z,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),lz=Object.freeze(Object.defineProperty({__proto__:null,default:az},Symbol.toStringTag,{value:"Module"})),iz=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],cz=e=>iz.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),dz=()=>r.jsxs(ar,{children:[r.jsx(at,{name:"animal",type:"search",label:"Animal",onSearch:cz}),r.jsx(Bs,{})]}),uz=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,pz=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],I1=e=>pz.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),hz=e=>e.id,mz=()=>r.jsxs(ar,{children:[r.jsx(at,{name:"animal1",type:"search",label:"Animal",onSearch:I1}),r.jsx(at,{name:"animal2",type:"search",label:"Animal",onSearch:I1,selectValue:hz}),r.jsx(Bs,{})]}),fz=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,Av=()=>r.jsxs(z,{code:"search",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"search"})," ","to use the ",r.jsx(Ln,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",r.jsx("code",{children:"onSearch"})," handler defined below."]}),r.jsx(te,{Component:dz,code:uz}),r.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(te,{Component:mz,code:fz})]}),xz=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),gz=()=>Ir(2e3).then(()=>({ok:"All is good"})),Mv=()=>r.jsxs(ar,{className:"relative",onSubmit:gz,children:[r.jsx(at,{name:"name",label:"Your name",required:!0}),r.jsx(at,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(Sl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Gh,{size:"small",spinnerSize:"x3",text:"Posting...",icon:"envelope",color:"green",strokeStop:50,animation:"beat"})]}),vz=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),bz=()=>Ir(2e3).then(()=>({ok:"All is good"})),Pv=()=>r.jsxs(ar,{className:"relative",onSubmit:bz,children:[r.jsx(at,{name:"name",label:"Your name",required:!0}),r.jsx(at,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(Sl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Gh,{})]}),jz=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),yz=`/* eslint-disable quotes */
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

export default FormExample`,Sz=`/* eslint-disable quotes */
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

export default FormExample`,Iv=()=>r.jsxs(z,{code:"Submitting",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Submitting"})," component can be used to add an overlay with a ",r.jsx(Ln,{to:"/components/spinner",text:"Spinner"})," and message when the form is submitting."]}),r.jsx(te,{Component:Pv,code:yz}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the overall size. The ",r.jsx("code",{children:"spinnerSize"})," can be used to set the size of the spinner icon. The ",r.jsx("code",{children:"text"})," property can be used to change the text displayed. All other properties are forwarded to the"," ",r.jsx(Ln,{to:"/components/spinner",text:"Spinner"})," component."]}),r.jsx(te,{Component:Mv,code:Sz})]}),Cz=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),wz=()=>r.jsxs(ar,{children:[r.jsx(at,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),r.jsx(Bs,{})]}),_z=`import React from 'react'
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

export default UISelectExample`,Tz=()=>r.jsxs(ar,{children:[r.jsx(at,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),r.jsx(Bs,{})]}),kz=`import React from 'react'
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

export default UISelectExample`,Ez=()=>r.jsxs(ar,{children:[r.jsx(at,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),r.jsx(Bs,{})]}),Nz=`import React from 'react'
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

export default UISelectExample`,zv=()=>r.jsxs(z,{code:"uiselect",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"uiselect"})," ","to use the ",r.jsx(Ln,{to:"/components/select",text:"Select"})," component."]}),r.jsx(te,{Component:wz,code:_z}),r.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",r.jsx("code",{children:"search"})," property is set here to enable searching."]}),r.jsx(te,{Component:Tz,code:kz}),r.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(te,{Component:Ez,code:Nz})]}),Rz=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),Oz=["Guitar","Bass","Drums","Keyboards","Mandolin"],Dz=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],Lz=e=>Dz.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),Bz=()=>Ir(2e3).then(()=>({ok:"All is good"})),$z=()=>r.jsxs(ar,{className:"relative",onSubmit:Bz,resetOnSuccess:!0,children:[r.jsx(at,{name:"email",label:"Email address",required:!0}),r.jsx(at,{name:"password",label:"Password",type:"password",required:!0}),r.jsx(at,{name:"instrument",type:"uiselect",label:"Instrument",options:Oz}),r.jsx(at,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:Lz}),r.jsx(at,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),r.jsx($R,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),r.jsx(Gh,{}),e=>r.jsx(B,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),r.jsx(Bs,{})]}),Az=`/* eslint-disable quotes */
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

export default FormExample`,Mz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Form"}),r.jsxs("p",{className:"large wide",children:["The library includes"," ",r.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),r.jsx(te,{Component:$z,code:Az,caption:"Form"}),r.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",r.jsx(Ln,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",r.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),r.jsxs(Fe,{tocName:"form",children:[r.jsx(oe,{title:"Input Components"}),r.jsx(zv,{}),r.jsx(Av,{}),r.jsx(oe,{title:"Additional Component"}),r.jsx(Iv,{})]})]}),Pz=Object.freeze(Object.defineProperty({__proto__:null,default:Mz},Symbol.toStringTag,{value:"Module"})),Iz=()=>r.jsx(re,{name:"check"}),zz=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,Fz=cC(0,100,5),di=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:s=>n(s.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),Fz.map(s=>r.jsx("option",{value:s,children:s},s))]}),Uz=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),s=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},a=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${Hz(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(Wz,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Vn,{code:i,language:"html",expand:!0})]})]}),r.jsx(Vz,{options:n,setOption:a,toggleOption:s})]})},Vz=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),s=t("color"),a=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(ep,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(u0,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(d0,{color:e.color,setColor:s,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(di,{stop:e.foreground,setStop:a})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(di,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(di,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(di,{stop:e.backgroundDark,setStop:c})]})]})]})},Fv=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,s)=>(o[s]=e[s],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},Hz=e=>{const t=Fv(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},Wz=({options:e})=>r.jsx(re,{...Fv(e)}),Uv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(te,{Component:Iz,code:zz,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(Uz,{})]}),Zz=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),Vv=()=>r.jsxs(z,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(ll.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(re,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),Kz=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"})),Yz=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(re,{name:"check",className:"smallest"}),r.jsx(re,{name:"check",className:"smaller"}),r.jsx(re,{name:"check",className:"small"}),r.jsx(re,{name:"check"}),r.jsx(re,{name:"check",className:"large"}),r.jsx(re,{name:"check",className:"larger"}),r.jsx(re,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(re,{name:"check",className:"larger green fgc-50"}),r.jsx(re,{name:"cross",className:"larger red fgc-50"})]})]}),Gz=`import React from 'react'
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

export default Component`,Hv=()=>r.jsx(k,{code:"className",Component:Yz,Source:Gz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),qz=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),Qz=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(re,{name:"check",color:"green-50"}),r.jsx(re,{name:"check",color:"green-70-30"}),r.jsx(re,{name:"check",color:"green-70--30"}),r.jsx(re,{name:"check",color:"green-70-30-30-70"})]}),Xz=`import React from 'react'
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

export default Component`,Wv=()=>r.jsxs(k,{code:"color",Component:Qz,Source:Xz,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),Jz=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),eF=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(re,{name:"bars"}),r.jsx(re,{name:"check"}),r.jsx(re,{name:"cross"}),r.jsx(re,{name:"arrow"}),r.jsx(re,{name:"arrow-right"}),r.jsx(re,{name:"arrow-down-thicker.red.fgc-50"})]}),tF=`import React from 'react'
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

export default Component`,Zv=()=>r.jsxs(k,{code:"name",Component:eF,Source:tF,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),nF=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),rF=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(re,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(re,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),oF=`import React from 'react'
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

export default Component`,Kv=()=>r.jsx(k,{code:"path",Component:rF,Source:oF,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),sF=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),aF=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(re,{name:"check",size:"smallest"}),r.jsx(re,{name:"check",size:"smaller"}),r.jsx(re,{name:"check",size:"small"}),r.jsx(re,{name:"check",size:"medium"}),r.jsx(re,{name:"check",size:"large"}),r.jsx(re,{name:"check",size:"larger"}),r.jsx(re,{name:"check",size:"largest"})]}),lF=`import React from 'react'
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

export default Component`,Yv=()=>r.jsx(k,{code:"size",Component:aF,Source:lF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),iF=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),cF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx(Uv,{}),r.jsxs(Fe,{tocName:"icon",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Zv,{}),r.jsx(Hv,{}),r.jsx(Yv,{}),r.jsx(Wv,{}),r.jsx(Kv,{}),r.jsx(oe,{title:"Components"}),r.jsx(Vv,{})]})]}),dF=Object.freeze(Object.defineProperty({__proto__:null,default:cF},Symbol.toStringTag,{value:"Module"})),uF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},pF=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,Gv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(te,{Component:uF,code:pF,expand:!0})]}),hF=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),mF=()=>{const{show:e,hide:t,Modal:n}=ZR();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(B,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:e})]})},fF=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,qv=()=>r.jsx(k,{code:"ModalState",Component:mF,Source:fF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),xF=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),gF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},vF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Qv=()=>r.jsx(k,{code:"className",Component:gF,Source:vF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),bF=Object.freeze(Object.defineProperty({__proto__:null,default:Qv},Symbol.toStringTag,{value:"Module"})),jF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},yF=`import React, { useState } from 'react'
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

export default ModalExample`,Xv=()=>r.jsx(k,{code:"close",Component:jF,Source:yF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),SF=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),CF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},wF=`import React, { useState } from 'react'
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

export default ModalExample`,Jv=()=>r.jsx(k,{code:"closeIcon",Component:CF,Source:wF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),_F=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),TF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(B,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},kF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,e5=()=>r.jsx(k,{code:"footer",Component:TF,Source:kF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),EF=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),NF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},RF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,t5=()=>r.jsx(k,{code:"header",Component:NF,Source:RF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),OF=Object.freeze(Object.defineProperty({__proto__:null,default:t5},Symbol.toStringTag,{value:"Module"})),DF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},LF=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,n5=()=>r.jsx(k,{code:"text",Component:DF,Source:LF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),BF=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),$F=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},AF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,r5=()=>r.jsx(k,{code:"title",Component:$F,Source:AF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),MF=Object.freeze(Object.defineProperty({__proto__:null,default:r5},Symbol.toStringTag,{value:"Module"})),PF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(Gv,{}),r.jsxs(Fe,{tocName:"modal",children:[r.jsx(oe,{title:"Properties"}),r.jsx(Qv,{}),r.jsx(Xv,{}),r.jsx(Jv,{}),r.jsx(n5,{}),r.jsx(r5,{}),r.jsx(t5,{}),r.jsx(e5,{}),r.jsx(oe,{title:"Components"}),r.jsx(qv,{})]})]}),IF=Object.freeze(Object.defineProperty({__proto__:null,default:PF},Symbol.toStringTag,{value:"Module"})),zF=()=>{const{isVisible:e,show:t,hide:n}=zr();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(To,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"})]})},FF=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,o5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(te,{Component:zF,code:FF})]}),UF=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),VF=()=>{const{show:e,hide:t,Overlay:n}=KR();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(B,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(B,{color:"green",text:"Show Overlay",onClick:e})]})},HF=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,s5=()=>r.jsx(k,{code:"OverlayState",Component:VF,Source:HF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),WF=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),ZF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},KF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,YF=()=>r.jsx(k,{code:"className",Component:ZF,Source:KF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),GF=Object.freeze(Object.defineProperty({__proto__:null,default:YF},Symbol.toStringTag,{value:"Module"})),qF=()=>{const{isVisible:e,show:t,hide:n}=zr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(To,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},QF=`import React from 'react'
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

export default ColorExample`,a5=()=>r.jsx(k,{title:"Custom Colors",Component:qF,Source:QF,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),XF=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),JF=()=>{const{isVisible:e,show:t,hide:n}=zr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(To,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},eU=`import React from 'react'
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

export default OverlayExample`,l5=()=>r.jsx(k,{code:"fixed",Component:JF,Source:eU,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),tU=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),nU=()=>{const{isVisible:e,show:t,hide:n}=zr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(To,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},rU=`import React from 'react'
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

export default ColorExample`,oU=()=>{const{isVisible:e,show:t,hide:n}=zr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(To,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},sU=`import React from 'react'
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

export default ColorExample`,i5=()=>r.jsxs(z,{code:"light / dark",children:[r.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(te,{Component:nU,code:rU,caption:"light",undent:8}),r.jsx(te,{Component:oU,code:sU,caption:"dark",undent:8})]}),aU=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),lU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(o5,{}),r.jsxs(Fe,{tocName:"overlay",children:[r.jsx(oe,{title:"Properties"}),r.jsx(l5,{}),r.jsx(i5,{}),r.jsx(oe,{title:"Styling"}),r.jsx(a5,{}),r.jsx(oe,{title:"Components"}),r.jsx(s5,{})]})]}),iU=Object.freeze(Object.defineProperty({__proto__:null,default:lU},Symbol.toStringTag,{value:"Module"})),cU=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=pE(),s=o[e];return r.jsx(B,{text:s,className:t,onClick:n})},dU=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Xt,{pages:t,page:n,setPage:o,pageRanges:e,Page:cU,size:"small"})},uU=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,c5=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(pU,{name:t,value:n},t))})}),pU=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),d5=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]}),r.jsx(c5,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Components"}),r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]}),r.jsx(te,{Component:dU,code:uU})]}),hU=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),mU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t})},fU=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,u5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]}),r.jsx(te,{Component:mU,code:fU})]}),xU=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),gU=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Xt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},vU=`import React, { useState } from 'react'
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
`,p5=()=>r.jsx(k,{code:"className",Component:gU,Source:vU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),bU=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),jU=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"blue"})]})},yU=`import React, { useState } from 'react'
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
`,h5=()=>r.jsx(k,{code:"color",Component:jU,Source:yU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),SU=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),CU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},wU=`import React, { useState } from 'react'
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
`,m5=()=>r.jsx(k,{code:"prevIcon / nextIcon",Component:CU,Source:wU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),_U=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),TU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},kU=`import React, { useState } from 'react'
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
`,EU=()=>r.jsx(k,{code:"nextIcon",Component:TU,Source:kU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),NU=Object.freeze(Object.defineProperty({__proto__:null,default:EU},Symbol.toStringTag,{value:"Module"})),RU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,showFirstLast:!1})},OU=`import React, { useState } from 'react'
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
`,f5=()=>r.jsxs(k,{code:"showFirstLast",Component:RU,Source:OU,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),DU=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),LU=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Xt,{pages:11,page:e,setPage:t,size:"small"})]})},BU=`import React, { useState } from 'react'
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
`,x5=()=>r.jsx(k,{code:"size",Component:LU,Source:BU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),$U=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),AU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(u5,{}),r.jsx(d5,{}),r.jsxs(Fe,{tocName:"pager",children:[r.jsx(oe,{title:"Properties"}),r.jsx(p5,{}),r.jsx(h5,{}),r.jsx(x5,{}),r.jsx(m5,{}),r.jsx(f5,{}),r.jsxs(xo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(z,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(z,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(z,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsxs(z,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(z,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(z,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(z,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),MU=Object.freeze(Object.defineProperty({__proto__:null,default:AU},Symbol.toStringTag,{value:"Module"})),PU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},IU=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,g5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(te,{Component:PU,code:IU,expand:!0})]}),zU=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),FU=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx(Dn,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},UU=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,v5=()=>r.jsxs(k,{code:"border",Component:FU,Source:UU,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),VU=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),HU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},WU=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,b5=()=>r.jsx(k,{code:"className",Component:HU,Source:WU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),ZU=Object.freeze(Object.defineProperty({__proto__:null,default:b5},Symbol.toStringTag,{value:"Module"})),KU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},YU=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,j5=()=>r.jsx(k,{code:"disabled",Component:KU,Source:YU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),GU=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),qU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},QU=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,y5=()=>r.jsx(k,{code:"inline",Component:qU,Source:QU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),XU=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),JU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},eV=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,S5=()=>r.jsx(k,{code:"name",Component:JU,Source:eV,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),tV=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),nV=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},rV=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,Ft=({id:e,text:t})=>r.jsx("a",{href:`#${qh(e||t)}`,className:"code",children:t}),C5=()=>r.jsx(k,{code:"onChange",Component:nV,Source:rV,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(Ft,{text:"value"}),"."]})}),oV=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),sV=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},aV=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,w5=()=>r.jsx(k,{code:"options",Component:sV,Source:aV,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),lV=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),iV=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},cV=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,_5=()=>r.jsx(k,{code:"value",Component:iV,Source:cV,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(Ft,{text:"onChange"})," to update the value."]})}),dV=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),uV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(g5,{}),r.jsxs(Fe,{tocName:"radio",children:[r.jsx(oe,{title:"Properties"}),r.jsx(_5,{}),r.jsx(C5,{}),r.jsx(S5,{}),r.jsx(b5,{}),r.jsx(y5,{}),r.jsx(v5,{}),r.jsx(oe,{title:"Option Properties"}),r.jsx(w5,{}),r.jsx(j5,{})]})]}),pV=Object.freeze(Object.defineProperty({__proto__:null,default:uV},Symbol.toStringTag,{value:"Module"})),hV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],mV=()=>{const e=t=>hV.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(Jn,{onSearch:e})},fV=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,T5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(te,{Component:mV,code:fV})]}),xV=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),gV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],vV=()=>{const[e,t]=X.useState(),n=o=>gV.filter(s=>s.toLowerCase().indexOf(o.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(Jn,{onLoad:t,onSearch:n,value:"Brian Badger"}),r.jsx(B,{onClick:()=>e==null?void 0:e.clear(),text:"Clear"})]})},bV=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,k5=()=>r.jsx(k,{code:"clear",Component:vV,Source:bV,children:r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"onLoad"})," property to save a reference to the search context.  You can call the ",r.jsx("code",{children:"clear"})," method on that to programmatically clear the input.  This has the same effect as clicking on the cross icon to the right of the input."]})}),jV=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),yV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],SV=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>yV.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(Jn,{onSearch:t,displayResult:e})},CV=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,E5=()=>r.jsx(k,{code:"displayResult",Component:SV,Source:CV,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),wV=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),_V=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],TV=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>_V.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(Jn,{onSearch:t,displayValue:e})},kV=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,N5=()=>r.jsx(k,{code:"displayValue",Component:TV,Source:kV,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),EV=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),NV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],RV=()=>{const e=async t=>Ir(500).then(()=>NV.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(Jn,{onSearch:e,debug:!0})},OV=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,R5=()=>r.jsx(k,{code:"onSearch",Component:RV,Source:OV,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),DV=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),LV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],BV=()=>{const e=n=>LV.filter(o=>o.toLowerCase().indexOf(n.toLowerCase())!==-1),t=n=>alert(`You selected ${n}`);return r.jsx(Jn,{onSearch:e,onSelect:t})},$V=`import { Search } from '@/src/index.jsx'

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

export default OnSelectExample`,O5=()=>r.jsx(k,{code:"onSelect",Component:BV,Source:$V,children:r.jsxs("p",{children:["You can define an ",r.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),AV=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),MV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],PV=()=>{const[e,t]=X.useState(),[n,o]=X.useState(),s=a=>MV.filter(l=>l.toLowerCase().indexOf(a.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(Jn,{onLoad:t,onSearch:s}),r.jsx(B,{onClick:()=>e==null?void 0:e.reset(),text:"Reset"}),r.jsx(Jn,{onLoad:o,onSearch:s,value:"Ben Badger"}),r.jsx(B,{onClick:()=>n==null?void 0:n.reset(),text:"Reset"})]})},IV=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,D5=()=>r.jsxs(k,{code:"reset",Component:PV,Source:IV,children:[r.jsxs("p",{children:["You can call the ",r.jsx("code",{children:"reset"})," method on the search object to reset the search.  Note that it will be reset to the original state, so if an initial value was provided to the component then that will be restored.  Use the ",r.jsx("code",{children:"clear"})," method if you want to clear the input instead."]}),r.jsx("p",{children:'Try changing the values in the search components below.  Clicking on the first reset button will reset the first component to a blank state. Clicking on the second reset button will reset the second component to its original state, containing the value "Ben Badger".'})]}),zV=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),FV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(T5,{}),r.jsxs(Fe,{tocName:"search",children:[r.jsx(oe,{title:"Properties"}),r.jsx(R5,{}),r.jsx(O5,{}),r.jsx(E5,{}),r.jsx(N5,{}),r.jsx(oe,{title:"Functions"}),r.jsx(k5,{}),r.jsx(D5,{})]})]}),UV=Object.freeze(Object.defineProperty({__proto__:null,default:FV},Symbol.toStringTag,{value:"Module"})),VV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],HV=()=>r.jsx(rn,{options:VV}),WV=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,L5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(te,{Component:HV,code:WV}),r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]}),r.jsx(c5,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),ZV=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),KV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],YV=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(rn,{options:KV,displayOption:e})},GV=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,B5=()=>r.jsx(k,{code:"displayOption",Component:YV,Source:GV,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),qV=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),QV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],XV=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(rn,{options:QV,displayValue:e})},JV=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,$5=()=>r.jsx(k,{code:"displayValue",Component:XV,Source:JV,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),eH=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),tH=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],nH=()=>r.jsx(rn,{options:tH}),rH=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,A5=()=>r.jsxs(k,{code:"options",Component:nH,Source:rH,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(Ft,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(Ft,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(Ft,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),oH=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),sH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],aH=()=>r.jsx(rn,{search:!0,options:sH}),lH=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,iH=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],cH=()=>r.jsx(rn,{search:!0,options:iH}),dH=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,M5=()=>r.jsxs(z,{code:"search",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",r.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),r.jsxs("p",{children:["Try entering ",r.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",r.jsx("code",{children:"aa"})," ","(e.g all the ",r.jsx("b",{children:"Aa"}),"rdvarks) and ",r.jsx("code",{children:"an"})," (Al",r.jsx("b",{children:"an"})," Aardvark,"," ",r.jsx("b",{children:"An"}),"ne Aardvark and Bri",r.jsx("b",{children:"an"})," Badger)."]})]}),r.jsx(te,{Component:aH,code:lH}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["If the ",r.jsx("code",{children:"options"})," are an array of objects then it will look for a ",r.jsx("code",{children:"search"}),", ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"}),","," ",r.jsx("code",{children:"name"})," or ",r.jsx("code",{children:"value"})," property in each object and use that."]})}),r.jsx(te,{Component:cH,code:dH})]}),uH=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),pH=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],hH=(e,t)=>{const n=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().indexOf(n)>=0||o.department.toLowerCase().indexOf(n)>=0)},mH=e=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:"smaller",children:e.department})]}),fH=()=>r.jsx(rn,{search:!0,options:pH,searchOptions:hH,displayOption:mH}),xH=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,P5=()=>r.jsxs(k,{code:"searchOptions",Component:fH,Source:xH,expand:!0,children:[r.jsxs("p",{children:["You can define your own ",r.jsx("code",{children:"searchOptions"})," function to search through the ",r.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),r.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",r.jsx("code",{children:"name"})," or their ",r.jsx("code",{children:"department"}),". Try entering ",r.jsx("code",{children:"an"}),".  It will match Al",r.jsx("b",{children:"an"}),", and ",r.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",r.jsx("b",{children:"an"}),"agement."]})]}),gH=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),vH=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],bH=()=>r.jsx(rn,{validOption:e=>!e.isFruit,options:vH}),jH=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,I5=()=>r.jsxs(k,{code:"validOption",Component:bH,Source:jH,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),yH=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),SH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],CH=()=>r.jsx(rn,{options:SH,value:"Bobby Badger"}),wH=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,_H=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],TH=()=>r.jsx(rn,{options:_H,value:5}),kH=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,z5=()=>r.jsxs(z,{code:"value",children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),r.jsx(te,{Component:CH,code:wH,caption:"value",expand:!1}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]})}),r.jsx(te,{Component:TH,code:kH,caption:"value",expand:!1})]}),EH=Object.freeze(Object.defineProperty({__proto__:null,default:z5},Symbol.toStringTag,{value:"Module"})),NH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(L5,{}),r.jsxs(Fe,{tocName:"select",children:[r.jsx(oe,{title:"Properties"}),r.jsx(A5,{}),r.jsx(z5,{}),r.jsx(B5,{}),r.jsx($5,{}),r.jsx(I5,{}),r.jsx(M5,{}),r.jsx(P5,{}),r.jsx(z,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(z,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(z,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(z,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(z,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(z,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(xo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Event Handlers"}),r.jsxs(z,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(z,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(z,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(z,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(z,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(z,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(z,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(z,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"CSS Classes"}),r.jsxs(z,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(z,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(z,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(z,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(z,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(z,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Components"}),r.jsx(z,{code:"Content",children:"Renders the content of the select component."}),r.jsx(z,{code:"Input",children:"Renders the input field."}),r.jsx(z,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(z,{code:"Option",children:"Renders an individual option."}),r.jsx(z,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),RH=Object.freeze(Object.defineProperty({__proto__:null,default:NH},Symbol.toStringTag,{value:"Module"})),z1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],OH=()=>{const[e,t]=X.useState(!1),[n,o]=X.useState(z1),s=i=>{o(i),t(!0)},a=()=>{o(z1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(tO,{items:n,Item:l,setOrder:s})})]})},DH=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,F5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(te,{Component:OH,code:DH})]}),LH=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),F1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],BH=()=>{const[e,t]=X.useState(!1),[n,o]=X.useState(F1),s=i=>{o(i),t(!0)},a=()=>{o(F1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(Kh,{items:n,Item:l,setOrder:s})})]})},$H=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,U5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(te,{Component:BH,code:$H})]}),AH=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),U1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],MH=()=>{const[e,t]=X.useState(!1),[n,o]=X.useState(U1),s=i=>{o(i),t(!0)},a=()=>{o(U1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:a})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(P3,{items:n,Item:l,setOrder:s})})]})},PH=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,V5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(te,{Component:MH,code:PH})]}),IH=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),zH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(U5,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(V5,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(F5,{}),r.jsx(Fe,{tocName:"sortable",children:r.jsx(xo,{children:r.jsxs("div",{className:"flow",children:[r.jsx(oe,{title:"Properties"}),r.jsxs(z,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(z,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(z,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),FH=Object.freeze(Object.defineProperty({__proto__:null,default:zH},Symbol.toStringTag,{value:"Module"})),UH=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(Z,{}),r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange",fill:!0}),r.jsx(Z,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(Z,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(Z,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),VH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,H5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(te,{Component:UH,code:VH,expand:!0})]}),HH=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),WH=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),ZH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,W5=()=>r.jsx(k,{code:"bgColor",Component:WH,Source:ZH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),KH=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),YH=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),GH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,Z5=()=>r.jsx(k,{code:"bgFill",Component:YH,Source:GH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),qH=Object.freeze(Object.defineProperty({__proto__:null,default:Z5},Symbol.toStringTag,{value:"Module"})),QH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(Z,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(Z,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),XH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,K5=()=>r.jsx(k,{code:"bgFillStop",Component:QH,Source:XH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),JH=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),eW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:!1}),r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"square40"}),r.jsx(Z,{bgIcon:"square30"}),r.jsx(Z,{bgIcon:"square20"}),r.jsx(Z,{bgIcon:"square10"}),r.jsx(Z,{bgIcon:"square"})]}),tW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Y5=()=>r.jsx(k,{code:"bgIcon",Component:eW,Source:tW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(Ft,{text:"shrink"})," property."]})}),nW=Object.freeze(Object.defineProperty({__proto__:null,default:Y5},Symbol.toStringTag,{value:"Module"})),rW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinnest"})]}),oW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,G5=()=>r.jsxs(k,{code:"bgStroke",Component:rW,Source:oW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),sW=Object.freeze(Object.defineProperty({__proto__:null,default:G5},Symbol.toStringTag,{value:"Module"})),aW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),lW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,q5=()=>r.jsx(k,{code:"bgStrokeStop",Component:aW,Source:lW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),iW=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),cW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange"}),r.jsx(Z,{color:"yellow"}),r.jsx(Z,{color:"green"})]}),dW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Q5=()=>r.jsxs(k,{code:"color",Component:cW,Source:dW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),uW=Object.freeze(Object.defineProperty({__proto__:null,default:Q5},Symbol.toStringTag,{value:"Module"})),pW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,color:"red"}),r.jsx(Z,{fill:!0,color:"orange"}),r.jsx(Z,{fill:!0,color:"yellow"}),r.jsx(Z,{fill:!0,color:"green"})]}),hW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,X5=()=>r.jsx(k,{code:"fill",Component:pW,Source:hW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),mW=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),fW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(Z,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(Z,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(Z,{fill:!0,fillStop:80,fillStopDark:10})]}),xW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,J5=()=>r.jsx(k,{code:"fillStop",Component:fW,Source:xW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),gW=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),vW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{icon:"rotate"}),r.jsx(Z,{icon:"asterisk"}),r.jsx(Z,{icon:"arrow"})]}),bW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,e6=()=>r.jsx(k,{code:"icon",Component:vW,Source:bW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),jW=Object.freeze(Object.defineProperty({__proto__:null,default:e6},Symbol.toStringTag,{value:"Module"})),yW=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(Z,{}),r.jsx(Z,{reverse:!0})]}),SW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,t6=()=>r.jsx(k,{code:"reverse",Component:yW,Source:SW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),CW=Object.freeze(Object.defineProperty({__proto__:null,default:t6},Symbol.toStringTag,{value:"Module"})),wW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"circle",shrink:6}),r.jsx(Z,{bgIcon:"circle",shrink:7}),r.jsx(Z,{bgIcon:"circle",shrink:8})]}),_W=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,n6=()=>r.jsx(k,{code:"shrink",Component:wW,Source:_W,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(Ft,{text:"bgIcon"})," is set, otherwise it is 0."]})}),TW=Object.freeze(Object.defineProperty({__proto__:null,default:n6},Symbol.toStringTag,{value:"Module"})),kW=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(Z,{size:"x3"}),r.jsx(Z,{size:"x5"}),r.jsx(Z,{size:"x8"})]}),EW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,r6=()=>r.jsxs(k,{code:"size",Component:kW,Source:EW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),NW=Object.freeze(Object.defineProperty({__proto__:null,default:r6},Symbol.toStringTag,{value:"Module"})),RW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{stroke:"thinnest"}),r.jsx(Z,{stroke:"thinner"}),r.jsx(Z,{stroke:"thin"}),r.jsx(Z,{}),r.jsx(Z,{stroke:"thick"}),r.jsx(Z,{stroke:"thicker"}),r.jsx(Z,{stroke:"thickest"}),r.jsx(Z,{stroke:!1,fill:!0})]}),OW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,o6=()=>r.jsxs(k,{code:"stroke",Component:RW,Source:OW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(Ft,{text:"fill"}),")"]})]}),DW=Object.freeze(Object.defineProperty({__proto__:null,default:o6},Symbol.toStringTag,{value:"Module"})),LW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{strokeStop:20,strokeStopDark:80}),r.jsx(Z,{strokeStop:50,strokeStopDark:50}),r.jsx(Z,{strokeStop:80,strokeStopDark:20})]}),BW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,s6=()=>r.jsx(k,{code:"strokeStop",Component:LW,Source:BW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),$W=Object.freeze(Object.defineProperty({__proto__:null,default:s6},Symbol.toStringTag,{value:"Module"})),AW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx(H5,{}),r.jsxs(Fe,{tocName:"spinner",children:[r.jsx(oe,{title:"Properties"}),r.jsx(r6,{}),r.jsx(t6,{}),r.jsx(n6,{}),r.jsx(e6,{}),r.jsx(Q5,{}),r.jsx(o6,{}),r.jsx(s6,{}),r.jsx(X5,{}),r.jsx(J5,{}),r.jsx(Y5,{}),r.jsx(W5,{}),r.jsx(G5,{}),r.jsx(q5,{}),r.jsx(Z5,{}),r.jsx(K5,{})]})]}),MW=Object.freeze(Object.defineProperty({__proto__:null,default:AW},Symbol.toStringTag,{value:"Module"})),PW=()=>{const e=[{text:"One",content:"This is one"},{text:"Two",content:"This is two"},{text:"Three",content:"This is three"},{text:"Four",disabled:!0}];return r.jsx(mt,{lined:!0,tabs:e})},IW=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,a6=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Tabset"})," component renders a selectable set of tabs."]}),r.jsx(te,{Component:PW,code:IW})]}),zW=Object.freeze(Object.defineProperty({__proto__:null,default:a6},Symbol.toStringTag,{value:"Module"})),FW=()=>r.jsx(mt,{solid:!0,lined:!0,center:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),UW=`import React from 'react'
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

export default TabsetExample`,l6=()=>r.jsx(k,{code:"center",Component:FW,Source:UW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"center"})," property can be added to center align the tabs."]})}),VW=Object.freeze(Object.defineProperty({__proto__:null,default:l6},Symbol.toStringTag,{value:"Module"})),HW=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(mt,{lined:!0,solid:!0,tabs:e}),r.jsx(mt,{lined:!0,solid:!0,tabs:e,color:"brand"}),r.jsx(mt,{lined:!0,solid:!0,tabs:e,color:"orange"}),r.jsx(mt,{lined:!0,solid:!0,tabs:e,color:"teal"}),r.jsx(mt,{lined:!0,solid:!0,tabs:e,color:"violet"})]})},WW=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,i6=()=>r.jsx(k,{code:"color",Component:HW,Source:WW,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range for the tabs."]})}),ZW=Object.freeze(Object.defineProperty({__proto__:null,default:i6},Symbol.toStringTag,{value:"Module"})),KW=()=>r.jsx(mt,{lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),YW=`import React from 'react'
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

export default TabsetExample`,c6=()=>r.jsx(k,{code:"lined",Component:KW,Source:YW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a line under the tabs."]})}),GW=Object.freeze(Object.defineProperty({__proto__:null,default:c6},Symbol.toStringTag,{value:"Module"})),qW=()=>r.jsx(mt,{solid:!0,lined:!0,right:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),QW=`import React from 'react'
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

export default TabsetExample`,d6=()=>r.jsx(k,{code:"right",Component:qW,Source:QW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can be added to right align the tabs."]})}),XW=Object.freeze(Object.defineProperty({__proto__:null,default:d6},Symbol.toStringTag,{value:"Module"})),JW=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(mt,{lined:!0,solid:!0,tabs:e}),r.jsx(mt,{lined:!0,solid:!0,tabs:e,size:"smaller"}),r.jsx(mt,{lined:!0,solid:!0,tabs:e,size:"larger"})]})},eZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,u6=()=>r.jsx(k,{code:"size",Component:JW,Source:eZ,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size of the tabs."]})}),tZ=Object.freeze(Object.defineProperty({__proto__:null,default:u6},Symbol.toStringTag,{value:"Module"})),nZ=()=>r.jsxs(r.Fragment,{children:[r.jsx(mt,{solid:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),r.jsx(mt,{solid:!0,lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]})]}),rZ=`import React from 'react'
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

export default TabsetExample`,p6=()=>r.jsx(k,{code:"solid",Component:nZ,Source:rZ,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"solid"})," property can be used to render the tabs using solid colors.  It can be used in conjunction with ",r.jsx("code",{children:"lined"}),"."]})}),oZ=Object.freeze(Object.defineProperty({__proto__:null,default:p6},Symbol.toStringTag,{value:"Module"})),sZ=()=>r.jsx(mt,{storageKey:"badger-tabset-demo",lined:!0,solid:!0,color:"orange",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),aZ=`import React from 'react'
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

export default TabsetExample`,h6=()=>r.jsxs(k,{code:"storageKey",Component:sZ,Source:aZ,expand:!0,undent:2,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"}),` property can be used to define a key for the tab state to be stored in local storage.  Try selecting the "Eleven" tab (it's one louder) in the example below and then reload the page.  You should see the tab selection preserved.`]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," should usually be unique for each tabset in your web site.  e.g. a tabset on your home page could use"," ",r.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',r.jsx("code",{children:"contact-tabs"}),"."]})]}),lZ=Object.freeze(Object.defineProperty({__proto__:null,default:h6},Symbol.toStringTag,{value:"Module"})),iZ=({tab:e})=>r.jsxs("div",{className:"border pad-2 mar-t-2",children:["This is a component for rendering ",e.otherData]}),cZ=()=>{const e=[{text:"One",iconLeft:"asterisk",content:"This is one"},{text:"Two",iconRight:"cog",content:r.jsx("div",{className:"border pad-2 mar-t-2",children:"This is two"})},{icon:"heart",otherData:"the heart tab",Component:iZ},{icon:"thumb-down",disabled:!0}];return r.jsx(mt,{lined:!0,tabs:e})},dZ=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,m6=()=>r.jsxs(k,{code:"tabs",Component:cZ,Source:dZ,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"tabs"})," property should be used to define an array of objects containing properties for each tab.  This can include ",r.jsx("code",{children:"text"})," for the tab text, ",r.jsx("code",{children:"icon"})," for a tab icon, ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," for icons to appear either side of the text, and ",r.jsx("code",{children:"disabled"})," to disable the tab"]}),r.jsxs("p",{children:["A ",r.jsx("code",{children:"content"})," property can be defined containing the content that should be rendered when the tab is select. Alternately you can provide a ",r.jsx("code",{children:"Component"})," which should be a React component. This will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]}),uZ=Object.freeze(Object.defineProperty({__proto__:null,default:m6},Symbol.toStringTag,{value:"Module"})),pZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Tabset"}),r.jsx(a6,{}),r.jsxs(Fe,{tocName:"tabset",children:[r.jsx(oe,{title:"Properties"}),r.jsx(m6,{}),r.jsx(h6,{}),r.jsx(c6,{}),r.jsx(p6,{}),r.jsx(i6,{}),r.jsx(u6,{}),r.jsx(l6,{}),r.jsx(d6,{}),r.jsxs(z,{code:"tabsetClass",children:["The CSS class added to the tabset container.  This defaults to ",r.jsx("code",{children:"tabset"}),"."]}),r.jsxs(z,{code:"tabsClass",children:["The CSS class added to the tabs list.  This defaults to ",r.jsx("code",{children:"tabs"}),"."]}),r.jsxs(z,{code:"activeClass",children:["The CSS class added to the active tab.  This defaults to ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"disabledClass",children:["The CSS class added to a disabled active tab.  This defaults to ",r.jsx("code",{children:"disabled"}),"."]}),r.jsx(z,{code:"className",children:"An additional CSS class to be added to the tabset container.  Use this for applying additional margin utility classes, for example."}),r.jsx(z,{code:"bodyClass",children:"A CSS class to be added to the body container."}),r.jsxs(z,{code:"Body",children:["A component to render the body for each tab.  It will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]})]}),hZ=Object.freeze(Object.defineProperty({__proto__:null,default:pZ},Symbol.toStringTag,{value:"Module"})),mZ=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,fZ="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",xZ="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",gZ=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,vZ=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,bZ=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(Vn,{code:mZ,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(xo,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(Vn,{code:fZ,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(xo,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(Vn,{code:xZ,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(Vn,{code:gZ,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(Vn,{code:vZ,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),jZ=Object.freeze(Object.defineProperty({__proto__:null,default:bZ},Symbol.toStringTag,{value:"Module"})),yZ=()=>{const[e,t]=Yc({badgers:3,ferrets:2,stoats:1});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Hd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Hd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Hd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{className:"text-right",children:e.badgers+e.ferrets+e.stoats})]})]})})},Hd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:r.jsxs("div",{className:"flex space",children:[e,r.jsx(sr,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})}),r.jsx("td",{className:"text-right",children:t})]}),SZ=`import React from 'react'
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

export default UseComplexStateExample`,f6=()=>r.jsxs(k,{title:"Setter Functions",Component:yZ,Source:SZ,children:[r.jsx("p",{children:"The setter functions can be passed a function which will receive the current value and should return the modified value."}),r.jsxs("p",{children:["In this example we modify the ",r.jsx("code",{children:"Row"})," component to add buttons to increment and decrement the current value."]})]}),CZ=Object.freeze(Object.defineProperty({__proto__:null,default:f6},Symbol.toStringTag,{value:"Module"})),wZ=()=>{const[e,t]=Yc({badgers:3,ferrets:2,stoats:1},{onChange:n=>({...n,total:n.badgers+n.ferrets+n.stoats})});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Wd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Wd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Wd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{className:"text-right",children:e.total})]})]})})},Wd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:r.jsxs("div",{className:"flex space",children:[e,r.jsx(sr,{color:"orange",outline:!0,buttons:[{icon:"minus",onClick:()=>n(o=>o-1)},{icon:"plus",onClick:()=>n(o=>o+1)}]})]})}),r.jsx("td",{className:"text-right",children:t})]}),_Z=`import React from 'react'
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

export default UseComplexStateExample`,x6=()=>r.jsxs(k,{code:"onChange",Component:wZ,Source:_Z,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"useComplexState()"})," function can be passed a second argument with additional configuration options.  These can include an ",r.jsx("code",{children:"onChange"})," handler which will be called any time a state variable is modified.  It will be passed a copy of the modified state.  It can make any further changes to the state before returning it."]}),r.jsxs("p",{children:["In this example we provide an ",r.jsx("code",{children:"onChange"})," handler to calculate the total number of animals.  Note that the handler will be called when the state is initially defined.  This ensures that the ",r.jsx("code",{children:"total"})," state value is always defined, even before we click on any buttons to change a number."]})]}),TZ=Object.freeze(Object.defineProperty({__proto__:null,default:x6},Symbol.toStringTag,{value:"Module"})),g6=()=>{const[e,t]=Yc({badgers:3,ferrets:2,stoats:1});return r.jsx("table",{className:"wide celled shaded",children:r.jsxs("tbody",{children:[r.jsx(Zd,{caption:"Badgers",value:e.badgers,setter:t.setBadgers}),r.jsx(Zd,{caption:"Ferrets",value:e.ferrets,setter:t.setFerrets}),r.jsx(Zd,{caption:"Stoats",value:e.stoats,setter:t.setStoats}),r.jsxs("tr",{children:[r.jsx("th",{children:"Total"}),r.jsx("td",{children:e.badgers+e.ferrets+e.stoats})]})]})})},Zd=({caption:e,value:t,setter:n})=>r.jsxs("tr",{children:[r.jsx("th",{children:e}),r.jsx("td",{children:r.jsx("input",{type:"number",value:t,onChange:o=>n(parseInt(o.target.value))})})]}),kZ=Object.freeze(Object.defineProperty({__proto__:null,default:g6},Symbol.toStringTag,{value:"Module"})),EZ=`import { useComplexState } from '@/src/index.jsx'

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


export default UseComplexStateExample`,NZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"useComplexState"}),r.jsxs("p",{className:"large",children:["This hook is a wrapper around ",r.jsx("code",{children:"React.useState"})," which can be used to maintain a complex state object."]}),r.jsxs("p",{children:["Call the"," ",r.jsx("code",{children:"useComplexState()"})," function passing it an object containing one or more key/values pairs.  It will return an array of"," ",r.jsx("code",{children:"[state, setters]"}),", where the ",r.jsx("code",{children:"state"})," contains the current state, starting with the values you supplied, and the"," ",r.jsx("code",{children:"setters"})," is an object containing setter functions for each item in the state."]}),r.jsxs("p",{children:["If you provide an item in the state called ",r.jsx("code",{children:"badgers"}),", for example, then the corresponding setter function will be called"," ",r.jsx("code",{children:"setBadgers"}),"."]}),r.jsx(te,{Component:g6,code:EZ}),r.jsxs(Fe,{tocName:"useComplexState",children:[r.jsx(f6,{}),r.jsx(x6,{})]})]}),RZ=Object.freeze(Object.defineProperty({__proto__:null,default:NZ},Symbol.toStringTag,{value:"Module"})),OZ=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),DZ=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),LZ=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(OZ,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(DZ,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),BZ=Object.freeze(Object.defineProperty({__proto__:null,default:LZ},Symbol.toStringTag,{value:"Module"})),$Z=()=>{const e={Select:{placeholder:"Pick one"},Button:{color:"green",iconRight:"check"},Spinner:{color:"violet",icon:"star"}};return r.jsxs(Ug.Provider,{...e,children:[r.jsx(rn,{options:[{value:10,text:"ten"},{value:11,text:"eleven"}]}),r.jsxs("div",{className:"flex space middle mar-t-2",children:[r.jsx(B,{text:"OK"}),r.jsx(Z,{size:"larger"}),r.jsx(B,{text:"Not OK",color:"red",iconRight:"thumb-down"})]})]})},AZ=`import { Theme, Select, Button, Spinner } from '@/src/index.jsx'

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

export default BorderClassExamples`,MZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Theming"}),r.jsxs("p",{className:"large",children:["The components can be themed using"," ",r.jsx("a",{href:"https://abw.github.io/react-one-louder/",children:"react-one-louder"}),"."]}),r.jsxs("p",{children:["This allows you to define a theme that provides default properties for the various components in the library. Import the ",r.jsx("code",{children:"Theme"})," component and define a"," ",r.jsx("code",{children:"Theme.Provider"})," around your app or a section of it. Pass it your theme configuration as its properties."]}),r.jsxs("p",{children:["Any components rendered inside the provider context will use the default properties that you have defined.  In the example below we set the default ",r.jsx("code",{children:"placeholder"})," for the ",r.jsx("code",{children:"Select"})," ","component, and default ",r.jsx("code",{children:"color"})," and ",r.jsx("code",{children:"iconRight"})," properties for the ",r.jsx("code",{children:"Button"})," component. These are only default values and can be overridden by providing a component with specific values, as shown for the second button in the example."]}),r.jsx(te,{Component:$Z,code:AZ,expand:!0})]}),PZ=Object.freeze(Object.defineProperty({__proto__:null,default:MZ},Symbol.toStringTag,{value:"Module"})),Kd=({border:e})=>{const t=Co(e);return r.jsx("div",{className:t,children:t})},IZ=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(Kd,{}),r.jsx(Kd,{border:!0}),r.jsx(Kd,{border:2})]}),zZ=`import { borderClass } from '@/src/index.jsx'

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

export default BorderClassExamples`,v6=()=>r.jsx(k,{code:"borderClass",Component:IZ,Source:zZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"borderClass"})," utility function can be used to construct a CSS class for adding a border.  If the argument is a true value then it will return the ",r.jsx("code",{children:"border"})," CSS class.  If the value is a number then it will add the corresponding ",r.jsx("code",{children:"bdw-N"})," class to set the border width."]})}),FZ=Object.freeze(Object.defineProperty({__proto__:null,default:v6},Symbol.toStringTag,{value:"Module"})),UZ=()=>r.jsxs("div",{children:[r.jsx("div",{children:fe("foo","bar","baz")}),r.jsx("div",{children:fe("foo",null,"bar",void 0,"baz")}),r.jsx("div",{children:fe("foo",{active:!1,example:!0})})]}),VZ=`import { classes } from '@/src/index.jsx'

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

export default ClassesExamples`,b6=()=>r.jsxs(k,{code:"classes",Component:UZ,Source:VZ,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"classes"})," utility function can be used to construct a single CSS class string from various input values."]}),r.jsx("p",{children:"Any null or undefined values will be ignored. If any argument is an object then the keys in the object will be included if the corresponding value is truthy."})]}),HZ=Object.freeze(Object.defineProperty({__proto__:null,default:b6},Symbol.toStringTag,{value:"Module"})),ea=({color:e})=>{const t=Dh(e);return r.jsxs("div",{className:`pad-4 border bdc-50 ${t}`,children:["colorClass: ",t]})},WZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(ea,{}),r.jsx(ea,{color:"red"}),r.jsx(ea,{color:"red-50"}),r.jsx(ea,{color:"red-20-80"}),r.jsx(ea,{color:"red-20-80-80-20"})]}),ZZ=`import { colorClass } from '@/src/index.jsx'

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

export default ColorClassExamples`,j6=()=>r.jsx(k,{code:"colorClass",Component:WZ,Source:ZZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"colorClass"})," utility function can be used to construct a CSS class for defining colors.  The format for the argument is a color range name optionally followed by one to four color stop numbers, separated by hyphens.  The first number is the foreground color stop, used to add an ",r.jsx("code",{children:"fgc-N"})," CSS class. The second in the background color stop, adding a ",r.jsx("code",{children:"bgc-N"})," class.  The third and fourth numbers are the foreground and background color stops in dark mode, adding "," ",r.jsx("code",{children:"fgd-N"})," and ",r.jsx("code",{children:"bgd-N"})," classes respectively."]})}),KZ=Object.freeze(Object.defineProperty({__proto__:null,default:j6},Symbol.toStringTag,{value:"Module"})),Bo=({margin:e})=>{const t=n3(e);return r.jsx("div",{className:"bgc-50",children:r.jsxs("div",{className:`border bgc-90 ${t}`,children:["marginClass: ",t]})})},YZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Bo,{}),r.jsx(Bo,{margin:!0}),r.jsx(Bo,{margin:2}),r.jsx(Bo,{margin:"h-4"}),r.jsx(Bo,{margin:"2 4"}),r.jsx(Bo,{margin:"1 2 3 4"})]}),GZ=`import { marginClass } from '@/src/index.jsx'

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

export default MarginClassExamples`,y6=()=>r.jsx(k,{code:"marginClass",Component:YZ,Source:GZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"marginClass"})," utility function can be used to construct a CSS class for adding padding.  It works in the same way as ",r.jsx("code",{children:"paddingClass"}),"."]})}),qZ=Object.freeze(Object.defineProperty({__proto__:null,default:y6},Symbol.toStringTag,{value:"Module"})),$o=({padding:e})=>{const t=t3(e);return r.jsxs("div",{className:`border ${t}`,children:["paddingClass: ",t]})},QZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx($o,{}),r.jsx($o,{padding:!0}),r.jsx($o,{padding:2}),r.jsx($o,{padding:"h-4"}),r.jsx($o,{padding:"2 4"}),r.jsx($o,{padding:"1 2 3 4"})]}),XZ=`import { paddingClass } from '@/src/index.jsx'

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

export default PaddingClassExamples`,S6=()=>r.jsxs(k,{code:"paddingClass",Component:QZ,Source:XZ,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"paddingClass"})," utility function can be used to construct a CSS class for adding padding.  If the value is true then the"," ",r.jsx("code",{children:"pad"})," CSS class will be returned, adding a single unit (0.25rem) of padding to all sides of the element."]}),r.jsxs("p",{children:["If the value contains two whitespace delimited values then they are assumed to be vertical and horizontal padding values and a class of the form ",r.jsx("code",{children:"pad-v-N pad-h-N"})," will be returned."]}),r.jsxs("p",{children:["If the value contains four whitespace delimited values then they are assumed to be padding values for the top, right, bottom and left edges. A CSS class of the form ",r.jsx("code",{children:"pad-t-N pad-r-N pad-b-N pad-l-N"})," will be returned."]}),r.jsxs("p",{children:["In any other case the value will be prepended by ",r.jsx("code",{children:"pad-"}),". A null or undefine value will return nothing."]})]}),JZ=Object.freeze(Object.defineProperty({__proto__:null,default:S6},Symbol.toStringTag,{value:"Module"})),ui=({radius:e})=>{const t=_s(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["radiusClass: ",t]})},eK=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(ui,{}),r.jsx(ui,{radius:1}),r.jsx(ui,{radius:2}),r.jsx(ui,{radius:4})]}),tK=`import { radiusClass } from '@/src/index.jsx'

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

export default RadiusClassExamples`,C6=()=>r.jsx(k,{code:"radiusClass",Component:eK,Source:tK,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radiusClass"})," utility function can be used to construct a CSS class for adding a border radius.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"bdr-N"})," class to set the border radius."]})}),nK=Object.freeze(Object.defineProperty({__proto__:null,default:C6},Symbol.toStringTag,{value:"Module"})),pi=({shadow:e})=>{const t=ws(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["shadowClass: ",t]})},rK=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(pi,{}),r.jsx(pi,{shadow:1}),r.jsx(pi,{shadow:2}),r.jsx(pi,{shadow:4})]}),oK=`import { shadowClass } from '@/src/index.jsx'

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

export default ShadowClassExamples`,w6=()=>r.jsx(k,{code:"shadowClass",Component:rK,Source:oK,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadowClass"})," utility function can be used to construct a CSS class for adding a box shadow.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"shadow-N"})," class to set the box shadow."]})}),sK=Object.freeze(Object.defineProperty({__proto__:null,default:w6},Symbol.toStringTag,{value:"Module"})),hi=e=>{const t=pw(e);return r.jsxs("div",{...t,children:["styleProps: ",JSON.stringify(t)]})},aK=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(hi,{}),r.jsx(hi,{size:"large"}),r.jsx(hi,{color:"red-50"}),r.jsx(hi,{className:"my-special-class",color:"red",border:!0,radius:2,shadow:2,padding:"2 4"})]}),lK=`import { styleProps } from '@/src/index.jsx'

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

export default StylePropsExamples`,_6=()=>r.jsxs(k,{code:"styleProps",Component:aK,Source:lK,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"styleProps"})," utility function can be used to extract any of the above style properties and generate the corresponding CSS class as the ",r.jsx("code",{children:"className"})," property.  Any other properties will be passed through."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"padding"})," and ",r.jsx("code",{children:"margin"})," properties may be abbreviated to ",r.jsx("code",{children:"pad"})," and ",r.jsx("code",{children:"mar"})," respectively."]})]}),iK=Object.freeze(Object.defineProperty({__proto__:null,default:_6},Symbol.toStringTag,{value:"Module"})),cK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"CSS Classes"}),r.jsxs(Fe,{tocName:"classes",children:[r.jsx(b6,{}),r.jsx(v6,{}),r.jsx(C6,{}),r.jsx(w6,{}),r.jsx(j6,{}),r.jsx(S6,{}),r.jsx(y6,{}),r.jsx(_6,{})]})]}),dK=Object.freeze(Object.defineProperty({__proto__:null,default:cK},Symbol.toStringTag,{value:"Module"})),uK=()=>{const e=Ah("unique-key"),[t,n]=X.useState(e.get("form-values")),[o,s]=X.useState(),a=c=>{s(c),Ir(3e3).then(()=>s(null))},l=c=>(e.set("form-values",c),a("Form values have been stored in local storage"),{ok:!0}),i=()=>{e.delete("form-values"),n(null),a("Form values have been removed from local storage")};return r.jsxs("div",{children:[r.jsxs(ar,{values:t,onSubmit:l,onReset:i,children:[r.jsx(at,{name:"name",label:"Your name"}),r.jsx(at,{name:"email",label:"Your email address"}),r.jsxs("div",{className:"flex space",children:[r.jsx(c0,{color:"grey outline",text:"Clear",iconRight:"cross"}),r.jsx(Sl,{color:"green",text:"Save",iconRight:"check"})]})]}),o&&r.jsx(Xo,{text:o,className:"mar-t-4"})]})},pK=`import { Storage, Form, Field, Reset, Submit, Success } from '@/src/index.jsx'

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

export default StorageExample`,T6=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Storage"})," utility can be used to manage local storage to persist UI options or other data."]}),r.jsxs("p",{children:["Call the ",r.jsx("code",{children:"Storage"})," function with a unique key to create a local store.  Then call the ",r.jsx("code",{children:"get"})," method on that object to fetch an item from the store, ",r.jsx("code",{children:"set"})," to set the value for an item or ",r.jsx("code",{children:"delete"})," to delete an item from the store."]}),r.jsx("p",{children:"Store values can be complex data which will be automatically converted to and from JSON."}),r.jsx("p",{children:"Enter some details in the form below and click on the save button. The form values will then be stored in local storage.  Reload the browser page and you should see the values persist."}),r.jsx(te,{Component:uK,code:pK,expand:!0})]}),hK=Object.freeze(Object.defineProperty({__proto__:null,default:T6},Symbol.toStringTag,{value:"Module"})),mK=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Storage"}),r.jsx(T6,{})]}),fK=Object.freeze(Object.defineProperty({__proto__:null,default:mK},Symbol.toStringTag,{value:"Module"})),k6=({path:e,onClick:t,width:n=512,height:o=512,style:s,className:a="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:a,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),xK=e=>r.jsx(k6,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),E6=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:s,captionStyle:a,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:s,className:o}),!!t&&r.jsx("div",{className:i,style:a,children:t})]}),gK=e=>{const{setDark:t}=kl();return r.jsx(E6,{Icon:xK,onClick:t,...e})},vK=e=>r.jsx(k6,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),bK=e=>{const{setLight:t}=kl();return r.jsx(E6,{Icon:vK,onClick:t,...e})},jK=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:s}=kl();return n?r.jsx(bK,{onClick:s,...e}):r.jsx(gK,{onClick:o,...t})},N6=v.createContext(),kl=()=>v.useContext(N6),mi="dark",Yd="light",yK="(prefers-color-scheme: dark)",Gd=()=>!1,SK=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},CK=()=>({matches:Gd,addEventListener:Gd,removeEventListener:Gd}),R6=typeof window<"u",qd=R6&&window.localStorage?window.localStorage:SK(),wK=R6&&window.matchMedia?e=>window.matchMedia(e):CK,lp=wK(yK),_K=()=>lp.matches,TK=e=>e.split(" "),V1=(e,t="")=>`${e} ${t}`,kK=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?qd.getItem(e):null,[s,a=""]=o?TK(o):[_K(),null],[l,i]=v.useState(s===mi),[c,d]=v.useState(a||t),u=S=>{i(S),e&&qd.setItem(e,V1(S?mi:Yd,c))},p=S=>{d(S),e&&qd.setItem(e,V1(l?mi:Yd,S))},f=S=>u(S.matches);v.useEffect(()=>(lp.addEventListener("change",f),()=>lp.removeEventListener("change",f)),[]);const b={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?mi:Yd,variant:c,setVariant:p};return r.jsx(N6.Provider,{value:b,children:n})},O6="0.2.4",EK="2024-04-08",H1="sidebar",NK="no-sidebar",RK=()=>{const{variant:e,setVariant:t}=kl();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(re,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===H1?NK:H1)}),r.jsx(Ln,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",O6]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(re,{name:"github",className:"mar-r-4"})}),r.jsx(jK,{})]})]})})},OK=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",O6,r.jsx("br",{}),EK]})]})}),DK=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var s,a;(a=t.current)==null||a.scrollTo({top:((s=o.ref.current)==null?void 0:s.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),LK=Cl.Consumer(DK),BK=({title:e,path:t,items:n,tocs:o})=>{const s=Tl(),a=t&&s.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:a,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=s.pathname===l.to;return r.jsxs("li",{children:[r.jsx(Ln,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(LK,{toc:o[l.tocName]})]},l.to)})})]})},ta=Cl.Consumer(BK),$K={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},AK={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/badge",text:"Badge",tocName:"badge"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"},{to:"/components/tabset",text:"Tabset",tocName:"tabset"}]},MK={title:"Utilities",path:"/utilities",items:[{to:"/utilities/classes",text:"CSS Classes",tocName:"classes"},{to:"/utilities/storage",text:"Storage",tocName:"storage"}]},PK={title:"Hooks",path:"/hooks",items:[{to:"/hooks/useComplexState",text:"useComplexState",tocName:"useComplexState"}]},IK={title:"Theming",path:"/theming",items:[{to:"/theming",text:"It's One Louder",tocName:"theming"}]},zK=()=>r.jsxs(r.Fragment,{children:[r.jsx(ta,{...$K}),r.jsx(ta,{...AK}),r.jsx(ta,{...MK}),r.jsx(ta,{...PK}),r.jsx(ta,{...IK})]});function FK(){const{pathname:e}=$s();return v.useEffect(()=>UK(document.getElementById("content")),[e]),null}function UK(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const VK=({contentRef:e})=>{const{theme:t,variant:n}=kl();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(RK,{}),r.jsxs("div",{id:"app",children:[r.jsx(FK,{}),r.jsx("aside",{children:r.jsx(zK,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(tP,{})})]}),r.jsx(OK,{})]})},HK=Cl.Consumer(VK),WK=/\/_layout$/,ZK=/\/_examples\//,KK=YK(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":bO,"../pages/components/alert/_examples/Error/index.jsx":_O,"../pages/components/alert/_examples/Info/index.jsx":EO,"../pages/components/alert/_examples/Success/index.jsx":OO,"../pages/components/alert/_examples/Warning/index.jsx":BO,"../pages/components/alert/_examples/border/index.jsx":MO,"../pages/components/alert/_examples/className/index.jsx":zO,"../pages/components/alert/_examples/color/index.jsx":VO,"../pages/components/alert/_examples/dismissable/index.jsx":ZO,"../pages/components/alert/_examples/headIcon/index.jsx":GO,"../pages/components/alert/_examples/headline/index.jsx":XO,"../pages/components/alert/_examples/icon/index.jsx":tD,"../pages/components/alert/_examples/onDismiss/index.jsx":oD,"../pages/components/alert/_examples/radius/index.jsx":lD,"../pages/components/alert/_examples/revealable/index.jsx":dD,"../pages/components/alert/_examples/revealed/index.jsx":hD,"../pages/components/alert/_examples/shadow/index.jsx":xD,"../pages/components/alert/_examples/size/index.jsx":bD,"../pages/components/alert/_examples/stripe/index.jsx":SD,"../pages/components/alert/_examples/text/index.jsx":_D,"../pages/components/alert/_examples/title/index.jsx":ED,"../pages/components/alert/_examples/type/index.jsx":OD,"../pages/components/alert/index.jsx":BD,"../pages/components/badge/_examples/Badge/index.jsx":MD,"../pages/components/badge/_examples/Content/index.jsx":zD,"../pages/components/badge/_examples/border/index.jsx":VD,"../pages/components/badge/_examples/className/index.jsx":ZD,"../pages/components/badge/_examples/color/index.jsx":GD,"../pages/components/badge/_examples/icon/index.jsx":XD,"../pages/components/badge/_examples/iconLeft/index.jsx":tL,"../pages/components/badge/_examples/iconRight/index.jsx":oL,"../pages/components/badge/_examples/radius/index.jsx":lL,"../pages/components/badge/_examples/shadow/index.jsx":dL,"../pages/components/badge/_examples/size/index.jsx":hL,"../pages/components/badge/_examples/tag/index.jsx":xL,"../pages/components/badge/_examples/text/index.jsx":bL,"../pages/components/badge/_examples/tooltip/index.jsx":SL,"../pages/components/badge/index.jsx":wL,"../pages/components/button/_examples/Button/index.jsx":kL,"../pages/components/button/_examples/Content/index.jsx":RL,"../pages/components/button/_examples/bare/index.jsx":LL,"../pages/components/button/_examples/border/index.jsx":AL,"../pages/components/button/_examples/bright/index.jsx":IL,"../pages/components/button/_examples/className/index.jsx":UL,"../pages/components/button/_examples/color/index.jsx":WL,"../pages/components/button/_examples/dark/index.jsx":YL,"../pages/components/button/_examples/disabled/index.jsx":QL,"../pages/components/button/_examples/icon/index.jsx":eB,"../pages/components/button/_examples/iconLeft/index.jsx":rB,"../pages/components/button/_examples/iconRight/index.jsx":aB,"../pages/components/button/_examples/label/index.jsx":cB,"../pages/components/button/_examples/onClick/index.jsx":pB,"../pages/components/button/_examples/outline/index.jsx":fB,"../pages/components/button/_examples/radius/index.jsx":vB,"../pages/components/button/_examples/shaded/index.jsx":yB,"../pages/components/button/_examples/shadow/index.jsx":wB,"../pages/components/button/_examples/size/index.jsx":kB,"../pages/components/button/_examples/text/index.jsx":RB,"../pages/components/button/_examples/tooltip/index.jsx":LB,"../pages/components/button/_examples/type/index.jsx":AB,"../pages/components/button/index.jsx":PB,"../pages/components/buttons/_examples/Button/index.jsx":UB,"../pages/components/buttons/_examples/Buttons/index.jsx":WB,"../pages/components/buttons/_examples/buttonClass/index.jsx":YB,"../pages/components/buttons/_examples/buttonsProp/index.jsx":QB,"../pages/components/buttons/_examples/className/index.jsx":e$,"../pages/components/buttons/_examples/outline/index.jsx":r$,"../pages/components/buttons/index.jsx":s$,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":i$,"../pages/components/checkbox/_examples/Overview/index.jsx":u$,"../pages/components/checkbox/_examples/border/index.jsx":m$,"../pages/components/checkbox/_examples/checked/index.jsx":g$,"../pages/components/checkbox/_examples/checkedText/index.jsx":j$,"../pages/components/checkbox/_examples/className/index.jsx":C$,"../pages/components/checkbox/_examples/disabled/index.jsx":T$,"../pages/components/checkbox/_examples/onChange/index.jsx":N$,"../pages/components/checkbox/_examples/text/index.jsx":D$,"../pages/components/checkbox/index.jsx":B$,"../pages/components/confirm/_examples/Overview/index.jsx":M$,"../pages/components/confirm/_examples/cancel/index.jsx":z$,"../pages/components/confirm/_examples/cancelProps/index.jsx":V$,"../pages/components/confirm/_examples/className/index.jsx":Z$,"../pages/components/confirm/_examples/color/index.jsx":G$,"../pages/components/confirm/_examples/confirm/index.jsx":X$,"../pages/components/confirm/_examples/confirmProps/index.jsx":tA,"../pages/components/confirm/_examples/iconRight/index.jsx":oA,"../pages/components/confirm/_examples/onClick/index.jsx":lA,"../pages/components/confirm/_examples/text/index.jsx":dA,"../pages/components/confirm/index.jsx":pA,"../pages/components/datatable/_examples/Datatable/index.jsx":fA,"../pages/components/datatable/_examples/color/index.jsx":vA,"../pages/components/datatable/_examples/columns/className/index.jsx":SA,"../pages/components/datatable/_examples/columns/display/index.jsx":_A,"../pages/components/datatable/_examples/columns/index.jsx":AA,"../pages/components/datatable/_examples/columns/label/index.jsx":IA,"../pages/components/datatable/_examples/columns/type/index.jsx":UA,"../pages/components/datatable/_examples/onRowClick/index.jsx":WA,"../pages/components/datatable/_examples/pager/index.jsx":_P,"../pages/components/datatable/_examples/rows/index.jsx":kP,"../pages/components/datatable/_examples/storageKey/index.jsx":RP,"../pages/components/datatable/index.jsx":DP,"../pages/components/details/_examples/Details/index.jsx":$P,"../pages/components/details/_examples/border/index.jsx":PP,"../pages/components/details/_examples/color/index.jsx":FP,"../pages/components/details/_examples/content/index.jsx":HP,"../pages/components/details/_examples/lined/index.jsx":KP,"../pages/components/details/_examples/open/index.jsx":qP,"../pages/components/details/_examples/radius/index.jsx":JP,"../pages/components/details/_examples/shaded/index.jsx":nI,"../pages/components/details/_examples/shadow/index.jsx":sI,"../pages/components/details/_examples/summary/index.jsx":iI,"../pages/components/details/index.jsx":dI,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":hI,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":xI,"../pages/components/dropdown-menu/_examples/options/index.jsx":kI,"../pages/components/dropdown-menu/index.jsx":NI,"../pages/components/dropdown/_examples/Dropdown/index.jsx":DI,"../pages/components/dropdown/_examples/content/index.jsx":$I,"../pages/components/dropdown/_examples/iconLeft/index.jsx":PI,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":FI,"../pages/components/dropdown/_examples/iconRight/index.jsx":HI,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":KI,"../pages/components/dropdown/_examples/openOnHover/index.jsx":qI,"../pages/components/dropdown/_examples/right/index.jsx":JI,"../pages/components/dropdown/_examples/text/index.jsx":nz,"../pages/components/dropdown/_examples/wide/index.jsx":sz,"../pages/components/dropdown/index.jsx":lz,"../pages/components/form/_examples/search/index.jsx":xz,"../pages/components/form/_examples/submitting/custom.jsx":vz,"../pages/components/form/_examples/submitting/defaults.jsx":jz,"../pages/components/form/_examples/submitting/index.jsx":Cz,"../pages/components/form/_examples/uiselect/index.jsx":Rz,"../pages/components/form/index.jsx":Pz,"../pages/components/icon/_examples/Icon/index.jsx":Zz,"../pages/components/icon/_examples/IconLibrary/index.jsx":Kz,"../pages/components/icon/_examples/className/index.jsx":qz,"../pages/components/icon/_examples/color/index.jsx":Jz,"../pages/components/icon/_examples/name/index.jsx":nF,"../pages/components/icon/_examples/path/index.jsx":sF,"../pages/components/icon/_examples/size/index.jsx":iF,"../pages/components/icon/index.jsx":dF,"../pages/components/modal/_examples/Modal/index.jsx":hF,"../pages/components/modal/_examples/ModalState/index.jsx":xF,"../pages/components/modal/_examples/className/index.jsx":bF,"../pages/components/modal/_examples/close/index.jsx":SF,"../pages/components/modal/_examples/closeIcon/index.jsx":_F,"../pages/components/modal/_examples/footer/index.jsx":EF,"../pages/components/modal/_examples/header/index.jsx":OF,"../pages/components/modal/_examples/text/index.jsx":BF,"../pages/components/modal/_examples/title/index.jsx":MF,"../pages/components/modal/index.jsx":IF,"../pages/components/overlay/_examples/Overlay/index.jsx":UF,"../pages/components/overlay/_examples/OverlayState/index.jsx":WF,"../pages/components/overlay/_examples/className/index.jsx":GF,"../pages/components/overlay/_examples/custom/index.jsx":XF,"../pages/components/overlay/_examples/fixed/index.jsx":tU,"../pages/components/overlay/_examples/theme/index.jsx":aU,"../pages/components/overlay/index.jsx":iU,"../pages/components/pager/_examples/Context/index.jsx":hU,"../pages/components/pager/_examples/Pager/index.jsx":xU,"../pages/components/pager/_examples/className/index.jsx":bU,"../pages/components/pager/_examples/color/index.jsx":SU,"../pages/components/pager/_examples/icons/index.jsx":_U,"../pages/components/pager/_examples/nextIcon/index.jsx":NU,"../pages/components/pager/_examples/showFirstLast/index.jsx":DU,"../pages/components/pager/_examples/size/index.jsx":$U,"../pages/components/pager/index.jsx":MU,"../pages/components/radio/_examples/Overview/index.jsx":zU,"../pages/components/radio/_examples/border/index.jsx":VU,"../pages/components/radio/_examples/className/index.jsx":ZU,"../pages/components/radio/_examples/disabled/index.jsx":GU,"../pages/components/radio/_examples/inline/index.jsx":XU,"../pages/components/radio/_examples/name/index.jsx":tV,"../pages/components/radio/_examples/onChange/index.jsx":oV,"../pages/components/radio/_examples/options/index.jsx":lV,"../pages/components/radio/_examples/value/index.jsx":dV,"../pages/components/radio/index.jsx":pV,"../pages/components/search/_examples/Search/index.jsx":xV,"../pages/components/search/_examples/clear/index.jsx":jV,"../pages/components/search/_examples/displayResult/index.jsx":wV,"../pages/components/search/_examples/displayValue/index.jsx":EV,"../pages/components/search/_examples/onSearch/index.jsx":DV,"../pages/components/search/_examples/onSelect/index.jsx":AV,"../pages/components/search/_examples/reset/index.jsx":zV,"../pages/components/search/index.jsx":UV,"../pages/components/select/_examples/Select/index.jsx":ZV,"../pages/components/select/_examples/displayOption/index.jsx":qV,"../pages/components/select/_examples/displayValue/index.jsx":eH,"../pages/components/select/_examples/options/index.jsx":oH,"../pages/components/select/_examples/search/index.jsx":uH,"../pages/components/select/_examples/searchOptions/index.jsx":gH,"../pages/components/select/_examples/validOption/index.jsx":yH,"../pages/components/select/_examples/value/index.jsx":EH,"../pages/components/select/index.jsx":RH,"../pages/components/sortable/_examples/Horizontal/index.jsx":LH,"../pages/components/sortable/_examples/Sortable/index.jsx":AH,"../pages/components/sortable/_examples/Vertical/index.jsx":IH,"../pages/components/sortable/index.jsx":FH,"../pages/components/spinner/_examples/Spinner/index.jsx":HH,"../pages/components/spinner/_examples/bgColor/index.jsx":KH,"../pages/components/spinner/_examples/bgFill/index.jsx":qH,"../pages/components/spinner/_examples/bgFillStop/index.jsx":JH,"../pages/components/spinner/_examples/bgIcon/index.jsx":nW,"../pages/components/spinner/_examples/bgStroke/index.jsx":sW,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":iW,"../pages/components/spinner/_examples/color/index.jsx":uW,"../pages/components/spinner/_examples/fill/index.jsx":mW,"../pages/components/spinner/_examples/fillStop/index.jsx":gW,"../pages/components/spinner/_examples/icon/index.jsx":jW,"../pages/components/spinner/_examples/reverse/index.jsx":CW,"../pages/components/spinner/_examples/shrink/index.jsx":TW,"../pages/components/spinner/_examples/size/index.jsx":NW,"../pages/components/spinner/_examples/stroke/index.jsx":DW,"../pages/components/spinner/_examples/strokeStop/index.jsx":$W,"../pages/components/spinner/index.jsx":MW,"../pages/components/tabset/_examples/Tabset/index.jsx":zW,"../pages/components/tabset/_examples/center/index.jsx":VW,"../pages/components/tabset/_examples/color/index.jsx":ZW,"../pages/components/tabset/_examples/lined/index.jsx":GW,"../pages/components/tabset/_examples/right/index.jsx":XW,"../pages/components/tabset/_examples/size/index.jsx":tZ,"../pages/components/tabset/_examples/solid/index.jsx":oZ,"../pages/components/tabset/_examples/storageKey/index.jsx":lZ,"../pages/components/tabset/_examples/tabs/index.jsx":uZ,"../pages/components/tabset/index.jsx":hZ,"../pages/getting-started/installation.jsx":jZ,"../pages/hooks/useComplexState/_examples/functions/index.jsx":CZ,"../pages/hooks/useComplexState/_examples/onChange/index.jsx":TZ,"../pages/hooks/useComplexState/_examples/useComplexState.jsx":kZ,"../pages/hooks/useComplexState/index.jsx":RZ,"../pages/index.jsx":BZ,"../pages/theming/index.jsx":PZ,"../pages/utilities/classes/_examples/borderClass/index.jsx":FZ,"../pages/utilities/classes/_examples/classes/index.jsx":HZ,"../pages/utilities/classes/_examples/colorClass/index.jsx":KZ,"../pages/utilities/classes/_examples/marginClass/index.jsx":qZ,"../pages/utilities/classes/_examples/paddingClass/index.jsx":JZ,"../pages/utilities/classes/_examples/radiusClass/index.jsx":nK,"../pages/utilities/classes/_examples/shadowClass/index.jsx":sK,"../pages/utilities/classes/_examples/styleProps/index.jsx":iK,"../pages/utilities/classes/index.jsx":dK,"../pages/utilities/storage/_examples/Storage/index.jsx":hK,"../pages/utilities/storage/index.jsx":fK}));function YK(e){const n=Object.entries(e).map(GK).filter(s=>!s.path.match(ZK)).reduce((s,a)=>(s[a.path]=a,s),{}),o=Object.keys(n).filter(s=>s.match(WK)).sort((s,a)=>a.length-s.length);for(let s of o){const a=n[s];delete n[s];const l=s.replace(/_layout$/,""),i=l.length;a.path=l,a.children=[];const c=n[l];c&&(delete c.path,c.index=!0,a.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",a.children.push(p)}n[l]=a}return Object.values(n)}function GK([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const qK=iP([{path:"/",element:r.jsx(HK,{}),children:KK}],{basename:"/badger-react-ui"});Qd.createRoot(document.getElementById("root")).render(r.jsx(X.StrictMode,{children:r.jsx(kK,{storageKey:"theme",children:r.jsx(Cl.Provider,{children:r.jsx(xP,{router:qK})})})}));
