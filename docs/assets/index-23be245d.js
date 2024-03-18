var i6=Object.defineProperty;var c6=(e,t,n)=>t in e?i6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ge=(e,t,n)=>(c6(e,typeof t!="symbol"?t+"":t,n),n);function C1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(o,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w1={exports:{}},qi={},_1={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),d6=Symbol.for("react.portal"),u6=Symbol.for("react.fragment"),p6=Symbol.for("react.strict_mode"),h6=Symbol.for("react.profiler"),f6=Symbol.for("react.provider"),m6=Symbol.for("react.context"),g6=Symbol.for("react.forward_ref"),x6=Symbol.for("react.suspense"),v6=Symbol.for("react.memo"),y6=Symbol.for("react.lazy"),$h=Symbol.iterator;function b6(e){return e===null||typeof e!="object"?null:(e=$h&&e[$h]||e["@@iterator"],typeof e=="function"?e:null)}var k1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T1=Object.assign,E1={};function la(e,t,n){this.props=e,this.context=t,this.refs=E1,this.updater=n||k1}la.prototype.isReactComponent={};la.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};la.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N1(){}N1.prototype=la.prototype;function Fu(e,t,n){this.props=e,this.context=t,this.refs=E1,this.updater=n||k1}var Uu=Fu.prototype=new N1;Uu.constructor=Fu;T1(Uu,la.prototype);Uu.isPureReactComponent=!0;var Mh=Array.isArray,R1=Object.prototype.hasOwnProperty,Hu={current:null},L1={key:!0,ref:!0,__self:!0,__source:!0};function D1(e,t,n){var o,a={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)R1.call(t,o)&&!L1.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)a[o]===void 0&&(a[o]=i[o]);return{$$typeof:Is,type:e,key:s,ref:l,props:a,_owner:Hu.current}}function j6(e,t){return{$$typeof:Is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function S6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ph=/\/+/g;function Ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S6(""+e.key):t.toString(36)}function ql(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Is:case d6:l=!0}}if(l)return l=e,a=a(l),e=o===""?"."+Ic(l,0):o,Mh(a)?(n="",e!=null&&(n=e.replace(Ph,"$&/")+"/"),ql(a,t,n,"",function(d){return d})):a!=null&&(Vu(a)&&(a=j6(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Ph,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=o===""?".":o+":",Mh(e))for(var i=0;i<e.length;i++){s=e[i];var c=o+Ic(s,i);l+=ql(s,t,n,c,a)}else if(c=b6(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=o+Ic(s,i++),l+=ql(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Cl(e,t,n){if(e==null)return e;var o=[],a=0;return ql(e,o,"","",function(s){return t.call(n,s,a++)}),o}function C6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Xl={transition:null},w6={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Xl,ReactCurrentOwner:Hu};he.Children={map:Cl,forEach:function(e,t,n){Cl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cl(e,function(){t++}),t},toArray:function(e){return Cl(e,function(t){return t})||[]},only:function(e){if(!Vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=la;he.Fragment=u6;he.Profiler=h6;he.PureComponent=Fu;he.StrictMode=p6;he.Suspense=x6;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w6;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=T1({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Hu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)R1.call(t,c)&&!L1.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:Is,type:e.type,key:a,ref:s,props:o,_owner:l}};he.createContext=function(e){return e={$$typeof:m6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:f6,_context:e},e.Consumer=e};he.createElement=D1;he.createFactory=function(e){var t=D1.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:g6,render:e}};he.isValidElement=Vu;he.lazy=function(e){return{$$typeof:y6,_payload:{_status:-1,_result:e},_init:C6}};he.memo=function(e,t){return{$$typeof:v6,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Xl.transition;Xl.transition={};try{e()}finally{Xl.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return vt.current.useCallback(e,t)};he.useContext=function(e){return vt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};he.useEffect=function(e,t){return vt.current.useEffect(e,t)};he.useId=function(){return vt.current.useId()};he.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return vt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};he.useRef=function(e){return vt.current.useRef(e)};he.useState=function(e){return vt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return vt.current.useTransition()};he.version="18.2.0";_1.exports=he;var v=_1.exports;const te=Gn(v),_6=C1({__proto__:null,default:te},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k6=v,T6=Symbol.for("react.element"),E6=Symbol.for("react.fragment"),N6=Object.prototype.hasOwnProperty,R6=k6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L6={key:!0,ref:!0,__self:!0,__source:!0};function O1(e,t,n){var o,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)N6.call(t,o)&&!L6.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:T6,type:e,key:s,ref:l,props:a,_owner:R6.current}}qi.Fragment=E6;qi.jsx=O1;qi.jsxs=O1;w1.exports=qi;var r=w1.exports,Rd={},B1={exports:{}},It={},A1={exports:{}},$1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,P){var I=O.length;O.push(P);e:for(;0<I;){var H=I-1>>>1,W=O[H];if(0<a(W,P))O[H]=P,O[I]=W,I=H;else break e}}function n(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var P=O[0],I=O.pop();if(I!==P){O[0]=I;e:for(var H=0,W=O.length,we=W>>>1;H<we;){var ce=2*(H+1)-1,je=O[ce],le=ce+1,Re=O[le];if(0>a(je,I))le<W&&0>a(Re,je)?(O[H]=Re,O[le]=I,H=le):(O[H]=je,O[ce]=I,H=ce);else if(le<W&&0>a(Re,I))O[H]=Re,O[le]=I,H=le;else break e}}return P}function a(O,P){var I=O.sortIndex-P.sortIndex;return I!==0?I:O.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,m=3,y=!1,S=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(O){for(var P=n(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=O)o(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function b(O){if(j=!1,f(O),!S)if(n(c)!==null)S=!0,se(C);else{var P=n(d);P!==null&&V(b,P.startTime-O)}}function C(O,P){S=!1,j&&(j=!1,x(T),T=-1),y=!0;var I=m;try{for(f(P),p=n(c);p!==null&&(!(p.expirationTime>P)||O&&!A());){var H=p.callback;if(typeof H=="function"){p.callback=null,m=p.priorityLevel;var W=H(p.expirationTime<=P);P=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(c)&&o(c),f(P)}else o(c);p=n(c)}if(p!==null)var we=!0;else{var ce=n(d);ce!==null&&V(b,ce.startTime-P),we=!1}return we}finally{p=null,m=I,y=!1}}var g=!1,w=null,T=-1,E=5,D=-1;function A(){return!(e.unstable_now()-D<E)}function K(){if(w!==null){var O=e.unstable_now();D=O;var P=!0;try{P=w(!0,O)}finally{P?q():(g=!1,w=null)}}else g=!1}var q;if(typeof h=="function")q=function(){h(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,oe=X.port2;X.port1.onmessage=K,q=function(){oe.postMessage(null)}}else q=function(){_(K,0)};function se(O){w=O,g||(g=!0,q())}function V(O,P){T=_(function(){O(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,se(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var I=m;m=P;try{return O()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=m;m=O;try{return P()}finally{m=I}},e.unstable_scheduleCallback=function(O,P,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,O){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,O={id:u++,callback:P,priorityLevel:O,startTime:I,expirationTime:W,sortIndex:-1},I>H?(O.sortIndex=I,t(d,O),n(c)===null&&O===n(d)&&(j?(x(T),T=-1):j=!0,V(b,I-H))):(O.sortIndex=W,t(c,O),S||y||(S=!0,se(C))),O},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(O){var P=m;return function(){var I=m;m=P;try{return O.apply(this,arguments)}finally{m=I}}}})($1);A1.exports=$1;var D6=A1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=v,Pt=D6;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P1=new Set,hs={};function uo(e,t){Jo(e,t),Jo(e+"Capture",t)}function Jo(e,t){for(hs[e]=t,e=0;e<t.length;e++)P1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ld=Object.prototype.hasOwnProperty,O6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ih={},zh={};function B6(e){return Ld.call(zh,e)?!0:Ld.call(Ih,e)?!1:O6.test(e)?zh[e]=!0:(Ih[e]=!0,!1)}function A6(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $6(e,t,n,o){if(t===null||typeof t>"u"||A6(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,o,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wu=/[\-:]([a-z])/g;function Zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wu,Zu);st[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wu,Zu);st[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wu,Zu);st[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ku(e,t,n,o){var a=st.hasOwnProperty(t)?st[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($6(t,n,a,o)&&(n=null),o||a===null?B6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var qn=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),No=Symbol.for("react.portal"),Ro=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),I1=Symbol.for("react.provider"),z1=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),qu=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),F1=Symbol.for("react.offscreen"),Fh=Symbol.iterator;function ka(e){return e===null||typeof e!="object"?null:(e=Fh&&e[Fh]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,zc;function Fa(e){if(zc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zc=t&&t[1]||""}return`
`+zc+e}var Fc=!1;function Uc(e,t){if(!e||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fa(e):""}function M6(e){switch(e.tag){case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return e=Uc(e.type,!1),e;case 11:return e=Uc(e.type.render,!1),e;case 1:return e=Uc(e.type,!0),e;default:return""}}function Ad(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ro:return"Fragment";case No:return"Portal";case Dd:return"Profiler";case Yu:return"StrictMode";case Od:return"Suspense";case Bd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case z1:return(e.displayName||"Context")+".Consumer";case I1:return(e._context.displayName||"Context")+".Provider";case Gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qu:return t=e.displayName||null,t!==null?t:Ad(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Ad(e(t))}catch{}}return null}function P6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(t);case 8:return t===Yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function U1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I6(e){var t=U1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _l(e){e._valueTracker||(e._valueTracker=I6(e))}function H1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=U1(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $d(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Sr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function V1(e,t){t=t.checked,t!=null&&Ku(e,"checked",t,!1)}function Md(e,t){V1(e,t);var n=Sr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pd(e,t.type,Sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pd(e,t,n){(t!=="number"||fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ua=Array.isArray;function Wo(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Sr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Id(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Ua(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sr(n)}}function W1(e,t){var n=Sr(t.value),o=Sr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Wh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Z1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Z1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kl,K1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z6=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(e){z6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ja[t]=Ja[e]})});function Y1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ja.hasOwnProperty(e)&&Ja[e]?(""+t).trim():t+"px"}function G1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Y1(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var F6=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fd(e,t){if(t){if(F6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Ud(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function Xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vd=null,Zo=null,Ko=null;function Zh(e){if(e=Us(e)){if(typeof Vd!="function")throw Error($(280));var t=e.stateNode;t&&(t=tc(t),Vd(e.stateNode,e.type,t))}}function q1(e){Zo?Ko?Ko.push(e):Ko=[e]:Zo=e}function X1(){if(Zo){var e=Zo,t=Ko;if(Ko=Zo=null,Zh(e),t)for(e=0;e<t.length;e++)Zh(t[e])}}function Q1(e,t){return e(t)}function J1(){}var Hc=!1;function e2(e,t,n){if(Hc)return e(t,n);Hc=!0;try{return Q1(e,t,n)}finally{Hc=!1,(Zo!==null||Ko!==null)&&(J1(),X1())}}function ms(e,t){var n=e.stateNode;if(n===null)return null;var o=tc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Wd=!1;if(Vn)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Wd=!1}function U6(e,t,n,o,a,s,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var es=!1,mi=null,gi=!1,Zd=null,H6={onError:function(e){es=!0,mi=e}};function V6(e,t,n,o,a,s,l,i,c){es=!1,mi=null,U6.apply(H6,arguments)}function W6(e,t,n,o,a,s,l,i,c){if(V6.apply(this,arguments),es){if(es){var d=mi;es=!1,mi=null}else throw Error($(198));gi||(gi=!0,Zd=d)}}function po(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kh(e){if(po(e)!==e)throw Error($(188))}function Z6(e){var t=e.alternate;if(!t){if(t=po(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Kh(a),e;if(s===o)return Kh(a),t;s=s.sibling}throw Error($(188))}if(n.return!==o.return)n=a,o=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l)throw Error($(189))}}if(n.alternate!==o)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function n2(e){return e=Z6(e),e!==null?r2(e):null}function r2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=r2(e);if(t!==null)return t;e=e.sibling}return null}var o2=Pt.unstable_scheduleCallback,Yh=Pt.unstable_cancelCallback,K6=Pt.unstable_shouldYield,Y6=Pt.unstable_requestPaint,Ve=Pt.unstable_now,G6=Pt.unstable_getCurrentPriorityLevel,Qu=Pt.unstable_ImmediatePriority,a2=Pt.unstable_UserBlockingPriority,xi=Pt.unstable_NormalPriority,q6=Pt.unstable_LowPriority,s2=Pt.unstable_IdlePriority,Xi=null,kn=null;function X6(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:ev,Q6=Math.log,J6=Math.LN2;function ev(e){return e>>>=0,e===0?32:31-(Q6(e)/J6|0)|0}var Tl=64,El=4194304;function Ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?o=Ha(i):(s&=l,s!==0&&(o=Ha(s)))}else l=n&~a,l!==0?o=Ha(l):s!==0&&(o=Ha(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-un(t),a=1<<n,o|=e[n],t&=~a;return o}function tv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nv(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-un(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&o)&&(a[l]=tv(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function Kd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function l2(){var e=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),e}function Vc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-un(t),e[t]=n}function rv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-un(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function Ju(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-un(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Se=0;function i2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var c2,ep,d2,u2,p2,Yd=!1,Nl=[],fr=null,mr=null,gr=null,gs=new Map,xs=new Map,dr=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":gs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(t.pointerId)}}function Ea(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Us(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function av(e,t,n,o,a){switch(t){case"focusin":return fr=Ea(fr,e,t,n,o,a),!0;case"dragenter":return mr=Ea(mr,e,t,n,o,a),!0;case"mouseover":return gr=Ea(gr,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return gs.set(s,Ea(gs.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,xs.set(s,Ea(xs.get(s)||null,e,t,n,o,a)),!0}return!1}function h2(e){var t=Gr(e.target);if(t!==null){var n=po(t);if(n!==null){if(t=n.tag,t===13){if(t=t2(n),t!==null){e.blockedOn=t,p2(e.priority,function(){d2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Hd=o,n.target.dispatchEvent(o),Hd=null}else return t=Us(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function qh(e,t,n){Ql(e)&&n.delete(t)}function sv(){Yd=!1,fr!==null&&Ql(fr)&&(fr=null),mr!==null&&Ql(mr)&&(mr=null),gr!==null&&Ql(gr)&&(gr=null),gs.forEach(qh),xs.forEach(qh)}function Na(e,t){e.blockedOn===t&&(e.blockedOn=null,Yd||(Yd=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,sv)))}function vs(e){function t(a){return Na(a,e)}if(0<Nl.length){Na(Nl[0],e);for(var n=1;n<Nl.length;n++){var o=Nl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(fr!==null&&Na(fr,e),mr!==null&&Na(mr,e),gr!==null&&Na(gr,e),gs.forEach(t),xs.forEach(t),n=0;n<dr.length;n++)o=dr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)h2(n),n.blockedOn===null&&dr.shift()}var Yo=qn.ReactCurrentBatchConfig,yi=!0;function lv(e,t,n,o){var a=Se,s=Yo.transition;Yo.transition=null;try{Se=1,tp(e,t,n,o)}finally{Se=a,Yo.transition=s}}function iv(e,t,n,o){var a=Se,s=Yo.transition;Yo.transition=null;try{Se=4,tp(e,t,n,o)}finally{Se=a,Yo.transition=s}}function tp(e,t,n,o){if(yi){var a=Gd(e,t,n,o);if(a===null)ed(e,t,o,bi,n),Gh(e,o);else if(av(a,e,t,n,o))o.stopPropagation();else if(Gh(e,o),t&4&&-1<ov.indexOf(e)){for(;a!==null;){var s=Us(a);if(s!==null&&c2(s),s=Gd(e,t,n,o),s===null&&ed(e,t,o,bi,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else ed(e,t,o,null,n)}}var bi=null;function Gd(e,t,n,o){if(bi=null,e=Xu(o),e=Gr(e),e!==null)if(t=po(e),t===null)e=null;else if(n=t.tag,n===13){if(e=t2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function f2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G6()){case Qu:return 1;case a2:return 4;case xi:case q6:return 16;case s2:return 536870912;default:return 16}default:return 16}}var pr=null,np=null,Jl=null;function m2(){if(Jl)return Jl;var e,t=np,n=t.length,o,a="value"in pr?pr.value:pr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===a[s-o];o++);return Jl=a.slice(e,1<o?1-o:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function Xh(){return!1}function zt(e){function t(n,o,a,s,l){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:Xh,this.isPropagationStopped=Xh,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=zt(ia),Fs=Ie({},ia,{view:0,detail:0}),cv=zt(Fs),Wc,Zc,Ra,Qi=Ie({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(Wc=e.screenX-Ra.screenX,Zc=e.screenY-Ra.screenY):Zc=Wc=0,Ra=e),Wc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Qh=zt(Qi),dv=Ie({},Qi,{dataTransfer:0}),uv=zt(dv),pv=Ie({},Fs,{relatedTarget:0}),Kc=zt(pv),hv=Ie({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=zt(hv),mv=Ie({},ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gv=zt(mv),xv=Ie({},ia,{data:0}),Jh=zt(xv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bv[e])?!!t[e]:!1}function op(){return jv}var Sv=Ie({},Fs,{key:function(e){if(e.key){var t=vv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=zt(Sv),wv=Ie({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=zt(wv),_v=Ie({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),kv=zt(_v),Tv=Ie({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=zt(Tv),Nv=Ie({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=zt(Nv),Lv=[9,13,27,32],ap=Vn&&"CompositionEvent"in window,ts=null;Vn&&"documentMode"in document&&(ts=document.documentMode);var Dv=Vn&&"TextEvent"in window&&!ts,g2=Vn&&(!ap||ts&&8<ts&&11>=ts),tf=String.fromCharCode(32),nf=!1;function x2(e,t){switch(e){case"keyup":return Lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lo=!1;function Ov(e,t){switch(e){case"compositionend":return v2(t);case"keypress":return t.which!==32?null:(nf=!0,tf);case"textInput":return e=t.data,e===tf&&nf?null:e;default:return null}}function Bv(e,t){if(Lo)return e==="compositionend"||!ap&&x2(e,t)?(e=m2(),Jl=np=pr=null,Lo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return g2&&t.locale!=="ko"?null:t.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Av[e.type]:t==="textarea"}function y2(e,t,n,o){q1(o),t=ji(t,"onChange"),0<t.length&&(n=new rp("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ns=null,ys=null;function $v(e){R2(e,0)}function Ji(e){var t=Bo(e);if(H1(t))return e}function Mv(e,t){if(e==="change")return t}var b2=!1;if(Vn){var Yc;if(Vn){var Gc="oninput"in document;if(!Gc){var of=document.createElement("div");of.setAttribute("oninput","return;"),Gc=typeof of.oninput=="function"}Yc=Gc}else Yc=!1;b2=Yc&&(!document.documentMode||9<document.documentMode)}function af(){ns&&(ns.detachEvent("onpropertychange",j2),ys=ns=null)}function j2(e){if(e.propertyName==="value"&&Ji(ys)){var t=[];y2(t,ys,e,Xu(e)),e2($v,t)}}function Pv(e,t,n){e==="focusin"?(af(),ns=t,ys=n,ns.attachEvent("onpropertychange",j2)):e==="focusout"&&af()}function Iv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(ys)}function zv(e,t){if(e==="click")return Ji(t)}function Fv(e,t){if(e==="input"||e==="change")return Ji(t)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:Uv;function bs(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Ld.call(t,a)||!hn(e[a],t[a]))return!1}return!0}function sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lf(e,t){var n=sf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sf(n)}}function S2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?S2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function C2(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hv(e){var t=C2(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&S2(n.ownerDocument.documentElement,n)){if(o!==null&&sp(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=lf(n,s);var l=lf(n,o);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vv=Vn&&"documentMode"in document&&11>=document.documentMode,Do=null,qd=null,rs=null,Xd=!1;function cf(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||Do==null||Do!==fi(o)||(o=Do,"selectionStart"in o&&sp(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),rs&&bs(rs,o)||(rs=o,o=ji(qd,"onSelect"),0<o.length&&(t=new rp("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Do)))}function Ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oo={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},qc={},w2={};Vn&&(w2=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);function ec(e){if(qc[e])return qc[e];if(!Oo[e])return e;var t=Oo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in w2)return qc[e]=t[n];return e}var _2=ec("animationend"),k2=ec("animationiteration"),T2=ec("animationstart"),E2=ec("transitionend"),N2=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){N2.set(e,t),uo(t,[e])}for(var Xc=0;Xc<df.length;Xc++){var Qc=df[Xc],Wv=Qc.toLowerCase(),Zv=Qc[0].toUpperCase()+Qc.slice(1);Nr(Wv,"on"+Zv)}Nr(_2,"onAnimationEnd");Nr(k2,"onAnimationIteration");Nr(T2,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(E2,"onTransitionEnd");Jo("onMouseEnter",["mouseout","mouseover"]);Jo("onMouseLeave",["mouseout","mouseover"]);Jo("onPointerEnter",["pointerout","pointerover"]);Jo("onPointerLeave",["pointerout","pointerover"]);uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function uf(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,W6(o,t,void 0,e),e.currentTarget=null}function R2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;uf(a,i,d),s=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;uf(a,i,d),s=c}}}if(gi)throw e=Zd,gi=!1,Zd=null,e}function Ee(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var o=e+"__bubble";n.has(o)||(L2(t,e,2,!1),n.add(o))}function Jc(e,t,n){var o=0;t&&(o|=4),L2(n,e,o,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function js(e){if(!e[Dl]){e[Dl]=!0,P1.forEach(function(n){n!=="selectionchange"&&(Kv.has(n)||Jc(n,!1,e),Jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,Jc("selectionchange",!1,t))}}function L2(e,t,n,o){switch(f2(t)){case 1:var a=lv;break;case 4:a=iv;break;default:a=tp}n=a.bind(null,t,n,e),a=void 0,!Wd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ed(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Gr(i),l===null)return;if(c=l.tag,c===5||c===6){o=s=l;continue e}i=i.parentNode}}o=o.return}e2(function(){var d=s,u=Xu(n),p=[];e:{var m=N2.get(e);if(m!==void 0){var y=rp,S=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":y=Cv;break;case"focusin":S="focus",y=Kc;break;case"focusout":S="blur",y=Kc;break;case"beforeblur":case"afterblur":y=Kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kv;break;case _2:case k2:case T2:y=fv;break;case E2:y=Ev;break;case"scroll":y=cv;break;case"wheel":y=Rv;break;case"copy":case"cut":case"paste":y=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ef}var j=(t&4)!==0,_=!j&&e==="scroll",x=j?m!==null?m+"Capture":null:m;j=[];for(var h=d,f;h!==null;){f=h;var b=f.stateNode;if(f.tag===5&&b!==null&&(f=b,x!==null&&(b=ms(h,x),b!=null&&j.push(Ss(h,b,f)))),_)break;h=h.return}0<j.length&&(m=new y(m,S,null,n,u),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Hd&&(S=n.relatedTarget||n.fromElement)&&(Gr(S)||S[Wn]))break e;if((y||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=d,S=S?Gr(S):null,S!==null&&(_=po(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=d),y!==S)){if(j=Qh,b="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=ef,b="onPointerLeave",x="onPointerEnter",h="pointer"),_=y==null?m:Bo(y),f=S==null?m:Bo(S),m=new j(b,h+"leave",y,n,u),m.target=_,m.relatedTarget=f,b=null,Gr(u)===d&&(j=new j(x,h+"enter",S,n,u),j.target=f,j.relatedTarget=_,b=j),_=b,y&&S)t:{for(j=y,x=S,h=0,f=j;f;f=wo(f))h++;for(f=0,b=x;b;b=wo(b))f++;for(;0<h-f;)j=wo(j),h--;for(;0<f-h;)x=wo(x),f--;for(;h--;){if(j===x||x!==null&&j===x.alternate)break t;j=wo(j),x=wo(x)}j=null}else j=null;y!==null&&pf(p,m,y,j,!1),S!==null&&_!==null&&pf(p,_,S,j,!0)}}e:{if(m=d?Bo(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var C=Mv;else if(rf(m))if(b2)C=Fv;else{C=Iv;var g=Pv}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=zv);if(C&&(C=C(e,d))){y2(p,C,n,u);break e}g&&g(e,m,d),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&Pd(m,"number",m.value)}switch(g=d?Bo(d):window,e){case"focusin":(rf(g)||g.contentEditable==="true")&&(Do=g,qd=d,rs=null);break;case"focusout":rs=qd=Do=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,cf(p,n,u);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":cf(p,n,u)}var w;if(ap)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Lo?x2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(g2&&n.locale!=="ko"&&(Lo||T!=="onCompositionStart"?T==="onCompositionEnd"&&Lo&&(w=m2()):(pr=u,np="value"in pr?pr.value:pr.textContent,Lo=!0)),g=ji(d,T),0<g.length&&(T=new Jh(T,e,null,n,u),p.push({event:T,listeners:g}),w?T.data=w:(w=v2(n),w!==null&&(T.data=w)))),(w=Dv?Ov(e,n):Bv(e,n))&&(d=ji(d,"onBeforeInput"),0<d.length&&(u=new Jh("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}R2(p,t)})}function Ss(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=ms(e,n),s!=null&&o.unshift(Ss(e,s,a)),s=ms(e,t),s!=null&&o.push(Ss(e,s,a))),e=e.return}return o}function wo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pf(e,t,n,o,a){for(var s=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,a?(c=ms(n,s),c!=null&&l.unshift(Ss(n,c,i))):a||(c=ms(n,s),c!=null&&l.push(Ss(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function hf(e){return(typeof e=="string"?e:""+e).replace(Yv,`
`).replace(Gv,"")}function Ol(e,t,n){if(t=hf(t),hf(e)!==t&&n)throw Error($(425))}function Si(){}var Qd=null,Jd=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(Qv)}:tu;function Qv(e){setTimeout(function(){throw e})}function td(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),vs(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);vs(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ca=Math.random().toString(36).slice(2),wn="__reactFiber$"+ca,Cs="__reactProps$"+ca,Wn="__reactContainer$"+ca,nu="__reactEvents$"+ca,Jv="__reactListeners$"+ca,e8="__reactHandles$"+ca;function Gr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[wn])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function Us(e){return e=e[wn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function tc(e){return e[Cs]||null}var ru=[],Ao=-1;function Rr(e){return{current:e}}function Ne(e){0>Ao||(e.current=ru[Ao],ru[Ao]=null,Ao--)}function ke(e,t){Ao++,ru[Ao]=e.current,e.current=t}var Cr={},pt=Rr(Cr),Rt=Rr(!1),no=Cr;function ea(e,t){var n=e.type.contextTypes;if(!n)return Cr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Lt(e){return e=e.childContextTypes,e!=null}function Ci(){Ne(Rt),Ne(pt)}function gf(e,t,n){if(pt.current!==Cr)throw Error($(168));ke(pt,t),ke(Rt,n)}function D2(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error($(108,P6(e)||"Unknown",a));return Ie({},n,o)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,no=pt.current,ke(pt,e),ke(Rt,Rt.current),!0}function xf(e,t,n){var o=e.stateNode;if(!o)throw Error($(169));n?(e=D2(e,t,no),o.__reactInternalMemoizedMergedChildContext=e,Ne(Rt),Ne(pt),ke(pt,e)):Ne(Rt),ke(Rt,n)}var $n=null,nc=!1,nd=!1;function O2(e){$n===null?$n=[e]:$n.push(e)}function t8(e){nc=!0,O2(e)}function Lr(){if(!nd&&$n!==null){nd=!0;var e=0,t=Se;try{var n=$n;for(Se=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}$n=null,nc=!1}catch(a){throw $n!==null&&($n=$n.slice(e+1)),o2(Qu,Lr),a}finally{Se=t,nd=!1}}return null}var $o=[],Mo=0,_i=null,ki=0,Vt=[],Wt=0,ro=null,zn=1,Fn="";function Zr(e,t){$o[Mo++]=ki,$o[Mo++]=_i,_i=e,ki=t}function B2(e,t,n){Vt[Wt++]=zn,Vt[Wt++]=Fn,Vt[Wt++]=ro,ro=e;var o=zn;e=Fn;var a=32-un(o)-1;o&=~(1<<a),n+=1;var s=32-un(t)+a;if(30<s){var l=a-a%5;s=(o&(1<<l)-1).toString(32),o>>=l,a-=l,zn=1<<32-un(t)+a|n<<a|o,Fn=s+e}else zn=1<<s|n<<a|o,Fn=e}function lp(e){e.return!==null&&(Zr(e,1),B2(e,1,0))}function ip(e){for(;e===_i;)_i=$o[--Mo],$o[Mo]=null,ki=$o[--Mo],$o[Mo]=null;for(;e===ro;)ro=Vt[--Wt],Vt[Wt]=null,Fn=Vt[--Wt],Vt[Wt]=null,zn=Vt[--Wt],Vt[Wt]=null}var $t=null,At=null,Oe=!1,cn=null;function A2(e,t){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,At=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ro!==null?{id:zn,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$t=e,At=null,!0):!1;default:return!1}}function ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function au(e){if(Oe){var t=At;if(t){var n=t;if(!vf(e,t)){if(ou(e))throw Error($(418));t=xr(n.nextSibling);var o=$t;t&&vf(e,t)?A2(o,n):(e.flags=e.flags&-4097|2,Oe=!1,$t=e)}}else{if(ou(e))throw Error($(418));e.flags=e.flags&-4097|2,Oe=!1,$t=e}}}function yf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function Bl(e){if(e!==$t)return!1;if(!Oe)return yf(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=At)){if(ou(e))throw $2(),Error($(418));for(;t;)A2(e,t),t=xr(t.nextSibling)}if(yf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=$t?xr(e.stateNode.nextSibling):null;return!0}function $2(){for(var e=At;e;)e=xr(e.nextSibling)}function ta(){At=$t=null,Oe=!1}function cp(e){cn===null?cn=[e]:cn.push(e)}var n8=qn.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ti=Rr(null),Ei=null,Po=null,dp=null;function up(){dp=Po=Ei=null}function pp(e){var t=Ti.current;Ne(Ti),e._currentValue=t}function su(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Go(e,t){Ei=e,dp=Po=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(dp!==e)if(e={context:e,memoizedValue:t,next:null},Po===null){if(Ei===null)throw Error($(308));Po=e,Ei.dependencies={lanes:0,firstContext:e}}else Po=Po.next=e;return t}var qr=null;function hp(e){qr===null?qr=[e]:qr.push(e)}function M2(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,hp(t)):(n.next=a.next,a.next=n),t.interleaved=n,Zn(e,o)}function Zn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function fp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,xe&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Zn(e,n)}return a=o.interleaved,a===null?(t.next=t,hp(o)):(t.next=a.next,a.next=t),o.interleaved=t,Zn(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ju(e,n)}}function bf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ni(e,t,n,o){var a=e.updateQueue;ir=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,u=d=c=null,i=s;do{var m=i.lane,y=i.eventTime;if((o&m)===m){u!==null&&(u=u.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,j=i;switch(m=t,y=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){p=S.call(y,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,m=typeof S=="function"?S.call(y,p,m):S,m==null)break e;p=Ie({},p,m);break e;case 2:ir=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=y,c=p):u=u.next=y,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(u===null&&(c=p),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);ao|=l,e.lanes=l,e.memoizedState=p}}function jf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error($(191,a));a.call(o)}}}var I2=new M1.Component().refs;function lu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rc={isMounted:function(e){return(e=e._reactInternals)?po(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=xt(),a=br(e),s=Un(o,a);s.payload=t,n!=null&&(s.callback=n),t=vr(e,s,a),t!==null&&(pn(t,e,a,o),ti(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=xt(),a=br(e),s=Un(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vr(e,s,a),t!==null&&(pn(t,e,a,o),ti(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),o=br(e),a=Un(n,o);a.tag=2,t!=null&&(a.callback=t),t=vr(e,a,o),t!==null&&(pn(t,e,o,n),ti(t,e,o))}};function Sf(e,t,n,o,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!bs(n,o)||!bs(a,s):!0}function z2(e,t,n){var o=!1,a=Cr,s=t.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(a=Lt(t)?no:pt.current,o=t.contextTypes,s=(o=o!=null)?ea(e,a):Cr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Cf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function iu(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=I2,fp(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Gt(s):(s=Lt(t)?no:pt.current,a.context=ea(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(lu(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&rc.enqueueReplaceState(a,a.state,null),Ni(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function La(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var o=n.stateNode}if(!o)throw Error($(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===I2&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Al(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wf(e){var t=e._init;return t(e._payload)}function F2(e){function t(x,h){if(e){var f=x.deletions;f===null?(x.deletions=[h],x.flags|=16):f.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function o(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function a(x,h){return x=jr(x,h),x.index=0,x.sibling=null,x}function s(x,h,f){return x.index=f,e?(f=x.alternate,f!==null?(f=f.index,f<h?(x.flags|=2,h):f):(x.flags|=2,h)):(x.flags|=1048576,h)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function i(x,h,f,b){return h===null||h.tag!==6?(h=cd(f,x.mode,b),h.return=x,h):(h=a(h,f),h.return=x,h)}function c(x,h,f,b){var C=f.type;return C===Ro?u(x,h,f.props.children,b,f.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&wf(C)===h.type)?(b=a(h,f.props),b.ref=La(x,h,f),b.return=x,b):(b=li(f.type,f.key,f.props,null,x.mode,b),b.ref=La(x,h,f),b.return=x,b)}function d(x,h,f,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=dd(f,x.mode,b),h.return=x,h):(h=a(h,f.children||[]),h.return=x,h)}function u(x,h,f,b,C){return h===null||h.tag!==7?(h=to(f,x.mode,b,C),h.return=x,h):(h=a(h,f),h.return=x,h)}function p(x,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cd(""+h,x.mode,f),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wl:return f=li(h.type,h.key,h.props,null,x.mode,f),f.ref=La(x,null,h),f.return=x,f;case No:return h=dd(h,x.mode,f),h.return=x,h;case lr:var b=h._init;return p(x,b(h._payload),f)}if(Ua(h)||ka(h))return h=to(h,x.mode,f,null),h.return=x,h;Al(x,h)}return null}function m(x,h,f,b){var C=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:i(x,h,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wl:return f.key===C?c(x,h,f,b):null;case No:return f.key===C?d(x,h,f,b):null;case lr:return C=f._init,m(x,h,C(f._payload),b)}if(Ua(f)||ka(f))return C!==null?null:u(x,h,f,b,null);Al(x,f)}return null}function y(x,h,f,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(f)||null,i(h,x,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wl:return x=x.get(b.key===null?f:b.key)||null,c(h,x,b,C);case No:return x=x.get(b.key===null?f:b.key)||null,d(h,x,b,C);case lr:var g=b._init;return y(x,h,f,g(b._payload),C)}if(Ua(b)||ka(b))return x=x.get(f)||null,u(h,x,b,C,null);Al(h,b)}return null}function S(x,h,f,b){for(var C=null,g=null,w=h,T=h=0,E=null;w!==null&&T<f.length;T++){w.index>T?(E=w,w=null):E=w.sibling;var D=m(x,w,f[T],b);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(x,w),h=s(D,h,T),g===null?C=D:g.sibling=D,g=D,w=E}if(T===f.length)return n(x,w),Oe&&Zr(x,T),C;if(w===null){for(;T<f.length;T++)w=p(x,f[T],b),w!==null&&(h=s(w,h,T),g===null?C=w:g.sibling=w,g=w);return Oe&&Zr(x,T),C}for(w=o(x,w);T<f.length;T++)E=y(w,x,T,f[T],b),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?T:E.key),h=s(E,h,T),g===null?C=E:g.sibling=E,g=E);return e&&w.forEach(function(A){return t(x,A)}),Oe&&Zr(x,T),C}function j(x,h,f,b){var C=ka(f);if(typeof C!="function")throw Error($(150));if(f=C.call(f),f==null)throw Error($(151));for(var g=C=null,w=h,T=h=0,E=null,D=f.next();w!==null&&!D.done;T++,D=f.next()){w.index>T?(E=w,w=null):E=w.sibling;var A=m(x,w,D.value,b);if(A===null){w===null&&(w=E);break}e&&w&&A.alternate===null&&t(x,w),h=s(A,h,T),g===null?C=A:g.sibling=A,g=A,w=E}if(D.done)return n(x,w),Oe&&Zr(x,T),C;if(w===null){for(;!D.done;T++,D=f.next())D=p(x,D.value,b),D!==null&&(h=s(D,h,T),g===null?C=D:g.sibling=D,g=D);return Oe&&Zr(x,T),C}for(w=o(x,w);!D.done;T++,D=f.next())D=y(w,x,T,D.value,b),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?T:D.key),h=s(D,h,T),g===null?C=D:g.sibling=D,g=D);return e&&w.forEach(function(K){return t(x,K)}),Oe&&Zr(x,T),C}function _(x,h,f,b){if(typeof f=="object"&&f!==null&&f.type===Ro&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case wl:e:{for(var C=f.key,g=h;g!==null;){if(g.key===C){if(C=f.type,C===Ro){if(g.tag===7){n(x,g.sibling),h=a(g,f.props.children),h.return=x,x=h;break e}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&wf(C)===g.type){n(x,g.sibling),h=a(g,f.props),h.ref=La(x,g,f),h.return=x,x=h;break e}n(x,g);break}else t(x,g);g=g.sibling}f.type===Ro?(h=to(f.props.children,x.mode,b,f.key),h.return=x,x=h):(b=li(f.type,f.key,f.props,null,x.mode,b),b.ref=La(x,h,f),b.return=x,x=b)}return l(x);case No:e:{for(g=f.key;h!==null;){if(h.key===g)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(x,h.sibling),h=a(h,f.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=dd(f,x.mode,b),h.return=x,x=h}return l(x);case lr:return g=f._init,_(x,h,g(f._payload),b)}if(Ua(f))return S(x,h,f,b);if(ka(f))return j(x,h,f,b);Al(x,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(x,h.sibling),h=a(h,f),h.return=x,x=h):(n(x,h),h=cd(f,x.mode,b),h.return=x,x=h),l(x)):n(x,h)}return _}var na=F2(!0),U2=F2(!1),Hs={},Tn=Rr(Hs),ws=Rr(Hs),_s=Rr(Hs);function Xr(e){if(e===Hs)throw Error($(174));return e}function mp(e,t){switch(ke(_s,t),ke(ws,e),ke(Tn,Hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zd(t,e)}Ne(Tn),ke(Tn,t)}function ra(){Ne(Tn),Ne(ws),Ne(_s)}function H2(e){Xr(_s.current);var t=Xr(Tn.current),n=zd(t,e.type);t!==n&&(ke(ws,e),ke(Tn,n))}function gp(e){ws.current===e&&(Ne(Tn),Ne(ws))}var $e=Rr(0);function Ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rd=[];function xp(){for(var e=0;e<rd.length;e++)rd[e]._workInProgressVersionPrimary=null;rd.length=0}var ni=qn.ReactCurrentDispatcher,od=qn.ReactCurrentBatchConfig,oo=0,Pe=null,Ye=null,tt=null,Li=!1,os=!1,ks=0,r8=0;function ct(){throw Error($(321))}function vp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hn(e[n],t[n]))return!1;return!0}function yp(e,t,n,o,a,s){if(oo=s,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?l8:i8,e=n(o,a),os){s=0;do{if(os=!1,ks=0,25<=s)throw Error($(301));s+=1,tt=Ye=null,t.updateQueue=null,ni.current=c8,e=n(o,a)}while(os)}if(ni.current=Di,t=Ye!==null&&Ye.next!==null,oo=0,tt=Ye=Pe=null,Li=!1,t)throw Error($(300));return e}function bp(){var e=ks!==0;return ks=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Pe.memoizedState=tt=e:tt=tt.next=e,tt}function qt(){if(Ye===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=tt===null?Pe.memoizedState:tt.next;if(t!==null)tt=t,Ye=e;else{if(e===null)throw Error($(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?Pe.memoizedState=tt=e:tt=tt.next=e}return tt}function Ts(e,t){return typeof t=="function"?t(e):t}function ad(e){var t=qt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var o=Ye,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var i=l=null,c=null,d=s;do{var u=d.lane;if((oo&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,Pe.lanes|=u,ao|=u}d=d.next}while(d!==null&&d!==s);c===null?l=o:c.next=i,hn(o,t.memoizedState)||(Nt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Pe.lanes|=s,ao|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sd(e){var t=qt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);hn(s,t.memoizedState)||(Nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function V2(){}function W2(e,t){var n=Pe,o=qt(),a=t(),s=!hn(o.memoizedState,a);if(s&&(o.memoizedState=a,Nt=!0),o=o.queue,jp(Y2.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Es(9,K2.bind(null,n,o,a,t),void 0,null),rt===null)throw Error($(349));oo&30||Z2(n,t,a)}return a}function Z2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function K2(e,t,n,o){t.value=n,t.getSnapshot=o,G2(t)&&q2(e)}function Y2(e,t,n){return n(function(){G2(t)&&q2(e)})}function G2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hn(e,n)}catch{return!0}}function q2(e){var t=Zn(e,1);t!==null&&pn(t,e,1,-1)}function _f(e){var t=jn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:e},t.queue=e,e=e.dispatch=s8.bind(null,Pe,e),[t.memoizedState,e]}function Es(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function X2(){return qt().memoizedState}function ri(e,t,n,o){var a=jn();Pe.flags|=e,a.memoizedState=Es(1|t,n,void 0,o===void 0?null:o)}function oc(e,t,n,o){var a=qt();o=o===void 0?null:o;var s=void 0;if(Ye!==null){var l=Ye.memoizedState;if(s=l.destroy,o!==null&&vp(o,l.deps)){a.memoizedState=Es(t,n,s,o);return}}Pe.flags|=e,a.memoizedState=Es(1|t,n,s,o)}function kf(e,t){return ri(8390656,8,e,t)}function jp(e,t){return oc(2048,8,e,t)}function Q2(e,t){return oc(4,2,e,t)}function J2(e,t){return oc(4,4,e,t)}function eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tg(e,t,n){return n=n!=null?n.concat([e]):null,oc(4,4,eg.bind(null,t,e),n)}function Sp(){}function ng(e,t){var n=qt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&vp(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function rg(e,t){var n=qt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&vp(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function og(e,t,n){return oo&21?(hn(n,t)||(n=l2(),Pe.lanes|=n,ao|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=n)}function o8(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var o=od.transition;od.transition={};try{e(!1),t()}finally{Se=n,od.transition=o}}function ag(){return qt().memoizedState}function a8(e,t,n){var o=br(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},sg(e))lg(t,n);else if(n=M2(e,t,n,o),n!==null){var a=xt();pn(n,e,o,a),ig(n,t,o)}}function s8(e,t,n){var o=br(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(sg(e))lg(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,hn(i,l)){var c=t.interleaved;c===null?(a.next=a,hp(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=M2(e,t,a,o),n!==null&&(a=xt(),pn(n,e,o,a),ig(n,t,o))}}function sg(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function lg(e,t){os=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ig(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ju(e,n)}}var Di={readContext:Gt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},l8={readContext:Gt,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:kf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=jn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=jn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=a8.bind(null,Pe,e),[o.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:_f,useDebugValue:Sp,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=_f(!1),t=e[0];return e=o8.bind(null,e[1]),jn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Pe,a=jn();if(Oe){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),rt===null)throw Error($(349));oo&30||Z2(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,kf(Y2.bind(null,o,s,e),[e]),o.flags|=2048,Es(9,K2.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=jn(),t=rt.identifierPrefix;if(Oe){var n=Fn,o=zn;n=(o&~(1<<32-un(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ks++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=r8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i8={readContext:Gt,useCallback:ng,useContext:Gt,useEffect:jp,useImperativeHandle:tg,useInsertionEffect:Q2,useLayoutEffect:J2,useMemo:rg,useReducer:ad,useRef:X2,useState:function(){return ad(Ts)},useDebugValue:Sp,useDeferredValue:function(e){var t=qt();return og(t,Ye.memoizedState,e)},useTransition:function(){var e=ad(Ts)[0],t=qt().memoizedState;return[e,t]},useMutableSource:V2,useSyncExternalStore:W2,useId:ag,unstable_isNewReconciler:!1},c8={readContext:Gt,useCallback:ng,useContext:Gt,useEffect:jp,useImperativeHandle:tg,useInsertionEffect:Q2,useLayoutEffect:J2,useMemo:rg,useReducer:sd,useRef:X2,useState:function(){return sd(Ts)},useDebugValue:Sp,useDeferredValue:function(e){var t=qt();return Ye===null?t.memoizedState=e:og(t,Ye.memoizedState,e)},useTransition:function(){var e=sd(Ts)[0],t=qt().memoizedState;return[e,t]},useMutableSource:V2,useSyncExternalStore:W2,useId:ag,unstable_isNewReconciler:!1};function oa(e,t){try{var n="",o=t;do n+=M6(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function ld(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d8=typeof WeakMap=="function"?WeakMap:Map;function cg(e,t,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Bi||(Bi=!0,yu=o),cu(e,t)},n}function dg(e,t,n){n=Un(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){cu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cu(e,t),typeof o!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tf(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new d8;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=w8.bind(null,e,t,n),t.then(e,e))}function Ef(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nf(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Un(-1,1),t.tag=2,vr(n,t,1))),n.lanes|=1),e)}var u8=qn.ReactCurrentOwner,Nt=!1;function gt(e,t,n,o){t.child=e===null?U2(t,null,n,o):na(t,e.child,n,o)}function Rf(e,t,n,o,a){n=n.render;var s=t.ref;return Go(t,a),o=yp(e,t,n,o,s,a),n=bp(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Kn(e,t,a)):(Oe&&n&&lp(t),t.flags|=1,gt(e,t,o,a),t.child)}function Lf(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ug(e,t,s,o,a)):(e=li(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:bs,n(l,o)&&e.ref===t.ref)return Kn(e,t,a)}return t.flags|=1,e=jr(s,o),e.ref=t.ref,e.return=t,t.child=e}function ug(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(bs(s,o)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,Kn(e,t,a)}return du(e,t,n,o,a)}function pg(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(zo,Bt),Bt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(zo,Bt),Bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,ke(zo,Bt),Bt|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,ke(zo,Bt),Bt|=o;return gt(e,t,a,n),t.child}function hg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function du(e,t,n,o,a){var s=Lt(n)?no:pt.current;return s=ea(t,s),Go(t,a),n=yp(e,t,n,o,s,a),o=bp(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Kn(e,t,a)):(Oe&&o&&lp(t),t.flags|=1,gt(e,t,n,a),t.child)}function Df(e,t,n,o,a){if(Lt(n)){var s=!0;wi(t)}else s=!1;if(Go(t,a),t.stateNode===null)oi(e,t),z2(t,n,o),iu(t,n,o,a),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Gt(d):(d=Lt(n)?no:pt.current,d=ea(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&Cf(t,l,o,d),ir=!1;var m=t.memoizedState;l.state=m,Ni(t,o,l,a),c=t.memoizedState,i!==o||m!==c||Rt.current||ir?(typeof u=="function"&&(lu(t,n,u,o),c=t.memoizedState),(i=ir||Sf(t,n,i,o,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,P2(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:an(t.type,i),l.props=d,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Gt(c):(c=Lt(n)?no:pt.current,c=ea(t,c));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||m!==c)&&Cf(t,l,o,c),ir=!1,m=t.memoizedState,l.state=m,Ni(t,o,l,a);var S=t.memoizedState;i!==p||m!==S||Rt.current||ir?(typeof y=="function"&&(lu(t,n,y,o),S=t.memoizedState),(d=ir||Sf(t,n,d,o,m,S,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,S,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,S,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),l.props=o,l.state=S,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return uu(e,t,n,o,s,a)}function uu(e,t,n,o,a,s){hg(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return a&&xf(t,n,!1),Kn(e,t,s);o=t.stateNode,u8.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=na(t,e.child,null,s),t.child=na(t,null,i,s)):gt(e,t,i,s),t.memoizedState=o.state,a&&xf(t,n,!0),t.child}function fg(e){var t=e.stateNode;t.pendingContext?gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gf(e,t.context,!1),mp(e,t.containerInfo)}function Of(e,t,n,o,a){return ta(),cp(a),t.flags|=256,gt(e,t,n,o),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function mg(e,t,n){var o=t.pendingProps,a=$e.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke($e,a&1),e===null)return au(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=lc(l,o,0,null),e=to(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hu(n),t.memoizedState=pu,e):Cp(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return p8(e,t,l,o,i,a,n);if(s){s=o.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=jr(a,c),o.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=jr(i,s):(s=to(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?hu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=pu,o}return s=e.child,e=s.sibling,o=jr(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Cp(e,t){return t=lc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $l(e,t,n,o){return o!==null&&cp(o),na(t,e.child,null,n),e=Cp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p8(e,t,n,o,a,s,l){if(n)return t.flags&256?(t.flags&=-257,o=ld(Error($(422))),$l(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=lc({mode:"visible",children:o.children},a,0,null),s=to(s,a,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&na(t,e.child,null,l),t.child.memoizedState=hu(l),t.memoizedState=pu,s);if(!(t.mode&1))return $l(e,t,l,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var i=o.dgst;return o=i,s=Error($(419)),o=ld(s,o,void 0),$l(e,t,l,o)}if(i=(l&e.childLanes)!==0,Nt||i){if(o=rt,o!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Zn(e,a),pn(o,e,a,-1))}return Np(),o=ld(Error($(421))),$l(e,t,l,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_8.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,At=xr(a.nextSibling),$t=t,Oe=!0,cn=null,e!==null&&(Vt[Wt++]=zn,Vt[Wt++]=Fn,Vt[Wt++]=ro,zn=e.id,Fn=e.overflow,ro=t),t=Cp(t,o.children),t.flags|=4096,t)}function Bf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),su(e.return,t,n)}function id(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function gg(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(gt(e,t,o.children,n),o=$e.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,t);else if(e.tag===19)Bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke($e,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ri(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),id(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ri(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}id(t,!0,n,null,s);break;case"together":id(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ao|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=jr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h8(e,t,n){switch(t.tag){case 3:fg(t),ta();break;case 5:H2(t);break;case 1:Lt(t.type)&&wi(t);break;case 4:mp(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;ke(Ti,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?mg(e,t,n):(ke($e,$e.current&1),e=Kn(e,t,n),e!==null?e.sibling:null);ke($e,$e.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return gg(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke($e,$e.current),o)break;return null;case 22:case 23:return t.lanes=0,pg(e,t,n)}return Kn(e,t,n)}var xg,fu,vg,yg;xg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};vg=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Xr(Tn.current);var s=null;switch(n){case"input":a=$d(e,a),o=$d(e,o),s=[];break;case"select":a=Ie({},a,{value:void 0}),o=Ie({},o,{value:void 0}),s=[];break;case"textarea":a=Id(e,a),o=Id(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Si)}Fd(n,o);var l;n=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var i=a[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(hs.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(i=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(hs.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ee("scroll",e),s||i===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};yg=function(e,t,n,o){n!==o&&(t.flags|=4)};function Da(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function f8(e,t,n){var o=t.pendingProps;switch(ip(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Lt(t.type)&&Ci(),dt(t),null;case 3:return o=t.stateNode,ra(),Ne(Rt),Ne(pt),xp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Bl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(Su(cn),cn=null))),fu(e,t),dt(t),null;case 5:gp(t);var a=Xr(_s.current);if(n=t.type,e!==null&&t.stateNode!=null)vg(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error($(166));return dt(t),null}if(e=Xr(Tn.current),Bl(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[wn]=t,o[Cs]=s,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",o),Ee("close",o);break;case"iframe":case"object":case"embed":Ee("load",o);break;case"video":case"audio":for(a=0;a<Va.length;a++)Ee(Va[a],o);break;case"source":Ee("error",o);break;case"img":case"image":case"link":Ee("error",o),Ee("load",o);break;case"details":Ee("toggle",o);break;case"input":Uh(o,s),Ee("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",o);break;case"textarea":Vh(o,s),Ee("invalid",o)}Fd(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?o.textContent!==i&&(s.suppressHydrationWarning!==!0&&Ol(o.textContent,i,e),a=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Ol(o.textContent,i,e),a=["children",""+i]):hs.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Ee("scroll",o)}switch(n){case"input":_l(o),Hh(o,s,!0);break;case"textarea":_l(o),Wh(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Si)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Z1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[wn]=t,e[Cs]=o,xg(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ud(n,o),n){case"dialog":Ee("cancel",e),Ee("close",e),a=o;break;case"iframe":case"object":case"embed":Ee("load",e),a=o;break;case"video":case"audio":for(a=0;a<Va.length;a++)Ee(Va[a],e);a=o;break;case"source":Ee("error",e),a=o;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),a=o;break;case"details":Ee("toggle",e),a=o;break;case"input":Uh(e,o),a=$d(e,o),Ee("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Ie({},o,{value:void 0}),Ee("invalid",e);break;case"textarea":Vh(e,o),a=Id(e,o),Ee("invalid",e);break;default:a=o}Fd(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?G1(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&K1(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fs(e,c):typeof c=="number"&&fs(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hs.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ee("scroll",e):c!=null&&Ku(e,s,c,l))}switch(n){case"input":_l(e),Hh(e,o,!1);break;case"textarea":_l(e),Wh(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Sr(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Wo(e,!!o.multiple,s,!1):o.defaultValue!=null&&Wo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)yg(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error($(166));if(n=Xr(_s.current),Xr(Tn.current),Bl(t)){if(o=t.stateNode,n=t.memoizedProps,o[wn]=t,(s=o.nodeValue!==n)&&(e=$t,e!==null))switch(e.tag){case 3:Ol(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ol(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[wn]=t,t.stateNode=o}return dt(t),null;case 13:if(Ne($e),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&At!==null&&t.mode&1&&!(t.flags&128))$2(),ta(),t.flags|=98560,s=!1;else if(s=Bl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[wn]=t}else ta(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),s=!1}else cn!==null&&(Su(cn),cn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?qe===0&&(qe=3):Np())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return ra(),fu(e,t),e===null&&js(t.stateNode.containerInfo),dt(t),null;case 10:return pp(t.type._context),dt(t),null;case 17:return Lt(t.type)&&Ci(),dt(t),null;case 19:if(Ne($e),s=t.memoizedState,s===null)return dt(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)Da(s,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ri(e),l!==null){for(t.flags|=128,Da(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke($e,$e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ve()>aa&&(t.flags|=128,o=!0,Da(s,!1),t.lanes=4194304)}else{if(!o)if(e=Ri(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Oe)return dt(t),null}else 2*Ve()-s.renderingStartTime>aa&&n!==1073741824&&(t.flags|=128,o=!0,Da(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ve(),t.sibling=null,n=$e.current,ke($e,o?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return Ep(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Bt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function m8(e,t){switch(ip(t),t.tag){case 1:return Lt(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(),Ne(Rt),Ne(pt),xp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gp(t),null;case 13:if(Ne($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne($e),null;case 4:return ra(),null;case 10:return pp(t.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var Ml=!1,ut=!1,g8=typeof WeakSet=="function"?WeakSet:Set,U=null;function Io(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Fe(e,t,o)}else n.current=null}function mu(e,t,n){try{n()}catch(o){Fe(e,t,o)}}var Af=!1;function x8(e,t){if(Qd=yi,e=C2(),sp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,m=null;t:for(;;){for(var y;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++d===a&&(i=l),m===s&&++u===o&&(c=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:e,selectionRange:n},yi=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,_=S.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?j:an(t.type,j),_);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){Fe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return S=Af,Af=!1,S}function as(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&mu(t,n,s)}a=a.next}while(a!==o)}}function ac(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bg(e){var t=e.alternate;t!==null&&(e.alternate=null,bg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[Cs],delete t[nu],delete t[Jv],delete t[e8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jg(e){return e.tag===5||e.tag===3||e.tag===4}function $f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(o!==4&&(e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}function vu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var ot=null,sn=!1;function or(e,t,n){for(n=n.child;n!==null;)Sg(e,t,n),n=n.sibling}function Sg(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 5:ut||Io(n,t);case 6:var o=ot,a=sn;ot=null,or(e,t,n),ot=o,sn=a,ot!==null&&(sn?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(sn?(e=ot,n=n.stateNode,e.nodeType===8?td(e.parentNode,n):e.nodeType===1&&td(e,n),vs(e)):td(ot,n.stateNode));break;case 4:o=ot,a=sn,ot=n.stateNode.containerInfo,sn=!0,or(e,t,n),ot=o,sn=a;break;case 0:case 11:case 14:case 15:if(!ut&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&mu(n,t,l),a=a.next}while(a!==o)}or(e,t,n);break;case 1:if(!ut&&(Io(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){Fe(n,t,i)}or(e,t,n);break;case 21:or(e,t,n);break;case 22:n.mode&1?(ut=(o=ut)||n.memoizedState!==null,or(e,t,n),ut=o):or(e,t,n);break;default:or(e,t,n)}}function Mf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g8),t.forEach(function(o){var a=k8.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:ot=i.stateNode,sn=!1;break e;case 3:ot=i.stateNode.containerInfo,sn=!0;break e;case 4:ot=i.stateNode.containerInfo,sn=!0;break e}i=i.return}if(ot===null)throw Error($(160));Sg(s,l,a),ot=null,sn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Fe(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cg(t,e),t=t.sibling}function Cg(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),bn(e),o&4){try{as(3,e,e.return),ac(3,e)}catch(j){Fe(e,e.return,j)}try{as(5,e,e.return)}catch(j){Fe(e,e.return,j)}}break;case 1:on(t,e),bn(e),o&512&&n!==null&&Io(n,n.return);break;case 5:if(on(t,e),bn(e),o&512&&n!==null&&Io(n,n.return),e.flags&32){var a=e.stateNode;try{fs(a,"")}catch(j){Fe(e,e.return,j)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&V1(a,s),Ud(i,l);var d=Ud(i,s);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?G1(a,p):u==="dangerouslySetInnerHTML"?K1(a,p):u==="children"?fs(a,p):Ku(a,u,p,d)}switch(i){case"input":Md(a,s);break;case"textarea":W1(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Wo(a,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Wo(a,!!s.multiple,s.defaultValue,!0):Wo(a,!!s.multiple,s.multiple?[]:"",!1))}a[Cs]=s}catch(j){Fe(e,e.return,j)}}break;case 6:if(on(t,e),bn(e),o&4){if(e.stateNode===null)throw Error($(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(j){Fe(e,e.return,j)}}break;case 3:if(on(t,e),bn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{vs(t.containerInfo)}catch(j){Fe(e,e.return,j)}break;case 4:on(t,e),bn(e);break;case 13:on(t,e),bn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(kp=Ve())),o&4&&Mf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ut=(d=ut)||u,on(t,e),ut=d):on(t,e),bn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(p=U=u;U!==null;){switch(m=U,y=m.child,m.tag){case 0:case 11:case 14:case 15:as(4,m,m.return);break;case 1:Io(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){o=m,n=m.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){Fe(o,n,j)}}break;case 5:Io(m,m.return);break;case 22:if(m.memoizedState!==null){If(p);continue}}y!==null?(y.return=m,U=y):If(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Y1("display",l))}catch(j){Fe(e,e.return,j)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(j){Fe(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:on(t,e),bn(e),o&4&&Mf(e);break;case 21:break;default:on(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jg(n)){var o=n;break e}n=n.return}throw Error($(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(fs(a,""),o.flags&=-33);var s=$f(e);vu(e,s,a);break;case 3:case 4:var l=o.stateNode.containerInfo,i=$f(e);xu(e,i,l);break;default:throw Error($(161))}}catch(c){Fe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v8(e,t,n){U=e,wg(e)}function wg(e,t,n){for(var o=(e.mode&1)!==0;U!==null;){var a=U,s=a.child;if(a.tag===22&&o){var l=a.memoizedState!==null||Ml;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||ut;i=Ml;var d=ut;if(Ml=l,(ut=c)&&!d)for(U=a;U!==null;)l=U,c=l.child,l.tag===22&&l.memoizedState!==null?zf(a):c!==null?(c.return=l,U=c):zf(a);for(;s!==null;)U=s,wg(s),s=s.sibling;U=a,Ml=i,ut=d}Pf(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,U=s):Pf(e)}}function Pf(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ut||ac(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ut)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&jf(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jf(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&vs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ut||t.flags&512&&gu(t)}catch(m){Fe(t,t.return,m)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function If(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function zf(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ac(4,t)}catch(c){Fe(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){Fe(t,a,c)}}var s=t.return;try{gu(t)}catch(c){Fe(t,s,c)}break;case 5:var l=t.return;try{gu(t)}catch(c){Fe(t,l,c)}}}catch(c){Fe(t,t.return,c)}if(t===e){U=null;break}var i=t.sibling;if(i!==null){i.return=t.return,U=i;break}U=t.return}}var y8=Math.ceil,Oi=qn.ReactCurrentDispatcher,wp=qn.ReactCurrentOwner,Kt=qn.ReactCurrentBatchConfig,xe=0,rt=null,Ze=null,at=0,Bt=0,zo=Rr(0),qe=0,Ns=null,ao=0,sc=0,_p=0,ss=null,Tt=null,kp=0,aa=1/0,An=null,Bi=!1,yu=null,yr=null,Pl=!1,hr=null,Ai=0,ls=0,bu=null,ai=-1,si=0;function xt(){return xe&6?Ve():ai!==-1?ai:ai=Ve()}function br(e){return e.mode&1?xe&2&&at!==0?at&-at:n8.transition!==null?(si===0&&(si=l2()),si):(e=Se,e!==0||(e=window.event,e=e===void 0?16:f2(e.type)),e):1}function pn(e,t,n,o){if(50<ls)throw ls=0,bu=null,Error($(185));zs(e,n,o),(!(xe&2)||e!==rt)&&(e===rt&&(!(xe&2)&&(sc|=n),qe===4&&ur(e,at)),Dt(e,o),n===1&&xe===0&&!(t.mode&1)&&(aa=Ve()+500,nc&&Lr()))}function Dt(e,t){var n=e.callbackNode;nv(e,t);var o=vi(e,e===rt?at:0);if(o===0)n!==null&&Yh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Yh(n),t===1)e.tag===0?t8(Ff.bind(null,e)):O2(Ff.bind(null,e)),Xv(function(){!(xe&6)&&Lr()}),n=null;else{switch(i2(o)){case 1:n=Qu;break;case 4:n=a2;break;case 16:n=xi;break;case 536870912:n=s2;break;default:n=xi}n=Dg(n,_g.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _g(e,t){if(ai=-1,si=0,xe&6)throw Error($(327));var n=e.callbackNode;if(qo()&&e.callbackNode!==n)return null;var o=vi(e,e===rt?at:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=$i(e,o);else{t=o;var a=xe;xe|=2;var s=Tg();(rt!==e||at!==t)&&(An=null,aa=Ve()+500,eo(e,t));do try{S8();break}catch(i){kg(e,i)}while(1);up(),Oi.current=s,xe=a,Ze!==null?t=0:(rt=null,at=0,t=qe)}if(t!==0){if(t===2&&(a=Kd(e),a!==0&&(o=a,t=ju(e,a))),t===1)throw n=Ns,eo(e,0),ur(e,o),Dt(e,Ve()),n;if(t===6)ur(e,o);else{if(a=e.current.alternate,!(o&30)&&!b8(a)&&(t=$i(e,o),t===2&&(s=Kd(e),s!==0&&(o=s,t=ju(e,s))),t===1))throw n=Ns,eo(e,0),ur(e,o),Dt(e,Ve()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error($(345));case 2:Kr(e,Tt,An);break;case 3:if(ur(e,o),(o&130023424)===o&&(t=kp+500-Ve(),10<t)){if(vi(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){xt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=tu(Kr.bind(null,e,Tt,An),t);break}Kr(e,Tt,An);break;case 4:if(ur(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var l=31-un(o);s=1<<l,l=t[l],l>a&&(a=l),o&=~s}if(o=a,o=Ve()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*y8(o/1960))-o,10<o){e.timeoutHandle=tu(Kr.bind(null,e,Tt,An),o);break}Kr(e,Tt,An);break;case 5:Kr(e,Tt,An);break;default:throw Error($(329))}}}return Dt(e,Ve()),e.callbackNode===n?_g.bind(null,e):null}function ju(e,t){var n=ss;return e.current.memoizedState.isDehydrated&&(eo(e,t).flags|=256),e=$i(e,t),e!==2&&(t=Tt,Tt=n,t!==null&&Su(t)),e}function Su(e){Tt===null?Tt=e:Tt.push.apply(Tt,e)}function b8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!hn(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ur(e,t){for(t&=~_p,t&=~sc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-un(t),o=1<<n;e[n]=-1,t&=~o}}function Ff(e){if(xe&6)throw Error($(327));qo();var t=vi(e,0);if(!(t&1))return Dt(e,Ve()),null;var n=$i(e,t);if(e.tag!==0&&n===2){var o=Kd(e);o!==0&&(t=o,n=ju(e,o))}if(n===1)throw n=Ns,eo(e,0),ur(e,t),Dt(e,Ve()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,Tt,An),Dt(e,Ve()),null}function Tp(e,t){var n=xe;xe|=1;try{return e(t)}finally{xe=n,xe===0&&(aa=Ve()+500,nc&&Lr())}}function so(e){hr!==null&&hr.tag===0&&!(xe&6)&&qo();var t=xe;xe|=1;var n=Kt.transition,o=Se;try{if(Kt.transition=null,Se=1,e)return e()}finally{Se=o,Kt.transition=n,xe=t,!(xe&6)&&Lr()}}function Ep(){Bt=zo.current,Ne(zo)}function eo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qv(n)),Ze!==null)for(n=Ze.return;n!==null;){var o=n;switch(ip(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ci();break;case 3:ra(),Ne(Rt),Ne(pt),xp();break;case 5:gp(o);break;case 4:ra();break;case 13:Ne($e);break;case 19:Ne($e);break;case 10:pp(o.type._context);break;case 22:case 23:Ep()}n=n.return}if(rt=e,Ze=e=jr(e.current,null),at=Bt=t,qe=0,Ns=null,_p=sc=ao=0,Tt=ss=null,qr!==null){for(t=0;t<qr.length;t++)if(n=qr[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,o.next=l}n.pending=o}qr=null}return e}function kg(e,t){do{var n=Ze;try{if(up(),ni.current=Di,Li){for(var o=Pe.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Li=!1}if(oo=0,tt=Ye=Pe=null,os=!1,ks=0,wp.current=null,n===null||n.return===null){qe=1,Ns=t,Ze=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=at,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Ef(l);if(y!==null){y.flags&=-257,Nf(y,l,i,s,t),y.mode&1&&Tf(s,d,t),t=y,c=d;var S=t.updateQueue;if(S===null){var j=new Set;j.add(c),t.updateQueue=j}else S.add(c);break e}else{if(!(t&1)){Tf(s,d,t),Np();break e}c=Error($(426))}}else if(Oe&&i.mode&1){var _=Ef(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Nf(_,l,i,s,t),cp(oa(c,i));break e}}s=c=oa(c,i),qe!==4&&(qe=2),ss===null?ss=[s]:ss.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=cg(s,c,t);bf(s,x);break e;case 1:i=c;var h=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(yr===null||!yr.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=dg(s,i,t);bf(s,b);break e}}s=s.return}while(s!==null)}Ng(n)}catch(C){t=C,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function Tg(){var e=Oi.current;return Oi.current=Di,e===null?Di:e}function Np(){(qe===0||qe===3||qe===2)&&(qe=4),rt===null||!(ao&268435455)&&!(sc&268435455)||ur(rt,at)}function $i(e,t){var n=xe;xe|=2;var o=Tg();(rt!==e||at!==t)&&(An=null,eo(e,t));do try{j8();break}catch(a){kg(e,a)}while(1);if(up(),xe=n,Oi.current=o,Ze!==null)throw Error($(261));return rt=null,at=0,qe}function j8(){for(;Ze!==null;)Eg(Ze)}function S8(){for(;Ze!==null&&!K6();)Eg(Ze)}function Eg(e){var t=Lg(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,t===null?Ng(e):Ze=t,wp.current=null}function Ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=m8(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Ze=null;return}}else if(n=f8(n,t,Bt),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);qe===0&&(qe=5)}function Kr(e,t,n){var o=Se,a=Kt.transition;try{Kt.transition=null,Se=1,C8(e,t,n,o)}finally{Kt.transition=a,Se=o}return null}function C8(e,t,n,o){do qo();while(hr!==null);if(xe&6)throw Error($(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(rv(e,s),e===rt&&(Ze=rt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,Dg(xi,function(){return qo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var l=Se;Se=1;var i=xe;xe|=4,wp.current=null,x8(e,n),Cg(n,e),Hv(Jd),yi=!!Qd,Jd=Qd=null,e.current=n,v8(n),Y6(),xe=i,Se=l,Kt.transition=s}else e.current=n;if(Pl&&(Pl=!1,hr=e,Ai=a),s=e.pendingLanes,s===0&&(yr=null),X6(n.stateNode),Dt(e,Ve()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Bi)throw Bi=!1,e=yu,yu=null,e;return Ai&1&&e.tag!==0&&qo(),s=e.pendingLanes,s&1?e===bu?ls++:(ls=0,bu=e):ls=0,Lr(),null}function qo(){if(hr!==null){var e=i2(Ai),t=Kt.transition,n=Se;try{if(Kt.transition=null,Se=16>e?16:e,hr===null)var o=!1;else{if(e=hr,hr=null,Ai=0,xe&6)throw Error($(331));var a=xe;for(xe|=4,U=e.current;U!==null;){var s=U,l=s.child;if(U.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(U=d;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:as(8,u,s)}var p=u.child;if(p!==null)p.return=u,U=p;else for(;U!==null;){u=U;var m=u.sibling,y=u.return;if(bg(u),u===d){U=null;break}if(m!==null){m.return=y,U=m;break}U=y}}}var S=s.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}U=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,U=l;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,U=x;break e}U=s.return}}var h=e.current;for(U=h;U!==null;){l=U;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,U=f;else e:for(l=h;U!==null;){if(i=U,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ac(9,i)}}catch(C){Fe(i,i.return,C)}if(i===l){U=null;break e}var b=i.sibling;if(b!==null){b.return=i.return,U=b;break e}U=i.return}}if(xe=a,Lr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Xi,e)}catch{}o=!0}return o}finally{Se=n,Kt.transition=t}}return!1}function Uf(e,t,n){t=oa(n,t),t=cg(e,t,1),e=vr(e,t,1),t=xt(),e!==null&&(zs(e,1,t),Dt(e,t))}function Fe(e,t,n){if(e.tag===3)Uf(e,e,n);else for(;t!==null;){if(t.tag===3){Uf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(yr===null||!yr.has(o))){e=oa(n,e),e=dg(t,e,1),t=vr(t,e,1),e=xt(),t!==null&&(zs(t,1,e),Dt(t,e));break}}t=t.return}}function w8(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=xt(),e.pingedLanes|=e.suspendedLanes&n,rt===e&&(at&n)===n&&(qe===4||qe===3&&(at&130023424)===at&&500>Ve()-kp?eo(e,0):_p|=n),Dt(e,t)}function Rg(e,t){t===0&&(e.mode&1?(t=El,El<<=1,!(El&130023424)&&(El=4194304)):t=1);var n=xt();e=Zn(e,t),e!==null&&(zs(e,t,n),Dt(e,n))}function _8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rg(e,n)}function k8(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error($(314))}o!==null&&o.delete(t),Rg(e,n)}var Lg;Lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rt.current)Nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Nt=!1,h8(e,t,n);Nt=!!(e.flags&131072)}else Nt=!1,Oe&&t.flags&1048576&&B2(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;oi(e,t),e=t.pendingProps;var a=ea(t,pt.current);Go(t,n),a=yp(null,t,o,e,a,n);var s=bp();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(o)?(s=!0,wi(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,fp(t),a.updater=rc,t.stateNode=a,a._reactInternals=t,iu(t,o,e,n),t=uu(null,t,o,!0,s,n)):(t.tag=0,Oe&&s&&lp(t),gt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=E8(o),e=an(o,e),a){case 0:t=du(null,t,o,e,n);break e;case 1:t=Df(null,t,o,e,n);break e;case 11:t=Rf(null,t,o,e,n);break e;case 14:t=Lf(null,t,o,an(o.type,e),n);break e}throw Error($(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:an(o,a),du(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:an(o,a),Df(e,t,o,a,n);case 3:e:{if(fg(t),e===null)throw Error($(387));o=t.pendingProps,s=t.memoizedState,a=s.element,P2(e,t),Ni(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=oa(Error($(423)),t),t=Of(e,t,o,n,a);break e}else if(o!==a){a=oa(Error($(424)),t),t=Of(e,t,o,n,a);break e}else for(At=xr(t.stateNode.containerInfo.firstChild),$t=t,Oe=!0,cn=null,n=U2(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ta(),o===a){t=Kn(e,t,n);break e}gt(e,t,o,n)}t=t.child}return t;case 5:return H2(t),e===null&&au(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,eu(o,a)?l=null:s!==null&&eu(o,s)&&(t.flags|=32),hg(e,t),gt(e,t,l,n),t.child;case 6:return e===null&&au(t),null;case 13:return mg(e,t,n);case 4:return mp(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=na(t,null,o,n):gt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:an(o,a),Rf(e,t,o,a,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,ke(Ti,o._currentValue),o._currentValue=l,s!==null)if(hn(s.value,l)){if(s.children===a.children&&!Rt.current){t=Kn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(s.tag===1){c=Un(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),su(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error($(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),su(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}gt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Go(t,n),a=Gt(a),o=o(a),t.flags|=1,gt(e,t,o,n),t.child;case 14:return o=t.type,a=an(o,t.pendingProps),a=an(o.type,a),Lf(e,t,o,a,n);case 15:return ug(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:an(o,a),oi(e,t),t.tag=1,Lt(o)?(e=!0,wi(t)):e=!1,Go(t,n),z2(t,o,a),iu(t,o,a,n),uu(null,t,o,!0,e,n);case 19:return gg(e,t,n);case 22:return pg(e,t,n)}throw Error($(156,t.tag))};function Dg(e,t){return o2(e,t)}function T8(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,o){return new T8(e,t,n,o)}function Rp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E8(e){if(typeof e=="function")return Rp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gu)return 11;if(e===qu)return 14}return 2}function jr(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,o,a,s){var l=2;if(o=e,typeof e=="function")Rp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ro:return to(n.children,a,s,t);case Yu:l=8,a|=8;break;case Dd:return e=Zt(12,n,t,a|2),e.elementType=Dd,e.lanes=s,e;case Od:return e=Zt(13,n,t,a),e.elementType=Od,e.lanes=s,e;case Bd:return e=Zt(19,n,t,a),e.elementType=Bd,e.lanes=s,e;case F1:return lc(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I1:l=10;break e;case z1:l=9;break e;case Gu:l=11;break e;case qu:l=14;break e;case lr:l=16,o=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=Zt(l,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function to(e,t,n,o){return e=Zt(7,e,o,t),e.lanes=n,e}function lc(e,t,n,o){return e=Zt(22,e,o,t),e.elementType=F1,e.lanes=n,e.stateNode={isHidden:!1},e}function cd(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function dd(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function N8(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Lp(e,t,n,o,a,s,l,i,c){return e=new N8(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Zt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),e}function R8(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:No,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Og(e){if(!e)return Cr;e=e._reactInternals;e:{if(po(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Lt(n))return D2(e,n,t)}return t}function Bg(e,t,n,o,a,s,l,i,c){return e=Lp(n,o,!0,e,a,s,l,i,c),e.context=Og(null),n=e.current,o=xt(),a=br(n),s=Un(o,a),s.callback=t??null,vr(n,s,a),e.current.lanes=a,zs(e,a,o),Dt(e,o),e}function ic(e,t,n,o){var a=t.current,s=xt(),l=br(a);return n=Og(n),t.context===null?t.context=n:t.pendingContext=n,t=Un(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=vr(a,t,l),e!==null&&(pn(e,a,l,s),ti(e,a,l)),l}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dp(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function L8(){return null}var Ag=typeof reportError=="function"?reportError:function(e){console.error(e)};function Op(e){this._internalRoot=e}cc.prototype.render=Op.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));ic(e,t,null,null)};cc.prototype.unmount=Op.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;so(function(){ic(null,e,null,null)}),t[Wn]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var t=u2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&h2(e)}};function Bp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function D8(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=Mi(l);s.call(d)}}var l=Bg(t,o,e,0,null,!1,!1,"",Vf);return e._reactRootContainer=l,e[Wn]=l.current,js(e.nodeType===8?e.parentNode:e),so(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var i=o;o=function(){var d=Mi(c);i.call(d)}}var c=Lp(e,0,!1,null,null,!1,!1,"",Vf);return e._reactRootContainer=c,e[Wn]=c.current,js(e.nodeType===8?e.parentNode:e),so(function(){ic(t,c,n,o)}),c}function uc(e,t,n,o,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=Mi(l);i.call(c)}}ic(t,l,e,a)}else l=D8(n,t,e,a,o);return Mi(l)}c2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ha(t.pendingLanes);n!==0&&(Ju(t,n|1),Dt(t,Ve()),!(xe&6)&&(aa=Ve()+500,Lr()))}break;case 13:so(function(){var o=Zn(e,1);if(o!==null){var a=xt();pn(o,e,1,a)}}),Dp(e,1)}};ep=function(e){if(e.tag===13){var t=Zn(e,134217728);if(t!==null){var n=xt();pn(t,e,134217728,n)}Dp(e,134217728)}};d2=function(e){if(e.tag===13){var t=br(e),n=Zn(e,t);if(n!==null){var o=xt();pn(n,e,t,o)}Dp(e,t)}};u2=function(){return Se};p2=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}};Vd=function(e,t,n){switch(t){case"input":if(Md(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=tc(o);if(!a)throw Error($(90));H1(o),Md(o,a)}}}break;case"textarea":W1(e,n);break;case"select":t=n.value,t!=null&&Wo(e,!!n.multiple,t,!1)}};Q1=Tp;J1=so;var O8={usingClientEntryPoint:!1,Events:[Us,Bo,tc,q1,X1,Tp]},Oa={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},B8={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=n2(e),e===null?null:e.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||L8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Xi=Il.inject(B8),kn=Il}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O8;It.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(t))throw Error($(200));return R8(e,t,null,n)};It.createRoot=function(e,t){if(!Bp(e))throw Error($(299));var n=!1,o="",a=Ag;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Lp(e,1,!1,null,null,n,!1,o,a),e[Wn]=t.current,js(e.nodeType===8?e.parentNode:e),new Op(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=n2(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return so(e)};It.hydrate=function(e,t,n){if(!dc(t))throw Error($(200));return uc(null,e,t,!0,n)};It.hydrateRoot=function(e,t,n){if(!Bp(e))throw Error($(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",l=Ag;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Bg(t,null,e,1,n??null,a,!1,s,l),e[Wn]=t.current,js(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new cc(t)};It.render=function(e,t,n){if(!dc(t))throw Error($(200));return uc(null,e,t,!1,n)};It.unmountComponentAtNode=function(e){if(!dc(e))throw Error($(40));return e._reactRootContainer?(so(function(){uc(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};It.unstable_batchedUpdates=Tp;It.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!dc(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return uc(e,t,n,!1,o)};It.version="18.2.0-next-9e3b772b8-20220608";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(e){console.error(e)}}$g(),B1.exports=It;var Pn=B1.exports;const A8=Gn(Pn),$8=C1({__proto__:null,default:A8},[Pn]);var Wf=Pn;Rd.createRoot=Wf.createRoot,Rd.hydrateRoot=Wf.hydrateRoot;function M8(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function P8(e,t){if(e==null)return{};var n=M8(e,t),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Cu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function I8(e){if(Array.isArray(e))return Cu(e)}function z8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function F8(e,t){if(e){if(typeof e=="string")return Cu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cu(e,t)}}function U8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H8(e){return I8(e)||z8(e)||F8(e)||U8()}function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function V8(e,t){if(Rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Rs(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W8(e){var t=V8(e,"string");return Rs(t)=="symbol"?t:String(t)}function Mg(e,t,n){return t=W8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wu(){return wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},wu.apply(this,arguments)}function Zf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Fo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zf(Object(n),!0).forEach(function(o){Mg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Z8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var ud={};function K8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return ud[t]||(ud[t]=Z8(e)),ud[t]}function Y8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(s){return s!=="token"}),a=K8(o);return a.reduce(function(s,l){return Fo(Fo({},s),n[l])},t)}function Kf(e){return e.join(" ")}function G8(e,t){var n=0;return function(o){return n+=1,o.map(function(a,s){return Pg({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function Pg(e){var t=e.node,n=e.stylesheet,o=e.style,a=o===void 0?{}:o,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=G8(n,s),m;if(!s)m=Fo(Fo({},i),{},{className:Kf(i.className)});else{var y=Object.keys(n).reduce(function(x,h){return h.split(".").forEach(function(f){x.includes(f)||x.push(f)}),x},[]),S=i.className&&i.className.includes("token")?["token"]:[],j=i.className&&S.concat(i.className.filter(function(x){return!y.includes(x)}));m=Fo(Fo({},i),{},{className:Kf(j)||void 0,style:Y8(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return te.createElement(d,wu({key:l},m),_)}}const q8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var X8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Cn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yf(Object(n),!0).forEach(function(o){Mg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Q8=/\n/g;function J8(e){return e.match(Q8)}function e7(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(a,s){var l=s+n;return te.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function t7(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,a=o===void 0?{float:"left",paddingRight:"10px"}:o,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return te.createElement("code",{style:Object.assign({},n,a)},e7({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function n7(e){return"".concat(e.toString().length,".25em")}function Ig(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function zg(e,t,n){var o={display:"inline-block",minWidth:n7(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=Cn(Cn({},o),a);return s}function ii(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=d,n&&s){var y=zg(o,n,a);t.unshift(Ig(n,y))}return p&u&&(m.style=Cn(Cn({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function Fg(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var a=e[o];if(a.type==="text")n.push(ii({children:[a],className:H8(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);Fg(a.children,s).forEach(function(l){return n.push(l)})}}return n}function r7(e,t,n,o,a,s,l,i,c){var d,u=Fg(e.value),p=[],m=-1,y=0;function S(C,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ii({children:C,lineNumber:g,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:o,wrapLongLines:c})}function j(C,g){if(o&&g&&a){var w=zg(i,g,l);C.unshift(Ig(g,w))}return C}function _(C,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?S(C,g,w):j(C,g)}for(var x=function(){var g=u[y],w=g.children[0].value,T=J8(w);if(T){var E=w.split(`
`);E.forEach(function(D,A){var K=o&&p.length+s,q={type:"text",value:"".concat(D,`
`)};if(A===0){var X=u.slice(m+1,y).concat(ii({children:[q],className:g.properties.className})),oe=_(X,K);p.push(oe)}else if(A===E.length-1){var se=u[y+1]&&u[y+1].children&&u[y+1].children[0],V={type:"text",value:"".concat(D)};if(se){var O=ii({children:[V],className:g.properties.className});u.splice(y+1,0,O)}else{var P=[V],I=_(P,K,g.properties.className);p.push(I)}}else{var H=[q],W=_(H,K,g.properties.className);p.push(W)}}),m=y}y++};y<u.length;)x();if(m!==u.length-1){var h=u.slice(m+1,u.length);if(h&&h.length){var f=o&&p.length+s,b=_(h,f);p.push(b)}}return t?p:(d=[]).concat.apply(d,p)}function o7(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(a,s){return Pg({node:a,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(s)})})}function Ug(e){return e&&typeof e.highlightAuto<"u"}function a7(e){var t=e.astGenerator,n=e.language,o=e.code,a=e.defaultCodeValue;if(Ug(t)){var s=q8(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:a}}catch{return{value:a}}}function s7(e,t){return function(o){var a=o.language,s=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:a?"language-".concat(a):void 0,style:Cn(Cn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:u,m=o.useInlineStyles,y=m===void 0?!0:m,S=o.showLineNumbers,j=S===void 0?!1:S,_=o.showInlineLineNumbers,x=_===void 0?!0:_,h=o.startingLineNumber,f=h===void 0?1:h,b=o.lineNumberContainerStyle,C=o.lineNumberStyle,g=C===void 0?{}:C,w=o.wrapLines,T=o.wrapLongLines,E=T===void 0?!1:T,D=o.lineProps,A=D===void 0?{}:D,K=o.renderer,q=o.PreTag,X=q===void 0?"pre":q,oe=o.CodeTag,se=oe===void 0?"code":oe,V=o.code,O=V===void 0?(Array.isArray(s)?s[0]:s)||"":V,P=o.astGenerator,I=P8(o,X8);P=P||e;var H=j?te.createElement(t7,{containerStyle:b,codeStyle:p.style||{},numberStyle:g,startingLineNumber:f,codeString:O}):null,W=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},we=Ug(P)?"hljs":"prismjs",ce=y?Object.assign({},I,{style:Object.assign({},W,d)}):Object.assign({},I,{className:I.className?"".concat(we," ").concat(I.className):we,style:Object.assign({},d)});if(E?p.style=Cn(Cn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Cn(Cn({},p.style),{},{whiteSpace:"pre"}),!P)return te.createElement(X,ce,H,te.createElement(se,p,O));(w===void 0&&K||E)&&(w=!0),K=K||o7;var je=[{type:"text",value:O}],le=a7({astGenerator:P,language:a,code:O,defaultCodeValue:je});le.language===null&&(le.value=je);var Re=le.value.length+f,lt=r7(le,w,A,j,x,f,Re,g,E);return te.createElement(X,ce,te.createElement(se,p,!x&&H,K({rows:lt,stylesheet:i,useInlineStyles:y})))}}var l7=c7,i7=Object.prototype.hasOwnProperty;function c7(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)i7.call(n,o)&&(e[o]=n[o])}return e}var Hg=Vg,Ap=Vg.prototype;Ap.space=null;Ap.normal={};Ap.property={};function Vg(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Gf=l7,d7=Hg,u7=p7;function p7(e){for(var t=e.length,n=[],o=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),o.push(s.normal),l=s.space;return new d7(Gf.apply(null,n),Gf.apply(null,o),l)}var $p=h7;function h7(e){return e.toLowerCase()}var Wg=Zg,Qt=Zg.prototype;Qt.space=null;Qt.attribute=null;Qt.property=null;Qt.boolean=!1;Qt.booleanish=!1;Qt.overloadedBoolean=!1;Qt.number=!1;Qt.commaSeparated=!1;Qt.spaceSeparated=!1;Qt.commaOrSpaceSeparated=!1;Qt.mustUseProperty=!1;Qt.defined=!1;function Zg(e,t){this.property=e,this.attribute=t}var Nn={},f7=0;Nn.boolean=ho();Nn.booleanish=ho();Nn.overloadedBoolean=ho();Nn.number=ho();Nn.spaceSeparated=ho();Nn.commaSeparated=ho();Nn.commaOrSpaceSeparated=ho();function ho(){return Math.pow(2,++f7)}var Kg=Wg,qf=Nn,Yg=Mp;Mp.prototype=new Kg;Mp.prototype.defined=!0;var Gg=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],m7=Gg.length;function Mp(e,t,n,o){var a=-1,s;for(Xf(this,"space",o),Kg.call(this,e,t);++a<m7;)s=Gg[a],Xf(this,s,(n&qf[s])===qf[s])}function Xf(e,t,n){n&&(e[t]=n)}var Qf=$p,g7=Hg,x7=Yg,Vs=v7;function v7(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,d;for(c in a)d=new x7(c,s(o,c),a[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[Qf(c)]=c,i[Qf(d.attribute)]=c;return new g7(l,i,t)}var y7=Vs,b7=y7({space:"xlink",transform:j7,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function j7(e,t){return"xlink:"+t.slice(5).toLowerCase()}var S7=Vs,C7=S7({space:"xml",transform:w7,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function w7(e,t){return"xml:"+t.slice(3).toLowerCase()}var _7=k7;function k7(e,t){return t in e?e[t]:t}var T7=_7,qg=E7;function E7(e,t){return T7(e,t.toLowerCase())}var N7=Vs,R7=qg,L7=N7({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:R7,properties:{xmlns:null,xmlnsXLink:null}}),Pp=Nn,D7=Vs,_t=Pp.booleanish,Ft=Pp.number,Wr=Pp.spaceSeparated,O7=D7({transform:B7,properties:{ariaActiveDescendant:null,ariaAtomic:_t,ariaAutoComplete:null,ariaBusy:_t,ariaChecked:_t,ariaColCount:Ft,ariaColIndex:Ft,ariaColSpan:Ft,ariaControls:Wr,ariaCurrent:null,ariaDescribedBy:Wr,ariaDetails:null,ariaDisabled:_t,ariaDropEffect:Wr,ariaErrorMessage:null,ariaExpanded:_t,ariaFlowTo:Wr,ariaGrabbed:_t,ariaHasPopup:null,ariaHidden:_t,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Wr,ariaLevel:Ft,ariaLive:null,ariaModal:_t,ariaMultiLine:_t,ariaMultiSelectable:_t,ariaOrientation:null,ariaOwns:Wr,ariaPlaceholder:null,ariaPosInSet:Ft,ariaPressed:_t,ariaReadOnly:_t,ariaRelevant:null,ariaRequired:_t,ariaRoleDescription:Wr,ariaRowCount:Ft,ariaRowIndex:Ft,ariaRowSpan:Ft,ariaSelected:_t,ariaSetSize:Ft,ariaSort:null,ariaValueMax:Ft,ariaValueMin:Ft,ariaValueNow:Ft,ariaValueText:null,role:null}});function B7(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var da=Nn,A7=Vs,$7=qg,pe=da.boolean,M7=da.overloadedBoolean,Ba=da.booleanish,Te=da.number,mt=da.spaceSeparated,zl=da.commaSeparated,P7=A7({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$7,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zl,acceptCharset:mt,accessKey:mt,action:null,allow:null,allowFullScreen:pe,allowPaymentRequest:pe,allowUserMedia:pe,alt:null,as:null,async:pe,autoCapitalize:null,autoComplete:mt,autoFocus:pe,autoPlay:pe,capture:pe,charSet:null,checked:pe,cite:null,className:mt,cols:Te,colSpan:null,content:null,contentEditable:Ba,controls:pe,controlsList:mt,coords:Te|zl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:pe,defer:pe,dir:null,dirName:null,disabled:pe,download:M7,draggable:Ba,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:pe,formTarget:null,headers:mt,height:Te,hidden:pe,high:Te,href:null,hrefLang:null,htmlFor:mt,httpEquiv:mt,id:null,imageSizes:null,imageSrcSet:zl,inputMode:null,integrity:null,is:null,isMap:pe,itemId:null,itemProp:mt,itemRef:mt,itemScope:pe,itemType:mt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:pe,low:Te,manifest:null,max:null,maxLength:Te,media:null,method:null,min:null,minLength:Te,multiple:pe,muted:pe,name:null,nonce:null,noModule:pe,noValidate:pe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:pe,optimum:Te,pattern:null,ping:mt,placeholder:null,playsInline:pe,poster:null,preload:null,readOnly:pe,referrerPolicy:null,rel:mt,required:pe,reversed:pe,rows:Te,rowSpan:Te,sandbox:mt,scope:null,scoped:pe,seamless:pe,selected:pe,shape:null,size:Te,sizes:null,slot:null,span:Te,spellCheck:Ba,src:null,srcDoc:null,srcLang:null,srcSet:zl,start:Te,step:null,style:null,tabIndex:Te,target:null,title:null,translate:null,type:null,typeMustMatch:pe,useMap:null,value:Ba,width:Te,wrap:null,align:null,aLink:null,archive:mt,axis:null,background:null,bgColor:null,border:Te,borderColor:null,bottomMargin:Te,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:pe,declare:pe,event:null,face:null,frame:null,frameBorder:null,hSpace:Te,leftMargin:Te,link:null,longDesc:null,lowSrc:null,marginHeight:Te,marginWidth:Te,noResize:pe,noHref:pe,noShade:pe,noWrap:pe,object:null,profile:null,prompt:null,rev:null,rightMargin:Te,rules:null,scheme:null,scrolling:Ba,standby:null,summary:null,text:null,topMargin:Te,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Te,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:pe,disableRemotePlayback:pe,prefix:null,property:null,results:Te,security:null,unselectable:null}}),I7=u7,z7=b7,F7=C7,U7=L7,H7=O7,V7=P7,W7=I7([F7,z7,U7,H7,V7]),Z7=$p,K7=Yg,Y7=Wg,Ip="data",G7=Q7,q7=/^data[-\w.:]+$/i,Xg=/-[a-z]/g,X7=/[A-Z]/g;function Q7(e,t){var n=Z7(t),o=t,a=Y7;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Ip&&q7.test(t)&&(t.charAt(4)==="-"?o=J7(t):t=ey(t),a=K7),new a(o,t))}function J7(e){var t=e.slice(5).replace(Xg,ny);return Ip+t.charAt(0).toUpperCase()+t.slice(1)}function ey(e){var t=e.slice(4);return Xg.test(t)?e:(t=t.replace(X7,ty),t.charAt(0)!=="-"&&(t="-"+t),Ip+t)}function ty(e){return"-"+e.toLowerCase()}function ny(e){return e.charAt(1).toUpperCase()}var ry=oy,Jf=/[#.]/g;function oy(e,t){for(var n=e||"",o=t||"div",a={},s=0,l,i,c;s<n.length;)Jf.lastIndex=s,c=Jf.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:o=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:o,properties:a,children:[]}}var zp={};zp.parse=ly;zp.stringify=iy;var em="",ay=" ",sy=/[ \t\n\r\f]+/g;function ly(e){var t=String(e||em).trim();return t===em?[]:t.split(sy)}function iy(e){return e.join(ay).trim()}var Fp={};Fp.parse=cy;Fp.stringify=dy;var _u=",",tm=" ",Wa="";function cy(e){for(var t=[],n=String(e||Wa),o=n.indexOf(_u),a=0,s=!1,l;!s;)o===-1&&(o=n.length,s=!0),l=n.slice(a,o).trim(),(l||!s)&&t.push(l),a=o+1,o=n.indexOf(_u,a);return t}function dy(e,t){var n=t||{},o=n.padLeft===!1?Wa:tm,a=n.padRight?tm:Wa;return e[e.length-1]===Wa&&(e=e.concat(Wa)),e.join(a+_u+o).trim()}var uy=G7,nm=$p,py=ry,rm=zp.parse,om=Fp.parse,hy=my,fy={}.hasOwnProperty;function my(e,t,n){var o=n?by(n):null;return a;function a(l,i){var c=py(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&fy.call(o,u)?o[u]:u,i&&gy(i,c)&&(d.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return Qg(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var d,u,p;c==null||c!==c||(d=uy(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=rm(p):d.commaSeparated?p=om(p):d.commaOrSpaceSeparated&&(p=rm(om(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=yy(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=vy(d,u,p))}}function gy(e,t){return typeof e=="string"||"length"in e||xy(t.tagName,e)}function xy(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Qg(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)Qg(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function vy(e,t,n){var o,a,s;if(typeof n!="object"||!("length"in n))return am(e,t,n);for(a=n.length,o=-1,s=[];++o<a;)s[o]=am(e,t,n[o]);return s}function am(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||nm(n)===nm(t))&&(o=!0),o}function yy(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function by(e){for(var t=e.length,n=-1,o={},a;++n<t;)a=e[n],o[a.toLowerCase()]=a;return o}var jy=W7,Sy=hy,Jg=Sy(jy,"div");Jg.displayName="html";var Cy=Jg,wy=Cy;const _y="Æ",ky="&",Ty="Á",Ey="Â",Ny="À",Ry="Å",Ly="Ã",Dy="Ä",Oy="©",By="Ç",Ay="Ð",$y="É",My="Ê",Py="È",Iy="Ë",zy=">",Fy="Í",Uy="Î",Hy="Ì",Vy="Ï",Wy="<",Zy="Ñ",Ky="Ó",Yy="Ô",Gy="Ò",qy="Ø",Xy="Õ",Qy="Ö",Jy='"',e9="®",t9="Þ",n9="Ú",r9="Û",o9="Ù",a9="Ü",s9="Ý",l9="á",i9="â",c9="´",d9="æ",u9="à",p9="&",h9="å",f9="ã",m9="ä",g9="¦",x9="ç",v9="¸",y9="¢",b9="©",j9="¤",S9="°",C9="÷",w9="é",_9="ê",k9="è",T9="ð",E9="ë",N9="½",R9="¼",L9="¾",D9=">",O9="í",B9="î",A9="¡",$9="ì",M9="¿",P9="ï",I9="«",z9="<",F9="¯",U9="µ",H9="·",V9=" ",W9="¬",Z9="ñ",K9="ó",Y9="ô",G9="ò",q9="ª",X9="º",Q9="ø",J9="õ",eb="ö",tb="¶",nb="±",rb="£",ob='"',ab="»",sb="®",lb="§",ib="­",cb="¹",db="²",ub="³",pb="ß",hb="þ",fb="×",mb="ú",gb="û",xb="ù",vb="¨",yb="ü",bb="ý",jb="¥",Sb="ÿ",Cb={AElig:_y,AMP:ky,Aacute:Ty,Acirc:Ey,Agrave:Ny,Aring:Ry,Atilde:Ly,Auml:Dy,COPY:Oy,Ccedil:By,ETH:Ay,Eacute:$y,Ecirc:My,Egrave:Py,Euml:Iy,GT:zy,Iacute:Fy,Icirc:Uy,Igrave:Hy,Iuml:Vy,LT:Wy,Ntilde:Zy,Oacute:Ky,Ocirc:Yy,Ograve:Gy,Oslash:qy,Otilde:Xy,Ouml:Qy,QUOT:Jy,REG:e9,THORN:t9,Uacute:n9,Ucirc:r9,Ugrave:o9,Uuml:a9,Yacute:s9,aacute:l9,acirc:i9,acute:c9,aelig:d9,agrave:u9,amp:p9,aring:h9,atilde:f9,auml:m9,brvbar:g9,ccedil:x9,cedil:v9,cent:y9,copy:b9,curren:j9,deg:S9,divide:C9,eacute:w9,ecirc:_9,egrave:k9,eth:T9,euml:E9,frac12:N9,frac14:R9,frac34:L9,gt:D9,iacute:O9,icirc:B9,iexcl:A9,igrave:$9,iquest:M9,iuml:P9,laquo:I9,lt:z9,macr:F9,micro:U9,middot:H9,nbsp:V9,not:W9,ntilde:Z9,oacute:K9,ocirc:Y9,ograve:G9,ordf:q9,ordm:X9,oslash:Q9,otilde:J9,ouml:eb,para:tb,plusmn:nb,pound:rb,quot:ob,raquo:ab,reg:sb,sect:lb,shy:ib,sup1:cb,sup2:db,sup3:ub,szlig:pb,thorn:hb,times:fb,uacute:mb,ucirc:gb,ugrave:xb,uml:vb,uuml:yb,yacute:bb,yen:jb,yuml:Sb},wb={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var ex=_b;function _b(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var kb=Tb;function Tb(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var Eb=Nb;function Nb(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var Rb=Eb,Lb=ex,Db=Ob;function Ob(e){return Rb(e)||Lb(e)}var Fl,Bb=59,Ab=$b;function $b(e){var t="&"+e+";",n;return Fl=Fl||document.createElement("i"),Fl.innerHTML=t,n=Fl.textContent,n.charCodeAt(n.length-1)===Bb&&e!=="semi"||n===t?!1:n}var sm=Cb,lm=wb,Mb=ex,Pb=kb,tx=Db,Ib=Ab,zb=Jb,Fb={}.hasOwnProperty,_o=String.fromCharCode,Ub=Function.prototype,im={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Hb=9,cm=10,Vb=12,Wb=32,dm=38,Zb=59,Kb=60,Yb=61,Gb=35,qb=88,Xb=120,Qb=65533,ko="named",Up="hexadecimal",Hp="decimal",Vp={};Vp[Up]=16;Vp[Hp]=10;var pc={};pc[ko]=tx;pc[Hp]=Mb;pc[Up]=Pb;var nx=1,rx=2,ox=3,ax=4,sx=5,ku=6,lx=7,Dr={};Dr[nx]="Named character references must be terminated by a semicolon";Dr[rx]="Numeric character references must be terminated by a semicolon";Dr[ox]="Named character references cannot be empty";Dr[ax]="Numeric character references cannot be empty";Dr[sx]="Named character references must be known";Dr[ku]="Numeric character references cannot be disallowed";Dr[lx]="Numeric character references cannot be outside the permissible Unicode range";function Jb(e,t){var n={},o,a;t||(t={});for(a in im)o=t[a],n[a]=o??im[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),ej(e,n)}function ej(e,t){var n=t.additional,o=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],m=e.length,y=0,S=-1,j=u.column||1,_=u.line||1,x="",h=[],f,b,C,g,w,T,E,D,A,K,q,X,oe,se,V,O,P,I,H;for(typeof n=="string"&&(n=n.charCodeAt(0)),O=W(),D=l?we:Ub,y--,m++;++y<m;)if(w===cm&&(j=p[S]||1),w=e.charCodeAt(y),w===dm){if(E=e.charCodeAt(y+1),E===Hb||E===cm||E===Vb||E===Wb||E===dm||E===Kb||E!==E||n&&E===n){x+=_o(w),j++;continue}for(oe=y+1,X=oe,H=oe,E===Gb?(H=++X,E=e.charCodeAt(H),E===qb||E===Xb?(se=Up,H=++X):se=Hp):se=ko,f="",q="",g="",V=pc[se],H--;++H<m&&(E=e.charCodeAt(H),!!V(E));)g+=_o(E),se===ko&&Fb.call(sm,g)&&(f=g,q=sm[g]);C=e.charCodeAt(H)===Zb,C&&(H++,b=se===ko?Ib(g):!1,b&&(f=g,q=b)),I=1+H-oe,!C&&!o||(g?se===ko?(C&&!q?D(sx,1):(f!==g&&(H=X+f.length,I=1+H-X,C=!1),C||(A=f?nx:ox,t.attribute?(E=e.charCodeAt(H),E===Yb?(D(A,I),q=null):tx(E)?q=null:D(A,I)):D(A,I))),T=q):(C||D(rx,I),T=parseInt(g,Vp[se]),tj(T)?(D(lx,I),T=_o(Qb)):T in lm?(D(ku,I),T=lm[T]):(K="",nj(T)&&D(ku,I),T>65535&&(T-=65536,K+=_o(T>>>10|55296),T=56320|T&1023),T=K+_o(T))):se!==ko&&D(ax,I)),T?(ce(),O=W(),y=H-1,j+=H-oe+1,h.push(T),P=W(),P.offset++,s&&s.call(c,T,{start:O,end:P},e.slice(oe-1,H)),O=P):(g=e.slice(oe-1,H),x+=g,j+=g.length,y=H-1)}else w===10&&(_++,S++,j=0),w===w?(x+=_o(w),j++):ce();return h.join("");function W(){return{line:_,column:j,offset:y+(u.offset||0)}}function we(je,le){var Re=W();Re.column+=le,Re.offset+=le,l.call(d,Dr[je],Re,je)}function ce(){x&&(h.push(x),a&&a.call(i,x,{start:O,end:W()}),x="")}}function tj(e){return e>=55296&&e<=57343||e>1114111}function nj(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var ix={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(f){return f instanceof c?new c(f.type,h(f.content),f.alias):Array.isArray(f)?f.map(h):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(f,b){b=b||{};var C,g;switch(i.util.type(f)){case"Object":if(g=i.util.objId(f),b[g])return b[g];C={},b[g]=C;for(var w in f)f.hasOwnProperty(w)&&(C[w]=h(f[w],b));return C;case"Array":return g=i.util.objId(f),b[g]?b[g]:(C=[],b[g]=C,f.forEach(function(T,E){C[E]=h(T,b)}),C);default:return f}},getLanguage:function(h){for(;h;){var f=a.exec(h.className);if(f)return f[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,f){h.className=h.className.replace(RegExp(a,"gi"),""),h.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var f=document.getElementsByTagName("script");for(var b in f)if(f[b].src==h)return f[b]}return null}},isActive:function(h,f,b){for(var C="no-"+f;h;){var g=h.classList;if(g.contains(f))return!0;if(g.contains(C))return!1;h=h.parentElement}return!!b}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,f){var b=i.util.clone(i.languages[h]);for(var C in f)b[C]=f[C];return b},insertBefore:function(h,f,b,C){C=C||i.languages;var g=C[h],w={};for(var T in g)if(g.hasOwnProperty(T)){if(T==f)for(var E in b)b.hasOwnProperty(E)&&(w[E]=b[E]);b.hasOwnProperty(T)||(w[T]=g[T])}var D=C[h];return C[h]=w,i.languages.DFS(i.languages,function(A,K){K===D&&A!=h&&(this[A]=w)}),w},DFS:function h(f,b,C,g){g=g||{};var w=i.util.objId;for(var T in f)if(f.hasOwnProperty(T)){b.call(f,T,f[T],C||T);var E=f[T],D=i.util.type(E);D==="Object"&&!g[w(E)]?(g[w(E)]=!0,h(E,b,null,g)):D==="Array"&&!g[w(E)]&&(g[w(E)]=!0,h(E,b,T,g))}}},plugins:{},highlightAll:function(h,f){i.highlightAllUnder(document,h,f)},highlightAllUnder:function(h,f,b){var C={callback:b,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var g=0,w;w=C.elements[g++];)i.highlightElement(w,f===!0,C.callback)},highlightElement:function(h,f,b){var C=i.util.getLanguage(h),g=i.languages[C];i.util.setLanguage(h,C);var w=h.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,C);var T=h.textContent,E={element:h,language:C,grammar:g,code:T};function D(K){E.highlightedCode=K,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),b&&b.call(E.element)}if(i.hooks.run("before-sanity-check",E),w=E.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),b&&b.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){D(i.util.encode(E.code));return}if(f&&o.Worker){var A=new Worker(i.filename);A.onmessage=function(K){D(K.data)},A.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else D(i.highlight(E.code,E.grammar,E.language))},highlight:function(h,f,b){var C={code:h,grammar:f,language:b};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,f){var b=f.rest;if(b){for(var C in b)f[C]=b[C];delete f.rest}var g=new p;return m(g,g.head,h),u(h,g,f,g.head,0),S(g)},hooks:{all:{},add:function(h,f){var b=i.hooks.all;b[h]=b[h]||[],b[h].push(f)},run:function(h,f){var b=i.hooks.all[h];if(!(!b||!b.length))for(var C=0,g;g=b[C++];)g(f)}},Token:c};o.Prism=i;function c(h,f,b,C){this.type=h,this.content=f,this.alias=b,this.length=(C||"").length|0}c.stringify=function h(f,b){if(typeof f=="string")return f;if(Array.isArray(f)){var C="";return f.forEach(function(D){C+=h(D,b)}),C}var g={type:f.type,content:h(f.content,b),tag:"span",classes:["token",f.type],attributes:{},language:b},w=f.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),i.hooks.run("wrap",g);var T="";for(var E in g.attributes)T+=" "+E+'="'+(g.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+T+">"+g.content+"</"+g.tag+">"};function d(h,f,b,C){h.lastIndex=f;var g=h.exec(b);if(g&&C&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function u(h,f,b,C,g,w){for(var T in b)if(!(!b.hasOwnProperty(T)||!b[T])){var E=b[T];E=Array.isArray(E)?E:[E];for(var D=0;D<E.length;++D){if(w&&w.cause==T+","+D)return;var A=E[D],K=A.inside,q=!!A.lookbehind,X=!!A.greedy,oe=A.alias;if(X&&!A.pattern.global){var se=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,se+"g")}for(var V=A.pattern||A,O=C.next,P=g;O!==f.tail&&!(w&&P>=w.reach);P+=O.value.length,O=O.next){var I=O.value;if(f.length>h.length)return;if(!(I instanceof c)){var H=1,W;if(X){if(W=d(V,P,h,q),!W||W.index>=h.length)break;var le=W.index,we=W.index+W[0].length,ce=P;for(ce+=O.value.length;le>=ce;)O=O.next,ce+=O.value.length;if(ce-=O.value.length,P=ce,O.value instanceof c)continue;for(var je=O;je!==f.tail&&(ce<we||typeof je.value=="string");je=je.next)H++,ce+=je.value.length;H--,I=h.slice(P,ce),W.index-=P}else if(W=d(V,0,I,q),!W)continue;var le=W.index,Re=W[0],lt=I.slice(0,le),St=I.slice(le+Re.length),fe=P+I.length;w&&fe>w.reach&&(w.reach=fe);var Le=O.prev;lt&&(Le=m(f,Le,lt),P+=lt.length),y(f,Le,H);var Je=new c(T,K?i.tokenize(Re,K):Re,oe,Re);if(O=m(f,Le,Je),St&&m(f,O,St),H>1){var Ot={cause:T+","+D,reach:fe};u(h,f,b,O.prev,P,Ot),w&&Ot.reach>w.reach&&(w.reach=Ot.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},f={value:null,prev:h,next:null};h.next=f,this.head=h,this.tail=f,this.length=0}function m(h,f,b){var C=f.next,g={value:b,prev:f,next:C};return f.next=g,C.prev=g,h.length++,g}function y(h,f,b){for(var C=f.next,g=0;g<b&&C!==h.tail;g++)C=C.next;f.next=C,C.prev=f,h.length-=g}function S(h){for(var f=[],b=h.head.next;b!==h.tail;)f.push(b.value),b=b.next;return f}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(h){var f=JSON.parse(h.data),b=f.language,C=f.code,g=f.immediateClose;o.postMessage(i.highlight(C,i.languages[b],b)),g&&o.close()},!1)),i;var j=i.util.currentScript();j&&(i.filename=j.src,j.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof hi<"u"&&(hi.Prism=n)})(ix);var rj=ix.exports,oj=Wp;Wp.displayName="markup";Wp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Wp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var cx=Zp;Zp.displayName="css";Zp.aliases=[];function Zp(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const aj=Gn(cx);var sj=Kp;Kp.displayName="clike";Kp.aliases=[];function Kp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var lj=Yp;Yp.displayName="javascript";Yp.aliases=["js"];function Yp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Za=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof hi=="object"?hi:{},ij=wj();Za.Prism={manual:!0,disableWorkerMessageHandler:!0};var cj=wy,dj=zb,dx=rj,uj=oj,pj=cx,hj=sj,fj=lj;ij();var Gp={}.hasOwnProperty;function ux(){}ux.prototype=dx;var Ke=new ux,mj=Ke;Ke.highlight=xj;Ke.register=Ws;Ke.alias=gj;Ke.registered=vj;Ke.listLanguages=yj;Ws(uj);Ws(pj);Ws(hj);Ws(fj);Ke.util.encode=Sj;Ke.Token.stringify=bj;function Ws(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ke.languages[e.displayName]===void 0&&e(Ke)}function gj(e,t){var n=Ke.languages,o=e,a,s,l,i;t&&(o={},o[e]=t);for(a in o)for(s=o[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function xj(e,t){var n=dx.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ke.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Gp.call(Ke.languages,t))o=Ke.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function vj(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Gp.call(Ke.languages,e)}function yj(){var e=Ke.languages,t=[],n;for(n in e)Gp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function bj(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ke.util.type(e)==="Array"?jj(e,t):(o={type:e.type,content:Ke.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ke.hooks.run("wrap",o),cj(o.tag+"."+o.classes.join("."),Cj(o.attributes),o.content))}function jj(e,t){for(var n=[],o=e.length,a=-1,s;++a<o;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,o=n.length;++a<o;)s=n[a],n[a]=Ke.Token.stringify(s,t,n);return n}function Sj(e){return e}function Cj(e){var t;for(t in e)e[t]=dj(e[t]);return e}function wj(){var e="Prism"in Za,t=e?Za.Prism:void 0;return n;function n(){e?Za.Prism=t:delete Za.Prism,e=void 0,t=void 0}}const qp=Gn(mj);var Xp=s7(qp,{});Xp.registerLanguage=function(e,t){return qp.register(t)};Xp.alias=function(e,t){return qp.alias(e,t)};const fo=Xp;var _j=Qp;Qp.displayName="bash";Qp.aliases=["shell"];function Qp(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const kj=Gn(_j);var Tj=Jp;Jp.displayName="json";Jp.aliases=["webmanifest"];function Jp(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const Ej=Gn(Tj);var Nj=eh;eh.displayName="jsx";eh.aliases=[];function eh(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(d,u)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var m=d[p],y=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(m.content[0].content[1])&&u.pop():m.content[m.content.length-1].content==="/>"||u.push({tagName:i(m.content[0].content[1]),openedBraces:0}):u.length>0&&m.type==="punctuation"&&m.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?u[u.length-1].openedBraces--:y=!0),(y||typeof m=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var S=i(m);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(S+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(S=i(d[p-1])+S,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",S,null,S)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const Rj=Gn(Nj);var Lj=th;th.displayName="scss";th.aliases=[];function th(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Dj=Gn(Lj);var Oj=nh;nh.displayName="yaml";nh.aliases=["yml"];function nh(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const Bj=Gn(Oj);function px(e){return typeof e=="boolean"}function mo(e){return typeof e=="string"}function rh(e){return typeof e=="number"}function hx(e){return Number.isInteger(e)}function ua(e){return Array.isArray(e)}function hc(e){return typeof e=="function"}function Aj(e){return e instanceof RegExp}function go(e){return typeof e=="object"&&!ua(e)&&!fx(e)}function $j(e){return e===void 0}function fx(e){return e===null}function be(e){return!($j(e)||fx(e))}function fc(e){return!be(e)}function mx(...e){throw new Error(e.join(""))}const gx=(e,...t)=>hc(e)?e(...t):e;function Me(){}const xx=e=>e;function Mj(){return Intl.DateTimeFormat().resolvedOptions().locale}let oh={locale:Mj(),currency:"GBP",currencySign:"£",thousands:","};const Pj=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*o)};function Ij(e,t={}){return new Intl.NumberFormat(t.locale||oh.locale,t).format(e)}function zj(e,t={}){return Ij(e,{style:"currency",currency:oh.currency,...t})}function Ka(e,t=oh.thousands){if(fc(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function Fj(e,t=/,\s*|\s+/){return fc(e)?[]:mo(e)?e.length?e.split(t):[]:ua(e)?e:[e]}function Ls(e,t=!0,n={}){return go(e)?e:Fj(e).reduce((o,a)=>(o[a]=hc(t)?t(a):t,o),n)}function vx(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const Uj=vx;function Hj(e){if(hc(e))return e;if(Aj(e))return t=>e.test(t);if(go(e))return t=>!!e[t];if(ua(e)||mo(e)){const t=Ls(e);return n=>!!t[n]}mx("Invalid selector() specification: "+e)}const ah=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=Hj(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},um=(e,t)=>parseInt(e[t]||0),pm=(e,t)=>parseFloat(e[t]||0),hm=(e,t)=>(e[t]||"").toString(),fm=e=>(t,n)=>um(t,e)-um(n,e),pd=e=>(t,n)=>pm(t,e)-pm(n,e),mm=e=>(t,n)=>{let o=hm(t,e).toLowerCase(),a=hm(n,e).toLowerCase();return o>a?1:a>o?-1:0},Vj=e=>(t,n)=>e(n,t);function Wj(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function mc(e){return new Promise(t=>setTimeout(t,e))}fo.registerLanguage("jsx",Rj);fo.registerLanguage("json",Ej);fo.registerLanguage("css",aj);fo.registerLanguage("scss",Dj);fo.registerLanguage("bash",kj);fo.registerLanguage("yaml",Bj);const In=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:a=o,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,m]=v.useState(o),y=()=>{navigator.clipboard.writeText(e),u(!0),mc(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>m(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:y,children:d?"Copied":"Copy"})]}),r.jsx(fo,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:Zj(e,{undent:c})})]})},Zj=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},re=({Component:e,code:t,html:n,children:o,className:a="",language:s,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[r.jsx("div",{className:"source",children:r.jsx(In,{code:t||n,language:n?"html":s,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),Ul=v.createContext();function gm(e){return typeof e=="function"}function xm(e){return typeof e=="object"&&!yx(e)&&!Kj(e)}function yx(e){return Array.isArray(e)}function Kj(e){return e===null}function Yj({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=gm(n)?n(e):e[n];if(yx(l)&&(t=l[0],l=l[1]),gm(l)){const i=l(o,a,e);if(te.isValidElement(i))return i;xm(i)&&Object.assign(s,o,i)}else xm(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const Gj=e=>({Context:Ul,Provider:({children:t,...n})=>r.jsx(Ul.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(Ul.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>te.forwardRef((o,a)=>r.jsx(Ul.Consumer,{children:s=>r.jsx(Yj,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),qj=Gj(),ve=qj.Component,Xj="svg",Tu="-",bx="fill",Qj="path",Jj="line",eS="rect",tS="array",nS="circle",rS="ellipse",oS="polygon",aS="polyline",sh=/-(?!\d)/,vm="currentColor",lh=512,ih=512,Zs={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function sS(e,t,n=Zs){n.icons[e]=t}function lS(e,t=Zs){Object.entries(e).forEach(([n,o])=>sS(n,o,t))}const Hl=v.createContext();function ym(e){return typeof e=="function"}function bm(e){return typeof e=="object"&&!jx(e)&&!iS(e)}function jx(e){return Array.isArray(e)}function iS(e){return e===null}function cS({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=ym(n)?n(e):e[n];if(jx(l)&&(t=l[0],l=l[1]),ym(l)){const i=l(o,a,e);if(te.isValidElement(i))return i;bm(i)&&Object.assign(s,o,i)}else bm(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const dS=e=>({Context:Hl,Provider:({children:t,...n})=>r.jsx(Hl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(Hl.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>te.forwardRef((o,a)=>r.jsx(Hl.Consumer,{children:s=>r.jsx(cS,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),uS=dS(),pS=uS.Component;function Xn(e){return typeof e=="string"}function Ks(e){return Array.isArray(e)}function gc(e){return typeof e=="object"&&!Ks(e)&&!Cx(e)}function Sx(e){return e===void 0}function Cx(e){return e===null}function xc(e){return!(Sx(e)||Cx(e))}function wx(e){return!xc(e)}function Yn(...e){throw new Error(e.join(""))}function hS(){return Intl.DateTimeFormat().resolvedOptions().locale}hS();function Eu(e,t=/,\s*|\s+/){return wx(e)?[]:Xn(e)?e.length?e.split(t):[]:Ks(e)?e:[e]}const fS=(e,t)=>{const n=e[t];return delete e[t],n};function Ys(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,a]=n.split(/\s*[:=]\s*/);return t[o]=Sx(a)?!0:a,t},{})}const ch=e=>e.filter(xc).join(" "),mS=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),gS=(...e)=>ch(e.flatMap(t=>gc(t)?mS(t):t)),xS=e=>Eu(e,/\s+/),_x={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},wr={flip:(e,t)=>{Xn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};wr.flop=wr.flipy;wr["flip-x"]=wr.flipx;wr["flip-y"]=wr.flipy;function kx(e,t={..._x}){const n=Xn(e)?Ys(e):e||{};return Object.entries(n).reduce((o,[a,s])=>{const l=a.toLowerCase();return(wr[l]||Yn(`Invalid transform: ${l}`))(o,s),o},t)}const vS=4.42,Bn=e=>`${vS*e}%`,yS={},Nu={outline:{fill:"none",stroke:"currentColor",strokeWidth:Bn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Bn(.5)},thinner:{strokeWidth:Bn(1)},thin:{strokeWidth:Bn(1.5)},medium:{strokeWidth:Bn(2)},thick:{strokeWidth:Bn(2.5)},thicker:{strokeWidth:Bn(3)},thickest:{strokeWidth:Bn(3.5)}};Nu.line=Nu.outline;const bS={...Object.entries(Nu).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?vm:t,stroke:(e,t)=>e.stroke=t===!0?vm:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Bn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function Pi(e,t){return(Xn(t)?t.split(sh):t).forEach(n=>{const[o,a=!0]=n.split(/[:=]/),s=o.toLowerCase(),l=bS[s];if(l){l(e.style||(e.style={...yS}),a);return}(wr[s]||Yn(`Invalid style or transform: ${s}`))(e.transform||(e.transform={..._x}),a)})}const jS={width:lh,height:ih,type:bx},Tx={svg:e=>({element:Xj,svg:e}),array:e=>({element:tS,items:e}),path:e=>({element:Qj,d:e}),polygon:e=>({element:oS,points:e}),polyline:e=>({element:aS,points:e}),circle:e=>({element:nS,...Vl(e,"cx cy r")}),ellipse:e=>({element:rS,...Vl(e,"cx cy rx ry")}),line:e=>({element:Jj,...Vl(e,"x1 y1 x2 y2")}),rect:e=>({element:eS,...Vl(e,"x y width height rx ry")})};function Vl(e,t){const n=Ks(t)?[...t]:Eu(t);return Eu(e).reduce((o,a)=>{if(n.length){const s=n.shift();o[s]=a}return o},{})}const Ex=e=>{const[t,n=""]=e.split("?"),[o,...a]=t.split(/\.(?!\d)/),s=o.split(sh).filter(i=>i.length),l=Ys(n);return{dashes:s,classes:a,style:l}},SS=(e,t)=>{const n=Ex(e),{dashes:o}=n;for(let a=o.length;a>0;a--){const s=o.slice(0,a).join(Tu);if(t[s]){n.name=o.splice(0,a).join(Tu);break}}return n},jm=(e,t,n={})=>{const{icons:o}=t,a=SS(e,o),{name:s,classes:l,style:i,dashes:c}=a;wx(s)&&Yn(`No icon found matching any leading subset of ${a.dashes.join(Tu)}`);const d=t.icons[s]||Yn(`Icon not found in data: ${s}`),u=Nx(d,t,{...n,name:s});if((l.length||n.className)&&(u.className=ch([...l||[],n.className])),u.transform&&(u.transform=kx(u.transform)),u.style&&(u.style=Xn(u.style)?Ys(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};Pi(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&Pi(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function CS(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const Nx=(e,t,n={})=>{const{defaults:o={}}=t,a={...jS,...o,...n};return Rx(a,e,t)},Rx=(e,t,n)=>{if(Xn(t))return wS(e,t);if(gc(t))return _S(e,t,n);if(Ks(t))return kS(e,t,n);Yn(`Cannot parse icon data: ${t}`)};function wS(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,a]=n,{dashes:s,classes:l}=Ex(o),i=s.shift(),c=Tx[i]||Yn(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=ch(l)),s.length&&Pi(e.body,s),e}return e.body={element:"path",d:t},e}function _S(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const a=fS(o,"data");return Rx(e,a,n),Object.assign(e,o),e}for(let a of Object.entries(Tx)){const[s,l]=a,i=o[s];if(xc(i))return e.body=l(i),delete o[s],Object.assign(e,o),e}Yn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function kS(e,t,n){return e.body={element:"array",items:t.map(o=>Nx(o,n).body)},e}const TS=({size:e,...t})=>{t.width??(t.width=e||lh),t.height??(t.height=e||ih),t.path&&Object.assign(t,CS(t.path));let n;return t.style&&(Xn(t.style)?(n=Ys(t.style),t.style={}):n={...t.style}),Pi(t,t.type?t.type.split(sh).filter(o=>o.length):bx),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=kx(t.transform)),t},dh=e=>gc(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=o,t),{}):e,ES=e=>xc(e)?dh(Ys(e)):null,Qn=({style:e,class:t,...n})=>({style:Xn(e)?ES(e):dh(e),className:t,...n}),NS=e=>r.jsx("circle",{...Qn(e)}),RS=e=>r.jsx("ellipse",{...Qn(e)}),LS=e=>r.jsx("line",{...Qn(e)}),Lx=e=>r.jsx("path",{...Qn(e)}),DS=e=>r.jsx("polygon",{...Qn(e)}),OS=e=>r.jsx("polyline",{...Qn(e)}),BS=e=>r.jsx("rect",{...Qn(e)}),AS=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...Qn(t)}),$S=({items:e,...t})=>r.jsx("g",{...Qn(t),children:e.map((n,o)=>r.jsx(Ii,{body:n},o))}),MS={array:$S,circle:NS,ellipse:RS,line:LS,path:Lx,polygon:DS,polyline:OS,rect:BS,svg:AS},Ii=({path:e,body:t,...n})=>{if(e)return r.jsx(Lx,{d:e,...n});if(Xn(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(gc(t)){const{element:o,...a}=t,s=MS[o]||Yn(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(s,{...a})}if(Ks(t))return t.map((o,a)=>r.jsx(Ii,{body:o},a));Yn(`Don't know how to handle body: ${t}`)};function PS({width:e,height:t,transform:n,children:o}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${a} ${s})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${a} -${s})`,children:o})})})}const hd=({onClick:e,minx:t=0,miny:n=0,width:o=lh,height:a=ih,style:s,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${a}`,className:`${i} icon`,style:dh(s),onClick:e,children:[!!c&&console.log("style: ",s),l?r.jsx(PS,{width:o,height:a,transform:l,children:r.jsx(Ii,{...d})}):r.jsx(Ii,{...d})]}),IS=({name:e,iconsClass:t="icons",library:n=Zs,...o})=>{if(!e)return r.jsx(hd,{...TS(o)});const a=xS(e);return a.length===1?r.jsx(hd,{...o,...jm(e,n,o)}):r.jsx("div",{className:gS(t,o.className),children:a.map(s=>r.jsx(hd,{...o,...jm(s,n,o)},s))})},ci=pS(IS,"Icon"),zS=e=>e.filter(be).join(" "),FS=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Ce=(...e)=>zS(e.flatMap(t=>go(t)?FS(t):t)),US=e=>{if(!e)return null;const[t,n,o,a,s]=e.split("-");return Ce(t,VS(n),WS(o),ZS(a),KS(s))},HS=({className:e,size:t,color:n,...o})=>({...o,className:Ce(e,t,US(n))}),vc=e=>Dx(e,"border",t=>`border bdw-${t}`),uh=e=>Dx(e,"shadow-1",t=>`shadow-${t}`),ph=e=>Gs(e,t=>`bdr-${t}`),VS=e=>Gs(e,t=>`fgc-${t}`),WS=e=>Gs(e,t=>`bgc-${t}`),ZS=e=>Gs(e,t=>`fgd-${t}`),KS=e=>Gs(e,t=>`bgd-${t}`),Gs=(e,t)=>hx(parseInt(e))?gx(t,e):null,Dx=(e,t,n)=>e===!0?t:parseInt(e)?gx(n,e):null,ee=e=>r.jsx(ci,{...HS(e)});function Sm(e,t,n={}){return be(t)&&(n[e]=hx(t)?`${t}deg`:t),Object.keys(n).length?n:null}const YS=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(ci,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(ci,{name:n,className:o,style:Sm("--icon-rotate",a),fixedWidth:!0}),c||d,!!s&&r.jsx(ci,{name:s,className:l,style:Sm("--icon-rotate",i),fixedWidth:!0})]}),qs=ve(YS,"WithIcons");lS({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const GS=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(ee,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(ee,{name:o?a:s,fixedWidth:!0,className:"reveal"})]}),Ox=ve(GS,"AlertControls"),qS=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:a,Controls:s=Ox})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(ee,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(s,{...a})]}),XS=ve(qS,"AlertHeadline"),QS=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),Bx=ve(QS,"AlertContent"),JS=({icon:e,Content:t=Bx,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(ee,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),eC=ve(JS,"AlertIcon"),Ax=e=>mo(e)||rh(e)||px(e),Xs=e=>Ax(e)||!e.separator&&!e.heading&&!e.disabled,tC=e=>Ax(e)?e:e.value??e.id,nC=(e,t,n=tC)=>{if(fc(t))return[];const o=e.findIndex(a=>t===n(a));return o>=0?[e[o],o]:[]},rC=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{const a=go(o),s=a?o.search??o.text??o.label??o.name??o.value:o;if(a&&o.fixed)return!0;if(be(s)){const l=s.toString().toLowerCase();return n.every(i=>l.indexOf(i)>=0)}return!1})};function oC(e,t=Xs){const n=e.findIndex(t);return n<0?null:n}function aC(e,t=Xs){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function sC(e,t,n=Xs){for(let o=1;o<=e.length;o++){const a=(t+o)%e.length;if(n(e[a]))return a}return null}function lC(e,t,n=Xs){for(let o=1;o<=e.length;o++){const a=(t+e.length-o)%e.length;if(n(e[a]))return a}return null}const di="",hh="ArrowDown",fh="ArrowUp",iC="Tab",yc="Enter",mh=" ",bc="Escape",cC="Backspace",zi=e=>{const t=`HINT: define ${e}() to render this value`;return n=>mo(n)||rh(n)?n:go(n)?n.text??n.label??n.name??t:t},dC=e=>mo(e)||rh(e)?e:r.jsx(qs,{...e}),$x=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):o>s&&e.scrollTo({top:a+(o-s)})},Jn=({title:e,headline:t,headIcon:n,type:o,size:a,color:s,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:m,onDismiss:y,icon:S,dismissable:j=!1,revealable:_=!1,revealed:x=!1,openIcon:h,closedIcon:f,dismissIcon:b,Headline:C=XS,Controls:g=Ox,Content:w=Bx,Icon:T=eC})=>{const[E,D]=v.useState(_?x:!0),[A,K]=v.useState(!1),q=Ce("alert",o,a,s,u,{revealable:_,dismissable:j,stripe:l},E?"revealed":null,uh(d),vc(i),ph(c)),X=()=>D(I=>!I),se={dismissable:j,revealable:_,isRevealed:E,dismiss:()=>{K(!0),y&&y()},openIcon:h,closedIcon:f,dismissIcon:b},V={title:e,text:p,children:m},O={...V,icon:S,Content:w},P={headline:t,headIcon:n,toggle:X,revealable:_,controlProps:se,Controls:g};return A?null:r.jsxs("div",{className:q,children:[!!t&&r.jsx(C,{...P}),E&&(S?r.jsx(T,{...O}):r.jsx(w,{...V}))]})},Ya=ve(e=>r.jsx(Jn,{...e,type:"info"}),"Info"),Ga=ve(e=>r.jsx(Jn,{...e,type:"success"}),"Success"),qa=ve(e=>r.jsx(Jn,{...e,type:"warning"}),"Warning"),Xa=ve(e=>r.jsx(Jn,{...e,type:"error"}),"Error");Jn.Info=Ya;Jn.Success=Ga;Jn.Warning=qa;Jn.Error=Xa;const J=ve(Jn,"Alert"),uC=({type:e="button",size:t,color:n,className:o,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:m,label:y,tooltip:S,tabIndex:j=0,icon:_,iconClass:x,iconLeft:h,iconLeftClass:f,iconRight:b,iconRightClass:C,text:g,children:w,Content:T=qs,...E})=>{const D=Ce(t,n,o,{bright:s,dark:l,outline:i,bare:c,shaded:d,icon:_},uh(u),vc(p),ph(m)),A={icon:_,iconClass:x,iconLeft:h,iconLeftClass:f,iconRight:b,iconRightClass:C,text:g,children:w};return r.jsx("button",{className:D,"aria-label":y,tabIndex:j,type:e,disabled:a,"aria-disabled":a,"data-tooltip":S,...E,children:r.jsx(T,{...A})})},B=ve(uC,"Button"),pC=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:a=B,...s})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(a,{className:o,...s,...l},i)):t}),xo=ve(pC,"Buttons"),hC=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:Ce(e,{disabled:t}),ref:o,children:n}),fC=ve(hC,"CheckboxLabel"),mC=({disabled:e=!1,tabIndex:t=0,onChange:n=Me,ref:o,...a})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),gC=ve(mC,"CheckboxInput"),xC=({size:e,color:t,border:n,inline:o,className:a="checkbox",text:s,ref:l,inputRef:i,checked:c,checkedText:d=s,uncheckedText:u=s,inputClass:p,Label:m=fC,Input:y=gC,...S})=>r.jsxs(m,{className:Ce(e,t,a,vc(n),{inline:o}),ref:l,checked:c,...S,children:[r.jsx(y,{className:p,ref:i,checked:c,...S}),c?d:u]}),Rn=ve(xC,"Checkbox"),vC=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},yC=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:a}=vC({checked:e}),s=l=>{a(l),t&&t(l)};return r.jsx(Rn,{checked:o,onChange:s,...n})},Or=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},bC=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:m,className:y=m,buttonClass:S,onClick:j=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:x,hide:h,show:f}=Or({visible:t}),C={iconRight:n,text:o,color:a,className:s,...u,onClick:w=>{w.preventDefault(),h(),j()}},g={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:h};return r.jsx(xo,{className:y,buttonClass:S,buttons:x?[g,C]:[{..._,onClick:f}]})},Ln=ve(bC,"Confirm");var jC=Object.defineProperty,SC=(e,t,n)=>t in e?jC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fd=(e,t,n)=>(SC(e,typeof t!="symbol"?t+"":t,n),n);const Br=(e,t={})=>{const n=te.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Use:()=>te.useContext(n)}};function CC(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function wC(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||kC(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function _C(e,t){const n=e.debug??t.debug,o=Cm(e.debugPrefix??t.debugPrefix,e),a=Cm(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function Cm(e,t){return typeof e=="function"?e(t):e}function kC(...e){throw new Error(e.join(""))}class is extends te.Component{constructor(t){super(t);const n=this.constructor;this.debug=_C(t,n),this.state=CC(n.initialState,n.initialProps,t),this.actions=wC(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}fd(is,"initialState",{}),fd(is,"initialProps",{}),fd(is,"actions",[]);const md=e=>{mo(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=vx(t)),e.id||(e.id=t),e},TC=e=>{if(mo(e))return Ls(e,md);if(ua(e))return e.reduce((t,n)=>{const o=md(n);return t[o.field]=o,t},{});if(go(e))return Object.entries(e).reduce((t,[n,o])=>{const a=md({...o,field:n});return t[a.field]=a,t},{});mx("Invalid columns definition")},EC=e=>Object.keys(e).filter(t=>!e[t].hidden),NC=({value:e,search:t})=>be(e)?e.toString()===t.toString():!1,Aa=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(be(e)){const o=e.toString().toLowerCase();return n.every(a=>o.indexOf(a)>-1)}else return!1},RC=({value:e,search:t})=>be(e)?parseInt(e)===parseInt(t):!1,LC=({value:e,search:t})=>be(e)?parseFloat(e)===parseFloat(t):!1,DC=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},wm={string:Aa,text:Aa,number:Aa,price:Aa,pounds:Aa,select:NC,boolean:DC,integer:RC,float:LC},OC=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(a=>o.every(s=>{const l=n[s],i=t[s],c=i.field||s,d=a[c],u=i.filterType||i.type,p=i.filter||wm[u]||wm.text;return be(l)&&l.length?p({row:a,field:c,value:d,search:l}):!0}))},BC=(e,t=1,n=e.length)=>{const o=e.length,a=Math.ceil(o/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},_m={string:mm,text:mm,number:pd,price:pd,currency:pd,integer:fm,id:fm},AC=(e,t,n,o)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=hc(s)?s:(_m[l]||_m.text)(n);return e.sort(o?Vj(i):i)},$C=({render:e,rows:t=[],...n})=>{const o=v.useMemo(()=>TC(n.columns),[n.columns]),[a,s]=v.useState(n.pageNo??1),[l,i]=v.useState(n.pageSize??10),[c,d]=v.useState(!1),[u,p]=v.useState({}),[m,y]=v.useState(n.sortColumn),[S,j]=v.useState(n.sortReverse??!1),[_,x]=v.useState(Object.keys(o)),[h,f]=v.useState(EC(o)),[b,C]=v.useState(!1),g=()=>C(!0),w=()=>C(!1),T=X=>{m===X?j(oe=>!oe):(y(X),j(!1))},E=X=>{X.preventDefault(),X.stopPropagation(),d(oe=>!oe)},D=(X,oe)=>{p(se=>{const V={...se};return be(oe)&&oe.length?V[X]=oe:delete V[X],V}),s(1)},A=X=>f(oe=>{const se=Ls(oe);return console.log("visible: ",oe),console.log("isVisible: ",se),se[X]?oe.filter(V=>V!==X):Object.keys(o).filter(V=>V===X||se[V])}),K=X=>{let oe=[],se=[];const V=Ls(h);X.forEach(O=>{oe.push(O),V[O]&&se.push(O)}),f(se),x(oe)},q=v.useMemo(()=>BC(AC(OC(t,o,u),o,m,S),a,l),[t,o,u,m,S,a,l]);return e({...n,rows:t,columns:o,page:q,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:E,filters:u,setFilter:D,sortColumn:m,setSortColumn:y,sortReverse:S,setSortReverse:j,toggleSortColumn:T,visibleColumns:h,setVisibleColumns:f,toggleVisibleColumn:A,columnOrder:_,setColumnOrder:x,changeColumnOrder:K,controlsVisible:b,showControls:g,hideControls:w})},ht=Br($C),MC=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(B,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(B,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${Ka(e.total)} rows`:`rows ${Ka(e.from)}-${Ka(e.to)} of ${Ka(e.total)}`," "]})]}),PC=ht.Consumer(MC);var Mn;let Mx=(Mn=class extends is{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),mc(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case yc:case mh:this.state.isOpen?this.close():this.open();break;case bc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},ge(Mn,"debug",!1),ge(Mn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Me,onUnload:Me,onFocus:Me,onBlur:Me,onClick:Me,onOpen:Me,onClose:Me}),ge(Mn,"inactiveState",{isOpen:!1}),ge(Mn,"initialState",{...Mn.inactiveState}),Mn);const Yr=class Yr extends Mx{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case hh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case fh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case yc:case mh:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case bc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return oC(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return aC(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return sC(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return lC(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&be(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){$x(this._menuRef,t)}};ge(Yr,"debug",!0),ge(Yr,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Me,onUnload:Me,onFocus:Me,onBlur:Me,onClick:Me,onOpen:Me,onClose:Me,onSelect:Me,closeOnSelect:!0}),ge(Yr,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),ge(Yr,"initialState",{...Yr.inactiveState});let Fi=Yr;var Sn;let IC=(Sn=class extends Fi{},ge(Sn,"debug",!1),ge(Sn,"debugPrefix","Dropdown > "),ge(Sn,"debugColor","MediumVioletRed"),ge(Sn,"defaultProps",{...Sn.defaultProps,options:[],displayOption:dC}),ge(Sn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),Sn);const Qs=Br(IC),zC=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(qs,{...ah(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),FC=Qs.Consumer(zC),UC=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:Ce(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),HC=Qs.Consumer(UC),VC=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:Ce(t,e.className)}),WC=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:Ce(n,t,e.className),children:e.heading}),ZC=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=HC,Separator:u=VC,Heading:p=WC})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,y)=>m.separator?r.jsx(u,{option:m},y):m.heading?r.jsx(p,{option:m},y):r.jsx(d,{option:m,active:be(o)&&e[o]===m,selected:a===m,onClick:()=>s(m),onMouseEnter:()=>l(y)},m.id??m.value??y))}),KC=Qs.Consumer(ZC),YC=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=FC,Options:c=KC})=>r.jsxs("div",{className:Ce(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),GC=Qs.Consumer(YC),qC=({Content:e=GC,...t})=>r.jsx(Qs.Provider,{...t,children:r.jsx(e,{})}),Ar=ve(qC,"DropdownMenu"),XC=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Ar,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),QC=ht.Consumer(XC);class Qa extends Mx{}ge(Qa,"debug",!1),ge(Qa,"debugPrefix","Dropdown > "),ge(Qa,"debugColor","MediumVioletRed"),ge(Qa,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const Js=Br(Qa),JC=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(qs,{...ah(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),ew=Js.Consumer(JC),tw=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),nw=Js.Consumer(tw),rw=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=ew,Body:c=nw})=>r.jsxs("div",{className:Ce(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),ow=Js.Consumer(rw),aw=({Content:e=ow,content:t,children:n,...o})=>r.jsx(Js.Provider,{content:t||n,...o,children:r.jsx(e,{})}),mn=ve(aw,"Dropdown"),sw=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:a,isVisible:s,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx(Rn,{className:"fluid flex middle",checked:s[e.id]||!1,onChange:()=>a(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(ee,{name:"drag",className:"drag-handle"})})]}),lw=({close:e})=>r.jsx(B,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),iw=Js.Consumer(lw);function cw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(a=>a(o))},t)}const jc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pa(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function gh(e){return"nodeType"in e}function bt(e){var t,n;return e?pa(e)?e:gh(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function xh(e){const{Document:t}=bt(e);return e instanceof t}function el(e){return pa(e)?!1:e instanceof bt(e).HTMLElement}function Px(e){return e instanceof bt(e).SVGElement}function ha(e){return e?pa(e)?e.document:gh(e)?xh(e)?e:el(e)||Px(e)?e.ownerDocument:document:document:document}const Xt=jc?v.useLayoutEffect:v.useEffect;function Sc(e){const t=v.useRef(e);return Xt(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t.current==null?void 0:t.current(...o)},[])}function dw(){const e=v.useRef(null),t=v.useCallback((o,a)=>{e.current=setInterval(o,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Ds(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return Xt(()=>{n.current!==e&&(n.current=e)},t),n}function tl(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function Ui(e){const t=Sc(e),n=v.useRef(null),o=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,o]}function Hi(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let gd={};function nl(e,t){return v.useMemo(()=>{if(t)return t;const n=gd[e]==null?0:gd[e]+1;return gd[e]=n,e+"-"+n},[e,t])}function Ix(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return o.reduce((s,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=s[c];u!=null&&(s[c]=u+e*d)}return s},{...t})}}const Xo=Ix(1),Os=Ix(-1);function uw(e){return"clientX"in e&&"clientY"in e}function Cc(e){if(!e)return!1;const{KeyboardEvent:t}=bt(e.target);return t&&e instanceof t}function pw(e){if(!e)return!1;const{TouchEvent:t}=bt(e.target);return t&&e instanceof t}function Vi(e){if(pw(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return uw(e)?{x:e.clientX,y:e.clientY}:null}const _r=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[_r.Translate.toString(e),_r.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),km="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function hw(e){return e.matches(km)?e:e.querySelector(km)}const fw={display:"none"};function mw(e){let{id:t,value:n}=e;return te.createElement("div",{id:t,style:fw},n)}function gw(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return te.createElement("div",{id:t,style:a,role:"status","aria-live":o,"aria-atomic":!0},n)}function xw(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const zx=v.createContext(null);function vw(e){const t=v.useContext(zx);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function yw(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:a,event:s}=o;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const bw={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},jw={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Sw(e){let{announcements:t=jw,container:n,hiddenTextDescribedById:o,screenReaderInstructions:a=bw}=e;const{announce:s,announcement:l}=xw(),i=nl("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),vw(v.useMemo(()=>({onDragStart(p){let{active:m}=p;s(t.onDragStart({active:m}))},onDragMove(p){let{active:m,over:y}=p;t.onDragMove&&s(t.onDragMove({active:m,over:y}))},onDragOver(p){let{active:m,over:y}=p;s(t.onDragOver({active:m,over:y}))},onDragEnd(p){let{active:m,over:y}=p;s(t.onDragEnd({active:m,over:y}))},onDragCancel(p){let{active:m,over:y}=p;s(t.onDragCancel({active:m,over:y}))}}),[s,t])),!c)return null;const u=te.createElement(te.Fragment,null,te.createElement(mw,{id:o,value:a.draggable}),te.createElement(gw,{id:i,announcement:l}));return n?Pn.createPortal(u,n):u}var Ge;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ge||(Ge={}));function Wi(){}function Tm(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Cw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const fn=Object.freeze({x:0,y:0});function Fx(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function ww(e,t){const n=Vi(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function Ux(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function _w(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function Em(e){let{left:t,top:n,height:o,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+o},{x:t+a,y:n+o}]}function Hx(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Nm(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const kw=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Nm(t,t.left,t.top),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=Fx(Nm(c),a);s.push({id:i,data:{droppableContainer:l,value:d}})}}return s.sort(Ux)},Tw=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Em(t),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=Em(c),u=a.reduce((m,y,S)=>m+Fx(d[S],y),0),p=Number((u/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(Ux)};function Ew(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-o,i=s-n;if(o<a&&n<s){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const Nw=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=[];for(const s of o){const{id:l}=s,i=n.get(l);if(i){const c=Ew(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(_w)};function Rw(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Vx(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:fn}function Lw(e){return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const Dw=Lw(1);function Wx(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Ow(e,t,n){const o=Wx(t);if(!o)return e;const{scaleX:a,scaleY:s,x:l,y:i}=o,c=e.left-l-(1-a)*parseFloat(n),d=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const Bw={ignoreTransform:!1};function fa(e,t){t===void 0&&(t=Bw);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=bt(e).getComputedStyle(e);d&&(n=Ow(n,d,u))}const{top:o,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:o,left:a,width:s,height:l,bottom:i,right:c}}function Rm(e){return fa(e,{ignoreTransform:!0})}function Aw(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function $w(e,t){return t===void 0&&(t=bt(e).getComputedStyle(e)),t.position==="fixed"}function Mw(e,t){t===void 0&&(t=bt(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function wc(e,t){const n=[];function o(a){if(t!=null&&n.length>=t||!a)return n;if(xh(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!el(a)||Px(a)||n.includes(a))return n;const s=bt(e).getComputedStyle(a);return a!==e&&Mw(a,s)&&n.push(a),$w(a,s)?n:o(a.parentNode)}return e?o(e):n}function Zx(e){const[t]=wc(e,1);return t??null}function xd(e){return!jc||!e?null:pa(e)?e:gh(e)?xh(e)||e===ha(e).scrollingElement?window:el(e)?e:null:null}function Kx(e){return pa(e)?e.scrollX:e.scrollLeft}function Yx(e){return pa(e)?e.scrollY:e.scrollTop}function Ru(e){return{x:Kx(e),y:Yx(e)}}var nt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(nt||(nt={}));function Gx(e){return!jc||!e?!1:e===document.scrollingElement}function qx(e){const t={x:0,y:0},n=Gx(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const Pw={x:.2,y:.2};function Iw(e,t,n,o,a){let{top:s,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),a===void 0&&(a=Pw);const{isTop:d,isBottom:u,isLeft:p,isRight:m}=qx(e),y={x:0,y:0},S={x:0,y:0},j={height:t.height*a.y,width:t.width*a.x};return!d&&s<=t.top+j.height?(y.y=nt.Backward,S.y=o*Math.abs((t.top+j.height-s)/j.height)):!u&&c>=t.bottom-j.height&&(y.y=nt.Forward,S.y=o*Math.abs((t.bottom-j.height-c)/j.height)),!m&&i>=t.right-j.width?(y.x=nt.Forward,S.x=o*Math.abs((t.right-j.width-i)/j.width)):!p&&l<=t.left+j.width&&(y.x=nt.Backward,S.x=o*Math.abs((t.left+j.width-l)/j.width)),{direction:y,speed:S}}function zw(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:o,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:a,width:e.clientWidth,height:e.clientHeight}}function Xx(e){return e.reduce((t,n)=>Xo(t,Ru(n)),fn)}function Fw(e){return e.reduce((t,n)=>t+Kx(n),0)}function Uw(e){return e.reduce((t,n)=>t+Yx(n),0)}function Qx(e,t){if(t===void 0&&(t=fa),!e)return;const{top:n,left:o,bottom:a,right:s}=t(e);Zx(e)&&(a<=0||s<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Hw=[["x",["left","right"],Fw],["y",["top","bottom"],Uw]];class vh{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=wc(n),a=Xx(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of Hw)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=a[s]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class cs{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var a;(a=this.target)==null||a.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function Vw(e){const{EventTarget:t}=bt(e);return e instanceof t?e:ha(e)}function vd(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Ht;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Ht||(Ht={}));function Lm(e){e.preventDefault()}function Ww(e){e.stopPropagation()}var me;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(me||(me={}));const Jx={start:[me.Space,me.Enter],cancel:[me.Esc],end:[me.Space,me.Enter]},Zw=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case me.Right:return{...n,x:n.x+25};case me.Left:return{...n,x:n.x-25};case me.Down:return{...n,y:n.y+25};case me.Up:return{...n,y:n.y-25}}};class yh{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new cs(ha(n)),this.windowListeners=new cs(bt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ht.Resize,this.handleCancel),this.windowListeners.add(Ht.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ht.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&Qx(o),n(fn)}handleKeyDown(t){if(Cc(t)){const{active:n,context:o,options:a}=this.props,{keyboardCodes:s=Jx,coordinateGetter:l=Zw,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:fn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const m=Os(p,u),y={x:0,y:0},{scrollableAncestors:S}=o.current;for(const j of S){const _=t.code,{isTop:x,isRight:h,isLeft:f,isBottom:b,maxScroll:C,minScroll:g}=qx(j),w=zw(j),T={x:Math.min(_===me.Right?w.right-w.width/2:w.right,Math.max(_===me.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===me.Down?w.bottom-w.height/2:w.bottom,Math.max(_===me.Down?w.top:w.top+w.height/2,p.y))},E=_===me.Right&&!h||_===me.Left&&!f,D=_===me.Down&&!b||_===me.Up&&!x;if(E&&T.x!==p.x){const A=j.scrollLeft+m.x,K=_===me.Right&&A<=C.x||_===me.Left&&A>=g.x;if(K&&!m.y){j.scrollTo({left:A,behavior:i});return}K?y.x=j.scrollLeft-A:y.x=_===me.Right?j.scrollLeft-C.x:j.scrollLeft-g.x,y.x&&j.scrollBy({left:-y.x,behavior:i});break}else if(D&&T.y!==p.y){const A=j.scrollTop+m.y,K=_===me.Down&&A<=C.y||_===me.Up&&A>=g.y;if(K&&!m.x){j.scrollTo({top:A,behavior:i});return}K?y.y=j.scrollTop-A:y.y=_===me.Down?j.scrollTop-C.y:j.scrollTop-g.y,y.y&&j.scrollBy({top:-y.y,behavior:i});break}}this.handleMove(t,Xo(Os(p,this.referenceCoordinates),y))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}yh.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=Jx,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function Dm(e){return!!(e&&"distance"in e)}function Om(e){return!!(e&&"delay"in e)}class bh{constructor(t,n,o){var a;o===void 0&&(o=Vw(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=ha(l),this.documentListeners=new cs(this.document),this.listeners=new cs(o),this.windowListeners=new cs(bt(l)),this.initialCoordinates=(a=Vi(s))!=null?a:fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Ht.Resize,this.handleCancel),this.windowListeners.add(Ht.DragStart,Lm),this.windowListeners.add(Ht.VisibilityChange,this.handleCancel),this.windowListeners.add(Ht.ContextMenu,Lm),this.documentListeners.add(Ht.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Om(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(Dm(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Ht.Click,Ww,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ht.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=Vi(t))!=null?n:fn,d=Os(a,c);if(!o&&i){if(Dm(i)){if(i.tolerance!=null&&vd(d,i.tolerance))return this.handleCancel();if(vd(d,i.distance))return this.handleStart()}return Om(i)&&vd(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===me.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const Kw={move:{name:"pointermove"},end:{name:"pointerup"}};class jh extends bh{constructor(t){const{event:n}=t,o=ha(n.target);super(t,Kw,o)}}jh.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const Yw={move:{name:"mousemove"},end:{name:"mouseup"}};var Lu;(function(e){e[e.RightClick=2]="RightClick"})(Lu||(Lu={}));class Gw extends bh{constructor(t){super(t,Yw,ha(t.event.target))}}Gw.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===Lu.RightClick?!1:(o==null||o({event:n}),!0)}}];const yd={move:{name:"touchmove"},end:{name:"touchend"}};class qw extends bh{constructor(t){super(t,yd)}static setup(){return window.addEventListener(yd.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(yd.move.name,t)};function t(){}}}qw.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:a}=n;return a.length>1?!1:(o==null||o({event:n}),!0)}}];var ds;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(ds||(ds={}));var Zi;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Zi||(Zi={}));function Xw(e){let{acceleration:t,activator:n=ds.Pointer,canScroll:o,draggingRect:a,enabled:s,interval:l=5,order:i=Zi.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:m}=e;const y=Jw({delta:p,disabled:!s}),[S,j]=dw(),_=v.useRef({x:0,y:0}),x=v.useRef({x:0,y:0}),h=v.useMemo(()=>{switch(n){case ds.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case ds.DraggableRect:return a}},[n,a,c]),f=v.useRef(null),b=v.useCallback(()=>{const g=f.current;if(!g)return;const w=_.current.x*x.current.x,T=_.current.y*x.current.y;g.scrollBy(w,T)},[]),C=v.useMemo(()=>i===Zi.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!s||!d.length||!h){j();return}for(const g of C){if((o==null?void 0:o(g))===!1)continue;const w=d.indexOf(g),T=u[w];if(!T)continue;const{direction:E,speed:D}=Iw(g,T,h,t,m);for(const A of["x","y"])y[A][E[A]]||(D[A]=0,E[A]=0);if(D.x>0||D.y>0){j(),f.current=g,S(b,l),_.current=D,x.current=E;return}}_.current={x:0,y:0},x.current={x:0,y:0},j()},[t,b,o,j,s,l,JSON.stringify(h),JSON.stringify(y),S,d,C,u,JSON.stringify(m)])}const Qw={x:{[nt.Backward]:!1,[nt.Forward]:!1},y:{[nt.Backward]:!1,[nt.Forward]:!1}};function Jw(e){let{delta:t,disabled:n}=e;const o=Hi(t);return tl(a=>{if(n||!o||!a)return Qw;const s={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[nt.Backward]:a.x[nt.Backward]||s.x===-1,[nt.Forward]:a.x[nt.Forward]||s.x===1},y:{[nt.Backward]:a.y[nt.Backward]||s.y===-1,[nt.Forward]:a.y[nt.Forward]||s.y===1}}},[n,t,o])}function e_(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return tl(a=>{var s;return t===null?null:(s=o??a)!=null?s:null},[o,t])}function t_(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:a}=o,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...s]},[]),[e,t])}var Bs;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Bs||(Bs={}));var Du;(function(e){e.Optimized="optimized"})(Du||(Du={}));const Bm=new Map;function n_(e,t){let{dragging:n,dependencies:o,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=a,u=v.useRef(e),p=_(),m=Ds(p),y=v.useCallback(function(x){x===void 0&&(x=[]),!m.current&&l(h=>h===null?x:h.concat(x.filter(f=>!h.includes(f))))},[m]),S=v.useRef(null),j=tl(x=>{if(p&&!n)return Bm;if(!x||x===Bm||u.current!==e||s!=null){const h=new Map;for(let f of e){if(!f)continue;if(s&&s.length>0&&!s.includes(f.id)&&f.rect.current){h.set(f.id,f.rect.current);continue}const b=f.node.current,C=b?new vh(c(b),b):null;f.rect.current=C,C&&h.set(f.id,C)}return h}return x},[e,s,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||y()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||S.current!==null||(S.current=setTimeout(()=>{y(),S.current=null},i))},[i,p,y,...o]),{droppableRects:j,measureDroppableContainers:y,measuringScheduled:s!=null};function _(){switch(d){case Bs.Always:return!1;case Bs.BeforeDragging:return n;default:return!n}}}function Sh(e,t){return tl(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function r_(e,t){return Sh(e,t)}function o_(e){let{callback:t,disabled:n}=e;const o=Sc(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(o)},[o,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function _c(e){let{callback:t,disabled:n}=e;const o=Sc(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(o)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function a_(e){return new vh(fa(e),e)}function Am(e,t,n){t===void 0&&(t=a_);const[o,a]=v.useReducer(i,null),s=o_({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=_c({callback:a});return Xt(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function s_(e){const t=Sh(e);return Vx(e,t)}const $m=[];function l_(e){const t=v.useRef(e),n=tl(o=>e?o&&o!==$m&&e&&t.current&&e.parentNode===t.current.parentNode?o:wc(e):$m,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function i_(e){const[t,n]=v.useState(null),o=v.useRef(e),a=v.useCallback(s=>{const l=xd(s.target);l&&n(i=>i?(i.set(l,Ru(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=o.current;if(e!==s){l(s);const i=e.map(c=>{const d=xd(c);return d?(d.addEventListener("scroll",a,{passive:!0}),[d,Ru(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const d=xd(c);d==null||d.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>Xo(s,l),fn):Xx(e):fn,[e,t])}function Mm(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==fn;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?Os(e,n.current):fn}function c_(e){v.useEffect(()=>{if(!jc)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function d_(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:a,handler:s}=o;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function e3(e){return v.useMemo(()=>e?Aw(e):null,[e])}const bd=[];function u_(e,t){t===void 0&&(t=fa);const[n]=e,o=e3(n?bt(n):null),[a,s]=v.useReducer(i,bd),l=_c({callback:s});return e.length>0&&a===bd&&s(),Xt(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>Gx(c)?o:new vh(t(c),c)):bd}}function t3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return el(t)?t:e}function p_(e){let{measure:t}=e;const[n,o]=v.useState(null),a=v.useCallback(d=>{for(const{target:u}of d)if(el(u)){o(p=>{const m=t(u);return p?{...p,width:m.width,height:m.height}:m});break}},[t]),s=_c({callback:a}),l=v.useCallback(d=>{const u=t3(d);s==null||s.disconnect(),u&&(s==null||s.observe(u)),o(u?t(u):null)},[t,s]),[i,c]=Ui(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const h_=[{sensor:jh,options:{}},{sensor:yh,options:{}}],f_={current:{}},ui={draggable:{measure:Rm},droppable:{measure:Rm,strategy:Bs.WhileDragging,frequency:Du.Optimized},dragOverlay:{measure:fa}};class us extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const m_={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new us,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Wi},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ui,measureDroppableContainers:Wi,windowRect:null,measuringScheduled:!1},n3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Wi,draggableNodes:new Map,over:null,measureDroppableContainers:Wi},rl=v.createContext(n3),r3=v.createContext(m_);function g_(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new us}}}function x_(e,t){switch(t.type){case Ge.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ge.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Ge.DragEnd:case Ge.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ge.RegisterDroppable:{const{element:n}=t,{id:o}=n,a=new us(e.droppable.containers);return a.set(o,n),{...e,droppable:{...e.droppable,containers:a}}}case Ge.SetDroppableDisabled:{const{id:n,key:o,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const l=new us(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Ge.UnregisterDroppable:{const{id:n,key:o}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const s=new us(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function v_(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:a}=v.useContext(rl),s=Hi(o),l=Hi(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&s&&l!=null){if(!Cc(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=hw(u);if(p){p.focus();break}}})}},[o,t,a,l,s]),null}function o3(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...o}),n):n}function y_(e){return v.useMemo(()=>({draggable:{...ui.draggable,...e==null?void 0:e.draggable},droppable:{...ui.droppable,...e==null?void 0:e.droppable},dragOverlay:{...ui.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function b_(e){let{activeNode:t,measure:n,initialRect:o,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;Xt(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=Vx(u,o);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const m=Zx(d);m&&m.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const kc=v.createContext({...fn,scaleX:1,scaleY:1});var cr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(cr||(cr={}));const j_=v.memo(function(t){var n,o,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=h_,collisionDetection:p=Nw,measuring:m,modifiers:y,...S}=t;const j=v.useReducer(x_,void 0,g_),[_,x]=j,[h,f]=yw(),[b,C]=v.useState(cr.Uninitialized),g=b===cr.Initialized,{draggable:{active:w,nodes:T,translate:E},droppable:{containers:D}}=_,A=w?T.get(w):null,K=v.useRef({initial:null,translated:null}),q=v.useMemo(()=>{var We;return w!=null?{id:w,data:(We=A==null?void 0:A.data)!=null?We:f_,rect:K}:null},[w,A]),X=v.useRef(null),[oe,se]=v.useState(null),[V,O]=v.useState(null),P=Ds(S,Object.values(S)),I=nl("DndDescribedBy",l),H=v.useMemo(()=>D.getEnabled(),[D]),W=y_(m),{droppableRects:we,measureDroppableContainers:ce,measuringScheduled:je}=n_(H,{dragging:g,dependencies:[E.x,E.y],config:W.droppable}),le=e_(T,w),Re=v.useMemo(()=>V?Vi(V):null,[V]),lt=Bc(),St=r_(le,W.draggable.measure);b_({activeNode:w?T.get(w):null,config:lt.layoutShiftCompensation,initialRect:St,measure:W.draggable.measure});const fe=Am(le,W.draggable.measure,St),Le=Am(le?le.parentElement:null),Je=v.useRef({activatorEvent:null,active:null,activeNode:le,collisionRect:null,collisions:null,droppableRects:we,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Ot=D.getNodeFor((n=Je.current.over)==null?void 0:n.id),en=p_({measure:W.dragOverlay.measure}),Ct=(o=en.nodeRef.current)!=null?o:le,tr=g?(a=en.rect)!=null?a:fe:null,ml=!!(en.nodeRef.current&&en.rect),gl=s_(ml?null:fe),Ca=e3(Ct?bt(Ct):null),xn=l_(g?Ot??le:null),vn=u_(xn),Fr=o3(y,{transform:{x:E.x-gl.x,y:E.y-gl.y,scaleX:1,scaleY:1},activatorEvent:V,active:q,activeNodeRect:fe,containerNodeRect:Le,draggingNodeRect:tr,over:Je.current.over,overlayNodeRect:en.rect,scrollableAncestors:xn,scrollableAncestorRects:vn,windowRect:Ca}),yo=Re?Xo(Re,E):null,tn=i_(xn),Ur=Mm(tn),xl=Mm(tn,[fe]),nn=Xo(Fr,Ur),nr=tr?Dw(tr,Fr):null,wt=q&&nr?p({active:q,collisionRect:nr,droppableRects:we,droppableContainers:H,pointerCoordinates:yo}):null,wa=Hx(wt,"id"),[rn,_a]=v.useState(null),Dc=ml?Fr:Xo(Fr,xl),vl=Rw(Dc,(s=rn==null?void 0:rn.rect)!=null?s:null,fe),Hr=v.useCallback((We,ft)=>{let{sensor:k,options:N}=ft;if(X.current==null)return;const L=T.get(X.current);if(!L)return;const M=We.nativeEvent,z=new k({active:X.current,activeNode:L,event:M,options:N,context:Je,onStart(G){const Q=X.current;if(Q==null)return;const Y=T.get(Q);if(!Y)return;const{onDragStart:de}=P.current,Be={active:{id:Q,data:Y.data,rect:K}};Pn.unstable_batchedUpdates(()=>{de==null||de(Be),C(cr.Initializing),x({type:Ge.DragStart,initialCoordinates:G,active:Q}),h({type:"onDragStart",event:Be})})},onMove(G){x({type:Ge.DragMove,coordinates:G})},onEnd:ne(Ge.DragEnd),onCancel:ne(Ge.DragCancel)});Pn.unstable_batchedUpdates(()=>{se(z),O(We.nativeEvent)});function ne(G){return async function(){const{active:Y,collisions:de,over:Be,scrollAdjustedTranslate:ae}=Je.current;let ye=null;if(Y&&ae){const{cancelDrop:Ae}=P.current;ye={activatorEvent:M,active:Y,collisions:de,delta:ae,over:Be},G===Ge.DragEnd&&typeof Ae=="function"&&await Promise.resolve(Ae(ye))&&(G=Ge.DragCancel)}X.current=null,Pn.unstable_batchedUpdates(()=>{x({type:G}),C(cr.Uninitialized),_a(null),se(null),O(null);const Ae=G===Ge.DragEnd?"onDragEnd":"onDragCancel";if(ye){const it=P.current[Ae];it==null||it(ye),h({type:Ae,event:ye})}})}}},[T]),yl=v.useCallback((We,ft)=>(k,N)=>{const L=k.nativeEvent,M=T.get(N);if(X.current!==null||!M||L.dndKit||L.defaultPrevented)return;const z={active:M};We(k,ft.options,z)===!0&&(L.dndKit={capturedBy:ft.sensor},X.current=N,Hr(k,ft))},[T,Hr]),bo=t_(u,yl);c_(u),Xt(()=>{fe&&b===cr.Initializing&&C(cr.Initialized)},[fe,b]),v.useEffect(()=>{const{onDragMove:We}=P.current,{active:ft,activatorEvent:k,collisions:N,over:L}=Je.current;if(!ft||!k)return;const M={active:ft,activatorEvent:k,collisions:N,delta:{x:nn.x,y:nn.y},over:L};Pn.unstable_batchedUpdates(()=>{We==null||We(M),h({type:"onDragMove",event:M})})},[nn.x,nn.y]),v.useEffect(()=>{const{active:We,activatorEvent:ft,collisions:k,droppableContainers:N,scrollAdjustedTranslate:L}=Je.current;if(!We||X.current==null||!ft||!L)return;const{onDragOver:M}=P.current,z=N.get(wa),ne=z&&z.rect.current?{id:z.id,rect:z.rect.current,data:z.data,disabled:z.disabled}:null,G={active:We,activatorEvent:ft,collisions:k,delta:{x:L.x,y:L.y},over:ne};Pn.unstable_batchedUpdates(()=>{_a(ne),M==null||M(G),h({type:"onDragOver",event:G})})},[wa]),Xt(()=>{Je.current={activatorEvent:V,active:q,activeNode:le,collisionRect:nr,collisions:wt,droppableRects:we,draggableNodes:T,draggingNode:Ct,draggingNodeRect:tr,droppableContainers:D,over:rn,scrollableAncestors:xn,scrollAdjustedTranslate:nn},K.current={initial:tr,translated:nr}},[q,le,wt,nr,T,Ct,tr,we,D,rn,xn,nn]),Xw({...lt,delta:E,draggingRect:nr,pointerCoordinates:yo,scrollableAncestors:xn,scrollableAncestorRects:vn});const Oc=v.useMemo(()=>({active:q,activeNode:le,activeNodeRect:fe,activatorEvent:V,collisions:wt,containerNodeRect:Le,dragOverlay:en,draggableNodes:T,droppableContainers:D,droppableRects:we,over:rn,measureDroppableContainers:ce,scrollableAncestors:xn,scrollableAncestorRects:vn,measuringConfiguration:W,measuringScheduled:je,windowRect:Ca}),[q,le,fe,V,wt,Le,en,T,D,we,rn,ce,xn,vn,W,je,Ca]),bl=v.useMemo(()=>({activatorEvent:V,activators:bo,active:q,activeNodeRect:fe,ariaDescribedById:{draggable:I},dispatch:x,draggableNodes:T,over:rn,measureDroppableContainers:ce}),[V,bo,q,fe,x,I,T,rn,ce]);return te.createElement(zx.Provider,{value:f},te.createElement(rl.Provider,{value:bl},te.createElement(r3.Provider,{value:Oc},te.createElement(kc.Provider,{value:vl},d)),te.createElement(v_,{disabled:(i==null?void 0:i.restoreFocus)===!1})),te.createElement(Sw,{...i,hiddenTextDescribedById:I}));function Bc(){const We=(oe==null?void 0:oe.autoScrollEnabled)===!1,ft=typeof c=="object"?c.enabled===!1:c===!1,k=g&&!We&&!ft;return typeof c=="object"?{...c,enabled:k}:{enabled:k}}}),S_=v.createContext(null),Pm="button",C_="Droppable";function w_(e){let{id:t,data:n,disabled:o=!1,attributes:a}=e;const s=nl(C_),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:m}=v.useContext(rl),{role:y=Pm,roleDescription:S="draggable",tabIndex:j=0}=a??{},_=(c==null?void 0:c.id)===t,x=v.useContext(_?kc:S_),[h,f]=Ui(),[b,C]=Ui(),g=d_(l,t),w=Ds(n);Xt(()=>(p.set(t,{id:t,key:s,node:h,activatorNode:b,data:w}),()=>{const E=p.get(t);E&&E.key===s&&p.delete(t)}),[p,t]);const T=v.useMemo(()=>({role:y,tabIndex:j,"aria-disabled":o,"aria-pressed":_&&y===Pm?!0:void 0,"aria-roledescription":S,"aria-describedby":u.draggable}),[o,y,j,_,S,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:T,isDragging:_,listeners:o?void 0:g,node:h,over:m,setNodeRef:f,setActivatorNodeRef:C,transform:x}}function a3(){return v.useContext(r3)}const __="Droppable",k_={timeout:25};function T_(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:a}=e;const s=nl(__),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(rl),u=v.useRef({disabled:n}),p=v.useRef(!1),m=v.useRef(null),y=v.useRef(null),{disabled:S,updateMeasurementsFor:j,timeout:_}={...k_,...a},x=Ds(j??o),h=v.useCallback(()=>{if(!p.current){p.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{d(Array.isArray(x.current)?x.current:[x.current]),y.current=null},_)},[_]),f=_c({callback:h,disabled:S||!l}),b=v.useCallback((T,E)=>{f&&(E&&(f.unobserve(E),p.current=!1),T&&f.observe(T))},[f]),[C,g]=Ui(b),w=Ds(t);return v.useEffect(()=>{!f||!C.current||(f.disconnect(),p.current=!1,f.observe(C.current))},[C,f]),Xt(()=>(i({type:Ge.RegisterDroppable,element:{id:o,key:s,disabled:n,node:C,rect:m,data:w}}),()=>i({type:Ge.UnregisterDroppable,key:s,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Ge.SetDroppableDisabled,id:o,key:s,disabled:n}),u.current.disabled=n)},[o,s,n,i]),{active:l,rect:m,isOver:(c==null?void 0:c.id)===o,node:C,over:c,setNodeRef:g}}function E_(e){let{animation:t,children:n}=e;const[o,a]=v.useState(null),[s,l]=v.useState(null),i=Hi(n);return!n&&!o&&i&&a(i),Xt(()=>{if(!s)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){a(null);return}Promise.resolve(t(d,s)).then(()=>{a(null)})},[t,o,s]),te.createElement(te.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const N_={x:0,y:0,scaleX:1,scaleY:1};function R_(e){let{children:t}=e;return te.createElement(rl.Provider,{value:n3},te.createElement(kc.Provider,{value:N_},t))}const L_={position:"fixed",touchAction:"none"},D_=e=>Cc(e)?"transform 250ms ease":void 0,O_=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:a,children:s,className:l,rect:i,style:c,transform:d,transition:u=D_}=e;if(!i)return null;const p=a?d:{...d,scaleX:1,scaleY:1},m={...L_,width:i.width,height:i.height,top:i.top,left:i.left,transform:_r.Transform.toString(p),transformOrigin:a&&o?ww(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return te.createElement(n,{className:l,style:m,ref:t},s)}),B_=e=>t=>{let{active:n,dragOverlay:o}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(a))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},A_=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:_r.Transform.toString(t)},{transform:_r.Transform.toString(n)}]},$_={duration:250,easing:"ease",keyframes:A_,sideEffects:B_({styles:{active:{opacity:"0"}}})};function M_(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:a}=e;return Sc((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const d=t3(l);if(!d)return;const{transform:u}=bt(l).getComputedStyle(l),p=Wx(u);if(!p)return;const m=typeof t=="function"?t:P_(t);return Qx(c,a.draggable.measure),m({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:a,transform:p})})}function P_(e){const{duration:t,easing:n,sideEffects:o,keyframes:a}={...$_,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...d}=s;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},m={x:c.x-u.x,y:c.y-u.y,...p},y=a({...d,active:l,dragOverlay:i,transform:{initial:c,final:m}}),[S]=y,j=y[y.length-1];if(JSON.stringify(S)===JSON.stringify(j))return;const _=o==null?void 0:o({active:l,dragOverlay:i,...d}),x=i.node.animate(y,{duration:t,easing:n,fill:"forwards"});return new Promise(h=>{x.onfinish=()=>{_==null||_(),h()}})}}let Im=0;function I_(e){return v.useMemo(()=>{if(e!=null)return Im++,Im},[e])}const z_=te.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:y,draggableNodes:S,droppableContainers:j,dragOverlay:_,over:x,measuringConfiguration:h,scrollableAncestors:f,scrollableAncestorRects:b,windowRect:C}=a3(),g=v.useContext(kc),w=I_(p==null?void 0:p.id),T=o3(l,{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:y,draggingNodeRect:_.rect,over:x,overlayNodeRect:_.rect,scrollableAncestors:f,scrollableAncestorRects:b,transform:g,windowRect:C}),E=Sh(m),D=M_({config:o,draggableNodes:S,droppableContainers:j,measuringConfiguration:h}),A=E?_.setRef:void 0;return te.createElement(R_,null,te.createElement(E_,{animation:D},p&&w?te.createElement(O_,{key:w,id:p.id,ref:A,as:i,activatorEvent:u,adjustScale:t,className:c,transition:s,rect:E,style:{zIndex:d,...a},transform:T},n):null))});function Ch(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function F_(e,t){return e.reduce((n,o,a)=>{const s=t.get(o);return s&&(n[a]=s),n},Array(e.length))}function Wl(e){return e!==null&&e>=0}function U_(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function H_(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Zl={scaleX:1,scaleY:1},V_=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:o;if(!i)return null;const c=W_(n,l,a);if(l===a){const d=n[s];return d?{x:a<s?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...Zl}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...Zl}:l<a&&l>=s?{x:i.width+c,y:0,...Zl}:{x:0,y:0,...Zl}};function W_(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return!o||!a&&!s?0:n<t?a?o.left-(a.left+a.width):s.left-(o.left+o.width):s?s.left-(o.left+o.width):o.left-(a.left+a.width)}const wh=e=>{let{rects:t,activeIndex:n,overIndex:o,index:a}=e;const s=Ch(t,o,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},Kl={scaleX:1,scaleY:1},Z_=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:o;if(!i)return null;if(a===n){const d=s[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...Kl}:null}const c=K_(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...Kl}:a<n&&a>=l?{x:0,y:i.height+c,...Kl}:{x:0,y:0,...Kl}};function K_(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return o?n<t?a?o.top-(a.top+a.height):s?s.top-(o.top+o.height):0:s?s.top-(o.top+o.height):a?o.top-(a.top+a.height):0:0}const s3="Sortable",l3=te.createContext({activeIndex:-1,containerId:s3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:wh,disabled:{draggable:!1,droppable:!1}});function Y_(e){let{children:t,id:n,items:o,strategy:a=wh,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=a3(),p=nl(s3,n),m=i.rect!==null,y=v.useMemo(()=>o.map(g=>typeof g=="object"&&"id"in g?g.id:g),[o]),S=l!=null,j=l?y.indexOf(l.id):-1,_=d?y.indexOf(d.id):-1,x=v.useRef(y),h=!U_(y,x.current),f=_!==-1&&j===-1||h,b=H_(s);Xt(()=>{h&&S&&u(y)},[h,y,S,u]),v.useEffect(()=>{x.current=y},[y]);const C=v.useMemo(()=>({activeIndex:j,containerId:p,disabled:b,disableTransforms:f,items:y,overIndex:_,useDragOverlay:m,sortedRects:F_(y,c),strategy:a}),[j,p,b.draggable,b.droppable,f,y,_,c,m,a]);return te.createElement(l3.Provider,{value:C},t)}const G_=e=>{let{id:t,items:n,activeIndex:o,overIndex:a}=e;return Ch(n,o,a).indexOf(t)},q_=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==s&&a===l?!1:n?!0:l!==a&&t===c},X_={duration:200,easing:"ease"},i3="transform",Q_=_r.Transition.toString({property:i3,duration:0,easing:"linear"}),J_={roleDescription:"sortable"};function ek(e){let{disabled:t,index:n,node:o,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return Xt(()=>{if(!t&&n!==i.current&&o.current){const c=a.current;if(c){const d=fa(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function tk(e){let{animateLayoutChanges:t=q_,attributes:n,disabled:o,data:a,getNewIndex:s=G_,id:l,strategy:i,resizeObserverConfig:c,transition:d=X_}=e;const{items:u,containerId:p,activeIndex:m,disabled:y,disableTransforms:S,sortedRects:j,overIndex:_,useDragOverlay:x,strategy:h}=v.useContext(l3),f=nk(o,y),b=u.indexOf(l),C=v.useMemo(()=>({sortable:{containerId:p,index:b,items:u},...a}),[p,a,b,u]),g=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:w,node:T,isOver:E,setNodeRef:D}=T_({id:l,data:C,disabled:f.droppable,resizeObserverConfig:{updateMeasurementsFor:g,...c}}),{active:A,activatorEvent:K,activeNodeRect:q,attributes:X,setNodeRef:oe,listeners:se,isDragging:V,over:O,setActivatorNodeRef:P,transform:I}=w_({id:l,data:C,attributes:{...J_,...n},disabled:f.draggable}),H=cw(D,oe),W=!!A,we=W&&!S&&Wl(m)&&Wl(_),ce=!x&&V,je=ce&&we?I:null,Re=we?je??(i??h)({rects:j,activeNodeRect:q,activeIndex:m,overIndex:_,index:b}):null,lt=Wl(m)&&Wl(_)?s({id:l,items:u,activeIndex:m,overIndex:_}):b,St=A==null?void 0:A.id,fe=v.useRef({activeId:St,items:u,newIndex:lt,containerId:p}),Le=u!==fe.current.items,Je=t({active:A,containerId:p,isDragging:V,isSorting:W,id:l,index:b,items:u,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:d,wasDragging:fe.current.activeId!=null}),Ot=ek({disabled:!Je,index:b,node:T,rect:w});return v.useEffect(()=>{W&&fe.current.newIndex!==lt&&(fe.current.newIndex=lt),p!==fe.current.containerId&&(fe.current.containerId=p),u!==fe.current.items&&(fe.current.items=u)},[W,lt,p,u]),v.useEffect(()=>{if(St===fe.current.activeId)return;if(St&&!fe.current.activeId){fe.current.activeId=St;return}const Ct=setTimeout(()=>{fe.current.activeId=St},50);return()=>clearTimeout(Ct)},[St]),{active:A,activeIndex:m,attributes:X,data:C,rect:w,index:b,newIndex:lt,items:u,isOver:E,isSorting:W,isDragging:V,listeners:se,node:T,overIndex:_,over:O,setNodeRef:H,setActivatorNodeRef:P,setDroppableNodeRef:D,setDraggableNodeRef:oe,transform:Ot??Re,transition:en()};function en(){if(Ot||Le&&fe.current.newIndex===b)return Q_;if(!(ce&&!Cc(K)||!d)&&(W||Je))return _r.Transition.toString({...d,property:i3})}}function nk(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function Ki(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const rk=[me.Down,me.Right,me.Up,me.Left],ok=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(rk.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const m=a.get(p.id);if(m)switch(e.code){case me.Down:o.top<m.top&&c.push(p);break;case me.Up:o.top>m.top&&c.push(p);break;case me.Left:o.left>m.left&&c.push(p);break;case me.Right:o.left<m.left&&c.push(p);break}});const d=Tw({active:n,collisionRect:o,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let u=Hx(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=s.get(n.id),m=s.get(u),y=m?a.get(m.id):null,S=m==null?void 0:m.node.current;if(S&&y&&p&&m){const _=wc(S).some((g,w)=>i[w]!==g),x=c3(p,m),h=ak(p,m),f=_||!x?{x:0,y:0}:{x:h?o.width-y.width:0,y:h?o.height-y.height:0},b={x:y.left,y:y.top};return f.x&&f.y?b:Os(b,f)}}}};function c3(e,t){return!Ki(e)||!Ki(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function ak(e,t){return!Ki(e)||!Ki(t)||!c3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const sk=e=>{let{transform:t}=e;return{...t,y:0}};function d3(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const _h=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:d3(o,n,t)},lk=e=>{let{transform:t}=e;return{...t,x:0}},u3=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:d3(t,n,o)},kh=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:a=[_h],strategy:s=wh,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=Cw(Tm(jh),Tm(yh,{coordinateGetter:ok}));function p(S){const j=e.findIndex(_=>_.id===S.active.id);d(j)}function m(){d(null)}function y(S){const{active:j,over:_}=S;if(j.id!==_.id){const x=e.findIndex(f=>f.id===j.id),h=e.findIndex(f=>f.id===_.id);e[x].moved=!0,t(Ch(e,x,h))}d(null)}return r.jsxs(j_,{sensors:u,collisionDetection:kw,onDragStart:p,onDragCancel:m,onDragEnd:y,modifiers:a,children:[r.jsx(Y_,{items:e,strategy:s,children:r.jsx(n,{...i,children:e.map(S=>r.jsx(ik,{id:S.id,item:S,Item:o,...i},S.id))})}),l&&c&&r.jsx(z_,{children:r.jsx(l,{item:c,...i})})]})},ik=({id:e,item:t,Item:n,...o})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=tk({id:e}),d={transform:_r.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:s,...a,...o})},p3=({...e})=>r.jsx(kh,{modifiers:[lk,u3,_h],strategy:Z_,...e}),ck=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:a})=>{const s=Ls(t),l=o.map(c=>ah(e[c],"id label")),i=c=>{a(c.map(d=>d.id))};return r.jsxs(mn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(p3,{items:l,Item:sw,setOrder:i,isVisible:s,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(iw,{})]})},dk=ht.Consumer(ck),uk=({headerClass:e,Summary:t=PC,PageSize:n=QC,Columns:o=dk})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),pk=ht.Consumer(uk),zm=({value:e})=>be(e)?e:"",hk=({value:e})=>be(e)?Ka(e):"",Fm=({value:e})=>be(e)?zj(e):"",fk=({value:e})=>be(e)?Uj(e):"",mk=({value:e})=>be(e)?e?"true":"false":"",gk={default:zm,text:zm,number:hk,price:Fm,currency:Fm,boolean:mk,title:fk},xk=({row:e,column:t,name:n,value:o,cellClass:a,sortColumn:s,sortingClass:l="sorting",displayTypes:i=gk})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=s===n,p=Ce(a,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},vk=ht.Consumer(xk),yk=({row:e,columns:t,visibleColumns:n,Cell:o=vk})=>r.jsx("tr",{children:n.map(a=>{const s=t[a],l=s.field??a,i=e[l];return r.jsx(o,{row:e,name:a,field:l,column:s,value:i},a)})}),bk=ht.Consumer(yk),jk=({page:e,Row:t=bk})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),Sk=ht.Consumer(jk),Ck=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:m,filteringClass:y="filtering",filterIcon:S="filter",filteringIcon:j="filter-solid",filterIconClass:_="filter-icon",headingClass:x="heading",rightClass:h="right"})=>{const f=e===n,b=f&&o,C=be(m[e]);return r.jsx("th",{className:Ce(x,t.right?h:null,u?y:null,C?y:null,f?d:null),onClick:()=>a(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(ee,{className:_,name:C?j:S,onClick:p}),r.jsx(ee,{className:c,name:f?b?s:l:i})]})]})})},wk=ht.Consumer(Ck),_k=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=wk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),kk=ht.Consumer(_k),Tk=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>r.jsx("th",{className:Ce(o,be(t[e])?a:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(ee,{name:s,onClick:()=>n(e,null)})]})}),Ek=ht.Consumer(Tk),Nk=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=Ek})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),Rk=ht.Consumer(Nk),Lk=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:o,showFilters:a,Headings:s=kk,Filters:l=Rk,Rows:i=Sk})=>r.jsxs("table",{className:Ce(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(s,{}),a&&r.jsx(l,{}),r.jsx(i,{})]}),Dk=ht.Consumer(Lk),Ok=({scrollX:e,Table:t=Dk})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),Bk=ht.Consumer(Ok),Ak=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:a="solid",render:s,...l})=>{const d=t-1,u=t,p=e+1,m=e>0?e-1:null,y=be(m)?m+1:null,S=e<d?e+1:null,j=be(S)?S+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:m,prevPageNo:y,nextPage:S,nextPageNo:j,buttonClass:n,pageClass:o,currentPageClass:a,...l})},$r=Br(Ak),$k=$r.Use,Mk=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:a="arrow-left"})=>r.jsx(B,{className:o,icon:a,onClick:()=>t(e),disabled:fc(e)}),Pk=$r.Consumer(Mk),Ik=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:a="arrow-right"})=>r.jsx(B,{className:o,icon:a,onClick:()=>t(e),disabled:!e}),zk=$r.Consumer(Ik),Fk=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:a})=>r.jsx(B,{text:t,className:o,onClick:a}),Uk=$r.Consumer(Fk),Hk=r.jsx(r.Fragment,{children:"…"}),Vk=({pageSeparatorClass:e="separator",pageSeparator:t=Hk})=>r.jsx("div",{className:e,children:t}),Wk=$r.Consumer(Vk),Zk=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:m,pageClass:y=m,currentPageClass:S="brand",showFirstLast:j=!0,Separator:_=Wk,Page:x=Uk})=>r.jsxs("div",{className:p,children:[j&&a>n&&r.jsxs(r.Fragment,{children:[r.jsx(x,{page:n,pageNo:o,className:y,onClick:()=>u(n)}),a>n+1&&r.jsx(_,{})]}),be(a)&&r.jsx(x,{page:a,pageNo:s,className:y,onClick:()=>u(a)}),r.jsx(x,{page:e,pageNo:t,className:S,current:!0,disabled:!0}),be(l)&&r.jsx(x,{page:l,pageNo:i,className:y,onClick:()=>u(l)}),j&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(_,{}),r.jsx(x,{page:c,pageNo:d,className:y,onClick:()=>u(c)})]})]}),Kk=$r.Consumer(Zk),Yk=({className:e="pager",size:t,color:n,Previous:o=Pk,Next:a=zk,Pages:s=Kk})=>r.jsxs("div",{className:Ce(e,t,n),children:[r.jsx(o,{}),r.jsx(s,{}),r.jsx(a,{})]}),Gk=$r.Consumer(Yk),qk=({Content:e=Gk,...t})=>r.jsx($r.Provider,{...t,children:r.jsx(e,{})}),Yt=ve(qk,"Pager"),Xk=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Yt,{page:n.page,pages:n.pages,setPage:a=>o(a+1),...t})}),Qk=ht.Consumer(Xk),Jk=({color:e,className:t="datatable",Header:n=pk,Body:o=Bk,Footer:a=Qk})=>r.jsxs("section",{className:Ce(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(a,{})]}),eT=ht.Consumer(Jk),tT=({Content:e=eT,...t})=>r.jsx(ht.Provider,{...t,children:r.jsx(e,{})}),Jt=ve(tT,"Datatable"),nT=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),rT=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),oT=({className:e,size:t,color:n,lined:o,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:d=nT,Content:u=rT,...p})=>r.jsxs("details",{className:Ce(e,n,vc(a),ph(s),uh(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Xe=ve(oT,"Details");var aT=Object.defineProperty,sT=(e,t,n)=>t in e?aT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_n=(e,t,n)=>(sT(e,typeof t!="symbol"?t+"":t,n),n),lT=Object.defineProperty,iT=(e,t,n)=>t in e?lT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jd=(e,t,n)=>(iT(e,typeof t!="symbol"?t+"":t,n),n);function cT(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function dT(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||fT(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function uT(e,t){const n=e.debug??t.debug,o=Um(e.debugPrefix??t.debugPrefix,e),a=Um(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function pT(e){return Array.isArray(e)}function h3(e){return typeof e=="function"}function Um(e,t){return h3(e)?e(t):e}function hT(e){return pT(e)?e:[e]}function fT(...e){throw new Error(e.join(""))}const f3=(e,t={})=>{const n=te.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Children:({children:o})=>hT(o).map((a,s)=>h3(a)?r.jsx(n.Consumer,{children:a},s):a),Use:()=>te.useContext(n)}};let pi=class extends te.Component{constructor(t){super(t);const n=this.constructor;this.debug=uT(t,n),this.state=cT(n.initialState,n.initialProps,t),this.actions=dT(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};jd(pi,"initialState",{}),jd(pi,"initialProps",{}),jd(pi,"actions",[]);function mT(e){return typeof e=="boolean"}function ol(e){return typeof e=="string"}function As(e){return Array.isArray(e)}function Th(e){return typeof e=="function"}function gT(e){return e instanceof RegExp}function ma(e){return typeof e=="object"&&!As(e)&&!m3(e)}function xT(e){return e===void 0}function m3(e){return e===null}function Et(e){return!(xT(e)||m3(e))}function vT(e){return!Et(e)}function yT(...e){throw new Error(e.join(""))}function Qo(){}function bT(){return Intl.DateTimeFormat().resolvedOptions().locale}bT();function jT(e,t=/,\s*|\s+/){return vT(e)?[]:ol(e)?e.length?e.split(t):[]:As(e)?e:[e]}function g3(e,t=!0,n={}){return ma(e)?e:jT(e).reduce((o,a)=>(o[a]=Th(t)?t(a):t,o),n)}function ST(e){if(Th(e))return e;if(gT(e))return t=>e.test(t);if(ma(e))return t=>!!e[t];if(As(e)||ol(e)){const t=g3(e);return n=>!!t[n]}yT("Invalid selector() specification: "+e)}const CT=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=ST(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},wT="",_T="blur",al="changed",kT="disabled",Tc="focus",TT="fulfilled",sl="invalid",x3="Optional",ET="radio",v3="Required",NT="A value is required",Hm="reset",ll="submitted",ga="submitting",Eh="text",il="valid",Mr="validating",RT=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],LT=["id","name","action","method","encType"];let y3=class extends pi{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(Hm)}}setStatus(e,t={},n=Qo){this.mounted&&this.setState(o=>({...Th(t)?t(o):t,status:this.newStatus(e,o.status)}),n)}setResetState(e,t){this.setStatus(Hm,e,t)}setChangedState(e,t){this.setStatus(al,e,t)}setValidatingState(e,t){this.setStatus(Mr,e,t)}setInvalidState(e,t){this.setStatus(sl,e,t)}setValidState(e,t){this.setStatus(il,e,t)}};function b3(e,t){return t.reduce((n,o)=>(Et(e[o])&&(n[o]=e[o]),n),{})}const Ec=e=>b3(e,RT),DT=e=>b3(e,LT),j3=e=>e.filter(Et).join(" "),OT=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),kr=(...e)=>j3(e.flatMap(t=>ma(t)?OT(t):t)),Nc=e=>kr(e.inputClass,e.inline&&"inline"),Uo=(e,t,n=t)=>(e==null?void 0:e[t])||n,BT=(e,t={},...n)=>j3(Object.entries(e).reduce((o,[a,s])=>(s&&o.push(t[a]||a),o),[...n])),AT=e=>{const{status:t,className:n,classes:o,required:a,showRequired:s,showOptional:l}=e;return BT(t,o,Uo(o,"field"),n,s&&a?"required":null,l&&!a?"optional":null)},$T=(e,...t)=>{const{gap:n,space:o,stack:a,className:s}=e;return s||(o?kr("flex","space",...t):kr("flex",n?`gap-v-none gap-h-${n}`:null,a?`stack-${a}`:null,...t))},MT={boolean:!0,string:!0,number:!0},S3=e=>MT[typeof e]?{value:e,text:e}:e,Yi=(...e)=>function(...t){for(let n of e.filter(Et))n(...t)};function Vm(e){if(mT(e))return[1,!e];if(Et(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const PT=(e,t)=>ol(e)?{[t]:e}:e,IT={submittingClass:ga,validatingClass:Mr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},Wm={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:NT,requiredLabel:v3,optionalLabel:x3},zT=g3(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),Rc={[il]:!1,[sl]:!1},FT={...Rc,[al]:!0},UT={...Rc,[Mr]:!0},HT={[il]:!1,[sl]:!0,[Mr]:!1},VT={[il]:!0,[sl]:!1,[Mr]:!1},WT={[Tc]:!1},ZT={[Tc]:!0},KT={[ga]:!0,[ll]:!1},YT={[ga]:!1,[ll]:!0},C3={changed:FT,validating:UT,invalid:HT,valid:VT},w3=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),GT=()=>{const e={...Rc,[al]:!1,[Mr]:!1,[ll]:!1,[ga]:!1};return w3({...C3,reset:e,submitting:KT,submitted:YT})},qT=(e={})=>{const t={...Rc,[al]:!1,[Mr]:!1,[Tc]:!1,[kT]:e.disabled||!1};return w3({...C3,reset:t,focus:ZT,blur:WT})},XT=({status:e,any:t=!1,...n})=>{const o=[al,Mr,il,sl,ga,ll].filter(a=>Et(n[a])).map(a=>e[a]);return t?o.some(Boolean):o.every(Boolean)};class To extends y3{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,o={...n},a={...IT,...this.props};this.state={...a,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,n){var o,a;const s=((o=this.props.fields)==null?void 0:o[t])??{},l=n.value??((a=this.props.values)==null?void 0:a[t]);return{name:t,...CT(this.props,zT),...s,...n,value:l}}attachField(t,n){this.debug(`attaching ${t} field`),this.fields[t]=n,this.setState(o=>({values:{...o.values,[t]:n.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(ga,t,n)}setSubmittedState(t,n){this.setStatus(ll,t,n)}setFocus(t,n){var o;n==null||n.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,n){this.debug(`setValue(${t}, ${n})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:n}}))}setValues(t,n){this.debug("setValues():",t),n==null||n.preventDefault(),Object.entries(t).forEach(([o,a])=>{var s;return(s=this.fields[o])==null?void 0:s.setValue(a)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((a,{status:s,value:l,reason:i})=>(s===TT?Object.assign(a.values,l.data||{[l.name]:l.value}):a.errors.push(i),a),{values:{...this.state.values},errors:[]})).then(o=>{var a;return this.debug("field validation complete: ",o),(a=o.errors)!=null&&a.length?(this.debug("errors detected, rejecting: ",o),n(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(s=>t({...o,values:s})).catch(s=>n(s))):t(o)})}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const n=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",n),this.setSubmittedState(),n!=null&&n.ok||(n==null?void 0:n.status)===200)this.debug(`Success response ok:${n==null?void 0:n.ok} status:${n==null?void 0:n.status}`),this.handleSuccess(n);else if((n==null?void 0:n.status)>=400&&n.status<=500)this.debug(`Error response status:${n==null?void 0:n.status}`),this.handleError(n.data);else throw new Error(`Unknown response: ${n==null?void 0:n.status}`)}catch(n){this.debug("onSubmit error:",n),this.setSubmittedState(),this.handleError(ol(n)?{error:n}:n instanceof Error?{error:n.message}:n)}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||Qo;this.setValidState({},Yi(()=>n(t,this),this.props.resetOnSuccess?()=>this.reset():null))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const n=As(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||Qo;this.setInvalidState(t,Yi(()=>o(t),n?()=>n.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const n=t.reduce((o,a)=>{const s=a.name??a.param??a.field,{message:l}=a,i=s&&this.fields[s];return i&&(a.label||(a.label=i.props.label),i.setInvalidState({message:l}),o.push(i)),o},[]);return this.state.focusInvalidField&&n.length?n[0]:null}sanitiseErrors(t){if(ma(t)&&(t=Object.entries(t).map(([n,o])=>({name:n,...PT(o,"message")}))),!As(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(n=>n.message??(n.message=n.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}_n(To,"newStatus",GT),_n(To,"debug",!1),_n(To,"debugPrefix","Form > "),_n(To,"debugColor","rebeccapurple"),_n(To,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const QT=f3(To),{Context:OH,Provider:JT,Consumer:eE,Children:tE,Use:cl}=QT,nE=({children:e})=>{const t=cl(),n=DT(t),{submit:o,className:a}=t;return r.jsx("form",{className:a,...n,onSubmit:o,noValidate:!0,children:r.jsx(tE,{children:e})})},xa=({children:e,Layout:t=nE,...n})=>r.jsx(JT,{...n,children:r.jsx(t,{children:e})}),rE=e=>{const{id:t,value:n}=e;return{...e,id:t||v.useId(),value:n??e.default??wT}};class Eo extends y3{constructor(t){super(t),this.name=t.name;const{value:n}=t,o=n;this.form=this.props.form,this.state={...this.state,initialValue:o,value:n,error:null},this.debug("initial state:",this.state),this.inputRef=v.createRef(),this.resetRef=v.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):Qo}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(Tc,t,n)}setBlurState(t,n){return this.setStatus(_T,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var n,o;t==null||t.preventDefault(),(o=(n=this.inputRef)==null?void 0:n.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:a,validateOnInvalid:s=!0,minValidateLength:l=1}=this.props,[i]=Vm(n);let c=a||s&&o;i<l&&!o&&(c=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),c?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.form.setValue(this.props.name,n),this.setResetState({value:n,message:this.props.message},()=>{var o,a;return(a=(o=this.resetRef)==null?void 0:o.current)==null?void 0:a.reset()}),n}validation(t){this.validate(t).then(Qo).catch(Qo)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,Yi(this.on.valid,t)),{...n,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,Yi(this.on.invalid,t)),{...n,...o}})}validator(){return async(t,n)=>{const{value:o=""}=this.state,{validate:a,required:s,requiredMessage:l,validMessage:i}={...Wm,...this.props},[,c]=Vm(o);if(this.setValidatingState(),a)return await this.validateValidator(t,n,a,i);if(c)return await this.validateEmpty(t,n,s,i,l);this.debug("no validation defined"),t({value:o,message:i})}}async validateValidator(t,n,o,a){this.debug("calling validate function");const s=this.getContext();try{this.debug(`calling validate function with value [${s.value}]`);const l=await o(s.value,s,t,n);this.debug("validate function passed:",l),t(ma(l)?{message:a,...l}:{value:l,message:a})}catch(l){this.debug("validate threw an error:",l);const i=ol(l)?l:l.message;this.debug("rejecting with message:",i),n({message:i})}}validateEmpty(t,n,o,a,s){o?(this.debug("failing validation - required field is empty"),n({message:s})):(this.debug("passing validation - value is empty but not required"),t({message:a}))}setValid(t,n){n==null||n.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,n){n==null||n.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}getContext(){const t={...Wm,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}_n(Eo,"newStatus",qT),_n(Eo,"debug",!1),_n(Eo,"debugPrefix",e=>`Field [${e.name}] > `),_n(Eo,"debugColor","teal"),_n(Eo,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const oE=f3(Eo),{Context:BH,Provider:aE,Consumer:AH,Children:sE,Use:jt}=oE,lE=({field:e=jt()})=>{const{label:t,id:n,required:o}=e,a=e.showRequired&&o,s=e.showOptional&&!o,l=t||a||s,i=e.labelClass,c={};return a&&e.requiredLabel!==v3&&(c["--required-text"]=`"${e.requiredLabel}"`),s&&e.optionalLabel!==x3&&(c["--optional-text"]=`"${e.optionalLabel}"`),l&&r.jsx("label",{htmlFor:n,className:i,style:c,children:t||r.jsx("span",{children:" "})})},iE=e=>t=>e.onChange(t.target.value),cE=e=>t=>e.onChange(t.target.checked),Tr={default:iE,checkbox:cE},dE=({field:e=jt()})=>{const{id:t,text:n,inline:o,border:a,labelClass:s,type:l="checkbox",handler:i=Tr[l]||Tr.default}=e,c=Ec(e),d=kr("checkbox",s,{inline:o,border:a});return r.jsxs("label",{htmlFor:t,className:d,children:[r.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:Nc(e),...c,checked:e.value}),n]})},_3=({field:e=jt()})=>r.jsx("input",{type:"hidden",name:e.name,value:e.value}),uE=({field:e=jt()})=>{const{inline:t,border:n,options:o=[],inputClass:a,optionClass:s,optionsClass:l="options",type:i="radio",handler:c=Tr[i]||Tr.default}=e,d=Ec(e);return r.jsx("div",{className:kr(l),children:o.map((u,p)=>{u=S3(u);const m=`${e.id}-${u.value}`,y=e.value==u.value,S=(e.value?y:p==0)?e.inputRef:null,j=kr("radio",s,u.className,{inline:t,border:n});return r.jsxs("label",{className:j,disabled:u.disabled,htmlFor:m,children:[r.jsx("input",{type:i,className:a,ref:S,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:m,checked:y,value:u.value}),u.text]},u.value)})})},pE=({field:e=jt()})=>{const{options:t=[],placeholder:n,type:o="select",optionClass:a="option",handler:s=Tr[o]||Tr.default}=e,l=Ec(e);return r.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:Nc(e),onChange:s(e),...l,value:e.value,required:e.required||!!n,children:[!!n&&r.jsx("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(i=>(i=S3(i),r.jsx("option",{className:a,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},Zm=({field:e=jt()})=>{const{type:t=Eh,handler:n=Tr[t]||Tr.default}=e,o=Ec(e);return r.jsx("input",{type:t,ref:e.inputRef,className:Nc(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:n(e),...o})},hE=({field:e=jt()})=>{const{rows:t=5,cols:n=20}=e;return r.jsx("textarea",{id:e.id,ref:e.inputRef,className:Nc(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:n})},$s={default:Zm,checkbox:dE,hidden:_3,radio:uE,select:pE,text:Zm,textarea:hE},k3=(e,t)=>$s[e]=t,fE=({field:e=jt()})=>r.jsx("div",{className:kr("prefix",e.prefixClass),children:e.prefix}),mE=({field:e=jt()})=>r.jsx("div",{className:kr("suffix",e.suffixClass),children:e.suffix}),gE=({field:e=jt()})=>{const{classes:t,prefix:n,suffix:o,inputsClass:a,inline:s,type:l=Eh,Prefix:i=fE,Suffix:c=mE}=e,d=$s[l]||$s.default;let u=[Uo(t,"inputs")];Et(n)&&u.push(Uo(t,"prefixed")),Et(o)&&u.push(Uo(t,"suffixed")),s&&u.push(Uo(t,"inline")),Et(a)&&u.push(a);const p=u.join(" ");return r.jsxs("div",{className:p,children:[Et(n)&&r.jsx(i,{field:e}),r.jsx(d,{field:e}),Et(o)&&r.jsx(c,{field:e})]})},xE=({field:e=jt()})=>{const{prefix:t,suffix:n,type:o=Eh}=e,a=$s[o]||$s.default;return o==ET?r.jsx(a,{field:e}):Et(t)||Et(n)?r.jsx(gE,{}):r.jsx(a,{field:e})},vE=({field:e=jt()})=>{const{help:t,message:n,classes:o}=e,a=n??t,s=Uo(o,"help");return a?r.jsx("div",{className:s,children:a}):null},yE=({field:e=jt(),children:t})=>{const{type:n,Label:o=lE,Message:a=vE,Input:s=xE}=e,l=AT(e);return n==="hidden"?r.jsx(_3,{field:e}):r.jsx("div",{className:l,children:t||r.jsxs(r.Fragment,{children:[r.jsx(o,{field:e}),r.jsx(s,{field:e}),r.jsx(a,{field:e})]})})},dn=({name:e,children:t,...n})=>{const o=cl(),a=rE(o.fieldSpec(e,n)),s=a.Layout||yE;return r.jsx(aE,{form:o,...a,children:t?r.jsx(sE,{children:t}):r.jsx(s,{})})},bE=({children:e,...t})=>XT(t)&&e;eE(bE);const va=({values:e=!0,status:t=!1,all:n=!1,className:o="border bdr-2 shadow-2 mar-t-4 pad-4",title:a="Form Debugging",valuesTitle:s="Values",statusTitle:l="Status",...i})=>{const c=cl();return r.jsxs("div",{className:o,children:[a&&r.jsx("h3",{className:"mar-t-none",children:a}),r.jsxs("div",{className:"grid-1 gap-4",children:[e&&r.jsxs("div",{children:[s&&r.jsx("h4",{children:s}),r.jsx(Km,{rows:Object.entries(c.values),...i})]}),(t||n)&&c.status&&r.jsxs("div",{children:[l&&r.jsx("h4",{children:l}),r.jsx(Km,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},Km=({rows:e,children:t,color:n="brand",tableClass:o=`${n} shaded celled wide small pad-none mar-b-0`,...a})=>r.jsx("table",{className:o,children:r.jsx("tbody",{children:t||e.map(([s,l])=>r.jsx(jE,{name:s,value:l,...a},s))})}),jE=({name:e,value:t,keyClass:n="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>r.jsxs("tr",{valign:"top",children:[r.jsx("th",{className:n,children:e}),r.jsx("td",{className:o,children:r.jsx(SE,{value:t})})]}),SE=({value:e})=>ma(e)?JSON.stringify(e):Et(e)?e.toString():"";var kt;let CE=(kt=class extends Fi{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,a]=this.props.findOption(n,t),s=this.inputValue(o);return{value:o,cursor:a,input:s,options:n}}inputValue(t=this.props.value){return be(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case hh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case fh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case yc:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case bc:this.close();break;case cC:this.debug("backspace"),this.searchBackspace();break;case iC:return;case mh:if(this.state.isOpen){if(!(this.state.searchInput??di).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){console.log(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}console.log(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??di)+t)}searchBackspace(){this.setSearch(be(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:be(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},ge(kt,"debug",!1),ge(kt,"debugPrefix","Select > "),ge(kt,"debugColor","MediumVioletRed"),ge(kt,"defaultProps",{...kt.defaultProps,options:[],search:!1,findOption:nC,validOption:Xs,searchOptions:rC,displayValue:zi("displayValue"),displayOption:zi("displayOption")}),ge(kt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),ge(kt,"initialState",{value:di,cursor:void 0,...kt.inactiveState}),ge(kt,"initialProps",{}),ge(kt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),kt);const vo=Br(CE),wE=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsxs("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:[be(e)&&e.length?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:s,children:a})," "]}),r.jsx("div",{className:c,children:r.jsx(ee,{name:"angle-down"})})]}),_E=vo.Consumer(wE),kE=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:Ce(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),TE=vo.Consumer(kE),EE=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),NE=vo.Consumer(EE),RE=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,Option:i=TE,NoOptions:c=NE})=>r.jsx("div",{className:n,ref:t,children:ua(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:be(o)&&e[o]===d,selected:a===d,onClick:()=>s(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),LE=vo.Consumer(RE),DE=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:a,clearSearch:s,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:m,searchIcon:y="search",clearSearchIcon:S="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(ee,{name:y})}),r.jsx("input",{ref:o,className:m,type:"text",placeholder:l,value:e??"",onClick:j=>j.stopPropagation(),onChange:j=>a(j.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:Ce(u,e?p:null),onClick:s,children:r.jsx(ee,{name:S})})]})}),OE=vo.Consumer(DE),BE=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:a="open",closedClass:s="closed",Input:l=_E,Search:i=OE,Menu:c=LE})=>r.jsxs("div",{className:Ce(o,t?a:s),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),AE=vo.Consumer(BE),$E=({Content:e=AE,...t})=>r.jsx(vo.Provider,{...t,children:r.jsx(e,{})}),gn=ve($E,"Select"),ME=({field:e=jt(),selectValue:t=e.selectValue||xx})=>r.jsx(gn,{...e,onSelect:n=>e.onChange(t(n))}),Sd={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class ar extends is{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?Wj(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const n=this.inputValue(t);return{value:t,input:n}}inputValue(t=this.props.value){return be(t)?this.props.displayValue(t):di}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),mc(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...Sd})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case hh:this.setCursor(n+1);break;case fh:this.setCursor(n-1);break;case yc:this.selectCursor();break;case bc:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...Sd},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...Sd},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&be(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){$x(this._resultsRef,t)}}ge(ar,"debug",!1),ge(ar,"debugPrefix","Search > "),ge(ar,"debugColor","MediumVioletRed"),ge(ar,"defaultProps",{minLength:2,debounceTime:500,onLoad:Me,onUnload:Me,onFocus:Me,onBlur:Me,onReset:Me,onSelect:Me,displayValue:zi("displayValue"),displayResult:zi("displayResult")}),ge(ar,"initialState",{value:"",searching:!1}),ge(ar,"initialProps",{value:"initialValue"}),ge(ar,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const ya=Br(ar),PE=({input:e,onFocus:t,onBlur:n,onChange:o,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:m="text",inputClass:y="",disabled:S,searching:j})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(ee,{name:i})}),r.jsx("input",{type:m,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:o,disabled:S,className:y}),r.jsx("div",{className:p,onClick:a,children:r.jsx(ee,{name:j?c:l})})]}),IE=ya.Consumer(PE),zE=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:Ce(l,{[i]:t}),onClick:o,onMouseEnter:a,ref:t?n:null,children:s(e)}),FE=ya.Consumer(zE),UE=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),HE=ya.Consumer(UE),VE=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=FE,NoResults:i=HE})=>r.jsx("div",{className:s,ref:t,children:ua(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:be(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>a(d)},c.id??c.value??d)):r.jsx(i,{})}),WE=ya.Consumer(VE),ZE=({results:e,onKeyDown:t,Input:n=IE,Results:o=WE})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),KE=ya.Consumer(ZE),YE=({Content:e=KE,...t})=>r.jsx(ya.Provider,{...t,children:r.jsx(e,{})}),ba=ve(YE,"Search"),GE=({field:e=jt(),selectValue:t=e.selectValue||xx})=>r.jsx(ba,{...e,onSelect:n=>e.onChange(t(n)),onReset:e.reset}),qE=({type:e="reset",text:t="Reset",className:n="reset",Button:o=B,...a})=>{const{reset:s}=cl();return r.jsx(o,{type:e,text:t,className:n,onClick:s,...a})},XE=({type:e="submit",text:t="Submit",className:n="submit",Button:o=B,...a})=>{const{submit:s,status:l}=cl();return r.jsx(o,{type:e,text:t,className:n,onClick:s,disabled:l.submitting,...a})},QE=({className:e,gap:t=4,space:n=!1,reset:o={},submit:a={}})=>r.jsxs("div",{className:$T({className:e,gap:t,space:n},"controls"),children:[r.jsx(qE,{...o}),r.jsx(XE,{...a})]});k3("uiselect",ME);k3("search",GE);const JE=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(ee,{name:t})}),eN=ve(JE,"ModalClose"),tN=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,nN=ve(tN,"ModalHeader"),rN=({footer:e})=>!!e&&r.jsx("footer",{children:e}),oN=ve(rN,"ModalFooter"),aN=({text:e,children:t,Header:n=nN,Footer:o=oN,...a})=>r.jsxs("article",{children:[r.jsx(n,{...a}),e||t,r.jsx(o,{...a})]}),sN=ve(aN,"ModalContent"),lN=({ref:e,open:t,close:n,className:o,closeClass:a="close",closeIcon:s="cross",Close:l=eN,Content:i=sN,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:s,className:a}),r.jsx(i,{...c})]})),Dn=ve(lN,"Modal"),iN=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Or({visible:e});return{show:n,hide:o,Modal:a=>r.jsx(Dn,{open:t,...a})}},cN=({color:e,className:t,style:n,fixed:o,light:a,dark:s,children:l})=>r.jsx("div",{className:Ce("overlay",t,e,{fixed:o,light:a,dark:s}),style:n,children:l}),ja=ve(cN,"Overlay"),dN=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Or({visible:e});return{show:n,hide:o,Overlay:a=>t&&r.jsx(ja,{...a})}},uN=({className:e,disabled:t,children:n})=>r.jsx("label",{className:Ce(e,{disabled:t}),children:n}),pN=ve(uN,"RadioLabel"),hN=({name:e,option:t,tabIndex:n=0,onChange:o=Me,checked:a})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>o(s.target.checked),checked:a}),fN=ve(hN,"RadioInput"),mN=({name:e,option:t,checked:n,inline:o,border:a,labelClass:s="radio",inputClass:l,Label:i=pN,Input:c=fN,onChange:d})=>r.jsxs(i,{className:Ce(s,t.labelClass,{inline:o,border:a}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:Ce(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),gN=ve(mN,"RadioOption"),xN=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:a,Option:s=gN,...l})=>r.jsx("div",{className:Ce(o,{disabled:a}),children:n.map(i=>{const c=go(i)?i:{value:i,label:i};return r.jsx(s,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),En=ve(xN,"Radio"),vN=({...e})=>r.jsx(kh,{modifiers:[sk,u3,_h],strategy:V_,...e}),Ym=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),Gm=(e,t,n,o,a,s)=>{n?(t.push(`stc-${a}`,`std-${s}`),px(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},qm=(e,t,n,o,a)=>{n?t.push(`flc-${o}`,`fld-${a}`):e.push("fill=none")},Z=({size:e,className:t,icon:n="cog",color:o="brand",stroke:a=!0,strokeWidth:s,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:m=o,bgStroke:y=!1,bgStrokeWidth:S,bgStrokeStop:j=60,bgStrokeStopDark:_=70,bgFill:x=!0,bgFillStop:h=70,bgFillStopDark:f=30,shrink:b=p?5:0,reverse:C=!1,animation:g=C?"spin.reverse":"spin"})=>{const w=Ce(e,t),T=[],E=[m],D=[],A=[o,g];Gm(T,E,y,S,j,_),Gm(D,A,a,s,l,i),qm(T,E,x,h,f),qm(D,A,c,d,u),b&&D.push(`shrink=${b}`);const K=p?`${p}${Ym(T,E)}`:"",q=`${n}${Ym(D,A)}`,X=p?`${K} ${q}`:q;return r.jsx(ee,{name:X,className:w})},yN=()=>r.jsxs(J,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),bN=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,jN=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],T3=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),jN.map(o=>r.jsx("option",{value:o,children:o},o))]}),SN=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],E3=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),SN.map(n=>r.jsx("option",{value:n,children:n},n))]}),CN=[0,1,2,3,4,5,6,8,10],wN=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),CN.map(n=>r.jsx("option",{value:n,children:n},n))]}),_N=[1,2,3,4,5],kN=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),_N.map(n=>r.jsx("option",{value:n,children:n},n))]}),Xm=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),TN=[0,1,2,3,4,5,6,8,10],EN=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),TN.map(o=>r.jsx("option",{value:o,children:o},o))]}),NN=Object.keys(Zs.icons),Ou=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),NN.map(o=>r.jsx("option",{value:o,children:o},o))]}),RN=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${DN(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(ON,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(In,{code:i,language:"html",expand:!0})]})]}),r.jsx(LN,{options:n,setOption:s,toggleOption:a})]})},LN=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),m=n("icon"),y=n("headicon"),S=t("stripe"),j=t("revealable");return r.jsxs("div",{children:[r.jsx(Cd,{label:"Headline",value:e.headline,setValue:o}),r.jsx(Cd,{label:"Title",value:e.title,setValue:a}),r.jsx(Cd,{label:"Text",value:e.text,setValue:s}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(BN,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(T3,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(E3,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(kN,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(EN,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(wN,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(Ou,{icon:e.headicon,setIcon:y,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(Ou,{icons:e.icon,setIcon:m})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(Xm,{checked:e.stripe,toggle:S,label:"Stripe"}),r.jsx(Xm,{checked:e.revealable,toggle:j,label:"Revealable",disabled:!e.headline})]})]})]})},DN=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),o=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...o].join(`
  `)},ON=({options:e})=>r.jsx(J,{...e}),BN=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),Cd=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(ee,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),N3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(re,{Component:yN,code:bN,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(RN,{})]}),AN=Object.freeze(Object.defineProperty({__proto__:null,default:N3},Symbol.toStringTag,{value:"Module"})),Nh=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),$N=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},dl=Br($N),MN=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Rh=Br(dl.Consumer(MN)),PN=({id:e,code:t,title:n=t,children:o,addPageToc:a,split:s})=>{const l=Nh(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:s?"cols-2 stack-desktop":"",children:o})]})},F=Rh.Consumer(PN),R=({Component:e,Source:t,children:n,code:o,title:a,caption:s=o?r.jsx("code",{children:o}):a,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(F,{code:o,title:a,...u,children:[r.jsx("div",{className:"mar-b-4",children:n}),r.jsx(re,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:d,lineProps:c})]}),IN=()=>r.jsxs("div",{children:[r.jsx(Xa,{text:"Error alert"}),r.jsx(Xa,{text:"Error alert with border",border:!0}),r.jsx(Xa,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(Xa,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),zN=`import React from 'react'
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
`,R3=()=>r.jsx(R,{code:"Error",Component:IN,Source:zN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),FN=Object.freeze(Object.defineProperty({__proto__:null,default:R3},Symbol.toStringTag,{value:"Module"})),UN=()=>r.jsxs("div",{children:[r.jsx(Ya,{text:"Info alert"}),r.jsx(Ya,{text:"Info alert with border",border:!0}),r.jsx(Ya,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(Ya,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),HN=`import React from 'react'
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
`,L3=()=>r.jsx(R,{code:"Info",Component:UN,Source:HN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),VN=Object.freeze(Object.defineProperty({__proto__:null,default:L3},Symbol.toStringTag,{value:"Module"})),WN=()=>r.jsxs("div",{children:[r.jsx(Ga,{text:"Success alert"}),r.jsx(Ga,{text:"Success alert with border",border:!0}),r.jsx(Ga,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Ga,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),ZN=`import React from 'react'
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
`,D3=()=>r.jsx(R,{code:"Success",Component:WN,Source:ZN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),KN=Object.freeze(Object.defineProperty({__proto__:null,default:D3},Symbol.toStringTag,{value:"Module"})),YN=()=>r.jsxs("div",{children:[r.jsx(qa,{text:"Warning alert"}),r.jsx(qa,{text:"Warning alert with border",border:!0}),r.jsx(qa,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(qa,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),GN=`import React from 'react'
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
`,O3=()=>r.jsx(R,{code:"Warning",Component:YN,Source:GN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),qN=Object.freeze(Object.defineProperty({__proto__:null,default:O3},Symbol.toStringTag,{value:"Module"})),XN=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Border Alert",border:!0}),r.jsx(J,{text:"Border Width 2",border:2})]}),QN=`import React from 'react'
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
`,B3=()=>r.jsx(R,{code:"border",Component:XN,Source:QN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),JN=Object.freeze(Object.defineProperty({__proto__:null,default:B3},Symbol.toStringTag,{value:"Module"})),eR=()=>r.jsx(J,{text:"Hello World!",className:"border shadow-2"}),tR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,A3=()=>r.jsx(R,{code:"className",Component:eR,Source:tR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),nR=Object.freeze(Object.defineProperty({__proto__:null,default:A3},Symbol.toStringTag,{value:"Module"})),rR=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Red Alert",color:"red"}),r.jsx(J,{text:"Brown Alert",color:"brown"}),r.jsx(J,{text:"Orange Alert",color:"orange"}),r.jsx(J,{text:"Yellow Alert",color:"yellow"}),r.jsx(J,{text:"Green Alert",color:"green"}),r.jsx(J,{text:"Teal Alert",color:"teal"}),r.jsx(J,{text:"Blue Alert",color:"blue"}),r.jsx(J,{text:"Indigo Alert",color:"indigo"}),r.jsx(J,{text:"Violet Alert",color:"violet"}),r.jsx(J,{text:"Purple Alert",color:"purple"}),r.jsx(J,{text:"Pink Alert",color:"pink"}),r.jsx(J,{text:"Maroon Alert",color:"maroon"})]}),oR=`import React from 'react'
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
`,$3=()=>r.jsx(R,{code:"color",Component:rR,Source:oR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),aR=Object.freeze(Object.defineProperty({__proto__:null,default:$3},Symbol.toStringTag,{value:"Module"})),sR=()=>r.jsx(J,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),lR=`import React from 'react'
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
`,M3=()=>r.jsx(R,{code:"dismissable",Component:sR,Source:lR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),iR=Object.freeze(Object.defineProperty({__proto__:null,default:M3},Symbol.toStringTag,{value:"Module"})),cR=()=>r.jsx(J,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),dR=`import React from 'react'
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
`,P3=()=>r.jsx(R,{code:"headicon",Component:cR,Source:dR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),uR=Object.freeze(Object.defineProperty({__proto__:null,default:P3},Symbol.toStringTag,{value:"Module"})),pR=()=>r.jsx(J,{headline:"Headline Alert",text:"An alert with a headline"}),hR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,I3=()=>r.jsx(R,{code:"headline",Component:pR,Source:hR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),fR=Object.freeze(Object.defineProperty({__proto__:null,default:I3},Symbol.toStringTag,{value:"Module"})),mR=()=>r.jsxs("div",{children:[r.jsx(J,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(J,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(J,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),gR=`import React from 'react'
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
`,z3=()=>r.jsx(R,{code:"icon",Component:mR,Source:gR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),xR=Object.freeze(Object.defineProperty({__proto__:null,default:z3},Symbol.toStringTag,{value:"Module"})),vR=()=>r.jsx(J,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),yR=`import React from 'react'
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
`,F3=()=>r.jsx(R,{code:"onDismiss",Component:vR,Source:yR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),bR=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),jR=()=>r.jsx(J,{text:"Radius Alert",radius:4}),SR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,U3=()=>r.jsx(R,{code:"radius",Component:jR,Source:SR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),CR=Object.freeze(Object.defineProperty({__proto__:null,default:U3},Symbol.toStringTag,{value:"Module"})),wR=()=>r.jsx(J,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),_R=`import React from 'react'
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
`,H3=()=>r.jsx(R,{code:"revealable",Component:wR,Source:_R,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),kR=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),TR=()=>r.jsx(J,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),ER=`import React from 'react'
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
`,V3=()=>r.jsx(R,{code:"revealed",Component:TR,Source:ER,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),NR=Object.freeze(Object.defineProperty({__proto__:null,default:V3},Symbol.toStringTag,{value:"Module"})),RR=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(J,{text:"Alert With Shadow 2",shadow:2}),r.jsx(J,{text:"Alert With Shadow 3",shadow:3}),r.jsx(J,{text:"Alert With Shadow 4",shadow:4}),r.jsx(J,{text:"Alert With Shadow 5",shadow:5})]}),LR=`import React from 'react'
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
`,W3=()=>r.jsx(R,{code:"shadow",Component:RR,Source:LR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),DR=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),OR=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Smallest Alert",size:"smallest"}),r.jsx(J,{text:"Smaller Alert",size:"smaller"}),r.jsx(J,{text:"Small Alert",size:"small"}),r.jsx(J,{text:"Medium Alert",size:"medium"}),r.jsx(J,{text:"Large Alert",size:"large"}),r.jsx(J,{text:"Larger Alert",size:"larger"}),r.jsx(J,{text:"Largest Alert",size:"largest"})]}),BR=`import React from 'react'
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
`,Z3=()=>r.jsx(R,{code:"size",Component:OR,Source:BR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),AR=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),$R=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(J,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(J,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(J,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(J,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),MR=`import React from 'react'
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
`,K3=()=>r.jsx(R,{code:"stripe",Component:$R,Source:MR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),PR=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),IR=()=>r.jsx(J,{text:"Hello World!"}),zR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,Y3=()=>r.jsx(R,{code:"text",Component:IR,Source:zR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:Y3},Symbol.toStringTag,{value:"Module"})),UR=()=>r.jsx(J,{title:"Hello World!",children:"This is an alert"}),HR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,G3=()=>r.jsx(R,{code:"title",Component:UR,Source:HR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),VR=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),WR=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Info Alert",type:"info"}),r.jsx(J,{text:"Success Alert",type:"success"}),r.jsx(J,{text:"Warning Alert",type:"warning"}),r.jsx(J,{text:"Error Alert",type:"error"})]}),ZR=`import React from 'react'
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
`,q3=()=>r.jsx(R,{code:"type",Component:WR,Source:ZR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),KR=Object.freeze(Object.defineProperty({__proto__:null,default:q3},Symbol.toStringTag,{value:"Module"})),Qe=({tocName:e,children:t})=>r.jsx(Rh.Provider,{tocName:e,children:t}),YR=({id:e,title:t,addPageTocHeading:n})=>{const o=Nh(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(o,t,a)},[e,t]),r.jsx("h2",{id:o,ref:a,className:"section-heading",children:t})},ie=Rh.Consumer(YR),GR=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(N3,{}),r.jsxs(Qe,{tocName:"alert",children:[r.jsx(ie,{title:"Properties"}),r.jsx(G3,{}),r.jsx(Y3,{}),r.jsx(I3,{}),r.jsx(P3,{}),r.jsx(H3,{}),r.jsx(V3,{}),r.jsx(M3,{}),r.jsx(F3,{}),r.jsx(A3,{}),r.jsx(B3,{}),r.jsx(U3,{}),r.jsx(W3,{}),r.jsx(Z3,{}),r.jsx($3,{}),r.jsx(q3,{}),r.jsx(K3,{}),r.jsx(z3,{}),r.jsx(ie,{title:"Components"}),r.jsx(L3,{}),r.jsx(D3,{}),r.jsx(O3,{}),r.jsx(R3,{})]})]}),qR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),XR=()=>r.jsx(B,{children:"This is a button"}),QR=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,X3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(re,{Component:XR,code:QR,expand:!0})]}),JR=Object.freeze(Object.defineProperty({__proto__:null,default:X3},Symbol.toStringTag,{value:"Module"})),eL=()=>r.jsx(B,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),tL=`import React from 'react'
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
`,Q3=()=>r.jsxs(R,{code:"Content",Component:eL,Source:tL,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),rL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Bare",color:"red",bare:!0}),r.jsx(B,{text:"Green Bare",color:"green",bare:!0}),r.jsx(B,{text:"Blue Bare",color:"blue",bare:!0})]}),oL=`import React from 'react'
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
`,J3=()=>r.jsx(R,{code:"bare",Component:rL,Source:oL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),aL=Object.freeze(Object.defineProperty({__proto__:null,default:J3},Symbol.toStringTag,{value:"Module"})),sL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(B,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(B,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(B,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),lL=`import React from 'react'
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
`,e0=()=>r.jsx(R,{code:"border",Component:sL,Source:lL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),iL=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"})),cL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),dL=`import React from 'react'
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
`,t0=()=>r.jsx(R,{code:"bright",Component:cL,Source:dL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),uL=Object.freeze(Object.defineProperty({__proto__:null,default:t0},Symbol.toStringTag,{value:"Module"})),pL=()=>r.jsx(B,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),hL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,n0=()=>r.jsx(R,{code:"className",Component:pL,Source:hL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),fL=Object.freeze(Object.defineProperty({__proto__:null,default:n0},Symbol.toStringTag,{value:"Module"})),mL=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Brown Button",color:"brown"}),r.jsx(B,{text:"Orange Button",color:"orange"}),r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Green Button",color:"green"}),r.jsx(B,{text:"Teal Button",color:"teal"}),r.jsx(B,{text:"Blue Button",color:"blue"}),r.jsx(B,{text:"Indigo Button",color:"indigo"}),r.jsx(B,{text:"Violet Button",color:"violet"}),r.jsx(B,{text:"Purple Button",color:"purple"}),r.jsx(B,{text:"Pink Button",color:"pink"}),r.jsx(B,{text:"Maroon Button",color:"maroon"})]}),gL=`import React from 'react'
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
`,r0=()=>r.jsx(R,{code:"color",Component:mL,Source:gL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"})),vL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Dark Red Button",color:"red",dark:!0})]}),yL=`import React from 'react'
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
`,o0=()=>r.jsx(R,{code:"dark",Component:vL,Source:yL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),bL=Object.freeze(Object.defineProperty({__proto__:null,default:o0},Symbol.toStringTag,{value:"Module"})),jL=()=>r.jsx(B,{text:"Disabled Button",disabled:!0}),SL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,a0=()=>r.jsx(R,{code:"disabled",Component:jL,Source:SL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),CL=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"})),wL=()=>r.jsx(B,{color:"green",icon:"bars"}),_L=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,s0=()=>r.jsx(R,{code:"icon",Component:wL,Source:_L,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"})),TL=()=>r.jsx(B,{color:"green",text:"Back",iconLeft:"angle-left"}),EL=`import React from 'react'
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
`,l0=()=>r.jsx(R,{code:"iconLeft",Component:TL,Source:EL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:l0},Symbol.toStringTag,{value:"Module"})),RL=()=>r.jsx(B,{color:"green",text:"Next",iconRight:"angle-right"}),LL=`import React from 'react'
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
`,i0=()=>r.jsx(R,{code:"iconRight",Component:RL,Source:LL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),OL=()=>r.jsx(B,{text:"I am labelled!",label:"This is a label"}),BL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,c0=()=>r.jsx(R,{code:"label",Component:OL,Source:BL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),$L=()=>r.jsx(B,{text:"Click Me!",onClick:()=>window.alert("Click!")}),ML=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,d0=()=>r.jsx(R,{code:"onClick",Component:$L,Source:ML,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),PL=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),IL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Outline",color:"red",outline:!0}),r.jsx(B,{text:"Green Outline",color:"green",outline:!0}),r.jsx(B,{text:"Blue Outline",color:"blue",outline:!0})]}),zL=`import React from 'react'
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
`,u0=()=>r.jsx(R,{code:"outline",Component:IL,Source:zL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),UL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Radius 0",color:"olive",radius:0}),r.jsx(B,{text:"Radius 2",color:"green",radius:2}),r.jsx(B,{text:"Radius 4",color:"teal",radius:3}),r.jsx(B,{text:"Radius 6",color:"blue",radius:4})]}),HL=`import React from 'react'
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
`,p0=()=>r.jsx(R,{code:"radius",Component:UL,Source:HL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),VL=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),WL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(B,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(B,{text:"Blue Shaded",color:"blue",shaded:!0})]}),ZL=`import React from 'react'
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
`,h0=()=>r.jsx(R,{code:"shaded",Component:WL,Source:ZL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),YL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(B,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(B,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(B,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(B,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),GL=`import React from 'react'
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
`,f0=()=>r.jsx(R,{code:"shadow",Component:YL,Source:GL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),qL=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),XL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Smallest",size:"smallest"}),r.jsx(B,{text:"Smaller",size:"smaller"}),r.jsx(B,{text:"Small",size:"small"}),r.jsx(B,{text:"Medium",size:"medium"}),r.jsx(B,{text:"Large",size:"large"}),r.jsx(B,{text:"Larger",size:"larger"}),r.jsx(B,{text:"Largest",size:"largest"}),r.jsx(B,{text:"x3",size:"x3"}),r.jsx(B,{text:"x5",size:"x5"}),r.jsx(B,{text:"x7",size:"x7"})]}),QL=`import React from 'react'
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
`,m0=()=>r.jsx(R,{code:"size",Component:XL,Source:QL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),eD=()=>r.jsx(B,{text:"Grey Button"}),tD=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,g0=()=>r.jsx(R,{code:"text",Component:eD,Source:tD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),nD=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),rD=()=>r.jsx(B,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),oD=`import React from 'react'
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
`,x0=()=>r.jsx(R,{code:"tooltip",Component:rD,Source:oD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),aD=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),sD=()=>r.jsx(B,{text:"Grey Button",type:"submit"}),lD=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,v0=()=>r.jsxs(R,{code:"type",Component:sD,Source:lD,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),iD=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),cD=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(X3,{}),r.jsxs(Qe,{tocName:"button",children:[r.jsx(ie,{title:"Properties"}),r.jsx(g0,{}),r.jsx(d0,{}),r.jsx(a0,{}),r.jsx(r0,{}),r.jsx(t0,{}),r.jsx(o0,{}),r.jsx(h0,{}),r.jsx(u0,{}),r.jsx(J3,{}),r.jsx(n0,{}),r.jsx(e0,{}),r.jsx(p0,{}),r.jsx(f0,{}),r.jsx(m0,{}),r.jsx(s0,{}),r.jsx(l0,{}),r.jsx(i0,{}),r.jsx(c0,{}),r.jsx(x0,{}),r.jsx(v0,{}),r.jsx(ie,{title:"Components"}),r.jsx(Q3,{})]})]}),dD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),uD=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),pD=()=>r.jsx(xo,{buttons:[{text:"One"},{text:"Two"}],Button:uD}),hD=`import { Buttons } from '@/src/index.jsx'

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
`,y0=()=>r.jsx(R,{code:"Button",Component:pD,Source:hD,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),fD=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),mD=()=>r.jsxs(xo,{children:[r.jsx(B,{text:"One",outline:!0}),r.jsx(B,{text:"Two",outline:!0})]}),gD=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,b0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(re,{Component:mD,code:gD,expand:!0})]}),xD=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),vD=()=>r.jsx(r.Fragment,{children:r.jsx(xo,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),yD=`import React from 'react'
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
`,j0=()=>r.jsx(R,{code:"buttonClass",Component:vD,Source:yD,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),bD=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),jD=()=>r.jsx(r.Fragment,{children:r.jsx(xo,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),SD=`import React from 'react'
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
`,S0=()=>r.jsx(R,{code:"buttons",Component:jD,Source:SD,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),CD=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),wD=()=>r.jsx(r.Fragment,{children:r.jsx(xo,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),_D=`import React from 'react'
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
`,C0=()=>r.jsx(R,{code:"className",Component:wD,Source:_D,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),kD=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),TD=()=>r.jsx(r.Fragment,{children:r.jsx(xo,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),ED=`import React from 'react'
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
`,w0=()=>r.jsx(R,{code:"outline",Component:TD,Source:ED,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx("code",{children:"Button"})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),ND=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),RD=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(b0,{}),r.jsxs(Qe,{tocName:"buttons",children:[r.jsx(ie,{title:"Properties"}),r.jsx(S0,{}),r.jsx(w0,{}),r.jsx(C0,{}),r.jsx(j0,{}),r.jsx(ie,{title:"Components"}),r.jsx(y0,{})]})]}),LD=Object.freeze(Object.defineProperty({__proto__:null,default:RD},Symbol.toStringTag,{value:"Module"})),DD=()=>r.jsx(yC,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),OD=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,_0=()=>r.jsx(R,{code:"CheckboxState",Component:DD,Source:OD,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),BD=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),AD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{text:"I like badgers",checked:e,onChange:t})},$D=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,k0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(re,{Component:AD,code:$D,expand:!0})]}),MD=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),PD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{border:!0,text:"I like badgers",checked:e,onChange:t})},ID=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,T0=()=>r.jsx(R,{code:"border",Component:PD,Source:ID,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),zD=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),FD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{text:"I like badgers",checked:e,onChange:t})},UD=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,E0=()=>r.jsx(R,{code:"checked",Component:FD,Source:UD,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),HD=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),VD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},WD=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,N0=()=>r.jsx(R,{code:"checkedText / uncheckedText",Component:VD,Source:WD,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),ZD=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),KD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},YD=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,R0=()=>r.jsx(R,{code:"className",Component:KD,Source:YD,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),GD=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),qD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},XD=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,L0=()=>r.jsx(R,{code:"disabled",Component:qD,Source:XD,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),QD=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),JD=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{text:"I like badgers",checked:e,onChange:t})},eO=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,D0=()=>r.jsx(R,{code:"onChange",Component:JD,Source:eO,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),tO=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),nO=()=>{const[e,t]=v.useState(!1);return r.jsx(Rn,{text:"Badger are the best!",checked:e,onChange:t})},rO=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,O0=()=>r.jsx(R,{code:"text",Component:nO,Source:rO,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),oO=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),aO=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(k0,{}),r.jsxs(Qe,{tocName:"checkbox",children:[r.jsx(ie,{title:"Properties"}),r.jsx(O0,{}),r.jsx(E0,{}),r.jsx(N0,{}),r.jsx(D0,{}),r.jsx(R0,{}),r.jsx(T0,{}),r.jsx(L0,{}),r.jsx(ie,{title:"Components"}),r.jsx(_0,{})]})]}),sO=Object.freeze(Object.defineProperty({__proto__:null,default:aO},Symbol.toStringTag,{value:"Module"})),lO=()=>r.jsx(r.Fragment,{children:r.jsx(Ln,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),iO=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,B0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(re,{Component:lO,code:iO,expand:!0})]}),cO=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),dO=()=>r.jsx(Ln,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),uO=`import React from 'react'
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

export default CancelExample`,A0=()=>r.jsx(R,{code:"cancel",Component:dO,Source:uO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),pO=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),hO=()=>r.jsx(Ln,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),fO=`import React from 'react'
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

export default CancelExample`,$0=()=>r.jsx(R,{id:"cancelProps",code:"cancelXXX",Component:hO,Source:fO,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),mO=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),gO=()=>r.jsx(r.Fragment,{children:r.jsx(Ln,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),xO=`import React from 'react'
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
`,M0=()=>r.jsx(R,{code:"className",Component:gO,Source:xO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),vO=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),yO=()=>r.jsx(Ln,{text:"Click to Delete",color:"red"}),bO=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,P0=()=>r.jsx(R,{code:"color",Component:yO,Source:bO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),jO=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),SO=()=>r.jsx(Ln,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),CO=`import React from 'react'
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

export default ConfirmExample`,I0=()=>r.jsx(R,{code:"confirm",Component:SO,Source:CO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),_O=()=>r.jsx(Ln,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),kO=`import React from 'react'
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

export default ConfirmProps`,z0=()=>r.jsx(R,{id:"confirmProps",code:"confirmXXX",Component:_O,Source:kO,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),TO=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),EO=()=>r.jsx(Ln,{text:"Click to Delete",color:"red",iconRight:"trash"}),NO=`import React from 'react'
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
`,F0=()=>r.jsx(R,{code:"iconRight",Component:EO,Source:NO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),RO=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),LO=()=>r.jsx(Ln,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),DO=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,U0=()=>r.jsx(R,{code:"onClick",Component:LO,Source:DO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),OO=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),BO=()=>r.jsx(Ln,{text:"Click to Delete"}),AO=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,H0=()=>r.jsx(R,{code:"text",Component:BO,Source:AO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),$O=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),MO=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(B0,{}),r.jsxs(Qe,{tocName:"confirm",children:[r.jsx(ie,{title:"Properties"}),r.jsx(H0,{}),r.jsx(P0,{}),r.jsx(F0,{}),r.jsx(M0,{}),r.jsx(A0,{}),r.jsx($0,{}),r.jsx(I0,{}),r.jsx(z0,{}),r.jsx(ie,{title:"Event Handlers"}),r.jsx(U0,{})]})]}),PO=Object.freeze(Object.defineProperty({__proto__:null,default:MO},Symbol.toStringTag,{value:"Module"})),On=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],IO=()=>r.jsx(Jt,{rows:On,columns:"id name animal role"}),zO=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    <Datatable
      rows={animals}
      columns="id name animal role"
    />
  )
}

export default DatatableExample`,V0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),r.jsx(re,{Component:IO,code:zO})]}),FO=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),UO=()=>r.jsx(Jt,{color:"brand",rows:On,columns:"id name animal role"}),HO=`import React from 'react'
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

export default DatatableExample`,W0=()=>r.jsx(R,{code:"color",Component:UO,Source:HO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),VO=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),WO=()=>r.jsx(Jt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),ZO=`import React from 'react'
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

export default DatatableExample`,KO=()=>r.jsxs(R,{code:"type",Component:WO,Source:ZO,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),YO=Object.freeze(Object.defineProperty({__proto__:null,default:KO},Symbol.toStringTag,{value:"Module"})),GO=()=>r.jsx(Jt,{rows:On,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),qO=`import React from 'react'
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

export default DatatableExample`,Z0=()=>r.jsx(R,{code:"display",Component:GO,Source:qO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),QO=()=>r.jsx(Jt,{color:"brand",rows:On,columns:"id name animal role"}),JO=`import React from 'react'
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
`,eB=()=>r.jsx(Jt,{color:"brand",rows:On,columns:["id","name","animal","role"]}),tB=`import React from 'react'
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
`,nB=()=>r.jsx(Jt,{color:"brand",rows:On,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),rB=`import React from 'react'
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
`,oB=()=>r.jsx(Jt,{color:"brand",rows:On,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),aB=`import React from 'react'
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
`,sB=()=>r.jsx(Jt,{color:"brand",rows:On,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),lB=`import React from 'react'
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
`,K0=()=>r.jsxs(F,{code:"columns",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),r.jsx(re,{Component:QO,code:JO,caption:"columns",expand:!1,undent:2}),r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),r.jsx(re,{Component:eB,code:tB,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),r.jsx(re,{Component:nB,code:rB,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),r.jsx(re,{Component:oB,code:aB,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]}),r.jsx(re,{Component:sB,code:lB,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),iB=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),cB=()=>r.jsx(Jt,{rows:On,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),dB=`import React from 'react'
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

export default DatatableExample`,Y0=()=>r.jsx(R,{code:"label",Component:cB,Source:dB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),uB=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),pB=()=>r.jsx(Jt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),hB=`import React from 'react'
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

export default DatatableExample`,G0=()=>r.jsxs(R,{code:"type",Component:pB,Source:hB,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),fB=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),mB=()=>r.jsx(Jt,{rows:On,columns:"id name animal role",pager:{size:"small",color:"blue"}}),gB=`import React from 'react'
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
 */function Ue(){return Ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ue.apply(this,arguments)}var He;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(He||(He={}));const Qm="popstate";function xB(e){e===void 0&&(e={});function t(o,a){let{pathname:s,search:l,hash:i}=o.location;return Ms("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:io(a)}return yB(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vB(){return Math.random().toString(36).substr(2,8)}function Jm(e,t){return{usr:e.state,key:e.key,idx:t}}function Ms(e,t,n,o){return n===void 0&&(n=null),Ue({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?er(t):t,{state:n,key:t&&t.key||o||vB()})}function io(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function yB(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:s=!1}=o,l=a.history,i=He.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ue({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=He.Pop;let _=u(),x=_==null?null:_-d;d=_,c&&c({action:i,location:j.location,delta:x})}function m(_,x){i=He.Push;let h=Ms(j.location,_,x);n&&n(h,_),d=u()+1;let f=Jm(h,d),b=j.createHref(h);try{l.pushState(f,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(b)}s&&c&&c({action:i,location:j.location,delta:1})}function y(_,x){i=He.Replace;let h=Ms(j.location,_,x);n&&n(h,_),d=u();let f=Jm(h,d),b=j.createHref(h);l.replaceState(f,"",b),s&&c&&c({action:i,location:j.location,delta:0})}function S(_){let x=a.location.origin!=="null"?a.location.origin:a.location.href,h=typeof _=="string"?_:io(_);return ue(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let j={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Qm,p),c=_,()=>{a.removeEventListener(Qm,p),c=null}},createHref(_){return t(a,_)},createURL:S,encodeLocation(_){let x=S(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(_){return l.go(_)}};return j}var ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ze||(ze={}));const bB=new Set(["lazy","caseSensitive","path","id","index","children"]);function jB(e){return e.index===!0}function Bu(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(ue(a.index!==!0||!a.children,"Cannot specify children on an index route"),ue(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),jB(a)){let c=Ue({},a,t(a),{id:i});return o[i]=c,c}else{let c=Ue({},a,t(a),{id:i,children:void 0});return o[i]=c,a.children&&(c.children=Bu(a.children,t,l,o)),c}})}function Ho(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?er(t):t,a=Er(o.pathname||"/",n);if(a==null)return null;let s=q0(e);CB(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=DB(s[i],BB(a));return l}function SB(e,t){let{route:n,pathname:o,params:a}=e;return{id:n.id,pathname:o,params:a,data:t[n.id],handle:n.handle}}function q0(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(ue(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Hn([o,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),q0(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:RB(d,s.index),routesMeta:u})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of X0(s.path))a(s,l,c)}),t}function X0(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let l=X0(o.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function CB(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:LB(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const wB=/^:\w+$/,_B=3,kB=2,TB=1,EB=10,NB=-2,e1=e=>e==="*";function RB(e,t){let n=e.split("/"),o=n.length;return n.some(e1)&&(o+=NB),t&&(o+=kB),n.filter(a=>!e1(a)).reduce((a,s)=>a+(wB.test(s)?_B:s===""?TB:EB),o)}function LB(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function DB(e,t){let{routesMeta:n}=e,o={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",u=Au({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;s.push({params:o,pathname:Hn([a,u.pathname]),pathnameBase:PB(Hn([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=Hn([a,u.pathnameBase]))}return s}function Au(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=OB(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:m,isOptional:y}=u;if(m==="*"){let j=i[p]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const S=i[p];return y&&!S?d[m]=void 0:d[m]=AB(S||"",m),d},{}),pathname:s,pathnameBase:l,pattern:e}}function OB(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function BB(e){try{return decodeURI(e)}catch(t){return lo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function AB(e,t){try{return decodeURIComponent(e)}catch(n){return lo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Er(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function $B(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?er(e):e;return{pathname:n?n.startsWith("/")?n:MB(n,t):t,search:IB(o),hash:zB(a)}}function MB(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function wd(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lh(e,t){let n=Q0(e);return t?n.map((o,a)=>a===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Dh(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=er(e):(a=Ue({},e),ue(!a.pathname||!a.pathname.includes("?"),wd("?","pathname","search",a)),ue(!a.pathname||!a.pathname.includes("#"),wd("#","pathname","hash",a)),ue(!a.search||!a.search.includes("#"),wd("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}i=p>=0?t[p]:"/"}let c=$B(a,i),d=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Hn=e=>e.join("/").replace(/\/\/+/g,"/"),PB=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),IB=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zB=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Oh{constructor(t,n,o,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function J0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const e4=["post","put","patch","delete"],FB=new Set(e4),UB=["get",...e4],HB=new Set(UB),VB=new Set([301,302,303,307,308]),WB=new Set([307,308]),_d={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ZB={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$a={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},t4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,KB=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),n4="remix-router-transitions";function YB(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;a=N=>({hasErrorBoundary:k(N)})}else a=KB;let s={},l=Bu(e.routes,a,void 0,s),i,c=e.basename||"/",d=Ue({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,m=null,y=null,S=null,j=e.hydrationData!=null,_=Ho(l,e.history.location,c),x=null;if(_==null){let k=Ut(404,{pathname:e.history.location.pathname}),{matches:N,route:L}=i1(l);_=N,x={[L.id]:k}}let h,f=_.some(k=>k.route.lazy),b=_.some(k=>k.route.loader);if(f)h=!1;else if(!b)h=!0;else if(d.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,N=e.hydrationData?e.hydrationData.errors:null;h=_.every(L=>L.route.loader&&L.route.loader.hydrate!==!0&&(k&&k[L.route.id]!==void 0||N&&N[L.route.id]!==void 0))}else h=e.hydrationData!=null;let C,g={historyAction:e.history.action,location:e.history.location,matches:_,initialized:h,navigation:_d,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},w=He.Pop,T=!1,E,D=!1,A=new Map,K=null,q=!1,X=!1,oe=[],se=[],V=new Map,O=0,P=-1,I=new Map,H=new Set,W=new Map,we=new Map,ce=new Set,je=new Map,le=new Map,Re=!1;function lt(){if(u=e.history.listen(k=>{let{action:N,location:L,delta:M}=k;if(Re){Re=!1;return}lo(le.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=yl({currentLocation:g.location,nextLocation:L,historyAction:N});if(z&&M!=null){Re=!0,e.history.go(M*-1),Hr(z,{state:"blocked",location:L,proceed(){Hr(z,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),e.history.go(M)},reset(){let ne=new Map(g.blockers);ne.set(z,$a),Le({blockers:ne})}});return}return Ct(N,L)}),n){aA(t,A);let k=()=>sA(t,A);t.addEventListener("pagehide",k),K=()=>t.removeEventListener("pagehide",k)}return g.initialized||Ct(He.Pop,g.location,{initialHydration:!0}),C}function St(){u&&u(),K&&K(),p.clear(),E&&E.abort(),g.fetchers.forEach((k,N)=>nn(N)),g.blockers.forEach((k,N)=>vl(N))}function fe(k){return p.add(k),()=>p.delete(k)}function Le(k,N){N===void 0&&(N={}),g=Ue({},g,k);let L=[],M=[];d.v7_fetcherPersist&&g.fetchers.forEach((z,ne)=>{z.state==="idle"&&(ce.has(ne)?M.push(ne):L.push(ne))}),[...p].forEach(z=>z(g,{deletedFetchers:M,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),d.v7_fetcherPersist&&(L.forEach(z=>g.fetchers.delete(z)),M.forEach(z=>nn(z)))}function Je(k,N,L){var M,z;let{flushSync:ne}=L===void 0?{}:L,G=g.actionData!=null&&g.navigation.formMethod!=null&&ln(g.navigation.formMethod)&&g.navigation.state==="loading"&&((M=k.state)==null?void 0:M._isRedirect)!==!0,Q;N.actionData?Object.keys(N.actionData).length>0?Q=N.actionData:Q=null:G?Q=g.actionData:Q=null;let Y=N.loaderData?l1(g.loaderData,N.loaderData,N.matches||[],N.errors):g.loaderData,de=g.blockers;de.size>0&&(de=new Map(de),de.forEach((ye,Ae)=>de.set(Ae,$a)));let Be=T===!0||g.navigation.formMethod!=null&&ln(g.navigation.formMethod)&&((z=k.state)==null?void 0:z._isRedirect)!==!0;i&&(l=i,i=void 0),q||w===He.Pop||(w===He.Push?e.history.push(k,k.state):w===He.Replace&&e.history.replace(k,k.state));let ae;if(w===He.Pop){let ye=A.get(g.location.pathname);ye&&ye.has(k.pathname)?ae={currentLocation:g.location,nextLocation:k}:A.has(k.pathname)&&(ae={currentLocation:k,nextLocation:g.location})}else if(D){let ye=A.get(g.location.pathname);ye?ye.add(k.pathname):(ye=new Set([k.pathname]),A.set(g.location.pathname,ye)),ae={currentLocation:g.location,nextLocation:k}}Le(Ue({},N,{actionData:Q,loaderData:Y,historyAction:w,location:k,initialized:!0,navigation:_d,revalidation:"idle",restoreScrollPosition:We(k,N.matches||g.matches),preventScrollReset:Be,blockers:de}),{viewTransitionOpts:ae,flushSync:ne===!0}),w=He.Pop,T=!1,D=!1,q=!1,X=!1,oe=[],se=[]}async function Ot(k,N){if(typeof k=="number"){e.history.go(k);return}let L=$u(g.location,g.matches,c,d.v7_prependBasename,k,d.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:M,submission:z,error:ne}=t1(d.v7_normalizeFormMethod,!1,L,N),G=g.location,Q=Ms(g.location,M,N&&N.state);Q=Ue({},Q,e.history.encodeLocation(Q));let Y=N&&N.replace!=null?N.replace:void 0,de=He.Push;Y===!0?de=He.Replace:Y===!1||z!=null&&ln(z.formMethod)&&z.formAction===g.location.pathname+g.location.search&&(de=He.Replace);let Be=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,ae=(N&&N.unstable_flushSync)===!0,ye=yl({currentLocation:G,nextLocation:Q,historyAction:de});if(ye){Hr(ye,{state:"blocked",location:Q,proceed(){Hr(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),Ot(k,N)},reset(){let Ae=new Map(g.blockers);Ae.set(ye,$a),Le({blockers:Ae})}});return}return await Ct(de,Q,{submission:z,pendingError:ne,preventScrollReset:Be,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:ae})}function en(){if(yo(),Le({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Ct(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Ct(w||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Ct(k,N,L){E&&E.abort(),E=null,w=k,q=(L&&L.startUninterruptedRevalidation)===!0,Bc(g.location,g.matches),T=(L&&L.preventScrollReset)===!0,D=(L&&L.enableViewTransition)===!0;let M=i||l,z=L&&L.overrideNavigation,ne=Ho(M,N,c),G=(L&&L.flushSync)===!0;if(!ne){let Ae=Ut(404,{pathname:N.pathname}),{matches:it,route:et}=i1(M);bo(),Je(N,{matches:it,loaderData:{},errors:{[et.id]:Ae}},{flushSync:G});return}if(g.initialized&&!X&&JB(g.location,N)&&!(L&&L.submission&&ln(L.submission.formMethod))){Je(N,{matches:ne},{flushSync:G});return}E=new AbortController;let Q=Pa(e.history,N,E.signal,L&&L.submission),Y,de;if(L&&L.pendingError)de={[ps(ne).route.id]:L.pendingError};else if(L&&L.submission&&ln(L.submission.formMethod)){let Ae=await tr(Q,N,L.submission,ne,{replace:L.replace,flushSync:G});if(Ae.shortCircuited)return;Y=Ae.pendingActionData,de=Ae.pendingActionError,z=kd(N,L.submission),G=!1,Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:Be,loaderData:ae,errors:ye}=await ml(Q,N,ne,z,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,G,Y,de);Be||(E=null,Je(N,Ue({matches:ne},Y?{actionData:Y}:{},{loaderData:ae,errors:ye})))}async function tr(k,N,L,M,z){z===void 0&&(z={}),yo();let ne=rA(N,L);Le({navigation:ne},{flushSync:z.flushSync===!0});let G,Q=Pu(M,N);if(!Q.route.action&&!Q.route.lazy)G={type:ze.error,error:Ut(405,{method:k.method,pathname:N.pathname,routeId:Q.route.id})};else if(G=await Ma("action",k,Q,M,s,a,c,d.v7_relativeSplatPath),k.signal.aborted)return{shortCircuited:!0};if(Jr(G)){let Y;return z&&z.replace!=null?Y=z.replace:Y=G.location===g.location.pathname+g.location.search,await vn(g,G,{submission:L,replace:Y}),{shortCircuited:!0}}if(Vo(G)){let Y=ps(M,Q.route.id);return(z&&z.replace)!==!0&&(w=He.Push),{pendingActionData:{},pendingActionError:{[Y.route.id]:G.error}}}if(Qr(G))throw Ut(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:G.data}}}async function ml(k,N,L,M,z,ne,G,Q,Y,de,Be){let ae=M||kd(N,z),ye=z||ne||u1(ae),Ae=i||l,[it,et]=n1(e.history,g,L,ye,N,d.v7_partialHydration&&Q===!0,X,oe,se,ce,W,H,Ae,c,de,Be);if(bo(_e=>!(L&&L.some(De=>De.route.id===_e))||it&&it.some(De=>De.route.id===_e)),P=++O,it.length===0&&et.length===0){let _e=rn();return Je(N,Ue({matches:L,loaderData:{},errors:Be||null},de?{actionData:de}:{},_e?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!q&&(!d.v7_partialHydration||!Q)){et.forEach(De=>{let yn=g.fetchers.get(De.key),Sl=Ia(void 0,yn?yn.data:void 0);g.fetchers.set(De.key,Sl)});let _e=de||g.actionData;Le(Ue({navigation:ae},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},et.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y})}et.forEach(_e=>{V.has(_e.key)&&wt(_e.key),_e.controller&&V.set(_e.key,_e.controller)});let jo=()=>et.forEach(_e=>wt(_e.key));E&&E.signal.addEventListener("abort",jo);let{results:Ac,loaderResults:So,fetcherResults:rr}=await Fr(g.matches,L,it,et,k);if(k.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",jo),et.forEach(_e=>V.delete(_e.key));let Vr=c1(Ac);if(Vr){if(Vr.idx>=it.length){let _e=et[Vr.idx-it.length].key;H.add(_e)}return await vn(g,Vr.result,{replace:G}),{shortCircuited:!0}}let{loaderData:$c,errors:Mc}=s1(g,L,it,So,Be,et,rr,je);je.forEach((_e,De)=>{_e.subscribe(yn=>{(yn||_e.done)&&je.delete(De)})});let Pc=rn(),Co=_a(P),jl=Pc||Co||et.length>0;return Ue({loaderData:$c,errors:Mc},jl?{fetchers:new Map(g.fetchers)}:{})}function gl(k,N,L,M){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");V.has(k)&&wt(k);let z=(M&&M.unstable_flushSync)===!0,ne=i||l,G=$u(g.location,g.matches,c,d.v7_prependBasename,L,d.v7_relativeSplatPath,N,M==null?void 0:M.relative),Q=Ho(ne,G,c);if(!Q){Ur(k,N,Ut(404,{pathname:G}),{flushSync:z});return}let{path:Y,submission:de,error:Be}=t1(d.v7_normalizeFormMethod,!0,G,M);if(Be){Ur(k,N,Be,{flushSync:z});return}let ae=Pu(Q,Y);if(T=(M&&M.preventScrollReset)===!0,de&&ln(de.formMethod)){Ca(k,N,Y,ae,Q,z,de);return}W.set(k,{routeId:N,path:Y}),xn(k,N,Y,ae,Q,z,de)}async function Ca(k,N,L,M,z,ne,G){if(yo(),W.delete(k),!M.route.action&&!M.route.lazy){let De=Ut(405,{method:G.formMethod,pathname:L,routeId:N});Ur(k,N,De,{flushSync:ne});return}let Q=g.fetchers.get(k);tn(k,oA(G,Q),{flushSync:ne});let Y=new AbortController,de=Pa(e.history,L,Y.signal,G);V.set(k,Y);let Be=O,ae=await Ma("action",de,M,z,s,a,c,d.v7_relativeSplatPath);if(de.signal.aborted){V.get(k)===Y&&V.delete(k);return}if(d.v7_fetcherPersist&&ce.has(k)){if(Jr(ae)||Vo(ae)){tn(k,sr(void 0));return}}else{if(Jr(ae))if(V.delete(k),P>Be){tn(k,sr(void 0));return}else return H.add(k),tn(k,Ia(G)),vn(g,ae,{fetcherSubmission:G});if(Vo(ae)){Ur(k,N,ae.error);return}}if(Qr(ae))throw Ut(400,{type:"defer-action"});let ye=g.navigation.location||g.location,Ae=Pa(e.history,ye,Y.signal),it=i||l,et=g.navigation.state!=="idle"?Ho(it,g.navigation.location,c):g.matches;ue(et,"Didn't find any matches after fetcher action");let jo=++O;I.set(k,jo);let Ac=Ia(G,ae.data);g.fetchers.set(k,Ac);let[So,rr]=n1(e.history,g,et,G,ye,!1,X,oe,se,ce,W,H,it,c,{[M.route.id]:ae.data},void 0);rr.filter(De=>De.key!==k).forEach(De=>{let yn=De.key,Sl=g.fetchers.get(yn),l6=Ia(void 0,Sl?Sl.data:void 0);g.fetchers.set(yn,l6),V.has(yn)&&wt(yn),De.controller&&V.set(yn,De.controller)}),Le({fetchers:new Map(g.fetchers)});let Vr=()=>rr.forEach(De=>wt(De.key));Y.signal.addEventListener("abort",Vr);let{results:$c,loaderResults:Mc,fetcherResults:Pc}=await Fr(g.matches,et,So,rr,Ae);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",Vr),I.delete(k),V.delete(k),rr.forEach(De=>V.delete(De.key));let Co=c1($c);if(Co){if(Co.idx>=So.length){let De=rr[Co.idx-So.length].key;H.add(De)}return vn(g,Co.result)}let{loaderData:jl,errors:_e}=s1(g,g.matches,So,Mc,void 0,rr,Pc,je);if(g.fetchers.has(k)){let De=sr(ae.data);g.fetchers.set(k,De)}_a(jo),g.navigation.state==="loading"&&jo>P?(ue(w,"Expected pending action"),E&&E.abort(),Je(g.navigation.location,{matches:et,loaderData:jl,errors:_e,fetchers:new Map(g.fetchers)})):(Le({errors:_e,loaderData:l1(g.loaderData,jl,et,_e),fetchers:new Map(g.fetchers)}),X=!1)}async function xn(k,N,L,M,z,ne,G){let Q=g.fetchers.get(k);tn(k,Ia(G,Q?Q.data:void 0),{flushSync:ne});let Y=new AbortController,de=Pa(e.history,L,Y.signal);V.set(k,Y);let Be=O,ae=await Ma("loader",de,M,z,s,a,c,d.v7_relativeSplatPath);if(Qr(ae)&&(ae=await a4(ae,de.signal,!0)||ae),V.get(k)===Y&&V.delete(k),!de.signal.aborted){if(ce.has(k)){tn(k,sr(void 0));return}if(Jr(ae))if(P>Be){tn(k,sr(void 0));return}else{H.add(k),await vn(g,ae);return}if(Vo(ae)){Ur(k,N,ae.error);return}ue(!Qr(ae),"Unhandled fetcher deferred data"),tn(k,sr(ae.data))}}async function vn(k,N,L){let{submission:M,fetcherSubmission:z,replace:ne}=L===void 0?{}:L;N.revalidate&&(X=!0);let G=Ms(k.location,N.location,{_isRedirect:!0});if(ue(G,"Expected a location on the redirect navigation"),n){let ye=!1;if(N.reloadDocument)ye=!0;else if(t4.test(N.location)){const Ae=e.history.createURL(N.location);ye=Ae.origin!==t.location.origin||Er(Ae.pathname,c)==null}if(ye){ne?t.location.replace(N.location):t.location.assign(N.location);return}}E=null;let Q=ne===!0?He.Replace:He.Push,{formMethod:Y,formAction:de,formEncType:Be}=k.navigation;!M&&!z&&Y&&de&&Be&&(M=u1(k.navigation));let ae=M||z;if(WB.has(N.status)&&ae&&ln(ae.formMethod))await Ct(Q,G,{submission:Ue({},ae,{formAction:N.location}),preventScrollReset:T});else{let ye=kd(G,M);await Ct(Q,G,{overrideNavigation:ye,fetcherSubmission:z,preventScrollReset:T})}}async function Fr(k,N,L,M,z){let ne=await Promise.all([...L.map(Y=>Ma("loader",z,Y,N,s,a,c,d.v7_relativeSplatPath)),...M.map(Y=>Y.matches&&Y.match&&Y.controller?Ma("loader",Pa(e.history,Y.path,Y.controller.signal),Y.match,Y.matches,s,a,c,d.v7_relativeSplatPath):{type:ze.error,error:Ut(404,{pathname:Y.path})})]),G=ne.slice(0,L.length),Q=ne.slice(L.length);return await Promise.all([d1(k,L,G,G.map(()=>z.signal),!1,g.loaderData),d1(k,M.map(Y=>Y.match),Q,M.map(Y=>Y.controller?Y.controller.signal:null),!0)]),{results:ne,loaderResults:G,fetcherResults:Q}}function yo(){X=!0,oe.push(...bo()),W.forEach((k,N)=>{V.has(N)&&(se.push(N),wt(N))})}function tn(k,N,L){L===void 0&&(L={}),g.fetchers.set(k,N),Le({fetchers:new Map(g.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Ur(k,N,L,M){M===void 0&&(M={});let z=ps(g.matches,N);nn(k),Le({errors:{[z.route.id]:L},fetchers:new Map(g.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function xl(k){return d.v7_fetcherPersist&&(we.set(k,(we.get(k)||0)+1),ce.has(k)&&ce.delete(k)),g.fetchers.get(k)||ZB}function nn(k){let N=g.fetchers.get(k);V.has(k)&&!(N&&N.state==="loading"&&I.has(k))&&wt(k),W.delete(k),I.delete(k),H.delete(k),ce.delete(k),g.fetchers.delete(k)}function nr(k){if(d.v7_fetcherPersist){let N=(we.get(k)||0)-1;N<=0?(we.delete(k),ce.add(k)):we.set(k,N)}else nn(k);Le({fetchers:new Map(g.fetchers)})}function wt(k){let N=V.get(k);ue(N,"Expected fetch controller: "+k),N.abort(),V.delete(k)}function wa(k){for(let N of k){let L=xl(N),M=sr(L.data);g.fetchers.set(N,M)}}function rn(){let k=[],N=!1;for(let L of H){let M=g.fetchers.get(L);ue(M,"Expected fetcher: "+L),M.state==="loading"&&(H.delete(L),k.push(L),N=!0)}return wa(k),N}function _a(k){let N=[];for(let[L,M]of I)if(M<k){let z=g.fetchers.get(L);ue(z,"Expected fetcher: "+L),z.state==="loading"&&(wt(L),I.delete(L),N.push(L))}return wa(N),N.length>0}function Dc(k,N){let L=g.blockers.get(k)||$a;return le.get(k)!==N&&le.set(k,N),L}function vl(k){g.blockers.delete(k),le.delete(k)}function Hr(k,N){let L=g.blockers.get(k)||$a;ue(L.state==="unblocked"&&N.state==="blocked"||L.state==="blocked"&&N.state==="blocked"||L.state==="blocked"&&N.state==="proceeding"||L.state==="blocked"&&N.state==="unblocked"||L.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+N.state);let M=new Map(g.blockers);M.set(k,N),Le({blockers:M})}function yl(k){let{currentLocation:N,nextLocation:L,historyAction:M}=k;if(le.size===0)return;le.size>1&&lo(!1,"A router only supports one blocker at a time");let z=Array.from(le.entries()),[ne,G]=z[z.length-1],Q=g.blockers.get(ne);if(!(Q&&Q.state==="proceeding")&&G({currentLocation:N,nextLocation:L,historyAction:M}))return ne}function bo(k){let N=[];return je.forEach((L,M)=>{(!k||k(M))&&(L.cancel(),N.push(M),je.delete(M))}),N}function Oc(k,N,L){if(m=k,S=N,y=L||null,!j&&g.navigation===_d){j=!0;let M=We(g.location,g.matches);M!=null&&Le({restoreScrollPosition:M})}return()=>{m=null,S=null,y=null}}function bl(k,N){return y&&y(k,N.map(M=>SB(M,g.loaderData)))||k.key}function Bc(k,N){if(m&&S){let L=bl(k,N);m[L]=S()}}function We(k,N){if(m){let L=bl(k,N),M=m[L];if(typeof M=="number")return M}return null}function ft(k){s={},i=Bu(k,a,void 0,s)}return C={get basename(){return c},get future(){return d},get state(){return g},get routes(){return l},get window(){return t},initialize:lt,subscribe:fe,enableScrollRestoration:Oc,navigate:Ot,fetch:gl,revalidate:en,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:xl,deleteFetcher:nr,dispose:St,getBlocker:Dc,deleteBlocker:vl,_internalFetchControllers:V,_internalActiveDeferreds:je,_internalSetRoutes:ft},C}function GB(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function $u(e,t,n,o,a,s,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=Dh(a||".",Lh(c,s),Er(e.pathname,n)||e.pathname,i==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&d&&d.route.index&&!Bh(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Hn([n,u.pathname])),io(u)}function t1(e,t,n,o){if(!o||!GB(o))return{path:n};if(o.formMethod&&!nA(o.formMethod))return{path:n,error:Ut(405,{method:o.formMethod})};let a=()=>({path:n,error:Ut(400,{type:"invalid-body"})}),s=o.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=o4(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!ln(l))return a();let m=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((y,S)=>{let[j,_]=S;return""+y+j+"="+_+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:m}}}else if(o.formEncType==="application/json"){if(!ln(l))return a();try{let m=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}ue(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=Mu(o.formData),d=o.formData;else if(o.body instanceof FormData)c=Mu(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=a1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=a1(c)}catch{return a()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(ln(u.formMethod))return{path:n,submission:u};let p=er(n);return t&&p.search&&Bh(p.search)&&c.append("index",""),p.search="?"+c,{path:io(p),submission:u}}function qB(e,t){let n=e;if(t){let o=e.findIndex(a=>a.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function n1(e,t,n,o,a,s,l,i,c,d,u,p,m,y,S,j){let _=j?Object.values(j)[0]:S?Object.values(S)[0]:void 0,x=e.createURL(t.location),h=e.createURL(a),f=j?Object.keys(j)[0]:void 0,C=qB(n,f).filter((w,T)=>{let{route:E}=w;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return E.loader.hydrate?!0:t.loaderData[E.id]===void 0&&(!t.errors||t.errors[E.id]===void 0);if(XB(t.loaderData,t.matches[T],w)||i.some(K=>K===w.route.id))return!0;let D=t.matches[T],A=w;return r1(w,Ue({currentUrl:x,currentParams:D.params,nextUrl:h,nextParams:A.params},o,{actionResult:_,defaultShouldRevalidate:l||x.pathname+x.search===h.pathname+h.search||x.search!==h.search||r4(D,A)}))}),g=[];return u.forEach((w,T)=>{if(s||!n.some(q=>q.route.id===w.routeId)||d.has(T))return;let E=Ho(m,w.path,y);if(!E){g.push({key:T,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(T),A=Pu(E,w.path),K=!1;p.has(T)?K=!1:c.includes(T)?K=!0:D&&D.state!=="idle"&&D.data===void 0?K=l:K=r1(A,Ue({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},o,{actionResult:_,defaultShouldRevalidate:l})),K&&g.push({key:T,routeId:w.routeId,path:w.path,matches:E,match:A,controller:new AbortController})}),[C,g]}function XB(e,t,n){let o=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return o||a}function r4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function r1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function o1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let a=n[e.id];ue(a,"No route found in manifest");let s={};for(let l in o){let c=a[l]!==void 0&&l!=="hasErrorBoundary";lo(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!bB.has(l)&&(s[l]=o[l])}Object.assign(a,s),Object.assign(a,Ue({},t(a),{lazy:void 0}))}async function Ma(e,t,n,o,a,s,l,i,c){c===void 0&&(c={});let d,u,p,m=j=>{let _,x=new Promise((h,f)=>_=f);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([j({request:t,params:n.params,context:c.requestContext}),x])};try{let j=n.route[e];if(n.route.lazy)if(j){let _,x=await Promise.all([m(j).catch(h=>{_=h}),o1(n.route,s,a)]);if(_)throw _;u=x[0]}else if(await o1(n.route,s,a),j=n.route[e],j)u=await m(j);else if(e==="action"){let _=new URL(t.url),x=_.pathname+_.search;throw Ut(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:ze.data,data:void 0};else if(j)u=await m(j);else{let _=new URL(t.url),x=_.pathname+_.search;throw Ut(404,{pathname:x})}ue(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(j){d=ze.error,u=j}finally{p&&t.signal.removeEventListener("abort",p)}if(tA(u)){let j=u.status;if(VB.has(j)){let x=u.headers.get("Location");if(ue(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!t4.test(x))x=$u(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,x,i);else if(!c.isStaticRequest){let h=new URL(t.url),f=x.startsWith("//")?new URL(h.protocol+x):new URL(x),b=Er(f.pathname,l)!=null;f.origin===h.origin&&b&&(x=f.pathname+f.search+f.hash)}if(c.isStaticRequest)throw u.headers.set("Location",x),u;return{type:ze.redirect,status:j,location:x,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===ze.error?ze.error:ze.data,response:u};let _;try{let x=u.headers.get("Content-Type");x&&/\bapplication\/json\b/.test(x)?_=await u.json():_=await u.text()}catch(x){return{type:ze.error,error:x}}return d===ze.error?{type:d,error:new Oh(j,u.statusText,_),headers:u.headers}:{type:ze.data,data:_,statusCode:u.status,headers:u.headers}}if(d===ze.error)return{type:d,error:u};if(eA(u)){var y,S;return{type:ze.deferred,deferredData:u,statusCode:(y=u.init)==null?void 0:y.status,headers:((S=u.init)==null?void 0:S.headers)&&new Headers(u.init.headers)}}return{type:ze.data,data:u}}function Pa(e,t,n,o){let a=e.createURL(o4(t)).toString(),s={signal:n};if(o&&ln(o.formMethod)){let{formMethod:l,formEncType:i}=o;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(o.json)):i==="text/plain"?s.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?s.body=Mu(o.formData):s.body=o.formData}return new Request(a,s)}function Mu(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function a1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function QB(e,t,n,o,a){let s={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let m=t[p].route.id;if(ue(!Jr(u),"Cannot handle redirect results in processLoaderData"),Vo(u)){let y=ps(e,m),S=u.error;o&&(S=Object.values(o)[0],o=void 0),l=l||{},l[y.route.id]==null&&(l[y.route.id]=S),s[m]=void 0,c||(c=!0,i=J0(u.error)?u.error.status:500),u.headers&&(d[m]=u.headers)}else Qr(u)?(a.set(m,u.deferredData),s[m]=u.deferredData.data):s[m]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[m]=u.headers)}),o&&(l=o,s[Object.keys(o)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:d}}function s1(e,t,n,o,a,s,l,i){let{loaderData:c,errors:d}=QB(t,n,o,a,i);for(let u=0;u<s.length;u++){let{key:p,match:m,controller:y}=s[u];ue(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let S=l[u];if(!(y&&y.signal.aborted))if(Vo(S)){let j=ps(e.matches,m==null?void 0:m.route.id);d&&d[j.route.id]||(d=Ue({},d,{[j.route.id]:S.error})),e.fetchers.delete(p)}else if(Jr(S))ue(!1,"Unhandled fetcher revalidation redirect");else if(Qr(S))ue(!1,"Unhandled fetcher deferred data");else{let j=sr(S.data);e.fetchers.set(p,j)}}return{loaderData:c,errors:d}}function l1(e,t,n,o){let a=Ue({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),o&&o.hasOwnProperty(l))break}return a}function ps(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function i1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ut(e,t){let{pathname:n,routeId:o,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&o?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&o?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Oh(e||500,l,new Error(i),!0)}function c1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Jr(n))return{result:n,idx:t}}}function o4(e){let t=typeof e=="string"?er(e):e;return io(Ue({},t,{hash:""}))}function JB(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Qr(e){return e.type===ze.deferred}function Vo(e){return e.type===ze.error}function Jr(e){return(e&&e.type)===ze.redirect}function eA(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function tA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function nA(e){return HB.has(e.toLowerCase())}function ln(e){return FB.has(e.toLowerCase())}async function d1(e,t,n,o,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!r4(d,c)&&(s&&s[c.route.id])!==void 0;if(Qr(i)&&(a||u)){let p=o[l];ue(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await a4(i,p,a).then(m=>{m&&(n[l]=m||n[l])})}}}async function a4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ze.data,data:e.deferredData.unwrappedData}}catch(a){return{type:ze.error,error:a}}return{type:ze.data,data:e.deferredData.data}}}function Bh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Pu(e,t){let n=typeof t=="string"?er(t).search:t.search;if(e[e.length-1].route.index&&Bh(n||""))return e[e.length-1];let o=Q0(e);return o[o.length-1]}function u1(e){let{formMethod:t,formAction:n,formEncType:o,text:a,formData:s,json:l}=e;if(!(!t||!n||!o)){if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function kd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function rA(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ia(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function oA(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function sr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function aA(e,t){try{let n=e.sessionStorage.getItem(n4);if(n){let o=JSON.parse(n);for(let[a,s]of Object.entries(o||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function sA(e,t){if(t.size>0){let n={};for(let[o,a]of t)n[o]=[...a];try{e.sessionStorage.setItem(n4,JSON.stringify(n))}catch(o){lo(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ps.apply(this,arguments)}const ul=v.createContext(null),Ah=v.createContext(null),Pr=v.createContext(null),Lc=v.createContext(null),Ir=v.createContext({outlet:null,matches:[],isDataRoute:!1}),s4=v.createContext(null);function lA(e,t){let{relative:n}=t===void 0?{}:t;pl()||ue(!1);let{basename:o,navigator:a}=v.useContext(Pr),{hash:s,pathname:l,search:i}=hl(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Hn([o,l])),a.createHref({pathname:c,search:i,hash:s})}function pl(){return v.useContext(Lc)!=null}function Sa(){return pl()||ue(!1),v.useContext(Lc).location}function l4(e){v.useContext(Pr).static||v.useLayoutEffect(e)}function iA(){let{isDataRoute:e}=v.useContext(Ir);return e?SA():cA()}function cA(){pl()||ue(!1);let e=v.useContext(ul),{basename:t,future:n,navigator:o}=v.useContext(Pr),{matches:a}=v.useContext(Ir),{pathname:s}=Sa(),l=JSON.stringify(Lh(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return l4(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=Dh(d,JSON.parse(l),s,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Hn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,s,e])}const dA=v.createContext(null);function uA(e){let t=v.useContext(Ir).outlet;return t&&v.createElement(dA.Provider,{value:e},t)}function hl(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Pr),{matches:a}=v.useContext(Ir),{pathname:s}=Sa(),l=JSON.stringify(Lh(a,o.v7_relativeSplatPath));return v.useMemo(()=>Dh(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function pA(e,t,n,o){pl()||ue(!1);let{navigator:a}=v.useContext(Pr),{matches:s}=v.useContext(Ir),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Sa(),u;if(t){var p;let _=typeof t=="string"?er(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||ue(!1),u=_}else u=d;let m=u.pathname||"/",y=c==="/"?m:m.slice(c.length)||"/",S=Ho(e,{pathname:y}),j=xA(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Hn([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Hn([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,o);return t&&j?v.createElement(Lc.Provider,{value:{location:Ps({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:He.Pop}},j):j}function hA(){let e=jA(),t=J0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const fA=v.createElement(hA,null);class mA extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Ir.Provider,{value:this.props.routeContext},v.createElement(s4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gA(e){let{routeContext:t,match:n,children:o}=e,a=v.useContext(ul);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Ir.Provider,{value:t},o)}function xA(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||ue(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:m,errors:y}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||S){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,m)=>{let y,S=!1,j=null,_=null;n&&(y=i&&p.route.id?i[p.route.id]:void 0,j=p.route.errorElement||fA,c&&(d<0&&m===0?(CA("route-fallback",!1),S=!0,_=null):d===m&&(S=!0,_=p.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,m+1)),h=()=>{let f;return y?f=j:S?f=_:p.route.Component?f=v.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=u,v.createElement(gA,{match:p,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(mA,{location:n.location,revalidation:n.revalidation,component:j,error:y,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var i4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(i4||{}),Gi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gi||{});function vA(e){let t=v.useContext(ul);return t||ue(!1),t}function yA(e){let t=v.useContext(Ah);return t||ue(!1),t}function bA(e){let t=v.useContext(Ir);return t||ue(!1),t}function c4(e){let t=bA(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function jA(){var e;let t=v.useContext(s4),n=yA(Gi.UseRouteError),o=c4(Gi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function SA(){let{router:e}=vA(i4.UseNavigateStable),t=c4(Gi.UseNavigateStable),n=v.useRef(!1);return l4(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ps({fromRouteId:t},s)))},[e,t])}const p1={};function CA(e,t,n){!t&&!p1[e]&&(p1[e]=!0)}function wA(e){return uA(e.context)}function _A(e){let{basename:t="/",children:n=null,location:o,navigationType:a=He.Pop,navigator:s,static:l=!1,future:i}=e;pl()&&ue(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:s,static:l,future:Ps({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof o=="string"&&(o=er(o));let{pathname:u="/",search:p="",hash:m="",state:y=null,key:S="default"}=o,j=v.useMemo(()=>{let _=Er(u,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:y,key:S},navigationType:a}},[c,u,p,m,y,S,a]);return j==null?null:v.createElement(Pr.Provider,{value:d},v.createElement(Lc.Provider,{children:n,value:j}))}new Promise(()=>{});function kA(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},sa.apply(this,arguments)}function d4(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function TA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function EA(e,t){return e.button===0&&(!t||t==="_self")&&!TA(e)}const NA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],RA=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function LA(e,t){return YB({basename:t==null?void 0:t.basename,future:sa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:xB({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||DA(),routes:e,mapRouteProperties:kA,window:t==null?void 0:t.window}).initialize()}function DA(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=sa({},t,{errors:OA(t.errors)})),t}function OA(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,a]of t)if(a&&a.__type==="RouteErrorResponse")n[o]=new Oh(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let s=new Error(a.message);s.stack="",n[o]=s}}else n[o]=a;return n}const u4=v.createContext({isTransitioning:!1}),BA=v.createContext(new Map),AA="startTransition",h1=_6[AA],$A="flushSync",f1=$8[$A];function MA(e){h1?h1(e):e()}function za(e){f1?f1(e):e()}class PA{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function IA(e){let{fallbackElement:t,router:n,future:o}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[m,y]=v.useState(),[S,j]=v.useState(),_=v.useRef(new Map),{v7_startTransition:x}=o||{},h=v.useCallback(w=>{x?MA(w):w()},[x]),f=v.useCallback((w,T)=>{let{deletedFetchers:E,unstable_flushSync:D,unstable_viewTransitionOpts:A}=T;E.forEach(q=>_.current.delete(q)),w.fetchers.forEach((q,X)=>{q.data!==void 0&&_.current.set(X,q.data)});let K=n.window==null||typeof n.window.document.startViewTransition!="function";if(!A||K){D?za(()=>s(w)):h(()=>s(w));return}if(D){za(()=>{m&&(u&&u.resolve(),m.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:A.currentLocation,nextLocation:A.nextLocation})});let q=n.window.document.startViewTransition(()=>{za(()=>s(w))});q.finished.finally(()=>{za(()=>{p(void 0),y(void 0),i(void 0),d({isTransitioning:!1})})}),za(()=>y(q));return}m?(u&&u.resolve(),m.skipTransition(),j({state:w,currentLocation:A.currentLocation,nextLocation:A.nextLocation})):(i(w),d({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}))},[n.window,m,u,_,h]);v.useLayoutEffect(()=>n.subscribe(f),[n,f]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new PA)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let w=l,T=u.promise,E=n.window.document.startViewTransition(async()=>{h(()=>s(w)),await T});E.finished.finally(()=>{p(void 0),y(void 0),i(void 0),d({isTransitioning:!1})}),y(E)}},[h,l,u,n.window]),v.useEffect(()=>{u&&l&&a.location.key===l.location.key&&u.resolve()},[u,m,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&S&&(i(S.state),d({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),j(void 0))},[c.isTransitioning,S]),v.useEffect(()=>{},[]);let b=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,T,E)=>n.navigate(w,{state:T,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(w,T,E)=>n.navigate(w,{replace:!0,state:T,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),C=n.basename||"/",g=v.useMemo(()=>({router:n,navigator:b,static:!1,basename:C}),[n,b,C]);return v.createElement(v.Fragment,null,v.createElement(ul.Provider,{value:g},v.createElement(Ah.Provider,{value:a},v.createElement(BA.Provider,{value:_.current},v.createElement(u4.Provider,{value:c},v.createElement(_A,{basename:C,location:a.location,navigationType:a.historyAction,navigator:b,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(zA,{routes:n.routes,future:n.future,state:a}):t))))),null)}function zA(e){let{routes:t,future:n,state:o}=e;return pA(t,void 0,o,n)}const FA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HA=v.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,m=d4(t,NA),{basename:y}=v.useContext(Pr),S,j=!1;if(typeof d=="string"&&UA.test(d)&&(S=d,FA))try{let f=new URL(window.location.href),b=d.startsWith("//")?new URL(f.protocol+d):new URL(d),C=Er(b.pathname,y);b.origin===f.origin&&C!=null?d=C+b.search+b.hash:j=!0}catch{}let _=lA(d,{relative:a}),x=ZA(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:a,unstable_viewTransition:p});function h(f){o&&o(f),f.defaultPrevented||x(f)}return v.createElement("a",sa({},m,{href:S||_,onClick:j||s?o:h,ref:n,target:c}))}),VA=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=d4(t,RA),m=hl(c,{relative:p.relative}),y=Sa(),S=v.useContext(Ah),{navigator:j}=v.useContext(Pr),_=S!=null&&KA(m)&&d===!0,x=j.encodeLocation?j.encodeLocation(m).pathname:m.pathname,h=y.pathname,f=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;a||(h=h.toLowerCase(),f=f?f.toLowerCase():null,x=x.toLowerCase());const b=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let C=h===x||!l&&h.startsWith(x)&&h.charAt(b)==="/",g=f!=null&&(f===x||!l&&f.startsWith(x)&&f.charAt(x.length)==="/"),w={isActive:C,isPending:g,isTransitioning:_},T=C?o:void 0,E;typeof s=="function"?E=s(w):E=[s,C?"active":null,g?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(w):i;return v.createElement(HA,sa({},p,{"aria-current":T,className:E,ref:n,style:D,to:c,unstable_viewTransition:d}),typeof u=="function"?u(w):u)});var Iu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Iu||(Iu={}));var m1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(m1||(m1={}));function WA(e){let t=v.useContext(ul);return t||ue(!1),t}function ZA(e,t){let{target:n,replace:o,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=iA(),d=Sa(),u=hl(e,{relative:l});return v.useCallback(p=>{if(EA(p,n)){p.preventDefault();let m=o!==void 0?o:io(d)===io(u);c(e,{replace:m,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[d,c,u,o,a,n,e,s,l,i])}function KA(e,t){t===void 0&&(t={});let n=v.useContext(u4);n==null&&ue(!1);let{basename:o}=WA(Iu.useViewTransitionState),a=hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Er(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=Er(n.nextLocation.pathname,o)||n.nextLocation.pathname;return Au(a.pathname,l)!=null||Au(a.pathname,s)!=null}const zr=({to:e,className:t="",exact:n,onClick:o,label:a,style:s,...l})=>r.jsx(VA,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:r.jsx(qs,{...l})}),p4=()=>r.jsx(R,{code:"pager",Component:mB,Source:gB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(zr,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),YA=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),GA=`export const animals = [
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
`,h4=()=>r.jsxs(F,{code:"rows",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(In,{code:GA,language:"js"})})})]}),qA=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),XA=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(V0,{}),r.jsxs(Qe,{tocName:"datatable",children:[r.jsx(ie,{title:"Properties"}),r.jsx(h4,{}),r.jsx(K0,{}),r.jsx(W0,{}),r.jsx(p4,{}),r.jsx(ie,{title:"Column Properties"}),r.jsx(G0,{}),r.jsx(Z0,{}),r.jsx(Y0,{})]})]}),QA=Object.freeze(Object.defineProperty({__proto__:null,default:XA},Symbol.toStringTag,{value:"Module"})),JA=()=>r.jsx(Xe,{summary:"Click to reveal",children:"This is the content that is revealed."}),e$=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,f4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(re,{Component:JA,code:e$})]}),t$=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),n$=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xe,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),r$=`import React from 'react'
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

export default DetailsExample`,m4=()=>r.jsx(R,{code:"border",Component:n$,Source:r$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),o$=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),a$=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xe,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),s$=`import React from 'react'
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

export default DetailsExample`,g4=()=>r.jsx(R,{code:"color",Component:a$,Source:s$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),l$=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),i$=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Xe,{summary:"This is the summary",content:"This is the content that is revealed."})}),c$=`import React from 'react'
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

export default DetailsExample`,x4=()=>r.jsx(R,{code:"content",Component:i$,Source:c$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),d$=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),u$=()=>r.jsx(Xe,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),p$=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,v4=()=>r.jsx(R,{code:"lined",Component:u$,Source:p$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),h$=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),f$=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Xe,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),m$=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,y4=()=>r.jsx(R,{code:"open",Component:f$,Source:m$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),g$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),x$=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xe,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),v$=`import React from 'react'
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

export default DetailsExample`,b4=()=>r.jsx(R,{code:"radius",Component:x$,Source:v$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),y$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),b$=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xe,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),j$=`import React from 'react'
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

export default DetailsExample`,j4=()=>r.jsx(R,{code:"shaded",Component:b$,Source:j$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),S$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),C$=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xe,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Xe,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),w$=`import React from 'react'
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

export default DetailsExample`,S4=()=>r.jsx(R,{code:"shadow",Component:C$,Source:w$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),_$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),k$=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xe,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Xe,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(ee,{name:"cog"})]}),children:"This is the content that is revealed."})]}),T$=`import React from 'react'
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

export default DetailsExample`,C4=()=>r.jsx(R,{code:"summary",Component:k$,Source:T$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),E$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),N$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(f4,{}),r.jsxs(Qe,{tocName:"details",children:[r.jsx(ie,{title:"Properties"}),r.jsx(C4,{}),r.jsx(x4,{}),r.jsx(y4,{}),r.jsx(v4,{}),r.jsx(m4,{}),r.jsx(b4,{}),r.jsx(j4,{}),r.jsx(S4,{}),r.jsx(g4,{}),r.jsx(ie,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(F,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(F,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(ie,{title:"Components"}),r.jsx(F,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(F,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),R$=Object.freeze(Object.defineProperty({__proto__:null,default:N$},Symbol.toStringTag,{value:"Module"})),L$=()=>r.jsx(Ar,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),D$=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,w4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(zr,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),r.jsx(re,{Component:L$,code:D$})]}),O$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),B$=()=>r.jsx(Ar,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),A$=`import React from 'react'
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

export default DropdownMenuExample`,_4=()=>r.jsx(R,{code:"onSelect",Component:B$,Source:A$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),$$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),M$=()=>r.jsx(Ar,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),P$=`import React from 'react'
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

export default DropdownExample`,I$=()=>r.jsx(Ar,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),z$=`import React from 'react'
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

export default DropdownExample`,F$=()=>r.jsx(Ar,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),U$=`import React from 'react'
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

export default DropdownExample`,H$=()=>r.jsx(Ar,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),V$=`import React from 'react'
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

export default DropdownExample`,W$=()=>r.jsx(Ar,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),Z$=`import React from 'react'
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

export default DropdownExample`,k4=()=>r.jsxs(F,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(re,{Component:M$,code:P$,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),r.jsx(re,{Component:F$,code:U$,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]}),r.jsx(re,{Component:W$,code:Z$,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]}),r.jsx(re,{Component:I$,code:z$,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]}),r.jsx(re,{Component:H$,code:V$,caption:"options",expand:!1,undent:2})]}),K$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),co=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),Y$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(w4,{}),r.jsxs(Qe,{tocName:"dropdown-menu",children:[r.jsx(ie,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(zr,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx(k4,{}),r.jsx(_4,{}),r.jsxs(co,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"CSS Classes"}),r.jsxs(F,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(F,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"Components"}),r.jsxs(F,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(F,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),G$=Object.freeze(Object.defineProperty({__proto__:null,default:Y$},Symbol.toStringTag,{value:"Module"})),q$=()=>r.jsx(mn,{text:"Dropdown",children:"Hello World!"}),X$=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,T4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),r.jsx(re,{Component:q$,code:X$})]}),Q$=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),J$=()=>r.jsx(mn,{text:"Dropdown Content",content:"Hello World!"}),eM=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,E4=()=>r.jsx(R,{code:"content",Component:J$,Source:eM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),tM=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),nM=()=>r.jsx(mn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),rM=`import React from 'react'
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

export default DropdownExample`,N4=()=>r.jsx(R,{code:"iconLeft",Component:nM,Source:rM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),oM=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),aM=()=>r.jsx(mn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),sM=`import React from 'react'
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

export default DropdownMenuExample`,R4=()=>r.jsx(R,{code:"iconLeftRotate",Component:aM,Source:sM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),iM=()=>r.jsx(mn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),cM=`import React from 'react'
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

export default DropdownExample`,L4=()=>r.jsx(R,{code:"iconRight",Component:iM,Source:cM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),uM=()=>r.jsx(mn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),pM=`import React from 'react'
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

export default DropdownExample`,D4=()=>r.jsx(R,{code:"iconRightRotate",Component:uM,Source:pM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),hM=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),fM=()=>r.jsx(mn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),mM=`import React from 'react'
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

export default DropdownExample`,O4=()=>r.jsx(R,{code:"openOnHover",Component:fM,Source:mM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),gM=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),xM=()=>r.jsx(mn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),vM=`import React from 'react'
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

export default DropdownExample`,B4=()=>r.jsx(R,{code:"right",Component:xM,Source:vM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),yM=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),bM=()=>r.jsx(mn,{text:"Dropdown Trigger Text",children:"Hello World!"}),jM=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,A4=()=>r.jsx(R,{code:"text",Component:bM,Source:jM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),SM=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),CM=()=>r.jsx(mn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),wM=`import React from 'react'
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

export default DropdownExample`,$4=()=>r.jsx(R,{code:"wide",Component:CM,Source:wM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),_M=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),kM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(T4,{}),r.jsxs(Qe,{tocName:"dropdown",children:[r.jsx(ie,{title:"Properties"}),r.jsx(A4,{}),r.jsx(E4,{}),r.jsx(O4,{}),r.jsx(B4,{}),r.jsx($4,{}),r.jsx(N4,{}),r.jsx(R4,{}),r.jsx(L4,{}),r.jsx(D4,{}),r.jsxs(co,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(F,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(F,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(F,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(F,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"Components"}),r.jsxs(F,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(F,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),TM=Object.freeze(Object.defineProperty({__proto__:null,default:kM},Symbol.toStringTag,{value:"Module"})),EM=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],NM=e=>EM.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),RM=()=>r.jsxs(xa,{children:[r.jsx(dn,{name:"animal",type:"search",label:"Animal",onSearch:NM}),r.jsx(va,{})]}),LM=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,DM=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],g1=e=>DM.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),OM=e=>e.id,BM=()=>r.jsxs(xa,{children:[r.jsx(dn,{name:"animal1",type:"search",label:"Animal",onSearch:g1}),r.jsx(dn,{name:"animal2",type:"search",label:"Animal",onSearch:g1,selectValue:OM}),r.jsx(va,{})]}),AM=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,M4=()=>r.jsxs(F,{code:"search",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"search"})," ","to use the ",r.jsx(zr,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",r.jsx("code",{children:"onSearch"})," handler defined below."]}),r.jsx(re,{Component:RM,code:LM}),r.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(re,{Component:BM,code:AM})]}),$M=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),MM=()=>r.jsxs(xa,{children:[r.jsx(dn,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),r.jsx(va,{})]}),PM=`import React from 'react'
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

export default UISelectExample`,IM=()=>r.jsxs(xa,{children:[r.jsx(dn,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),r.jsx(va,{})]}),zM=`import React from 'react'
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

export default UISelectExample`,FM=()=>r.jsxs(xa,{children:[r.jsx(dn,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),r.jsx(va,{})]}),UM=`import React from 'react'
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

export default UISelectExample`,P4=()=>r.jsxs(F,{code:"uiselect",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"uiselect"})," ","to use the ",r.jsx(zr,{to:"/components/select",text:"Select"})," component."]}),r.jsx(re,{Component:MM,code:PM}),r.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",r.jsx("code",{children:"search"})," property is set here to enable searching."]}),r.jsx(re,{Component:IM,code:zM}),r.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(re,{Component:FM,code:UM})]}),HM=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),VM=["Guitar","Bass","Drums","Keyboards","Mandolin"],WM=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],ZM=e=>WM.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),KM=()=>r.jsxs(xa,{children:[r.jsx(dn,{name:"email",label:"Email address",required:!0}),r.jsx(dn,{name:"password",label:"Password",type:"password",required:!0}),r.jsx(dn,{name:"instrument",type:"uiselect",label:"Instrument",options:VM}),r.jsx(dn,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:ZM}),r.jsx(dn,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),r.jsx(QE,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),e=>r.jsx(B,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),r.jsx(va,{})]}),YM=`/* eslint-disable quotes */
import { Form, Field, ResetSubmit, Debug, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Button, Debug } from '@abw/badger-react-ui

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

const FormExample = () =>
  <Form>
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

export default FormExample`,GM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Form"}),r.jsxs("p",{className:"large wide",children:["The library includes"," ",r.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),r.jsx(re,{Component:KM,code:YM,caption:"Form"}),r.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",r.jsx(zr,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",r.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),r.jsxs(Qe,{tocName:"form",children:[r.jsx(ie,{title:"Input Components"}),r.jsx(P4,{}),r.jsx(M4,{})]})]}),qM=Object.freeze(Object.defineProperty({__proto__:null,default:GM},Symbol.toStringTag,{value:"Module"})),XM=()=>r.jsx(ee,{name:"check"}),QM=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,JM=Pj(0,100,5),Yl=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),JM.map(a=>r.jsx("option",{value:a,children:a},a))]}),eP=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${nP(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(rP,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(In,{code:i,language:"html",expand:!0})]})]}),r.jsx(tP,{options:n,setOption:s,toggleOption:a})]})},tP=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(Ou,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(E3,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(T3,{color:e.color,setColor:a,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(Yl,{stop:e.foreground,setStop:s})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(Yl,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(Yl,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(Yl,{stop:e.backgroundDark,setStop:c})]})]})]})},I4=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,a)=>(o[a]=e[a],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},nP=e=>{const t=I4(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},rP=({options:e})=>r.jsx(ee,{...I4(e)}),z4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(re,{Component:XM,code:QM,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(eP,{})]}),oP=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),F4=()=>r.jsxs(F,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(Zs.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(ee,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),aP=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),sP=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(ee,{name:"check",className:"smallest"}),r.jsx(ee,{name:"check",className:"smaller"}),r.jsx(ee,{name:"check",className:"small"}),r.jsx(ee,{name:"check"}),r.jsx(ee,{name:"check",className:"large"}),r.jsx(ee,{name:"check",className:"larger"}),r.jsx(ee,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(ee,{name:"check",className:"larger green fgc-50"}),r.jsx(ee,{name:"cross",className:"larger red fgc-50"})]})]}),lP=`import React from 'react'
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

export default Component`,U4=()=>r.jsx(R,{code:"className",Component:sP,Source:lP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),iP=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),cP=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(ee,{name:"check",color:"green-50"}),r.jsx(ee,{name:"check",color:"green-70-30"}),r.jsx(ee,{name:"check",color:"green-70--30"}),r.jsx(ee,{name:"check",color:"green-70-30-30-70"})]}),dP=`import React from 'react'
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

export default Component`,H4=()=>r.jsxs(R,{code:"color",Component:cP,Source:dP,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),uP=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),pP=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(ee,{name:"bars"}),r.jsx(ee,{name:"check"}),r.jsx(ee,{name:"cross"}),r.jsx(ee,{name:"arrow"}),r.jsx(ee,{name:"arrow-right"}),r.jsx(ee,{name:"arrow-down-thicker.red.fgc-50"})]}),hP=`import React from 'react'
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

export default Component`,V4=()=>r.jsxs(R,{code:"name",Component:pP,Source:hP,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),mP=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ee,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(ee,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),gP=`import React from 'react'
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

export default Component`,W4=()=>r.jsx(R,{code:"path",Component:mP,Source:gP,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),xP=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),vP=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ee,{name:"check",size:"smallest"}),r.jsx(ee,{name:"check",size:"smaller"}),r.jsx(ee,{name:"check",size:"small"}),r.jsx(ee,{name:"check",size:"medium"}),r.jsx(ee,{name:"check",size:"large"}),r.jsx(ee,{name:"check",size:"larger"}),r.jsx(ee,{name:"check",size:"largest"})]}),yP=`import React from 'react'
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

export default Component`,Z4=()=>r.jsx(R,{code:"size",Component:vP,Source:yP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),bP=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),jP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx(z4,{}),r.jsxs(Qe,{tocName:"icon",children:[r.jsx(ie,{title:"Properties"}),r.jsx(V4,{}),r.jsx(U4,{}),r.jsx(Z4,{}),r.jsx(H4,{}),r.jsx(W4,{}),r.jsx(ie,{title:"Components"}),r.jsx(F4,{})]})]}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:jP},Symbol.toStringTag,{value:"Module"})),CP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Dn,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},wP=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,K4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(re,{Component:CP,code:wP,expand:!0})]}),_P=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),kP=()=>{const{show:e,hide:t,Modal:n}=iN();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(B,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:e})]})},TP=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,Y4=()=>r.jsx(R,{code:"ModalState",Component:kP,Source:TP,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),EP=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),NP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Dn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},RP=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,G4=()=>r.jsx(R,{code:"className",Component:NP,Source:RP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),DP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},OP=`import React, { useState } from 'react'
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

export default ModalExample`,q4=()=>r.jsx(R,{code:"close",Component:DP,Source:OP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),AP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},$P=`import React, { useState } from 'react'
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

export default ModalExample`,X4=()=>r.jsx(R,{code:"closeIcon",Component:AP,Source:$P,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),MP=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),PP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(B,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},IP=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Q4=()=>r.jsx(R,{code:"footer",Component:PP,Source:IP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),zP=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),FP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},UP=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,J4=()=>r.jsx(R,{code:"header",Component:FP,Source:UP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),HP=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),VP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},WP=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,e5=()=>r.jsx(R,{code:"text",Component:VP,Source:WP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),ZP=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),KP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},YP=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,t5=()=>r.jsx(R,{code:"title",Component:KP,Source:YP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),GP=Object.freeze(Object.defineProperty({__proto__:null,default:t5},Symbol.toStringTag,{value:"Module"})),qP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(K4,{}),r.jsxs(Qe,{tocName:"modal",children:[r.jsx(ie,{title:"Properties"}),r.jsx(G4,{}),r.jsx(q4,{}),r.jsx(X4,{}),r.jsx(e5,{}),r.jsx(t5,{}),r.jsx(J4,{}),r.jsx(Q4,{}),r.jsx(ie,{title:"Components"}),r.jsx(Y4,{})]})]}),XP=Object.freeze(Object.defineProperty({__proto__:null,default:qP},Symbol.toStringTag,{value:"Module"})),QP=()=>{const{isVisible:e,show:t,hide:n}=Or();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(ja,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"})]})},JP=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,n5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(re,{Component:QP,code:JP})]}),eI=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),tI=()=>{const{show:e,hide:t,Overlay:n}=dN();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(B,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(B,{color:"green",text:"Show Overlay",onClick:e})]})},nI=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,r5=()=>r.jsx(R,{code:"OverlayState",Component:tI,Source:nI,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),rI=Object.freeze(Object.defineProperty({__proto__:null,default:r5},Symbol.toStringTag,{value:"Module"})),oI=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Dn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},aI=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,sI=()=>r.jsx(R,{code:"className",Component:oI,Source:aI,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),lI=Object.freeze(Object.defineProperty({__proto__:null,default:sI},Symbol.toStringTag,{value:"Module"})),iI=()=>{const{isVisible:e,show:t,hide:n}=Or();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(ja,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},cI=`import React from 'react'
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

export default ColorExample`,o5=()=>r.jsx(R,{title:"Custom Colors",Component:iI,Source:cI,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),dI=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),uI=()=>{const{isVisible:e,show:t,hide:n}=Or();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(ja,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},pI=`import React from 'react'
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

export default OverlayExample`,a5=()=>r.jsx(R,{code:"fixed",Component:uI,Source:pI,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),fI=()=>{const{isVisible:e,show:t,hide:n}=Or();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(ja,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},mI=`import React from 'react'
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

export default ColorExample`,gI=()=>{const{isVisible:e,show:t,hide:n}=Or();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(ja,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},xI=`import React from 'react'
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

export default ColorExample`,s5=()=>r.jsxs(F,{code:"light / dark",children:[r.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(re,{Component:fI,code:mI,caption:"light",undent:8}),r.jsx(re,{Component:gI,code:xI,caption:"dark",undent:8})]}),vI=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),yI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(n5,{}),r.jsxs(Qe,{tocName:"overlay",children:[r.jsx(ie,{title:"Properties"}),r.jsx(a5,{}),r.jsx(s5,{}),r.jsx(ie,{title:"Styling"}),r.jsx(o5,{}),r.jsx(ie,{title:"Components"}),r.jsx(r5,{})]})]}),bI=Object.freeze(Object.defineProperty({__proto__:null,default:yI},Symbol.toStringTag,{value:"Module"})),jI=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=$k(),a=o[e];return r.jsx(B,{text:a,className:t,onClick:n})},SI=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Yt,{pages:t,page:n,setPage:o,pageRanges:e,Page:jI,size:"small"})},CI=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,l5=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(wI,{name:t,value:n},t))})}),wI=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),i5=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]}),r.jsx(l5,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Components"}),r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]}),r.jsx(re,{Component:SI,code:CI})]}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),kI=()=>{const[e,t]=v.useState(0);return r.jsx(Yt,{pages:11,page:e,setPage:t})},TI=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,c5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]}),r.jsx(re,{Component:kI,code:TI})]}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),NI=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Yt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},RI=`import React, { useState } from 'react'
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
`,d5=()=>r.jsx(R,{code:"className",Component:NI,Source:RI,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),LI=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),DI=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Yt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Yt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Yt,{pages:11,page:e,setPage:t,color:"blue"})]})},OI=`import React, { useState } from 'react'
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
`,u5=()=>r.jsx(R,{code:"color",Component:DI,Source:OI,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),BI=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),AI=()=>{const[e,t]=v.useState(0);return r.jsx(Yt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},$I=`import React, { useState } from 'react'
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
`,p5=()=>r.jsx(R,{code:"prevIcon / nextIcon",Component:AI,Source:$I,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),MI=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),PI=()=>{const[e,t]=v.useState(0);return r.jsx(Yt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},II=`import React, { useState } from 'react'
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
`,zI=()=>r.jsx(R,{code:"nextIcon",Component:PI,Source:II,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),FI=Object.freeze(Object.defineProperty({__proto__:null,default:zI},Symbol.toStringTag,{value:"Module"})),UI=()=>{const[e,t]=v.useState(0);return r.jsx(Yt,{pages:11,page:e,setPage:t,showFirstLast:!1})},HI=`import React, { useState } from 'react'
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
`,h5=()=>r.jsxs(R,{code:"showFirstLast",Component:UI,Source:HI,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),VI=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),WI=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Yt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Yt,{pages:11,page:e,setPage:t,size:"small"})]})},ZI=`import React, { useState } from 'react'
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
`,f5=()=>r.jsx(R,{code:"size",Component:WI,Source:ZI,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),KI=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),YI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(c5,{}),r.jsx(i5,{}),r.jsxs(Qe,{tocName:"pager",children:[r.jsx(ie,{title:"Properties"}),r.jsx(d5,{}),r.jsx(u5,{}),r.jsx(f5,{}),r.jsx(p5,{}),r.jsx(h5,{}),r.jsxs(co,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(F,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(F,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(F,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"Components"}),r.jsxs(F,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(F,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(F,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(F,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:YI},Symbol.toStringTag,{value:"Module"})),qI=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{value:e,onChange:t,options:["David","Nigel","Derek"]})},XI=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,m5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(re,{Component:qI,code:XI,expand:!0})]}),QI=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),JI=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(En,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx(En,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},ez=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,g5=()=>r.jsxs(R,{code:"border",Component:JI,Source:ez,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),tz=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),nz=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},rz=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,x5=()=>r.jsx(R,{code:"className",Component:nz,Source:rz,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),oz=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),az=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},sz=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,v5=()=>r.jsx(R,{code:"disabled",Component:az,Source:sz,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),lz=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),iz=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},cz=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,y5=()=>r.jsx(R,{code:"inline",Component:iz,Source:cz,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),dz=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),uz=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},pz=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,b5=()=>r.jsx(R,{code:"name",Component:uz,Source:pz,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),hz=Object.freeze(Object.defineProperty({__proto__:null,default:b5},Symbol.toStringTag,{value:"Module"})),fz=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(En,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},mz=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,Mt=({id:e,text:t})=>r.jsx("a",{href:`#${Nh(e||t)}`,className:"code",children:t}),j5=()=>r.jsx(R,{code:"onChange",Component:fz,Source:mz,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(Mt,{text:"value"}),"."]})}),gz=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),xz=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},vz=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,S5=()=>r.jsx(R,{code:"options",Component:xz,Source:vz,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),yz=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),bz=()=>{const[e,t]=v.useState(!1);return r.jsx(En,{value:e,onChange:t,options:["David","Nigel","Derek"]})},jz=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,C5=()=>r.jsx(R,{code:"value",Component:bz,Source:jz,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(Mt,{text:"onChange"})," to update the value."]})}),Sz=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),Cz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(m5,{}),r.jsxs(Qe,{tocName:"radio",children:[r.jsx(ie,{title:"Properties"}),r.jsx(C5,{}),r.jsx(j5,{}),r.jsx(b5,{}),r.jsx(x5,{}),r.jsx(y5,{}),r.jsx(g5,{}),r.jsx(ie,{title:"Option Properties"}),r.jsx(S5,{}),r.jsx(v5,{})]})]}),wz=Object.freeze(Object.defineProperty({__proto__:null,default:Cz},Symbol.toStringTag,{value:"Module"})),_z=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],kz=()=>{const e=t=>_z.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(ba,{onSearch:e})},Tz=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,w5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(re,{Component:kz,code:Tz})]}),Ez=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),Nz=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],Rz=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>Nz.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(ba,{onSearch:t,displayResult:e})},Lz=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,_5=()=>r.jsx(R,{code:"displayResult",Component:Rz,Source:Lz,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),Dz=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),Oz=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],Bz=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>Oz.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(ba,{onSearch:t,displayValue:e})},Az=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,k5=()=>r.jsx(R,{code:"displayValue",Component:Bz,Source:Az,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),$z=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),Mz=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],Pz=()=>{const e=async t=>mc(500).then(()=>Mz.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(ba,{onSearch:e,debug:!0})},Iz=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,T5=()=>r.jsx(R,{code:"onSearch",Component:Pz,Source:Iz,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),zz=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),Fz=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],Uz=()=>{const e=n=>Fz.filter(o=>o.toLowerCase().indexOf(n.toLowerCase())!==-1),t=n=>alert(`You selected ${n}`);return r.jsx(ba,{onSearch:e,onSelect:t})},Hz=`import { Search } from '@/src/index.jsx'

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

export default OnSelectExample`,E5=()=>r.jsx(R,{code:"onSelect",Component:Uz,Source:Hz,children:r.jsxs("p",{children:["You can define an ",r.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),Vz=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),Wz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(w5,{}),r.jsxs(Qe,{tocName:"search",children:[r.jsx(ie,{title:"Properties"}),r.jsx(T5,{}),r.jsx(E5,{}),r.jsx(_5,{}),r.jsx(k5,{})]})]}),Zz=Object.freeze(Object.defineProperty({__proto__:null,default:Wz},Symbol.toStringTag,{value:"Module"})),Kz=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],Yz=()=>r.jsx(gn,{options:Kz}),Gz=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,N5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(re,{Component:Yz,code:Gz}),r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]}),r.jsx(l5,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),qz=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),Xz=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],Qz=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(gn,{options:Xz,displayOption:e})},Jz=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,R5=()=>r.jsx(R,{code:"displayOption",Component:Qz,Source:Jz,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),eF=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),tF=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],nF=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(gn,{options:tF,displayValue:e})},rF=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,L5=()=>r.jsx(R,{code:"displayValue",Component:nF,Source:rF,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),oF=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),aF=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],sF=()=>r.jsx(gn,{options:aF}),lF=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,D5=()=>r.jsxs(R,{code:"options",Component:sF,Source:lF,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(Mt,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(Mt,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(Mt,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),iF=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),cF=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],dF=()=>r.jsx(gn,{search:!0,options:cF}),uF=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,pF=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],hF=()=>r.jsx(gn,{search:!0,options:pF}),fF=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,O5=()=>r.jsxs(F,{code:"search",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",r.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),r.jsxs("p",{children:["Try entering ",r.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",r.jsx("code",{children:"aa"})," ","(e.g all the ",r.jsx("b",{children:"Aa"}),"rdvarks) and ",r.jsx("code",{children:"an"})," (Al",r.jsx("b",{children:"an"})," Aardvark,"," ",r.jsx("b",{children:"An"}),"ne Aardvark and Bri",r.jsx("b",{children:"an"})," Badger)."]})]}),r.jsx(re,{Component:dF,code:uF}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["If the ",r.jsx("code",{children:"options"})," are an array of objects then it will look for a ",r.jsx("code",{children:"search"}),", ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"}),","," ",r.jsx("code",{children:"name"})," or ",r.jsx("code",{children:"value"})," property in each object and use that."]})}),r.jsx(re,{Component:hF,code:fF})]}),mF=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),gF=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],xF=(e,t)=>{const n=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().indexOf(n)>=0||o.department.toLowerCase().indexOf(n)>=0)},vF=e=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:"smaller",children:e.department})]}),yF=()=>r.jsx(gn,{search:!0,options:gF,searchOptions:xF,displayOption:vF}),bF=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,B5=()=>r.jsxs(R,{code:"searchOptions",Component:yF,Source:bF,expand:!0,children:[r.jsxs("p",{children:["You can define your own ",r.jsx("code",{children:"searchOptions"})," function to search through the ",r.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),r.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",r.jsx("code",{children:"name"})," or their ",r.jsx("code",{children:"department"}),". Try entering ",r.jsx("code",{children:"an"}),".  It will match Al",r.jsx("b",{children:"an"}),", and ",r.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",r.jsx("b",{children:"an"}),"agement."]})]}),jF=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),SF=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],CF=()=>r.jsx(gn,{validOption:e=>!e.isFruit,options:SF}),wF=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,A5=()=>r.jsxs(R,{code:"validOption",Component:CF,Source:wF,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),_F=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),kF=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],TF=()=>r.jsx(gn,{options:kF,value:"Bobby Badger"}),EF=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,NF=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],RF=()=>r.jsx(gn,{options:NF,value:5}),LF=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,$5=()=>r.jsxs(F,{code:"value",children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),r.jsx(re,{Component:TF,code:EF,caption:"value",expand:!1}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]})}),r.jsx(re,{Component:RF,code:LF,caption:"value",expand:!1})]}),DF=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),OF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(N5,{}),r.jsxs(Qe,{tocName:"select",children:[r.jsx(ie,{title:"Properties"}),r.jsx(D5,{}),r.jsx($5,{}),r.jsx(R5,{}),r.jsx(L5,{}),r.jsx(A5,{}),r.jsx(O5,{}),r.jsx(B5,{}),r.jsx(F,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(F,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(F,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(F,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(F,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(F,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(co,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"Event Handlers"}),r.jsxs(F,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(F,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(F,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(F,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(F,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(F,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(F,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(F,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"CSS Classes"}),r.jsxs(F,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(F,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(F,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(F,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(F,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(F,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(F,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"Components"}),r.jsx(F,{code:"Content",children:"Renders the content of the select component."}),r.jsx(F,{code:"Input",children:"Renders the input field."}),r.jsx(F,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(F,{code:"Option",children:"Renders an individual option."}),r.jsx(F,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),BF=Object.freeze(Object.defineProperty({__proto__:null,default:OF},Symbol.toStringTag,{value:"Module"})),x1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],AF=()=>{const[e,t]=te.useState(!1),[n,o]=te.useState(x1),a=i=>{o(i),t(!0)},s=()=>{o(x1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(vN,{items:n,Item:l,setOrder:a})})]})},$F=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,M5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(re,{Component:AF,code:$F})]}),MF=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),v1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],PF=()=>{const[e,t]=te.useState(!1),[n,o]=te.useState(v1),a=i=>{o(i),t(!0)},s=()=>{o(v1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(kh,{items:n,Item:l,setOrder:a})})]})},IF=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,P5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(re,{Component:PF,code:IF})]}),zF=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),y1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],FF=()=>{const[e,t]=te.useState(!1),[n,o]=te.useState(y1),a=i=>{o(i),t(!0)},s=()=>{o(y1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(p3,{items:n,Item:l,setOrder:a})})]})},UF=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,I5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(re,{Component:FF,code:UF})]}),HF=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),VF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(P5,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(I5,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(M5,{}),r.jsx(Qe,{tocName:"sortable",children:r.jsx(co,{children:r.jsxs("div",{className:"flow",children:[r.jsx(ie,{title:"Properties"}),r.jsxs(F,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(F,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(F,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),WF=Object.freeze(Object.defineProperty({__proto__:null,default:VF},Symbol.toStringTag,{value:"Module"})),ZF=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(Z,{}),r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange",fill:!0}),r.jsx(Z,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(Z,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(Z,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),KF=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,z5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(re,{Component:ZF,code:KF,expand:!0})]}),YF=Object.freeze(Object.defineProperty({__proto__:null,default:z5},Symbol.toStringTag,{value:"Module"})),GF=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),qF=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,F5=()=>r.jsx(R,{code:"bgColor",Component:GF,Source:qF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),XF=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),QF=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),JF=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,U5=()=>r.jsx(R,{code:"bgFill",Component:QF,Source:JF,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),eU=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),tU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(Z,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(Z,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),nU=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,H5=()=>r.jsx(R,{code:"bgFillStop",Component:tU,Source:nU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),rU=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),oU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:!1}),r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"square40"}),r.jsx(Z,{bgIcon:"square30"}),r.jsx(Z,{bgIcon:"square20"}),r.jsx(Z,{bgIcon:"square10"}),r.jsx(Z,{bgIcon:"square"})]}),aU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,V5=()=>r.jsx(R,{code:"bgIcon",Component:oU,Source:aU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(Mt,{text:"shrink"})," property."]})}),sU=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),lU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinnest"})]}),iU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,W5=()=>r.jsxs(R,{code:"bgStroke",Component:lU,Source:iU,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),cU=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),dU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),uU=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,Z5=()=>r.jsx(R,{code:"bgStrokeStop",Component:dU,Source:uU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),pU=Object.freeze(Object.defineProperty({__proto__:null,default:Z5},Symbol.toStringTag,{value:"Module"})),hU=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange"}),r.jsx(Z,{color:"yellow"}),r.jsx(Z,{color:"green"})]}),fU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,K5=()=>r.jsxs(R,{code:"color",Component:hU,Source:fU,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),mU=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),gU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,color:"red"}),r.jsx(Z,{fill:!0,color:"orange"}),r.jsx(Z,{fill:!0,color:"yellow"}),r.jsx(Z,{fill:!0,color:"green"})]}),xU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Y5=()=>r.jsx(R,{code:"fill",Component:gU,Source:xU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),vU=Object.freeze(Object.defineProperty({__proto__:null,default:Y5},Symbol.toStringTag,{value:"Module"})),yU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(Z,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(Z,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(Z,{fill:!0,fillStop:80,fillStopDark:10})]}),bU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,G5=()=>r.jsx(R,{code:"fillStop",Component:yU,Source:bU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),jU=Object.freeze(Object.defineProperty({__proto__:null,default:G5},Symbol.toStringTag,{value:"Module"})),SU=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{icon:"rotate"}),r.jsx(Z,{icon:"asterisk"}),r.jsx(Z,{icon:"arrow"})]}),CU=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,q5=()=>r.jsx(R,{code:"icon",Component:SU,Source:CU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),wU=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),_U=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(Z,{}),r.jsx(Z,{reverse:!0})]}),kU=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,X5=()=>r.jsx(R,{code:"reverse",Component:_U,Source:kU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),TU=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),EU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"circle",shrink:6}),r.jsx(Z,{bgIcon:"circle",shrink:7}),r.jsx(Z,{bgIcon:"circle",shrink:8})]}),NU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Q5=()=>r.jsx(R,{code:"shrink",Component:EU,Source:NU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(Mt,{text:"bgIcon"})," is set, otherwise it is 0."]})}),RU=Object.freeze(Object.defineProperty({__proto__:null,default:Q5},Symbol.toStringTag,{value:"Module"})),LU=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(Z,{size:"x3"}),r.jsx(Z,{size:"x5"}),r.jsx(Z,{size:"x8"})]}),DU=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,J5=()=>r.jsxs(R,{code:"size",Component:LU,Source:DU,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),OU=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),BU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{stroke:"thinnest"}),r.jsx(Z,{stroke:"thinner"}),r.jsx(Z,{stroke:"thin"}),r.jsx(Z,{}),r.jsx(Z,{stroke:"thick"}),r.jsx(Z,{stroke:"thicker"}),r.jsx(Z,{stroke:"thickest"}),r.jsx(Z,{stroke:!1,fill:!0})]}),AU=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,e6=()=>r.jsxs(R,{code:"stroke",Component:BU,Source:AU,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(Mt,{text:"fill"}),")"]})]}),$U=Object.freeze(Object.defineProperty({__proto__:null,default:e6},Symbol.toStringTag,{value:"Module"})),MU=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{strokeStop:20,strokeStopDark:80}),r.jsx(Z,{strokeStop:50,strokeStopDark:50}),r.jsx(Z,{strokeStop:80,strokeStopDark:20})]}),PU=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,t6=()=>r.jsx(R,{code:"strokeStop",Component:MU,Source:PU,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),IU=Object.freeze(Object.defineProperty({__proto__:null,default:t6},Symbol.toStringTag,{value:"Module"})),zU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx(z5,{}),r.jsxs(Qe,{tocName:"spinner",children:[r.jsx(ie,{title:"Properties"}),r.jsx(J5,{}),r.jsx(X5,{}),r.jsx(Q5,{}),r.jsx(q5,{}),r.jsx(K5,{}),r.jsx(e6,{}),r.jsx(t6,{}),r.jsx(Y5,{}),r.jsx(G5,{}),r.jsx(V5,{}),r.jsx(F5,{}),r.jsx(W5,{}),r.jsx(Z5,{}),r.jsx(U5,{}),r.jsx(H5,{})]})]}),FU=Object.freeze(Object.defineProperty({__proto__:null,default:zU},Symbol.toStringTag,{value:"Module"})),UU=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,HU="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",VU="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",WU=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,ZU=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,KU=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(In,{code:UU,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(co,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(In,{code:HU,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(co,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(In,{code:VU,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(In,{code:WU,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(In,{code:ZU,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),YU=Object.freeze(Object.defineProperty({__proto__:null,default:KU},Symbol.toStringTag,{value:"Module"})),GU=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),qU=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),XU=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(GU,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(qU,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),QU=Object.freeze(Object.defineProperty({__proto__:null,default:XU},Symbol.toStringTag,{value:"Module"})),n6=({path:e,onClick:t,width:n=512,height:o=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),JU=e=>r.jsx(n6,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),r6=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:a,className:o}),!!t&&r.jsx("div",{className:i,style:s,children:t})]}),eH=e=>{const{setDark:t}=fl();return r.jsx(r6,{Icon:JU,onClick:t,...e})},tH=e=>r.jsx(n6,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),nH=e=>{const{setLight:t}=fl();return r.jsx(r6,{Icon:tH,onClick:t,...e})},rH=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:a}=fl();return n?r.jsx(nH,{onClick:a,...e}):r.jsx(eH,{onClick:o,...t})},o6=v.createContext(),fl=()=>v.useContext(o6),Gl="dark",Td="light",oH="(prefers-color-scheme: dark)",Ed=()=>!1,aH=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},sH=()=>({matches:Ed,addEventListener:Ed,removeEventListener:Ed}),a6=typeof window<"u",Nd=a6&&window.localStorage?window.localStorage:aH(),lH=a6&&window.matchMedia?e=>window.matchMedia(e):sH,zu=lH(oH),iH=()=>zu.matches,cH=e=>e.split(" "),b1=(e,t="")=>`${e} ${t}`,dH=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?Nd.getItem(e):null,[a,s=""]=o?cH(o):[iH(),null],[l,i]=v.useState(a===Gl),[c,d]=v.useState(s||t),u=S=>{i(S),e&&Nd.setItem(e,b1(S?Gl:Td,c))},p=S=>{d(S),e&&Nd.setItem(e,b1(l?Gl:Td,S))},m=S=>u(S.matches);v.useEffect(()=>(zu.addEventListener("change",m),()=>zu.removeEventListener("change",m)),[]);const y={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?Gl:Td,variant:c,setVariant:p};return r.jsx(o6.Provider,{value:y,children:n})},s6="0.1.0",uH="2024-03-18",j1="sidebar",pH="no-sidebar",hH=()=>{const{variant:e,setVariant:t}=fl();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(ee,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===j1?pH:j1)}),r.jsx(zr,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",s6]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(ee,{name:"github",className:"mar-r-4"})}),r.jsx(rH,{})]})]})})},fH=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",s6,r.jsx("br",{}),uH]})]})}),mH=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=o.ref.current)==null?void 0:a.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),gH=dl.Consumer(mH),xH=({title:e,path:t,items:n,tocs:o})=>{const a=hl(),s=t&&a.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:s,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return r.jsxs("li",{children:[r.jsx(zr,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(gH,{toc:o[l.tocName]})]},l.to)})})]})},S1=dl.Consumer(xH),vH={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},yH={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"}]},bH=()=>r.jsxs(r.Fragment,{children:[r.jsx(S1,{...vH}),r.jsx(S1,{...yH})]});function jH(){const{pathname:e}=Sa();return v.useEffect(()=>SH(document.getElementById("content")),[e]),null}function SH(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const CH=({contentRef:e})=>{const{theme:t,variant:n}=fl();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(hH,{}),r.jsxs("div",{id:"app",children:[r.jsx(jH,{}),r.jsx("aside",{children:r.jsx(bH,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(wA,{})})]}),r.jsx(fH,{})]})},wH=dl.Consumer(CH),_H=/\/_layout$/,kH=/\/_examples\//,TH=EH(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":AN,"../pages/components/alert/_examples/Error/index.jsx":FN,"../pages/components/alert/_examples/Info/index.jsx":VN,"../pages/components/alert/_examples/Success/index.jsx":KN,"../pages/components/alert/_examples/Warning/index.jsx":qN,"../pages/components/alert/_examples/border/index.jsx":JN,"../pages/components/alert/_examples/className/index.jsx":nR,"../pages/components/alert/_examples/color/index.jsx":aR,"../pages/components/alert/_examples/dismissable/index.jsx":iR,"../pages/components/alert/_examples/headIcon/index.jsx":uR,"../pages/components/alert/_examples/headline/index.jsx":fR,"../pages/components/alert/_examples/icon/index.jsx":xR,"../pages/components/alert/_examples/onDismiss/index.jsx":bR,"../pages/components/alert/_examples/radius/index.jsx":CR,"../pages/components/alert/_examples/revealable/index.jsx":kR,"../pages/components/alert/_examples/revealed/index.jsx":NR,"../pages/components/alert/_examples/shadow/index.jsx":DR,"../pages/components/alert/_examples/size/index.jsx":AR,"../pages/components/alert/_examples/stripe/index.jsx":PR,"../pages/components/alert/_examples/text/index.jsx":FR,"../pages/components/alert/_examples/title/index.jsx":VR,"../pages/components/alert/_examples/type/index.jsx":KR,"../pages/components/alert/index.jsx":qR,"../pages/components/button/_examples/Button/index.jsx":JR,"../pages/components/button/_examples/Content/index.jsx":nL,"../pages/components/button/_examples/bare/index.jsx":aL,"../pages/components/button/_examples/border/index.jsx":iL,"../pages/components/button/_examples/bright/index.jsx":uL,"../pages/components/button/_examples/className/index.jsx":fL,"../pages/components/button/_examples/color/index.jsx":xL,"../pages/components/button/_examples/dark/index.jsx":bL,"../pages/components/button/_examples/disabled/index.jsx":CL,"../pages/components/button/_examples/icon/index.jsx":kL,"../pages/components/button/_examples/iconLeft/index.jsx":NL,"../pages/components/button/_examples/iconRight/index.jsx":DL,"../pages/components/button/_examples/label/index.jsx":AL,"../pages/components/button/_examples/onClick/index.jsx":PL,"../pages/components/button/_examples/outline/index.jsx":FL,"../pages/components/button/_examples/radius/index.jsx":VL,"../pages/components/button/_examples/shaded/index.jsx":KL,"../pages/components/button/_examples/shadow/index.jsx":qL,"../pages/components/button/_examples/size/index.jsx":JL,"../pages/components/button/_examples/text/index.jsx":nD,"../pages/components/button/_examples/tooltip/index.jsx":aD,"../pages/components/button/_examples/type/index.jsx":iD,"../pages/components/button/index.jsx":dD,"../pages/components/buttons/_examples/Button/index.jsx":fD,"../pages/components/buttons/_examples/Buttons/index.jsx":xD,"../pages/components/buttons/_examples/buttonClass/index.jsx":bD,"../pages/components/buttons/_examples/buttonsProp/index.jsx":CD,"../pages/components/buttons/_examples/className/index.jsx":kD,"../pages/components/buttons/_examples/outline/index.jsx":ND,"../pages/components/buttons/index.jsx":LD,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":BD,"../pages/components/checkbox/_examples/Overview/index.jsx":MD,"../pages/components/checkbox/_examples/border/index.jsx":zD,"../pages/components/checkbox/_examples/checked/index.jsx":HD,"../pages/components/checkbox/_examples/checkedText/index.jsx":ZD,"../pages/components/checkbox/_examples/className/index.jsx":GD,"../pages/components/checkbox/_examples/disabled/index.jsx":QD,"../pages/components/checkbox/_examples/onChange/index.jsx":tO,"../pages/components/checkbox/_examples/text/index.jsx":oO,"../pages/components/checkbox/index.jsx":sO,"../pages/components/confirm/_examples/Overview/index.jsx":cO,"../pages/components/confirm/_examples/cancel/index.jsx":pO,"../pages/components/confirm/_examples/cancelProps/index.jsx":mO,"../pages/components/confirm/_examples/className/index.jsx":vO,"../pages/components/confirm/_examples/color/index.jsx":jO,"../pages/components/confirm/_examples/confirm/index.jsx":wO,"../pages/components/confirm/_examples/confirmProps/index.jsx":TO,"../pages/components/confirm/_examples/iconRight/index.jsx":RO,"../pages/components/confirm/_examples/onClick/index.jsx":OO,"../pages/components/confirm/_examples/text/index.jsx":$O,"../pages/components/confirm/index.jsx":PO,"../pages/components/datatable/_examples/Datatable/index.jsx":FO,"../pages/components/datatable/_examples/color/index.jsx":VO,"../pages/components/datatable/_examples/columns/className/index.jsx":YO,"../pages/components/datatable/_examples/columns/display/index.jsx":XO,"../pages/components/datatable/_examples/columns/index.jsx":iB,"../pages/components/datatable/_examples/columns/label/index.jsx":uB,"../pages/components/datatable/_examples/columns/type/index.jsx":fB,"../pages/components/datatable/_examples/pager/index.jsx":YA,"../pages/components/datatable/_examples/rows/index.jsx":qA,"../pages/components/datatable/index.jsx":QA,"../pages/components/details/_examples/Details/index.jsx":t$,"../pages/components/details/_examples/border/index.jsx":o$,"../pages/components/details/_examples/color/index.jsx":l$,"../pages/components/details/_examples/content/index.jsx":d$,"../pages/components/details/_examples/lined/index.jsx":h$,"../pages/components/details/_examples/open/index.jsx":g$,"../pages/components/details/_examples/radius/index.jsx":y$,"../pages/components/details/_examples/shaded/index.jsx":S$,"../pages/components/details/_examples/shadow/index.jsx":_$,"../pages/components/details/_examples/summary/index.jsx":E$,"../pages/components/details/index.jsx":R$,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":O$,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":$$,"../pages/components/dropdown-menu/_examples/options/index.jsx":K$,"../pages/components/dropdown-menu/index.jsx":G$,"../pages/components/dropdown/_examples/Dropdown/index.jsx":Q$,"../pages/components/dropdown/_examples/content/index.jsx":tM,"../pages/components/dropdown/_examples/iconLeft/index.jsx":oM,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":lM,"../pages/components/dropdown/_examples/iconRight/index.jsx":dM,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":hM,"../pages/components/dropdown/_examples/openOnHover/index.jsx":gM,"../pages/components/dropdown/_examples/right/index.jsx":yM,"../pages/components/dropdown/_examples/text/index.jsx":SM,"../pages/components/dropdown/_examples/wide/index.jsx":_M,"../pages/components/dropdown/index.jsx":TM,"../pages/components/form/_examples/search/index.jsx":$M,"../pages/components/form/_examples/uiselect/index.jsx":HM,"../pages/components/form/index.jsx":qM,"../pages/components/icon/_examples/Icon/index.jsx":oP,"../pages/components/icon/_examples/IconLibrary/index.jsx":aP,"../pages/components/icon/_examples/className/index.jsx":iP,"../pages/components/icon/_examples/color/index.jsx":uP,"../pages/components/icon/_examples/name/index.jsx":fP,"../pages/components/icon/_examples/path/index.jsx":xP,"../pages/components/icon/_examples/size/index.jsx":bP,"../pages/components/icon/index.jsx":SP,"../pages/components/modal/_examples/Modal/index.jsx":_P,"../pages/components/modal/_examples/ModalState/index.jsx":EP,"../pages/components/modal/_examples/className/index.jsx":LP,"../pages/components/modal/_examples/close/index.jsx":BP,"../pages/components/modal/_examples/closeIcon/index.jsx":MP,"../pages/components/modal/_examples/footer/index.jsx":zP,"../pages/components/modal/_examples/header/index.jsx":HP,"../pages/components/modal/_examples/text/index.jsx":ZP,"../pages/components/modal/_examples/title/index.jsx":GP,"../pages/components/modal/index.jsx":XP,"../pages/components/overlay/_examples/Overlay/index.jsx":eI,"../pages/components/overlay/_examples/OverlayState/index.jsx":rI,"../pages/components/overlay/_examples/className/index.jsx":lI,"../pages/components/overlay/_examples/custom/index.jsx":dI,"../pages/components/overlay/_examples/fixed/index.jsx":hI,"../pages/components/overlay/_examples/theme/index.jsx":vI,"../pages/components/overlay/index.jsx":bI,"../pages/components/pager/_examples/Context/index.jsx":_I,"../pages/components/pager/_examples/Pager/index.jsx":EI,"../pages/components/pager/_examples/className/index.jsx":LI,"../pages/components/pager/_examples/color/index.jsx":BI,"../pages/components/pager/_examples/icons/index.jsx":MI,"../pages/components/pager/_examples/nextIcon/index.jsx":FI,"../pages/components/pager/_examples/showFirstLast/index.jsx":VI,"../pages/components/pager/_examples/size/index.jsx":KI,"../pages/components/pager/index.jsx":GI,"../pages/components/radio/_examples/Overview/index.jsx":QI,"../pages/components/radio/_examples/border/index.jsx":tz,"../pages/components/radio/_examples/className/index.jsx":oz,"../pages/components/radio/_examples/disabled/index.jsx":lz,"../pages/components/radio/_examples/inline/index.jsx":dz,"../pages/components/radio/_examples/name/index.jsx":hz,"../pages/components/radio/_examples/onChange/index.jsx":gz,"../pages/components/radio/_examples/options/index.jsx":yz,"../pages/components/radio/_examples/value/index.jsx":Sz,"../pages/components/radio/index.jsx":wz,"../pages/components/search/_examples/Search/index.jsx":Ez,"../pages/components/search/_examples/displayResult/index.jsx":Dz,"../pages/components/search/_examples/displayValue/index.jsx":$z,"../pages/components/search/_examples/onSearch/index.jsx":zz,"../pages/components/search/_examples/onSelect/index.jsx":Vz,"../pages/components/search/index.jsx":Zz,"../pages/components/select/_examples/Select/index.jsx":qz,"../pages/components/select/_examples/displayOption/index.jsx":eF,"../pages/components/select/_examples/displayValue/index.jsx":oF,"../pages/components/select/_examples/options/index.jsx":iF,"../pages/components/select/_examples/search/index.jsx":mF,"../pages/components/select/_examples/searchOptions/index.jsx":jF,"../pages/components/select/_examples/validOption/index.jsx":_F,"../pages/components/select/_examples/value/index.jsx":DF,"../pages/components/select/index.jsx":BF,"../pages/components/sortable/_examples/Horizontal/index.jsx":MF,"../pages/components/sortable/_examples/Sortable/index.jsx":zF,"../pages/components/sortable/_examples/Vertical/index.jsx":HF,"../pages/components/sortable/index.jsx":WF,"../pages/components/spinner/_examples/Spinner/index.jsx":YF,"../pages/components/spinner/_examples/bgColor/index.jsx":XF,"../pages/components/spinner/_examples/bgFill/index.jsx":eU,"../pages/components/spinner/_examples/bgFillStop/index.jsx":rU,"../pages/components/spinner/_examples/bgIcon/index.jsx":sU,"../pages/components/spinner/_examples/bgStroke/index.jsx":cU,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":pU,"../pages/components/spinner/_examples/color/index.jsx":mU,"../pages/components/spinner/_examples/fill/index.jsx":vU,"../pages/components/spinner/_examples/fillStop/index.jsx":jU,"../pages/components/spinner/_examples/icon/index.jsx":wU,"../pages/components/spinner/_examples/reverse/index.jsx":TU,"../pages/components/spinner/_examples/shrink/index.jsx":RU,"../pages/components/spinner/_examples/size/index.jsx":OU,"../pages/components/spinner/_examples/stroke/index.jsx":$U,"../pages/components/spinner/_examples/strokeStop/index.jsx":IU,"../pages/components/spinner/index.jsx":FU,"../pages/getting-started/installation.jsx":YU,"../pages/index.jsx":QU}));function EH(e){const n=Object.entries(e).map(NH).filter(a=>!a.path.match(kH)).reduce((a,s)=>(a[s.path]=s,a),{}),o=Object.keys(n).filter(a=>a.match(_H)).sort((a,s)=>s.length-a.length);for(let a of o){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function NH([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const RH=LA([{path:"/",element:r.jsx(wH,{}),children:TH}],{basename:"/badger-react-ui"});Rd.createRoot(document.getElementById("root")).render(r.jsx(te.StrictMode,{children:r.jsx(dH,{storageKey:"theme",children:r.jsx(dl.Provider,{children:r.jsx(IA,{router:RH})})})}));
