var _6=Object.defineProperty;var T6=(e,t,n)=>t in e?_6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>(T6(e,typeof t!="symbol"?t+"":t,n),n);function z1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(o,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F1={exports:{}},mc={},U1={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=Symbol.for("react.element"),k6=Symbol.for("react.portal"),E6=Symbol.for("react.fragment"),N6=Symbol.for("react.strict_mode"),R6=Symbol.for("react.profiler"),O6=Symbol.for("react.provider"),D6=Symbol.for("react.context"),L6=Symbol.for("react.forward_ref"),B6=Symbol.for("react.suspense"),$6=Symbol.for("react.memo"),A6=Symbol.for("react.lazy"),Qh=Symbol.iterator;function M6(e){return e===null||typeof e!="object"?null:(e=Qh&&e[Qh]||e["@@iterator"],typeof e=="function"?e:null)}var V1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H1=Object.assign,W1={};function ba(e,t,n){this.props=e,this.context=t,this.refs=W1,this.updater=n||V1}ba.prototype.isReactComponent={};ba.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ba.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z1(){}Z1.prototype=ba.prototype;function rp(e,t,n){this.props=e,this.context=t,this.refs=W1,this.updater=n||V1}var op=rp.prototype=new Z1;op.constructor=rp;H1(op,ba.prototype);op.isPureReactComponent=!0;var Jh=Array.isArray,K1=Object.prototype.hasOwnProperty,ap={current:null},Y1={key:!0,ref:!0,__self:!0,__source:!0};function G1(e,t,n){var o,a={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)K1.call(t,o)&&!Y1.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)a[o]===void 0&&(a[o]=i[o]);return{$$typeof:Js,type:e,key:s,ref:l,props:a,_owner:ap.current}}function P6(e,t){return{$$typeof:Js,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Js}function I6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var em=/\/+/g;function td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I6(""+e.key):t.toString(36)}function fi(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Js:case k6:l=!0}}if(l)return l=e,a=a(l),e=o===""?"."+td(l,0):o,Jh(a)?(n="",e!=null&&(n=e.replace(em,"$&/")+"/"),fi(a,t,n,"",function(d){return d})):a!=null&&(sp(a)&&(a=P6(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(em,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=o===""?".":o+":",Jh(e))for(var i=0;i<e.length;i++){s=e[i];var c=o+td(s,i);l+=fi(s,t,n,c,a)}else if(c=M6(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=o+td(s,i++),l+=fi(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $l(e,t,n){if(e==null)return e;var o=[],a=0;return fi(e,o,"","",function(s){return t.call(n,s,a++)}),o}function z6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},xi={transition:null},F6={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:xi,ReactCurrentOwner:ap};me.Children={map:$l,forEach:function(e,t,n){$l(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $l(e,function(){t++}),t},toArray:function(e){return $l(e,function(t){return t})||[]},only:function(e){if(!sp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=ba;me.Fragment=E6;me.Profiler=R6;me.PureComponent=rp;me.StrictMode=N6;me.Suspense=B6;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F6;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=H1({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=ap.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)K1.call(t,c)&&!Y1.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:Js,type:e.type,key:a,ref:s,props:o,_owner:l}};me.createContext=function(e){return e={$$typeof:D6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O6,_context:e},e.Consumer=e};me.createElement=G1;me.createFactory=function(e){var t=G1.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:L6,render:e}};me.isValidElement=sp;me.lazy=function(e){return{$$typeof:A6,_payload:{_status:-1,_result:e},_init:z6}};me.memo=function(e,t){return{$$typeof:$6,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return yt.current.useCallback(e,t)};me.useContext=function(e){return yt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};me.useEffect=function(e,t){return yt.current.useEffect(e,t)};me.useId=function(){return yt.current.useId()};me.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return yt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};me.useRef=function(e){return yt.current.useRef(e)};me.useState=function(e){return yt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return yt.current.useTransition()};me.version="18.2.0";U1.exports=me;var v=U1.exports;const G=er(v),U6=z1({__proto__:null,default:G},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V6=v,H6=Symbol.for("react.element"),W6=Symbol.for("react.fragment"),Z6=Object.prototype.hasOwnProperty,K6=V6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y6={key:!0,ref:!0,__self:!0,__source:!0};function q1(e,t,n){var o,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)Z6.call(t,o)&&!Y6.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:H6,type:e,key:s,ref:l,props:a,_owner:K6.current}}mc.Fragment=W6;mc.jsx=q1;mc.jsxs=q1;F1.exports=mc;var r=F1.exports,Zd={},X1={exports:{}},Vt={},Q1={exports:{}},J1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,P){var I=B.length;B.push(P);e:for(;0<I;){var V=I-1>>>1,W=B[V];if(0<a(W,P))B[V]=P,B[I]=W,I=V;else break e}}function n(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var P=B[0],I=B.pop();if(I!==P){B[0]=I;e:for(var V=0,W=B.length,_e=W>>>1;V<_e;){var ce=2*(V+1)-1,Se=B[ce],ie=ce+1,De=B[ie];if(0>a(Se,I))ie<W&&0>a(De,Se)?(B[V]=De,B[ie]=I,V=ie):(B[V]=Se,B[ce]=I,V=ce);else if(ie<W&&0>a(De,I))B[V]=De,B[ie]=I,V=ie;else break e}}return P}function a(B,P){var I=B.sortIndex-P.sortIndex;return I!==0?I:B.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,f=3,b=!1,y=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(B){for(var P=n(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=B)o(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function j(B){if(S=!1,m(B),!y)if(n(c)!==null)y=!0,je(C);else{var P=n(d);P!==null&&Q(j,P.startTime-B)}}function C(B,P){y=!1,S&&(S=!1,g(E),E=-1),b=!0;var I=f;try{for(m(P),p=n(c);p!==null&&(!(p.expirationTime>P)||B&&!$());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var W=V(p.expirationTime<=P);P=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(c)&&o(c),m(P)}else o(c);p=n(c)}if(p!==null)var _e=!0;else{var ce=n(d);ce!==null&&Q(j,ce.startTime-P),_e=!1}return _e}finally{p=null,f=I,b=!1}}var x=!1,w=null,E=-1,N=5,D=-1;function $(){return!(e.unstable_now()-D<N)}function Y(){if(w!==null){var B=e.unstable_now();D=B;var P=!0;try{P=w(!0,B)}finally{P?q():(x=!1,w=null)}}else x=!1}var q;if(typeof h=="function")q=function(){h(Y)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,we=le.port2;le.port1.onmessage=Y,q=function(){we.postMessage(null)}}else q=function(){_(Y,0)};function je(B){w=B,x||(x=!0,q())}function Q(B,P){E=_(function(){B(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,je(C))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(B){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var I=f;f=P;try{return B()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,P){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var I=f;f=B;try{return P()}finally{f=I}},e.unstable_scheduleCallback=function(B,P,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,B){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,B={id:u++,callback:P,priorityLevel:B,startTime:I,expirationTime:W,sortIndex:-1},I>V?(B.sortIndex=I,t(d,B),n(c)===null&&B===n(d)&&(S?(g(E),E=-1):S=!0,Q(j,I-V))):(B.sortIndex=W,t(c,B),y||b||(y=!0,je(C))),B},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(B){var P=f;return function(){var I=f;f=P;try{return B.apply(this,arguments)}finally{f=I}}}})(J1);Q1.exports=J1;var G6=Q1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e2=v,Ut=G6;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t2=new Set,ks={};function xo(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(ks[e]=t,e=0;e<t.length;e++)t2.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,q6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm={},nm={};function X6(e){return Kd.call(nm,e)?!0:Kd.call(tm,e)?!1:q6.test(e)?nm[e]=!0:(tm[e]=!0,!1)}function Q6(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J6(e,t,n,o){if(t===null||typeof t>"u"||Q6(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,n,o,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var lp=/[\-:]([a-z])/g;function ip(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lp,ip);it[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lp,ip);it[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lp,ip);it[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function cp(e,t,n,o){var a=it.hasOwnProperty(t)?it[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(J6(t,n,a,o)&&(n=null),o||a===null?X6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var tr=e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),Io=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),n2=Symbol.for("react.provider"),r2=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),o2=Symbol.for("react.offscreen"),rm=Symbol.iterator;function Ia(e){return e===null||typeof e!="object"?null:(e=rm&&e[rm]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,nd;function ts(e){if(nd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nd=t&&t[1]||""}return`
`+nd+e}var rd=!1;function od(e,t){if(!e||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ts(e):""}function e8(e){switch(e.tag){case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return e=od(e.type,!1),e;case 11:return e=od(e.type.render,!1),e;case 1:return e=od(e.type,!0),e;default:return""}}function Xd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zo:return"Fragment";case Io:return"Portal";case Yd:return"Profiler";case dp:return"StrictMode";case Gd:return"Suspense";case qd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case r2:return(e.displayName||"Context")+".Consumer";case n2:return(e._context.displayName||"Context")+".Provider";case up:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pp:return t=e.displayName||null,t!==null?t:Xd(e.type)||"Memo";case hr:t=e._payload,e=e._init;try{return Xd(e(t))}catch{}}return null}function t8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(t);case 8:return t===dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function a2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function n8(e){var t=a2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ml(e){e._valueTracker||(e._valueTracker=n8(e))}function s2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=a2(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qd(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function om(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Er(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l2(e,t){t=t.checked,t!=null&&cp(e,"checked",t,!1)}function Jd(e,t){l2(e,t);var n=Er(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,Er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function am(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ns=Array.isArray;function na(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Er(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ns(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Er(n)}}function i2(e,t){var n=Er(t.value),o=Er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function lm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function c2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?c2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pl,d2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Es(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r8=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(e){r8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ps[t]=ps[e]})});function u2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ps.hasOwnProperty(e)&&ps[e]?(""+t).trim():t+"px"}function p2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=u2(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var o8=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(o8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,ra=null,oa=null;function im(e){if(e=nl(e)){if(typeof su!="function")throw Error(A(280));var t=e.stateNode;t&&(t=bc(t),su(e.stateNode,e.type,t))}}function h2(e){ra?oa?oa.push(e):oa=[e]:ra=e}function m2(){if(ra){var e=ra,t=oa;if(oa=ra=null,im(e),t)for(e=0;e<t.length;e++)im(t[e])}}function f2(e,t){return e(t)}function x2(){}var ad=!1;function g2(e,t,n){if(ad)return e(t,n);ad=!0;try{return f2(e,t,n)}finally{ad=!1,(ra!==null||oa!==null)&&(x2(),m2())}}function Ns(e,t){var n=e.stateNode;if(n===null)return null;var o=bc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var lu=!1;if(Yn)try{var za={};Object.defineProperty(za,"passive",{get:function(){lu=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{lu=!1}function a8(e,t,n,o,a,s,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var hs=!1,Li=null,Bi=!1,iu=null,s8={onError:function(e){hs=!0,Li=e}};function l8(e,t,n,o,a,s,l,i,c){hs=!1,Li=null,a8.apply(s8,arguments)}function i8(e,t,n,o,a,s,l,i,c){if(l8.apply(this,arguments),hs){if(hs){var d=Li;hs=!1,Li=null}else throw Error(A(198));Bi||(Bi=!0,iu=d)}}function go(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cm(e){if(go(e)!==e)throw Error(A(188))}function c8(e){var t=e.alternate;if(!t){if(t=go(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return cm(a),e;if(s===o)return cm(a),t;s=s.sibling}throw Error(A(188))}if(n.return!==o.return)n=a,o=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==o)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function b2(e){return e=c8(e),e!==null?j2(e):null}function j2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=j2(e);if(t!==null)return t;e=e.sibling}return null}var y2=Ut.unstable_scheduleCallback,dm=Ut.unstable_cancelCallback,d8=Ut.unstable_shouldYield,u8=Ut.unstable_requestPaint,Ze=Ut.unstable_now,p8=Ut.unstable_getCurrentPriorityLevel,mp=Ut.unstable_ImmediatePriority,S2=Ut.unstable_UserBlockingPriority,$i=Ut.unstable_NormalPriority,h8=Ut.unstable_LowPriority,C2=Ut.unstable_IdlePriority,fc=null,Nn=null;function m8(e){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(fc,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:g8,f8=Math.log,x8=Math.LN2;function g8(e){return e>>>=0,e===0?32:31-(f8(e)/x8|0)|0}var Il=64,zl=4194304;function rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?o=rs(i):(s&=l,s!==0&&(o=rs(s)))}else l=n&~a,l!==0?o=rs(l):s!==0&&(o=rs(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-fn(t),a=1<<n,o|=e[n],t&=~a;return o}function v8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b8(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-fn(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&o)&&(a[l]=v8(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function w2(){var e=Il;return Il<<=1,!(Il&4194240)&&(Il=64),e}function sd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function el(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=n}function j8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-fn(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function fp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-fn(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Ce=0;function _2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var T2,xp,k2,E2,N2,du=!1,Fl=[],jr=null,yr=null,Sr=null,Rs=new Map,Os=new Map,xr=[],y8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(e,t){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(t.pointerId)}}function Fa(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=nl(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function S8(e,t,n,o,a){switch(t){case"focusin":return jr=Fa(jr,e,t,n,o,a),!0;case"dragenter":return yr=Fa(yr,e,t,n,o,a),!0;case"mouseover":return Sr=Fa(Sr,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return Rs.set(s,Fa(Rs.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,Os.set(s,Fa(Os.get(s)||null,e,t,n,o,a)),!0}return!1}function R2(e){var t=eo(e.target);if(t!==null){var n=go(t);if(n!==null){if(t=n.tag,t===13){if(t=v2(n),t!==null){e.blockedOn=t,N2(e.priority,function(){k2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);au=o,n.target.dispatchEvent(o),au=null}else return t=nl(n),t!==null&&xp(t),e.blockedOn=n,!1;t.shift()}return!0}function pm(e,t,n){gi(e)&&n.delete(t)}function C8(){du=!1,jr!==null&&gi(jr)&&(jr=null),yr!==null&&gi(yr)&&(yr=null),Sr!==null&&gi(Sr)&&(Sr=null),Rs.forEach(pm),Os.forEach(pm)}function Ua(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,C8)))}function Ds(e){function t(a){return Ua(a,e)}if(0<Fl.length){Ua(Fl[0],e);for(var n=1;n<Fl.length;n++){var o=Fl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(jr!==null&&Ua(jr,e),yr!==null&&Ua(yr,e),Sr!==null&&Ua(Sr,e),Rs.forEach(t),Os.forEach(t),n=0;n<xr.length;n++)o=xr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)R2(n),n.blockedOn===null&&xr.shift()}var aa=tr.ReactCurrentBatchConfig,Mi=!0;function w8(e,t,n,o){var a=Ce,s=aa.transition;aa.transition=null;try{Ce=1,gp(e,t,n,o)}finally{Ce=a,aa.transition=s}}function _8(e,t,n,o){var a=Ce,s=aa.transition;aa.transition=null;try{Ce=4,gp(e,t,n,o)}finally{Ce=a,aa.transition=s}}function gp(e,t,n,o){if(Mi){var a=uu(e,t,n,o);if(a===null)xd(e,t,o,Pi,n),um(e,o);else if(S8(a,e,t,n,o))o.stopPropagation();else if(um(e,o),t&4&&-1<y8.indexOf(e)){for(;a!==null;){var s=nl(a);if(s!==null&&T2(s),s=uu(e,t,n,o),s===null&&xd(e,t,o,Pi,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else xd(e,t,o,null,n)}}var Pi=null;function uu(e,t,n,o){if(Pi=null,e=hp(o),e=eo(e),e!==null)if(t=go(e),t===null)e=null;else if(n=t.tag,n===13){if(e=v2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function O2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p8()){case mp:return 1;case S2:return 4;case $i:case h8:return 16;case C2:return 536870912;default:return 16}default:return 16}}var vr=null,vp=null,vi=null;function D2(){if(vi)return vi;var e,t=vp,n=t.length,o,a="value"in vr?vr.value:vr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===a[s-o];o++);return vi=a.slice(e,1<o?1-o:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function hm(){return!1}function Ht(e){function t(n,o,a,s,l){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:hm,this.isPropagationStopped=hm,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=Ht(ja),tl=ze({},ja,{view:0,detail:0}),T8=Ht(tl),ld,id,Va,xc=ze({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Va&&(Va&&e.type==="mousemove"?(ld=e.screenX-Va.screenX,id=e.screenY-Va.screenY):id=ld=0,Va=e),ld)},movementY:function(e){return"movementY"in e?e.movementY:id}}),mm=Ht(xc),k8=ze({},xc,{dataTransfer:0}),E8=Ht(k8),N8=ze({},tl,{relatedTarget:0}),cd=Ht(N8),R8=ze({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),O8=Ht(R8),D8=ze({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L8=Ht(D8),B8=ze({},ja,{data:0}),fm=Ht(B8),$8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M8[e])?!!t[e]:!1}function jp(){return P8}var I8=ze({},tl,{key:function(e){if(e.key){var t=$8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z8=Ht(I8),F8=ze({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Ht(F8),U8=ze({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),V8=Ht(U8),H8=ze({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),W8=Ht(H8),Z8=ze({},xc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K8=Ht(Z8),Y8=[9,13,27,32],yp=Yn&&"CompositionEvent"in window,ms=null;Yn&&"documentMode"in document&&(ms=document.documentMode);var G8=Yn&&"TextEvent"in window&&!ms,L2=Yn&&(!yp||ms&&8<ms&&11>=ms),gm=String.fromCharCode(32),vm=!1;function B2(e,t){switch(e){case"keyup":return Y8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fo=!1;function q8(e,t){switch(e){case"compositionend":return $2(t);case"keypress":return t.which!==32?null:(vm=!0,gm);case"textInput":return e=t.data,e===gm&&vm?null:e;default:return null}}function X8(e,t){if(Fo)return e==="compositionend"||!yp&&B2(e,t)?(e=D2(),vi=vp=vr=null,Fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return L2&&t.locale!=="ko"?null:t.data;default:return null}}var Q8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q8[e.type]:t==="textarea"}function A2(e,t,n,o){h2(o),t=Ii(t,"onChange"),0<t.length&&(n=new bp("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var fs=null,Ls=null;function J8(e){K2(e,0)}function gc(e){var t=Ho(e);if(s2(t))return e}function eb(e,t){if(e==="change")return t}var M2=!1;if(Yn){var dd;if(Yn){var ud="oninput"in document;if(!ud){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),ud=typeof jm.oninput=="function"}dd=ud}else dd=!1;M2=dd&&(!document.documentMode||9<document.documentMode)}function ym(){fs&&(fs.detachEvent("onpropertychange",P2),Ls=fs=null)}function P2(e){if(e.propertyName==="value"&&gc(Ls)){var t=[];A2(t,Ls,e,hp(e)),g2(J8,t)}}function tb(e,t,n){e==="focusin"?(ym(),fs=t,Ls=n,fs.attachEvent("onpropertychange",P2)):e==="focusout"&&ym()}function nb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gc(Ls)}function rb(e,t){if(e==="click")return gc(t)}function ob(e,t){if(e==="input"||e==="change")return gc(t)}function ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:ab;function Bs(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Kd.call(t,a)||!gn(e[a],t[a]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cm(e,t){var n=Sm(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function I2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?I2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function z2(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sb(e){var t=z2(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&I2(n.ownerDocument.documentElement,n)){if(o!==null&&Sp(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=Cm(n,s);var l=Cm(n,o);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lb=Yn&&"documentMode"in document&&11>=document.documentMode,Uo=null,pu=null,xs=null,hu=!1;function wm(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Uo==null||Uo!==Di(o)||(o=Uo,"selectionStart"in o&&Sp(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xs&&Bs(xs,o)||(xs=o,o=Ii(pu,"onSelect"),0<o.length&&(t=new bp("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Uo)))}function Vl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vo={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},pd={},F2={};Yn&&(F2=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function vc(e){if(pd[e])return pd[e];if(!Vo[e])return e;var t=Vo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in F2)return pd[e]=t[n];return e}var U2=vc("animationend"),V2=vc("animationiteration"),H2=vc("animationstart"),W2=vc("transitionend"),Z2=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(e,t){Z2.set(e,t),xo(t,[e])}for(var hd=0;hd<_m.length;hd++){var md=_m[hd],ib=md.toLowerCase(),cb=md[0].toUpperCase()+md.slice(1);Br(ib,"on"+cb)}Br(U2,"onAnimationEnd");Br(V2,"onAnimationIteration");Br(H2,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(W2,"onTransitionEnd");da("onMouseEnter",["mouseout","mouseover"]);da("onMouseLeave",["mouseout","mouseover"]);da("onPointerEnter",["pointerout","pointerover"]);da("onPointerLeave",["pointerout","pointerover"]);xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Tm(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,i8(o,t,void 0,e),e.currentTarget=null}function K2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;Tm(a,i,d),s=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;Tm(a,i,d),s=c}}}if(Bi)throw e=iu,Bi=!1,iu=null,e}function Re(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var o=e+"__bubble";n.has(o)||(Y2(t,e,2,!1),n.add(o))}function fd(e,t,n){var o=0;t&&(o|=4),Y2(n,e,o,t)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function $s(e){if(!e[Hl]){e[Hl]=!0,t2.forEach(function(n){n!=="selectionchange"&&(db.has(n)||fd(n,!1,e),fd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hl]||(t[Hl]=!0,fd("selectionchange",!1,t))}}function Y2(e,t,n,o){switch(O2(t)){case 1:var a=w8;break;case 4:a=_8;break;default:a=gp}n=a.bind(null,t,n,e),a=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function xd(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=eo(i),l===null)return;if(c=l.tag,c===5||c===6){o=s=l;continue e}i=i.parentNode}}o=o.return}g2(function(){var d=s,u=hp(n),p=[];e:{var f=Z2.get(e);if(f!==void 0){var b=bp,y=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":b=z8;break;case"focusin":y="focus",b=cd;break;case"focusout":y="blur",b=cd;break;case"beforeblur":case"afterblur":b=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=E8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=V8;break;case U2:case V2:case H2:b=O8;break;case W2:b=W8;break;case"scroll":b=T8;break;case"wheel":b=K8;break;case"copy":case"cut":case"paste":b=L8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=xm}var S=(t&4)!==0,_=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var h=d,m;h!==null;){m=h;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,g!==null&&(j=Ns(h,g),j!=null&&S.push(As(h,j,m)))),_)break;h=h.return}0<S.length&&(f=new b(f,y,null,n,u),p.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==au&&(y=n.relatedTarget||n.fromElement)&&(eo(y)||y[Gn]))break e;if((b||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=d,y=y?eo(y):null,y!==null&&(_=go(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=d),b!==y)){if(S=mm,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(S=xm,j="onPointerLeave",g="onPointerEnter",h="pointer"),_=b==null?f:Ho(b),m=y==null?f:Ho(y),f=new S(j,h+"leave",b,n,u),f.target=_,f.relatedTarget=m,j=null,eo(u)===d&&(S=new S(g,h+"enter",y,n,u),S.target=m,S.relatedTarget=_,j=S),_=j,b&&y)t:{for(S=b,g=y,h=0,m=S;m;m=Do(m))h++;for(m=0,j=g;j;j=Do(j))m++;for(;0<h-m;)S=Do(S),h--;for(;0<m-h;)g=Do(g),m--;for(;h--;){if(S===g||g!==null&&S===g.alternate)break t;S=Do(S),g=Do(g)}S=null}else S=null;b!==null&&km(p,f,b,S,!1),y!==null&&_!==null&&km(p,_,y,S,!0)}}e:{if(f=d?Ho(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var C=eb;else if(bm(f))if(M2)C=ob;else{C=nb;var x=tb}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=rb);if(C&&(C=C(e,d))){A2(p,C,n,u);break e}x&&x(e,f,d),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&eu(f,"number",f.value)}switch(x=d?Ho(d):window,e){case"focusin":(bm(x)||x.contentEditable==="true")&&(Uo=x,pu=d,xs=null);break;case"focusout":xs=pu=Uo=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,wm(p,n,u);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":wm(p,n,u)}var w;if(yp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Fo?B2(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(L2&&n.locale!=="ko"&&(Fo||E!=="onCompositionStart"?E==="onCompositionEnd"&&Fo&&(w=D2()):(vr=u,vp="value"in vr?vr.value:vr.textContent,Fo=!0)),x=Ii(d,E),0<x.length&&(E=new fm(E,e,null,n,u),p.push({event:E,listeners:x}),w?E.data=w:(w=$2(n),w!==null&&(E.data=w)))),(w=G8?q8(e,n):X8(e,n))&&(d=Ii(d,"onBeforeInput"),0<d.length&&(u=new fm("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}K2(p,t)})}function As(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Ns(e,n),s!=null&&o.unshift(As(e,s,a)),s=Ns(e,t),s!=null&&o.push(As(e,s,a))),e=e.return}return o}function Do(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function km(e,t,n,o,a){for(var s=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,a?(c=Ns(n,s),c!=null&&l.unshift(As(n,c,i))):a||(c=Ns(n,s),c!=null&&l.push(As(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ub=/\r\n?/g,pb=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(ub,`
`).replace(pb,"")}function Wl(e,t,n){if(t=Em(t),Em(e)!==t&&n)throw Error(A(425))}function zi(){}var mu=null,fu=null;function xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,mb=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(e){return Nm.resolve(null).then(e).catch(fb)}:gu;function fb(e){setTimeout(function(){throw e})}function gd(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Ds(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Ds(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ya=Math.random().toString(36).slice(2),kn="__reactFiber$"+ya,Ms="__reactProps$"+ya,Gn="__reactContainer$"+ya,vu="__reactEvents$"+ya,xb="__reactListeners$"+ya,gb="__reactHandles$"+ya;function eo(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rm(e);e!==null;){if(n=e[kn])return n;e=Rm(e)}return t}e=n,n=e.parentNode}return null}function nl(e){return e=e[kn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function bc(e){return e[Ms]||null}var bu=[],Wo=-1;function $r(e){return{current:e}}function Oe(e){0>Wo||(e.current=bu[Wo],bu[Wo]=null,Wo--)}function Ee(e,t){Wo++,bu[Wo]=e.current,e.current=t}var Nr={},mt=$r(Nr),Dt=$r(!1),lo=Nr;function ua(e,t){var n=e.type.contextTypes;if(!n)return Nr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Lt(e){return e=e.childContextTypes,e!=null}function Fi(){Oe(Dt),Oe(mt)}function Om(e,t,n){if(mt.current!==Nr)throw Error(A(168));Ee(mt,t),Ee(Dt,n)}function G2(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(A(108,t8(e)||"Unknown",a));return ze({},n,o)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nr,lo=mt.current,Ee(mt,e),Ee(Dt,Dt.current),!0}function Dm(e,t,n){var o=e.stateNode;if(!o)throw Error(A(169));n?(e=G2(e,t,lo),o.__reactInternalMemoizedMergedChildContext=e,Oe(Dt),Oe(mt),Ee(mt,e)):Oe(Dt),Ee(Dt,n)}var zn=null,jc=!1,vd=!1;function q2(e){zn===null?zn=[e]:zn.push(e)}function vb(e){jc=!0,q2(e)}function Ar(){if(!vd&&zn!==null){vd=!0;var e=0,t=Ce;try{var n=zn;for(Ce=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}zn=null,jc=!1}catch(a){throw zn!==null&&(zn=zn.slice(e+1)),y2(mp,Ar),a}finally{Ce=t,vd=!1}}return null}var Zo=[],Ko=0,Vi=null,Hi=0,Yt=[],Gt=0,io=null,Hn=1,Wn="";function Xr(e,t){Zo[Ko++]=Hi,Zo[Ko++]=Vi,Vi=e,Hi=t}function X2(e,t,n){Yt[Gt++]=Hn,Yt[Gt++]=Wn,Yt[Gt++]=io,io=e;var o=Hn;e=Wn;var a=32-fn(o)-1;o&=~(1<<a),n+=1;var s=32-fn(t)+a;if(30<s){var l=a-a%5;s=(o&(1<<l)-1).toString(32),o>>=l,a-=l,Hn=1<<32-fn(t)+a|n<<a|o,Wn=s+e}else Hn=1<<s|n<<a|o,Wn=e}function Cp(e){e.return!==null&&(Xr(e,1),X2(e,1,0))}function wp(e){for(;e===Vi;)Vi=Zo[--Ko],Zo[Ko]=null,Hi=Zo[--Ko],Zo[Ko]=null;for(;e===io;)io=Yt[--Gt],Yt[Gt]=null,Wn=Yt[--Gt],Yt[Gt]=null,Hn=Yt[--Gt],Yt[Gt]=null}var zt=null,It=null,$e=!1,mn=null;function Q2(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,It=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=io!==null?{id:Hn,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,It=null,!0):!1;default:return!1}}function ju(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yu(e){if($e){var t=It;if(t){var n=t;if(!Lm(e,t)){if(ju(e))throw Error(A(418));t=Cr(n.nextSibling);var o=zt;t&&Lm(e,t)?Q2(o,n):(e.flags=e.flags&-4097|2,$e=!1,zt=e)}}else{if(ju(e))throw Error(A(418));e.flags=e.flags&-4097|2,$e=!1,zt=e}}}function Bm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function Zl(e){if(e!==zt)return!1;if(!$e)return Bm(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xu(e.type,e.memoizedProps)),t&&(t=It)){if(ju(e))throw J2(),Error(A(418));for(;t;)Q2(e,t),t=Cr(t.nextSibling)}if(Bm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=Cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=zt?Cr(e.stateNode.nextSibling):null;return!0}function J2(){for(var e=It;e;)e=Cr(e.nextSibling)}function pa(){It=zt=null,$e=!1}function _p(e){mn===null?mn=[e]:mn.push(e)}var bb=tr.ReactCurrentBatchConfig;function un(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wi=$r(null),Zi=null,Yo=null,Tp=null;function kp(){Tp=Yo=Zi=null}function Ep(e){var t=Wi.current;Oe(Wi),e._currentValue=t}function Su(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function sa(e,t){Zi=e,Tp=Yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Tp!==e)if(e={context:e,memoizedValue:t,next:null},Yo===null){if(Zi===null)throw Error(A(308));Yo=e,Zi.dependencies={lanes:0,firstContext:e}}else Yo=Yo.next=e;return t}var to=null;function Np(e){to===null?to=[e]:to.push(e)}function ex(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Np(t)):(n.next=a.next,a.next=n),t.interleaved=n,qn(e,o)}function qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mr=!1;function Rp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,be&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,qn(e,n)}return a=o.interleaved,a===null?(t.next=t,Np(o)):(t.next=a.next,a.next=t),o.interleaved=t,qn(e,n)}function ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,fp(e,n)}}function $m(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ki(e,t,n,o){var a=e.updateQueue;mr=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,u=d=c=null,i=s;do{var f=i.lane,b=i.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,S=i;switch(f=t,b=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){p=y.call(b,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,f=typeof y=="function"?y.call(b,p,f):y,f==null)break e;p=ze({},p,f);break e;case 2:mr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[i]:f.push(i))}else b={eventTime:b,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=b,c=p):u=u.next=b,l|=f;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;f=i,i=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(1);if(u===null&&(c=p),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);uo|=l,e.lanes=l,e.memoizedState=p}}function Am(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(A(191,a));a.call(o)}}}var nx=new e2.Component().refs;function Cu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={isMounted:function(e){return(e=e._reactInternals)?go(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=jt(),a=Tr(e),s=Zn(o,a);s.payload=t,n!=null&&(s.callback=n),t=wr(e,s,a),t!==null&&(xn(t,e,a,o),ji(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=jt(),a=Tr(e),s=Zn(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wr(e,s,a),t!==null&&(xn(t,e,a,o),ji(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),o=Tr(e),a=Zn(n,o);a.tag=2,t!=null&&(a.callback=t),t=wr(e,a,o),t!==null&&(xn(t,e,o,n),ji(t,e,o))}};function Mm(e,t,n,o,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!Bs(n,o)||!Bs(a,s):!0}function rx(e,t,n){var o=!1,a=Nr,s=t.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(a=Lt(t)?lo:mt.current,o=t.contextTypes,s=(o=o!=null)?ua(e,a):Nr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Pm(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function wu(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=nx,Rp(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Jt(s):(s=Lt(t)?lo:mt.current,a.context=ua(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Cu(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&yc.enqueueReplaceState(a,a.state,null),Ki(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ha(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var o=n.stateNode}if(!o)throw Error(A(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===nx&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Kl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Im(e){var t=e._init;return t(e._payload)}function ox(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function o(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function a(g,h){return g=kr(g,h),g.index=0,g.sibling=null,g}function s(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,h,m,j){return h===null||h.tag!==6?(h=_d(m,g.mode,j),h.return=g,h):(h=a(h,m),h.return=g,h)}function c(g,h,m,j){var C=m.type;return C===zo?u(g,h,m.props.children,j,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===hr&&Im(C)===h.type)?(j=a(h,m.props),j.ref=Ha(g,h,m),j.return=g,j):(j=Ti(m.type,m.key,m.props,null,g.mode,j),j.ref=Ha(g,h,m),j.return=g,j)}function d(g,h,m,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Td(m,g.mode,j),h.return=g,h):(h=a(h,m.children||[]),h.return=g,h)}function u(g,h,m,j,C){return h===null||h.tag!==7?(h=so(m,g.mode,j,C),h.return=g,h):(h=a(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=_d(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Al:return m=Ti(h.type,h.key,h.props,null,g.mode,m),m.ref=Ha(g,null,h),m.return=g,m;case Io:return h=Td(h,g.mode,m),h.return=g,h;case hr:var j=h._init;return p(g,j(h._payload),m)}if(ns(h)||Ia(h))return h=so(h,g.mode,m,null),h.return=g,h;Kl(g,h)}return null}function f(g,h,m,j){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(g,h,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Al:return m.key===C?c(g,h,m,j):null;case Io:return m.key===C?d(g,h,m,j):null;case hr:return C=m._init,f(g,h,C(m._payload),j)}if(ns(m)||Ia(m))return C!==null?null:u(g,h,m,j,null);Kl(g,m)}return null}function b(g,h,m,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(m)||null,i(h,g,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Al:return g=g.get(j.key===null?m:j.key)||null,c(h,g,j,C);case Io:return g=g.get(j.key===null?m:j.key)||null,d(h,g,j,C);case hr:var x=j._init;return b(g,h,m,x(j._payload),C)}if(ns(j)||Ia(j))return g=g.get(m)||null,u(h,g,j,C,null);Kl(h,j)}return null}function y(g,h,m,j){for(var C=null,x=null,w=h,E=h=0,N=null;w!==null&&E<m.length;E++){w.index>E?(N=w,w=null):N=w.sibling;var D=f(g,w,m[E],j);if(D===null){w===null&&(w=N);break}e&&w&&D.alternate===null&&t(g,w),h=s(D,h,E),x===null?C=D:x.sibling=D,x=D,w=N}if(E===m.length)return n(g,w),$e&&Xr(g,E),C;if(w===null){for(;E<m.length;E++)w=p(g,m[E],j),w!==null&&(h=s(w,h,E),x===null?C=w:x.sibling=w,x=w);return $e&&Xr(g,E),C}for(w=o(g,w);E<m.length;E++)N=b(w,g,E,m[E],j),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?E:N.key),h=s(N,h,E),x===null?C=N:x.sibling=N,x=N);return e&&w.forEach(function($){return t(g,$)}),$e&&Xr(g,E),C}function S(g,h,m,j){var C=Ia(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var x=C=null,w=h,E=h=0,N=null,D=m.next();w!==null&&!D.done;E++,D=m.next()){w.index>E?(N=w,w=null):N=w.sibling;var $=f(g,w,D.value,j);if($===null){w===null&&(w=N);break}e&&w&&$.alternate===null&&t(g,w),h=s($,h,E),x===null?C=$:x.sibling=$,x=$,w=N}if(D.done)return n(g,w),$e&&Xr(g,E),C;if(w===null){for(;!D.done;E++,D=m.next())D=p(g,D.value,j),D!==null&&(h=s(D,h,E),x===null?C=D:x.sibling=D,x=D);return $e&&Xr(g,E),C}for(w=o(g,w);!D.done;E++,D=m.next())D=b(w,g,E,D.value,j),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?E:D.key),h=s(D,h,E),x===null?C=D:x.sibling=D,x=D);return e&&w.forEach(function(Y){return t(g,Y)}),$e&&Xr(g,E),C}function _(g,h,m,j){if(typeof m=="object"&&m!==null&&m.type===zo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Al:e:{for(var C=m.key,x=h;x!==null;){if(x.key===C){if(C=m.type,C===zo){if(x.tag===7){n(g,x.sibling),h=a(x,m.props.children),h.return=g,g=h;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===hr&&Im(C)===x.type){n(g,x.sibling),h=a(x,m.props),h.ref=Ha(g,x,m),h.return=g,g=h;break e}n(g,x);break}else t(g,x);x=x.sibling}m.type===zo?(h=so(m.props.children,g.mode,j,m.key),h.return=g,g=h):(j=Ti(m.type,m.key,m.props,null,g.mode,j),j.ref=Ha(g,h,m),j.return=g,g=j)}return l(g);case Io:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=a(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Td(m,g.mode,j),h.return=g,g=h}return l(g);case hr:return x=m._init,_(g,h,x(m._payload),j)}if(ns(m))return y(g,h,m,j);if(Ia(m))return S(g,h,m,j);Kl(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=a(h,m),h.return=g,g=h):(n(g,h),h=_d(m,g.mode,j),h.return=g,g=h),l(g)):n(g,h)}return _}var ha=ox(!0),ax=ox(!1),rl={},Rn=$r(rl),Ps=$r(rl),Is=$r(rl);function no(e){if(e===rl)throw Error(A(174));return e}function Op(e,t){switch(Ee(Is,t),Ee(Ps,e),Ee(Rn,rl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}Oe(Rn),Ee(Rn,t)}function ma(){Oe(Rn),Oe(Ps),Oe(Is)}function sx(e){no(Is.current);var t=no(Rn.current),n=nu(t,e.type);t!==n&&(Ee(Ps,e),Ee(Rn,n))}function Dp(e){Ps.current===e&&(Oe(Rn),Oe(Ps))}var Pe=$r(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bd=[];function Lp(){for(var e=0;e<bd.length;e++)bd[e]._workInProgressVersionPrimary=null;bd.length=0}var yi=tr.ReactCurrentDispatcher,jd=tr.ReactCurrentBatchConfig,co=0,Ie=null,qe=null,nt=null,Gi=!1,gs=!1,zs=0,jb=0;function ut(){throw Error(A(321))}function Bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function $p(e,t,n,o,a,s){if(co=s,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?wb:_b,e=n(o,a),gs){s=0;do{if(gs=!1,zs=0,25<=s)throw Error(A(301));s+=1,nt=qe=null,t.updateQueue=null,yi.current=Tb,e=n(o,a)}while(gs)}if(yi.current=qi,t=qe!==null&&qe.next!==null,co=0,nt=qe=Ie=null,Gi=!1,t)throw Error(A(300));return e}function Ap(){var e=zs!==0;return zs=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ie.memoizedState=nt=e:nt=nt.next=e,nt}function en(){if(qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=nt===null?Ie.memoizedState:nt.next;if(t!==null)nt=t,qe=e;else{if(e===null)throw Error(A(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},nt===null?Ie.memoizedState=nt=e:nt=nt.next=e}return nt}function Fs(e,t){return typeof t=="function"?t(e):t}function yd(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=qe,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var i=l=null,c=null,d=s;do{var u=d.lane;if((co&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,Ie.lanes|=u,uo|=u}d=d.next}while(d!==null&&d!==s);c===null?l=o:c.next=i,gn(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Ie.lanes|=s,uo|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sd(e){var t=en(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);gn(s,t.memoizedState)||(Ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function lx(){}function ix(e,t){var n=Ie,o=en(),a=t(),s=!gn(o.memoizedState,a);if(s&&(o.memoizedState=a,Ot=!0),o=o.queue,Mp(ux.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Us(9,dx.bind(null,n,o,a,t),void 0,null),ot===null)throw Error(A(349));co&30||cx(n,t,a)}return a}function cx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dx(e,t,n,o){t.value=n,t.getSnapshot=o,px(t)&&hx(e)}function ux(e,t,n){return n(function(){px(t)&&hx(e)})}function px(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function hx(e){var t=qn(e,1);t!==null&&xn(t,e,1,-1)}function zm(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:e},t.queue=e,e=e.dispatch=Cb.bind(null,Ie,e),[t.memoizedState,e]}function Us(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function mx(){return en().memoizedState}function Si(e,t,n,o){var a=wn();Ie.flags|=e,a.memoizedState=Us(1|t,n,void 0,o===void 0?null:o)}function Sc(e,t,n,o){var a=en();o=o===void 0?null:o;var s=void 0;if(qe!==null){var l=qe.memoizedState;if(s=l.destroy,o!==null&&Bp(o,l.deps)){a.memoizedState=Us(t,n,s,o);return}}Ie.flags|=e,a.memoizedState=Us(1|t,n,s,o)}function Fm(e,t){return Si(8390656,8,e,t)}function Mp(e,t){return Sc(2048,8,e,t)}function fx(e,t){return Sc(4,2,e,t)}function xx(e,t){return Sc(4,4,e,t)}function gx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vx(e,t,n){return n=n!=null?n.concat([e]):null,Sc(4,4,gx.bind(null,t,e),n)}function Pp(){}function bx(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Bp(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function jx(e,t){var n=en();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Bp(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function yx(e,t,n){return co&21?(gn(n,t)||(n=w2(),Ie.lanes|=n,uo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function yb(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var o=jd.transition;jd.transition={};try{e(!1),t()}finally{Ce=n,jd.transition=o}}function Sx(){return en().memoizedState}function Sb(e,t,n){var o=Tr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Cx(e))wx(t,n);else if(n=ex(e,t,n,o),n!==null){var a=jt();xn(n,e,o,a),_x(n,t,o)}}function Cb(e,t,n){var o=Tr(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cx(e))wx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,gn(i,l)){var c=t.interleaved;c===null?(a.next=a,Np(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=ex(e,t,a,o),n!==null&&(a=jt(),xn(n,e,o,a),_x(n,t,o))}}function Cx(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function wx(e,t){gs=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _x(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,fp(e,n)}}var qi={readContext:Jt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},wb={readContext:Jt,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Fm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,gx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=wn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Sb.bind(null,Ie,e),[o.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:zm,useDebugValue:Pp,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=zm(!1),t=e[0];return e=yb.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Ie,a=wn();if($e){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ot===null)throw Error(A(349));co&30||cx(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Fm(ux.bind(null,o,s,e),[e]),o.flags|=2048,Us(9,dx.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=wn(),t=ot.identifierPrefix;if($e){var n=Wn,o=Hn;n=(o&~(1<<32-fn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=zs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_b={readContext:Jt,useCallback:bx,useContext:Jt,useEffect:Mp,useImperativeHandle:vx,useInsertionEffect:fx,useLayoutEffect:xx,useMemo:jx,useReducer:yd,useRef:mx,useState:function(){return yd(Fs)},useDebugValue:Pp,useDeferredValue:function(e){var t=en();return yx(t,qe.memoizedState,e)},useTransition:function(){var e=yd(Fs)[0],t=en().memoizedState;return[e,t]},useMutableSource:lx,useSyncExternalStore:ix,useId:Sx,unstable_isNewReconciler:!1},Tb={readContext:Jt,useCallback:bx,useContext:Jt,useEffect:Mp,useImperativeHandle:vx,useInsertionEffect:fx,useLayoutEffect:xx,useMemo:jx,useReducer:Sd,useRef:mx,useState:function(){return Sd(Fs)},useDebugValue:Pp,useDeferredValue:function(e){var t=en();return qe===null?t.memoizedState=e:yx(t,qe.memoizedState,e)},useTransition:function(){var e=Sd(Fs)[0],t=en().memoizedState;return[e,t]},useMutableSource:lx,useSyncExternalStore:ix,useId:Sx,unstable_isNewReconciler:!1};function fa(e,t){try{var n="",o=t;do n+=e8(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Cd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kb=typeof WeakMap=="function"?WeakMap:Map;function Tx(e,t,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Qi||(Qi=!0,$u=o),_u(e,t)},n}function kx(e,t,n){n=Zn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){_u(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(e,t),typeof o!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Um(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new kb;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Fb.bind(null,e,t,n),t.then(e,e))}function Vm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hm(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zn(-1,1),t.tag=2,wr(n,t,1))),n.lanes|=1),e)}var Eb=tr.ReactCurrentOwner,Ot=!1;function vt(e,t,n,o){t.child=e===null?ax(t,null,n,o):ha(t,e.child,n,o)}function Wm(e,t,n,o,a){n=n.render;var s=t.ref;return sa(t,a),o=$p(e,t,n,o,s,a),n=Ap(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xn(e,t,a)):($e&&n&&Cp(t),t.flags|=1,vt(e,t,o,a),t.child)}function Zm(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!Zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ex(e,t,s,o,a)):(e=Ti(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(l,o)&&e.ref===t.ref)return Xn(e,t,a)}return t.flags|=1,e=kr(s,o),e.ref=t.ref,e.return=t,t.child=e}function Ex(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(Bs(s,o)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Xn(e,t,a)}return Tu(e,t,n,o,a)}function Nx(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(qo,Mt),Mt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(qo,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Ee(qo,Mt),Mt|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,Ee(qo,Mt),Mt|=o;return vt(e,t,a,n),t.child}function Rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tu(e,t,n,o,a){var s=Lt(n)?lo:mt.current;return s=ua(t,s),sa(t,a),n=$p(e,t,n,o,s,a),o=Ap(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xn(e,t,a)):($e&&o&&Cp(t),t.flags|=1,vt(e,t,n,a),t.child)}function Km(e,t,n,o,a){if(Lt(n)){var s=!0;Ui(t)}else s=!1;if(sa(t,a),t.stateNode===null)Ci(e,t),rx(t,n,o),wu(t,n,o,a),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Jt(d):(d=Lt(n)?lo:mt.current,d=ua(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&Pm(t,l,o,d),mr=!1;var f=t.memoizedState;l.state=f,Ki(t,o,l,a),c=t.memoizedState,i!==o||f!==c||Dt.current||mr?(typeof u=="function"&&(Cu(t,n,u,o),c=t.memoizedState),(i=mr||Mm(t,n,i,o,f,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,tx(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:un(t.type,i),l.props=d,p=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=Lt(n)?lo:mt.current,c=ua(t,c));var b=n.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||f!==c)&&Pm(t,l,o,c),mr=!1,f=t.memoizedState,l.state=f,Ki(t,o,l,a);var y=t.memoizedState;i!==p||f!==y||Dt.current||mr?(typeof b=="function"&&(Cu(t,n,b,o),y=t.memoizedState),(d=mr||Mm(t,n,d,o,f,y,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=y),l.props=o,l.state=y,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return ku(e,t,n,o,s,a)}function ku(e,t,n,o,a,s){Rx(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return a&&Dm(t,n,!1),Xn(e,t,s);o=t.stateNode,Eb.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=ha(t,e.child,null,s),t.child=ha(t,null,i,s)):vt(e,t,i,s),t.memoizedState=o.state,a&&Dm(t,n,!0),t.child}function Ox(e){var t=e.stateNode;t.pendingContext?Om(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Om(e,t.context,!1),Op(e,t.containerInfo)}function Ym(e,t,n,o,a){return pa(),_p(a),t.flags|=256,vt(e,t,n,o),t.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dx(e,t,n){var o=t.pendingProps,a=Pe.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ee(Pe,a&1),e===null)return yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=_c(l,o,0,null),e=so(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Nu(n),t.memoizedState=Eu,e):Ip(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return Nb(e,t,l,o,i,a,n);if(s){s=o.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=kr(a,c),o.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=kr(i,s):(s=so(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?Nu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Eu,o}return s=e.child,e=s.sibling,o=kr(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ip(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yl(e,t,n,o){return o!==null&&_p(o),ha(t,e.child,null,n),e=Ip(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nb(e,t,n,o,a,s,l){if(n)return t.flags&256?(t.flags&=-257,o=Cd(Error(A(422))),Yl(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=_c({mode:"visible",children:o.children},a,0,null),s=so(s,a,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&ha(t,e.child,null,l),t.child.memoizedState=Nu(l),t.memoizedState=Eu,s);if(!(t.mode&1))return Yl(e,t,l,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var i=o.dgst;return o=i,s=Error(A(419)),o=Cd(s,o,void 0),Yl(e,t,l,o)}if(i=(l&e.childLanes)!==0,Ot||i){if(o=ot,o!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,qn(e,a),xn(o,e,a,-1))}return Wp(),o=Cd(Error(A(421))),Yl(e,t,l,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ub.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,It=Cr(a.nextSibling),zt=t,$e=!0,mn=null,e!==null&&(Yt[Gt++]=Hn,Yt[Gt++]=Wn,Yt[Gt++]=io,Hn=e.id,Wn=e.overflow,io=t),t=Ip(t,o.children),t.flags|=4096,t)}function Gm(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Su(e.return,t,n)}function wd(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function Lx(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(vt(e,t,o.children,n),o=Pe.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,n,t);else if(e.tag===19)Gm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(Pe,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),wd(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Yi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}wd(t,!0,n,null,s);break;case"together":wd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),uo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rb(e,t,n){switch(t.tag){case 3:Ox(t),pa();break;case 5:sx(t);break;case 1:Lt(t.type)&&Ui(t);break;case 4:Op(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Ee(Wi,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?Dx(e,t,n):(Ee(Pe,Pe.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Lx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Pe,Pe.current),o)break;return null;case 22:case 23:return t.lanes=0,Nx(e,t,n)}return Xn(e,t,n)}var Bx,Ru,$x,Ax;Bx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};$x=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,no(Rn.current);var s=null;switch(n){case"input":a=Qd(e,a),o=Qd(e,o),s=[];break;case"select":a=ze({},a,{value:void 0}),o=ze({},o,{value:void 0}),s=[];break;case"textarea":a=tu(e,a),o=tu(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=zi)}ru(n,o);var l;n=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var i=a[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ks.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(i=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ks.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Re("scroll",e),s||i===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Ax=function(e,t,n,o){n!==o&&(t.flags|=4)};function Wa(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Ob(e,t,n){var o=t.pendingProps;switch(wp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Lt(t.type)&&Fi(),pt(t),null;case 3:return o=t.stateNode,ma(),Oe(Dt),Oe(mt),Lp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mn!==null&&(Pu(mn),mn=null))),Ru(e,t),pt(t),null;case 5:Dp(t);var a=no(Is.current);if(n=t.type,e!==null&&t.stateNode!=null)$x(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return pt(t),null}if(e=no(Rn.current),Zl(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[kn]=t,o[Ms]=s,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(a=0;a<os.length;a++)Re(os[a],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":om(o,s),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Re("invalid",o);break;case"textarea":sm(o,s),Re("invalid",o)}ru(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?o.textContent!==i&&(s.suppressHydrationWarning!==!0&&Wl(o.textContent,i,e),a=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Wl(o.textContent,i,e),a=["children",""+i]):ks.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Re("scroll",o)}switch(n){case"input":Ml(o),am(o,s,!0);break;case"textarea":Ml(o),lm(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=zi)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=c2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[kn]=t,e[Ms]=o,Bx(e,t,!1,!1),t.stateNode=e;e:{switch(l=ou(n,o),n){case"dialog":Re("cancel",e),Re("close",e),a=o;break;case"iframe":case"object":case"embed":Re("load",e),a=o;break;case"video":case"audio":for(a=0;a<os.length;a++)Re(os[a],e);a=o;break;case"source":Re("error",e),a=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),a=o;break;case"details":Re("toggle",e),a=o;break;case"input":om(e,o),a=Qd(e,o),Re("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=ze({},o,{value:void 0}),Re("invalid",e);break;case"textarea":sm(e,o),a=tu(e,o),Re("invalid",e);break;default:a=o}ru(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?p2(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&d2(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Es(e,c):typeof c=="number"&&Es(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ks.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Re("scroll",e):c!=null&&cp(e,s,c,l))}switch(n){case"input":Ml(e),am(e,o,!1);break;case"textarea":Ml(e),lm(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Er(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?na(e,!!o.multiple,s,!1):o.defaultValue!=null&&na(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=zi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)Ax(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(n=no(Is.current),no(Rn.current),Zl(t)){if(o=t.stateNode,n=t.memoizedProps,o[kn]=t,(s=o.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:Wl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wl(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[kn]=t,t.stateNode=o}return pt(t),null;case 13:if(Oe(Pe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&It!==null&&t.mode&1&&!(t.flags&128))J2(),pa(),t.flags|=98560,s=!1;else if(s=Zl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[kn]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),s=!1}else mn!==null&&(Pu(mn),mn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Qe===0&&(Qe=3):Wp())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return ma(),Ru(e,t),e===null&&$s(t.stateNode.containerInfo),pt(t),null;case 10:return Ep(t.type._context),pt(t),null;case 17:return Lt(t.type)&&Fi(),pt(t),null;case 19:if(Oe(Pe),s=t.memoizedState,s===null)return pt(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)Wa(s,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yi(e),l!==null){for(t.flags|=128,Wa(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ze()>xa&&(t.flags|=128,o=!0,Wa(s,!1),t.lanes=4194304)}else{if(!o)if(e=Yi(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!$e)return pt(t),null}else 2*Ze()-s.renderingStartTime>xa&&n!==1073741824&&(t.flags|=128,o=!0,Wa(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ze(),t.sibling=null,n=Pe.current,Ee(Pe,o?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Hp(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Mt&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Db(e,t){switch(wp(t),t.tag){case 1:return Lt(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(),Oe(Dt),Oe(mt),Lp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dp(t),null;case 13:if(Oe(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Pe),null;case 4:return ma(),null;case 10:return Ep(t.type._context),null;case 22:case 23:return Hp(),null;case 24:return null;default:return null}}var Gl=!1,ht=!1,Lb=typeof WeakSet=="function"?WeakSet:Set,U=null;function Go(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ue(e,t,o)}else n.current=null}function Ou(e,t,n){try{n()}catch(o){Ue(e,t,o)}}var qm=!1;function Bb(e,t){if(mu=Mi,e=z2(),Sp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var b;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break t;if(f===n&&++d===a&&(i=l),f===s&&++u===o&&(c=l),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:e,selectionRange:n},Mi=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,_=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:un(t.type,S),_);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(j){Ue(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return y=qm,qm=!1,y}function vs(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Ou(t,n,s)}a=a.next}while(a!==o)}}function Cc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mx(e){var t=e.alternate;t!==null&&(e.alternate=null,Mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Ms],delete t[vu],delete t[xb],delete t[gb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Px(e){return e.tag===5||e.tag===3||e.tag===4}function Xm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(o!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Bu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Bu(e,t,n),e=e.sibling;e!==null;)Bu(e,t,n),e=e.sibling}var at=null,pn=!1;function dr(e,t,n){for(n=n.child;n!==null;)Ix(e,t,n),n=n.sibling}function Ix(e,t,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:ht||Go(n,t);case 6:var o=at,a=pn;at=null,dr(e,t,n),at=o,pn=a,at!==null&&(pn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(pn?(e=at,n=n.stateNode,e.nodeType===8?gd(e.parentNode,n):e.nodeType===1&&gd(e,n),Ds(e)):gd(at,n.stateNode));break;case 4:o=at,a=pn,at=n.stateNode.containerInfo,pn=!0,dr(e,t,n),at=o,pn=a;break;case 0:case 11:case 14:case 15:if(!ht&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ou(n,t,l),a=a.next}while(a!==o)}dr(e,t,n);break;case 1:if(!ht&&(Go(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){Ue(n,t,i)}dr(e,t,n);break;case 21:dr(e,t,n);break;case 22:n.mode&1?(ht=(o=ht)||n.memoizedState!==null,dr(e,t,n),ht=o):dr(e,t,n);break;default:dr(e,t,n)}}function Qm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lb),t.forEach(function(o){var a=Vb.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function dn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:at=i.stateNode,pn=!1;break e;case 3:at=i.stateNode.containerInfo,pn=!0;break e;case 4:at=i.stateNode.containerInfo,pn=!0;break e}i=i.return}if(at===null)throw Error(A(160));Ix(s,l,a),at=null,pn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Ue(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zx(t,e),t=t.sibling}function zx(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),Cn(e),o&4){try{vs(3,e,e.return),Cc(3,e)}catch(S){Ue(e,e.return,S)}try{vs(5,e,e.return)}catch(S){Ue(e,e.return,S)}}break;case 1:dn(t,e),Cn(e),o&512&&n!==null&&Go(n,n.return);break;case 5:if(dn(t,e),Cn(e),o&512&&n!==null&&Go(n,n.return),e.flags&32){var a=e.stateNode;try{Es(a,"")}catch(S){Ue(e,e.return,S)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&l2(a,s),ou(i,l);var d=ou(i,s);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?p2(a,p):u==="dangerouslySetInnerHTML"?d2(a,p):u==="children"?Es(a,p):cp(a,u,p,d)}switch(i){case"input":Jd(a,s);break;case"textarea":i2(a,s);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?na(a,!!s.multiple,b,!1):f!==!!s.multiple&&(s.defaultValue!=null?na(a,!!s.multiple,s.defaultValue,!0):na(a,!!s.multiple,s.multiple?[]:"",!1))}a[Ms]=s}catch(S){Ue(e,e.return,S)}}break;case 6:if(dn(t,e),Cn(e),o&4){if(e.stateNode===null)throw Error(A(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(S){Ue(e,e.return,S)}}break;case 3:if(dn(t,e),Cn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(t.containerInfo)}catch(S){Ue(e,e.return,S)}break;case 4:dn(t,e),Cn(e);break;case 13:dn(t,e),Cn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Up=Ze())),o&4&&Qm(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(d=ht)||u,dn(t,e),ht=d):dn(t,e),Cn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(p=U=u;U!==null;){switch(f=U,b=f.child,f.tag){case 0:case 11:case 14:case 15:vs(4,f,f.return);break;case 1:Go(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){Ue(o,n,S)}}break;case 5:Go(f,f.return);break;case 22:if(f.memoizedState!==null){ef(p);continue}}b!==null?(b.return=f,U=b):ef(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=u2("display",l))}catch(S){Ue(e,e.return,S)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(S){Ue(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),Cn(e),o&4&&Qm(e);break;case 21:break;default:dn(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Px(n)){var o=n;break e}n=n.return}throw Error(A(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Es(a,""),o.flags&=-33);var s=Xm(e);Bu(e,s,a);break;case 3:case 4:var l=o.stateNode.containerInfo,i=Xm(e);Lu(e,i,l);break;default:throw Error(A(161))}}catch(c){Ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $b(e,t,n){U=e,Fx(e)}function Fx(e,t,n){for(var o=(e.mode&1)!==0;U!==null;){var a=U,s=a.child;if(a.tag===22&&o){var l=a.memoizedState!==null||Gl;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||ht;i=Gl;var d=ht;if(Gl=l,(ht=c)&&!d)for(U=a;U!==null;)l=U,c=l.child,l.tag===22&&l.memoizedState!==null?tf(a):c!==null?(c.return=l,U=c):tf(a);for(;s!==null;)U=s,Fx(s),s=s.sibling;U=a,Gl=i,ht=d}Jm(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,U=s):Jm(e)}}function Jm(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Cc(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ht)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Am(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Am(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Ds(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ht||t.flags&512&&Du(t)}catch(f){Ue(t,t.return,f)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function ef(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function tf(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(c){Ue(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){Ue(t,a,c)}}var s=t.return;try{Du(t)}catch(c){Ue(t,s,c)}break;case 5:var l=t.return;try{Du(t)}catch(c){Ue(t,l,c)}}}catch(c){Ue(t,t.return,c)}if(t===e){U=null;break}var i=t.sibling;if(i!==null){i.return=t.return,U=i;break}U=t.return}}var Ab=Math.ceil,Xi=tr.ReactCurrentDispatcher,zp=tr.ReactCurrentOwner,Xt=tr.ReactCurrentBatchConfig,be=0,ot=null,Ye=null,lt=0,Mt=0,qo=$r(0),Qe=0,Vs=null,uo=0,wc=0,Fp=0,bs=null,Rt=null,Up=0,xa=1/0,In=null,Qi=!1,$u=null,_r=null,ql=!1,br=null,Ji=0,js=0,Au=null,wi=-1,_i=0;function jt(){return be&6?Ze():wi!==-1?wi:wi=Ze()}function Tr(e){return e.mode&1?be&2&&lt!==0?lt&-lt:bb.transition!==null?(_i===0&&(_i=w2()),_i):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:O2(e.type)),e):1}function xn(e,t,n,o){if(50<js)throw js=0,Au=null,Error(A(185));el(e,n,o),(!(be&2)||e!==ot)&&(e===ot&&(!(be&2)&&(wc|=n),Qe===4&&gr(e,lt)),Bt(e,o),n===1&&be===0&&!(t.mode&1)&&(xa=Ze()+500,jc&&Ar()))}function Bt(e,t){var n=e.callbackNode;b8(e,t);var o=Ai(e,e===ot?lt:0);if(o===0)n!==null&&dm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&dm(n),t===1)e.tag===0?vb(nf.bind(null,e)):q2(nf.bind(null,e)),mb(function(){!(be&6)&&Ar()}),n=null;else{switch(_2(o)){case 1:n=mp;break;case 4:n=S2;break;case 16:n=$i;break;case 536870912:n=C2;break;default:n=$i}n=Gx(n,Ux.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ux(e,t){if(wi=-1,_i=0,be&6)throw Error(A(327));var n=e.callbackNode;if(la()&&e.callbackNode!==n)return null;var o=Ai(e,e===ot?lt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ec(e,o);else{t=o;var a=be;be|=2;var s=Hx();(ot!==e||lt!==t)&&(In=null,xa=Ze()+500,ao(e,t));do try{Ib();break}catch(i){Vx(e,i)}while(1);kp(),Xi.current=s,be=a,Ye!==null?t=0:(ot=null,lt=0,t=Qe)}if(t!==0){if(t===2&&(a=cu(e),a!==0&&(o=a,t=Mu(e,a))),t===1)throw n=Vs,ao(e,0),gr(e,o),Bt(e,Ze()),n;if(t===6)gr(e,o);else{if(a=e.current.alternate,!(o&30)&&!Mb(a)&&(t=ec(e,o),t===2&&(s=cu(e),s!==0&&(o=s,t=Mu(e,s))),t===1))throw n=Vs,ao(e,0),gr(e,o),Bt(e,Ze()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:Qr(e,Rt,In);break;case 3:if(gr(e,o),(o&130023424)===o&&(t=Up+500-Ze(),10<t)){if(Ai(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){jt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=gu(Qr.bind(null,e,Rt,In),t);break}Qr(e,Rt,In);break;case 4:if(gr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var l=31-fn(o);s=1<<l,l=t[l],l>a&&(a=l),o&=~s}if(o=a,o=Ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ab(o/1960))-o,10<o){e.timeoutHandle=gu(Qr.bind(null,e,Rt,In),o);break}Qr(e,Rt,In);break;case 5:Qr(e,Rt,In);break;default:throw Error(A(329))}}}return Bt(e,Ze()),e.callbackNode===n?Ux.bind(null,e):null}function Mu(e,t){var n=bs;return e.current.memoizedState.isDehydrated&&(ao(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Rt,Rt=n,t!==null&&Pu(t)),e}function Pu(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function Mb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!gn(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gr(e,t){for(t&=~Fp,t&=~wc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-fn(t),o=1<<n;e[n]=-1,t&=~o}}function nf(e){if(be&6)throw Error(A(327));la();var t=Ai(e,0);if(!(t&1))return Bt(e,Ze()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var o=cu(e);o!==0&&(t=o,n=Mu(e,o))}if(n===1)throw n=Vs,ao(e,0),gr(e,t),Bt(e,Ze()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qr(e,Rt,In),Bt(e,Ze()),null}function Vp(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(xa=Ze()+500,jc&&Ar())}}function po(e){br!==null&&br.tag===0&&!(be&6)&&la();var t=be;be|=1;var n=Xt.transition,o=Ce;try{if(Xt.transition=null,Ce=1,e)return e()}finally{Ce=o,Xt.transition=n,be=t,!(be&6)&&Ar()}}function Hp(){Mt=qo.current,Oe(qo)}function ao(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hb(n)),Ye!==null)for(n=Ye.return;n!==null;){var o=n;switch(wp(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fi();break;case 3:ma(),Oe(Dt),Oe(mt),Lp();break;case 5:Dp(o);break;case 4:ma();break;case 13:Oe(Pe);break;case 19:Oe(Pe);break;case 10:Ep(o.type._context);break;case 22:case 23:Hp()}n=n.return}if(ot=e,Ye=e=kr(e.current,null),lt=Mt=t,Qe=0,Vs=null,Fp=wc=uo=0,Rt=bs=null,to!==null){for(t=0;t<to.length;t++)if(n=to[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,o.next=l}n.pending=o}to=null}return e}function Vx(e,t){do{var n=Ye;try{if(kp(),yi.current=qi,Gi){for(var o=Ie.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Gi=!1}if(co=0,nt=qe=Ie=null,gs=!1,zs=0,zp.current=null,n===null||n.return===null){Qe=1,Vs=t,Ye=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=lt,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=Vm(l);if(b!==null){b.flags&=-257,Hm(b,l,i,s,t),b.mode&1&&Um(s,d,t),t=b,c=d;var y=t.updateQueue;if(y===null){var S=new Set;S.add(c),t.updateQueue=S}else y.add(c);break e}else{if(!(t&1)){Um(s,d,t),Wp();break e}c=Error(A(426))}}else if($e&&i.mode&1){var _=Vm(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Hm(_,l,i,s,t),_p(fa(c,i));break e}}s=c=fa(c,i),Qe!==4&&(Qe=2),bs===null?bs=[s]:bs.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Tx(s,c,t);$m(s,g);break e;case 1:i=c;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_r===null||!_r.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=kx(s,i,t);$m(s,j);break e}}s=s.return}while(s!==null)}Zx(n)}catch(C){t=C,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function Hx(){var e=Xi.current;return Xi.current=qi,e===null?qi:e}function Wp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),ot===null||!(uo&268435455)&&!(wc&268435455)||gr(ot,lt)}function ec(e,t){var n=be;be|=2;var o=Hx();(ot!==e||lt!==t)&&(In=null,ao(e,t));do try{Pb();break}catch(a){Vx(e,a)}while(1);if(kp(),be=n,Xi.current=o,Ye!==null)throw Error(A(261));return ot=null,lt=0,Qe}function Pb(){for(;Ye!==null;)Wx(Ye)}function Ib(){for(;Ye!==null&&!d8();)Wx(Ye)}function Wx(e){var t=Yx(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Zx(e):Ye=t,zp.current=null}function Zx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Db(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ye=null;return}}else if(n=Ob(n,t,Mt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Qe===0&&(Qe=5)}function Qr(e,t,n){var o=Ce,a=Xt.transition;try{Xt.transition=null,Ce=1,zb(e,t,n,o)}finally{Xt.transition=a,Ce=o}return null}function zb(e,t,n,o){do la();while(br!==null);if(be&6)throw Error(A(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(j8(e,s),e===ot&&(Ye=ot=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,Gx($i,function(){return la(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var l=Ce;Ce=1;var i=be;be|=4,zp.current=null,Bb(e,n),zx(n,e),sb(fu),Mi=!!mu,fu=mu=null,e.current=n,$b(n),u8(),be=i,Ce=l,Xt.transition=s}else e.current=n;if(ql&&(ql=!1,br=e,Ji=a),s=e.pendingLanes,s===0&&(_r=null),m8(n.stateNode),Bt(e,Ze()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Qi)throw Qi=!1,e=$u,$u=null,e;return Ji&1&&e.tag!==0&&la(),s=e.pendingLanes,s&1?e===Au?js++:(js=0,Au=e):js=0,Ar(),null}function la(){if(br!==null){var e=_2(Ji),t=Xt.transition,n=Ce;try{if(Xt.transition=null,Ce=16>e?16:e,br===null)var o=!1;else{if(e=br,br=null,Ji=0,be&6)throw Error(A(331));var a=be;for(be|=4,U=e.current;U!==null;){var s=U,l=s.child;if(U.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(U=d;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:vs(8,u,s)}var p=u.child;if(p!==null)p.return=u,U=p;else for(;U!==null;){u=U;var f=u.sibling,b=u.return;if(Mx(u),u===d){U=null;break}if(f!==null){f.return=b,U=f;break}U=b}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var _=S.sibling;S.sibling=null,S=_}while(S!==null)}}U=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,U=l;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var h=e.current;for(U=h;U!==null;){l=U;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,U=m;else e:for(l=h;U!==null;){if(i=U,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Cc(9,i)}}catch(C){Ue(i,i.return,C)}if(i===l){U=null;break e}var j=i.sibling;if(j!==null){j.return=i.return,U=j;break e}U=i.return}}if(be=a,Ar(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(fc,e)}catch{}o=!0}return o}finally{Ce=n,Xt.transition=t}}return!1}function rf(e,t,n){t=fa(n,t),t=Tx(e,t,1),e=wr(e,t,1),t=jt(),e!==null&&(el(e,1,t),Bt(e,t))}function Ue(e,t,n){if(e.tag===3)rf(e,e,n);else for(;t!==null;){if(t.tag===3){rf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(_r===null||!_r.has(o))){e=fa(n,e),e=kx(t,e,1),t=wr(t,e,1),e=jt(),t!==null&&(el(t,1,e),Bt(t,e));break}}t=t.return}}function Fb(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(lt&n)===n&&(Qe===4||Qe===3&&(lt&130023424)===lt&&500>Ze()-Up?ao(e,0):Fp|=n),Bt(e,t)}function Kx(e,t){t===0&&(e.mode&1?(t=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):t=1);var n=jt();e=qn(e,t),e!==null&&(el(e,t,n),Bt(e,n))}function Ub(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kx(e,n)}function Vb(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),Kx(e,n)}var Yx;Yx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,Rb(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,$e&&t.flags&1048576&&X2(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ci(e,t),e=t.pendingProps;var a=ua(t,mt.current);sa(t,n),a=$p(null,t,o,e,a,n);var s=Ap();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(o)?(s=!0,Ui(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Rp(t),a.updater=yc,t.stateNode=a,a._reactInternals=t,wu(t,o,e,n),t=ku(null,t,o,!0,s,n)):(t.tag=0,$e&&s&&Cp(t),vt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Wb(o),e=un(o,e),a){case 0:t=Tu(null,t,o,e,n);break e;case 1:t=Km(null,t,o,e,n);break e;case 11:t=Wm(null,t,o,e,n);break e;case 14:t=Zm(null,t,o,un(o.type,e),n);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:un(o,a),Tu(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:un(o,a),Km(e,t,o,a,n);case 3:e:{if(Ox(t),e===null)throw Error(A(387));o=t.pendingProps,s=t.memoizedState,a=s.element,tx(e,t),Ki(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=fa(Error(A(423)),t),t=Ym(e,t,o,n,a);break e}else if(o!==a){a=fa(Error(A(424)),t),t=Ym(e,t,o,n,a);break e}else for(It=Cr(t.stateNode.containerInfo.firstChild),zt=t,$e=!0,mn=null,n=ax(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pa(),o===a){t=Xn(e,t,n);break e}vt(e,t,o,n)}t=t.child}return t;case 5:return sx(t),e===null&&yu(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,xu(o,a)?l=null:s!==null&&xu(o,s)&&(t.flags|=32),Rx(e,t),vt(e,t,l,n),t.child;case 6:return e===null&&yu(t),null;case 13:return Dx(e,t,n);case 4:return Op(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ha(t,null,o,n):vt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:un(o,a),Wm(e,t,o,a,n);case 7:return vt(e,t,t.pendingProps,n),t.child;case 8:return vt(e,t,t.pendingProps.children,n),t.child;case 12:return vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,Ee(Wi,o._currentValue),o._currentValue=l,s!==null)if(gn(s.value,l)){if(s.children===a.children&&!Dt.current){t=Xn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(s.tag===1){c=Zn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Su(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Su(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}vt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,sa(t,n),a=Jt(a),o=o(a),t.flags|=1,vt(e,t,o,n),t.child;case 14:return o=t.type,a=un(o,t.pendingProps),a=un(o.type,a),Zm(e,t,o,a,n);case 15:return Ex(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:un(o,a),Ci(e,t),t.tag=1,Lt(o)?(e=!0,Ui(t)):e=!1,sa(t,n),rx(t,o,a),wu(t,o,a,n),ku(null,t,o,!0,e,n);case 19:return Lx(e,t,n);case 22:return Nx(e,t,n)}throw Error(A(156,t.tag))};function Gx(e,t){return y2(e,t)}function Hb(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,o){return new Hb(e,t,n,o)}function Zp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wb(e){if(typeof e=="function")return Zp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===up)return 11;if(e===pp)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ti(e,t,n,o,a,s){var l=2;if(o=e,typeof e=="function")Zp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zo:return so(n.children,a,s,t);case dp:l=8,a|=8;break;case Yd:return e=qt(12,n,t,a|2),e.elementType=Yd,e.lanes=s,e;case Gd:return e=qt(13,n,t,a),e.elementType=Gd,e.lanes=s,e;case qd:return e=qt(19,n,t,a),e.elementType=qd,e.lanes=s,e;case o2:return _c(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case n2:l=10;break e;case r2:l=9;break e;case up:l=11;break e;case pp:l=14;break e;case hr:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=qt(l,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function so(e,t,n,o){return e=qt(7,e,o,t),e.lanes=n,e}function _c(e,t,n,o){return e=qt(22,e,o,t),e.elementType=o2,e.lanes=n,e.stateNode={isHidden:!1},e}function _d(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function Td(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zb(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kp(e,t,n,o,a,s,l,i,c){return e=new Zb(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rp(s),e}function Kb(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function qx(e){if(!e)return Nr;e=e._reactInternals;e:{if(go(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Lt(n))return G2(e,n,t)}return t}function Xx(e,t,n,o,a,s,l,i,c){return e=Kp(n,o,!0,e,a,s,l,i,c),e.context=qx(null),n=e.current,o=jt(),a=Tr(n),s=Zn(o,a),s.callback=t??null,wr(n,s,a),e.current.lanes=a,el(e,a,o),Bt(e,o),e}function Tc(e,t,n,o){var a=t.current,s=jt(),l=Tr(a);return n=qx(n),t.context===null?t.context=n:t.pendingContext=n,t=Zn(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=wr(a,t,l),e!==null&&(xn(e,a,l,s),ji(e,a,l)),l}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yp(e,t){of(e,t),(e=e.alternate)&&of(e,t)}function Yb(){return null}var Qx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gp(e){this._internalRoot=e}kc.prototype.render=Gp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Tc(e,t,null,null)};kc.prototype.unmount=Gp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;po(function(){Tc(null,e,null,null)}),t[Gn]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=E2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xr.length&&t!==0&&t<xr[n].priority;n++);xr.splice(n,0,e),n===0&&R2(e)}};function qp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function af(){}function Gb(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=tc(l);s.call(d)}}var l=Xx(t,o,e,0,null,!1,!1,"",af);return e._reactRootContainer=l,e[Gn]=l.current,$s(e.nodeType===8?e.parentNode:e),po(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var i=o;o=function(){var d=tc(c);i.call(d)}}var c=Kp(e,0,!1,null,null,!1,!1,"",af);return e._reactRootContainer=c,e[Gn]=c.current,$s(e.nodeType===8?e.parentNode:e),po(function(){Tc(t,c,n,o)}),c}function Nc(e,t,n,o,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=tc(l);i.call(c)}}Tc(t,l,e,a)}else l=Gb(n,t,e,a,o);return tc(l)}T2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rs(t.pendingLanes);n!==0&&(fp(t,n|1),Bt(t,Ze()),!(be&6)&&(xa=Ze()+500,Ar()))}break;case 13:po(function(){var o=qn(e,1);if(o!==null){var a=jt();xn(o,e,1,a)}}),Yp(e,1)}};xp=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var n=jt();xn(t,e,134217728,n)}Yp(e,134217728)}};k2=function(e){if(e.tag===13){var t=Tr(e),n=qn(e,t);if(n!==null){var o=jt();xn(n,e,t,o)}Yp(e,t)}};E2=function(){return Ce};N2=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};su=function(e,t,n){switch(t){case"input":if(Jd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=bc(o);if(!a)throw Error(A(90));s2(o),Jd(o,a)}}}break;case"textarea":i2(e,n);break;case"select":t=n.value,t!=null&&na(e,!!n.multiple,t,!1)}};f2=Vp;x2=po;var qb={usingClientEntryPoint:!1,Events:[nl,Ho,bc,h2,m2,Vp]},Za={findFiberByHostInstance:eo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xb={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=b2(e),e===null?null:e.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||Yb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{fc=Xl.inject(Xb),Nn=Xl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qb;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(t))throw Error(A(200));return Kb(e,t,null,n)};Vt.createRoot=function(e,t){if(!qp(e))throw Error(A(299));var n=!1,o="",a=Qx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kp(e,1,!1,null,null,n,!1,o,a),e[Gn]=t.current,$s(e.nodeType===8?e.parentNode:e),new Gp(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=b2(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return po(e)};Vt.hydrate=function(e,t,n){if(!Ec(t))throw Error(A(200));return Nc(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!qp(e))throw Error(A(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",l=Qx;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xx(t,null,e,1,n??null,a,!1,s,l),e[Gn]=t.current,$s(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new kc(t)};Vt.render=function(e,t,n){if(!Ec(t))throw Error(A(200));return Nc(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!Ec(e))throw Error(A(40));return e._reactRootContainer?(po(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Vp;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ec(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Nc(e,t,n,!1,o)};Vt.version="18.2.0-next-9e3b772b8-20220608";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),X1.exports=Vt;var Un=X1.exports;const Qb=er(Un),Jb=z1({__proto__:null,default:Qb},[Un]);var sf=Un;Zd.createRoot=sf.createRoot,Zd.hydrateRoot=sf.hydrateRoot;function ej(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function tj(e,t){if(e==null)return{};var n=ej(e,t),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Iu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function nj(e){if(Array.isArray(e))return Iu(e)}function rj(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oj(e,t){if(e){if(typeof e=="string")return Iu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Iu(e,t)}}function aj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sj(e){return nj(e)||rj(e)||oj(e)||aj()}function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}function lj(e,t){if(Hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Hs(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ij(e){var t=lj(e,"string");return Hs(t)=="symbol"?t:String(t)}function eg(e,t,n){return t=ij(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},zu.apply(this,arguments)}function lf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Xo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lf(Object(n),!0).forEach(function(o){eg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function cj(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var kd={};function dj(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return kd[t]||(kd[t]=cj(e)),kd[t]}function uj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(s){return s!=="token"}),a=dj(o);return a.reduce(function(s,l){return Xo(Xo({},s),n[l])},t)}function cf(e){return e.join(" ")}function pj(e,t){var n=0;return function(o){return n+=1,o.map(function(a,s){return tg({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function tg(e){var t=e.node,n=e.stylesheet,o=e.style,a=o===void 0?{}:o,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=pj(n,s),f;if(!s)f=Xo(Xo({},i),{},{className:cf(i.className)});else{var b=Object.keys(n).reduce(function(g,h){return h.split(".").forEach(function(m){g.includes(m)||g.push(m)}),g},[]),y=i.className&&i.className.includes("token")?["token"]:[],S=i.className&&y.concat(i.className.filter(function(g){return!b.includes(g)}));f=Xo(Xo({},i),{},{className:cf(S)||void 0,style:uj(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return G.createElement(d,zu({key:l},f),_)}}const hj=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var mj=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function df(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?df(Object(n),!0).forEach(function(o){eg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):df(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var fj=/\n/g;function xj(e){return e.match(fj)}function gj(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(a,s){var l=s+n;return G.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function vj(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,a=o===void 0?{float:"left",paddingRight:"10px"}:o,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return G.createElement("code",{style:Object.assign({},n,a)},gj({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function bj(e){return"".concat(e.toString().length,".25em")}function ng(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function rg(e,t,n){var o={display:"inline-block",minWidth:bj(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=Tn(Tn({},o),a);return s}function ki(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,f=typeof i=="function"?i(n):i;if(f.className=d,n&&s){var b=rg(o,n,a);t.unshift(ng(n,b))}return p&u&&(f.style=Tn(Tn({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function og(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var a=e[o];if(a.type==="text")n.push(ki({children:[a],className:sj(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);og(a.children,s).forEach(function(l){return n.push(l)})}}return n}function jj(e,t,n,o,a,s,l,i,c){var d,u=og(e.value),p=[],f=-1,b=0;function y(C,x){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ki({children:C,lineNumber:x,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:o,wrapLongLines:c})}function S(C,x){if(o&&x&&a){var w=rg(i,x,l);C.unshift(ng(x,w))}return C}function _(C,x){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?y(C,x,w):S(C,x)}for(var g=function(){var x=u[b],w=x.children[0].value,E=xj(w);if(E){var N=w.split(`
`);N.forEach(function(D,$){var Y=o&&p.length+s,q={type:"text",value:"".concat(D,`
`)};if($===0){var le=u.slice(f+1,b).concat(ki({children:[q],className:x.properties.className})),we=_(le,Y);p.push(we)}else if($===N.length-1){var je=u[b+1]&&u[b+1].children&&u[b+1].children[0],Q={type:"text",value:"".concat(D)};if(je){var B=ki({children:[Q],className:x.properties.className});u.splice(b+1,0,B)}else{var P=[Q],I=_(P,Y,x.properties.className);p.push(I)}}else{var V=[q],W=_(V,Y,x.properties.className);p.push(W)}}),f=b}b++};b<u.length;)g();if(f!==u.length-1){var h=u.slice(f+1,u.length);if(h&&h.length){var m=o&&p.length+s,j=_(h,m);p.push(j)}}return t?p:(d=[]).concat.apply(d,p)}function yj(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(a,s){return tg({node:a,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(s)})})}function ag(e){return e&&typeof e.highlightAuto<"u"}function Sj(e){var t=e.astGenerator,n=e.language,o=e.code,a=e.defaultCodeValue;if(ag(t)){var s=hj(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:a}}catch{return{value:a}}}function Cj(e,t){return function(o){var a=o.language,s=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:a?"language-".concat(a):void 0,style:Tn(Tn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:u,f=o.useInlineStyles,b=f===void 0?!0:f,y=o.showLineNumbers,S=y===void 0?!1:y,_=o.showInlineLineNumbers,g=_===void 0?!0:_,h=o.startingLineNumber,m=h===void 0?1:h,j=o.lineNumberContainerStyle,C=o.lineNumberStyle,x=C===void 0?{}:C,w=o.wrapLines,E=o.wrapLongLines,N=E===void 0?!1:E,D=o.lineProps,$=D===void 0?{}:D,Y=o.renderer,q=o.PreTag,le=q===void 0?"pre":q,we=o.CodeTag,je=we===void 0?"code":we,Q=o.code,B=Q===void 0?(Array.isArray(s)?s[0]:s)||"":Q,P=o.astGenerator,I=tj(o,mj);P=P||e;var V=S?G.createElement(vj,{containerStyle:j,codeStyle:p.style||{},numberStyle:x,startingLineNumber:m,codeString:B}):null,W=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},_e=ag(P)?"hljs":"prismjs",ce=b?Object.assign({},I,{style:Object.assign({},W,d)}):Object.assign({},I,{className:I.className?"".concat(_e," ").concat(I.className):_e,style:Object.assign({},d)});if(N?p.style=Tn(Tn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Tn(Tn({},p.style),{},{whiteSpace:"pre"}),!P)return G.createElement(le,ce,V,G.createElement(je,p,B));(w===void 0&&Y||N)&&(w=!0),Y=Y||yj;var Se=[{type:"text",value:B}],ie=Sj({astGenerator:P,language:a,code:B,defaultCodeValue:Se});ie.language===null&&(ie.value=Se);var De=ie.value.length+m,ct=jj(ie,w,$,S,g,m,De,x,N);return G.createElement(le,ce,G.createElement(je,p,!g&&V,Y({rows:ct,stylesheet:i,useInlineStyles:b})))}}var wj=Tj,_j=Object.prototype.hasOwnProperty;function Tj(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)_j.call(n,o)&&(e[o]=n[o])}return e}var sg=lg,Xp=lg.prototype;Xp.space=null;Xp.normal={};Xp.property={};function lg(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var uf=wj,kj=sg,Ej=Nj;function Nj(e){for(var t=e.length,n=[],o=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),o.push(s.normal),l=s.space;return new kj(uf.apply(null,n),uf.apply(null,o),l)}var Qp=Rj;function Rj(e){return e.toLowerCase()}var ig=cg,nn=cg.prototype;nn.space=null;nn.attribute=null;nn.property=null;nn.boolean=!1;nn.booleanish=!1;nn.overloadedBoolean=!1;nn.number=!1;nn.commaSeparated=!1;nn.spaceSeparated=!1;nn.commaOrSpaceSeparated=!1;nn.mustUseProperty=!1;nn.defined=!1;function cg(e,t){this.property=e,this.attribute=t}var Bn={},Oj=0;Bn.boolean=vo();Bn.booleanish=vo();Bn.overloadedBoolean=vo();Bn.number=vo();Bn.spaceSeparated=vo();Bn.commaSeparated=vo();Bn.commaOrSpaceSeparated=vo();function vo(){return Math.pow(2,++Oj)}var dg=ig,pf=Bn,ug=Jp;Jp.prototype=new dg;Jp.prototype.defined=!0;var pg=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Dj=pg.length;function Jp(e,t,n,o){var a=-1,s;for(hf(this,"space",o),dg.call(this,e,t);++a<Dj;)s=pg[a],hf(this,s,(n&pf[s])===pf[s])}function hf(e,t,n){n&&(e[t]=n)}var mf=Qp,Lj=sg,Bj=ug,ol=$j;function $j(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,d;for(c in a)d=new Bj(c,s(o,c),a[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[mf(c)]=c,i[mf(d.attribute)]=c;return new Lj(l,i,t)}var Aj=ol,Mj=Aj({space:"xlink",transform:Pj,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Pj(e,t){return"xlink:"+t.slice(5).toLowerCase()}var Ij=ol,zj=Ij({space:"xml",transform:Fj,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Fj(e,t){return"xml:"+t.slice(3).toLowerCase()}var Uj=Vj;function Vj(e,t){return t in e?e[t]:t}var Hj=Uj,hg=Wj;function Wj(e,t){return Hj(e,t.toLowerCase())}var Zj=ol,Kj=hg,Yj=Zj({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Kj,properties:{xmlns:null,xmlnsXLink:null}}),eh=Bn,Gj=ol,Et=eh.booleanish,Wt=eh.number,qr=eh.spaceSeparated,qj=Gj({transform:Xj,properties:{ariaActiveDescendant:null,ariaAtomic:Et,ariaAutoComplete:null,ariaBusy:Et,ariaChecked:Et,ariaColCount:Wt,ariaColIndex:Wt,ariaColSpan:Wt,ariaControls:qr,ariaCurrent:null,ariaDescribedBy:qr,ariaDetails:null,ariaDisabled:Et,ariaDropEffect:qr,ariaErrorMessage:null,ariaExpanded:Et,ariaFlowTo:qr,ariaGrabbed:Et,ariaHasPopup:null,ariaHidden:Et,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:qr,ariaLevel:Wt,ariaLive:null,ariaModal:Et,ariaMultiLine:Et,ariaMultiSelectable:Et,ariaOrientation:null,ariaOwns:qr,ariaPlaceholder:null,ariaPosInSet:Wt,ariaPressed:Et,ariaReadOnly:Et,ariaRelevant:null,ariaRequired:Et,ariaRoleDescription:qr,ariaRowCount:Wt,ariaRowIndex:Wt,ariaRowSpan:Wt,ariaSelected:Et,ariaSetSize:Wt,ariaSort:null,ariaValueMax:Wt,ariaValueMin:Wt,ariaValueNow:Wt,ariaValueText:null,role:null}});function Xj(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Sa=Bn,Qj=ol,Jj=hg,pe=Sa.boolean,ey=Sa.overloadedBoolean,Ka=Sa.booleanish,Ne=Sa.number,gt=Sa.spaceSeparated,Ql=Sa.commaSeparated,ty=Qj({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Jj,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ql,acceptCharset:gt,accessKey:gt,action:null,allow:null,allowFullScreen:pe,allowPaymentRequest:pe,allowUserMedia:pe,alt:null,as:null,async:pe,autoCapitalize:null,autoComplete:gt,autoFocus:pe,autoPlay:pe,capture:pe,charSet:null,checked:pe,cite:null,className:gt,cols:Ne,colSpan:null,content:null,contentEditable:Ka,controls:pe,controlsList:gt,coords:Ne|Ql,crossOrigin:null,data:null,dateTime:null,decoding:null,default:pe,defer:pe,dir:null,dirName:null,disabled:pe,download:ey,draggable:Ka,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:pe,formTarget:null,headers:gt,height:Ne,hidden:pe,high:Ne,href:null,hrefLang:null,htmlFor:gt,httpEquiv:gt,id:null,imageSizes:null,imageSrcSet:Ql,inputMode:null,integrity:null,is:null,isMap:pe,itemId:null,itemProp:gt,itemRef:gt,itemScope:pe,itemType:gt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:pe,low:Ne,manifest:null,max:null,maxLength:Ne,media:null,method:null,min:null,minLength:Ne,multiple:pe,muted:pe,name:null,nonce:null,noModule:pe,noValidate:pe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:pe,optimum:Ne,pattern:null,ping:gt,placeholder:null,playsInline:pe,poster:null,preload:null,readOnly:pe,referrerPolicy:null,rel:gt,required:pe,reversed:pe,rows:Ne,rowSpan:Ne,sandbox:gt,scope:null,scoped:pe,seamless:pe,selected:pe,shape:null,size:Ne,sizes:null,slot:null,span:Ne,spellCheck:Ka,src:null,srcDoc:null,srcLang:null,srcSet:Ql,start:Ne,step:null,style:null,tabIndex:Ne,target:null,title:null,translate:null,type:null,typeMustMatch:pe,useMap:null,value:Ka,width:Ne,wrap:null,align:null,aLink:null,archive:gt,axis:null,background:null,bgColor:null,border:Ne,borderColor:null,bottomMargin:Ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:pe,declare:pe,event:null,face:null,frame:null,frameBorder:null,hSpace:Ne,leftMargin:Ne,link:null,longDesc:null,lowSrc:null,marginHeight:Ne,marginWidth:Ne,noResize:pe,noHref:pe,noShade:pe,noWrap:pe,object:null,profile:null,prompt:null,rev:null,rightMargin:Ne,rules:null,scheme:null,scrolling:Ka,standby:null,summary:null,text:null,topMargin:Ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:pe,disableRemotePlayback:pe,prefix:null,property:null,results:Ne,security:null,unselectable:null}}),ny=Ej,ry=Mj,oy=zj,ay=Yj,sy=qj,ly=ty,iy=ny([oy,ry,ay,sy,ly]),cy=Qp,dy=ug,uy=ig,th="data",py=fy,hy=/^data[-\w.:]+$/i,mg=/-[a-z]/g,my=/[A-Z]/g;function fy(e,t){var n=cy(t),o=t,a=uy;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===th&&hy.test(t)&&(t.charAt(4)==="-"?o=xy(t):t=gy(t),a=dy),new a(o,t))}function xy(e){var t=e.slice(5).replace(mg,by);return th+t.charAt(0).toUpperCase()+t.slice(1)}function gy(e){var t=e.slice(4);return mg.test(t)?e:(t=t.replace(my,vy),t.charAt(0)!=="-"&&(t="-"+t),th+t)}function vy(e){return"-"+e.toLowerCase()}function by(e){return e.charAt(1).toUpperCase()}var jy=yy,ff=/[#.]/g;function yy(e,t){for(var n=e||"",o=t||"div",a={},s=0,l,i,c;s<n.length;)ff.lastIndex=s,c=ff.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:o=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:o,properties:a,children:[]}}var nh={};nh.parse=wy;nh.stringify=_y;var xf="",Sy=" ",Cy=/[ \t\n\r\f]+/g;function wy(e){var t=String(e||xf).trim();return t===xf?[]:t.split(Cy)}function _y(e){return e.join(Sy).trim()}var rh={};rh.parse=Ty;rh.stringify=ky;var Fu=",",gf=" ",as="";function Ty(e){for(var t=[],n=String(e||as),o=n.indexOf(Fu),a=0,s=!1,l;!s;)o===-1&&(o=n.length,s=!0),l=n.slice(a,o).trim(),(l||!s)&&t.push(l),a=o+1,o=n.indexOf(Fu,a);return t}function ky(e,t){var n=t||{},o=n.padLeft===!1?as:gf,a=n.padRight?gf:as;return e[e.length-1]===as&&(e=e.concat(as)),e.join(a+Fu+o).trim()}var Ey=py,vf=Qp,Ny=jy,bf=nh.parse,jf=rh.parse,Ry=Dy,Oy={}.hasOwnProperty;function Dy(e,t,n){var o=n?My(n):null;return a;function a(l,i){var c=Ny(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&Oy.call(o,u)?o[u]:u,i&&Ly(i,c)&&(d.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return fg(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var d,u,p;c==null||c!==c||(d=Ey(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=bf(p):d.commaSeparated?p=jf(p):d.commaOrSpaceSeparated&&(p=bf(jf(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=Ay(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=$y(d,u,p))}}function Ly(e,t){return typeof e=="string"||"length"in e||By(t.tagName,e)}function By(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function fg(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)fg(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function $y(e,t,n){var o,a,s;if(typeof n!="object"||!("length"in n))return yf(e,t,n);for(a=n.length,o=-1,s=[];++o<a;)s[o]=yf(e,t,n[o]);return s}function yf(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||vf(n)===vf(t))&&(o=!0),o}function Ay(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function My(e){for(var t=e.length,n=-1,o={},a;++n<t;)a=e[n],o[a.toLowerCase()]=a;return o}var Py=iy,Iy=Ry,xg=Iy(Py,"div");xg.displayName="html";var zy=xg,Fy=zy;const Uy="Æ",Vy="&",Hy="Á",Wy="Â",Zy="À",Ky="Å",Yy="Ã",Gy="Ä",qy="©",Xy="Ç",Qy="Ð",Jy="É",e7="Ê",t7="È",n7="Ë",r7=">",o7="Í",a7="Î",s7="Ì",l7="Ï",i7="<",c7="Ñ",d7="Ó",u7="Ô",p7="Ò",h7="Ø",m7="Õ",f7="Ö",x7='"',g7="®",v7="Þ",b7="Ú",j7="Û",y7="Ù",S7="Ü",C7="Ý",w7="á",_7="â",T7="´",k7="æ",E7="à",N7="&",R7="å",O7="ã",D7="ä",L7="¦",B7="ç",$7="¸",A7="¢",M7="©",P7="¤",I7="°",z7="÷",F7="é",U7="ê",V7="è",H7="ð",W7="ë",Z7="½",K7="¼",Y7="¾",G7=">",q7="í",X7="î",Q7="¡",J7="ì",e9="¿",t9="ï",n9="«",r9="<",o9="¯",a9="µ",s9="·",l9=" ",i9="¬",c9="ñ",d9="ó",u9="ô",p9="ò",h9="ª",m9="º",f9="ø",x9="õ",g9="ö",v9="¶",b9="±",j9="£",y9='"',S9="»",C9="®",w9="§",_9="­",T9="¹",k9="²",E9="³",N9="ß",R9="þ",O9="×",D9="ú",L9="û",B9="ù",$9="¨",A9="ü",M9="ý",P9="¥",I9="ÿ",z9={AElig:Uy,AMP:Vy,Aacute:Hy,Acirc:Wy,Agrave:Zy,Aring:Ky,Atilde:Yy,Auml:Gy,COPY:qy,Ccedil:Xy,ETH:Qy,Eacute:Jy,Ecirc:e7,Egrave:t7,Euml:n7,GT:r7,Iacute:o7,Icirc:a7,Igrave:s7,Iuml:l7,LT:i7,Ntilde:c7,Oacute:d7,Ocirc:u7,Ograve:p7,Oslash:h7,Otilde:m7,Ouml:f7,QUOT:x7,REG:g7,THORN:v7,Uacute:b7,Ucirc:j7,Ugrave:y7,Uuml:S7,Yacute:C7,aacute:w7,acirc:_7,acute:T7,aelig:k7,agrave:E7,amp:N7,aring:R7,atilde:O7,auml:D7,brvbar:L7,ccedil:B7,cedil:$7,cent:A7,copy:M7,curren:P7,deg:I7,divide:z7,eacute:F7,ecirc:U7,egrave:V7,eth:H7,euml:W7,frac12:Z7,frac14:K7,frac34:Y7,gt:G7,iacute:q7,icirc:X7,iexcl:Q7,igrave:J7,iquest:e9,iuml:t9,laquo:n9,lt:r9,macr:o9,micro:a9,middot:s9,nbsp:l9,not:i9,ntilde:c9,oacute:d9,ocirc:u9,ograve:p9,ordf:h9,ordm:m9,oslash:f9,otilde:x9,ouml:g9,para:v9,plusmn:b9,pound:j9,quot:y9,raquo:S9,reg:C9,sect:w9,shy:_9,sup1:T9,sup2:k9,sup3:E9,szlig:N9,thorn:R9,times:O9,uacute:D9,ucirc:L9,ugrave:B9,uml:$9,uuml:A9,yacute:M9,yen:P9,yuml:I9},F9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var gg=U9;function U9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var V9=H9;function H9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var W9=Z9;function Z9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var K9=W9,Y9=gg,G9=q9;function q9(e){return K9(e)||Y9(e)}var Jl,X9=59,Q9=J9;function J9(e){var t="&"+e+";",n;return Jl=Jl||document.createElement("i"),Jl.innerHTML=t,n=Jl.textContent,n.charCodeAt(n.length-1)===X9&&e!=="semi"||n===t?!1:n}var Sf=z9,Cf=F9,eS=gg,tS=V9,vg=G9,nS=Q9,rS=xS,oS={}.hasOwnProperty,Lo=String.fromCharCode,aS=Function.prototype,wf={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},sS=9,_f=10,lS=12,iS=32,Tf=38,cS=59,dS=60,uS=61,pS=35,hS=88,mS=120,fS=65533,Ao="named",oh="hexadecimal",ah="decimal",sh={};sh[oh]=16;sh[ah]=10;var Rc={};Rc[Ao]=vg;Rc[ah]=eS;Rc[oh]=tS;var bg=1,jg=2,yg=3,Sg=4,Cg=5,Uu=6,wg=7,Mr={};Mr[bg]="Named character references must be terminated by a semicolon";Mr[jg]="Numeric character references must be terminated by a semicolon";Mr[yg]="Named character references cannot be empty";Mr[Sg]="Numeric character references cannot be empty";Mr[Cg]="Named character references must be known";Mr[Uu]="Numeric character references cannot be disallowed";Mr[wg]="Numeric character references cannot be outside the permissible Unicode range";function xS(e,t){var n={},o,a;t||(t={});for(a in wf)o=t[a],n[a]=o??wf[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),gS(e,n)}function gS(e,t){var n=t.additional,o=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],f=e.length,b=0,y=-1,S=u.column||1,_=u.line||1,g="",h=[],m,j,C,x,w,E,N,D,$,Y,q,le,we,je,Q,B,P,I,V;for(typeof n=="string"&&(n=n.charCodeAt(0)),B=W(),D=l?_e:aS,b--,f++;++b<f;)if(w===_f&&(S=p[y]||1),w=e.charCodeAt(b),w===Tf){if(N=e.charCodeAt(b+1),N===sS||N===_f||N===lS||N===iS||N===Tf||N===dS||N!==N||n&&N===n){g+=Lo(w),S++;continue}for(we=b+1,le=we,V=we,N===pS?(V=++le,N=e.charCodeAt(V),N===hS||N===mS?(je=oh,V=++le):je=ah):je=Ao,m="",q="",x="",Q=Rc[je],V--;++V<f&&(N=e.charCodeAt(V),!!Q(N));)x+=Lo(N),je===Ao&&oS.call(Sf,x)&&(m=x,q=Sf[x]);C=e.charCodeAt(V)===cS,C&&(V++,j=je===Ao?nS(x):!1,j&&(m=x,q=j)),I=1+V-we,!C&&!o||(x?je===Ao?(C&&!q?D(Cg,1):(m!==x&&(V=le+m.length,I=1+V-le,C=!1),C||($=m?bg:yg,t.attribute?(N=e.charCodeAt(V),N===uS?(D($,I),q=null):vg(N)?q=null:D($,I)):D($,I))),E=q):(C||D(jg,I),E=parseInt(x,sh[je]),vS(E)?(D(wg,I),E=Lo(fS)):E in Cf?(D(Uu,I),E=Cf[E]):(Y="",bS(E)&&D(Uu,I),E>65535&&(E-=65536,Y+=Lo(E>>>10|55296),E=56320|E&1023),E=Y+Lo(E))):je!==Ao&&D(Sg,I)),E?(ce(),B=W(),b=V-1,S+=V-we+1,h.push(E),P=W(),P.offset++,s&&s.call(c,E,{start:B,end:P},e.slice(we-1,V)),B=P):(x=e.slice(we-1,V),g+=x,S+=x.length,b=V-1)}else w===10&&(_++,y++,S=0),w===w?(g+=Lo(w),S++):ce();return h.join("");function W(){return{line:_,column:S,offset:b+(u.offset||0)}}function _e(Se,ie){var De=W();De.column+=ie,De.offset+=ie,l.call(d,Mr[Se],De,Se)}function ce(){g&&(h.push(g),a&&a.call(i,g,{start:B,end:W()}),g="")}}function vS(e){return e>=55296&&e<=57343||e>1114111}function bS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var _g={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof c?new c(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(m,j){j=j||{};var C,x;switch(i.util.type(m)){case"Object":if(x=i.util.objId(m),j[x])return j[x];C={},j[x]=C;for(var w in m)m.hasOwnProperty(w)&&(C[w]=h(m[w],j));return C;case"Array":return x=i.util.objId(m),j[x]?j[x]:(C=[],j[x]=C,m.forEach(function(E,N){C[N]=h(E,j)}),C);default:return m}},getLanguage:function(h){for(;h;){var m=a.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(a,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var j in m)if(m[j].src==h)return m[j]}return null}},isActive:function(h,m,j){for(var C="no-"+m;h;){var x=h.classList;if(x.contains(m))return!0;if(x.contains(C))return!1;h=h.parentElement}return!!j}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,m){var j=i.util.clone(i.languages[h]);for(var C in m)j[C]=m[C];return j},insertBefore:function(h,m,j,C){C=C||i.languages;var x=C[h],w={};for(var E in x)if(x.hasOwnProperty(E)){if(E==m)for(var N in j)j.hasOwnProperty(N)&&(w[N]=j[N]);j.hasOwnProperty(E)||(w[E]=x[E])}var D=C[h];return C[h]=w,i.languages.DFS(i.languages,function($,Y){Y===D&&$!=h&&(this[$]=w)}),w},DFS:function h(m,j,C,x){x=x||{};var w=i.util.objId;for(var E in m)if(m.hasOwnProperty(E)){j.call(m,E,m[E],C||E);var N=m[E],D=i.util.type(N);D==="Object"&&!x[w(N)]?(x[w(N)]=!0,h(N,j,null,x)):D==="Array"&&!x[w(N)]&&(x[w(N)]=!0,h(N,j,E,x))}}},plugins:{},highlightAll:function(h,m){i.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,j){var C={callback:j,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var x=0,w;w=C.elements[x++];)i.highlightElement(w,m===!0,C.callback)},highlightElement:function(h,m,j){var C=i.util.getLanguage(h),x=i.languages[C];i.util.setLanguage(h,C);var w=h.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,C);var E=h.textContent,N={element:h,language:C,grammar:x,code:E};function D(Y){N.highlightedCode=Y,i.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,i.hooks.run("after-highlight",N),i.hooks.run("complete",N),j&&j.call(N.element)}if(i.hooks.run("before-sanity-check",N),w=N.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!N.code){i.hooks.run("complete",N),j&&j.call(N.element);return}if(i.hooks.run("before-highlight",N),!N.grammar){D(i.util.encode(N.code));return}if(m&&o.Worker){var $=new Worker(i.filename);$.onmessage=function(Y){D(Y.data)},$.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else D(i.highlight(N.code,N.grammar,N.language))},highlight:function(h,m,j){var C={code:h,grammar:m,language:j};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,m){var j=m.rest;if(j){for(var C in j)m[C]=j[C];delete m.rest}var x=new p;return f(x,x.head,h),u(h,x,m,x.head,0),y(x)},hooks:{all:{},add:function(h,m){var j=i.hooks.all;j[h]=j[h]||[],j[h].push(m)},run:function(h,m){var j=i.hooks.all[h];if(!(!j||!j.length))for(var C=0,x;x=j[C++];)x(m)}},Token:c};o.Prism=i;function c(h,m,j,C){this.type=h,this.content=m,this.alias=j,this.length=(C||"").length|0}c.stringify=function h(m,j){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(D){C+=h(D,j)}),C}var x={type:m.type,content:h(m.content,j),tag:"span",classes:["token",m.type],attributes:{},language:j},w=m.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(x.classes,w):x.classes.push(w)),i.hooks.run("wrap",x);var E="";for(var N in x.attributes)E+=" "+N+'="'+(x.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+E+">"+x.content+"</"+x.tag+">"};function d(h,m,j,C){h.lastIndex=m;var x=h.exec(j);if(x&&C&&x[1]){var w=x[1].length;x.index+=w,x[0]=x[0].slice(w)}return x}function u(h,m,j,C,x,w){for(var E in j)if(!(!j.hasOwnProperty(E)||!j[E])){var N=j[E];N=Array.isArray(N)?N:[N];for(var D=0;D<N.length;++D){if(w&&w.cause==E+","+D)return;var $=N[D],Y=$.inside,q=!!$.lookbehind,le=!!$.greedy,we=$.alias;if(le&&!$.pattern.global){var je=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,je+"g")}for(var Q=$.pattern||$,B=C.next,P=x;B!==m.tail&&!(w&&P>=w.reach);P+=B.value.length,B=B.next){var I=B.value;if(m.length>h.length)return;if(!(I instanceof c)){var V=1,W;if(le){if(W=d(Q,P,h,q),!W||W.index>=h.length)break;var ie=W.index,_e=W.index+W[0].length,ce=P;for(ce+=B.value.length;ie>=ce;)B=B.next,ce+=B.value.length;if(ce-=B.value.length,P=ce,B.value instanceof c)continue;for(var Se=B;Se!==m.tail&&(ce<_e||typeof Se.value=="string");Se=Se.next)V++,ce+=Se.value.length;V--,I=h.slice(P,ce),W.index-=P}else if(W=d(Q,0,I,q),!W)continue;var ie=W.index,De=W[0],ct=I.slice(0,ie),_t=I.slice(ie+De.length),fe=P+I.length;w&&fe>w.reach&&(w.reach=fe);var Le=B.prev;ct&&(Le=f(m,Le,ct),P+=ct.length),b(m,Le,V);var et=new c(E,Y?i.tokenize(De,Y):De,we,De);if(B=f(m,Le,et),_t&&f(m,B,_t),V>1){var At={cause:E+","+D,reach:fe};u(h,m,j,B.prev,P,At),w&&At.reach>w.reach&&(w.reach=At.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,j){var C=m.next,x={value:j,prev:m,next:C};return m.next=x,C.prev=x,h.length++,x}function b(h,m,j){for(var C=m.next,x=0;x<j&&C!==h.tail;x++)C=C.next;m.next=C,C.prev=m,h.length-=x}function y(h){for(var m=[],j=h.head.next;j!==h.tail;)m.push(j.value),j=j.next;return m}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(h){var m=JSON.parse(h.data),j=m.language,C=m.code,x=m.immediateClose;o.postMessage(i.highlight(C,i.languages[j],j)),x&&o.close()},!1)),i;var S=i.util.currentScript();S&&(i.filename=S.src,S.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Oi<"u"&&(Oi.Prism=n)})(_g);var jS=_g.exports,yS=lh;lh.displayName="markup";lh.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function lh(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Tg=ih;ih.displayName="css";ih.aliases=[];function ih(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const SS=er(Tg);var CS=ch;ch.displayName="clike";ch.aliases=[];function ch(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var wS=dh;dh.displayName="javascript";dh.aliases=["js"];function dh(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ss=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Oi=="object"?Oi:{},_S=FS();ss.Prism={manual:!0,disableWorkerMessageHandler:!0};var TS=Fy,kS=rS,kg=jS,ES=yS,NS=Tg,RS=CS,OS=wS;_S();var uh={}.hasOwnProperty;function Eg(){}Eg.prototype=kg;var Ge=new Eg,DS=Ge;Ge.highlight=BS;Ge.register=al;Ge.alias=LS;Ge.registered=$S;Ge.listLanguages=AS;al(ES);al(NS);al(RS);al(OS);Ge.util.encode=IS;Ge.Token.stringify=MS;function al(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function LS(e,t){var n=Ge.languages,o=e,a,s,l,i;t&&(o={},o[e]=t);for(a in o)for(s=o[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function BS(e,t){var n=kg.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(uh.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function $S(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return uh.call(Ge.languages,e)}function AS(){var e=Ge.languages,t=[],n;for(n in e)uh.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function MS(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?PS(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),TS(o.tag+"."+o.classes.join("."),zS(o.attributes),o.content))}function PS(e,t){for(var n=[],o=e.length,a=-1,s;++a<o;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,o=n.length;++a<o;)s=n[a],n[a]=Ge.Token.stringify(s,t,n);return n}function IS(e){return e}function zS(e){var t;for(t in e)e[t]=kS(e[t]);return e}function FS(){var e="Prism"in ss,t=e?ss.Prism:void 0;return n;function n(){e?ss.Prism=t:delete ss.Prism,e=void 0,t=void 0}}const ph=er(DS);var hh=Cj(ph,{});hh.registerLanguage=function(e,t){return ph.register(t)};hh.alias=function(e,t){return ph.alias(e,t)};const bo=hh;var US=mh;mh.displayName="bash";mh.aliases=["shell"];function mh(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const VS=er(US);var HS=fh;fh.displayName="json";fh.aliases=["webmanifest"];function fh(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const WS=er(HS);var ZS=xh;xh.displayName="jsx";xh.aliases=[];function xh(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(d,u)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var f=d[p],b=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:i(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:b=!0),(b||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var y=i(f);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(y+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(y=i(d[p-1])+y,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",y,null,y)}f.content&&typeof f.content!="string"&&c(f.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const KS=er(ZS);var YS=gh;gh.displayName="scss";gh.aliases=[];function gh(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const GS=er(YS);var qS=vh;vh.displayName="yaml";vh.aliases=["yml"];function vh(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const XS=er(qS);function Ng(e){return typeof e=="boolean"}function jo(e){return typeof e=="string"}function bh(e){return typeof e=="number"}function Rg(e){return Number.isInteger(e)}function Ca(e){return Array.isArray(e)}function Oc(e){return typeof e=="function"}function QS(e){return e instanceof RegExp}function yo(e){return typeof e=="object"&&!Ca(e)&&!Og(e)}function JS(e){return e===void 0}function Og(e){return e===null}function ge(e){return!(JS(e)||Og(e))}function Dc(e){return!ge(e)}function Dg(...e){throw new Error(e.join(""))}const jh=(e,...t)=>Oc(e)?e(...t):e;function ke(){}const Lg=e=>e;function eC(){return Intl.DateTimeFormat().resolvedOptions().locale}let yh={locale:eC(),currency:"GBP",currencySign:"£",thousands:","};const tC=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*o)};function nC(e,t={}){return new Intl.NumberFormat(t.locale||yh.locale,t).format(e)}function rC(e,t={}){return nC(e,{style:"currency",currency:yh.currency,...t})}function ls(e,t=yh.thousands){if(Dc(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function Bg(e,t=/,\s*|\s+/){return Dc(e)?[]:jo(e)?e.length?e.split(t):[]:Ca(e)?e:[e]}function Ws(e,t=!0,n={}){return yo(e)?e:Bg(e).reduce((o,a)=>(o[a]=Oc(t)?t(a):t,o),n)}function $g(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const oC=$g;function aC(e){if(Oc(e))return e;if(QS(e))return t=>e.test(t);if(yo(e))return t=>!!e[t];if(Ca(e)||jo(e)){const t=Ws(e);return n=>!!t[n]}Dg("Invalid selector() specification: "+e)}const Sh=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=aC(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},kf=(e,t)=>parseInt(e[t]||0),Ef=(e,t)=>parseFloat(e[t]||0),Nf=(e,t)=>(e[t]||"").toString(),Rf=e=>(t,n)=>kf(t,e)-kf(n,e),Ed=e=>(t,n)=>Ef(t,e)-Ef(n,e),Of=e=>(t,n)=>{let o=Nf(t,e).toLowerCase(),a=Nf(n,e).toLowerCase();return o>a?1:a>o?-1:0},sC=e=>(t,n)=>e(n,t);function lC(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function Pr(e){return new Promise(t=>setTimeout(t,e))}bo.registerLanguage("jsx",KS);bo.registerLanguage("json",WS);bo.registerLanguage("css",SS);bo.registerLanguage("scss",GS);bo.registerLanguage("bash",VS);bo.registerLanguage("yaml",XS);const Vn=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:a=o,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,f]=v.useState(o),b=()=>{navigator.clipboard.writeText(e),u(!0),Pr(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>f(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:b,children:d?"Copied":"Copy"})]}),r.jsx(bo,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:iC(e,{undent:c})})]})},iC=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},ne=({Component:e,code:t,html:n,children:o,className:a="",language:s,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[r.jsx("div",{className:"source",children:r.jsx(Vn,{code:t||n,language:n?"html":s,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),ei=v.createContext();function Df(e){return typeof e=="function"}function Lf(e){return typeof e=="object"&&!Ag(e)&&!cC(e)}function Ag(e){return Array.isArray(e)}function cC(e){return e===null}function dC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=Df(n)?n(e):e[n];if(Ag(l)&&(t=l[0],l=l[1]),Df(l)){const i=l(o,a,e);if(G.isValidElement(i))return i;Lf(i)&&Object.assign(s,o,i)}else Lf(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const uC=e=>({Context:ei,Provider:({children:t,...n})=>r.jsx(ei.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ei.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>G.forwardRef((o,a)=>r.jsx(ei.Consumer,{children:s=>r.jsx(dC,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),Mg=uC(),J=Mg.Component,pC="svg",Vu="-",Pg="fill",hC="path",mC="line",fC="rect",xC="array",gC="circle",vC="ellipse",bC="polygon",jC="polyline",Ch=/-(?!\d)/,Bf="currentColor",wh=512,_h=512,sl={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function yC(e,t,n=sl){n.icons[e]=t}function SC(e,t=sl){Object.entries(e).forEach(([n,o])=>yC(n,o,t))}const ti=v.createContext();function $f(e){return typeof e=="function"}function Af(e){return typeof e=="object"&&!Ig(e)&&!CC(e)}function Ig(e){return Array.isArray(e)}function CC(e){return e===null}function wC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=$f(n)?n(e):e[n];if(Ig(l)&&(t=l[0],l=l[1]),$f(l)){const i=l(o,a,e);if(G.isValidElement(i))return i;Af(i)&&Object.assign(s,o,i)}else Af(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const _C=e=>({Context:ti,Provider:({children:t,...n})=>r.jsx(ti.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ti.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>G.forwardRef((o,a)=>r.jsx(ti.Consumer,{children:s=>r.jsx(wC,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),TC=_C(),kC=TC.Component;function nr(e){return typeof e=="string"}function ll(e){return Array.isArray(e)}function Lc(e){return typeof e=="object"&&!ll(e)&&!Fg(e)}function zg(e){return e===void 0}function Fg(e){return e===null}function Bc(e){return!(zg(e)||Fg(e))}function Ug(e){return!Bc(e)}function Qn(...e){throw new Error(e.join(""))}function EC(){return Intl.DateTimeFormat().resolvedOptions().locale}EC();function Hu(e,t=/,\s*|\s+/){return Ug(e)?[]:nr(e)?e.length?e.split(t):[]:ll(e)?e:[e]}const NC=(e,t)=>{const n=e[t];return delete e[t],n};function il(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,a]=n.split(/\s*[:=]\s*/);return t[o]=zg(a)?!0:a,t},{})}const Th=e=>e.filter(Bc).join(" "),RC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),OC=(...e)=>Th(e.flatMap(t=>Lc(t)?RC(t):t)),DC=e=>Hu(e,/\s+/),Vg={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Rr={flip:(e,t)=>{nr(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Rr.flop=Rr.flipy;Rr["flip-x"]=Rr.flipx;Rr["flip-y"]=Rr.flipy;function Hg(e,t={...Vg}){const n=nr(e)?il(e):e||{};return Object.entries(n).reduce((o,[a,s])=>{const l=a.toLowerCase();return(Rr[l]||Qn(`Invalid transform: ${l}`))(o,s),o},t)}const LC=4.42,Pn=e=>`${LC*e}%`,BC={},Wu={outline:{fill:"none",stroke:"currentColor",strokeWidth:Pn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Pn(.5)},thinner:{strokeWidth:Pn(1)},thin:{strokeWidth:Pn(1.5)},medium:{strokeWidth:Pn(2)},thick:{strokeWidth:Pn(2.5)},thicker:{strokeWidth:Pn(3)},thickest:{strokeWidth:Pn(3.5)}};Wu.line=Wu.outline;const $C={...Object.entries(Wu).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?Bf:t,stroke:(e,t)=>e.stroke=t===!0?Bf:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Pn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function nc(e,t){return(nr(t)?t.split(Ch):t).forEach(n=>{const[o,a=!0]=n.split(/[:=]/),s=o.toLowerCase(),l=$C[s];if(l){l(e.style||(e.style={...BC}),a);return}(Rr[s]||Qn(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...Vg}),a)})}const AC={width:wh,height:_h,type:Pg},Wg={svg:e=>({element:pC,svg:e}),array:e=>({element:xC,items:e}),path:e=>({element:hC,d:e}),polygon:e=>({element:bC,points:e}),polyline:e=>({element:jC,points:e}),circle:e=>({element:gC,...ni(e,"cx cy r")}),ellipse:e=>({element:vC,...ni(e,"cx cy rx ry")}),line:e=>({element:mC,...ni(e,"x1 y1 x2 y2")}),rect:e=>({element:fC,...ni(e,"x y width height rx ry")})};function ni(e,t){const n=ll(t)?[...t]:Hu(t);return Hu(e).reduce((o,a)=>{if(n.length){const s=n.shift();o[s]=a}return o},{})}const Zg=e=>{const[t,n=""]=e.split("?"),[o,...a]=t.split(/\.(?!\d)/),s=o.split(Ch).filter(i=>i.length),l=il(n);return{dashes:s,classes:a,style:l}},MC=(e,t)=>{const n=Zg(e),{dashes:o}=n;for(let a=o.length;a>0;a--){const s=o.slice(0,a).join(Vu);if(t[s]){n.name=o.splice(0,a).join(Vu);break}}return n},Mf=(e,t,n={})=>{const{icons:o}=t,a=MC(e,o),{name:s,classes:l,style:i,dashes:c}=a;Ug(s)&&Qn(`No icon found matching any leading subset of ${a.dashes.join(Vu)}`);const d=t.icons[s]||Qn(`Icon not found in data: ${s}`),u=Kg(d,t,{...n,name:s});if((l.length||n.className)&&(u.className=Th([...l||[],n.className])),u.transform&&(u.transform=Hg(u.transform)),u.style&&(u.style=nr(u.style)?il(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};nc(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&nc(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function PC(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const Kg=(e,t,n={})=>{const{defaults:o={}}=t,a={...AC,...o,...n};return Yg(a,e,t)},Yg=(e,t,n)=>{if(nr(t))return IC(e,t);if(Lc(t))return zC(e,t,n);if(ll(t))return FC(e,t,n);Qn(`Cannot parse icon data: ${t}`)};function IC(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,a]=n,{dashes:s,classes:l}=Zg(o),i=s.shift(),c=Wg[i]||Qn(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=Th(l)),s.length&&nc(e.body,s),e}return e.body={element:"path",d:t},e}function zC(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const a=NC(o,"data");return Yg(e,a,n),Object.assign(e,o),e}for(let a of Object.entries(Wg)){const[s,l]=a,i=o[s];if(Bc(i))return e.body=l(i),delete o[s],Object.assign(e,o),e}Qn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function FC(e,t,n){return e.body={element:"array",items:t.map(o=>Kg(o,n).body)},e}const UC=({size:e,...t})=>{t.width??(t.width=e||wh),t.height??(t.height=e||_h),t.path&&Object.assign(t,PC(t.path));let n;return t.style&&(nr(t.style)?(n=il(t.style),t.style={}):n={...t.style}),nc(t,t.type?t.type.split(Ch).filter(o=>o.length):Pg),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=Hg(t.transform)),t},kh=e=>Lc(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=o,t),{}):e,VC=e=>Bc(e)?kh(il(e)):null,rr=({style:e,class:t,...n})=>({style:nr(e)?VC(e):kh(e),className:t,...n}),HC=e=>r.jsx("circle",{...rr(e)}),WC=e=>r.jsx("ellipse",{...rr(e)}),ZC=e=>r.jsx("line",{...rr(e)}),Gg=e=>r.jsx("path",{...rr(e)}),KC=e=>r.jsx("polygon",{...rr(e)}),YC=e=>r.jsx("polyline",{...rr(e)}),GC=e=>r.jsx("rect",{...rr(e)}),qC=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...rr(t)}),XC=({items:e,...t})=>r.jsx("g",{...rr(t),children:e.map((n,o)=>r.jsx(rc,{body:n},o))}),QC={array:XC,circle:HC,ellipse:WC,line:ZC,path:Gg,polygon:KC,polyline:YC,rect:GC,svg:qC},rc=({path:e,body:t,...n})=>{if(e)return r.jsx(Gg,{d:e,...n});if(nr(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Lc(t)){const{element:o,...a}=t,s=QC[o]||Qn(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(s,{...a})}if(ll(t))return t.map((o,a)=>r.jsx(rc,{body:o},a));Qn(`Don't know how to handle body: ${t}`)};function JC({width:e,height:t,transform:n,children:o}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${a} ${s})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${a} -${s})`,children:o})})})}const Nd=({onClick:e,minx:t=0,miny:n=0,width:o=wh,height:a=_h,style:s,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${a}`,className:`${i} icon`,style:kh(s),onClick:e,children:[!!c&&console.log("style: ",s),l?r.jsx(JC,{width:o,height:a,transform:l,children:r.jsx(rc,{...d})}):r.jsx(rc,{...d})]}),ew=({name:e,iconsClass:t="icons",library:n=sl,...o})=>{if(!e)return r.jsx(Nd,{...UC(o)});const a=DC(e);return a.length===1?r.jsx(Nd,{...o,...Mf(e,n,o)}):r.jsx("div",{className:OC(t,o.className),children:a.map(s=>r.jsx(Nd,{...o,...Mf(s,n,o)},s))})},Ei=kC(ew,"Icon"),tw=e=>e.filter(ge).join(" "),nw=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),he=(...e)=>tw(e.flatMap(t=>yo(t)?nw(t):t)),Eh=e=>{if(!e)return null;const[t,n,o,a,s]=e.split("-");return he(t,aw(n),sw(o),lw(a),iw(s))},rw=({className:e,size:t,color:n,...o})=>({...o,className:he(e,t,Eh(n))}),ow=({className:e,size:t,color:n,border:o,radius:a,shadow:s,pad:l,mar:i,padding:c=l,margin:d=i,...u})=>({...u,className:he(e,t,Eh(n),So(o),_a(a),wa(s),qg(c),Xg(d))}),So=e=>Qg(e,"border",t=>`border bdw-${t}`),wa=e=>Qg(e,"shadow-1",t=>`shadow-${t}`),qg=e=>Jg(e,"pad"),Xg=e=>Jg(e,"mar"),_a=e=>cl(e,t=>`bdr-${t}`),aw=e=>cl(e,t=>`fgc-${t}`),sw=e=>cl(e,t=>`bgc-${t}`),lw=e=>cl(e,t=>`fgd-${t}`),iw=e=>cl(e,t=>`bgd-${t}`),cl=(e,t)=>Rg(parseInt(e))?jh(t,e):null,cw=(e,t,n)=>e===!0?t:ge(e)?jh(n,e):null,Qg=(e,t,n)=>e===!0?t:parseInt(e)?jh(n,e):null,Jg=(e,t)=>cw(e,t,n=>dw(t,Bg(n))),dw=(e,t)=>t.length===2?Pf(e,["v","h"],t):t.length===4?Pf(e,["t","r","b","l"],t):t.map(n=>`${e}-${n}`).join(" "),Pf=(e,t,n)=>n.map((o,a)=>`${e}-${t[a]}-${o}`).join(" "),te=e=>r.jsx(Ei,{...rw(e)});function If(e,t,n={}){return ge(t)&&(n[e]=Rg(t)?`${t}deg`:t),Object.keys(n).length?n:null}const uw=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Ei,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Ei,{name:n,className:o,style:If("--icon-rotate",a),fixedWidth:!0}),c||d,!!s&&r.jsx(Ei,{name:s,className:l,style:If("--icon-rotate",i),fixedWidth:!0})]}),Co=J(uw,"WithIcons");SC({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const pw=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(te,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(te,{name:o?a:s,fixedWidth:!0,className:"reveal"})]}),e3=J(pw,"AlertControls"),hw=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:a,Controls:s=e3})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(te,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(s,{...a})]}),mw=J(hw,"AlertHeadline"),fw=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),t3=J(fw,"AlertContent"),xw=({icon:e,Content:t=t3,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(te,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),gw=J(xw,"AlertIcon"),n3=e=>jo(e)||bh(e)||Ng(e),dl=e=>n3(e)||!e.separator&&!e.heading&&!e.disabled,vw=e=>n3(e)?e:e.value??e.id,bw=(e,t,n=vw)=>{if(Dc(t))return[];const o=e.findIndex(a=>t===n(a));return o>=0?[e[o],o]:[]},jw=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{const a=yo(o),s=a?o.search??o.text??o.label??o.name??o.value:o;if(a&&o.fixed)return!0;if(ge(s)){const l=s.toString().toLowerCase();return n.every(i=>l.indexOf(i)>=0)}return!1})};function yw(e,t=dl){const n=e.findIndex(t);return n<0?null:n}function Sw(e,t=dl){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function Cw(e,t,n=dl){for(let o=1;o<=e.length;o++){const a=(t+o)%e.length;if(n(e[a]))return a}return null}function ww(e,t,n=dl){for(let o=1;o<=e.length;o++){const a=(t+e.length-o)%e.length;if(n(e[a]))return a}return null}const ys="",Nh="ArrowDown",Rh="ArrowUp",_w="Tab",$c="Enter",Oh=" ",Ac="Escape",Tw="Backspace",oc=e=>{const t=`HINT: define ${e}() to render this value`;return n=>jo(n)||bh(n)?n:yo(n)?n.text??n.label??n.name??t:t},kw=e=>jo(e)||bh(e)?e:r.jsx(Co,{...e}),r3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):o>s&&e.scrollTo({top:a+(o-s)})};function Ew(){let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}}const ri=typeof window<"u"&&window.localStorage||Ew(),oi=(e,t)=>[e,t].join("-");function o3(e){return{get:(t,n)=>{const o=ri.getItem(oi(e,t));return ge(o)?JSON.parse(o):ge(n)?(ri.setItem(oi(e,t),JSON.stringify(n)),n):null},set:(t,n)=>ri.setItem(oi(e,t),JSON.stringify(n)),delete:t=>ri.removeItem(oi(e,t))}}const or=({title:e,headline:t,headIcon:n,type:o,size:a,color:s,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:f,onDismiss:b,icon:y,dismissable:S=!1,revealable:_=!1,revealed:g=!1,openIcon:h,closedIcon:m,dismissIcon:j,Headline:C=mw,Controls:x=e3,Content:w=t3,Icon:E=gw})=>{const[N,D]=v.useState(_?g:!0),[$,Y]=v.useState(!1),q=he("alert",o,a,s,u,{revealable:_,dismissable:S,stripe:l},N?"revealed":null,wa(d),So(i),_a(c)),le=()=>D(I=>!I),je={dismissable:S,revealable:_,isRevealed:N,dismiss:()=>{Y(!0),b&&b()},openIcon:h,closedIcon:m,dismissIcon:j},Q={title:e,text:p,children:f},B={...Q,icon:y,Content:w},P={headline:t,headIcon:n,toggle:le,revealable:_,controlProps:je,Controls:x};return $?null:r.jsxs("div",{className:q,children:[!!t&&r.jsx(C,{...P}),N&&(y?r.jsx(E,{...B}):r.jsx(w,{...Q}))]})},is=J(e=>r.jsx(or,{...e,type:"info"}),"Info"),Qo=J(e=>r.jsx(or,{...e,type:"success"}),"Success"),cs=J(e=>r.jsx(or,{...e,type:"warning"}),"Warning"),ds=J(e=>r.jsx(or,{...e,type:"error"}),"Error");or.Info=is;or.Success=Qo;or.Warning=cs;or.Error=ds;const ee=J(or,"Alert"),Nw=({size:e,color:t,className:n,tag:o,shadow:a,border:s,radius:l,tooltip:i,icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,label:y,text:S,children:_,Content:g=Co,...h})=>{const m=he("badge",e,t,n,{tag:o,icon:c},wa(a),So(s),_a(l)),j={icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:f,iconRightClass:b,text:S,children:_};return r.jsx("div",{className:m,"data-tooltip":i,"aria-label":y,...h,children:r.jsx(g,{...j})})},ae=J(Nw,"Badge"),Rw=({type:e="button",size:t,color:n,className:o,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:f,label:b,tooltip:y,tabIndex:S=0,icon:_,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:j,iconRightClass:C,text:x,children:w,Content:E=Co,...N})=>{const D=he(t,n,o,{bright:s,dark:l,outline:i,bare:c,shaded:d,icon:_},wa(u),So(p),_a(f)),$={icon:_,iconClass:g,iconLeft:h,iconLeftClass:m,iconRight:j,iconRightClass:C,text:x,children:w};return r.jsx("button",{className:D,"aria-label":b,tabIndex:S,type:e,disabled:a,"aria-disabled":a,"data-tooltip":y,...N,children:r.jsx(E,{...$})})},L=J(Rw,"Button"),Ow=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:a=L,...s})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(a,{className:o,...s,...l},i)):t}),wo=J(Ow,"Buttons"),Dw=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:he(e,{disabled:t}),ref:o,children:n}),Lw=J(Dw,"CheckboxLabel"),Bw=({disabled:e=!1,tabIndex:t=0,onChange:n=ke,ref:o,...a})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),$w=J(Bw,"CheckboxInput"),Aw=({size:e,color:t,border:n,inline:o,className:a="checkbox",text:s,ref:l,inputRef:i,checked:c,checkedText:d=s,uncheckedText:u=s,inputClass:p,Label:f=Lw,Input:b=$w,...y})=>r.jsxs(f,{className:he(e,t,a,So(n),{inline:o}),ref:l,checked:c,...y,children:[r.jsx(b,{className:p,ref:i,checked:c,...y}),c?d:u]}),$n=J(Aw,"Checkbox"),Mw=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},Pw=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:a}=Mw({checked:e}),s=l=>{a(l),t&&t(l)};return r.jsx($n,{checked:o,onChange:s,...n})},Ir=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},Iw=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:f,className:b=f,buttonClass:y,onClick:S=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:g,hide:h,show:m}=Ir({visible:t}),C={iconRight:n,text:o,color:a,className:s,...u,onClick:w=>{w.preventDefault(),h(),S()}},x={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:h};return r.jsx(wo,{className:b,buttonClass:y,buttons:g?[x,C]:[{..._,onClick:m}]})},An=J(Iw,"Confirm");var zw=Object.defineProperty,Fw=(e,t,n)=>t in e?zw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rd=(e,t,n)=>(Fw(e,typeof t!="symbol"?t+"":t,n),n);const zr=(e,t={})=>{const n=G.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Use:()=>G.useContext(n)}};function Uw(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function Vw(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||Ww(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function Hw(e,t){const n=e.debug??t.debug,o=zf(e.debugPrefix??t.debugPrefix,e),a=zf(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function zf(e,t){return typeof e=="function"?e(t):e}function Ww(...e){throw new Error(e.join(""))}class Ss extends G.Component{constructor(t){super(t);const n=this.constructor;this.debug=Hw(t,n),this.state=Uw(n.initialState,n.initialProps,t),this.actions=Vw(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Rd(Ss,"initialState",{}),Rd(Ss,"initialProps",{}),Rd(Ss,"actions",[]);const Od=e=>{jo(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=$g(t)),e.id||(e.id=t),e},Zw=e=>{if(jo(e))return Ws(e,Od);if(Ca(e))return e.reduce((t,n)=>{const o=Od(n);return t[o.field]=o,t},{});if(yo(e))return Object.entries(e).reduce((t,[n,o])=>{const a=Od({...o,field:n});return t[a.field]=a,t},{});Dg("Invalid columns definition")},Kw=e=>Object.keys(e).filter(t=>!e[t].hidden),Yw=({value:e,search:t})=>ge(e)?e.toString()===t.toString():!1,Ya=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(ge(e)){const o=e.toString().toLowerCase();return n.every(a=>o.indexOf(a)>-1)}else return!1},Gw=({value:e,search:t})=>ge(e)?parseInt(e)===parseInt(t):!1,qw=({value:e,search:t})=>ge(e)?parseFloat(e)===parseFloat(t):!1,Xw=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},Ff={string:Ya,text:Ya,number:Ya,price:Ya,pounds:Ya,select:Yw,boolean:Xw,integer:Gw,float:qw},Qw=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(a=>o.every(s=>{const l=n[s],i=t[s],c=i.field||s,d=a[c],u=i.filterType||i.type,p=i.filter||Ff[u]||Ff.text;return ge(l)&&l.length?p({row:a,field:c,value:d,search:l}):!0}))},Jw=(e,t=1,n=e.length)=>{const o=e.length,a=Math.ceil(o/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},Uf={string:Of,text:Of,number:Ed,price:Ed,currency:Ed,integer:Rf,id:Rf},e_=(e,t,n,o)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=Oc(s)?s:(Uf[l]||Uf.text)(n);return e.sort(o?sC(i):i)},t_=({storageKey:e,columns:t,...n})=>{const o={pageNo:n.pageNo??1,pageSize:n.pageSize??10,sortColumn:n.sortColumn??null,sortReverse:n.sortReverse??null,columnOrder:Object.keys(t),visibleColumns:Kw(t)},a=e&&o3(e),[s,l]=v.useState(a?a.get("state",o):o),i=y=>l(S=>{const _={...S,...y};return a&&a.set("state",_),_});return{...s,setPageNo:y=>i({pageNo:y}),setPageSize:y=>i({pageSize:y}),setSortColumn:y=>i({sortColumn:y}),setSortReverse:y=>i({sortReverse:y}),setColumnOrder:y=>i({columnOrder:y}),setVisibleColumns:y=>i({visibleColumns:y})}},n_=({render:e,rows:t=[],...n})=>{const o=v.useMemo(()=>Zw(n.columns),[n.columns]),a=t_({...n,columns:o}),[s,l]=v.useState(!1),[i,c]=v.useState({}),[d,u]=v.useState(!1),p=()=>u(!0),f=()=>u(!1),b=m=>{a.sortColumn===m?a.setSortReverse(!a.sortReverse):(a.setSortColumn(m),a.setSortReverse(!1))},y=m=>{m.preventDefault(),m.stopPropagation(),l(j=>!j)},S=(m,j)=>{c(C=>{const x={...C};return ge(j)&&j.length?x[m]=j:delete x[m],x}),a.setPageNo(1)},_=m=>{const j=Ws(a.visibleColumns);a.setVisibleColumns(j[m]?a.visibleColumns.filter(C=>C!==m):Object.keys(o).filter(C=>C===m||j[C]))},g=m=>{let j=[],C=[];const x=Ws(a.visibleColumns);m.forEach(w=>{j.push(w),x[w]&&C.push(w)}),a.setVisibleColumns(C),a.setColumnOrder(j)},h=v.useMemo(()=>Jw(e_(Qw(t,o,i),o,a.sortColumn,a.sortReverse),a.pageNo,a.pageSize),[t,o,i,a.sortColumn,a.sortReverse,a.pageNo,a.pageSize]);return e({...n,rows:t,columns:o,page:h,showFilters:s,toggleFilters:y,filters:i,setFilter:S,toggleSortColumn:b,controlsVisible:d,showControls:p,hideControls:f,toggleVisibleColumn:_,changeColumnOrder:g,...a})},ft=zr(n_),r_=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(L,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(L,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${ls(e.total)} rows`:`rows ${ls(e.from)}-${ls(e.to)} of ${ls(e.total)}`," "]})]}),o_=ft.Consumer(r_);var Fn;let a3=(Fn=class extends Ss{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),Pr(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case $c:case Oh:this.state.isOpen?this.close():this.open();break;case Ac:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},ve(Fn,"debug",!1),ve(Fn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:ke,onUnload:ke,onFocus:ke,onBlur:ke,onClick:ke,onOpen:ke,onClose:ke}),ve(Fn,"inactiveState",{isOpen:!1}),ve(Fn,"initialState",{...Fn.inactiveState}),Fn);const Jr=class Jr extends a3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Nh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Rh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case $c:case Oh:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Ac:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return yw(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return Sw(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return Cw(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return ww(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&ge(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){r3(this._menuRef,t)}};ve(Jr,"debug",!1),ve(Jr,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:ke,onUnload:ke,onFocus:ke,onBlur:ke,onClick:ke,onOpen:ke,onClose:ke,onSelect:ke,closeOnSelect:!0}),ve(Jr,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),ve(Jr,"initialState",{...Jr.inactiveState});let ac=Jr;var _n;let a_=(_n=class extends ac{},ve(_n,"debug",!1),ve(_n,"debugPrefix","Dropdown > "),ve(_n,"debugColor","MediumVioletRed"),ve(_n,"defaultProps",{..._n.defaultProps,options:[],displayOption:kw}),ve(_n,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),_n);const ul=zr(a_),s_=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(Co,{...Sh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),l_=ul.Consumer(s_),i_=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:he(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),c_=ul.Consumer(i_),d_=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:he(t,e.className)}),u_=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:he(n,t,e.className),children:e.heading}),p_=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=c_,Separator:u=d_,Heading:p=u_})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((f,b)=>f.separator?r.jsx(u,{option:f},b):f.heading?r.jsx(p,{option:f},b):r.jsx(d,{option:f,active:ge(o)&&e[o]===f,selected:a===f,onClick:()=>s(f),onMouseEnter:()=>l(b)},f.id??f.value??b))}),h_=ul.Consumer(p_),m_=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=l_,Options:c=h_})=>r.jsxs("div",{className:he(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),f_=ul.Consumer(m_),x_=({Content:e=f_,...t})=>r.jsx(ul.Provider,{...t,children:r.jsx(e,{})}),Fr=J(x_,"DropdownMenu"),g_=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Fr,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),v_=ft.Consumer(g_);class us extends a3{}ve(us,"debug",!1),ve(us,"debugPrefix","Dropdown > "),ve(us,"debugColor","MediumVioletRed"),ve(us,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const pl=zr(us),b_=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(Co,{...Sh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),j_=pl.Consumer(b_),y_=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),S_=pl.Consumer(y_),C_=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=j_,Body:c=S_})=>r.jsxs("div",{className:he(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),w_=pl.Consumer(C_),__=({Content:e=w_,content:t,children:n,...o})=>r.jsx(pl.Provider,{content:t||n,...o,children:r.jsx(e,{})}),bn=J(__,"Dropdown"),T_=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:a,isVisible:s,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx($n,{className:"fluid flex middle no-focus",checked:s[e.id]||!1,onChange:()=>a(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(te,{name:"drag",className:"drag-handle"})})]}),k_=({close:e})=>r.jsx(L,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),E_=pl.Consumer(k_);function N_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(a=>a(o))},t)}const Mc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ta(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Dh(e){return"nodeType"in e}function Ct(e){var t,n;return e?Ta(e)?e:Dh(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Lh(e){const{Document:t}=Ct(e);return e instanceof t}function hl(e){return Ta(e)?!1:e instanceof Ct(e).HTMLElement}function s3(e){return e instanceof Ct(e).SVGElement}function ka(e){return e?Ta(e)?e.document:Dh(e)?Lh(e)?e:hl(e)||s3(e)?e.ownerDocument:document:document:document}const tn=Mc?v.useLayoutEffect:v.useEffect;function Pc(e){const t=v.useRef(e);return tn(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t.current==null?void 0:t.current(...o)},[])}function R_(){const e=v.useRef(null),t=v.useCallback((o,a)=>{e.current=setInterval(o,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Zs(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return tn(()=>{n.current!==e&&(n.current=e)},t),n}function ml(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function sc(e){const t=Pc(e),n=v.useRef(null),o=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,o]}function lc(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Dd={};function fl(e,t){return v.useMemo(()=>{if(t)return t;const n=Dd[e]==null?0:Dd[e]+1;return Dd[e]=n,e+"-"+n},[e,t])}function l3(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return o.reduce((s,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=s[c];u!=null&&(s[c]=u+e*d)}return s},{...t})}}const ia=l3(1),Ks=l3(-1);function O_(e){return"clientX"in e&&"clientY"in e}function Ic(e){if(!e)return!1;const{KeyboardEvent:t}=Ct(e.target);return t&&e instanceof t}function D_(e){if(!e)return!1;const{TouchEvent:t}=Ct(e.target);return t&&e instanceof t}function ic(e){if(D_(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return O_(e)?{x:e.clientX,y:e.clientY}:null}const Or=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Or.Translate.toString(e),Or.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),Vf="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function L_(e){return e.matches(Vf)?e:e.querySelector(Vf)}const B_={display:"none"};function $_(e){let{id:t,value:n}=e;return G.createElement("div",{id:t,style:B_},n)}function A_(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return G.createElement("div",{id:t,style:a,role:"status","aria-live":o,"aria-atomic":!0},n)}function M_(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const i3=v.createContext(null);function P_(e){const t=v.useContext(i3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function I_(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:a,event:s}=o;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const z_={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},F_={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function U_(e){let{announcements:t=F_,container:n,hiddenTextDescribedById:o,screenReaderInstructions:a=z_}=e;const{announce:s,announcement:l}=M_(),i=fl("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),P_(v.useMemo(()=>({onDragStart(p){let{active:f}=p;s(t.onDragStart({active:f}))},onDragMove(p){let{active:f,over:b}=p;t.onDragMove&&s(t.onDragMove({active:f,over:b}))},onDragOver(p){let{active:f,over:b}=p;s(t.onDragOver({active:f,over:b}))},onDragEnd(p){let{active:f,over:b}=p;s(t.onDragEnd({active:f,over:b}))},onDragCancel(p){let{active:f,over:b}=p;s(t.onDragCancel({active:f,over:b}))}}),[s,t])),!c)return null;const u=G.createElement(G.Fragment,null,G.createElement($_,{id:o,value:a.draggable}),G.createElement(A_,{id:i,announcement:l}));return n?Un.createPortal(u,n):u}var Xe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Xe||(Xe={}));function cc(){}function Hf(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function V_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const vn=Object.freeze({x:0,y:0});function c3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function H_(e,t){const n=ic(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function d3(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function W_(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function Wf(e){let{left:t,top:n,height:o,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+o},{x:t+a,y:n+o}]}function u3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Zf(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const Z_=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Zf(t,t.left,t.top),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=c3(Zf(c),a);s.push({id:i,data:{droppableContainer:l,value:d}})}}return s.sort(d3)},K_=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Wf(t),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=Wf(c),u=a.reduce((f,b,y)=>f+c3(d[y],b),0),p=Number((u/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(d3)};function Y_(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-o,i=s-n;if(o<a&&n<s){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const G_=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=[];for(const s of o){const{id:l}=s,i=n.get(l);if(i){const c=Y_(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(W_)};function q_(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function p3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:vn}function X_(e){return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const Q_=X_(1);function h3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function J_(e,t,n){const o=h3(t);if(!o)return e;const{scaleX:a,scaleY:s,x:l,y:i}=o,c=e.left-l-(1-a)*parseFloat(n),d=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const eT={ignoreTransform:!1};function Ea(e,t){t===void 0&&(t=eT);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=Ct(e).getComputedStyle(e);d&&(n=J_(n,d,u))}const{top:o,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:o,left:a,width:s,height:l,bottom:i,right:c}}function Kf(e){return Ea(e,{ignoreTransform:!0})}function tT(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function nT(e,t){return t===void 0&&(t=Ct(e).getComputedStyle(e)),t.position==="fixed"}function rT(e,t){t===void 0&&(t=Ct(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function zc(e,t){const n=[];function o(a){if(t!=null&&n.length>=t||!a)return n;if(Lh(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!hl(a)||s3(a)||n.includes(a))return n;const s=Ct(e).getComputedStyle(a);return a!==e&&rT(a,s)&&n.push(a),nT(a,s)?n:o(a.parentNode)}return e?o(e):n}function m3(e){const[t]=zc(e,1);return t??null}function Ld(e){return!Mc||!e?null:Ta(e)?e:Dh(e)?Lh(e)||e===ka(e).scrollingElement?window:hl(e)?e:null:null}function f3(e){return Ta(e)?e.scrollX:e.scrollLeft}function x3(e){return Ta(e)?e.scrollY:e.scrollTop}function Zu(e){return{x:f3(e),y:x3(e)}}var rt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(rt||(rt={}));function g3(e){return!Mc||!e?!1:e===document.scrollingElement}function v3(e){const t={x:0,y:0},n=g3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const oT={x:.2,y:.2};function aT(e,t,n,o,a){let{top:s,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),a===void 0&&(a=oT);const{isTop:d,isBottom:u,isLeft:p,isRight:f}=v3(e),b={x:0,y:0},y={x:0,y:0},S={height:t.height*a.y,width:t.width*a.x};return!d&&s<=t.top+S.height?(b.y=rt.Backward,y.y=o*Math.abs((t.top+S.height-s)/S.height)):!u&&c>=t.bottom-S.height&&(b.y=rt.Forward,y.y=o*Math.abs((t.bottom-S.height-c)/S.height)),!f&&i>=t.right-S.width?(b.x=rt.Forward,y.x=o*Math.abs((t.right-S.width-i)/S.width)):!p&&l<=t.left+S.width&&(b.x=rt.Backward,y.x=o*Math.abs((t.left+S.width-l)/S.width)),{direction:b,speed:y}}function sT(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:o,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:a,width:e.clientWidth,height:e.clientHeight}}function b3(e){return e.reduce((t,n)=>ia(t,Zu(n)),vn)}function lT(e){return e.reduce((t,n)=>t+f3(n),0)}function iT(e){return e.reduce((t,n)=>t+x3(n),0)}function j3(e,t){if(t===void 0&&(t=Ea),!e)return;const{top:n,left:o,bottom:a,right:s}=t(e);m3(e)&&(a<=0||s<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const cT=[["x",["left","right"],lT],["y",["top","bottom"],iT]];class Bh{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=zc(n),a=b3(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of cT)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=a[s]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Cs{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var a;(a=this.target)==null||a.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function dT(e){const{EventTarget:t}=Ct(e);return e instanceof t?e:ka(e)}function Bd(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Kt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Kt||(Kt={}));function Yf(e){e.preventDefault()}function uT(e){e.stopPropagation()}var xe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(xe||(xe={}));const y3={start:[xe.Space,xe.Enter],cancel:[xe.Esc],end:[xe.Space,xe.Enter]},pT=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case xe.Right:return{...n,x:n.x+25};case xe.Left:return{...n,x:n.x-25};case xe.Down:return{...n,y:n.y+25};case xe.Up:return{...n,y:n.y-25}}};class $h{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Cs(ka(n)),this.windowListeners=new Cs(Ct(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Kt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&j3(o),n(vn)}handleKeyDown(t){if(Ic(t)){const{active:n,context:o,options:a}=this.props,{keyboardCodes:s=y3,coordinateGetter:l=pT,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:vn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const f=Ks(p,u),b={x:0,y:0},{scrollableAncestors:y}=o.current;for(const S of y){const _=t.code,{isTop:g,isRight:h,isLeft:m,isBottom:j,maxScroll:C,minScroll:x}=v3(S),w=sT(S),E={x:Math.min(_===xe.Right?w.right-w.width/2:w.right,Math.max(_===xe.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===xe.Down?w.bottom-w.height/2:w.bottom,Math.max(_===xe.Down?w.top:w.top+w.height/2,p.y))},N=_===xe.Right&&!h||_===xe.Left&&!m,D=_===xe.Down&&!j||_===xe.Up&&!g;if(N&&E.x!==p.x){const $=S.scrollLeft+f.x,Y=_===xe.Right&&$<=C.x||_===xe.Left&&$>=x.x;if(Y&&!f.y){S.scrollTo({left:$,behavior:i});return}Y?b.x=S.scrollLeft-$:b.x=_===xe.Right?S.scrollLeft-C.x:S.scrollLeft-x.x,b.x&&S.scrollBy({left:-b.x,behavior:i});break}else if(D&&E.y!==p.y){const $=S.scrollTop+f.y,Y=_===xe.Down&&$<=C.y||_===xe.Up&&$>=x.y;if(Y&&!f.x){S.scrollTo({top:$,behavior:i});return}Y?b.y=S.scrollTop-$:b.y=_===xe.Down?S.scrollTop-C.y:S.scrollTop-x.y,b.y&&S.scrollBy({top:-b.y,behavior:i});break}}this.handleMove(t,ia(Ks(p,this.referenceCoordinates),b))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}$h.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=y3,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function Gf(e){return!!(e&&"distance"in e)}function qf(e){return!!(e&&"delay"in e)}class Ah{constructor(t,n,o){var a;o===void 0&&(o=dT(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=ka(l),this.documentListeners=new Cs(this.document),this.listeners=new Cs(o),this.windowListeners=new Cs(Ct(l)),this.initialCoordinates=(a=ic(s))!=null?a:vn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.DragStart,Yf),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),this.windowListeners.add(Kt.ContextMenu,Yf),this.documentListeners.add(Kt.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(qf(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(Gf(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Kt.Click,uT,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Kt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=ic(t))!=null?n:vn,d=Ks(a,c);if(!o&&i){if(Gf(i)){if(i.tolerance!=null&&Bd(d,i.tolerance))return this.handleCancel();if(Bd(d,i.distance))return this.handleStart()}return qf(i)&&Bd(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===xe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const hT={move:{name:"pointermove"},end:{name:"pointerup"}};class Mh extends Ah{constructor(t){const{event:n}=t,o=ka(n.target);super(t,hT,o)}}Mh.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const mT={move:{name:"mousemove"},end:{name:"mouseup"}};var Ku;(function(e){e[e.RightClick=2]="RightClick"})(Ku||(Ku={}));class fT extends Ah{constructor(t){super(t,mT,ka(t.event.target))}}fT.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===Ku.RightClick?!1:(o==null||o({event:n}),!0)}}];const $d={move:{name:"touchmove"},end:{name:"touchend"}};class xT extends Ah{constructor(t){super(t,$d)}static setup(){return window.addEventListener($d.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener($d.move.name,t)};function t(){}}}xT.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:a}=n;return a.length>1?!1:(o==null||o({event:n}),!0)}}];var ws;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(ws||(ws={}));var dc;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(dc||(dc={}));function gT(e){let{acceleration:t,activator:n=ws.Pointer,canScroll:o,draggingRect:a,enabled:s,interval:l=5,order:i=dc.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:f}=e;const b=bT({delta:p,disabled:!s}),[y,S]=R_(),_=v.useRef({x:0,y:0}),g=v.useRef({x:0,y:0}),h=v.useMemo(()=>{switch(n){case ws.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case ws.DraggableRect:return a}},[n,a,c]),m=v.useRef(null),j=v.useCallback(()=>{const x=m.current;if(!x)return;const w=_.current.x*g.current.x,E=_.current.y*g.current.y;x.scrollBy(w,E)},[]),C=v.useMemo(()=>i===dc.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!s||!d.length||!h){S();return}for(const x of C){if((o==null?void 0:o(x))===!1)continue;const w=d.indexOf(x),E=u[w];if(!E)continue;const{direction:N,speed:D}=aT(x,E,h,t,f);for(const $ of["x","y"])b[$][N[$]]||(D[$]=0,N[$]=0);if(D.x>0||D.y>0){S(),m.current=x,y(j,l),_.current=D,g.current=N;return}}_.current={x:0,y:0},g.current={x:0,y:0},S()},[t,j,o,S,s,l,JSON.stringify(h),JSON.stringify(b),y,d,C,u,JSON.stringify(f)])}const vT={x:{[rt.Backward]:!1,[rt.Forward]:!1},y:{[rt.Backward]:!1,[rt.Forward]:!1}};function bT(e){let{delta:t,disabled:n}=e;const o=lc(t);return ml(a=>{if(n||!o||!a)return vT;const s={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[rt.Backward]:a.x[rt.Backward]||s.x===-1,[rt.Forward]:a.x[rt.Forward]||s.x===1},y:{[rt.Backward]:a.y[rt.Backward]||s.y===-1,[rt.Forward]:a.y[rt.Forward]||s.y===1}}},[n,t,o])}function jT(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return ml(a=>{var s;return t===null?null:(s=o??a)!=null?s:null},[o,t])}function yT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:a}=o,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...s]},[]),[e,t])}var Ys;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ys||(Ys={}));var Yu;(function(e){e.Optimized="optimized"})(Yu||(Yu={}));const Xf=new Map;function ST(e,t){let{dragging:n,dependencies:o,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=a,u=v.useRef(e),p=_(),f=Zs(p),b=v.useCallback(function(g){g===void 0&&(g=[]),!f.current&&l(h=>h===null?g:h.concat(g.filter(m=>!h.includes(m))))},[f]),y=v.useRef(null),S=ml(g=>{if(p&&!n)return Xf;if(!g||g===Xf||u.current!==e||s!=null){const h=new Map;for(let m of e){if(!m)continue;if(s&&s.length>0&&!s.includes(m.id)&&m.rect.current){h.set(m.id,m.rect.current);continue}const j=m.node.current,C=j?new Bh(c(j),j):null;m.rect.current=C,C&&h.set(m.id,C)}return h}return g},[e,s,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||b()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||y.current!==null||(y.current=setTimeout(()=>{b(),y.current=null},i))},[i,p,b,...o]),{droppableRects:S,measureDroppableContainers:b,measuringScheduled:s!=null};function _(){switch(d){case Ys.Always:return!1;case Ys.BeforeDragging:return n;default:return!n}}}function Ph(e,t){return ml(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function CT(e,t){return Ph(e,t)}function wT(e){let{callback:t,disabled:n}=e;const o=Pc(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(o)},[o,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Fc(e){let{callback:t,disabled:n}=e;const o=Pc(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(o)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function _T(e){return new Bh(Ea(e),e)}function Qf(e,t,n){t===void 0&&(t=_T);const[o,a]=v.useReducer(i,null),s=wT({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=Fc({callback:a});return tn(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function TT(e){const t=Ph(e);return p3(e,t)}const Jf=[];function kT(e){const t=v.useRef(e),n=ml(o=>e?o&&o!==Jf&&e&&t.current&&e.parentNode===t.current.parentNode?o:zc(e):Jf,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function ET(e){const[t,n]=v.useState(null),o=v.useRef(e),a=v.useCallback(s=>{const l=Ld(s.target);l&&n(i=>i?(i.set(l,Zu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=o.current;if(e!==s){l(s);const i=e.map(c=>{const d=Ld(c);return d?(d.addEventListener("scroll",a,{passive:!0}),[d,Zu(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const d=Ld(c);d==null||d.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>ia(s,l),vn):b3(e):vn,[e,t])}function e1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==vn;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?Ks(e,n.current):vn}function NT(e){v.useEffect(()=>{if(!Mc)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function RT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:a,handler:s}=o;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function S3(e){return v.useMemo(()=>e?tT(e):null,[e])}const Ad=[];function OT(e,t){t===void 0&&(t=Ea);const[n]=e,o=S3(n?Ct(n):null),[a,s]=v.useReducer(i,Ad),l=Fc({callback:s});return e.length>0&&a===Ad&&s(),tn(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>g3(c)?o:new Bh(t(c),c)):Ad}}function C3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return hl(t)?t:e}function DT(e){let{measure:t}=e;const[n,o]=v.useState(null),a=v.useCallback(d=>{for(const{target:u}of d)if(hl(u)){o(p=>{const f=t(u);return p?{...p,width:f.width,height:f.height}:f});break}},[t]),s=Fc({callback:a}),l=v.useCallback(d=>{const u=C3(d);s==null||s.disconnect(),u&&(s==null||s.observe(u)),o(u?t(u):null)},[t,s]),[i,c]=sc(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const LT=[{sensor:Mh,options:{}},{sensor:$h,options:{}}],BT={current:{}},Ni={draggable:{measure:Kf},droppable:{measure:Kf,strategy:Ys.WhileDragging,frequency:Yu.Optimized},dragOverlay:{measure:Ea}};class _s extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const $T={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new _s,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:cc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ni,measureDroppableContainers:cc,windowRect:null,measuringScheduled:!1},w3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:cc,draggableNodes:new Map,over:null,measureDroppableContainers:cc},xl=v.createContext(w3),_3=v.createContext($T);function AT(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new _s}}}function MT(e,t){switch(t.type){case Xe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Xe.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Xe.DragEnd:case Xe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Xe.RegisterDroppable:{const{element:n}=t,{id:o}=n,a=new _s(e.droppable.containers);return a.set(o,n),{...e,droppable:{...e.droppable,containers:a}}}case Xe.SetDroppableDisabled:{const{id:n,key:o,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const l=new _s(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Xe.UnregisterDroppable:{const{id:n,key:o}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const s=new _s(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function PT(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:a}=v.useContext(xl),s=lc(o),l=lc(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&s&&l!=null){if(!Ic(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=L_(u);if(p){p.focus();break}}})}},[o,t,a,l,s]),null}function T3(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...o}),n):n}function IT(e){return v.useMemo(()=>({draggable:{...Ni.draggable,...e==null?void 0:e.draggable},droppable:{...Ni.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ni.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function zT(e){let{activeNode:t,measure:n,initialRect:o,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;tn(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=p3(u,o);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const f=m3(d);f&&f.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const Uc=v.createContext({...vn,scaleX:1,scaleY:1});var fr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(fr||(fr={}));const FT=v.memo(function(t){var n,o,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=LT,collisionDetection:p=G_,measuring:f,modifiers:b,...y}=t;const S=v.useReducer(MT,void 0,AT),[_,g]=S,[h,m]=I_(),[j,C]=v.useState(fr.Uninitialized),x=j===fr.Initialized,{draggable:{active:w,nodes:E,translate:N},droppable:{containers:D}}=_,$=w?E.get(w):null,Y=v.useRef({initial:null,translated:null}),q=v.useMemo(()=>{var Ke;return w!=null?{id:w,data:(Ke=$==null?void 0:$.data)!=null?Ke:BT,rect:Y}:null},[w,$]),le=v.useRef(null),[we,je]=v.useState(null),[Q,B]=v.useState(null),P=Zs(y,Object.values(y)),I=fl("DndDescribedBy",l),V=v.useMemo(()=>D.getEnabled(),[D]),W=IT(f),{droppableRects:_e,measureDroppableContainers:ce,measuringScheduled:Se}=ST(V,{dragging:x,dependencies:[N.x,N.y],config:W.droppable}),ie=jT(E,w),De=v.useMemo(()=>Q?ic(Q):null,[Q]),ct=qc(),_t=CT(ie,W.draggable.measure);zT({activeNode:w?E.get(w):null,config:ct.layoutShiftCompensation,initialRect:_t,measure:W.draggable.measure});const fe=Qf(ie,W.draggable.measure,_t),Le=Qf(ie?ie.parentElement:null),et=v.useRef({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:_e,draggableNodes:E,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),At=D.getNodeFor((n=et.current.over)==null?void 0:n.id),an=DT({measure:W.dragOverlay.measure}),Tt=(o=an.nodeRef.current)!=null?o:ie,lr=x?(a=an.rect)!=null?a:fe:null,kl=!!(an.nodeRef.current&&an.rect),El=TT(kl?null:fe),Aa=S3(Tt?Ct(Tt):null),jn=kT(x?At??ie:null),yn=OT(jn),Zr=T3(b,{transform:{x:N.x-El.x,y:N.y-El.y,scaleX:1,scaleY:1},activatorEvent:Q,active:q,activeNodeRect:fe,containerNodeRect:Le,draggingNodeRect:lr,over:et.current.over,overlayNodeRect:an.rect,scrollableAncestors:jn,scrollableAncestorRects:yn,windowRect:Aa}),ko=De?ia(De,N):null,sn=ET(jn),Kr=e1(sn),Nl=e1(sn,[fe]),ln=ia(Zr,Kr),ir=lr?Q_(lr,Zr):null,kt=q&&ir?p({active:q,collisionRect:ir,droppableRects:_e,droppableContainers:V,pointerCoordinates:ko}):null,Ma=u3(kt,"id"),[cn,Pa]=v.useState(null),Yc=kl?Zr:ia(Zr,Nl),Rl=q_(Yc,(s=cn==null?void 0:cn.rect)!=null?s:null,fe),Yr=v.useCallback((Ke,xt)=>{let{sensor:T,options:R}=xt;if(le.current==null)return;const O=E.get(le.current);if(!O)return;const M=Ke.nativeEvent,F=new T({active:le.current,activeNode:O,event:M,options:R,context:et,onStart(K){const X=le.current;if(X==null)return;const Z=E.get(X);if(!Z)return;const{onDragStart:de}=P.current,Ae={active:{id:X,data:Z.data,rect:Y}};Un.unstable_batchedUpdates(()=>{de==null||de(Ae),C(fr.Initializing),g({type:Xe.DragStart,initialCoordinates:K,active:X}),h({type:"onDragStart",event:Ae})})},onMove(K){g({type:Xe.DragMove,coordinates:K})},onEnd:oe(Xe.DragEnd),onCancel:oe(Xe.DragCancel)});Un.unstable_batchedUpdates(()=>{je(F),B(Ke.nativeEvent)});function oe(K){return async function(){const{active:Z,collisions:de,over:Ae,scrollAdjustedTranslate:se}=et.current;let ye=null;if(Z&&se){const{cancelDrop:Me}=P.current;ye={activatorEvent:M,active:Z,collisions:de,delta:se,over:Ae},K===Xe.DragEnd&&typeof Me=="function"&&await Promise.resolve(Me(ye))&&(K=Xe.DragCancel)}le.current=null,Un.unstable_batchedUpdates(()=>{g({type:K}),C(fr.Uninitialized),Pa(null),je(null),B(null);const Me=K===Xe.DragEnd?"onDragEnd":"onDragCancel";if(ye){const dt=P.current[Me];dt==null||dt(ye),h({type:Me,event:ye})}})}}},[E]),Ol=v.useCallback((Ke,xt)=>(T,R)=>{const O=T.nativeEvent,M=E.get(R);if(le.current!==null||!M||O.dndKit||O.defaultPrevented)return;const F={active:M};Ke(T,xt.options,F)===!0&&(O.dndKit={capturedBy:xt.sensor},le.current=R,Yr(T,xt))},[E,Yr]),Eo=yT(u,Ol);NT(u),tn(()=>{fe&&j===fr.Initializing&&C(fr.Initialized)},[fe,j]),v.useEffect(()=>{const{onDragMove:Ke}=P.current,{active:xt,activatorEvent:T,collisions:R,over:O}=et.current;if(!xt||!T)return;const M={active:xt,activatorEvent:T,collisions:R,delta:{x:ln.x,y:ln.y},over:O};Un.unstable_batchedUpdates(()=>{Ke==null||Ke(M),h({type:"onDragMove",event:M})})},[ln.x,ln.y]),v.useEffect(()=>{const{active:Ke,activatorEvent:xt,collisions:T,droppableContainers:R,scrollAdjustedTranslate:O}=et.current;if(!Ke||le.current==null||!xt||!O)return;const{onDragOver:M}=P.current,F=R.get(Ma),oe=F&&F.rect.current?{id:F.id,rect:F.rect.current,data:F.data,disabled:F.disabled}:null,K={active:Ke,activatorEvent:xt,collisions:T,delta:{x:O.x,y:O.y},over:oe};Un.unstable_batchedUpdates(()=>{Pa(oe),M==null||M(K),h({type:"onDragOver",event:K})})},[Ma]),tn(()=>{et.current={activatorEvent:Q,active:q,activeNode:ie,collisionRect:ir,collisions:kt,droppableRects:_e,draggableNodes:E,draggingNode:Tt,draggingNodeRect:lr,droppableContainers:D,over:cn,scrollableAncestors:jn,scrollAdjustedTranslate:ln},Y.current={initial:lr,translated:ir}},[q,ie,kt,ir,E,Tt,lr,_e,D,cn,jn,ln]),gT({...ct,delta:N,draggingRect:ir,pointerCoordinates:ko,scrollableAncestors:jn,scrollableAncestorRects:yn});const Gc=v.useMemo(()=>({active:q,activeNode:ie,activeNodeRect:fe,activatorEvent:Q,collisions:kt,containerNodeRect:Le,dragOverlay:an,draggableNodes:E,droppableContainers:D,droppableRects:_e,over:cn,measureDroppableContainers:ce,scrollableAncestors:jn,scrollableAncestorRects:yn,measuringConfiguration:W,measuringScheduled:Se,windowRect:Aa}),[q,ie,fe,Q,kt,Le,an,E,D,_e,cn,ce,jn,yn,W,Se,Aa]),Dl=v.useMemo(()=>({activatorEvent:Q,activators:Eo,active:q,activeNodeRect:fe,ariaDescribedById:{draggable:I},dispatch:g,draggableNodes:E,over:cn,measureDroppableContainers:ce}),[Q,Eo,q,fe,g,I,E,cn,ce]);return G.createElement(i3.Provider,{value:m},G.createElement(xl.Provider,{value:Dl},G.createElement(_3.Provider,{value:Gc},G.createElement(Uc.Provider,{value:Rl},d)),G.createElement(PT,{disabled:(i==null?void 0:i.restoreFocus)===!1})),G.createElement(U_,{...i,hiddenTextDescribedById:I}));function qc(){const Ke=(we==null?void 0:we.autoScrollEnabled)===!1,xt=typeof c=="object"?c.enabled===!1:c===!1,T=x&&!Ke&&!xt;return typeof c=="object"?{...c,enabled:T}:{enabled:T}}}),UT=v.createContext(null),t1="button",VT="Droppable";function HT(e){let{id:t,data:n,disabled:o=!1,attributes:a}=e;const s=fl(VT),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:f}=v.useContext(xl),{role:b=t1,roleDescription:y="draggable",tabIndex:S=0}=a??{},_=(c==null?void 0:c.id)===t,g=v.useContext(_?Uc:UT),[h,m]=sc(),[j,C]=sc(),x=RT(l,t),w=Zs(n);tn(()=>(p.set(t,{id:t,key:s,node:h,activatorNode:j,data:w}),()=>{const N=p.get(t);N&&N.key===s&&p.delete(t)}),[p,t]);const E=v.useMemo(()=>({role:b,tabIndex:S,"aria-disabled":o,"aria-pressed":_&&b===t1?!0:void 0,"aria-roledescription":y,"aria-describedby":u.draggable}),[o,b,S,_,y,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:E,isDragging:_,listeners:o?void 0:x,node:h,over:f,setNodeRef:m,setActivatorNodeRef:C,transform:g}}function k3(){return v.useContext(_3)}const WT="Droppable",ZT={timeout:25};function KT(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:a}=e;const s=fl(WT),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(xl),u=v.useRef({disabled:n}),p=v.useRef(!1),f=v.useRef(null),b=v.useRef(null),{disabled:y,updateMeasurementsFor:S,timeout:_}={...ZT,...a},g=Zs(S??o),h=v.useCallback(()=>{if(!p.current){p.current=!0;return}b.current!=null&&clearTimeout(b.current),b.current=setTimeout(()=>{d(Array.isArray(g.current)?g.current:[g.current]),b.current=null},_)},[_]),m=Fc({callback:h,disabled:y||!l}),j=v.useCallback((E,N)=>{m&&(N&&(m.unobserve(N),p.current=!1),E&&m.observe(E))},[m]),[C,x]=sc(j),w=Zs(t);return v.useEffect(()=>{!m||!C.current||(m.disconnect(),p.current=!1,m.observe(C.current))},[C,m]),tn(()=>(i({type:Xe.RegisterDroppable,element:{id:o,key:s,disabled:n,node:C,rect:f,data:w}}),()=>i({type:Xe.UnregisterDroppable,key:s,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Xe.SetDroppableDisabled,id:o,key:s,disabled:n}),u.current.disabled=n)},[o,s,n,i]),{active:l,rect:f,isOver:(c==null?void 0:c.id)===o,node:C,over:c,setNodeRef:x}}function YT(e){let{animation:t,children:n}=e;const[o,a]=v.useState(null),[s,l]=v.useState(null),i=lc(n);return!n&&!o&&i&&a(i),tn(()=>{if(!s)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){a(null);return}Promise.resolve(t(d,s)).then(()=>{a(null)})},[t,o,s]),G.createElement(G.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const GT={x:0,y:0,scaleX:1,scaleY:1};function qT(e){let{children:t}=e;return G.createElement(xl.Provider,{value:w3},G.createElement(Uc.Provider,{value:GT},t))}const XT={position:"fixed",touchAction:"none"},QT=e=>Ic(e)?"transform 250ms ease":void 0,JT=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:a,children:s,className:l,rect:i,style:c,transform:d,transition:u=QT}=e;if(!i)return null;const p=a?d:{...d,scaleX:1,scaleY:1},f={...XT,width:i.width,height:i.height,top:i.top,left:i.left,transform:Or.Transform.toString(p),transformOrigin:a&&o?H_(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return G.createElement(n,{className:l,style:f,ref:t},s)}),ek=e=>t=>{let{active:n,dragOverlay:o}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(a))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},tk=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:Or.Transform.toString(t)},{transform:Or.Transform.toString(n)}]},nk={duration:250,easing:"ease",keyframes:tk,sideEffects:ek({styles:{active:{opacity:"0"}}})};function rk(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:a}=e;return Pc((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const d=C3(l);if(!d)return;const{transform:u}=Ct(l).getComputedStyle(l),p=h3(u);if(!p)return;const f=typeof t=="function"?t:ok(t);return j3(c,a.draggable.measure),f({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:a,transform:p})})}function ok(e){const{duration:t,easing:n,sideEffects:o,keyframes:a}={...nk,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...d}=s;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},f={x:c.x-u.x,y:c.y-u.y,...p},b=a({...d,active:l,dragOverlay:i,transform:{initial:c,final:f}}),[y]=b,S=b[b.length-1];if(JSON.stringify(y)===JSON.stringify(S))return;const _=o==null?void 0:o({active:l,dragOverlay:i,...d}),g=i.node.animate(b,{duration:t,easing:n,fill:"forwards"});return new Promise(h=>{g.onfinish=()=>{_==null||_(),h()}})}}let n1=0;function ak(e){return v.useMemo(()=>{if(e!=null)return n1++,n1},[e])}const sk=G.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggableNodes:y,droppableContainers:S,dragOverlay:_,over:g,measuringConfiguration:h,scrollableAncestors:m,scrollableAncestorRects:j,windowRect:C}=k3(),x=v.useContext(Uc),w=ak(p==null?void 0:p.id),E=T3(l,{activatorEvent:u,active:p,activeNodeRect:f,containerNodeRect:b,draggingNodeRect:_.rect,over:g,overlayNodeRect:_.rect,scrollableAncestors:m,scrollableAncestorRects:j,transform:x,windowRect:C}),N=Ph(f),D=rk({config:o,draggableNodes:y,droppableContainers:S,measuringConfiguration:h}),$=N?_.setRef:void 0;return G.createElement(qT,null,G.createElement(YT,{animation:D},p&&w?G.createElement(JT,{key:w,id:p.id,ref:$,as:i,activatorEvent:u,adjustScale:t,className:c,transition:s,rect:N,style:{zIndex:d,...a},transform:E},n):null))});function Ih(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function lk(e,t){return e.reduce((n,o,a)=>{const s=t.get(o);return s&&(n[a]=s),n},Array(e.length))}function ai(e){return e!==null&&e>=0}function ik(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ck(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const si={scaleX:1,scaleY:1},dk=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:o;if(!i)return null;const c=uk(n,l,a);if(l===a){const d=n[s];return d?{x:a<s?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...si}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...si}:l<a&&l>=s?{x:i.width+c,y:0,...si}:{x:0,y:0,...si}};function uk(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return!o||!a&&!s?0:n<t?a?o.left-(a.left+a.width):s.left-(o.left+o.width):s?s.left-(o.left+o.width):o.left-(a.left+a.width)}const zh=e=>{let{rects:t,activeIndex:n,overIndex:o,index:a}=e;const s=Ih(t,o,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},li={scaleX:1,scaleY:1},pk=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:o;if(!i)return null;if(a===n){const d=s[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...li}:null}const c=hk(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...li}:a<n&&a>=l?{x:0,y:i.height+c,...li}:{x:0,y:0,...li}};function hk(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return o?n<t?a?o.top-(a.top+a.height):s?s.top-(o.top+o.height):0:s?s.top-(o.top+o.height):a?o.top-(a.top+a.height):0:0}const E3="Sortable",N3=G.createContext({activeIndex:-1,containerId:E3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:zh,disabled:{draggable:!1,droppable:!1}});function mk(e){let{children:t,id:n,items:o,strategy:a=zh,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=k3(),p=fl(E3,n),f=i.rect!==null,b=v.useMemo(()=>o.map(x=>typeof x=="object"&&"id"in x?x.id:x),[o]),y=l!=null,S=l?b.indexOf(l.id):-1,_=d?b.indexOf(d.id):-1,g=v.useRef(b),h=!ik(b,g.current),m=_!==-1&&S===-1||h,j=ck(s);tn(()=>{h&&y&&u(b)},[h,b,y,u]),v.useEffect(()=>{g.current=b},[b]);const C=v.useMemo(()=>({activeIndex:S,containerId:p,disabled:j,disableTransforms:m,items:b,overIndex:_,useDragOverlay:f,sortedRects:lk(b,c),strategy:a}),[S,p,j.draggable,j.droppable,m,b,_,c,f,a]);return G.createElement(N3.Provider,{value:C},t)}const fk=e=>{let{id:t,items:n,activeIndex:o,overIndex:a}=e;return Ih(n,o,a).indexOf(t)},xk=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==s&&a===l?!1:n?!0:l!==a&&t===c},gk={duration:200,easing:"ease"},R3="transform",vk=Or.Transition.toString({property:R3,duration:0,easing:"linear"}),bk={roleDescription:"sortable"};function jk(e){let{disabled:t,index:n,node:o,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return tn(()=>{if(!t&&n!==i.current&&o.current){const c=a.current;if(c){const d=Ea(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function yk(e){let{animateLayoutChanges:t=xk,attributes:n,disabled:o,data:a,getNewIndex:s=fk,id:l,strategy:i,resizeObserverConfig:c,transition:d=gk}=e;const{items:u,containerId:p,activeIndex:f,disabled:b,disableTransforms:y,sortedRects:S,overIndex:_,useDragOverlay:g,strategy:h}=v.useContext(N3),m=Sk(o,b),j=u.indexOf(l),C=v.useMemo(()=>({sortable:{containerId:p,index:j,items:u},...a}),[p,a,j,u]),x=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:w,node:E,isOver:N,setNodeRef:D}=KT({id:l,data:C,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:$,activatorEvent:Y,activeNodeRect:q,attributes:le,setNodeRef:we,listeners:je,isDragging:Q,over:B,setActivatorNodeRef:P,transform:I}=HT({id:l,data:C,attributes:{...bk,...n},disabled:m.draggable}),V=N_(D,we),W=!!$,_e=W&&!y&&ai(f)&&ai(_),ce=!g&&Q,Se=ce&&_e?I:null,De=_e?Se??(i??h)({rects:S,activeNodeRect:q,activeIndex:f,overIndex:_,index:j}):null,ct=ai(f)&&ai(_)?s({id:l,items:u,activeIndex:f,overIndex:_}):j,_t=$==null?void 0:$.id,fe=v.useRef({activeId:_t,items:u,newIndex:ct,containerId:p}),Le=u!==fe.current.items,et=t({active:$,containerId:p,isDragging:Q,isSorting:W,id:l,index:j,items:u,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:d,wasDragging:fe.current.activeId!=null}),At=jk({disabled:!et,index:j,node:E,rect:w});return v.useEffect(()=>{W&&fe.current.newIndex!==ct&&(fe.current.newIndex=ct),p!==fe.current.containerId&&(fe.current.containerId=p),u!==fe.current.items&&(fe.current.items=u)},[W,ct,p,u]),v.useEffect(()=>{if(_t===fe.current.activeId)return;if(_t&&!fe.current.activeId){fe.current.activeId=_t;return}const Tt=setTimeout(()=>{fe.current.activeId=_t},50);return()=>clearTimeout(Tt)},[_t]),{active:$,activeIndex:f,attributes:le,data:C,rect:w,index:j,newIndex:ct,items:u,isOver:N,isSorting:W,isDragging:Q,listeners:je,node:E,overIndex:_,over:B,setNodeRef:V,setActivatorNodeRef:P,setDroppableNodeRef:D,setDraggableNodeRef:we,transform:At??De,transition:an()};function an(){if(At||Le&&fe.current.newIndex===j)return vk;if(!(ce&&!Ic(Y)||!d)&&(W||et))return Or.Transition.toString({...d,property:R3})}}function Sk(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function uc(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Ck=[xe.Down,xe.Right,xe.Up,xe.Left],wk=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(Ck.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const f=a.get(p.id);if(f)switch(e.code){case xe.Down:o.top<f.top&&c.push(p);break;case xe.Up:o.top>f.top&&c.push(p);break;case xe.Left:o.left>f.left&&c.push(p);break;case xe.Right:o.left<f.left&&c.push(p);break}});const d=K_({active:n,collisionRect:o,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let u=u3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=s.get(n.id),f=s.get(u),b=f?a.get(f.id):null,y=f==null?void 0:f.node.current;if(y&&b&&p&&f){const _=zc(y).some((x,w)=>i[w]!==x),g=O3(p,f),h=_k(p,f),m=_||!g?{x:0,y:0}:{x:h?o.width-b.width:0,y:h?o.height-b.height:0},j={x:b.left,y:b.top};return m.x&&m.y?j:Ks(j,m)}}}};function O3(e,t){return!uc(e)||!uc(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function _k(e,t){return!uc(e)||!uc(t)||!O3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const Tk=e=>{let{transform:t}=e;return{...t,y:0}};function D3(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const Fh=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:D3(o,n,t)},kk=e=>{let{transform:t}=e;return{...t,x:0}},L3=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:D3(t,n,o)},Uh=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:a=[Fh],strategy:s=zh,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=V_(Hf(Mh),Hf($h,{coordinateGetter:wk}));function p(y){const S=e.findIndex(_=>_.id===y.active.id);d(S)}function f(){d(null)}function b(y){const{active:S,over:_}=y;if(S.id!==_.id){const g=e.findIndex(m=>m.id===S.id),h=e.findIndex(m=>m.id===_.id);e[g].moved=!0,t(Ih(e,g,h))}d(null)}return r.jsxs(FT,{sensors:u,collisionDetection:Z_,onDragStart:p,onDragCancel:f,onDragEnd:b,modifiers:a,children:[r.jsx(mk,{items:e,strategy:s,children:r.jsx(n,{...i,children:e.map(y=>r.jsx(Ek,{id:y.id,item:y,Item:o,...i,role:"drag"},y.id))})}),l&&c&&r.jsx(sk,{children:r.jsx(l,{item:c,...i})})]})},Ek=({id:e,item:t,Item:n,...o})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=yk({id:e}),d={transform:Or.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:s,...a,...o})},B3=({...e})=>r.jsx(Uh,{modifiers:[kk,L3,Fh],strategy:pk,...e}),Nk=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:a})=>{const s=Ws(t),l=o.map(c=>Sh(e[c],"id label")),i=c=>{a(c.map(d=>d.id))};return r.jsxs(bn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(B3,{items:l,Item:T_,setOrder:i,isVisible:s,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(E_,{})]})},Rk=ft.Consumer(Nk),Ok=({headerClass:e,Summary:t=o_,PageSize:n=v_,Columns:o=Rk})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),Dk=ft.Consumer(Ok),r1=({value:e})=>ge(e)?e:"",Lk=({value:e})=>ge(e)?ls(e):"",o1=({value:e})=>ge(e)?rC(e):"",Bk=({value:e})=>ge(e)?oC(e):"",$k=({value:e})=>ge(e)?e?"true":"false":"",Ak={default:r1,text:r1,number:Lk,price:o1,currency:o1,boolean:$k,title:Bk},Mk=({row:e,column:t,name:n,value:o,cellClass:a,sortColumn:s,sortingClass:l="sorting",displayTypes:i=Ak})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=s===n,p=he(a,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},Pk=ft.Consumer(Mk),Ik=({row:e,columns:t,rowClass:n,onRowClick:o=ke,visibleColumns:a,Cell:s=Pk})=>r.jsx("tr",{className:n,onClick:()=>o(e),children:a.map(l=>{const i=t[l],c=i.field??l,d=e[c];return r.jsx(s,{row:e,name:l,field:c,column:i,value:d},l)})}),zk=ft.Consumer(Ik),Fk=({page:e,Row:t=zk})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),Uk=ft.Consumer(Fk),Vk=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:f,filteringClass:b="filtering",filterIcon:y="filter",filteringIcon:S="filter-solid",filterIconClass:_="filter-icon",headingClass:g="heading",rightClass:h="right"})=>{const m=e===n,j=m&&o,C=ge(f[e]);return r.jsx("th",{className:he(g,t.right?h:null,u?b:null,C?b:null,m?d:null),onClick:()=>a(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(te,{className:_,name:C?S:y,onClick:p}),r.jsx(te,{className:c,name:m?j?s:l:i})]})]})})},Hk=ft.Consumer(Vk),Wk=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=Hk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),Zk=ft.Consumer(Wk),Kk=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>r.jsx("th",{className:he(o,ge(t[e])?a:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(te,{name:s,onClick:()=>n(e,null)})]})}),Yk=ft.Consumer(Kk),Gk=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=Yk})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),qk=ft.Consumer(Gk),Xk=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,onRowClick:o,showFilters:a,Headings:s=Zk,Filters:l=qk,Rows:i=Uk})=>r.jsxs("table",{className:he(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(s,{}),a&&r.jsx(l,{}),r.jsx(i,{})]}),Qk=ft.Consumer(Xk),Jk=({scrollX:e,Table:t=Qk})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),eE=ft.Consumer(Jk),tE=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:a="solid",render:s,...l})=>{const d=t-1,u=t,p=e+1,f=e>0?e-1:null,b=ge(f)?f+1:null,y=e<d?e+1:null,S=ge(y)?y+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:f,prevPageNo:b,nextPage:y,nextPageNo:S,buttonClass:n,pageClass:o,currentPageClass:a,...l})},Ur=zr(tE),nE=Ur.Use,rE=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:a="arrow-left"})=>r.jsx(L,{className:o,icon:a,onClick:()=>t(e),disabled:Dc(e)}),oE=Ur.Consumer(rE),aE=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:a="arrow-right"})=>r.jsx(L,{className:o,icon:a,onClick:()=>t(e),disabled:!e}),sE=Ur.Consumer(aE),lE=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:a})=>r.jsx(L,{text:t,className:o,onClick:a}),iE=Ur.Consumer(lE),cE=r.jsx(r.Fragment,{children:"…"}),dE=({pageSeparatorClass:e="separator",pageSeparator:t=cE})=>r.jsx("div",{className:e,children:t}),uE=Ur.Consumer(dE),pE=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:f,pageClass:b=f,currentPageClass:y="brand",showFirstLast:S=!0,Separator:_=uE,Page:g=iE})=>r.jsxs("div",{className:p,children:[S&&a>n&&r.jsxs(r.Fragment,{children:[r.jsx(g,{page:n,pageNo:o,className:b,onClick:()=>u(n)}),a>n+1&&r.jsx(_,{})]}),ge(a)&&r.jsx(g,{page:a,pageNo:s,className:b,onClick:()=>u(a)}),r.jsx(g,{page:e,pageNo:t,className:y,current:!0,disabled:!0}),ge(l)&&r.jsx(g,{page:l,pageNo:i,className:b,onClick:()=>u(l)}),S&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(_,{}),r.jsx(g,{page:c,pageNo:d,className:b,onClick:()=>u(c)})]})]}),hE=Ur.Consumer(pE),mE=({className:e="pager",size:t,color:n,Previous:o=oE,Next:a=sE,Pages:s=hE})=>r.jsxs("div",{className:he(e,t,n),children:[r.jsx(o,{}),r.jsx(s,{}),r.jsx(a,{})]}),fE=Ur.Consumer(mE),xE=({Content:e=fE,...t})=>r.jsx(Ur.Provider,{...t,children:r.jsx(e,{})}),Qt=J(xE,"Pager"),gE=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Qt,{page:n.page,pages:n.pages,setPage:a=>o(a+1),...t})}),vE=ft.Consumer(gE),bE=({color:e,className:t="datatable",Header:n=Dk,Body:o=eE,Footer:a=vE})=>r.jsxs("section",{className:he(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(a,{})]}),jE=ft.Consumer(bE),yE=({Content:e=jE,...t})=>r.jsx(ft.Provider,{...t,children:r.jsx(e,{})}),$t=J(yE,"Datatable"),SE=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),CE=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),wE=({className:e,size:t,color:n,lined:o,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:d=SE,Content:u=CE,...p})=>r.jsxs("details",{className:he(e,n,So(a),_a(s),wa(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Je=J(wE,"Details");var Nt;let _E=(Nt=class extends ac{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,a]=this.props.findOption(n,t),s=this.inputValue(o);return{value:o,cursor:a,input:s,options:n}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Nh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Rh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case $c:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Ac:this.close();break;case Tw:this.debug("backspace"),this.searchBackspace();break;case _w:return;case Oh:if(this.state.isOpen){if(!(this.state.searchInput??ys).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){this.debug(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}this.debug(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??ys)+t)}searchBackspace(){this.setSearch(ge(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:ge(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},ve(Nt,"debug",!1),ve(Nt,"debugPrefix","Select > "),ve(Nt,"debugColor","MediumVioletRed"),ve(Nt,"defaultProps",{...Nt.defaultProps,options:[],search:!1,findOption:bw,validOption:dl,searchOptions:jw,displayValue:oc("displayValue"),displayOption:oc("displayOption")}),ve(Nt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),ve(Nt,"initialState",{value:ys,cursor:void 0,...Nt.inactiveState}),ve(Nt,"initialProps",{}),ve(Nt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),Nt);const _o=zr(_E),TE=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsxs("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:[ge(e)&&e.length?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:s,children:a})," "]}),r.jsx("div",{className:c,children:r.jsx(te,{name:"angle-down"})})]}),kE=_o.Consumer(TE),EE=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:he(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),NE=_o.Consumer(EE),RE=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),OE=_o.Consumer(RE),DE=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,Option:i=NE,NoOptions:c=OE})=>r.jsx("div",{className:n,ref:t,children:Ca(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:ge(o)&&e[o]===d,selected:a===d,onClick:()=>s(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),LE=_o.Consumer(DE),BE=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:a,clearSearch:s,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:f,searchIcon:b="search",clearSearchIcon:y="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(te,{name:b})}),r.jsx("input",{ref:o,className:f,type:"text",placeholder:l,value:e??"",onClick:S=>S.stopPropagation(),onChange:S=>a(S.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:he(u,e?p:null),onClick:s,children:r.jsx(te,{name:y})})]})}),$E=_o.Consumer(BE),AE=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:a="open",closedClass:s="closed",Input:l=kE,Search:i=$E,Menu:c=LE})=>r.jsxs("div",{className:he(o,t?a:s),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),ME=_o.Consumer(AE),PE=({Content:e=ME,...t})=>r.jsx(_o.Provider,{...t,children:r.jsx(e,{})}),rn=J(PE,"Select");var IE=Object.defineProperty,zE=(e,t,n)=>t in e?IE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,En=(e,t,n)=>(zE(e,typeof t!="symbol"?t+"":t,n),n),FE=Object.defineProperty,UE=(e,t,n)=>t in e?FE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Md=(e,t,n)=>(UE(e,typeof t!="symbol"?t+"":t,n),n);function VE(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function HE(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||YE(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function WE(e,t){const n=e.debug??t.debug,o=a1(e.debugPrefix??t.debugPrefix,e),a=a1(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function ZE(e){return Array.isArray(e)}function $3(e){return typeof e=="function"}function a1(e,t){return $3(e)?e(t):e}function KE(e){return ZE(e)?e:[e]}function YE(...e){throw new Error(e.join(""))}const A3=(e,t={})=>{const n=G.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Children:({children:o})=>KE(o).map((a,s)=>$3(a)?r.jsx(n.Consumer,{children:a},s):a),Use:()=>G.useContext(n)}};let Ri=class extends G.Component{constructor(e){super(e);const t=this.constructor;this.debug=WE(e,t),this.state=VE(t.initialState,t.initialProps,e),this.actions=HE(this,t.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Md(Ri,"initialState",{}),Md(Ri,"initialProps",{}),Md(Ri,"actions",[]);function M3(e){return typeof e=="boolean"}function Na(e){return typeof e=="string"}function Gs(e){return Array.isArray(e)}function Vc(e){return typeof e=="function"}function GE(e){return e instanceof RegExp}function Ra(e){return typeof e=="object"&&!Gs(e)&&!P3(e)}function qE(e){return e===void 0}function P3(e){return e===null}function Pt(e){return!(qE(e)||P3(e))}function XE(e){return!Pt(e)}function QE(...e){throw new Error(e.join(""))}const s1=(e,...t)=>Vc(e)?e(...t):e;function ca(){}function JE(){return Intl.DateTimeFormat().resolvedOptions().locale}JE();function I3(e,t=/,\s*|\s+/){return XE(e)?[]:Na(e)?e.length?e.split(t):[]:Gs(e)?e:[e]}function z3(e,t=!0,n={}){return Ra(e)?e:I3(e).reduce((o,a)=>(o[a]=Vc(t)?t(a):t,o),n)}function eN(e){if(Vc(e))return e;if(GE(e))return t=>e.test(t);if(Ra(e))return t=>!!e[t];if(Gs(e)||Na(e)){const t=z3(e);return n=>!!t[n]}QE("Invalid selector() specification: "+e)}const tN=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=eN(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},nN="",rN="blur",gl="changed",oN="disabled",Hc="focus",aN="fulfilled",vl="invalid",F3="Optional",sN="radio",U3="Required",lN="A value is required",l1="reset",bl="submitted",Oa="submitting",Vh="text",iN="unvalidated",jl="valid",Vr="validating",cN=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],dN=["id","name","action","method","encType"];let V3=class extends Ri{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(l1)}}setStatus(e,t={},n=ca){this.mounted&&this.setState(o=>({...Vc(t)?t(o):t,status:this.newStatus(e,o.status)}),n)}setResetState(e,t){this.setStatus(l1,e,t)}setChangedState(e,t){this.setStatus(gl,e,t)}setValidatingState(e,t){this.setStatus(Vr,e,t)}setInvalidState(e,t){this.setStatus(vl,e,t)}setValidState(e,t){this.setStatus(jl,e,t)}setUnvalidatedState(e,t){this.setStatus(iN,e,t)}};function H3(e,t){return t.reduce((n,o)=>(Pt(e[o])&&(n[o]=e[o]),n),{})}const Wc=e=>H3(e,cN),uN=e=>H3(e,dN),W3=e=>e.filter(Pt).join(" "),pN=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),On=(...e)=>W3(e.flatMap(t=>Ra(t)?pN(t):t)),Zc=e=>On(e.inputClass,e.inline&&"inline"),Jo=(e,t,n=t)=>(e==null?void 0:e[t])||n,hN=(e,t={},...n)=>W3(Object.entries(e).reduce((o,[a,s])=>(s&&o.push(t[a]||a),o),[...n])),mN=e=>{const{status:t,className:n,classes:o,required:a,showRequired:s,showOptional:l}=e;return hN(t,o,Jo(o,"field"),n,s&&a?"required":null,l&&!a?"optional":null)},Z3=(e,...t)=>{const{gap:n,space:o,stack:a,className:s}=e;return s||(o?On("flex","space",...t):On("flex",n?`gap-v-none gap-h-${n}`:null,a?`stack-${a}`:null,...t))},fN=(e,...t)=>{const{grid:n,gap:o,stack:a,className:s}=e;return s||(n?On(`grid-${n}`,o?`gap-v-none gap-h-${o}`:null,a?`stack-${a}`:null,...t):On(...t))},xN={boolean:!0,string:!0,number:!0},K3=e=>xN[typeof e]?{value:e,text:e}:e,pc=(...e)=>function(...t){for(let n of e.filter(Boolean))n(...t)};function i1(e){if(M3(e))return[1,!1];if(Pt(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const gN=(e,t)=>Na(e)?{[t]:e}:e,vN={submittingClass:Oa,validatingClass:Vr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},c1={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:lN,requiredLabel:U3,optionalLabel:F3},bN=z3(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),ga={[jl]:!1,[vl]:!1},jN={...ga,[gl]:!0},yN={...ga,[Vr]:!0},SN={[jl]:!1,[vl]:!0,[Vr]:!1},CN={[jl]:!0,[vl]:!1,[Vr]:!1},wN={[Hc]:!1},_N={[Hc]:!0},TN={[Oa]:!0,[bl]:!1},kN={[Oa]:!1,[bl]:!0},Y3={changed:jN,validating:yN,invalid:SN,valid:CN},G3=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),EN=()=>{const e={...ga,[gl]:!1,[Vr]:!1,[bl]:!1,[Oa]:!1};return G3({...Y3,reset:e,submitting:TN,submitted:kN,unvalidated:ga})},NN=(e={})=>{const t={...ga,[gl]:!1,[Vr]:!1,[Hc]:!1,[oN]:e.disabled||!1};return G3({...Y3,reset:t,focus:_N,blur:wN,unvalidated:ga})},RN=({status:e,any:t=!1,...n})=>{const o=[gl,Vr,jl,vl,Oa,bl].filter(a=>Pt(n[a])).map(a=>e[a]);return t?o.some(Boolean):o.every(Boolean)};class Mo extends V3{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,o={...n},a={...vN,...this.props};this.state={...a,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,n){var o,a;const s=((o=this.props.fields)==null?void 0:o[t])??{},l=n.value??((a=this.props.values)==null?void 0:a[t]);return{name:t,...tN(this.props,bN),...s,...n,value:l}}attachField(t,n){this.debug(`attaching ${t} field`),this.fields[t]=n,this.setState(o=>({values:{...o.values,[t]:n.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(Oa,t,n)}setSubmittedState(t,n){this.setStatus(bl,t,n)}setFocus(t,n){var o;n==null||n.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,n){this.debug(`setValue(${t}, ${n})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:n}}))}setValues(t,n){this.debug("setValues():",t),n==null||n.preventDefault(),Object.entries(t).forEach(([o,a])=>{var s;return(s=this.fields[o])==null?void 0:s.setValue(a)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((a,{status:s,value:l,reason:i})=>(s===aN?Object.assign(a.values,l.data||{[l.name]:l.value}):a.errors.push(i),a),{values:{...this.state.values},errors:[]})).then(o=>{var a;return this.debug("field validation complete: ",o),(a=o.errors)!=null&&a.length?(this.debug("errors detected, rejecting: ",o),n(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(s=>t({...o,values:s})).catch(s=>n(s))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const n=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",n),this.setSubmittedState(),n!=null&&n.ok||(n==null?void 0:n.status)===200)this.debug(`Success response ok:${n==null?void 0:n.ok} status:${n==null?void 0:n.status}`),this.handleSuccess(n);else if((n==null?void 0:n.status)>=400&&n.status<=500)this.debug(`Error response status:${n==null?void 0:n.status}`),this.handleError(n.data);else throw new Error(`Unknown response: ${n==null?void 0:n.status}`)}catch(n){this.debug("onSubmit error:",n),this.setSubmittedState(),this.handleError(Na(n)?{error:n}:n instanceof Error?{error:n.message}:n)}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||ca;this.setValidState({},pc(()=>n(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const n=Gs(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||ca;this.setInvalidState(t,pc(()=>o(t),n?()=>n.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const n=t.reduce((o,a)=>{const s=a.name??a.param??a.field,{message:l}=a,i=s&&this.fields[s];return i&&(a.label||(a.label=i.props.label),i.setInvalidState({message:l}),o.push(i)),o},[]);return this.state.focusInvalidField&&n.length?n[0]:null}sanitiseErrors(t){if(Ra(t)&&(t=Object.entries(t).map(([n,o])=>({name:n,...gN(o,"message")}))),!Gs(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(n=>n.message??(n.message=n.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}En(Mo,"newStatus",EN),En(Mo,"debug",!1),En(Mo,"debugPrefix","Form > "),En(Mo,"debugColor","rebeccapurple"),En(Mo,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const ON=A3(Mo),{Context:EK,Provider:DN,Consumer:LN,Children:BN,Use:Da}=ON,$N=({children:e})=>{const t=Da(),n=uN(t),{submit:o,className:a}=t;return r.jsx("form",{className:a,...n,onSubmit:o,noValidate:!0,children:r.jsx(BN,{children:e})})},AN=({children:e,Layout:t=$N,...n})=>r.jsx(DN,{...n,children:r.jsx(t,{children:e})}),MN=e=>{const{id:t,value:n}=e;return{...e,id:t||v.useId(),value:n??e.default??nN}};class Po extends V3{constructor(t){super(t),this.name=t.name;const{value:n}=t,o=n;this.form=this.props.form,this.state={...this.state,initialValue:o,value:n,error:null},this.debug("initial state:",this.state),this.inputRef=v.createRef(),this.resetRef=v.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):ca}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(Hc,t,n)}setBlurState(t,n){return this.setStatus(rN,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var n,o;t==null||t.preventDefault(),(o=(n=this.inputRef)==null?void 0:n.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:a,validateOnInvalid:s=!0,minValidateLength:l=1}=this.props,[i]=i1(n);let c=a||s&&o;i<l&&!o&&(c=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),c?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.form.setValue(this.props.name,n),this.setResetState({value:n,message:this.props.message},()=>{var o,a;return(a=(o=this.resetRef)==null?void 0:o.current)==null?void 0:a.reset()}),n}validation(t){this.validate(t).then(ca).catch(ca)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,pc(this.on.valid,t)),{...n,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,pc(this.on.invalid,t)),{...n,...o}})}validator(){return async(t,n)=>{const{value:o=""}=this.state,{validate:a,required:s,requiredMessage:l,validMessage:i}={...c1,...this.props},[,c]=i1(o);if(this.setValidatingState(),a)return await this.validateValidator(t,n,a,i);if(c)return await this.validateEmpty(t,n,s,i,l);this.debug("no validation defined"),t({value:o,message:i})}}async validateValidator(t,n,o,a){this.debug("calling validate function");const s=this.getContext();try{this.debug(`calling validate function with value [${s.value}]`);const l=await o(s.value,s,t,n);this.debug("validate function passed:",l),t(Ra(l)?{message:a,...l}:{value:l,message:a})}catch(l){this.debug("validate threw an error:",l);const i=Na(l)?l:l.message;this.debug("rejecting with message:",i),n({message:i})}}validateEmpty(t,n,o,a,s){o?(this.debug("failing validation - required field is empty"),n({message:s})):(this.debug("passing validation - value is empty but not required"),t({message:a}))}setValid(t,n){n==null||n.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,n){n==null||n.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...c1,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}En(Po,"newStatus",NN),En(Po,"debug",!1),En(Po,"debugPrefix",e=>`Field [${e.name}] > `),En(Po,"debugColor","teal"),En(Po,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const PN=A3(Po),{Context:NK,Provider:IN,Consumer:RK,Children:zN,Use:wt}=PN,q3=({field:e=wt()})=>{const{label:t,id:n,required:o}=e,a=e.showRequired&&o,s=e.showOptional&&!o,l=t||a||s,i=e.labelClass,c={};return a&&e.requiredLabel!==U3&&(c["--required-text"]=`"${e.requiredLabel}"`),s&&e.optionalLabel!==F3&&(c["--optional-text"]=`"${e.optionalLabel}"`),l&&r.jsx("label",{htmlFor:n,className:i,style:c,children:t||r.jsx("span",{children:" "})})},FN=e=>t=>e.onChange(t.target.value),UN=e=>t=>e.onChange(t.target.checked),Dr={default:FN,checkbox:UN},VN=({field:e=wt()})=>{const{id:t,text:n,inline:o,border:a,labelClass:s,type:l="checkbox",handler:i=Dr[l]||Dr.default}=e,c=Wc(e),d=On("checkbox",s,{inline:o,border:a});return r.jsxs("label",{htmlFor:t,className:d,children:[r.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:Zc(e),...c,checked:e.value}),n]})},X3=({field:e=wt()})=>r.jsx("input",{type:"hidden",name:e.name,value:e.value}),HN=({field:e=wt()})=>{const{inline:t,border:n,options:o=[],inputClass:a,optionClass:s,optionsClass:l="options",type:i="radio",handler:c=Dr[i]||Dr.default}=e,d=Wc(e);return r.jsx("div",{className:On(l),children:o.map((u,p)=>{u=K3(u);const f=`${e.id}-${u.value}`,b=e.value==u.value,y=(e.value?b:p==0)?e.inputRef:null,S=On("radio",s,u.className,{inline:t,border:n});return r.jsxs("label",{className:S,disabled:u.disabled,htmlFor:f,children:[r.jsx("input",{type:i,className:a,ref:y,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:f,checked:b,value:u.value}),u.text]},u.value)})})},WN=({field:e=wt()})=>{const{options:t=[],placeholder:n,type:o="select",optionClass:a="option",handler:s=Dr[o]||Dr.default}=e,l=Wc(e);return r.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:Zc(e),onChange:s(e),...l,value:e.value,required:e.required||!!n,children:[!!n&&r.jsx("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(i=>(i=K3(i),r.jsx("option",{className:a,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},d1=({field:e=wt()})=>{const{type:t=Vh,handler:n=Dr[t]||Dr.default}=e,o=Wc(e);return r.jsx("input",{type:t,ref:e.inputRef,className:Zc(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:n(e),...o})},ZN=({field:e=wt()})=>{const{rows:t=5,cols:n=20}=e;return r.jsx("textarea",{id:e.id,ref:e.inputRef,className:Zc(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:n})},qs={default:d1,checkbox:VN,hidden:X3,radio:HN,select:WN,text:d1,textarea:ZN},Q3=(e,t)=>qs[e]=t,KN=({field:e=wt()})=>r.jsx("div",{className:On("prefix",e.prefixClass),children:e.prefix}),YN=({field:e=wt()})=>r.jsx("div",{className:On("suffix",e.suffixClass),children:e.suffix}),GN=({field:e=wt()})=>{const{classes:t,prefix:n,suffix:o,inputsClass:a,inline:s,type:l=Vh,Prefix:i=KN,Suffix:c=YN}=e,d=qs[l]||qs.default;let u=[Jo(t,"inputs")];Pt(n)&&u.push(Jo(t,"prefixed")),Pt(o)&&u.push(Jo(t,"suffixed")),s&&u.push(Jo(t,"inline")),Pt(a)&&u.push(a);const p=u.join(" ");return r.jsxs("div",{className:p,children:[Pt(n)&&r.jsx(i,{field:e}),r.jsx(d,{field:e}),Pt(o)&&r.jsx(c,{field:e})]})},J3=({field:e=wt()})=>{const{prefix:t,suffix:n,type:o=Vh}=e,a=qs[o]||qs.default;return o==sN?r.jsx(a,{field:e}):Pt(t)||Pt(n)?r.jsx(GN,{}):r.jsx(a,{field:e})},e0=({field:e=wt()})=>{const{help:t,message:n,classes:o}=e,a=n??t,s=Jo(o,"help");return a?r.jsx("div",{className:s,children:a}):null},t0=({field:e=wt(),children:t})=>{const{type:n,Label:o=q3,Message:a=e0,Input:s=J3}=e,l=mN(e);return n==="hidden"?r.jsx(X3,{field:e}):r.jsx("div",{className:l,children:t||r.jsxs(r.Fragment,{children:[r.jsx(o,{field:e}),r.jsx(s,{field:e}),r.jsx(a,{field:e})]})})},n0=({name:e,children:t,...n})=>{const o=Da(),a=MN(o.fieldSpec(e,n)),s=a.Layout||t0;return r.jsx(IN,{form:o,...a,children:t?r.jsx(zN,{children:t}):r.jsx(s,{})})},r0=({names:e,className:t,grid:n=!1,gap:o=4,stack:a,...s})=>{const l=I3(e);return M3(n)&&n&&(n=l.length),r.jsx("div",{className:fN({grid:n,gap:o,stack:a,props:s},t),children:l.map(i=>r.jsx(n0,{name:i,...s},i))})},qN=({className:e="",legend:t,children:n,fields:o,...a})=>r.jsxs("fieldset",{className:e,children:[!!t&&r.jsx("legend",{children:t}),!!o&&r.jsx(r0,{names:o,...a}),n]}),XN=({children:e,...t})=>RN(t)&&e,o0=LN(XN),QN=({values:e=!0,status:t=!1,all:n=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:a="Form Debugging",valuesTitle:s="Values",statusTitle:l="Status",...i})=>{const c=Da();return r.jsxs("div",{className:o,children:[a&&r.jsx("h3",{className:"mar-v-none",children:a}),r.jsxs("div",{className:"grid-1 gap-4",children:[e&&r.jsxs("div",{children:[s&&r.jsx("h4",{className:"mar-v-none",children:s}),r.jsx(u1,{rows:Object.entries(c.values),...i})]}),(t||n)&&c.status&&r.jsxs("div",{children:[l&&r.jsx("h4",{children:l}),r.jsx(u1,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},u1=({rows:e,children:t,color:n="brand",tableClass:o=`${n} shaded celled wide small pad-none mar-b-0`,...a})=>r.jsx("table",{className:o,children:r.jsx("tbody",{children:t||e.map(([s,l])=>r.jsx(JN,{name:s,value:l,...a},s))})}),JN=({name:e,value:t,keyClass:n="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>r.jsxs("tr",{valign:"top",children:[r.jsx("th",{className:n,children:e}),r.jsx("td",{className:o,children:r.jsx(eR,{value:t})})]}),eR=({value:e})=>Ra(e)?JSON.stringify(e):Pt(e)?e.toString():"",tR=({error:e})=>{const t=e.label||e.name;return r.jsxs(r.Fragment,{children:[!!t&&r.jsxs("b",{children:[t,": "]}),e.message]})},nR=({error:e})=>Na(e)?e:r.jsx(tR,{error:e}),rR=({form:e=Da(),title:t=e.errorsTitle,prompt:n=e.errorsPrompt,fieldErrors:o=!1,className:a="error alert border"})=>{const{error:s,errors:l,Error:i=nR}=e,c=!!s,d=(o?l.length:0)+(c?1:0);return d!==0?r.jsxs("div",{className:a,children:[!!t&&r.jsx("div",{className:"headline",children:s1(t,d)}),r.jsxs("div",{children:[c&&r.jsx("h4",{children:r.jsx(i,{error:s})}),o&&l.length!==0&&r.jsxs(r.Fragment,{children:[!!n&&r.jsx("p",{className:"wide",children:s1(n,l.length)}),r.jsx("ul",{children:l.map((u,p)=>r.jsx("li",{children:r.jsx(i,{error:u})},p))})]})]})]}):null},oR=({field:e=wt(),selectValue:t=e.selectValue||Lg})=>r.jsx(rn,{...e,onSelect:n=>e.onChange(t(n))}),ii={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class ur extends Ss{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?lC(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const n=this.inputValue(t);return{value:t,input:n}}inputValue(t=this.props.value){return ge(t)?this.props.displayValue(t):ys}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Pr(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...ii})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Nh:this.setCursor(n+1);break;case Rh:this.setCursor(n-1);break;case $c:this.selectCursor();break;case Ac:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.setState({value:t,input:n,...ii},this.props.onReset)}clear(){this.debug("clear()"),this.setState({value:void 0,input:ys,...ii},this.props.onClear)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...ii},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&ge(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){r3(this._resultsRef,t)}}ve(ur,"debug",!1),ve(ur,"debugPrefix","Search > "),ve(ur,"debugColor","MediumVioletRed"),ve(ur,"defaultProps",{minLength:2,debounceTime:500,onLoad:ke,onUnload:ke,onFocus:ke,onBlur:ke,onReset:ke,onClear:ke,onSelect:ke,displayValue:oc("displayValue"),displayResult:oc("displayResult")}),ve(ur,"initialState",{value:"",searching:!1}),ve(ur,"initialProps",{value:"initialValue"}),ve(ur,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","clear","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const La=zr(ur),aR=({input:e,onFocus:t,onBlur:n,onChange:o,clear:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:f="text",inputClass:b="",disabled:y,searching:S})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(te,{name:i})}),r.jsx("input",{type:f,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:o,disabled:y,className:b}),r.jsx("div",{className:p,onClick:a,children:r.jsx(te,{name:S?c:l})})]}),sR=La.Consumer(aR),lR=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:he(l,{[i]:t}),onClick:o,onMouseEnter:a,ref:t?n:null,children:s(e)}),iR=La.Consumer(lR),cR=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),dR=La.Consumer(cR),uR=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=iR,NoResults:i=dR})=>r.jsx("div",{className:s,ref:t,children:Ca(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:ge(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>a(d)},c.id??c.value??d)):r.jsx(i,{})}),pR=La.Consumer(uR),hR=({results:e,onKeyDown:t,Input:n=sR,Results:o=pR})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),mR=La.Consumer(hR),fR=({Content:e=mR,...t})=>r.jsx(La.Provider,{...t,children:r.jsx(e,{})}),Jn=J(fR,"Search"),xR=({field:e=wt(),selectValue:t=e.selectValue||Lg})=>r.jsx(Jn,{...e,onSelect:n=>e.onChange(t(n)),onReset:e.reset}),gR=({color:e,className:t,style:n,fixed:o,light:a,dark:s,children:l})=>r.jsx("div",{className:he("overlay",t,e,{fixed:o,light:a,dark:s}),style:n,children:l}),To=J(gR,"Overlay"),p1=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),h1=(e,t,n,o,a,s)=>{n?(t.push(`stc-${a}`,`std-${s}`),Ng(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},m1=(e,t,n,o,a)=>{n?t.push(`flc-${o}`,`fld-${a}`):e.push("fill=none")},vR=({size:e,className:t,icon:n="cog",color:o="brand",stroke:a=!0,strokeWidth:s,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:f=o,bgStroke:b=!1,bgStrokeWidth:y,bgStrokeStop:S=60,bgStrokeStopDark:_=70,bgFill:g=!0,bgFillStop:h=70,bgFillStopDark:m=30,shrink:j=p?5:0,reverse:C=!1,animation:x=C?"spin.reverse":"spin"})=>{const w=he(e,t),E=[],N=[f],D=[],$=[o,x];h1(E,N,b,y,S,_),h1(D,$,a,s,l,i),m1(E,N,g,h,m),m1(D,$,c,d,u),j&&D.push(`shrink=${j}`);const Y=p?`${p}${p1(E,N)}`:"",q=`${n}${p1(D,$)}`,le=p?`${Y} ${q}`:q;return r.jsx(te,{name:le,className:w})},H=J(vR,"Spinner"),bR=({text:e="Submitting...",size:t="largest",className:n="flex middle center pad-8",light:o,dark:a,fixed:s,spinnerSize:l="x4",Spinner:i=H,...c})=>r.jsx(o0,{submitting:!0,children:r.jsx(To,{className:he(n,t),light:o,dark:a,fixed:s,children:r.jsxs("div",{className:"text-center",children:[i&&r.jsx(i,{size:l,...c}),r.jsx("div",{className:"mar-t-4",children:e})]})})}),Hh=J(bR,"Submitting"),jR=({text:e="Cancel",className:t="cancel",Button:n=L,...o})=>r.jsx(n,{text:e,className:t,...o}),yR=J(jR,"Cancel"),SR=({type:e="reset",text:t="Reset",className:n="reset",Button:o=L,...a})=>{const{reset:s}=Da();return r.jsx(o,{type:e,text:t,className:n,onClick:s,...a})},a0=J(SR,"Reset"),CR=({type:e="submit",text:t="Submit",className:n="submit",Button:o=L,...a})=>{const{submit:s,status:l}=Da();return r.jsx(o,{type:e,text:t,className:n,onClick:s,disabled:l.submitting,...a})},yl=J(CR,"Submit"),wR=({className:e,gap:t=4,space:n=!1,reset:o={},submit:a={}})=>r.jsxs("div",{className:Z3({className:e,gap:t,space:n},"controls"),children:[r.jsx(a0,{...o}),r.jsx(yl,{...a})]}),_R=J(wR,"ResetSubmit"),TR=({className:e,gap:t=4,space:n=!1,cancel:o={},submit:a={}})=>r.jsxs("div",{className:Z3({className:e,gap:t,space:n},"controls"),children:[r.jsx(yR,{...o}),r.jsx(yl,{...a})]});J(TR,"CancelSubmit");Q3("uiselect",oR);Q3("search",xR);const ar=J(AN,"Form"),st=J(n0,"Field");J(r0,"Fields");J(qN,"Fieldset");J(rR,"Errors");J(o0,"Status");const Ba=J(QN,"Debug");J(t0,"Layout");J(q3,"Label");J(J3,"Input");J(e0,"Message");const kR=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(te,{name:t})}),ER=J(kR,"ModalClose"),NR=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,RR=J(NR,"ModalHeader"),OR=({footer:e})=>!!e&&r.jsx("footer",{children:e}),DR=J(OR,"ModalFooter"),LR=({text:e,children:t,Header:n=RR,Footer:o=DR,...a})=>r.jsxs("article",{children:[r.jsx(n,{...a}),e||t,r.jsx(o,{...a})]}),BR=J(LR,"ModalContent"),$R=({ref:e,open:t,close:n,className:o,closeClass:a="close",closeIcon:s="cross",Close:l=ER,Content:i=BR,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:s,className:a}),r.jsx(i,{...c})]})),Mn=J($R,"Modal"),AR=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Ir({visible:e});return{show:n,hide:o,Modal:a=>r.jsx(Mn,{open:t,...a})}},MR=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Ir({visible:e});return{show:n,hide:o,Overlay:a=>t&&r.jsx(To,{...a})}},PR=({className:e,disabled:t,children:n})=>r.jsx("label",{className:he(e,{disabled:t}),children:n}),IR=J(PR,"RadioLabel"),zR=({name:e,option:t,tabIndex:n=0,onChange:o=ke,checked:a})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>o(s.target.checked),checked:a}),FR=J(zR,"RadioInput"),UR=({name:e,option:t,checked:n,inline:o,border:a,labelClass:s="radio",inputClass:l,Label:i=IR,Input:c=FR,onChange:d})=>r.jsxs(i,{className:he(s,t.labelClass,{inline:o,border:a}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:he(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),VR=J(UR,"RadioOption"),HR=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:a,Option:s=VR,...l})=>r.jsx("div",{className:he(o,{disabled:a}),children:n.map(i=>{const c=yo(i)?i:{value:i,label:i};return r.jsx(s,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),Dn=J(HR,"Radio"),WR=({...e})=>r.jsx(Uh,{modifiers:[Tk,L3,Fh],strategy:dk,...e}),ZR=({tab:e})=>{if(!e)return null;const{content:t,Component:n}=e;return t||(n?r.jsx(n,{tab:e}):"No content, element or Component defined for tab")},bt=({tabs:e,storageKey:t,storageItem:n="active-tab",tabsetClass:o="tabset",tabsClass:a="tabs",activeClass:s="active",disabledClass:l="disabled",className:i,bodyClass:c,color:d,size:u,solid:p,lined:f,center:b,right:y,Body:S=ZR})=>{const _=t&&Storage(t),[g,h]=G.useState(_&&_.get(n)||0),m=x=>{h(x),_&&_.set(n,x)},j=he(o,i,d,u,{solid:p,lined:f,center:b,right:y}),C=he(a,d,u);return r.jsxs("div",{className:j,children:[r.jsx("ul",{className:C,children:e.map((x,w)=>r.jsx("li",{className:he({[s]:g===w,[l]:x.disabled}),onClick:()=>x.disabled?ke:m(w),children:r.jsx(Co,{...x})},x.id||w))}),r.jsx("div",{className:c,children:r.jsx(S,{tabs:e,active:g,tab:e[g]})})]})},KR=()=>r.jsxs(ee,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),YR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,GR=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],s0=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),GR.map(o=>r.jsx("option",{value:o,children:o},o))]}),qR=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],l0=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),qR.map(n=>r.jsx("option",{value:n,children:n},n))]}),XR=[0,1,2,3,4,5,6,8,10],QR=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),XR.map(n=>r.jsx("option",{value:n,children:n},n))]}),JR=[1,2,3,4,5],eO=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),JR.map(n=>r.jsx("option",{value:n,children:n},n))]}),f1=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),tO=[0,1,2,3,4,5,6,8,10],nO=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),tO.map(o=>r.jsx("option",{value:o,children:o},o))]}),rO=Object.keys(sl.icons),Gu=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),rO.map(o=>r.jsx("option",{value:o,children:o},o))]}),oO=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${sO(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(lO,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Vn,{code:i,language:"html",expand:!0})]})]}),r.jsx(aO,{options:n,setOption:s,toggleOption:a})]})},aO=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),f=n("icon"),b=n("headIcon"),y=t("stripe"),S=t("revealable");return r.jsxs("div",{children:[r.jsx(Pd,{label:"Headline",value:e.headline,setValue:o}),r.jsx(Pd,{label:"Title",value:e.title,setValue:a}),r.jsx(Pd,{label:"Text",value:e.text,setValue:s}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(iO,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(s0,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(l0,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(eO,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(nO,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(QR,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(Gu,{icon:e.headIcon,setIcon:b,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(Gu,{icons:e.icon,setIcon:f})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(f1,{checked:e.stripe,toggle:y,label:"Stripe"}),r.jsx(f1,{checked:e.revealable,toggle:S,label:"Revealable",disabled:!e.headline})]})]})]})},sO=e=>{const t=["headline","title","text","type","color","size","headIcon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),o=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...o].join(`
  `)},lO=({options:e})=>r.jsx(ee,{...e}),iO=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),Pd=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(te,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),i0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(ne,{Component:KR,code:YR,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(oO,{})]}),cO=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),Wh=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),dO=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},Sl=zr(dO),uO=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Zh=zr(Sl.Consumer(uO)),pO=({id:e,code:t,title:n=t,children:o,addPageToc:a,split:s})=>{const l=Wh(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:s?"cols-2 stack-desktop":"",children:o})]})},z=Zh.Consumer(pO),k=({Component:e,Source:t,children:n,code:o,title:a,caption:s=o?r.jsx("code",{children:o}):a,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(z,{code:o,title:a,...u,children:[r.jsx("div",{className:"mar-b-4",children:n}),r.jsx(ne,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:d,lineProps:c})]}),hO=()=>r.jsxs("div",{children:[r.jsx(ds,{text:"Error alert"}),r.jsx(ds,{text:"Error alert with border",border:!0}),r.jsx(ds,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(ds,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),mO=`import React from 'react'
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
`,c0=()=>r.jsx(k,{code:"Error",Component:hO,Source:mO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),fO=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),xO=()=>r.jsxs("div",{children:[r.jsx(is,{text:"Info alert"}),r.jsx(is,{text:"Info alert with border",border:!0}),r.jsx(is,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(is,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),gO=`import React from 'react'
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
`,d0=()=>r.jsx(k,{code:"Info",Component:xO,Source:gO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),vO=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),bO=()=>r.jsxs("div",{children:[r.jsx(Qo,{text:"Success alert"}),r.jsx(Qo,{text:"Success alert with border",border:!0}),r.jsx(Qo,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Qo,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),jO=`import React from 'react'
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
`,u0=()=>r.jsx(k,{code:"Success",Component:bO,Source:jO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),yO=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),SO=()=>r.jsxs("div",{children:[r.jsx(cs,{text:"Warning alert"}),r.jsx(cs,{text:"Warning alert with border",border:!0}),r.jsx(cs,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(cs,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),CO=`import React from 'react'
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
`,p0=()=>r.jsx(k,{code:"Warning",Component:SO,Source:CO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),_O=()=>r.jsxs("div",{children:[r.jsx(ee,{text:"Border Alert",border:!0}),r.jsx(ee,{text:"Border Width 2",border:2})]}),TO=`import React from 'react'
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
`,h0=()=>r.jsx(k,{code:"border",Component:_O,Source:TO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),kO=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),EO=()=>r.jsx(ee,{text:"Hello World!",className:"border shadow-2"}),NO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,m0=()=>r.jsx(k,{code:"className",Component:EO,Source:NO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),RO=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),OO=()=>r.jsxs("div",{children:[r.jsx(ee,{text:"Red Alert",color:"red"}),r.jsx(ee,{text:"Brown Alert",color:"brown"}),r.jsx(ee,{text:"Orange Alert",color:"orange"}),r.jsx(ee,{text:"Yellow Alert",color:"yellow"}),r.jsx(ee,{text:"Green Alert",color:"green"}),r.jsx(ee,{text:"Teal Alert",color:"teal"}),r.jsx(ee,{text:"Blue Alert",color:"blue"}),r.jsx(ee,{text:"Indigo Alert",color:"indigo"}),r.jsx(ee,{text:"Violet Alert",color:"violet"}),r.jsx(ee,{text:"Purple Alert",color:"purple"}),r.jsx(ee,{text:"Pink Alert",color:"pink"}),r.jsx(ee,{text:"Maroon Alert",color:"maroon"})]}),DO=`import React from 'react'
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
`,f0=()=>r.jsx(k,{code:"color",Component:OO,Source:DO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),LO=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),BO=()=>r.jsx(ee,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),$O=`import React from 'react'
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
`,x0=()=>r.jsx(k,{code:"dismissable",Component:BO,Source:$O,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),AO=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),MO=()=>r.jsx(ee,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),PO=`import React from 'react'
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
`,g0=()=>r.jsx(k,{code:"headicon",Component:MO,Source:PO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),IO=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),zO=()=>r.jsx(ee,{headline:"Headline Alert",text:"An alert with a headline"}),FO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,v0=()=>r.jsx(k,{code:"headline",Component:zO,Source:FO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),UO=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),VO=()=>r.jsxs("div",{children:[r.jsx(ee,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(ee,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(ee,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),HO=`import React from 'react'
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
`,b0=()=>r.jsx(k,{code:"icon",Component:VO,Source:HO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),ZO=()=>r.jsx(ee,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),KO=`import React from 'react'
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
`,j0=()=>r.jsx(k,{code:"onDismiss",Component:ZO,Source:KO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),YO=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),GO=()=>r.jsx(ee,{text:"Radius Alert",radius:4}),qO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,y0=()=>r.jsx(k,{code:"radius",Component:GO,Source:qO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),QO=()=>r.jsx(ee,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),JO=`import React from 'react'
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
`,S0=()=>r.jsx(k,{code:"revealable",Component:QO,Source:JO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),eD=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),tD=()=>r.jsx(ee,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),nD=`import React from 'react'
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
`,C0=()=>r.jsx(k,{code:"revealed",Component:tD,Source:nD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),rD=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),oD=()=>r.jsxs("div",{children:[r.jsx(ee,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(ee,{text:"Alert With Shadow 2",shadow:2}),r.jsx(ee,{text:"Alert With Shadow 3",shadow:3}),r.jsx(ee,{text:"Alert With Shadow 4",shadow:4}),r.jsx(ee,{text:"Alert With Shadow 5",shadow:5})]}),aD=`import React from 'react'
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
`,w0=()=>r.jsx(k,{code:"shadow",Component:oD,Source:aD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),sD=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),lD=()=>r.jsxs("div",{children:[r.jsx(ee,{text:"Smallest Alert",size:"smallest"}),r.jsx(ee,{text:"Smaller Alert",size:"smaller"}),r.jsx(ee,{text:"Small Alert",size:"small"}),r.jsx(ee,{text:"Medium Alert",size:"medium"}),r.jsx(ee,{text:"Large Alert",size:"large"}),r.jsx(ee,{text:"Larger Alert",size:"larger"}),r.jsx(ee,{text:"Largest Alert",size:"largest"})]}),iD=`import React from 'react'
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
`,_0=()=>r.jsx(k,{code:"size",Component:lD,Source:iD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),cD=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),dD=()=>r.jsxs("div",{children:[r.jsx(ee,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(ee,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(ee,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(ee,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(ee,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),uD=`import React from 'react'
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
`,T0=()=>r.jsx(k,{code:"stripe",Component:dD,Source:uD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),pD=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),hD=()=>r.jsx(ee,{text:"Hello World!"}),mD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,k0=()=>r.jsx(k,{code:"text",Component:hD,Source:mD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),fD=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),xD=()=>r.jsx(ee,{title:"Hello World!",children:"This is an alert"}),gD=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,E0=()=>r.jsx(k,{code:"title",Component:xD,Source:gD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),vD=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),bD=()=>r.jsxs("div",{children:[r.jsx(ee,{text:"Info Alert",type:"info"}),r.jsx(ee,{text:"Success Alert",type:"success"}),r.jsx(ee,{text:"Warning Alert",type:"warning"}),r.jsx(ee,{text:"Error Alert",type:"error"})]}),jD=`import React from 'react'
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
`,N0=()=>r.jsx(k,{code:"type",Component:bD,Source:jD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),yD=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),He=({tocName:e,children:t})=>r.jsx(Zh.Provider,{tocName:e,children:t}),SD=({id:e,title:t,addPageTocHeading:n})=>{const o=Wh(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(o,t,a)},[e,t]),r.jsx("h2",{id:o,ref:a,className:"section-heading",children:t})},re=Zh.Consumer(SD),CD=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(i0,{}),r.jsxs(He,{tocName:"alert",children:[r.jsx(re,{title:"Properties"}),r.jsx(E0,{}),r.jsx(k0,{}),r.jsx(v0,{}),r.jsx(g0,{}),r.jsx(S0,{}),r.jsx(C0,{}),r.jsx(x0,{}),r.jsx(j0,{}),r.jsx(m0,{}),r.jsx(h0,{}),r.jsx(y0,{}),r.jsx(w0,{}),r.jsx(_0,{}),r.jsx(f0,{}),r.jsx(N0,{}),r.jsx(T0,{}),r.jsx(b0,{}),r.jsx(re,{title:"Components"}),r.jsx(d0,{}),r.jsx(u0,{}),r.jsx(p0,{}),r.jsx(c0,{})]})]}),wD=Object.freeze(Object.defineProperty({__proto__:null,default:CD},Symbol.toStringTag,{value:"Module"})),_D=()=>r.jsx(ae,{children:"This is a Badge"}),TD=`import { Badge } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Badge } from '@abw/badger-react-ui'

const BadgeExample = () =>
  <Badge>
    This is a Badge
  </Badge>

export default BadgeExample
`,R0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Badge"})," component can be used to render a badge. Any child elements will be included as content."]}),r.jsx("p",{children:"There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles."}),r.jsx(ne,{Component:_D,code:TD,expand:!0})]}),kD=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),ED=()=>r.jsx(ae,{text:"Custom Badge Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),ND=`import React from 'react'
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
`,O0=()=>r.jsxs(k,{code:"Content",Component:ED,Source:ND,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the badge content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the badge text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that badge content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all badges."]})]}),RD=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),OD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(ae,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(ae,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(ae,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),DD=`import React from 'react'
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
`,D0=()=>r.jsx(k,{code:"border",Component:OD,Source:DD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width."]})}),LD=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),BD=()=>r.jsx(ae,{text:"Custom Badge",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),$D=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,L0=()=>r.jsx(k,{code:"className",Component:BD,Source:$D,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the badge."]})}),AD=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),MD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(ae,{text:"Red Badge",color:"red"}),r.jsx(ae,{text:"Brown Badge",color:"brown"}),r.jsx(ae,{text:"Orange Badge",color:"orange"}),r.jsx(ae,{text:"Yellow Badge",color:"yellow"}),r.jsx(ae,{text:"Green Badge",color:"green"}),r.jsx(ae,{text:"Teal Badge",color:"teal"}),r.jsx(ae,{text:"Blue Badge",color:"blue"}),r.jsx(ae,{text:"Indigo Badge",color:"indigo"}),r.jsx(ae,{text:"Violet Badge",color:"violet"}),r.jsx(ae,{text:"Purple Badge",color:"purple"}),r.jsx(ae,{text:"Pink Badge",color:"pink"}),r.jsx(ae,{text:"Maroon Badge",color:"maroon"})]}),PD=`import React from 'react'
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
`,B0=()=>r.jsx(k,{code:"color",Component:MD,Source:PD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the badge."]})}),ID=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),zD=()=>r.jsx(ae,{color:"green",icon:"thumb"}),FD=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    icon="thumb"
  />
/* END */

export default Component
`,$0=()=>r.jsx(k,{code:"icon",Component:zD,Source:FD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a badge."]})}),UD=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),VD=()=>r.jsx(ae,{color:"green",text:"Unlocked",iconLeft:"unlocked"}),HD=`import React from 'react'
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
`,A0=()=>r.jsx(k,{code:"iconLeft",Component:VD,Source:HD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a badge."]})}),WD=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),ZD=()=>r.jsx(ae,{color:"red",text:"Locked",iconRight:"locked"}),KD=`import React from 'react'
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
`,M0=()=>r.jsx(k,{code:"iconRight",Component:ZD,Source:KD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a badge."]})}),YD=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),GD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Radius 0",color:"olive",radius:0}),r.jsx(ae,{text:"Radius 2",color:"green",radius:2}),r.jsx(ae,{text:"Radius 4",color:"teal",radius:3}),r.jsx(ae,{text:"Radius 6",color:"blue",radius:4})]}),qD=`import React from 'react'
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
`,P0=()=>r.jsx(k,{code:"radius",Component:GD,Source:qD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),XD=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),QD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(ae,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(ae,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(ae,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(ae,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),JD=`import React from 'react'
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
`,I0=()=>r.jsx(k,{code:"shadow",Component:QD,Source:JD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the badge ranging from 1 to 5."]})}),eL=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),tL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Smallest",size:"smallest"}),r.jsx(ae,{text:"Smaller",size:"smaller"}),r.jsx(ae,{text:"Small",size:"small"}),r.jsx(ae,{text:"Medium",size:"medium"}),r.jsx(ae,{text:"Large",size:"large"}),r.jsx(ae,{text:"Larger",size:"larger"}),r.jsx(ae,{text:"Largest",size:"largest"}),r.jsx(ae,{text:"x3",size:"x3"}),r.jsx(ae,{text:"x5",size:"x5"}),r.jsx(ae,{text:"x7",size:"x7"})]}),nL=`import React from 'react'
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
`,z0=()=>r.jsx(k,{code:"size",Component:tL,Source:nL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the badge size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),oL=()=>r.jsx(ae,{text:"Tag Badge",tag:!0}),aL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Tag Badge" tag/>
/* END */

export default Component
`,F0=()=>r.jsx(k,{code:"tag",Component:oL,Source:aL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tag"})," property can be used to add the ",r.jsx("code",{children:"tag"})," CSS class to change the appearance of the badge."]})}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),lL=()=>r.jsx(ae,{text:"Grey Badge"}),iL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Grey Badge"/>
/* END */

export default Component
`,U0=()=>r.jsx(k,{code:"text",Component:lL,Source:iL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the badge."]})}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),dL=()=>r.jsx(ae,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),uL=`import React from 'react'
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
`,V0=()=>r.jsx(k,{code:"tooltip",Component:dL,Source:uL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the badge.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),hL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Badge"}),r.jsx(R0,{}),r.jsxs(He,{tocName:"badge",children:[r.jsx(re,{title:"Properties"}),r.jsx(U0,{}),r.jsx(F0,{}),r.jsx(B0,{}),r.jsx(L0,{}),r.jsx(D0,{}),r.jsx(P0,{}),r.jsx(I0,{}),r.jsx(z0,{}),r.jsx($0,{}),r.jsx(A0,{}),r.jsx(M0,{}),r.jsx(V0,{}),r.jsx(re,{title:"Components"}),r.jsx(O0,{})]})]}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:hL},Symbol.toStringTag,{value:"Module"})),fL=()=>r.jsx(L,{children:"This is a button"}),xL=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,H0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(ne,{Component:fL,code:xL,expand:!0})]}),gL=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),vL=()=>r.jsx(L,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),bL=`import React from 'react'
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
`,W0=()=>r.jsxs(k,{code:"Content",Component:vL,Source:bL,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),yL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(L,{text:"Red Bare",color:"red",bare:!0}),r.jsx(L,{text:"Green Bare",color:"green",bare:!0}),r.jsx(L,{text:"Blue Bare",color:"blue",bare:!0})]}),SL=`import React from 'react'
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
`,Z0=()=>r.jsx(k,{code:"bare",Component:yL,Source:SL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),CL=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),wL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(L,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(L,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(L,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(L,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),_L=`import React from 'react'
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
`,K0=()=>r.jsx(k,{code:"border",Component:wL,Source:_L,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),kL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(L,{text:"Yellow Button",color:"yellow"}),r.jsx(L,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),EL=`import React from 'react'
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
`,Y0=()=>r.jsx(k,{code:"bright",Component:kL,Source:EL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),RL=()=>r.jsx(L,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),OL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,G0=()=>r.jsx(k,{code:"className",Component:RL,Source:OL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),LL=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(L,{text:"Red Button",color:"red"}),r.jsx(L,{text:"Brown Button",color:"brown"}),r.jsx(L,{text:"Orange Button",color:"orange"}),r.jsx(L,{text:"Yellow Button",color:"yellow"}),r.jsx(L,{text:"Green Button",color:"green"}),r.jsx(L,{text:"Teal Button",color:"teal"}),r.jsx(L,{text:"Blue Button",color:"blue"}),r.jsx(L,{text:"Indigo Button",color:"indigo"}),r.jsx(L,{text:"Violet Button",color:"violet"}),r.jsx(L,{text:"Purple Button",color:"purple"}),r.jsx(L,{text:"Pink Button",color:"pink"}),r.jsx(L,{text:"Maroon Button",color:"maroon"})]}),BL=`import React from 'react'
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
`,q0=()=>r.jsx(k,{code:"color",Component:LL,Source:BL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),$L=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),AL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(L,{text:"Red Button",color:"red"}),r.jsx(L,{text:"Dark Red Button",color:"red",dark:!0})]}),ML=`import React from 'react'
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
`,X0=()=>r.jsx(k,{code:"dark",Component:AL,Source:ML,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),PL=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),IL=()=>r.jsx(L,{text:"Disabled Button",disabled:!0}),zL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,Q0=()=>r.jsx(k,{code:"disabled",Component:IL,Source:zL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),UL=()=>r.jsx(L,{color:"green",icon:"bars"}),VL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,J0=()=>r.jsx(k,{code:"icon",Component:UL,Source:VL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),HL=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),WL=()=>r.jsx(L,{color:"green",text:"Back",iconLeft:"angle-left"}),ZL=`import React from 'react'
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
`,e4=()=>r.jsx(k,{code:"iconLeft",Component:WL,Source:ZL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),YL=()=>r.jsx(L,{color:"green",text:"Next",iconRight:"angle-right"}),GL=`import React from 'react'
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
`,t4=()=>r.jsx(k,{code:"iconRight",Component:YL,Source:GL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),qL=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),XL=()=>r.jsx(L,{text:"I am labelled!",label:"This is a label"}),QL=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,n4=()=>r.jsx(k,{code:"label",Component:XL,Source:QL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),eB=()=>r.jsx(L,{text:"Click Me!",onClick:()=>window.alert("Click!")}),tB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,r4=()=>r.jsx(k,{code:"onClick",Component:eB,Source:tB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),nB=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),rB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(L,{text:"Red Outline",color:"red",outline:!0}),r.jsx(L,{text:"Green Outline",color:"green",outline:!0}),r.jsx(L,{text:"Blue Outline",color:"blue",outline:!0})]}),oB=`import React from 'react'
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
`,o4=()=>r.jsx(k,{code:"outline",Component:rB,Source:oB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),aB=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),sB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(L,{text:"Radius 0",color:"olive",radius:0}),r.jsx(L,{text:"Radius 2",color:"green",radius:2}),r.jsx(L,{text:"Radius 4",color:"teal",radius:3}),r.jsx(L,{text:"Radius 6",color:"blue",radius:4})]}),lB=`import React from 'react'
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
`,a4=()=>r.jsx(k,{code:"radius",Component:sB,Source:lB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),iB=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),cB=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(L,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(L,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(L,{text:"Blue Shaded",color:"blue",shaded:!0})]}),dB=`import React from 'react'
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
`,s4=()=>r.jsx(k,{code:"shaded",Component:cB,Source:dB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),uB=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),pB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(L,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(L,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(L,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(L,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(L,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),hB=`import React from 'react'
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
`,l4=()=>r.jsx(k,{code:"shadow",Component:pB,Source:hB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),mB=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),fB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(L,{text:"Smallest",size:"smallest"}),r.jsx(L,{text:"Smaller",size:"smaller"}),r.jsx(L,{text:"Small",size:"small"}),r.jsx(L,{text:"Medium",size:"medium"}),r.jsx(L,{text:"Large",size:"large"}),r.jsx(L,{text:"Larger",size:"larger"}),r.jsx(L,{text:"Largest",size:"largest"}),r.jsx(L,{text:"x3",size:"x3"}),r.jsx(L,{text:"x5",size:"x5"}),r.jsx(L,{text:"x7",size:"x7"})]}),xB=`import React from 'react'
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
`,i4=()=>r.jsx(k,{code:"size",Component:fB,Source:xB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),gB=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),vB=()=>r.jsx(L,{text:"Grey Button"}),bB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,c4=()=>r.jsx(k,{code:"text",Component:vB,Source:bB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),jB=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),yB=()=>r.jsx(L,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),SB=`import React from 'react'
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
`,d4=()=>r.jsx(k,{code:"tooltip",Component:yB,Source:SB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),CB=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),wB=()=>r.jsx(L,{text:"Grey Button",type:"submit"}),_B=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,u4=()=>r.jsxs(k,{code:"type",Component:wB,Source:_B,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),TB=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),kB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(H0,{}),r.jsxs(He,{tocName:"button",children:[r.jsx(re,{title:"Properties"}),r.jsx(c4,{}),r.jsx(r4,{}),r.jsx(Q0,{}),r.jsx(q0,{}),r.jsx(Y0,{}),r.jsx(X0,{}),r.jsx(s4,{}),r.jsx(o4,{}),r.jsx(Z0,{}),r.jsx(G0,{}),r.jsx(K0,{}),r.jsx(a4,{}),r.jsx(l4,{}),r.jsx(i4,{}),r.jsx(J0,{}),r.jsx(e4,{}),r.jsx(t4,{}),r.jsx(n4,{}),r.jsx(d4,{}),r.jsx(u4,{}),r.jsx(re,{title:"Components"}),r.jsx(W0,{})]})]}),EB=Object.freeze(Object.defineProperty({__proto__:null,default:kB},Symbol.toStringTag,{value:"Module"})),NB=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),RB=()=>r.jsx(wo,{buttons:[{text:"One"},{text:"Two"}],Button:NB}),OB=`import { Buttons } from '@/src/index.jsx'

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
`,p4=()=>r.jsx(k,{code:"Button",Component:RB,Source:OB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),DB=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),LB=()=>r.jsxs(wo,{children:[r.jsx(L,{text:"One",outline:!0}),r.jsx(L,{text:"Two",outline:!0})]}),BB=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,h4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(ne,{Component:LB,code:BB,expand:!0})]}),$B=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),AB=()=>r.jsx(r.Fragment,{children:r.jsx(wo,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),MB=`import React from 'react'
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
`,m4=()=>r.jsx(k,{code:"buttonClass",Component:AB,Source:MB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),PB=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),IB=()=>r.jsx(r.Fragment,{children:r.jsx(wo,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),zB=`import React from 'react'
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
`,f4=()=>r.jsx(k,{code:"buttons",Component:IB,Source:zB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),FB=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),UB=()=>r.jsx(r.Fragment,{children:r.jsx(wo,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),VB=`import React from 'react'
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
`,x4=()=>r.jsx(k,{code:"className",Component:UB,Source:VB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),HB=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),WB=()=>r.jsx(r.Fragment,{children:r.jsx(wo,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),ZB=`import React from 'react'
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
`,g4=()=>r.jsx(k,{code:"outline",Component:WB,Source:ZB,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx("code",{children:"Button"})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),KB=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),YB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(h4,{}),r.jsxs(He,{tocName:"buttons",children:[r.jsx(re,{title:"Properties"}),r.jsx(f4,{}),r.jsx(g4,{}),r.jsx(x4,{}),r.jsx(m4,{}),r.jsx(re,{title:"Components"}),r.jsx(p4,{})]})]}),GB=Object.freeze(Object.defineProperty({__proto__:null,default:YB},Symbol.toStringTag,{value:"Module"})),qB=()=>r.jsx(Pw,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),XB=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,v4=()=>r.jsx(k,{code:"CheckboxState",Component:qB,Source:XB,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),QB=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),JB=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",checked:e,onChange:t})},e$=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,b4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(ne,{Component:JB,code:e$,expand:!0})]}),t$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),n$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{border:!0,text:"I like badgers",checked:e,onChange:t})},r$=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,j4=()=>r.jsx(k,{code:"border",Component:n$,Source:r$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),o$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),a$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",checked:e,onChange:t})},s$=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,y4=()=>r.jsx(k,{code:"checked",Component:a$,Source:s$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),l$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),i$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},c$=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,S4=()=>r.jsx(k,{code:"checkedText / uncheckedText",Component:i$,Source:c$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),d$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),u$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",className:"large border",checked:e,onChange:t})},p$=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,C4=()=>r.jsx(k,{code:"className",Component:u$,Source:p$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),h$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),m$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},f$=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,w4=()=>r.jsx(k,{code:"disabled",Component:m$,Source:f$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),x$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),g$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"I like badgers",checked:e,onChange:t})},v$=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,_4=()=>r.jsx(k,{code:"onChange",Component:g$,Source:v$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),b$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),j$=()=>{const[e,t]=v.useState(!1);return r.jsx($n,{text:"Badger are the best!",checked:e,onChange:t})},y$=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,T4=()=>r.jsx(k,{code:"text",Component:j$,Source:y$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),S$=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),C$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(b4,{}),r.jsxs(He,{tocName:"checkbox",children:[r.jsx(re,{title:"Properties"}),r.jsx(T4,{}),r.jsx(y4,{}),r.jsx(S4,{}),r.jsx(_4,{}),r.jsx(C4,{}),r.jsx(j4,{}),r.jsx(w4,{}),r.jsx(re,{title:"Components"}),r.jsx(v4,{})]})]}),w$=Object.freeze(Object.defineProperty({__proto__:null,default:C$},Symbol.toStringTag,{value:"Module"})),_$=()=>r.jsx(r.Fragment,{children:r.jsx(An,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),T$=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,k4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(ne,{Component:_$,code:T$,expand:!0})]}),k$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),E$=()=>r.jsx(An,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),N$=`import React from 'react'
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

export default CancelExample`,E4=()=>r.jsx(k,{code:"cancel",Component:E$,Source:N$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),R$=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),O$=()=>r.jsx(An,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),D$=`import React from 'react'
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

export default CancelExample`,N4=()=>r.jsx(k,{id:"cancelProps",code:"cancelXXX",Component:O$,Source:D$,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),L$=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),B$=()=>r.jsx(r.Fragment,{children:r.jsx(An,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),$$=`import React from 'react'
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
`,R4=()=>r.jsx(k,{code:"className",Component:B$,Source:$$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),A$=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),M$=()=>r.jsx(An,{text:"Click to Delete",color:"red"}),P$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,O4=()=>r.jsx(k,{code:"color",Component:M$,Source:P$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),I$=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),z$=()=>r.jsx(An,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),F$=`import React from 'react'
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

export default ConfirmExample`,D4=()=>r.jsx(k,{code:"confirm",Component:z$,Source:F$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),U$=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),V$=()=>r.jsx(An,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),H$=`import React from 'react'
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

export default ConfirmProps`,L4=()=>r.jsx(k,{id:"confirmProps",code:"confirmXXX",Component:V$,Source:H$,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),W$=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),Z$=()=>r.jsx(An,{text:"Click to Delete",color:"red",iconRight:"trash"}),K$=`import React from 'react'
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
`,B4=()=>r.jsx(k,{code:"iconRight",Component:Z$,Source:K$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),Y$=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),G$=()=>r.jsx(An,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),q$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,$4=()=>r.jsx(k,{code:"onClick",Component:G$,Source:q$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),X$=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),Q$=()=>r.jsx(An,{text:"Click to Delete"}),J$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,A4=()=>r.jsx(k,{code:"text",Component:Q$,Source:J$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),tA=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(k4,{}),r.jsxs(He,{tocName:"confirm",children:[r.jsx(re,{title:"Properties"}),r.jsx(A4,{}),r.jsx(O4,{}),r.jsx(B4,{}),r.jsx(R4,{}),r.jsx(E4,{}),r.jsx(N4,{}),r.jsx(D4,{}),r.jsx(L4,{}),r.jsx(re,{title:"Event Handlers"}),r.jsx($4,{})]})]}),nA=Object.freeze(Object.defineProperty({__proto__:null,default:tA},Symbol.toStringTag,{value:"Module"})),on=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],rA=()=>r.jsx($t,{rows:on,columns:"id name animal role"}),oA=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () =>
  <Datatable
    rows={animals}
    columns="id name animal role"
  />

export default DatatableExample`,M4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),r.jsx(ne,{Component:rA,code:oA})]}),aA=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),sA=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),lA=`import React from 'react'
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

export default DatatableExample`,P4=()=>r.jsx(k,{code:"color",Component:sA,Source:lA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),iA=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),cA=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),dA=`import React from 'react'
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

export default DatatableExample`,uA=()=>r.jsxs(k,{code:"type",Component:cA,Source:dA,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),pA=Object.freeze(Object.defineProperty({__proto__:null,default:uA},Symbol.toStringTag,{value:"Module"})),hA=()=>r.jsx($t,{rows:on,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),mA=`import React from 'react'
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

export default DatatableExample`,I4=()=>r.jsx(k,{code:"display",Component:hA,Source:mA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),fA=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),xA=()=>r.jsx($t,{color:"brand",rows:on,columns:"id name animal role"}),gA=`import React from 'react'
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
`,vA=()=>r.jsx($t,{color:"brand",rows:on,columns:["id","name","animal","role"]}),bA=`import React from 'react'
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
`,jA=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),yA=`import React from 'react'
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
`,SA=()=>r.jsx($t,{color:"brand",rows:on,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),CA=`import React from 'react'
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
`,wA=()=>r.jsx($t,{color:"brand",rows:on,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),_A=`import React from 'react'
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
`,z4=()=>r.jsxs(z,{code:"columns",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),r.jsx(ne,{Component:xA,code:gA,caption:"columns",expand:!1,undent:2}),r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),r.jsx(ne,{Component:vA,code:bA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),r.jsx(ne,{Component:jA,code:yA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),r.jsx(ne,{Component:SA,code:CA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]}),r.jsx(ne,{Component:wA,code:_A,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),TA=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),kA=()=>r.jsx($t,{rows:on,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),EA=`import React from 'react'
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

export default DatatableExample`,F4=()=>r.jsx(k,{code:"label",Component:kA,Source:EA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),NA=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),RA=()=>r.jsx($t,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),OA=`import React from 'react'
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

export default DatatableExample`,U4=()=>r.jsxs(k,{code:"type",Component:RA,Source:OA,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),DA=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),LA=()=>r.jsx($t,{rows:on,columns:"id name animal role",onRowClick:e=>window.alert(`Animal #${e.id}: ${e.name}`)}),BA=`import React from 'react'
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

export default DatatableExample`,V4=()=>r.jsx(k,{code:"onRowClick",Component:LA,Source:BA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onRowClick"})," property can be used to define a handler which will be called when the user clicks on a row.  When set the table will have the ",r.jsx("code",{children:"selectable"})," CSS class added to highlight the hovered row."]})}),$A=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),AA=()=>r.jsx($t,{rows:on,columns:"id name animal role",pager:{size:"small",color:"blue"}}),MA=`import React from 'react'
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
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ve.apply(this,arguments)}var We;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(We||(We={}));const x1="popstate";function PA(e){e===void 0&&(e={});function t(o,a){let{pathname:s,search:l,hash:i}=o.location;return Xs("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:mo(a)}return zA(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ho(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function IA(){return Math.random().toString(36).substr(2,8)}function g1(e,t){return{usr:e.state,key:e.key,idx:t}}function Xs(e,t,n,o){return n===void 0&&(n=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sr(t):t,{state:n,key:t&&t.key||o||IA()})}function mo(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function zA(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:s=!1}=o,l=a.history,i=We.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ve({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=We.Pop;let _=u(),g=_==null?null:_-d;d=_,c&&c({action:i,location:S.location,delta:g})}function f(_,g){i=We.Push;let h=Xs(S.location,_,g);n&&n(h,_),d=u()+1;let m=g1(h,d),j=S.createHref(h);try{l.pushState(m,"",j)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(j)}s&&c&&c({action:i,location:S.location,delta:1})}function b(_,g){i=We.Replace;let h=Xs(S.location,_,g);n&&n(h,_),d=u();let m=g1(h,d),j=S.createHref(h);l.replaceState(m,"",j),s&&c&&c({action:i,location:S.location,delta:0})}function y(_){let g=a.location.origin!=="null"?a.location.origin:a.location.href,h=typeof _=="string"?_:mo(_);return ue(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let S={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(x1,p),c=_,()=>{a.removeEventListener(x1,p),c=null}},createHref(_){return t(a,_)},createURL:y,encodeLocation(_){let g=y(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:b,go(_){return l.go(_)}};return S}var Fe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fe||(Fe={}));const FA=new Set(["lazy","caseSensitive","path","id","index","children"]);function UA(e){return e.index===!0}function qu(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(ue(a.index!==!0||!a.children,"Cannot specify children on an index route"),ue(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),UA(a)){let c=Ve({},a,t(a),{id:i});return o[i]=c,c}else{let c=Ve({},a,t(a),{id:i,children:void 0});return o[i]=c,a.children&&(c.children=qu(a.children,t,l,o)),c}})}function ea(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?sr(t):t,a=Lr(o.pathname||"/",n);if(a==null)return null;let s=H4(e);HA(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=JA(s[i],tM(a));return l}function VA(e,t){let{route:n,pathname:o,params:a}=e;return{id:n.id,pathname:o,params:a,data:t[n.id],handle:n.handle}}function H4(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(ue(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Kn([o,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),H4(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:XA(d,s.index),routesMeta:u})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of W4(s.path))a(s,l,c)}),t}function W4(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let l=W4(o.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function HA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:QA(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const WA=/^:\w+$/,ZA=3,KA=2,YA=1,GA=10,qA=-2,v1=e=>e==="*";function XA(e,t){let n=e.split("/"),o=n.length;return n.some(v1)&&(o+=qA),t&&(o+=KA),n.filter(a=>!v1(a)).reduce((a,s)=>a+(WA.test(s)?ZA:s===""?YA:GA),o)}function QA(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function JA(e,t){let{routesMeta:n}=e,o={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",u=Xu({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;s.push({params:o,pathname:Kn([a,u.pathname]),pathnameBase:aM(Kn([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=Kn([a,u.pathnameBase]))}return s}function Xu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=eM(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:f,isOptional:b}=u;if(f==="*"){let S=i[p]||"";l=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const y=i[p];return b&&!y?d[f]=void 0:d[f]=nM(y||"",f),d},{}),pathname:s,pathnameBase:l,pattern:e}}function eM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ho(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function tM(e){try{return decodeURI(e)}catch(t){return ho(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nM(e,t){try{return decodeURIComponent(e)}catch(n){return ho(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function rM(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?sr(e):e;return{pathname:n?n.startsWith("/")?n:oM(n,t):t,search:sM(o),hash:lM(a)}}function oM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Id(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kh(e,t){let n=Z4(e);return t?n.map((o,a)=>a===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Yh(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=sr(e):(a=Ve({},e),ue(!a.pathname||!a.pathname.includes("?"),Id("?","pathname","search",a)),ue(!a.pathname||!a.pathname.includes("#"),Id("#","pathname","hash",a)),ue(!a.search||!a.search.includes("#"),Id("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}i=p>=0?t[p]:"/"}let c=rM(a,i),d=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),aM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Gh{constructor(t,n,o,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function K4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Y4=["post","put","patch","delete"],iM=new Set(Y4),cM=["get",...Y4],dM=new Set(cM),uM=new Set([301,302,303,307,308]),pM=new Set([307,308]),zd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ga={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},G4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),q4="remix-router-transitions";function fM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let T=e.detectErrorBoundary;a=R=>({hasErrorBoundary:T(R)})}else a=mM;let s={},l=qu(e.routes,a,void 0,s),i,c=e.basename||"/",d=Ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,f=null,b=null,y=null,S=e.hydrationData!=null,_=ea(l,e.history.location,c),g=null;if(_==null){let T=Zt(404,{pathname:e.history.location.pathname}),{matches:R,route:O}=T1(l);_=R,g={[O.id]:T}}let h,m=_.some(T=>T.route.lazy),j=_.some(T=>T.route.loader);if(m)h=!1;else if(!j)h=!0;else if(d.v7_partialHydration){let T=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;h=_.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(T&&T[O.route.id]!==void 0||R&&R[O.route.id]!==void 0))}else h=e.hydrationData!=null;let C,x={historyAction:e.history.action,location:e.history.location,matches:_,initialized:h,navigation:zd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},w=We.Pop,E=!1,N,D=!1,$=new Map,Y=null,q=!1,le=!1,we=[],je=[],Q=new Map,B=0,P=-1,I=new Map,V=new Set,W=new Map,_e=new Map,ce=new Set,Se=new Map,ie=new Map,De=!1;function ct(){if(u=e.history.listen(T=>{let{action:R,location:O,delta:M}=T;if(De){De=!1;return}ho(ie.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Ol({currentLocation:x.location,nextLocation:O,historyAction:R});if(F&&M!=null){De=!0,e.history.go(M*-1),Yr(F,{state:"blocked",location:O,proceed(){Yr(F,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(M)},reset(){let oe=new Map(x.blockers);oe.set(F,Ga),Le({blockers:oe})}});return}return Tt(R,O)}),n){TM(t,$);let T=()=>kM(t,$);t.addEventListener("pagehide",T),Y=()=>t.removeEventListener("pagehide",T)}return x.initialized||Tt(We.Pop,x.location,{initialHydration:!0}),C}function _t(){u&&u(),Y&&Y(),p.clear(),N&&N.abort(),x.fetchers.forEach((T,R)=>ln(R)),x.blockers.forEach((T,R)=>Rl(R))}function fe(T){return p.add(T),()=>p.delete(T)}function Le(T,R){R===void 0&&(R={}),x=Ve({},x,T);let O=[],M=[];d.v7_fetcherPersist&&x.fetchers.forEach((F,oe)=>{F.state==="idle"&&(ce.has(oe)?M.push(oe):O.push(oe))}),[...p].forEach(F=>F(x,{deletedFetchers:M,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),d.v7_fetcherPersist&&(O.forEach(F=>x.fetchers.delete(F)),M.forEach(F=>ln(F)))}function et(T,R,O){var M,F;let{flushSync:oe}=O===void 0?{}:O,K=x.actionData!=null&&x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((M=T.state)==null?void 0:M._isRedirect)!==!0,X;R.actionData?Object.keys(R.actionData).length>0?X=R.actionData:X=null:K?X=x.actionData:X=null;let Z=R.loaderData?_1(x.loaderData,R.loaderData,R.matches||[],R.errors):x.loaderData,de=x.blockers;de.size>0&&(de=new Map(de),de.forEach((ye,Me)=>de.set(Me,Ga)));let Ae=E===!0||x.navigation.formMethod!=null&&hn(x.navigation.formMethod)&&((F=T.state)==null?void 0:F._isRedirect)!==!0;i&&(l=i,i=void 0),q||w===We.Pop||(w===We.Push?e.history.push(T,T.state):w===We.Replace&&e.history.replace(T,T.state));let se;if(w===We.Pop){let ye=$.get(x.location.pathname);ye&&ye.has(T.pathname)?se={currentLocation:x.location,nextLocation:T}:$.has(T.pathname)&&(se={currentLocation:T,nextLocation:x.location})}else if(D){let ye=$.get(x.location.pathname);ye?ye.add(T.pathname):(ye=new Set([T.pathname]),$.set(x.location.pathname,ye)),se={currentLocation:x.location,nextLocation:T}}Le(Ve({},R,{actionData:X,loaderData:Z,historyAction:w,location:T,initialized:!0,navigation:zd,revalidation:"idle",restoreScrollPosition:Ke(T,R.matches||x.matches),preventScrollReset:Ae,blockers:de}),{viewTransitionOpts:se,flushSync:oe===!0}),w=We.Pop,E=!1,D=!1,q=!1,le=!1,we=[],je=[]}async function At(T,R){if(typeof T=="number"){e.history.go(T);return}let O=Qu(x.location,x.matches,c,d.v7_prependBasename,T,d.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:M,submission:F,error:oe}=b1(d.v7_normalizeFormMethod,!1,O,R),K=x.location,X=Xs(x.location,M,R&&R.state);X=Ve({},X,e.history.encodeLocation(X));let Z=R&&R.replace!=null?R.replace:void 0,de=We.Push;Z===!0?de=We.Replace:Z===!1||F!=null&&hn(F.formMethod)&&F.formAction===x.location.pathname+x.location.search&&(de=We.Replace);let Ae=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,se=(R&&R.unstable_flushSync)===!0,ye=Ol({currentLocation:K,nextLocation:X,historyAction:de});if(ye){Yr(ye,{state:"blocked",location:X,proceed(){Yr(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),At(T,R)},reset(){let Me=new Map(x.blockers);Me.set(ye,Ga),Le({blockers:Me})}});return}return await Tt(de,X,{submission:F,pendingError:oe,preventScrollReset:Ae,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:se})}function an(){if(ko(),Le({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Tt(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Tt(w||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Tt(T,R,O){N&&N.abort(),N=null,w=T,q=(O&&O.startUninterruptedRevalidation)===!0,qc(x.location,x.matches),E=(O&&O.preventScrollReset)===!0,D=(O&&O.enableViewTransition)===!0;let M=i||l,F=O&&O.overrideNavigation,oe=ea(M,R,c),K=(O&&O.flushSync)===!0;if(!oe){let Me=Zt(404,{pathname:R.pathname}),{matches:dt,route:tt}=T1(M);Eo(),et(R,{matches:dt,loaderData:{},errors:{[tt.id]:Me}},{flushSync:K});return}if(x.initialized&&!le&&jM(x.location,R)&&!(O&&O.submission&&hn(O.submission.formMethod))){et(R,{matches:oe},{flushSync:K});return}N=new AbortController;let X=Xa(e.history,R,N.signal,O&&O.submission),Z,de;if(O&&O.pendingError)de={[Ts(oe).route.id]:O.pendingError};else if(O&&O.submission&&hn(O.submission.formMethod)){let Me=await lr(X,R,O.submission,oe,{replace:O.replace,flushSync:K});if(Me.shortCircuited)return;Z=Me.pendingActionData,de=Me.pendingActionError,F=Fd(R,O.submission),K=!1,X=new Request(X.url,{signal:X.signal})}let{shortCircuited:Ae,loaderData:se,errors:ye}=await kl(X,R,oe,F,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,K,Z,de);Ae||(N=null,et(R,Ve({matches:oe},Z?{actionData:Z}:{},{loaderData:se,errors:ye})))}async function lr(T,R,O,M,F){F===void 0&&(F={}),ko();let oe=wM(R,O);Le({navigation:oe},{flushSync:F.flushSync===!0});let K,X=ep(M,R);if(!X.route.action&&!X.route.lazy)K={type:Fe.error,error:Zt(405,{method:T.method,pathname:R.pathname,routeId:X.route.id})};else if(K=await qa("action",T,X,M,s,a,c,d.v7_relativeSplatPath),T.signal.aborted)return{shortCircuited:!0};if(oo(K)){let Z;return F&&F.replace!=null?Z=F.replace:Z=K.location===x.location.pathname+x.location.search,await yn(x,K,{submission:O,replace:Z}),{shortCircuited:!0}}if(ta(K)){let Z=Ts(M,X.route.id);return(F&&F.replace)!==!0&&(w=We.Push),{pendingActionData:{},pendingActionError:{[Z.route.id]:K.error}}}if(ro(K))throw Zt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:K.data}}}async function kl(T,R,O,M,F,oe,K,X,Z,de,Ae){let se=M||Fd(R,F),ye=F||oe||N1(se),Me=i||l,[dt,tt]=j1(e.history,x,O,ye,R,d.v7_partialHydration&&X===!0,le,we,je,ce,W,V,Me,c,de,Ae);if(Eo(Te=>!(O&&O.some(Be=>Be.route.id===Te))||dt&&dt.some(Be=>Be.route.id===Te)),P=++B,dt.length===0&&tt.length===0){let Te=cn();return et(R,Ve({matches:O,loaderData:{},errors:Ae||null},de?{actionData:de}:{},Te?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Z}),{shortCircuited:!0}}if(!q&&(!d.v7_partialHydration||!X)){tt.forEach(Be=>{let Sn=x.fetchers.get(Be.key),Bl=Qa(void 0,Sn?Sn.data:void 0);x.fetchers.set(Be.key,Bl)});let Te=de||x.actionData;Le(Ve({navigation:se},Te?Object.keys(Te).length===0?{actionData:null}:{actionData:Te}:{},tt.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Z})}tt.forEach(Te=>{Q.has(Te.key)&&kt(Te.key),Te.controller&&Q.set(Te.key,Te.controller)});let No=()=>tt.forEach(Te=>kt(Te.key));N&&N.signal.addEventListener("abort",No);let{results:Xc,loaderResults:Ro,fetcherResults:cr}=await Zr(x.matches,O,dt,tt,T);if(T.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",No),tt.forEach(Te=>Q.delete(Te.key));let Gr=k1(Xc);if(Gr){if(Gr.idx>=dt.length){let Te=tt[Gr.idx-dt.length].key;V.add(Te)}return await yn(x,Gr.result,{replace:K}),{shortCircuited:!0}}let{loaderData:Qc,errors:Jc}=w1(x,O,dt,Ro,Ae,tt,cr,Se);Se.forEach((Te,Be)=>{Te.subscribe(Sn=>{(Sn||Te.done)&&Se.delete(Be)})});let ed=cn(),Oo=Pa(P),Ll=ed||Oo||tt.length>0;return Ve({loaderData:Qc,errors:Jc},Ll?{fetchers:new Map(x.fetchers)}:{})}function El(T,R,O,M){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Q.has(T)&&kt(T);let F=(M&&M.unstable_flushSync)===!0,oe=i||l,K=Qu(x.location,x.matches,c,d.v7_prependBasename,O,d.v7_relativeSplatPath,R,M==null?void 0:M.relative),X=ea(oe,K,c);if(!X){Kr(T,R,Zt(404,{pathname:K}),{flushSync:F});return}let{path:Z,submission:de,error:Ae}=b1(d.v7_normalizeFormMethod,!0,K,M);if(Ae){Kr(T,R,Ae,{flushSync:F});return}let se=ep(X,Z);if(E=(M&&M.preventScrollReset)===!0,de&&hn(de.formMethod)){Aa(T,R,Z,se,X,F,de);return}W.set(T,{routeId:R,path:Z}),jn(T,R,Z,se,X,F,de)}async function Aa(T,R,O,M,F,oe,K){if(ko(),W.delete(T),!M.route.action&&!M.route.lazy){let Be=Zt(405,{method:K.formMethod,pathname:O,routeId:R});Kr(T,R,Be,{flushSync:oe});return}let X=x.fetchers.get(T);sn(T,_M(K,X),{flushSync:oe});let Z=new AbortController,de=Xa(e.history,O,Z.signal,K);Q.set(T,Z);let Ae=B,se=await qa("action",de,M,F,s,a,c,d.v7_relativeSplatPath);if(de.signal.aborted){Q.get(T)===Z&&Q.delete(T);return}if(d.v7_fetcherPersist&&ce.has(T)){if(oo(se)||ta(se)){sn(T,pr(void 0));return}}else{if(oo(se))if(Q.delete(T),P>Ae){sn(T,pr(void 0));return}else return V.add(T),sn(T,Qa(K)),yn(x,se,{fetcherSubmission:K});if(ta(se)){Kr(T,R,se.error);return}}if(ro(se))throw Zt(400,{type:"defer-action"});let ye=x.navigation.location||x.location,Me=Xa(e.history,ye,Z.signal),dt=i||l,tt=x.navigation.state!=="idle"?ea(dt,x.navigation.location,c):x.matches;ue(tt,"Didn't find any matches after fetcher action");let No=++B;I.set(T,No);let Xc=Qa(K,se.data);x.fetchers.set(T,Xc);let[Ro,cr]=j1(e.history,x,tt,K,ye,!1,le,we,je,ce,W,V,dt,c,{[M.route.id]:se.data},void 0);cr.filter(Be=>Be.key!==T).forEach(Be=>{let Sn=Be.key,Bl=x.fetchers.get(Sn),w6=Qa(void 0,Bl?Bl.data:void 0);x.fetchers.set(Sn,w6),Q.has(Sn)&&kt(Sn),Be.controller&&Q.set(Sn,Be.controller)}),Le({fetchers:new Map(x.fetchers)});let Gr=()=>cr.forEach(Be=>kt(Be.key));Z.signal.addEventListener("abort",Gr);let{results:Qc,loaderResults:Jc,fetcherResults:ed}=await Zr(x.matches,tt,Ro,cr,Me);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",Gr),I.delete(T),Q.delete(T),cr.forEach(Be=>Q.delete(Be.key));let Oo=k1(Qc);if(Oo){if(Oo.idx>=Ro.length){let Be=cr[Oo.idx-Ro.length].key;V.add(Be)}return yn(x,Oo.result)}let{loaderData:Ll,errors:Te}=w1(x,x.matches,Ro,Jc,void 0,cr,ed,Se);if(x.fetchers.has(T)){let Be=pr(se.data);x.fetchers.set(T,Be)}Pa(No),x.navigation.state==="loading"&&No>P?(ue(w,"Expected pending action"),N&&N.abort(),et(x.navigation.location,{matches:tt,loaderData:Ll,errors:Te,fetchers:new Map(x.fetchers)})):(Le({errors:Te,loaderData:_1(x.loaderData,Ll,tt,Te),fetchers:new Map(x.fetchers)}),le=!1)}async function jn(T,R,O,M,F,oe,K){let X=x.fetchers.get(T);sn(T,Qa(K,X?X.data:void 0),{flushSync:oe});let Z=new AbortController,de=Xa(e.history,O,Z.signal);Q.set(T,Z);let Ae=B,se=await qa("loader",de,M,F,s,a,c,d.v7_relativeSplatPath);if(ro(se)&&(se=await J4(se,de.signal,!0)||se),Q.get(T)===Z&&Q.delete(T),!de.signal.aborted){if(ce.has(T)){sn(T,pr(void 0));return}if(oo(se))if(P>Ae){sn(T,pr(void 0));return}else{V.add(T),await yn(x,se);return}if(ta(se)){Kr(T,R,se.error);return}ue(!ro(se),"Unhandled fetcher deferred data"),sn(T,pr(se.data))}}async function yn(T,R,O){let{submission:M,fetcherSubmission:F,replace:oe}=O===void 0?{}:O;R.revalidate&&(le=!0);let K=Xs(T.location,R.location,{_isRedirect:!0});if(ue(K,"Expected a location on the redirect navigation"),n){let ye=!1;if(R.reloadDocument)ye=!0;else if(G4.test(R.location)){const Me=e.history.createURL(R.location);ye=Me.origin!==t.location.origin||Lr(Me.pathname,c)==null}if(ye){oe?t.location.replace(R.location):t.location.assign(R.location);return}}N=null;let X=oe===!0?We.Replace:We.Push,{formMethod:Z,formAction:de,formEncType:Ae}=T.navigation;!M&&!F&&Z&&de&&Ae&&(M=N1(T.navigation));let se=M||F;if(pM.has(R.status)&&se&&hn(se.formMethod))await Tt(X,K,{submission:Ve({},se,{formAction:R.location}),preventScrollReset:E});else{let ye=Fd(K,M);await Tt(X,K,{overrideNavigation:ye,fetcherSubmission:F,preventScrollReset:E})}}async function Zr(T,R,O,M,F){let oe=await Promise.all([...O.map(Z=>qa("loader",F,Z,R,s,a,c,d.v7_relativeSplatPath)),...M.map(Z=>Z.matches&&Z.match&&Z.controller?qa("loader",Xa(e.history,Z.path,Z.controller.signal),Z.match,Z.matches,s,a,c,d.v7_relativeSplatPath):{type:Fe.error,error:Zt(404,{pathname:Z.path})})]),K=oe.slice(0,O.length),X=oe.slice(O.length);return await Promise.all([E1(T,O,K,K.map(()=>F.signal),!1,x.loaderData),E1(T,M.map(Z=>Z.match),X,M.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{results:oe,loaderResults:K,fetcherResults:X}}function ko(){le=!0,we.push(...Eo()),W.forEach((T,R)=>{Q.has(R)&&(je.push(R),kt(R))})}function sn(T,R,O){O===void 0&&(O={}),x.fetchers.set(T,R),Le({fetchers:new Map(x.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Kr(T,R,O,M){M===void 0&&(M={});let F=Ts(x.matches,R);ln(T),Le({errors:{[F.route.id]:O},fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Nl(T){return d.v7_fetcherPersist&&(_e.set(T,(_e.get(T)||0)+1),ce.has(T)&&ce.delete(T)),x.fetchers.get(T)||hM}function ln(T){let R=x.fetchers.get(T);Q.has(T)&&!(R&&R.state==="loading"&&I.has(T))&&kt(T),W.delete(T),I.delete(T),V.delete(T),ce.delete(T),x.fetchers.delete(T)}function ir(T){if(d.v7_fetcherPersist){let R=(_e.get(T)||0)-1;R<=0?(_e.delete(T),ce.add(T)):_e.set(T,R)}else ln(T);Le({fetchers:new Map(x.fetchers)})}function kt(T){let R=Q.get(T);ue(R,"Expected fetch controller: "+T),R.abort(),Q.delete(T)}function Ma(T){for(let R of T){let O=Nl(R),M=pr(O.data);x.fetchers.set(R,M)}}function cn(){let T=[],R=!1;for(let O of V){let M=x.fetchers.get(O);ue(M,"Expected fetcher: "+O),M.state==="loading"&&(V.delete(O),T.push(O),R=!0)}return Ma(T),R}function Pa(T){let R=[];for(let[O,M]of I)if(M<T){let F=x.fetchers.get(O);ue(F,"Expected fetcher: "+O),F.state==="loading"&&(kt(O),I.delete(O),R.push(O))}return Ma(R),R.length>0}function Yc(T,R){let O=x.blockers.get(T)||Ga;return ie.get(T)!==R&&ie.set(T,R),O}function Rl(T){x.blockers.delete(T),ie.delete(T)}function Yr(T,R){let O=x.blockers.get(T)||Ga;ue(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state);let M=new Map(x.blockers);M.set(T,R),Le({blockers:M})}function Ol(T){let{currentLocation:R,nextLocation:O,historyAction:M}=T;if(ie.size===0)return;ie.size>1&&ho(!1,"A router only supports one blocker at a time");let F=Array.from(ie.entries()),[oe,K]=F[F.length-1],X=x.blockers.get(oe);if(!(X&&X.state==="proceeding")&&K({currentLocation:R,nextLocation:O,historyAction:M}))return oe}function Eo(T){let R=[];return Se.forEach((O,M)=>{(!T||T(M))&&(O.cancel(),R.push(M),Se.delete(M))}),R}function Gc(T,R,O){if(f=T,y=R,b=O||null,!S&&x.navigation===zd){S=!0;let M=Ke(x.location,x.matches);M!=null&&Le({restoreScrollPosition:M})}return()=>{f=null,y=null,b=null}}function Dl(T,R){return b&&b(T,R.map(M=>VA(M,x.loaderData)))||T.key}function qc(T,R){if(f&&y){let O=Dl(T,R);f[O]=y()}}function Ke(T,R){if(f){let O=Dl(T,R),M=f[O];if(typeof M=="number")return M}return null}function xt(T){s={},i=qu(T,a,void 0,s)}return C={get basename(){return c},get future(){return d},get state(){return x},get routes(){return l},get window(){return t},initialize:ct,subscribe:fe,enableScrollRestoration:Gc,navigate:At,fetch:El,revalidate:an,createHref:T=>e.history.createHref(T),encodeLocation:T=>e.history.encodeLocation(T),getFetcher:Nl,deleteFetcher:ir,dispose:_t,getBlocker:Yc,deleteBlocker:Rl,_internalFetchControllers:Q,_internalActiveDeferreds:Se,_internalSetRoutes:xt},C}function xM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Qu(e,t,n,o,a,s,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=Yh(a||".",Kh(c,s),Lr(e.pathname,n)||e.pathname,i==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&d&&d.route.index&&!qh(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Kn([n,u.pathname])),mo(u)}function b1(e,t,n,o){if(!o||!xM(o))return{path:n};if(o.formMethod&&!CM(o.formMethod))return{path:n,error:Zt(405,{method:o.formMethod})};let a=()=>({path:n,error:Zt(400,{type:"invalid-body"})}),s=o.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=Q4(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!hn(l))return a();let f=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((b,y)=>{let[S,_]=y;return""+b+S+"="+_+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:f}}}else if(o.formEncType==="application/json"){if(!hn(l))return a();try{let f=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:f,text:void 0}}}catch{return a()}}}ue(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=Ju(o.formData),d=o.formData;else if(o.body instanceof FormData)c=Ju(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=C1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=C1(c)}catch{return a()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(hn(u.formMethod))return{path:n,submission:u};let p=sr(n);return t&&p.search&&qh(p.search)&&c.append("index",""),p.search="?"+c,{path:mo(p),submission:u}}function gM(e,t){let n=e;if(t){let o=e.findIndex(a=>a.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function j1(e,t,n,o,a,s,l,i,c,d,u,p,f,b,y,S){let _=S?Object.values(S)[0]:y?Object.values(y)[0]:void 0,g=e.createURL(t.location),h=e.createURL(a),m=S?Object.keys(S)[0]:void 0,C=gM(n,m).filter((w,E)=>{let{route:N}=w;if(N.lazy)return!0;if(N.loader==null)return!1;if(s)return N.loader.hydrate?!0:t.loaderData[N.id]===void 0&&(!t.errors||t.errors[N.id]===void 0);if(vM(t.loaderData,t.matches[E],w)||i.some(Y=>Y===w.route.id))return!0;let D=t.matches[E],$=w;return y1(w,Ve({currentUrl:g,currentParams:D.params,nextUrl:h,nextParams:$.params},o,{actionResult:_,defaultShouldRevalidate:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||X4(D,$)}))}),x=[];return u.forEach((w,E)=>{if(s||!n.some(q=>q.route.id===w.routeId)||d.has(E))return;let N=ea(f,w.path,b);if(!N){x.push({key:E,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(E),$=ep(N,w.path),Y=!1;p.has(E)?Y=!1:c.includes(E)?Y=!0:D&&D.state!=="idle"&&D.data===void 0?Y=l:Y=y1($,Ve({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},o,{actionResult:_,defaultShouldRevalidate:l})),Y&&x.push({key:E,routeId:w.routeId,path:w.path,matches:N,match:$,controller:new AbortController})}),[C,x]}function vM(e,t,n){let o=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return o||a}function X4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function y1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function S1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let a=n[e.id];ue(a,"No route found in manifest");let s={};for(let l in o){let c=a[l]!==void 0&&l!=="hasErrorBoundary";ho(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!FA.has(l)&&(s[l]=o[l])}Object.assign(a,s),Object.assign(a,Ve({},t(a),{lazy:void 0}))}async function qa(e,t,n,o,a,s,l,i,c){c===void 0&&(c={});let d,u,p,f=S=>{let _,g=new Promise((h,m)=>_=m);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([S({request:t,params:n.params,context:c.requestContext}),g])};try{let S=n.route[e];if(n.route.lazy)if(S){let _,g=await Promise.all([f(S).catch(h=>{_=h}),S1(n.route,s,a)]);if(_)throw _;u=g[0]}else if(await S1(n.route,s,a),S=n.route[e],S)u=await f(S);else if(e==="action"){let _=new URL(t.url),g=_.pathname+_.search;throw Zt(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:Fe.data,data:void 0};else if(S)u=await f(S);else{let _=new URL(t.url),g=_.pathname+_.search;throw Zt(404,{pathname:g})}ue(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(S){d=Fe.error,u=S}finally{p&&t.signal.removeEventListener("abort",p)}if(SM(u)){let S=u.status;if(uM.has(S)){let g=u.headers.get("Location");if(ue(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!G4.test(g))g=Qu(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,g,i);else if(!c.isStaticRequest){let h=new URL(t.url),m=g.startsWith("//")?new URL(h.protocol+g):new URL(g),j=Lr(m.pathname,l)!=null;m.origin===h.origin&&j&&(g=m.pathname+m.search+m.hash)}if(c.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Fe.redirect,status:S,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===Fe.error?Fe.error:Fe.data,response:u};let _;try{let g=u.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?_=await u.json():_=await u.text()}catch(g){return{type:Fe.error,error:g}}return d===Fe.error?{type:d,error:new Gh(S,u.statusText,_),headers:u.headers}:{type:Fe.data,data:_,statusCode:u.status,headers:u.headers}}if(d===Fe.error)return{type:d,error:u};if(yM(u)){var b,y;return{type:Fe.deferred,deferredData:u,statusCode:(b=u.init)==null?void 0:b.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:Fe.data,data:u}}function Xa(e,t,n,o){let a=e.createURL(Q4(t)).toString(),s={signal:n};if(o&&hn(o.formMethod)){let{formMethod:l,formEncType:i}=o;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(o.json)):i==="text/plain"?s.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?s.body=Ju(o.formData):s.body=o.formData}return new Request(a,s)}function Ju(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function C1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function bM(e,t,n,o,a){let s={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let f=t[p].route.id;if(ue(!oo(u),"Cannot handle redirect results in processLoaderData"),ta(u)){let b=Ts(e,f),y=u.error;o&&(y=Object.values(o)[0],o=void 0),l=l||{},l[b.route.id]==null&&(l[b.route.id]=y),s[f]=void 0,c||(c=!0,i=K4(u.error)?u.error.status:500),u.headers&&(d[f]=u.headers)}else ro(u)?(a.set(f,u.deferredData),s[f]=u.deferredData.data):s[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[f]=u.headers)}),o&&(l=o,s[Object.keys(o)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:d}}function w1(e,t,n,o,a,s,l,i){let{loaderData:c,errors:d}=bM(t,n,o,a,i);for(let u=0;u<s.length;u++){let{key:p,match:f,controller:b}=s[u];ue(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let y=l[u];if(!(b&&b.signal.aborted))if(ta(y)){let S=Ts(e.matches,f==null?void 0:f.route.id);d&&d[S.route.id]||(d=Ve({},d,{[S.route.id]:y.error})),e.fetchers.delete(p)}else if(oo(y))ue(!1,"Unhandled fetcher revalidation redirect");else if(ro(y))ue(!1,"Unhandled fetcher deferred data");else{let S=pr(y.data);e.fetchers.set(p,S)}}return{loaderData:c,errors:d}}function _1(e,t,n,o){let a=Ve({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),o&&o.hasOwnProperty(l))break}return a}function Ts(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function T1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Zt(e,t){let{pathname:n,routeId:o,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&o?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&o?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Gh(e||500,l,new Error(i),!0)}function k1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(oo(n))return{result:n,idx:t}}}function Q4(e){let t=typeof e=="string"?sr(e):e;return mo(Ve({},t,{hash:""}))}function jM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ro(e){return e.type===Fe.deferred}function ta(e){return e.type===Fe.error}function oo(e){return(e&&e.type)===Fe.redirect}function yM(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function SM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function CM(e){return dM.has(e.toLowerCase())}function hn(e){return iM.has(e.toLowerCase())}async function E1(e,t,n,o,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!X4(d,c)&&(s&&s[c.route.id])!==void 0;if(ro(i)&&(a||u)){let p=o[l];ue(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await J4(i,p,a).then(f=>{f&&(n[l]=f||n[l])})}}}async function J4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Fe.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Fe.error,error:a}}return{type:Fe.data,data:e.deferredData.data}}}function qh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ep(e,t){let n=typeof t=="string"?sr(t).search:t.search;if(e[e.length-1].route.index&&qh(n||""))return e[e.length-1];let o=Z4(e);return o[o.length-1]}function N1(e){let{formMethod:t,formAction:n,formEncType:o,text:a,formData:s,json:l}=e;if(!(!t||!n||!o)){if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function Fd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function wM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Qa(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function _M(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function pr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function TM(e,t){try{let n=e.sessionStorage.getItem(q4);if(n){let o=JSON.parse(n);for(let[a,s]of Object.entries(o||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function kM(e,t){if(t.size>0){let n={};for(let[o,a]of t)n[o]=[...a];try{e.sessionStorage.setItem(q4,JSON.stringify(n))}catch(o){ho(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Qs.apply(this,arguments)}const Cl=v.createContext(null),Xh=v.createContext(null),Hr=v.createContext(null),Kc=v.createContext(null),Wr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),e5=v.createContext(null);function EM(e,t){let{relative:n}=t===void 0?{}:t;wl()||ue(!1);let{basename:o,navigator:a}=v.useContext(Hr),{hash:s,pathname:l,search:i}=_l(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Kn([o,l])),a.createHref({pathname:c,search:i,hash:s})}function wl(){return v.useContext(Kc)!=null}function $a(){return wl()||ue(!1),v.useContext(Kc).location}function t5(e){v.useContext(Hr).static||v.useLayoutEffect(e)}function NM(){let{isDataRoute:e}=v.useContext(Wr);return e?VM():RM()}function RM(){wl()||ue(!1);let e=v.useContext(Cl),{basename:t,future:n,navigator:o}=v.useContext(Hr),{matches:a}=v.useContext(Wr),{pathname:s}=$a(),l=JSON.stringify(Kh(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return t5(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=Yh(d,JSON.parse(l),s,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Kn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,s,e])}const OM=v.createContext(null);function DM(e){let t=v.useContext(Wr).outlet;return t&&v.createElement(OM.Provider,{value:e},t)}function _l(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Hr),{matches:a}=v.useContext(Wr),{pathname:s}=$a(),l=JSON.stringify(Kh(a,o.v7_relativeSplatPath));return v.useMemo(()=>Yh(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function LM(e,t,n,o){wl()||ue(!1);let{navigator:a}=v.useContext(Hr),{matches:s}=v.useContext(Wr),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=$a(),u;if(t){var p;let _=typeof t=="string"?sr(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||ue(!1),u=_}else u=d;let f=u.pathname||"/",b=c==="/"?f:f.slice(c.length)||"/",y=ea(e,{pathname:b}),S=PM(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Kn([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Kn([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,o);return t&&S?v.createElement(Kc.Provider,{value:{location:Qs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:We.Pop}},S):S}function BM(){let e=UM(),t=K4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const $M=v.createElement(BM,null);class AM extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Wr.Provider,{value:this.props.routeContext},v.createElement(e5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MM(e){let{routeContext:t,match:n,children:o}=e,a=v.useContext(Cl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Wr.Provider,{value:t},o)}function PM(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||ue(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:b}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,f)=>{let b,y=!1,S=null,_=null;n&&(b=i&&p.route.id?i[p.route.id]:void 0,S=p.route.errorElement||$M,c&&(d<0&&f===0?(HM("route-fallback",!1),y=!0,_=null):d===f&&(y=!0,_=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,f+1)),h=()=>{let m;return b?m=S:y?m=_:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=u,v.createElement(MM,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?v.createElement(AM,{location:n.location,revalidation:n.revalidation,component:S,error:b,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var n5=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(n5||{}),hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hc||{});function IM(e){let t=v.useContext(Cl);return t||ue(!1),t}function zM(e){let t=v.useContext(Xh);return t||ue(!1),t}function FM(e){let t=v.useContext(Wr);return t||ue(!1),t}function r5(e){let t=FM(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function UM(){var e;let t=v.useContext(e5),n=zM(hc.UseRouteError),o=r5(hc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function VM(){let{router:e}=IM(n5.UseNavigateStable),t=r5(hc.UseNavigateStable),n=v.useRef(!1);return t5(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Qs({fromRouteId:t},s)))},[e,t])}const R1={};function HM(e,t,n){!t&&!R1[e]&&(R1[e]=!0)}function WM(e){return DM(e.context)}function ZM(e){let{basename:t="/",children:n=null,location:o,navigationType:a=We.Pop,navigator:s,static:l=!1,future:i}=e;wl()&&ue(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:s,static:l,future:Qs({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof o=="string"&&(o=sr(o));let{pathname:u="/",search:p="",hash:f="",state:b=null,key:y="default"}=o,S=v.useMemo(()=>{let _=Lr(u,c);return _==null?null:{location:{pathname:_,search:p,hash:f,state:b,key:y},navigationType:a}},[c,u,p,f,b,y,a]);return S==null?null:v.createElement(Hr.Provider,{value:d},v.createElement(Kc.Provider,{children:n,value:S}))}new Promise(()=>{});function KM(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},va.apply(this,arguments)}function o5(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function YM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function GM(e,t){return e.button===0&&(!t||t==="_self")&&!YM(e)}const qM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],XM=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function QM(e,t){return fM({basename:t==null?void 0:t.basename,future:va({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:PA({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||JM(),routes:e,mapRouteProperties:KM,window:t==null?void 0:t.window}).initialize()}function JM(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=va({},t,{errors:eP(t.errors)})),t}function eP(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,a]of t)if(a&&a.__type==="RouteErrorResponse")n[o]=new Gh(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let s=new Error(a.message);s.stack="",n[o]=s}}else n[o]=a;return n}const a5=v.createContext({isTransitioning:!1}),tP=v.createContext(new Map),nP="startTransition",O1=U6[nP],rP="flushSync",D1=Jb[rP];function oP(e){O1?O1(e):e()}function Ja(e){D1?D1(e):e()}class aP{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function sP(e){let{fallbackElement:t,router:n,future:o}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[f,b]=v.useState(),[y,S]=v.useState(),_=v.useRef(new Map),{v7_startTransition:g}=o||{},h=v.useCallback(w=>{g?oP(w):w()},[g]),m=v.useCallback((w,E)=>{let{deletedFetchers:N,unstable_flushSync:D,unstable_viewTransitionOpts:$}=E;N.forEach(q=>_.current.delete(q)),w.fetchers.forEach((q,le)=>{q.data!==void 0&&_.current.set(le,q.data)});let Y=n.window==null||typeof n.window.document.startViewTransition!="function";if(!$||Y){D?Ja(()=>s(w)):h(()=>s(w));return}if(D){Ja(()=>{f&&(u&&u.resolve(),f.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:$.currentLocation,nextLocation:$.nextLocation})});let q=n.window.document.startViewTransition(()=>{Ja(()=>s(w))});q.finished.finally(()=>{Ja(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})})}),Ja(()=>b(q));return}f?(u&&u.resolve(),f.skipTransition(),S({state:w,currentLocation:$.currentLocation,nextLocation:$.nextLocation})):(i(w),d({isTransitioning:!0,flushSync:!1,currentLocation:$.currentLocation,nextLocation:$.nextLocation}))},[n.window,f,u,_,h]);v.useLayoutEffect(()=>n.subscribe(m),[n,m]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new aP)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let w=l,E=u.promise,N=n.window.document.startViewTransition(async()=>{h(()=>s(w)),await E});N.finished.finally(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})}),b(N)}},[h,l,u,n.window]),v.useEffect(()=>{u&&l&&a.location.key===l.location.key&&u.resolve()},[u,f,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&y&&(i(y.state),d({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),S(void 0))},[c.isTransitioning,y]),v.useEffect(()=>{},[]);let j=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,E,N)=>n.navigate(w,{state:E,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(w,E,N)=>n.navigate(w,{replace:!0,state:E,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),C=n.basename||"/",x=v.useMemo(()=>({router:n,navigator:j,static:!1,basename:C}),[n,j,C]);return v.createElement(v.Fragment,null,v.createElement(Cl.Provider,{value:x},v.createElement(Xh.Provider,{value:a},v.createElement(tP.Provider,{value:_.current},v.createElement(a5.Provider,{value:c},v.createElement(ZM,{basename:C,location:a.location,navigationType:a.historyAction,navigator:j,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(lP,{routes:n.routes,future:n.future,state:a}):t))))),null)}function lP(e){let{routes:t,future:n,state:o}=e;return LM(t,void 0,o,n)}const iP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dP=v.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,f=o5(t,qM),{basename:b}=v.useContext(Hr),y,S=!1;if(typeof d=="string"&&cP.test(d)&&(y=d,iP))try{let m=new URL(window.location.href),j=d.startsWith("//")?new URL(m.protocol+d):new URL(d),C=Lr(j.pathname,b);j.origin===m.origin&&C!=null?d=C+j.search+j.hash:S=!0}catch{}let _=EM(d,{relative:a}),g=hP(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:a,unstable_viewTransition:p});function h(m){o&&o(m),m.defaultPrevented||g(m)}return v.createElement("a",va({},f,{href:y||_,onClick:S||s?o:h,ref:n,target:c}))}),uP=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=o5(t,XM),f=_l(c,{relative:p.relative}),b=$a(),y=v.useContext(Xh),{navigator:S}=v.useContext(Hr),_=y!=null&&mP(f)&&d===!0,g=S.encodeLocation?S.encodeLocation(f).pathname:f.pathname,h=b.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;a||(h=h.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase());const j=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!l&&h.startsWith(g)&&h.charAt(j)==="/",x=m!=null&&(m===g||!l&&m.startsWith(g)&&m.charAt(g.length)==="/"),w={isActive:C,isPending:x,isTransitioning:_},E=C?o:void 0,N;typeof s=="function"?N=s(w):N=[s,C?"active":null,x?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(w):i;return v.createElement(dP,va({},p,{"aria-current":E,className:N,ref:n,style:D,to:c,unstable_viewTransition:d}),typeof u=="function"?u(w):u)});var tp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tp||(tp={}));var L1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(L1||(L1={}));function pP(e){let t=v.useContext(Cl);return t||ue(!1),t}function hP(e,t){let{target:n,replace:o,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=NM(),d=$a(),u=_l(e,{relative:l});return v.useCallback(p=>{if(GM(p,n)){p.preventDefault();let f=o!==void 0?o:mo(d)===mo(u);c(e,{replace:f,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[d,c,u,o,a,n,e,s,l,i])}function mP(e,t){t===void 0&&(t={});let n=v.useContext(a5);n==null&&ue(!1);let{basename:o}=pP(tp.useViewTransitionState),a=_l(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Lr(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=Lr(n.nextLocation.pathname,o)||n.nextLocation.pathname;return Xu(a.pathname,l)!=null||Xu(a.pathname,s)!=null}const Ln=({to:e,className:t="",exact:n,onClick:o,label:a,style:s,...l})=>r.jsx(uP,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:r.jsx(Co,{...l})}),s5=()=>r.jsx(k,{code:"pager",Component:AA,Source:MA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(Ln,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),xP=`export const animals = [
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
`,l5=()=>r.jsxs(z,{code:"rows",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(Vn,{code:xP,language:"js"})})})]}),gP=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),vP=()=>r.jsx($t,{rows:on,columns:"id name animal role",storageKey:"badger-datatable-animals-demo1"}),bP=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,i5=()=>r.jsxs(k,{code:"storageKey",Component:vP,Source:bP,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"storageKey"})," property can be used to provide a key to store the data table state in local storage.  This allows the page number, page size, visible columns, column order, sort column and sort direction to be preserved across visits to the page."]}),r.jsx("p",{children:"Try changing some of those setting in the example below.  Then reload the browser page.  You should see the setting preserved."})]}),jP=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),yP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(M4,{}),r.jsxs(He,{tocName:"datatable",children:[r.jsx(re,{title:"Properties"}),r.jsx(l5,{}),r.jsx(z4,{}),r.jsx(V4,{}),r.jsx(P4,{}),r.jsx(s5,{}),r.jsx(i5,{}),r.jsx(re,{title:"Column Properties"}),r.jsx(U4,{}),r.jsx(I4,{}),r.jsx(F4,{})]})]}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:yP},Symbol.toStringTag,{value:"Module"})),CP=()=>r.jsx(Je,{summary:"Click to reveal",children:"This is the content that is revealed."}),wP=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,c5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(ne,{Component:CP,code:wP})]}),_P=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),TP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),kP=`import React from 'react'
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

export default DetailsExample`,d5=()=>r.jsx(k,{code:"border",Component:TP,Source:kP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),EP=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),NP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),RP=`import React from 'react'
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

export default DetailsExample`,u5=()=>r.jsx(k,{code:"color",Component:NP,Source:RP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),OP=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),DP=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",content:"This is the content that is revealed."})}),LP=`import React from 'react'
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

export default DetailsExample`,p5=()=>r.jsx(k,{code:"content",Component:DP,Source:LP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),$P=()=>r.jsx(Je,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),AP=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,h5=()=>r.jsx(k,{code:"lined",Component:$P,Source:AP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),MP=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),PP=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),IP=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,m5=()=>r.jsx(k,{code:"open",Component:PP,Source:IP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),zP=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),FP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),UP=`import React from 'react'
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

export default DetailsExample`,f5=()=>r.jsx(k,{code:"radius",Component:FP,Source:UP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),VP=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),HP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),WP=`import React from 'react'
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

export default DetailsExample`,x5=()=>r.jsx(k,{code:"shaded",Component:HP,Source:WP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),ZP=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),KP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),YP=`import React from 'react'
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

export default DetailsExample`,g5=()=>r.jsx(k,{code:"shadow",Component:KP,Source:YP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),GP=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),qP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Je,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(te,{name:"cog"})]}),children:"This is the content that is revealed."})]}),XP=`import React from 'react'
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

export default DetailsExample`,v5=()=>r.jsx(k,{code:"summary",Component:qP,Source:XP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),QP=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),JP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(c5,{}),r.jsxs(He,{tocName:"details",children:[r.jsx(re,{title:"Properties"}),r.jsx(v5,{}),r.jsx(p5,{}),r.jsx(m5,{}),r.jsx(h5,{}),r.jsx(d5,{}),r.jsx(f5,{}),r.jsx(x5,{}),r.jsx(g5,{}),r.jsx(u5,{}),r.jsx(re,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(z,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(z,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(re,{title:"Components"}),r.jsx(z,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(z,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),eI=Object.freeze(Object.defineProperty({__proto__:null,default:JP},Symbol.toStringTag,{value:"Module"})),tI=()=>r.jsx(Fr,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),nI=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,b5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(Ln,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),r.jsx(ne,{Component:tI,code:nI})]}),rI=Object.freeze(Object.defineProperty({__proto__:null,default:b5},Symbol.toStringTag,{value:"Module"})),oI=()=>r.jsx(Fr,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),aI=`import React from 'react'
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

export default DropdownMenuExample`,j5=()=>r.jsx(k,{code:"onSelect",Component:oI,Source:aI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),sI=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),lI=()=>r.jsx(Fr,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),iI=`import React from 'react'
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

export default DropdownExample`,cI=()=>r.jsx(Fr,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),dI=`import React from 'react'
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

export default DropdownExample`,uI=()=>r.jsx(Fr,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),pI=`import React from 'react'
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

export default DropdownExample`,hI=()=>r.jsx(Fr,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),mI=`import React from 'react'
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

export default DropdownExample`,fI=()=>r.jsx(Fr,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),xI=`import React from 'react'
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

export default DropdownExample`,y5=()=>r.jsxs(z,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(ne,{Component:lI,code:iI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),r.jsx(ne,{Component:uI,code:pI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]}),r.jsx(ne,{Component:fI,code:xI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]}),r.jsx(ne,{Component:cI,code:dI,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]}),r.jsx(ne,{Component:hI,code:mI,caption:"options",expand:!1,undent:2})]}),gI=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),fo=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),vI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(b5,{}),r.jsxs(He,{tocName:"dropdown-menu",children:[r.jsx(re,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(Ln,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx(y5,{}),r.jsx(j5,{}),r.jsxs(fo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(z,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(z,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsxs(z,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(z,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),bI=Object.freeze(Object.defineProperty({__proto__:null,default:vI},Symbol.toStringTag,{value:"Module"})),jI=()=>r.jsx(bn,{text:"Dropdown",children:"Hello World!"}),yI=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,S5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),r.jsx(ne,{Component:jI,code:yI})]}),SI=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),CI=()=>r.jsx(bn,{text:"Dropdown Content",content:"Hello World!"}),wI=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,C5=()=>r.jsx(k,{code:"content",Component:CI,Source:wI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),TI=()=>r.jsx(bn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),kI=`import React from 'react'
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

export default DropdownExample`,w5=()=>r.jsx(k,{code:"iconLeft",Component:TI,Source:kI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),NI=()=>r.jsx(bn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),RI=`import React from 'react'
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

export default DropdownMenuExample`,_5=()=>r.jsx(k,{code:"iconLeftRotate",Component:NI,Source:RI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),OI=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),DI=()=>r.jsx(bn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),LI=`import React from 'react'
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

export default DropdownExample`,T5=()=>r.jsx(k,{code:"iconRight",Component:DI,Source:LI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),BI=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),$I=()=>r.jsx(bn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),AI=`import React from 'react'
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

export default DropdownExample`,k5=()=>r.jsx(k,{code:"iconRightRotate",Component:$I,Source:AI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),MI=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),PI=()=>r.jsx(bn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),II=`import React from 'react'
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

export default DropdownExample`,E5=()=>r.jsx(k,{code:"openOnHover",Component:PI,Source:II,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),zI=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),FI=()=>r.jsx(bn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),UI=`import React from 'react'
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

export default DropdownExample`,N5=()=>r.jsx(k,{code:"right",Component:FI,Source:UI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),VI=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),HI=()=>r.jsx(bn,{text:"Dropdown Trigger Text",children:"Hello World!"}),WI=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,R5=()=>r.jsx(k,{code:"text",Component:HI,Source:WI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),ZI=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),KI=()=>r.jsx(bn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),YI=`import React from 'react'
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

export default DropdownExample`,O5=()=>r.jsx(k,{code:"wide",Component:KI,Source:YI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),qI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(S5,{}),r.jsxs(He,{tocName:"dropdown",children:[r.jsx(re,{title:"Properties"}),r.jsx(R5,{}),r.jsx(C5,{}),r.jsx(E5,{}),r.jsx(N5,{}),r.jsx(O5,{}),r.jsx(w5,{}),r.jsx(_5,{}),r.jsx(T5,{}),r.jsx(k5,{}),r.jsxs(fo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(z,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(z,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(z,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(z,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsxs(z,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(z,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),XI=Object.freeze(Object.defineProperty({__proto__:null,default:qI},Symbol.toStringTag,{value:"Module"})),QI=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],JI=e=>QI.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),ez=()=>r.jsxs(ar,{children:[r.jsx(st,{name:"animal",type:"search",label:"Animal",onSearch:JI}),r.jsx(Ba,{})]}),tz=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,nz=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],B1=e=>nz.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),rz=e=>e.id,oz=()=>r.jsxs(ar,{children:[r.jsx(st,{name:"animal1",type:"search",label:"Animal",onSearch:B1}),r.jsx(st,{name:"animal2",type:"search",label:"Animal",onSearch:B1,selectValue:rz}),r.jsx(Ba,{})]}),az=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,D5=()=>r.jsxs(z,{code:"search",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"search"})," ","to use the ",r.jsx(Ln,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",r.jsx("code",{children:"onSearch"})," handler defined below."]}),r.jsx(ne,{Component:ez,code:tz}),r.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(ne,{Component:oz,code:az})]}),sz=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),lz=()=>Pr(2e3).then(()=>({ok:"All is good"})),L5=()=>r.jsxs(ar,{className:"relative",onSubmit:lz,children:[r.jsx(st,{name:"name",label:"Your name",required:!0}),r.jsx(st,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(yl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Hh,{size:"small",spinnerSize:"x3",text:"Posting...",icon:"envelope",color:"green",strokeStop:50,animation:"beat"})]}),iz=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),cz=()=>Pr(2e3).then(()=>({ok:"All is good"})),B5=()=>r.jsxs(ar,{className:"relative",onSubmit:cz,children:[r.jsx(st,{name:"name",label:"Your name",required:!0}),r.jsx(st,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(yl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Hh,{})]}),dz=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),uz=`/* eslint-disable quotes */
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

export default FormExample`,pz=`/* eslint-disable quotes */
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

export default FormExample`,$5=()=>r.jsxs(z,{code:"Submitting",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Submitting"})," component can be used to add an overlay with a ",r.jsx(Ln,{to:"/components/spinner",text:"Spinner"})," and message when the form is submitting."]}),r.jsx(ne,{Component:B5,code:uz}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the overall size. The ",r.jsx("code",{children:"spinnerSize"})," can be used to set the size of the spinner icon. The ",r.jsx("code",{children:"text"})," property can be used to change the text displayed. All other properties are forwarded to the"," ",r.jsx(Ln,{to:"/components/spinner",text:"Spinner"})," component."]}),r.jsx(ne,{Component:L5,code:pz})]}),hz=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),mz=()=>r.jsxs(ar,{children:[r.jsx(st,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),r.jsx(Ba,{})]}),fz=`import React from 'react'
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

export default UISelectExample`,xz=()=>r.jsxs(ar,{children:[r.jsx(st,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),r.jsx(Ba,{})]}),gz=`import React from 'react'
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

export default UISelectExample`,vz=()=>r.jsxs(ar,{children:[r.jsx(st,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),r.jsx(Ba,{})]}),bz=`import React from 'react'
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

export default UISelectExample`,A5=()=>r.jsxs(z,{code:"uiselect",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"uiselect"})," ","to use the ",r.jsx(Ln,{to:"/components/select",text:"Select"})," component."]}),r.jsx(ne,{Component:mz,code:fz}),r.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",r.jsx("code",{children:"search"})," property is set here to enable searching."]}),r.jsx(ne,{Component:xz,code:gz}),r.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(ne,{Component:vz,code:bz})]}),jz=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),yz=["Guitar","Bass","Drums","Keyboards","Mandolin"],Sz=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],Cz=e=>Sz.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),wz=()=>Pr(2e3).then(()=>({ok:"All is good"})),_z=()=>r.jsxs(ar,{className:"relative",onSubmit:wz,resetOnSuccess:!0,children:[r.jsx(st,{name:"email",label:"Email address",required:!0}),r.jsx(st,{name:"password",label:"Password",type:"password",required:!0}),r.jsx(st,{name:"instrument",type:"uiselect",label:"Instrument",options:yz}),r.jsx(st,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:Cz}),r.jsx(st,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),r.jsx(_R,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),r.jsx(Hh,{}),e=>r.jsx(L,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),r.jsx(Ba,{})]}),Tz=`/* eslint-disable quotes */
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

export default FormExample`,kz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Form"}),r.jsxs("p",{className:"large wide",children:["The library includes"," ",r.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),r.jsx(ne,{Component:_z,code:Tz,caption:"Form"}),r.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",r.jsx(Ln,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",r.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),r.jsxs(He,{tocName:"form",children:[r.jsx(re,{title:"Input Components"}),r.jsx(A5,{}),r.jsx(D5,{}),r.jsx(re,{title:"Additional Component"}),r.jsx($5,{})]})]}),Ez=Object.freeze(Object.defineProperty({__proto__:null,default:kz},Symbol.toStringTag,{value:"Module"})),Nz=()=>r.jsx(te,{name:"check"}),Rz=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,Oz=tC(0,100,5),ci=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),Oz.map(a=>r.jsx("option",{value:a,children:a},a))]}),Dz=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${Bz(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx($z,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Vn,{code:i,language:"html",expand:!0})]})]}),r.jsx(Lz,{options:n,setOption:s,toggleOption:a})]})},Lz=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(Gu,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(l0,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(s0,{color:e.color,setColor:a,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(ci,{stop:e.foreground,setStop:s})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(ci,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(ci,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(ci,{stop:e.backgroundDark,setStop:c})]})]})]})},M5=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,a)=>(o[a]=e[a],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},Bz=e=>{const t=M5(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},$z=({options:e})=>r.jsx(te,{...M5(e)}),P5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(ne,{Component:Nz,code:Rz,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(Dz,{})]}),Az=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),I5=()=>r.jsxs(z,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(sl.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(te,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),Mz=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),Pz=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(te,{name:"check",className:"smallest"}),r.jsx(te,{name:"check",className:"smaller"}),r.jsx(te,{name:"check",className:"small"}),r.jsx(te,{name:"check"}),r.jsx(te,{name:"check",className:"large"}),r.jsx(te,{name:"check",className:"larger"}),r.jsx(te,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(te,{name:"check",className:"larger green fgc-50"}),r.jsx(te,{name:"cross",className:"larger red fgc-50"})]})]}),Iz=`import React from 'react'
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

export default Component`,z5=()=>r.jsx(k,{code:"className",Component:Pz,Source:Iz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),zz=Object.freeze(Object.defineProperty({__proto__:null,default:z5},Symbol.toStringTag,{value:"Module"})),Fz=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(te,{name:"check",color:"green-50"}),r.jsx(te,{name:"check",color:"green-70-30"}),r.jsx(te,{name:"check",color:"green-70--30"}),r.jsx(te,{name:"check",color:"green-70-30-30-70"})]}),Uz=`import React from 'react'
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

export default Component`,F5=()=>r.jsxs(k,{code:"color",Component:Fz,Source:Uz,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),Vz=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),Hz=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(te,{name:"bars"}),r.jsx(te,{name:"check"}),r.jsx(te,{name:"cross"}),r.jsx(te,{name:"arrow"}),r.jsx(te,{name:"arrow-right"}),r.jsx(te,{name:"arrow-down-thicker.red.fgc-50"})]}),Wz=`import React from 'react'
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

export default Component`,U5=()=>r.jsxs(k,{code:"name",Component:Hz,Source:Wz,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),Zz=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),Kz=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(te,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(te,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),Yz=`import React from 'react'
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

export default Component`,V5=()=>r.jsx(k,{code:"path",Component:Kz,Source:Yz,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),Gz=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),qz=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(te,{name:"check",size:"smallest"}),r.jsx(te,{name:"check",size:"smaller"}),r.jsx(te,{name:"check",size:"small"}),r.jsx(te,{name:"check",size:"medium"}),r.jsx(te,{name:"check",size:"large"}),r.jsx(te,{name:"check",size:"larger"}),r.jsx(te,{name:"check",size:"largest"})]}),Xz=`import React from 'react'
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

export default Component`,H5=()=>r.jsx(k,{code:"size",Component:qz,Source:Xz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),Qz=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),Jz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx(P5,{}),r.jsxs(He,{tocName:"icon",children:[r.jsx(re,{title:"Properties"}),r.jsx(U5,{}),r.jsx(z5,{}),r.jsx(H5,{}),r.jsx(F5,{}),r.jsx(V5,{}),r.jsx(re,{title:"Components"}),r.jsx(I5,{})]})]}),eF=Object.freeze(Object.defineProperty({__proto__:null,default:Jz},Symbol.toStringTag,{value:"Module"})),tF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(L,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},nF=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,W5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(ne,{Component:tF,code:nF,expand:!0})]}),rF=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),oF=()=>{const{show:e,hide:t,Modal:n}=AR();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(L,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(L,{color:"green",text:"Open Modal",onClick:e})]})},aF=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,Z5=()=>r.jsx(k,{code:"ModalState",Component:oF,Source:aF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),sF=Object.freeze(Object.defineProperty({__proto__:null,default:Z5},Symbol.toStringTag,{value:"Module"})),lF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(L,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},iF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,K5=()=>r.jsx(k,{code:"className",Component:lF,Source:iF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),cF=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),dF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},uF=`import React, { useState } from 'react'
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

export default ModalExample`,Y5=()=>r.jsx(k,{code:"close",Component:dF,Source:uF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),pF=Object.freeze(Object.defineProperty({__proto__:null,default:Y5},Symbol.toStringTag,{value:"Module"})),hF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},mF=`import React, { useState } from 'react'
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

export default ModalExample`,G5=()=>r.jsx(k,{code:"closeIcon",Component:hF,Source:mF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),fF=Object.freeze(Object.defineProperty({__proto__:null,default:G5},Symbol.toStringTag,{value:"Module"})),xF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(L,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},gF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,q5=()=>r.jsx(k,{code:"footer",Component:xF,Source:gF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),vF=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),bF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},jF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,X5=()=>r.jsx(k,{code:"header",Component:bF,Source:jF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),yF=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),SF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},CF=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,Q5=()=>r.jsx(k,{code:"text",Component:SF,Source:CF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),wF=Object.freeze(Object.defineProperty({__proto__:null,default:Q5},Symbol.toStringTag,{value:"Module"})),_F=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Mn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},TF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,J5=()=>r.jsx(k,{code:"title",Component:_F,Source:TF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),kF=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),EF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(W5,{}),r.jsxs(He,{tocName:"modal",children:[r.jsx(re,{title:"Properties"}),r.jsx(K5,{}),r.jsx(Y5,{}),r.jsx(G5,{}),r.jsx(Q5,{}),r.jsx(J5,{}),r.jsx(X5,{}),r.jsx(q5,{}),r.jsx(re,{title:"Components"}),r.jsx(Z5,{})]})]}),NF=Object.freeze(Object.defineProperty({__proto__:null,default:EF},Symbol.toStringTag,{value:"Module"})),RF=()=>{const{isVisible:e,show:t,hide:n}=Ir();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(To,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(L,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(L,{onClick:t,color:"green",text:"Show Overlay"})]})},OF=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,ev=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(ne,{Component:RF,code:OF})]}),DF=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),LF=()=>{const{show:e,hide:t,Overlay:n}=MR();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(L,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(L,{color:"green",text:"Show Overlay",onClick:e})]})},BF=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,tv=()=>r.jsx(k,{code:"OverlayState",Component:LF,Source:BF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),$F=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),AF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(L,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(L,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},MF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,PF=()=>r.jsx(k,{code:"className",Component:AF,Source:MF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),IF=Object.freeze(Object.defineProperty({__proto__:null,default:PF},Symbol.toStringTag,{value:"Module"})),zF=()=>{const{isVisible:e,show:t,hide:n}=Ir();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(L,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(To,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(L,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},FF=`import React from 'react'
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

export default ColorExample`,nv=()=>r.jsx(k,{title:"Custom Colors",Component:zF,Source:FF,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),UF=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),VF=()=>{const{isVisible:e,show:t,hide:n}=Ir();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(L,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(To,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(L,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},HF=`import React from 'react'
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

export default OverlayExample`,rv=()=>r.jsx(k,{code:"fixed",Component:VF,Source:HF,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),WF=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),ZF=()=>{const{isVisible:e,show:t,hide:n}=Ir();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(L,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(To,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(L,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},KF=`import React from 'react'
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

export default ColorExample`,YF=()=>{const{isVisible:e,show:t,hide:n}=Ir();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(L,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(To,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(L,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},GF=`import React from 'react'
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

export default ColorExample`,ov=()=>r.jsxs(z,{code:"light / dark",children:[r.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(ne,{Component:ZF,code:KF,caption:"light",undent:8}),r.jsx(ne,{Component:YF,code:GF,caption:"dark",undent:8})]}),qF=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),XF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(ev,{}),r.jsxs(He,{tocName:"overlay",children:[r.jsx(re,{title:"Properties"}),r.jsx(rv,{}),r.jsx(ov,{}),r.jsx(re,{title:"Styling"}),r.jsx(nv,{}),r.jsx(re,{title:"Components"}),r.jsx(tv,{})]})]}),QF=Object.freeze(Object.defineProperty({__proto__:null,default:XF},Symbol.toStringTag,{value:"Module"})),JF=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=nE(),a=o[e];return r.jsx(L,{text:a,className:t,onClick:n})},eU=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Qt,{pages:t,page:n,setPage:o,pageRanges:e,Page:JF,size:"small"})},tU=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,av=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(nU,{name:t,value:n},t))})}),nU=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),sv=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]}),r.jsx(av,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Components"}),r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]}),r.jsx(ne,{Component:eU,code:tU})]}),rU=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),oU=()=>{const[e,t]=v.useState(0);return r.jsx(Qt,{pages:11,page:e,setPage:t})},aU=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,lv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]}),r.jsx(ne,{Component:oU,code:aU})]}),sU=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),lU=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Qt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},iU=`import React, { useState } from 'react'
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
`,iv=()=>r.jsx(k,{code:"className",Component:lU,Source:iU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),cU=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),dU=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Qt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Qt,{pages:11,page:e,setPage:t,color:"blue"})]})},uU=`import React, { useState } from 'react'
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
`,cv=()=>r.jsx(k,{code:"color",Component:dU,Source:uU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),pU=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),hU=()=>{const[e,t]=v.useState(0);return r.jsx(Qt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},mU=`import React, { useState } from 'react'
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
`,dv=()=>r.jsx(k,{code:"prevIcon / nextIcon",Component:hU,Source:mU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),fU=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),xU=()=>{const[e,t]=v.useState(0);return r.jsx(Qt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},gU=`import React, { useState } from 'react'
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
`,vU=()=>r.jsx(k,{code:"nextIcon",Component:xU,Source:gU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),bU=Object.freeze(Object.defineProperty({__proto__:null,default:vU},Symbol.toStringTag,{value:"Module"})),jU=()=>{const[e,t]=v.useState(0);return r.jsx(Qt,{pages:11,page:e,setPage:t,showFirstLast:!1})},yU=`import React, { useState } from 'react'
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
`,uv=()=>r.jsxs(k,{code:"showFirstLast",Component:jU,Source:yU,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),SU=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),CU=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Qt,{pages:11,page:e,setPage:t,size:"small"})]})},wU=`import React, { useState } from 'react'
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
`,pv=()=>r.jsx(k,{code:"size",Component:CU,Source:wU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),_U=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),TU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(lv,{}),r.jsx(sv,{}),r.jsxs(He,{tocName:"pager",children:[r.jsx(re,{title:"Properties"}),r.jsx(iv,{}),r.jsx(cv,{}),r.jsx(pv,{}),r.jsx(dv,{}),r.jsx(uv,{}),r.jsxs(fo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(z,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(z,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(z,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(z,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(z,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsxs(z,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(z,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(z,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(z,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(z,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),kU=Object.freeze(Object.defineProperty({__proto__:null,default:TU},Symbol.toStringTag,{value:"Module"})),EU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},NU=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,hv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(ne,{Component:EU,code:NU,expand:!0})]}),RU=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),OU=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx(Dn,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},DU=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,mv=()=>r.jsxs(k,{code:"border",Component:OU,Source:DU,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),LU=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),BU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},$U=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,fv=()=>r.jsx(k,{code:"className",Component:BU,Source:$U,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),AU=Object.freeze(Object.defineProperty({__proto__:null,default:fv},Symbol.toStringTag,{value:"Module"})),MU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},PU=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,xv=()=>r.jsx(k,{code:"disabled",Component:MU,Source:PU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),IU=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),zU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},FU=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,gv=()=>r.jsx(k,{code:"inline",Component:zU,Source:FU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),UU=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),VU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},HU=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,vv=()=>r.jsx(k,{code:"name",Component:VU,Source:HU,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),WU=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),ZU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Dn,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},KU=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,Ft=({id:e,text:t})=>r.jsx("a",{href:`#${Wh(e||t)}`,className:"code",children:t}),bv=()=>r.jsx(k,{code:"onChange",Component:ZU,Source:KU,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(Ft,{text:"value"}),"."]})}),YU=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),GU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},qU=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,jv=()=>r.jsx(k,{code:"options",Component:GU,Source:qU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),XU=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),QU=()=>{const[e,t]=v.useState(!1);return r.jsx(Dn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},JU=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,yv=()=>r.jsx(k,{code:"value",Component:QU,Source:JU,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(Ft,{text:"onChange"})," to update the value."]})}),eV=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),tV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(hv,{}),r.jsxs(He,{tocName:"radio",children:[r.jsx(re,{title:"Properties"}),r.jsx(yv,{}),r.jsx(bv,{}),r.jsx(vv,{}),r.jsx(fv,{}),r.jsx(gv,{}),r.jsx(mv,{}),r.jsx(re,{title:"Option Properties"}),r.jsx(jv,{}),r.jsx(xv,{})]})]}),nV=Object.freeze(Object.defineProperty({__proto__:null,default:tV},Symbol.toStringTag,{value:"Module"})),rV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],oV=()=>{const e=t=>rV.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(Jn,{onSearch:e})},aV=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,Sv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(ne,{Component:oV,code:aV})]}),sV=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),lV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],iV=()=>{const[e,t]=G.useState(),n=o=>lV.filter(a=>a.toLowerCase().indexOf(o.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(Jn,{onLoad:t,onSearch:n,value:"Brian Badger"}),r.jsx(L,{onClick:()=>e==null?void 0:e.clear(),text:"Clear"})]})},cV=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,Cv=()=>r.jsx(k,{code:"clear",Component:iV,Source:cV,children:r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"onLoad"})," property to save a reference to the search context.  You can call the ",r.jsx("code",{children:"clear"})," method on that to programmatically clear the input.  This has the same effect as clicking on the cross icon to the right of the input."]})}),dV=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),uV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],pV=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>uV.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(Jn,{onSearch:t,displayResult:e})},hV=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,wv=()=>r.jsx(k,{code:"displayResult",Component:pV,Source:hV,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),mV=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),fV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],xV=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>fV.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(Jn,{onSearch:t,displayValue:e})},gV=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,_v=()=>r.jsx(k,{code:"displayValue",Component:xV,Source:gV,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),vV=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),bV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],jV=()=>{const e=async t=>Pr(500).then(()=>bV.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(Jn,{onSearch:e,debug:!0})},yV=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,Tv=()=>r.jsx(k,{code:"onSearch",Component:jV,Source:yV,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),SV=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),CV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],wV=()=>{const e=n=>CV.filter(o=>o.toLowerCase().indexOf(n.toLowerCase())!==-1),t=n=>alert(`You selected ${n}`);return r.jsx(Jn,{onSearch:e,onSelect:t})},_V=`import { Search } from '@/src/index.jsx'

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

export default OnSelectExample`,kv=()=>r.jsx(k,{code:"onSelect",Component:wV,Source:_V,children:r.jsxs("p",{children:["You can define an ",r.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),TV=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),kV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],EV=()=>{const[e,t]=G.useState(),[n,o]=G.useState(),a=s=>kV.filter(l=>l.toLowerCase().indexOf(s.toLowerCase())!==-1);return r.jsxs("div",{className:"grid-2 gap-2",children:[r.jsx(Jn,{onLoad:t,onSearch:a}),r.jsx(L,{onClick:()=>e==null?void 0:e.reset(),text:"Reset"}),r.jsx(Jn,{onLoad:o,onSearch:a,value:"Ben Badger"}),r.jsx(L,{onClick:()=>n==null?void 0:n.reset(),text:"Reset"})]})},NV=`import { Search, Button } from '@/src/index.jsx'

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

export default OnSelectExample`,Ev=()=>r.jsxs(k,{code:"reset",Component:EV,Source:NV,children:[r.jsxs("p",{children:["You can call the ",r.jsx("code",{children:"reset"})," method on the search object to reset the search.  Note that it will be reset to the original state, so if an initial value was provided to the component then that will be restored.  Use the ",r.jsx("code",{children:"clear"})," method if you want to clear the input instead."]}),r.jsx("p",{children:'Try changing the values in the search components below.  Clicking on the first reset button will reset the first component to a blank state. Clicking on the second reset button will reset the second component to its original state, containing the value "Ben Badger".'})]}),RV=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),OV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(Sv,{}),r.jsxs(He,{tocName:"search",children:[r.jsx(re,{title:"Properties"}),r.jsx(Tv,{}),r.jsx(kv,{}),r.jsx(wv,{}),r.jsx(_v,{}),r.jsx(re,{title:"Functions"}),r.jsx(Cv,{}),r.jsx(Ev,{})]})]}),DV=Object.freeze(Object.defineProperty({__proto__:null,default:OV},Symbol.toStringTag,{value:"Module"})),LV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],BV=()=>r.jsx(rn,{options:LV}),$V=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,Nv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(ne,{Component:BV,code:$V}),r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]}),r.jsx(av,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),AV=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),MV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],PV=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(rn,{options:MV,displayOption:e})},IV=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,Rv=()=>r.jsx(k,{code:"displayOption",Component:PV,Source:IV,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),zV=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),FV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],UV=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(rn,{options:FV,displayValue:e})},VV=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,Ov=()=>r.jsx(k,{code:"displayValue",Component:UV,Source:VV,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),HV=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),WV=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],ZV=()=>r.jsx(rn,{options:WV}),KV=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,Dv=()=>r.jsxs(k,{code:"options",Component:ZV,Source:KV,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(Ft,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(Ft,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(Ft,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),YV=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),GV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],qV=()=>r.jsx(rn,{search:!0,options:GV}),XV=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,QV=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],JV=()=>r.jsx(rn,{search:!0,options:QV}),eH=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,Lv=()=>r.jsxs(z,{code:"search",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",r.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),r.jsxs("p",{children:["Try entering ",r.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",r.jsx("code",{children:"aa"})," ","(e.g all the ",r.jsx("b",{children:"Aa"}),"rdvarks) and ",r.jsx("code",{children:"an"})," (Al",r.jsx("b",{children:"an"})," Aardvark,"," ",r.jsx("b",{children:"An"}),"ne Aardvark and Bri",r.jsx("b",{children:"an"})," Badger)."]})]}),r.jsx(ne,{Component:qV,code:XV}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["If the ",r.jsx("code",{children:"options"})," are an array of objects then it will look for a ",r.jsx("code",{children:"search"}),", ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"}),","," ",r.jsx("code",{children:"name"})," or ",r.jsx("code",{children:"value"})," property in each object and use that."]})}),r.jsx(ne,{Component:JV,code:eH})]}),tH=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),nH=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],rH=(e,t)=>{const n=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().indexOf(n)>=0||o.department.toLowerCase().indexOf(n)>=0)},oH=e=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:"smaller",children:e.department})]}),aH=()=>r.jsx(rn,{search:!0,options:nH,searchOptions:rH,displayOption:oH}),sH=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,Bv=()=>r.jsxs(k,{code:"searchOptions",Component:aH,Source:sH,expand:!0,children:[r.jsxs("p",{children:["You can define your own ",r.jsx("code",{children:"searchOptions"})," function to search through the ",r.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),r.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",r.jsx("code",{children:"name"})," or their ",r.jsx("code",{children:"department"}),". Try entering ",r.jsx("code",{children:"an"}),".  It will match Al",r.jsx("b",{children:"an"}),", and ",r.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",r.jsx("b",{children:"an"}),"agement."]})]}),lH=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),iH=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],cH=()=>r.jsx(rn,{validOption:e=>!e.isFruit,options:iH}),dH=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,$v=()=>r.jsxs(k,{code:"validOption",Component:cH,Source:dH,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),uH=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),pH=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],hH=()=>r.jsx(rn,{options:pH,value:"Bobby Badger"}),mH=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,fH=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],xH=()=>r.jsx(rn,{options:fH,value:5}),gH=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,Av=()=>r.jsxs(z,{code:"value",children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),r.jsx(ne,{Component:hH,code:mH,caption:"value",expand:!1}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]})}),r.jsx(ne,{Component:xH,code:gH,caption:"value",expand:!1})]}),vH=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),bH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(Nv,{}),r.jsxs(He,{tocName:"select",children:[r.jsx(re,{title:"Properties"}),r.jsx(Dv,{}),r.jsx(Av,{}),r.jsx(Rv,{}),r.jsx(Ov,{}),r.jsx($v,{}),r.jsx(Lv,{}),r.jsx(Bv,{}),r.jsx(z,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(z,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(z,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(z,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(z,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(z,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(fo,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Event Handlers"}),r.jsxs(z,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(z,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(z,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(z,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(z,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(z,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(z,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(z,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(z,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(z,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(z,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(z,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(z,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(z,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsx(z,{code:"Content",children:"Renders the content of the select component."}),r.jsx(z,{code:"Input",children:"Renders the input field."}),r.jsx(z,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(z,{code:"Option",children:"Renders an individual option."}),r.jsx(z,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),jH=Object.freeze(Object.defineProperty({__proto__:null,default:bH},Symbol.toStringTag,{value:"Module"})),$1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],yH=()=>{const[e,t]=G.useState(!1),[n,o]=G.useState($1),a=i=>{o(i),t(!0)},s=()=>{o($1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(WR,{items:n,Item:l,setOrder:a})})]})},SH=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,Mv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(ne,{Component:yH,code:SH})]}),CH=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),A1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],wH=()=>{const[e,t]=G.useState(!1),[n,o]=G.useState(A1),a=i=>{o(i),t(!0)},s=()=>{o(A1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(Uh,{items:n,Item:l,setOrder:a})})]})},_H=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,Pv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(ne,{Component:wH,code:_H})]}),TH=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),M1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],kH=()=>{const[e,t]=G.useState(!1),[n,o]=G.useState(M1),a=i=>{o(i),t(!0)},s=()=>{o(M1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(L,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(B3,{items:n,Item:l,setOrder:a})})]})},EH=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,Iv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(ne,{Component:kH,code:EH})]}),NH=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),RH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(Pv,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(Iv,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(Mv,{}),r.jsx(He,{tocName:"sortable",children:r.jsx(fo,{children:r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Properties"}),r.jsxs(z,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(z,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(z,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),OH=Object.freeze(Object.defineProperty({__proto__:null,default:RH},Symbol.toStringTag,{value:"Module"})),DH=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(H,{}),r.jsx(H,{color:"red"}),r.jsx(H,{color:"orange",fill:!0}),r.jsx(H,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(H,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(H,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(H,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),LH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,zv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(ne,{Component:DH,code:LH,expand:!0})]}),BH=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),$H=()=>r.jsx("div",{className:"x3",children:r.jsx(H,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),AH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,Fv=()=>r.jsx(k,{code:"bgColor",Component:$H,Source:AH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),MH=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),PH=()=>r.jsx("div",{className:"x3",children:r.jsx(H,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),IH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,Uv=()=>r.jsx(k,{code:"bgFill",Component:PH,Source:IH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),zH=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),FH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(H,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(H,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),UH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,Vv=()=>r.jsx(k,{code:"bgFillStop",Component:FH,Source:UH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),VH=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"})),HH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{bgIcon:!1}),r.jsx(H,{bgIcon:"circle"}),r.jsx(H,{bgIcon:"square40"}),r.jsx(H,{bgIcon:"square30"}),r.jsx(H,{bgIcon:"square20"}),r.jsx(H,{bgIcon:"square10"}),r.jsx(H,{bgIcon:"square"})]}),WH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Hv=()=>r.jsx(k,{code:"bgIcon",Component:HH,Source:WH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(Ft,{text:"shrink"})," property."]})}),ZH=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),KH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{bgIcon:"circle",bgStroke:!0}),r.jsx(H,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(H,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(H,{bgIcon:"circle",bgStroke:"thinnest"})]}),YH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Wv=()=>r.jsxs(k,{code:"bgStroke",Component:KH,Source:YH,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),GH=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),qH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(H,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(H,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),XH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,Zv=()=>r.jsx(k,{code:"bgStrokeStop",Component:qH,Source:XH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(Ft,{text:"bgIcon"})," is set."]})}),QH=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),JH=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(H,{color:"red"}),r.jsx(H,{color:"orange"}),r.jsx(H,{color:"yellow"}),r.jsx(H,{color:"green"})]}),eW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Kv=()=>r.jsxs(k,{code:"color",Component:JH,Source:eW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),tW=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),nW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{fill:!0,color:"red"}),r.jsx(H,{fill:!0,color:"orange"}),r.jsx(H,{fill:!0,color:"yellow"}),r.jsx(H,{fill:!0,color:"green"})]}),rW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Yv=()=>r.jsx(k,{code:"fill",Component:nW,Source:rW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),oW=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),aW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(H,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(H,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(H,{fill:!0,fillStop:80,fillStopDark:10})]}),sW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Gv=()=>r.jsx(k,{code:"fillStop",Component:aW,Source:sW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),lW=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),iW=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(H,{icon:"rotate"}),r.jsx(H,{icon:"asterisk"}),r.jsx(H,{icon:"arrow"})]}),cW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,qv=()=>r.jsx(k,{code:"icon",Component:iW,Source:cW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),dW=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),uW=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(H,{}),r.jsx(H,{reverse:!0})]}),pW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,Xv=()=>r.jsx(k,{code:"reverse",Component:uW,Source:pW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),hW=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),mW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{bgIcon:"circle"}),r.jsx(H,{bgIcon:"circle",shrink:6}),r.jsx(H,{bgIcon:"circle",shrink:7}),r.jsx(H,{bgIcon:"circle",shrink:8})]}),fW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Qv=()=>r.jsx(k,{code:"shrink",Component:mW,Source:fW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(Ft,{text:"bgIcon"})," is set, otherwise it is 0."]})}),xW=Object.freeze(Object.defineProperty({__proto__:null,default:Qv},Symbol.toStringTag,{value:"Module"})),gW=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(H,{size:"x3"}),r.jsx(H,{size:"x5"}),r.jsx(H,{size:"x8"})]}),vW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,Jv=()=>r.jsxs(k,{code:"size",Component:gW,Source:vW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),bW=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),jW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{stroke:"thinnest"}),r.jsx(H,{stroke:"thinner"}),r.jsx(H,{stroke:"thin"}),r.jsx(H,{}),r.jsx(H,{stroke:"thick"}),r.jsx(H,{stroke:"thicker"}),r.jsx(H,{stroke:"thickest"}),r.jsx(H,{stroke:!1,fill:!0})]}),yW=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,e6=()=>r.jsxs(k,{code:"stroke",Component:jW,Source:yW,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(Ft,{text:"fill"}),")"]})]}),SW=Object.freeze(Object.defineProperty({__proto__:null,default:e6},Symbol.toStringTag,{value:"Module"})),CW=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(H,{strokeStop:20,strokeStopDark:80}),r.jsx(H,{strokeStop:50,strokeStopDark:50}),r.jsx(H,{strokeStop:80,strokeStopDark:20})]}),wW=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,t6=()=>r.jsx(k,{code:"strokeStop",Component:CW,Source:wW,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),_W=Object.freeze(Object.defineProperty({__proto__:null,default:t6},Symbol.toStringTag,{value:"Module"})),TW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx(zv,{}),r.jsxs(He,{tocName:"spinner",children:[r.jsx(re,{title:"Properties"}),r.jsx(Jv,{}),r.jsx(Xv,{}),r.jsx(Qv,{}),r.jsx(qv,{}),r.jsx(Kv,{}),r.jsx(e6,{}),r.jsx(t6,{}),r.jsx(Yv,{}),r.jsx(Gv,{}),r.jsx(Hv,{}),r.jsx(Fv,{}),r.jsx(Wv,{}),r.jsx(Zv,{}),r.jsx(Uv,{}),r.jsx(Vv,{})]})]}),kW=Object.freeze(Object.defineProperty({__proto__:null,default:TW},Symbol.toStringTag,{value:"Module"})),EW=()=>{const e=[{text:"One",content:"This is one"},{text:"Two",content:"This is two"},{text:"Three",content:"This is three"},{text:"Four",disabled:!0}];return r.jsx(bt,{lined:!0,tabs:e})},NW=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,n6=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Tabset"})," component renders a selectable set of tabs."]}),r.jsx(ne,{Component:EW,code:NW})]}),RW=Object.freeze(Object.defineProperty({__proto__:null,default:n6},Symbol.toStringTag,{value:"Module"})),OW=()=>r.jsx(bt,{solid:!0,lined:!0,center:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),DW=`import React from 'react'
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

export default TabsetExample`,r6=()=>r.jsx(k,{code:"center",Component:OW,Source:DW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"center"})," property can be added to center align the tabs."]})}),LW=Object.freeze(Object.defineProperty({__proto__:null,default:r6},Symbol.toStringTag,{value:"Module"})),BW=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(bt,{lined:!0,solid:!0,tabs:e}),r.jsx(bt,{lined:!0,solid:!0,tabs:e,color:"brand"}),r.jsx(bt,{lined:!0,solid:!0,tabs:e,color:"orange"}),r.jsx(bt,{lined:!0,solid:!0,tabs:e,color:"teal"}),r.jsx(bt,{lined:!0,solid:!0,tabs:e,color:"violet"})]})},$W=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,o6=()=>r.jsx(k,{code:"color",Component:BW,Source:$W,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range for the tabs."]})}),AW=Object.freeze(Object.defineProperty({__proto__:null,default:o6},Symbol.toStringTag,{value:"Module"})),MW=()=>r.jsx(bt,{lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),PW=`import React from 'react'
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

export default TabsetExample`,a6=()=>r.jsx(k,{code:"lined",Component:MW,Source:PW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a line under the tabs."]})}),IW=Object.freeze(Object.defineProperty({__proto__:null,default:a6},Symbol.toStringTag,{value:"Module"})),zW=()=>r.jsx(bt,{solid:!0,lined:!0,right:!0,color:"blue",tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),FW=`import React from 'react'
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

export default TabsetExample`,s6=()=>r.jsx(k,{code:"right",Component:zW,Source:FW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can be added to right align the tabs."]})}),UW=Object.freeze(Object.defineProperty({__proto__:null,default:s6},Symbol.toStringTag,{value:"Module"})),VW=()=>{const e=[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}];return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(bt,{lined:!0,solid:!0,tabs:e}),r.jsx(bt,{lined:!0,solid:!0,tabs:e,size:"smaller"}),r.jsx(bt,{lined:!0,solid:!0,tabs:e,size:"larger"})]})},HW=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,l6=()=>r.jsx(k,{code:"size",Component:VW,Source:HW,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size of the tabs."]})}),WW=Object.freeze(Object.defineProperty({__proto__:null,default:l6},Symbol.toStringTag,{value:"Module"})),ZW=()=>r.jsxs(r.Fragment,{children:[r.jsx(bt,{solid:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]}),r.jsx(bt,{solid:!0,lined:!0,tabs:[{text:"Ten",content:"Quite loud"},{text:"Eleven",content:"One louder"}]})]}),KW=`import React from 'react'
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

export default TabsetExample`,i6=()=>r.jsx(k,{code:"solid",Component:ZW,Source:KW,expand:!0,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"solid"})," property can be used to render the tabs using solid colors.  It can be used in conjunction with ",r.jsx("code",{children:"lined"}),"."]})}),YW=Object.freeze(Object.defineProperty({__proto__:null,default:i6},Symbol.toStringTag,{value:"Module"})),GW=({tab:e})=>r.jsxs("div",{className:"border pad-2 mar-t-2",children:["This is a component for rendering ",e.otherData]}),qW=()=>{const e=[{text:"One",iconLeft:"asterisk",content:"This is one"},{text:"Two",iconRight:"cog",content:r.jsx("div",{className:"border pad-2 mar-t-2",children:"This is two"})},{icon:"heart",otherData:"the heart tab",Component:GW},{icon:"thumb-down",disabled:!0}];return r.jsx(bt,{lined:!0,tabs:e})},XW=`import { Tabset } from '@/src/index.jsx'

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

export default TabsetExample`,c6=()=>r.jsxs(k,{code:"tabs",Component:qW,Source:XW,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"tabs"})," property should be used to define an array of objects containing properties for each tab.  This can include ",r.jsx("code",{children:"text"})," for the tab text, ",r.jsx("code",{children:"icon"})," for a tab icon, ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," for icons to appear either side of the text, and ",r.jsx("code",{children:"disabled"})," to disable the tab"]}),r.jsxs("p",{children:["A ",r.jsx("code",{children:"content"})," property can be defined containing the content that should be rendered when the tab is select. Alternately you can provide a ",r.jsx("code",{children:"Component"})," which should be a React component. This will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]}),QW=Object.freeze(Object.defineProperty({__proto__:null,default:c6},Symbol.toStringTag,{value:"Module"})),JW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Tabset"}),r.jsx(n6,{}),r.jsxs(He,{tocName:"tabset",children:[r.jsx(re,{title:"Properties"}),r.jsx(c6,{}),r.jsx(a6,{}),r.jsx(i6,{}),r.jsx(o6,{}),r.jsx(l6,{}),r.jsx(r6,{}),r.jsx(s6,{}),r.jsxs(z,{code:"storageKey",children:["The name of a key to use in local storage for saving the tab state. This should usually be unique for each tabset.  e.g. a tabset on your home page could use ",r.jsx("code",{children:"home-tabs"}),' and a tabset on your "Contact Us" page could use ',r.jsx("code",{children:"contact-tabs"}),"."]}),r.jsxs(z,{code:"tabsetClass",children:["The CSS class added to the tabset container.  This defaults to ",r.jsx("code",{children:"tabset"}),"."]}),r.jsxs(z,{code:"tabsClass",children:["The CSS class added to the tabs list.  This defaults to ",r.jsx("code",{children:"tabs"}),"."]}),r.jsxs(z,{code:"activeClass",children:["The CSS class added to the active tab.  This defaults to ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(z,{code:"disabledClass",children:["The CSS class added to a disabled active tab.  This defaults to ",r.jsx("code",{children:"disabled"}),"."]}),r.jsx(z,{code:"className",children:"An additional CSS class to be added to the tabset container.  Use this for applying additional margin utility classes, for example."}),r.jsx(z,{code:"bodyClass",children:"A CSS class to be added to the body container."}),r.jsxs(z,{code:"Body",children:["A component to render the body for each tab.  It will be passed the active ",r.jsx("code",{children:"tab"})," as a property."]})]})]}),eZ=Object.freeze(Object.defineProperty({__proto__:null,default:JW},Symbol.toStringTag,{value:"Module"})),tZ=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,nZ="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",rZ="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",oZ=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,aZ=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,sZ=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(Vn,{code:tZ,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(fo,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(Vn,{code:nZ,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(fo,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(Vn,{code:rZ,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(Vn,{code:oZ,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(Vn,{code:aZ,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),lZ=Object.freeze(Object.defineProperty({__proto__:null,default:sZ},Symbol.toStringTag,{value:"Module"})),iZ=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),cZ=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),dZ=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(iZ,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(cZ,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),uZ=Object.freeze(Object.defineProperty({__proto__:null,default:dZ},Symbol.toStringTag,{value:"Module"})),pZ=()=>{const e={Select:{placeholder:"Pick one"},Button:{color:"green",iconRight:"check"},Spinner:{color:"violet",icon:"star"}};return r.jsxs(Mg.Provider,{...e,children:[r.jsx(rn,{options:[{value:10,text:"ten"},{value:11,text:"eleven"}]}),r.jsxs("div",{className:"flex space middle mar-t-2",children:[r.jsx(L,{text:"OK"}),r.jsx(H,{size:"larger"}),r.jsx(L,{text:"Not OK",color:"red",iconRight:"thumb-down"})]})]})},hZ=`import { Theme, Select, Button, Spinner } from '@/src/index.jsx'

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

export default BorderClassExamples`,mZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Theming"}),r.jsxs("p",{className:"large",children:["The components can be themed using"," ",r.jsx("a",{href:"https://abw.github.io/react-one-louder/",children:"react-one-louder"}),"."]}),r.jsxs("p",{children:["This allows you to define a theme that provides default properties for the various components in the library. Import the ",r.jsx("code",{children:"Theme"})," component and define a"," ",r.jsx("code",{children:"Theme.Provider"})," around your app or a section of it. Pass it your theme configuration as its properties."]}),r.jsxs("p",{children:["Any components rendered inside the provider context will use the default properties that you have defined.  In the example below we set the default ",r.jsx("code",{children:"placeholder"})," for the ",r.jsx("code",{children:"Select"})," ","component, and default ",r.jsx("code",{children:"color"})," and ",r.jsx("code",{children:"iconRight"})," properties for the ",r.jsx("code",{children:"Button"})," component. These are only default values and can be overridden by providing a component with specific values, as shown for the second button in the example."]}),r.jsx(ne,{Component:pZ,code:hZ,expand:!0})]}),fZ=Object.freeze(Object.defineProperty({__proto__:null,default:mZ},Symbol.toStringTag,{value:"Module"})),Ud=({border:e})=>{const t=So(e);return r.jsx("div",{className:t,children:t})},xZ=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(Ud,{}),r.jsx(Ud,{border:!0}),r.jsx(Ud,{border:2})]}),gZ=`import { borderClass } from '@/src/index.jsx'

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

export default BorderClassExamples`,d6=()=>r.jsx(k,{code:"borderClass",Component:xZ,Source:gZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"borderClass"})," utility function can be used to construct a CSS class for adding a border.  If the argument is a true value then it will return the ",r.jsx("code",{children:"border"})," CSS class.  If the value is a number then it will add the corresponding ",r.jsx("code",{children:"bdw-N"})," class to set the border width."]})}),vZ=Object.freeze(Object.defineProperty({__proto__:null,default:d6},Symbol.toStringTag,{value:"Module"})),bZ=()=>r.jsxs("div",{children:[r.jsx("div",{children:he("foo","bar","baz")}),r.jsx("div",{children:he("foo",null,"bar",void 0,"baz")}),r.jsx("div",{children:he("foo",{active:!1,example:!0})})]}),jZ=`import { classes } from '@/src/index.jsx'

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

export default ClassesExamples`,u6=()=>r.jsxs(k,{code:"classes",Component:bZ,Source:jZ,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"classes"})," utility function can be used to construct a single CSS class string from various input values."]}),r.jsx("p",{children:"Any null or undefined values will be ignored. If any argument is an object then the keys in the object will be included if the corresponding value is truthy."})]}),yZ=Object.freeze(Object.defineProperty({__proto__:null,default:u6},Symbol.toStringTag,{value:"Module"})),es=({color:e})=>{const t=Eh(e);return r.jsxs("div",{className:`pad-4 border bdc-50 ${t}`,children:["colorClass: ",t]})},SZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(es,{}),r.jsx(es,{color:"red"}),r.jsx(es,{color:"red-50"}),r.jsx(es,{color:"red-20-80"}),r.jsx(es,{color:"red-20-80-80-20"})]}),CZ=`import { colorClass } from '@/src/index.jsx'

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

export default ColorClassExamples`,p6=()=>r.jsx(k,{code:"colorClass",Component:SZ,Source:CZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"colorClass"})," utility function can be used to construct a CSS class for defining colors.  The format for the argument is a color range name optionally followed by one to four color stop numbers, separated by hyphens.  The first number is the foreground color stop, used to add an ",r.jsx("code",{children:"fgc-N"})," CSS class. The second in the background color stop, adding a ",r.jsx("code",{children:"bgc-N"})," class.  The third and fourth numbers are the foreground and background color stops in dark mode, adding "," ",r.jsx("code",{children:"fgd-N"})," and ",r.jsx("code",{children:"bgd-N"})," classes respectively."]})}),wZ=Object.freeze(Object.defineProperty({__proto__:null,default:p6},Symbol.toStringTag,{value:"Module"})),Bo=({margin:e})=>{const t=Xg(e);return r.jsx("div",{className:"bgc-50",children:r.jsxs("div",{className:`border bgc-90 ${t}`,children:["marginClass: ",t]})})},_Z=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Bo,{}),r.jsx(Bo,{margin:!0}),r.jsx(Bo,{margin:2}),r.jsx(Bo,{margin:"h-4"}),r.jsx(Bo,{margin:"2 4"}),r.jsx(Bo,{margin:"1 2 3 4"})]}),TZ=`import { marginClass } from '@/src/index.jsx'

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

export default MarginClassExamples`,h6=()=>r.jsx(k,{code:"marginClass",Component:_Z,Source:TZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"marginClass"})," utility function can be used to construct a CSS class for adding padding.  It works in the same way as ",r.jsx("code",{children:"paddingClass"}),"."]})}),kZ=Object.freeze(Object.defineProperty({__proto__:null,default:h6},Symbol.toStringTag,{value:"Module"})),$o=({padding:e})=>{const t=qg(e);return r.jsxs("div",{className:`border ${t}`,children:["paddingClass: ",t]})},EZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx($o,{}),r.jsx($o,{padding:!0}),r.jsx($o,{padding:2}),r.jsx($o,{padding:"h-4"}),r.jsx($o,{padding:"2 4"}),r.jsx($o,{padding:"1 2 3 4"})]}),NZ=`import { paddingClass } from '@/src/index.jsx'

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

export default PaddingClassExamples`,m6=()=>r.jsxs(k,{code:"paddingClass",Component:EZ,Source:NZ,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"paddingClass"})," utility function can be used to construct a CSS class for adding padding.  If the value is true then the"," ",r.jsx("code",{children:"pad"})," CSS class will be returned, adding a single unit (0.25rem) of padding to all sides of the element."]}),r.jsxs("p",{children:["If the value contains two whitespace delimited values then they are assumed to be vertical and horizontal padding values and a class of the form ",r.jsx("code",{children:"pad-v-N pad-h-N"})," will be returned."]}),r.jsxs("p",{children:["If the value contains four whitespace delimited values then they are assumed to be padding values for the top, right, bottom and left edges. A CSS class of the form ",r.jsx("code",{children:"pad-t-N pad-r-N pad-b-N pad-l-N"})," will be returned."]}),r.jsxs("p",{children:["In any other case the value will be prepended by ",r.jsx("code",{children:"pad-"}),". A null or undefine value will return nothing."]})]}),RZ=Object.freeze(Object.defineProperty({__proto__:null,default:m6},Symbol.toStringTag,{value:"Module"})),di=({radius:e})=>{const t=_a(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["radiusClass: ",t]})},OZ=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(di,{}),r.jsx(di,{radius:1}),r.jsx(di,{radius:2}),r.jsx(di,{radius:4})]}),DZ=`import { radiusClass } from '@/src/index.jsx'

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

export default RadiusClassExamples`,f6=()=>r.jsx(k,{code:"radiusClass",Component:OZ,Source:DZ,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radiusClass"})," utility function can be used to construct a CSS class for adding a border radius.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"bdr-N"})," class to set the border radius."]})}),LZ=Object.freeze(Object.defineProperty({__proto__:null,default:f6},Symbol.toStringTag,{value:"Module"})),ui=({shadow:e})=>{const t=wa(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["shadowClass: ",t]})},BZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(ui,{}),r.jsx(ui,{shadow:1}),r.jsx(ui,{shadow:2}),r.jsx(ui,{shadow:4})]}),$Z=`import { shadowClass } from '@/src/index.jsx'

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

export default ShadowClassExamples`,x6=()=>r.jsx(k,{code:"shadowClass",Component:BZ,Source:$Z,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadowClass"})," utility function can be used to construct a CSS class for adding a box shadow.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"shadow-N"})," class to set the box shadow."]})}),AZ=Object.freeze(Object.defineProperty({__proto__:null,default:x6},Symbol.toStringTag,{value:"Module"})),pi=e=>{const t=ow(e);return r.jsxs("div",{...t,children:["styleProps: ",JSON.stringify(t)]})},MZ=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(pi,{}),r.jsx(pi,{size:"large"}),r.jsx(pi,{color:"red-50"}),r.jsx(pi,{className:"my-special-class",color:"red",border:!0,radius:2,shadow:2,padding:"2 4"})]}),PZ=`import { styleProps } from '@/src/index.jsx'

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

export default StylePropsExamples`,g6=()=>r.jsxs(k,{code:"styleProps",Component:MZ,Source:PZ,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"styleProps"})," utility function can be used to extract any of the above style properties and generate the corresponding CSS class as the ",r.jsx("code",{children:"className"})," property.  Any other properties will be passed through."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"padding"})," and ",r.jsx("code",{children:"margin"})," properties may be abbreviated to ",r.jsx("code",{children:"pad"})," and ",r.jsx("code",{children:"mar"})," respectively."]})]}),IZ=Object.freeze(Object.defineProperty({__proto__:null,default:g6},Symbol.toStringTag,{value:"Module"})),zZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"CSS Classes"}),r.jsxs(He,{tocName:"classes",children:[r.jsx(u6,{}),r.jsx(d6,{}),r.jsx(f6,{}),r.jsx(x6,{}),r.jsx(p6,{}),r.jsx(m6,{}),r.jsx(h6,{}),r.jsx(g6,{})]})]}),FZ=Object.freeze(Object.defineProperty({__proto__:null,default:zZ},Symbol.toStringTag,{value:"Module"})),UZ=()=>{const e=o3("unique-key"),[t,n]=G.useState(e.get("form-values")),[o,a]=G.useState(),s=c=>{a(c),Pr(3e3).then(()=>a(null))},l=c=>(e.set("form-values",c),s("Form values have been stored in local storage"),{ok:!0}),i=()=>{e.delete("form-values"),n(null),s("Form values have been removed from local storage")};return r.jsxs("div",{children:[r.jsxs(ar,{values:t,onSubmit:l,onReset:i,children:[r.jsx(st,{name:"name",label:"Your name"}),r.jsx(st,{name:"email",label:"Your email address"}),r.jsxs("div",{className:"flex space",children:[r.jsx(a0,{color:"grey outline",text:"Clear",iconRight:"cross"}),r.jsx(yl,{color:"green",text:"Save",iconRight:"check"})]})]}),o&&r.jsx(Qo,{text:o,className:"mar-t-4"})]})},VZ=`import { Storage, Form, Field, Reset, Submit, Success } from '@/src/index.jsx'

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

export default StorageExample`,v6=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Storage"})," utility can be used to manage local storage to persist UI options or other data."]}),r.jsxs("p",{children:["Call the ",r.jsx("code",{children:"Storage"})," function with a unique key to create a local store.  Then call the ",r.jsx("code",{children:"get"})," method on that object to fetch an item from the store, ",r.jsx("code",{children:"set"})," to set the value for an item or ",r.jsx("code",{children:"delete"})," to delete an item from the store."]}),r.jsx("p",{children:"Store values can be complex data which will be automatically converted to and from JSON."}),r.jsx("p",{children:"Enter some details in the form below and click on the save button. The form values will then be stored in local storage.  Reload the browser page and you should see the values persist."}),r.jsx(ne,{Component:UZ,code:VZ,expand:!0})]}),HZ=Object.freeze(Object.defineProperty({__proto__:null,default:v6},Symbol.toStringTag,{value:"Module"})),WZ=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Storage"}),r.jsx(v6,{})]}),ZZ=Object.freeze(Object.defineProperty({__proto__:null,default:WZ},Symbol.toStringTag,{value:"Module"})),b6=({path:e,onClick:t,width:n=512,height:o=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),KZ=e=>r.jsx(b6,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),j6=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:a,className:o}),!!t&&r.jsx("div",{className:i,style:s,children:t})]}),YZ=e=>{const{setDark:t}=Tl();return r.jsx(j6,{Icon:KZ,onClick:t,...e})},GZ=e=>r.jsx(b6,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),qZ=e=>{const{setLight:t}=Tl();return r.jsx(j6,{Icon:GZ,onClick:t,...e})},XZ=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:a}=Tl();return n?r.jsx(qZ,{onClick:a,...e}):r.jsx(YZ,{onClick:o,...t})},y6=v.createContext(),Tl=()=>v.useContext(y6),hi="dark",Vd="light",QZ="(prefers-color-scheme: dark)",Hd=()=>!1,JZ=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},eK=()=>({matches:Hd,addEventListener:Hd,removeEventListener:Hd}),S6=typeof window<"u",Wd=S6&&window.localStorage?window.localStorage:JZ(),tK=S6&&window.matchMedia?e=>window.matchMedia(e):eK,np=tK(QZ),nK=()=>np.matches,rK=e=>e.split(" "),P1=(e,t="")=>`${e} ${t}`,oK=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?Wd.getItem(e):null,[a,s=""]=o?rK(o):[nK(),null],[l,i]=v.useState(a===hi),[c,d]=v.useState(s||t),u=y=>{i(y),e&&Wd.setItem(e,P1(y?hi:Vd,c))},p=y=>{d(y),e&&Wd.setItem(e,P1(l?hi:Vd,y))},f=y=>u(y.matches);v.useEffect(()=>(np.addEventListener("change",f),()=>np.removeEventListener("change",f)),[]);const b={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?hi:Vd,variant:c,setVariant:p};return r.jsx(y6.Provider,{value:b,children:n})},C6="0.2.2",aK="2024-04-07",I1="sidebar",sK="no-sidebar",lK=()=>{const{variant:e,setVariant:t}=Tl();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(te,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===I1?sK:I1)}),r.jsx(Ln,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",C6]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(te,{name:"github",className:"mar-r-4"})}),r.jsx(XZ,{})]})]})})},iK=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",C6,r.jsx("br",{}),aK]})]})}),cK=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=o.ref.current)==null?void 0:a.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),dK=Sl.Consumer(cK),uK=({title:e,path:t,items:n,tocs:o})=>{const a=_l(),s=t&&a.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:s,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return r.jsxs("li",{children:[r.jsx(Ln,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(dK,{toc:o[l.tocName]})]},l.to)})})]})},mi=Sl.Consumer(uK),pK={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},hK={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/badge",text:"Badge",tocName:"badge"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"},{to:"/components/tabset",text:"Tabset",tocName:"tabset"}]},mK={title:"Utilities",path:"/utilities",items:[{to:"/utilities/classes",text:"CSS Classes",tocName:"classes"},{to:"/utilities/storage",text:"Storage",tocName:"storage"}]},fK={title:"Theming",path:"/theming",items:[{to:"/theming",text:"It's One Louder",tocName:"theming"}]},xK=()=>r.jsxs(r.Fragment,{children:[r.jsx(mi,{...pK}),r.jsx(mi,{...hK}),r.jsx(mi,{...mK}),r.jsx(mi,{...fK})]});function gK(){const{pathname:e}=$a();return v.useEffect(()=>vK(document.getElementById("content")),[e]),null}function vK(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const bK=({contentRef:e})=>{const{theme:t,variant:n}=Tl();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(lK,{}),r.jsxs("div",{id:"app",children:[r.jsx(gK,{}),r.jsx("aside",{children:r.jsx(xK,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(WM,{})})]}),r.jsx(iK,{})]})},jK=Sl.Consumer(bK),yK=/\/_layout$/,SK=/\/_examples\//,CK=wK(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":cO,"../pages/components/alert/_examples/Error/index.jsx":fO,"../pages/components/alert/_examples/Info/index.jsx":vO,"../pages/components/alert/_examples/Success/index.jsx":yO,"../pages/components/alert/_examples/Warning/index.jsx":wO,"../pages/components/alert/_examples/border/index.jsx":kO,"../pages/components/alert/_examples/className/index.jsx":RO,"../pages/components/alert/_examples/color/index.jsx":LO,"../pages/components/alert/_examples/dismissable/index.jsx":AO,"../pages/components/alert/_examples/headIcon/index.jsx":IO,"../pages/components/alert/_examples/headline/index.jsx":UO,"../pages/components/alert/_examples/icon/index.jsx":WO,"../pages/components/alert/_examples/onDismiss/index.jsx":YO,"../pages/components/alert/_examples/radius/index.jsx":XO,"../pages/components/alert/_examples/revealable/index.jsx":eD,"../pages/components/alert/_examples/revealed/index.jsx":rD,"../pages/components/alert/_examples/shadow/index.jsx":sD,"../pages/components/alert/_examples/size/index.jsx":cD,"../pages/components/alert/_examples/stripe/index.jsx":pD,"../pages/components/alert/_examples/text/index.jsx":fD,"../pages/components/alert/_examples/title/index.jsx":vD,"../pages/components/alert/_examples/type/index.jsx":yD,"../pages/components/alert/index.jsx":wD,"../pages/components/badge/_examples/Badge/index.jsx":kD,"../pages/components/badge/_examples/Content/index.jsx":RD,"../pages/components/badge/_examples/border/index.jsx":LD,"../pages/components/badge/_examples/className/index.jsx":AD,"../pages/components/badge/_examples/color/index.jsx":ID,"../pages/components/badge/_examples/icon/index.jsx":UD,"../pages/components/badge/_examples/iconLeft/index.jsx":WD,"../pages/components/badge/_examples/iconRight/index.jsx":YD,"../pages/components/badge/_examples/radius/index.jsx":XD,"../pages/components/badge/_examples/shadow/index.jsx":eL,"../pages/components/badge/_examples/size/index.jsx":rL,"../pages/components/badge/_examples/tag/index.jsx":sL,"../pages/components/badge/_examples/text/index.jsx":cL,"../pages/components/badge/_examples/tooltip/index.jsx":pL,"../pages/components/badge/index.jsx":mL,"../pages/components/button/_examples/Button/index.jsx":gL,"../pages/components/button/_examples/Content/index.jsx":jL,"../pages/components/button/_examples/bare/index.jsx":CL,"../pages/components/button/_examples/border/index.jsx":TL,"../pages/components/button/_examples/bright/index.jsx":NL,"../pages/components/button/_examples/className/index.jsx":DL,"../pages/components/button/_examples/color/index.jsx":$L,"../pages/components/button/_examples/dark/index.jsx":PL,"../pages/components/button/_examples/disabled/index.jsx":FL,"../pages/components/button/_examples/icon/index.jsx":HL,"../pages/components/button/_examples/iconLeft/index.jsx":KL,"../pages/components/button/_examples/iconRight/index.jsx":qL,"../pages/components/button/_examples/label/index.jsx":JL,"../pages/components/button/_examples/onClick/index.jsx":nB,"../pages/components/button/_examples/outline/index.jsx":aB,"../pages/components/button/_examples/radius/index.jsx":iB,"../pages/components/button/_examples/shaded/index.jsx":uB,"../pages/components/button/_examples/shadow/index.jsx":mB,"../pages/components/button/_examples/size/index.jsx":gB,"../pages/components/button/_examples/text/index.jsx":jB,"../pages/components/button/_examples/tooltip/index.jsx":CB,"../pages/components/button/_examples/type/index.jsx":TB,"../pages/components/button/index.jsx":EB,"../pages/components/buttons/_examples/Button/index.jsx":DB,"../pages/components/buttons/_examples/Buttons/index.jsx":$B,"../pages/components/buttons/_examples/buttonClass/index.jsx":PB,"../pages/components/buttons/_examples/buttonsProp/index.jsx":FB,"../pages/components/buttons/_examples/className/index.jsx":HB,"../pages/components/buttons/_examples/outline/index.jsx":KB,"../pages/components/buttons/index.jsx":GB,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":QB,"../pages/components/checkbox/_examples/Overview/index.jsx":t$,"../pages/components/checkbox/_examples/border/index.jsx":o$,"../pages/components/checkbox/_examples/checked/index.jsx":l$,"../pages/components/checkbox/_examples/checkedText/index.jsx":d$,"../pages/components/checkbox/_examples/className/index.jsx":h$,"../pages/components/checkbox/_examples/disabled/index.jsx":x$,"../pages/components/checkbox/_examples/onChange/index.jsx":b$,"../pages/components/checkbox/_examples/text/index.jsx":S$,"../pages/components/checkbox/index.jsx":w$,"../pages/components/confirm/_examples/Overview/index.jsx":k$,"../pages/components/confirm/_examples/cancel/index.jsx":R$,"../pages/components/confirm/_examples/cancelProps/index.jsx":L$,"../pages/components/confirm/_examples/className/index.jsx":A$,"../pages/components/confirm/_examples/color/index.jsx":I$,"../pages/components/confirm/_examples/confirm/index.jsx":U$,"../pages/components/confirm/_examples/confirmProps/index.jsx":W$,"../pages/components/confirm/_examples/iconRight/index.jsx":Y$,"../pages/components/confirm/_examples/onClick/index.jsx":X$,"../pages/components/confirm/_examples/text/index.jsx":eA,"../pages/components/confirm/index.jsx":nA,"../pages/components/datatable/_examples/Datatable/index.jsx":aA,"../pages/components/datatable/_examples/color/index.jsx":iA,"../pages/components/datatable/_examples/columns/className/index.jsx":pA,"../pages/components/datatable/_examples/columns/display/index.jsx":fA,"../pages/components/datatable/_examples/columns/index.jsx":TA,"../pages/components/datatable/_examples/columns/label/index.jsx":NA,"../pages/components/datatable/_examples/columns/type/index.jsx":DA,"../pages/components/datatable/_examples/onRowClick/index.jsx":$A,"../pages/components/datatable/_examples/pager/index.jsx":fP,"../pages/components/datatable/_examples/rows/index.jsx":gP,"../pages/components/datatable/_examples/storageKey/index.jsx":jP,"../pages/components/datatable/index.jsx":SP,"../pages/components/details/_examples/Details/index.jsx":_P,"../pages/components/details/_examples/border/index.jsx":EP,"../pages/components/details/_examples/color/index.jsx":OP,"../pages/components/details/_examples/content/index.jsx":BP,"../pages/components/details/_examples/lined/index.jsx":MP,"../pages/components/details/_examples/open/index.jsx":zP,"../pages/components/details/_examples/radius/index.jsx":VP,"../pages/components/details/_examples/shaded/index.jsx":ZP,"../pages/components/details/_examples/shadow/index.jsx":GP,"../pages/components/details/_examples/summary/index.jsx":QP,"../pages/components/details/index.jsx":eI,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":rI,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":sI,"../pages/components/dropdown-menu/_examples/options/index.jsx":gI,"../pages/components/dropdown-menu/index.jsx":bI,"../pages/components/dropdown/_examples/Dropdown/index.jsx":SI,"../pages/components/dropdown/_examples/content/index.jsx":_I,"../pages/components/dropdown/_examples/iconLeft/index.jsx":EI,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":OI,"../pages/components/dropdown/_examples/iconRight/index.jsx":BI,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":MI,"../pages/components/dropdown/_examples/openOnHover/index.jsx":zI,"../pages/components/dropdown/_examples/right/index.jsx":VI,"../pages/components/dropdown/_examples/text/index.jsx":ZI,"../pages/components/dropdown/_examples/wide/index.jsx":GI,"../pages/components/dropdown/index.jsx":XI,"../pages/components/form/_examples/search/index.jsx":sz,"../pages/components/form/_examples/submitting/custom.jsx":iz,"../pages/components/form/_examples/submitting/defaults.jsx":dz,"../pages/components/form/_examples/submitting/index.jsx":hz,"../pages/components/form/_examples/uiselect/index.jsx":jz,"../pages/components/form/index.jsx":Ez,"../pages/components/icon/_examples/Icon/index.jsx":Az,"../pages/components/icon/_examples/IconLibrary/index.jsx":Mz,"../pages/components/icon/_examples/className/index.jsx":zz,"../pages/components/icon/_examples/color/index.jsx":Vz,"../pages/components/icon/_examples/name/index.jsx":Zz,"../pages/components/icon/_examples/path/index.jsx":Gz,"../pages/components/icon/_examples/size/index.jsx":Qz,"../pages/components/icon/index.jsx":eF,"../pages/components/modal/_examples/Modal/index.jsx":rF,"../pages/components/modal/_examples/ModalState/index.jsx":sF,"../pages/components/modal/_examples/className/index.jsx":cF,"../pages/components/modal/_examples/close/index.jsx":pF,"../pages/components/modal/_examples/closeIcon/index.jsx":fF,"../pages/components/modal/_examples/footer/index.jsx":vF,"../pages/components/modal/_examples/header/index.jsx":yF,"../pages/components/modal/_examples/text/index.jsx":wF,"../pages/components/modal/_examples/title/index.jsx":kF,"../pages/components/modal/index.jsx":NF,"../pages/components/overlay/_examples/Overlay/index.jsx":DF,"../pages/components/overlay/_examples/OverlayState/index.jsx":$F,"../pages/components/overlay/_examples/className/index.jsx":IF,"../pages/components/overlay/_examples/custom/index.jsx":UF,"../pages/components/overlay/_examples/fixed/index.jsx":WF,"../pages/components/overlay/_examples/theme/index.jsx":qF,"../pages/components/overlay/index.jsx":QF,"../pages/components/pager/_examples/Context/index.jsx":rU,"../pages/components/pager/_examples/Pager/index.jsx":sU,"../pages/components/pager/_examples/className/index.jsx":cU,"../pages/components/pager/_examples/color/index.jsx":pU,"../pages/components/pager/_examples/icons/index.jsx":fU,"../pages/components/pager/_examples/nextIcon/index.jsx":bU,"../pages/components/pager/_examples/showFirstLast/index.jsx":SU,"../pages/components/pager/_examples/size/index.jsx":_U,"../pages/components/pager/index.jsx":kU,"../pages/components/radio/_examples/Overview/index.jsx":RU,"../pages/components/radio/_examples/border/index.jsx":LU,"../pages/components/radio/_examples/className/index.jsx":AU,"../pages/components/radio/_examples/disabled/index.jsx":IU,"../pages/components/radio/_examples/inline/index.jsx":UU,"../pages/components/radio/_examples/name/index.jsx":WU,"../pages/components/radio/_examples/onChange/index.jsx":YU,"../pages/components/radio/_examples/options/index.jsx":XU,"../pages/components/radio/_examples/value/index.jsx":eV,"../pages/components/radio/index.jsx":nV,"../pages/components/search/_examples/Search/index.jsx":sV,"../pages/components/search/_examples/clear/index.jsx":dV,"../pages/components/search/_examples/displayResult/index.jsx":mV,"../pages/components/search/_examples/displayValue/index.jsx":vV,"../pages/components/search/_examples/onSearch/index.jsx":SV,"../pages/components/search/_examples/onSelect/index.jsx":TV,"../pages/components/search/_examples/reset/index.jsx":RV,"../pages/components/search/index.jsx":DV,"../pages/components/select/_examples/Select/index.jsx":AV,"../pages/components/select/_examples/displayOption/index.jsx":zV,"../pages/components/select/_examples/displayValue/index.jsx":HV,"../pages/components/select/_examples/options/index.jsx":YV,"../pages/components/select/_examples/search/index.jsx":tH,"../pages/components/select/_examples/searchOptions/index.jsx":lH,"../pages/components/select/_examples/validOption/index.jsx":uH,"../pages/components/select/_examples/value/index.jsx":vH,"../pages/components/select/index.jsx":jH,"../pages/components/sortable/_examples/Horizontal/index.jsx":CH,"../pages/components/sortable/_examples/Sortable/index.jsx":TH,"../pages/components/sortable/_examples/Vertical/index.jsx":NH,"../pages/components/sortable/index.jsx":OH,"../pages/components/spinner/_examples/Spinner/index.jsx":BH,"../pages/components/spinner/_examples/bgColor/index.jsx":MH,"../pages/components/spinner/_examples/bgFill/index.jsx":zH,"../pages/components/spinner/_examples/bgFillStop/index.jsx":VH,"../pages/components/spinner/_examples/bgIcon/index.jsx":ZH,"../pages/components/spinner/_examples/bgStroke/index.jsx":GH,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":QH,"../pages/components/spinner/_examples/color/index.jsx":tW,"../pages/components/spinner/_examples/fill/index.jsx":oW,"../pages/components/spinner/_examples/fillStop/index.jsx":lW,"../pages/components/spinner/_examples/icon/index.jsx":dW,"../pages/components/spinner/_examples/reverse/index.jsx":hW,"../pages/components/spinner/_examples/shrink/index.jsx":xW,"../pages/components/spinner/_examples/size/index.jsx":bW,"../pages/components/spinner/_examples/stroke/index.jsx":SW,"../pages/components/spinner/_examples/strokeStop/index.jsx":_W,"../pages/components/spinner/index.jsx":kW,"../pages/components/tabset/_examples/Tabset/index.jsx":RW,"../pages/components/tabset/_examples/center/index.jsx":LW,"../pages/components/tabset/_examples/color/index.jsx":AW,"../pages/components/tabset/_examples/lined/index.jsx":IW,"../pages/components/tabset/_examples/right/index.jsx":UW,"../pages/components/tabset/_examples/size/index.jsx":WW,"../pages/components/tabset/_examples/solid/index.jsx":YW,"../pages/components/tabset/_examples/tabs/index.jsx":QW,"../pages/components/tabset/index.jsx":eZ,"../pages/getting-started/installation.jsx":lZ,"../pages/index.jsx":uZ,"../pages/theming/index.jsx":fZ,"../pages/utilities/classes/_examples/borderClass/index.jsx":vZ,"../pages/utilities/classes/_examples/classes/index.jsx":yZ,"../pages/utilities/classes/_examples/colorClass/index.jsx":wZ,"../pages/utilities/classes/_examples/marginClass/index.jsx":kZ,"../pages/utilities/classes/_examples/paddingClass/index.jsx":RZ,"../pages/utilities/classes/_examples/radiusClass/index.jsx":LZ,"../pages/utilities/classes/_examples/shadowClass/index.jsx":AZ,"../pages/utilities/classes/_examples/styleProps/index.jsx":IZ,"../pages/utilities/classes/index.jsx":FZ,"../pages/utilities/storage/_examples/Storage/index.jsx":HZ,"../pages/utilities/storage/index.jsx":ZZ}));function wK(e){const n=Object.entries(e).map(_K).filter(a=>!a.path.match(SK)).reduce((a,s)=>(a[s.path]=s,a),{}),o=Object.keys(n).filter(a=>a.match(yK)).sort((a,s)=>s.length-a.length);for(let a of o){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function _K([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const TK=QM([{path:"/",element:r.jsx(jK,{}),children:CK}],{basename:"/badger-react-ui"});Zd.createRoot(document.getElementById("root")).render(r.jsx(G.StrictMode,{children:r.jsx(oK,{storageKey:"theme",children:r.jsx(Sl.Provider,{children:r.jsx(sP,{router:TK})})})}));
